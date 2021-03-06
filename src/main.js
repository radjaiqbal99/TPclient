import {
    createApp
} from 'vue'
import ConfirmationService from 'primevue/confirmationservice'
import InputNumber from 'primevue/inputnumber';
import ConfirmPopup from 'primevue/confirmpopup'
import RadioButton from 'primevue/radiobutton';
import Chip from 'primevue/chip';
import router from './router/index.js'
import MultiSelect from 'primevue/multiselect'
import Password from 'primevue/password'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import ProgressSpinner from 'primevue/progressspinner';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import AutoComplete from 'primevue/autocomplete'
import Dropdown from 'primevue/dropdown'
import Textarea from 'primevue/textarea'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import PrimeVue from 'primevue/config';
import Breadcrumb from 'primevue/breadcrumb';
import InputMask from 'primevue/inputmask';
import Dialog from 'primevue/dialog';
import Badge from 'primevue/badge';
import DataTable from 'primevue/datatable/datatable.esm';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import VueApexCharts from 'vue3-apexcharts/dist/vue3-apexcharts.common'

import 'sweetalert2/dist/sweetalert2.min.css';
import '@tabler/core/dist/css/tabler.min.css'
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons
import '@tabler/core/dist/js/tabler.min.js'


const app = createApp(App)
app.use(VueSweetalert2);
app.use(ConfirmationService)
app.use(ToastService)
app.use(router)
app.use(VueApexCharts)
app.use(PrimeVue, {
    ripple: true
})
app.component('Toast', Toast)
app.component('Badge', Badge)
app.component('InputNumber', InputNumber)
app.component('RadioButton', RadioButton)
app.component('Chip', Chip)
app.component('MultiSelect', MultiSelect)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('InputMask', InputMask)
app.component('ConfirmPopup', ConfirmPopup)
app.component('ProgressSpinner', ProgressSpinner)
app.component('AutoComplete', AutoComplete)
app.component('Password', Password);
app.component('Dialog', Dialog);
app.component('Breadcrumb', Breadcrumb);
app.component('Dropdown', Dropdown);
app.component('Textarea', Textarea);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toolbar', Toolbar);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.mount('#app')