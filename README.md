<h1 align="center">
  Gastby-Contentful Code Demo
</h1>

Gatsby.js application built using ContentfulCMS as data source.

# Information

## Deviations from Tutorial

  A basic `Jest` testing workflow has been implemented and setup.  Testing can be triggered using:

  ```shell
  npm run test
  ```

  --

  Github Actions have been implemented using a `nodejs.yml` configuration file.  This enables a actions to run the Jest testing and trigger a Netlify build/deploy webhook on completion of successful tests.`  

  --

  Due to significant issues with `@contentful/rich-text-react-render` and `embedded-asset-blocks`,   `gatsby-source-contentful/rich-text` is used to render rich text in `templates > blog.js`.

  Unresolved breaking changes were introduced with the depreciation of `body { json }` to `body { raw }` in the GraphQL queries for Contentful.

  Related Issues: [#119](https://github.com/contentful/rich-text/issues/119), [#28098](https://github.com/gatsbyjs/gatsby/discussions/28098), [#61](https://github.com/contentful/rich-text/issues/61), [#10592](https://github.com/gatsbyjs/gatsby/issues/10592), [#176](https://github.com/contentful/rich-text/issues/176)

--

## Deployment

  [Netlify - Main](https://gatsby-contentful-demo-main.netlify.app/)

  Project hosted on Netlify. 
  
  Utilizes Netlify's webhooks to trigger rebuilds on new published content from the `ContentfulCMS` space.

  --
  
# Project Overview

1. **Created With:**

    Project based on Andrew Mead's Great Gastby Tutorial: [Youtube](https://www.youtube.com/watch?v=8t0vNu2fCCM).

    Project bootstrapped using [Gatsby-CLI](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli) and Gatsby's [hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world) starter template.

2. **Development**

    To install and develop this project:

    ```shell
    git clone https://github.com/ccbass/gatsby-contentful.git
    cd gatsby-contentful
    npm install
    ```
  
    Rename `.env.example` to `.env.development` in the root directory, and insert required ContentfulCMS `spaceid` and `access token`.

    ```shell
    npm run develop
    ```

    In order to utilize Github actions, a repository environment variable must be populated from Netlify:

    This webhook ID should be acquired from the Netlify site under `Build & Deploy > Build Hooks`.
  
    Only the last characters from the URL are required. `https://api.netlify.com/build_hooks/***************`

    ```shell
    NETLIFY_WEBHOOK
    ```

    Happy developing!

## Structure

    .
    ├── src
    │ ├── components
    │ │ └── component
    │ │   ├── component.js
    │ │   ├── component.module.scss
    │ │   └── component.test.js   
    │ ├── pages
    │ │ └── [Gatsby Page views]    
    │ ├── styles
    │ │ └── [Global stylesheets]    
    │ └── templates
    │   └── [React individual components]    
    │
    └── [Other configuration files, etc.]

1. **`/components`**: This directory contains folders of individual React components used to build each page, layout, etc.  Each folder should contain all relevant files to each component.  
1. **`/pages`**: This directory contains all of the top level permanent page views.
1. **`/styles`**: This directory contains global stylesheets not connected to specific views/components.
1. **`/templates`**: This directory contains generated page views based on imported content from external sources.
