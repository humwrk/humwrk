# Humwrk

Humwrk is little (maybe bigger) product that will be released by Araclx, Inc. (company founded by @ZiQiLN) in near time, however we're separated from main
company because Human Resources and building products related to Human Resources isn't main target of Araclx for this moment. This product will maintained to
the end because that's not only a freelance platform like in first concept but complete platform for human resources at worldwide scale.

## Usage

This package is currently dedicated for In-Cloud version of Humwrk, which will targeted for individual users and companies, in future (planned 3.x version)
we'll introduce self-hosted version of Humwrk called AraclxDirectory which will be solution for manging human resources arround company and doing HR in
siplified way integrating Humwrk into AraclxDirectory. Our product naming may be unclear actually but we're working on documentation that will resolve all
common questions, actually questions can be made out on [Slack](https://join.slack.com/t/humwrk/shared_invite/zt-h6f16liq-rLvCUbMx~UW_GTAztZBmMQ).

## Development

Project currently is in early stage and scripts may be not up to date since there we're chaning a lot of things, but in general according to our plans for this
repository you need 4 things.

-  **yarn@2.x**, we don't support `npm` since it's like using Internet Explorer.
-  **[Skaffold](https://skaffold.dev/)** to handle CI/CD Pipeline
-  **Docker** for containers of course
-  **kubectl** for kubernetes obivo

To start with repository development you should at first **clone repository** with:

```bash
$ git clone https://github.com/humwrk/humwrk.git
```

And then you can simplify run development environment designed by us in single command.

```bash
$ skaffold dev
```

If you really don't want to use `skaffold` for development, you can use local enviroment but that's strongly not recommended since we're not willing to support
local development.

```bash
$ yarn run dev:local
```

## Contributing

The main purpose of this repository is to continue to evolve advanced boilerplate of new applications, making it faster and easier to use. Development of Humwrk
happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in
improving Humwrk.

### [Code of Conduct](./CODE_OF_CONDUCT.md)

ARACLX Corp. has adopted a Code of Conduct that we expect project participants to adhere. Please read it so that you can understand what actions will and will
not be tolerated.

### [Contributing Guide](./CONTRIBUTING.md)

Read our contributing guide to learn about our development process how to propose bugfixes and improvements to build and test your changes to Aeropods.

## License

[MIT](./LICENSE) @ ARACLX
