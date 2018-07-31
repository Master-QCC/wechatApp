<template>
  <div class="appuser">
    <Qchead :wechatmessage='wm'></Qchead>
    <div class="wrapcontent">
	  	<div class="userinfo">
	  		<router-link class="wrapboder" tag="div" :to="`/me`">
					<div class="imgbox">
						<img :src="txurl"/>
					</div>
					<div class="textbox">
						<p class="usernc">{{username}}</p>
						<p class="content">{{usernum}}</p>
					</div>
					<div class="iconbox">
						<Icon class="icon" type="ios-barcode-outline"></Icon>
						<Icon class="icon" type="ios-arrow-forward"></Icon>
					</div>
					<div class="clear"></div>
				</router-link>
				<router-link class="listbox" tag="div" :to="`/userwatch`">
					<Icon class="icon" type="android-watch"></Icon>
					<p>{{watch}}</p>
					<Icon class="icon icon2" type="ios-arrow-forward"></Icon>
				</router-link>
		  </div>
			<router-link tag="div" :to="item.router" class="userinfo" v-for="(item,index) in items" :key="index">
				<div class="listbox">
					<Icon class="icon" :type="item.type"></Icon>
					<p>{{item.word}}</p>
					<Icon class="icon icon2" type="ios-arrow-forward"></Icon>
				</div>
			</router-link>
		</div>
  	<Qcfooter></Qcfooter>
  </div>
</template>

<script>
	import Qcfooter from '@/components/qc/qcfooter'
	import Qchead from '@/components/qc/qchead'
	import {Icon} from 'iview'
	import list from '@/mockData/user.js'

	export default{
		name: 'user',
		components: {
	      Qcfooter,
	      Icon,
	      Qchead
	    },
		data(){
			return{
				wm:'我',
				watch:'Watch 微信',
				txurl:require('@/assets/images/tx1.jpg'),
				username:'圣光围绕的QCC',
				usernum:'微信号：jj995361810',
				money:'钱包',
				setting:'设置',
				items: list
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
	.wrapcontent{
			position: relative;
			width: 100%;
			height: 100vh;
			top: 0.8rem;
			padding-top: 0.1rem;
			background-color: #EFEEF4;
		}
	.userinfo{
		background-color: white;
		width: 100%;
		height: auto;
		padding-left: 0.1rem;
		border-bottom: 1px solid #ddd;
	}
	.userinfo:nth-child(2){
		margin-top: 0.2rem;
	}
	.userinfo:nth-child(3){
		margin-top: 0.2rem;
	}
	.userinfo:nth-child(7){
		margin-top: 0.2rem;
	}
	.imgbox{
			float: left;
			width: 0.6rem;
			height: 0.6rem;
			border-radius:0.05rem;
			overflow:hidden;
			margin-right:0.1rem;
			img{
				width: 0.6rem;
				height: 0.6rem;
			}
		}
	.wrapboder{
		padding: 0.1rem 0 0.1rem 0;
		border-bottom: 1px solid #ddd;
	}
	.textbox{
		padding-top: 0.06rem;
		float: left;
		.usernc{
			font-weight: bold;
			font-size: 0.16rem;
			margin-bottom: 0.06rem;
		}
		.content{
			width: 2rem;
			font-size: 0.14rem;
			overflow: hidden;
			font-weight: bold;
		}
	}
	.iconbox{
		line-height: 0.6rem;
		height: 0.6rem;
		float: right;
	}
	.icon{
		width: 0.22rem;
		height: 0.22rem;
		zoom: 1.6;
		margin-right: 0.1rem;
		vertical-align: middle;
	}
	.listbox{
		padding-top: 0.1rem;
		padding-bottom: 0.1rem;
		p{
			display: inline-block;
			vertical-align:middle;
		}
		.icon2{
			float: right;
		}
	}
	.clear{
		clear: both;
	}
</style>