<template>
	<div>
		<div class="qchead">
			<router-link :to="`${backurl}`">
			<div class="backbtn"><Icon class="iback" :type="iconback"></Icon>{{back}}</div>
			</router-link>
			<div class="title">{{ wechatmessage }}</div>
			<div class="plus">
				<Icon class="icon" :type="icontype" @click="toggle"></Icon>
			</div>
		</div>
		<div class="qctc" :class="{'block':ok,'none':!ok}">
			<ul>
				<li v-for="(tc,index) in tcs" :key="index">
					<Icon :type="tc.icon" class="icon" />
					<p>{{tc.name}}</p>
				</li>
			</ul>
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
			toggle:function(){
				this.ok=!this.ok
			}
		},
		data() {
			return {
				ok: false,
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
	
	.qctc:before {
		content: "";
		display: block;
		width: 0;
		height: 0;
		position: absolute;
		right: 0.08rem;
		top: -0.19rem;
		border-left: 0.1rem solid transparent;
		border-right: 0.1rem solid transparent;
		border-top: 0.1rem solid transparent;
		border-bottom: 0.14rem solid #49494B;
	}
	
	.qctc {
		position: fixed;
		top: 0.92rem;
		right: 0.1rem;
		width: 1.4rem;
		height: auto;
		background-color: #49494B;
		z-index: 99;
		ul {
			li {
				padding: 0.1rem 0.2rem 0 0.2rem;
				list-style: none;
				margin-bottom: 0.15rem;
				text-align: center;
				height: 0.34rem;
			}
		}
		.icon {
			float: left;
			zoom: 1.7;
			color: white;
			margin-right: 0.18rem;
			vertical-align: middle;
		}
		p {
			float: left;
			display: inline-block;
			color: #808080;
			font-size: 0.14rem;
			color: white;
			vertical-align: middle;
		}
		.active {
			color: #52A936 !important;
		}
		.clear {
			clear: both;
		}
	}
	.block{
		display: block;
	}
	.none{
		display: none;
	}
</style>