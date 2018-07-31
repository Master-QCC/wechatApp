<template>
	<div>
		<div class="qchead">
			<div class="top">
			</div>
			<router-link :to="`${backurl}`">
			<div class="backbtn"><Icon class="iback" :type="iconback"></Icon>{{back}}</div>
			</router-link>
			<div class="title">{{ wechatmessage }}</div>
			<div class="plus">
				<Icon class="icon" :type="icontype"></Icon>
			</div>
		</div>
	</div>

</template>

<script>
	import { Icon } from 'iview'

	export default {
		name: "qchead",
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
		data() {
			return {
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
	.qchead {
		position: fixed;
		top: 0;
		width: 100%;
		height: 0.8rem;
		background-color: #49494B;
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
			color: white;
		}
		.plus {
			position: absolute;
			bottom: 0.1rem;
			right: 0.1rem;
			width: 0.24rem;
			height: 0.24rem;
			zoom: 1.2;
			color: white;
		}
		.backbtn{
			position: absolute;
			bottom: 0.1rem;
			color: white;
			float: left;
			.iback{
				margin-right: 0.02rem;
			}
		}
	}
	.clear {
		clear: both;
	}

</style>