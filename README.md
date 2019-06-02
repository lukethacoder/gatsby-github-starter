# gatsby-github-starter

Starter with Github GraphQL v4 integration

## Features

- TypeScript
- TSLint (with custom TSLint rules)
- Github GraphQL v4 API
- Basic component structure
- Styling with [emotion](https://emotion.sh/) (style-components)
- react-spring

## Geting started

```bash

  gatsby new 'your-site-name' https://github.com/lukethacoder/gatsby-github-starter

```

## Developing

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8000
npm start

# build for production
npm run build

```

## Changing Github GraphQL calls

Made changes to the calls in the `gatsby-config.js` file.

> Useful for exploring the possible routes: https://developer.github.com/v4/explorer

**_`pinnedRepositories` will need to be changed to `pinnedItems` on 2019/07/01_**

```js
// gatsby-config.js
  ...
  {
    resolve: `gatsby-source-github-api`,
    options: {
      // token: required by the GitHub API
      token: 'your_token_here',

      variables: {},

      graphQLQuery: `
        query {
          viewer {
            bio
            name
            avatarUrl
          }
          # add more queries here
        }
      `,
    },
  },
  ...
```
