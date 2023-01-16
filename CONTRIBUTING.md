# Contributing to This Project

Reading and following these guidelines will help me make the contribution process easy and effective for everyone involved. It also communicates that you agree to respect the time of the developers managing and developing these open source projects. In return, I will reciprocate that respect by addressing your issue, assessing changes, and helping you finalize your pull requests.

## Quicklinks

-   [Code of Conduct](#code-of-conduct)
-   [Getting Started](#getting-started)
    -   [Discussions](#discussions)
    -   [Issues](#issues)
    -   [Pull Requests](#pull-requests)
-   [Committing](#committing)

## Code of Conduct

I take the open source community seriously and hold myself and other contributors to high standards of communication. By participating and contributing to this project, you agree to uphold the [Code of Conduct](./CODE-OF-CONDUCT.md).

## Getting Started

Contributions are made to this repo via Issues and Pull Requests (PRs). A few general guidelines that cover both:

-   Search for existing Issues and PRs before creating your own.
-   Depending on the impact, it could take a while to investigate the root cause of a bug. A friendly ping in the comment thread to the submitter or a contributor can help draw attention if your issue is blocking.

### Discussions

This repository uses GitHub Discussions. This is where all discussions should occur. If you have an idea for a feature but don't have complete details on how it should be implemented then please use discussions to discuss these details. Issues are reserved for detailed bug reports and feature requests. If you have questions, basic ideas, or have built something awesome using this repository feel free to use discussions.  

### Issues

Issues should be used to report problems with the platform or request a new feature. When you create a new Issue, a template will be loaded that will guide you through collecting and providing the information I need to investigate.

If you find an Issue that addresses the problem you're having, please add your own reproduction information to the existing issue rather than creating a new one. Adding a [reaction](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/) can also help indicate to me that a particular problem is affecting more than just the reporter.

> ⚠️ Reproduction code/steps for bugs greatly helps.

### Pull Requests

PRs to my work are always welcome and can be a quick way to get your fix or improvement slated for the next release. In general, PRs should:

-   Only fix/add the functionality in question **OR** address wide-spread whitespace/style issues, not both.
-   Add tests for fixed or changed functionality.
-   Address a single concern in the least number of changed lines as possible.
-   Include documentation
-   Be accompanied by a complete Pull Request template (loaded automatically when a PR is created).

> It's best to open an Issue to discuss your proposal first.

In general, I follow the ["fork-and-pull" Git workflow](https://github.com/susam/gitpr)

0.  Ask for assignment to an issue
1.  Fork the repository to your own Github account
2.  Clone the project to your machine
3.  Create a branch locally with a descriptive name
4.  Commit changes to the branch
5.  Following any formatting and testing guidelines specific to this repo
6.  Push changes to your fork
7.  Open a PR in my repository and follow the PR template so that I can efficiently review the changes.

## Committing

Please make sure to follow the angular commit message format and use one of the
supported types. Commit messages are linted using commitlint before you actually
commit, so don't worry about it. All commit messages must be lower case.

**Supported types include:**

- `fix`: bug fixes
- `feat`: adding new features or new code in general
- `test`: adding tests or improving existing tests
- `docs`: documentation
- `config`: modifying tool configuration
- `ci`: modifying CI/CD configuration
- `chore`: cleanup tasks, merge commits, etc
- `refactor`: refactoring existing code
- `perf`: performance optimisation
- `style`: code style improvements
- `revert`: reverting a previous commit (only by maintainers)

> Make sure to
> [sign](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification)
> your commits. This guarantees ownership of your contributions.
