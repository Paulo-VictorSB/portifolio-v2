<div class="container my-5 " id="formacao" style="min-height: 90vh">
    <h1 class="text-center mb-5 text-light">Formação</h1>

    <div class="row g-4">
        <div class="col-md-6" v-for="(curso, index) in formacao" :key="index">
            <div class="card h-100 shadow-sm bg-dark text-light">
                <div class="card-body d-flex flex-column">
                    <h4 class="card-title">@{{ curso.nome }}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">@{{ curso.instituicao }} | @{{ curso.data }}</h6>
                    <p class="card-text flex-grow-1">@{{ curso.descricao }}</p>
                    <a :href="curso.link" class="btn btn-outline-light mt-3" target="_blank">Ver Mais</a>
                </div>
            </div>
        </div>
    </div>
</div>
