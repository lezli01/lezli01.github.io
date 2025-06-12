'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "948790b1c734ebebd59ff57f58f17e12",
"assets/AssetManifest.bin.json": "65134973ac6392d48abb85f905232831",
"assets/AssetManifest.json": "cc64de5dd0c45248b19b0287bfa1da8d",
"assets/assets/cv.pdf": "a5569982e85d7b206bc20ee1e3d21444",
"assets/assets/favicon_io.zip": "d16ad378c1fa9326db36ad7d8cb1e855",
"assets/assets/images/banner.jpeg": "8fdd008be7476d8e504cbb4f5db47d8f",
"assets/assets/images/contact/dailydev.svg": "7991afa65f603f4b282d491c9babb227",
"assets/assets/images/contact/email.svg": "a8ea98936e4de7c233e14cd424415f01",
"assets/assets/images/contact/facebook.svg": "107aedf47a985c895d340d753997550e",
"assets/assets/images/contact/github.svg": "5b3940e18ec18cbacfc65cdf9a6e9757",
"assets/assets/images/contact/linkedin.svg": "57037cee22d6793053b77968126fd2fb",
"assets/assets/images/download_android.png": "e6d552c5deec92675d47f9b89d816ab8",
"assets/assets/images/home/cplusplus.svg": "8cc47c68f0d71b364d6e3b793dbb6e55",
"assets/assets/images/home/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/images/home/nodejs.svg": "b337a2fb0b1289e6757e632dc766ff6b",
"assets/assets/images/placeholder.jpg": "42dca2e3677b2ac26cb74aa38aef520e",
"assets/assets/images/profile_pic.jpg": "7359dabffcdd30577e70d90a14144f71",
"assets/assets/images/profile_pic_thumbnail.jpg": "65175c8a5a0dc9f63dfd8abaf53da525",
"assets/assets/images/tech/android.png": "be3f994af942c14b030a51619a188dcc",
"assets/assets/images/tech/antlr.png": "cd43ac47343efa33c945a5361af69c18",
"assets/assets/images/tech/aws.png": "76d1e26d89f77c60df19fec2e160b608",
"assets/assets/images/tech/bash.png": "56a080136719f421bc857e6f04a2d093",
"assets/assets/images/tech/casbin.png": "aa51a9f3ced8f18037a5d04ed6cc2693",
"assets/assets/images/tech/catch2.png": "541912e6b3657898dd6149b80c0493b0",
"assets/assets/images/tech/cmake.png": "fb6dc762ca7d45ec886fe39f230ddc69",
"assets/assets/images/tech/conan.png": "1b2176b63a35277aa468578ef1bd19a0",
"assets/assets/images/tech/cpp.png": "a0ea5eec9729cf912e743e50765fde4c",
"assets/assets/images/tech/dart.png": "c00cb6e1d2831043f376aad79ef9ab16",
"assets/assets/images/tech/docker.png": "ca78d382980c57e3614933c4a9db5fab",
"assets/assets/images/tech/dockerCompose.png": "3d79f0b11bd87ecf0c3c641ea02b08cb",
"assets/assets/images/tech/dotNet.png": "28ab20ee41b8aa37e605b72609a88e81",
"assets/assets/images/tech/entityFramework.png": "1845959d73cdc177b31186da1d1a939a",
"assets/assets/images/tech/express.png": "c12acf6ed02a09978a7b53694a9b6407",
"assets/assets/images/tech/flatBuffers.png": "f7a208ba8eb4067d9280749670c2f621",
"assets/assets/images/tech/fluentd.png": "b36737c6b1e8d958389a93b4fca4dba9",
"assets/assets/images/tech/flutter.png": "cc8ce20ded7e129d4a3f17575e3c6ab7",
"assets/assets/images/tech/git.png": "5948b264dcd59efd64031d8066dbb35e",
"assets/assets/images/tech/googleTest.png": "ec424100eac34d6a9c34847d4f503bbc",
"assets/assets/images/tech/grpc.png": "a70fc5c982169531ea18d6149c90e77d",
"assets/assets/images/tech/helm.png": "1ccddc0450b8fa1be49366d8a67486b6",
"assets/assets/images/tech/java.png": "398cd5e195674cac56f2f83684ee3670",
"assets/assets/images/tech/javaScript.png": "3293ff1ece449fe3ea7c759718c3ba30",
"assets/assets/images/tech/jenkins.png": "19324f776e01dafb6b0ed9e00c1985b0",
"assets/assets/images/tech/jsonSchema.png": "a2f748476dff9092bda85b8827d671d9",
"assets/assets/images/tech/kafka.png": "d8e8780c19681ad8f66659824abcb7a7",
"assets/assets/images/tech/kubernetes.png": "8e7aac66b87495ef8de40defef05f79f",
"assets/assets/images/tech/linux.png": "ae43adb997e8dfcfd8e857e34327dd15",
"assets/assets/images/tech/machineLearning.png": "700c4b285a3964e43e283bfa8c12a517",
"assets/assets/images/tech/microservices.png": "92681486bccf6fd1de03b995916f33a0",
"assets/assets/images/tech/mongoDB.png": "59953b577ec7e5b1d75f6420c0c3b787",
"assets/assets/images/tech/mssql.png": "ab23ac36ecc690a336a7382d89e5fd54",
"assets/assets/images/tech/nginx.png": "e478a46c855036d57662a15b8db1620a",
"assets/assets/images/tech/nodejs.png": "74de68de6edda99c5896b3a847c3b029",
"assets/assets/images/tech/npm.png": "fbd1992b8361dc4f878a00d7cc58a309",
"assets/assets/images/tech/openAPI.png": "fbd2380d5f5e4d89a15531b50f4c78f5",
"assets/assets/images/tech/openGL.png": "99222c0cb4c2c6b0c9d60e01ba3580b5",
"assets/assets/images/tech/protobuf.png": "a8ac69f24693dab64280528b060f7924",
"assets/assets/images/tech/python.png": "43543caa6dbf9ffb4f4b5ce3bf9ad65c",
"assets/assets/images/tech/qt.png": "6d0f339b1e39f2489faf2118bd8e1ff1",
"assets/assets/images/tech/rabbitMQ.png": "8a05b9175dc13767d5fd91b1a35db544",
"assets/assets/images/tech/rest.png": "6abe57740b2abdfd0df46e0b12045de7",
"assets/assets/images/tech/skaffold.png": "0b6832a4c638b3a29a2bdfe3fb33ff42",
"assets/assets/images/tech/sqlite.png": "6dea9c33487d802db50faca320e95f4f",
"assets/assets/images/tech/teamCity.png": "1a2d354f4e81f1db0051ce1abd612c09",
"assets/assets/images/tech/terraform.png": "c59160d64b7524412fb79bede62d530d",
"assets/assets/images/tech/typeScript.png": "38b189d5c596a09fb09a769dc8cf03a2",
"assets/assets/images/tech/vagrant.png": "b285687ebf981596f9e099a22942467c",
"assets/assets/images/tech/windows.png": "a77aeb2c7c13fad4573edb6b729773f7",
"assets/assets/mma.pdf": "a78f8a644d79bad9f40eb0f817d4543e",
"assets/assets/projects/aor/desc.txt": "e1a1421897b8f7f435623ca9b9f2787d",
"assets/assets/projects/aor/download.json": "6c90718f7db2b123809753e16981c561",
"assets/assets/projects/aor/logo.webp": "d977ded1e4cb7a1aec4bf2fb69d4cfa1",
"assets/assets/projects/aor/screenshots/001.webp": "11b4c1bc434a46ead27f540598642c33",
"assets/assets/projects/aor/screenshots/002.webp": "7e23071e32bcc9d822cf10e2b99b6aef",
"assets/assets/projects/aor/screenshots/003.webp": "9794c23c8fe20f637153fc9de3367224",
"assets/assets/projects/aor/screenshots/004.webp": "fa59578b63cfce643ec4053907e1205f",
"assets/assets/projects/aor/screenshots/005.webp": "2c1c84a291cdfca274d126e0f55c515d",
"assets/assets/projects/aor/screenshots/006.webp": "0397a2f3ad1445f2b77604dc5e2cbaf8",
"assets/assets/projects/aor/screenshots/007.webp": "d08d632349f174391077347ccc52546f",
"assets/assets/projects/aor/screenshots/008.webp": "0fbb7781d4d6e2aec1a5875424de5327",
"assets/assets/projects/aor/short_desc.txt": "bea0fdfe342e2678f54f5dee3a4aaf5b",
"assets/assets/projects/aor/tech.txt": "410caa4e12f4eba956f6cf076f5852bd",
"assets/assets/projects/aor/title.txt": "8916ffb44f445ea9818b9e8014c573cd",
"assets/assets/projects/artinca/desc.txt": "807dad6b29172fd7b6236ad7666b1e39",
"assets/assets/projects/artinca/download.json": "53a1f593ca3c1f183506733c77bc5704",
"assets/assets/projects/artinca/logo.webp": "145d6f2091c77ecc2f1d58b72cb33466",
"assets/assets/projects/artinca/screenshots/001.webp": "cb5c432f3dfa896666f642430972745c",
"assets/assets/projects/artinca/screenshots/002.webp": "861d9811815cbdc53ca4d7d228aea3c8",
"assets/assets/projects/artinca/screenshots/003.webp": "86d6a11fb2f1782460531f512e8a2708",
"assets/assets/projects/artinca/screenshots/004.webp": "8902e7b0fbc56c95ff99c37a3d899cef",
"assets/assets/projects/artinca/screenshots/005.webp": "5efe6c738b4291abc9ed37a26805341c",
"assets/assets/projects/artinca/screenshots/006.webp": "102183bae74fffddf6e600b19e7c8c11",
"assets/assets/projects/artinca/screenshots/007.webp": "f4af3167b7a7952e4bd9be336834311a",
"assets/assets/projects/artinca/screenshots/008.webp": "7703f9c98ae32e6be41770530ec65f20",
"assets/assets/projects/artinca/short_desc.txt": "730193c9d8c6cb1d4fbfebfcbdb6c7a5",
"assets/assets/projects/artinca/tech.txt": "95360bdc268a59286af41c7581e0c528",
"assets/assets/projects/artinca/title.txt": "00b18501b9092cc763bc737685ace69d",
"assets/assets/projects/dietex/desc.txt": "b80d4b26e64f35923096599dc74b424c",
"assets/assets/projects/dietex/download.json": "54bf560a87d85d2a394377a1b38a9a8d",
"assets/assets/projects/dietex/logo.webp": "1f70e3b90be6846ed287531db06b64bb",
"assets/assets/projects/dietex/screenshots/001.webp": "89e079d49c3bb7749f1b41d5f09b396f",
"assets/assets/projects/dietex/screenshots/002.webp": "579ef2aaa563f67c48c7f79b600d0f78",
"assets/assets/projects/dietex/screenshots/003.webp": "701ef2300d32ddc36f27adb066c7a9e7",
"assets/assets/projects/dietex/screenshots/004.webp": "4108c169c01a37aae67578a16f85ea56",
"assets/assets/projects/dietex/screenshots/005.webp": "da08614a1abbe59d31f4844ccdd5621c",
"assets/assets/projects/dietex/short_desc.txt": "81f67a36225a70f9425ed662116cf189",
"assets/assets/projects/dietex/tech.txt": "f9b55cc63a27ac84a68781e6b917a8b6",
"assets/assets/projects/dietex/title.txt": "f5e78f89fa0ef551e22e64fa9cb82733",
"assets/assets/projects/nag/desc.txt": "b995eb28d5be20f880cf2dd2f3a973a9",
"assets/assets/projects/nag/download.json": "a832f5a3d85719652449f353b6d7287d",
"assets/assets/projects/nag/logo.webp": "0d1deddafdba1fcf4cdf5bc53550274c",
"assets/assets/projects/nag/screenshots/001.webp": "4b02a5310b04abe0118f499de9199321",
"assets/assets/projects/nag/screenshots/002.webp": "a892cfb3d069c135895104d4be0710c2",
"assets/assets/projects/nag/screenshots/003.webp": "4075d62fe5c3b5a5ba2bc37aadda62fe",
"assets/assets/projects/nag/screenshots/004.webp": "91e0c85d4b5fb6aca68a1184d217a0a6",
"assets/assets/projects/nag/screenshots/005.webp": "484f4ad4f377dc46bc9255c1e9bcfeb6",
"assets/assets/projects/nag/short_desc.txt": "9a5e78b14c639674e3e57cb05666918a",
"assets/assets/projects/nag/tech.txt": "f9b55cc63a27ac84a68781e6b917a8b6",
"assets/assets/projects/nag/title.txt": "f7c34dc74a302d125325b8d71413bb8f",
"assets/assets/projects/wordle/desc.txt": "6190dcbe342ba769fdadae545c09572e",
"assets/assets/projects/wordle/download.json": "5b57616adbac3611364db052f6fe5c45",
"assets/assets/projects/wordle/logo.webp": "8b5371cfa887d8c8132b10a3ef7e4764",
"assets/assets/projects/wordle/screenshots/001.webp": "6fdf25b59e0e483da3fdbf22e3e8c9a1",
"assets/assets/projects/wordle/screenshots/002.webp": "e20c398ed753eaba267204f8a1a388ca",
"assets/assets/projects/wordle/screenshots/003.webp": "2a7c65f16907c4c9f00d17978e235681",
"assets/assets/projects/wordle/screenshots/004.webp": "058b7d78a300c0fe7543362885619879",
"assets/assets/projects/wordle/screenshots/005.webp": "696a30f9ae8aae18e7eba88e5e154dde",
"assets/assets/projects/wordle/screenshots/006.webp": "3dd86e8c110e97bd1d15e905ab302d57",
"assets/assets/projects/wordle/screenshots/007.webp": "0bd1a03b5f31d279f35987b485630348",
"assets/assets/projects/wordle/screenshots/008.webp": "967625ef080ce9c087828ee82acd8f1f",
"assets/assets/projects/wordle/short_desc.txt": "9f97f1533addf5dd4e722ab60a966069",
"assets/assets/projects/wordle/tech.txt": "f9b55cc63a27ac84a68781e6b917a8b6",
"assets/assets/projects/wordle/title.txt": "bc43ac0190b8289d7e02ea2f2b7c9e06",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6a10b0d35ea1c902b7a3c42244bedc52",
"assets/NOTICES": "e3e9c2b3aff840f8d8a6e49e71fe99a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "9eebdd579633fc3b373131026fd978f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5d96fc9685f4d12d9194009da15621b6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7baa90176831da44ecf31e570e036602",
"/": "7baa90176831da44ecf31e570e036602",
"main.dart.js": "d56413566b19e9624306a874ff9448e1",
"manifest.json": "cc8b54ccd71e1ef03dabb8dd38d827da",
"version.json": "37cbd01df812ad8b32bb8ec8768049c9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
