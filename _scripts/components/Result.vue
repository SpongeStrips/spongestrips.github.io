<template>
    <div class="result">
        <p class="text-muted">Preview:</p>
        <img v-if="output" :src="output" width="300" />
        <a class="btn btn-light" href="javascript:void(0)" @click="downloadImage">Download</a>
        <a v-if="output && isSharingSupported" class="btn btn-primary" href="javascript:void(0)" @click="shareImage">Share</a>
    </div>
</template>

<script>
import { createStrip } from "../util/Drawing";

export default {
    name: 'Result',
    props: ["image", "text"],
    data() {
        return { output: null, sharePayload: false }
    },
    computed: {
        isSharingSupported() {
            // we need web share API v2 (which has files)
            return 'share' in navigator && 'canShare' in navigator && navigator.canShare(sharePayload);
        },
    },
    mounted() {
        this.output = createStrip(this.image, this.text);
        this.sharePayload = { title: this.text, files: [this.output] };
    },
    methods: {
        downloadImage() {
            // adapted from https://stackoverflow.com/a/10473992
            const url = this.image.src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream'); // change filetype to prompt to download
            window.open(url);
        },
        shareImage() {
            navigator.share(this.sharePayload);
        }
    }
}
</script>