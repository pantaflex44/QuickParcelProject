module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
    setupFilesAfterEnv: ["./tests.config.js"],
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy",
    },
};
