[![CircleCI](https://circleci.com/gh/henriblancke/dbt-formatter/tree/master.svg?style=svg)](https://circleci.com/gh/henriblancke/dbt-formatter/tree/master)

# DBT Formatter

A DBT jinja/sql formatter with improved comment handling, particularly fixing issues with comments followed by commas.

## Install

```bash
# Install from npm
npm install -s @ali0113/dbt-formatter

# Or with yarn
yarn add @ali0113/dbt-formatter

# Or with pnpm
pnpm add @ali0113/dbt-formatter
```

## Usage

```javascript
import formatter from '@ali0113/dbt-formatter';

const mySql = "SELECT * FROM {{ ref('myTableRef') }}";
const myOpts = { sql: 'default', indent: 2, upper: false };

formatter.format(mySql, myOpts);
```

This will result in:

```sql
SELECT
  *
FROM
  {{ ref('myTableRef') }}
```

## Usage options

Fine tune `dbt-formatter` behavior with the following options:

| Option         | Default   | Description                                                            |
| -------------- | --------- | ---------------------------------------------------------------------- |
| sql            | `default` | The sql dialect you want to use, currently only `default` is available |
| indent         | `2`       | How many spaces you want an indentation to be                          |
| upper          | `false`   | Formats sql reserved words to be uppercase when set to `true`          |
| newline        | `false`   | Appends a new line at the end of the formatted sql string              |
| lowerWords     | `false`   | Lowercases all `words` as identified by the tokenizer                  |
| allowCamelcase | `true`    | Allows column names to be camelcased                                   |

## Improvements

This fork improves the handling of comments in SQL, particularly fixing the following issues:

- Fixed an issue where a comma following a line comment would be incorrectly merged with the comment text
- Properly handles comments with varying line endings (CRLF vs LF)

## Publishing to npm

To publish this package to npm:

1. Replace `@your-username` in package.json with your actual npm username
2. Update repository URLs to point to your GitHub fork
3. Build the package: `npm run build`
4. Login to npm: `npm login`
5. Publish the package: `npm publish --access public`

## Development

### NPM scripts

- `npm test`: Run test suite
- `npm run build`: Generate bundles and typings
- `npm run lint`: Lints code
- `npm run package`: Package dbt-formatter as a binary

## Credits

This is a fork of [henriblancke/dbt-formatter](https://github.com/henriblancke/dbt-formatter) with improvements for comment handling.

## License

MIT

## Roadmap

- Add more sql dialects:
  - [x] snowflake
  - [ ] redshift
  - [ ] bigquery
  - [ ] postgres
  - [ ] presto
