<template>
<div class="card">
  <div class="card-header">
    Create Product
  </div>
  <div class="card-body">
  <form>
  <div class="row">
    <div class="col">
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Name:</label>
        <div class="col-sm-10">
          <input v-model="name" type="text" class="form-control">
        </div>
      </div>
    </div>
    <div class="col">
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Descript:</label>
        <div class="col-sm-10">
          <input v-model="description" type="text" class="form-control">
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Price:</label>
        <div class="col-sm-10">
          <input v-model="price" type="number" class="form-control">
        </div>
      </div>
    </div>
  </div>
  <a v-on:click="create()" class="btn btn-primary">Submit</a>
  </form>
  </div>
</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import axios from 'axios';

export default class CreateProduct extends Vue {
  name = ''

  description = ''

  price = 0

  image = 'test'

  public async create() {
    axios.defaults.withCredentials = true;
    const data = {
      name: this.name,
      description: this.description,
      price: this.price,
      image: this.image,
    };

    axios.get('http://localhost:8000/sanctum/csrf-cookie').then((response) => {
      axios.post('http://localhost:8000/api/v1/products', data).then((response2) => {
        console.log(response2);
      });
    });
  }
}
</script>
