<template>
  <div class="qcfooter">
		<ul>
			<li v-for="(site,index) in sites" :key="index" :class="judgeActive(site.url)" @click="routerTo(site.url)" >
				<Icon :type="site.icon" class="icon" />
				<p>{{site.name}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
  import {Icon} from 'iview'
  
  export default {
    name: "qcfooter",
    components: {
      Icon
    },
    data() {
      return {
        sites:[
	      		{ name: '微信',
//	      		  imgurl:require('@/assets/images/footer-icon1.png')
				  icon:"ios-chatbubble",
				  url: '/'
	      		},
     	 		{ name: '通讯录',
     	 		  icon:"ios-personadd",
     	 		  url: '/maillist'
     	 		},
     	 		{ name: '发现',
     	 		  icon:"compass",
     	 		  url: '/find'
     	 		},
     	 		{ name: '我',
     	 		  icon:"person",
     	 		  url: '/user'
     	 		}
	    ]
      }
    },
    methods: {
		routerTo(url) {
        this.$router.push({path: url})
      },
      judgeActive(url) {
        if (this.$route.path === url) {
          return 'active'
        } else {
          return ''
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.qcfooter{
		position: fixed;
  	bottom: 0;
		width: 100%;
		height: 0.66rem;
		border-top: 1px solid #ddd;
		z-index: 99;
		ul{
			display: flex;
	    	justify-content: space-between;
	    	flex-wrap:wrap;
			li{
				list-style: none;
				padding-top: 0.1rem;
				text-align: center;
				width: 25%;
				height: 0.66rem;
				background-color: #F4F4F4;
			}
		}
		.icon{
			display: block;
			width: 0.3rem;
      height: 0.3rem;
      zoom:1.9;
			margin: 0 auto;
		}
		p{
			color: #808080;
			font-size: 0.12rem;
		}
		.active {
    	color: #52A936 !important;
  		}
	}
</style>