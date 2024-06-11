### REACT란?

- 자바 스크립트 라이브러리
- 구조는 MVC, MVVM과 같은 프레임워크가 다르게 오직 View만 처리

### SPA 구조 (Single Page Application)

- index.html 하나만 로드하고 실행시키는 구조

### REACT 구동

- **번들러 (Webpack)**이 모든 것을 동작 시켜 줍니다.
- **Webpack**이란 어플리케이션을 동작 시키는데 필요한 자원 (JS파일등, CSS, Image 등)을 하나로 묶어서 조합하여 경량화한 후 결과를 보여주는 도구
- **번들러**는 node.js를 통해서 직접 설정이 가능하지만, 리액트 프로젝트 생성 시 자동으로 포함되어 동작

### DOM (Document Object Model) ?

- HTML을 이해하기 쉽도록 트리 구조로 만들어진 태그 (객체)들을 의미함
- HTML방식이 아닌 다른 방식으로 접근 시에 사용되는 구조

### 리액트에서 Virtual DOM이란?

- 만약에 서버에서 어떤 값에 따라서 화면을 동적으로 변화시킨다면…
ex) document.getElementBy(”xx”).innerHtml = “<태그>변경</태그>”
위 예시같은 코드 규칙들이 많아질 겁니다. 실제 서비스에서 이런 기능들이 많은 경우, 관히라기 힘들어 집 겁니다.
그래서, facebook에서 view의 상태가 바뀌었을 때, 그에 따라서 DOM을 어떻게 업데이트를 할지 규칙을 정하는 것 이니라. 다 버리고, 처음부터 모든 것을 새로 만들어 보여주면 어떨까? 화면 전체를 다시 보여준다는 것은 그 처리 시간을 소요 한다는 의미가 됩니다. 리액트 Virtual DOM은 이런 문제를 해결합니다. 어떻게 바뀐 부분만 부분적으로 리렌더하여 사용한다 > Virtual DOM은 메모리에 있는 데이터…
- 리얼돔 (RDOM) (실제 보여지는 것)
보여지는건 리얼돔 바꾸는건 버추얼 돔 (비교해서 바뀐점이 있다면 변경)
변화는 리얼돔에서 일어남
- 새로고침 안해도 일어남

---

### 환경설정

- :se
    - terminal을 연다.
    - 설치
        - npm create react-app 프로젝트명
    - 명렁어
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/65d47488-3ffd-440e-b655-cb7516b09d13/656193bf-61ab-4bea-a374-5b79d4c6624b/Untitled.png)
    

### 패키지 관리자 명령문 이해하기

- npm / npx / yarn(기본 설치 x) 들은 모두 node 프로젝트에서 설치되는 패키지 관리 툴

1. npm
- 자바스크립트 런타임 환경 Node.js의 기본 패키지 관리자 (node package manager)
- 자바 스크립트 환경에서 프로젝트를 시작할 때 node와 함께 설치하라는 Getting Started가 많고, 사용 빈도도 높습니다.

- 패키지 설치 ( package.json 기준 )  [-g] 옵션 사용시 node.js에 기본 설치됨….

```java
npm install <패키지명>@<태그|버전|버전범위>
npm install은 package.json에 있는 패키지들을 설치
npm install <패키지명>@<태그|버전|버전범위> : 특정 패키지 설치를 진행
```

**  package-lock.json을 기준으로 설치 : npm ci

- 패키지 업데이트

```java
npm update [-g] [패키지명1, 패키지명2, … ]
```

- [-g] 옵션 사용시 전역 설치로 node.js에 설치 진행….

- 패키지 삭제
    
    ```java
    npm uninstall [@scope/] 패키지명[d@버전] [-S|--save|-D|--save-dev|-O|--save-optional]
    npm remove
    npm rm
    ```
    

^ 를 사용하는 경우에는 메이저 버전을 제외한 모든 버전을 업데이트 하겠다는 의미입니다.
예) ^1.0.0 은 1.0.0 부터 2.0.0이전까지 버전을 대상으로 합니다. 즉, 1.X.X 버전 모두 업데이트하겠다는 의미입니다. 단, 1.0.0 미만인 경우에는 API가 수시로 바뀌는 이리 있으므로 0.1.0 버전과 0.2.0버전은 호환이 안될 수 있습니다. 그래서 이 경우는 예외를 두게 됩니다. 즉, ^0.1.0은 0.1.0 이상 0.2.0미만의 버전까지 업데이트를 합니다.

~(틸드)라고 읽고, 현재 지정한 버전의 마지막 자리 내 범위만 자동으로 업데이트를 합니다.
예) ~0.0.1은 0.0.1보다 크거나 0.1.0보다 작은 범위에서 업데이트를 합니다.
~0.3.1이라면 0.3.1보다 크거나 0.4.0보다 작은 버번까지 업데이트를 합니다.
~1은 1.0.0부터 1.x.x까지 업데이터를 합니다.

시맨틱 버전의 하위 의존성 여부는 해당 패키지를 만드는 사람의 마음대로 하는 경우도 많으므로 의존성 업데이트를 한 다음에는 꼼꼼하게 테스트해 문제가 없는지 확인이 필요합니다.

---

1. npx
- npx(executed npm binaries)는 npm에 속해 있는 패키지 실행 도구입니다.
- npx는 패키지 실행도구라는 점이 npm과 차이점
- 다른 사람의 git에 있는 프로젝트를 다운 받아서 package.json의 script중 하나를 실행하고 싶을 때, 패키지가 설치되어야 합니다. 이럴 때 npx와 스크립트를 적으면 패키지 설치를 하지 않고 실행이 가능함

1. yarn
- 안전하고, 안정적으로 재현 가능한 프로젝트. yarn은 npm, npx와 결을 달리하는 패키지 관리자
- 속도나 안정성에서 npm과 비슷하거나 더 나은 효과를 가져옴.
- 차이점은 버전을 어디에서나 같게 만들어서 버그를 줄여주고, 보안성이 높다는 점
- yarn은 기본적으로 설치되어있지 않습니다. 따라서 yarn패키지 관리자를 설치해야합니다.

- 의존성 (패키지) 설치 (npm install) : yarn
- 패키지 설치 (npm install 패키지 명) : yarn add 패지징 명
- 패키지 업데이트 (npm update 패키지 명) : yarn upgrade
- 패키지 삭제 : yarn remove 패키지 명
- 프로젝트 초지화 : yarn init
- 스크립트 실행 : yarn tun
- bin 패키지 실행: yarn 패키지 명령어

---

# App.js

```jsx
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

- return (JSX) 문장을 반환
- export default App으로 모듈을 내보내고 있음…
- - index.js파일에서 <App />으로 보내진 app을 사용

jsx란?

js의 확장 문법으로 html에 js코드를 녹아낸 형태

- 리액트의 생김새를 정의할 때 사용되는 문법으로 볼 수 있습니다.
- html과 같아보이지만 실제로는 javaScript입니다.
- XML형태로 코드를 작성하게 되면 babel이 JSX를 javascript로 변환해 줍니다.
- 코드를 수정하게 돨때 자동으로 화면이 리랜더링 됩니다. (웹팩 로더가 동작)
- Webpack loader 는 직접 설정이 가능하고 create react-app생성시 자동으로 설정

** Webpack loader는 다양한 종류가 있음

- CSS로더 - CSS로더
- File로더 - 폰트, 이미지, 파일 등을 로드
- BABEL로더 - ES6문법을 화면에 사용할 es5문법으로 다운그레이트하여 변환. 설정 파일은 webpackConfig.js

— 

React의 JSX문법 (기본 규칙) 

1. JSX의 주석 처리 (ALT + Shift + A) ex) /*ㄱ디=”DSSDA" */
2. JSX문법 - 반드시 하나의 태그를 RETURN해야 합니다.
3. DIV 사용하기 싫으면 Fragment컴포넌트를 이용해서 처리해야합니다.
4. 함수 안에서 만들어진 변수는 중괄호를 사용하여 참조할 수 있음 ex){name{
5. if문 대신 3항연산자를 이용함
6. 화면에 보여주고 싶은게 없다면 null을 이용합니다. ex) return null
7. undefined를 반환하는 상황을 만들면 안됩니다.
8. DOM요소에 스타일을 직접 넣을 때는 반드시 객체형 개체로 묶고, 속성은 카멜 표기법을 사용합니다.
9. 태그의 CLASS속성은 CLASSNAME을 사용하여 적용
10. HTML 에서 홀로 사용하는 태그는 닫는 태그를 반드시 작성

```java
<br>  	 => <br></br> or <br />,
    <img> => <img></img> or <img /> 
```

##컴포넌트

- 컴포넌트는 일종의 ui조각이라고 할 수 있습니다. 때문에 쉽게 재사용이 가능합니다,
- 리액트는 컴포넌트의 형태가 Tree구조입니다.
- 컴포넌트가 함수형, 클래스형 2가지가 존재함.

[함수형]

```java
function Welcome(props) {
return <h1>Hello, {props.name}</h1>
}
```

[클래스]

```java
class Welcome extends React.Component{
render() {
return <h1>Hello, {props.name}</h1>
}
}
```