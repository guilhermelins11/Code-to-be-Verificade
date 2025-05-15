const tiposPorCategoria = {
    "Moveis": ["Cama e Colchoes", "Sofás e Poltronas", "Bancos e Cadeiras", "Mesas", "Racks e Painés", "Outros"],
    "Serviços": ["Serviços domésticos", "Babá", "Eventos/Festas", "Reparação/Conserto/Reforma", "Informatica", "Tradução", "Turismo", "Outros"],
    "Eletro": ["Ar-condicionado", "Ventiladores e Climatizadores", "Geladeiras e Freezers", "Fogões e Fornos", "Eletroportáteis"],
    "Celulares e Telefonia": ["Celulares e Smartphones", "Acessórios de Celular", "Peças de Celular", "Smartwatches", "Outros"],
    "Áudio": ["Fones de Ouvido", "Microfones e Gravadores", "Equipamentos e Acessórios de Som", "Outros"],
    "Moda e Beleza": ["Beleza e Cuidado Pessoal", "Roupas", "Bolsas, malas e mochilas", "Outros"],
    "Animais de estimação": ["Acessórios para pets", "Cachorros", "Gatos", "Roedores", "Outros animais"]
  };

  function toggleCategoriaSelect() {
    const select = document.getElementById("categoriaSelect");
    select.classList.toggle("hidden");
  }

  function selectCategoria(valor) {
    document.getElementById("categoriaInput").value = valor;
    document.getElementById("categoriaSelect").classList.add("hidden");
    atualizarTipos(valor);
  }

  function atualizarTipos(categoria) {
    const tipoSelect = document.getElementById("tipoSelect");
    tipoSelect.innerHTML = "";

    if (tiposPorCategoria[categoria]) {
      tiposPorCategoria[categoria].forEach(tipo => {
        const option = document.createElement("option");
        option.value = tipo;
        option.textContent = tipo;
        tipoSelect.appendChild(option);
      });
    } else {
      const option = document.createElement("option");
      option.textContent = "-- Selecione uma categoria primeiro --";
      tipoSelect.appendChild(option);
    }
  }

  function gerarId() {
    return Math.floor(Math.random() * 1000000000);
  }

  function salvarProduto() {
    const produto = {
      id: gerarId(),
      categoria: document.getElementById("categoriaInput").value,
      tipo: document.getElementById("tipoSelect").value,
      valor: document.getElementById("valor").value,
      tempo: document.getElementById("tempo").value,
      gasto: document.getElementById("gasto").value,
      responsavel: document.getElementById("responsavel").value,
      descricao: document.getElementById("descricao").value
    };

    // Salvar no localStorage (para teste sem backend)
    const produtos = JSON.parse(localStorage.getItem("produtos") || "[]");
    produtos.push(produto);
    localStorage.setItem("produtos", JSON.stringify(produtos));

    // Redirecionar para a lista
    window.location.href = "lista-produtos.html";
  }