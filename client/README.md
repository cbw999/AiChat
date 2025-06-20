# React + TypeScript + Vite

# React 18 버전으로 다운그레이드 및 설치
npm install react@18.2.0 react-dom@18.2.0
npm install --save-dev @types/react@18.2.0 @types/react-dom@18.2.0

# 개발에 필요한 의존성 설치
---
`npm install` 명령어로 설치되는 패키지들은 주로 **웹 프론트엔드 개발, 특히 React 기반의 애플리케이션 개발에 사용되는 라이브러리**들입니다. 크게 몇 가지 범주로 나누어 설명 하면 아래와 같습니다.

### 1. UI 컴포넌트 및 디자인 시스템 관련

* **`@ariakit/react`**, **`@ariakit/react-core`**: 접근성을 고려하여 디자인된 React UI 컴포넌트 라이브러리입니다.
* **`@headlessui/react`**: Tailwind CSS와 같은 유틸리티 우선 CSS 프레임워크와 잘 작동하는 완벽하게 스타일되지 않은(headless) UI 컴포넌트 라이브러리입니다.
* **`@radix-ui/*` (예: `react-accordion`, `react-alert-dialog`, `react-checkbox` 등 다수)**: Radix UI는 높은 접근성, 유연성, 커스터마이징이 가능한 React UI 컴포넌트 라이브러리입니다. 다양한 UI 요소(아코디언, 다이얼로그, 체크박스 등)를 개별 패키지로 제공합니다.
* **`class-variance-authority`**: React 컴포넌트에서 조건부 스타일링을 쉽게 적용할 수 있도록 도와주는 유틸리티 라이브러리입니다. `clsx`와 함께 사용되는 경우가 많습니다.
* **`clsx`**: 조건부로 클래스 이름을 조합할 때 유용한 작은 유틸리티 라이브러리입니다.
* **`input-otp`**: OTP(One-Time Password) 입력 필드를 구현하기 위한 컴포넌트입니다.
* **`lucide-react`**: 다양한 아이콘을 React 컴포넌트로 사용할 수 있게 해주는 라이브러리입니다.
* **`rc-input-number`**: 숫자 입력 필드를 위한 React 컴포넌트입니다.

### 2. 상태 관리 및 데이터 페칭

* **`@tanstack/react-query`**: 서버 상태(데이터 페칭, 캐싱, 동기화 등) 관리를 위한 강력한 라이브러리입니다. 비동기 데이터를 다루는 데 최적화되어 있습니다.
* **`recoil`**: Facebook(Meta)에서 개발한 React 상태 관리 라이브러리입니다. 비교적 간단하고 유연한 API를 제공합니다.

### 3. 애니메이션 및 모션

* **`@react-spring/web`**: 스프링 기반의 물리적인 애니메이션을 구현하는 데 사용되는 라이브러리입니다.
* **`framer-motion`**: 선언적인 문법으로 강력한 프로덕션 레디 애니메이션을 구현할 수 있는 라이브러리입니다.
* **`react-flip-toolkit`**: FLIP(First Last Invert Play) 애니메이션 원리를 사용하여 요소가 이동하거나 변경될 때 부드러운 전환을 제공합니다.
* **`react-transition-group`**: React 컴포넌트의 마운트/언마운트 시점에 애니메이션을 적용하는 데 도움을 주는 라이브러리입니다.

### 4. 유틸리티 및 일반 라이브러리

* **`copy-to-clipboard`**: 텍스트를 클립보드로 쉽게 복사할 수 있는 유틸리티입니다.
* **`cross-env`**: Node.js 환경에서 플랫폼 간 환경 변수 설정을 일관되게 처리할 수 있도록 도와줍니다.
* **`date-fns`**: 날짜와 시간을 다루는 경량의 자바스크립트 라이브러리입니다.
* **`downloadjs`**: 클라이언트 측에서 파일을 다운로드할 수 있게 해주는 간단한 유틸리티입니다.
* **`export-from-json`**: JavaScript 객체를 JSON 형식으로 내보내는 데 사용됩니다.
* **`filenamify`**: 문자열을 유효한 파일 이름으로 변환하는 유틸리티입니다.
* **`html-to-image`**: HTML 요소를 이미지로 변환하는 데 사용됩니다.
* **`lodash`**: JavaScript 유틸리티 함수들을 모아 놓은 라이브러리로, 배열, 객체, 문자열 등을 다루는 데 유용합니다.
* **`match-sorter`**: 배열에서 문자열 검색 및 정렬을 효율적으로 수행하는 데 사용됩니다.
* **`qrcode.react`**: React 컴포넌트 내에서 QR 코드를 생성하는 라이브러리입니다.
* **`regenerator-runtime`**: ES6의 `async/await`와 `generator` 함수를 이전 버전의 JavaScript 환경에서 사용할 수 있도록 지원하는 런타임입니다.
* **`sse.js`**: Server-Sent Events (SSE)를 클라이언트 측에서 쉽게 처리할 수 있도록 도와주는 라이브러리입니다.
* **`tailwind-merge`**: Tailwind CSS 클래스 이름을 병합할 때 충돌하는 클래스를 자동으로 해결해주는 유틸리티입니다.
* **`tailwindcss-animate`**: Tailwind CSS에서 애니메이션 유틸리티 클래스를 제공합니다.
* **`tailwindcss-radix`**: Radix UI 컴포넌트와 Tailwind CSS를 함께 사용할 때 유용한 플러그인입니다.
* **`zod`**: 런타임에서 스키마 유효성 검사를 위한 TypeScript 우선 유효성 검사 라이브러리입니다.

### 5. React 핵심 및 관련 생태계

* **`react`**: 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리의 핵심입니다.
* **`react-dom`**: 웹 애플리케이션에서 React 컴포넌트를 렌더링하는 데 사용됩니다.
* **`react-router-dom`**: React 애플리케이션에서 라우팅을 구현하기 위한 라이브러리입니다.
* **`react-hook-form`**: React에서 폼(form)을 쉽게 관리하고 유효성 검사를 처리할 수 있게 해주는 라이브러리입니다.
* **`@tanstack/react-table`**: 복잡한 테이블 UI를 구축하고 데이터 필터링, 정렬, 페이지네이션 등을 처리하는 데 사용됩니다.

### 6. 국제화 (i18n)

* **`i18next`**: 웹 애플리케이션의 국제화를 위한 강력한 프레임워크입니다.
* **`i18next-browser-languagedetector`**: 브라우저에서 사용자의 언어 설정을 감지하는 플러그인입니다.
* **`react-i18next`**: `i18next`를 React 애플리케이션에서 쉽게 사용할 수 있도록 훅과 컴포넌트를 제공합니다.

### 7. 콘텐츠 렌더링 및 편집

* **`@codesandbox/sandpack-react`**: CodeSandbox의 코드 편집 및 샌드박싱 기능을 React 애플리케이션에 통합할 수 있는 컴포넌트입니다.
* **`react-markdown`**: Markdown 텍스트를 React 컴포넌트로 변환하여 렌더링합니다.
* **`rehype-highlight`**: `rehype`와 함께 사용하여 코드 블록에 구문 강조(syntax highlighting)를 적용합니다.
* **`rehype-katex`**: `rehype`와 함께 사용하여 LaTeX 수학 공식을 렌더링합니다.
* **`remark-directive`**: `remark` 파서에서 커스텀 디렉티브(예: `:::note` 블록)를 처리할 수 있게 합니다.
* **`remark-gfm`**: GitHub Flavored Markdown (GFM)을 파싱하는 `remark` 플러그인입니다.
* **`remark-math`**: Markdown에서 수학 블록을 파싱하는 `remark` 플러그인입니다.
* **`remark-supersub`**: Markdown에서 위첨자(superscript)와 아래첨자(subscript)를 파싱하는 `remark` 플러그인입니다.
* **`react-textarea-autosize`**: 내용에 따라 높이가 자동으로 조절되는 텍스트 영역 컴포넌트입니다.

### 8. 기타 특정 기능

* **`@dicebear/collection`**, **`@dicebear/core`**: DiceBear는 다양한 아바타를 생성해주는 라이브러리입니다.
* **`@marsidev/react-turnstile`**: Cloudflare Turnstile (캡차 대체 솔루션)을 React 애플리케이션에 통합하는 데 사용됩니다.
* **`js-cookie`**: 브라우저 쿠키를 쉽게 다룰 수 있는 라이브러리입니다.
* **`librechat-data-provider`**: `*`로 되어 있어 정확한 버전은 알 수 없지만, `librechat` 프로젝트의 데이터 프로바이더 역할을 하는 것으로 보입니다.
* **`react-avatar-editor`**: 이미지 자르기 및 편집 기능을 제공하는 React 컴포넌트입니다.
* **`react-dnd`**, **`react-dnd-html5-backend`**: 드래그 앤 드롭 기능을 구현하는 데 사용되는 라이브러리입니다. `react-dnd-html5-backend`는 HTML5 Drag and Drop API를 기반으로 합니다.
* **`react-gtm-module`**: Google Tag Manager(GTM)를 React 애플리케이션에 통합하는 데 사용됩니다.
* **`react-lazy-load-image-component`**: 이미지를 지연 로드(lazy load)하여 성능을 최적화하는 데 사용됩니다.
* **`react-resizable-panels`**: 크기 조절이 가능한 패널 레이아웃을 구현하는 데 사용됩니다.
* **`react-speech-recognition`**: 웹 스피치 인식(Web Speech API) 기능을 React 애플리케이션에서 쉽게 사용할 수 있도록 도와줍니다.
* **`react-virtualized`**: 대량의 데이터를 효율적으로 렌더링하기 위해 가상화(virtualization)를 사용하는 컴포넌트입니다. (예: 긴 리스트나 테이블)

이 목록은 매우 광범위하며, 이 패키지들은 웹 애플리케이션의 다양한 측면(UI, 데이터 관리, 성능, 국제화, 특수 기능 등)을 다루고 있습니다. 이들을 통해 복잡하고 기능이 풍부한 React 기반 애플리케이션을 개발할 수 있습니다.

## 운영 환경 의존성 패키지설치
npm install ^
@ariakit/react@0.4.15 ^
@ariakit/react-core@0.4.17 ^
@codesandbox/sandpack-react@2.19.10 ^
@dicebear/collection@9.2.2 ^
@dicebear/core@9.2.2 ^
@headlessui/react@2.1.2 ^
@marsidev/react-turnstile@1.1.0 ^
@radix-ui/react-accordion@1.1.2 ^
@radix-ui/react-alert-dialog@1.0.2 ^
@radix-ui/react-checkbox@1.0.3 ^
@radix-ui/react-collapsible@1.0.3 ^
@radix-ui/react-dialog@1.0.2 ^
@radix-ui/react-dropdown-menu@2.1.1 ^
@radix-ui/react-hover-card@1.0.5 ^
@radix-ui/react-icons@1.3.0 ^
@radix-ui/react-label@2.0.0 ^
@radix-ui/react-popover@1.0.7 ^
@radix-ui/react-progress@1.1.2 ^
@radix-ui/react-radio-group@1.1.3 ^
@radix-ui/react-select@2.0.0 ^
@radix-ui/react-separator@1.0.3 ^
@radix-ui/react-slider@1.1.1 ^
@radix-ui/react-switch@1.0.3 ^
@radix-ui/react-tabs@1.0.3 ^
@radix-ui/react-toast@1.1.5 ^
@react-spring/web@9.7.5 ^
@tanstack/react-query@4.28.0 ^
@tanstack/react-table@8.11.7 ^
class-variance-authority@0.6.0 ^
clsx@1.2.1 ^
copy-to-clipboard@3.3.3 ^
cross-env@7.0.3 ^
date-fns@3.3.1 ^
downloadjs@1.4.7 ^
export-from-json@1.7.2 ^
filenamify@6.0.0 ^
framer-motion@11.5.4 ^
html-to-image@1.11.11 ^
i18next@24.2.2 ^
i18next-browser-languagedetector@8.0.3 ^
input-otp@1.4.2 ^
js-cookie@3.0.5 ^
librechat-data-provider@* ^
lodash@4.17.21 ^
lucide-react@0.394.0 ^
match-sorter@6.3.4 ^
qrcode.react@4.2.0 ^
rc-input-number@7.4.2 ^
react@18.2.0 ^
react-avatar-editor@13.0.2 ^
react-dnd@16.0.1 ^
react-dnd-html5-backend@16.0.1 ^
react-dom@18.2.0 ^
react-flip-toolkit@7.1.0 ^
react-gtm-module@2.0.11 ^
react-hook-form@7.43.9 ^
react-i18next@15.4.0 ^
react-lazy-load-image-component@1.6.0 ^
react-markdown@9.0.1 ^
react-resizable-panels@3.0.2 ^
react-router-dom@6.11.2 ^
react-speech-recognition@3.10.0 ^
react-textarea-autosize@8.4.0 ^
react-transition-group@4.4.5 ^
react-virtualized@9.22.6 ^
recoil@0.7.7 ^
regenerator-runtime@0.14.1 ^
rehype-highlight@6.0.0 ^
rehype-katex@6.0.3 ^
remark-directive@3.0.0 ^
remark-gfm@4.0.0 ^
remark-math@6.0.0 ^
remark-supersub@1.0.0 ^
sse.js@2.5.0 ^
tailwind-merge@1.9.1 ^
tailwindcss-animate@1.0.5 ^
tailwindcss-radix@2.8.0 ^
zod@3.22.4

## 개발 및 테스트 환경 의존성 패키지 설치
npm install --save-dev ^
@babel/plugin-transform-runtime@7.22.15 ^
@babel/preset-env@7.22.15 ^
@babel/preset-react@7.22.15 ^
@babel/preset-typescript@7.22.15 ^
@tanstack/react-query-devtools@4.29.0 ^
@testing-library/dom@9.3.0 ^
@testing-library/jest-dom@5.16.5 ^
@testing-library/react@14.0.0 ^
@testing-library/user-event@14.4.3 ^
@types/jest@29.5.14 ^
@types/js-cookie@3.0.6 ^
@types/lodash@4.17.15 ^
@types/node@20.3.0 ^
@types/react@18.2.11 ^
@types/react-dom@18.2.4 ^
@vitejs/plugin-react@4.3.4 ^
autoprefixer@10.4.20 ^
babel-plugin-replace-ts-export-assignment@0.0.2 ^
babel-plugin-root-import@6.6.0 ^
babel-plugin-transform-import-meta@2.3.2 ^
babel-plugin-transform-vite-meta-env@1.0.3 ^
eslint-plugin-jest@28.11.0 ^
identity-obj-proxy@3.0.0 ^
jest@29.7.0 ^
jest-canvas-mock@2.5.2 ^
jest-environment-jsdom@29.7.0 ^
jest-file-loader@1.0.3 ^
jest-junit@16.0.0 ^
postcss@8.4.31 ^
postcss-loader@7.1.0 ^
postcss-preset-env@8.2.0 ^
tailwindcss@3.4.1 ^
ts-jest@29.2.5 ^
typescript@5.3.3 ^
vite@6.3.4 ^
vite-plugin-compression2@1.3.3 ^
vite-plugin-node-polyfills@0.23.0 ^
vite-plugin-pwa@0.21.2