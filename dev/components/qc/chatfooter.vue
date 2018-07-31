<template>
	<div class="chatfooter">
		<Icon class="icon ifl" type="volume-high"></Icon>
		<Input class="input" v-model='inputmessage'></Input>
		<Icon class="icon ifr imr" type="ios-plus-outline"></Icon>
		<Icon class="icon ifr" type="happy-outline"></Icon>
	</div>
</template>

<script>
	import { Icon,Input } from 'iview'

	export default {
		name: "chatfooter",
		components: {
			Icon,
			Input
		},
		// props: {
		// 	inputmessage: String
		// },
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.chatfooter {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 0.7rem;
		background-color: #E7E5E8;
		padding: 0.1rem;
		z-index: 99;
	}
	.input{
		width: 70%;
	}
	.icon{
		display: block;
		width: 0.24rem;
		height: 0.32rem;
		zoom:2.1;
	}
	.ifl{
		float: left;
		margin-right: 0.1rem;
	}
	.ifr{
		float: right;
	}
	.imr{
		margin-left:0.1rem;
	}
</style>