const jestConfig =  {
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
        "^~/(.*)$": "<rootDir>/$1",
        "^vue$": "vue/dist/vue.common.js",
    },
    moduleFileExtensions: ["ts", "js", "vue", "json"],
    rootDir: "src",
    transform: {
        "^.+\\.ts$": "ts-jest",
        "^.+\\.js$": "babel-jest",
        "^.+\\.vue$": "@vue/vue3-jest",
    },
    collectCoverage: true,
    coverageDirectory: "../coverage-client",
    collectCoverageFrom: [
        "<rootDir>/components/**/*.vue",
        "<rootDir>/pages/**/*.vue",
    ],
};

export default jestConfig;
