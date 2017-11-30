import Vuebar from 'vuebar';
import VueScrollTo from 'vue-scrollto';
import ToggleButton from 'vue-js-toggle-button';

import InfiniteScroll from '../components/Common/InfiniteScroll';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import RelativeTime from '../components/Common/RelativeTime';

const install = (Vue) => {
  Vue.use(VueScrollTo);
  Vue.use(ToggleButton);
  Vue.use(Vuebar);

  Vue.component('infinite-scroll', InfiniteScroll);
  Vue.component('loading-spinner', LoadingSpinner);
  Vue.component('relative-time', RelativeTime);
};

export default install;