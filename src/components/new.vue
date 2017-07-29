<template>
	<div id="home">
		<ul>
			<li><router-link to='xt'>新闻头条</router-link></li>
			<li><router-link to='gd'>国家大事</router-link></li>
			<li><router-link to='sx'>社会新闻</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{}
</script>
<style scoped>
*{margin:0px;padding:0px;text-decoration:none;}
li,ul{list-style:none;}
li{float:left;margin:20px;}
ul:after{content:'';display:block;clear:both;}
.router-link-active{color:red;font-size:20px;}
</style>