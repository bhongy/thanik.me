# thanik.me

A personal website of Thanik Bhongbhibhat <email@thanik.me>

Site built with [astro](https://astro.build/).

## Developement

```bash
yarn start
```

## Production Build

```bash
yarn build
```

## Test Build Locally

```bash
yarn firebase serve  # after yarn build
```

If encounter `HTTP Error: 401`, do `yarn firebase logout && yarn firebase login`.

## Deploy manually

💡 Note: the site is automatically built and deployed from `main` branch.

```bash
yarn deploy  # after yarn build
```
