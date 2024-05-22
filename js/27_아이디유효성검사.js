const checkList = {
    "inputId" : false
};
const inputId = document.querySelector("#inputId")

inputId.addEventListener("input", e => {
    const value = e.target.value;
    const span = e.target.nextElementSibling.nextElementSibling;

    // 만약에 입력이 아무것도 안되어있으면 입력 x
    if(value.trim().length == 0) {
        span.textContent = "영어(대문자, 소문자), 숫자 6~16자리";
        span.classList.remove("check","error");
        e.target.value = "";
        checkList["inputId"] = false;
        return;
    }

    const regExp = /^[A-Za-z0-9]{6,16}$/;

    // 만약에 한글이름을 제대로 작성한 경우
    if(regExp.test(value)){
        span.textContent = "유효한 형식의 아이디입니다.";
        span.classList.add("check");
        span.classList.remove("error");
        checkList["inputId"] = true;
    } else {
        span.textContent = "유효하지 않은 형식의 아이디입니다.";
        span.classList.add("error");
        span.classList.remove("check");
        checkList["inputId"] = false;
    }
})