<template>
	<section class="section resume__page">
		<div class="page-inner content-container">
			<UITitlePage title="navbar.resume" />

			<transition name="fade-slide-top" mode="out-in" appear>
				<div class="page-inner">
					<div class="resume__page-experience__block">
						<h5 class="title">
							{{ $t('experience') }}
						</h5>
						<template v-for="index in 3" :key="index">
							<InfoBlock
								:period="$t(`work${index}.period`)"
								:name="$t(`work${index}.name`)"
								:position="$t(`work${index}.position`)"
								:skills="$t(`work${index}.skills`)"
								:description="$t(`work${index}.description`)"
							/>
						</template>
					</div>
					<div class="resume__page-education__block">
						<h5 class="title">
							{{ $t('education') }}
						</h5>
						<template v-for="index in 2" :key="index">
							<InfoBlock
								:period="$t(`education${index}.period`)"
								:name="$t(`education${index}.name`)"
								:position="$t(`education${index}.position`)"
								:location="$t(`education${index}.location`)"
								:description="$t(`education${index}.description`)"
								no-info-block
							/>
						</template>
					</div>
					<div class="resume__page-skills__block">
						<h5 class="title">
							{{ $t('skills') }}
						</h5>
						<SkillsBlock />
					</div>
				</div>
			</transition>
		</div>
	</section>
</template>

<script>
export default {
	name: 'ResumePage',
}
</script>

<script setup>
import InfoBlock from '@/components/blocks/InfoBlock/index.vue'
import SkillsBlock from '@/components/blocks/SkillsBlock/index.vue'
import UITitlePage from '@/components/ui/UITitlePage/index.vue'
</script>

<style src="./styles.scss" lang="scss" scoped />
