import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugins/axios';

export const useMovieStore = defineStore('movie', () => {
  const state = reactive({
    currentMovie: {},
  });

  const currentMovie = computed(() => state.currentMovie);

  const getMovieDetail = async (movieId, type) => {
    const response = await api.get(type + `/${movieId}`);
    state.currentMovie = response.data;
  };

  return { currentMovie, getMovieDetail };
});