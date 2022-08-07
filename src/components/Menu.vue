<template>
	<ul class="menu_list">
		<li v-for="(menu, key) in menus" :key="key" class="menu_item">
			<router-link class="menu_item_link" :to="menu.link">{{ menu.title }}</router-link>
		</li>
		<li class="menu_item">
			<a href="#" class="menu_item_link">
				Другие сервисы
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#708598" stroke-linecap="round"
						  stroke-linejoin="round"/>
				</svg>
			</a>
			<ul class="sub_menu_list" v-if="show_submenu">
				<li class="sub_menu_item" v-for="(sub_menu, index) in sub_menus" :key="index">
					<router-link :to="sub_menu.link" class="sub_menu_item__link">
						{{ sub_menu.title }}
					</router-link>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script>
export default {
	name: "Menu-page",
	data() {
		return {
			menus: [
				{
					id: 1,
					title: 'Тендеры',
					link: 'test'
				},
				{
					id: 2,
					title: 'База подрядчиков',
					link: 'test1'
				},
			],
			sub_menus: [
				{
					id: 1,
					title: 'Тендеры 2',
					link: 'test'
				},
				{
					id: 2,
					title: 'База подрядчиков 2',
					link: 'test1'
				},
			],
			show_submenu: false,
		}
	}
}
</script>

<style scoped lang="scss">
.menu_list {
	display: flex;
	align-items: center;
	list-style: none;
	margin: 0;
}
.menu_item {
	&_link {
		font-size: 12px;
		line-height: 20px;
		color: #708598;
		margin: 0 12px;
		text-decoration: none;
	}
}
</style>