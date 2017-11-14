<template>
  <el-container>
    <el-main>
      <h1>Hi, this is {{ name }}</h1>
      <h5>Boilerplate CORS App that powered by fusion of Vue with Lumen</h5>
      <div class="row justify-content-md-center my-5">
        <div class="col-md-4">
          <div class="card text-justify">
            <div class="card-body">
              <p>This default boilerplate contains:</p>
                <ul>
                  <li>Barryvdh Laravel-CORS package</li>
                  <li>Axios for HTTP requests Vue package</li>
                  <li>ElementUI & Bootstrap 4</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <h6>Made by the great Vue & Lumen, fused by <a href="https://github.com/knightazura">@knightazura</a></h6>
    </el-main>
  </el-container>
</template>

<script>
  import { get } from '../helpers/api'

  export default {
    created () {
      get(`/a`)
        .then((response) => {
          this.name = response.data.model
        })
    },
    data () {
      return {
        name: ''
      }
    }
  }
</script>
