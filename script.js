// Aguardar o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // ---------- MANIPULAÇÃO DO DOM ----------
    
    // Modificar texto dinamicamente
    const tituloHeader = document.querySelector('header h1');
    const textoOriginal = tituloHeader.textContent;
    
    tituloHeader.addEventListener('click', function() {
        if (tituloHeader.textContent === textoOriginal) {
            tituloHeader.textContent = 'JavaScript é Incrível!';
        } else {
            tituloHeader.textContent = textoOriginal;
        }
    });
    
    // Adicionar classes com JavaScript
    const paragrafos = document.querySelectorAll('p');
    paragrafos.forEach(function(paragrafo, index) {
        if (index % 2 === 0) {
            paragrafo.classList.add('destacado');
        }
    });

    // ---------- MANIPULAÇÃO DE EVENTOS ----------
    
    // Contador simples
    const botaoContador = document.createElement('button');
    botaoContador.textContent = 'Clique-me (0)';
    botaoContador.id = 'contador';
    botaoContador.className = 'botao-js';
    
    let contador = 0;
    botaoContador.addEventListener('click', function() {
        contador++;
        this.textContent = `Clique-me (${contador})`;
        
        if (contador >= 10) {
            this.style.backgroundColor = 'var(--cor-accent)';
        }
    });
    
    const sectionTextos = document.getElementById('textos');
    sectionTextos.appendChild(botaoContador);
    
    // ---------- VALIDAÇÃO DE FORMULÁRIO ----------
    const formulario = document.querySelector('form');
    
    formulario.addEventListener('submit', function(evento) {
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const senha = document.getElementById('senha');
        let temErro = false;
        
        // Remover mensagens de erro anteriores
        const errosAnteriores = document.querySelectorAll('.erro-mensagem');
        errosAnteriores.forEach(erro => erro.remove());
        
        // Validar nome
        if (nome.value.trim() === '') {
            mostrarErro(nome, 'Nome é obrigatório');
            temErro = true;
        } else if (nome.value.length < 3) {
            mostrarErro(nome, 'Nome deve ter pelo menos 3 caracteres');
            temErro = true;
        }
        
        // Validar email
        if (email.value.trim() === '') {
            mostrarErro(email, 'Email é obrigatório');
            temErro = true;
        } else if (!validarEmail(email.value)) {
            mostrarErro(email, 'Email inválido');
            temErro = true;
        }
        
        // Validar senha
        if (senha.value.trim() === '') {
            mostrarErro(senha, 'Senha é obrigatória');
            temErro = true;
        } else if (senha.value.length < 6) {
            mostrarErro(senha, 'Senha deve ter pelo menos 6 caracteres');
            temErro = true;
        }
        
        // Impedir envio se houver erros
        if (temErro) {
            evento.preventDefault();
        } else {
            // Em um caso real, o formulário seria enviado
            // Para fins de demonstração, vamos apenas mostrar uma mensagem
            evento.preventDefault();
            exibirMensagemSucesso();
        }
    });
    
    function mostrarErro(campo, mensagem) {
        const msgErro = document.createElement('div');
        msgErro.className = 'erro-mensagem';
        msgErro.textContent = mensagem;
        msgErro.style.color = 'var(--cor-accent)';
        msgErro.style.fontSize = '0.8rem';
        msgErro.style.marginTop = '-10px';
        msgErro.style.marginBottom = '10px';
        
        campo.style.borderColor = 'var(--cor-accent)';
        
        // Inserir mensagem após o campo
        campo.parentNode.insertBefore(msgErro, campo.nextSibling);
    }
    
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    function exibirMensagemSucesso() {
        // Esconder o formulário
        formulario.style.display = 'none';
        
        // Criar e mostrar mensagem de sucesso
        const msgSucesso = document.createElement('div');
        msgSucesso.className = 'sucesso-mensagem';
        msgSucesso.innerHTML = '<h3>Formulário enviado com sucesso!</h3>' +
                               '<p>Os dados foram recebidos.</p>' +
                               '<button id="voltar-formulario" class="botao-js">Voltar ao formulário</button>';
        
        msgSucesso.style.backgroundColor = '#d4edda';
        msgSucesso.style.color = '#155724';
        msgSucesso.style.padding = '20px';
        msgSucesso.style.borderRadius = 'var(--borda-radius)';
        msgSucesso.style.marginTop = '20px';
        msgSucesso.style.textAlign = 'center';
        
        formulario.parentNode.insertBefore(msgSucesso, formulario);
        
        // Botão para voltar ao formulário
        document.getElementById('voltar-formulario').addEventListener('click', function() {
            msgSucesso.remove();
            formulario.style.display = 'block';
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('senha').value = '';
        });
    }
    
    // ---------- EFEITOS VISUAIS DINÂMICOS ----------
    
    // Efeito de hover avançado para itens de lista
    const itensLista = document.querySelectorAll('li');
    
    itensLista.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // ---------- MANIPULAÇÃO DE TABELAS ----------
    
    // Adicionar funcionalidade de ordenação à tabela
    const tabelaElementos = document.querySelector('table');
    
    if (tabelaElementos) {
        const cabecalhos = tabelaElementos.querySelectorAll('thead th');
        
        cabecalhos.forEach(function(cabecalho, indice) {
            cabecalho.style.cursor = 'pointer';
            cabecalho.title = 'Clique para ordenar';
            
            cabecalho.addEventListener('click', function() {
                ordenarTabela(tabelaElementos, indice);
            });
        });
    }
    
    function ordenarTabela(tabela, coluna) {
        const corpoTabela = tabela.querySelector('tbody');
        const linhas = Array.from(corpoTabela.rows);
        
        // Determinar direção da ordenação
        const direcao = tabela.dataset.ordenacao === 'asc' ? -1 : 1;
        tabela.dataset.ordenacao = tabela.dataset.ordenacao === 'asc' ? 'desc' : 'asc';
        
        // Ordenar linhas
        const linhasOrdenadas = linhas.sort(function(a, b) {
            const celulaA = a.cells[coluna].textContent.trim();
            const celulaB = b.cells[coluna].textContent.trim();
            
            return celulaA.localeCompare(celulaB) * direcao;
        });
        
        // Remover linhas antigas
        while (corpoTabela.firstChild) {
            corpoTabela.removeChild(corpoTabela.firstChild);
        }
        
        // Adicionar linhas ordenadas
        const fragmento = document.createDocumentFragment();
        linhasOrdenadas.forEach(function(linha) {
            fragmento.appendChild(linha);
        });
        
        corpoTabela.appendChild(fragmento);
    }
    
    // ---------- DATA E HORA ATUAL ----------
    
    // Adicionar data e hora atual no rodapé
    const dataHora = document.createElement('p');
    dataHora.id = 'data-hora';
    
    function atualizarDataHora() {
        const agora = new Date();
        dataHora.textContent = `Data atual: ${agora.toLocaleDateString('pt-BR')} - ${agora.toLocaleTimeString('pt-BR')}`;
    }
    
    atualizarDataHora();
    setInterval(atualizarDataHora, 1000);
    
    const footer = document.querySelector('footer');
    footer.appendChild(dataHora);
    
    // ---------- IMPLEMENTAÇÃO DE TEMA CLARO/ESCURO ----------
    
    // Botão de alternar tema
    const botaoTema = document.createElement('button');
    botaoTema.textContent = '🌙 Modo Escuro';
    botaoTema.id = 'alternar-tema';
    botaoTema.className = 'botao-tema';
    
    botaoTema.style.position = 'fixed';
    botaoTema.style.bottom = '20px';
    botaoTema.style.right = '20px';
    botaoTema.style.padding = '10px 15px';
    botaoTema.style.backgroundColor = 'var(--cor-secundaria)';
    botaoTema.style.color = 'white';
    botaoTema.style.border = 'none';
    botaoTema.style.borderRadius = 'var(--borda-radius)';
    botaoTema.style.cursor = 'pointer';
    botaoTema.style.zIndex = '1000';
    
    document.body.appendChild(botaoTema);
    
    let temaEscuro = false;
    
    botaoTema.addEventListener('click', function() {
        temaEscuro = !temaEscuro;
        
        if (temaEscuro) {
            document.documentElement.style.setProperty('--cor-fundo', '#1a1a2e');
            document.documentElement.style.setProperty('--cor-texto', '#e6e6e6');
            document.body.style.backgroundColor = '#1a1a2e';
            botaoTema.textContent = '☀️ Modo Claro';
            
            // Ajustar seções para o tema escuro
            const secoes = document.querySelectorAll('section');
            secoes.forEach(function(secao) {
                secao.style.backgroundColor = '#2a2a40';
                secao.style.color = '#e6e6e6';
            });
        } else {
            document.documentElement.style.setProperty('--cor-fundo', '#f7f9fc');
            document.documentElement.style.setProperty('--cor-texto', '#333');
            document.body.style.backgroundColor = '#f7f9fc';
            botaoTema.textContent = '🌙 Modo Escuro';
            
            // Restaurar seções para o tema claro
            const secoes = document.querySelectorAll('section');
            secoes.forEach(function(secao) {
                secao.style.backgroundColor = 'white';
                secao.style.color = 'var(--cor-texto)';
            });
        }
    });
    
    // ---------- ADICIONAR ESTILOS PARA ELEMENTOS JS ----------
    
    // Adicionar estilos CSS para elementos criados por JS
    const estiloJS = document.createElement('style');
    estiloJS.textContent = `
        .botao-js {
            padding: 10px 15px;
            background-color: var(--cor-primaria);
            color: white;
            border: none;
            border-radius: var(--borda-radius);
            cursor: pointer;
            transition: var(--transicao);
            margin: 10px 0;
            display: block;
        }
        
        .botao-js:hover {
            background-color: #2980b9;
            transform: translateY(-2px);
        }
        
        .destacado {
            background-color: rgba(52, 152, 219, 0.1);
            border-left: 3px solid var(--cor-primaria);
            padding-left: 10px;
        }
    `;
    document.head.appendChild(estiloJS);
}); 