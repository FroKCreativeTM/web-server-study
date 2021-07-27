// promise ? 
// 콜백 지옥!
// 콜백 : 등록을 했다가 나중에 불러와
// 즉 이 태생 자체가 비동기
// promise
function findAndSaveUser(Users) {
    // 이벤트 리스너를 만든다.
    Users.findOne({})
        .then((user) => {
            user.name = 'cha';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({ gender : 'm' });
        })
        .then((user) => {
            // 생략
        })
        .catch(err => {
            console.error(err);
        });
}

// async/await
async function findAndSaveUser(Users) {
    try {
        // Users.findOne({})
        // 이미 비동기적!
        // promise, async await를 붙여서!
        let user = await Users.findOne({});
        user.name = 'cha';
        user = await user.save();
        user = await Users.findOne({ gender : 'm' });
    } catch(err) {
        console.error(err);
    }
}

const findAndSaveUserVar = async (Users) => {
    try {
        let user = await Users.findOne({});
        user.name = 'cha';
        user = await user.save();
        user = await Users.findOne({ gender : 'm' });
    } catch(err) {
        console.error(err);
    }
}