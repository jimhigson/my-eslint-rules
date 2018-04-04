'use strict';

module.exports = {
    extends: 'idiomatic',
    rules: {
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
        'func-names': ["error", "never"]
    }
}