const dinos = [
    // 1. Carnívoro (Terrestre)
    { 
        nome: 'Tyrannosaurus Rex', 
        desc: 'Grande carnívoro do fim do Cretáceo com mandíbula poderosa e tamanho impressionante.',  
        dieta: 'Carnívoro', 
        tamanho: 'Até 12 metros e 8 toneladas', 
        curiosidades: 'Uma das mordidas mais fortes, braços pequenos mas fortes.',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Tyrannosaurus-rex-Profile-steveoc86_%28coloured%29%28mirror%29.png' 
    },
    
    // 2. Herbívoro
    { 
        nome: 'Triceratops', 
        desc: 'Herbívoro com três chifres e gola óssea protetora.', 
        dieta: 'Herbívoro', 
        tamanho: '9 metros e até 12 toneladas', 
        curiosidades: 'Chifres usados para defesa e disputa.',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Triceratops_BW.jpg' 
    },
    
    // 3. Aquático (Semi-Aquático)
    { 
        nome: 'Spinosaurus', 
        desc: 'Carnívoro semi-aquático com vela dorsal. O maior predador terrestre conhecido.', 
        dieta: 'Carnívoro (principalmente peixes)', 
        tamanho: '15 metros e até 20 toneladas', 
        curiosidades: 'Provavelmente nadava como crocodilo, adaptado para vida aquática.',
        imagem: 'https://cdn.britannica.com/54/128854-050-F5C98A54/Spinosaurus.jpg' 
    },
    
    // 4. Onívoro
    { 
        nome: 'Oviraptor', 
        desc: 'Dinossauro com crista curta e bico forte, conhecido por proteger seus ninhos de ovos.', 
        dieta: 'Onívoro (ovos, plantas, pequenos animais)', 
        tamanho: '2 metros e 20kg', 
        curiosidades: 'Originalmente pensava-se que roubava ovos, mas descobertas mostraram que ele protegia seus próprios ninhos.',
        imagem: 'https://studycorgi.com/wp-content/uploads/2023/04/312998_1.jpg' 
    },
    
    // 5. Voador (Pterossauro)
    { 
        nome: 'Pterodactylus', 
        desc: 'Pterossauro de cauda curta com bico longo e asas feitas de membrana de pele.', 
        dieta: 'Carnívoro (principalmente peixes e invertebrados)', 
        tamanho: 'Envergadura de até 1 metro', 
        curiosidades: 'Um dos primeiros vertebrados a desenvolver o voo motorizado.',
        imagem: 'https://www.shutterstock.com/image-illustration/illustration-flying-pterodactyl-blue-dinosaur-260nw-2460126951.jpg' 
    },
    
    // 6. Extra (Para completar 6)
    { 
        nome: 'Diplodocus', 
        desc: 'Herbívoro saurópode com pescoço e cauda extremamente longos, parecidos com chicotes.', 
        dieta: 'Herbívoro', 
        tamanho: '27 metros e 15 toneladas', 
        curiosidades: 'Cauda longa possivelmente usada para defesa ou fazer ruído.',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Diplodocus_longus%282%29.jpg' 
    }
];


const extinctionPage = {
    titulo: 'O Fim da Era Mesozóica',
    subtitulo: 'Um novo amanhecer para a Terra',
    descricao: 'Há cerca de 66 milhões de anos, um evento catastrófico encerrou o domínio dos dinossauros. A principal teoria aponta para o impacto de um **asteroide gigante** na região de Chicxulub, no México. O choque lançou quantidades maciças de poeira e detritos na atmosfera, bloqueando o sol e causando um inverno nuclear prolongado. Isso levou ao colapso das cadeias alimentares, resultando na extinção em massa do Cretáceo-Paleogeno (K-Pg), eliminando cerca de 75% das espécies de vida na Terra, incluindo todos os dinossauros não-avianos.',
    adicional: 'O impacto inicial causou terremotos maciços e tsunamis globais. No entanto, o fator de extinção mais devastador foi a mudança climática a longo prazo. A escuridão e o frio repentinos mataram a maior parte da vida vegetal (produtores primários), levando à fome os herbívoros e, consequentemente, os grandes carnívoros. Apenas pequenos animais e criaturas aquáticas conseguiram sobreviver à crise. A extinção K-Pg abriu o caminho para a ascensão dos mamíferos, que viriam a dominar o planeta, marcando o início da Era Cenozoica.'
};


const nav = document.getElementById('dino-nav');
const content = document.getElementById('dino-content');
const leavesContainer = document.querySelector('.leaves-container');


// Função principal para carregar o conteúdo na área 'main'
function loadContent(index) {
    let htmlContent = '';

    if (index === -1) {
        // Página de Extinção (Home)
        htmlContent = `
            <h2>${extinctionPage.titulo}</h2>
            <h3>${extinctionPage.subtitulo}</h3>
            <p>${extinctionPage.descricao}</p>
            <p>${extinctionPage.adicional}</p>
            `;
        
        content.innerHTML = htmlContent;

    } else {
        // Carregar um Dinossauro específico
        const dino = dinos[index];
        htmlContent = `
            <h2>${dino.nome}</h2>
            <div class="image-container">
                <img src="${dino.imagem}" alt="Ilustração do dinossauro ${dino.nome}">
            </div>
            <p>${dino.desc}</p>
            <p><strong>Dieta:</strong> ${dino.dieta}</p>
            <p><strong>Tamanho:</strong> ${dino.tamanho}</p>
            <p><strong>Curiosidades:</strong> ${dino.curiosidades}</p>
        `;
        content.innerHTML = htmlContent;
    }

    // Ativa o botão correto na navegação
    setActiveButton(nav.children[index === -1 ? 0 : index + 1]);
}

// Função para destacar o botão ativo
function setActiveButton(activeBtn) {
    for(let btn of nav.children) {
        btn.classList.remove('active');
    }
    activeBtn.classList.add('active');
}


// --- Criação da Navegação ---

// 1. Botão da Página de Extinção (Home)
const extinctionBtn = document.createElement('button');
extinctionBtn.textContent = 'Extinção (Home)';
extinctionBtn.setAttribute('aria-label', 'Mostrar a página inicial sobre a extinção dos dinossauros');
extinctionBtn.addEventListener('click', () => {
    loadContent(-1);
    content.focus();
});
nav.appendChild(extinctionBtn);

// 2. Botões dos Dinossauros
dinos.forEach((dino, i) => {
    const btn = document.createElement('button');
    btn.textContent = dino.nome;
    btn.setAttribute('aria-label', `Mostrar informações do dinossauro ${dino.nome}`);
    btn.addEventListener('click', () => {
        loadContent(i);
        content.focus();
    });
    nav.appendChild(btn);
});


// --- Lógica das Folhas Animadas ---
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    
    const variation = Math.floor(Math.random() * 3) + 1;
    leaf.classList.add(`var${variation}`);


    leaf.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.random() * 10 + 10;
    leaf.style.width = size + 'px';
    leaf.style.height = size + 'px';


    const duration = Math.random() * 10 + 10;
    leaf.style.animationDuration = `${duration}s, ${duration / 2}s`;
    leaf.style.animationDelay = `-${Math.random() * duration}s`;


    leavesContainer.appendChild(leaf);


    leaf.addEventListener('animationiteration', () => {
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.animationDelay = `-${Math.random() * duration}s`;
        const newSize = Math.random() * 10 + 10;
        leaf.style.width = newSize + 'px';
        leaf.style.height = newSize + 'px';
    });
}


// --- Inicialização da Aplicação ---

// 1. Mostrar a página de Extinção inicialmente (índice -1)
loadContent(-1);

// 2. Cria o número de folhas inicialmente
const numberOfLeaves = 30;
for (let i = 0; i < numberOfLeaves; i++) {
    createLeaf();
}