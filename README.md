# Courseware As Code - Education Made Easy(ier)

A simple and intuitive Courseware as Code template repository for education
everywhere. This template allows you to generate a fully functional and
deploy-able website built using NextJS alongside generated PDF lectures and
slides from simple Markdown files!

**Table of Contents:**

- [Why?](#why)
- [What's inside?](#whats-inside)
- [How?](#how)
- [Map of Territory](#map-of-territory)
- [Upcoming features](#upcoming-features)
- [Getting started](#getting-started)
- [Starting the development server](#starting-the-development-server)
- [Starting the production server locally](#starting-the-production-server-locally)
- [Deploying](#deploying)
- [Contributing to this project](#contributing-to-this-project)
- [Contributing to a course as a student](#contributing-to-a-course-as-a-student)
- [Managing a course as a teacher](#managing-a-course-as-a-teacher)
- [Contributing as a developer](#contributing-as-a-developer)

### Why?

I'm a student. A tired student. I'm tired of having to deal with outdated
knowledge in the courses I'm enrolled in. I'm tired of having no way of
contributing to the course I'm taking, nor a say in whatever content is
presented to me.

This repository, despite not providing solid solutions to
these problems, remains a positive attempt at providing an easier way for
teachers and courseware maintainers to update courseware, and a straight-forward
method to build a truly positive community led by students and teachers alike. A
step forward. It's my own implementation of [Courseware as Code](https://www.youtube.com/watch?v=L4zf_QIr4jQ).

### What's inside?

- Statically generated HTML lecture pages!
- Downloadable PDF lecture files!
- PDF slides generation!
- Markdown + Math (LaTeX) = ❤️
- Add more pages to your website without having to go outside of your Markdown
  comfort-zone with MDX! 😍
- Tutorials and examples to get started!
- Complete control using configuration `site.config.js`

### How?

- Static pages are generated using NextJS
- Code is linted and formatted using ESLint and Prettier respectively
- Support for NextJS Markdown pages uses @next/mdx
- Support for Markdown LaTeX math blocks uses remark-math
- PDF generation (lectures and slides) uses Puppeteer and [Marp/Core](https://github.com/marp-team/marp-core)
- All lib functions are tested using Jest

### Map of Territory

- `collections/` is where markdown content is found
- `components/` are React components reused across pages
- `pages/` are NextJS routes/pages
- `public/` is where images and other static media belongs
- `scripts/` are scripts used in the build pipeline
- `styling/` where all global/print styling resides
- `lib/` utilities used across the project

### Upcoming features

- Student articles!
- Contentful support
- More customization
- More tutorials
- Other CMS's support

### Getting started

The following tools are required to launch this project on your local machine and
deploy using CI/CD:

- [NodeJS](nodejs.org)
- [npm](npmjs.com) (Pre-installed with NodeJS)
- [Git](https://git-scm.com) (You can work with a graphical interface too!)

You'll also need a text/code editor depending on what you're doing.

After you set these tools up and are ready to rock you can proceed to cloning
the repo and starting up the dev server. If this is the first time you use this
project then you need to `use this template` on GitHub before going forward.

This should leave you with a repo owned by you. It'll say "generated from
KL13NT/courseware-as-code" below your repo's name. This is absolutely fine. It
just means that you used this repo to generate yours.

You'll then need to clone the repository to your own machine. For a tutorial on
how to clone your repository I recommend the [official GitHub
documentation](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

By now you'll have the repository locally available on your machine. It's time
to install the required packages. I use Yarn, but you don't need to install it
if you're not familiar with it. Simply run `npm install` inside the repository
directory to begin the installation process.

This will download all the required packages and install them. All you have to
do now is wait for it to finish, after which you'll be ready to either start the
development server or build an output sample. The four main commands we'll look
at are `dev`, `build`, `export`, and `start`.

We'll be using npm scripts extensively. If you're not familiar with them have a go at the
[official documentation](https://docs.npmjs.com/cli/v7/using-npm/scripts) or this
[delicious article](https://deliciousbrains.com/npm-build-script).

In short, what we did so far is:

- Install prerequisites
- Generate a new repo from this one
- Clone the generated repo
- Install npm packages

# Steps of installation and usage
- _Commit changes and push to github_
- _Execute action_
_- Checkout content repo_
_- Install nodejs and npm_
- _Read config if any, otherwise use defaults_
- _Fetch template and unzip in cwd/projectname_
_- Copy collections from repo into template folder_
_- cd into template folder_
_- install npm dependencies_
- run build script to generate static content using next 
- publish to github pages by default 

# Create a JavaScript Action using TypeScript
> Note to advanced users: If you're using a different hosted solution such as
> GitLab, you can clone the repo and change the upstream remote to your own
> host.

> Note to advanced users: I recommend using Yarn instead of NPM.

### Starting the development server

The `dev` command starts up the development server. The development server is
available at `localhost:3000` and automagically updates on changes to source
code and Markdown files. Now you can navigate the website freely and modify any
piece of code as you see fit.

This development server is a [NextJS](https://nextjs.org/docs/getting-started)
dev server bootstrapped by
[Webpack](https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config).

> The dev server doesn't update the PDF files to save resources.

To test this out navigate to `localhost:3000/lectures/tutorial` and update the
`collections/lectures/tutorial.md` file to see your changes reflected in the
website instantly! 😀

### Starting the production server locally

The `dev` command started up a development server. Now you probably want to see
how the website will function when deployed. To do that, the `start` command
will be needed. `start` starts the application in production mode. The
application should be compiled with `build` first.

You may be wondering, can I export some basic HTML & CSS static files? And the
answer is yes! The `export` command allows you to export your app to static
HTML, which can be run standalone without the need of a Node.js server. It also
generates up-to-date PDF files alongside the output files.

### Jumping into the code

You're probably wondering, how the hell do you modify this thing? And let me
answer that in simple points. This project is built on 3 main packages: Next.js,
marp-core, and Puppeteer.

Next.js is a web framework for building statically generated and
server-side-rendered web applications. It uses what is known as filesystem-based
routing. I talked about it extensively [in this
video](https://www.youtube.com/watch?v=ZpXTvP7QVFY&t=142s), and you can read the
[official documentation here](https://nextjs.org/docs/routing/introduction).
Each js/jsx/mdx file in the `pages/` directory corresponds to a page in the output
website. So `pages/index.mdx` corresponds to `example.com/index.html`, and so
on.

> MDX files are a special mix of Markdown and React. You can create new website
> pages using pure Markdown using MDX. Just copy index.mdx and modify it as you wish.

There are three main pages: index, lectures, and [slug]. [slug] is a [dynamic
route](https://nextjs.org/docs/routing/dynamic-routes) that corresponds to
each markdown file in the `collections/lectures`
directory.

Each file in the `collections/lectures` directory is rendered using the
`lectures/[slug]` component page once in the output bundle. You probably don't
need to modify any of those much at all.

Styling, however, is different. Each page has a specific css file next to it. So
`index.mdx` uses `index.module.css`, and so on. These are
[CSSModules](https://github.com/css-modules/css-modules) and are scoped to those
pages *only*. Global styling is available in the `styling/index.css` file.

So far (if you've read all the links) you should be ready to edit these pages
freely. Note that there are other tutorials available only in the built website.
You can manually read them in the `collections` directory, but I'd generally
recommend against that as it takes away part of the explanation.

### Deploying

There are multiple ways to deploy this project. The first (and hardest) way is
to always use `export` when deploying. You'll then need to either push all the
exported files to source control and deploy from there, or manually take the
files and upload them to your host of choice.

The other, more advanced yet easier way, is to setup a CI/CD.
[Vercel](https://vercel.com/docs/platform/deployments#making-deployments) is the
organization behind NextJS and is the recommended way to host this project.
[Netlify](https://www.netlify.com/with/nextjs) also supports NextJS out of the
box and is dead simple to get started with.

If you'd like to deploy the demo (this repo) just click the button below!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FKL13NT%2Fcourseware-as-code&project-name=courseware-as-code&repo-name=courseware-as-code)

### Contributing to this project

I'm open to all kinds of contributions. If you want to:

    🤔 Suggest a feature
    🐛 Report an issue
    📖 Improve documentation
    👩‍💻 Contribute to the code

You are more than welcome. Before contributing, kindly check the
[guidelines](CONTRIBUTING.md).

### Contributing to a course as a student

If you're a student trying to contribute to a course's courseware then what you want
to look for is the `collections` folder. This folder contains all input Markdown
documents that go into making lectures and slides.

The `collections` folder has two subfolders, `slides` and `lectures`. The `lectures`
folder contains the markdown for all lectures in a course. Each lecture is contained
in a single Markdown file. All you have to do then is locate the lecture you wish to
contribute to, and simply edit it!

You can help by fixing typos, adding better explanation, adding useful
resources that helped you, or even adding whole lectures! How cool is that! 😄

If you have no prior experience using Git or contributing to open source projects
refer to [this lovely tutorial series by Digital Ocean](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source).
It walks you through the basic fundamentals of Git all the way until you're ready to
contribute!

### Managing a course as a teacher

As a teacher you'll most probably be responsible for this repo, given you're
responsible for the course as well. Your role dictates transparency and fairness
in managing your course. This shows in terms of this repository and is
represented by your welcoming of student contribution to making courseware
better. There's not much to say here. You can use the developer guidelines at
your own repository scale.

> Knowledge of Git is required.

### Contributing as a developer

If you're a developer willing to contribute to this project you're always more
than welcome to do so. There's a complete [contribution guide](CONTRIBUTING.md)
to help you get started, and the code is fairly documented to allow further
modifications/extensions.
