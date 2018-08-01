<template>
  <div class="usersetting">
    <Qchead :wechatmessage='wm' :back='out' :iconback='ib' :backurl='bu'></Qchead>
    <div class="wrapcontent">
			<div class="userinfo" v-for="(item,index) in items" :key="index">
				<div class="listbox">
					<p>{{item.word}}</p>
					<Icon class="icon" :type="item.icon"></Icon>
					<Icon class="icon icon2" type="ios-arrow-forward"></Icon>
					<p class="wordr">{{item.wordr}}</p>
				</div>
			</div>
			<div class="btninfo" v-for="btn in btns" :key="btn.id">
				{{btn.text}}
			</div>
		</div>
  </div>
</template>

<script>
	import Qchead from '@/components/qc/qchead'
	import {Icon} from 'iview'

	export default{
		name: 'usersetting',
		components: {
	      Icon,
	      Qchead
	    },
		data(){
			return{
				wm:'设置',
				ib:'chevron-left',
				out:'我',
				bu:'/user',
				items:[{
					word:'账号与安全',
					icon:'',
					wordr:''
				},{
					word:'新消息通知',
					icon:'',
					wordr:''
				},{
					word:'隐私',
					icon:'',
					wordr:''
				},{
					word:'通用',
					icon:'',
					wordr:''
				},{
					word:'帮助与反馈',
					icon:'',
					wordr:''
				},{
					word:'关于微信',
					icon:'',
					wordr:'版本6.7.1'
				},{
					word:'插件',
					icon:'ios-lightbulb-outline',
					wordr:''
				}],
				btns:[{
					text:'切换账号'
				},{
					text:'退出登录'
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
	.userinfo:nth-child(2),
	.userinfo:nth-child(5),
	.userinfo:nth-child(7)
	{
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
	.btninfo{
		background-color: white;
		width: 100%;
		height: auto;
		padding: 0.1rem;
		margin-top: 0.2rem;
		text-align: center;
	}
</style>