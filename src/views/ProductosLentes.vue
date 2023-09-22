<template>
    <div class="content">
        <Nav />
        <div class="m-3">
             <b-card-group deck>
                 <b-card title="DKR" style="max-width: 40rem;">
                    <iframe id="fred" 
                    style="border:1px solid #666CCC" 
                    title="PDF in an i-Frame" 
                    src="CATALOGO-DKR-DICIEMBRE-2022.pdf" 
                    frameborder="1" 
                    scrolling="auto" 
                    width="100%" 
                    height="600px" >
                    </iframe>
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de 8:00am a 5:00pm <br />
                        Sabados de 8:00am a 12:30pm
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
                <b-card title="MILAN-CLIP" style="max-width: 40rem;">
                    <iframe id="fred" 
                    style="border:1px solid #666CCC" 
                    title="PDF in an i-Frame" 
                    src="CATALOGO-DKR-DICIEMBRE-2022.pdf" 
                    frameborder="1" 
                    scrolling="auto" 
                    width="100%" 
                    height="600px" >
                    </iframe>
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de 8:00am a 5:00pm <br />
                        Sabados de 8:00am a 12:30pm
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
                 <b-card title="MILAN METALICO" style="max-width: 40rem;">
                    <iframe id="fred" 
                    style="border:1px solid #666CCC" 
                    title="PDF in an i-Frame" 
                    src="CATALOGO-DKR-DICIEMBRE-2022.pdf" 
                    frameborder="1" 
                    scrolling="auto" 
                    width="100%" 
                    height="600px" >
                    </iframe>
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de 8:00am a 5:00pm <br />
                        Sabados de 8:00am a 12:30pm
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
             </b-card-group>
             <b-card-group deck>
                <b-card title="MILAN KIDS" style="max-width: 40rem;">
                    <iframe id="fred" 
                    style="border:1px solid #666CCC" 
                    title="PDF in an i-Frame" 
                    src="CATALOGO-DKR-DICIEMBRE-2022.pdf" 
                    frameborder="1" 
                    scrolling="auto" 
                    width="100%" 
                    height="600px" >
                    </iframe>
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de 8:00am a 5:00pm <br />
                        Sabados de 8:00am a 12:30pm
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
                <b-card title="MILAN TR90 ACETATO" style="max-width: 40rem;">
                    <iframe id="fred" 
                    style="border:1px solid #666CCC" 
                    title="PDF in an i-Frame" 
                    src="CATALOGO-DKR-DICIEMBRE-2022.pdf" 
                    frameborder="1" 
                    scrolling="auto" 
                    width="100%" 
                    height="600px" >
                    </iframe>
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de 8:00am a 5:00pm <br />
                        Sabados de 8:00am a 12:30pm
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
                 <b-card title="QUANTUM ACETATO" style="max-width: 40rem;">
                    <iframe id="fred" 
                    style="border:1px solid #666CCC" 
                    title="PDF in an i-Frame" 
                    src="CATALOGO-DKR-DICIEMBRE-2022.pdf" 
                    frameborder="1" 
                    scrolling="auto" 
                    width="100%" 
                    height="600px" >
                    </iframe>
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de 8:00am a 5:00pm <br />
                        Sabados de 8:00am a 12:30pm
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
             </b-card-group>
            <br />
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Nav from '@/components/navbar/navbarDemo.vue'
import Footer from '@/components/Footer/Footer.vue'
//import pdf from 'vue-pdf'


export default {
    name: 'DisponibilidadDoc',
    components: {
        Nav,
        Footer,
       // pdf
    }
}
</script>
