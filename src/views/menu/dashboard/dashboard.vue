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
              <div class="col-12 bg">
                <div class="card mb-3 p-3 pt-4">
                  <div class="card-body" style="overflow: scroll;">
                    <apexchart
                      height="300"
                      width="3000"
                      :options="chartOptions"
                      :series="series"
                    ></apexchart>
                  </div>
                </div>
              </div>
            </div>
            <div class="row row-deck row-cards" style="height: auto">
              <div class="col-12 col-md-12">
                <div class="row row-deck row-cards">
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body p-2 mt-3 text-center">
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
                        <div class="text-muted mb-1" style="font-size:14pt;"><b>JUMLAH PENJUALAN</b></div>
                        <div class="h1 mb-3">{{ jumlahPenjualan }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body p-2 mt-3 text-center">
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
                        <div class="text-muted mb-1" style="font-size:14pt;"><b>PENDAPATAN BERSIH</b></div>
                        <div class="h1 mb-3">Rp {{ formatCurrency(pendapatanBersih) }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body p-2 mt-3 text-center p-text-center">
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
                        <div class="text-muted mb-1" style="font-size:14pt;"><b>BON</b></div>
                        <div class="h1 mb-3">Rp {{ formatCurrency(Bon) }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body p-2 mt-3 text-center">
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
                        <div class="text-muted mb-1" style="font-size:14pt;"><b>UPAH PEGAWAI</b></div>
                        <div class="h1 mb-3">Rp {{ formatCurrency(upahPegawai) }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body p-2 mt-3 text-center">
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
                        <div class="text-muted mb-1" style="font-size:14pt;"><b>UPAH KASIR</b></div>
                        <div class="h1 mb-3">Rp {{ formatCurrency(upahKasir) }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body p-2 mt-3 text-center">
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
                        <div class="text-muted mb-1" style="font-size:14pt;"><b>PENGELUARAN TAMBANG</b></div>
                        <div class="h1 mb-3">Rp {{ formatCurrency(pengeluaranTambang) }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body p-2 mt-3 text-center">
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
                        <div class="text-muted mb-1" style="font-size:14pt;"><b>JUMLAH PEGAWAI</b></div>
                        <div class="h1 mb-3">{{ jumlahPegawai }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body p-2 mt-3 text-center">
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
                        <div class="text-muted mb-1" style="font-size:14pt;"><b>JUMLAH KASIR</b></div>
                        
                        <div class="h1 mb-3">{{ jumlahKasir }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body p-2 mt-2 text-center">
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
                        <div class="text-muted mb-1" style="font-size:14pt;"><b>JUMLAH TRANSAKSI</b></div>
                        <div class="h1 mb-3">{{ jumlahTransaksi }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <footer-component></footer-component>
    </div>
  </body>
</template>

<script>
import header from "/src/views/component/header.vue";
import footer from "/src/views/component/footer.vue";
import apiDashboard from "/src/service/Api";
import { ref, onMounted } from "vue";
import { data } from "jquery";

export default {
  data: function () {
    return {};
  },
  setup() {
    onMounted(async () => {
      await ApiDashboard.value
        .getDashboard()
        .then(async (res) => {
          date.value = res.data.date;
          jumlah.value = res.data.jumlah;
          jumlahPenjualan.value=res.data.jumlahpenjualan
          pendapatanBersih.value = res.data.pendapatanBersih;
          Bon.value = res.data.jumlahBon;
          upahPegawai.value = res.data.upahpegawai;
          upahKasir.value = res.data.upahkasir;
          jumlahKasir.value = res.data.jumlahkasir;
          pengeluaranTambang.value = res.data.pengeluarantambang;
          jumlahPegawai.value = res.data.jumlahpegawai;
          jumlahTransaksi.value = res.data.jumlahtransaksi;
          console.log(date.value);
          console.log(jumlah.value);
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
    const product = ref({});
    const products = ref({});
    const date = ref([]);
    const jumlahPenjualan = ref([]);
    const pendapatanBersih = ref([]);
    const Bon = ref([]);
    const upahPegawai = ref([]);
    const upahKasir = ref([]);
    const pengeluaranTambang = ref([]);
    const jumlahPegawai = ref([]);
    const jumlahKasir = ref([]);
    const jumlahTransaksi = ref([]);
    const jumlah = ref([]);
    const chartOptions = ref({
      chart: {
        id: "vuechart-example",
        type: "area",
        height: "300",
      },
      title: {
        text: "PENJUALAN PASIR",
        align: "left",
      },
      subtitle: {
        text: "Jumlah penjualan pasir bulan ini",
        align: "left",
      },
      xaxis: {
        categories: date,
      },
    });
    const series = ref([
      {
        name: "Jumlah Penjualan",
        data: jumlah,
      },
    ]);
    const ApiDashboard = ref(new apiDashboard());
    const active = ref(["active"]);
    const home = ref({
      icon: "pi pi-home",
      to: "/",
    });
    const items = ref([{ label: "Dashboard", to: "/dashboard" }]);
    const formatCurrency = (value) => {
      return value.toLocaleString({
        style: "currency",
        currency: "IDP",
      });
    };

    return {
      formatCurrency,
      date,
      jumlahPenjualan,
      jumlah,
      Bon,
      upahKasir,
      pengeluaranTambang,
      jumlahKasir,
      jumlahTransaksi,
      jumlahPegawai,
      upahPegawai,
      pendapatanBersih,
      product,
      products,
      chartOptions,
      series,
      active,
      items,
      home,
    };
  },
  components: {
    "header-component": header,
    "footer-component": footer,
  },
};
</script>
