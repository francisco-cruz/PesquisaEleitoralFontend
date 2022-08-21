let filtroPadrao = document.querySelector('#--filtro--geral')
filtroPadrao.addEventListener('click', () => {
    console.log(filtroPadrao)
    filtroPadrao.classList.toggle('active')
})


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

addCursosInSelect();

function updateCurso(selectedList) {
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

addAnosInSelect();

function updateAno(selectedList) {
  openGraphic(event, selectedList.innerText);
  selectAno.classList.remove("active");
  addAnosInSelect(selectedList.innerText);
  selectBtnAno.firstElementChild.innerText = selectedList.innerText;
}

// Chamando remover gráficos da tela
addDisplayNoneToAllSelect();

// Fução abrir gráfico
function openGraphic(event, idGraphic) {
  console.log(idGraphic);
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
