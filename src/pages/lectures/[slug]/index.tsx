/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import SEO from "components/seo";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import type { SlugStaticParams } from "interfaces/interfaces";
import {
	getAllCollectionSlugs,
	getPostBySlug,
	getWebPathFromSlug,
	unifiedMarkdownToHtml,
} from "lib/api";
import Link from "next/link";

export async function getStaticPaths() {
	const paths = getAllCollectionSlugs("lectures").map((slug) => ({
		params: {
			slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export const getStaticProps = async ({
	params,
}: GetStaticPropsContext<SlugStaticParams>) => {
	const post = getPostBySlug((params as SlugStaticParams).slug, "lectures");

	return {
		props: {
			...post,
			content: await unifiedMarkdownToHtml(post.content),
			path: getWebPathFromSlug((params as SlugStaticParams).slug, "lecture"),
		},
	};
};

export default function Slug({
	content,
	frontmatter,
	documents,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<SEO title="Blog" />

			<div className="header">
				<Link href="/">
					<a>/home</a>
				</Link>
				<h1>{frontmatter.name}</h1>
				<p>
					{new Date(frontmatter.date).toLocaleDateString("en-GB", {
						weekday: "long",
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</p>
				<p>{frontmatter.description}</p>

				{/* {documents.lecture ? (
					<>
						{" "}
						<a href={`/${documents.lecture}`} download>
							Download this lecture's PDF document
						</a>
						<br />
					</>
				) : null} */}

				{/* {documents.slides ? (
					<>
						{" "}
						<a href={`/${documents.slides}`} download>
							Download this lecture's PDF presentation
						</a>
						<br />
					</>
				) : null} */}
			</div>

			<hr />

			<div dangerouslySetInnerHTML={{ __html: content }} />
		</>
	);
}

export const config = {
	unstable_runtimeJS: false,
};
