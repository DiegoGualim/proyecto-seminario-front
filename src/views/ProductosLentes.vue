<template>
    <div class="content">
        <Nav />
        <div class="m-3">
             <b-card-group deck>
                 <b-card title="MILAN METALICA" style="max-width: 40rem;">
                        <iframe id="fred" 
                        style="border:1px solid #666CCC" 
                        title="PDF in an i-Frame" 
                        src="https://online.fliphtml5.com/kjoli/mqtu/" 
                        frameborder="1" 
                        scrolling="auto" 
                        width="100%" 
                        height="600px" >
                        </iframe> 
                
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de <b>8:00am a 5:00pm </b> <br />
                        Sabados de <b>8:00am a 12:30pm </b>
                        <b>Hasta agotar por existencias</b>
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
                <b-card title="MILAN CLIP ON" style="max-width: 40rem;">
                        <iframe id="fred" 
                        style="border:1px solid #666CCC" 
                        title="PDF in an i-Frame" 
                        src="https://online.fliphtml5.com/kjoli/rjji/" 
                        frameborder="1" 
                        scrolling="auto" 
                        width="100%" 
                        height="600px" >
                        </iframe> 

                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de <b>8:00am a 5:00pm </b> <br />
                        Sabados de <b>8:00am a 12:30pm </b>
                        <b>Hasta agotar por existencias</b>
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
                 <b-card title="MILAN FLEXI" style="max-width: 40rem;">
                    <iframe id="fred" 
                    style="border:1px solid #666CCC" 
                    title="PDF in an i-Frame" 
                    src="https://online.fliphtml5.com/kjoli/mraq/" 
                    frameborder="1" 
                    scrolling="auto" 
                    width="100%" 
                    height="600px" >
                    </iframe>
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de <b>8:00am a 5:00pm </b> <br />
                        Sabados de <b>8:00am a 12:30pm </b>
                        <b>Hasta agotar por existencias</b>
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
                    src="https://online.fliphtml5.com/kjoli/sbmm/" 
                    frameborder="1" 
                    scrolling="auto" 
                    width="100%" 
                    height="600px" >
                    </iframe>
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de <b>8:00am a 5:00pm </b> <br />
                        Sabados de <b>8:00am a 12:30pm </b>
                        <b>Hasta agotar por existencias</b>
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
                <b-card title="MILAN TR90/ACETATO" style="max-width: 40rem;">
                    <iframe id="fred" 
                    style="border:1px solid #666CCC" 
                    title="PDF in an i-Frame" 
                    src="https://online.fliphtml5.com/kjoli/hols/" 
                    frameborder="1" 
                    scrolling="auto" 
                    width="100%" 
                    height="600px" >
                    </iframe>
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de <b>8:00am a 5:00pm </b> <br />
                        Sabados de <b>8:00am a 12:30pm </b> 
                         <b>Hasta agotar por existencias</b>
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
                 <b-card title="RAZZA QUANTUM" style="max-width: 40rem;">
                    <iframe id="fred" 
                    style="border:1px solid #666CCC" 
                    title="PDF in an i-Frame" 
                    src="https://online.fliphtml5.com/ktnip/uqre/" 
                    frameborder="1" 
                    scrolling="auto" 
                    width="100%" 
                    height="600px" >
                    </iframe>
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de <b>8:00am a 5:00pm </b> <br />
                        Sabados de <b>8:00am a 12:30pm </b>
                        <b>Hasta agotar por existencias</b>
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
