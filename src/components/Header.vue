<template>
  <!-- Start header section -->
	<header id="aa-header">
		<app-header-top/>
		<app-header-bottom/>
  	</header>
  <!-- / header section -->
</template>

<script>
	import HeaderTop from './header/HeaderTop.vue';
	import HeaderBottom from './header/HeaderBottom.vue';

	export default {
		components:{
			appHeaderTop: HeaderTop,
			appHeaderBottom: HeaderBottom
		}
	};

</script>
