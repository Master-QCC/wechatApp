<template>
  <div class="userphoto up">
    <Wchead
		ref='head'
		:wechatmessage='wm' 
		:back='out' 
		:iconback='ib' 
		:backurl='bu' 
		:icontype='it'
		></Wchead>
    <div class="wrapcontent">
	  	<div class="photobg" :style="photobg"></div>
			<div class="userinfo">
				<div class="imgbox"><img :src="txsrc" alt="头像照片"></div>
				<p>{{username}}</p>
				<div class="clear"></div>
				<span>{{autograph}}</span>
			</div>
			<div class="photoitem">
				<p class="day">{{now}}</p>
				<img :src="nowsrc" alt="相机开关">
				<div class="clear"></div>
			</div>
			<div class="photoitem" v-for="(photo,index) in photos" :key="index">
				<p class="day">{{photo.day}}<i>{{photo.month}}</i></p>
				<img :src="photo.psrc" alt="相机开关">
				<div class="text">{{photo.text}}</div>
				<div class="clear"></div>
			</div>
		</div>
  </div>
</template>

<script>
	import Wchead from '@/components/qc/wchead'
	import {Icon} from 'iview'

	export default{
		name: 'userphoto',
		components: {
	      Icon,
	      Wchead
	    },
		data(){
			return{
				wm:'',
				out:'我',
				ib:'chevron-left',
				it:'more',
				bu:'/user',
				username:'圣光围绕的QCC',
				txsrc:require('@/assets/images/tx1.jpg'),
				autograph:'呜啦啦啦啦啦啦',
				now:'今天',
				active:true,
				has:false,
				nowsrc:require('@/assets/images/camera.png'),
				photobg:{
					backgroundImage: "url(" + require("@/assets/images/photobg.jpg") + ")",
					backgroundRepeat:'no-repeat'
				},
				photos:[{
					day:'21',
					month:'7月',
					psrc:require('@/assets/images/photo1.png'),
					text:'蜘蛛侠阿！！！蜘蛛侠阿！！蜘蛛侠阿！！蜘蛛侠阿！！蜘蛛侠阿！！蜘蛛侠阿！！'
				},{
					day:'19',
					month:'7月',
					psrc:require('@/assets/images/order.jpg'),
					text:'good'
				},{
					day:'11',
					month:'7月',
					psrc:require('@/assets/images/food.jpg'),
					text:'好吃！！'
				},{
					day:'10',
					month:'7月',
					psrc:require('@/assets/images/tofo.jpg'),
					text:'嘿嘿'
				},{
					day:'21',
					month:'5月',
					psrc:require('@/assets/images/photo1.png'),
					text:'蜘蛛侠阿！！！蜘蛛侠阿！！蜘蛛侠阿！！蜘蛛侠阿！！蜘蛛侠阿！！蜘蛛侠阿！！'
				},{
					day:'19',
					month:'4月',
					psrc:require('@/assets/images/order.jpg'),
					text:'good'
				},{
					day:'11',
					month:'3月',
					psrc:require('@/assets/images/food.jpg'),
					text:'好吃！！'
				},{
					day:'10',
					month:'12月',
					psrc:require('@/assets/images/tofo.jpg'),
					text:'嘿嘿'
				}],
				scrollTop: ''
			}
		},
		watch: {
			scrollTop: function(newVal,oldVal) {
				if(newVal>300) {
					this.$refs.head.ifChangColor = true
					this.$refs.head.tColor = true
					this.wm = '相册'
				}else {
					this.$refs.head.ifChangColor = false
					this.$refs.head.tColor = false
					this.wm = ''
				}
			}
		},
		methods:{
			handleScroll () {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				console.log(this.scrollTop)
			},
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		}
	}
</script>

<style lang="less" scoped>
	.wrapcontent{
		position: relative;
		width: 100%;
		min-height: 100vh;
		background-color:white;
	}
	.photobg{
		width: 100%;
		height: 3rem;
		margin-bottom: .8rem;
	}
	.userinfo{
		position: absolute;
		top: 2.6rem;
		right: .1rem;
		p{
			float: right;
			color: white;
			margin-right: .2rem;
			line-height: .5rem;
			vertical-align: middle;
		}
		.imgbox{
			width: .62rem;
			height: .62rem;
			float: right;
			border: .01rem solid #999;
			vertical-align: middle;
			margin-bottom: .1rem;
			img{
				width: .6rem;
				height: .6rem;
				border: .02rem solid white;
			}
		}
		span{
			display: block;
			color: #999;
			text-align: right;
		}
	}
	.photoitem{
		padding: 0 .1rem;
		margin-bottom: .2rem;
		p{
			font-size: .24rem;
			font-weight: bold;
			width: .6rem;
			margin-right: .1rem;
			color: #000;
			float: left;
			i{
				font-size: .14rem;
				font-style: normal;
			}
		}
		img{
			width: .7rem;
			height: .7rem;
			float: left;
			margin-right: .04rem;
		}
		.text{
			color: #000;
			float: left;
			overflow: hidden;
			max-height: .6rem;
			max-width: 1.7rem;
			white-space:nowrap;
			text-overflow:ellipsis;
		}
	}
	.clear{
		clear: both;
	}
</style>