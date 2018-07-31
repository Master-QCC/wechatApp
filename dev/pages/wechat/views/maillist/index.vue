<template>
  <div class="app">
  	<Qchead :icontype='it' :wechatmessage='wm'></Qchead>
		<div ref="fixbox" class="fixedword" :class="display? 'show' : 'hide'">{{fixword}}</div>
  	<div class="search" ref='search'>
  		<Input class="sinput" icon="mic-a" placeholder="搜索"></Input>
  	</div>
  	<div class="wrapcontent">
	  	<div ref='defaultinfo' class="defaultinfo" v-for="(def,index) in defs" :key="index">
			<div class="listbox">
				<img :src="def.src" alt="图标">
				<p>{{def.word}}</p>
			</div>
		</div>
		<div ref='friendbox' class="wrapfriend" v-for="(wfriend,key,index) in wfriends" :key="index">
			<div ref='fnumbox' class="fnum">{{key}}</div>
			<div v-for="(value,index) in wfriend" :key="index">
				<div class="friends">
					<div class="listbox">
						<img :src="value.fpic" alt="头像">
						<p>{{value.fname}}</p>
						<div class="clear"></div>
					</div>	
				</div>
			</div>
		</div>
		<div class="letterlist">
			<ul>
				<li><Icon type="ios-search"></Icon></li>
				<li ref="words" @click="top(index)" :class="{ green:index == current}" v-for="(letter,index) in letters" :key="index">{{letter.name}}</li>
			</ul>
		</div>
  	</div>
  	<Qcfooter></Qcfooter>
  </div>
</template>

<script>
	import {Icon,Input} from 'iview'
	import Qcfooter from '@/components/qc/qcfooter'
	import Qchead from '@/components/qc/qchead'
	import list from '@/mockData/maillist.js'

	export default{
		name: 'maillist',
		components: {
	      Qcfooter,
	      Qchead,
	      Icon,
	      Input
	    },
		data(){
			return{
				wm:'通讯录',
				it:'person-add',
				current:-1,
				display:true,
				wfriends:list,
				fixword:'',
				scrollTop: '',
				defs:[
				{
					src:require('@/assets/images/default-icon1.png'),
					word:'新的朋友'
				},
				{
					src:require('@/assets/images/default-icon2.png'),
					word:'群聊'
				},
				{
					src:require('@/assets/images/default-icon3.png'),
					word:'标签'
				},
				{
					src:require('@/assets/images/default-icon4.png'),
					word:'公众号'
				}
				],
				letters:[
					{name:'A'},{name:'B'},{name:'C'},{name:'D'},
					{name:'E'},{name:'F'},{name:'G'},{name:'H'},
					{name:'I'},{name:'J'},{name:'K'},{name:'L'},
					{name:'M'},{name:'N'},{name:'O'},{name:'P'},
					{name:'Q'},{name:'R'},{name:'S'},{name:'T'},
					{name:'U'},{name:'V'},{name:'W'},{name:'X'},
					{name:'Y'},{name:'Z'},{name:'#'}
				]
			}
		},
		watch: {
			locate(value) {
				return value
			},
			scrollTop: function(newValue,oldValue) {
				if(newValue >= this.$refs.friendbox[0].offsetTop + 42 && newValue < this.$refs.friendbox[0].offsetTop + 42 + this.$refs.friendbox[0].offsetHeight) {
					this.$refs.fixbox.display = true
					this.fixword = this.$refs.fnumbox[0].innerText
				}
				else if(newValue >= this.$refs.friendbox[1].offsetTop + 42 && newValue < this.$refs.friendbox[1].offsetTop + 42 + this.$refs.friendbox[1].offsetHeight) {
					this.$refs.fixbox.display = true
					this.fixword = this.$refs.fnumbox[1].innerText
				}
				else if(newValue >= this.$refs.friendbox[2].offsetTop + 42 && newValue < this.$refs.friendbox[2].offsetTop + 42 + this.$refs.friendbox[2].offsetHeight) {
					this.$refs.fixbox.display = true
					this.fixword = this.$refs.fnumbox[2].innerText
				}
				else if(newValue >= this.$refs.friendbox[3].offsetTop + 42 && newValue < this.$refs.friendbox[3].offsetTop + 42 + this.$refs.friendbox[3].offsetHeight) {
					this.$refs.fixbox.display = true
					this.fixword = this.$refs.fnumbox[3].innerText
				}else{
					this.$refs.fixbox.display = false
					this.fixword = ""
				}
				console.log(this.$refs.fnumbox[0].innerText,5555)
				console.log(oldValue,"oldddddd")
				console.log(newValue,"newwwwww")
			}
		},
		methods:{
			top(val){
				this.current = val
				// this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				document.documentElement.scrollTop = this.$refs.friendbox[val].offsetTop + 42
				// console.log(document.documentElement.scrollTop,666)
			},
			handleScroll () {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				// console.log(this.scrollTop,121212)
			},
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		}
	}
</script>

<style lang="less" scoped>
	.green{
		background-color: #52A936;
		color: white;
	}
	.fixedword{
		position: fixed;
		top: .8rem;
		width: 100%;
		z-index: 100;
		padding-left: .1rem;
		background-color: #EFEEF4;
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
	.wrapcontent{
		position: relative;
		width: 100%;
		height: auto;
		top: 0.8rem;
		margin-bottom: 0.66rem;
	}
	.defaultinfo{
		background-color: white;
		width: 100%;
		height: .5rem;
		padding-left: 0.1rem;
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
		img{
			width:0.3rem;
			height: 0.3rem;
			float: left;
    		margin-right: 0.1rem;
		}
		p{
			line-height: 0.3rem;
			vertical-align:middle;
		}
	}
	.friends{
		padding-left: 0.1rem;
		width: 100%;
		border-bottom: 1px solid #ddd;
	}
	.fnum{
		padding-left: .1rem;
		background-color: #EFEEF4;
	}
	.letterlist{
		position: fixed;
		top: 1.4rem;
		right: 0;
		z-index: 99;
		ul{
			li{
				list-style: none;
				width: .15rem;
				height: .15rem;
				text-align: center;
				font-size: .1rem;
				border-radius: 100%;
			}
		}
	}
	.clear{
		clear:both;
	}
	.show{
		display: block;
	}
	.hide{
		display: none;
	}
</style>