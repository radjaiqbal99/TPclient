<template>
  <!-- Jumbotron -->
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">
        <span> NatunaSandMine </span> <br />
        Your <span> Steps </span> Determine Your <span> Future </span>
      </h1>
      <!--<a href="" class="btn btn-primary tombol">Continue</a>-->
    </div>
  </div>
  <!-- akhir Jombotron -->

  <!-- Container -->
  <div class="container">
    <!-- info panel -->
    <div class="row justify-content-center">
      <div class="col-10 info-panel">
        <div class="row">
          <router-link class="dropdown-item" :to="{ path: '/dompetPegawai' }"
            >Tambang Pasir</router-link
          >
          <!-- <div class="col-lg">
            <img src="img/portofolio.png" alt="Employee" class="float-left">
            <h4> Portofolio</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="col-lg">
            <img src="img/project.png" alt="High-Res" class="float-left">
            <h4> Project</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="col-lg">
            <img src="img/security.png" alt="Security" class="float-left">
            <h4> Security</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>-->
        </div>
      </div>
    </div>
    <!-- akhir info panel -->

    <!-- Workingspace -->
    <div class="row workingspace">
      <div class="col-lg-6">
        <img src="img/jumbotron1.jpg" alt="workingspace" class="img-fluid" />
      </div>
      <div class="col-lg-5">
        <h3><span>work</span> like at <span>home</span></h3>
        <p>Berkarya mengikuti kata hati.</p>
        <a href="" class="btn btn-primary tombol">Gallery</a>
      </div>
    </div>

    <!-- Akhir Workingspace -->
    <div class="row justify-content-center">
      <div class="col-12 info-DD">\</div>
    </div>
    <!-- 
    <div class="row justify-content-center">
      <div class="col-12 info-DD">
        <div class="row">
          <div class="col-lg">
            <img src="img/logo.jpg" alt="Employee" class="float-left">
            <h4> logo</h4>
             <p>sebuah tulisan, sketsa, atau gambar yang mempunyai makna tertentu.</p>
          </div>
          <div class="col-lg">
            <img src="img/kosong.jpg" alt="High-Res" class="float-left">
            <h4> art</h4>
            <p>keahlian membuat karya yang bermutu, seperti tari, lukisan, ukiran.</p>
          </div>
          <div class="col-lg">
            <img src="img/3.png" alt="Security" class="float-left">
            <h4> music</h4>
            <p>seni yang memadukan suara vokal atau instrumental untuk keindahan bentuk atau ekspresi emosial.</p>
          </div>
        </div>
      </div>
    </div>
     -->

    <!-- Testimonial -->

    <section class="testimonial">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h5>
            Langkahmu sekarang akan menentukan kamu dimasa mendatang, gunakanlah
            dengan sebaik mungkin.
          </h5>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-6 justify-content-center d-flex">
          <figure class="figure">
            <img
              src="img/user.png"
              class="figure-img img-fluid rounded-circle"
              alt="testi 1"
            />
          </figure>
          <figure class="figure">
            <img
              src="img/dhikiii.jpg"
              class="figure-img img-fluid rounded-circle utama"
              alt="testi 2"
            />
            <figcaption class="figure-caption">
              <h5>Dhiki Romadinur</h5>
              <!-- <p>Designer/Programmer</p> -->
            </figcaption>
          </figure>
          <figure class="figure">
            <img
              src="img/user.png"
              class="figure-img img-fluid rounded-circle"
              alt="testi 3"
            />
          </figure>
        </div>
      </div>
    </section>

    <!-- Akhir Testimonial -->

    <!-- footer -->
    <div class="row footer">
      <div class="col text-center">
        <p>2021 All Right Reserved by SHDFOUR</p>
      </div>
    </div>
    <!-- Akhir Footer -->
  </div>
  <!-- Akhir Container -->
</template>
