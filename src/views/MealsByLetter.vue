<template>
    
    <div class="flex justify-center mt-2 pt-5">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals By Letter</h1>
    </div>

    <div class="flex flex-wrap justify-center gap-3 mb-6">
        
        <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter" class="hover:text-orange-500 hover:scale-150 transition-all">
            {{ letter }}
        </router-link>
    
    </div>

    <Meals :meals="meals"/>

</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>