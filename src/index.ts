import fs from "fs";
import { execSync } from "child_process";

import * as core from "@actions/core";

import { LECTURES_DIR } from "@lib/constants";
import { downloadAndExtractTemplate } from "@lib/http";
import { logger } from "@lib/logger";

async function run(): Promise<void> {
	try {
		logger.info(
			"Courseware as code is built with 💖 by Nabil Tharwat. For support visit the GitHub issues page."
		);
		logger.info("Starting the build 🚀");

		if (!fs.existsSync(LECTURES_DIR)) {
			throw new Error(
				`Lectures directory does not exist. Please create a directory in the path ${LECTURES_DIR} with markdown files inside.`
			);
		}

		logger.info("Downloading and extracting the template");
		await downloadAndExtractTemplate();

		logger.info("Installing template npm dependencies");
		const npmOutput = execSync("npm ci --legacy-peer-deps").toString();

		logger.debug(npmOutput);

		logger.info("Building website");
		const buildOutput = execSync("npx next build").toString();

		logger.debug(buildOutput);

		logger.info("Exporting website");
		execSync("npm run export");

		logger.info("Build complete! 🥳");
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
