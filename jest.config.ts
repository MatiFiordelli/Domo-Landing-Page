/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
    preset: 'ts-jest/presets/js-with-ts-esm',
    testEnvironment: 'jsdom',
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    collectCoverage: false,
    moduleNameMapper: {
      /* '^(\\.{1,2}/.*)\\.js$': '$1', */
      '\\.(css|jpg|png|scss|less|sass)$': '<rootDir>/empty.js',
    },
    transformIgnorePatterns: ['/node_modules/swipper/', '/public/'],
    transform: {
      // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
      // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
      /* '^.+\\.tsx?$': [
        'ts-jest',
        {
          // ts-jest configuration goes here
          useESM: true,
        },
      ],
      '.mjs': [
        'ts-jest',
        {
          // ts-jest configuration goes here
          useESM: true,
        },
      ], */
      "^.+\\.(mt|t|j|mj)s$": [
        "ts-jest",
        {
          "useESM": true,
        }
      ],
      "^.+\\.svg$": "jest-transformer-svg",
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.css$": "jest-transform-css",
      "^.+\\.png$": "jest-transform-file",
      /* "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-file", */
    },
  };