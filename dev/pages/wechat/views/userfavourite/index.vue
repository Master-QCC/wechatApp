<template>
  <div class="userfavourite">
    <Qchead :wechatmessage='wm' :iconback='ib' :backurl='bu' :icontype='it'></Qchead>
		<div class="wrap">
			<div class="search">
				<Input class="sinput" placeholder="搜索"></Input>
			</div>
			<div class="kinds">
				<ul class="kindlist">
					<li v-for="(kind,index) in kinds" :key="index">
						{{kind.word}}
					</li>
				</ul>
			</div>
			<div class="favevents">
				<div class="faveventsbox" v-for="(event,index) in events" :key='index'>
					<div class="imgbox">
						<img :src="event.evurl"/>
					</div>
					<div class="titlebox">
						<p class="eventtitle">{{event.title}}</p>
					</div>
					<div class="utbox">
						<p>{{event.username}}</p>
						<p>{{formatDate(event.time)}}</p>
					</div>
				</div>
			</div>	
		</div>	
  </div>
</template>

<script>
	import Qchead from '@/components/qc/qchead'
	import {Icon,Input} from 'iview'

	export default{
		name: 'userfavourite',
		components: {
				Qchead,
				Icon,
				Input
	    },
		data(){
			return{
				wm:'收藏',
				ib:'chevron-left',
				it:'ios-plus-outline',
				bu:'/user',
				kinds:[{
					word:'图片视频'
				},{
					word:'链接'
				},{
					word:'文件'
				},{
					word:'音乐'
				},{
					word:'聊天记录'
				},{
					word:'语音'
				},{
					word:'笔记'
				},{
					word:'位置'
				}],
				events:[{
					evurl:require('@/assets/images/favpic.png'),
					title:'让广东人早起排队的店，来了',
					username:'圣光围绕的QCC',
					time:'2018/08/08'
				},{
					evurl:require('@/assets/images/favpic2.png'),
					title:'vue.js使用中踩过的坑',
					username:'web学习圈',
					time:'2018/08/07'
				},{
					evurl:require('@/assets/images/favpic.png'),
					title:'让广东人早起排队的店，来了',
					username:'圣光围绕的QCC',
					time:'2018/08/07'
				},{
					evurl:require('@/assets/images/favpic2.png'),
					title:'vue.js使用中踩过的坑',
					username:'web学习圈',
					time:'2018/08/06'
				},{
					evurl:require('@/assets/images/favpic.png'),
					title:'让广东人早起排队的店，来了',
					username:'圣光围绕的QCC',
					time:'2018/07/21'
				},{
					evurl:require('@/assets/images/favpic2.png'),
					title:'vue.js使用中踩过的坑',
					username:'web学习圈',
					time:'2018/07/20'
				},{
					evurl:require('@/assets/images/favpic2.png'),
					title:'vue.js使用中踩过的坑',
					username:'web学习圈',
					time:'2018/07/2'
				},{
					evurl:require('@/assets/images/favpic.png'),
					title:'让广东人早起排队的店，来了',
					username:'圣光围绕的QCC',
					time:'2018/07/1'
				},{
					evurl:require('@/assets/images/favpic2.png'),
					title:'vue.js使用中踩过的坑',
					username:'web学习圈',
					time:'2017/07/25'
				}]
			}
		},
		methods:{
				zeronum(num) {
  			let newNum
  			newNum =  num < 10 ? ('0' + num) : num
  			return newNum
			},
			formatDate(val) {
				let today = new Date(),
				year = today.getFullYear(),
				month = this.zeronum(today.getMonth() + 1),
				day = this.zeronum(today.getDate())
				// console.log(year + '/' + month + '/' + day,1234567890)
				var indate = val.split('/')
				// console.log(indate[0],6868686868)
				if (indate[0]==year&&indate[1]==month&&day - indate[2]==1) {
					return "1天前"
				}else
				if (indate[0]==year&&indate[1]==month&&day - indate[2]==2) {
					return "2天前"
				}else
				if (indate[0]==year&&indate[1]==month&&day - indate[2]==3) {
					return "3天前"
				}else 
				if(indate[0]==year&&indate[1]==month&&day==indate[2]) {
					return "今天"
				}else
				if(indate[0]==year&&indate[1]==month&&day - indate[2]>2||indate[0]==year&&indate[1]<month||indate[0]<year) {
					return val
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.userfavourite /deep/ .qchead{
		background-color: #EFEEF4;
	}
	.userfavourite /deep/ .qchead .backbtn{
		color: #000;
	}
	.userfavourite /deep/ .qchead .title{
		color: #000;
	}
	.userfavourite /deep/ .qchead .plus{
		color: #000;
	}
	.wrap{
		margin-top: .8rem;
		padding: .1rem;
		background-color: #EFEEF4;
	}
	.search{
		width: 100%;
		margin-bottom: .1rem;
		.sinput{
			border: none;
			border-radius: 0.1rem;
			height: 0.3rem;
			width: 100%;
			text-align: center;
		}
	}
	.kinds{
		padding: .2rem;
		padding-bottom: 0;
		background-color: white;
		border-radius: 0.06rem;
		margin-bottom: .1rem;
		ul{
			li{
				float: left;
				width: 25%;
				margin-bottom: .2rem;
				border-right: .01rem solid #ddd;
				list-style: none;
				color: #52A936;
				text-align: center;
			}
			li:nth-child(4n){
				border-right: none;
			}
		}
	}
	.kindlist::after,
	.faveventsbox::after{
		clear: both;
		content: "";
		visibility: hidden;
		height: 0;
		display: block;
		zoom: 1;
	}
	.favevents{
		border-radius: 0.06rem;
		.faveventsbox{
			background-color: white;
			border-radius: .06rem;
			padding: .1rem;
			width: 100%;
			margin-bottom: .1rem;
			.imgbox{
				float: left;
				width: .5rem;
				height: .5rem;
				border-radius:.05rem;
				overflow:hidden;
				margin-right:.1rem;
				margin-bottom: .1rem;
				img{
					width: .5rem;
					height: .5rem;
				}
			}
		}
		.titlebox{
			float: left;
			height: .5rem;
			width: 2.2rem;
			.eventtitle{
				font-weight: bold;
				margin-bottom: .08rem;
				color: #000;
			}
		}
		.utbox{
			p{
				display: inline-block;
				margin-right: .1rem;
				color: #999;
			}
		}
	}
</style>