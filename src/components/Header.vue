<template>
     <header class="bg-amber-100 shadow-md">

    <div class="flex flex-col items-center ">
        <div class="flex border-b-2 w-full border-green-800 my-4">
            <p class="text-4xl w-full text-center mb-4">Raiko Toomsalu</p>
        </div>
        <div class="flex justify-center w-80 gap-10 text-sm lg:text-xl">
            <router-link to="/" class="hover:text-color-gray-400 hover:bg-orange-300 hover:underline rounded-md transition duration-300">Kodu</router-link>
            <router-link to="/CV" class="hover:text-color-gray-400 hover:bg-orange-300 hover:underline rounded-md transition duration-300">CV</router-link>
            <router-link to="/Projektid" class="hover:text-color-gray-400 hover:bg-orange-300 hover:underline rounded-md transition duration-300">Projektid</router-link>
            <router-link to="/Opitee" class="hover:text-color-gray-400 hover:bg-orange-300 hover:underline rounded-md transition duration-300">Õpitee</router-link>
            <router-link to="/Mindmap" class="hover:text-color-gray-400 hover:bg-orange-300 hover:underline rounded-md transition duration-300">Mindmap</router-link>
        </div>
    </div>
        
    </header>
</template>