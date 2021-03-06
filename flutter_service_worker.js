'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9e663c9e90f87f5e7cec9dc9ed78b1ff",
"assets/ast/1.png": "890fc841adf527110f59d6def36ea5a1",
"assets/ast/10.png": "6390365ee8d83a0888beab33ae5521ae",
"assets/ast/11.png": "d980939a9f9d365ef82893d1c4e2213c",
"assets/ast/2.png": "85ae2610cdf9e650523b29d3342ada44",
"assets/ast/3.png": "0b034a1e797eb993499f132c29c7562d",
"assets/ast/4.png": "c1252b4dd2103d9d03add4b5efe21f65",
"assets/ast/5.png": "0de6c0f8370189a79902ae1ab1254f65",
"assets/ast/6.png": "17b0a8b09150fc98522c20798b0427ca",
"assets/ast/7.png": "a93ecd382b5095e38b4029d21b562a87",
"assets/ast/8.png": "599bde9cd701243c523a21cfb72afc37",
"assets/ast/9.png": "794bdb4977ce4b82488977d6cc8de7ae",
"assets/ast/b1.png": "ee9933d2f35c86ba147b9afe3a50ca0d",
"assets/ast/back.png": "39e896bd0f6152ca485c47de3138ed20",
"assets/ast/bg/bios1.jpg": "ec68713ae3e9860b13ae63278de292d5",
"assets/ast/bg/bios2.jpg": "b87ccc83e5d21f74c572ca27c5d9bf48",
"assets/ast/bg/che1.jpg": "96d9a726cf1f594da84ebc895b1d316c",
"assets/ast/bg/che2.png": "25bcee92c9e2531eb5c16e981bf731ee",
"assets/ast/bg/che3.jpg": "53386edcd23ba0d2137c8176e90db564",
"assets/ast/bg/comp1.jpg": "b0c574619e49fd7642f5c22c8849765f",
"assets/ast/bg/comp2.png": "82f547caf3fb4289198c55508093214a",
"assets/ast/bg/cor1.png": "3f013c2c0479fca8b09b2c2018f2061e",
"assets/ast/bg/elem1.png": "e4f801df6b907377df82458eb3d96437",
"assets/ast/bg/ene1.jpg": "3105860b416e1d61e292fd1cedd53762",
"assets/ast/bg/ene2.jpg": "291fa2dc67e23ab291524638b85a13af",
"assets/ast/bg/indus1.png": "42197bab6e9d26037bb7da70e012f251",
"assets/ast/bg/manufact1.jpg": "6420eb098e5a2a267f6bfc1ffdcd217d",
"assets/ast/bg/met.jpg": "4ba7bdb7319029ca839337d87da41bc7",
"assets/ast/bg/quality1.png": "eb9e730b48f85940fa5550f01a5e7dd4",
"assets/ast/bg/sem.jpg": "df33e83d6b47888ffde532652ee61aef",
"assets/ast/bg/steelm1.png": "d82875ff3fd86b5411751d59cc0e59cb",
"assets/ast/bg/steelm2.png": "28bce9793d0252b4a5537942af289b3b",
"assets/ast/bu1.png": "0e07eab33dca9e984dcb88b40cebb212",
"assets/ast/csv/bio.csv": "cbbab58117458a8813651061e9df92ff",
"assets/ast/csv/code.csv": "deaa793bf2abf8b0dd76d00f2e3d1d17",
"assets/ast/csv/manu.csv": "44b3b74e258c0c146ac5509b20dee7c8",
"assets/ast/csv/res.csv": "63067e17ce4b70eab1a9bb3df32559df",
"assets/ast/csv/smart.csv": "0c604af6088f491397dc45de21c81f2f",
"assets/ast/d1.jpg": "9251000c1e1a1eaf2d1a9294f794d4a7",
"assets/ast/d1.png": "5e1fe682d7402c3252f91609997745a0",
"assets/ast/d2.png": "569bdb70190d1f241ba8c7a4eeab04c1",
"assets/ast/d4.png": "4f934f9253a19e9a49702c47e39ce03d",
"assets/ast/di.png": "e92f4a4f1fd774b4fb589b98f49d45af",
"assets/ast/em.png": "92706fb3388cda95aa7a3bd28432d5fa",
"assets/ast/fb.png": "b222b9bffc74e27c36266cc3e74daad0",
"assets/ast/frame.png": "f85265e8ab9703f406edb20abb8ed25b",
"assets/ast/ft/a1.ttf": "82d21736600fad80316187f986e89f32",
"assets/ast/ft/b1.ttf": "69158fc031b03e7c29ba3b6271bd17e4",
"assets/ast/ft/c1.ttf": "3effa1e3015e620486bae4f51e5e9f23",
"assets/ast/ft/cu1.ttf": "aea52dfc691836aeb67c32f6a89e261a",
"assets/ast/ft/d.ttf": "bd601595ca4169d9a3661cf08327d681",
"assets/ast/ft/e1.ttf": "895bcfa30cd5c8eb5f84834ba0aca2f9",
"assets/ast/ft/f1.ttf": "859521162b68bf358e30f910882bda7c",
"assets/ast/ft/g1.ttf": "3db637d5fec2731f72520724c0d3db9d",
"assets/ast/ft/g2.ttf": "41ba387aec48fff717969726be44991d",
"assets/ast/ft/l1.ttf": "bc4554fa8acba200f95d0d4c6b0753a4",
"assets/ast/ft/o1.ttf": "f03febe581b686cbac1e6d5cb7677df3",
"assets/ast/ft/p1.ttf": "36d26dbcd032a9d91d891c9f22dfdec6",
"assets/ast/ft/s.ttf": "e1214251bd73ac812b3ef19a5d1bca56",
"assets/ast/ft/s1.ttf": "d4eaefbdecdac901df927fa9ecc22500",
"assets/ast/ft/s2.ttf": "c5688344b12a796c5a9054a73dd40813",
"assets/ast/ft/s3.ttf": "8b52eef1491d2fea28a8bee0836fb947",
"assets/ast/ft/s4.ttf": "6b6faf5672c7e9f46aa5819ca23f02cb",
"assets/ast/ft/t.ttf": "c675afe5a41b8d91d93410d34b3eb38e",
"assets/ast/me.png": "d048bbd54ef83c83d1ea6ed85ff671e1",
"assets/ast/p1.jpg": "0d5b27ad889aa53770f95e5231e443bd",
"assets/ast/rd.jpg": "07a0728650c088709d67d95410e12d5f",
"assets/ast/res.jpg": "a8d9d481fae0a12ba85bca481f994d91",
"assets/ast/silicon1.png": "f83aae8bca72d9f0eaf6b722b208f7e4",
"assets/ast/u1.jpg": "83579338768d1f3cfc4352e61ac01e29",
"assets/FontManifest.json": "bf548a30f3c536e6bb1bf58f1f299e73",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d8b8ada65a45ca402e762f7482db152f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "09180e996316657a682290b21397d474",
"/": "09180e996316657a682290b21397d474",
"main.dart.js": "bfe56a83c38957f0f41da622573ffb93",
"manifest.json": "411f3a19b5b75b69d104fe680c37c26c",
"version.json": "d427181d5c94bf34ea33856267e4c7da"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
