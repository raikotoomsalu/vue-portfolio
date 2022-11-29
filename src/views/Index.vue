<script setup>
import HeaderVue from '../components/Header.vue';
</script>

<template>
    <HeaderVue />
    <div class="grid grid-cols-1 lg:grid-cols-2 px-2 pb-6 lg:p-8 w-full gap-4 mb-6">
        <div class="h-full border-4 border-green-800 drop-shadow-2xl mt-6 rounded-md">
            <h1 class="p-6 flex justify-center text-4xl lg:text-7xl font-bold">Tere,</h1>
            <div class="text-md lg:text-2xl px-6 py-2">
                <p class="pb-2">minu nimi on Raiko ning olen teise kursuse õpilane Kuressaare Ametikoolis.</p>
                <p class="pb-2">Programmeerimine ja kõik arvutiga seonduv on mulle väga pikalt huvi pakkunud.
                                        Sel põhjusel otsustasin tulla tarkvaraarendust erialaselt õppima.
                                        Viimase aastaga olen väga palju juurde õppinud.
                                        Minu eelistegevus on front-endi arendamine, aga oskan teha ka back-endi, kui vaja.</p>
                <p class="pb-2">Vabal ajal meeldib mulle arendada oma eelnevalt tehtud lehekülgi, arendada teadmisi oma eriala kohta,
                                        mängida videomänge, teha trenni</p>
                <p class="">Praeguseks oskan C++, PHP, JavaScript, HTML, CSS ja Python keeli.</p>
            </div>
        </div>
        <div class="h-full lg:h-full border-4 border-green-800 drop-shadow-2xl mt-6 rounded-md">
            <div class="text-md lg:text-2xl px-6 py-2">
                <div class="p-12">
                    <img src="../assets/man.jpg" alt="" >
                </div>
            </div>
       
        </div>
    </div>
</template>