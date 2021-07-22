// for 문을 써서 프로미스를 순차적으로 실행시키고 싶은 경우
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');

(async () => {
    // python
    // for i in range(0, 10) 0~9
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})();