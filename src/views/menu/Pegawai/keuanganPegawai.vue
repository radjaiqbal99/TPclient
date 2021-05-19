<template>
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
        <div class="container-xl">
          <!-- Page title -->
          <div class="page-header d-print-none">
            <div class="row align-items-center">
              <div class="col">
                <!-- Page pre-title -->
                <div class="page-pretitle">ADMINISTRATOR</div>
                <h2 class="page-title">DASHBOARD</h2>
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
                  <Toolbar class="p-mb-0" style="">
                    <template #left>
                      <Button
                        label="Tambah"
                        icon="pi pi-plus"
                        class="p-button-success p-mr-2"
                        @click="openNew"
                        style="margin-right: 5%"
                      />
                      <Button
                        label="Hapus"
                        icon="pi pi-trash"
                        class="p-button-danger"
                        @click="confirmDeleteSelected"
                        :disabled="
                          !selectedProducts || !selectedProducts.length
                        "
                      />
                    </template>

                    <template #right>
                      <!-- <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" l abel="Import" chooseLabel="Import" class="p-mr-2 p-d-inline-block" style="margin-right:5%;" /> -->
                      <Button
                        label="Unduh"
                        icon="pi pi-upload"
                        class="p-button-help"
                        @click="exportCSV($event)"
                      />
                    </template>
                  </Toolbar>
                </div>
              </div>
              <div class="col-12">
                <div class="card" style="">
                  <DataTable
                    ref="dt"
                    :value="products"
                    v-model:selection="selectedProducts"
                    dataKey="id"
                    :paginator="true"
                    :rows="10"
                    :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5, 10, 25, 50, 100]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    responsiveLayout="scroll"
                  >
                    <template #header>
                      <div class="table-header">
                        <h5 class="p-m-0">Manage Products</h5>
                        <span class="p-input-icon-left">
                          <i class="pi pi-search" />
                          <InputText
                            v-model="filters['global']"
                            placeholder="Search..."
                          />
                        </span>
                      </div>
                    </template>

                    <Column
                      selectionMode="multiple"
                      style="width: 3rem"
                      :exportable="false"
                    ></Column>
                    <Column
                      field="id"
                      header="Code"
                      :sortable="true"
                      style="min-width: 12rem"
                    ></Column>
                    <Column
                      field="name"
                      header="Name"
                      :sortable="true"
                      style="min-width: 16rem"
                    ></Column>
                    <Column
                      field="username"
                      header="Name"
                      :sortable="true"
                      style="min-width: 16rem"
                    ></Column>
                  </DataTable>
                </div>
              </div>
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
import axios from "axios";
import header from "../../component/header.vue";
import footer from "../../component/footer.vue";
export default {
  mounted() {
    //API Call
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.products = res.data;
    });
  },
  data: function () {
    return {
      home: { icon: "pi pi-home", to: "/" },
      items: [{ label: "Keuangan Pegawai", to: "/keuanganPegawai" }],
      users: [],
      products: null,
      productDialog: false,
      deleteProductDialog: false,
      deleteProductsDialog: false,
      product: [],
      selectedProducts: null,
      filters: [],
      submitted: false,
      statuses: [
        { label: "INSTOCK", value: "instock" },
        { label: "LOWSTOCK", value: "lowstock" },
        { label: "OUTOFSTOCK", value: "outofstock" },
      ],
    };
  },
  methods: {
    findIndexById(id) {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
          index = i;
          break;
        }
      }
      return index;
    },
    exportCSV() {
      this.$refs.dt.exportCSV();
    },
  },
  components: {
    "header-component": header,
    "footer-component": footer,
  },
};
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
