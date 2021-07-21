// I/O : C언어 하다보면
// stdio.h : why use? printf, scanf(standart IO)
// Input, Output : 입출력!
// IO의 종류 : 파일 시스템 접근(파일을 읽어오거, 파일에 쓰거나, 폴더를 만들거나!)
// 네트워크에 정보를 요청해서 가져오거나(읽는 것), 네트워크를 통해서 서버에 정보를 보내거나(출력)

// 블로킹 IO : 파일을 직접적으로 가져와서 읽고 쓰는 경우 많이 사용한다.
function longRunningTask() {
    // 오래 걸리는 작업
    console.log('오래 기다렸습니다~');
}

console.log('작업 시작');
longRunningTask();
console.log('다음 작업');
console.log('');

// 논 블로킹 IO : 네트워크 환경에서 정보를 주고받을 때 자주 사용한다.
// 논 블로킹 != 무조건 적인 동시성 이건 보장하지 않다!
console.log('작업 시작');
setTimeout(longRunningTask, 0);
console.log('다음 작업');