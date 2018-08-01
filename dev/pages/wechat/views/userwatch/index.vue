<template>
  <div class="userwatch">
    <Qchead :wechatmessage='wm' :back='out' :iconback='ib' :backurl='bu'></Qchead>
		<div class="watchbg">
			<div class="watchimg">
				<img :src="watchurl" alt="手表图表">
			</div>
			<div class="watchtext">
				<p>{{wtext1}}</p>
				<ol>
					<li>{{wtext21}}<b>{{wtext22}}</b>{{wtext23}}</li>
					<li>{{wtext3}}</li>
					<li>{{wtext4}}</li>
					<li>{{wtext5}}</li>
				</ol>
				<p>{{wtext6}}</p>
				<a>{{wtext7}}</a>
			</div>
			<div class="watchbtn" v-for="(watch,index) in watchs" :key="index">
				<p>{{watch.message}}</p>
				<Icon class="icon icon2" type="ios-arrow-forward"></Icon>
			</div>
		</div>
  </div>
</template>

<script>
	import Qchead from '@/components/qc/qchead'
	import {Icon} from 'iview'

	export default{
		name: 'userwatch',
		components: {
				Qchead,
				Icon
	    },
		data(){
			return{
				wm:'Watch微信',
				ib:'chevron-left',
				out:'我',
				bu:'/user',
				watchurl:require('@/assets/images/watchimg.png'),
				wtext1:'设置微信表盘',
				wtext21:'用力按压Apple Watch显示屏，选择',
				wtext22:'模块',
				wtext23:'表盘',
				wtext3:'轻触 自定',
				wtext4:'向左轻扫，轻触选择某个功能栏',
				wtext5:'转动Digital Crown选择 微信',
				wtext6:'为了即时启动微信，提供最新资讯，你可以将微信添加到Dock。',
				wtext7:'了解更多',
				watchs:[{
					message: 'Watch 回复技巧'
				},
				{
					message: '使用技巧'
				}]
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
	.watchbg{
		margin-top: .8rem;
		padding: .1rem;
		background-color: white;
		.watchimg{
			width: 1.8rem;
			height: 2rem;
			margin: .2rem auto;
		}
	}
	.watchtext{
		margin-top: .2rem;
		padding-left: .2rem;
		margin-bottom: .2rem;
		p{
			margin-bottom: .1rem;
		}
		ol{
			padding-left: .2rem;
			margin-bottom: .24rem;
			li{
				line-height: .3rem;
			}
		}
		a{
			margin-top: -0.1rem;
		}
	}
	.watchbtn{
		border-bottom: .01rem solid #ddd;
		padding: .1rem 0 .1rem .2rem;
		p{
			display: inline-block;
			vertical-align:middle;
		}
		.icon2{
			float: right;
		}
	}
	.icon{
		width: 0.22rem;
		height: 0.22rem;
		zoom: 1.6;
		margin-right: 0.1rem;
		vertical-align: middle;
	}
	

</style>