<template>
    <div>

        <nav class="fixed top-0 left-0 w-full z-10 bg-white border-gray-200 py-10 px-16">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" class="flex items-center">
            <img src="https://www.svgrepo.com/show/499962/music.svg" class=" h-9 mr-3 sm:h-9" alt="Landwind Logo">
        </a>
        <div class="flex items-center lg:order-2">
            <div class="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>

            <a href="https://themesberg.com/product/tailwind-css/landing-page"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Download</a>
            
            <!--Start Toggle menu -->
                <button @click="toggleMenu" data-collapse-toggle="mobile-menu-2" type="button"
				class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="mobile-menu-2" aria-expanded="true">
				<span class="sr-only">Open main menu</span>
				<svg v-if="!menuOpen" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"></path>
				</svg>
				<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"></path>
				</svg>
			    </button>
                <!-- End Toggle menu -->
        </div>

        <div class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 hover:text-teal-600  rounded lg:bg-transparent lg:text-gray-700 lg:p-0 "
                        aria-current="page">HOME</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-teal-600 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-600 lg:p-0 ">ABOUT</a>
                </li>
                <!-- <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-teal-600 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-600 lg:p-0 ">SERVICES</a>
                </li> -->

                <!-- Hover Services -->
                
                <li class="relative  " @mouseover="startHover" @mouseleave="endHover">
                            <div class="items-center inline-flex">
                                <a href="#"
                                class="block py-2 pl-3 pr-4 mr-1 text-gray-700 border-b border-gray-100 hover:text-teal-600 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-600 lg:p-0">
                                SERVICES
                            </a>
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                            </div>
                            
                            <ul v-if="isHovered" class="absolute -left-10 text-sm rounded-md shadow-teal-950  z-10 w-48 bg-white shadow-lg">
                                <li><a class="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">All</a></li>
                                <li><a class="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Trainings</a></li>
                                <li><a class="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Cybersecurity</a></li>
                                <li><a class="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Software Development</a></li>
                                <li><a class="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Blockchain</a></li>
                                <li><a class="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Cloud Computing</a></li>
                                <li><a class="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="#">Nutrition</a></li>
                            </ul>
                </li>
               

                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-teal-600 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-600 lg:p-0 ">BLOG</a>
                </li>
                <li>
                    <a href="#"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:text-teal-600 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-600 lg:p-0 ">CONTACT</a>
                </li>

                
                
            </ul>
        </div>

    </div>
</nav>


    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    },
    data() {
    return {
      menuOpen: false,
      isOpen: false,
      dropOpen: false,
      isHovered: true
    };
  },
  methods: {
    startHover(){
        this.isHovered = true;
        this.dropOpen = !this.dropOpen
    },
    endHover(){
        this.isHovered = false;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
}
</script>

<style lang="scss" scoped>

</style>