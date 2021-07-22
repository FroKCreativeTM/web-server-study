// 콜백 지옥
function funcAndSaveUser(Users) {
    Users.findOne({}, (err, user) => { // 첫번째 콜백
        if(err) {
            return console.error(err);
        }

        user.name = 'cha';
        user.save((err) => {    // 두번째 콜백
            if(err) {
                return console.err(err);
            }

            Users.findOne({ gender : 'm' }, (err, user) = { // 세번째 콜백

            });
        });
    });
}

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