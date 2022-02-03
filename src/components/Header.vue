<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <router-link class="navbar-item" to="/"><b>COOP</b></router-link>
        </a>
      </div>

      <div class="navbar-menu ">
        <div class="navbar-start ">
          <router-link class="navbar-item" to="/"
            >Mes conversations</router-link
          >
          <router-link class="navbar-item" to="/createConversation"
            >Nouvelle conversation</router-link
          >
          <router-link class="navbar-item" to="/Members">Membres</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="navbar-item">
                <p class="header-item">
                  connecté en tant que
                  <b class="header-item"> {{ $store.state.member.fullname }}</b>
                </p>
              </div>
              <div class="buttons">
                <router-link class="navbar-item button is-warning" to="/logOut"
                  >Déconnexion</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  background-color: #eae0cc;
}
.navbar-item {
  color: rgb(53, 58, 59);
}
</style>
