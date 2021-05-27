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
              <div class="col-12 mb-3">
                <!-- Page pre-title -->
                <Breadcrumb :home="home" :model="items" />
              </div>

              <div class="col-12"></div>
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
                      <div class="p-inputgroup">
                        <Button
                          label="TRANSAKSI"
                          icon=""
                          class="p-button-success p-mr-2 p-button-outlined"
                          style="margin-right: 5%"
                          @click="openNew"
                        />
                        <!-- {{ date3 }} -->
                      </div>
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
                    v-model:expandedRows="expandedRows"
                    @rowExpand="onRowExpand"
                    @rowCollapse="onRowCollapse"
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
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5, 10, 25, 50, 100]"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    responsiveLayout="scroll"
                    v-model:filters="filters1"
                    filterDisplay="menu"
                    :loading="loading1"
                    :globalFilterFields="['id', 'name', 'no_hp', 'alamat']"
                  >
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
                    <Column :expander="true" headerStyle="width: 3rem" />
                    <Column
                      field="id"
                      header="No"
                      :sortable="true"
                      style="width: 6rem"
                    ></Column>
                    <Column
                      field="tgl"
                      header="Tanggal Transaksi"
                      :sortable="true"
                    ></Column>
                    <Column
                      field="jumlahTransaksi"
                      header="Jumlah Transaksi"
                      :sortable="true"
                    ></Column>

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
                          v-text="slotProps.data.tgl"
                          class="pb-1 text-green"
                          style="font-size: 12pt; background-color: azure"
                        />

                        <div class="row mb-3">
                          <div class="col-2 col-md-6 pt-3">
                            <div class="card">
                              <div class="card-body p-2 text-center">
                                <div class="text-end text-green">
                                  <span
                                    class="
                                      text-green
                                      d-inline-flex
                                      align-items-center
                                      lh-1
                                    "
                                  >
                                  </span>
                                </div>
                                <div class="text-muted m-0">PENDAPATAN</div>
                                <div class="h1 mb-3">
                                  Rp
                                  {{
                                    formatCurrency(
                                      slotProps.data.penjualanPasir
                                    )
                                  }}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-2 col-md-6 pt-3">
                            <div class="card">
                              <div class="card-body p-2 text-center">
                                <div class="text-end text-green">
                                  <span
                                    class="
                                      text-green
                                      d-inline-flex
                                      align-items-center
                                      lh-1
                                    "
                                  >
                                  </span>
                                </div>
                                <div class="text-muted m-0">
                                  PENDAPATAN BERSIH
                                </div>
                                <div class="h1 mb-3">
                                  Rp
                                  {{
                                    formatCurrency(
                                      slotProps.data.pendapatanBersih
                                    )
                                  }}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-2 col-md-3 pt-3">
                            <div class="card">
                              <div class="card-body p-2 text-center">
                                <div class="text-end text-green">
                                  <span
                                    class="
                                      text-green
                                      d-inline-flex
                                      align-items-center
                                      lh-1
                                    "
                                  >
                                  </span>
                                </div>
                                <div class="text-muted m-0">
                                  PENJUALAN PASIR
                                </div>
                                <div class="h1 mb-3">
                                  {{ slotProps.data.jumlahPenjualanPasir }}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-2 col-md-3 pt-3">
                            <div class="card">
                              <div class="card-body p-2 text-center">
                                <div class="text-end text-green">
                                  <span
                                    class="
                                      text-green
                                      d-inline-flex
                                      align-items-center
                                      lh-1
                                    "
                                  >
                                  </span>
                                </div>
                                <div class="text-muted m-0">BON</div>
                                <div class="h1 mb-3">
                                  {{ slotProps.data.jumlahBonTruk }}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-2 col-md-3 pt-3">
                            <div class="card">
                              <div class="card-body p-2 text-center">
                                <div class="text-end text-green">
                                  <span
                                    class="
                                      text-green
                                      d-inline-flex
                                      align-items-center
                                      lh-1
                                    "
                                  >
                                  </span>
                                </div>
                                <div class="text-muted m-0">UPAH PEGAWAI</div>
                                <div class="h1 mb-3">
                                  Rp
                                  {{
                                    formatCurrency(slotProps.data.upahPegawai)
                                  }}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-2 col-md-3 pt-3">
                            <div class="card">
                              <div class="card-body p-2 text-center">
                                <div class="text-end text-green">
                                  <span
                                    class="
                                      text-green
                                      d-inline-flex
                                      align-items-center
                                      lh-1
                                    "
                                  >
                                  </span>
                                </div>
                                <div class="text-muted m-0">UPAH KASIR</div>
                                <div class="h1 mb-3">
                                  Rp
                                  {{ formatCurrency(slotProps.data.upahKasir) }}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-2 col-md-3 pt-3">
                            <div class="card">
                              <div class="card-body p-2 text-center">
                                <div class="text-end text-green">
                                  <span
                                    class="
                                      text-green
                                      d-inline-flex
                                      align-items-center
                                      lh-1
                                    "
                                  >
                                  </span>
                                </div>
                                <div class="text-muted m-0">BON TRUK</div>
                                <div class="h1 mb-3">
                                  Rp
                                  {{ formatCurrency(slotProps.data.bonTruk) }}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-2 col-md-3 pt-3">
                            <div class="card">
                              <div class="card-body p-2 text-center">
                                <div class="text-end text-green">
                                  <span
                                    class="
                                      text-green
                                      d-inline-flex
                                      align-items-center
                                      lh-1
                                    "
                                  >
                                  </span>
                                </div>
                                <div class="text-muted m-0">
                                  PENGELUARAN TAMBANG
                                </div>
                                <div class="h1 mb-3">
                                  Rp
                                  {{
                                    formatCurrency(
                                      slotProps.data.pengeluaranTambang
                                    )
                                  }}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-2 col-md-3 pt-3">
                            <div class="card">
                              <div class="card-body p-2 text-center">
                                <div class="text-end text-green">
                                  <span
                                    class="
                                      text-green
                                      d-inline-flex
                                      align-items-center
                                      lh-1
                                    "
                                  >
                                  </span>
                                </div>
                                <div class="text-muted m-0">
                                  PENARIKAN DEPOSIT PEGAWAI
                                </div>
                                <div class="h1 mb-3">
                                  Rp
                                  {{
                                    formatCurrency(
                                      slotProps.data.depositPegawai
                                    )
                                  }}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-2 col-md-3 pt-3">
                            <div class="card">
                              <div class="card-body p-2 text-center">
                                <div class="text-end text-green">
                                  <span
                                    class="
                                      text-green
                                      d-inline-flex
                                      align-items-center
                                      lh-1
                                    "
                                  >
                                  </span>
                                </div>
                                <div class="text-muted m-0">
                                  PENARIKAN DEPOSIT KASIR
                                </div>
                                <div class="h1 mb-3">
                                  Rp
                                  {{
                                    formatCurrency(slotProps.data.depositKasir)
                                  }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <DataTable
                          :resizableColumns="true"
                          columnResizeMode="fit"
                          class=""
                          v-model:selection="selectedData"
                          selectionMode="multiple"
                          :metaKeySelection="false"
                          ref="dtExpand"
                          :value="slotProps.data.transaksi"
                          dataKey="id"
                          :paginator="true"
                          :rows="10"
                          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                          :rowsPerPageOptions="[5, 10, 25, 50, 100]"
                          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                          responsiveLayout="scroll"
                        >
                          <template #empty>
                            <div class="text-center">
                              No data found
                            </div></template
                          >
                          <template #loading>
                            <div class="text-center">Load data . . .</div>
                          </template>
                          <Column
                            field="no_transaksi"
                            header="No Transaksi"
                            :sortable="true"
                            style="width: 6rem"
                          ></Column>
                          <Column
                            field="tgl_transaksi"
                            header="Tgl Transaksi"
                            :sortable="true"
                          ></Column>
                          <Column
                            header="Jenis Transaksi"
                            field="jenis_transaksi"
                            :sortable="true"
                          >
                            <template #body="slotProps">
                              <Badge
                                v-if="
                                  slotProps.data.jenis_transaksi ===
                                  'Pembelian pasir'
                                "
                                v-bind:value="slotProps.data.jenis_transaksi"
                                severity="success"
                                class=""
                              ></Badge>
                              <Badge
                                v-if="
                                  slotProps.data.jenis_transaksi ===
                                  'Pengeluaran tambang'
                                "
                                v-bind:value="slotProps.data.jenis_transaksi"
                                severity="info"
                                class=""
                              ></Badge>
                              <Badge
                                v-if="
                                  slotProps.data.jenis_transaksi ===
                                  'Penarikan deposit pegawai'
                                "
                                v-bind:value="slotProps.data.jenis_transaksi"
                                severity="warning"
                                class=""
                                >}</Badge
                              >
                              <Badge
                                v-if="
                                  slotProps.data.jenis_transaksi ===
                                  'Pembayaran bon pegawai'
                                "
                                v-bind:value="slotProps.data.jenis_transaksi"
                                severity="danger"
                                class=""
                              ></Badge>
                              <Badge
                                v-if="
                                  slotProps.data.jenis_transaksi ===
                                  'Penarikan deposit Kasir'
                                "
                                v-bind:value="slotProps.data.jenis_transaksi"
                                severity="danger"
                                class=""
                              ></Badge>
                              <Badge
                                v-if="
                                  slotProps.data.jenis_transaksi === 'Bon truk'
                                "
                                v-bind:value="slotProps.data.jenis_transaksi"
                                class=""
                              ></Badge>
                              <Badge
                                v-if="
                                  slotProps.data.jenis_transaksi ===
                                  'Pembayaran Bon Truk'
                                "
                                v-bind:value="slotProps.data.jenis_transaksi"
                                class=""
                              ></Badge> </template
                          ></Column>
                          <Column
                            field="kasir"
                            header="Kasir"
                            :sortable="true"
                          ></Column>
                          <Column
                            field="pekerja"
                            header="Pekerja"
                            :sortable="true"
                          ></Column>
                          <Column
                            field="satuan"
                            header="Satuan"
                            :sortable="true"
                          ></Column>
                          <Column
                            field="qty"
                            header="Jumlah"
                            :sortable="true"
                          ></Column>
                          <Column field="Harga" header="Total" :sortable="true"
                            ><template #body="slotProps" sortable>
                              Rp {{ formatCurrency(slotProps.data.Harga) }}
                            </template></Column
                          >
                          <Column
                            field="upahPegawai"
                            header="Upah Pegawai"
                            :sortable="true"
                            ><template #body="slotProps" sortable>
                              Rp
                              {{ formatCurrency(slotProps.data.upahPegawai) }}
                            </template>
                          </Column>
                          <Column
                            field="upahKasir"
                            header="Upah Kasir"
                            :sortable="true"
                            ><template #body="slotProps" sortable>
                              Rp {{ formatCurrency(slotProps.data.upahKasir) }}
                            </template></Column
                          >
                          <Column
                            field="pendapatanBersih"
                            header="Pendapatan Bersih"
                            :sortable="true"
                            ><template #body="slotProps" sortable>
                              Rp
                              {{
                                formatCurrency(slotProps.data.pendapatanBersih)
                              }}
                            </template></Column
                          >
                          <Column
                            field="keterangan"
                            header="Keterangan"
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
                                  icon="pi pi-trash"
                                  class="
                                    p-button-rounded
                                    p-button-outlined
                                    p-button-danger
                                  "
                                  @click="deleteProduct(slotProps.data, $event)"
                                />
                              </div>
                            </template>
                          </Column>
                        </DataTable>
                      </div>
                    </template>
                  </DataTable>
                </div>
              </div>
              <!-- ADD -->
              <Dialog
                v-model:visible="add"
                :breakpoints="{ '960px': '75vw' }"
                :style="{ width: '50vw' }"
                header="Tambah Data"
                :modal="true"
                class="p-fluid"
                @submit.prevent="store()"
                :closable="false"
              >
                <div class="p-field mb-2">
                  <label for="jenisTransaksi" class="mb-2"
                    >Jenis Transaksi</label
                  >
                  <Dropdown
                    id="jenisTransaksi"
                    v-model.trim="product.jenisTransaksi"
                    :options="jenisTransaksi"
                    required="true"
                    optionLabel="name"
                    optionValue="name"
                    placeholder="Pilih jenis transaksi"
                    :class="{
                      'p-invalid': submitted && !product.jenisTransaksi,
                    }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="submitted && !product.jenisTransaksi"
                    >Jenis transaksi is required.</small
                  >
                  <!-- Pembelian Pasir Start-->
                  <label
                    for="Transaksi "
                    class="mb-2"
                    v-if="product.jenisTransaksi == `Bon truk`"
                    >Transaksi</label
                  >
                  <Dropdown
                    id="Transaksi"
                    v-model.trim="product.keterangan"
                    v-if="product.jenisTransaksi == `Bon truk`"
                    :options="Transaksi"
                    optionLabel="name"
                    optionValue="name"
                    required="true"
                    placeholder="Pilih jenis transaksi"
                    :class="{
                      'p-invalid': submitted && !product.keterangan,
                    }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="
                      submitted &&
                      !product.keterangan &&
                      product.jenisTransaksi == `Bon truk`
                    "
                    >Nama is required.</small
                  >
                  <label
                    for="nama "
                    class="mb-2"
                    v-if="
                      product.jenisTransaksi == `Bon truk` &&
                      product.keterangan == `Pembayaran`
                    "
                    >Nama</label
                  >
                  <Dropdown
                    id="nama"
                    v-model.trim="product.name"
                    v-if="
                      product.jenisTransaksi == `Bon truk` &&
                      product.keterangan == `Pembayaran`
                    "
                    :options="name"
                    optionLabel="name"
                    optionValue="name"
                    required="true"
                    placeholder="Pilih jenis transaksi"
                    :class="{
                      'p-invalid': submitted && !product.name,
                    }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="
                      submitted &&
                      !product.name &&
                      product.jenisTransaksi == `Bon truk` &&
                      product.keterangan == `Pembayaran`
                    "
                    >Nama is required.</small
                  >
                  <label
                    for="nama "
                    class="mb-2"
                    v-if="
                      product.jenisTransaksi == `Bon truk` &&
                      product.keterangan == `Bon`
                    "
                    >Nama</label
                  >
                  <Dropdown
                    id="nama"
                    v-model.trim="product.name"
                    v-if="
                      product.jenisTransaksi == `Bon truk` &&
                      product.keterangan == `Bon`
                    "
                    :options="name"
                    optionLabel="name"
                    optionValue="name"
                    required="true"
                    :editable="true"
                    placeholder="Pilih jenis transaksi"
                    :class="{
                      'p-invalid': submitted && !product.name,
                    }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="
                      submitted &&
                      !product.name &&
                      product.jenisTransaksi == `Bon truk` &&
                      product.keterangan == `Bon`
                    "
                    >Nama is required.</small
                  >
                  <label
                    for="satuan"
                    class="mb-2"
                    v-if="
                      product.jenisTransaksi == `Pembelian pasir` ||
                      (product.jenisTransaksi == `Bon truk` &&
                        product.keterangan == `Bon`)
                    "
                    >Satuan</label
                  >
                  <Dropdown
                    id="satuan"
                    v-model.trim="product.satuan"
                    v-if="
                      product.jenisTransaksi == `Pembelian pasir` ||
                      (product.jenisTransaksi == `Bon truk` &&
                        product.keterangan == `Bon`)
                    "
                    :options="satuan"
                    optionLabel="jumlah"
                    optionValue="jumlah"
                    required="true"
                    placeholder="Pilih jenis transaksi"
                    :class="{
                      'p-invalid': submitted && !product.satuan,
                    }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="
                      submitted &&
                      !product.satuan &&
                      (product.jenisTransaksi == `Pembelian pasir` ||
                        (product.jenisTransaksi == `Bon truk` &&
                          product.keterangan == `Bon`))
                    "
                    >Satuan is required.</small
                  >
                  <label
                    for="jumlah"
                    class="mb-2"
                    v-if="
                      product.jenisTransaksi == `Pembelian pasir` ||
                      (product.jenisTransaksi == `Bon truk` &&
                        product.keterangan == `Bon`)
                    "
                    >Jumlah</label
                  >
                  <InputNumber
                    id="jumlah"
                    v-if="
                      product.jenisTransaksi == `Pembelian pasir` ||
                      (product.jenisTransaksi == `Bon truk` &&
                        product.keterangan == `Bon`)
                    "
                    v-model="product.qty"
                    required="true"
                    placeholder="Masukkan Jumlah"
                    :class="{ 'p-invalid': submitted && !product.qty }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="
                      submitted &&
                      !product.qty &&
                      (product.jenisTransaksi == `Pembelian pasir` ||
                        (product.jenisTransaksi == `Bon truk` &&
                          product.keterangan == `Bon`))
                    "
                    >Jumlah is required.</small
                  >
                  <label
                    for="pegawai"
                    class="mb-2"
                    v-if="
                      product.jenisTransaksi == `Pembelian pasir` ||
                      product.jenisTransaksi == `Penarikan deposit pegawai` ||
                      (product.jenisTransaksi == `Bon truk` &&
                        product.keterangan == `Bon`) ||
                      product.jenisTransaksi == `Pembayaran bon pegawai`
                    "
                    >pegawai</label
                  >
                  <MultiSelect
                    id="pegawai"
                    v-if="
                      product.jenisTransaksi == `Pembelian pasir` ||
                      product.jenisTransaksi == `Penarikan deposit pegawai` ||
                      (product.jenisTransaksi == `Bon truk` &&
                        product.keterangan == `Bon`) ||
                      product.jenisTransaksi == `Pembayaran bon pegawai`
                    "
                    v-model="product.pegawai"
                    :options="pegawai"
                    optionLabel="name"
                    optionValue="name"
                    required="true"
                    placeholder="Pilih jenis transaksi"
                    display="chip"
                    :class="{
                      'p-invalid': submitted && !product.pegawai,
                    }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="
                      submitted &&
                      !product.pegawai &&
                      (product.jenisTransaksi == `Pembelian pasir` ||
                        product.jenisTransaksi == `Penarikan deposit pegawai` ||
                        (product.jenisTransaksi == `Bon truk` &&
                          product.keterangan == `Bon`) ||
                        product.jenisTransaksi == `Pembayaran bon pegawai`)
                    "
                    >pegawai is required.</small
                  >
                  <label
                    for="kasir"
                    class="mb-2"
                    v-if="
                      product.jenisTransaksi == `Pembelian pasir` ||
                      product.jenisTransaksi == `Pengeluaran tambang` ||
                      product.jenisTransaksi == `Penarikan deposit pegawai` ||
                      product.jenisTransaksi == `Penarikan deposit kasir` ||
                      (product.jenisTransaksi == `Bon truk` &&
                        (product.keterangan == `Bon` ||
                          product.keterangan == `Pembayaran`)) ||
                      product.jenisTransaksi == `Pembayaran bon pegawai`
                    "
                    >kasir</label
                  >
                  <Dropdown
                    id="kasir"
                    v-if="
                      product.jenisTransaksi == `Pembelian pasir` ||
                      product.jenisTransaksi == `Pengeluaran tambang` ||
                      product.jenisTransaksi == `Penarikan deposit pegawai` ||
                      product.jenisTransaksi == `Penarikan deposit kasir` ||
                      (product.jenisTransaksi == `Bon truk` &&
                        (product.keterangan == `Bon` ||
                          product.keterangan == `Pembayaran`)) ||
                      product.jenisTransaksi == `Pembayaran bon pegawai`
                    "
                    v-model.trim="product.kasir"
                    :options="kasir"
                    optionLabel="name"
                    optionValue="name"
                    required="true"
                    placeholder="Pilih jenis transaksi"
                    :class="{
                      'p-invalid': submitted && !product.kasir,
                    }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="
                      submitted &&
                      !product.kasir &&
                      (product.jenisTransaksi == `Pembelian pasir` ||
                        product.jenisTransaksi == `Pengeluaran tambang` ||
                        product.jenisTransaksi == `Penarikan deposit pegawai` ||
                        product.jenisTransaksi == `Penarikan deposit kasir` ||
                        (product.jenisTransaksi == `Bon truk` &&
                          (product.keterangan == `Bon` ||
                            product.keterangan == `Pembayaran`)) ||
                        product.jenisTransaksi == `Pembayaran bon pegawai`)
                    "
                    >kasir is required.</small
                  >
                  <label
                    for="keterangan"
                    class="mb-2"
                    v-if="product.jenisTransaksi == `Pengeluaran tambang`"
                    >Keterangan</label
                  >
                  <Textarea
                    id="keterangan"
                    v-if="product.jenisTransaksi == `Pengeluaran tambang`"
                    :autoResize="true"
                    rows="5"
                    v-model.trim="product.keterangan"
                    required="true"
                    placeholder="Masukkan Keterangan"
                    :class="{
                      'p-invalid': submitted && !product.keterangan,
                    }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="
                      submitted &&
                      !product.kasir &&
                      product.jenisTransaksi == `Pengeluaran tambang`
                    "
                    >Keterangan is required.</small
                  >
                  <label
                    for="Total Penarikan"
                    class="mb-2"
                    v-if="
                      product.jenisTransaksi == `Penarikan deposit pegawai` ||
                      product.jenisTransaksi == `Penarikan deposit kasir` ||
                      product.jenisTransaksi == `Pembayaran bon pegawai`
                    "
                    >Total Penarikan</label
                  >
                  <InputNumber
                    id="Total Penarikan"
                    v-if="
                      product.jenisTransaksi == `Penarikan deposit pegawai` ||
                      product.jenisTransaksi == `Penarikan deposit kasir` ||
                      product.jenisTransaksi == `Pembayaran bon pegawai`
                    "
                    v-model="product.harga"
                    required="true"
                    placeholder="Masukkan Total Penarikann"
                    :class="{ 'p-invalid': submitted && !product.harga }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="
                      submitted &&
                      !product.harga &&
                      (product.jenisTransaksi == `Penarikan deposit pegawai` ||
                        product.jenisTransaksi == `Penarikan deposit kasir` ||
                        product.jenisTransaksi == `Pembayaran bon pegawai`)
                    "
                    >Total Penarikan is required.</small
                  >
                  <label
                    for="Harga"
                    class="mb-2"
                    v-if="product.jenisTransaksi == `Pengeluaran tambang`"
                    >Harga</label
                  >
                  <InputNumber
                    id="Harga"
                    v-if="product.jenisTransaksi == `Pengeluaran tambang`"
                    v-model="product.harga"
                    required="true"
                    placeholder="Masukkan Harga"
                    :class="{ 'p-invalid': submitted && !product.harga }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="
                      submitted &&
                      !product.harga &&
                      product.jenisTransaksi == `Pengeluaran tambang`
                    "
                    >Harga is required.</small
                  >
                  <label
                    for="JumlahPembayaran"
                    class="mb-2"
                    v-if="product.keterangan == `Pembayaran`"
                    >Jumlah Pembayaran</label
                  >
                  <InputNumber
                    id="JumlahPembayaran"
                    v-if="product.keterangan == `Pembayaran`"
                    v-model="product.harga"
                    placeholder="Masukkan Jumlah Pembayarann"
                    :class="{ 'p-invalid': submitted && !product.harga }"
                  />
                  <small
                    class="p-error d-block"
                    v-if="
                      submitted &&
                      !product.harga &&
                      product.keterangan == `Pembayaran`
                    "
                    >Jumlah Pembayaran is required.</small
                  >

                  <!-- Pembelian Pasir END -->
                </div>
                <template #footer>
                  <Button
                    label="Cancel"
                    icon="pi pi-times"
                    class="p-button-text p-button-danger"
                    @click="hideDialog"
                  />
                  <Button
                    label="Submit"
                    type="submit"
                    icon="pi pi-check"
                    class="p-button-text"
                    @click="addData"
                  />
                </template>
                <Dialog
                  header="Header"
                  v-model:visible="addDataComfrim"
                  :style="{ width: '50vw' }"
                  :position="position"
                  :modal="true"
                >
                  <p class="p-m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <template #footer>
                    <Button
                      label="No"
                      icon="pi pi-times"
                      @click="hideComfirmed"
                      class="p-button-text"
                    />
                    <Button
                      label="Yes"
                      icon="pi pi-check"
                      @click="sendTransaction"
                      autofocus
                    />
                  </template>
                </Dialog>
              </Dialog>
              <!-- UPDATE -->
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
                  <small
                    class="p-error d-block"
                    v-if="submitted && !product.name"
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
              <!-- DELETE -->
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
              <!-- UPDATE EXPAND -->
              <Dialog
                v-model:visible="updateExpand"
                :style="{ width: '450px' }"
                header="Ubah Data Expand"
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
                  <small
                    class="p-error d-block"
                    v-if="submitted && !product.name"
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
                    @click="hideDialogExpand"
                  />
                  <Button
                    type="button"
                    label="Save"
                    icon="pi pi-check pi "
                    class="p-button-text"
                    :loading="loadingbutton"
                    @click="saveProductExpand"
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
import apiPegawai from "/src/service/Api";
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
  data() {
    return {};
  },
  setup() {
    onMounted(async () => {
      await ApiPegawai.value
        .getPencatatan()
        .then(async (res) => {
          // console.log("bug");
          products.value = res.data.data;
          loading1.value = false;
        })
        .catch((err) => {
          // console.log("error");
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
    let minDate = ref(new Date());
    let date1 = ref();
    let date2 = ref();
    let date3 = ref([null, null]);
    const jenisTransaksi = ref([
      { name: "Pembelian pasir" },
      { name: "Pengeluaran tambang" },
      { name: "Penarikan deposit pegawai" },
      // { name: "Pembayaran bon pegawai" },
      { name: "Penarikan deposit kasir" },
      { name: "Bon truk" },
    ]);
    const Transaksi = ref([{ name: "Bon" }, { name: "Pembayaran" }]);
    const ApiPegawai = ref(new apiPegawai());
    const position = ref("center");
    const satuan = ref([]);
    const addDataComfrim = ref(false);
    const pegawai = ref([]);
    const kasir = ref([]);
    const name = ref([]);
    const loadingbutton = ref(false);
    const loading1 = ref(true);
    const selectedData = ref();
    const router = useRouter();
    const items = ref([{ label: "Pencatatan", to: "/pencatatan" }]);
    const confirm = useConfirm();
    const toast = useToast();
    const dt = ref([]);
    const dtExpand = ref({});
    const filteredCountries = ref();
    const products = ref();
    const add = ref(false);
    const update = ref(false);
    const updateExpand = ref(false);
    const deleteProductDialog = ref(false);
    const deleteProductsDialog = ref(false);
    const product = ref({});
    const expandedRows = ref([]);
    // const productService = ref(new ProductService());
    const selectedProducts = ref();
    const filters = ref({});
    const submitted = ref(false);
    const statuses = ref([
      { label: "INSTOCK", value: "instock" },
      { label: "LOWSTOCK", value: "lowstock" },
      { label: "OUTOFSTOCK", value: "outofstock" },
    ]);
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
    const formatCurrency = (value) => {
      return value.toLocaleString({
        style: "currency",
        currency: "USD",
      });
    };
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
    const openNew = async () => {
      product.value = {};
      await ApiPegawai.value
        .getResourcesForm()
        .then((res) => {
          satuan.value = res.data.hargaPasir;
          pegawai.value = res.data.daftarPegawai;
          kasir.value = res.data.daftarKasir;
          name.value = res.data.bonTrukNama;
        })
        .catch((err) => {
          add.value = true;
          Swal.fire({
            position: "center",
            icon: "error",
            title: err,
            showConfirmButton: false,
            timer: 1500,
          });
        });
      // submitted.value = false;
      add.value = true;
    };
    const hideDialog = () => {
      add.value = false;
      update.value = false;
      submitted.value = false;
    };
    const hideDialogExpand = () => {
      add.value = false;
      updateExpand.value = false;
      submitted.value = false;
      // addDataComfrim = false;
    };
    const hideComfirmed = () => {
      add.value = true;
      addDataComfrim.value = false;
    };
    const addData = async () => {
      submitted.value = true;
      add.value = false;
      const today = new Date();
      let todayYear = today.getFullYear();
      let todayMonth = today.getMonth() + 1;
      let todayDay = today.getDate();
      if (todayDay < 10) {
        todayDay = "0" + todayDay;
      }
      if (todayMonth < 10) {
        todayMonth = "0" + todayMonth;
      }
      const todayTime = `${today.getHours()}${today.getMinutes()}${today.getSeconds()}`;
      const transactionNumber = `${todayYear}${todayMonth}${todayDay}${todayTime}`;
      const transactionDate = `${todayYear}-${todayMonth}-${todayDay}`;
      product.value.transactionDate = transactionDate;
      product.value.transactionNumber = transactionNumber;
      if (product.value.jenisTransaksi == "Pembelian pasir") {
        if (
          product.value.satuan &&
          product.value.qty &&
          product.value.pegawai &&
          product.value.kasir
        ) {
          const result = await satuan.value.find(
            ({ jumlah }) => jumlah === product.value.satuan
          );
          product.value.harga =
            parseInt(result.harga) * parseInt(product.value.qty);
          sendTransaction();
        }
      } else if (product.value.jenisTransaksi == "Pengeluaran tambang") {
        if (
          product.value.kasir &&
          product.value.keterangan &&
          product.value.harga
        ) {
          sendTransaction();
        }
        // console.log("Pengeluaran tambang");
      } else if (product.value.jenisTransaksi == "Penarikan deposit pegawai") {
        if (
          product.value.pegawai &&
          product.value.kasir &&
          product.value.harga
        ) {
          sendTransaction();
        }
      } else if (product.value.jenisTransaksi == "Penarikan deposit kasir") {
        if (product.value.kasir && product.value.harga) {
          sendTransaction();
        }
        // console.log("Penarikan deposit kasir");
      } else if (product.value.jenisTransaksi == "Bon truk") {
        if (product.value.keterangan == "Bon") {
          if (
            product.value.satuan &&
            product.value.qty &&
            product.value.pegawai &&
            product.value.kasir
          ) {
            // console.log("Bon");
            const result = await satuan.value.find(
              ({ jumlah }) => jumlah === product.value.satuan
            );
            product.value.harga =
              parseInt(result.harga) * parseInt(product.value.qty);
            // addDataComfrim.value = true;
            sendTransaction();
          }
        } else {
          if (product.value.harga) {
            // addDataComfrim.value = true;

            sendTransaction();
            // console.log(product.value);
          }
        }
        // console.log("Bon truk");
      } else if (product.value.jenisTransaksi == "Pembayaran bon pegawai") {
        if (
          product.value.pegawai &&
          product.value.kasir &&
          product.value.harga
        ) {
          sendTransaction();
        }
        // console.log("Pembayaran bon pegawai");
      }
    };
    const sendTransaction = async () => {
      Swal.fire({
        title: `Total Transaksi<br>Rp ${formatCurrency(product.value.harga)}`,
        text: ``,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then(async (result) => {
        if (result.isConfirmed) {
          add.value = false;
          submitted.value = false;
          addDataComfrim.value = false;
          await ApiPegawai.value
            .addPencatatan(product.value)
            .then(async (result) => {
              // console.log("Good");
              // console.log(product.value);
              toast.add({
                severity: "success",
                summary: "Berhasil menambah data",
                detail: `Transaksi No.${product.value.transactionNumber}`,
                life: 3000,
              });
              await ApiPegawai.value
                .getPencatatan()
                .then(async (res) => {
                  products.value = res.data.data;
                  loading1.value = false;
                  await ApiPegawai.value
                    .getResourcesForm()
                    .then((res) => {
                      satuan.value = res.data.hargaPasir;
                      pegawai.value = res.data.daftarPegawai;
                      kasir.value = res.data.daftarKasir;
                      name.value = res.data.bonTrukNama;
                    })
                    .catch((err) => {
                      add.value = true;
                      Swal.fire({
                        position: "center",
                        icon: "error",
                        title: err,
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    });
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
            })
            .catch((err) => {
              // console.log("Bad");
            });
          product.value = {};
          // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } else {
          add.value = true;
        }
      });
    };
    const saveProduct = async () => {
      submitted.value = true;
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
    const saveProductExpand = async () => {
      submitted.value = true;
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
                .catch(() => {
                  toast.add({
                    severity: "error",
                    summary: "Gagal",
                    detail: "Gagal memuat data",
                    life: 3000,
                  });
                });
            })
            .catch(() => {
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
          toast.add({
            severity: "error",
            summary: "Gagal",
            detail: `Gagal mengubah id ( ${product.value.id} )`,
            life: 3000,
          });
          product.value = {};
        }
      }
    };
    const editProduct = (prod) => {
      product.value = { ...prod };
      update.value = true;
    };
    const editProductExpand = (prod) => {
      product.value = { ...prod };
      updateExpand.value = true;
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
        message: `Kamu akan mengahpus id ( ${product.value.id} )`,
        icon: "pi pi-info-circle",
        acceptClass: "p-button-danger",
        accept: async () => {
          await ApiPegawai.value
            .deletePencatatan(product.value)
            .then(async () => {
              deleteProductDialog.value = false;
              toast.add({
                severity: "success",
                summary: "Berhasil",
                detail: `Berhasil menghapus no transaksi ( ${product.value.no_transaksi} )`,
                life: 3000,
              });
              product.value = {};
              await ApiPegawai.value
                .getPencatatan()
                .then((res) => {
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
                detail: `Gagal menghapus id ( ${product.value.id} )`,
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
      // console.log(dt.value);
      dt.value.exportCSV();
    };
    const exportCSVExpand = () => {
      // console.log(dtExpand.value);
      dtExpand.value.exportCSV();
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
    const dateRange = async () => {
      if (date3.value[0] != null) {
        if (date3.value[1] != null) {
          if (date3.value[0] <= date3.value[1]) {
            // console.log(`Mantap`);
          } else {
            toast.add({
              severity: "error",
              summary: "Filter",
              detail: `Tanggal mulai harus lebih kecil dari tanggal akhir`,
              life: 3000,
            });
          }
        }
      }
    };
    return {
      Transaksi,
      name,
      hideComfirmed,
      sendTransaction,
      position,
      addDataComfrim,
      kasir,
      pegawai,
      addData,
      satuan,
      jenisTransaksi,
      dateRange,
      expandedRows,
      onRowExpand,
      onRowCollapse,
      expandAll,
      collapseAll,
      loadingbutton,
      searchCountry,
      dt,
      dtExpand,
      filters1,
      filteredCountries,
      loading1,
      products,
      add,
      dateRange,
      update,
      updateExpand,
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
      hideDialogExpand,
      saveProduct,
      saveProductExpand,
      editProduct,
      editProductExpand,
      confirmDeleteProduct,
      deleteProduct,
      findIndexById,
      exportCSV,
      exportCSVExpand,
      confirmDeleteSelected,
      deleteSelectedProducts,
      home,
      minDate,
      items,
      date1,
      date2,
      date3,
    };
  },
  computed: {
    jumlahPembayaran: function () {
      return (
        parseInt(
          this.satuan.find(({ jumlah }) => jumlah === this.product.satuan)
        ) * parseInt(this.product.qty)
      );
    },
  },
  components: {
    "header-component": header,
    "footer-component": footer,
  },
  watch: {
    date1(newValue) {
      if (newValue != null) {
        let date = new Date(newValue);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let monthreal = date.getMonth();
        let ddt = date.getDate();
        if (ddt < 10) {
          ddt = "0" + ddt;
        }
        if (month < 10) {
          month = "0" + month;
        }
        this.date3[0] = year + "-" + month + "-" + ddt;
        // console.log(this.date3[0]);
      } else {
        this.date3[0] = null;
        // console.log(this.date3[0]);
      }
    },
    date2(newValue) {
      if (newValue != null) {
        let date = new Date(newValue);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let ddt = date.getDate();
        if (ddt < 10) {
          ddt = "0" + ddt;
        }
        if (month < 10) {
          month = "0" + month;
        }
        this.date3[1] = year + "-" + month + "-" + ddt;
        // console.log(this.date3[1]);
      } else {
        this.date3[1] = null;
        // console.log(this.date3[1]);
      }
    },
    dt(newValue) {
      // this.dt.push("newValue")
    },
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
