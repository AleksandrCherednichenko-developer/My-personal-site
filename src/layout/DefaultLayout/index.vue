<template>
    <main class="main">
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in" appear>
                <component :is="Component" />
            </transition>
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
