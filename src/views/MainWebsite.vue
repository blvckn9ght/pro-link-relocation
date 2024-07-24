<template>
    <!-- Top View -->
    <div class=" mt-36">
        <section class=" bg-teal-400 w-full">
    <div class="container mx-auto py-16 px-6 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
                <span class="text-blue-700 font-medium">KenyanNurse</span>
                <h2 class="text-3xl mt-4 font-bold text-red-600 sm:text-3xl">About Us</h2>
                <p class="mt-4 text-black text-lg">Welcome to Innovatech Solutions, where we transform your ideas into reality. As a leading provider of cutting-edge technological solutions,
                     we specialize in delivering innovative products and services that drive success for businesses of all sizes. Our team of dedicated professionals is committed to excellence,
                      leveraging the latest advancements in technology
                     to create customized solutions tailored to your unique needs. At Innovatech Solutions, 
                    we believe in fostering strong partnerships and delivering exceptional value 
                    to help you stay ahead in a rapidly evolving digital landscape.</p>

                    <!-- Search Bar -->
                <div class="mt-8">

                    <div class="flex relative rounded-md w-full px-4 max-w-xl">
                        <input type="text" name="q" id="query" placeholder="Button, Footer, etc"
                            class="w-full p-3 rounded-md border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none " />
                        <button
                            class="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md">
                            <span>search</span>
                            <span class="hidden md:block">
                                <svg class="text-gray-200 h-5 w-5 p-0 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                    viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                                    width="512px" height="512px">
                                    <path
                                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    
                </div>
            </div>
            <!-- Image -->
            <!-- <div class="mt-12 md:mt-0">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" class="object-cover rounded-lg shadow-md">
            </div> -->

            <div class="mt-12 md:mt-0 relative w-full h-96">
            <img 
            :src="currentImage" 
            alt="Slideshow Image" 
            class="object-cover rounded-lg shadow-md w-full h-full"
            >
  </div>



        </div>
    </div>
</section>
  

    </div>

    <!-- Our Services -->
     <div class=" bg-white w-full h-full">
        <h2 class="text-3xl font-bold text-teal-800  mt-6 text-center">Our Services</h2>
        <h2 class=" text-gray-800  mt-6 text-center">Browse through our catalogue of services and find what you're looking for.</h2>

        
    <section class="text-gray-700 body-font mt-3">
    <div class="container py-4 mx-auto">
        <div class="flex flex-wrap text-center justify-center">
            <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div class="flex justify-center">
                        <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" class="w-32 mb-3">
                    </div>
                    <h2 class="title-font font-medium text-teal-800">Latest Milling Machinery</h2>
                </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div class="flex justify-center">
                        <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" class="w-32 mb-3">
                    </div>
                    <h2 class="title-font font-medium text-teal-800">Reasonable Rates</h2>
                </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div class="flex justify-center">
                        <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" class="w-32 mb-3">
                    </div>
                    <h2 class="title-font font-medium text-teal-800">Time Efficiency</h2>
                </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div class="flex justify-center">
                        <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" class="w-32 mb-3">
                    </div>
                    <h2 class="title-font font-medium text-teal-800">Latest Milling Machinery</h2>
                </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div class="flex justify-center">
                        <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" class="w-32 mb-3">
                    </div>
                    <h2 class="title-font font-medium text-teal-800">Expertise in Industry</h2>
                </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div class="flex justify-center">
                        <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" class="w-32 mb-3">
                    </div>
                    <h2 class="title-font font-medium text-teal-800">Reasonable Rates</h2>
                </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div class="flex justify-center">
                        <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" class="w-32 mb-3">
                    </div>
                    <h2 class="title-font font-medium text-teal-800">Latest Milling Machinery</h2>
                </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
                <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                    <div class="flex justify-center">
                        <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" class="w-32 mb-3">
                    </div>
                    <h2 class="title-font font-medium text-teal-800">Reasonable Rates</h2>
                </div>
            </div>

        </div>
    </div>
</section>
     </div>

     <!-- How it works -->
<div class="min-h-screen bg-white text-gray-900 flex justify-center">
    <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <h2 class="font-heading text-teal-800  text-3xl font-bold lg:text-4xl"> How It Works</h2>
            <span class=" text-slate-500">Random Text Here</span>


<div class="flex mt-7">
    <div class="mr-4 flex flex-col items-center">
        <div>
            <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="h-6 w-6 text-blue-800">
                    <path d="M12 5l0 14"></path>
                    <path d="M18 13l-6 6"></path>
                    <path d="M6 13l6 6"></path>
                </svg></div>
        </div>
        <div class="h-full w-px bg-slate-500"></div>
    </div>
    <div class="pt-1 pb-8">
        <button class="mb-2 text-xl font-bold text-red-600">Register </button>
        <p class="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent
            placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.</p>
    </div>
</div>


<div class="flex">
    <div class="mr-4 flex flex-col items-center">
        <div>
            <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="h-6 w-6 text-blue-800">
                    <path d="M12 5l0 14"></path>
                    <path d="M18 13l-6 6"></path>
                    <path d="M6 13l6 6"></path>
                </svg></div>
        </div>
        <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
    </div>
    <div class="pt-1 pb-8">
        <button class="mb-2 text-xl font-bold text-teal-800 ">Step 2</button>
        <p class="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.</p>
    </div>
</div>


<div class="flex">
    <div class="mr-4 flex flex-col items-center">
        <div>
            <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="h-6 w-6 text-blue-800">
                    <path d="M12 5l0 14"></path>
                    <path d="M18 13l-6 6"></path>
                    <path d="M6 13l6 6"></path>
                </svg></div>
        </div>
    </div>
    <div class="pt-1 pb-8">
        <button class="mb-2 text-xl font-bold text-green-500">Step 3</button>
        <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.</p>
    </div>
</div>
<a href="https://themesberg.com/product/tailwind-css/landing-page"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Download</a>
</div>
        <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                style="background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');">
            </div>
        </div>
    </div>
</div>

<div class="sm:flex  justify-center max-w-screen-xl">
    <div class="sm:w-1/2 p-5 py-6">
        <div class="text">
            <h2 class="my-4 font-bold text-3xl text-teal-800 text-center sm:text-4xl ">About
            </h2>
            <p class="text-gray-700">
                KenyanNurse is a Nursing and Healthcare Consultants firm engaged in the recruitment
                 and training of Nurses and other Healthcare Professionals 
                for both local and international opportunities.
            </p>
            <br>
            <p class="text-gray-700">
                KenyanNurse is a Nursing and Healthcare Consultants firm engaged in the recruitment
                 and training of Nurses and other Healthcare Professionals 
                for both local and international opportunities.
            </p>
            <br>
            <p class="text-gray-700">
                KenyanNurse is a Nursing and Healthcare Consultants firm engaged in the recruitment
                 and training of Nurses and other Healthcare Professionals 
                for both local and international opportunities.
            </p>
            
            
        </div>
        
    </div>
    
    
</div>

oigajeijo









     
</template>

<script>
export default {
    setup () {
        

        return {}
    },
    data() {
    return {
      images: [
        "https://images.unsplash.com/photo-1531973576160-7125cd663d86",
        "https://media.istockphoto.com/id/1265641298/photo/fried-papad.jpg?s=612x612&w=0&k=20&c=e_iEy4CTvU6Thn02zGgKt_TiSYAheCKmgfTF5j52ovU=",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080",
        "https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png"
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
  mounted() {
    this.interval = setInterval(this.nextImage, 3000); // Change image every 3 seconds
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
}
</script>

<style lang="scss" scoped>

</style>