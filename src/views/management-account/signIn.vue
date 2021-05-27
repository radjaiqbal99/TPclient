<template>
  <body class="antialiased border-top-wide  d-flex flex-column bg-azure ">
    <div class="page page-center ">
      <div class="container-tight" >
        <form
          class="card card-md rounded-3 p-4"
          style="wiidth"
          @submit.prevent="postLoginData()"
          autocomplete="off"
        >
          <div class="card-body">
            <h2 class="card-title text-center mb-3" style="font-size:20pt">WELCOME</h2>
            <div
              v-if="validation.message"
              class="alert alert-important alert-danger alert-dismissible"
              role="alert"
            >
              <div class="d-flex">
                <div>
                  <!-- Download SVG icon from http://tabler-icons.io/i/alert-circle -->
                  <!-- SVG icon code with class="alert-icon" -->
                </div>
                <div>{{ validation.message[0] }}</div>
              </div>
              <a
                class="btn-close btn-close-white"
                data-bs-dismiss="alert"
                aria-label="close"
              ></a>
            </div>
              <label class="form-label"> Username </label>
              <div class="input-group input-group-flat mb-3">
                <InputText
                  v-model="loginData.username"
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  
                />
              </div>
              <div
                v-if="validation.username"
                class="text-danger mt-2"
                style="margin-bottom: -17px"
              >
                {{ validation.username[0] }}
              </div>
            
              <label class="form-label"> Password </label>
              <!-- <div class="input-group input-group-flat"> -->
              <div class="input-group input-group-flat">
              <InputText
              class="input-group input-group-flat"
                v-model="loginData.password"
                placeholder="Password"
                toggleMask
                type="password"
                :feedback="false"
                  
              ></InputText>
              </div>
                <!-- <input
                  v-model="loginData.password"
                  type="password"
                  placeholder="Password"
                /> -->
                <!--  -->
              <!-- </div> -->
              <div
                v-if="validation.password"
                class="text-danger mt-2"
                style="margin-bottom: -17px"
              >
                {{ validation.password[0] }}
              </div>
            <div class="form-footer mb-2">
              <button type="submit" class="btn btn-primary w-100 " style="height:50px;">
                LOGIN
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </body>
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
        .post("https://server.natunasandmine.com/api/login", loginData)
        .then((result) => {
          validation.value = result.data;
          function alert() {
            return Swal.fire({
              position: "center",
              icon: "success",
              title: "Welcome Admin",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          async function going() {
            await new alert();
            localStorage.setItem("auth", true);
            return router.push({
              name: "dashboard",
            });
          }
          going();
        })
        .catch((err) => {
          // console.log("gagal");
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


