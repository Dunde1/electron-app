# Electron-App

- `electron`과 `react(cra)`를 사용해 제작하였습니다.
- `typescript`를 기본으로 사용합니다.

## 설정

### electron

- electron 관련 작업은 electron 폴더에서 작업합니다.
- tsconfig가 별도로 존재하며 electron 폴더에 있는 typescript 파일에 적용됩니다.
- `tsc` 할 경우 루트 디렉토리에 build-electron 폴더가 생기며 변환된 파일이 들어가게 됩니다.
- electron-builder 관련 설정은 루트의 `electron-builder.json`에서 설정합니다.
- public 폴더를 react와 공동으로 사용합니다.
- 빌드 시 build-electron 폴더가 생성됩니다.

### react

- react 관련 작업은 src 폴더에서 작업합니다.
- tsconfig는 루트에 존재하며 alias 설정을 위해 `tsconfig.json,` `config-overrides.js` 두 개의 파일을 수정해야 합니다.
- public 폴더를 electron과 공동으로 사용하며 빌드시 별도로 가지고 가게 됩니다.
- 빌드 시 build-react 폴더가 생성됩니다.

## 스크립트

- "start": 개발용 상태로 앱을 실행하게 됩니다.
- "build": 배포용 상태로 앱을 빌드하게 됩니다.
    - 최종 빌드 시 build 폴더가 생성됩니다.
    - 해당 build 폴더에는 build-electron, build-react, public, node_modules가 포함됩니다.
