(() => {
  var P = Object.create;
  var c = Object.defineProperty;
  var D = Object.getOwnPropertyDescriptor;
  var L = Object.getOwnPropertyNames;
  var O = Object.getPrototypeOf,
    I = Object.prototype.hasOwnProperty;
  var i = (o, t) => () => (t || o((t = { exports: {} }).exports, t), t.exports);
  var S = (o, t, r, d) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let n of L(t))
        !I.call(o, n) && n !== r && c(o, n, { get: () => t[n], enumerable: !(d = D(t, n)) || d.enumerable });
    return o;
  };
  var a = (o, t, r) => (
    (r = o != null ? P(O(o)) : {}), S(t || !o || !o.__esModule ? c(r, 'default', { value: o, enumerable: !0 }) : r, o)
  );
  var l = i((A, p) => {
    p.exports = window.React;
  });
  var E = i((M, m) => {
    m.exports = window.ReactDOM;
  });
  var f = i(u => {
    'use strict';
    var R = E();
    (u.createRoot = R.createRoot), (u.hydrateRoot = R.hydrateRoot);
    var v;
  });
  var _ = i((B, y) => {
    y.exports = window.antd;
  });
  var T = i((F, w) => {
    w.exports = window._;
  });
  var x = a(l()),
    g = a(f());
  var s = a(l()),
    e = a(_()),
    h = a(T()),
    N = { GET: '#0f6ab4', POST: '#10a54a', PUT: '#c5862b', DELETE: '#a41e22', PATCH: '#D38042' },
    U = [
      {
        title: 'Method',
        dataIndex: 'method',
        render(o) {
          let t = o.toUpperCase();
          return s.default.createElement(e.Tag, { color: N[t] }, t);
        }
      },
      { title: 'Url', dataIndex: 'url' }
    ],
    C = o => {
      let t = o.RouterList ?? (0, h.get)(window, 'globalData.RouterList');
      return s.default.createElement(
        e.Card,
        { title: 'API' },
        s.default.createElement(e.Table, { rowKey: 'url', columns: U, dataSource: t })
      );
    };
  (0, g.hydrateRoot)(document.querySelector('#app'), x.default.createElement(C, null));
})();
