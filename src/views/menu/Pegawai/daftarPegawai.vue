<template>
  <ConfirmPopup></ConfirmPopup>
  <Toast />
  <body class="antialiased">
    <div class="wrapper">
      <header-component></header-component>
      <div class="page-wrapper">
        <div class="container-xl">
          <!-- Page title -->
          <div class="page-header d-print-none">
            <div class="row align-items-center">
              <div class="col">
                <!-- Page pre-title -->
                <Breadcrumb :home="home" :model="items" />
              </div>
              <!-- Page title actions -->
            </div>
          </div>
        </div>
        <div class="page-body">
          <div class="container-xl">
            <div class="row row-deck row-cards">
              <div class="col-12">
                <div class="card" style="">
                  <Toolbar class="p-mb-0 bg-white" style="">
                    <template #left>
                      <Button
                        label="Tambah"
                        icon="pi pi-plus"
                        class="p-button-success p-mr-2 p-button-outlined"
                        style="margin-right: 5%"
                        @click="openNew"
                      />
                      <!-- <Button
                        label="Unduh"
                        icon="pi pi-upload"
                        class="p-button-help"
                        @click="exportCSV($event)"
                      />   -->
                    </template>

                    <template #right>
                      <!-- <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" l abel="Import" chooseLabel="Import" class="p-mr-2 p-d-inline-block" style="margin-right:5%;" /> -->

                      <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText
                          v-model="filters1['global'].value"
                          placeholder="Search..."
                        />
                      </span>
                    </template>
                  </Toolbar>
                </div>
              </div>
              <div class="col-12">
                <div class="card" style="">
                  <DataTable
                    :resizableColumns="true"
                    columnResizeMode="fit"
                    class=""
                    showGridlines
                    v-model:selection="selectedData"
                    selectionMode="multiple"
                    :metaKeySelection="false"
                    ref="dt"
                    :value="products"
                    dataKey="id"
                    :paginator="true"
                    :rows="10"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5, 10, 25, 50, 100]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    responsiveLayout="scroll"
                    v-model:filters="filters1"
                    filterDisplay="menu"
                    :loading="loading1"
                    :globalFilterFields="['id', 'name','no_hp','alamat']"
                  >
                    <template #footer>
                      <div class="d-flex justify-content-end">
                        <Button
                          label="Unduh"
                          icon="pi pi-upload"
                          class="p-button-help p-button-outlined"
                          @click="exportCSV($event)"
                        />
                      </div>
                    </template>
                    <template #empty>
                      <div class="text-center">No data found</div></template
                    >
                    <template #loading>
                      <div class="text-center">Load data . . .</div>
                    </template> 
                    <Column
                      field="id"
                      header="ID"
                      :sortable="true"
                      style="width: 6rem"
                    ></Column>
                    <Column
                      field="name"
                      header="Nama"
                      :sortable="true"
                    ></Column>
                    <Column
                      field="no_hp"
                      header="No. HP"
                      :sortable="true"
                    ></Column>
                    <Column
                      field="alamat"
                      header="Alamat"
                      :sortable="true"
                    ></Column>

                    <Column
                      class=""
                      :resizableColumns="false"
                      :exportable="false"
                      style="width: 3.5rem"
                    >
                      <template #body="slotProps">
                        <div class="d-flex justify-content-end">
                          <Button
                            icon="pi pi-pencil"
                            class="p-button-rounded p-button-outlined p-button-success p-mr-4"
                            style="margin-right: 1rem"
                            @click="editProduct(slotProps.data)"
                          />
                          <Button
                            icon="pi pi-trash"
                            class="p-button-rounded p-button-outlined p-button-danger"
                            @click="deleteProduct(slotProps.data, $event)"
                          />
                        </div>
                      </template>
                    </Column>
                  </DataTable>
                </div>
              </div>
              <Dialog
                v-model:visible="add"
                :style="{ width: '450px' }"
                header="Tambah Data"
                :modal="true"
                class="p-fluid"
                @submit.prevent="store()"
              >
                <div class="p-field mb-2">
                  <label for="name" class="mb-2">Nama</label>
                  <InputText
                    id="name"
                    v-model.trim="product.name"
                    required="true"
                    placeholder="Masukkan Nama"
                    autofocus
                    :class="{ 'p-invalid': submitted && !product.name }"
                  />
                  <small class="p-error d-block " v-if="submitted && !product.name"
                    >Name is required.</small
                  >
                  <label for="name" class="mb-2 mt-2">No. HP</label>
                  <InputText
                    id="no_hp"
                    v-model.trim="product.no_hp"
                    required="false"
                    placeholder="Masukkan Nomor Hp"
                    autofocus
                  />
                  
                  <label for="name" class="mb-2 mt-2">Alamat</label>
                  <Textarea
                    id="alamat"
                    :autoResize="true"
                    rows="5"
                    v-model.trim="product.alamat"
                    required="false"
                    placeholder="Masukkan alamat"
                    autofocus
                  />
                  
                </div>
                <template #footer>
                  <Button
                    label="Cancel"
                    icon="pi pi-times"
                    class="p-button-text p-button-danger"
                    @click="hideDialog"
                  />
                  <Button
                    label="Save"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="saveProduct"
                  />
                </template>
              </Dialog>
              <Dialog
                v-model:visible="update"
                :style="{ width: '450px' }"
                header="Ubah Data"
                :modal="true"
                class="p-fluid"
                @submit.prevent="store()"
              >
                <div class="p-field mb-2">
                  <label for="name" class="mb-2">Nama</label>
                  <InputText
                    id="name"
                    v-model.trim="product.name"
                    required="true"
                    placeholder="Masukkan Nama"
                    autofocus
                    :class="{ 'p-invalid': submitted && !product.name }"
                  />
                  <small class="p-error d-block " v-if="submitted && !product.name"
                    >Name is required.</small
                  >
                  <label for="name" class="mb-2 mt-2">No. HP</label>
                  <InputText
                    id="no_hp"
                    v-model.trim="product.no_hp"
                    required="false"
                    placeholder="Masukkan Nomor Hp"
                    autofocus
                  />
                  
                  <label for="name" class="mb-2 mt-2">Alamat</label>
                  <Textarea
                    id="alamat"
                    :autoResize="true"
                    rows="5"
                    v-model.trim="product.alamat"
                    required="false"
                    placeholder="Masukkan alamat"
                    autofocus
                  />
                  
                </div>
                <template #footer>
                  <Button
                    label="Cancel"
                    icon="pi pi-times"
                    class="p-button-text p-button-danger"
                    @click="hideDialog"
                  />
                  <Button
                    type="button"
                    label="Save"
                    icon="pi pi-check pi "
                    class="p-button-text"
                    :loading="loadingbutton"
                    @click="saveProduct"
                  />
                </template>
              </Dialog>
              <Dialog
                v-model:visible="deleteProductDialog"
                :style="{ width: '450px' }"
                header="Confirm"
                :modal="true"
              >
                <div class="confirmation-content">
                  <i
                    class="pi pi-exclamation-triangle p-mr-3"
                    style="font-size: 2rem"
                  />
                  <span v-if="product"
                    >Are you sure you want to delete <b>{{ product.name }}</b
                    >?</span
                  >
                </div>
                <template #footer>
                  <Button
                    label="No"
                    icon="pi pi-times"
                    class="p-button-text"
                    @click="deleteProductDialog = false"
                  />
                  <Button
                    label="Yes"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="deleteProduct"
                  />
                </template>
              </Dialog>
              <div class="col-12"></div>
            </div>
          </div>
        </div>
      </div>
      <footer-component></footer-component>
    </div>
  </body>
</template>
<script>
import apiPegawai from "../../../service/Api";
import { defineComponent } from "vue";
import Swal from "sweetalert2";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";
import { useRouter } from "vue-router";
import header from "../../component/header.vue";
import footer from "../../component/footer.vue";
import { FilterMatchMode, FilterOperator } from "primevue/api";

export default defineComponent({
  setup() {
    onMounted(async () => {
      await ApiPegawai.value
        .getPegawai()
        .then((res) => {
          loading1.value = false;
          products.value = res.data;
        })
        .catch((err) => {
          loading1.value = false;
          Swal.fire({
            position: "center",
            icon: "error",
            title: err,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    });
    const home = ref({
      icon: "pi pi-home",
      to: "/",
    });
    const filters1 = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const ApiPegawai = ref(new apiPegawai());
    const loadingbutton = ref(true);
    const loading1 = ref(true);
    const selectedData = ref();
    const router = useRouter();
    const items = ref([{ label: "Daftar Pegawai", to: "/daftarPegawai" }]);
    const confirm = useConfirm();
    const toast = useToast();
    const dt = ref();
    const filteredCountries = ref();
    const products = ref();
    const add = ref(false);
    const update = ref(false);
    const deleteProductDialog = ref(false);
    const deleteProductsDialog = ref(false);
    const product = ref({});
    // const productService = ref(new ProductService());
    const selectedProducts = ref();
    const filters = ref({});
    const submitted = ref(false);
    const statuses = ref([
      { label: "INSTOCK", value: "instock" },
      { label: "LOWSTOCK", value: "lowstock" },
      { label: "OUTOFSTOCK", value: "outofstock" },
    ]);
    const searchCountry = (event) => {
      setTimeout(() => {
        if (!event.query.trim().length) {
          filteredCountries.value = [...products.value];
        } else {
          filteredCountries.value = products.value.filter((country) => {
            return country.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase());
          });
        }
      }, 250);
    };

    const formatCurrency = (value) => {
      if (value)
        return value.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      return;
    };
    const openNew = () => {
      product.value = {};
      submitted.value = false;
      add.value = true;
    };
    const hideDialog = () => {
      add.value = false;
      update.value = false;
      submitted.value = false;
    };
    const saveProduct = async () => {
      submitted.value = true;
      loadingbutton.value = true;
      if (product.value.name.trim()) {
        if (product.value.id) {
          await ApiPegawai.value
            .editPegawai(product.value.id, product.value)
            .then(async () => {
              loadingbutton.value = false;
              loading1.value = true;
              update.value = false;
              toast.add({
                severity: "success",
                summary: "Ubah data",
                detail: `Berhasil mengubah id ( ${product.value.id} )`,
                life: 3000,
              });
              //==============================
              await ApiPegawai.value
                .getPegawai()
                .then((res) => {
                  loading1.value = false;
                  products.value = res.data;
                })
                .catch((err) => {
                  toast.add({
                    severity: "error",
                    summary: "Gagal",
                    detail: "Gagal memuat data",
                    life: 3000,
                  });
                });
            })
            .catch((err) => {
              loadingbutton.value = false;
              update.value = false;
              toast.add({
                severity: "error",
                summary: "Gagal",
                detail: `Gagal mengubah id ( ${product.value.id} )`,
                life: 3000,
              });
            });
          product.value = {};
        } else {
          await ApiPegawai.value
            .addPegawai(product.value)
            .then(async () => {
              add.value = false;
              toast.add({
                severity: "success",
                summary: "Tambah Data",
                detail: `Berhasil menambahkan ( ${product.value.name} )`,
                life: 3000,
              });
              await ApiPegawai.value
                .getPegawai()
                .then((res) => {
                  products.value = res.data;
                })
                .catch((err) => {
                  toast.add({
                    severity: "error",
                    summary: "Gagal",
                    detail: `Gagal memuat data`,
                    life: 3000,
                  });
                });
            })
            .catch((err) => {
              add.value = false;
              toast.add({
                severity: "error",
                summary: "Failed",
                detail: `Gagal menambahkan ( ${product.value.name} )`,
                life: 3000,
              });
            });
          product.value = {};
        }
      }
    };
    const editProduct = (prod) => {
      product.value = { ...prod };
      update.value = true;
    };
    const confirmDeleteProduct = (prod) => {
      product.value = prod;
      deleteProductDialog.value = true;
    };
    const deleteProduct = (prod, event) => {
      product.value = prod;
      console.log(product.value);
      confirm.require({
        target: event.currentTarget,
        message: `Kamu akan mengahpus id ( ${product.value.id} )`,
        icon: "pi pi-info-circle",
        acceptClass: "p-button-danger",
        accept: async () => {
          await ApiPegawai.value
            .deletePegawai(product.value.id)
            .then(async () => {
              deleteProductDialog.value = false;
              toast.add({
                severity: "success",
                summary: "Berhasil",
                detail: `Berhasil menghapus id ( ${product.value.id} )`,
                life: 3000,
              });
              product.value = {};
              await axios
                .get("http://127.0.0.1:8000/api/daftarPegawai")
                .then((res) => {
                  products.value = res.data;
                })
                .catch((err) => {
                  toast.add({
                    severity: "error",
                    summary: "Gagal",
                    detail: `Gagal memuat data`,
                    life: 3000,
                  });
                });
            })
            .catch((err) => {
              deleteProductDialog.value = false;
              toast.add({
                severity: "error",
                summary: "Gagal",
                detail: `Gagal menghapus id ( ${product.value.id} )`,
                life: 3000,
              });
              product.value = {};
              console.log(product.value.id);
            });
        },
        reject: () => {},
      });
    };
    const findIndexById = (id) => {
      let index = -1;
      for (let i = 0; i < products.value.length; i++) {
        if (products.value[i].id === id) {
          index = i;
          break;
        }
      }

      return index;
    };
    const exportCSV = () => {
      dt.value.exportCSV();
    };
    const confirmDeleteSelected = () => {
      deleteProductsDialog.value = true;
    };
    const deleteSelectedProducts = () => {
      products.value = products.value.filter(
        (val) => !selectedProducts.value.includes(val)
      );

      console.log(selectedProducts.value);
      deleteProductsDialog.value = false;
      selectedProducts.value = null;
      toast.add({
        severity: "success",
        summary: "Successful",
        detail: "Products Deleted",
        life: 3000,
      });
    };

    return {
      loadingbutton,
      searchCountry,
      dt,
      filters1,
      filteredCountries,
      loading1,
      products,
      add,
      update,
      selectedData,
      deleteProductDialog,
      deleteProductsDialog,
      product,
      selectedProducts,
      filters,
      submitted,
      statuses,
      formatCurrency,
      openNew,
      hideDialog,
      saveProduct,
      editProduct,
      confirmDeleteProduct,
      deleteProduct,
      findIndexById,
      exportCSV,
      confirmDeleteSelected,
      deleteSelectedProducts,
      home,
      items,
    };
  },
  // mounted() {
  //   //API Call
  //   axios.get("http://127.0.0.1:8000/api/daftarPegawai").then((res) => {
  //     this.products = res.data;
  //   });
  // },
  // data() {
  //   return {
  //     home: { icon: "pi pi-home", to: "/" },
  //     items: [{ label: "Daftar Pegawai", to: "/daftarPegawai" }],
  //     users: [],
  //     router : useRouter(),
  //     products: null,
  //     productDialog: false,
  //     deleteProductDialog: false,
  //     deleteProductsDialog: false,
  //     product: [],
  //     selectedProducts: null,
  //     filters: [],
  //     submitted: false,
  //   };
  // },
  // methods: {
  //   openNew() {
  //     this.product = {};
  //     this.submitted = false;
  //     this.productDialog = true;
  //   },
  //   hideDialog() {
  //     this.productDialog = false;
  //     this.submitted = false;
  //   },
  //   saveProduct() {
  //     this.submitted = true;
  //     if (this.product.name.trim()) {
  //       axios.post(
  //         "http://127.0.0.1:8000/api/daftarPegawai",
  //         this.product
  //       )
  //       .then(() => {
  //         this.productDialog = false;
  //         this.product = {};
  //         this.router.push({
  //           path:"/daftarPegawai"
  //         })
  //       }).catch((err) => {

  //       });
  //       // this.products.push(this.product);
  //       console.log(this.product.name)
  //       // this.$toast.add({
  //       //   severity: "success",
  //       //   summary: "Successful",
  //       //   detail: "Product Created",

  //       //   life: 3000,
  //       // });
  //     }
  //   },
  //   exportCSV() {
  //     this.$refs.dt.exportCSV();
  //   },
  // },
  components: {
    "header-component": header,
    "footer-component": footer,
  },
});
</script>
<style scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-image {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.p-dialog .product-image {
  width: 50px;
  margin: 0 auto 2rem auto;
  display: block;
}

.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
