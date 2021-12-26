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

If you have `HTTP Error: 401` issue, do `yarn firebase logout && yarn firebase login`.

## Deploy

```bash
yarn deploy  # after yarn build-static
```

## Todo

[ ] Extract global style into a separate CSS file (production hash)
[ ] Add posts, content
