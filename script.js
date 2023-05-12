const $loginButton = document.querySelector(".login");

$loginButton.addEventListener("click", () => {
  const $idInput = document.querySelector(".id");
  const $pwInput = document.querySelector(".pw");

  if ($idInput.value.trim() === "" || $pwInput.value.trim() === "") {
    alert("id, pw를 입력해주세요");
  }
});

const $img = document.querySelector(".img");

async function getCat() {
  await axios
    .get("https://api.thecatapi.com/v1/images/search?size=full")
    .then((response) => {
      let res = response.data[0].url;
      $img.src = res;
    });
}

$img.addEventListener("click",getCat);
