# Restroom API

Node.js REST apis using nextjs page router syntax.

## How to use

```
$ npm init -y
$ npm i restroom // This package is not yet published
$ mkdir api
$ touch api/hello.ts
```

package.json:

```
"scripts": {
  "start": "restroom dev"
},
```

hello.ts

```
const hello = (req: any, res: any) => {
  res.status(200).json({ message: 'Hello from the restroom 🚽!' });
};

export default hello;

```

## Good to know

This package uses expressjs configured with the nextjs page-router syntax for routing. The result is a super-easy syntax to build node.js REST apis

## Roadmap

-- to be added
