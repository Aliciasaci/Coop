<template>
      <div>
            <router-link :to="{name : 'Conversation', params :{id: conversation.id}}">
            <h5 class="title is-5">{{conversation.topic}}</h5>
            <p class="subtitle is-6 tag is-rounded is-warning">{{conversation.label}}</p>
            </router-link>
      </div>                                                            
</template>
<script>
export default {
props : ["conversation"]
}
</script>

<style lang="scss">

</style>

