<template>
  <section class="hero is-fullheight">
    <Header />
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-12-tablet is-11-desktop is-10-widescreen">
            <h4 class="title is-4 has-text-centered">Nouvelle conversations</h4>
            <form class="box" @submit.prevent="createConversation">
              <div class="field">
                <label class="label">Sujet</label>
                <div class="control">
                  <input class="input" v-model="conversation.topic" />
                </div>
              </div>
              <div class="field">
                <label class="label">Label</label>
                <div class="control">
                  <input class="input" v-model="conversation.label" />
                </div>
              </div>
              <div class="buttons">
                <button class="button is-info is-outlined">Poster</button>
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
  components: {},
  data() {
    return {
      conversation: {
        label: "",
        topic: "",
      },
    };
  },
  methods: {
    createConversation() {
      this.$api
        .post("channels", this.conversation)
        .then((response) => {
          this.$router.push({
            name: "Conversation",
            params: { id: response.data.id },
          });
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
};
</script>
<style scoped></style>
