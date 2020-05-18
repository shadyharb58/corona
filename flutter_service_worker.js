'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "601ae85404135d5e521edc950ce826bf",
"assets/FontManifest.json": "b597b3778ff3ceafc5ea139a1ef8c85c",
"assets/LICENSE": "0452f90c91ee574c17ff9d8fd29652fa",
"assets/fonts/CircularAir-Light.ttf": "809eb889c78777517a6d252fd1f76eac",
"assets/fonts/CircularStd-Bold.ttf": "ce2a6c4154de87815e8971d21a987403",
"assets/fonts/CircularStd-Medium.ttf": "46d551dfd0caa61f1332d7c477f584c2",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d261c95caceaf395a7c197028e4fac02",
"/": "d261c95caceaf395a7c197028e4fac02",
"main.dart.js": "2160bda51f605a7f0c5cab73160b59cd",
"manifest.json": "fe1b9dd99839eef00595466dd42544c4"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
