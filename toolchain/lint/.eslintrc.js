module.exports = {
  env: {
    browser: true,
    es2021: true, // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:promise/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:security/recommended",
    "plugin:jest/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  extensions: [".js", ".ts", ".tsx", ".json", ".astro"],
  ignorePatterns: [
    "**/.cache",
    "**/coverage",
    "**/lib",
    "**/.next*",
    "**/.serverless*",
    "**/.build",
    "**/dist",
    "**/node_modules",
    "**/*.config.js",
    "**/*.eslintrc.js",
  ],
  overrides: [
    {
      files: ["*.{test,spec,story,stories}.ts{,x}"],
      rules: {
        "import/no-extraneous-dependencies": ["error", { packageDir: "./" }],
      },
    },
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 12,
    project: ["./tsconfig.json", "./apps/*/tsconfig.json", "./modules/*/tsconfig.json"],
    sourceType: "module", // Allows for the use of imports
  },
  plugins: ["import", "react", "react-hooks", "sonarjs", "unicorn"],
  root: true,
  rules: {
    "@typescript-eslint/no-use-before-define": 0,
    "func-names": ["error", "as-needed"],
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "no-console": 0,
    "no-param-reassign": [2, { props: true, ignorePropertyModificationsFor: ["draft", "state"] }],
    "no-restricted-syntax": 0,
    "no-template-curly-in-string": 0,
    "no-use-before-define": [2, { variables: false }],
    "prefer-template": 0,
    "react/function-component-definition": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-no-useless-fragment": 0,
    "react/no-children-prop": 0,
    "react/no-unknown-property": [2, { ignore: ["sx"] }],
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "sonarjs/no-duplicate-string": 0,
    "sonarjs/no-small-switch": 0,
    "unicorn/filename-case": 0,
    "unicorn/no-useless-undefined": 0,
    "unicorn/prefer-export-from": 0,
    "unicorn/prevent-abbreviations": 0,
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
