<template>
  <section class="hero is-fullheight">
    <Header />
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-12-tablet is-11-desktop is-10-widescreen">
            <h4 class="title is-4 has-text-centered">Modifier la conversation</h4>
            <form class="box" @submit.prevent="editConversation">
              <div class="field">
                <label class="label">Sujet</label>
                <div class="control">
                  <input class="input" v-model="editedConversation.topic"/>
                </div>
              </div>
              <div class="field">
                <label class="label">Label</label>
                <div class="control">
                  <input class="input" v-model="editedConversation.label" />
                </div>
              </div>
              <div class="buttons">
                <button class="button is-info is-outlined">Modifier</button>
                <router-link class="button is-outlined" to="/"
                  >Annuler</router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
        idConversation : this.$route.params.id,
      editedConversation: {
        label: "",
        topic: "",
      },
    };
  },
  mounted(){
      //Je récupère le label et le sujet avant modification pour les afficher dans le input
      this.$api.get(`channels/${this.idConversation}`).then((response) => {
          this.editedConversation.label = response.data.label;
          this.editedConversation.topic = response.data.topic;
      })
  },
  methods: {
      //Si aucune modification n'est faite sur le sujet et label, leurs ancienne valeurs restent ainsi.
    editConversation() {
      this.$api
        .put(`channels/${this.idConversation}`,this.editedConversation)
        .then(() => {
        this.$router.push('/');
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
};
</script>
<style scoped></style>
