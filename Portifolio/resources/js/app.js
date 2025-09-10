// Importa JS do Bootstrap
import '../bootstrap/bootstrap.min.js';

// Importa Vue (global)
import '../vue/Vue.js';

import axios from 'axios';

window.axios = axios;

// CSRF token para rotas web
window.axios.defaults.headers.common['X-CSRF-TOKEN'] =
    document.querySelector('meta[name="csrf-token"]').getAttribute('content');

new Vue({
    el: "#app",
    data: {
        informacoes_pessoais: [
            {
                nome: "Paulo Barbosa",
                titulos: [
                    "Desenvolvedor Web Fullstack",
                    "Laravel",
                    "VueJS",
                    "Bootstrap",
                    "MySQL"
                ],
                resumo: "Iniciei minha jornada no desenvolvimento web como freelancer, onde consolidei e ampliei minhas habilidades em front-end e back-end. Atualmente, estou em um processo de transição de carreira, buscando me estabelecer de forma sólida como desenvolvedor web. Nos últimos meses, atuei intensivamente como freelancer, entregando soluções completas e personalizadas para clientes.",
                foto_perfil: '{{ asset("assets/images/paulo-barbosa-perfil.png") }}'
            }
        ],
        displayedText: "",
        wordIndex: 0,
        charIndex: 0,
        typingSpeed: 100,
        pauseBetweenWords: 1000,
        links: [
            { linkedin: "https://www.linkedin.com/in/paulo-victorsb/", github: "https://github.com/Paulo-VictorSB" }
        ],
        tecnologias: [
            'html',
            'css',
            'javascript',
            'bootstrap',
            'vue',
            'php',
            'laravel',
            'git',
            'github',
        ],
        tecnologiaLogos: {
            html: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg",
            css: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg",
            javascript: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
            bootstrap: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bootstrap.svg",
            vue: "https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/vuedotjs.svg",
            php: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/php.svg",
            laravel: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg",
            git: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg",
            github: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
        },
        currentTranslate: 0,
        itemWidth: 164,
        speed: 2,
        formacao: [
            {
                nome: "Analise e desenvolvimento de sistemas",
                instituicao: "unifg",
                data: "11/24 a 05/27",
                descricao: "O curso de Análise e Desenvolvimento de Sistemas da UNIFG é uma graduação tecnológica voltada à formação de profissionais para atuar em desenvolvimento de software, programação, análise de sistemas e gestão de bancos de dados. O objetivo é preparar os alunos com conhecimentos teóricos e práticos para o mercado de tecnologia da informação.",
                link: "https://landing.unifg.edu.br/curso/analise-e-desenvolvimento-de-sistemas-tecnologo?utm_source=google&utm_medium=cpc&utm_campaign=UNIFG-PE|GRAD|TODOS|PMAX-EDUCACAO-252|02|05|01|08|&utm_term=cpc&utm_content=ads&gclsrc=aw.ds&gad_source=1&gad_campaignid=21768680317&gbraid=0AAAAADn9KEptimLhYkv0dwMvpE0vnTR6J&gclid=Cj0KCQjww4TGBhCKARIsAFLXndReoQFUsDgXaFdgjZ6r51CBUFjikGBVmfwkDiRKsZ4B8Tpcv4CAh7QaAp6AEALw_wcB"
            },
            {
                nome: "Desenvolvimento Web Compacto e Completo",
                instituicao: "udemy",
                data: "06/24 a 06/25",
                descricao: "Curso completo de desenvolvimento web que ensina do básico ao avançado todas as principais tecnologias: HTML5, CSS3, JavaScript, PHP 8, OOP, MySQL, REST APIs, AJAX, Bootstrap 5, GIT & GitHub, NodeJS, CodeIgniter 4, Laravel 10, hospedagem e gestão de servidores com cPanel. Ideal para iniciantes e para quem deseja se tornar um desenvolvedor web profissional, com muitos exercícios práticos e projetos reais.",
                link: "https://www.udemy.com/course-dashboard-redirect/?course_id=5107432"
            },
            {
                nome: "Laravel 11 & 12: Framework, Ecossistema e Projetos Web",
                instituicao: "Udemy",
                data: "07/24 a 12/25",
                descricao: "Curso completo de Laravel que ensina desde o básico até avançado. O aluno aprende a criar aplicações web e APIs, trabalhar com Blade, Eloquent ORM, MySQL/SQLite, autenticação e autorização, Laravel Livewire, Sanctum, Cashier + Stripe, além de deploy em produção. Ideal para quem deseja se tornar profissional em desenvolvimento com Laravel.",
                link: "https://www.udemy.com/course-dashboard-redirect/?course_id=6134467"
            },
            {
                nome: "Desenvolvimento Web Avançado com Vue (v2 e v3) e Vuex",
                instituicao: "Udemy",
                data: "07/24 a 12/25",
                descricao: "Curso avançado de Vue.js que aborda criação de aplicações modernas com componentes reutilizáveis, Vue CLI, Vue Router, Vuex, animações e deploy em Heroku. Inclui conceitos de Vue 2 e Vue 3, gerenciamento de estado, diretivas, lifecycle hooks, formulários, máscaras de input e integração com Electron. Ideal para quem deseja se especializar em front-end moderno com Vue.",
                link: "https://www.udemy.com/course-dashboard-redirect/?course_id=4010970"
            }
        ]
    },
    mounted() {
        this.typeWriter();
        this.startCarousel();
    },
    computed: {
        tecnologiasLoop() {
            return [...this.tecnologias, ...this.tecnologias];
        }
    },
    methods: {
        typeWriter() {
            const currentWord = this.informacoes_pessoais[0].titulos[this.wordIndex];

            if (this.charIndex < currentWord.length) {
                this.displayedText += currentWord[this.charIndex];
                this.charIndex++;
                setTimeout(this.typeWriter, this.typingSpeed);
            } else {
                setTimeout(this.eraseText, this.pauseBetweenWords);
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                this.displayedText = this.displayedText.slice(0, -1);
                this.charIndex--;
                setTimeout(this.eraseText, this.typingSpeed / 2);
            } else {
                this.wordIndex = (this.wordIndex + 1) % this.informacoes_pessoais[0].titulos.length;
                setTimeout(this.typeWriter, this.typingSpeed);
            }
        },
        startCarousel() {
            setInterval(() => {
                this.currentTranslate += this.speed;
                const totalWidth = this.itemWidth * this.tecnologias.length;
                if (this.currentTranslate >= totalWidth) {
                    this.currentTranslate = 0;
                }
            }, 20);
        }
    }
})
