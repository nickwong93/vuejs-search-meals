<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-center">
         <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5 text-orange-500 font-bold hover:bg-orange-500 hover:text-white">
            Home
         </router-link>

         <div class="flex items-center gap-1 h-full">
            <router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white text-orange-500 font-bold">
               Search Meals
            </router-link>

            <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white text-orange-500 font-bold">
               Meals By Letter
            </router-link>

            <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white text-orange-500 font-bold">
               Meals By Ingredients
            </router-link>
         </div>
    </header>
    
</template>