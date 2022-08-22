// remover todos os gráficos da tela
addDisplayNoneToAllSelect();

let btnFiltroGeral = document.getElementById("--filtro--geral");

btnFiltroGeral.addEventListener("click", () => {
  // btnFiltroGeral.classList.add("active");
  addDisplayNoneToAllSelect();
  document.getElementById("Geral").style.display = "block";
  btnFiltroGeral.classList.add("active");
});

btnFiltroGeral.click();

// Filtrar po Curso
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

    let cursosList = `<li onclick="updateCurso(this)" class="--tab--buton ${isSelected}">${curso}</li>`;
    optionsCurso.insertAdjacentHTML("beforeend", cursosList);
  });
}
// add lista de curso no content
addCursosInSelect();

function updateCurso(selectedList) {
  // remover class active do botão filtro geral
  btnFiltroGeral.classList.remove("active");
  // Função abrir gráfico
  openGraphic(event, selectedList.innerText);
  selectCurso.classList.remove("active");
  addCursosInSelect(selectedList.innerText);
  selectBtnCurso.firstElementChild.innerText = selectedList.innerText;
}

// filtrar por Ano
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

    let anosList = `<li onclick="updateAno(this)" class="--tab--buton ${isSelected}">${ano}</li>`;
    optionsAno.insertAdjacentHTML("beforeend", anosList);
  });
}
// add lista de anos no content
addAnosInSelect();

function updateAno(selectedList) {
  // remover class active do botão filtro geral
  btnFiltroGeral.classList.remove("active");
  openGraphic(event, selectedList.innerText);
  selectAno.classList.remove("active");
  addAnosInSelect(selectedList.innerText);
  selectBtnAno.firstElementChild.innerText = selectedList.innerText;
}

// filtrar por Sexo
const selectSexo = document.querySelector("#--select--sexo");
const selectBtnSexo = selectSexo.querySelector("#--select--btn--sexo");
const optionsSexo = selectSexo.querySelector("#--options--sexo");

let sexos = ["Masculino", "Feminino", "Outros"];

selectBtnSexo.addEventListener("click", () => {
  selectSexo.classList.toggle("active");
});

function addASexosInSelect(selectedSexo) {
  optionsSexo.innerText = "";
  sexos.forEach((sexo) => {
    let isSelected = sexo == selectedSexo ? "selected" : "";

    let sexosList = `<li onclick="updateSexo(this)" class="--tab--buton ${isSelected}">${sexo}</li>`;
    optionsSexo.insertAdjacentHTML("beforeend", sexosList);
  });
}

// add lista de sexos no content
addASexosInSelect();

function updateSexo(selectedList) {
  // remover class active do botão filtro geral
  btnFiltroGeral.classList.remove("active");
  openGraphic(event, selectedList.innerText);
  selectSexo.classList.remove("active");
  addASexosInSelect(selectedList.innerText);
  selectBtnSexo.firstElementChild.innerText = selectedList.innerText;
}

// Função abrir gráfico
function openGraphic(event, idGraphic) {
  addDisplayNoneToAllSelect();
  removeGraphicVisibleToSelect();
  addActiveToBtnTab(event, idGraphic);
}

// Remover todos os gráficos da tela
function addDisplayNoneToAllSelect() {
  let graficos = document.getElementsByClassName("grafico");
  for (let i = 0; i < graficos.length; i++) {
    graficos[i].style.display = "none";
  }
}

// Remover a class visible dos botões
function removeGraphicVisibleToSelect() {
  let tabs = document.getElementsByClassName("--tab--button");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].classList.remove("visible");
  }
}

// Adicionando class visible no botão clicado
function addActiveToBtnTab(event, idGraphic) {
  document.getElementById(idGraphic).style.display = "block";
  event.currentTarget.classList.add("visible");
}
