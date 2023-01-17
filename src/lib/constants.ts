import path from "path";

export const COLLECTIONS_DIR = path.resolve(process.cwd(), "collections");
export const LECTURES_DIR = path.resolve(process.cwd(), "collections/lectures");
export const SLIDES_DIR = path.resolve(process.cwd(), "collections/slides");
export const TEMP_DIR = path.resolve(process.cwd(), ".temp");
export const OUTPUT_DIR = path.resolve(process.cwd(), "out");
export const TEMPLATE_DIR = path.resolve(
	process.cwd(),
	"courseware-as-code-template-master"
);
export const TEMPLATE_COLLECTIONS_DIR = path.resolve(
	process.cwd(),
	"courseware-as-code-template-master/collections"
);
export const TEMPLATE_REPO =
	"https://codeload.github.com/kl13nt/courseware-as-code-template/tar.gz/master";
