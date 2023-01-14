/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import type { InferGetStaticPropsType } from "next";

import SEO from "components/seo";

import { getAllPosts } from "lib/api";
import { formatDate } from "lib/utils";

function Lectures({
	posts,
	config,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const { courseCode, courseName, courseDescription } = config;

	return (
		<>
			<SEO title="Blog" />
			<div className="header">
				<h1>
					{courseCode} - {courseName}
				</h1>
				<p>{courseDescription}</p>
			</div>
			<hr />
			<ul className="list-none">
				{posts.map(({ frontmatter, path }) => (
					<li key={frontmatter.name}>
						<Link href={path}>
							<a>
								<h2>{frontmatter.name}</h2>
							</a>
						</Link>

						<p>{formatDate(frontmatter.date)}</p>

						<p>{frontmatter.description}</p>

						<hr />
					</li>
				))}
			</ul>
		</>
	);
}

export async function getStaticProps() {
	const posts = getAllPosts();
	const { config } = await import("lib/config");

	return {
		props: {
			config,
			posts,
		},
	};
}

export const config = {
	unstable_runtimeJS: false,
};

export default Lectures;
