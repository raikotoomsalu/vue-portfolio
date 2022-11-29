<script setup>
import HeaderVue from '../components/Header.vue';
</script>

<template>
    <HeaderVue />
    <div class="mt-6">
        <div class="">
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="p-2 lg:p-6">
                    <div class="border-b-2 border-green-800 ">
                        <h1 class="text-4xl underline mb-4">Kuressaare Ametikooli portfoolio</h1>
                        <div class="text-xl">
                        <p>Tegime grupiga Kuressaare Ametikoolist portfoolio.</p> 
                        <p>Kõikidel olid omad ülesanded ning ma olin tiimijuht.</p>
                        <p class="mb-4">Töö sujus hästi ning kõik suhtlesid omavahel.</p>
                        </div>     
                    </div>
                    <div class="flex mt-4 text-2xl gap-4 ">
                        <a href="https://github.com/raikotoomsalu/projekt--ametikooli-portfoolio" 
                        class="hover:bg-white hover:rounded-md transition duration-300">Github</a>
                        <p>•</p>
                        <a href="https://www.figma.com/file/d48dq9IXtZinNxhLHMgGEL/Ametikool-100-2.0?node-id=0%3A1" 
                        class="hover:bg-white hover:rounded-md transition duration-300">Figma</a>
                    </div>
                </div>
                        <div class="p-4">
                            <img src="../assets/kureprojekt.jpg" class="border-4 border-orange-300" alt="">
                        </div>
            </div>
        </div>
    </div>
</template>