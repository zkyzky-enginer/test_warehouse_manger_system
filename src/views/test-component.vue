<template>
    <div >
        <div v-for="item in props.rows" :key="item.id"> 
            <qrcode-vue :value="item.id" :size="100" />
            {{ item.text }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import QrcodeVue from 'vue-qrcode'

 const props = defineProps({
    rows: {
        type: Array,
    }
    })

    onMounted(() => {
    })

</script>

<style lang="scss" scoped>
  

</style>