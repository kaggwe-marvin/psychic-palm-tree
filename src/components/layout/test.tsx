<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Student Clearance Portal</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://rsms.me/" />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    
    <style>
      :root {
        font-family: Inter, sans-serif;
        font-feature-settings: "liga" 1, "calt" 1;
      }
      @supports (font-variation-settings: normal) {
        :root {
          font-family: InterVariable, sans-serif;
        }
      }
    </style>

    <!-- Franken UI Styles -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/franken-ui@next/dist/css/core.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/franken-ui@next/dist/css/utilities.min.css"
    />

    <!-- Franken UI Theme Setup -->
    <script>
      const htmlElement = document.documentElement;
      const __FRANKEN__ = JSON.parse(localStorage.getItem("__FRANKEN__") || "{}");

      if (
        __FRANKEN__.mode === "light" ||
        (!__FRANKEN__.mode && window.matchMedia("(prefers-color-scheme: light)").matches)
      ) {
        htmlElement.classList.add("light");
      } else {
        htmlElement.classList.remove("light");
      }

      htmlElement.classList.add(__FRANKEN__.theme || "uk-theme-zinc");
      htmlElement.classList.add(__FRANKEN__.radii || "uk-radii-md");
      htmlElement.classList.add(__FRANKEN__.shadows || "uk-shadows-sm");
      htmlElement.classList.add(__FRANKEN__.font || "uk-font-sm");
      htmlElement.classList.add(__FRANKEN__.chart || "uk-chart-default");
    </script>

    <!-- Franken UI Scripts -->
    <script type="module" src="https://cdn.jsdelivr.net/npm/franken-ui@next/dist/js/core.iife.js"></script>
    <script type="module" src="https://cdn.jsdelivr.net/npm/franken-ui@next/dist/js/icon.iife.js"></script>
  </head>

  <body class="bg-background text-foreground">
    <!-- Mobile Sidebar Toggle -->
    <div class="lg:hidden p-4">
      <button class="text-blue-800" data-uk-toggle="target: #mobile-sidebar">
        <uk-icon icon="menu" width="24" height="24"></uk-icon>
      </button>
    </div>

    <!-- Mobile Sidebar Offcanvas -->
    <div id="mobile-sidebar" data-uk-offcanvas="overlay: true">
        <div class="uk-offcanvas-bar bg-blue-800 text-white flex flex-col justify-between h-full p-4">
          <button class="uk-offcanvas-close self-end" type="button" data-uk-close></button>
      
          <!-- NAVIGATION TOP SECTION -->
          <div>
            <h1 class="text-xl font-bold mb-6">Student Clearance</h1>
            <ul class="uk-nav uk-nav-default" data-uk-nav>
              <li class="uk-active">
                <a href="/student">
                  <uk-icon icon="home" class="mr-2"></uk-icon>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/student/clearance_status">
                  <uk-icon icon="check-circle" class="mr-2"></uk-icon>
                  Clearance Status
                </a>
              </li>
              <li>
                <a href="/student/documents">
                  <uk-icon icon="file-text" class="mr-2"></uk-icon>
                  Documents
                </a>
              </li>
            </ul>
          </div>
      
          <!-- LOGOUT BOTTOM SECTION -->
          <form method="POST" action="/auth/logout" class="pt-4 border-t border-blue-700">
            <button class="flex items-center text-white w-full text-left">
              <uk-icon icon="log-out" class="mr-2"></uk-icon>
              Logout
            </button>
          </form>
        </div>
      </div>
      

    <!-- Desktop Layout -->
    <div class="hidden lg:flex h-screen">
      <!-- Sidebar -->
      <div class="bg-blue-800 text-white w-64 py-4 flex flex-col">
        <div class="px-4 py-4">
          <h1 class="text-xl font-bold">Student Clearance</h1>
        </div>

        <div class="flex flex-col justify-between h-full px-4">
          <ul class="uk-nav uk-nav-default mt-6" data-uk-nav>
            <li class="uk-active">
              <a href="/student">
                <uk-icon icon="home" class="mr-2"></uk-icon>
                Dashboard
              </a>
            </li>
            <li>
              <a href="/student/clearance_status">
                <uk-icon icon="check-circle" class="mr-2"></uk-icon>
                Clearance Status
              </a>
            </li>
            <li>
              <a href="/student/documents">
                <uk-icon icon="file-text" class="mr-2"></uk-icon>
                Documents
              </a>
            </li>
          </ul>

          <form method="POST" action="/auth/logout" class="mt-6 pt-4 border-t border-blue-700">
            <button class="flex items-center text-white w-full text-left">
              <uk-icon icon="log-out" class="mr-2"></uk-icon>
              Logout
            </button>
          </form>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <header class="bg-white shadow z-10">
          <div class="uk-container uk-container-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
              <div class="flex items-center">
                <h2 class="text-xl font-semibold text-gray-800">Student Clearance Portal</h2>
              </div>
              <div class="flex items-center">
                <button
                  type="button"
                  class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none"
                >
                  <span class="sr-only">Open user menu</span>
                  <div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    U
                  </div>
                  <span class="ml-2 text-gray-700">user@email.com</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main class="flex-1 overflow-y-auto bg-gray-100 p-6">
          <!-- Your main content goes here -->
        </main>
      </div>
    </div>
  </body>
</html>
