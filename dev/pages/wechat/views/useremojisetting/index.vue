<template>
  <div class="useremojisetting">
    <div class="emojihead">
			<div class="top">
				{{headtitle}}
			</div>
			<div class="backbtn" @click="click">
				<Icon class="iback" type="chevron-left"></Icon>我
			</div>
			<div class="plus">
				{{text2}}
			</div>
		</div>

    <div class="wrapcontent">
			<div class="chatemoji">{{chatemoji}}</div>
			<div ref="emojibox" class="emojiinfo" :class="display? 'show' : 'hide'" v-for="(emoji,index) in emojis" :key="index">
				<div class="emojiinner">
					<img :src="emoji.url" alt="表情图片">
					<p>{{emoji.word}}</p>
					<Button @click="remove(index)" class="deletebtn" type="success" ghost>{{out}}</Button>
				</div>
			</div>
			<div class="btnitem">
				<div class="btninfo" v-for="btn in btns" :key="btn.id">
				<div class="btninner">
					<p>{{btn.text}}</p>
					<Icon class="iback" type="chevron-right"></Icon>
				</div>	
			</div>
			</div>
		</div>
  </div>
</template>

<script>
	import Qchead from '@/components/qc/qchead'
	import {Icon,Button} from 'iview'

	export default{
		name: 'useremojisetting',
		components: {
				Icon,
				Button,
	      Qchead
	    },
		data(){
			return{
				wm:'我的表情',
				ib:'chevron-left',
				text2:'排序',
				out:'移除',
				chatemoji:'聊天面板中的表情',
				headtitle:'我的表情',
				bu:'/useremoji',
				display:true,
				emojis:[{
					url:require('@/assets/images/emojipic1.png'),
					word:'小B'
				},{
					url:require('@/assets/images/emojipic2.png'),
					word:'班戟'
				},{
					url:require('@/assets/images/emojipic3.png'),
					word:'抱抱5'
				},{
					url:require('@/assets/images/emojipic4.png'),
					word:'小刘鸭'
				},{
					url:require('@/assets/images/emojipic5.png'),
					word:'小肥橘'
				},{
					url:require('@/assets/images/emojipic6.png'),
					word:'小黄人'
				},{
					url:require('@/assets/images/emojipic1.png'),
					word:'兔斯基'
				}],
				btns:[{
					text:'添加的表情'
				},{
					text:'表情购买记录'
				}]
			}
		},
		methods:{
			click(){
				this.$router.go(-1)
			},
			remove(val){
				this.emojis.splice(val,1)
			}
		}
	}
</script>

<style lang="less" scoped>
	.useremojisetting{
		position:relative;
		top: .8rem;
		max-width: 100vw;
		overflow: hidden;
	}
	.emojihead {
		position: fixed;
		top: 0;
		width: 100%;
		height: 0.8rem;
		background-color: #49494B;
		padding: .1rem .2rem .2rem .2rem;
		z-index: 99;
		.top{
			position: absolute;
			bottom: .1rem;
			left: 50%;
			margin-left: -.5rem;
			font-size: .18rem;
			width: 1rem;
			text-align: center;
			color: white;
		}
		.title {
			position: absolute;
			bottom: .1rem;
			width: 2rem;
			left: 50%;
			margin-left: -1rem;
			text-align: center;
			font-size: .18rem;
			color: white;
		}
		.plus {
			position: absolute;
			bottom: .1rem;
			right: .1rem;
			color: white;
		}
		.backbtn{
			position: absolute;
			bottom: .1rem;
			color: white;
			left: .1rem;
			.iback{
				margin-right: 0.02rem;
			}
		}
	}
	.wrapcontent{
		position: relative;
		width: 100%;
		min-height: 100vh;
		background-color: #EFEEF4;
	}
	.chatemoji{
		padding: .1rem;
		color: #495060;
	}
	.emojiinfo{
		background-color: white;
		padding-left: .1rem;
		.emojiinner{
			padding: .05rem .1rem .05rem 0;
			display: flex;
			border-bottom: .01rem solid #ddd;
			align-items: center;
			img{
				width: .45rem;
				height: .45rem;
				margin-right: .1rem;
			}
			p{
				flex: 1;
			}
			.deletebtn{
				padding: .05rem .1rem;
				color: #495060;
				border: .01rem solid #ddd;
				background-color: #EFEEF4;
			}
		}
	}
	.btnitem{
		margin-top: .2rem;
	}
	.btninfo{
		background-color: white;
		width: 100%;
		height: auto;
		padding-left: .1rem;
		.btninner{
			display: flex;
			padding: .1rem .1rem .1rem 0;
			border-bottom: .01rem solid #ddd;
			p{
				flex: 1;
			}
		}
	} 
	.show{
		display: block;
	}
	.hide{
		display: none;
	}
</style>