module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
    __DEV__: true,
  },
  setupFiles: ['./test/setup.ts'],
};
