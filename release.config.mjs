export default {
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "semantic-release-replace-plugin",
      {
        replacements: [
          {
            files: ["package.json"],
            from: '"version": ".*"',
            to: '"version": "${nextRelease.version}"',
            results: [
              {
                file: "package.json",
                hasChanged: true,
                numMatches: 1,
                numReplacements: 1,
              },
            ],
            countMatches: true,
          },
        ],
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["package.json"],
        message:
          "ci(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    [
      "@semantic-release/exec",
      {
        publishCmd: "yarn npm publish",
      },
    ],
  ],
  branches: ["main"],
};
