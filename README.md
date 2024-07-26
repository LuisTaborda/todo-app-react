# Todo-App React with Typescript 

**NOTE: Required install node/npm in your computer**
**Figma [Simple-ToDo-List-Design-(Community)](https://www.figma.com/design/Ri4XSAhKLfkkTEJEgqgQRa/Simple-ToDo-List-Design-(Community)?node-id=0-1&t=FSiluLPMTwgZJ1kE-0)**
![Imagem prototipo](./resources/image/prototipo.png)

## Getting Start

#### To init app react
`npx create-react-app <app_name> --template typescript --use-npm`

**NOTE: override `<app_name>` to your project name**

#### To install [SASS](https://www.npmjs.com/package/sass) 
`npm install --save-dev sass`

#### To install [CSS MODULE](https://www.npmjs.com/package/typescript-plugin-css-modules) 
`npm install -D typescript-plugin-css-modules`

Once installed, add this plugin to your tsconfig.json:

```json
{
  "compilerOptions": {
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
}
```
