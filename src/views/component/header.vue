<template>
  <header class="navbar navbar-expand-md navbar-dark d-print-none bg-primary">
    <div class="container-xl">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1
        class="
          navbar-brand navbar-brand-autodark
          d-none-navbar-horizontal
          pe-0 pe-md-3
        "
      >
        <router-link :to="{ path: '/dashboard' }">
          <!-- <img src="./static/logo-white.svg" width="110" height="32" alt="Tabler" class="navbar-brand-image"> -->
          <span>TAMBANG PASIR</span>
        </router-link>
      </h1>
      <div class="navbar-nav flex-row order-md-last">
        <div class="nav-item dropdown">
          <a
            href="#"
            class="nav-link d-flex lh-1 text-reset p-0"
            data-bs-toggle="dropdown"
            aria-label="Open user menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-caret-down"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M18 15l-6 -6l-6 6h12"
                transform="rotate(180 12 12)"
              ></path>
            </svg>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a @click="showdialog" class="dropdown-item">Reset Password</a>
            <a @click="logout" class="dropdown-item">Logout</a>
          </div>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbar-menu">
        <div
          class="
            d-flex
            flex-column flex-md-row flex-fill
            align-items-stretch align-items-md-center
          "
        >
          <ul class="navbar-nav">
            <!-- Dashboard -->
            <li class="nav-item">
              <router-link class="nav-link" :to="{ path: '/dashboard' }">
                <span class="nav-link-title"> Dashboard </span>
              </router-link>
            </li>
            <!-- Pencatatan -->
            <li class="nav-item dropdown">
              <router-link class="nav-link" :to="{ path: '/pencatatan' }">
                <span class="nav-link-title"> Pencatatan </span>
              </router-link>
            </li>
            <!-- Deposit & Credit -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#navbar-layout"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <span class="nav-link-title">Deposit & Credit</span>
              </a>
              <div class="dropdown-menu">
                <div class="dropdown-menu-columns">
                  <div class="dropdown-menu-column">
                    <router-link
                      class="dropdown-item"
                      :to="{ path: '/dompetPegawai' }"
                      >Pegawai</router-link
                    >
                    <router-link
                      class="dropdown-item"
                      :to="{ path: '/dompetKasir' }"
                      >Kasir</router-link
                    >
                  </div>
                </div>
              </div>
            </li>
            <!-- BON -->
            <li class="nav-item dropdown">
              <router-link class="nav-link" :to="{ path: '/bon' }">
                <span class="nav-link-title">BON</span>
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#navbar-layout"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <span class="nav-link-title"> Upah & Harga </span>
              </a>
              <div class="dropdown-menu">
                <div class="dropdown-menu-columns">
                  <div class="dropdown-menu-column">
                    <span class="dropdown-header" style="color: #0ca678"
                      >Upah</span
                    >
                    <router-link
                      class="dropdown-item"
                      :to="{ path: '/upahPegawai' }"
                      >Pegawai</router-link
                    >
                    <router-link
                      class="dropdown-item"
                      :to="{ path: '/upahKasir' }"
                      >Kasir</router-link
                    >
                    <div class="dropdown-divider"></div>
                    <span class="dropdown-header" style="color: #0ca678"
                      >Harga</span
                    >
                    <router-link
                      class="dropdown-item"
                      :to="{ path: '/hargaPasir' }"
                      >Pasir</router-link
                    >
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#navbar-layout"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <span class="nav-link-title"> Pekerja </span>
              </a>
              <div class="dropdown-menu">
                <div class="dropdown-menu-columns">
                  <div class="dropdown-menu-column">
                    <router-link
                      class="dropdown-item"
                      :to="{ path: '/daftarPegawai' }"
                      >Pegawai</router-link
                    >
                    <router-link
                      class="dropdown-item"
                      :to="{ path: '/daftarKasir' }"
                      >Kasir</router-link
                    >
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <Dialog
    v-model:visible="dialog"
    :style="{ width: '450px' }"
    header="Change password"
    :modal="true"
    class="p-fluid"
    :closable="false"
    @submit.prevent="store()"
  >
    <div class="p-field mb-2">
      <label for="newPassword" class="mb-2">New Password</label>
      <InputText
        id="newPassword"
        v-model="password.new"
        required="true"
        placeholder="Masukkan Password"
        autofocus
        :class="{ 'p-invalid': submitted && !password.new }"
      />
      <small class="p-error d-block" v-if="submitted && !password.new"
        >Name is required.</small
      >
    </div>
    <template #footer>
      <Button
        label="Cancel"
        icon="pi pi-times"
        class="p-button-text p-button-danger"
        @click="hidedialog"
      />
      <Button
        label="Save"
        icon="pi pi-check"
        class="p-button-text"
        @click="sendNewPassword"
      />
    </template>
  </Dialog>
</template>

<script>
import api from "/src/service/Api";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const Api = ref(new api());
    const password = ref({});
    const submitted =ref(false);
    const toast = useToast();
    const dialog = ref(false);
    const router = useRouter();
    const logout = () => {
      localStorage.setItem("auth", false);
      router.push({ path: "/" });
    };
    const showdialog = () => {
      dialog.value = true;
    };
    const hidedialog = () => {
      dialog.value = false;
    };
    const sendNewPassword = () => {
      submitted.value=true;
      // console.log(password.value.new);
      Api.value
        .sendPassword(password.value)
        .then( async (result) => {
          await toast.add({
            severity: "success",
            summary: "Berhasil Mengubah Password",
            // detail: `Transaksi No.${product.value.transactionNumber}`,
            life: 3000,
          });
          submitted.value=false;
          logout();
        })
        .catch((err) => {
          toast.add({
            severity: "warning",
            summary: "Gagal Mengubah Password",
            // detail: `Transaksi No.${product.value.transactionNumber}`,
            life: 3000,
          });
        });
    };
    return {
      sendNewPassword,
      logout,
      submitted,
      dialog,
      password,
      showdialog,
      hidedialog,
    };
  },
};
</script>
