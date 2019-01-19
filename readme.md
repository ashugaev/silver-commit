## This package adds the name of branch to commit

## Usage

1.  Install this package and husky: `npm i silver-commit husky -D`

2.  Config commit-msg hook to run silver-commit in package.json

```
    {
        "husky": {
            "hooks": {
               "commit-msg": "node node_modules/silver-commit/index.js"
            }
        }
    }
```
