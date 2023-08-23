import { ref } from "vue";
import axios from 'axios';
import { useRouter } from "vue-router";

// axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"
// axios.defaults.baseURL = "http://172.19.0.2/api/v1/"
// axios.defaults.baseURL = "http://laravel-api-service/api/v1/"
axios.defaults.baseURL = "http://localhost/api/v1/"

export default function useHotels() {
    const hotels = ref([]);
    const hotel = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getHotels = async () => {
        const response = await axios.get("hotels");
        hotels.value = response.data.data;
    };

    const getHotel = async (id) => {
        const response = await axios.get("hotels/" + id);
        hotel.value = response.data.data;
        return response.data.data;
    };

    const storeHotel = async (data) => {
        try {
            await axios.post("hotels", data);
            router.push({ name: "HotelIndex" });
        }
        catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const updateHotel = async (id) => {
        try {
            await axios.put("hotels/" + id, hotel.value);
            router.push({ name: "HotelIndex" });
        }
        catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const destroyHotel = async (id) => {
        if (!window.confirm("¿Está seguro?")) {
            return;
        }
        await axios.delete("hotels/" + id);
        await getHotels();
    }
    return {
        hotel,
        hotels,
        getHotel,
        getHotels,
        storeHotel,
        updateHotel,
        destroyHotel,
        errors,
    }
}