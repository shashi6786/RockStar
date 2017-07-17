"use strict";angular.module("rockStarApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/home"),a.state("/events",{url:"/events",templateUrl:"views/events.html",controller:"EventsCtrl"}).state("/favs",{url:"/favs",templateUrl:"views/favs.html",controller:"FavsCtrl"}).state("/contact",{url:"/contact",templateUrl:"views/contact.html",controller:"ContactCtrl"}).state("/signup",{url:"/signup",templateUrl:"views/signup.html",controller:"SignupCtrl"}).state("/login",{url:"/login",templateUrl:"views/login.html",controller:"LoginCtrl"}).state("/home",{url:"/home",views:{landing:{templateUrl:"views/home.html",controller:"EventsCtrl"},events:{templateUrl:"views/events.html",controller:"EventsCtrl"},contact:{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact.js"}}}).state("/biography",{url:"/biography",templateUrl:"views/biography.html",controller:"BiographyCtrl"}).state("/about",{url:"/about",templateUrl:"views/about.html",controller:"AboutCtrl"})}]),angular.module("rockStarApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("rockStarApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("rockStarApp").controller("BiographyCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("rockStarApp").controller("EventsCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("rockStarApp").controller("FavsCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("rockStarApp").controller("ContactCtrl",["$scope","fanTextService",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],this.fanTextFetch=function(){b.getFanText().then(function(b){console.log(b.data.text),a.fanText=b.data.text},function(b){a.status="Unable to load text data: "+b.message})},this.fanTextFetch(),this.getFanCount=function(){b.getFanCount().then(function(b){console.log(b.count),a.fanCount=b.count},function(b){a.status="Unable to load count data: "+b.message})},this.getFanCount(),a.increaseFanCount=function(){b.setFanCount(),a.fanCount=a.fanCount+1},a.sendContactEmail=function(){b.sendContactEmail(a.email)}}]),angular.module("rockStarApp").controller("SignupCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("rockStarApp").controller("LoginCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("rockStarApp").controller("HomeCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("rockStarApp").service("fanTextService",["$http",function(a){this.getFanText=function(){return a.get("http://khiladi-springboot.azurewebsites.net/rockstar/test")},this.getFanCount=function(){return a.get("http://khiladi-springboot.azurewebsites.net/rockstar/fancount").then(function(a){return a.data})},this.setFanCount=function(){return console.log("here"),a.get("http://khiladi-springboot.azurewebsites.net/rockstar/addfancount").then(function(a){return a.data},function(a){return"fetched data from DB after setting"})},this.sendContactEmail=function(b){return console.log("here"),a.get("http://khiladi-springboot.azurewebsites.net/rockstar/contactemail/"+b).then(function(a){return a.data},function(a){return"fetched data from DB after setting"})}}]),angular.module("rockStarApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/biography.html",'<blockquote> <p>I am a simple person, eager to learn new techs and implement those to boost my learning. The world is moving towards IoT, Cloud, Data Analytics and there is no reason why should not we. I work for TCS since 2011 and this relationship with Tata has been getting stronger day by day. </p> <footer>From Shashi Bhushan</footer> </blockquote> <blockquote> <dl> <dt>Synopsis</dt> <dd>Born in 1991 in Patna, Bihar, Shashi launched his career in IT as an employee of the TCS. Following his acclaimed five-year run as an employee of TCS, he became one of the TCS\'s key resource. His involvement in project of GE Transportation brought many applauds for the team. Shashi also developed some innovative modules for his projects, and enjoyed success. His excellenece in many fields shows his versatile nature and adaptibility to situation. Hence, also became famous as <mark>"Khiladi" , "Rockstar" , "International Khiladi" <mark>.</mark></mark></dd> <br> <dt>Early Life</dt> <dd>Studious and somewhat quiet, Shashi chose to make his mark on the Programming languages, where he set a high expectation for himself by receiving Scholarships and participating in various Hackathons at College level. Hhe was also too good at comedy. A glimpse of his comedic skills showed up each morning at high school, when he used to play some prank with his friends or teachers. Upon graduation in 2011, Shashi stayed close to home, choosing to join TCS at New Delhi to improve his skills and contibute to the success of Tata in some way.</dd> <br> <dt>Big Time Man</dt> <dd>Be it a situation where the project is stuck and dead in the water, He came up with ideas and approaches which were out of box. The way he explains his approach makes every task look simple and increases faith of tem members in achieving the tasks. By solving many critical issues within time and rescuing the application from tons of failures, he became the Go to man and is also known as <mark>"Big Time Man"</mark>.</dd> </dl> <div class="fb-like" data-share="true" data-width="450" data-show-faces="true"> <div class="fb-comments" data-href="http://khiladi.azurewebsites.net/#!/biography#configurator" data-numposts="5"></div> </div> </blockquote>'),a.put("views/contact.html",'<div class="container" ng-controller="ContactCtrl"> <h3 class="text-center">Contact</h3> <p class="text-center"><em>I love my fans!</em></p> <p class="text-center"><em>{{fanText}}</em></p> <div class="row test"> <div class="col-md-4"> <blockquote> <p>Fan Counter : {{ fanCount}}</p> <p class="btn btn-info" ng-click="increaseFanCount()"> Click to be my Fan.</p>  <footer>Being fetched and set From Springboot Service & Azure SQL Database</footer> </blockquote> <div class="fb-like" data-share="true" data-width="450" data-show-faces="true"> </div> <div class="fb-follow" data-href="http://www.facebook.com/shashi.sastra" data-layout="standard" data-size="small" data-show-faces="true"></div> <p><span class="glyphicon glyphicon-map-marker"></span>Erie, US</p> <p><span class="glyphicon glyphicon-phone"></span>Phone: +1 8143860791</p> <p><span class="glyphicon glyphicon-envelope"></span>Email: shashi.bhushan1@tcs.com</p> </div> <div class="col-md-8"> <div class="row"> <div class="col-sm-6 form-group"> <input class="form-control" id="name" name="name" placeholder="Name" type="text" required> </div> <div class="col-sm-6 form-group"> <input class="form-control" id="email" name="email" placeholder="Email" type="email" ng-model="email" required> </div> </div> <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea> <div class="row"> <div class="col-md-12 form-group"> <button class="btn pull-right" type="submit" ng-click="sendContactEmail()">Send</button> </div> </div> </div> </div> </div> <div class="container"> <div id="googleMap"></div> </div> <!-- Google Map API Start --> <script>function myMap() {\n        var myCenter = new google.maps.LatLng(42.1291, -80.0851);\n        var mapProp = {\n            center: myCenter,\n            zoom: 12,\n            scrollwheel: false,\n            draggable: false,\n            mapTypeId: google.maps.MapTypeId.ROADMAP\n        };\n        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);\n        var marker = new google.maps.Marker({\n            position: myCenter\n        });\n        marker.setMap(map);\n    }</script> <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBeMzxY_r2lBoSOA5ZAprDWHWkJGVxZPc&callback=myMap"></script> <!-- Google Map API end -->'),a.put("views/events.html",'<blockquote> <p>Shashi is First Rockstar on this planet known to have knowledge of Programming languages along with being too good at "Acting" and "Concerts"</p> <footer>- World Fan Survey</footer> </blockquote> <div class="row text-center"> <div class="col-sm-4"> <div class="thumbnail"> <img src="images/freedom.00336e37.jpg" alt="Paris"> <p><strong>National School of Drama</strong></p> <p>Independence Day, 15 August 2017</p> <button class="btn" data-toggle="modal" data-target="#myModal">Book Your Seat</button> </div> <div class="fb-like" data-share="true" data-width="450" data-show-faces="true"> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <img src="images/concert.f707e953.jpg" alt="New York"> <p><strong>Pittsburgh Concert</strong></p> <p>Saturday Night Rampwalk, 08 December 2017</p> <button class="btn" data-toggle="modal" data-target="#myModal">Book Your Seat</button> </div> <div class="fb-like" data-share="true" data-width="450" data-show-faces="true"> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <img src="images/azure.78a9be10.jpg" alt="San Francisco"> <p><strong>Training by Shashi</strong></p> <p>Azure Training, Sat. 28 December 2017</p> <button class="btn" data-toggle="modal" data-target="#myModal">Book Your Seat</button> </div> <div class="fb-like" data-share="true" data-width="450" data-show-faces="true"> </div> </div> </div> <div class="row text-center"> <div class="col-sm-4"> <div class="thumbnail"> <img src="images/angular.64b6e9f9.jpg" alt="Paris"> <p><strong>Guru of Angular JS</strong></p> <p>Code Day, 15 August 2018</p> <button class="btn" data-toggle="modal" data-target="#myModal">Book Your Seat</button> </div> <div class="fb-like" data-share="true" data-width="450" data-show-faces="true"> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <img src="images/bigdata.87f0c756.jpg" alt="New York"> <p><strong>Master in Big Data</strong></p> <p>Hadoop Day, 18 December 2018</p> <button class="btn" data-toggle="modal" data-target="#myModal">Book Your Seat</button> </div> <div class="fb-like" data-share="true" data-width="450" data-show-faces="true"> </div> </div> <div class="col-sm-4"> <div class="thumbnail"> <img src="images/machinelearning.65e37caf.jpg" alt="San Francisco"> <p><strong>Shashi\'s Way to Machine Learning</strong></p> <p>AI and Data Science, Sat. 28 December 2018</p> <button class="btn" data-toggle="modal" data-target="#myModal">Book Your Seat</button> </div> <div class="fb-like" data-share="true" data-width="450" data-show-faces="true"> </div> </div> </div> <!-- Modal --> <div class="modal" id="myModal" role="dialog"> <div class="modal-dialog"> <!-- Modal content--> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal">&times;</button> <h4><span class="glyphicon glyphicon-lock"></span> Reserve your seat for the event</h4> </div> <div class="modal-body"> <form role="form"> <div class="form-group"> <label for="psw"><span class="glyphicon glyphicon-shopping-cart"></span> Event/Training Cost: $100</label> </div> <div class="form-group"> <label for="usrname"><span class="glyphicon glyphicon-user"></span>Have this booking emailed to</label> <input type="text" class="form-control" id="usrname" placeholder="Enter email"> </div> <button type="submit" class="btn btn-block">Pay <span class="glyphicon glyphicon-ok"></span> </button> </form> </div> <div class="modal-footer"> <button type="submit" class="btn btn-info btn-default pull-left" data-dismiss="modal"> <span class="glyphicon glyphicon-remove"></span> Cancel </button> <p>Need <a ui-sref="/home">help?</a></p> </div> </div> </div> </div>'),a.put("views/favs.html",'<div class="row"> <div class="col-sm-4"> <br> <a href="#demo" data-toggle="collapse"> <img src="images/rafting.6e7e45ad.jpg" class="img-circle person img-responsive" alt="Shashi"> </a>  <p class="text-center"><strong>Rafting</strong></p> <div id="demo" class="collapse"> <p>West Virginia</p> <p>White Water Rafting</p> <p>1st July 2017</p> </div> </div> <div class="col-sm-4"> <br> <a href="" data-toggle="collapse"> <img src="images/tashan.e6a431aa.jpg" class="img-circle person img-responsive" alt="Shashi"> </a>  <p class="text-center"><strong>Alleghany</strong></p> <div id="demo2" class="collapse"> <p>Cool Dudes</p> <p>Glares!!!!!!</p> <p>September 2016</p> </div> </div> <div class="col-sm-4"> <br> <a href="#demo3" data-toggle="collapse"> <img src="images/fall.761e1663.jpg" class="img-circle person img-responsive" alt="Random Name"> </a>  <p class="text-center"><strong>Colors All Around</strong></p> <div id="demo3" class="collapse"> <p>Erie Falls</p> <p>Love the colors</p> <p>Septmeber 2016</p> </div> </div> </div> <div class="row"> <div class="col-sm-4"> <br> <a href="#demo" data-toggle="collapse"> <img src="images/amitabh.ea4d6730.jpg" class="img-circle person img-responsive" alt="Random Name"> </a>  <p class="text-center"><strong>Rishte me to Hum...</strong></p> <div id="demo" class="collapse"> <p>West Virginia</p> <p>White Water Rafting</p> <p>1st July 2017</p> </div> </div> <div class="col-sm-4"> <br> <a href="" data-toggle="collapse"> <img src="images/me.ec999b78.jpg" class="img-circle person img-responsive" alt="Random Name"> </a>  <p class="text-center"><strong>Myself at CCD, New Delhi</strong></p> <div id="demo2" class="collapse"> <p>Cool Dudes</p> <p>Glares!!!!!!</p> <p>September 2016</p> </div> </div> <div class="col-sm-4"> <br> <a href="#demo3" data-toggle="collapse"> <img src="images/jaiveeru1.e97fcbb6.jpg" class="img-circle person img-responsive" alt="Random Name"> </a>  <p class="text-center"><strong>Ye Dosti!!!</strong></p> <div id="demo3" class="collapse"> <p>Erie Falls</p> <p>Love the colors</p> <p>Septmeber 2016</p> </div> </div> </div> <div class="fb-comments" data-href="http://khiladi.azurewebsites.net/#!/favs#configurator" data-numposts="5"></div>'),a.put("views/home.html",'<div class="row"> <div id="myCarousel" class="carousel slide" data-ride="carousel"> <!-- Indicators --> <ol class="carousel-indicators"> <li data-target="#myCarousel" data-slide-to="0" class="active"></li> <li data-target="#myCarousel" data-slide-to="1"></li> <li data-target="#myCarousel" data-slide-to="2"></li> </ol> <!-- Wrapper for slides --> <div class="carousel-inner"> <div class="item active"> <img class="img-responsive" src="images/me5.0f998dbc.jpg" alt="shenandoah"> <div class="carousel-caption"> <h3>Washington</h3> <p>Shenandoah National Park - Clear Sky and Me makes perfect combo!</p> </div> </div> <div class="item"> <img class="img-responsive" src="images/party.9d57b814.jpg" alt="Alleghany"> <div class="carousel-caption"> <h3>Erie</h3> <p>Friend\'s Daughter B\'day Party - Crowd of Erie!!.</p> </div> </div> <div class="item"> <img class="img-responsive" src="images/me1.d42bdf89.jpg" alt="Malibu Beach Outing"> <div class="carousel-caption"> <h3>California</h3> <p>Malibu Beach - A Day spent with the Sun and Glares.</p> </div> </div> </div> <!-- Left and right controls --> <a class="left carousel-control" href="#myCarousel" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="#myCarousel" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> <span class="sr-only">Next</span> </a> </div> </div> <div class="row marketing hide"> <h4>What is Azure?</h4> <p>Microsoft Azure is a growing collection of integrated cloud services that developers and IT professionals use to build, deploy, and manage applications through our global network of datacenters. With Azure, you get the freedom to build and deploy wherever you want, using the tools, applications, and frameworks of your choice.</p> </div>'),a.put("views/login.html",'<div class="container"> <div class="row"> <div class="col-sm-4"> <img src="images/loginback.d38b5e66.jpg" alt="Rockstar" class="thumbnail"> </div> <div class="col-sm-4 jumbotron"> <div class="fb-login-button" data-max-rows="1" data-size="small" data-button-type="continue_with" data-show-faces="true" data-auto-logout-link="true" data-use-continue-as="true"></div> </div> <div class="col-sm-4"> <div class="fb-comments" data-href="https://www.facebook.com/photo.php?fbid=10159151744075160&set=exp.10159151748800160.unitary&type=3&theater#configurator" data-numposts="5"></div> </div> </div> </div>'),a.put("views/signup.html","<p>This is the signup view.</p>")}]);