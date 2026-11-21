import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reportOnFailure: true,
      include: [
        'src/toNumber.js',
        'src/get.js',
        'src/chunk.js',
        'src/clamp.js',
        'src/toString.js',
        'src/isDate.js',
        'src/difference.js',
        'src/reduce.js',
        'src/isEmpty.js',
        'src/filter.js',
      ],
      exclude: ['src/.internal/**'],
      reporter: ['text', 'html', 'lcov'],
    },
  },
})