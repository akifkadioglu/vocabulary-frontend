<template>
  <div class="">
    <div class="space-x-2 flex justify-center items-center py-2">
      <h1 class="text-6xl font-bold animate__animated animate__fadeInDown">{{ $t('header') }}</h1>
    </div>
    <hr>
    <div class="container mx-auto px-2">
      <div class="my-5 animate__animated animate__fadeInDown">
        {{ $t('description') }}
      </div>

      <div class="animate__animated animate__fadeInUp">
        <swiper :scrollbar="{ draggable: false }" :modules="modules" :slides-per-view="1">
          <swiper-slide class="py-5" v-for="(image, index) in images" :key="index">
            <img class="mx-auto w-36" :src="image" alt="Image" />
          </swiper-slide>
        </swiper>
        <div class="mt-5 animate__animated animate__rubberBand">
          <a href="https://play.google.com/store/apps/details?id=dev.vocabulary"
            class="w-48 mx-auto space-x-2 flex justify-center border border-white rounded-full hover:border-zinc-500 hover:scale-105 active:scale-95 px-3 py-1">
            <mdicon name="google" />
            <span>
              Google Playstore
            </span>
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { onMounted, ref } from 'vue';
import { i18n } from './i18n/i18n';
const modules = [Navigation, Pagination, Scrollbar, A11y]
const images = ref([])


function loadImages() {
  const requireContext = require.context('@/assets/views', false, /\.(png|jpe?g|gif)$/);
  images.value = requireContext.keys().map(requireContext);
}


onMounted(() => {
  loadImages()
  document.title = i18n.global.t('header');
})

</script>
