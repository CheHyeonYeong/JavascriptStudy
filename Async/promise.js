// promise는 자바스크립트에서 비동기 실행을 동기화하는 구분으로 사용
// 실행 단계 : 이행(fullfill, 성공), 불이행(reject), 대기(pendding)

const DB = [];
function saveDB(user) {
    const oldDBSize = DB.length;
    DB.push(user);
    console.log(`'save ${user.name} to DB'`);
    return new Promise((resolve, reject) => {
        if (DB.length > oldDBSize) {
            resolve(user);
        } else {
            reject(new Error('fail to save DB'));
        }
    });
};

function sendEmail(user) {
    console.log(`'send ${user.email} email'`);
    return new Promise((resolve) => {
        resolve(user);
    });
};

function getResult(user) {
    console.log(`'get ${user.name} result'`);
    return new Promise((resolve) => {
        resolve(`success register ${user.name}`);
    });
}

function registerByPromise(user){
    // 비동기 호출이지만 순서를 지켜서 실행
    const result = saveDB(user).then(sendEmail).then(getResult);
    console.log(result);
    return result;
}

const myUser = {email:"testuser@naver.com", password : '1234',name:"testuser"};
registerByPromise(myUser)