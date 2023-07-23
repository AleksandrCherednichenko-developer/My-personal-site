<template>
    <main class="main">
        <router-view v-slot="{ Component }">
            <component :is="Component" />
        </router-view>
    </main>
</template>

<script>
export default {
    name: 'DefaultLayout',
};
</script>

<script setup>
</script>

<style src="./styles.scss" lang="scss" scoped />
