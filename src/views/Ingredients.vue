<template>
    
    <div class="p-8">
        
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>

        <input
            type="text"
            v-model="keyword"
            class="rounded border-2 border-gray-200 w-full mb-3"
            placeholder="Search for Ingredients"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href='#'

            @click.prevent="openIngredient(ingredient)"

                v-for="ingredient of computedIngredients"
                :key="ingredient.idIngredient"
                class="block bg-white rounded p-3 mb-3 shadow md"
            >
                <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
            </a>
        </div>
    </div>

</template>

<script setup>
import axiosClient from '../axiosClient';
import { ref, onMounted } from 'vue';
import { computed } from '@vue/reactivity';
import store from "../store";
import { useRouter } from 'vue-router';

const router = useRouter();
const keyword = ref('');
const ingredients = ref([]);

const computedIngredients = computed(() => {
    if(!computedIngredients) return ingredients;
    return ingredients.value.filter((i) => 
        i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    )
})

function openIngredient(ingredient){
    store.commit('setIngredient', ingredient)
    router.push({
        name: "byIngredient",
        params: { ingredient: ingredient.strIngredient}
    });
}

onMounted(() => {
    axiosClient.get("list.php?i=list").then(({data}) => {
        ingredients.value = data.meals  
    })
})

</script>