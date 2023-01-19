import path from "path";

export const COLLECTIONS_DIR = path.join(process.cwd(), "collections");
export const LECTURES_DIR = path.join(COLLECTIONS_DIR, "lectures");
export const TEMP_DIR = path.join(process.cwd(), ".temp");
export const OUTPUT_DIR = path.join(process.cwd(), "out");
export const TEMPLATE_DIR = path.join(
	process.cwd(),
	"courseware-as-code-template-master"
);
export const TEMPLATE_OUTPUT_DIR = path.join(TEMPLATE_DIR, "out");
export const CONFIG_PATH = path.join(process.cwd(), "cac.config.json");
export const TEMPLATE_CONFIG_PATH = path.join(
	`${TEMPLATE_DIR}/cac.config.json`
);
export const TEMPLATE_COLLECTIONS_DIR = path.join(
	process.cwd(),
	"courseware-as-code-template-master/collections"
);
export const TEMPLATE_REPO =
	"https://codeload.github.com/kl13nt/courseware-as-code-template/tar.gz/master";
