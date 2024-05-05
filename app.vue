<template>
  <div>
    <div class="hero min-h-screen" style="background-image: url(/images/image1.jpeg);"> 
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <img src="/images/logo8.png" width="700" alt="Resin Magic Forge Logo"/>
        <h1 class="mb-5 text-7xl font-bold">Hello There</h1>
        <p class="mb-5 text-3xl">We specialize in high-quality resin printing services. Bringing your designs and files to life with precision and expertise.</p>
        <a class="btn btn-primary" href="#contact">Get Started</a>
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

  </div>
</template>
<script setup >
import Referrals from './components/Referrals.vue';
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