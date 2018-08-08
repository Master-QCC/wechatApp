<template>
  <div class="app">
  	<Qchead :icontype='it' :wechatmessage='wm'></Qchead>
		<div ref="fixbox" class="fixedword" :class="display? 'show' : 'hide'">{{fixword}}</div>
  	<div class="search" ref='search'>
  		<Input class="sinput" icon="mic-a" v-on:input="searchresult($event)" placeholder="搜索" v-model='searchmessage'></Input>
  	</div>
		<!-- searchresult-S -->
		<div ref='searchresultbox' class="searchresult">
			<div ref='defaultinfo' class="defaultinfo" v-for="search in searchbox" :key="search.id">
				<div class="listbox">
					<img :src="search.src" alt="图标">
					<p>{{search.word}}</p>
				</div>
			</div>
		</div>
		<!-- searchresult-E -->	
  	<div class="wrapcontent">
	  	<div ref='defaultinfo' class="defaultinfo" v-for="def in defs" :key="def.id">
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
	import searchlist from '@/mockData/searchlist.js'

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
				searchmessage:'',
				display:true,
				wfriends:list,
				fixword:'',
				scrollTop: '',
				searchs:searchlist,
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
				if(newValue < this.$refs.friendbox[0].offsetTop + 42) {
					this.$refs.fixbox.display = false
					this.fixword = ""
					this.$refs.words[0].style.color = "#495060"
					this.$refs.words[0].style.backgroundColor = "transparent"
				}
				if(newValue >= this.$refs.friendbox[0].offsetTop + 42 && newValue < this.$refs.friendbox[0].offsetTop + 42 + this.$refs.friendbox[0].offsetHeight) {
					this.$refs.fixbox.display = true
					this.fixword = this.$refs.fnumbox[0].innerText
					this.$refs.words[0].style.color = "white"
					this.$refs.words[0].style.backgroundColor = "#52A936"
					this.$refs.words[1].style.color = "#495060"
						this.$refs.words[1].style.backgroundColor = "transparent"
				}
				for(let i = 1;i<26;i++){
					if(newValue >= this.$refs.friendbox[i].offsetTop + 42 && newValue < this.$refs.friendbox[i].offsetTop + 42 + this.$refs.friendbox[i].offsetHeight) {
						this.$refs.fixbox.display = true
						this.fixword = this.$refs.fnumbox[i].innerText
						this.$refs.words[i-1].style.color = "#495060"
						this.$refs.words[i-1].style.backgroundColor = "transparent"
						this.$refs.words[i+1].style.color = "#495060"
						this.$refs.words[i+1].style.backgroundColor = "transparent"
						this.$refs.words[i].style.color = "white"
						this.$refs.words[i].style.backgroundColor = "#52A936"
					}
				}
				if(newValue >= this.$refs.friendbox[26].offsetTop + 42 && newValue < this.$refs.friendbox[26].offsetTop + 42 + this.$refs.friendbox[26].offsetHeight) {
					this.$refs.fixbox.display = true
					this.fixword = this.$refs.fnumbox[26].innerText
					this.$refs.words[25].style.color = "#495060"
					this.$refs.words[25].style.backgroundColor = "transparent"
					this.$refs.words[26].style.color = "white"
					this.$refs.words[26].style.backgroundColor = "#52A936"
				}
				// console.log(this.$refs.words[0],333)
			}
		},
		computed: {
			searchbox(){
				var searchmessage = this.searchmessage;
				if(searchmessage){
					return this.searchs.filter(function (searchs){
						return Object.keys(searchs).some(function (key){
							return String(searchs[key]).toUpperCase().indexOf(searchmessage.toUpperCase()) > -1
						})
					})
				}
				return this.searchs;
			}
		},
		methods: {
			top(val){
				for(let i = 1;i<26;i++){
						this.$refs.words[i].style.color = "#495060"
						this.$refs.words[i].style.backgroundColor = "transparent"
				}
				this.current = val
				// this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				document.documentElement.scrollTop = this.$refs.friendbox[val].offsetTop + 42
				// console.log(document.documentElement.scrollTop,666)
			}, 
			handleScroll () {
				this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				// console.log(this.scrollTop,121212)
			},
			searchresult(e){
				if(e == ''||this.searchmessage == ''){
					this.$refs.searchresultbox.style.display = "none"
					return this.searchmessage
				}else{
					this.$refs.searchresultbox.style.display = "block"
				}
			}
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
	.listbox::after{
		clear: both;
		content: "";
		visibility: hidden;
		height: 0;
		display: block;
		zoom: 1;
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
	.show{
		display: block;
	}
	.hide{
		display: none;
	}
	.searchresult{
		display: none;
		min-height: 100vh;
		width: 100%;
		background-color: white;
		z-index: 10;
		position: relative;
    top: 0.8rem;
    margin-bottom: 0.66rem;
	}
</style>