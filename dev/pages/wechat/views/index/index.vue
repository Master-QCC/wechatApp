<template>
  <div class="indexapp">
  	<Ihead :wechatmessage='wm' :icontype='it' :back='out'></Ihead>
  	<div class="search">
  		<Input class="sinput" icon="mic-a" placeholder="搜索"></Input>
  	</div>
  	<div class="wrapcontent">
			<div class="chatbox" v-for="(item,index) in items" :key='index'>
				<router-link :to="`/chats/${item.id}`" @click="gotoChat(item.id)">
				<div class="imgbox">
					<img :src="item.txurl"/>
				</div>
				<div class="textbox">
					<p class="usernc">{{item.nc}}{{index+1}}</p>
					<p class="content">{{item.ccontent}}</p>
				</div>	
				<div class="timebox">{{formatDate(item.ctime)}}</div>
				</router-link>	
			</div>
  	</div>
  	<Qcfooter></Qcfooter>
  </div>
</template>

<script>
	import {Icon,Input} from 'iview'
	import Qcfooter from '@/components/qc/qcfooter'
	import Ihead from '@/components/qc/ihead'
	import list from '@/mockData/index.js'
	
	export default{
		name: 'index',
		components: {
	      Qcfooter,
	      Ihead,
	      Icon,
	      Input
	    },
		data(){
			return{
				wm:'微信',
				it:'plus',
				out:'',
				items: list
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
				var nowdata = year + '/' + month + '/' + day
				var indate = val.split(' ')[0].split('/')
				// console.log(today,6868686868)
				if (indate[0]==year&&indate[1]==month&&day - indate[2]==1) {
					return "昨天"
				}else
				if (indate[0]==year&&indate[1]==month&&day - indate[2]==2) {
					return "前天"
				}else 
				if(indate[0]==year&&indate[1]==month&&day==indate[2]) {
					return val.split(' ')[1]
				}else
				if(indate[0]==year&&indate[1]==month&&day - indate[2]>2||indate[0]==year&&indate[1]<month||indate[0]<year) {
					return indate.join('/')
				}
			},
			gotoChat(id) {
				this.$router.push({path: 'chats/' + id})
			}
		},
	}
</script>

<style lang="less" scoped>
	.search{
		position: relative;
		top: 0.8rem;
		width: 100%;
		height: 0.44rem;
		background-color: #EFEEF4;
		padding: 0.07rem;
		border-bottom: 1px solid #ddd;
		.sinput{
			border: none;
			border-radius: 0.08rem;
			height: 0.3rem;
			width: 100%;
			text-align: center;
		}
	}
	.wrapcontent{
		position: relative;
		width: 100%;
		height: auto;
		top: 0.9rem;
		margin-bottom: 0.66rem;
	}
	.chatbox{
			width: 100%;
			height: 0.7rem;
			padding: 0.1rem;
			border-bottom: 1px solid #ddd;
			.imgbox{
				float: left;
				width: 0.5rem;
				height: 0.5rem;
				border-radius:0.05rem;
				overflow:hidden;
				margin-right:0.1rem;
				img{
					width: 0.5rem;
					height: 0.5rem;
				}
			}
		}
		.textbox{
			float: left;
			height: 0.5rem;
			.usernc{
				font-weight: bold;
				margin-bottom: 0.08rem;
			}
			.content{
				height: 0.21rem;
				width: 1.5rem;
				overflow: hidden;
				color: #808080;
			}
		}
		.timebox{
			float: right;
			color: #000;
		}
		p{
			color: #000;
		}
</style>