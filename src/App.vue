<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
        <div class="container"><a class="navbar-brand" href=""><img src="/assets/img/gallery/logo.png" height="45" alt="logo" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"> </span></button>
          <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto pt-2 pt-lg-0 font-base" v-if="uid">
              <li class="nav-item px-2">
                <router-link :to="'/dashboard/'" class="nav-item nav-link">Dashboard </router-link>
              </li>
              <li class="nav-item px-2">
                <router-link :to="'/orders/'" class="nav-item nav-link">Orders </router-link>
              </li>
            </ul>
            <router-link v-if="!uid" :to="'/login/'" class="btn btn-info mx-2">Login </router-link>
            <a v-if="uid" href="#" @click="logout" class="btn btn-danger mx-2">Logout</a>
          </div>
        </div>
      </nav>
      <div class="container-fluid mt-3 my-5 py-5">
      <router-view />
    </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      uid:sessionStorage.getItem('uid')
    };
  },
  methods: {
    logout() {
      this.uid="";
      sessionStorage.setItem('uid', '');
    }
  }
};
</script>
