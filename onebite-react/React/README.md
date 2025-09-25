# React.js

### 📍 개요

- Meta(Facebook)이 개발한 오픈소스 JavaScript 라이브러리
- 웹 서비스의 복잡하고 동적인 사용자인터페이스(UI)를 효율적으로 개발하기 위해 만들어진 기술

### 📍 기술적인 특징

- 컴포넌트를 기반으로 UI를 표현한다
- 화면 업데이트 구현이 쉽다
- 화면 업데이트가 빠르게 처리된다

---

### 📍 컴포넌트를 기반으로 UI를 표현한다

- 컴포넌트 (Component)

  - 독립적이고 재사용 가능한 UI 구성 요소

- 웹 페이지 요소를 component 단위로 모듈화

  - 예시 : Header.js, Main.js, Footer.js
  - 여러 페이지에서 공통으로 사용되는 요소를 컴포넌트로 구현
  - 여러 개의 컴포넌트를 조립하여 웹페이지 표현
  - 중복 코드 제거, 해당 컴포넌트만 수정하여 유지보수 용이

### 📍 화면 업데이트 구현이 쉽다

- 업데이트

  - 사용자의 행동(클릭, 드래그)에 따라 웹 페이지가 스스로 모습을 바꿔 상호작용 하는 것

- 선언형 프로그래밍 방식으로 동작

  - 선언형 프로그래밍 : 과정은 생략하고 목적만 간결히 명시하는 방법 -> 코드가 간결함
  - 명령형 프로그래밍 : 목적을 이루기 위한 모든 일련의 과정을 설명하는 방식 -> 코드가 길고 복잡함

- State

  - 각 컴포넌트의 상태를 저장하는 변수
  - 값에 따라서 컴포넌트가 다른 UI를 화면에 렌더링하도록 설정

### 📍 화면 업데이트가 빠르게 처리된다

- 브라우저 렌더링 과정 (Critical Rendering Path)
  ![브라우저 렌더링 과정](./readme-image/image-1.png)

  - DOM (Document Object Model) : HTML 문서를 객체로 변환한 모델
  - Render Tree : 화면에 렌더링 되어야 하는 요소의들 모든 정보 포함
  - Layout : 요소의 배치를 잡는 작업
  - Painting : 실제로 화면에 그려내는 과정

- JavaScript가 DOM을 수정하면 업데이트가 발생
  ![업데이트01](./readme-image/image-2.png)
  ![업데이트02](./readme-image/image-3.png)
  ![Virtual Dom](./readme-image/image-4.png)

  - Virtual Dom : DOM을 자바스크립트 객체로 흉내낸 것, 실제 DOM의 가벼운 복사본
  - React는 업데이트가 발생하면 실제 DOM을 수정하기 전에 가상의 DOM에 먼저 반영
  - 실제 DOM에는 필요한 최소한의 변경만 반영해 성능 향상

---

### 📍 React App 생성

- 방법 1.

  1. Node.js 패키지 생성
  2. React 라이브러리 설치
  3. 기타 도구 설치 및 설정

- 방법 2. Vite

  - 차세대 프론트엔드 개발 툴
  - 기본 설정이 적용된 React App 생성 가능
  - React 공식 문서에서도 권장하고 있음
  - `npm create vite@latest`

### 📍 React App 구동

![React App 접속 원리](./readme-image/image-5.png)

- Vite를 통해 생성한 React App에는 웹 서버가 내장

- `npm run dev` : React App 서버를 가동시키는 명령어

  - http://localhost:5173/ : 현재 가동 중인 리액트 웹 서버에 접속할 수 있는 주소

  - 포트 번호 (Port Number) : 하나의 컴퓨터 내에서 여러 개의 서버를 동작시키기 위해서 필요한 주소 체계

- 웹 브라우저에서 주소로 접속 = 내컴퓨터(localhost)에서 실행되고 있는 리액트 웹 서버에 접속 요청

  - React App은 index.html 파일을 브라우저에게 응답

### 📍 React App 렌더링

1. Vite로 생성된 React App을 웹 브라우저에서 실행할 때 진입점인 index.html 파일이 가장 먼저 로드

2. index.html에서 script 태그로 연결된 main.jsx 자바스크립트 파일을 실행

3. main.jsx에서 App.jsx 파일의 App 함수가 리턴하는 HTML 요소를 React의 root 아래에 render 메서드를 통해서 화면에 렌더링

- 브라우저는 웹 페이지 로딩 시 기본적으로 HTML 파일을 읽음

- 리액트에서 HTML 태그를 리턴하는 함수를 '컴포넌트'라고 부름 (ex. App 컴포넌트)

---

### 📍 페이지 라우팅

- 다양한 페이지를 제공하는 방법
- 경로에 따라 알맞은 페이지를 렌더링 하는 과정
- React App은 SPA 방식 채택
- `npm i react-router-dom`

![alt text](./readme-image/image-6.png)

### 📍 MPA (Multi Page Application) & SSR (Sever Side Rendering)

- MPA (Multi Page Application)

  - 서버가 다수의 페이지(HTML파일)를 보유
  - 동작 방식이 매우 직관적, 많은 서비스가 사용하는 전통적인 방식

- SSR (Sever Side Rendering)

  - 브라우저가 페이지를 요청했을 때 서버에서 미리 완성되어 있는 페이지를 응답하는 방식

- MPA 방식의 페이지 이동

  1. 브라우저에서 페이지 요청
  2. 서버는 HTML 파일 탐색 후 반환
  3. 브라우저는 이전 페이지를 전부 제거하고, 새로운 페이지를 렌더링

- MPA 방식의 단점

  - 공통으로 사용되는 요소가 있어도 제거하고 새로 렌더링하기 때문에 비효율적
  - 화면이 새로고침 되는 것처럼 깜빡이기 때문에 매끄럽지 않음
  - 다수의 사용자 접속시, 서버의 부하가 심해짐

![alt text](./readme-image/image-7.png)
![alt text](./readme-image/image-8.png)

### 📍 SPA (Single Page Application) & CSR (Client Side Rendering)

- SPA (Single Page Application)

  - 서버는 기본 틀 역할을 하는 페이지(index.html) 하나만 보유 + JS파일
  - Bundling : 여러 개의 JS 파일을 하나의 JS 파일로 묶어주는 것 (vite가 담당)
  - Bundle JS File : 컴포넌트 등 React의 모든 정보가 포함, React App이라 부름

- CSR (Client Side Rendering)

  - 클라이언트측인 브라우저에서 직접 JS 파일을 실행해서 렌더링을 처리하는 방식

- SPA 방식의 페이지 이동

  1. 서버는 요청 경로 관계 없이 브라우저에 index.html 전달
  2. 브라우저는 index.html을 렌더링 (아무것도 렌더링 안됨, script 태그를 이용하여 main.jsx 가동)
  3. 서버는 후속으로 Bundle JS File 전달
  4. 브라우저에서 직접 Bundle JS File 실행
  5. main.jsx 파일이 실행되면서 render 메서드가 호출되어 App 컴포넌트 렌더링

- SPA 방식의 장점
  - 공통 컴포넌트는 유지하고, 필요한 컴포넌트만 교체하기 때문에 매끄럽고 효율적
  - 서버에 요청을 보내지 않고 브라우저 내에서 React App을 실행해서 컴포넌트를 렌더링하기 때문에 다수의 사용자가 접속해도 서버의 부하에 크게 상관 없음

![alt text](./readme-image/image-9.png)
![alt text](./readme-image/image-10.png)
![alt text](./readme-image/image-11.png)
![alt text](./readme-image/image-12.png)
![alt text](./readme-image/image-13.png)
![alt text](./readme-image/image-14.png)
