<template>
    <div class="info__block" :class="{'hide-info':props.noInfoBlock}">
        <div class="info__block-title">
            <p class="info__block-title-period">
                {{ props.period }}
            </p>
            <p class="info__block-title-name">
                {{ props.name }}
            </p>
            <p class="info__block-title-position">
                {{ props.position }}
            </p>
            <p class="info__block-title-location">
                {{ props.location }}
            </p>
            <div v-if="props.skills" class="info__block-title-skills">
                <UISvgIcon
                    v-for="(item, i) in skills"
                    :key="i"
                    :name="item"
                    class="skills-item"
                />
            </div>
        </div>
        <div v-if="!props.noInfoBlock" class="info__block-text">
            <p class="info__block-text-description">
                {{ props.description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InfoBlock',
};
</script>

<script setup>
import UISvgIcon from '@/components/ui/UISvgIcon/index.vue';

const props = defineProps({
    period: { type: String, default: '' },
    name: { type: String, default: '' },
    position: { type: String, default: '' },
    skills: { type: String, default: '' },
    description: { type: String, default: '' },
    location: { type: String, default: '' },
    noInfoBlock: { type: Boolean },
});

const skills = props.skills.split(',');
</script>

<style src="./styles.scss" lang="scss" scoped />
