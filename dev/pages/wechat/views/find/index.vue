<template>
  <div class="find">
    <Qchead :wechatmessage='wm'></Qchead>
    <div class="wrapcontent">
			<div class="userinfo" v-for="(item,index) in items" :key="index">
				<div class="listbox">
					<Icon class="icon" :type="item.icon"></Icon>
					<p>{{item.word}}</p>
					<Icon class="icon icon2" type="ios-arrow-forward"></Icon>
					<p class="wordr">{{item.wordr}}</p>
				</div>
			</div>
		</div>
		<Qcfooter></Qcfooter>
  </div>
</template>

<script>
	import Qchead from '@/components/qc/qchead'
	import Qcfooter from '@/components/qc/qcfooter'
	import {Icon} from 'iview'

	export default{
		name: 'find',
		components: {
				Icon,
				Qcfooter,
	      Qchead
	    },
		data(){
			return{
				wm:'发现',
				items:[{
					word:'朋友圈',
					icon:'cube'
				},{
					word:'扫一扫',
					icon:'qr-scanner'
				},{
					word:'摇一摇',
					icon:'iphone'
				},{
					word:'看一看',
					icon:'star'
				},{
					word:'搜一搜',
					icon:'search'
				},{
					word:'漂流瓶',
					icon:'ios-pint'
				},{
					word:'游戏',
					icon:'ios-game-controller-b'
				},{
					word:'小程序',
					icon:'paper-airplane'
				}]
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
	.userinfo:nth-child(4){
		margin-top: 0.2rem;
	}
	.userinfo:nth-child(6){
		margin-top: 0.2rem;
	}
	.userinfo:nth-child(7){
		margin-top: 0.2rem;
	}
	.userinfo:nth-child(8){
		margin-top: 0.2rem;
	}
	.wrapboder{
		padding: 0.1rem 0 0.1rem 0;
		border-bottom: 1px solid #ddd;
	}
	.icon{
		width: 0.22rem;
		height: 0.22rem;
		zoom: 1.6;
		float: left;
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
	.wordr{
		float: right;
		margin-right: .1rem;
	}
	.clear{
		clear: both;
	}
	.btninfo{
		background-color: white;
		width: 100%;
		height: auto;
		padding: 0.1rem;
		margin-top: 0.2rem;
		text-align: center;
	}
</style>