<template>
  <div class="useremoji">
  	<div class="emojihead">
			<div class="top">
				<router-link tag="div" :to="`/useremoji`" class="jxbq tbq">{{jxbq}}</router-link>
				<router-link tag="div" :to="`/useremoji2`" class="gdbq tbq">{{gdbq}}</router-link>
			</div>
			<router-link class="backbtn" tag="div" :to="`/user`">
				<Icon class="iback" type="chevron-left"></Icon>我
			</router-link>
			<div class="plus">
				<Icon class="icon" type="gear-a"></Icon>
			</div>
		</div>
  	<div class="search">
  		<Input class="sinput" placeholder="搜索"></Input>
  	</div>
  	<div ref="bannerbox" class="banner">
			<transition-group tag='ul' class="bannerlist" name='image'>
				<li ref="bannerpic" v-for="(pic,index) in pics" v-show='index===mark' :key="index">
					<img :src="pic.imgurl" alt="banner图" >
				</li>
			</transition-group>
		</div>
		<div class="wrapemoji" v-for="(wemoji,key) in wemojis" :key="wemoji.id">
			<div class="emojitext">{{key}}</div>
			<div class="emojiitem" v-for="value in wemoji" :key="value.id">
				<img :src="value.epic" alt="表情图片">
				<div class="emojiname">
					<p class="ename">{{value.name}}</p>
					<p class="edescribe">{{value.describe}}</p>
				</div>
				<Button type="success" ghost>{{download}}</Button>
			</div>
		</div>
  </div>
</template>

<script>
	import {Icon,Input,Button} from 'iview'
	import list from '@/mockData/emojilist.js'
	
	export default{
		name: 'useremoji',
		components: {
				Icon,
				Button,
	      Input
	    },
		data(){
			return{
				jxbq:"精选表情",
				gdbq:"更多表情",
				wemojis:list,
				mark:0,
				timer: null,
				download:"下载",
				pics:[{
					imgurl:require('@/assets/images/emojibanner1.png')
				},{
					imgurl:require('@/assets/images/emojibanner2.png')
				},{
					imgurl:require('@/assets/images/emojibanner3.png')
				},{
					imgurl:require('@/assets/images/emojibanner4.png')
				}]
			}
		},
		methods:{
			autoplay(){
				this.mark++
				if(this.mark === 4){
					this.mark = 0
					return
				}
			},
			play(){
				setInterval(this.autoplay,3000)
			}
		},
		mounted(){
			this.play()
		}
	}
</script>

<style lang="less" scoped>
	.useremoji{
		position:relative;
		top:.8rem;
		max-width: 100vw;
		overflow: hidden;
	}
	.emojihead {
		position: fixed;
		top: 0;
		width: 100%;
		height: 0.8rem;
		background-color: #49494B;
		padding: 0.1rem 0.2rem 0.2rem 0.2rem;
		z-index: 99;
		.top{
			position: absolute;
			bottom: 0.1rem;
			left: 50%;
			margin-left: -.8rem;
			width: 1.6rem;
			display: flex;
			border-radius: .06rem;
			border: .01rem solid white;
			overflow: hidden;
			.tbq{
				width: 50%;
				padding: .05rem .1rem;
				text-align: center;
			}
			.jxbq{
				background-color: white;
				color: #49494B;
			} 
			.gdbq{
				color: white;
				background-color: #49494B;
			} 
		}
		.title {
			position: absolute;
			bottom: 0.1rem;
			width: 2rem;
			left: 50%;
			margin-left: -1rem;
			text-align: center;
			font-size: 0.18rem;
			color: white;
		}
		.plus {
			position: absolute;
			bottom: 0.1rem;
			right: 0.1rem;
			width: 0.24rem;
			height: 0.24rem;
			zoom: 1.2;
			color: white;
		}
		.backbtn{
			position: absolute;
			bottom: 0.1rem;
			color: white;
			left: 0.1rem;
			.iback{
				margin-right: 0.02rem;
			}
		}
	}
	.search{
		width: 100%;
		height: .44rem;
		background-color: #EFEEF4;
		padding: .07rem;
		border-bottom: 1px solid #ddd;
		.sinput{
			border: none;
			border-radius: .08rem;
			height: .3rem;
			width: 100%;
			text-align: center;
		}
	}
	.banner{
		height: 1.5rem;
	}
	.banner::after{
		clear: both;
		content: "";
		visibility: hidden;
		height: 0;
		display: block;
		zoom: 1;
	}
	.bannerlist{
		position: relative;
		width: 100vw;
		left: 0;
		li{
			position: absolute;
			img{
				width: 100vw;
			}
		}
	}
	.bannerlist::after{
		clear: both;
		content: "";
		visibility: hidden;
		height: 0;
		display: block;
		zoom: 1;
	}
	.wrapemoji{
		padding-left: .1rem;
		.emojitext{
			line-height: .5rem;
			height: .5rem;
			font-size: .16rem;
			color: #000;
			border-bottom: .01rem solid #F2F2F2; 
		}
	}
	.emojiitem{
		display: flex;
		padding: .1rem;
		padding-left: 0;
		align-items:center;
		border-bottom: .01rem solid #ddd; 
		img{
			width: .7rem;
			height: .6rem;
			margin-right: .1rem;
		}
		.emojiname{
			flex: 1;
			.ename{
				font-size: .18rem;
				color: #000;
			}
			.edescribe{
				font-size: .14rem;
				color: #8A8A8A;
			}
		}
	}
	.image-enter-active {
		transform: translateX(0);
		transition: all 1s ease;
	}
	.image-leave-active {
		transform: translateX(-100%);
		transition: all 1s ease;
	}
	.image-enter {
		transform: translateX(100%);
	}
	.image-leave {
		transform: translateX(0);
	}
</style>