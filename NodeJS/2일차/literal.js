let sayNode = function() {
    console.log("Node");
};
let es = 'ES';
let oldObject = {
    sayJS : function () {
        console.log('JS');
    },
    sayNode : sayNode,
};

// es + 6 = ES6
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

// 객체 리터럴 만들 때 const 이용가능
const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6] : 'fantastic',
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);