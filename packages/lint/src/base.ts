import { defineConfig, type OxlintConfig } from 'oxlint';

type BaseOptions = {};

// const DEFAULT_OPTIONS: BaseOptions = {};

function baseConfig(_options?: Partial<BaseOptions>) {
  // const opts = { ...DEFAULT_OPTIONS, ...options };

  return defineConfig({
    plugins: ['typescript', 'unicorn'],
    jsPlugins: [],
    categories: {
      correctness: 'error',
      suspicious: 'warn',
      pedantic: 'off',
      perf: 'warn',
      style: 'warn',
      restriction: 'warn',
      nursery: 'off',
    },
    env: {
      builtin: true,
    },
    options: {
      typeAware: true,
    },
    rules: {
      //* ERRORS - base rules that are always mistakes
      // most are enabled by default in oxlint
      // but turned on here explicitly to guarantee future compatibility
      'eslint/no-var': 'warn',
      'eslint/prefer-const': 'error',
      'eslint/prefer-rest-params': 'error',
      'eslint/prefer-spread': 'error',
      'eslint/no-async-promise-executor': 'error',
      'eslint/no-case-declarations': 'error',
      'eslint/no-class-assign': 'error',
      'eslint/no-compare-neg-zero': 'error',
      'eslint/no-cond-assign': 'error',
      'eslint/no-const-assign': 'error',
      'eslint/no-constant-binary-expression': 'error',
      'eslint/no-constant-condition': 'error',
      'eslint/no-control-regex': 'error',
      'eslint/no-debugger': 'error',
      'eslint/no-delete-var': 'error',
      'eslint/no-dupe-else-if': 'error',
      'eslint/no-duplicate-case': 'error',
      'eslint/no-empty': 'error',
      'eslint/no-empty-character-class': 'error',
      'eslint/no-empty-pattern': 'error',
      'eslint/no-empty-static-block': 'error',
      'eslint/no-ex-assign': 'error',
      'eslint/no-extra-boolean-cast': 'error',
      'eslint/no-fallthrough': ['error', { allowEmptyCase: true }],
      'eslint/no-func-assign': 'error',
      'eslint/no-global-assign': 'error',
      'eslint/no-import-assign': 'error',
      'eslint/no-invalid-regexp': 'error',
      'eslint/no-irregular-whitespace': 'error',
      'eslint/no-loss-of-precision': 'error',
      'eslint/no-misleading-character-class': 'error',
      'eslint/no-nonoctal-decimal-escape': 'error',
      'eslint/no-obj-calls': 'error',
      'eslint/no-prototype-builtins': 'error',
      'eslint/no-redeclare': 'error',
      'eslint/no-regex-spaces': 'error',
      'eslint/no-self-assign': 'error',
      'eslint/no-shadow-restricted-names': 'error',
      'eslint/no-sparse-arrays': 'error',
      'eslint/no-unexpected-multiline': 'error',
      'eslint/no-unsafe-finally': 'error',
      'eslint/no-unsafe-negation': 'error',
      'eslint/no-unsafe-optional-chaining': 'error',
      'eslint/no-unused-labels': 'error',
      'eslint/no-unused-private-class-members': 'error',
      'eslint/no-unused-vars': 'warn',
      'eslint/no-useless-backreference': 'error',
      'eslint/no-useless-catch': 'error',
      'eslint/no-useless-escape': 'error',
      'eslint/require-yield': 'error',
      'eslint/use-isnan': 'error',
      'eslint/valid-typeof': 'error',
      'eslint/no-unused-expressions': 'warn',
      'typescript/ban-ts-comment': 'error',
      'typescript/no-duplicate-enum-values': 'off', // enums are not recommended
      'typescript/no-empty-object-type': 'error',
      'typescript/no-explicit-any': 'error',
      'typescript/no-extra-non-null-assertion': 'error',
      'typescript/no-misused-new': 'error',
      'typescript/no-namespace': 'error',
      'typescript/no-non-null-asserted-optional-chain': 'error',
      'typescript/no-require-imports': 'error',
      'typescript/no-this-alias': 'error',
      'typescript/no-unnecessary-type-constraint': 'error',
      'typescript/no-unsafe-declaration-merging': 'error',
      'typescript/no-unsafe-function-type': 'error',
      'typescript/no-wrapper-object-types': 'error',
      'typescript/prefer-as-const': 'error',
      'typescript/triple-slash-reference': 'error',

      //* OTHER RULES

      // members are public by default so no need to be explicit
      'typescript/explicit-member-accessibility': [
        'warn',
        { accessibility: 'no-public' },
      ],

      // too pedantic
      'eslint/id-length': 'off',
      'eslint/sort-keys': 'off',
      'eslint/capitalized-comments': 'off',
      'eslint/func-style': 'off',
      'eslint/complexity': 'off',
      'eslint/max-params': 'off',
      'eslint/no-ternary': 'off',

      'eslint/curly': 'warn',
      'typescript/consistent-type-definitions': ['warn', 'type'],
      'eslint/max-statements': 'off',
      'typescript/consistent-return': 'off', // allow implicit return
      'unicorn/switch-case-braces': 'warn',
      'typescript/prefer-regexp-exec': 'warn',
      'eslint/init-declarations': 'off',
      'unicorn/no-null': 'warn', // easier to just use undefined
      'eslint/no-undefined': 'off', // undefined is necessary
      'eslint/no-console': 'off', // browser is no longer the only environment js is run on
      'eslint/no-continue': 'off', // early-continue is useful
      'eslint/no-implicit-coercion': ['warn', { allow: ['!!'] }],
      'eslint/no-plusplus': 'off', // makes for-loops too noisy, ASI is rarely a problem
      'eslint/no-void': 'off', // void is useful for explicitly indicating floating promises
      'eslint/no-nested-ternary': 'off', // ternaries are cleaner and necessary due to lack of match expressions
      'eslint/no-empty-function': ['warn', { allow: ['constructors'] }], // empty constructors are allowed for explicit singleton pattern
      'eslint/no-duplicate-imports': [
        'warn',
        { allowSeparateTypeImports: true },
      ],

      // Array.from() is slower than new Array()
      // https://jsperf.app/tatuse
      'unicorn/no-new-array': 'off',
      'eslint/no-array-constructor': 'warn',

      // consider enabling in library-focused template
      'typescript/explicit-function-return-type': 'off',
      'typescript/explicit-module-boundary-types': 'off',

      // may revisit
      'unicorn/no-anonymous-default-export': 'off',
      'eslint/sort-imports': 'off', // consider when oxfmt is setup

      // currently produces too many false positives
      'eslint/no-magic-numbers': 'off',
      'unicorn/prefer-modern-math-apis': 'off',
      'eslint/no-use-before-define': 'off',

      // handled by typescript compiler
      'eslint/constructor-super': 'off',
      'eslint/getter-return': 'off',
      'eslint/no-dupe-class-members': 'off',
      'eslint/no-dupe-keys': 'off',
      'eslint/no-new-native-nonconstructor': 'off',
      'eslint/no-setter-return': 'off',
      'eslint/no-this-before-super': 'off',
      'eslint/no-undef': 'off',
      'eslint/no-unreachable': 'off', // typescript handles this if `allowUnreachableCode: false` is configured
      'eslint/no-with': 'off',

      // conflicts with prettier
      'unicorn/no-nested-ternary': 'off',

      // disabled rules that exist for legacy environments
      'oxc/no-optional-chaining': 'off',
      'oxc/no-rest-spread-properties': 'off',
      'oxc/no-async-await': 'off',
    },
  });
}

export { type OxlintConfig, defineConfig, baseConfig };

export default baseConfig();
