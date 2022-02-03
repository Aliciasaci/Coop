<template>
  <div>
    <Header />
    <section class="section">
      <h4 class="title is-4 has-text-centered">Détail de conversation</h4>
      <div class="media box" v-if="conversation">
        <div class="media-content">
          <div class="content">
            <p class="title is-4">
              {{ conversation.topic }}
              <span class="tag"> {{ messages.length }} message(s)</span>
            </p>
            <p class="subtitle is-6 tag is-rounded is-warning">
              {{ conversation.label }}
            </p>
            <br />
          </div>
        </div>
        <div class="media-right">
           <button @click="editConversation" class="button button is-success is-small" >Modifier</button>     <button @click="deleteConversation" class="button button is-danger is-small" >Supprimer</button>    
        </div>
      </div>
      <posterMessage :conversation="conversation" />
      <h4 class="title is-4">Liste des messages</h4>
      <template v-for="message in messages">
        <message :message="message" :key="message.id" />
      </template>
    </section>
  </div>
</template>
<script>
import posterMessage from "../components/posterMessage.vue";
import Message from "../components/Message.vue";
export default {
  components: {
    posterMessage,
    Message,
  },
  data() {
    return {
      conversation: false,
      messages: [],
      members: this.$store.state.members,
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.$api.get(`channels/${id}`).then((response) => {
      this.conversation = response.data;
      this.chargerMessage();
    });
    this.$bus.$on("newMessage", (data) => {
      this.chargerMessage();
    });
  },
  methods: {
    chargerMessage() {
      this.$api
        .get(`channels/${this.conversation.id}/posts`)
        .then((response) => {
          this.messages = response.data;
        });
    },
    deleteConversation() {
      if (confirm("êtes-vous sûre de vouloir supprimer la conversation ?")) {
        this.$api
          .delete(`channels/${this.conversation.id}`)
          .then(() => {
             this.$router.push('/');
          })
          .catch((error) => {
            if (error.response.data.message) {
              alert(error.response.data.message);
            }
          });
      }
    },
    // editConversation(){
    //   console.log("ici");
    //    this.$api
    //       .put(`channels/${this.conversation.id}`);
    // }
  },
};
</script>

<style lang="scss"></style>
