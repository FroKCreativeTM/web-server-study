class Player {
    // 클래스를 생성할 때
    // 자동으로 실행되는 메서드!
    constructor(type = 'player') {
        this.type = type;
    }

    // static 메서드?
    // 정적 메서드
    // 의미? : 공유되는 메서드
    // 전역 메서드
    // 전역 함수에서 얘를 써야되는 경우
    // 이 클래스와 관련된 전역 함수를 만들고 싶을 때 보통 많이 쓴다.
    static IsPlayer(player) {
        return player instanceof Player;
    }

    // 팁 : 보통 public 접근자를 가진 메서드의 경우
    // 보통은 대문자로 시작한다. (특히 C++, 게임업계)
    Attack() {
        console.log('attack');
    }
};

class Warrior extends Player {
    constructor(type, firstName, lastName) {
        // super
        // 이 클래스가 상속받은 클래스에게 데이터를 넘겨주는 것
        // 상속받은 클래스의 같은 이름의 메서드에게 넘겨준다.
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.Attack();
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

const newPlayer = new Warrior('player', 'Iron', 'Sword');
console.log(Player.IsPlayer(newPlayer));
newPlayer.sayName();