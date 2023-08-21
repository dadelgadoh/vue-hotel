
<script setup>
import useHotels from '../../composables/hotels';
import useRooms from '../../composables/rooms';
import { onMounted } from 'vue';

const { room, getRoom, updateRoom, errors } = useRooms();
const { hotels, getHotels } = useHotels();

const props = defineProps(
    {
        id: {
            required: true,
            type: String
        }
    }
)
// onMounted(() => getRoom(props.id))
onMounted(() => {
      getHotels();
      getRoom(props.id);
    });
</script>


<template>
    <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="updateRoom($route.params.id)">
            <div class="space-y-6">
                <div class="mb-6">
                    <label for="hotel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hotel</label>
                    <select id="hotel" v-model="room.hotel_id" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option disabled selected>Escoja el hotel</option>
                        <option v-for="hotelSelect in hotels" :key="hotelSelect.id" :value="hotelSelect.id">{{ hotelSelect.name }}</option>
                    </select>
                </div>
                <div class="mb-6">

                    <label for="room_type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de
                        habitación</label>
                    <select id="room_type" v-model="room.room_type_id"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option disabled selected>Escoja el tipo</option>
                        <option value="1">Estándar</option>
                        <option value="2">Junior</option>
                        <option value="3">Suite</option>
                    </select>

                    <div v-if="errors.room_type_id"><span class="text-sm text-red-400">{{ errors.room_type_id[0] }}</span>
                    </div>
                </div>
                <div class="mb-6">
                    <label for="accommodation"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Acomodación</label>
                    <select id="accommodation" v-model="room.accommodation_id"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option disabled selected>Escoja la acomodación</option>
                        <option value="1">Sencilla</option>
                        <option value="2">Doble</option>
                        <option value="3">Triple</option>
                        <option value="4">Cuádruple</option>
                    </select>

                    <div v-if="errors.accommodation_id"><span class="text-sm text-red-400">{{ errors.accommodation_id[0]
                    }}</span></div>
                </div>
                <div class="mb-6">
                    <label for="quantity"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad</label>
                    <input type="number" id="quantity" v-model="room.quantity"
                        class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div v-if="errors.quantity"><span class="text-sm text-red-400">{{ errors.quantity[0] }}</span></div>
                </div>

                <div class="mt-4">
                    <button type="submit"
                        class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Guardar</button>
                </div>
            </div>
        </form>
    </div>
</template>
