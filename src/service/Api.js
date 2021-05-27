import axios from 'axios'

export default class Api {
    // Daftar pegawai
    // Mengambil Seluruh Data
    getPegawai() {
        return axios.get(`https://natunasandmine.com/api/daftarPegawai`)
    }
    // Menambah Data
    addPegawai(value) {
        return axios.post(`https://natunasandmine.com/api/daftarPegawai`, value)
    }
    // Mengubah Data
    editPegawai(params, value) {
        return axios.put(`https://natunasandmine.com/api/daftarPegawai/${params}`, value)
    }
    //Menghapus Data
    deletePegawai(params) {
        return axios.delete(`https://natunasandmine.com/api/daftarPegawai/${params}`)
    }
    
    //KASIR
    // Mengambil Seluruh Data
    getKasir() {
        return axios.get(`https://natunasandmine.com/api/daftarKasir`)
    }
    // Menambah Data
    addKasir(value) {
        return axios.post(`https://natunasandmine.com/api/daftarKasir`, value)
    }
    // Mengubah Data
    editKasir(params, value) {
        console.log(`${params}:${value}`)
        return axios.put(`https://natunasandmine.com/api/daftarKasir/${params}`, value)
    }
    //Menghapus Data
    deleteKasir(params) {
        return axios.delete(`https://natunasandmine.com/api/daftarKasir/${params}`)
    }

    //Dompet
    getDompetKasir() {
        return axios.get('https://natunasandmine.com/api/dompetKasir')
    }
    getDompetPegawai() {
        return axios.get('https://natunasandmine.com/api/dompetPegawai')
    }

    // Upah Pegawai
    // Mengambil Seluruh Data
    getUpahPegawai() {
        return axios.get(`https://natunasandmine.com/api/upahPegawai`)
    }
    // Menambah Data
    addUpahPegawai(value) {
        return axios.post(`https://natunasandmine.com/api/upahPegawai`, value)
    }
    // Mengubah Data
    editUpahPegawai(params, value) {
        console.log(`${params}:${value}`)
        return axios.put(`https://natunasandmine.com/api/upahPegawai/${params}`, value)
    }
    //Menghapus Data
    deleteUpahPegawai(params) {
        return axios.delete(`https://natunasandmine.com/api/upahPegawai/${params}`)
    }
    // Upah Kasir
    // Mengambil Seluruh Data
    getUpahKasir() {
        return axios.get(`https://natunasandmine.com/api/upahKasir`)
    }
    // Menambah Data
    addUpahKasir(value) {
        return axios.post(`https://natunasandmine.com/api/upahKasir`, value)
    }
    // Mengubah Data
    editUpahKasir(params, value) {
        console.log(`${params}:${value}`)
        return axios.put(`https://natunasandmine.com/api/upahKasir/${params}`, value)
    }
    //Menghapus Data
    deleteUpahKasir(params) {
        return axios.delete(`https://natunasandmine.com/api/upahKasir/${params}`)
    }
    // Harga Pasir
    // Mengambil Seluruh Data
    getHargaPasir() {
        return axios.get(`https://natunasandmine.com/api/hargaPasir`)
    }
    // Menambah Data
    addHargaPasir(value) {
        return axios.post(`https://natunasandmine.com/api/hargaPasir`, value)
    }
    // Mengubah Data
    editHargaPasir(params, value) {
        console.log(`${params}:${value}`)
        return axios.put(`https://natunasandmine.com/api/hargaPasir/${params}`, value)
    }
    //Menghapus Data
    deleteHargaPasir(params) {
        return axios.delete(`https://natunasandmine.com/api/hargaPasir/${params}`)
    }

    // resoucesForm
    getResourcesForm() {
        return axios.get(`https://natunasandmine.com/api/rf`)
    }

    //pencatatan
    getPencatatan() {
        return axios.get(`https://natunasandmine.com/api/pencatatan`)
    }
    addPencatatan(value) {
        return axios.post(`https://natunasandmine.com/api/pencatatan`, value)
    }
    deletePencatatan(value) {
        return axios.post(`https://natunasandmine.com/api/pencatatanDelete`, value)
    }
    //BON Truk
    getBon() {
        return axios.get(`https://natunasandmine.com/api/bon`)
    }

    //Dashboard
    getDashboard() {
        return axios.get(`https://natunasandmine.com/api/dashboard`)
    }
    //new Password
    sendPassword(value) {
        return axios.post(`https://natunasandmine.com/api/resetPassword`,value)
    }
}