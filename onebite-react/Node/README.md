# Node.js

### 📍 개요

- JavaScript 실행 환경(Run Time)
- 웹 브라우저가 아닌 환경에서도 자바스크립트 코드를 실행시켜주는 실행기
- React.js는 Node.js 기반의 JavaScript 라이브러리

### 📍 설치

- node 설치 확인 : `node -v`
- npm 설치 확인 : `npm -v`

### 📍 NPM (Node Package Manager)

- Node.js의 프로젝트 단위인 패키지를 관리하는 도구
- 새로우 패키지 생성, 외부 라이브러리 설치 및 삭제 등 기능 제공
- Node.js와 함께 설치됨

### 📍 패키지(Package)

- 프로젝트(Project)
  - 특정 목적을 갖는 프로그램의 단위
- 패키지(Package)
  - Node.js에서 사용하는 특정 목적을 갖는 프로그램의 단위
  - ex. 쇼핑몰 패키지, 웹 포털 패키지
- Node.js 패키지 생성 : `npm init`

  ```json
  // package.json
  {
    "name": "node",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "description": ""
  }
  ```

### 📍 실행 (2가지)

1. `node [파일경로]` (ex. `node src/index.js`)
2. 패키지 'scripts' 이용 : `npm run [설정한이름(명령어)]`

   ```json
   // package.json
   "scripts": {
      "start": "node src/index.js"
   },
   ```

   ```cmd
   npm run start
   ```

### 📍 모듈 시스템 (Module System)

- 모듈(Module)
  - 기능별로 나뉘어진 각각의 JS 파일
  - ex. user.js : user 모듈
- 모듈 시스템
  - 모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템
- JavaScript의 모듈 시스템
  - Common Js (CJS)
  - ES Module (ESM)
  - ...
- ES Module (ESM)

  ```json
  // package.json
  // 패키지 내에서 해당 모듈을 사용하기 위해 사용 설정 필요
  {
    "type": "module"
  }
  ```

### 📍 라이브러리

- 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것
- 라이브러리 설치 : `npm i [라이브러리명]` (ex.`npm i randomcolor`)
- node_modules 폴더
  - 실제로 설치된 라이브러리의 저장소
- package-lock.json 파일
  - 패키지가 사용하고 있는 라이브러리의 버전, 정보를 저장
- package.json 파일
  - 'dependencies'에 패키지가 사용(의존)하는 라이브러리 추가
  - `npm i` : node_modules 폴더, package-lock.json 파일이 없어도 설치되었던 라이브러리를 다시 설치할 수 있음
