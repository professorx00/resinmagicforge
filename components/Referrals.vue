<template>
  <div class="bg-wizardDark p-10 h-1/3">
      <div class="w-full lg:flex flex-col justify-center items-center h-1/2 text-white hidden ">
        <h1 class="mb-5 text-5xl font-bold">See What Others Are Saying</h1>
        <div class="w-6/12 h-1/3 m-1">
          <Carousel :items-to-show="2" :wrap-around="true">
            <Slide v-for="slide in referrals" :key="slide.id">
              <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2 class="card-title">{{slide.title}}</h2>
                  <p>{{slide.author}}</p>
                </div>
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
      <div class="h-1/3 text-black lg:hidden flex flex-col justify-center">
         <Carousel :wrap-around="true">
            <Slide v-for="slide in referrals" :key="slide.id">
              <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2 class="card-title">{{slide.title}}</h2>
                  <p>{{slide.author}}</p>
                </div>
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
</template>

<script setup>
const referrals = ref([
  {
    title: "They do AMAZING work! Loved everything they do",
    author: "Dave Ward",
    id: "1"
  },
   {
    title: "They do AMAZING work! Loved everything they do",
    author: "Dave Ward",
    id: "2"
  },
   {
    title: "They do AMAZING work! Loved everything they do",
    author: "Dave Ward",
    id: "3"
  },
   {
    title: "They do AMAZING work! Loved everything they do",
    author: "Dave Ward",
    id: "4"
  }
])
</script>

<style>
:root{
  --vc-pgn-width: 25px;
  --vc-pgn-height: 25px;
  --vc-pgn-margin: 4px;
  --vc-pgn-border-radius: 10;
  --vc-pgn-background-color: #ffbf7a;
  --vc-pgn-active-color: #3d250b;

  --vc-nav-width: 60px;
  --vc-nav-height: 60px;
  --vc-nav-border-radius: 0;
  --vc-nav-color: #ffbf7a;
  --vc-nav-color-hover: #3d250b;
  --vc-nav-background: transparent;
}

.carousel__slide{
  min-height: 10px;
  max-height: 550px;
  width: 100%;
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


</style>