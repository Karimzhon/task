<template>
	<div class="header">
		<div class="header_top">
			<div class="header_address">
				<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M13 6.6909C13 11.2727 7 15.2 7 15.2C7 15.2 1 11.2727 1 6.6909C1 5.12853 1.63214 3.63015 2.75736 2.52539C3.88258 1.42064 5.4087 0.799988 7 0.799988C8.5913 0.799988 10.1174 1.42064 11.2426 2.52539C12.3679 3.63015 13 5.12853 13 6.6909Z"
						stroke="#708598" stroke-linecap="round" stroke-linejoin="round"/>
					<path
						d="M6.99988 8.65481C8.10445 8.65481 8.99988 7.77566 8.99988 6.69118C8.99988 5.60669 8.10445 4.72754 6.99988 4.72754C5.89531 4.72754 4.99988 5.60669 4.99988 6.69118C4.99988 7.77566 5.89531 8.65481 6.99988 8.65481Z"
						stroke="#708598" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				Волгоградская область
			</div>
			<menu-page></menu-page>
		</div>
		<div class="header_content">
			<div class="header_content_left">
				<img src="/images/logo.svg" alt="Logo" class="header_logo">
				<div class="header_catalog">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M2.5 10H17.5" stroke="#222222" stroke-width="2" stroke-linecap="round"
							  stroke-linejoin="round"/>
						<path d="M2.5 5H17.5" stroke="#222222" stroke-width="2" stroke-linecap="round"
							  stroke-linejoin="round"/>
						<path d="M2.5 15H17.5" stroke="#222222" stroke-width="2" stroke-linecap="round"
							  stroke-linejoin="round"/>
					</svg>
					Каталог
				</div>
				<div class="header_search">
					<input type="text"
						   class="header_search_input"
						   v-model="search"
						   v-on:input="getItem()"
						   @mouseup="test(true)"
						   placeholder="Cтроительные смеси">
					<img src="/images/search.svg" alt="Search" class="header_search_icon">
					<ul class="header_search_list" v-if="search_open && items.length > 0">
						<li class="header_search_item"
							@click="changeSearch(item)"
							v-for="(item, key) in items"
							:key="key">
							{{ item.title }}
						</li>
					</ul>
					<div :class="{full_screen: search_open}" @click="search_open = false"></div>
				</div>
			</div>
			<div class="header_right">
				<div class="header_right_list">
					<div class="header_right_list-image" :class="{ active: new_list }">
						<img src="/images/list.svg" alt="list">
					</div>
					Список
				</div>
				<div class="header_profile">
					{{ name }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Menu from './Menu';
import axios from 'axios'

export default {
	name: "HeaderPage",
	components: {
		'menu-page': Menu
	},
	data() {
		return {
			search: '',
			new_list: true,
			name: 'A',
			items: [],
			search_open: false,
		}
	},
	methods: {
		getItem() {
			axios.get('http://localhost:8000/items')
				.then((response) => {
					let arr = [];
					response.data.filter(item => {
						if (this.search.length > 0 && item.title.toLowerCase().includes(this.search)) {
							arr.push(item)
						}
					})
					this.items = arr;
				})
		},
		test(bool) {
			this.search_open = bool
		},
		changeSearch(val) {
			this.search = val.title
			this.search_open = false
			this.getItem();
		}
	}
}
</script>

<style scoped lang="scss">
.header {
	&_top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 6px 0;
		position: relative;

		&:after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 50%;
			width: 100vw;
			height: 1px;
			background-color: #eceff1;
			transform: translateX(-50%);
		}
	}

	&_address {
		font-size: 12px;
		line-height: 20px;
		color: #708598;
		display: flex;
		align-items: center;

		svg {
			margin-right: 8px;
		}
	}

	&_content {
		position: relative;
		padding: 18px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;

		&:after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 50%;
			width: 100vw;
			height: 1px;
			background-color: #eceff1;
			transform: translateX(-50%);
		}

		&_left {
			display: flex;
			align-items: center;
			gap: 24px;
		}
	}

	&_catalog {
		font-size: 14px;
		line-height: 24px;
		color: #050f19;
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 16px;
		background-color: #fed83d;
		border-radius: 4px;
		cursor: pointer;
		font-weight: 600;
	}

	&_search {
		position: relative;
		width: 248px;

		&_input {
			width: 100%;
			font-size: 14px;
			line-height: 24px;
			color: #708598;
			padding: 8px 45px 8px 16px;
			border: 1px solid #eceff1;
			border-radius: 4px;
			outline: 0;
		}

		&_icon {
			cursor: pointer;
			position: absolute;
			top: 50%;
			right: 14px;
			transform: translateY(-50%);
		}

		&_list {
			position: absolute;
			top: 50px;
			z-index: 25;
			background-color: #fff;
			padding: 20px;
			list-style: none;
			width: 100%;
			box-shadow: -1px -2px 15px 3px #d8d8d8;
			border-radius: 4px;
			margin: 0;
		}

		&_item {
			margin-bottom: 10px;
			cursor: pointer;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	&_right {
		display: flex;
		align-items: center;
		gap: 24px;

		&_list {
			display: flex;
			align-items: center;
			font-size: 14px;
			line-height: 24px;
			font-weight: 600;
			color: #050f19;
			padding: 8px 16px;
			border: 1px solid #eceff1;
			border-radius: 4px;
			gap: 8px;

			&-image {
				&.active {
					position: relative;

					&::before {
						content: '';
						width: 10px;
						height: 10px;
						background-image: url("/public/images/red_dot.svg");
						right: -3px;
						top: -3px;
						position: absolute;
					}
				}
			}
		}
	}

	&_profile {
		width: 40px;
		height: 40px;
		font-size: 14px;
		font-weight: 600;
		line-height: 24px;
		color: #ffffff;
		background-color: #9b51e0;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}
}
.full_screen {
	background-color: #050f194d;
	width: 100vw;
	height: calc(100vh - 120px);
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 23;
}
</style>