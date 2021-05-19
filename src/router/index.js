import {createRouter, createWebHistory} from 'vue-router'

const routes =[
    {
        path: '/',
        name: 'login',
        component: () => import("../views/management-account/signIn.vue"),
        meta: {
            title:'Tambang Pasir'
        }
    },
    {
        path: '/registration',
        name: 'registration', 
        component: () => import("../views/management-account/registration.vue"),
        meta: {
            title: 'Registrasi'
        }
    },
    {
        path: '/forget-password',
        name: 'forget-password',
        component: () => import("../views/management-account/forget-passsword.vue"),
        meta: {
            title: 'Forget Password'
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
        component: ()=> import("../views/menu/kasir/daftarKasir.vue")
    },
    //PENGATURAN HARGA
    //UPAH
    {
        path: '/upahKasir',
        name: 'upahKasir',
        component: () => import("../views/menu/Upah/upahKasir.vue")
    },
    {
        path: '/upahPegawai',
        name: 'upahPegawai',
        component: () => import("../views/menu/Upah/upahPegawai.vue")
    },
    //HARGA
    {
        path: '/hargaPasir',
        name: 'hargaPasir',
        component: () => import("../views/menu/Pasir/hargaPasir.vue")
    },
    //PENCATATAN
    {
        path: '/pencatatan',
        name: 'pencatatan',
        component: () => import("../views/menu/Pencatatan/pencatatan.vue")
    },
    //Deposit & Credit
    {
        path: '/dompetKasir',
        name: 'dompetKasir',
        component: () => import("../views/menu/Dompet/dompetKasir.vue")
    },
    {
        path: '/dompetPegawai',
        name: 'dompetPegawai',
        component: () => import("../views/menu/Dompet/dompetPegawai.vue")
    },
    //Catatan Bon
    {
        path: '/bon',
        name: 'bon',
        component: () => import("../views/menu/Bon/catatanBon.vue")
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