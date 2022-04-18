# Image processing API

- Resize any jpg image by setting its name and the desired width and height as parameters in the URL.

## Query string parameters

| Query string param    | Description |
|------------------|------------------|
| filename    | Any image with .jpg extension in the `images` folder   |
| width       | Custom image width          |
| height      | Custom image height      |

### Backend

- [Node.js v14+](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Sharp package](https://www.npmjs.com/package/sharp)

### Tooling

- [ESLint](https://eslint.org/)
- [Nodemon](https://nodemon.io/)
- [jasmine](https://jasmine.github.io/)
- [prettier](https://prettier.io/)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [typescript](https://www.npmjs.com/package/typescript)
- [express](https://www.npmjs.com/package/express)
- [sharp](https://www.npmjs.com/package/sharp)
- [supertest](https://www.npmjs.com/package/supertest)
- [jasmine-spec-reporter](https://www.npmjs.com/package/jasmine-spec-reporter)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [@types/sharp](https://www.npmjs.com/package/@types/sharp)
- [@types/supertest](https://www.npmjs.com/package/@types/supertest)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [@types/node](https://www.npmjs.com/package/@types/node)
- [@types/express](https://www.npmjs.com/package/@types/express)
- [@types/jasmine](https://www.npmjs.com/package/@types/jasmine)

## Getting started

To get this project up and running, one will need:

1. Install the dependencies
2. Build and implement the application

### Install dependencies

This is straightforward, downloading this repository you can execute the following command from the root folder:

```bash
npm install
```

### build the application

To process the output folder to start the project

```bash
npm run build
```

### execute the application

after installing the dependencies you can start the app with the following command:

```bash
npm run start
```

### Linter

Code styling check is handled by ESLint. You can execute the command below:

```bash
npm run lint
```

### Typescript transpiling

The backend code is delivered through the `src/index` folder, and the transformed output is placed under `index/dist.
You can execute the command below:

```bash
npm run build
```

### Executing jasmine test

The test suite validates the basic functionality of the images handler helper. You can execute the command below:

```bash
npm run test
```

### Prettier

To format the code and make it more beautiful

```bash
npm run prettier
```

## Build the project

- Run npm run start
- Set the image you want to resize under images (The file must be a .jpg)
- Start the app with node build/.
- Use the URL <http://localhost:3000/api/images> and set the name of the image (filename) and the desired width and height as parameters, for example: <http://localhost:3000/api/images?filename=encenadaport&width=300&height=300>
- You'll get the resized image in the browser, and you can see it as well under public/outpot
# Image-Processing-API
