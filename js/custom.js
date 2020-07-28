// tombol show/hide navigation liferay
$("#showControlMenu").click(function(e) {
  var $this = $(this);
  var tarNavLiferay = $(".control-menu-level-1");
  var chevronMain = $("#chevronMain");
  var btnCloseOpen = $("#btnCloseOpen");

  if ($(tarNavLiferay).hasClass("active-control-menu")) {
    $(tarNavLiferay).removeClass("active-control-menu");
  } else {
    $(tarNavLiferay).addClass("active-control-menu");
  }

  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }

  $(chevronMain).toggleClass("active-rotate");
  $this.toggleClass("active-background");

  if (!btnCloseOpen.hasClass("active")) {
    btnCloseOpen.text("Close");
    btnCloseOpen.addClass("active");
  } else {
    btnCloseOpen.text("Open");
    btnCloseOpen.removeClass("active");
  }

  e.preventDefault();
});
// end tombol show/hide navigation liferay

// sidebar child menu
$("#ulNav li").click(function(e) {
  e.stopPropagation();
  var $this = $(this);

  $this.siblings().removeClass("active");
  $this
    .siblings()
    .children()
    .filter(".child-menu")
    .removeClass("active animated fadeIn");
  $this.addClass("active");

  if (
    !$this
      .children()
      .filter(".child-menu")
      .hasClass("active")
  ) {
    $this.addClass("active");
    $this
      .children()
      .filter(".child-menu")
      .addClass("active animated fadeIn");
    $this
      .children()
      .find(".iconParentMenu")
      .addClass("active");
    $this
      .siblings()
      .children()
      .find(".iconParentMenu")
      .removeClass("active");
  } else {
    $this
      .siblings()
      .children()
      .filter(".child-menu")
      .removeClass("active animated fadeIn");
    $this.removeClass("active");
    $this
      .children()
      .filter(".child-menu")
      .removeClass("active animated fadeIn");
    $this
      .children()
      .find(".iconParentMenu")
      .removeClass("active");
  }
});
// end child menu

$(".text-close").click(function(e) {
  e.stopPropagation();
  $(this)
    .parent()
    .parent()
    .removeClass("active");
  $(this)
    .parent()
    .parent()
    .parent()
    .removeClass("active");
});

// -> Hover
$(".child-menu li").mouseover(function() {
  $(this)
    .siblings()
    .find("#child2Menu")
    .removeClass("active");
  $(this)
    .children()
    .filter("#child2Menu")
    .addClass("active animated fadeInLeftBig");
});
$(".child-menu li").mouseout(function() {
  $(this)
    .children()
    .filter("#child2Menu")
    .removeClass("active");
});

$(".child2-menu").mouseout(function() {
  $(this).removeClass("active");
});

// -> Add+Close Sidebar Mobile
$("#boxHeader .hamburger-sidebar").click(function() {
  var boxSidebar = $("#boxSidebar");
  var hamburger = $(".hamburger-sidebar");
  var pages = $("#ulNav").children();
  boxSidebar.addClass("active");
  hamburger.addClass("is-active");
  pages.removeClass("active");
  pages
    .children()
    .filter(".child-menu")
    .removeClass("active animated fadeIn");
  pages
    .children()
    .find(".iconParentMenu")
    .removeClass("active");
});

$("#boxSidebar .hamburger-sidebar").click(function() {
  var boxSidebar = $("#boxSidebar");
  var hamburger = $(".hamburger-sidebar");
  boxSidebar.removeClass("active");
  hamburger.removeClass("is-active");
});

// end sidebar child menu
