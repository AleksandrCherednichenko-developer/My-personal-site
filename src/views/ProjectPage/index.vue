<template>
    <section class="section project__page">
        <transition
            name="fade-slide-left"
            mode="out-in"
            appear
        >
            <div class="page-inner content-container">
                <UITitlePage title="navbar.project" />

                <div class="page-inner">
                    <template v-for="index in 5" :key="index">
                        <ProjectBlock
                            :name="$t(`project${index}.name`)"
                            :description="$t(`project${index}.description`)"
                            :link="$t(`project${index}.link`)"
                            :image="$t(`project${index}.image`)"
                        />
                    </template>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
export default {
    name: 'ProjectPage',
};
</script>

<script setup>
import UITitlePage from '@/components/ui/UITitlePage/index.vue';
import ProjectBlock from '@/components/blocks/ProjectBlock/index.vue';
</script>

<style src="./styles.scss" lang="scss" scoped />
