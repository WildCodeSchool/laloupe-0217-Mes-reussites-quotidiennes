angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/createpost.html",
    "<form ng-submit= sendPost()>\n" +
    "  <input type=\"text\" name=\"post\" ng-model=\"newPost\" placeholder=\"Écrivez votre réussite ici\">\n" +
    "</form>\n" +
    "\n" +
    "<hr>\n" +
    "\n" +
    "<h2>Mes réussites</h2>\n" +
    "\n" +
    "<div >\n" +
    "  <div class=\"\">\n" +
    "    <ul>\n" +
    "      <li ng-repeat=\"post in posts\" ng-model=\"newPost\" ng-change=\"check()\">\n" +
    "        {{ post.content }} - <button ng-click=\"removePost(post._id)\">Supprimer</button>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "  <p ng-hide=\"posts.length\">Vous n'avez pas encore posté de réussite.</p>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/home.html",
    "<nav role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <header>\n" +
    "        <div layout=\"row\" layout-align=\" end\">\n" +
    "            <div flex=\"10\"><img src=\"img/logo_wcs.png\" alt=\"logo\"></div>\n" +
    "            <div flex=\"20\">\n" +
    "                <h1>Safaro</h1></div>\n" +
    "            <md-input-container class=\"md-block\" flex-gt-sm flex=\"45\">\n" +
    "                <label>Rechercher ...</label>\n" +
    "                <input ng-model=\"user.firstName\">\n" +
    "            </md-input-container>\n" +
    "            <div flex class=\"avatar\"><img ng-src=\"img/squirrel.jpg\" ui-sref=\"user.profile\" class=\"md-avatar\" alt=\"{{contact.name}}\" /></div>\n" +
    "        </div>\n" +
    "    </header>\n" +
    "\n" +
    "    <md-content>\n" +
    "        <md-nav-bar class=\"menu\" md-selected-nav-item=\"currentNavItem\" nav-bar-aria-label=\"navigation links\">\n" +
    "            <md-nav-item ui-sref=\"user.home\" ng-show=\"auth.isAuthenticated()\" class=\"reussites_session\" flex=\"45\" md-nav-click=\"goto('page1')\" name=\"page1\">\n" +
    "                <!--route provisoire à changer-->\n" +
    "                Réussites de la session</md-nav-item>\n" +
    "            <md-nav-item class=\"reussites\" ui-sref=\"user.mes_reussites\" flex=\"15\" md-nav-click=\"goto('page2')\" name=\"page2\">Mes réussites</md-nav-item>\n" +
    "            <md-nav-item flex md-nav-click=\"goto('page3')\" name=\"page3\">Badger</md-nav-item>\n" +
    "        </md-nav-bar>\n" +
    "    </md-content>\n" +
    "</nav>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"login-container\">\n" +
    "  <div class=\"left\">\n" +
    "    <h1 class=\"login-h1\">Me connecter</h1>\n" +
    "    <p class=\"have_account\">Vous n'avez pas de compte ? <a ui-sref=\"anon.register\">Créez-en un ici !</a></p>\n" +
    "    <md-content layout-padding>\n" +
    "      <div>\n" +
    "        <form class=\"userForm\" name=\"userForm\" ng-submit=\"login()\">\n" +
    "          <div layout-gt-sm=\"row\">\n" +
    "            <md-input-container class=\"md-block\" flex-gt-sm>\n" +
    "              <label>Adresse email</label>\n" +
    "              <input ng-model=\"user.email\" required>\n" +
    "            </md-input-container>\n" +
    "          </div>\n" +
    "          <div layout-gt-sm=\"row\">\n" +
    "            <md-input-container class=\"md-block\" flex-gt-sm>\n" +
    "              <label>Mot de passe</label>\n" +
    "              <input type=\"password\" ng-model=\"user.password\" required>\n" +
    "            </md-input-container>\n" +
    "          </div>\n" +
    "          <h2>Mon humeur du jour</h2> <br />\n" +
    "          <div layout-gt-sm=\"row\">\n" +
    "            <img src=\"../../img/grinning.png\" class=\"compteur_smiley\" alt=\"\">\n" +
    "            <img src=\"../../img/angryface.png\" class=\"compteur_smiley\" alt=\"\">\n" +
    "            <img src=\"../../img/confused.png\" class=\"compteur_smiley\" alt=\"\">\n" +
    "            <img src=\"../../img/cool.png\" class=\"compteur_smiley\" alt=\"\">\n" +
    "            <img src=\"../../img/heart.png\" class=\"compteur_smiley\" alt=\"\">\n" +
    "          </div>\n" +
    "          <md-button type=\"submit\" class=\"md-raised\">Valider</md-button>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "    </md-content>\n" +
    "  </div>\n" +
    "  <div class=\"loginBackground\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- <div class=\"row\">\n" +
    "  <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "    <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "      <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "        <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "        <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "      </div>\n" +
    "      <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div> -->\n"
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
    "</nav> -->\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"register-container\">\n" +
    "  <div class=\"left\">\n" +
    "    <h1 class=\"register-h1\">Créer mon compte</h1>\n" +
    "    <p class=\"have_account\">Vous avez un compte ? <a ui-sref=\"anon.login\">Identifiez-vous ici !</a></p>\n" +
    "    <md-content layout-padding>\n" +
    "      <div>\n" +
    "        <form class=\"userForm\" name=\"userForm\" ng-submit=\"register()\">\n" +
    "          <div layout-gt-sm=\"row\">\n" +
    "            <md-input-container class=\"md-block\" flex-gt-sm>\n" +
    "              <label>Nom</label>\n" +
    "              <input ng-model=\"user.lastname\" required>\n" +
    "            </md-input-container>\n" +
    "\n" +
    "            <md-input-container class=\"md-block\" flex-gt-sm>\n" +
    "              <label>Prénom</label>\n" +
    "              <input ng-model=\"user.firstname\" required>\n" +
    "            </md-input-container>\n" +
    "          </div>\n" +
    "          <div layout-gt-sm=\"row\">\n" +
    "            <md-input-container class=\"md-block\" flex-gt-sm>\n" +
    "              <label>Adresse email</label>\n" +
    "              <input ng-model=\"user.email\" required>\n" +
    "            </md-input-container>\n" +
    "          </div>\n" +
    "          <div layout-gt-sm=\"row\">\n" +
    "            <md-input-container class=\"md-block\" flex-gt-sm>\n" +
    "              <label>Pseudo GitHub</label>\n" +
    "              <input ng-model=\"user.pseudo\" required>\n" +
    "            </md-input-container>\n" +
    "          </div>\n" +
    "          <div layout-gt-sm=\"row\">\n" +
    "            <md-input-container class=\"md-block\" flex-gt-sm>\n" +
    "              <label>Ville de la session</label>\n" +
    "              <input ng-model=\"user.city\" required>\n" +
    "            </md-input-container>\n" +
    "          </div>\n" +
    "          <div layout-gt-sm=\"row\">\n" +
    "            <md-input-container class=\"md-block\" flex-gt-sm>\n" +
    "              <label>Numéro de la session</label>\n" +
    "              <input ng-model=\"user.session\" required>\n" +
    "            </md-input-container>\n" +
    "          </div>\n" +
    "          <div layout-gt-sm=\"row\">\n" +
    "            <md-input-container class=\"md-block\" flex-gt-sm>\n" +
    "              <label>Mot de passe</label>\n" +
    "              <input type=\"password\" ng-model=\"user.password\" required>\n" +
    "            </md-input-container>\n" +
    "          </div>\n" +
    "          <md-button type=\"submit\" class=\"md-raised\">Valider</md-button>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "    </md-content>\n" +
    "  </div>\n" +
    "  <div class=\"registerBackground\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!-- <div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input type=\"text\" class=\"form-control\" ng-model=\"user.lastname\" required placeholder=\"Nom\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input type=\"text\" class=\"form-control\" ng-model=\"user.firstname\" required placeholder=\"Prenom\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input type=\"text\" class=\"form-control\" ng-model=\"user.pseudo\" required placeholder=\"Pseudo Github\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div> -->\n"
  );

  $templateCache.put("user/badger.html",
    "<div class=\"badge_demand\">\n" +
    "\n" +
    "  <md-card ng-repeat=\"demandBadge in demandBadges | orderBy:'date':true track by $index\" layout=\"row\" layout-align=\"space-between center\">\n" +
    "      <md-card-header flex=\"50\">\n" +
    "        <img class=\"user_badge\" ng-src=\"http://github.com/{{user.pseudo}}.png\" />\n" +
    "          <span class=\"user_name\">{{ user.firstname }} {{ user.lastname }}</span><span class=\"name_badge\">a demandé le badge \" {{ badge.name }} \"</span>\n" +
    "      </md-card-header>\n" +
    "      <img flex=\"5\" class=\"badge\" src=\"img/vintage.png\"></img>\n" +
    "      <img ng-click=\"actived()\" ng-class=\"grey_heart\" class=\"heart\" src=\"img/smiling_heart.png\"></img>\n" +
    "  </md-card>\n" +
    "\n" +
    "    <!-- <md-card layout=\"row\" layout-align=\"space-between center\">\n" +
    "        <md-card-header flex=\"50\">\n" +
    "          <img class=\"user_badge\" src=\"img/casimir.png\" />\n" +
    "            <span class=\"user_name\">{{ user.firstname }} {{ user.lastname }}</span><span class=\"name_badge\">a demandé le badge {{ badge.id }}</span>\n" +
    "        </md-card-header>\n" +
    "        <img flex=\"5\" class=\"badge\" src=\"img/HTML.png\"></img>\n" +
    "        <img class=\"heart\" src=\"img/smiling_heart.png\"></img>\n" +
    "    </md-card> -->\n" +
    "\n" +
    "</div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/home.html",
    "<div>\n" +
    "      <md-card>\n" +
    "        <md-card-header layout=\"column\" layout-align=\"space-around center\">\n" +
    "            <img class=\"profil\" src=\"http://github.com/{{user.pseudo}}.png\"/>\n" +
    "            <span class=\"md-title\">{{ user.firstname }} {{ user.lastname }}</span>\n" +
    "            <span class=\"md-subhead\">{{ user.city }}, session #{{ user.session }}</span>\n" +
    "        </md-card-header>\n" +
    "        <md-card-content layout=\"row\" layout-align=\"space-around none\">\n" +
    "          <div class=\"count\" flex=\"50\" layout=\"column\"><span class=\"score\">400</span><span class=\"md-headline\">Réussites</span></div>\n" +
    "          <div flex=\"50\" layout=\"column\"><span class=\"score\">32</span><span class=\"md-headline\">Badges</span></div>\n" +
    "        </md-card-content>\n" +
    "        <md-card-content>\n" +
    "          <div class=\"smileys\" layout=\"row\" layout-align=\"space-around\">\n" +
    "            <img ng-class=\"{'selected': (color === 1)}\" ng-click=\"changeColor(1)\" class=\"smiley\" src=\"img/grinning.png\" alt=\"grinning\">\n" +
    "            <img ng-class=\"{'selected': (color === 2)}\" ng-click=\"changeColor(2)\" class=\"smiley\" src=\"img/confused.png\" alt=\"confused\">\n" +
    "            <img ng-class=\"{'selected': (color === 3)}\" ng-click=\"changeColor(3)\" class=\"smiley\" src=\"img/crying.png\" alt=\"crying\">\n" +
    "            <img ng-class=\"{'selected': (color === 4)}\" ng-click=\"changeColor(4)\" class=\"smiley\" src=\"img/pouting.png\" alt=\"pouting\">\n" +
    "            <img ng-class=\"{'selected': (color === 5)}\" ng-click=\"changeColor(5)\" class=\"smiley\" src=\"img/sleeping.png\" alt=\"sleeping\">\n" +
    "            <img ng-class=\"{'selected': (color === 6)}\" ng-click=\"changeColor(6)\" class=\"smiley\" src=\"img/cool.png\" alt=\"cool\">\n" +
    "          </div>\n" +
    "        </md-card-content>\n" +
    "      </md-card>\n" +
    "</div>\n" +
    "\n" +
    "<div>\n" +
    "      <md-card id=\"badges\" layout=\"column\" layout-align=\"space-around center\">\n" +
    "        <img ng-click =\"showModal()\" ng-model=\"newDemand\" type=\"submit\" class=\"career\" src=\"../img/vintage.png\"></img>\n" +
    "      </md-card>\n" +
    "</div>\n" +
    "\n" +
    "<!-- img ng-click =\"sendDemand('591d699c51f8f7fa17f12c0c')\"  -->\n"
  );

  $templateCache.put("user/mes_reussites.html",
    "<div>\n" +
    "    <div class=\"ownsuccess\">\n" +
    "            <md-content>\n" +
    "                <md-tabs md-dynamic-height md-border-bottom>\n" +
    "                    <md-tab label=\"Partager une réussite\">\n" +
    "                        <form class=\"edit\" ng-submit= \"sendPost()\">\n" +
    "                            <md-input-container class=\"md-block\">\n" +
    "                                <label>Écrivez une réussite ici</label>\n" +
    "                                <textarea ng-model=\"newPost\" md-maxlength=\"200\" rows=\"2\" md-select-on-focus></textarea>\n" +
    "                            </md-input-container>\n" +
    "                            <md-button type=\"submit\" class=\"md-raised\">Valider</md-button>\n" +
    "                        </form>\n" +
    "\n" +
    "                        <ul>\n" +
    "                            <li class=\"newsuccess\" ng-repeat=\"post in posts | orderBy:'createdate':true\" ng-model=\"newPost\" ng-change=\"check()\">\n" +
    "                                <div class=\"success\">\n" +
    "                                    <div layout=\"row post_line1\">\n" +
    "                                        <img ng-src=\"http://github.com/{{post.student.pseudo}}.png\" class=\"md-avatar posts\" alt=\"{{user.lastname}}\" />\n" +
    "                                        <div id=\"username\"> {{ post.student.firstname }} {{ post.student.lastname }} </div>\n" +
    "                                        <img ng-src=\"img/cool.png\" class=\"smiley_sunglasses\" alt=\"smiley\" />\n" +
    "                                    </div>\n" +
    "                                    <hr>\n" +
    "                                    <div class=\"post\">{{ post.content }}</div>\n" +
    "                                    <hr>\n" +
    "                                    <div class=\"smileys_delete\">\n" +
    "                                        <img ng-src=\"img/grinning.png\" class=\"compteur_smiley\" alt=\"smiley\" />\n" +
    "                                        <img ng-src=\"img/wink.png\" class=\"compteur_smiley smileys_test\" alt=\"smiley\" />\n" +
    "                                        <md-button ng-click=\"removePost(post._id)\" type=\"submit\" md-color=\"red\" class=\"md-raised md-warn delete_button\">Supprimer</md-button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </md-tab>\n" +
    "                    <md-tab label=\"Editer mon profil\">\n" +
    "                        <md-content class=\"md-padding profile\">\n" +
    "                            <md-content class=\"md-no-momentum\">\n" +
    "                                <md-input-container class=\"md-icon-float md-block\">\n" +
    "                                    <!-- Use floating label instead of placeholder -->\n" +
    "                                    <label>Nom</label>\n" +
    "                                    <md-icon md-svg-src=\"img/icons/ic_person_24px.svg\" class=\"name\"></md-icon>\n" +
    "                                    <input ng-model=\"user.lastname\" type=\"text\">\n" +
    "                                </md-input-container>\n" +
    "\n" +
    "                                <md-input-container class=\"md-icon-float md-block\">\n" +
    "                                    <!-- Use floating label instead of placeholder -->\n" +
    "                                    <label>Prénom</label>\n" +
    "                                    <md-icon md-svg-src=\"img/icons/ic_person_24px.svg\" class=\"name\"></md-icon>\n" +
    "                                    <input ng-model=\"user.firstname\" type=\"text\">\n" +
    "                                </md-input-container>\n" +
    "\n" +
    "                                <md-input-container class=\"md-block\">\n" +
    "                                    <!-- Use floating placeholder instead of label -->\n" +
    "                                    <md-icon md-svg-src=\"img/icons/ic_email_24px.svg\" class=\"email\"></md-icon>\n" +
    "                                    <input ng-model=\"user.email\" type=\"email\" placeholder=\"Email (requis)\" ng-required=\"true\">\n" +
    "                                </md-input-container>\n" +
    "\n" +
    "                                <!-- <md-input-container class=\"md-block\">\n" +
    "                                    Use floating placeholder instead of label -->\n" +
    "                                    <!-- <md-icon md-svg-src=\"img/icons/ic_email_24px.svg\" class=\"email\"></md-icon>\n" +
    "                                    <input ng-model='user.password' type=\"password\" placeholder=\"Mot de passe\" ng-required=\"true\">\n" +
    "                                </md-input-container>\n" +
    " -->\n" +
    "                                <md-input-container md-no-float class=\"md-block\">\n" +
    "                                    <label>Ville</label>\n" +
    "                                    <md-icon md-svg-src=\"img/icons/ic_phone_24px.svg\"></md-icon>\n" +
    "                                    <input ng-model=\"user.city\" type=\"text\">\n" +
    "                                </md-input-container>\n" +
    "\n" +
    "                                <md-input-container md-no-float class=\"md-block\">\n" +
    "                                    <label>Session</label>\n" +
    "                                    <md-icon md-svg-src=\"img/icons/ic_phone_24px.svg\"></md-icon>\n" +
    "                                    <input ng-model=\"user.session\" type=\"text\">\n" +
    "                                </md-input-container>\n" +
    "\n" +
    "                                <md-input-container md-no-float class=\"md-block\">\n" +
    "                                    <label>Pseudo Github</label>\n" +
    "                                    <md-icon md-svg-src=\"img/icons/ic_phone_24px.svg\"></md-icon>\n" +
    "                                    <input ng-model=\"user.pseudo\" type=\"text\">\n" +
    "                                </md-input-container>\n" +
    "\n" +
    "                                <md-input-container md-no-float class=\"md-block\">\n" +
    "                                    <md-icon md-svg-src=\"img/icons/ic_phone_24px.svg\"></md-icon>\n" +
    "                                    <textarea ng-model=\"user.bio\" type=\"text\" placeholder=\"Biographie\" rows=\"3\" cols=\"80\"></textarea>\n" +
    "                                </md-input-container>\n" +
    "\n" +
    "                                <md-button class=\"md-raised md-warn\" ng-click=\"update()\">Editer</md-button>\n" +
    "\n" +
    "                            </md-content>\n" +
    "\n" +
    "                        </md-content>\n" +
    "                    </md-tab>\n" +
    "\n" +
    "                </md-tabs>\n" +
    "            </md-content>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav role=\"navigation\">\n" +
    "\n" +
    "  <header layout=\"row\" layout-wrap layout-align-md=\"start center\" layout-align=\"start center\">\n" +
    "    <div flex=\"6\"><img class=\"logo\" src=\"img/logo_wcs.png\" alt=\"logo\"></div>\n" +
    "    <div flex=\"30\">\n" +
    "      <h1>Safaro</h1></div>\n" +
    "    <form ng-submit=\"$event.preventDefault()\">\n" +
    "      <div layout-gt-sm=\"row\">\n" +
    "        <md-content class=\"md-padding\">\n" +
    "          <form ng-submit=\"$event.preventDefault()\" name=\"searchForm\">\n" +
    "            <div layout-gt-sm=\"row\">\n" +
    "              <md-autocomplete flex required\n" +
    "                md-input-name=\"userAutocompleteField\"\n" +
    "                md-input-minlength=\"3\"\n" +
    "                md-input-maxlength=\"18\" \n" +
    "                md-no-cache=\"true\" \n" +
    "                md-selected-item=\"selectedUser\" \n" +
    "                md-search-text=\"searchText\" \n" +
    "                md-items=\"user in searchUser(searchText)\" \n" +
    "                md-item-text=\"fullName(user)\"\n" +
    "                md-require-match \n" +
    "                md-floating-label=\" Rechercher \">\n" +
    "                <md-item-template>\n" +
    "                  <span md-highlight-text=\"searchText\">{{user.firstname}} {{ user.lastname}}</span>\n" +
    "                </md-item-template>\n" +
    "              </md-autocomplete>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "        </md-content>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "\n" +
    "\n" +
    "    <!-- <div flex class=\"avatar\"><img ng-src=\"http://github.com/{{user.pseudo}}.png\" ui-sref=\"user.profile\" class=\"md-avatar\" alt=\"{{contact.name}}\" /></div> -->\n" +
    "\n" +
    "  </header>\n" +
    "\n" +
    "\n" +
    "  <md-content class=\"navbar\">\n" +
    "    <md-nav-bar class=\"menu\" md-selected-nav-item=\"currentNavItem\" nav-bar-aria-label=\"navigation links\">\n" +
    "      <md-nav-item ui-sref=\"user.reussites\" class=\"reussites_session\" flex=\"45\" md-nav-click=\"goto('page1')\" name=\"page1\">\n" +
    "        <!--route provisoire à changer-->\n" +
    "        Réussites de la session</md-nav-item>\n" +
    "      <md-nav-item class=\"reussites\" ui-sref=\"user.mes_reussites\" flex=\"15\" md-nav-click=\"goto('page2')\" name=\"page2\">Mes réussites</md-nav-item>\n" +
    "      <md-nav-item id=\"badger\" ui-sref=\"user.badger\" flex md-nav-click=\"goto('page3')\" name=\"page3\">Badger</md-nav-item>\n" +
    "      <md-nav-item ng-click=\"logout()\" ui-sref=\"anon.login\" md-nav-click=\"goto('login')\">Déconnecter</md-nav-item>\n" +
    "    </md-nav-bar>\n" +
    "  </md-content>\n" +
    "\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "<div flex-offset-xs flex-offset-gt-xs=\"30\">\n" +
    "    <md-content class=\"profile\">\n" +
    "        <md-tabs md-dynamic-height md-border-bottom>\n" +
    "            <md-tab class=\"info\" label=\"EDITER MON PROFIL\">\n" +
    "                <md-content class=\"md-padding\">\n" +
    "                    <md-content class=\"md-no-momentum\">\n" +
    "                        <md-input-container class=\"md-icon-float md-block\">\n" +
    "                            <!-- Use floating label instead of placeholder -->\n" +
    "                            <label>Nom</label>\n" +
    "                            <md-icon md-svg-src=\"img/ic_person_24px.svg\" class=\"name\"></md-icon>\n" +
    "                            <input ng-model=\"user.lastname\" type=\"text\">\n" +
    "                        </md-input-container>\n" +
    "\n" +
    "                        <md-input-container class=\"md-icon-float md-block\">\n" +
    "                            <!-- Use floating label instead of placeholder -->\n" +
    "                            <label>Prénom</label>\n" +
    "                            <md-icon md-svg-src=\"img/ic_person_24px.svg\" class=\"name\"></md-icon>\n" +
    "                            <input ng-model=\"user.firstname\" type=\"text\">\n" +
    "                        </md-input-container>\n" +
    "\n" +
    "                        <md-input-container class=\"md-block\">\n" +
    "                            <!-- Use floating placeholder instead of label -->\n" +
    "                            <md-icon md-svg-src=\"img/icons/ic_email_24px.svg\" class=\"email\"></md-icon>\n" +
    "                            <input ng-model=\"user.email\" type=\"email\" placeholder=\"Email (requis)\" ng-required=\"true\">\n" +
    "                        </md-input-container>\n" +
    "\n" +
    "                        <md-input-container class=\"md-block\">\n" +
    "                            <!-- Use floating placeholder instead of label -->\n" +
    "                            <md-icon md-svg-src=\"img/icons/ic_email_24px.svg\" class=\"email\"></md-icon>\n" +
    "                            <input type=\"password\" placeholder=\"Mot de passe\">\n" +
    "                        </md-input-container>\n" +
    "\n" +
    "                        <md-input-container md-no-float class=\"md-block\">\n" +
    "                            <label>Ville</label>\n" +
    "                            <md-icon md-svg-src=\"img/icons/ic_phone_24px.svg\"></md-icon>\n" +
    "                            <input ng-model=\"user.city\" type=\"text\">\n" +
    "                        </md-input-container>\n" +
    "\n" +
    "                        <md-input-container md-no-float class=\"md-block\">\n" +
    "                            <label>Session</label>\n" +
    "                            <md-icon md-svg-src=\"img/icons/ic_phone_24px.svg\"></md-icon>\n" +
    "                            <input ng-model=\"user.session\" type=\"text\">\n" +
    "                        </md-input-container>\n" +
    "\n" +
    "\n" +
    "                        <md-input-container md-no-float class=\"md-block\">\n" +
    "                            <label>Pseudo Github</label>\n" +
    "                            <md-icon md-svg-src=\"img/icons/ic_phone_24px.svg\"></md-icon>\n" +
    "                            <input ng-model=\"user.pseudo\" type=\"text\">\n" +
    "                        </md-input-container>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                        <md-input-container md-no-float class=\"md-block\">\n" +
    "                            <md-icon md-svg-src=\"img/icons/ic_phone_24px.svg\"></md-icon>\n" +
    "                            <textarea ng-model=\"user.bio\" type=\"text\" placeholder=\"Biographie\" rows=\"3\" cols=\"80\"></textarea>\n" +
    "                        </md-input-container>\n" +
    "\n" +
    "                    </md-content>\n" +
    "                </md-content>\n" +
    "            </md-tab>\n" +
    "            <md-tab ui-sref=\"user.mes_reussites\" label=\"Partager une réussite\">\n" +
    "              <md-content class=\"md-padding\">\n" +
    "              </md-content>\n" +
    "            </md-tab>\n" +
    "        </md-tabs>\n" +
    "        <md-button type=\"submit\" class=\"md-raised md-primary\">Valider</md-button>\n" +
    "    </md-content>\n" +
    "</div>\n"
  );

  $templateCache.put("user/reussites.html",
    "<div>\n" +
    "  <div class=\"ownsuccess\">\n" +
    "    <ul>\n" +
    "      <li class=\"newsuccess\" ng-repeat=\"post in posts | orderBy:'createdate':true\" ng-model=\"newPost\" ng-change=\"check()\">\n" +
    "        <div class=\"success\">\n" +
    "          <div layout=\"row post_line1\">\n" +
    "            <img ng-src=\"http://github.com/{{post.student.pseudo}}.png\" class=\"md-avatar posts\" alt=\"{{post.student.lastname}}\" />\n" +
    "            <div id=\"username\"> {{ post.student.firstname }} {{ post.student.lastname }} </div>\n" +
    "            <img ng-src=\"img/cool.png\" class=\"smiley_sunglasses\" alt=\"smiley\" />\n" +
    "          </div>\n" +
    "          <hr>\n" +
    "          <div class=\"post\">{{ post.content }}</div>\n" +
    "          <hr>\n" +
    "          <div>\n" +
    "          </div>\n" +
    "          <div class=\"facebook-reaction\">\n" +
    "            <img ng-src=\"img/grinning.png\" class=\"compteur_smiley\" alt=\"smiley\" />\n" +
    "            <img ng-src=\"img/wink.png\" class=\"compteur_smiley\" alt=\"smiley\" />\n" +
    "            <!-- container div for reaction system -->\n" +
    "            <span class=\"like-btn\"> <!-- Default like button -->\n" +
    "\t\t\t\t\t\t<span class=\"like-btn-emo like-btn-default\"></span>\n" +
    "            <!-- Default like button emotion-->\n" +
    "            <span class=\"like-btn-text\">J'aime</span>\n" +
    "            <!-- Default like button text,(Like, wow, sad..) default:Like  -->\n" +
    "            <ul class=\"reactions-box\">\n" +
    "              <!-- Reaction buttons container-->\n" +
    "              <li class=\"reaction reaction-like\" data-reaction=\"Like\"></li>\n" +
    "              <li class=\"reaction reaction-love\" data-reaction=\"J'adore\"></li>\n" +
    "              <li class=\"reaction reaction-haha\" data-reaction=\"Félicitations\"></li>\n" +
    "              <li class=\"reaction reaction-wow\" data-reaction=\"Wow\"></li>\n" +
    "              <li class=\"reaction reaction-sad\" data-reaction=\"Pas mal\"></li>\n" +
    "              <li class=\"reaction reaction-angry\" data-reaction=\"Courage\"></li>\n" +
    "            </ul>\n" +
    "            </span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
