# thanik.me

Personal Website of Thanik Bhongbhibhat <email@thanik.me>

Site built with [Next.js](https://nextjs.org).

## Developement

```bash
yarn start
```

## Production Build

```bash
yarn build-static
```

## Test Build Locally

```bash
yarn firebase serve  # after yarn build-static
```

If encounter `HTTP Error: 401`, do `yarn firebase logout && yarn firebase login`.

## Deploy

```bash
yarn deploy  # after yarn build-static
```
