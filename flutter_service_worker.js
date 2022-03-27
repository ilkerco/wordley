'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d9791e871aa20faf70449d567f3891b9",
".git/config": "37551531c57b7cc7cebc04fd372ca591",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "dd756f3f16055019b029f6764352d97a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fde58d75abda7b038451d6555b3939a8",
".git/logs/refs/heads/main": "4266722dc89f2626b5f9f2cc857267d5",
".git/logs/refs/remotes/origin/main": "fe6870dc0a120ee20c074d1a1afaf035",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/10/a042c6853efd377aec739864e93f5a9665e64c": "05627bb0cb8223daf24ee9b1a1310475",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/0a7c092b7b329b6dab50412222fa0c800e5e79": "4bccc132b053e23e32e92bfea15f8ac8",
".git/objects/33/ff8d2c70ea9574abead41665f4090950026fc9": "261ea2dba4b385b0ff43bab1aa486a5c",
".git/objects/38/168976aa83440c7774ea454379647ccdb8d2ec": "d42d00898f6c37d8b95ce2caf7cc44f3",
".git/objects/39/89a5a92cd5273d0d5f6ae2fe26d4ae88f6f4cc": "64d7863a625c6d5733bd447f7a0b5908",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/5202d6303c1cc54ad5f43c2c0ce146460b8559": "8ccd581b0acc14f301a7ac1f6191b0ab",
".git/objects/53/8f9166640fa2cabe693580d6b82d9a7513558d": "9f728b75ae74d8557b48c252762ef12a",
".git/objects/58/c31595e51478cc4f9267785dd7d09abaf38bcf": "ff8c0b959d5549446b8113e9ab3cca0f",
".git/objects/5f/8f949b01624c73665b3200c8a4f87c0b54701d": "edf45680dd83092d6a2724ad538f68b5",
".git/objects/64/9a7376ee8c9b1848b84634e2e272c72594a870": "a3deb8c7b83369fdd2128a05388c49e6",
".git/objects/66/021e0181409e6fdc3ee7f09fee71a468273a5b": "aaa89da50b7edf38456a5cfe35c61345",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/5024d933ec0b32b00512118da737e358d510a4": "112b79c1003012a3fb13ba33f01ff7bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9f/42bd0c4f3cbf3745349bf988baa102cd631159": "a9b1ae15d37151df312a242f0195ec46",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/dab394a27fd5c2fd7d8bef1c9fc7f50556e9e0": "92d0a7082bf7bed274ce54037cea8eef",
".git/objects/b1/1876eae93d2b06b4dc0105eb4d4c2ddf3715bd": "ebac330075b58d3cdd4a490ca5da033e",
".git/objects/b6/8d2527c0b12609051c385de6300e8ce494d646": "cc0e73b26abd337371de914a169656c9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/58d56965b70b36e2e35fb4e36493f1e6e3d9e0": "3811e5e58dd762ca2c490a397c607ba0",
".git/objects/c8/42d9b494f241a9fea658d5f60e183261b02dea": "8536b698e7a9450dad6ab668fc8db304",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/50f6395b1f3792ed166fa59ab39b8b9a46c653": "9f0cfe11676c26e9ae5ad39f561cfb4e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/b63dd136cc8710d430c617cc6302cb94dd2ea2": "9af4a5dfd5c10a71fe0518e0b96739dd",
".git/objects/f7/d40a4aee12c51f84b83d96af4eb24954ac5f02": "3a3b06a62c927c48ed1d1decea139d79",
".git/objects/fb/d1863286cce1743da37a934f4a13cbea63c738": "2bc66a14ca91096771770d5442992342",
".git/refs/heads/main": "fda2d33d3602648c17f666dc5e0ea1c9",
".git/refs/remotes/origin/main": "fda2d33d3602648c17f666dc5e0ea1c9",
"assets/AssetManifest.json": "bad19306b1e97c05061727e4eb00f1d0",
"assets/assets/icons/battle.png": "da0bdb511e4300bf96818ce931f319e6",
"assets/assets/icons/calendar.png": "b47accd99580a886823713b14aecf23f",
"assets/assets/icons/people.png": "974b7be9ff2ebf738bfddc92a9b2b29a",
"assets/assets/icons/team.png": "4fc2b0b4e81b0c8ab1248a3b3bf87d56",
"assets/FontManifest.json": "373f0459fc5ef9490d0d13f3353d2e50",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "9b3731260afce77cd073ca9faf36a1d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "3fd9cf838d66634bf981d06141f6062c",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "30f4a7339954e6255e932303c80a3b96",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8287ce9591798aeb4eb8f2d61851425d",
"/": "8287ce9591798aeb4eb8f2d61851425d",
"main.dart.js": "13bde64d41e9765c54ae7a4974221455",
"manifest.json": "898d5cc5dec2001c430792915c09a58f",
"version.json": "3efcd37a4fe2f1d1c8dbe5f65e02b53c"
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
