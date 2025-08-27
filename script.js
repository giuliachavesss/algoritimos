document.addEventListener("DOMContentLoaded", function() {
  const historiaElemento = document.getElementById('historia');
  const opcao1 = document.getElementById('opcao1');
  const opcao2 = document.getElementById('opcao2');
  const retornar = document.getElementById('retornar');
  const reiniciar = document.getElementById('reiniciar');
  
  let etapa = 1;
  let historiaAnterior = null;

  // Função para atualizar a história
  function atualizarHistoria(texto, opcao1Texto, opcao2Texto, acao1, acao2) {
    historiaElemento.textContent = texto;
    opcao1.textContent = opcao1Texto;
    opcao2.textContent = opcao2Texto;
    
    if (historiaAnterior) {
      retornar.style.display = 'inline-block';
    } else {
      retornar.style.display = 'none';
    }

    opcao1.onclick = function() {
      historiaAnterior = { texto, opcao1Texto, opcao2Texto, acao1, acao2 };
      acao1();
    };
    opcao2.onclick = function() {
      historiaAnterior = { texto, opcao1Texto, opcao2Texto, acao1, acao2 };
      acao2();
    };
  }

  function voltarHistoriaAnterior() {
    if (historiaAnterior) {
      const { texto, opcao1Texto, opcao2Texto, acao1, acao2 } = historiaAnterior;
      atualizarHistoria(texto, opcao1Texto, opcao2Texto, acao1, acao2);
      historiaAnterior = null;
    }
  }

  // Função para reiniciar a história
  function reiniciarHistoria() {
    etapa = 1;
    reiniciar.style.display = 'none';
    atualizarHistoria(
      "Você está em uma floresta escura. O que você fará?",
      "Ir para a esquerda",
      "Ir para a direita",
      irEsquerda,
      irDireita
    );
  }

  // Ações para cada caminho
  function irEsquerda() {
    etapa = 2;
    atualizarHistoria(
      "Você seguiu pela trilha à esquerda e encontrou uma cabana misteriosa. O que você fará?",
      "Entrar na cabana",
      "Voltar para a trilha",
      entrarCabana,
      voltarTrilha
    );
  }

  function irDireita() {
    etapa = 3;
    atualizarHistoria(
      "Você seguiu pela trilha à direita e encontrou uma clareira. O que você fará?",
      "Investigar a clareira",
      "Seguir pela trilha mais adiante",
      investigarClareira,
      seguirTrilhaAdiante
    );
  }

  // Etapa 1 - Cabana ou voltar
  function entrarCabana() {
    etapa = 4;
    atualizarHistoria(
      "Dentro da cabana, você encontrou um velho com uma vela acesa. Ele lhe diz: 'Você está em perigo, mas posso te ajudar...'",
      "Pedir ajuda ao velho",
      "Sair da cabana e voltar para a trilha",
      pedirAjuda,
      sairCabana
    );
  }

  function voltarTrilha() {
    etapa = 1;
    atualizarHistoria(
      "Você voltou para a trilha. O que você fará agora?",
      "Ir para a esquerda",
      "Ir para a direita",
      irEsquerda,
      irDireita
    );
  }

  // Etapa 2 - Clareira ou seguir
  function investigarClareira() {
    etapa = 5;
    atualizarHistoria(
      "Na clareira, você encontrou um lago brilhante. O que você fará?",
      "Beber da água do lago",
      "Sair da clareira e seguir pela trilha",
      beberAguaLago,
      seguirTrilhaAdiante
    );
  }

  function seguirTrilhaAdiante() {
    etapa = 6;
    atualizarHistoria(
      "Você seguiu pela trilha e encontrou um rio caudaloso. O que você fará?",
      "Tentar atravessar o rio",
      "Procurar uma ponte mais adiante",
      atravessarRio,
      procurarPonte
    );
  }

  // Pedir ajuda ao velho ou sair da cabana
  function pedirAjuda() {
    etapa = 7;
    atualizarHistoria(
      "O velho lhe dá uma chave mágica e diz: 'Isso ajudará você a escapar.'",
      "Agradecer e sair",
      "Ficar na cabana e esperar mais conselhos",
      agradecerESair,
      esperarMaisConselhos
    );
  }

  function sairCabana() {
    etapa = 1;
    atualizarHistoria(
      "Você saiu da cabana e voltou para a trilha.",
      "Ir para a esquerda",
      "Ir para a direita",
      irEsquerda,
      irDireita
    );
  }

  // Beber da água ou sair da clareira
  function beberAguaLago() {
    etapa = 8;
    atualizarHistoria(
      "Você bebeu da água e teve uma visão clara de seu futuro.",
      "Seguir em frente",
      "Voltar para a trilha",
      seguirEmFrente,
      voltarTrilha
    );
  }

  function seguirEmFrente() {
    etapa = 9;
    atualizarHistoria(
      "Você seguiu em frente e encontrou uma aldeia tranquila.",
      "Entrar na aldeia",
      "Voltar para a floresta",
      entrarAldeia,
      voltarFloresta
    );
  }

  function voltarFloresta() {
    etapa = 1;
    atualizarHistoria(
      "Você voltou para a floresta. O que fará agora?",
      "Ir para a esquerda",
      "Ir para a direita",
      irEsquerda,
      irDireita
    );
  }

  // Atravessar o rio ou procurar a ponte
  function atravessarRio() {
    etapa = 10;
    atualizarHistoria(
      "Você atravessou o rio com dificuldades, mas conseguiu chegar ao outro lado.",
      "Proseguir para a montanha",
      "Voltar para a floresta",
      prosseguirMontanha,
      voltarFloresta
    );
  }

  function procurarPonte() {
    etapa = 11;
    atualizarHistoria(
      "Você encontrou uma ponte e cruzou o rio com segurança.",
      "Explorar o vilarejo ao lado",
      "Voltar para a floresta",
      explorarVilarejo,
      voltarFloresta
    );
  }

  function explorarVilarejo() {
    etapa = 12;
    atualizarHistoria(
      "Você entrou no vilarejo e encontrou um mercado cheio de mercadorias exóticas.",
      "Comprar algo",
      "Sair e voltar à floresta",
      comprarAlgo,
      voltarFloresta
    );
  }

  function comprarAlgo() {
    etapa = 13;
    atualizarHistoria(
      "Você comprou um mapa que pode te ajudar a escapar da floresta.",
      "Seguir o mapa",
      "Voltar para a floresta",
      seguirMapa,
      voltarFloresta
    );
  }

  function seguirMapa() {
    etapa = 14;
    atualizarHistoria(
      "Você seguiu o mapa e encontrou uma saída da floresta.",
      "Fim da aventura! Voltar ao início.",
      "",
      reiniciarHistoria,
      reiniciarHistoria
    );
    reiniciar.style.display = 'inline-block';
  }

  reiniciar.addEventListener('click', reiniciarHistoria);

  // Começar a aventura
  reiniciarHistoria();
});
