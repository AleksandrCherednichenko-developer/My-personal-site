<template>
	<div class="skills__block">
		<template v-for="(item, i) in info" :key="i">
			<p class="skills__block-text">
				{{ item?.name }}
			</p>
			<p class="skills__block-line">
				<span
					class="skills__block-line-background"
					:style="{ width: item.percent }"
				>
					<span class="skills__block-line-label">{{ item.percent }}</span>
				</span>
			</p>
		</template>
	</div>
</template>

<script>
export default {
	name: 'SkillsBlock',
}
</script>

<script setup>
const info = [
	{ name: 'HTML', percent: '100%' },
	{ name: 'CSS', percent: '100%' },
	{ name: 'JavaScript', percent: '90%' },
	{ name: 'Vue 3', percent: '90%' },
	{ name: 'Nuxt 3', percent: '90%' },
	{ name: 'Git', percent: '90%' },
	{ name: 'Vitest', percent: '70%' },
	{ name: 'Vite / Gulp / Webpack', percent: '70%' },
]
</script>

<style src="./styles.scss" lang="scss" scoped />
