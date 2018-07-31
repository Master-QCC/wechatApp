<template>
	<div>
		<div class="wchead" :class="ifChangColor? 'unactive' : 'active'">
			<div class="top">
			</div>
			<router-link :to="`${backurl}`">
			<div class="backbtn" :class="tColor? 'black' : 'white'"><Icon class="iback" :type="iconback"></Icon>{{back}}</div>
			</router-link>
			<div class="title" :class="tColor? 'black' : 'white'">{{ wechatmessage }}</div>
			<div class="plus">
				<Icon class="icon" :class="tColor? 'black' : 'white'" :type="icontype"></Icon>
			</div>
		</div>
	</div>
</template>

<script>
	import { Icon } from 'iview'

	export default {
		name: "wchead",
		components: {
			Icon
		},
		props: {
			icontype: String,
			iconback: String,
			wechatmessage: String,
			backurl:String,
			back:String
		},
		methods: {
		},
		watch: {
			ifChangColor(val) {
				return val
			},
			tColor(value) {
				return value
			}
		},
		data() {
			return {
				ifChangColor: false,
				tColor: false,
				tcs: [{
						name: '发起群聊',
						icon: "ios-chatbubble"
					},
					{
						name: '添加朋友',
						icon: "person-add"
					},
					{
						name: '扫一扫',
						icon: "ios-barcode-outline"
					},
					{
						name: '收付款',
						icon: "social-yen"
					}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
	.white{
		color: white;
	}
	.black{
		color: black;
	}
	.wchead {
		position: fixed;
		top: 0;
		width: 100%;
		height: 0.8rem;
		padding: 0.1rem 0.2rem 0.2rem 0.2rem;
		z-index: 99;
		.title {
			position: absolute;
			bottom: 0.1rem;
			width: 2rem;
			left: 50%;
			margin-left: -1rem;
			text-align: center;
			font-size: 0.18rem;
		}
		.plus {
			position: absolute;
			bottom: 0.1rem;
			right: 0.1rem;
			width: 0.24rem;
			height: 0.24rem;
			zoom: 1.2;
		}
		.backbtn{
			position: absolute;
			bottom: 0.1rem;
			float: left;
			.iback{
				margin-right: 0.02rem;
			}
		}
	}
	.active {
		background-color: rgba(0, 0, 0, 0);
	}
	.unactive {
		background-color: #EFEEF4;
	}
	.clear {
		clear: both;
	}
	.block{
		display: block;
	}
	.none{
		display: none;
	}
</style>