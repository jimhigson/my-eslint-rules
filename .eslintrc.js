'use strict';

module.exports = {
    rules: {
        "one-var": 'off',
        "arrow-parens": ["error", "as-needed"],
        "semi": ["error", "never"],
        "indent": ["error", 4],
        "max-len": [
            "error",
            {
                "code": 100,
                "ignoreTemplateLiterals": true,
                "ignoreStrings": true
            }
        ],
        'generator-star-spacing': 'off',
        'func-names': ["error", "as-needed"]
    }
}