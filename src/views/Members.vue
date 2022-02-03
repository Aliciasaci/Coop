<template>
  <section class="hero is-fullheight">
    <Header/>
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-7-tablet is-6-desktop is-5-widescreen">
              <h4 class="title is-4 has-text-centered">Liste des membres</h4>
                 <template v-for="member in $store.state.members">
                   <router-link class="card box" :to="{name:'Member', params :{idMember: member.id}}" :key="member.id">
                    <div class="card-content">
                        <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                            <img :src="avatar(member)" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                              <p class="title is-4">{{member.fullname}}</p>
                              <p class="subtitle is-6">{{member.email}}</p>
                            </div>
                        </div>
                        </div>
                    </div>                          
                  </router-link>
                </template>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>