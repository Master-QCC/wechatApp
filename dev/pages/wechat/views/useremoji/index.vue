<template>
  <div class="useremoji">
  	<div class="emojihead">
			<div class="top">
				<router-link tag="div" :to="`/useremoji`" class="jxbq tbq">{{etitleone}}</router-link>
				<router-link tag="div" :to="`/useremojitwo`" class="gdbq tbq">{{etitletwo}}</router-link>
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
		<div class="wrapemoji">
			<div class="emojitext">{{emojitileone}}</div>
			<div class="emojiitem" ref="item" v-for="(wjone,a) in wemojione" :key="a">
				<img :src="wjone.epic" alt="表情图片">
				<div class="emojiname">
					<p class="ename">{{wjone.name}}</p>
					<p class="edescribe">{{wjone.describe}}</p>
				</div>
				<button ref="btnbox" @click="btndown(wjone,a)" v-text="wjone.btntext" :class="{changedownload:wjone.downed}" type="success" ghost></button>
			</div>
		</div>
		<div class="wrapemoji">
			<div class="emojitext">{{emojitiletwo}}</div>
			<div class="emojiitem" ref="item" v-for="(wjtwo,b) in wemojitwo" :key="b">
				<img :src="wjtwo.epic" alt="表情图片">
				<div class="emojiname">
					<p class="ename">{{wjtwo.name}}</p>
					<p class="edescribe">{{wjtwo.describe}}</p>
				</div>
				<button ref="btnboxtwo" @click="btndowntwo(wjtwo,b)" v-text="wjtwo.btntext" :class="{changedownload:wjtwo.downed}" type="success" ghost></button>
			</div>
		</div>
  </div>
</template>

<script>
	import {Icon,Input} from 'iview'
	
	export default{
		name: 'useremoji',
		components: {
				Icon,
	      Input
	    },
		data(){
			return{
				etitleone:"精选表情",
				etitletwo:"更多表情",
				mark:0,
				timer: null,
				emojitileone:'推荐表情',
				emojitiletwo:'更多精选',
				pics:[{
					imgurl:require('@/assets/images/emojibanner1.png')
				},{
					imgurl:require('@/assets/images/emojibanner2.png')
				},{
					imgurl:require('@/assets/images/emojibanner3.png')
				},{
					imgurl:require('@/assets/images/emojibanner4.png')
				}],
				wemojione:[{
					epic: require('@/assets/images/emojipic1.png'),
					name: "气泡狗日常篇",
					btntext:'下载',
					describe:"变得更可爱啦！"
				},
				{
					epic: require('@/assets/images/emojipic2.png'),
					name: "抱抱情侣篇",
					btntext:'下载',
					describe:"抱抱亲亲举举举不动"
				},
				{
					epic: require('@/assets/images/emojipic3.png'),
					name: "三团",
					btntext:'下载',
					describe:"带我回家"
				}],
				wemojitwo:[{
					epic: require('@/assets/images/emojipic4.png'),
					name: "蘑菇头夏思",
					btntext:'下载',
					describe:"让蘑菇头来凉透你的心"
				},
				{
					epic: require('@/assets/images/emojipic5.png'),
					name: "不二呆第三弹",
					btntext:'下载',
					describe:"嘿朋友过来确认下眼神"
				},
				{
					epic: require('@/assets/images/emojipic6.png'),
					name: "baby猪第二弹",
					btntext:'下载',
					describe:"粉嫩的小可爱"
				},
				{
					epic: require('@/assets/images/emojipic2.png'),
					name: "抱抱情侣篇",
					btntext:'下载',
					describe:"抱抱亲亲举举举不动"
				},
				{
					epic: require('@/assets/images/emojipic4.png'),
					name: "蘑菇头夏思",
					btntext:'下载',
					describe:"让蘑菇头来凉透你的心"
				},
				{
					epic: require('@/assets/images/emojipic5.png'),
					name: "不二呆第三弹",
					btntext:'下载',
					describe:"嘿朋友过来确认下眼神"
				},
				{
					epic: require('@/assets/images/emojipic6.png'),
					name: "baby猪第二弹",
					btntext:'下载',
					describe:"粉嫩的小可爱"
				},
				{
					epic: require('@/assets/images/emojipic2.png'),
					name: "抱抱情侣篇",
					btntext:'下载',
					describe:"抱抱亲亲举举举不动"
				},
				{
					epic: require('@/assets/images/emojipic4.png'),
					name: "蘑菇头夏思",
					btntext:'下载',
					describe:"让蘑菇头来凉透你的心"
				},
				{
					epic: require('@/assets/images/emojipic5.png'),
					name: "不二呆第三弹",
					btntext:'下载',
					describe:"嘿朋友过来确认下眼神"
				},
				{
					epic: require('@/assets/images/emojipic6.png'),
					name: "baby猪第二弹",
					btntext:'下载',
					describe:"粉嫩的小可爱"
				},
				{
					epic: require('@/assets/images/emojipic2.png'),
					name: "抱抱情侣篇",
					btntext:'下载',
					describe:"抱抱亲亲举举举不动"
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
			},
			btndown(item,index){
					if(typeof item.downed == 'undefined'){
					this.$set(item,'downed',true)
				}else{
					return item
				}
				this.$refs.btnbox[index].innerText = "已下载"
			},
			btndowntwo(item,index){
				if(typeof item.downed == 'undefined'){
					this.$set(item,'downed',true)
				}else{
					return item
				}
				this.$refs.btnboxtwo[index].innerText = "已下载"
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
		button{
			border: .01rem solid #52A936;
			background-color: white;
			padding: .02rem .14rem;
			color: #52A936;
			border-radius: .04rem;
		}
		.changedownload{
			border: .01rem solid #ddd;
			color: #ddd;
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