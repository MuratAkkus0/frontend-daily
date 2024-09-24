<script setup>
import ComputedDetails_DynamicStyles from './components/ComputedDetails_DynamicStyles.vue';
import EventListeners from './components/EventListeners.vue';
import VIf_VShow_Farki from './components/VIf_VShow_Farki.vue';
import VForDöngüler from './components/VForDöngüler.vue';
import { onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, ref } from 'vue';


const btnText = ref('Change Process Status');

const updateBtnText = function(text) {
  this.btnText=text;
}
onServerPrefetch(() => {
  console.log('onServerPrefetch')
})
onDeactivated(() => {
  console.log('onDeactivated')
})
onActivated(() => {
  console.log('onActivated')
})
onRenderTriggered(() => {
  console.log('onRenderTriggered')
})
onRenderTracked(() => {
  console.log('onRenderTracked')
})
onErrorCaptured(() => {
  console.log('onErrorCaptured')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
onUpdated(() => {
  console.log('onUpdated')
})
onMounted(() => {
  console.log('onMounted')
})


</script>

<template>
  <h1 :class="xBilesen.green" >App</h1>
  <h1 :class="$style.color" >App</h1>
  <EventListeners />
  <br/>
  <ComputedDetails_DynamicStyles />
  <br/>
  <!-- Assatgida child dan parenta veri aktardik. Bu sayede childdan parentta tanimlanan genel degeri degistirebilir ve birden fazla komponentte ayni anda degisiklik olmasini saglayabiliriz. -->
  <VIf_VShow_Farki :btnText="btnText" v-on:deneme="updateBtnText($event)"/>
  <br/>
  <VForDöngüler />
  <br/> 
  
</template> 

<style scoped>

/* Eger slott etiketinin kullanildigi componentte style yazacaksan ilgili elemana ulasmak icin eleman adini ::slotted(Eleman Adi) seklinde yazman lazim.
ör/ ::slotted(input)

eger parent elementten sadece slotta olan elementlere css uygulamak istersen :deep(Eleman Adi) seklinde yazman lazim. or/ ::deep(Eleman Adi)

eger scoped bir style etiketinde globale etki edecek style kodlari da yazmak istiyorssan :global(Eleman Adi) seklinde yazman lazim. or/ ::global(Eleman Adi)



*/

</style>

<style module>

/* bu classi kullanmak icin :class="$style.color" seklinde yazman gerekiyor cünkü bu bir module etiketin icinde , sadece class="color" ile kullanamazsin */
.color{
  color: red;
}
</style>

<style module="xBilesen">

/* Bu classi kullanmak icin :class="xBilesen.green" seklinde erisebilirsin. Modullere isimler vermek mümkün */

.green{
  color: green;
}
</style>