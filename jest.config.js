const tsconfig = require("./tsconfig.json");
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig);

module.exports = {
	preset: "ts-jest/presets/js-with-ts",
	silent: false,
	testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
	transformIgnorePatterns: ["/node_modules/(?!@bazo/event-emitter|@bazo/fetch-client|spin.js).+\\.js$"],
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
	moduleNameMapper: {
		...moduleNameMapper,
		"\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js",
	},
};
