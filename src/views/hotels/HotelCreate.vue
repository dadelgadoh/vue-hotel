
<script setup>
import { reactive } from 'vue';
import useHotels from '../../composables/hotels';

const { storeHotel, errors } = useHotels();

const form = reactive({
    "name": "",
    "address": "",
    "city": "",
    "nit": "",
    "no_rooms": ""
})
</script>

<template>
    <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="storeHotel(form)">
            <div class="space-y-6">
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                    <input type="text" id="name" v-model="form.name"
                        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div v-if="errors.name"><span class="text-sm text-red-400">{{ errors.name[0] }}</span></div>
                </div>
                <div class="mb-6">
                    <label for="address"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
                    <input type="text" id="address" v-model="form.address"
                        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div v-if="errors.address"><span class="text-sm text-red-400">{{ errors.address[0] }}</span></div>
                </div>
                <div class="mb-6">
                    <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciudad</label>
                    <input type="text" id="city" v-model="form.city"
                        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div v-if="errors.city"><span class="text-sm text-red-400">{{ errors.city[0] }}</span></div>
                </div>
                <div class="mb-6">
                    <label for="nit" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NIT</label>
                    <input type="text" id="nit" v-model="form.nit"
                        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div v-if="errors.nit"><span class="text-sm text-red-400">{{ errors.nit[0] }}</span></div>
                </div>
                <div class="mb-6">
                    <label for="no_rooms"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Habitaciones</label>
                    <input type="text" id="no_rooms" v-model="form.no_rooms"
                        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div v-if="errors.no_rooms"><span class="text-sm text-red-400">{{ errors.no_rooms[0] }}</span></div>
                </div>
                <div class="mt-4">
                    <button type="submit"
                        class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Crear</button>
                </div>
            </div>
        </form>
    </div>
</template>
