import { createWriteStream, existsSync, mkdirSync } from "fs";
import got from "got";
import tar from "tar";
import { tmpdir } from "os";
import { join } from "path";
import { Stream } from "stream";
import { promisify } from "util";
import { TEMPLATE_DIR, TEMPLATE_REPO } from "./constants";
import { unlink } from "fs/promises";

const pipeline = promisify(Stream.pipeline);

async function downloadTar(url: string) {
	const tempFile = join(
		tmpdir(),
		`courseware-as-code-template.temp-${Date.now()}`
	);

	await pipeline(got.stream(url), createWriteStream(tempFile));

	return tempFile;
}

export async function downloadAndExtractTemplate() {
	const tempFile = await downloadTar(TEMPLATE_REPO);

	if (!existsSync(TEMPLATE_DIR)) {
		mkdirSync(TEMPLATE_DIR, { recursive: true });
	}

	await tar.x({
		file: tempFile,
		cwd: process.cwd(),
	});

	await unlink(tempFile);
}
