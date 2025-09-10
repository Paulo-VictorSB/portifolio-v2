<div class="container my-5 d-flex flex-column align-items-center justify-content-center" style="min-height: 90vh;"
    id="tecnologias">
    <h1 class="mb-4">Tecnologias</h1>
    <div class="tech-carousel overflow-hidden w-100 d-flex justify-content-center">
        <div class="tech-track d-flex justify-content-center">
            <div class="tech-item" v-for="(tecnologia, index) in tecnologiasLoop" :key="index">
                <img :src="tecnologiaLogos[tecnologia]" :alt="tecnologia" class="tech-icon my-1">
                @{{ tecnologia.toUpperCase() }}
            </div>
        </div>
    </div>
</div>
