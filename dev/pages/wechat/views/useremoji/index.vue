<template>
  <div class="useremoji">
  	<div class="emojihead">
			<div class="top">
			</div>
			<router-link :to="`/user`">
			<div class="backbtn"><Icon class="iback" type="chevron-left"></Icon>我</div>
			</router-link>
			<div class="plus">
				<Icon class="icon" type="gear-a"></Icon>
			</div>
		</div>
  	<div class="search">
  		<Input class="sinput" placeholder="搜索"></Input>
  	</div>
  	<div ref="bannerbox" class="banner">
			<img v-for="pic in pics" :src="pic.imgurl" alt="轮播图" :key="pic.id">
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
			width(){
			 this.$refs.bannerbox.style.width = this.pics.length * this.$el.clientWidth + 'px'
			console.log(this.pics.length * this.$el.clientWidth + 'px',999)
			}
		},
		mounted(){
			this.width()
		}
	}
</script>

<style lang="less" scoped>
.emojihead {
		position: fixed;
		top: 0;
		width: 100%;
		height: 0.8rem;
		background-color: #49494B;
		padding: 0.1rem 0.2rem 0.2rem 0.2rem;
		z-index: 99;
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
			float: left;
			.iback{
				margin-right: 0.02rem;
			}
		}
	}

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
	.banner{
		position: relative;
    height: auto;
    top: 0.8rem;
		margin-bottom: 0.66rem;
		img{
			width: 100vw;
			height: auto;
			float: left;
		}
	}
	.banner::after{
		clear: both;
		content: "";
		visibility: hidden;
		height: 0;
		display: block;
		zoom: 1;
	}
</style>