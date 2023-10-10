function responder() {
  //Questão 1
  resolverQuestao("resposta1", getCheckedItem("questao1"), 2);

  //Questão 2
  resolverQuestao("resposta2", getCheckedItem("questao2"), 3);

  //Questão 3
  resolverQuestao("resposta3", getCheckedItem("questao3"), 3);

  //Questão 4
  resolverQuestao("resposta4", getCheckedItem("questao4"), 0);

  //Questão 5
  resolverQuestao("resposta5", getCheckedItem("questao5"), 1);
}

function getCheckedItem(name) {
  let alternativas = document.getElementsByName(name);
  console.log(name, alternativas)
  let alternativaSelecionada = null
  for (let i = 0; i < alternativas.length; i++) {
    console.log(alternativas[i])
    if (alternativas[i].checked) {
      alternativaSelecionada = i;
    }
  }
  return alternativaSelecionada
}

function resolverQuestao(id, alternativaEscolhida, alternativaCorreta) {
    const alternativas = ["a", "b", "c", "d"];
    if (alternativaEscolhida == null) {
      document.getElementById(
        id
      ).innerHTML = `Selecione uma alternativa`;
      document.getElementById(id).style.color = "red";
    } else if (alternativaEscolhida !== alternativaCorreta) {
      document.getElementById(
        id
      ).innerHTML = `Alternativa correta é: ${alternativas[alternativaCorreta]}`;
      document.getElementById(id).style.color = "red";
    } else {
      document.getElementById(id).innerHTML = `Alternativa correta!`;
      document.getElementById(id).style.color = "green";
    }
}
