'use strict';

module.exports = {
    extends: 'idiomatic',
    env: { 
        "node": true,
        es6: true
    },
    "parserOptions": {
        "ecmaVersion": 10
    },
    rules: {
        'no-undef': ['error'],
        'no-unused-vars' : ['error'],
        "one-var": 'off',
        "arrow-parens": ["error", "as-needed"],
        "semi": ["error", "never"],
        "indent": ["error", 4, {
            "SwitchCase": 1
        } ],
        "max-len": [
            "error",
            {
                "code": 100,
                "ignoreTemplateLiterals": true,
                "ignoreStrings": true
            }
        ],
        'generator-star-spacing': 'off',
        'func-names': ["error", "never"],
        "quote-props": ["error", "as-needed"]
    }
}