/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "61126f2d7becd4027d865ee28aab6781"
  },
  {
    "url": "about.html",
    "revision": "69bce936787cd050605164fcffb7cc82"
  },
  {
    "url": "about1.html",
    "revision": "96b2cbd72c6df07e294e4fec8ec0c22f"
  },
  {
    "url": "assets/css/0.styles.a05aacfc.css",
    "revision": "0634eca22a4d18ccd7dc2edb4778af52"
  },
  {
    "url": "assets/img/192.png",
    "revision": "4761645489841dc85a5989540a75c071"
  },
  {
    "url": "assets/img/256.png",
    "revision": "5c62a99b0503d6e5729aaa74df664ced"
  },
  {
    "url": "assets/img/512.png",
    "revision": "31cb24855d13eb937c47f6e656c9d411"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ea5dcfba.js",
    "revision": "28cbbbe45df4143d9ff4c4f7b5acfe14"
  },
  {
    "url": "assets/js/11.a7f9df5e.js",
    "revision": "83f34bf6b88fd97ed6eb3ec349a278bb"
  },
  {
    "url": "assets/js/12.3d1525ff.js",
    "revision": "4352449ba05520ffa123390aa1b0c12d"
  },
  {
    "url": "assets/js/13.3ac80890.js",
    "revision": "143f4915aaf4b627372579109cfbb0aa"
  },
  {
    "url": "assets/js/14.2fc3f5c0.js",
    "revision": "cfb97bac0ef457567b706f7edd4319da"
  },
  {
    "url": "assets/js/15.c4da5688.js",
    "revision": "b156553007187fe17db238f78a1b6837"
  },
  {
    "url": "assets/js/16.d5f7889b.js",
    "revision": "79f1dc935f9488324844b347329bb8d4"
  },
  {
    "url": "assets/js/17.b3d9409a.js",
    "revision": "6657df24701727de3edb77f5256a6942"
  },
  {
    "url": "assets/js/18.4b883551.js",
    "revision": "e6eeec2e53e6830edacf965ea49c1000"
  },
  {
    "url": "assets/js/19.120c1a90.js",
    "revision": "477aed9019c44cc7ba441a6d2af0dd35"
  },
  {
    "url": "assets/js/2.8b0509cc.js",
    "revision": "a254cb0bb6ec1b9939fc995d66ad99b1"
  },
  {
    "url": "assets/js/20.01300cad.js",
    "revision": "913c10d6ad3b565c6bab8eb43e4501bd"
  },
  {
    "url": "assets/js/21.fb7748fc.js",
    "revision": "ff8f16039ead47e64ee5b7164218ef05"
  },
  {
    "url": "assets/js/22.c0724161.js",
    "revision": "b22d2129145062293c533f7a14ff1b7d"
  },
  {
    "url": "assets/js/23.d31657b9.js",
    "revision": "e0b0910083ed6390a08f7348ccd96b67"
  },
  {
    "url": "assets/js/24.9c202077.js",
    "revision": "e049a3c0adacf2c59dfee95abcb7c3ad"
  },
  {
    "url": "assets/js/3.4077d12d.js",
    "revision": "8d54072272a29a0206a82fbe57f6c42e"
  },
  {
    "url": "assets/js/4.e6d20a15.js",
    "revision": "26441e462812325ce870cfba09b947f5"
  },
  {
    "url": "assets/js/5.8ef53bd7.js",
    "revision": "e76f7fddf29540d2dfd8ad6ff612733d"
  },
  {
    "url": "assets/js/6.ef6415f4.js",
    "revision": "90f2059ad12783cfd808428a7509be79"
  },
  {
    "url": "assets/js/7.e275231d.js",
    "revision": "5d5d69e4297aaab67e57356af004fadc"
  },
  {
    "url": "assets/js/8.530e2956.js",
    "revision": "15f45c4e2c26856670e249cf64579caa"
  },
  {
    "url": "assets/js/9.2825809a.js",
    "revision": "da0c67677756a9de483c0769cd157a85"
  },
  {
    "url": "assets/js/app.7bf88211.js",
    "revision": "9a07f7ad48956a9665a109bf38f163f9"
  },
  {
    "url": "countup.html",
    "revision": "a0b50e040338b4633f8d2c2c1cb6560c"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "3fcb011404bb0aee82e1bf32f4417edf"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "4a519bbc7da9ae6c3eb51e64a97c95b9"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "cdc7e0bdf174a5e732625776f0034fe3"
  },
  {
    "url": "css/index.html",
    "revision": "6f1cbd3e69e970700f83cbb420ec9a8c"
  },
  {
    "url": "index.html",
    "revision": "eb389ced7cf064e8fe8d66d2017cfdee"
  },
  {
    "url": "javascript/index.html",
    "revision": "37bde877f23d1d6a381c412eab6cd330"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "b77dd3b789ea51a63b94fb594508c3c4"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "0466b975830ce40f756b5a57b7215a7b"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "aa2d0d021d7ec534d98b54f85c28c739"
  },
  {
    "url": "quanxue.html",
    "revision": "c41d65973051bd9c0634ae564c2ef25d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
