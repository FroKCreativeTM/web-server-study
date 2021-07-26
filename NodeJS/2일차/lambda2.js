let friends = ['friend', 'friend', 'friend'];

function callFriend() {
    let that = this; // 자기 자신을 가져온다.
    this.friends.forEach(function (friend) {
        console.log(that.name, friend);
    });
}

let callLambdaFriend = () => {
    friends.forEach(friend => {
        console.log(this.name, friend);
    });
}

let relation1 = {
    name : 'frok1',
    friends : ['friend1', 'friend2', 'friend3'],
    logFriend : callFriend,
};
relation1.logFriend();

let relation3 = {
    name : 'frok3',
    friends : ['friend4', 'friend5', 'friend6'],
    logFriend : callFriend,
};
relation3.logFriend();


let relation2 = {
    name : 'frok2',
    friends : ['friend1', 'friend2', 'friend3'],
    logFriend : callLambdaFriend,
};
relation2.logFriend();

let relation4 = {
    name : 'frok4',
    friends : ['friend4', 'friend5', 'friend6'],
    logFriend : callLambdaFriend,
};
relation4.logFriend();