<template>
	<div class="product">
		<p class="product_title">
			{{ item.title }}
		</p>
		<div class="product_content">
			<nav class="product_nav">
				<div @click="arrowLeft" class="product_nav_svg product_nav_left" :class="{active: count_right > 0}">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 18L9 12L15 6" stroke="#708598" stroke-width="2" stroke-linecap="round"
							  stroke-linejoin="round"/>
					</svg>
				</div>
				<div @click="arrowRight" class="product_nav_svg product_nav_right" :class="{active: arrow_right}">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9 18L15 12L9 6" stroke="#708598" stroke-width="2" stroke-linecap="round"
							  stroke-linejoin="round"/>
					</svg>
				</div>
				<div class="nav nav-tabs" id="nav-tab" role="tablist">
					<button class="nav-link active" id="product-main-tab" data-bs-toggle="tab"
							data-bs-target="#product-main" type="button" role="tab" aria-controls="product-main"
							aria-selected="true">
						Основной
					</button>
					<button class="nav-link" id="product-buy-tab" data-bs-toggle="tab"
							data-bs-target="#product-buy" type="button" role="tab" aria-controls="product-buy"
							aria-selected="true">
						Где купить
					</button>
					<button class="nav-link" id="product-buy-tab" data-bs-toggle="tab"
							data-bs-target="#product-buy" type="button" role="tab" aria-controls="product-buy"
							aria-selected="true">
						Где купить
					</button>
					<button class="nav-link" id="product-buy-tab" data-bs-toggle="tab"
							data-bs-target="#product-buy" type="button" role="tab" aria-controls="product-buy"
							aria-selected="true">
						Где купить
					</button>
					<button class="nav-link" id="product-buy-tab" data-bs-toggle="tab"
							data-bs-target="#product-buy" type="button" role="tab" aria-controls="product-buy"
							aria-selected="true">
						Где купить
					</button>
					<button class="nav-link" id="product-buy-tab" data-bs-toggle="tab"
							data-bs-target="#product-buy" type="button" role="tab" aria-controls="product-buy"
							aria-selected="true">
						Где купить
					</button>
					<button class="nav-link" id="product-buy-tab" data-bs-toggle="tab"
							data-bs-target="#product-buy" type="button" role="tab" aria-controls="product-buy"
							aria-selected="true">
						Где купить
					</button>
					<button class="nav-link" id="product-buy-tab" data-bs-toggle="tab"
							data-bs-target="#product-buy" type="button" role="tab" aria-controls="product-buy"
							aria-selected="true">
						Где купить
					</button>
					<button class="nav-link" id="product-buy-tab" data-bs-toggle="tab"
							data-bs-target="#product-buy" type="button" role="tab" aria-controls="product-buy"
							aria-selected="true">
						Где купить
					</button>
					<button class="nav-link" id="product-buy-tab" data-bs-toggle="tab"
							data-bs-target="#product-buy" type="button" role="tab" aria-controls="product-buy"
							aria-selected="true">
						Где купить
					</button>
					<button class="nav-link" id="product-buy-tab" data-bs-toggle="tab"
							data-bs-target="#product-buy" type="button" role="tab" aria-controls="product-buy"
							aria-selected="true">
						sadГде купить
					</button>
				</div>
			</nav>
			<div class="tab-content" id="nav-tabContent">
				<div class="tab-pane fade show active" id="product-main" role="tabpanel"
					 aria-labelledby="product-main-tab">
					Основной
				</div>
				<div class="tab-pane fade" id="product-buy" role="tabpanel" aria-labelledby="product-buy-tab">
					Где купить
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'

export default {
	name: "Product",
	data() {
		return {
			item: {
				title: 'Штукатурка цементная цокольная Knauf Sockelpultz 25 кг',
				foundation: 'Гипсовая супер штукатурка Knauf S...',
				weight: '25 - 50кг',
				order: '602 заказа',
				views: '2 274 просмотров',
				in_stoke: 'В наличии в Москве на 4 марта 2020',
				sentence: '140 предложений ',
				photos: [
					'/images/product.png',
					'/images/product2.png',
					'/images/product3.png',
				],
				company: '/images/product_company.png'
			},
			arrow_right: false,
			count_right: 0
		}
	},
	methods: {
		arrowLeft() {
			if (this.count_right > 0) {
				this.count_right--;
				$('.nav-tabs').css('transform', 'translate(-' + this.count_right * 150 + 'px)')
				this.arrow_right = true;
			}
		},
		arrowRight() {
			if (this.arrow_right === true) {
				this.count_right++;
				let left = this.count_right * 150;
				let raznitsa = $('.nav-tabs').width() - $('.product_nav').width();
				if (left <= raznitsa + 48) {
					$('.nav-tabs').css('transform', 'translate(-' + left + 'px)')
				} else if (left > raznitsa + 48 && this.arrow_right === true) {
					$('.nav-tabs').css('transform', 'translate(-' + left + 'px)')
					this.arrow_right = false;
				} else {
					this.arrow_right = false;
				}
			}
		}
	},
	mounted() {
		if ($('.nav-tabs').width() > $('.product_nav').width()) {
			this.arrow_right = true;
		} else {
			this.arrow_right = false;
		}
	}
}
</script>

<style scoped lang="scss">
.product_nav {
	width: 100%;
	border: 1px solid #eceff1;
	border-right: 0;
	border-left: 0;
	overflow: hidden;
	padding: 0 48px;
	position: relative;

	&_svg {
		width: 48px;
		height: 48px;
		z-index: 2;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fafbfc;
		border-right: 1px solid #eceff1;
		border-left: 1px solid #eceff1;

		&.active {
			cursor: pointer;

			svg {
				path {
					stroke: #0a0a0a;
				}
			}
		}
	}

	&_left {
		left: 0;
	}

	&_right {
		right: 0;
	}

	.nav {
		display: flex;
		flex-wrap: nowrap;
		width: max-content;
		border-bottom: 0;
		transition: 0.5s;

		&-link {
			border: 0;
			border-right: 1px solid #eceff1;
			padding: 12px 40px;
			color: #050f19;
			background-color: #fafbfc;
			border-radius: 0;
		}
	}
}
</style>