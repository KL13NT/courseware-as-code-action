module.exports = {
	clearMocks: true,
	moduleFileExtensions: ["js", "ts"],
	transform: {
		"^.+\\.ts$": "ts-jest",
	},
	verbose: true,
	coverageDirectory: "./coverage",
	testEnvironment: "node",
	collectCoverageFrom: ["./src/lib/**/*.js"],
	coverageReporters: ["json-summary", "html", "text", "lcov"],
	testMatch: ["./**/*.test.ts"],
	setupFilesAfterEnv: ["./jest.setup.js"],
};