import path, { resolve } from "path";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { launch } from "puppeteer";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import * as core from "@actions/core";

import { generatePdfFilename, sequentialPromises } from "../lib/utils";
import { getAllPosts, unifiedMarkdownToHtml } from "../lib/api";
import { htmlToPdf } from "../lib/htmlToPdf";
import { LECTURES_DIR, TEMP_DIR } from "../lib/constants";
import type { GenerateStaticResult } from "interfaces/interfaces";
import { ContentType } from "interfaces/interfaces";

const lectureStyles = [
	path.resolve(__dirname, "../styling/globals.css"),
	path.resolve(__dirname, "../styling/index.css"),
	path.resolve(__dirname, "../node_modules/katex/dist/katex.min.css"),
	path.resolve("node_modules/highlight.js/styles/shades-of-purple.css"),
];

const courseCode = core.getInput("courseCode");

export const generateLectures = async () => {
	if (!existsSync(LECTURES_DIR))
		throw new Error("No lectures found. You must create at least 1 lecture.");

	const browser = await launch();
	const page = await browser.newPage();

	// Reading style files and transforming them using postcss
	const styles = lectureStyles
		.map((file) => readFileSync(file, "utf-8"))
		.join("\n\n");

	const { css } = await postcss([
		tailwindcss(resolve(__dirname, "../tailwind.config.js")),
		autoprefixer,
	]).process(styles, {
		from: undefined,
	});

	const results: GenerateStaticResult[] = [];
	const promises = getAllPosts(true).map((post) => async () => {
		const { content, frontmatter } = post;
		const md = `# ${frontmatter.name}\n\n${frontmatter.description}\n\n---\n\n${content}`;

		const html = await unifiedMarkdownToHtml(md);

		core.info(`generating pdf file ${frontmatter.name}`);

		const pdf = await htmlToPdf({ page, html, css });

		results.push({
			pdf,
			...post,
		});
	});

	await sequentialPromises(promises);

	for (const result of results) {
		const { pdf, slug } = result;

		const filename = generatePdfFilename(courseCode, slug, ContentType.LECTURE);
		core.info(`writing output pdf file ${filename}`);

		writeFileSync(resolve(TEMP_DIR, filename), pdf);
	}

	await browser.close();
};
