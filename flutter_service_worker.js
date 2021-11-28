'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "43d4ca92bfe400b09854370d9ca71791",
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
"assets/ast/bu1.png": "0e07eab33dca9e984dcb88b40cebb212",
"assets/ast/csv/bio.csv": "4b57415df34513d1bfca7d3893dd2c71",
"assets/ast/csv/code.csv": "f2ffdb4c7d4d99501151d6c6dbfd0a8c",
"assets/ast/csv/manu.csv": "f2ffdb4c7d4d99501151d6c6dbfd0a8c",
"assets/ast/csv/res.csv": "f2ffdb4c7d4d99501151d6c6dbfd0a8c",
"assets/ast/csv/smart.csv": "f2ffdb4c7d4d99501151d6c6dbfd0a8c",
"assets/ast/d1.png": "5e1fe682d7402c3252f91609997745a0",
"assets/ast/d2.png": "569bdb70190d1f241ba8c7a4eeab04c1",
"assets/ast/d4.png": "4f934f9253a19e9a49702c47e39ce03d",
"assets/ast/frame.png": "f85265e8ab9703f406edb20abb8ed25b",
"assets/ast/ft/c1.ttf": "3effa1e3015e620486bae4f51e5e9f23",
"assets/ast/ft/d.ttf": "bd601595ca4169d9a3661cf08327d681",
"assets/ast/ft/e1.ttf": "895bcfa30cd5c8eb5f84834ba0aca2f9",
"assets/ast/ft/f1.ttf": "859521162b68bf358e30f910882bda7c",
"assets/ast/ft/g1.ttf": "3db637d5fec2731f72520724c0d3db9d",
"assets/ast/ft/l1.ttf": "bc4554fa8acba200f95d0d4c6b0753a4",
"assets/ast/ft/o1.ttf": "f03febe581b686cbac1e6d5cb7677df3",
"assets/ast/ft/p1.ttf": "36d26dbcd032a9d91d891c9f22dfdec6",
"assets/ast/ft/s.ttf": "e1214251bd73ac812b3ef19a5d1bca56",
"assets/ast/ft/s1.ttf": "d4eaefbdecdac901df927fa9ecc22500",
"assets/ast/ft/s2.ttf": "c5688344b12a796c5a9054a73dd40813",
"assets/ast/ft/t.ttf": "c675afe5a41b8d91d93410d34b3eb38e",
"assets/ast/res.jpg": "a8d9d481fae0a12ba85bca481f994d91",
"assets/ast/s1.png": "f83aae8bca72d9f0eaf6b722b208f7e4",
"assets/FontManifest.json": "6068c08a6b4efbd3ade0bd6c5c0be27c",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "def666e54980228d1ba2dd2413c4249b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "659053fcc1ec05cd7f0c165c57aa113b",
"/": "659053fcc1ec05cd7f0c165c57aa113b",
"main.dart.js": "6f748adcc04de23ed75a0977cdf5b395",
"manifest.json": "411f3a19b5b75b69d104fe680c37c26c",
"version.json": "02bbd8a7087147d4ad4f4421298c52ec"
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
