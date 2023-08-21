
<script setup>
import useHotels from '../../composables/hotels';
import { onMounted } from 'vue';

const { hotels, getHotels, destroyHotel } = useHotels();

onMounted(() => getHotels());
</script>

<template>
    <!-- Start block -->
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div
                        class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <RouterLink :to="{ name: 'HotelCreate' }"
                            class="flex items-center justify-center text-white  focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">

                            <svg class="w-4 h-4 :text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="20" height="20" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span> &nbsp;Nuevo Hotel</span>
                        </RouterLink>

                        
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-4 py-4">Nombre</th>
                                <th scope="col" class="px-4 py-3">NIT</th>
                                <th scope="col" class="px-4 py-3">Ciudad</th>
                                <th scope="col" class="px-4 py-3">Dirección</th>
                                <th scope="col" class="px-4 py-3">Habitaciones</th>
                                <th scope="col" class="px-4 py-3">
                                    <span>Acciones</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="hotel in hotels" :key="hotel.id" class="border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{
                                        hotel.name }}</th>
                                <td class="px-4 py-3">{{ hotel.nit }}</td>
                                <td class="px-4 py-3"> {{ hotel.city }}</td>
                                <td class="px-4 py-3 max-w-[12rem] truncate">{{ hotel.address }}</td>
                                <td class="px-4 py-3">{{ hotel.no_rooms }}</td>
                                <td class="px-4 py-3 flex items-center space-x-2">
                                    <RouterLink :to="{ name: 'HotelEdit', params: { id: hotel.id } }"
                                        class="px-2 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded"><svg
                                            class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279" />
                                        </svg>
                                    </RouterLink>
                                    <button @click="destroyHotel(hotel.id)"
                                        class="px-2 py-2 bg-red-400 hover:bg-red-500 text-white rounded"><svg
                                            class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 18 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                        </svg></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </section>
    <!-- End block -->

</template>
