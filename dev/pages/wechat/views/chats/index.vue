<template>
    <div class="chats">
        <Qchead :wechatmessage='wm' :icontype='it' :back='out' :iconback='ib' :backurl='bu'></Qchead>
        <div class="chatcontonet">
            <div class="timebox">{{chattime}}</div>
            <div class="textbox">
                <div class="imgbox"><img :src="txurl" alt="头像"></div>
                <div class="text">{{ccontent}}</div>
                <div class="clear"></div>
            </div>
            <div class="textbox2" v-if="seen" v-for="(item,index) in items" :key="index">
                <div class="imgbox"><img :src="item.mytx" alt="头像"></div>
                <div ref="inputtext" class="text">{{item.inputmessage}}</div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="chatfooter">
            <Icon class="icon ifl" type="volume-high"></Icon>
            <Input class="input" v-model="inputmessage" @keyup.enter.native="checkinput($event)"></Input>
            <Icon class="icon ifr imr" type="ios-plus-outline"></Icon>
            <Icon class="icon ifr" type="happy-outline"></Icon>
        </div>
    </div>
</template>

<script>
import { Icon,Input } from 'iview'
import Qchead from '@/components/qc/qchead'
import chatlist from '@/mockData/chat.js'

export default {
    name: 'chats',
    components: {
        Icon,
        Input,
        Qchead
    },
    data(){
        return{
            ib:'chevron-left',
            txurl:'',
            ccontent:'',
            chattime:'',
            wm:'',
            it:'more',
            bu:'/',
            out:'微信',
            seen:false,
            items:[],
            inputmessage:''
        }
    },
    mounted() {
        this.id = this.$route.params.id
        if(this.id == chatlist[this.id-1].id){
            this.txurl = chatlist[this.id-1].txurl
            this.ccontent = chatlist[this.id-1].ccontent
            this.wm = chatlist[this.id-1].nc
            this.chattime = chatlist[this.id-1].ctime
        }
    },
    methods:{
        checkinput(e){
            if(e == ''||this.inputmessage == ''){
                return this.inputmessage
            }else{
                this.seen = true
                // console.log(day,999)
                this.items.push({
                    mytx :require('@/assets/images/tx1.jpg'),
                    inputmessage : this.inputmessage
                })
            }
            this.inputmessage = ''
        }
    }
}
</script>

<style lang="less" scoped>
    .chatcontonet{
        position: relative;
        width: 100%;
        min-height: 100vh;
        top: 0.8rem;
        padding: 0.1rem;
        margin-bottom: 0.7rem;
        background-color: #87CEFA;
    }
    .timebox{
        background-color: rgba(256, 256, 256, 0.7);
        padding: 0.02rem 0.04rem;
        font-size: 0.12rem;
        color:#000;
        text-align: center;
        margin: 0.1rem auto;
        width:fit-content;
        border-radius: 0.04rem;
    }
    .textbox{
        width: 100%;
        margin-bottom: 0.1rem;
        .imgbox{
            float: left;
            width: 0.6rem;
            height: 0.6rem;
            margin-right: 0.11rem;
            img{
                width: 0.6rem;
                height: 0.6rem;
            }
        }
        .text{
            position: relative;
            padding: 0.06rem;
            margin-top: 0.06rem;
            max-width: 60%;
            font-size: 0.16rem;
            float: left;
            background-color: white;
            border-radius: 0.04rem;
        }
        .text::before{
            content:'';
            display: block;
            width: 0;
            height: 0;
            position: absolute;
            left: -0.12rem;
            top: 0.12rem;
            border-left: 0.06rem solid transparent;
            border-right: 0.06rem solid white;
            border-top: 0.06rem solid transparent;
            border-bottom: 0.06rem solid transparent;
        }
    }
    .textbox2{
        width: 100%;
        margin-bottom: 0.1rem;
        .imgbox{
            float: right;
            width: 0.6rem;
            height: 0.6rem;
            margin-left: 0.11rem;
            img{
                width: 0.6rem;
                height: 0.6rem;
            }
        }
        .text{
            position: relative;
            padding: 0.06rem;
            max-width: 60%;
            margin-top: 0.06rem;
            font-size: 0.16rem;
            min-width: 0.2rem;
            min-height: 0.3rem;
            float: right;
            color: black;
            background-color: white;
            border-radius: 0.04rem;
        }
        .text:before{
            content:'';
            display: block;
            width: 0;
            height: 0;
            position: absolute;
            right: -0.12rem;
            top: 0.12rem;
            border-left: 0.06rem solid white;
            border-right: 0.06rem solid transparent;
            border-top: 0.06rem solid transparent;
            border-bottom: 0.06rem solid transparent;
        }
    }
    .clear{
        clear: both;
    }
    .chatfooter {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 0.7rem;
		background-color: #E7E5E8;
		padding: 0.1rem;
        z-index: 99;
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
	}
	
</style>
