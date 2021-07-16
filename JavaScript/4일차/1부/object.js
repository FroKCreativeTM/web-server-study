// 1. 코어 객체
// 자바스크립트 안에 내장이 되어있는 객체들(표준객체)
// Array, Date(시간), String(문자열), Math(수학 관련 메서드 제공)
// 웹 페이지 안에서 사용 가능하며 동시에 서버에서도 사용이 가능하다.

// 2. HTML DOM 객체
// HTML 태그들을 객체화 했다고 보면 된다.
// W3C 표준객체기 때문에 브라우저에 상관없이 사용 가능

// 3. 브라우저 객체
// 크롬이나 엣지 IE 등등에서 각자 제공하는 함수들이고
// BOM(Browser Object Model)에 따르는 객체
// 비표준이다.

let today = new Date();             // 시간 정보를 다루는 Date 타입의 객체를 생성한다.
let msg = new String("Hello");      // "Hello" 문자열을 담은 String 타입의 객체가 생성

// 객체가 생성이 되면, 내부의 프로퍼티나 메서드에 접근이 가능해진다.
console.log(today.getDate());