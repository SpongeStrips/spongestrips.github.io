import Vue from 'vue'
import Generator from './components/Generator'
import { setupAutoTextareas } from "./util/AutoTextarea";

Vue.component('generator', Generator);

window.v = new Vue({
    el: '#app'
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all textareas and set them to autosize
    setupAutoTextareas();
    // Initialize Bootstrap file input lib
    bsCustomFileInput.init();
});