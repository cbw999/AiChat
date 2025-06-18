# React + TypeScript + Vite

npm create vite@latest client -- --template react-ts: 이 명령어는 프로젝트를 생성하지만, 이때 설치되는 react와 react-dom의 버전은 현재 Vite가 지정하는 최신 버전(아마도 React 19 RC)일 것입니다.
npm install react@18.3.1 react-dom@18.3.1: 이 명령어가 핵심입니다. react와 react-dom을 명시적으로 18.3.1 버전으로 설치하여 기존에 설치된 React 19 버전을 덮어씁니다. 18.3.1은 React 18의 최신 패치 버전 중 하나이며, 다른 18.x.x 버전을 원하시면 해당 버전 번호로 변경하시면 됩니다.
npm install --save-dev @types/react@18.3.1 @types/react-dom@18.3.1: TypeScript를 사용한다면, @types/react와 @types/react-dom 또한 React 18 버전에 맞는 타입 정의로 설치해야 합니다. 이는 타입 불일치 오류를 방지합니다.






This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
