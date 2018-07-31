<template>
  <div class="userwallet">
    <Qchead :wechatmessage='wm' :back='out' :iconback='ib' :backurl='bu' :icontype='it'></Qchead>
		<div class="wrap">
			<div class="paybox">
				<div class="pay" v-for="(pay,index) in pays" :key="index">
					<Icon class="payicon" :type="pay.picon"></Icon>
					<p>{{pay.word}}</p>
					<span>{{pay.num}}</span>
				</div>
				<div class="clear"></div>
			</div>
			<div class="servebox">
				<p class="servetitle">腾讯服务</p>
				<div class="serve" v-for="(serve,index) in serves" :key="index">
					<Icon class="serveicon" :type="serve.sicon"></Icon>
					<p>{{serve.word}}</p>
				</div>
			</div>
			<div class="servebox">
				<p class="servetitle">第三方服务</p>
				<div class="serve" v-for="(three,index) in threes" :key="index">
					<Icon class="serveicon" :type="three.sicon"></Icon>
					<p>{{three.word}}</p>
				</div>
			</div>
		</div>	
  </div>
</template>

<script>
	import Qchead from '@/components/qc/qchead'
	import {Icon} from 'iview'

	export default{
		name: 'userwallet',
		components: {
				Qchead,
				Icon
	    },
		data(){
			return{
				wm:'钱包',
				ib:'chevron-left',
				out:'我',
				it:'ios-keypad',
				bu:'/user',
				pays:[{
					picon:'android-checkbox-outline',
					word:'收付款',
					num:''
				},{
					picon:'social-yen',
					word:'零钱',
					num:'2.22'
				},{
					picon:'card',
					word:'银行卡',
					num:''
				}],
				serves:[{
					sicon:'bag',
					word:'信用卡还款'
				},{
					sicon:'card',
					word:'手机充值'
				},{
					sicon:'cash',
					word:'理财通'
				},{
					sicon:'bag',
					word:'生活缴费'
				},{
					sicon:'card',
					word:'Q币充值'
				},{
					sicon:'cash',
					word:'城市服务'
				},{
					sicon:'bag',
					word:'腾讯公益'
				},{
					sicon:'card',
					word:'保险服务'
				}],
				threes:[{
					sicon:'bag',
					word:'火车票机票'
				},{
					sicon:'card',
					word:'滴滴出行'
				},{
					sicon:'cash',
					word:'京东优选'
				},{
					sicon:'bag',
					word:'美团外卖'
				},{
					sicon:'card',
					word:'电影演出赛事'
				},{
					sicon:'cash',
					word:'吃喝玩乐'
				},{
					sicon:'bag',
					word:'酒店'
				},{
					sicon:'card',
					word:'摩拜单车'
				},{
					sicon:'cash',
					word:'蘑菇街女装'
				},{
					sicon:'bag',
					word:'唯品会'
				},{
					sicon:'card',
					word:'转转二手'
				}]
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
	.userwallet /deep/ .qchead{
		background-color: #686F79;
	}
	.wrap{
		margin-top: .8rem;
		padding-bottom: .1rem;
		background-color: #EFEEF4;
	}
	.paybox{
		padding: .2rem;
		background-color: #686F79;
		.pay{
			float: left;
			width: 33.33%;
			p{
				color: white;
				text-align: center;
			}
			span{
				display: block;
				color: #999;
				text-align: center;
			}
		}
	}
	.payicon{
		display: block;
		width: 0.3rem;
		height: 0.3rem;
		margin: 0 auto;
		color: white;
		zoom: 2.4;
		margin-bottom: .1rem;
	}
	.serveicon{
		display: block;
		width: 0.24rem;
		height: 0.24rem;
		margin: 0 auto;
		zoom: 2;
		margin-bottom: .1rem;
	}
	.clear{
		clear: both;
	}
	.servebox{
		background-color: white;
		margin-top: .1rem;
		.servetitle{
			padding: .1rem;
			border-bottom: 1px solid #ddd;
		}
		.serve{
			border: 1px solid #ddd;
			border-top: none;
			border-left: none;
			float: left;
			width: 33.3%;
			padding: .3rem .1rem;
			p{
				text-align: center;
			}
		}
	}
	.servebox::after{
		display:block; 
		content:"clear";
		height:0; 
		clear:both;
		overflow:hidden; 
	}
</style>