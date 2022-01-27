<template>
    <section class="hero is-fullheight">
    <Header />
      <div class="hero-body">
        <div class="container">
                <h4 class="title is-4 has-text-centered">Mes conversations</h4>
                  <div class="container">
                    <div class="columns is-centered">
                      <div class="column is-7-tablet is-6-desktop is-5-widescreen">
                          <template v-for="conversation in conversations">
                              <conversation class="box" :key="conversation.id" :conversation="conversation" />
                          </template>
                    </div>
                  </div>
            </div>
         </div>
    </div>
  </section>
</template>
<script>
import Conversation from '../components/Conversation.vue';
import Header from '../components/Header.vue';
export default {
     components: {
        Header,
        Conversation,
    },
  data() {
    return {
      conversations: [],
    };
  },
  mounted() {
    this.$api.get("channels").then((response) => {
      this.conversations = response.data;
      console.log(this.conversations);
    });
  },
};
</script>
<style scoped>
</style>




