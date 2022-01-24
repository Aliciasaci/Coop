<template>
   <div>
        <Header/>
              <section class="section">
                      <h4 class="title is-4 has-text-centered">Détail de conversation</h4>
                        <div class="box" v-if="conversation">
                           <p><b>{{conversation.topic}}</b></p>
                           <p>{{conversation.label}}</p><br/>
                              <router-link  div="box" class="button button is-dark" :to="{name : 'deleteConversation', params :{id:conversation.id}}">Supprimer</router-link>
                        </div>
                        <posterMessage :conversation="conversation"/>
                            <h1 class="title">Liste des messages</h1>
                            <template  v-for="message in messages">
                              <div class="box" :key="message.id">
                              <p>{{message.member_id}}</p>
                              <p><b>{{message.message}}</b></p>
                              <p>{{message.created_at}}</p>
                              <router-link  div="box" class="button button is-dark" :to="{name : 'deleteMessage', params :{id_channel:conversation.id,id:message.id}}">Supprimer message</router-link>
                              </div>
                        </template>
               </section>
     </div>
</template>
<script>
import Header from '../components/Header.vue';
import posterMessage from '../components/posterMessage.vue';
import Message from '../components/Message.vue';
export default {
   components : {
      Header,
      posterMessage,
      Message,
   },
    data(){
       return {
          conversation : false,
          messages : [],
       }
    },
    mounted(){
       let id = this.$route.params.id;
       this.$api.get(`channels/${id}`).then(response => {
         this.conversation = response.data;
          this.chargerMessage();
       })
       this.$bus.$on('newMessage',() => {
          this.chargerMessage();
      }); 
    },
    methods : {  
       chargerMessage(){
         this.$api.get(`channels/${this.conversation.id}/posts`).then(response => {
            this.messages = response.data;
            let member_id = this.messages.member_id;
            console.log(member_id);
         })
      }
   }
}
</script>

<style>

</style>





