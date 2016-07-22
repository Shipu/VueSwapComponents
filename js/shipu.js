/*
 Author          : Shipu Ahamed
 facebook        : http://fb.me/DeesheharaShipu
 Website         : http://shipuahamed.com
 */

Vue.component('templateOne', {
    template: '#templateOne',
    methods: {
        nextorprevious: function (msg) {
            this.$parent.setmsg(msg);
        }
    }
});

Vue.component('templateTwo', {
    template: '#templateTwo',
    methods: {
        nextorprevious: function (msg) {
            this.$parent.setmsg(msg)
        }
    }
});

Vue.component('templateThree', {
    template: '#templateThree',
    methods: {
        nextorprevious: function (msg) {
            this.$parent.setmsg(msg)
        }
    }
});

Vue.component('templateFour', {
    template: '#templateFour',
    methods: {
        nextorprevious: function (msg) {
            this.$parent.setmsg(msg)
        }
    }
});

Vue.component('templateFive', {
    template: '#templateFive',
    methods: {
        nextorprevious: function (msg) {
            this.$parent.setmsg(msg)
        }
    }
});

var vm = new Vue({
    el: 'body',
    data: {
        msg: 'templateOne',
        className: {
            templateOne    : 'active',
            templateTwo    : '',
            templateThree  : '',
            templateFour   : '',
            templateFive   : '',
        }
    },
    methods: {
        setmsg: function (msg) {
            this.msg = msg;
            var status = ['templateOne', 'templateTwo', 'templateThree', 'templateFour', 'templateFive'];
            var f = 1;
            var className = this.className;
            status.forEach(function (value) {
                if(f) {
                    className[value] = 'active';
                } else {
                    className[value] = '';
                }

                if(value==msg) {
                    f = 0;
                }
            });
        }
    }
});