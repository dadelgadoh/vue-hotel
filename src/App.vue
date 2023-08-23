<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div class="bg-cyan-700">
        <nav class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
          sticky 
          top-0
        ">
          <div class="flex items-center justify-between">
            <router-link to="/" class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
            ">
              <div class="col-xs-12 col-sm-2 logo">
                <div class="logo-image">

                  <img class="logo-img" src="/src/components/logo-decameron-all-inclusive.png" alt="Decameron">

                </div>
              </div>
            </router-link>
            <!-- Mobile menu button -->
            <div  class="flex md:hidden">
              <button type="button" class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              ">
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                  </path>
                </svg>
              </button>
            </div>
          </div>


          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul>
            <RouterLink class="
            px-4
            py-2
            mr-4 
            bg-cyan-600 
            hover:bg-cyan-800 
            rounded
            text-white
          " to="/">Home
            </RouterLink>
            <RouterLink class="
            px-4
            py-2
            mr-4 
            bg-cyan-600 
            hover:bg-cyan-800 
            rounded
            text-white
          " to="/hotels">Hoteles</RouterLink>
            <RouterLink class="
            px-4
            py-2
            mr-4 
            bg-cyan-600 
            hover:bg-cyan-800 
            rounded
            text-white
          " to="/rooms">Habitaciones</RouterLink>

          </ul>
        </nav>
      </div>
    </header>
  </div>

  <main class="realtive max-w-7xl mx-auto min-h-screen">
    <RouterView />
  </main>
</template>

