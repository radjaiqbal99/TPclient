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
                    :globalFilterFields="['satuan', 'upah']"
                  >
                    <!-- <template #header>
                      <div class="table-header">
                        <span class="p-input-icon-left">
                          <i class="pi pi-search" />
                          <InputText
                            v-model="filters1['global'].value"
                            placeholder="Search..."
                          />
                        </span>
                      </div>
                    </template> -->
                    <!-- <template #footer>
                      <div class="d-flex justify-content-end">
                        <Button
                          label="Unduh"
                          icon="pi pi-upload"
                          class="p-button-help p-button-outlined"
                          @click="exportCSV($event)"
                        />
                      </div>
                    </template> -->
                    <template #empty>
                      <div class="text-center">No data found</div></template
                    >
                    <template #loading>
                      <div class="text-center">Load data . . .</div>
                    </template>

                    <!-- <Column
                      selectionMode="multiple"
                      style="width: 3rem"
                      :exportable="false"
                    ></Column> -->
                    <Column
                      field="satuan"
                      header="Satuan"
                      :sortable="true"
                      style="width: 6rem"
                    ></Column>
                    <Column
                      field="upah"
                      header="Upah"
                      :sortable="true"
                    ><template #body="slotProps" sortable>
                              Rp {{ formatCurrency(slotProps.data.upah) }}
                            </template></Column>
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
                            class="
                              p-button-rounded
                              p-button-outlined
                              p-button-success
                              p-mr-4
                            "
                            style="margin-right: 1rem"
                            @click="editProduct(slotProps.data)"
                          />
                          <Button
                            icon="pi pi-trash"
                            class="
                              p-button-rounded p-button-outlined p-button-danger
                            "
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
                  <label for="satuan" class="mb-2">Satuan</label>
                  <Dropdown
                    id="satuan"
                    v-model.trim="product.satuan"
                    :options="satuan"
                    required="true"
                    autofocus
                    optionLabel="satuan"
                    optionValue="satuan"
                    placeholder="Pilih jenis transaksi"
                    :class="{
                      'p-invalid': submitted && !product.satuan,
                    }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="submitted && !product.satuan"
                    >Satuan is required.</small
                  >
                  <label for="upah" class="mb-2 mt-2">Upah</label>
                  <InputNumber
                    id="upah"
                    v-model="product.upah"
                    required="false"
                    placeholder="Masukkan Upah"
                    :class="{ 'p-invalid': submitted && !product.upah }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="submitted && !product.upah"
                    >Upah is required.</small
                  >
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
                  <label for="satuan" class="mb-2">Satuan</label>
                  <InputText
                    id="satuan"
                    v-model.trim="product.satuan"
                    required="true"
                    placeholder="Masukkan Satuan"
                    disabled
                    :class="{ 'p-invalid': submitted && !product.satuan }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="submitted && !product.satuan"
                    >Satuan is required.</small
                  >
                  <label for="upah" class="mb-2 mt-2">Upah</label>
                  <InputNumber
                    id="upah"
                    v-model="product.upah"
                    required="false"
                    placeholder="Masukkan Upah"
                    autofocus
                    :class="{ 'p-invalid': submitted && !product.upah }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="submitted && !product.upah"
                    >Upah is required.</small
                  >
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
                    >Are you sure you want to delete <b>{{ product.satuan }}</b
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
import apiKasir from "/src/service/Api";
import { defineComponent } from "vue";
import Swal from "sweetalert2";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";
import { useRouter } from "vue-router";
import header from "/src/views/component/header.vue";
import footer from "/src/views/component/footer.vue";
import { FilterMatchMode, FilterOperator } from "primevue/api";

export default defineComponent({
  setup() {
    onMounted(async () => {
      await ApiKasir.value
        .getUpahKasir()
        .then((res) => {
          loading1.value = false;
          products.value = res.data.data;
          satuan.value = res.data.satuan;
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
    const ApiKasir = ref(new apiKasir());
    const loadingbutton = ref(false);
    const loading1 = ref(true);
    const selectedData = ref();
    const satuan = ref([]);
    const router = useRouter();
    const items = ref([{ label: "Upah Kasir", to: "/upahKasir" }]);
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
        return value.toLocaleString( {
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
      // console.log("here");
      if (product.value.satuan.trim()) {
        if (product.value.id) {
          await ApiKasir.value
            .editUpahKasir(product.value.id, product.value)
            .then(async () => {
              loadingbutton.value = false;
              loading1.value = true;
              update.value = false;
              toast.add({
                severity: "success",
                summary: "Ubah data",
                detail: `Berhasil mengubah ( ${product.value.satuan} )`,
                life: 3000,
              });
              //==============================
              await ApiKasir.value
                .getUpahKasir()
                .then((res) => {
                  loading1.value = false;
                  products.value = res.data.data;
                  satuan.value = res.data.satuan;
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
                detail: `Gagal mengubah ( ${product.value.satuan} )`,
                life: 3000,
              });
            });
          product.value = {};
        } else {
          await ApiKasir.value
            .addUpahKasir(product.value)
            .then(async () => {
              add.value = false;
              toast.add({
                severity: "success",
                summary: "Tambah Data",
                detail: `Berhasil menambahkan ( ${product.value.satuan} )`,
                life: 3000,
              });
              await ApiKasir.value
                .getUpahKasir()
                .then((res) => {
                  products.value = res.data.data;
                  satuan.value = res.data.satuan;
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
                detail: `Gagal menambahkan ( ${product.value.satuan} )`,
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
      // console.log(product.value);
      confirm.require({
        target: event.currentTarget,
        message: `Kamu akan mengahpus ( ${product.value.satuan} )`,
        icon: "pi pi-info-circle",
        acceptClass: "p-button-danger",
        accept: async () => {
          await ApiKasir.value
            .deleteUpahKasir(product.value.id)
            .then(async () => {
              deleteProductDialog.value = false;
              toast.add({
                severity: "success",
                summary: "Berhasil",
                detail: `Berhasil menghapus ( ${product.value.satuan} )`,
                life: 3000,
              });
              product.value = {};
              await ApiKasir.value
                .getUpahKasir()
                .then((res) => {
                  satuan.value = res.data.satuan;
                  products.value = res.data.data;
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
                detail: `Gagal menghapus ( ${product.value.satuan} )`,
                life: 3000,
              });
              product.value = {};
              // console.log(product.value.id);
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

      // console.log(selectedProducts.value);
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
      satuan,
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
