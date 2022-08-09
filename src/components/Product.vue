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
				<div class="tab-pane fade show active product_info" id="product-main" role="tabpanel"
					 aria-labelledby="product-main-tab">
					<div class="product_left">
						<div class="product_left_image">
							<div class="main_photo" :style="{backgroundImage: 'url(' + selected_image + ')'}"
								 @mouseleave="test(false)"
								 @mousemove="test(true)">
								<div class="resize_photo" :class="{active: resize_photo}">
									<img :src="selected_image" alt="image">
								</div>
							</div>
							<div class="product_top_left">
								<p class="hit_prodaj">Хит продаж</p>
								<p class="sale">Акция</p>
							</div>
							<p class="product_alert">
								Наведите на изображение, чтобы увеличить его
							</p>
						</div>
						<div class="product_top_right">
							<div class="add_tolist">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M10 4.16667V15.8333" stroke="#1652F0" stroke-width="2"
										  stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M4.16666 10H15.8333" stroke="#1652F0" stroke-width="2"
										  stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
								В список
							</div>
						</div>
						<div class="product_left_gallery">
							<swiper
								:modules="modules"
								:slides-per-view="3"
								navigation
								:space-between="8"
							>
								<swiper-slide v-for="(photo, photo_key) in item.photos"
											  :key="photo_key"
											  :class="{'active' : selected_image === photo}"
											  @click="mainPhoto(photo)">
									<img class="product_slider" :src="photo" alt="photo">
								</swiper-slide>
							</swiper>
						</div>
					</div>
					<div class="product_center">
						<p class="product_subtitle">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.6667 1.66667H4.99999C4.55797 1.66667 4.13404 1.84226 3.82148 2.15482C3.50892 2.46738 3.33333 2.89131 3.33333 3.33333V16.6667C3.33333 17.1087 3.50892 17.5326 3.82148 17.8452C4.13404 18.1577 4.55797 18.3333 4.99999 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V6.66667L11.6667 1.66667Z" stroke="#050F19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M11.6667 1.66667V6.66667H16.6667" stroke="#050F19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M13.3333 10.8333H6.66667" stroke="#050F19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M13.3333 14.1667H6.66667" stroke="#050F19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M8.33334 7.5H7.5H6.66667" stroke="#050F19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Коротко о товаре
						</p>
						<p class="product_weight">
							Вес · <span>{{ item.weight }}</span>
						</p>
						<p class="product_weight">
							Основа · <span>{{ item.foundation }}</span>
						</p>
						<a href="#" class="product_tablink">
							Все  характеристики
						</a>
						<p class="product_subtitle">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4.99999 18.3333H2.49999C2.05797 18.3333 1.63404 18.1577 1.32148 17.8452C1.00892 17.5326 0.833328 17.1087 0.833328 16.6667V10.8333C0.833328 10.3913 1.00892 9.96739 1.32148 9.65483C1.63404 9.34227 2.05797 9.16667 2.49999 9.16667H4.99999M10.8333 7.5V4.16667C10.8333 3.50363 10.5699 2.86775 10.1011 2.3989C9.63225 1.93006 8.99637 1.66667 8.33333 1.66667L4.99999 9.16667V18.3333H14.4C14.8019 18.3379 15.192 18.197 15.4982 17.9367C15.8045 17.6763 16.0064 17.3141 16.0667 16.9167L17.2167 9.41667C17.2529 9.1778 17.2368 8.93391 17.1694 8.70188C17.1021 8.46986 16.9851 8.25525 16.8265 8.07293C16.668 7.89062 16.4717 7.74495 16.2513 7.64602C16.0309 7.54709 15.7916 7.49727 15.55 7.5H10.8333Z" stroke="#050F19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Пользуется спросом
						</p>
						<div class="product_views">
							<p class="product_views_count">{{ item.views }}</p>
							<p class="product_views_order">{{ item.order }}</p>
						</div>
						<p class="product_subtitle">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M17.5 9.23332V9.99998C17.499 11.797 16.9171 13.5455 15.8411 14.9848C14.7651 16.4241 13.2527 17.477 11.5295 17.9866C9.80619 18.4961 7.96438 18.4349 6.27872 17.8121C4.59306 17.1894 3.15387 16.0384 2.1758 14.5309C1.19772 13.0233 0.733154 11.24 0.851392 9.44691C0.96963 7.65379 1.66433 5.94692 2.83189 4.58088C3.99946 3.21483 5.57732 2.2628 7.33015 1.86677C9.08299 1.47074 10.9169 1.65193 12.5583 2.38332" stroke="#050F19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M17.5 3.33333L9.16667 11.675L6.66667 9.175" stroke="#050F19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							{{ item.in_stoke }}
						</p>
						<a href="#" class="product_tablink">
							{{ item.sentence }}
						</a>
						<img :src="item.company" alt="Company" class="product_company_image">
					</div>
					<div class="product_right">
						<p class="product_pay_title">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 1.66667L12.575 6.88333L18.3333 7.725L14.1667 11.7833L15.15 17.5167L10 14.8083L4.85001 17.5167L5.83334 11.7833L1.66667 7.725L7.42501 6.88333L10 1.66667Z" fill="#FED83D" stroke="#FED83D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							Популярное предложение
						</p>
						<div class="product_cost">
							{{ item.cost }} <span>РУБ/ ШТ</span>
						</div>
						<p class="product_in_stock">В наличии</p>
						<router-link to="#" class="product_store">Перейти в магазин</router-link>
						<div class="product_supplier">
							<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="24" cy="24" r="23.5" fill="white" stroke="#05B169"/>
								<path d="M24 36C24 36 34 31.2 34 24V15.6L24 12L14 15.6V24C14 31.2 24 36 24 36Z" fill="#05B169"/>
								<path d="M28.4439 20.7273L22.3328 27.2727L19.555 24.2975" fill="#05B169"/>
								<path d="M28.4439 20.7273L22.3328 27.2727L19.555 24.2975" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							<div class="product_supplier_info">
								<p class="supplier_status">Проверенный поставщик</p>
								<p class="supplier_title">ООО ВсеИнструменты.ру</p>
								<p class="supplier_position supplier_status">Дилер</p>
							</div>
							<img src="/images/diler.png" alt="diler" class="supplier_image">
						</div>
					</div>
				</div>
				<div class="tab-pane fade" id="product-buy" role="tabpanel" aria-labelledby="product-buy-tab">
					Где купить
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
	name: "Product",
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			modules: [Navigation],
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
					'/images/product1.png',
					'/images/product2.png',
					'/images/product.png',
				],
				company: '/images/product_company.png',
				cost: '39 900',
			},
			arrow_right: false,
			count_right: 0,
			selected_image: '/images/product.png',
			resize_photo: false
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
		},
		mainPhoto(photo) {
			this.selected_image = photo ?? this.item.photos[0];
		},
		test(bool) {
			this.resize_photo = bool;
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

.product {
	&_info {
		display: flex;
		margin-top: 32px;
	}

	&_left {
		width: 350px;
		position: relative;

		&_image {
			position: relative;
			padding: 20px 50px;
			border: 1px solid #ECEFF1;
			border-radius: 4px;
			margin-bottom: 16px;

			.main_photo {
				cursor: zoom-in;
				width: 250px;
				height: 250px;
				background-size: contain;
				background-position: center;
				background-repeat: no-repeat;
			}
		}

		&_gallery {
			.swiper {
				padding: 0 35px;
			}
		}
	}

	&_top {
		&_left {
			position: absolute;
			top: 16px;
			left: 16px;

			.hit_prodaj {
				font-size: 10px;
				line-height: 10px;
				color: #ffffff;
				letter-spacing: 0.04em;
				text-transform: uppercase;
				padding: 7px 12px;
				background-color: #f2994a;
				margin-bottom: 8px;
				border-radius: 2px;
			}

			.sale {
				font-size: 10px;
				line-height: 10px;
				color: #ffffff;
				letter-spacing: 0.04em;
				text-transform: uppercase;
				padding: 7px 12px;
				background-color: #E92F2F;
				margin-bottom: 0;
				border-radius: 2px;
			}
		}

		&_right {
			position: absolute;
			right: 16px;
			top: 16px;

			.add_tolist {
				display: flex;
				cursor: pointer;
				align-items: center;
				margin: 0 0 20px 20px;
				padding: 2px 8px;
				color: #1652f0;
				font-size: 12px;
				line-height: 20px;
				font-weight: 600;
				border: 1px solid #1652F0;
				border-radius: 2px;

				svg {
					margin-right: 4px;
				}
			}
		}
	}

	&_alert {
		position: absolute;
		bottom: 16px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 12px;
		line-height: 20px;
		color: #708598;
		width: max-content;
		margin: 0;
	}

	&_slider {
		height: 100%;
	}

	&_center {
		margin: 0 35px 0 60px;
		display: flex;
		flex-direction: column;

		p {
			cursor: default;
			margin-bottom: 8px;
			font-size: 14px;
			line-height: 24px;
			font-weight: 400;
			color: #0a0a0a;

			span {
				color: #708598;
			}
		}

		a {
			text-decoration: none;
			color: #1652f0;
			margin-bottom: 16px;
			font-size: 14px;
			line-height: 24px;
		}

		.product_subtitle {
			position: relative;
			font-weight: 600;
			color: #050f19;

			svg {
				position: absolute;
				left: -30px;
				top: 0;
			}
		}

		.product_views {
			display: flex;
			color: #050f19;

			&_count {
				border-bottom: 1px dashed #050f19;
				margin-right: 16px;
			}
		}

		.product_company_image {
			width: 80px;
			height: 80px;
			object-fit: contain;
		}
	}

	&_right {
		padding: 24px;
		width: 350px;
		border: 1px solid #ECEFF1;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
		border-radius: 4px;
		background-color: #fff;
		border-top: 4px solid #FED83D;

		.product_pay_title {
			font-size: 10px;
			line-height: 10px;
			color: #050f19;
			letter-spacing: 0.04em;
			display: flex;
			align-items: center;
			margin: 24px 0 32px;
			font-weight: 600;

			svg {
				margin-right: 8px;
			}
		}

		.product_cost {
			font-size: 28px;
			line-height: 38px;
			font-weight: 700;
			color: #050f19;
			display: flex;
			align-items: flex-end;
			margin-bottom: 8px;

			span {
				margin-left: 8px;
				font-size: 14px;
				line-height: 24px;
				color: #050f19;
			}
		}

		.product_in_stock {
			color: #05b169;
			font-size: 10px;
			line-height: 10px;
			letter-spacing: 0.04em;
			text-transform: uppercase;
			font-weight: 600;
			margin-bottom: 32px;
		}

		.product_store {
			font-size: 14px;
			line-height: 24px;
			color: #0A0A0A;
			padding: 12px 80px;
			background-color: #fed83d;
			border-radius: 4px;
			text-align: center;
			text-decoration: none;
			display: flex;
			margin-bottom: 32px;
		}

		.product_supplier {
			display: flex;
			align-items: flex-start;

			&_info {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				margin: 0 20px 0 12px;

				p {
					margin-bottom: 8px;
				}

				.supplier_status {
					font-size: 10px;
					line-height: 100%;
					color: #05b169;
					letter-spacing: 0.04em;
					font-weight: 600;
					text-transform: uppercase;
				}

				.supplier_title {
					color: #0a0a0a;
					font-size: 14px;
					line-height: 24px;
					font-weight: 600;
				}

				.supplier_position {
					background-color: #E5FFF0;
					border-radius: 2px;
				}
			}
		}
	}
}

.swiper-slide {
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid transparent;
	transition: 0.3s;
	cursor: pointer;

	&.active {
		border: 1px solid #1652F0;
		border-radius: 2px;
	}
}

.resize_photo {
	position: absolute;
	background: #fff;
	z-index: 2;
	width: 0;
	height: 0;
	top: 50%;
	left: 50%;
	transform: translate(-20%, -50%);
	box-shadow: -3px -2px 23px 0px #ccc;
	border-radius: 5px;
	transition: 0.3s;

	&.active {
		width: 450px;
		height: 450px;
		padding: 20px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
}
</style>
<style lang="scss">
.swiper-button-prev {
	left: 0;
	height: 64px;
	top: 0;
	margin: 0;
	background-color: #fff;
	width: 35px;
	justify-content: flex-start;

	&:after {
		content: '';
		height: 24px;
		width: 24px;
		background-image: url('/public/images/left.svg');
	}
}

.swiper-button-next {
	right: 0;
	height: 64px;
	top: 0;
	margin: 0;
	background-color: #fff;
	width: 35px;
	justify-content: flex-end;

	&:after {
		content: '';
		height: 20px;
		width: 20px;
		background-image: url('/public/images/right.svg');
	}
}
</style>