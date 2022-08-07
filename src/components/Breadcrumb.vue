<template>
	<div class="breadcrumb">
		<router-link class="breadcrumb_item"
					 v-for="(item, key) in list"
					 :class="{'disable': key === list.length - 1}"
					 :key="key"
					 :to="item.link ? item.link : '#'">
			<div class="breadcrumb_item_content">
				<p class="breadcrumb_item_title">
					{{ item.title }}
				</p>
				<p class="breadcrumb_item_offer">
					{{ item.offer }}
				</p>
			</div>
			<svg v-if="key < list.length - 1" class="breadcrumb_item_icon" width="18" height="18" viewBox="0 0 18 18"
				 fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="#708598" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "Breadcrumb",
	props: {
		list: Array
	}
}
</script>

<style scoped lang="scss">
.breadcrumb {
	display: flex;
	align-items: flex-start;
	gap: 16px;
	margin-top: 16px;

	&_item {
		display: flex;
		align-items: center;
		text-decoration: none;
		font-size: 12px;
		line-height: 20px;

		&_content {
			margin-right: 16px;
		}

		&_title {
			color: #050f19;
			margin-bottom: 0;
			transition: 0.3s;
		}

		&_offer {
			color: #708598;
			margin-bottom: 0;
			transition: 0.3s;
		}

		svg {
			path {
				transition: 0.3s;
			}
		}

		&:hover {
			svg {
				path {
					stroke: #a85016;
				}
			}
		}

		&:hover &_offer,
		&:hover &_title {
			color: #a85016;
		}

		&.disable {
			cursor: default;
			pointer-events: none;

			&:hover {
				.breadcrumb_item_title {
					color: #050f19;
				}
				.breadcrumb_item_offer {
					color: #708598;
				}
			}
		}
	}
}
</style>