/*
 MIT
*/
(function(y,l){"object"===typeof exports&&"undefined"!==typeof module?module.exports=l():"function"===typeof define&&define.amd?define(l):y.Vuex=l()})(this,function(){function y(b){r&&(b._devtoolHook=r,r.emit("vuex:init",b),r.on("vuex:travel-to-state",function(a){b.replaceState(a)}),b.subscribe(function(b,c){r.emit("vuex:mutation",b,c)}))}function l(b,a){Object.keys(b).forEach(function(c){return a(b[c],c)})}function m(b,a){if(!b)throw Error("[vuex] "+a);}function C(b,a,c){D(b,c);a.update(c);if(c.modules)for(var d in c.modules){if(!a.getChild(d)){console.warn("[vuex] trying to add a new module '"+
d+"' on hot reloading, manual reload is needed");break}C(b.concat(d),a.getChild(d),c.modules[d])}}function D(b,a){Object.keys(E).forEach(function(c){if(a[c]){var d=E[c];l(a[c],function(a,g){var f=d.assert(a);g=c+" should be "+d.expected+' but "'+c+"."+g+'"';0<b.length&&(g+=' in module "'+b.join(".")+'"');g+=" is "+JSON.stringify(a)+".";m(f,g)})}})}function F(b,a){0>a.indexOf(b)&&a.push(b);return function(){var c=a.indexOf(b);-1<c&&a.splice(c,1)}}function G(b,a){b._actions=Object.create(null);b._mutations=
Object.create(null);b._wrappedGetters=Object.create(null);b._modulesNamespaceMap=Object.create(null);var c=b.state;t(b,c,[],b._modules.root,!0);z(b,c,a)}function z(b,a,c){var d=b._vm;b.getters={};var e={};l(b._wrappedGetters,function(a,c){e[c]=function(){return a(b)};Object.defineProperty(b.getters,c,{get:function(){return b._vm[c]},enumerable:!0})});var g=k.config.silent;k.config.silent=!0;b._vm=new k({data:{$$state:a},computed:e});k.config.silent=g;b.strict&&M(b);d&&(c&&b._withCommit(function(){d._data.$$state=
null}),k.nextTick(function(){return d.$destroy()}))}function t(b,a,c,d,e){var g=!c.length,f=b._modules.getNamespace(c);d.namespaced&&(b._modulesNamespaceMap[f]=d);if(!g&&!e){var p=A(a,c.slice(0,-1)),N=c[c.length-1];b._withCommit(function(){k.set(p,N,d.state)})}var h=d.context=O(b,f,c);d.forEachMutation(function(a,c){P(b,f+c,a,h)});d.forEachAction(function(a,c){Q(b,a.root?c:f+c,a.handler||a,h)});d.forEachGetter(function(a,c){R(b,f+c,a,h)});d.forEachChild(function(d,g){t(b,a,c.concat(g),d,e)})}function O(b,
a,c){var d=""===a,e={dispatch:d?b.dispatch:function(c,d,e){c=u(c,d,e);d=c.payload;e=c.options;var f=c.type;if(!e||!e.root)if(f=a+f,!b._actions[f]){console.error("[vuex] unknown local action type: "+c.type+", global type: "+f);return}return b.dispatch(f,d)},commit:d?b.commit:function(c,d,e){c=u(c,d,e);d=c.payload;e=c.options;var f=c.type;if(!e||!e.root)if(f=a+f,!b._mutations[f]){console.error("[vuex] unknown local mutation type: "+c.type+", global type: "+f);return}b.commit(f,d,e)}};Object.defineProperties(e,
{getters:{get:d?function(){return b.getters}:function(){return S(b,a)}},state:{get:function(){return A(b.state,c)}}});return e}function S(b,a){var c={},d=a.length;Object.keys(b.getters).forEach(function(e){if(e.slice(0,d)===a){var g=e.slice(d);Object.defineProperty(c,g,{get:function(){return b.getters[e]},enumerable:!0})}});return c}function P(b,a,c,d){(b._mutations[a]||(b._mutations[a]=[])).push(function(a){c.call(b,d.state,a)})}function Q(b,a,c,d){(b._actions[a]||(b._actions[a]=[])).push(function(a,
g){(a=c.call(b,{dispatch:d.dispatch,commit:d.commit,getters:d.getters,state:d.state,rootGetters:b.getters,rootState:b.state},a,g))&&"function"===typeof a.then||(a=Promise.resolve(a));return b._devtoolHook?a.catch(function(a){b._devtoolHook.emit("vuex:error",a);throw a;}):a})}function R(b,a,c,d){b._wrappedGetters[a]?console.error("[vuex] duplicate getter key: "+a):b._wrappedGetters[a]=function(a){return c(d.state,d.getters,a.state,a.getters)}}function M(b){b._vm.$watch(function(){return this._data.$$state},
function(){m(b._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function A(b,a){return a.length?a.reduce(function(a,b){return a[b]},b):b}function u(b,a,c){null!==b&&"object"===typeof b&&b.type&&(c=a,a=b,b=b.type);m("string"===typeof b,"Expects string as the type, but found "+typeof b+".");return{type:b,payload:a,options:c}}function H(b){k&&b===k?console.error("[vuex] already installed. Vue.use(Vuex) should be called only once."):(k=b,T(k))}function v(b){return Array.isArray(b)?
b.map(function(a){return{key:a,val:a}}):Object.keys(b).map(function(a){return{key:a,val:b[a]}})}function w(b){return function(a,c){"string"!==typeof a?(c=a,a=""):"/"!==a.charAt(a.length-1)&&(a+="/");return b(a,c)}}function x(b,a,c){(b=b._modulesNamespaceMap[c])||console.error("[vuex] module namespace not found in "+a+"(): "+c);return b}var T=function(b){function a(){var a=this.$options;a.store?this.$store="function"===typeof a.store?a.store():a.store:a.parent&&a.parent.$store&&(this.$store=a.parent.$store)}
if(2<=Number(b.version.split(".")[0]))b.mixin({beforeCreate:a});else{var c=b.prototype._init;b.prototype._init=function(b){void 0===b&&(b={});b.init=b.init?[a].concat(b.init):a;c.call(this,b)}}},r="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,n=function(b,a){this.runtime=a;this._children=Object.create(null);this._rawModule=b;b=b.state;this.state=("function"===typeof b?b():b)||{}},h={namespaced:{configurable:!0}};h.namespaced.get=function(){return!!this._rawModule.namespaced};n.prototype.addChild=
function(b,a){this._children[b]=a};n.prototype.removeChild=function(b){delete this._children[b]};n.prototype.getChild=function(b){return this._children[b]};n.prototype.update=function(b){this._rawModule.namespaced=b.namespaced;b.actions&&(this._rawModule.actions=b.actions);b.mutations&&(this._rawModule.mutations=b.mutations);b.getters&&(this._rawModule.getters=b.getters)};n.prototype.forEachChild=function(b){l(this._children,b)};n.prototype.forEachGetter=function(b){this._rawModule.getters&&l(this._rawModule.getters,
b)};n.prototype.forEachAction=function(b){this._rawModule.actions&&l(this._rawModule.actions,b)};n.prototype.forEachMutation=function(b){this._rawModule.mutations&&l(this._rawModule.mutations,b)};Object.defineProperties(n.prototype,h);var q=function(b){this.register([],b,!1)};q.prototype.get=function(b){return b.reduce(function(a,b){return a.getChild(b)},this.root)};q.prototype.getNamespace=function(b){var a=this.root;return b.reduce(function(b,d){a=a.getChild(d);return b+(a.namespaced?d+"/":"")},
"")};q.prototype.update=function(b){C([],this.root,b)};q.prototype.register=function(b,a,c){var d=this;void 0===c&&(c=!0);D(b,a);var e=new n(a,c);0===b.length?this.root=e:this.get(b.slice(0,-1)).addChild(b[b.length-1],e);a.modules&&l(a.modules,function(a,f){d.register(b.concat(f),a,c)})};q.prototype.unregister=function(b){var a=this.get(b.slice(0,-1));b=b[b.length-1];a.getChild(b).runtime&&a.removeChild(b)};h={assert:function(b){return"function"===typeof b},expected:"function"};var E={getters:h,mutations:h,
actions:{assert:function(b){return"function"===typeof b||"object"===typeof b&&"function"===typeof b.handler},expected:'function or object with "handler" function'}},k;h=function c(a){var d=this;void 0===a&&(a={});!k&&"undefined"!==typeof window&&window.Vue&&H(window.Vue);m(k,"must call Vue.use(Vuex) before creating a store instance.");m("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser.");m(this instanceof c,"Store must be called with the new operator.");var e=a.plugins;
void 0===e&&(e=[]);var g=a.strict;void 0===g&&(g=!1);var f=a.state;void 0===f&&(f={});"function"===typeof f&&(f=f()||{});this._committing=!1;this._actions=Object.create(null);this._actionSubscribers=[];this._mutations=Object.create(null);this._wrappedGetters=Object.create(null);this._modules=new q(a);this._modulesNamespaceMap=Object.create(null);this._subscribers=[];this._watcherVM=new k;var p=this,h=this.dispatch,l=this.commit;this.dispatch=function(a,c){return h.call(p,a,c)};this.commit=function(a,
c,d){return l.call(p,a,c,d)};this.strict=g;t(this,f,[],this._modules.root);z(this,f);e.forEach(function(a){return a(d)});k.config.devtools&&y(this)};var B={state:{configurable:!0}};B.state.get=function(){return this._vm._data.$$state};B.state.set=function(a){m(!1,"Use store.replaceState() to explicit replace store state.")};h.prototype.commit=function(a,c,d){var e=this;c=u(a,c,d);a=c.type;var g=c.payload;c=c.options;var f={type:a,payload:g},p=this._mutations[a];p?(this._withCommit(function(){p.forEach(function(a){a(g)})}),
this._subscribers.forEach(function(a){return a(f,e.state)}),c&&c.silent&&console.warn("[vuex] mutation type: "+a+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+a)};h.prototype.dispatch=function(a,c){var d=this;c=u(a,c);a=c.type;var e=c.payload,g={type:a,payload:e};if(c=this._actions[a])return this._actionSubscribers.forEach(function(a){return a(g,d.state)}),1<c.length?Promise.all(c.map(function(a){return a(e)})):
c[0](e);console.error("[vuex] unknown action type: "+a)};h.prototype.subscribe=function(a){return F(a,this._subscribers)};h.prototype.subscribeAction=function(a){return F(a,this._actionSubscribers)};h.prototype.watch=function(a,c,d){var e=this;m("function"===typeof a,"store.watch only accepts a function.");return this._watcherVM.$watch(function(){return a(e.state,e.getters)},c,d)};h.prototype.replaceState=function(a){var c=this;this._withCommit(function(){c._vm._data.$$state=a})};h.prototype.registerModule=
function(a,c,d){void 0===d&&(d={});"string"===typeof a&&(a=[a]);m(Array.isArray(a),"module path must be a string or an Array.");m(0<a.length,"cannot register the root module by using registerModule.");this._modules.register(a,c);t(this,this.state,a,this._modules.get(a),d.preserveState);z(this,this.state)};h.prototype.unregisterModule=function(a){var c=this;"string"===typeof a&&(a=[a]);m(Array.isArray(a),"module path must be a string or an Array.");this._modules.unregister(a);this._withCommit(function(){var d=
A(c.state,a.slice(0,-1));k.delete(d,a[a.length-1])});G(this)};h.prototype.hotUpdate=function(a){this._modules.update(a);G(this,!0)};h.prototype._withCommit=function(a){var c=this._committing;this._committing=!0;a();this._committing=c};Object.defineProperties(h.prototype,B);var I=w(function(a,c){var d={};v(c).forEach(function(c){var e=c.key,f=c.val;d[e]=function(){var c=this.$store.state,d=this.$store.getters;if(a){d=x(this.$store,"mapState",a);if(!d)return;c=d.context.state;d=d.context.getters}return"function"===
typeof f?f.call(this,c,d):c[f]};d[e].vuex=!0});return d}),J=w(function(a,c){var d={};v(c).forEach(function(c){var e=c.val;d[c.key]=function(){for(var c=[],d=arguments.length;d--;)c[d]=arguments[d];d=this.$store.commit;if(a){d=x(this.$store,"mapMutations",a);if(!d)return;d=d.context.commit}return"function"===typeof e?e.apply(this,[d].concat(c)):d.apply(this.$store,[e].concat(c))}});return d}),K=w(function(a,c){var d={};v(c).forEach(function(c){var e=c.key,f=c.val;f=a+f;d[e]=function(){if(!a||x(this.$store,
"mapGetters",a)){if(f in this.$store.getters)return this.$store.getters[f];console.error("[vuex] unknown getter: "+f)}};d[e].vuex=!0});return d}),L=w(function(a,c){var d={};v(c).forEach(function(c){var e=c.val;d[c.key]=function(){for(var c=[],d=arguments.length;d--;)c[d]=arguments[d];d=this.$store.dispatch;if(a){d=x(this.$store,"mapActions",a);if(!d)return;d=d.context.dispatch}return"function"===typeof e?e.apply(this,[d].concat(c)):d.apply(this.$store,[e].concat(c))}});return d});return{Store:h,install:H,
version:"3.0.1",mapState:I,mapMutations:J,mapGetters:K,mapActions:L,createNamespacedHelpers:function(a){return{mapState:I.bind(null,a),mapGetters:K.bind(null,a),mapMutations:J.bind(null,a),mapActions:L.bind(null,a)}}}});