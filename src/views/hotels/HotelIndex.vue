
<script setup>
import useHotels from '../../composables/hotels';
import { onMounted } from 'vue';

const { hotels, getHotels } = useHotels();

onMounted(() => getHotels());
</script>

<template>
    <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink :to="{ name: 'HotelCreate' }" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700">Nuevo Hotel
            </RouterLink>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3">
                            NIT
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Ciudad
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Dirección
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Habitaciones
                        </th>
                        <th scope="col" class="px-6 py-3">
                            {BOTONES}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="hotel in hotels" :key="hotel.id"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="px-6 py-4">
                            {{ hotel.hotelName }}
                        </td>
                        <td class="px-6 py-4">
                            {{ hotel.nit }}
                        </td>
                        <td class="px-6 py-4">
                            {{ hotel.city }}
                        </td>
                        <td class="px-6 py-4">
                            {{ hotel.address }}
                        </td>
                        <td class="px-6 py-4">
                            {{ hotel.no_rooms }}
                        </td>
                        <td class="px-6 py-4">
                            edit/delete
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

    </div>
</template>
