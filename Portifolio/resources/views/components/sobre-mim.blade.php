<div class="container mt-5 d-flex align-items-center" id="sobre-mim" style="min-height: 90vh">
    <div class="row align-items-center" v-for="meu in informacoes_pessoais" :key="meu.nome">
        <div class="col-md-6 order-2 order-md-1">
            <h1>@{{ meu.nome.toUpperCase() }}</h1>
            <h2>@{{ displayedText }}<span class="cursor">|</span></h2>
            <p>@{{ meu.resumo }}</p>
        </div>

        <div class="col-md-6 text-center order-1 order-md-2 my-5">
            <img src="{{ asset('assets/images/paulo-barbosa-perfil.png') }}" alt="Foto de Perfil"
                class="img-fluid rounded-circle perfil-img">
        </div>

        <div class="d-flex gap-3 mt-3 order-3 w-100">
            <a href="{{ asset('assets/docs/PauloBarbosaDevFullStack2025.pdf') }}" target="_blank"
                class="btn btn-dark d-flex align-items-center border-white">
                <i class="fas fa-file-pdf me-2"></i> CV
            </a>

            <a :href="links[0].linkedin" target="_blank" class="btn btn-dark d-flex align-items-center border-white">
                <i class="fab fa-linkedin me-2"></i> LinkedIn
            </a>

            <a :href="links[0].github" target="_blank" class="btn btn-dark d-flex align-items-center border-white">
                <i class="fab fa-github me-2"></i> GitHub
            </a>
        </div>
    </div>
</div>
