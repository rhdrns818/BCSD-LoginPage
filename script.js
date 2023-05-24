// 공란 확인 & 쿠키 설정
const $loginButton = document.querySelector(".login");

$loginButton.addEventListener("click", () => {
  const $idInput = document.querySelector(".id");
  const $pwdInput = document.querySelector(".pw");
  // input에 입력된 id, pwd 변수에 저장
  let cookieId = $idInput.value;
  let cookiePwd = $pwdInput.value;

  if ($idInput.value.trim() === "" || $pwdInput.value.trim() === "") {
    alert("id, pw를 입력해주세요");
  }if ($loginButton.innerText === "로그아웃"){
    // 쿠키의 아이디와 비밀번호를 만료
    document.cookie = `${cookieId}=${cookiePwd}; max-age=0`;
    // 로컬의 모든 것을 삭제
    localStorage.clear();
    // 세션의 모든 것을 삭제
    sessionStorage.clear();
    $idInput.style.display = "block";
    $pwdInput.style.display = "block";
    $idInput.value = "";
    $pwdInput.value = "";
    $loginButton.innerText = "로그인";
  }else{
    // 쿠키에 아이디와 비밀번호 저장, 만료기간은 72시간
    document.cookie = `${cookieId}=${cookiePwd}; max-age=259200`;
    // 로컬 키와 값을 보관
    localStorage.setItem(cookieId, cookiePwd);
    // 세션 키와 값을 보관
    sessionStorage.setItem(cookieId, cookiePwd);
    $loginButton.innerText = "로그아웃";
    $idInput.style.display = "none";
    $pwdInput.style.display = "none";
  }
});

// 고양이 사진 api
const $img = document.querySelector(".img");

async function getCat() {
  await axios
    .get("https://api.thecatapi.com/v1/images/search?size=full")
    .then((response) => {
      let res = response.data[0].url;
      $img.src = res;
    });
}

$img.addEventListener("click", getCat);

// 천안 날씨
const $weather = document.querySelector(".weather");

async function getWeather() {
  await axios
    .get("https://goweather.herokuapp.com/weather/Cheonan")
    .then((response) => {
      let weather = response.data.temperature;
      const plusText = document.createTextNode(weather);
      $weather.appendChild(plusText);
    });
}

getWeather();

