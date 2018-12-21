<template>
	<div class="container">
		<cart :cart="this.$store.getters.getCart"></cart>
	</div>
</template>

<script>
import Cart from './Cart.vue';

export default{
	components:{'cart':Cart},
}

</script>