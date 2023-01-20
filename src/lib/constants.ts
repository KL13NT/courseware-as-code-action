/**
 * Please don't come after me for the following mess. I know. I KNOW. TRUST ME I
 * KNOW! I am working on a better solution. I promise. I am just trying to get
 * this thing working for now. It's the way vercel/ncc handles path joins. :(
 *
 * https://github.com/prisma/prisma/issues/945
 * https://github.com/vercel/ncc/issues/390
 */

export const COLLECTIONS_DIR = eval(
	`require('path').join(process.cwd(), 'collections')`
);
export const LECTURES_DIR = eval(
	`require('path').join(process.cwd(), 'collections/lectures')`
);
export const TEMP_DIR = eval(`require('path').join(process.cwd(), '.temp')`);
export const OUTPUT_DIR = eval(`require('path').join(process.cwd(), 'out')`);
export const TEMPLATE_DIR = eval(
	`require('path').join(process.cwd(), 'courseware-as-code-template-master')`
);
export const TEMPLATE_OUTPUT_DIR = eval(
	`require('path').join(process.cwd(), 'out')`
);
export const CONFIG_PATH = eval(
	`require('path').join(process.cwd(), 'cac.config.json')`
);
export const TEMPLATE_CONFIG_PATH = eval(
	`require('path').join(process.cwd(), 'cac.config.json')`
);
export const TEMPLATE_COLLECTIONS_DIR = eval(
	`require("path").join(process.cwd(), "collections")`
);
export const TEMPLATE_REPO =
	"https://codeload.github.com/kl13nt/courseware-as-code-template/tar.gz/master";
