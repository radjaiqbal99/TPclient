import axios from 'axios'

export default class Api {
    // Daftar pegawai
    // Mengambil Seluruh Data
    getPegawai() {
        return axios.get(`http://103.31.38.42/api/daftarPegawai`)
    }
    // Menambah Data
    addPegawai(value) {
        return axios.post(`http://103.31.38.42/api/daftarPegawai`, value)
    }
    // Mengubah Data
    editPegawai(params, value) {
        return axios.put(`http://103.31.38.42/api/daftarPegawai/${params}`, value)
    }
    //Menghapus Data
    deletePegawai(params) {
        return axios.delete(`http://103.31.38.42/api/daftarPegawai/${params}`)
    }
    
    //KASIR
    // Mengambil Seluruh Data
    getKasir() {
        return axios.get(`http://103.31.38.42/api/daftarKasir`)
    }
    // Menambah Data
    addKasir(value) {
        return axios.post(`http://103.31.38.42/api/daftarKasir`, value)
    }
    // Mengubah Data
    editKasir(params, value) {
        console.log(`${params}:${value}`)
        return axios.put(`http://103.31.38.42/api/daftarKasir/${params}`, value)
    }
    //Menghapus Data
    deleteKasir(params) {
        return axios.delete(`http://103.31.38.42/api/daftarKasir/${params}`)
    }

    //Dompet
    getDompetKasir() {
        return axios.get('http://103.31.38.42/api/dompetKasir')
    }
    getDompetPegawai() {
        return axios.get('http://103.31.38.42/api/dompetPegawai')
    }

    // Upah Pegawai
    // Mengambil Seluruh Data
    getUpahPegawai() {
        return axios.get(`http://103.31.38.42/api/upahPegawai`)
    }
    // Menambah Data
    addUpahPegawai(value) {
        return axios.post(`http://103.31.38.42/api/upahPegawai`, value)
    }
    // Mengubah Data
    editUpahPegawai(params, value) {
        console.log(`${params}:${value}`)
        return axios.put(`http://103.31.38.42/api/upahPegawai/${params}`, value)
    }
    //Menghapus Data
    deleteUpahPegawai(params) {
        return axios.delete(`http://103.31.38.42/api/upahPegawai/${params}`)
    }
    // Upah Kasir
    // Mengambil Seluruh Data
    getUpahKasir() {
        return axios.get(`http://103.31.38.42/api/upahKasir`)
    }
    // Menambah Data
    addUpahKasir(value) {
        return axios.post(`http://103.31.38.42/api/upahKasir`, value)
    }
    // Mengubah Data
    editUpahKasir(params, value) {
        console.log(`${params}:${value}`)
        return axios.put(`http://103.31.38.42/api/upahKasir/${params}`, value)
    }
    //Menghapus Data
    deleteUpahKasir(params) {
        return axios.delete(`http://103.31.38.42/api/upahKasir/${params}`)
    }
    // Harga Pasir
    // Mengambil Seluruh Data
    getHargaPasir() {
        return axios.get(`http://103.31.38.42/api/hargaPasir`)
    }
    // Menambah Data
    addHargaPasir(value) {
        return axios.post(`http://103.31.38.42/api/hargaPasir`, value)
    }
    // Mengubah Data
    editHargaPasir(params, value) {
        console.log(`${params}:${value}`)
        return axios.put(`http://103.31.38.42/api/hargaPasir/${params}`, value)
    }
    //Menghapus Data
    deleteHargaPasir(params) {
        return axios.delete(`http://103.31.38.42/api/hargaPasir/${params}`)
    }

    // resoucesForm
    getResourcesForm() {
        return axios.get(`http://103.31.38.42/api/resourcesForm`)
    }

    //pencatatan
    addPencatatan(value) {
        return axios.post(`http://103.31.38.42/api/pencatatan`, value)
    }
}