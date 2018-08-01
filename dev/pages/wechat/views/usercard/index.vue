<template>
  <div class="usercard">
    <Qchead :wechatmessage='wm' :iconback='ib' :backurl='bu'></Qchead>
		<div class="wrapcontent">
			<div class="cradcontent">
				<div class="cardinfo" >
					<Icon class="icon" type="card"></Icon>
					<p>卡</p>
					<Icon class="icon icon2" type="ios-arrow-forward"></Icon>
					<p class="wordr">查看全部（{{count()}}）</p>
				</div>
				<div class="carditem" v-for="(pic,index) in pics" :key='index'>
					<img :src="pic.src" alt="会员卡图片">
				</div>
			</div>
			<div class="cardinfo pd2" v-for="(item,index) in items" :key='index'>
					<Icon class="icon" type="card"></Icon>
					<p>{{item.msg}}</p>
					<Icon class="icon icon2" type="ios-arrow-forward"></Icon>
					<p class="wordr">{{item.msgr}}</p>
				</div>
		</div>
  </div>
</template>

<script>
	import Qchead from '@/components/qc/qchead'
	import {Icon} from 'iview'

	export default{
		name: 'usercard',
		components: {
				Qchead,
				Icon
	    },
		data(){
			return{
				wm:'卡包',
				ib:'chevron-left',
				bu:'/user',
				pics:[{
					src:require('@/assets/images/card1.png')
				},{
					src:require('@/assets/images/card2.png')
				},{
					src:require('@/assets/images/card3.png')
				}],
				items:[{
					msg:'朋友的优惠券',
					msgr:''
				},{
					msg:'我的优惠券',
					msgr:'有1张卡券即将过期'
				}]
			}
		},
		methods:{
				count(){
					return this.pics.length
				}
		}
	}
</script>

<style lang="less" scoped>
	.usercard /deep/ .qchead{
		background-color: #EFEEF4;
	}
	.usercard /deep/ .qchead .backbtn{
		color: #000;
	}
	.usercard /deep/ .qchead .title{
		color: #000;
	}
	.usercard /deep/ .qchead .plus{
		color: #000;
	}
	.wrapcontent{
		position: relative;
		width: 100%;
		min-height: 100vh;
		top: 0.8rem;
		background-color: #EFEEF4;
	}
	.cradcontent{
		background-color: white;
		padding: .1rem .2rem;
		margin-bottom: .1rem;
	}
	.cardinfo{
		width: 100%;
		height: auto;
		margin-bottom: .04rem;
		.icon{
			width: 0.2rem;
			height: 0.22rem;
			zoom: 1.6;
			vertical-align: middle;
		}
		p{
			display: inline-block;
			vertical-align:middle;
		}
		.icon2{
			float: right;
			width: 0.1rem;
		}
		.wordr{
			float: right;
			margin-right: .08rem;
			color: #999;
		}
	}
	.carditem{
		margin-top: .06rem;
		overflow: hidden;
		img{
			width: 100%;
			height: auto;
		}
	}
	.pd2{
		padding: .2rem;
		background-color: white;
		border-bottom: 1px solid #ddd;
	}
</style>