<template>
  <div class="useremoji">
  	<div class="emojihead">
			<div class="top">
				<router-link tag="div" :to="`/useremoji`" class="jxbq tbq">{{jxbq}}</router-link>
				<router-link tag="div" :to="`/useremojitwo`" class="gdbq tbq">{{gdbq}}</router-link>
			</div>
			<router-link class="backbtn" tag="div" :to="`/user`">
				<Icon class="iback" type="chevron-left"></Icon>我
			</router-link>
			<router-link tag="div" class="plus" :to="`/useremojisetting`">
				<Icon class="icon" type="gear-a"></Icon>
			</router-link>
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
		<div class="emojibox">
			<div class="emojitext">
				<p>{{eheadtext1}}</p>
				<p>{{eheadtext2}}</p><Icon class="icon" type="chevron-right"></Icon>
			</div>
			<div class="emojilist">
				<div class="emojiitem" v-for="(emoji,index) in emojis" :key="index">
					<div class="emoji">
						<img :src="emoji.url" alt="表情图片">
					</div>
					<p>{{emoji.text}}</p>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
	import {Icon,Input} from 'iview'
	
	export default{
		name: 'useremojitwo',
		components: {
				Icon,
	      Input
	    },
		data(){
			return{
				jxbq:"精选表情",
				gdbq:"更多表情",
				eheadtext1:'热门排行',
				eheadtext2:'新品推荐',
				mark:0,
				timer: null,
				pics:[{
					imgurl:require('@/assets/images/emojibanner1.png')
				},{
					imgurl:require('@/assets/images/emojibanner2.png')
				},{
					imgurl:require('@/assets/images/emojibanner3.png')
				},{
					imgurl:require('@/assets/images/emojibanner4.png')
				}],
				emojis:[{
					url:require('@/assets/images/emojipic1.png'),
					text:'蜜桃猫5'
				},{
					url:require('@/assets/images/emojipic2.png'),
					text:'建军节快乐'
				},{
					url:require('@/assets/images/emojipic3.png'),
					text:'二果叔'
				},{
					url:require('@/assets/images/emojipic4.png'),
					text:'兔小只3'
				},{
					url:require('@/assets/images/emojipic5.png'),
					text:'蜜桃猫5'
				},{
					url:require('@/assets/images/emojipic6.png'),
					text:'建军节快乐'
				},{
					url:require('@/assets/images/emojipic3.png'),
					text:'二果叔'
				},{
					url:require('@/assets/images/emojipic4.png'),
					text:'兔小只3'
				},{
					url:require('@/assets/images/emojipic1.png'),
					text:'蜜桃猫5'
				},{
					url:require('@/assets/images/emojipic2.png'),
					text:'建军节快乐'
				},{
					url:require('@/assets/images/emojipic3.png'),
					text:'二果叔'
				},{
					url:require('@/assets/images/emojipic4.png'),
					text:'兔小只3'
				},{
					url:require('@/assets/images/emojipic5.png'),
					text:'蜜桃猫5'
				},{
					url:require('@/assets/images/emojipic6.png'),
					text:'建军节快乐'
				},{
					url:require('@/assets/images/emojipic3.png'),
					text:'二果叔'
				},{
					url:require('@/assets/images/emojipic4.png'),
					text:'兔小只3'
				},{
					url:require('@/assets/images/emojipic1.png'),
					text:'蜜桃猫5'
				},{
					url:require('@/assets/images/emojipic2.png'),
					text:'建军节快乐'
				},{
					url:require('@/assets/images/emojipic3.png'),
					text:'二果叔'
				},{
					url:require('@/assets/images/emojipic4.png'),
					text:'兔小只3'
				},{
					url:require('@/assets/images/emojipic5.png'),
					text:'蜜桃猫5'
				},{
					url:require('@/assets/images/emojipic6.png'),
					text:'建军节快乐'
				},{
					url:require('@/assets/images/emojipic3.png'),
					text:'二果叔'
				},{
					url:require('@/assets/images/emojipic4.png'),
					text:'兔小只3'
				}]
			}
		},
		methods:{
			autoplay(){
				this.mark++
				if(this.mark === this.pics.length){
					this.mark = 0
					return
				}
			},
			play(){
				setInterval(this.autoplay,2500)
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
			.gdbq{
				background-color: white;
				color: #49494B;
			} 
			.jxbq{
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
	.emojibox{
		padding: .1rem;
		.emojitext{
			display: flex;
			p:first-child{
				flex: 1;
				font-size: .16rem;
				line-height: 100%;
			}
			p:last-child{
				font-size: .12rem;
				line-height: 100%;
			}
			.icon{
				margin-left:.1rem;
				line-height: 100%;
			}
		}
		.emojilist{
			width:100%;
			display: flex;
			flex-wrap: wrap;
			justify-content:space-around;
			.emojiitem{
				width: 29%;
				padding: .08rem;
				.emoji{
					border: .01rem solid #ddd;
					border-radius: .1rem;
					padding: .08rem;
				}
				p{
					text-align: center;
				}
			}
		}
	}
</style>