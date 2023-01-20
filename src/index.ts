import fs, { cpSync } from "fs";
import { execSync } from "child_process";

import * as core from "@actions/core";

import {
	TEMPLATE_DIR,
	TEMPLATE_COLLECTIONS_DIR,
	CONFIG_PATH,
	TEMPLATE_CONFIG_PATH,
	COLLECTIONS_DIR,
	LECTURES_DIR,
	OUTPUT_DIR,
	TEMPLATE_OUTPUT_DIR,
} from "@lib/constants";
import { downloadAndExtractTemplate } from "@lib/http";
import { logger } from "@lib/logger";

async function run(): Promise<void> {
	try {
		logger.info(
			"Courseware as code is built with 💖 by Nabil Tharwat. For support visit the GitHub issues page."
		);

		if (!fs.existsSync(LECTURES_DIR)) {
			throw new Error(
				`Lectures directory does not exist. Please create a directory in the path ${LECTURES_DIR} with markdown files inside.`
			);
		}

		logger.info("Downloading and extracting the template");
		await downloadAndExtractTemplate();

		logger.info("Copying collections directory to template directory");
		cpSync(COLLECTIONS_DIR, TEMPLATE_COLLECTIONS_DIR, {
			recursive: true,
			force: true,
		});

		logger.info("Copying config");
		cpSync(CONFIG_PATH, TEMPLATE_CONFIG_PATH, {
			force: true,
		});

		logger.info("Installing template npm dependencies");
		const npmOutput = execSync("npm ci --legacy-peer-deps", {
			cwd: TEMPLATE_DIR,
		}).toString();

		logger.debug(npmOutput);

		logger.info("Building website");
		const buildOutput = execSync("npx next build", {
			cwd: TEMPLATE_DIR,
		}).toString();

		logger.debug(buildOutput);

		logger.info("exporting website");
		execSync("npm run export", {
			cwd: TEMPLATE_DIR,
		});

		logger.info("copying static assets to output directory");
		cpSync(TEMPLATE_OUTPUT_DIR, OUTPUT_DIR, {
			recursive: true,
		});

		logger.info("build complete");
	} catch (error) {
		if (error instanceof Error) {
			logger.error(error.message);
			core.setFailed(
				"Build failed. If you think this is a mistake please report it on the github issues page."
			);
		}
	}
}

run();
