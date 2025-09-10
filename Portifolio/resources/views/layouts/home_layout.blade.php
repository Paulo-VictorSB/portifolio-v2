<!doctype html>
<html lang="pt-BR">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Navbar Dark - Exemplo</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet">

    @vite(['resources/js/app.js', 'resources/bootstrap/bootstrap.min.css'])
    <style>
        .perfil-img {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border: 5px solid white
        }

        .cursor {
            display: inline-block;
            width: 1ch;
            animation: blink 0.7s steps(1) infinite;
        }

        .laravel {
            color: #FF2D20;
        }

        .vuejs {
            color: #41B883;
        }

        .bootstrap {
            color: #7952B3;
        }

        .mysql {
            color: #00758F;
        }

        .default {
            color: #FFFFFF;
        }

        .btn i {
            transition: transform 0.3s;
        }

        .btn:hover i {
            transform: scale(1.2);
        }

        .tech-carousel {
            width: 100%;
            overflow: hidden;
        }

        .tech-track {
            display: flex;
            width: max-content;
            animation: scroll 20s linear infinite;
        }

        .tech-item {
            flex-shrink: 0;
            min-width: 120px;
            margin-right: 10px;
            background-color: #343a40;
            color: #fff;
            padding: 0.5rem;
            text-align: center;
            border-radius: 0.5rem;
            font-weight: bold;
            font-size: 0.9rem;
        }

        .tech-icon {
            width: 50px;
            height: 40px;
            display: block;
            margin: 0 auto 0.3rem auto;
            filter: invert(1)
        }

        @keyframes scroll {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-50%);
            }
        }

        @keyframes blink {
            50% {
                opacity: 0;
            }
        }
    </style>
</head>

<body class="bg-dark text-light">

    <div id="app">
        {{-- Navbar component --}}
        <x-navbar></x-navbar>

        {{-- Sobre mim --}}
        <x-sobre-mim></x-sobre-mim>

        {{-- Tecnologias --}}
        <x-tecnologias></x-tecnologias>

        {{-- Cursos --}}
        <x-cursos></x-cursos>
    </div>

</body>

</html>
