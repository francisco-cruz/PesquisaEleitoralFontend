const selectCurso = document.querySelector("#--select--curso");
const selectBtnCurso = selectCurso.querySelector("#--select--btn--curso");
const optionsCurso = selectCurso.querySelector("#--options--curso");

let cursos = ["Eletrotécnica", "Informática", "Textil", "Vestuário"];

selectBtnCurso.addEventListener("click", () => {
  selectCurso.classList.toggle("active");
});

function addCursosInSelect(selectedCurso) {
  optionsCurso.innerText = "";
  cursos.forEach((curso) => {
    let isSelected = curso == selectedCurso ? "selected" : "";

    let cursosList = `<li onclick="updateCurso(this)" class="${isSelected}">${curso}</li>`;
    optionsCurso.insertAdjacentHTML("beforeend", cursosList);
  });
}

addCursosInSelect();

function updateCurso(selectedList) {
  selectCurso.classList.remove("active");
  addCursosInSelect(selectedList.innerText);
  selectBtnCurso.firstElementChild.innerText = selectedList.innerText;
}

// Caixa de seleção por Ano

const selectAno = document.querySelector("#--select--ano");
const selectBtnAno = selectAno.querySelector("#--select--btn--ano");
const optionsAno = selectAno.querySelector("#--options--ano");

let anos = ["1º Ano", "2º Ano", "3º Ano", "4º Ano"];

selectBtnAno.addEventListener("click", () => {
  selectAno.classList.toggle("active");
});

function addAnosInSelect(selectedAno) {
  optionsAno.innerText = "";
  anos.forEach((ano) => {
    let isSelected = ano == selectedAno ? "selected" : "";

    let anosList = `<li onclick="updateAno(this)" class="${isSelected}">${ano}</li>`;
    optionsAno.insertAdjacentHTML("beforeend", anosList);
  });
}

addAnosInSelect();

function updateAno(selectedList) {
  selectAno.classList.remove("active");
  addAnosInSelect(selectedList.innerText);
  selectBtnAno.firstElementChild.innerText = selectedList.innerText;
}
