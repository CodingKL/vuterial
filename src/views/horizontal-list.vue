<template>
  <div>
    <mdc-headline2>Horizontal list</mdc-headline2>
    <div>横方向にスライドするリスト。Vuterialオリジナル。</div>
    <mdc-subtitle1>item width 30%</mdc-subtitle1>
    <vt-horizontal-list class="doc-contents">
      <vt-horizontal-list-item v-for="id in times_(30)" :key="id" class="doc-h-list-item doc-h-list-item-30">
        <mdc-card class="doc-card doc-card-30" >
          <mdc-ripple class="doc-card__contents" @click="clickId=id">
          item {{id}}
          </mdc-ripple>
        </mdc-card>
      </vt-horizontal-list-item>
    </vt-horizontal-list>
    <div>click:{{clickId}}</div>

    <mdc-subtitle1>item width 100%</mdc-subtitle1>
    <vt-horizontal-list class="doc-contents" >
      <vt-horizontal-list-item v-for="id in times_(5)" :key="id" class="doc-h-list-item doc-h-list-item-100">
        <mdc-card class="doc-card doc-card-100">
          item {{id}}
        </mdc-card>
      </vt-horizontal-list-item>
    </vt-horizontal-list>

    <mdc-subtitle1>item width random</mdc-subtitle1>
    <vt-horizontal-list class="doc-contents">
      <vt-horizontal-list-item v-for="id in times_(10)" :key="id" class="doc-h-list-item doc-h-list-item-30"
      :style="{width:`${5 +id*5}%`}"
      >
        <mdc-card class="doc-card doc-card-30">
          item {{id}}
        </mdc-card>
      </vt-horizontal-list-item>
    </vt-horizontal-list>

    <mdc-subtitle1>item height random fit-displayed-contents-height</mdc-subtitle1>
    <vt-horizontal-list class="doc-contents" fit-displayed-contents-height>
      <vt-horizontal-list-item v-for="id in times_(10)" :key="id" class="doc-h-list-item doc-h-list-item-100"
      >
        <mdc-card class="doc-card doc-card-100" >
          item {{id}}
          <div v-for="count in times_(id+1)" :key="count"> item{{id}} - {{count}}</div>
        </mdc-card>
      </vt-horizontal-list-item>
    </vt-horizontal-list>

    <mdc-subtitle1>scroll-bar </mdc-subtitle1>
    <vt-horizontal-list class="doc-contents" scroll-bar>
      <vt-horizontal-list-item v-for="id in times_(7)" :key="id" class="doc-h-list-item doc-h-list-item-30">
        <mdc-card class="doc-card doc-card-30">
          item {{id}}
        </mdc-card>
      </vt-horizontal-list-item>
    </vt-horizontal-list>

    <mdc-subtitle1>scroll-bar :custom-scroll-bar="false" :mouse-scroll="false"</mdc-subtitle1>
    <vt-horizontal-list class="doc-contents" scroll-bar :custom-scroll-bar="false" :mouse-scroll="false">
      <vt-horizontal-list-item v-for="id in times_(7)" :key="id" class="doc-h-list-item doc-h-list-item-30">
        <mdc-card class="doc-card doc-card-30">
          item {{id}}
        </mdc-card>
      </vt-horizontal-list-item>
    </vt-horizontal-list>

    <mdc-subtitle1>sync tab</mdc-subtitle1>
    <div class="doc-contents">
      <mdc-tab-bar ref="tabBar"
        :scroll-state.sync="scrollState">
        <mdc-tab to="/horizontal-list/0">tab 0</mdc-tab>
        <mdc-tab to="/horizontal-list/1">tab 1</mdc-tab>
        <mdc-tab to="/horizontal-list/2">tab 2</mdc-tab>
      </mdc-tab-bar>
      <vt-horizontal-list class="doc-list" 
        :scroll-state.sync="scrollState"
        >
        <vt-horizontal-list-item v-for="id in times_(3)" :key="id" class="doc-h-list-item doc-h-list-item-100">
          <mdc-card class="doc-card doc-card-100">
            item {{id}}
          </mdc-card>
        </vt-horizontal-list-item>
      </vt-horizontal-list>
    </div>

    <mdc-subtitle1>sync tab :scroll="false</mdc-subtitle1>
    <div class="doc-contents">
      <mdc-tab-bar ref="tabBar"
        :scroll-state.sync="scrollState2"
        >
        <mdc-tab active>tab 0</mdc-tab>
        <mdc-tab>tab 1</mdc-tab>
        <mdc-tab>tab 2</mdc-tab>
      </mdc-tab-bar>
      <vt-horizontal-list class="doc-list" 
        :scroll-state.sync="scrollState2"
        :scroll="false"
        >
        <vt-horizontal-list-item v-for="id in times_(3)" :key="id" class="doc-h-list-item doc-h-list-item-100">
          <mdc-card class="doc-card doc-card-100">
            item {{id}}
          </mdc-card>
        </vt-horizontal-list-item>
      </vt-horizontal-list>
    </div>

    <mdc-subtitle1>sync tab :scroll="false</mdc-subtitle1>
    <div class="doc-contents">
      <mdc-tab-bar ref="tabBar"
        :scroll-state.sync="scrollState3"
        >
        <mdc-tab active>tab 0</mdc-tab>
        <mdc-tab>tab 1</mdc-tab>
        <mdc-tab>tab 2</mdc-tab>
      </mdc-tab-bar>
      <vt-horizontal-list class="doc-list" 
        :scroll-state.sync="scrollState3"
        :scroll="false"
        >
        <vt-horizontal-list-item v-for="id in times_(3)" :key="id" 
          class="doc-h-list-item doc-h-list-item-100 doc-list-item-vertical-scrollable">
          <mdc-card class="doc-card doc-card-100 doc-card-h-200px">
            <div v-for="i in times_(5)" :key="i">
              iten {{id}} - {{i}}
            </div>
          </mdc-card>
        </vt-horizontal-list-item>
      </vt-horizontal-list>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.doc-contents{
  border:solid 1px #000;
  margin-bottom: 10px;
}
.doc-list{

}
.doc-h-list-item{
  /* height:100px; */
}
.doc-h-list-item-30{
  width:30%;
}
.doc-card{
  /* height:100%; */
  background-color: #eee;
}
.doc-card-30{
  height:calc(100% - 1rem);
  margin:0.5rem;
}
.doc-card-100{
  margin:0;
}
.doc-h-list-item:nth-child(even) .doc-card{
  /* background-color:#eee; */
}
.doc-card__contents{
  height:100%;
  width:100%;
}
.doc-h-list-item-100{
  width:100%;
}
.doc-list-item-vertical-scrollable{
  height:100px;
  overflow-y:auto;
}
.doc-card-h-200px{
  height:200px;
}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ScrollState } from '@/components/vt-horizontal-list'

@Component<HorizontalList>({})
export default class HorizontalList extends Vue {
  scrollState:ScrollState = {type:'',from:'',index:0,moveRate:0}
  scrollState2:ScrollState = {type:'',from:'',index:0,moveRate:0}
  scrollState3:ScrollState = {type:'',from:'',index:0,moveRate:0}
  // activeTabIndex2:number = 0
  clickId:number = -1
  times_(count:number):number[]{
    const xs:number[] = []
    for(let i=0;i<count;i++){
      xs.push(i)
    }
    return xs
  }

}
</script>

