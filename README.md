# NestJS Application Template

## Introduction

Welcome to the 'nestjs-application' template repository! This repository serves as a comprehensive template for building scalable and efficient applications using NestJS. It is crafted to provide a seamless development experience with a focus on performance and best practices.

## Features

This template includes a complete setup with the following features:

- [**NestJS**](https://nestjs.com/): Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications.
- [**Fastify**](https://fastify.dev/): Fast and low overhead web framework, for Node.js.
- [**SWC**](https://swc.rs/): A super-fast compiler written in Rust, enabling quicker builds.
- [**Vitest**](https://vitest.dev/): A modern testing framework with built-in TypeScript support.
- [**ESLint**](https://eslint.org/): A static code analysis tool for identifying problematic patterns in JavaScript code.
- [**Prettier**](https://prettier.io/): An opinionated code formatter for maintaining a consistent code style.
- [**husky**](https://typicode.github.io/husky/): A tool for managing Git hooks to automate tasks like linting and testing before commits.
- [**commitlint**](https://commitlint.js.org/#/): Ensures your commit messages meet the conventional commit format.
- [**lint-staged**](https://github.com/lint-staged/lint-staged): Run linters against staged git files to catch errors before they make it to the repository.
- [**EditorConfig**](https://editorconfig.org/): Helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
- [**asdf**](https://asdf-vm.com/): Manages all your runtime versions with one tool.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or higher)
- [pnpm](https://pnpm.io/) (or npm, or Yarn)

## Installation

1. Clone the repository:
  ```bash
  git clone git@github.com:tsabolov/nestjs-application.git <application_name>
  cd <application_name>
  ```

  replace `<application_name>` with the name of your application.

2. Install dependencies:
  ```bash
  pnpm install
  ```

3. Running the Application:
  ```bash
  pnpm start
  ```

  The application will start in a development mode (every change in the code will cause the server to restart). Open `http://localhost:8080` in you browser.

## Running Unit Tests

- Execute unit tests using Vitest:
  ```bash
  pnpm test
  ```

- Execute unit tests in watch mode:
  ```bash
  pnpm test -- --watch
  ```

- Execute unit tests with coverage collection:
  ```bash
  pnpm test -- --coverage
  ```

- Start unit tests with UI:
  ```bash
  pnpm test -- --ui
  ```

## Running E2E Tests

- Run end-to-end tests to ensure the application components work together seamlessly:
  ```bash
  pnpm test
  ```
- Execute E2E tests in watch mode:
  ```bash
  pnpm e2e -- --watch
  ```

- Execute E2E tests with coverage collection:
  ```bash
  pnpm e2e -- --coverage
  ```

- Start E2E tests with UI:
  ```bash
  pnpm e2e -- --ui
  ```

## Contributing

We warmly welcome contributions to the 'nestjs-application' template! Whether you're fixing a bug, adding a feature, or improving documentation, your input is valuable. Here's how you can contribute:

1. **Fork the Repository**: Start by forking the repository to your GitHub account.
2. **Clone Your Fork**: Clone your fork to your local machine to start making changes.
3. **Create a New Branch**: Create a new branch for your changes. It's best to name the branch in a way that reflects the nature of your changes.
4. **Make Your Changes**: Implement your changes, additions, or fixes. Ensure you adhere to the existing code style and follow best practices.
5. **Run Tests**: Before submitting your changes, run the unit and E2E tests to ensure everything is working as expected.
6. **Write Meaningful Commit Messages**: Use clear and concise commit messages, following the conventional commit format.
7. **Update Documentation**: If your changes require it, update the documentation to reflect these changes.
8. **Submit a Pull Request (PR)**: Push your changes to your fork and submit a pull request to the main repository. In your pull request description, explain your changes and their impact.
9. **Code Review**: Wait for the maintainers to review your PR. Be open to feedback and willing to make revisions if necessary.
10. **Get Merged!**: Once your PR is approved, it will be merged into the main repository.

By contributing, you agree to abide by the project's code of conduct and licensing terms. Happy coding!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.