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
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body p-2 text-center">
                    <div class="text-end text-green">
                      <span
                        class="text-green d-inline-flex align-items-center lh-1"
                      >
                      </span>
                    </div>
                    <div class="text-muted m-0">New Tickets</div>
                    <div class="h1 mb-3">43</div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body p-2 text-center">
                    <div class="text-end text-green">
                      <span
                        class="text-green d-inline-flex align-items-center lh-1"
                      >
                      </span>
                    </div>
                    <div class="text-muted m-0">New Tickets</div>
                    <div class="h1 mb-3">43</div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card">
                  <div class="card-body p-2 text-center">
                    <div class="text-end text-green">
                      <span
                        class="text-green d-inline-flex align-items-center lh-1"
                      >
                      </span>
                    </div>
                    <div class="text-muted m-0">New Tickets</div>
                    <div class="h1 mb-3">43</div>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card" style="height: calc(24rem + 10px)">
                  <div class="card-header">
                    <h2 class="page-title">ACTIVITY</h2>
                  </div>
                  <div
                    class="card-body card-body-scrollable card-body-scrollable-shadow"
                  >
                    <div class="divide-y">
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar">JL</span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Jeffie Lewzey</strong> commented on your
                              <strong>"I'm not a witch."</strong> post.
                            </div>
                            <div class="text-muted">yesterday</div>
                          </div>
                          <div class="col-auto align-self-center">
                            <div class="badge bg-primary"></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar" style=""></span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              It's <strong>Mallory Hulme</strong>'s birthday.
                              Wish him well!
                            </div>
                            <div class="text-muted">2 days ago</div>
                          </div>
                          <div class="col-auto align-self-center">
                            <div class="badge bg-primary"></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar" style=""></span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Dunn Slane</strong> posted
                              <strong>"Well, what do you want?"</strong>.
                            </div>
                            <div class="text-muted">today</div>
                          </div>
                          <div class="col-auto align-self-center">
                            <div class="badge bg-primary"></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar" style=""></span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Emmy Levet</strong> created a new project
                              <strong>Morning alarm clock</strong>.
                            </div>
                            <div class="text-muted">4 days ago</div>
                          </div>
                          <div class="col-auto align-self-center">
                            <div class="badge bg-primary"></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar" style=""></span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Maryjo Lebarree</strong> liked your photo.
                            </div>
                            <div class="text-muted">2 days ago</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar">EP</span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Egan Poetz</strong> registered new client
                              as <strong>Trilia</strong>.
                            </div>
                            <div class="text-muted">yesterday</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar" style=""></span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Kellie Skingley</strong> closed a new deal
                              on project
                              <strong>Pen Pineapple Apple Pen</strong>.
                            </div>
                            <div class="text-muted">2 days ago</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar" style=""></span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Christabel Charlwood</strong> created a
                              new project for <strong>Wikibox</strong>.
                            </div>
                            <div class="text-muted">4 days ago</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar">HS</span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Haskel Shelper</strong> change status of
                              <strong>Tabler Icons</strong> from
                              <strong>open</strong> to <strong>closed</strong>.
                            </div>
                            <div class="text-muted">today</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar" style=""></span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Lorry Mion</strong> liked
                              <strong>Tabler UI Kit</strong>.
                            </div>
                            <div class="text-muted">yesterday</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar" style=""></span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Leesa Beaty</strong> posted new video.
                            </div>
                            <div class="text-muted">2 days ago</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar" style=""></span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Perren Keemar</strong> and 3 others
                              followed you.
                            </div>
                            <div class="text-muted">2 days ago</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar">SA</span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Sunny Airey</strong> upload 3 new photos
                              to category <strong>Inspirations</strong>.
                            </div>
                            <div class="text-muted">2 days ago</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar" style=""></span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Geoffry Flaunders</strong> made a
                              <strong>$10</strong> donation.
                            </div>
                            <div class="text-muted">2 days ago</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar" style=""></span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Thatcher Keel</strong> created a profile.
                            </div>
                            <div class="text-muted">3 days ago</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar" style=""></span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Dyann Escala</strong> hosted the event
                              <strong>Tabler UI Birthday</strong>.
                            </div>
                            <div class="text-muted">4 days ago</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar" style=""></span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Avivah Mugleston</strong> mentioned you on
                              <strong>Best of 2020</strong>.
                            </div>
                            <div class="text-muted">2 days ago</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="col-auto">
                            <span class="avatar">AA</span>
                          </div>
                          <div class="col">
                            <div class="text-truncate">
                              <strong>Arlie Armstead</strong> sent a Review
                              Request to <strong>Amanda Blake</strong>.
                            </div>
                            <div class="text-muted">2 days ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row row-cards">
                  <div class="col-12">
                    <div class="card card-sm">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <span class="bg-blue text-white avatar"
                              ><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path
                                  d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
                                />
                                <path d="M12 3v3m0 12v3" />
                              </svg>
                            </span>
                          </div>
                          <div class="col">
                            <div class="font-weight-medium">132 Sales</div>
                            <div class="text-muted">12 waiting payments</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="card card-sm">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <span class="bg-green text-white avatar"
                              ><!-- Download SVG icon from http://tabler-icons.io/i/shopping-cart -->
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <circle cx="6" cy="19" r="2" />
                                <circle cx="17" cy="19" r="2" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l14 1l-1 7h-13" />
                              </svg>
                            </span>
                          </div>
                          <div class="col">
                            <div class="font-weight-medium">78 Orders</div>
                            <div class="text-muted">32 shipped</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="card card-sm">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <span class="bg-yellow text-white avatar"
                              ><!-- Download SVG icon from http://tabler-icons.io/i/users -->
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <circle cx="9" cy="7" r="4" />
                                <path
                                  d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                                />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                              </svg>
                            </span>
                          </div>
                          <div class="col">
                            <div class="font-weight-medium">1352 Members</div>
                            <div class="text-muted">163 registered today</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="card card-sm">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <span class="bg-twitter text-white avatar"
                              ><!-- Download SVG icon from http://tabler-icons.io/i/brand-twitter -->
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path
                                  d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="col">
                            <div class="font-weight-medium">623 Shares</div>
                            <div class="text-muted">16 today</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="card card-sm">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <span class="bg-facebook text-white avatar"
                              ><!-- Download SVG icon from http://tabler-icons.io/i/brand-facebook -->
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path
                                  d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="col">
                            <div class="font-weight-medium">132 Likes</div>
                            <div class="text-muted">21 today</div>
                          </div>
                        </div>
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
import header from "../../component/header.vue";
import footer from "../../component/footer.vue";
import { ref, onMounted } from "vue";

export default {
  setup(){
    const active =ref(["active"])
    const home = ref({
      icon: "pi pi-home",
      to: "/",
    });
    return{
      active,
      home
    }
  },
  components: {
    "header-component": header,
    "footer-component": footer,
  },
};
</script>
