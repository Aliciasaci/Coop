<template>
  <div>
      <router-view v-if="$store.state.ready"/>
          <template v-else>
              <div class="chargement has-text-light">
                <p>Chargement, veuillez patienter</p>
                <button class="button is-loading is-dark"></button>
              </div>
          </template>
  </div>
</template>
<script>
export default {
  mounted(){
    this.$store.commit("setReady",true);
    if(!this.$store.state.token){
      this.seConnecter();
    }else{
      this.$api
      .get(`members/${this.$store.state.member.id}/signedin`)
      .then(this.demarrer)
      .catch(this.seConnecter);
    }
  },
  methods : {
    seConnecter(){
      this.$store.commit("setToken",false);
      this.$router.push("/Login"); 
      this.ready();
    },
    ready(){
      this.$store.commit("setReady",true);
    },
    demarrer(){
    this.$api.get("members").then((response)=>{
      console.log(response.data);
      this.$store.commit("setMembers",response.data);
      this.ready();
     });
    }
  }
}  
</script>
<style lang="scss">
html,body{
  height : 100%;
  background-color : #E6E6EA;
  .chargement{
    position : fixed;
    left : 50%;
    top : 50%;
    transform : translate(-50%,-50%);
    text-align: center;
    button{
      background-color : transparent;
    }
  }
}
</style>






