<template>
  <div class="page">
    <div class="page-single">
      <div class="container">
        <div class="row">
          <div class="col col-login mx-auto">
            <form class="card" @submit.prevent="postLoginData()">
              <div class="card-body">
                <div class="card-title">login to your account</div>
                <div
                  v-if="validation.message"
                  class="alert alert-danger"
                  role="alert"
                >
                  {{ validation.message[0] }}
                </div>
                <div class="form-group">
                  <label class="form-label">username</label>
                  <input
                    v-model="loginData.username"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <div v-if="validation.username" class="text-danger">
                    {{ validation.username[0] }}
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label">
                    password
                    <a href="./forgot-password.html" class="float-right small"
                      >I forgot password</a
                    >
                  </label>
                  <input
                    v-model="loginData.password"
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                  <div v-if="validation.password" class="text-danger">
                    {{ validation.password[0] }}
                  </div>
                </div>

                <div class="form-footer">
                  <button type="submit" class="btn btn-primary btn-block">
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const loginData = reactive({
      username: "",
      password: "",
    });

    const validation = ref([]);

    const router = useRouter();
    function postLoginData() {
      axios
        .post("http://127.0.0.1:8000/api/login", loginData)
        .then((result) => {
          validation.value = result.data;
          function alert() {
            console.log('here')
            return Swal.fire({
              position: "center",
              icon: "success",
              title: "Welcome Back",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          async function going() {
            await new alert();
            return router.push({
              name: "dashboard",
            });
          }
          going();
        })
        .catch((err) => {
          console.log("gagal");
          validation.value = err.response.data;
        });
    }
    return {
      loginData,
      validation,
      router,
      postLoginData,
    };
  },
};
</script>
