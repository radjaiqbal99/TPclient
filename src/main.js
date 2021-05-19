import { createApp } from 'vue'

import ConfirmationService from 'primevue/confirmationservice'
import ConfirmPopup from 'primevue/confirmpopup'
import router from './router'
import Password from 'primevue/password'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner';
import ScrollTop from 'primevue/scrolltop';
import ScrollPanel from 'primevue/scrollpanel'
// import InputNumber from 'primevue/inputnumber'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import AutoComplete from 'primevue/autocomplete'
import RadioButton  from 'primevue/radiobutton'
import Dropdown from 'primevue/dropdown'
import Rating   from 'primevue/rating'
import Textarea from 'primevue/textarea'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import MultiSelect from 'primevue/multiselect';
import FileUpload from 'primevue/fileupload'
import Toolbar from 'primevue/toolbar'
import PrimeVue from 'primevue/config';
import Breadcrumb from 'primevue/breadcrumb';
import InputMask from 'primevue/inputmask';
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Calendar from 'primevue/calendar';
import Chip from 'primevue/chip';
import ColumnGroup from 'primevue/columngroup';
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VCalendar from 'v-calendar'


// import $ from 'jquery'

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons




// window.Vue = require('vue').default;

// Vue.component('header-component',require('./views/component/header.vue'))
const app = createApp(App)
// Vue.use(VuePageTitle, {router})
app.use(VueSweetalert2);
app.use(VCalendar);
// app.use(VuePageTitle, { router })
app.use(ConfirmationService)
app.use(ToastService)
app.use(router)
app.use(PrimeVue, { ripple: true })
app.component('Toast', Toast)
// app.component('downloadExcel', JsonExcel)
app.component('Calendar', Calendar)
app.component('MultiSelect', MultiSelect)
app.component('TabView', TabView)
app.component('Chip', Chip)
app.component('TabPanel', TabPanel)
app.component('ScrollPanel', ScrollPanel)
app.component('ScrollTop', ScrollTop)
app.component('InputMask', InputMask)
app.component('ConfirmPopup', ConfirmPopup)
app.component('ProgressBar',ProgressBar)
app.component('ProgressSpinner',ProgressSpinner)
app.component('AutoComplete', AutoComplete)
app.component('Password', Password);
app.component('Dialog', Dialog);
app.component('Breadcrumb', Breadcrumb);
app.component('RadioButton', RadioButton);
app.component('Dropdown', Dropdown);
app.component('Textarea', Textarea);
app.component('Rating', Rating);
app.component('InputText', InputText);
app.component('FileUpload', FileUpload);
app.component('Button', Button);
app.component('Toolbar', Toolbar);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.mount('#app')


