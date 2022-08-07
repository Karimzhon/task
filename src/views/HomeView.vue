<template>
	<div class="container">
		<header-page></header-page>
		<breadcrumb :list="breadcrumb_list"></breadcrumb>
		<product></product>
	</div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage";
import Breadcrumb from "@/components/Breadcrumb";
import Product from "@/components/Product";

export default {
	name: 'HomeView',
	components: {
		HeaderPage,
		Breadcrumb,
		Product
	},
	data() {
		return {
			breadcrumb_list: [
				{
					title: 'Каталог',
					link: 'catalog',
					offer: '4 442 512'
				},
				{
					title: 'Строительные материалы',
					link: 'material',
					offer: '4 442 512 предложения'
				},
				{
					title: 'Сухие строительные смеси',
					link: 'material',
					offer: '4 442 512 предложения'
				},
				{
					title: 'Шпатлевки',
					link: 'material',
					offer: '4 442 512 предложения'
				},
				{
					title: 'Шпатлевка Knauf',
					link: '',
					offer: ''
				}
			]
		}
	}
}
</script>
