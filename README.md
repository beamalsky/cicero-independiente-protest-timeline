# Cicero Independiente Protest Timeline

Built using Mapbox's [Storytelling template](https://github.com/mapbox/storytelling) and ported to Gatsby. Pulls chapters from an Airtable backend.

### 💾 Requirements

- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- [Gatsby](https://www.gatsbyjs.org/) (install by running `yarn add gatsby-cli`)

### 🚀 Quick start

1. Open your terminal and download the repo:

    ```shell
    git clone git@github.com:beamalsky/cicero-independiente-protest-timeline.git
    cd cicero-independiente-protest-timeline
    ```

2. You'll need your own Mapbox token for local development and an Airtable spreadsheet. Sign up for [Mapbox](https://account.mapbox.com/), create an access token, and then create a `.env` file at the root of this directory with the following:

    ```
    GATSBY_MAPBOX_KEY=''
    GATSBY_AIRTABLE_KEY=''
    GATSBY_BASE_ID=''
    ```

2. Install dependencies:

    ```shell
    yarn install
    ```

3. Start:

    ```shell
    yarn start
    ```

    Your site should now be up and running at `http://localhost:8000`!

4. If you change the content in Airtable and want to see it updated in the site, run:

    ```shell
    yarn clean && yarn start
    ```

### 🤖 What's inside?
_Taken from `gatsby-starter-default`_

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

### 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

### 💫 Deploy

Commits to master deploy to https://ssw-protest-timeline.netlify.app/. Branches will trigger deploy previews.
