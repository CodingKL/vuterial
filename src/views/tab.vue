<template>
  <div class="demo-content">
    <h2>tab</h2>
    <mdc-subtitle1>Single line</mdc-Subtitle1>
    <mdc-tab-bar class="demo-tab" @activate="tabIndex= $event.index">
      <mdc-tab active>home</mdc-tab>
      <mdc-tab>Merchandise</mdc-tab>
      <mdc-tab>About us</mdc-tab>
    </mdc-tab-bar>
    <div>selectedIndex:{{tabIndex}}</div>

    <mdc-subtitle1>raised line</mdc-Subtitle1>
    <mdc-tab-bar class="demo-tab">
      <mdc-tab raised active>home</mdc-tab>
      <mdc-tab raised>Merchandise</mdc-tab>
      <mdc-tab raised>About us</mdc-tab>
    </mdc-tab-bar>

    <mdc-subtitle1>icon tab</mdc-Subtitle1>
    <mdc-tab-bar class="demo-tab">
      <mdc-tab icon="access_time" active>recents</mdc-tab>
      <mdc-tab icon="near_me">nearby</mdc-tab>
      <mdc-tab icon="favorites">favorites</mdc-tab>
    </mdc-tab-bar>

    <mdc-subtitle1>stacked tab</mdc-Subtitle1> 
    <mdc-tab-bar class="demo-tab" stacked>
      <mdc-tab icon="access_time" stacked active>recents</mdc-tab>
      <mdc-tab icon="near_me" stacked>nearby</mdc-tab>
      <mdc-tab icon="favorites" stacked>favorites</mdc-tab>
    </mdc-tab-bar>

    <mdc-subtitle1>scroll tab</mdc-Subtitle1>  
    <mdc-tab-bar class="demo-tab">
      <mdc-tab active>tab one</mdc-tab>
      <mdc-tab>tab two</mdc-tab>
      <mdc-tab>tab tree</mdc-tab>
      <mdc-tab>tab 5</mdc-tab>
      <mdc-tab>tab 6</mdc-tab>
      <mdc-tab>tab 7</mdc-tab>
      <mdc-tab>tab 8</mdc-tab>
      <mdc-tab>tab 9</mdc-tab>
      <mdc-tab>tab 10</mdc-tab>
    </mdc-tab-bar>

    <mdc-subtitle1>a tab</mdc-Subtitle1>
    <mdc-tab-bar class="demo-tab">
      <mdc-tab tag="a" href="https://www.npmjs.com/package/vuterial" target="_blank">npm</mdc-tab>
      <mdc-tab tag="a" href="https://github.com/coppieee/vuterial" target="_blank">github</mdc-tab>
      <mdc-tab tag="a" href="https://material.io" target="_blank">material.io</mdc-tab>
    </mdc-tab-bar>

    <mdc-subtitle1>router-link tab</mdc-Subtitle1>
    <mdc-tab-bar class="demo-tab">
      <mdc-tab to="/tab/1">/tab/1</mdc-tab>
      <mdc-tab to="/tab/2">/tab/2</mdc-tab>
      <mdc-tab to="/tab/3">/tab/3</mdc-tab>
    </mdc-tab-bar>
    <mdc-button to="/tab/1">/tab/1</mdc-button>
    <mdc-button to="/tab/2">/tab/2</mdc-button>
    <mdc-button to="/tab/3">/tab/3</mdc-button>
  </div>
</template>
<style scoped>
.demo-content{
  /* display: flex; */
  width: 100%;
  max-width: 900px;
  margin-left: 0;
  margin-right: 0;
  padding: 0 15px;
  /* overflow:auto; */
}
.demo-content-transition {
  width: 100%;
  max-width: 900px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
})
export default class Tab extends Vue {
  tabIndex:number = 0
}
</script>
