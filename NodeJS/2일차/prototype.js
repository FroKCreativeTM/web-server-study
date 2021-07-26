let Player = function(type) {
    this.type = type || 'player';
}

Player.isPlayer = function (player) {
    // instanceof
    // 왼쪽 변수 instanceof 오른쪽 클래스 이름
    // 변수가 이 오른쪽에 있는 클래스 타입인가?를 검사하는 것
    return player instanceof Player;
}

Player.prototype.attack = function() {
    console.log('Attack!');
};

let Warrior = function(type, firstName, lastName) {
    Player.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};

Warrior.prototype = Object.create(Player.prototype);

// 상속하는 부분
Warrior.prototype.constructor = Warrior;
Warrior.prototype.sayName = function() {
    console.log(`${this.firstName} ${this.lastName}`);
}
let OldWarrior = new Warrior('player', 'Iron', 'Sword');
OldWarrior.sayName();