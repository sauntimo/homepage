module.exports = {
  extends: ["alloy", "alloy/react", "alloy/typescript"],
  env: {
    // environments (which contains several predefined global variables)
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    // Customize rules
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
