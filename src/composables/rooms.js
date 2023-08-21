import { ref } from "vue";
import axios from 'axios';
import { useRouter } from "vue-router";
// import useHotels from '../../composables/hotels';
import useHotels from "./hotels";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"

export default function useRooms() {
    const rooms = ref([]);
    const room = ref([]);
    const errors = ref({});
    const router = useRouter();
    const { getHotel } = useHotels();
    const hotelNames = ref({});

    const getRooms = async () => {
        const response = await axios.get("hotel-rooms");
        rooms.value = response.data.data;
        await loadHotelNames();
    };

    const getRoom = async (id) => {
        const response = await axios.get("hotel-rooms/" + id);
        room.value = response.data.data;
    };

    const storeRoom = async (data) => {
        try {
            await axios.post("hotel-rooms", data);
            router.push({ name: "RoomIndex" });
        }
        catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const updateRoom = async (id) => {
        try {
            await axios.put("hotel-rooms/" + id, room.value);
            router.push({ name: "RoomIndex" });
        }
        catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const destroyRoom = async (id) => {
        if (!window.confirm("¿Está seguro?")) {
            return;
        }
        await axios.delete("hotel-rooms/" + id);
        await getRooms();
    }
    const roomTypeNames = ['Estándar', 'Junior', 'Suite', 'No parametrizado'];
    const accommodationNames = ['Sencilla', 'Doble', 'Triple', 'Cuádruple', 'No parametrizado'];
    const getRoomTypeName = (roomTypeId) => roomTypeNames[roomTypeId - 1] || 'No parametrizado';
    const getAccommodationName = (accommodationId) => accommodationNames[accommodationId - 1] || 'No parametrizado';
    const loadHotelNames = async () => {
      for (const room of rooms.value) {
        const hotelData = await getHotel(room.hotel_id);
        hotelNames.value[room.id] = hotelData.name || 'No parametrizado';
      }
    };

    return {
        room,
        rooms,
        getRooms,
        getRoom,
        storeRoom,
        updateRoom,
        destroyRoom,
        errors,
        hotelNames,
        loadHotelNames,
        getRoomTypeName,
        getAccommodationName
    }
}