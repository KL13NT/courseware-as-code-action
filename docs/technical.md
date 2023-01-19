# Developers Guide

The project consists of two source code repositories used to build content:

- kl13nt/courseware-as-code-action: the action code itself.
- kl13nt/courseware-as-code-template: the NextJS template used to render the website.

The action works by downloading a NextJS template, moving the markdown
collections into the template directory, and executing `next build && next export` to
export static assets in the output directory.

Go to the template repo if you wish to:

- make markup changes
- add features to the build pipeline

And the action repo if you wish to:

- change how the action handles certain things

> Support for LaTeX is achieved through remark-math.

## Installation

The following tools are required to launch _either_ repos on your local machine:

- [NodeJS](nodejs.org)
- [npm](npmjs.com) (Pre-installed with NodeJS)
- [Git](https://git-scm.com) (You can work with a graphical interface too!)
- You'll also need Docker if you wish to test the action locally

After cloning simply run `npm install` inside the repository
directory to download all the required packages and install them.

I use [npm scripts] extensively. If you're not familiar with them have a
go at the official documentation or this [delicious article].

## Development

If you're working on the template you'll need the official [NextJS
documentation]. Otherwise you'll just depend on NodeJS knowledge and GitHub Actions.

A good reference to learn GitHub Actions is the Github [Actions documentation].

### The Action

If you run Act directly you'll get an error about missing collection
directories. To fix it:

1. Make changes
2. Run `npm run package` and commit your changes (as well as changes to the
   /dist directory)
3. Create a test branch with the base pointing at your latest commit (this
   branch can be re-used later for testing)
4. Modify the .gitignore and comment out everything after the `# test files` comment
5. Add a GitHub Workflow called push with the test action code below this section
6. Add test collection markdown files
7. Run `npm run act`

```yml
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          path: "./"
          lfs: true
      - name: build step
        uses: ./
```

### The NextJS Template

The template requires a collections directory and a `cac.config.json` in the
root directory. You can create them on a test branch (after removing them from
the .gitignore) or just leave them around.

The `dev` command starts up the development server. The development server is
available at `localhost:3000` and automagically updates on changes to source
code. Now you can navigate the website freely and modify any piece of code as
you see fit.

This development server is a [NextJS](https://nextjs.org/docs/getting-started)
dev server bootstrapped by
[Webpack](https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config).

> MDX files are a special mix of Markdown and React. You can create new website
> pages using pure Markdown using MDX. Just copy index.mdx and modify it as you
> wish.

There are three main pages: index, lectures, and `[slug]`. `[slug]` is a [dynamic
route](https://nextjs.org/docs/routing/dynamic-routes) that corresponds to each
markdown file in the `collections/lectures` directory.

Each file in the `collections/lectures` directory is rendered using the
`lectures/[slug]` component page once in the output bundle.

#### Styling

I use classless CSS frameworks to change the look of the website. The HTML
should be as standard as it can get. The decision behind this was to allow users
to freely change anything with any classless CSS stylesheet.

[github cloning documentation]: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository
[delicious article]: https://deliciousbrains.com/npm-build-script
[npm scripts]: https://docs.npmjs.com/cli/v7/using-npm/scripts
[act]: https://github.com/nektos/act
[nextjs documentation]: https://nextjs.org/docs/
[actions documentation]: https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action
