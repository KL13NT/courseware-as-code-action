/**
 * This file contains functionality related to aggregating content and
 * turning it into a nextjs-compatible format for getStaticProps and
 * getStaticPaths as well as transforming markdown to html
 */
import * as core from "@actions/core";
import React from "react";
import { readFileSync, readdirSync, existsSync, stat, statSync } from "fs";
import { resolve } from "path";

const highlightLanguages = core.getMultilineInput("highlightLanguages");
const { courseCode } = config;

import matter from "gray-matter";
import unified from "unified";
// @ts-ignore
import markdown from "remark-parse";
import math from "remark-math";
// @ts-ignore
import remark2rehype from "remark-rehype";
// @ts-ignore
import katex from "rehype-katex";
import stringify from "rehype-stringify";
// @ts-ignore
import highlight from "rehype-highlight";
import embed from "./embed";

import { generateHighlightLanguages, generatePdfFilename } from "./utils";
import { COLLECTIONS_DIR } from "./constants";

import { ContentType, Post, PostFrontmatter } from "interfaces/interfaces";

import { config } from "./config";

export function getAllCollectionSlugs(collection: string) {
	return readdirSync(resolve(COLLECTIONS_DIR, collection))
		.filter((path) => path.endsWith(".md"))
		.map((slug) => slug.replace(".md", ""));
}

// TODO: change ordering of args
export function getFSPathFromSlug(slug: string, collection: string) {
	return resolve(COLLECTIONS_DIR, collection, `${slug}.md`);
}

export function getWebPathFromSlug(slug: string, collection: string) {
	return `${collection}/${slug.replace(".md", "")}`;
}

export function getPostBySlug(slug: string, collection: string): Post {
	const filePath = getFSPathFromSlug(slug, collection);
	const stats = statSync(filePath);
	const file = readFileSync(filePath);

	const parsed = matter(file);
	const frontmatter = parsed.data as Omit<PostFrontmatter, "date">;
	const content = parsed.content;

	return {
		frontmatter: {
			...frontmatter,
			date: new Date(stats.birthtime).toJSON(),
		},
		content: content,
		slug, // filename without .md
		documents: {
			lecture: generatePdfFilename(courseCode, slug, ContentType.LECTURE),
			// slides: existsSync(resolve(COLLECTIONS_DIR, "slides", `${slug}.md`))
			// 	? generatePdfFilename(courseCode, slug, ContentType.SLIDES)
			// 	: null,
		},
		path: getWebPathFromSlug(slug, collection), // web path
		dir: resolve(__dirname, COLLECTIONS_DIR, collection),
	};
}

export function getAllPosts() {
	const slugs = getAllCollectionSlugs("lectures");
	const posts = slugs
		.map((slug) => getPostBySlug(slug, "lectures"))
		.sort((post1, post2) => {
			const date1 = new Date(post1.frontmatter.date).getTime();
			const date2 = new Date(post2.frontmatter.date).getTime();

			return date1 > date2 ? 1 : -1;
		});

	return posts;
}

export function getAllSlides() {
	const slugs = getAllCollectionSlugs("slides");
	const posts = slugs
		.map((slug) => getPostBySlug(slug, "slides"))
		.sort((post1, post2) => {
			const date1 = new Date(post1.frontmatter.date).getTime();
			const date2 = new Date(post2.frontmatter.date).getTime();

			return date1 > date2 ? 1 : -1;
		});

	return posts;
}

/**
 * Produces a 1-to-1 Markdown-to-HTML output
 */
export const unifiedMarkdownToHtml = (content: string) =>
	unified()
		.use(markdown)
		.use(math)
		.use(remark2rehype)
		.use(katex)
		.use(stringify)
		.use(highlight, {
			// TODO: based on settings
			languages: generateHighlightLanguages(highlightLanguages),
		})
		.process(content)
		.then((file) => file.toString());
