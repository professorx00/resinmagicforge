<template>
  <div>
    <div class="hero min-h-screen" style="background-image: url(/images/image1.jpeg);"> 
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <img src="/images/mainLogo.png" width="700" alt="Resin Magic Forge Logo"/>
        <h1 class="mb-5 text-7xl font-bold">Hello There</h1>
        <p class="mb-5 text-3xl">We specialize in high-quality resin printing services. Bringing your designs and files to life with precision and expertise.</p>
        <a class="btn text-wizardLight hover:text-wizardDark bg-wizardDark px-6 text-2xl" href="#contact">Get Started</a>
      </div>
    </div>
    </div>
    <div class="w-full flex flex-col justify-center items-center bg-wizardBlue p-10 h-screen">
      <h1 class="mb-5 text-5xl font-bold">Look What We Do</h1>
      <div class="w-11/12">
        <Carousel :wrap-around="true">
          <Slide v-for="slide in images" :key="slide.id">
            <div class="flex flex-col justify-center items-center">
              <img :src="slide.url" class="lg:h-1/2 lg:w-1/2 sm:w-5/6 sm:h-5/6" />
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
    <div class="flex md:flex-row flex-col-reverse justify-center items-center p-10 bg-wizardDark text-neutral-content lg:mt-3 md:mt-60 sm:mt-64  mt-10 ">
            <div class="">
              <img src="/images/mainLogo.png" class="w-full h-full max-h-60 max-w-60"/>
              <p>Resin Magic Forge<br>Providing reliable printing since 2024</p>
            </div> 
            <div class="">
              <h6 class="footer-title">Social</h6> 
              <div class="grid grid-flow-col gap-4 text-3xl">
                <a href="https://www.instagram.com/resinmagicforge/"><span class="icon-[mage--instagram-square]"></span></a>
                <a href="mailto:resinmagicforge@gmail.com"><span class="icon-[mdi--email-fast]"></span></a>
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