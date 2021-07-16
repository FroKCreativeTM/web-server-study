// 배열
// 자바스크립트는 let 하나로 모든 변수 타입을 표현

// 대괄호 안에 넣어준다.
let arr1 = [1, 2, 3, 4, 5];
// int arr = {1, 2, 3, 4, 5};

// 인덱스가 0에서 시작을 한다.
for(let i = 0; i < arr1.length; ++i) {
    console.log(arr1[i]);
}

// 배열을 만드는 방법
// 1. 단순히 []를 이용해서 만든다.
let arr2 = ["Hello", "World"];

// 자바스크립트의 배열 크기는 딱히 정해져있지 않아.
// 이런 경우 알아서 배열의 크기가 8로 바뀐다.
// 그럼 그 사인? null이나 0이나 undefined으로 선언됨
arr1[7] = 10;

// 2. Array 객체를 이용해서 배열을 만든다.
let arr3 = new Array("Hello", "World");

// 2.1. Array 객체를 만들땐 생성자 파라미터
let arr4 = new Array(7);    // 7개의 공간을 가진 배열 객체를 만들어주세요.
arr4[0] = "월";
arr4[1] = "화";
arr4[2] = "수";
arr4[3] = "목";
arr4[4] = "금";
arr4[5] = "토";
arr4[6] = "일";

let week = arr4.length;

// 단 자바스크립트에서 배열은 자료형을 신경쓰지 않는다.
let any = new Array(6);
any[0] = 10;
any[1] = 3.14;
any[3] = "안녕하세요";
any[2] = new Date();