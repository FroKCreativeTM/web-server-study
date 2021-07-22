let candyMachine = {
    status : {
        name : 'candy',
        count : 5,
    },
    getCandy : function () {
        this.status.count--;
        return this.status.count;
    },
};

// let getCandy = candyMachine.getCandy;
// let count = candyMachine.status.count;

// 위 주석된 방식과 비슷하다.
// 파이썬에는 이미 있는 문법!
let { getCandy , status : { count }} = candyMachine;

// 배열에서는 어떻게 사용?
let arr = ['node', {}, 10, true];
// let node = arr[0];
// let obj = arr[1];
// let bool = arr[3];

// 이것을 이런식으로도 가능하다.
// 위랑 같은 문법
// 나름 규칙이 있다. 만약 내가 받을 생각 없는 변수라면 무조건 스킵을 하고 넘어가야 된다.
const [node, obj, , bool] = arr;