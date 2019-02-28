import Vue, { VueConstructor } from 'vue'
import Router, { RouteConfig } from 'vue-router'
import Button from './views/button.vue'
import Card from './views/card.vue'
import Chip from './views/chip.vue'
import Home from './views/home.vue'
import GettingStarted from './views/getting-started.vue'
import ImageList from './views/image-list.vue'
import List from './views/list.vue'
import Tab from './views/tab.vue'
import Typography from './views/typography.vue'
import Ripple from './views/ripple.vue'
import { Component } from '@vue/test-utils'
Vue.use(Router)
interface Config{
  components:[{[key:string]:any},ConfigOption][]
  sort:boolean
}
interface ConfigOption{
  icon?:string
}
const x = [{Home}]
const configs:Config[] = [
  {
    components:[
      [{Home},{}],
      [{'getting-started':GettingStarted},{}],
    ],
    sort:false,
  },
  {
    components:[
      [{Button},{icon:'touch_app'}],
      [{Card},{icon:'crop_din'}],
      [{Chip},{icon:'bookmark'}],
      [{ImageList},{icon:'collections'}],
      [{List},{icon:'list'}],
      [{Tab},{icon:'tab'}],
      [{Typography},{icon:'text_format'}],
      [{Ripple},{icon:'touch_app'}],
    ],
    sort:true,
  },
]
export const routeConfigs:(RouteConfig & ConfigOption)[] =  configs.flatMap(config=>{
  let entries = config.components.map(([pare,option])=>{
    const name = Object.keys(pare)[0]
    const component = pare[name]
    return {
      name:name.toLowerCase(),
      component,
      option,
    }
  })
  // let entries = Object.entries(config.components)
  if(config.sort){
    entries = entries.sort((a,b)=>{
      return a.name > b.name ? 1 : -1
    })
  }
  return entries.map(x=>{
    const name = x.name
    const component = x.component
    const option = x.option
    // const name = key.toLowerCase()
    const config:RouteConfig = {
      path:name ==='home'?'/':`/${name}`,
      name,
      component,
      ...option,
    }
    return config
  })
})
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routeConfigs,
})