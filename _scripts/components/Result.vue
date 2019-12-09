<template>
    <div class="result">
        <p class="text-muted">Preview:</p>
        <img :src="output" width="300" />
        <a class="btn btn-light" href="javascript:void(0)">Download</a>
        <a v-if="isSharingSupported" class="btn btn-primary" href="javascript:void(0)">Share</a>
    </div>
</template>

<script>
import { createStrip } from "../util/Drawing";

export default {
    name: 'Result',
    props: ["image", "text"],
    computed: {
        isSharingSupported() {
            return false;
        },
        output() {
            return createStrip(this.image, this.text);
        }
    }
}
</script>