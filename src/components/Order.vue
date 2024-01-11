<template>
  <div class="hello">
    <h1>Order</h1>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
        <th scope="col">#SL</th>
        <th scope="col">Invoice</th>
        <th scope="col">From City</th>
        <th scope="col">To City</th>
        <th scope="col">Contact Number</th>
        <th scope="col">Product Name</th>
        <th scope="col">Product Weight</th>
        <th scope="col">Total Cost</th>
        <th scope="col">Status</th>
        <th class="white-space-nowrap">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in allorders" :key="p.id">
          <th scope="row">{{ p.id }}</th>
          <td>{{p.invoice_no}}</td>
          <td>{{p.f_city}}</td>
          <td>{{p.t_city}}</td>
          <td>{{p.contact_number}}</td>
          <td>{{p.product_name}}</td>
          <td>{{p.product_weight}}</td> 
          <td>{{p.total_cost}}</td>
          <td>{{p.status }}</td>
          <td class="white-space-nowrap">
            <router-link :to="'/ordertrack/' + p.id" class="btn btn-info">Add Track </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DataService from "../services/DataService";
//import router from '@/router';
export default {
  name: 'Order',
  data() {
    return {
      allorders:[]
    };
  },
  methods: {
    orders() {
      let uid=sessionStorage.getItem('uid');
       DataService.orders(uid)
        .then(response => {
          console.log(response.data)
          if(response.data)
            this.allorders= response.data;
          else
            alert(response.data.error)
        })
        .catch(e => {
          console.log(e);
      });
    }
  }, mounted() {
    this.orders();
  }
}
</script>
