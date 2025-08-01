function carregar_novidades() {
    const livros_novidades = document.getElementById("produtosnovidades");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/listar/produto")
        .then((res) => res.json())
        .then((dados) => {
            dados.map((liv) => {
                saida += `
             <div class="produtos">
              <img src="${liv.foto1}">
              <h3>${liv.nome}</h3>
              <p>${liv.preco}</p>
              <a href=detalhes.html?id=${liv.id}>Mais Detalhes</a>
            </div>
           `
            })
            livros_novidades.innerHTML = saida;
        })
        .catch((erro) => { console.error(erro) })
    carregar_produtomaisvendidos()
}
let pe = 0
function rolarNovidadesEsquerda() {
    if (pe < -700) {
        pe = -700
    }
    else {
        pe -= 200;
    }
    const livrosnovidades = document.getElementById("produtosnovidades");
    livrosnovidades.style.marginLeft = `${pe}px`
}
function rolarNovidadesDireita() {
    if (pe > 0) {
        pe = 0
    }
    else {
        pe += 200;
    }
    const livrosnovidades = document.getElementById("produtosnovidades");
    livrosnovidades.style.marginLeft = `${pe}px`
}
function carregar_produtomaisvendidos() {
    const produtos_maisvendidos = document.getElementById("produtosmaisvendidos");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarmaisvendidos")
        .then((res) => res.json())
        .then((dados) => {
            dados.map((liv) => {
                saida += `
            <div class="produtos">
                <img src="${liv.foto1}" alt="Capa ${liv.nome}">
                <h3>${liv.nome}</h3>
                <p class="quantidade">Procurados: ${liv.quantidade}</p>
            </div>`
            })
            produtos_maisvendidos.innerHTML = saida;
        })
        .catch((erro) => { console.error(erro) })
    carregar_autores()
}
function carregar_autores() {
    const produtos_funcionario = document.getElementById("produtosfuncionarios");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/listar/funcionario")
        .then((res) => res.json())
        .then((dados) => {
            dados.map((liv) => {
                saida += `
            <div class="funcionarios">
                <img src="${liv.foto}" alt="funcionario ${liv.nome}">
                <h3>${liv.nome}</h3>                 
            </div>`
            })
            produtos_funcionario.innerHTML = saida;
        })
        .catch((erro) => { console.error(erro) })
    carregar_produtomaisvendidos()
}
function carregar_pcgamer() {
    const lstlivros = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/PcGamer")
        .then((res) => res.json())
        .then((liv) => {
            liv.map((li) => {
                saida += `
            <div class="livpcgamer">
                <img src="${li.foto1}">
                <h3>${li.nome}</h3>
                <p class=livpreco>R$ ${li.preco}</p>
                <a href=detalhes.html?id=${li.id}>Mais detalhe</a>                 
            </div>`
            })
            lstlivros.innerHTML = saida;
        })
        .catch((erro) => { console.error(erro) })
}
function carregar_hardware() {
    const lstlivros = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/Hardware")
        .then((res) => res.json())
        .then((liv) => {
            liv.map((li) => {
                saida += `
            <div class="livhardware">
                <img src="${li.foto1}">
                <h3>${li.nome}</h3>
                <p class=livpreco>R$ ${li.preco}</p>
                <a href=detalhes.html?id=${li.id}>Mais detalhe</a>                 
            </div>`
            })
            lstlivros.innerHTML = saida;
        })
        .catch((erro) => { console.error(erro) })
}
function carregar_monitores() {
    const lstlivros = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/Monitores")
        .then((res) => res.json())
        .then((liv) => {
            liv.map((li) => {
                saida += `
            <div class="livmonitores">
                <img src="${li.foto1}">
                <h3>${li.nome}</h3>
                <p class=livpreco>R$ ${li.preco}</p>
                <a href=detalhes.html?id=${li.id}>Mais detalhe</a>                 
            </div>`
            })
            lstlivros.innerHTML = saida;
        })
        .catch((erro) => { console.error(erro) })
}
function carregar_gabinetes() {
    const listar_gabinetes = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/Gabinetes")
        .then((res) => res.json())
        .then((liv) => {
            liv.map((li) => {
                saida += `
            <div class="livgabinetes">
                <img src="${li.foto1}">
                <h3>${li.nome}</h3>
                <p class=livpreco>R$ ${li.preco}</p>
                <a href=detalhes.html?id=${li.id}>Mais detalhe</a>                 
            </div>`
            })
            lstlivros.innerHTML = saida;
        })
        .catch((erro) => { console.error(erro) })
}
function carregar_perifericos() {
    const lstlivros = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/Perifericos")
        .then((res) => res.json())
        .then((liv) => {
            liv.map((li) => {
                saida += `
            <div class="livperifericos">
                <img src="${li.foto1}">
                <h3>${li.nome}</h3>
                <p class=livpreco>R$ ${li.preco}</p>
                <a href=detalhes.html?id=${li.id}>Mais detalhe</a>                 
            </div>`
            })
            lstlivros.innerHTML = saida;
        })
        .catch((erro) => { console.error(erro) })
}
function carregar_outros() {
    const lstlivros = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarporcategoria/outros")
        .then((res) => res.json())
        .then((liv) => {
            liv.map((li) => {
                saida += `
            <div class="livoutros">
                <img src="${li.foto1}">
                <h3>${li.nome}</h3>
                <p class=livpreco>R$ ${li.preco}</p>
                <a href=detalhes.html?id=${li.id}>Mais detalhe</a>                 
            </div>`
            })
            lstlivros.innerHTML = saida;
        })
        .catch((erro) => { console.error(erro) })
}
let nome_carrinho = "carrinho"
let produto_no_carrinho = localStorage.getItem(nome_carrinho) ? JSON.parse(localStorage.getItem(nome_carrinho)) : [];
function adicionar_carrinho(id, foto, nome, preco, qtd) {
    let produto = {
        id: id,
        nome_produto: nome,
        foto_produto: foto,
        preco_produto: preco,
        quantidade_produto: qtd
    };
    produto_no_carrinho.push(produto);
    console.log(produto_no_carrinho);
    window.localStorage.setItem(nome_carrinho, JSON.stringify(produto_no_carrinho));
};
function carregar_detalhes() {
    let idlivro = window.location.search.split('=');
    idlivro = idlivro[1];
    const div_detalhes = document.getElementById("detalhes");
    fetch(`http://127.0.0.1:5000/api/v1/produto/listarporid/${idlivro}`)
        .then((res) => res.json())
        .then((dt) => {
            console.log(dt)
            let div_img = document.createElement("div");
            div_img.setAttribute("id", "div_img")
            let div_capa = document.createElement("div");
            div_capa.setAttribute("id", "div_capa")
            let img_capa = document.createElement("img");
            img_capa.src = dt[0].foto1;
            div_capa.appendChild(img_capa);
            div_img.appendChild(div_capa);
            let div_miniatura = document.createElement("div");
            div_miniatura.setAttribute("id", "div_miniatura");
            let img_miniatura1 = document.createElement("img");
            let img_miniatura2 = document.createElement("img");
            let img_miniatura3 = document.createElement("img");
            img_miniatura1.src = dt[0].foto1;
            img_miniatura2.src = dt[0].foto2;
            img_miniatura3.src = dt[0].foto3;
            div_miniatura.appendChild(img_miniatura1);
            div_miniatura.appendChild(img_miniatura2);
            div_miniatura.appendChild(img_miniatura3);
            div_img.appendChild(div_miniatura);
            div_detalhes.appendChild(div_img)
            let div_titulo_descricao = document.createElement("div");
            div_titulo_descricao.setAttribute("id", "div_titulo_descricao");
            let h3_titulo = document.createElement("h3");
            h3_titulo.innerHTML = dt[0].nome;
            let p_descricao = document.createElement("p");
            p_descricao.innerHTML = dt[0].descricao;
            div_titulo_descricao.appendChild(h3_titulo)
            div_titulo_descricao.appendChild(p_descricao)
            div_detalhes.appendChild(div_titulo_descricao)
            let div_carrinho = document.createElement("div");
            div_carrinho.setAttribute("id", "div_carrinho");
            let p_preco = document.createElement("p");
            p_preco.innerHTML = dt[0].preco;
            let btn_add_carrinho = document.createElement("button");
            btn_add_carrinho.innerHTML = "Adicionar ao carrinho";
            btn_add_carrinho.onclick = () => {
                adicionar_carrinho(dt[0].id, dt[0].foto1, dt[0].nome, dt[0].preco, 1);
                alert('Produto adicionado ao carrinho!')
            };
            div_carrinho.appendChild(p_preco);
            div_carrinho.appendChild(btn_add_carrinho);
            div_detalhes.appendChild(div_carrinho);
        })
        .catch((error) => {
            console.log(error)
        });
};
const area_carrinho = document.getElementsByClassName("carrinho")[0]
const div_qtd_itens = document.createElement("div");
div_qtd_itens.setAttribute("id", "div_qtd_itens");
area_carrinho.appendChild(div_qtd_itens);
function remover_do_carrinho(id) {
    produto_no_carrinho = produto_no_carrinho.filter(item => item.id !== id);
    window.localStorage.setItem(nome_carrinho, JSON.stringify(produto_no_carrinho));
    window.location.reload();
};
function carregar_produtos_carrinho() {
    let produto = window.localStorage.getItem("carrinho");
    if (produto != null) {
        document.getElementById("div_qtd_itens").style.display = "block"
    };
    console.log(produto);
    console.log(JSON.parse(produto));
    console.log(JSON.parse(produto).length);
    div_qtd_itens.innerHTML = JSON.parse(produto).length;
    const lista_produto_carrinho = document.getElementById("lista_produto_carrinho");
    JSON.parse(produto).map((itens) => {
        let mont = `<div>
        <input type="checkbox" name="selecionado">
        <img src=${itens.foto_produto}>
        <h4> ${itens.nome_produto}</h4>
        <h5>R$${itens.preco_produto}</h5>
        <input type="number" value=1 min=1 max=10 class="qtd">
        <img src="img/lixeira.png" class="btnexcluir" onclick="remover_do_carrinho(${itens.id})">
        </div>
        `
        lista_produto_carrinho.innerHTML += mont;
    });
};
let aute_usuario = "usuario_autenticado";
if (window.localStorage.getItem(aute_usuario)) {
    let us = window.localStorage.getItem(aute_usuario);
    us = JSON.parse(us);
    let img_usuario = `<img src=${us.payload.fotousuario} class="img_usuario">`;
    let nome_us = us.payload.nomeusuario;
    document.getElementsByClassName("usuario")[0].style.padding = "15px"
    document.getElementsByClassName("usuario")[0].innerHTML = img_usuario + nome_us
};
function abrirCadastro() {
    const modalLogin = bootstrap.Modal.getInstance(document.getElementById('modalLogin'));
    if (modalLogin) modalLogin.hide();
    const modalCadastro = new bootstrap.Modal(document.getElementById('modalCadastro'));
    setTimeout(() => modalCadastro.show(), 500);
}
function efetuarlogin() {
    const usuario = document.getElementById("txtusuario")
    const senha = document.getElementById("txtpassword")
    fetch("http://127.0.0.1:5000/api/v1/login/usuario", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuario.value,
            senha: senha.value
        })
    })
        .then((rs) => rs.json())
        .then((dados) => {
            window.localStorage.setItem(aute_usuario, JSON.stringify(dados));
            usuario.value = "";
            senha.value = "";
            window.location.reload();
        })
        .catch((erro) => console.error(erro))
}
function Cadastrar() {
    const nome = document.getElementById("txtNome")
    const email = document.getElementById("txtEmail")
    const cpf = document.getElementById("txtCpf")
    const telefone = document.getElementById("txtTelefone")
    const dataNascimento = document.getElementById("dataNascimento")
    const logradouro = document.getElementById("logradouro")
    const endereco = document.getElementById("endereco")
    const numero = document.getElementById("numero")
    const bairro = document.getElementById("bairro")
    const complemento = document.getElementById("complemento")
    const cep = document.getElementById("cep")
    fetch("http://127.0.0.1:5000/api/v1/cliente/cadastrar", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome.value,
            email: email.value,
            cpf: cpf.value,
            telefone: telefone.value,
            data_nascimento: dataNascimento.value,
            endereco: {
                id: 1,
                logradouro: logradouro.value,
                numero: numero.value,
                complemento: complemento.value,
                cep: cep.value,
                bairro: bairro.value
            }
        })
    })
        .then((rs) => rs.json())
        .then((dados) => {
            window.localStorage.setItem(aute_usuario, JSON.stringify(dados));
            nome.value = "";
            email.value = "";
            cpf.value = "";
            telefone.value = "";
            dataNascimento.value = "";
            endereco.value = "";
            tipo_logradouro.value = "";
            numero.value = "";
            complemento.value = "";
            cep.value = "";
            bairro.value = "";
            window.location.reload();
        })
        .catch((erro) => console.error(erro))
    alert('Cadastro realizado com sucesso!')
}
