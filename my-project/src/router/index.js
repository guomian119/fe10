import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Work from '@/components/Work'
import Stark from '@/components/Stark'

Vue.use(Router)
const UserProfile = {template:`<div> 我是profile组件 </div>`};
const UserPosts = {template:`<div> 我是posts组件 </div>`};
const BLog = {template:`<div> 我是Blog组件 </div>`};
const Info = {template:`<div> 我是Info组件 </div>`};
const About = {template:`<div> 我是About组件 <router-view></router-view> </div>`};
const User = {
    template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}

export default new Router({
    // mode: 'history',
    mode: 'hash',
    linkActiveClass:'shudong',
    routes: [{
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/work',
            name: 'Work',
            component: Work
        },
        {
            path: '/stark',
            name: 'stark',
            component: Stark
        },
        {
            path: '/user/:id', component: User,
            children: [{
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'profile',
                component: UserProfile
                },
                {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'posts',
                component: UserPosts
                }
            ]
        },
        {
            path:'/about',
            component:About,
            children:[
                {
                    path:'',
                    name:'blog',
                    component:Blog
                },
                {
                    path:'/info',
                    name:'info',
                    component:Info
                }
            ]
        }
    ]
})