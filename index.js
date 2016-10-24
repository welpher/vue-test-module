import Test from './components/test/index.vue';

const install = (Vue) =>{
    if(install.installed) return;
    Vue.component(Cell.name,Cell);
    
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
    install,
    Test
}