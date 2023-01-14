import path from "path";
import fs from "fs";
import puppeteer from "puppeteer";
import { Marp } from "@marp-team/marp-core";
import * as core from "@actions/core";

import { generatePdfFilename, sequentialPromises } from "../lib/utils";
import { getAllSlides } from "../lib/api";

import { SLIDES_DIR, TEMP_DIR } from "../lib/constants";
import type { GenerateStaticResult } from "interfaces/interfaces";
import { ContentType } from "interfaces/interfaces";

const courseCode = core.getInput("courseCode");

export const generatePresentations = async () => {
	if (!fs.existsSync(SLIDES_DIR)) return core.info("No presentations found.");

	const browser = await puppeteer.launch({
		headless: true,
		defaultViewport: {
			width: 1280,
			height: 720,
		},
	});
	const page = await browser.newPage();
	const marp = new Marp({}); // TODO: add marp options

	const presentations: GenerateStaticResult[] = [];
	const promises = getAllSlides(true).map((post) => async () => {
		const { original } = post;

		core.info(`generating pdf file ${post.frontmatter.name}`);

		const { html, css } = marp.render(original);
		await page.setContent(html);
		await page.addStyleTag({ content: css });

		const pdf = await page.pdf({
			preferCSSPageSize: true,
			printBackground: true,
			displayHeaderFooter: false,
		});

		presentations.push({
			pdf,
			...post,
		});
	});

	await sequentialPromises(promises);
	for (const presentation of presentations) {
		const { pdf, slug } = presentation;

		const filename = generatePdfFilename(courseCode, slug, ContentType.SLIDES);
		core.info(`writing output pdf file ${TEMP_DIR}, ${filename}`);

		fs.writeFileSync(path.resolve(TEMP_DIR, filename), pdf);
	}

	await browser.close();
};
