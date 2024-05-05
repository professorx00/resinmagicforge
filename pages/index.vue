<template>
  <div>
    <div class="hero min-h-screen" style="background-image: url(/images/image1.jpeg);"> 
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <img src="/images/logo8.png" width="700" alt="Resin Magic Forge Logo"/>
        <h1 class="mb-5 text-7xl font-bold">Hello There</h1>
        <p class="mb-5 text-3xl">We specialize in high-quality resin printing services. Bringing your designs and files to life with precision and expertise.</p>
        <a class="btn text-wizardLight hover:text-wizardDark bg-wizardDark px-6 text-2xl" href="#contact">Get Started</a>
      </div>
    </div>
    </div>
    <div class="w-full flex flex-col justify-center items-center bg-wizardBlue p-10 h-screen">
      <h1 class="mb-5 text-5xl font-bold">Look What We Do</h1>
      <div class="w-6/12">
        <Carousel :wrap-around="true">
          <Slide v-for="slide in images" :key="slide.id">
            <div class="flex flex-col justify-center items-center">
              <img :src="slide.url" style="height: 550px;" />
            </div>
          </Slide>

          <template #addons>
             <Navigation>
                <template #next>
                    <span class="icon-[fa6-solid--caret-right]"></span>
                </template>
                <template #prev>
                    <span class="icon-[fa6-solid--caret-left]"></span>
                </template>
            </Navigation>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
    <Referrals />
    <div id="contact">
      <Contact />
    </div>
    <div class="flex md:flex-row flex-col-reverse justify-between items-center p-10 bg-wizardDark text-neutral-content lg:mt-3 md:mt-60 sm:mt-64  mt-10 ">
            <div class="">
              <img src="/images/logo8.png" class="w-full h-full max-h-60 max-w-60"/>
              <p>Resin Magic Forge<br>Providing reliable printing since 2024</p>
            </div> 
            <div class="">
              <h6 class="footer-title">Social</h6> 
              <div class="grid grid-flow-col gap-4">
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
              </div>
            </div> 
  </div>
  </div>
</template>
<script setup >
const images = ref([
  {
    url: "/images/gallery/gallery1.png",
    alt: "gallery1",
    id: "1"
  },
  {
    url: "/images/gallery/gallery2.png",
    alt: "gallery2",
    id: "2"
  },
  {
    url: "/images/gallery/gallery3.png",
    alt: "gallery3",
    id: "3"
  },
  {
    url: "/images/gallery/gallery4.png",
    alt: "gallery4",
    id: "4"
  },
  {
    url: "/images/gallery/gallery5.png",
    alt: "gallery5",
    id: "5"
  },
  {
    url: "/images/gallery/gallery6.png",
    alt: "gallery6",
    id: "6"
  },
])

</script>
<style>

.carousel__slide{
  min-height: 10px;
  max-height: 550px;
  width: 50%;
  color: black;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}

.carousel__pagination-button::after{
  border-radius: 50%;
}
</style>