<template>
  <div class="container-fluid position-relative d-flex p-0">
    <div class="container-fluid">
      <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
        <div class="col-12 col-sm-8">
          <div class=" rounded">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <a href="" class="">
                <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>ECouriar</h3>
              </a>
              <h3 class="text-primary">Sign In as Delivery Man</h3>
            </div>
            <div class="form-group">
              <label for="username">Contact Number/Email:</label>
              <input type="text" required v-model="auth.username" class="form-control" id="username" name="username" value="">
            </div>
            <div class="form-group mb-2">
              <label for="password">Password:</label>
              <input type="password" required v-model="auth.password" class="form-control" id="password" name="password">
            </div>
            <button type="submit" @click="login" class="btn btn-primary py-3 w-100 mb-4">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataService from "../services/DataService";
import router from '@/router';

export default {
  name: "Login",
  data() {
    return {
      auth: {
        username: "",
        password: ""
      },
      uid:sessionStorage.getItem('uid'),
      submitted: false,
    };
  },
  methods: {
    login() {
      var data = {
        username: this.auth.username,
        password: this.auth.password
      };

      DataService.login(data)
        .then(response => {
          console.log(response.data)
          if(response.data.id){
            sessionStorage.setItem('uid', response.data.id);
          }
          else
            alert(response.data.error)
            
            router.push({ name: 'dashboard', params: { userId: '123' } })
        })
        .catch(e => {
          console.log(e);
      });
    },
    logout() {
      this.uid="";
      sessionStorage.setItem('uid', '');
    }
  }
};
</script>

