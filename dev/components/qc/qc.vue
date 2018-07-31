<template>
	<div class="qccom">
		<ul>
			<li v-for="(site,index) in sites" :key="index" @click="textbox(index)">{{site.name}}</li>
		</ul>
		<div class="textbox">{{textcontent}}</div>
		<span>{{child}}</span>
	</div>
</template>

<script>
	export default {
		name: 'qc',
		props: ['childMsg'],
	    data(){
	      return{
	      	sites:[
	      		{ name: '1111' },
     	 		{ name: '2222' },
     	 		{ name: '3333' }
	      	],
	      	textcontent:'',
	      	child:this.childMsg+'hello'
	      }
	    },
	    methods:{
	    	textbox: function(index){
//	    		var li = document.getElementsByTagName('li');
//	    		var textbox = document.getElementsByClassName("textbox");
//	    		var num = this.li[index + 1];
					index+=1
	    			this.textcontent = "当前点击了第" + index +"个li";
				
			}
	    },
	    watch:{
			'textcontent': function(val,oldval){
				console.log(val,oldval);
			}
		}
    }
</script>

<style lang="less" scoped>
	.qccom{
		width: 100%;
		height: 0.5rem;
		ul{
			display: flex;
	    	justify-content: space-between;
	    	flex-wrap:wrap;
			li{
				list-style: none;
				text-align: center;
				width: 32%;
				color: white;
				height: 0.3rem;
				line-height: 0.3rem;
				background-color: #417505;
				border-radius: 0.2rem;
			}
		}
		.textbox{
			width: 100%;
			height: 0.2rem;
			line-height: 0.2rem;
			text-align: center;
			color:white;
		}
	}
</style>