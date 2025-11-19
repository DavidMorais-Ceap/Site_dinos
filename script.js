const dinos = [
    // 1. Carnívoro (Terrestre)
    { 
        nome: 'Tyrannosaurus Rex', 
        desc: 'Grande carnívoro com mandíbula poderosa e tamanho impressionante.', 
        dieta: 'Carnívoro', 
        tamanho: 'Até 12 metros e 8 toneladas', 
        curiosidades: 'Uma das mordidas mais fortes, braços pequenos mas fortes.',
        imagem: 'https://www.nhm.ac.uk/discover/dino-directory/_next/image?url=https%3A%2F%2Fwww.nhm.ac.uk%2Fresources%2Fnature-online%2Flife%2Fdinosaurs%2Fdinosaur-directory%2Fimages%2Freconstruction%2Fsmall%2Ftyrannosaurus.jpg&w=3840&q=75' 
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
        imagem: 'https://www.shutterstock.com/image-illustration/3d-rendered-dinosaur-illustration-oviraptor-260nw-2213025057.jpg' 
    },
    
    // 5. Voador (Pterossauro)
    { 
        nome: 'Pterodactylus', 
        desc: 'Pterossauro de cauda curta com bico longo e asas feitas de membrana de pele.', 
        dieta: 'Carnívoro (principalmente peixes e invertebrados)', 
        tamanho: 'Envergadura de até 1 metro', 
        curiosidades: 'Um dos primeiros vertebrados a desenvolver o voo motorizado.',
        imagem: 'https://www.shutterstock.com/image-illustration/illustration-flying-pterodactyl-red-green-260nw-2439241551.jpg' 
    },
    
    // 6. Extra 1 (Herbívoro de Pescoço Longo)
    { 
        nome: 'Diplodocus', 
        desc: 'Herbívoro saurópode com pescoço e cauda extremamente longos, parecidos com chicotes.', 
        dieta: 'Herbívoro', 
        tamanho: '27 metros e 15 toneladas', 
        curiosidades: 'Cauda longa possivelmente usada para defesa ou fazer ruído.',
        imagem: 'https://i.pinimg.com/736x/f5/4d/23/f54d236778449ca29a65ad895cd7e3d1.jpg' 
    },

    // --- Novos 5 Dinossauros Adicionados ---

    // 7. Novo - Carnívoro Ágil
    {
        nome: 'Velociraptor',
        desc: 'Pequeno e ágil, famoso por garras curvas e cauda enrijecida.',
        dieta: 'Carnívoro',
        tamanho: '2 metros de comprimento, 15 kg',
        curiosidades: 'Acredita-se que caçava em bandos. Era coberto de penas.',
        imagem: 'https://i.natgeofe.com/n/5c3c8fb7-b1e4-495b-a943-9f812fbb320f/velociraptor-mongoliensis_2490029.jpg'
    },
    
    // 8. Novo - Blindado
    {
        nome: 'Ankylosaurus',
        desc: 'Um "tanque vivo", completamente coberto por placas ósseas e com uma cauda em forma de porrete.',
        dieta: 'Herbívoro',
        tamanho: '8 metros e 6 toneladas',
        curiosidades: 'Seu porrete da cauda podia quebrar ossos de predadores.',
        imagem: 'https://t4.ftcdn.net/jpg/06/09/87/33/360_F_609873365_BQYgKRUuATxXMtQR2pWzUIPtl6xS9k5n.jpg'
    },
    
    // 9. Novo - Navegador Aquático
    {
        nome: 'Mosasaurus',
        desc: 'Um réptil marinho gigante, predador do topo da cadeia alimentar dos oceanos.',
        dieta: 'Carnívoro (peixes, tubarões, outros répteis)',
        tamanho: 'Até 18 metros',
        curiosidades: 'Não era tecnicamente um dinossauro, mas um lagarto marinho gigante.',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Mosasaurus_beaugei1DB.jpg'
    },

    // 10. Novo - Bico de Pato
    {
        nome: 'Parasaurolophus',
        desc: 'Herbívoro do grupo dos Hadrossauros, famoso por sua longa crista tubular na cabeça.',
        dieta: 'Herbívoro',
        tamanho: '10 metros e 2,5 toneladas',
        curiosidades: 'Sua crista era usada para emitir sons altos e para exibição.',
        imagem: 'https://static.vecteezy.com/ti/vetor-gratis/p1/15778565-ilustracaoial-de-dinossauro-parasaurolophus-isolada-no-fundo-branco-vetor.jpg'
    },

    // 11. Novo - Carnívoro com Chifres
    {
        nome: 'Carnotaurus',
        desc: 'Carnívoro rápido com dois chifres curtos acima dos olhos e braços minúsculos.',
        dieta: 'Carnívoro',
        tamanho: '8 metros e 1 tonelada',
        curiosidades: 'O predador com os braços mais curtos conhecidos, até menores que os do T. Rex.',
        imagem: 'https://m.media-amazon.com/images/I/61zahZ6KjOL.jpg'
    }
];


const extinctionPage = {
    titulo: 'A Extinção K-Pg',
    subtitulo: 'O Impacto que Mudou a Terra',
    descricao: 'Há 66 milhões de anos, um asteroide gigante atingiu a Terra, causando o evento de extinção do Cretáceo-Paleogeno ou seja a extinção dos dinnossauros.',
    adicional: 'O impacto criou um inverno nuclear global, bloqueando o sol, matando a vida vegetal e colapsando toda a cadeia alimentar. Cerca de 75% das espécies foram eliminadas, abrindo caminho para a ascensão dos mamíferos.'
};


const nav = document.getElementById('dino-nav');
const content = document.getElementById('dino-content');
const leavesContainer = document.querySelector('.leaves-container');


// Função para criar o conteúdo do dinossauro
function createDinoContent(dino) {
    // Note que a linha <strong>Período:</strong> foi removida.
    return `
        <h2>${dino.nome}</h2>
        <div class="image-container">
            <img src="${dino.imagem}" alt="Ilustração do dinossauro ${dino.nome}">
        </div>
        <p>${dino.desc}</p>
        <p><strong>Dieta:</strong> ${dino.dieta}</p>
        <p><strong>Tamanho:</strong> ${dino.tamanho}</p>
        <p><strong>Curiosidades:</strong> ${dino.curiosidades}</p>
    `;
}

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
        htmlContent = createDinoContent(dino);
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

