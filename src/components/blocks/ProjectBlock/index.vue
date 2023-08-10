<template>
    <div class="project__block">
        <div class="project__block-text">
            <h5 class="project__block-name">
                {{ props.name }}
            </h5>
            <p class="project__block-description">
                {{ props.description }}
            </p>
            <a
                class="project__block-link"
                :href="props.link"
                title="github page"
                target="_blank"
                rel="noopener noreferrer"
            >
                <UISvgIcon class="project__block-link-icon" name="github-link" />
            </a>
        </div>
        <div class="project__block-image">
            <img
                class="project-image"
                :src="dynamicImages(`/public/images/project/${props.image}.png`)"
                alt="image"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectBlock',
};
</script>

<script setup>
import UISvgIcon from '@/components/ui/UISvgIcon/index.vue';
import dynamicImages from '@/composables/dynamic-images';

const props = defineProps({
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    link: { type: String, default: '' },
    image: { type: String, default: '' },
    imagePath: { type: String, default: 'project' },
});

</script>

<style src="./styles.scss" lang="scss" scoped />
