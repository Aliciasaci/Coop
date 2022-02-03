import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Conversations',
        component: () =>
            import ('../views/Conversations.vue')
    },
    {
        path: '/SingnIn',
        name: 'SingnIn',
        component: () =>
            import ('../views/SingnIn.vue')
    },
    {
        path: '/Login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/createConversation',
        name: '/createConversation',
        component: () =>
            import ('../views/createConversation.vue')
    },
    {
        path: '/Conversation/:id',
        name: 'Conversation',
        component: () =>
            import ('../views/Conversation.vue')
    },
    {
        path: '/deleteConversation/:id', //changer à idConversation
        name: 'deleteConversation',
        component: () =>
            import ('../views/deleteConversation.vue')
    },
    {
        path: '/logOut',
        name: '/logOut',
        component: () =>
            import ('../views/logOut.vue')
    },
    {
        path: '/Members',
        name: 'Members',
        component: () =>
            import ('../views/Members')
    },
    {
        path: '/Member/:idMember',
        name: 'Member',
        component: () =>
            import ('../views/Member.vue')
    },

]

const router = new VueRouter({
    routes
})

export default router