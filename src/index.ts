import fs, { cpSync } from "fs";
import { execSync } from "child_process";

import * as core from "@actions/core";

import {
	OUTPUT_DIR,
	LECTURES_DIR,
	COLLECTIONS_DIR,
	TEMPLATE_DIR,
	TEMPLATE_COLLECTIONS_DIR,
} from "lib/constants";
import { downloadAndExtractTemplate } from "lib/http";

async function run(): Promise<void> {
	try {
		core.info(
			"Courseware as code is built by Nabil Tharwat. For support visit the GitHub issues page."
		);
		core.info("Creating temporary and final build directory");

		if (!fs.existsSync(OUTPUT_DIR)) {
			fs.mkdirSync(OUTPUT_DIR, { recursive: true });
		}

		if (!fs.existsSync(LECTURES_DIR)) {
			throw new Error(
				'Lectures directory does not exist. Please create a "collections/lectures" directory in the root of your repo.'
			);
		}

		await downloadAndExtractTemplate();

		cpSync(COLLECTIONS_DIR, TEMPLATE_COLLECTIONS_DIR, {
			recursive: true,
			force: true,
		});

		// if (generateLecturePDF) {
		// 	core.info("generating pdf lectures");
		// 	await generateLectures();
		// }

		// if (enablePdfSlides) {
		// 	core.info("generating pdf presentations");
		// 	await generatePresentations();
		// }

		core.info("cd into template directory");
		process.chdir(TEMPLATE_DIR);

		core.info("install template npm dependencies");
		execSync("npm install --save-exact");

		core.info("building website");
		execSync("npx next build");

		core.info("exporting website");
		execSync("npx next export");

		// core.info("outputting files to project out directory");
		// const temp = fs.readdirSync(NEXT_OUT_DIR);

		// for (const filename of temp) {
		// 	const from = path.resolve(NEXT_OUT_DIR, filename);
		// 	const to = path.resolve(OUTPUT_DIR, filename);

		// 	fs.renameSync(from, to);
		// }

		core.info("build complete");

		// TODO: move files from '/out' to cwd/out
	} catch (error) {
		if (error instanceof Error) {
			core.error(error.message);
			core.setFailed(
				"Build failed. If you think this is a mistake please report it on the github issues page."
			);
		}
	} finally {
		core.info("Cleanup");

		// fs.rmdirSync(path.resolve(__dirname, "../public"), {
		// 	recursive: true,
		// });

		core.info("Cleanup done");
		process.exit(0);
	}
}

run();
