const loginButton = document.querySelector('.login');

loginButton.addEventListener('click', () => {
    const idInput = document.querySelector('.id');
    const pwInput = document.querySelector('.pw');

    if(idInput.value.trim() === '' || pwInput.value.trim() === ''){
        alert('id, pw를 입력해주세요');
    }
});