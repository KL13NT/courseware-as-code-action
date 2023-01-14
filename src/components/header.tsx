import * as core from "@actions/core";
import { config } from "lib/config";
import React from "react";

const { courseName, courseCode, courseDescription } = config;

export default function Header() {
	return (
		<header className="header">
			<h1>
				{courseCode} - {courseName}
			</h1>
			<p>{courseDescription}</p>
			<hr />
		</header>
	);
}
