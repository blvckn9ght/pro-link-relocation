<template>
  <div>
    <Nav/>
    <router-view v-slot="{Component}"> 
	  	<component :is="Component"/>
	</router-view>

  </div>
</template>

<script>
import Nav from "./components/Nav.vue"
export default {
  setup () {
    

    return {}
  },
  components: {
    Nav,
  },
}
</script>

<style lang="scss" scoped>

</style>