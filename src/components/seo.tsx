import { config } from "lib/config";
import Head from "next/head";
import React from "react";

const { courseName, campusName, courseDescription, campusWebsite } = config;

const URL = campusWebsite;
const TITLE = courseName;
const DESCRIPTION = courseDescription;
const OG_TYPE = "website";
const OG_IMAGE = null;
const SITENAME = courseName;
const TWITTER_CREATOR = campusName;

interface SEOProps {
	title: string;
}

export default function SEO({ title = TITLE }: SEOProps) {
	return (
		<Head>
			<title>{title}</title>

			<meta content={title} property="og:title" />
			<meta content={OG_TYPE} property="og:type" />
			<meta content={DESCRIPTION} name="description" />
			<meta content={DESCRIPTION} property="og:description" />
			<meta content={URL} property="og:URL" />
			<meta content={SITENAME} property="og:site_name" />
			<meta content={"image/jpeg"} property="og:image:type" />
			<meta content="summary_large_image" name="twitter:card"></meta>
			<meta content={title} property="twitter:title" />
			<meta content={DESCRIPTION} property="twitter:description" />
			<meta content={TWITTER_CREATOR} property="twitter:creator" />
			<meta content={TWITTER_CREATOR} property="twitter:site" />

			{!OG_IMAGE ? null : (
				<>
					<meta content={OG_IMAGE} property="og:image" />
					<meta content={OG_IMAGE} property="og:image:URL" />
					<meta content={OG_IMAGE} property="og:image:secure_URL" />
					<meta content={OG_IMAGE} property="twitter:image" />
				</>
			)}
		</Head>
	);
}
