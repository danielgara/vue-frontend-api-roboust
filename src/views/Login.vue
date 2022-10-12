<template>
<div class="card">
  <div class="card-header">
    Login
  </div>
  <div class="card-body">
  <div class="row">
    <div class="col">
      Logged User: {{ user }}<br /><br />
    </div>
  </div>
  <form>
  <div class="row">
    <div class="col">
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Email:</label>
        <div class="col-sm-10">
          <input v-model="email" type="text" class="form-control">
        </div>
      </div>
    </div>
    <div class="col">
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Pass:</label>
        <div class="col-sm-10">
          <input v-model="password" type="password" class="form-control">
        </div>
      </div>
    </div>
  </div>
  <a v-on:click="login()" class="btn btn-primary">Submit</a>
  </form>
  </div>
</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import axios from 'axios';

export default class Products extends Vue {
  email = 'test2@test.com'

  password = '12345678'

  user = {}

  public async login() {
    axios.defaults.withCredentials = true;
    const data = {
      email: this.email,
      password: this.password,
    };

    axios.get('http://localhost:8000/sanctum/csrf-cookie').then((response) => {
      axios.post('http://localhost:8000/login', data).then((response2) => {
        this.user = response2.data.user;
      });
    });
  }
}
</script>
