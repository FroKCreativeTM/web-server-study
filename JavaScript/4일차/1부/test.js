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
        return "치킨 " + name + "을 먹었습니다.";
    }
}

let c1 = new chicken(10000, 3);

console.log(c1.eat("황금올리브"));