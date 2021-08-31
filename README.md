<h1 align="center">
  Gastby-Contentful Code Demo
</h1>

Gatsby.js application built using ContentfulCMS as data source.

# Information

## Deployment

  [Netlify - Main](https://gatsby-contentful-demo-main.netlify.app/)

  Project hosted on Netlify. 
  
  Utilizes Netlify's webhooks to trigger rebuilds on `code push` and new published content on `ContentfulCMS`.
  
## Project Information

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

    Happy developing!

# Project Structure

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
