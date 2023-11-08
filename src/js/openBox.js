function test(botao) {

  const targetId = botao.getAttribute('data-target')
  const content = document.getElementById(targetId);

  // OPEN
  if (content.classList.contains('invisible')) {
    const content = document.getElementById(targetId);
    botao.classList.remove("open");
    botao.classList.add("close");
    content.classList.remove("invisible");
    content.classList.add("visible");

    return;
  }
  // CLOSE
  if (content.classList.contains('visible')) {
    const content = document.getElementById(targetId);
    botao.classList.remove("close");
    botao.classList.add("open");
    content.classList.remove("visible");
    content.classList.add("invisible");
    return;
  }
}