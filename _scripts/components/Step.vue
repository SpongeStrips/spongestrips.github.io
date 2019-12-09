<template>
    <div class="step" :disabled="!isCurrent" @click="clicked">
        <h2><span class="num">{{ index + 1 }}</span> {{ title }}</h2>
        <slot></slot>
        <div :style="{ visibility: isCurrent ? 'visible' : 'hidden' }" class="step-nav">
            <a v-if="index > 0" href='javascript:void(0)' @click="changeIndex(-1, $event)">&laquo; Previous</a>
            <span v-if="(canAdvance || isFinalStep) && index > 0"> &middot; </span>
            <a v-if="isFinalStep" href='javascript:void(0)' @click="$emit('restart')">Start over</a>
            <a v-else :style="{ visibility: isCurrent && canAdvance ? 'visible' : 'hidden' }" href='javascript:void(0)' @click="changeIndex(1, $event)">Next &raquo;</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Step',
    props: ["title", "index", "currentIndex", "canAdvance", "isFinalStep"],
    computed: {
        isCurrent: function() {
            return this.index == this.currentIndex
        },
    },
    methods: {
        changeIndex(delta, e) {
            e.preventDefault();
            e.stopPropagation();
            this.$emit("change:index", this.index + delta);
        },
        clicked() {
            // only allow if this was a previous step
            if (this.index >= this.currentIndex) return;
            this.$emit("change:index", this.index);
        }
    }
}
</script>