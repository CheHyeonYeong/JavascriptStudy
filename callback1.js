// call back은 함수 파라미터로 함수를 전달하여, 비동기 처리가 끝났을 때 전달된 함수를 실행.
// call back은 가독성이 좋지 못해 유지보수 및 디버깅이 힘듦

// 회원가입 단계 
// 1. 회원 가입 api를 호출하면서 데베에 저장
// 2. 이메일을 보내고
// 3. 성공 메시지를 보여주게 처리

const DB = [];
// 회원가입 api 함수
function register(user) {       // 회원가입 API
    return saveDB(user, function(user){        // DB에 저장
        return sendEmail(user, function(user){              // 메일 발송 콜백
            return getResult(user);                         // 결과 콜백
        });
    });
}

// 콜백 정의
function saveDB(user, callback){
    DB.push(user);
    console.log(`'save ${user.name} to DB'`);
    return callback(user);      // 인자값을 함수로 넘기는 것
}

// 이메일 발송 로그만 남기는 코드.. 실행 후 콜백

function sendEmail (user, callback) {
    console.log(`'send ${user.email} email'`);
    return callback(user);      // 인자값을 함수로 넘기는 것
}

// 결과 콜백
function getResult(user) {
    console.log(`'get ${user.name} result'`);
    return `success register ${user.name}`;
}

const result = register({email:"testuser@naver.com", password : '1234',name:"testuser"});
console.log(result);