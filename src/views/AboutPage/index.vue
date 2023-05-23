<template>
    <section class="section about__page">
        <div class="page-inner content-container">
            <BaseInfoBlock />
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutPage',
};
</script>

<script setup>
import BaseInfoBlock from '@/components/blocks/BaseInfoBlock/index.vue';
</script>

<style src="./styles.scss" lang="scss" scoped />
