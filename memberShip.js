// 이메일 형식이 맞는지 체크

function validateEmail(email) {
  const re = /\S+@\S+\.com/;
  return re.test(email);
}

const emailInput = document.querySelector('.id input[type="text"]');

emailInput.addEventListener("blur", function () {
  if (!validateEmail(this.value)) {
    alert("유효한 이메일 형식이 아닙니다.");
    this.value = "";
  }
});

// 비밀번호가 서로 같은지 비교

const pwInput = document.querySelector('.pw input[type="password"]');
const pwCheckInput = document.querySelector('.pw-check input[type="password"]');

pwCheckInput.addEventListener("blur", function () {
  if (pwInput.value !== this.value) {
    alert("비밀번호가 일치하지 않습니다.");
    pwCheckInput.value = "";
  }
});

// 학번이 알맞는지 비교

function checkStudentNumber(number) {
  const re = /^[0-9]{10,10}$/;
  return re.test(number);
}

const studentNumberInput = document.querySelector(
  '.student-number input[type="text"]'
);

studentNumberInput.addEventListener("blur", function () {
  if (!checkStudentNumber(this.value)) {
    alert("학번이 알맞지 않습니다. 숫자 10자리를 입력해주세요.");
    this.value = "";
  }
});

// 학번 입력 시 전공이 무엇인지 표시

const deptData = [
  {
    name: "기계공학부",
    dept_nums: ["20"],
  },
  {
    name: "산업경영학부",
    dept_nums: ["80"],
  },
  {
    name: "컴퓨터공학부",
    dept_nums: ["35", "36"],
  },
  {
    name: "메카트로닉스공학부",
    dept_nums: ["40"],
  },
  {
    name: "고용서비스정책학과",
    dept_nums: ["85"],
  },
  {
    name: "디자인공학부",
    dept_nums: ["51"],
  },
  {
    name: "에너지신소재화학공학부",
    dept_nums: ["74"],
  },
  {
    name: "전기전자통신공학부",
    dept_nums: ["61"],
  },
  {
    name: "건축공학부",
    dept_nums: ["72"],
  },
];
const majorOuput = document.querySelector('.major');

studentNumberInput.addEventListener("change", function () {
	const studentNumber = studentNumberInput.value;
	const deptNum = studentNumber.slice(5,7);
  
	for (const dept of deptData){
		if (dept.dept_nums.includes(deptNum)){
			majorOuput.textContent = dept.name;
			return;
		}
	}
	majorOuput.textContent = "학과 정보를 찾을 수 없습니다.";
});

// 번호 ###-####-####로 자동 변환

const phoneNumberInput = document.querySelector('.phone-number');
phoneNumberInput.addEventListener('change',()=>{
	let phoneNumber = phoneNumberInput.value.replace(/[^0-9]/g, '');
	if (phoneNumber.length == 11) {
		phoneNumber = phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/,'$1-$2-$3');
	}
	else {
		phoneNumberInput.value = "";
		alert('핸드폰 번호를 잘못 입력하셨습니다.');
	}
	phoneNumberInput.value = phoneNumber;
});

// 회원가입 취소 시 로그인 페이지로 이동
document.querySelector('.cancel').addEventListener('click',()=>{
	location.href = 'index.html';
});
