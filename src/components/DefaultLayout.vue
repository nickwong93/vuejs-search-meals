<template>
    <div class="bg-gray-100 min-h-full">
        <navbar />
        <main>
            
            <div class="max-w-[1000px] mx-auto">
                <router-view />
            </div>

        </main>

 </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'

</script>