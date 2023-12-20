const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.d.ts", "!src/**/index.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  reporters: [
    "default",
    [
      "jest-html-reporters",
      { fileName: "report.html", publicPath: "coverage/html-report" },
    ],
  ],
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
        diagnostics: false,
      },
    ],
    ...tsjPreset.transform,
  },
  testPathIgnorePatterns: ["dist"],
  testMatch: ["**/?(*.)+(spec|test).ts"],
  testEnvironment: "node",
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  watchPathIgnorePatterns: ["/node_modules/", "/coverage/"],
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1,
    },
  },
  coverageReporters: ["json", "lcov", "text", "clover"],
};
