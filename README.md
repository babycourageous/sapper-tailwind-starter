# Sapper TailwindCSS Starter Template

The default [Sapper](https://github.com/sveltejs/sapper) template with PostCSS and TailwindCSS for styling.

## Scaffold a new site

### Quick and Easy

The most straightforward way to start is with `degit` (which is what both `svelte` and`Sapper` use to start up their default templates). If the *PROJECT_NAME* argument is left off, the template will install in the current directory.

```
npx degit babycourageous/sapper-tailwind-starter PROJECT_NAME
```

### The Git (Manual) Way
Another option is to clone this project and re-initialize git

```
git clone --depth 1 git@github.com:babycourageous/sapper-tailwind-starter PROJECT_NAME
cd PROJECT_NAME
rm -rf .git
git init
```

## Install Dependencies

Once the template is finished being downloaded or cloned, install the dependencies with `yarn` or `npm install` if you prefer `npm`.