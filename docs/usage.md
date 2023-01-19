# Usage Guide

> Knowledge of Git is a huge plus (but not required!) as it allows you to use
> your favourite text editor to author multiple pieces of content for your
> course locally in one commit before pushing to your course repo.

> These steps may seem daunting at first, but don't worry! Everything you may
> want to do can be done through the GitHub web UI and this guide has clear and
> detailed steps for it.

## What to Look For

What you want to look for is the `collections/lectures` folder. This folder
contains all input Markdown documents that go into making lectures. Each
lecture is contained within a single Markdown file, and all you have to do then is
locate the lecture you wish to contribute to, and simply edit it!

## Course Maintainers

As a teacher/course maintainer you'll most probably be responsible for your
courses repositories, given you're responsible for the course as well. Your role
dictates transparency and fairness in managing your courses. This shows in terms
of this repository and is represented by your welcoming of student contribution
to making courseware better.

> If you don't usually prepare written lectures you can share your prep notes
> instead!

I ask of you to have patience with students contributing for the first time, and
to put in an effort towards building a healthy community around your courses.

### Creating and Maintaining Courses

1. Go to the [template repository]
2. Click the green "Use this template" and pick "Create a new repository"
3. Voila!

By then you'll have created a new repository with the default example lectures
available. Once you make changes (either by editing or deleting an existing
file, or creating new files) and commit the changes the
courseware-as-code-action will start off and provide you with a working GitHub
Pages website. The website will be available at
`https://your_username.github.io/repository_name`. For instance, my example
project can be visited by going to [https://kl13nt.github.io/courseware-as-code-example](https://kl13nt.github.io/courseware-as-code-example).

> The template repository has example articles explaining how to do a several
> things, such as using LaTeX, embedding YouTube videos, and how to use
> Markdown.

You can change course name, code, and other variables through the
`cac.config.json` file present in the repository. Change any of the values and
commit the changes to have them immediately reflect in the output website.

### Reviewing Pull Requests

Pull Requests are the process through which contributors can request to merge
their changes with your source repository. They can be done with ease through the web
UI, and GitHub have a highly detailed guide on them. Refer to the [Review
Changes] documentation for details.

### Make Contributing Rewarding

The more you welcome contributors to your project and reward their efforts, the
more you’ll encourage more contributions. Maintain a list of contributors on
every piece of content. This provides a way to recognize contributors for their
work on the course in a way they can point to, while also making others aware of
how well contributors are treated.

## Students and Collaborators

You can contribute by fixing typos, adding better explanations, adding useful resources
that helped you understand things, or even by adding whole new lectures! 😄

If you have no prior experience using Git or contributing to open source
projects refer to DigitalOcean's [Introduction to Open Source] tutorial series.
It walks you through the basic fundamentals of Git and GitHub all the way until you're
ready to contribute to any open source project!

### First Time Contributing to a Course

Here's a list of steps you can follow the first time you contribute to a course:

1. Go to a course's repository
2. Click the "Fork" button in the top right side of the page
3. Go to repository settings and navigate to `Actions > General`
4. Select "Disable actions" and Save
5. Make changes through the GitHub UI or any way you like and commit the changes
6. [Create a pull request] from your fork
7. [Discuss] the changes with course maintainers on the pull request

### Subsequent Contributions

If this isn't your first time contributing to a course and you already have a
fork that may not be up to date with the course's source repository you can
[sync] the two repositories. Steps:

1. Go to your fork
2. Click the "Sync fork" button and select "Update branch"
3. Make changes through the GitHub UI or any way you like and commit the changes
4. [Create a pull request] from your fork
5. [Discuss] the changes with course maintainers on the pull request

[template repository]: https://github.com/KL13NT/courseware-as-code-example
[create a pull request]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
[discuss]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#about-pull-requests
[introduction to open source]: https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source
[sync]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork
[review changes]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
