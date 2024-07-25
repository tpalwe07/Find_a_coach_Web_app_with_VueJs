import { createApp } from 'vue';

import router from './Router.js';
import store from './store/storeIndex.js';
import App from './App.vue';
import BaseCard from './Components/ui/BaseCard.vue';
import BaseButton from './Components/ui/BaseButton.vue';
import BaseBadge from './Components/ui/BaseBadge.vue'

const app= createApp(App);

app.use(router);
app.use(store);

app.component('base-card',BaseCard);
app.component('base-button',BaseButton);
app.component('base-badge',BaseBadge);


app.mount('#app');
