<template>
  <div>
    <router-view v-if="$store.state.ready" />
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
  mounted() {
    this.$store.commit("setReady", true);
    if (!this.$store.state.token) {
      this.seConnecter();
    } else {
      this.$api
        .get(`members/${this.$store.state.member.id}/signedin`)
        .then(this.demarrer)
        .catch(this.seConnecter);
    }
  },
  methods: {
    seConnecter() {
      this.$store.commit("setToken", false);
      this.$router.push("/Login");
      this.ready();
    },
    ready() {
      this.$store.commit("setReady", true);
    },
    demarrer() {
      this.$api.get("members").then((response) => {
        this.$store.commit("setMembers", response.data);
        this.ready();
      });
    },
  },
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
  background-color: #d5d5d8;
  .chargement {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    button {
      background-color: transparent;
    }
  }
}
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Alegreya+Sans:wght@300&family=Cormorant+Garamond:wght@300;600&family=Lora:wght@500&family=Old+Standard+TT&family=Pacifico&family=Poppins&family=Roboto+Mono:wght@500&family=Roboto:wght@300;400&family=Space+Mono&display=swap');
</style>
