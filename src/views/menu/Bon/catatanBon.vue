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
                    v-model:selection="selectedData"
                    selectionMode="multiple"
                    :metaKeySelection="false"
                    ref="dt"
                    :value="products"
                    dataKey="id"
                    :paginator="true"
                    :rows="10"
                    v-model:expandedRows="expandedRows"
                    @rowExpand="onRowExpand"
                    @rowCollapse="onRowCollapse"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5, 10, 25, 50, 100]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    responsiveLayout="scroll"
                    v-model:filters="filters1"
                    filterDisplay="menu"
                    :loading="loading1"
                    :globalFilterFields="['id_dompet', 'name', 'saldo']"
                  >
                    
                    <template #empty>
                      <div class="text-center">No data found</div></template
                    >
                    <template #loading>
                      <div class="text-center">Load data . . .</div>
                    </template>
                    <template #header>
                      <div
                        class="
                          table-header
                          p-d-flex p-flex-column p-flex-md-row p-jc-md-between
                        "
                      >
                        <div class=""></div>
                        <div class="">
                          <Button
                            icon="pi pi-plus"
                            label=""
                            @click="expandAll"
                            class="p-mr-2 p-button-text"
                          />
                          <Button
                            class="p-button-text"
                            icon="pi pi-minus"
                            label=""
                            @click="collapseAll"
                          />
                        </div>
                      </div>
                    </template>
                    <Column :expander="true" headerStyle="width: 3rem" />
                    <Column
                      field="id_bon"
                      header="Id Bon"
                      :sortable="true"
                      style="width: 6rem"
                    ></Column>
                    <Column
                      field="name"
                      header="Nama"
                      :sortable="true"
                    ></Column>
                    <Column field="saldo" header="Total Bon" :sortable="true">
                      <template #body="slotProps" sortable>
                        Rp {{ formatCurrency(slotProps.data.saldo) }}
                      </template></Column
                    >
                    <template #expansion="slotProps">
                      <div
                        class="orders-subtable"
                        style="
                          margin: -15px;
                          padding: 15px;
                          background-color: #e3f2fd;
                        "
                      >
                        <Chip
                          v-text="slotProps.data.name"
                          class="mb-3 text-green"
                          style="font-size: 12pt; background-color: azure"
                        />
                        <DataTable
                          :value="slotProps.data.transaksi"
                          responsiveLayout="scroll"
                          :resizableColumns="true"
                          columnResizeMode="fit"
                          v-model:selection="selectedData"
                          selectionMode="multiple"
                          :metaKeySelection="false"
                          :paginator="true"
                          :rows="10"
                          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                          :rowsPerPageOptions="[5, 10, 25, 50, 100]"
                          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        >
                          <Column
                            field="id_bon"
                            header="ID Bon"
                            sortable
                          ></Column>
                          <Column
                            field="no_transaksi"
                            header="Nomor Transaksi"
                            sortable
                          ></Column>
                          <Column
                            field="tgl_transaksi"
                            header="Tanggal Transaksi"
                            sortable
                          ></Column>
                          <Column
                            field="jenis_transaksi"
                            header="Jenis Transaksi"
                            sortable
                          >
                            <template #body="slotProps">
                              <Badge
                                v-if="slotProps.data.jenis_transaksi === 'Pembayaran'"
                                v-bind:value="slotProps.data.jenis_transaksi"
                                severity="success"
                                class=""
                              ></Badge>
                              <Badge
                                v-if="slotProps.data.jenis_transaksi === 'Bon'"
                                v-bind:value="slotProps.data.jenis_transaksi"
                                severity="warning"
                                class=""
                              ></Badge></template
                          ></Column>
                          <Column
                            field="kasir"
                            header="Kasir"
                            sortable
                          ></Column>
                          <Column
                            field="satuan"
                            header="Satuan"
                            sortable
                          ></Column>
                          <Column
                            field="qty"
                            header="Qty"
                            sortable
                          ></Column>
                          <Column field="Harga" header="Jumlah" sortable>
                            <template #body="slotProps" sortable>
                              Rp {{ formatCurrency(slotProps.data.Harga) }}
                            </template>
                          </Column>
                        </DataTable>
                      </div>
                    </template>
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
import apiKasir from "/src/service/Api";
import { defineComponent } from "vue";
import Swal from "sweetalert2";
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
        .getBon()
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
    const ApiKasir = ref(new apiKasir());
    const loadingbutton = ref(false);
    const loading1 = ref(true);
    const expandedRows = ref([]);
    const selectedData = ref();
    const router = useRouter();
    const items = ref([{ label: "BON", to: "/bon" }]);
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

    const onRowExpand = (event) => {
      toast.add({
        severity: "info",
        summary: "Product Expanded",
        detail: event.data.name,
        life: 3000,
      });
    };
    const onRowCollapse = (event) => {
      toast.add({
        severity: "success",
        summary: "Product Collapsed",
        detail: event.data.name,
        life: 3000,
      });
    };
    const expandAll = () => {
      expandedRows.value = products.value.filter((p) => p.id);
      toast.add({
        severity: "success",
        summary: "All Rows Expanded",
        life: 3000,
      });
    };
    const collapseAll = () => {
      expandedRows.value = null;
      toast.add({
        severity: "success",
        summary: "All Rows Collapsed",
        life: 3000,
      });
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
    const saveProduct = async () => {};
    const editProduct = (prod) => {
      product.value = { ...prod };
      update.value = true;
    };
    const confirmDeleteProduct = (prod) => {
      product.value = prod;
      deleteProductDialog.value = true;
    };
    const deleteProduct = (prod, event) => {};
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
    const formatCurrency = (value) => {
      return value.toLocaleString({ style: "currency", currency: "USD" });
    };

    return {
      expandedRows,
      onRowExpand,
      onRowCollapse,
      expandAll,
      collapseAll,
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
