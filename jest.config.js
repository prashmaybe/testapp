module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-native)',
  ],
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text-summary'],
  reporters: ['default'],
  collectCoverageFrom: ['**/*.ts', '**/*.tsx'],
}
