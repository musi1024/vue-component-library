import Vue from 'vue';
import BaseAlert from '../components/BaseAlert';
import Message from '../components/Popup/Message';

const list = [
  ['$alert', BaseAlert],
  ['$message', Message]
];

function create(component) {
  return (content, config) => {
    let props = { content, ...config };
    const vm = new Vue({
      render(h) {
        return h(component, { props });
      }
    }).$mount();

    document.body.appendChild(vm.$el);

    const comp = vm.$children[0];
    comp.remove = function() {
      document.body.removeChild(vm.$el);
      vm.$destroy();
    };
    return comp;
  };
}

export default {
  install() {
    list.map(i => {
      Object.defineProperty(Vue.prototype, i[0], {
        get: function get() {
          return create(i[1]);
        }
      });
    });
  }
};
