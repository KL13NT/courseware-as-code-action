import React from "react";

import { getAllCollectionSlugs, getPostBySlug } from "lib/api.js";

import { Marp } from "@marp-team/marp-core";
import type { SlugStaticParams } from "interfaces/interfaces";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";

export async function getStaticPaths() {
	const paths = getAllCollectionSlugs("slides").map((slug) => ({
		params: {
			slug,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({
	params,
}: GetStaticPropsContext<SlugStaticParams>) {
	const { slug } = params as SlugStaticParams;
	const post = getPostBySlug(slug, "slides");
	const marp = new Marp(/* marpConstructorOptions ||  */ {}); // TODO: enable marp customization

	const { html, css } = marp.render(post.original);

	return {
		props: {
			html,
			css,
		},
	};
}

export default function Slug({
	html,
	css,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<style>{css}</style>

			<div dangerouslySetInnerHTML={{ __html: html }} />
		</>
	);
}

export const config = {
	unstable_runtimeJS: false,
};
