import {createRouter, createWebHistory} from 'vue-router'

const routes =[
    {
        path: '/',
        name: 'login',
        component: () => import("../views/management-account/signIn.vue"),
        meta: {
            title:'shdfour'
        }
    },
    //DASHBOARD
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import("../views/menu/dashboard/dashboard.vue"),
        meta: {
            title: 'Dashboard'
        }
    },
    //TAMBANG PASIR
    //PEGAWAI
    {
        path: '/daftarPegawai',
        name: 'daftarPegawai',
        component: () => import("../views/menu/Pegawai/daftarPegawai.vue"),
        meta: {
            title: 'Daftar Pegawai'
        }
    },
    {
        path: '/daftarKasir',
        name: 'daftarKasir',
        component: ()=> import("../views/menu/kasir/daftarKasir.vue"),
        meta: {
            title: 'Daftar Kasir'
        }
    },
    //PENGATURAN HARGA
    //UPAH
    {
        path: '/upahKasir',
        name: 'upahKasir',
        component: () => import("../views/menu/Upah/upahKasir.vue"),
        meta: {
            title: 'Upah Kasir'
        }
    },
    {
        path: '/upahPegawai',
        name: 'upahPegawai',
        component: () => import("../views/menu/Upah/upahPegawai.vue"),
        meta: {
            title: 'Upah Pegawai'
        }
    },
    //HARGA
    {
        path: '/hargaPasir',
        name: 'hargaPasir',
        component: () => import("../views/menu/Pasir/hargaPasir.vue"),
        meta: {
            title: 'Harga Pasir'
        }
    },
    //PENCATATAN
    {
        path: '/pencatatan',
        name: 'pencatatan',
        component: () => import("../views/menu/Pencatatan/pencatatan.vue"),
        meta: {
            title: 'Pencatatan'
        }
    },
    //Deposit & Credit
    {
        path: '/dompetKasir',
        name: 'dompetKasir',
        component: () => import("../views/menu/Dompet/dompetKasir.vue"),
        meta: {
            title: 'Dompet Kasir'
        }
    },
    {
        path: '/dompetPegawai',
        name: 'dompetPegawai',
        component: () => import("../views/menu/Dompet/dompetPegawai.vue"),
        meta: {
            title: 'Dompet Pegawai'
        }
    },
    //Catatan Bon
    {
        path: '/bon',
        name: 'bon',
        component: () => import("../views/menu/Bon/catatanBon.vue"),
        meta: {
            title: 'Bon'
        }
    },

    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((toRoute, fromRoute, next) => {
    const isAuthenticated = JSON.parse(localStorage.getItem('auth'))
    // const isAuthenticated=false
    window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : '';
    if (toRoute.path !== "/" && !isAuthenticated) {
        console.log("belum")
        console.log(isAuthenticated)
        next({ path: "/" });
    }
    if (toRoute.path === "/" && isAuthenticated ) {
        console.log("telah")
        console.log(isAuthenticated)
        next({ path: "/dashboard" });
    }
        // console.log("has loging")
    else {
        next();
    }
})

export default router;