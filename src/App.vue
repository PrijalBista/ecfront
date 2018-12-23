<template>
    <div id="app">
        <app-header/>
        <app-menu/>
        <router-view></router-view>
        <app-footer/>
        <app-quick-view/>
    </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import QuickView from './components/QuickView.vue'

export default {
  name: 'app',
  components:{
    appMenu: Menu,
    appHeader: Header,
	appFooter: Footer,
    appQuickView: QuickView
  },
};
</script>
