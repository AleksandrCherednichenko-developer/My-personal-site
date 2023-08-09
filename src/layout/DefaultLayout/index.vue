<template>
    <transition name="fade-enter-transition" mode="out-in" appear>
        <main class="main">
            <router-view v-slot="{ Component }">
                <component :is="Component" />
            </router-view>
        </main>
    </transition>
</template>

<script>
export default {
    name: 'DefaultLayout',
};
</script>

<script setup>
</script>

<style src="./styles.scss" lang="scss" scoped />
