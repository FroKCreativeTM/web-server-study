// 사용자가 객체를 만드는 방법
// 1. new Object
// 2. 리터럴 표기법을 이용한다.
// 3. 객체의 틀(프로토타입, 객체 지향 언어에서는 클래스)를 만들고 객체 생성


// 1. new Object;
function eat() {
    console.log("먹었습니다");
}

let chicken1 = new Object();
chicken1.가격 = 18000;
chicken1.매움정도 = 4;
chicken1.순살 = true;
chicken1.마리수 = 1;
chicken1.eat = eat;

// 2. 리터럴 표기법
let chicken2 = {
    가격 : 20000,
    매움정도 : 2,
    순살 : false,
    마리수 : 3,

    eat : function() {
        console.log("진미통닭을 먹습니다.");
    }
}

// 3. 프로토타입
// 클래스 비슷한 느낌
// 'new 프로토타입' / 즉 지금까지 공부한 Date, String, Array 다 프로토타입
// 프로토타입을 만드는 방법
// 1. function으로 시작
// 2. 프로토타입 이름(파라미터1, 파라미터2, ...)
// 3. 코드블럭 안에 프로퍼티 및 메서드 작성
function chicken(price, num) {
    this.가격 = price;
    // 내가 직접 디폴트 값을 지정해줄 수 있다.
    this.매움정도 = 3;
    this.순살 = false;
    this.마리수 = num;

    // 중요한 점!
    // = 다음에 function에는 이름이 붙지 않는다.
    // 그냥 바로 매개변수 받을 걸 지정해준다.
    this.eat = function (name) {
        console.log("치킨 " + name + "을 먹었습니다.");
    }
}