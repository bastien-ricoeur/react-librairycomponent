module.exports = {
  roots: ["<rootDir>/src"],
  transform: { "^.+\\.tsx?$": "ts-jest", ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css" },
  setupFiles: ['regenerator-runtime/runtime'],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
};
