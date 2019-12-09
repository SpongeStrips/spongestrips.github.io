<template>
    <div class="generator">
        <div class="steps-row">
            <step :index="0" :current-index="currentIndex" title="Select your image" :can-advance="providedImage" @change:index="changeIndex">
                <p>Find a still from a SpongeBob episode that you would like to use here. Read through the <a target="_blank" href="https://www.reddit.com/r/spongestrisp/wiki">Wiki</a> to learn how to find source material.</p>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="image-upload" accept="image/png,image/x-png,image/gif,image/jpeg" ref="input" @change="imageChanged">
                    <label class="custom-file-label" for="image-upload">Choose image</label>
                </div>
                <div class="alert alert-danger alert-block image-error" v-if="imageErrored"><strong>Barnacles!</strong> An error occurred while loading that image.</div>
            </step>

            <step :index="1" :current-index="currentIndex" title="Caption your strip" :can-advance="caption.length > 0" @change:index="changeIndex">
                <p>Add a disturbing backstory to make your spongestrip extra spicy!</p>
                <textarea class="form-control" placeholder="Your text" rows="1" v-model="caption"></textarea>
            </step>
        </div>

        <div class="steps-row" v-if="currentIndex >= 2">
            <step :index="2" :current-index="currentIndex" title="Save your Spongestrip" :is-final-step="true" @restart="restart" @change:index="changeIndex">
                <result :image="providedImage" :text="caption"></result>
            </step>
        </div>
    </div>
</template>

<script>
import Step from "./Step.vue";
import Result from "./Result.vue";

export default {
    name: 'Generator',
    components: { Step, Result },
    data: function () {
        return {
            providedImage: null,
            imageErrored: false,
            currentIndex: 0,
            caption: ""
        };
    },
    methods: {
        changeIndex(index) {
            this.currentIndex = index;
        },
        restart() {
            this.currentIndex = 0;
            this.caption = "";
            this.$refs.input.value = "";
        },
        imageChanged() {
            this.imageErrored = false;
            const file = this.$refs.input.files[0];
            if (!file) return this.providedImage = null;

            var img = new Image();
            img.onload = () => this.providedImage = img;
            img.onerror = () => this.imageErrored = true;
            img.src = URL.createObjectURL(file);

            this.currentIndex = 1;
        }
    }
}
</script>