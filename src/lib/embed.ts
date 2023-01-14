import path from "path";
import fs from "fs";
import mime from "mime-types";

// TODO: add inline static content support
export default function embed(content: string) {
	const imageRegex = /!\[.*\]\((.+)\)/g;
	const imageSrcRegex = /!\[.*\]\((.+)\)/;
	const ext = /\.(.+)$/;
	const match = content.match(imageRegex);
	let result = content;

	if (!match) return content;

	const urls = match.map((image) => {
		const [, url] = image.match(imageSrcRegex) as RegExpMatchArray;

		if (!url.startsWith("/")) return { url };
		else {
			const p = path.resolve(process.cwd(), "public/", url.replace("/", ""));
			const image = p.match(ext)?.[0] as string;
			const base64 = `data:${mime.contentType(image)};base64,${fs.readFileSync(
				p,
				"base64"
			)}`;

			return { url, base64 };
		}
	});

	urls.forEach((url) => {
		if (url.base64) result = result.replace(url.url, url.base64);
	});

	return result;
}
