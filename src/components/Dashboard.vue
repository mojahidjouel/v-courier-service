<template>
  <div class="hello">
    <h1>Dashboard</h1>
   
  </div>
</template>

<script>
//import router from '@/router';
export default {
  name: 'Dashboard',
  data() {
    return {
      uid:sessionStorage.getItem('uid')
    };
  }, mounted() {
    // if(!this.uid)
    // router.push({ name: 'login', params: { userId: '123' } })
    //   //router.push({ path: 'login' })
  }
}
</script>
