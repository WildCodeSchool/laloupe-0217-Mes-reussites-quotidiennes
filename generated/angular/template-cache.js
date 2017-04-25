angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<!-- <nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Home</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.login\" ng-hide=\"auth.isAuthenticated()\">Login</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.register\" ng-hide=\"auth.isAuthenticated()\">Register</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav> -->\n" +
    "<header>\n" +
    "    <div layout=\"row\" layout-align=\" center\">\n" +
    "        <div flex=\"10\"><img src=\"img/logo_wcs.png\" alt=\"logo\"></div>\n" +
    "        <div flex=\"20\"><h1>Safaro</h1></div>\n" +
    "        <input flex=\"45\" class=\"search\" type=\"text\" placeholder=\"rechercher...\" required></input>\n" +
    "        <div flex class=\"avatar\"><img ng-src=\"img/squirrel.jpg\" class=\"md-avatar\" alt=\"{{contact.name}}\" /></div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<md-content>\n" +
    "    <md-nav-bar class=\"menu\" md-selected-nav-item=\"currentNavItem\" nav-bar-aria-label=\"navigation links\">\n" +
    "      <md-nav-item class=\"reussites_session\" flex=\"45\" md-nav-click=\"goto('page1')\" name=\"page1\">Réussites de la session</md-nav-item>\n" +
    "      <md-nav-item class=\"reussites\"flex=\"15\" md-nav-click=\"goto('page2')\" name=\"page2\">Mes réussites</md-nav-item>\n" +
    "      <md-nav-item flex md-nav-click=\"goto('page3')\" name=\"page3\">Evaluer mes pairs</md-nav-item>\n" +
    "    </md-nav-bar>\n" +
    "</md-content>\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<!-- <nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav> -->\n" +
    "<header>\n" +
    "    <div layout=\"row\" layout-align=\" center\">\n" +
    "        <div flex=\"10\"><img src=\"img/logo_wcs.png\" alt=\"logo\"></div>\n" +
    "        <div flex=\"20\"><h1>Safaro</h1></div>\n" +
    "        <input flex=\"45\" class=\"search\" type=\"text\" placeholder=\"rechercher...\" required></input>\n" +
    "        <div flex class=\"avatar\"><img ng-src=\"img/squirrel.jpg\" class=\"md-avatar\" alt=\"{{contact.name}}\" /></div>\n" +
    "    </div>\n" +
    "</header>\n" +
    "\n" +
    "<md-content>\n" +
    "    <md-nav-bar class=\"menu\" md-selected-nav-item=\"currentNavItem\" nav-bar-aria-label=\"navigation links\">\n" +
    "      <md-nav-item class=\"reussites_session\" flex=\"45\" md-nav-click=\"goto('page1')\" name=\"page1\">Réussites de la session</md-nav-item>\n" +
    "      <md-nav-item class=\"reussites\"flex=\"15\" md-nav-click=\"goto('page2')\" name=\"page2\">Mes réussites</md-nav-item>\n" +
    "      <md-nav-item flex md-nav-click=\"goto('page3')\" name=\"page3\">Evaluer mes pairs</md-nav-item>\n" +
    "    </md-nav-bar>\n" +
    "</md-content>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);
