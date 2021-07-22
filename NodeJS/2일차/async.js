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
        let user = await Users.findOne({});
        user.name = 'cha';
        // await : 비동기적인 return 
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
        // await : 비동기적인 return 
        user = await user.save();
        user = await Users.findOne({ gender : 'm' });
    } catch(err) {
        console.error(err);
    }
}