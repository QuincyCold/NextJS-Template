<p align="center">
  <a href="https://nextjs.org/">
    <svg width="72" heigh="72" aria-label="Vercel logo mark" role="img" style="width:auto;overflow:visible" viewBox="0 0 72 72"><path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" fill="black"></path></svg>
  </a>

  <h3 align="center">Nextjs Template</h3>

  <p align="center">
    This is nextjs template with typescript, sass, eslint, prettier.
  </p>
</p>


## Table of contents

- [Table of contents](#table-of-contents)
- [Status](#status)
- [What's included](#whats-included)
  - [1. General](#1-general)
  - [2. Routing folder](#2-routing-folder)
  - [3. Component folder](#3-component-folder)
- [Setup](#setup)
- [Env](#env)
- [Coding Convention](#coding-convention)
  - [1. Common Rules](#1-common-rules)
  - [2. Nextjs Rendering Composition Pattern](#2-nextjs-rendering-composition-pattern)
  - [3. Naming Conventions](#3-naming-conventions)
- [Contributing](#contributing)
- [Creators](#creators)
- [Thanks](#thanks)
- [Copyright and license](#copyright-and-license)

## Status

Here is the status of the project progress:
- [x] Setup project
- [ ] ...

## What's included

### 1. General

```
<project-name>/
├── .husky
│   ├── pre-commit // Run before commit
├── node_modules // Contains all dependencies
├── public // Contains public files
├── src/
│   ├── app/
│   │   ├── favicon.io // Favicon
│   │   ├── layout.tsx // Define layout for routing "/"
│   │   ├── page.tsx // Contain rendering code for routing "/"
│   │   ├── [styles.sass] // Define styles
│   │   ├── [error.tsx] // Define error rendering
│   │   ├── [global-error.tsx] // Define global error rendering
│   │   ├── [_components]/ // Internal components which is just used by routing "/"
│   │   │   ├── [<ComponentFolder>]* // See ComponentFolder structure below
│   │   │   └── index.ts // Export components
│   │   └── [<routing-folder>]* // See routing-folder structure below
│   ├── components
│   │   ├── [<ComponentFolder>]* // See ComponentFolder structure below
│   |   ├── index.ts // Export components
│   ├── configs/
│   │   ├── [<config-file>.config.ts]
│   │   └── index.ts // Export configs
│   ├── constants/
│   │   ├── [<constant-file>.constant.ts]
│   │   └── index.ts // Export constants
│   ├── contexts/
│   │   └── [<FileContext>]/
│   │       ├── context.tsx // Define context type & default value
│   │       ├── provider.tsx // Define provider component for context
│   │       ├── hook.ts // Define hook to use context
│   │       └── index.ts // Export context
│   ├── enums/
│   │   ├── [<enum-file>.enum.ts] // Define enum
│   │   └── index.ts // Export enums
│   ├── hooks/
│   │   ├── [<useHookName>.hook.ts] // Define hook
│   │   └── index.ts // Export hooks
│   ├── layouts/
│   │   ├── [<ComponentFolder>]* // See ComponentFolder structure below
│   │   └── index.ts // Export layouts
│   ├── styles/
│   │   ├── globals.sass // Define global styles
│   │   └── mixins/
│   │       ├── [<mixin-file>.mixin.sass]
│   │       └── mixins.sass // Export mixins
│   ├── types/
│   │   ├── common.type.ts // Define common types
│   │   ├── [<type-file>.type.ts] // Define type
│   │   └── index.ts // Export types
│   │
│   └── utils/
│       ├── [<util-file>.util.ts] // Define util
│       └── index.ts // Export utils
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

### 2. Routing folder

```
[<routing-folder>] // Define a routing
├── page.tsx // Define page component
├── [layout.tsx] // Define layout of page
├── [styles.sass] // Define styles of page
├── [error.tsx] // Define error page
├── [<routing-folder>]* // Define child routing
└── [_component] // Define components used in routing
    ├── [<ComponentFolder>]* // See ComponentFolder structure below
    └── index.ts // Export components
```

### 3. Component folder

```
[<ComponentFolder>] // Define a component
├── index.ts // Export component
├── impl.tsx // Contains rendering code of component
├── [types.ts] // Define types used in component
├── [styles.sass] // Define styles of component
└── [<ComponentFolder>]* // Define child components used in component
```

## Setup
- Step 1: create `.env.local` file in root folder and fill content following **[Env Specification below](#env)**.
- Step 2: run `npm install` to install all dependencies.
- Step 3: run `npm run dev` to start development server on local.
  - Run development server with custom port: `npm run dev -- -p <port>`

## Env
```
# Env list
```

## Coding Convention
### 1. Common Rules
- Using typescript, ES6 syntax.
- Only use `let` and `const` to declare variables.
- Use optional chaining `?.` if things can be `null` or `undefined`.
- Write function components instead of class components or arrow function components.
- Optional props should have default value.
- Avoid inline CSS unless necessary the style is logical handled and calculated at runtime.
- Remove all `console.log` before commit and create PR.
- Treat props as ready-only. Do not try to modify it.
- Breakdown smaller Components if origin Component is large.
- Keep component small.
- Favour arrow functions.
- Avoid inline CSS.
- Use SASS and method BEM for `className`.
- Always specify data type of variable, function params, function return value.

### 2. Nextjs Rendering Composition Pattern
- Server side rendering:
  - Fetch data.
  - Access backend resources (directly).
  - Keep sensitive information on the server (access tokens, API keys, etc).
  - Keep large dependencies on the server to reduce client-side JavaScript.
- Client side rendering:
  - Add interactivity and event listeners (`onClick()`, `onChange()`, etc).
  - Use State and Lifecycle Effects (`useState()`, `useEffect()`, etc).
  - Use browser-only APIs.
  - Use custom hooks that depend on state, effects or browser-only APIs.
  - Prevent these things below rerendering when its parent component rerender:
    - Required to use `useMemo` when transform or build data which is depend on param props or other variables.
    - Required to use `useCallback` when define functions or event handlers inside component.

### 3. Naming Conventions
- **Component Folder name**: Use PascalCase (ex: `SignInButton`).
- **Variable name**: Use camelCase (ex: `userProfile`).
- **Function name**: Use camelCase (ex: `getUserProfile`).
- **Hook name**: Use useHookName (ex: `useTranslation`).
- **Util/Config/Constant/Enum/Type file name**: Use kebab-case (ex: `config-file`).
- **Config/Constant/Enum constant name**: Use UPPER_CASE (ex: `ROUTING_PATH`).

## Contributing

Please read through our [contributing guidelines](https://reponame/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, all HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Main author](https://github.com/usernamemainauthor).

Editor preferences are available in the [editor config](https://reponame/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.

## Creators

**Creator 1**

- <https://github.com/usernamecreator1>

## Thanks

Some Text

## Copyright and license

Code and documentation copyright 2023-2024 the authors. Code released under the [MIT License](https://reponame/blob/master/LICENSE).