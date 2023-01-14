import { ContentType } from "../interfaces/interfaces";

/**
 * Sequentially executes an array of promises
 */
export const sequentialPromises = (promises: ((value: unknown) => any)[]) => {
	return promises.reduce(
		(promise, task) => promise.then(task),
		Promise.resolve()
	);
};

/**
 * Returns a full name for generated PDF files where type is either lecture or slide
 */
export const generatePdfFilename = (
	courseCode: string,
	slug: string,
	type: ContentType
) => {
	return `${courseCode}_${slug}_${type}.pdf`;
};

export const formatDate = (date: Date | string) =>
	new Date(date).toLocaleDateString("en-GB", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});

/**
 * Merges source into target. Check utils.test.js for how it works
 */
export const merge = (
	target: Record<string, {}>,
	source: Record<string, {}>
) => {
	for (const key of Object.keys(source)) {
		if (source[key] instanceof Object)
			Object.assign(source[key], merge(target[key], source[key]));
	}

	Object.assign(target || {}, source);

	return target;
};

/**
 * Creates a highlighLanguage mapping for unified()
 */
export const generateHighlightLanguages = (highlightLanguages: string[]) => {
	const result: Record<string, import("highlight.js").LanguageFn> = {};

	highlightLanguages.forEach((lang) => {
		// result[lang] = require(`highlight.js/lib/languages/js`); TODO: uncomment
	});

	return result;
};
