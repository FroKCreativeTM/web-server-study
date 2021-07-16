// Math
// 말그대로 수학 관련된 프로퍼티와 메서드
// PI값 같은 유명한 프로퍼티
// 루트화, sin, cos, tan 등등의 메서드

// 이런 경우는 4 제곱근을 반환을 한다. 
let sq = Math.sqrt(4);
// 얘는 3제곱근
let sq = Math.sqrt(4, 3);

let area = Math.PI * 2 * 2;

// 랜덤값을 발생시키고 싶다.
for(let i = 0; i < 1; ++i) {
    let m = Math.random() * 100; // 0~99.999999.. 보다 작은 실수의 난수를 리턴한다.
    var n = Math.floor(m); // m에서 소숫점 이하를 제거한 정수 (0~99 사이)
    console.log(n);
}