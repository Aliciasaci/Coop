<template>
      <router-view/>
</template>
<script>
export default{
  mounted(){
    this.$api.get('ping').then();
    if(!this.$store.state.token){
      this.$router.push('login');
    }
    this.$api.get('members').then(response =>{
      this.$store.commit('members', response.data);
    })
  }
}
</script>
<style lang="scss">
html,body{
  height : 100%;
  background-color : #AEB6BF;
  
}
</style>
