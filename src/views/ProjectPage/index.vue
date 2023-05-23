<template>
    <section class="section project__page">
        <div class="page-inner content-container">
            <UITitlePage title="navbar.project" />

            <transition name="fade-slide-top" mode="out-in" appear>
                <div class="page-inner">
                    <ProjectBlock
                        :name="$t('project1.name')"
                        :description="$t('project1.description')"
                        :link="$t('project1.link')"
                        :image="$t('project1.image')"
                    />
                    <ProjectBlock
                        :name="$t('project2.name')"
                        :description="$t('project2.description')"
                        :link="$t('project2.link')"
                        :image="$t('project2.image')"
                    />
                    <ProjectBlock
                        :name="$t('project3.name')"
                        :description="$t('project3.description')"
                        :link="$t('project3.link')"
                        :image="$t('project3.image')"
                    />
                    <ProjectBlock
                        :name="$t('project4.name')"
                        :description="$t('project4.description')"
                        :link="$t('project4.link')"
                        :image="$t('project4.image')"
                    />
                    <ProjectBlock
                        :name="$t('project5.name')"
                        :description="$t('project5.description')"
                        :link="$t('project5.link')"
                        :image="$t('project5.image')"
                    />
                </div>
            </transition>
        </div>
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
