리액트 연습용

1. 리액트 설치
   - npx create-react-app [프로젝트명] --template typescript
2. GIT으로 들어간 뒤 연동하고자 하는 Repository 생성
3. 리액트 프로젝트 폴더로 이동 후 다음 명령어 입력
   - git init
   - git status
     - commit이 필요하면 add 후 commit 할것
     - git add .
     - git commit -m 'first commit'
4. 해당 프로젝트에서 .git 폴더 생성 확인 후 다음 명령어 입력
   - git remote add origin [연동하고자하는 Repository 주소]
     - ex) git remote add origin https://github.com/openprime15/ReactPractice.git
   - git push origin master
5. GIT으로 들어가 연동이 성공했는지 확인

6. yarn start

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
