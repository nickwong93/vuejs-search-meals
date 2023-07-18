<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1  class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div class="font-bold">
                <strong>Category: </strong>{{ meal.strCategory}}
            </div>
            <div class="font-bold"> 
                <strong>Area: </strong>{{ meal.strArea }}
            </div>
            <div class="font-bold">
                <strong>Tags: </strong>{{ meal.strTags }}
            </div>
        </div>

        <div class="my-3 text-justify">
            {{ meal.strInstructions }}
        </div>

        <div class= "grid grid-cols-1 sm:grid-cols-2 py-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strIngredient${ind + 1}`]">
                            {{ind + 1}}. {{meal[`strIngredient${ind + 1}`]}}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strMeasure${ind + 1}`]">
                            {{meal[`strMeasure${ind + 1}`]}}
                        </li>
                    </template>
                </ul>
            </div>
        </div>

        <div class="mt-4">
            <YouTubeButton :href="meal.strYoutube">Youtube</YouTubeButton>

            <a 
                :href="meal.strSource"
                target="_blank"
                class="ml-3 px-3 py-2 rounded border-2 border-purple-600 hover:bg-purple-600 bg-purple-500 text-white transition-colors">
                View Original Source
            </a>
        </div>
    </div>



</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';
 
const route = useRoute();
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data })=> {
            meal.value = data.meals[0] || {}
        })
})
</script>