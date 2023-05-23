<template>
    <section class="about__page">
        <div class="about__page-inner content-container">
            <InfoCard />
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutPage',
};
</script>

<script setup>
import InfoCard from '@/components/InfoCard/index.vue';
</script>

<style src="./styles.scss" lang="scss" scoped />
