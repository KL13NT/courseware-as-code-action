import * as core from "@actions/core";

const isDebug = core.getBooleanInput("debug");

export const logger = {
	info: (message: string) => {
		core.info(message);
	},
	debug: (message: string) => {
		if (isDebug) {
			core.debug(message);
		}
	},
	error: (message: string) => {
		core.error(message);
	},
};
