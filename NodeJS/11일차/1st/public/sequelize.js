// 사용자 이름을 눌렀을 때 덧글이 로딩되는 기능
document.querySelectorAll('#user-list tr').forEach((elem) => {
    elem.addEventListener('click', () => {
        const id = elem.querySelector('td').textContent;
        getComment(id);
    });
});

// 사용자 로딩
async function getUser() {
    try {
        const res = await axios.get('/users');
        const users = res.data;
        console.log(users);

        const tbody = document.querySelector('#user-list tbody');
        tbody.innerHTML = '';

        users.map(function(user) {
            const row = document.createElement('tr');
            
            row.addEventListener('click', () => {
                getComment(id);
            });

            // 로우 셀을 추가한다.
            let td = document.createElement('td');
            td.textContent = user.id;
            row.appendChild(td);

            td = document.createElement('td');
            td.textContent = user.name;
            row.appendChild(td);

            td = document.createElement('td');
            td.textContent = user.age;
            row.appendChild(td);

            td = document.createElement('td');
            td.textContent = user.married ? '기혼' : '미혼';
            row.appendChild(td);

            tbody.appendChild(row);
        });
    } catch(err) {
        console.error(err);
    }
}

// 덧글 로딩
async function getComment(id) {
    try {
        const res = await axios.get(`/users/${id}/comments`);
        const comments = res.data;
        const tbody = document.querySelector('#comment-list tbody');
        tbody.innerHTML = '';

        comments.map(function(comment) {
            const row = document.createElement('tr');

            let td = document.createElement('td');
            td.textContent = comment.id;
            row.appendChild(td);

            td = document.createElement('td');
            td.textContent = comment.User.name;
            row.appendChild(td);

            td = document.createElement('td');
            td.textContent = comment.comment;
            row.appendChild(td);

            const edit = document.createElement('button');
            edit.textContent = '수정';
            edit.addEventListener('click', async () => { // 수정을 한다면
                const newComment = prompt('바꿀 내용을 입력하세요');
                
                if(!newComment) {
                    return alert('내용을 반드시 입력해야합니다.');
                }

                try {
                    
                } catch(err) {

                }
            })
        });
    } catch(err) {
        console.error(err);
    }
}