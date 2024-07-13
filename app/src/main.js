import { createApp, h, reactive } from 'vue'
import VueClipboard from 'vue3-clipboard'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueLogger from 'vuejs3-logger'
import { loadLanguageAsync, i18n } from './setup/i18n-setup.js'
import { createMetaManager } from "vue-meta";
import primeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice';
import Toaster from '@meforma/vue-toaster'
// import ConfirmDialog from 'primevue/confirmdialog';
import '../assets/plugins/bootstrap/bootstrap-grid.min.css'
import '../assets/plugins/bootstrap/bootstrap-utilities.min.css'
// import '../node_modules/primevue/resources/themes/aura-light-green/theme.css'
import '../node_modules/primevue/resources/primevue.min.css'
import '../assets/fonts/iconsax/style.css'
import 'primeicons/primeicons.css'
import "../node_modules/primeflex/primeflex.min.css"
// import "../node_modules/primeflex/themes/primeone-light.css"


import '../assets/css/template.scss'
import axios from "axios"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//pinia
import { createPinia, PiniaVuePlugin } from 'pinia'

import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from 'primevue/badgedirective';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Chart from 'primevue/chart';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
// import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Knob from 'primevue/knob';
import Galleria from 'primevue/galleria';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
// import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel'
import ScrollTop from 'primevue/scrolltop';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import Skeleton from 'primevue/skeleton';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import Tag from 'primevue/tag';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Timeline from 'primevue/timeline';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tooltip from 'primevue/tooltip';
import ToggleButton from 'primevue/togglebutton';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';

// import CodeHighlight from './AppCodeHighlight';
// import BlockViewer from './BlockViewer';

const isProduction = process.env.NODE_ENV === 'production'

const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true,
}

var vm = createApp({
  render: () => h(App),
})
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
vm.$router = router
vm.$pinia = pinia
// vm.$confirm = ConfirmationService
vm.component("ConfirmDialog", ConfirmDialog)
window.app = vm
vm.config.globalProperties.$appState = reactive({ theme: 'lara-light-indigo', darkTheme: false });

vm.use(primeVue, { ripple: true, inputStyle: 'outlined' });
// vm.use(ConfirmationService);
vm.use(ToastService);
vm.use(router);

vm.directive('tooltip', Tooltip);
vm.directive('ripple', Ripple);
// vm.directive('code', CodeHighlight);
vm.directive('badge', BadgeDirective);
vm.directive('styleclass', StyleClass);

vm.component('Accordion', Accordion);
vm.component('AccordionTab', AccordionTab);
vm.component('AutoComplete', AutoComplete);
vm.component('Avatar', Avatar);
vm.component('AvatarGroup', AvatarGroup);
vm.component('Badge', Badge);
vm.component('Breadcrumb', Breadcrumb);
vm.component('Button', Button);
vm.component('Calendar', Calendar);
vm.component('Card', Card);
vm.component('Carousel', Carousel);
vm.component('Chart', Chart);
vm.component('Checkbox', Checkbox);
vm.component('Chip', Chip);
vm.component('Chips', Chips);
vm.component('ColorPicker', ColorPicker);
vm.component('Column', Column);
// vm.component('ConfirmDialog', ConfirmDialog);
vm.component('ConfirmPopup', ConfirmPopup);
vm.component('ContextMenu', ContextMenu);
vm.component('DataTable', DataTable);
vm.component('DataView', DataView);
vm.component('DataViewLayoutOptions', DataViewLayoutOptions);
vm.component('Dialog', Dialog);
vm.component('Divider', Divider);
vm.component('Dropdown', Dropdown);
vm.component('Fieldset', Fieldset);
vm.component('FileUpload', FileUpload);
vm.component('Image', Image);
vm.component('InlineMessage', InlineMessage);
vm.component('Inplace', Inplace);
vm.component('InputMask', InputMask);
vm.component('InputNumber', InputNumber);
vm.component('InputSwitch', InputSwitch);
vm.component('InputText', InputText);
vm.component('Galleria', Galleria);
vm.component('Knob', Knob);
vm.component('Listbox', Listbox);
vm.component('MegaMenu', MegaMenu);
vm.component('Menu', Menu);
vm.component('Menubar', Menubar);
vm.component('Message', Message);
vm.component('MultiSelect', MultiSelect);
vm.component('OrderList', OrderList);
// vm.component('OrganizationChart', OrganizationChart);
vm.component('OverlayPanel', OverlayPanel);
vm.component('Paginator', Paginator);
vm.component('Panel', Panel);
vm.component('PanelMenu', PanelMenu);
vm.component('Password', Password);
vm.component('PickList', PickList);
vm.component('ProgressBar', ProgressBar);
vm.component('RadioButton', RadioButton);
vm.component('Rating', Rating);
vm.component('SelectButton', SelectButton);
vm.component('ScrollPanel', ScrollPanel);
vm.component('ScrollTop', ScrollTop);
vm.component('Slider', Slider);
vm.component('Sidebar', Sidebar);
vm.component('Skeleton', Skeleton);
vm.component('SplitButton', SplitButton);
vm.component('Splitter', Splitter);
vm.component('SplitterPanel', SplitterPanel);
vm.component('Steps', Steps);
vm.component('TabMenu', TabMenu);
vm.component('TabView', TabView);
vm.component('TabPanel', TabPanel);
vm.component('Tag', Tag);
vm.component('Textarea', Textarea);
vm.component('TieredMenu', TieredMenu);
vm.component('Timeline', Timeline);
vm.component('Toast', Toast);
vm.component('Toolbar', Toolbar);
vm.component('ToggleButton', ToggleButton);
vm.component('Tree', Tree);
vm.component('TreeSelect', TreeSelect);
vm.component('TreeTable', TreeTable);
vm.component('TriStateCheckbox', TriStateCheckbox);

// vm.component('BlockViewer', BlockViewer);
vm.use(PiniaVuePlugin)
vm.use(pinia)
vm.use(i18n)
vm.use(primeVue)
vm.use(router)
vm.use(ConfirmationService)
vm.use(ConfirmDialog)
vm.use(Toaster, {
  position: 'top-right',
  duration: 5000,
})

vm.use(createMetaManager())

vm.use(VueLogger, options)
vm.use(VueClipboard)

var baseURL = '/server'
var cdnBaseURL = '/cdnserver'


axios.defaults.baseURL = baseURL
// TODO: set axios header on login  to session storage
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

// TODO: delete axios header on logout and clear session storage
// delete axios.defaults.headers.common['Authorization']
// sessionStorage.setItem(
//   'user-token',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.qCJ-hcgSTLgkaT7kfI6--xRm4IEpPFQmMj3UZ94gNo4'
// )

// vm.use(VueLocalStorage);

// router.beforeEach((to, from, next) => {
//   loadLanguageAsync(to.meta.lang).then(() => next())

//   const nearestWithTitle = to.matched
//     .slice()
//     .reverse()
//     .find((r) => r.meta && r.meta.title)
//   const nearestWithMeta = to.matched
//     .slice()
//     .reverse()
//     .find((r) => r.meta && r.meta.metaTags)

//   if (nearestWithTitle) document.title = nearestWithTitle.meta.title

//   Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) => el.parentNode.removeChild(el))

//   if (!nearestWithMeta) return next()
//   nearestWithMeta.meta.metaTags
//     .map((tagDef) => {
//       const tag = document.createElement('meta')
//       Object.keys(tagDef).forEach((key) => {
//         tag.setAttribute(key, tagDef[key])
//       })
//       tag.setAttribute('data-vue-router-controlled', '')
//       return tag
//     })
//     .forEach((tag) => document.head.appendChild(tag))
//   next()
// })
// axios.interceptors.request.use(function (config) {
//   // if (config.url.indexOf('/r/') !== -1) {  // Check for restricted request
//   if (config.headers.common['Authorization']) {
//   } else {
//   }
//   // }
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })
vm.mount('#app')
