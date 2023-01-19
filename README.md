 <!-- no toc -->

# Courseware as Code - Education Made Easy(ier)

[![All Contributors](https://img.shields.io/github/all-contributors/kl13nt/courseware-as-code-action?color=ee8449&style=flat)](#contributors)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/kl13nt/courseware-as-code-action?sort=semver)

_Automated collaborative courseware maintenance and production with ease!_

Courseware as Code Action is an intuitive courseware management project for
education everywhere. This project allows you to generate a fully functional and
deploy-able website by writing only [Markdown] files!

## Table of Contents

- [What Courseware as Code Actually Means](#what-courseware-as-code-actually-means)
- [Why This Project](#why-this-project)
- [Motivation](#motivation)
- [What's Inside?](#whats-inside)
- [Values](#values)
- [Getting Started](#getting-started)
- [Become a Sponsor](#become-a-sponsor)
- [Roadmap](#roadmap)
- [Contributing to This Project](#contributing-to-this-project)
- [Contributors](#contributors)
- [FAQ](#faq)

## What Courseware as Code Actually Means

In 2014, the US Army established the Cyber branch and the U.S. Army Cyber School
(USACyS). Quickly building USACyS from scratch required building courseware to
fill workforce-oriented curricula. They had assigned students and scheduled
classes before suitable content was created and needed a rapid solution to
create needed content.

Their requirements included the ability to store markup languages and the
ability to create, share, review, and manage content approval. GitLab provided
this through Git, which allowed them to apply the "everything as code" concept

So, why not apply this elsewhere?

## Why This Project

You may be asking "why not just make a guide explaining how to manage courseware
as code" and the answer is quite simple: maintaining everything as code requires
a full team just to setup and maintain, while many institutes cannot spare this
kind of human resources.

So I had the idea of developing a GitHub action with a template repository that
anyone can just "Use this template" and voila, you have a fully functioning
courseware as code maintenance system.

Of course it doesn't yet solve the problems of static hosting media and other
non-markup files, but I wanted to release it at this stage to get feedback and
to involve the community from the early start. Can't have a good community-based
project without the community! 😉

## Motivation

> Disclaimer: The Motivation documentation was written when I was in my third
> year of University. I'm now a graduate and enrolled in (mandatory 😅) military
> service.

I'm a student. A tired student. I'm tired of having to deal with outdated
knowledge in the courses I'm enrolled in. I'm tired of having no way of
contributing to the course I'm taking, nor a choice in how content is presented
to me.

This project, despite not providing a complete solution to these problems,
remains a positive attempt at providing an easier way for teachers and
courseware maintainers to update courseware, and a straight-forward method to
build a truly positive community led by students and teachers alike. A step
forward towards a dream I have. I got the idea from [GitLab's GSoC 2020
project].

## What's Inside?

- Statically generated HTML lecture pages!
- Markdown + Math (LaTeX) = ❤️
- Add more pages to your website without having to go outside of your Markdown
  comfort-zone with MDX! 😍
- Tutorials and examples to get started!
- Complete control over site metadata using configuration `cac.config.json`.
- Complete control over site themes through classless CSS. I built it with the
  most standard way of doing things in HTML to make this easier.

## Values

As the creator of this project I envisioned it how my student self 2 years ago
sought. Transparency, humbleness, appreciating collaboration, and support are
the pillars of my vision with this project.

- Transparency in admitting your mistakes as a course maintainer and letting the
  history of your changes be visible to the world.
- Humbleness in accepting that you can make mistakes, and in accepting help and
  contribution from students who may be decades younger than you and ages less
  experienced than you.
- Appreciating collaboration in showing how grateful you are that maintainers
  and students are putting in the effort to improve the courseware, and in
  providing a healthy environment for collaboration between maintainers and
  students alike.
- Support in providing the help needed in order for others to contribute comfortably
  to courses you maintain, and in creating a community of respect. This meant
  the world to me and I'm sure millions of other students as well.

## Getting Started

The project consists of three repositories:

- kl13nt/courseware-as-code-action: the action code itself.
- kl13nt/courseware-as-code-template: the NextJS template used to render the website.
- kl13nt/courseware-as-code-example: An example [template] repository to
  bootstrap course repositories from.

> This project assumes you have a GitHub account. It's free.

If you're a courseware maintainer or student you're going to interact with the
third repo only, which consists of the markdown content itself. Refer to the
[Usage Guide].

## Become a Sponsor

I invest a lot of my personal time and energy to maintain this project ([and
others!](https://github.com/KL13NT/)). If you'd like to sponsor me I have a
[GitHub Sponsors] profile up!

## Roadmap

- Dynamic collection structure
- Configurable code syntax highlighting language support!
- Custom image sizes!
- Presentations support through
  [Marp/Core](https://github.com/marp-team/marp-core)
- Downloadable PDF lecture and presentation files!
- Custom annotations such as (info, warn, danger)!
- Configurable NextJS templates and build pipeline steps!
- Student articles and blogs!
- CMS support!

## Contributing to This Project

If you're a developer wishing to extend or contribute to the action you're going
to be interacting with the first two, which are the source code that runs the
project. Refer to the [Developers Guide].

I'm open to all kinds of contributions. If you want to:

    🚀 Suggest a feature
    🐛 Report an issue
    📖 Improve documentation
    👩‍💻 Contribute to the code

You are more than welcome. By contributing to this repository you accept my
contribution [guidelines](CONTRIBUTING.md).

## Contributors

This project uses the [All Contributors] bot. All contributors (even on other repositories) will be added to this list.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/0xmostafam"><img src="https://avatars.githubusercontent.com/u/43635184?v=4?s=100" width="100px;" alt="Mostafa Elbadri"/><br /><sub><b>Mostafa Elbadri</b></sub></a><br /><a href="https://github.com/KL13NT/courseware-as-code-action/commits?author=0xmostafam" title="Documentation">📖</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## FAQ

**Why not use GitHub's Jekyll setup?**

Because I wanted this solution to work with other platforms like GitLab, and to
have complete control over the build steps. This allows me to swap out NextJS
for anything else, configure custom transformations on files before the static
generator is ever run, etc.

[contribution guide]: CONTRIBUTING.md
[gitlab's gsoc 2020 project]: https://gitlab.com/gitlab-com/marketing/community-relations/education-program/general/-/issues/88
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links
[template]: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template
[usage guide]: ./docs/usage.md
[developers guide]: ./docs/technical.md
[all contributors]: https://allcontributors.org/docs/en/bot/usage
[github sponsors]: https://github.com/sponsors/KL13NT
