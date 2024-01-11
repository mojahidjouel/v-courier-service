<template>
  <div class="hello">
    <h1>Order Track</h1>
    <section class="root">
  <figure>
    <figcaption>
      <h4 class="text-center">Tracking Details</h4>
      <h6>Order Number # {{order_id}}</h6>
    </figcaption>
  </figure>
  <div class="order-track">
    <div class="order-track-step" v-for="p in ordertra" :key="p.id">
      <div class="order-track-status">
        <span class="order-track-status-dot"></span>
        <span class="order-track-status-line"></span>
      </div>
      <div class="order-track-text">
        <p class="order-track-text-stat">{{p.status}}</p>
        <p class="order-track-text-stat">{{p.comment}}</p>
        <span class="order-track-text-sub">{{p.created_at}}</span>
      </div>
    </div>
  </div>
  <div class=" rounded mt-5">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <h3 class="text-primary">Tracking Information</h3>
      </div>
      <div class="form-group">
        <label for="comment">Comment</label>
        <textarea required v-model="ordert.comment" class="form-control" name="comment" ></textarea>
      </div>
      <div class="form-group mb-2">
        <label for="status">Status:</label>
        <input type="status" required v-model="ordert.status" class="form-control" name="status">
      </div>
      <button type="submit" @click="save" class="btn btn-primary py-3 w-100 mb-4">Submit</button>
    </div>
    </section>
  </div>
</template>

<script>
import DataService from "../services/DataService";
//import router from '@/router';
export default {
  name: 'OrderTrack',
  data() {
    return {
      uid:sessionStorage.getItem('uid'),
      ordertra:[],
      order_id:"",
      ordert: {
        comment: "",
        status: ""
      },
    };
  },
  methods: {
    ordertrack(id) {
       DataService.ordertrack(id)
        .then(response => {
          console.log(response.data)
          if(response.data)
            this.ordertra= response.data;
          else
            alert(response.data.error)
        })
        .catch(e => {
          console.log(e);
      });
    },
    save() {
      var data = {
        comment: this.ordert.comment,
        status: this.ordert.status,
        user_id: this.uid,
        shipment_id: this.order_id,
      };

      DataService.ordertrack_save(data)
        .then(response => {
          if(response.data){
            this.ordertrack(this.$route.params.id);
            this.ordert.comment="";
            this.ordert.status="";
          }
          
        })
        .catch(e => {
          console.log(e);
      });
    }
  }, mounted() {
    this.order_id=this.$route.params.id;
    this.ordertrack(this.$route.params.id);
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600&display=swap");


h2, h4, h6 {
  margin: 0;
  padding: 0;
  display: inline-block;
}

.root {
  margin: 2rem auto;
  width: 40rem;
  font-weight: 300;
  min-height: 100vh;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
}

figure {
  display: flex;
}
figure img {
  width: 8rem;
  height: 8rem;
  border-radius: 15%;
  border: 1.5px solid #f05a00;
  margin-right: 1.5rem;
  padding:1rem;
}
figure figcaption {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
figure figcaption h4 {
  font-size: 1.4rem;
  font-weight: 500;
}
figure figcaption h6 {
  font-size: 1rem;
  font-weight: 300;
}
figure figcaption h2 {
  font-size: 1.6rem;
  font-weight: 500;
}

.order-track {
  margin-top: 2rem;
  padding: 0 1rem;
  border-top: 1px dashed #2c3e50;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
}
.order-track-step {
  display: flex;
  height: 7rem;
}
.order-track-step:last-child {
  overflow: hidden;
  height: 4rem;
}
.order-track-step:last-child .order-track-status span:last-of-type {
  display: none;
}
.order-track-status {
  margin-right: 1.5rem;
  position: relative;
}
.order-track-status-dot {
  display: block;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: #f05a00;
}
.order-track-status-line {
  display: block;
  margin: 0 auto;
  width: 2px;
  height: 7rem;
  background: #f05a00;
}
.order-track-text-stat {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 3px;
}
.order-track-text-sub {
  font-size: 1rem;
  font-weight: 300;
}

.order-track {
  transition: all .3s height 0.3s;
  transform-origin: top center;
}

</style>
