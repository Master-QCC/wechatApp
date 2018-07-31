<template>
  <div class="appuser">
    <Qchead :wechatmessage='wm' :back='out' :iconback='ib' :backurl='bu'></Qchead>
    <div class="wrapcontent">
	  	<div class="userinfo">
	  		<router-link class="wrapboder" tag="div" :to="`/me`">
					<div class="textbox">
						<p class="usernc">{{infoone}}</p>
					</div>
					<div class="iconbox">
						<Icon class="icon" type="ios-arrow-forward"></Icon>
					</div>
					<div class="imgbox">
						<img :src="txurl"/>
					</div>
					<div class="clear"></div>
				</router-link>
				<div class="listbox" v-for="(item,index) in items" :key='index'>
					<p>{{item.infomsg}}</p>
					<Icon class="icon icon2" v-if="item.seen" type="ios-arrow-forward"></Icon>
					<p class="text">{{item.text}}</p>
					<Icon class="icon icon2 text" :type="item.icon"></Icon>
				</div>
		  </div>
		  </div>
  </div>
</template>

<script>
	import Qchead from '@/components/qc/qchead'
	import {Icon} from 'iview'

	export default{
		name: 'me',
		components: {
	      Icon,
	      Qchead
	    },
		data(){
			return{
				wm:'个人信息',
				ib:'chevron-left',
				txurl:require('@/assets/images/tx1.jpg'),
				out:'我',
				infoone:'头像',
				items:[{
					infomsg:'名字',
					text:'圣光围绕的QCC',
					seen:true,
					icon:''
				},{
					infomsg:'微信号',
					text:'jj995361810',
					seen:false,
					icon:''
				},{
					infomsg:'我的二维码',
					text:'',
					seen:true,
					icon:'ios-barcode-outline'
				},{
					infomsg:'更多',
					text:'',
					seen:true,
					icon:''
				},{
					infomsg:'地址',
					text:'',
					seen:true,
					icon:''
				}],
				bu:'/user'
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
		width: 100%;
		height: auto;
		border-bottom: 1px solid #ddd;
	}
	.imgbox{
			float: right;
			width: 0.6rem;
			height: 0.6rem;
			border-radius:0.05rem;
			overflow:hidden;
			img{
				width: 0.6rem;
				height: 0.6rem;
			}
		}
	.wrapboder{
		padding: 0.1rem;
		border-bottom: 1px solid #ddd;
		background-color: white;
	}
	.textbox{
		padding-top: 0.06rem;
		float: left;
		.usernc{
			font-weight: bold;
			font-size: 0.16rem;
			line-height: .6rem;
		}
		.content{
			width: 2rem;
			font-size: 0.14rem;
			overflow: hidden;
			font-weight: bold;
		}
	}
	.iconbox{
		line-height: .6rem;
		height: .6rem;
		float: right;
	}
	.icon{
		width: .22rem;
		height: .22rem;
		zoom: 1.6;
		margin-left: .1rem;
		vertical-align: middle;
	}
	.listbox{
		padding: .1rem;
		background-color: white;
		border-bottom: 1px solid #ddd;
		p{
			display: inline-block;
			vertical-align:middle;
		}
		.icon2{
			margin-left: .1rem;
			float: right;
		}
		.text{
			float: right;
		}
	}
	.listbox:nth-child(6){
		margin-top: .1rem;
	}
	.usmargin{
		margin-top: .2rem;
		margin-bottom: .2rem;
	}
	.clear{
		clear: both;
	}
</style>