window.addEventListener('scroll', function() {
    var headerTop = document.querySelector('.header-top');
    var headerBot = document.querySelector('.header-bot');

    if (window.scrollY > 44) { // Khi cuộn trang xuống hơn 100px
        headerTop.classList.add('hidden');
        headerBot.classList.add('scroll-header-bot');

    } else {
        headerTop.classList.remove('hidden');
        headerBot.classList.remove('scroll-header-bot');
    }
});
var menuItems = document.querySelectorAll('.menu');
var titleHomePage = document.querySelector('.home-page-title');
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('mouseenter', function() {
            titleHomePage.classList.remove('title-home');
        });
        menuItem.addEventListener('mouseleave', function() {
            titleHomePage.classList.add('title-home');
        });
});

var pageItems = document.querySelectorAll('.btn-page-content');
var firstPage = document.querySelector('.first-page');
pageItems.forEach(function(pageItems) {
    pageItems.addEventListener('mouseenter', function() {
            firstPage.classList.remove('first-page');
        });
        pageItems.addEventListener('mouseleave', function() {
            firstPage.classList.add('first-page');
        });
});

var stoneItems = document.querySelectorAll('.type-of-stone');
var firstStone = document.querySelector('.first-stone');
stoneItems.forEach(function(stoneItems) {
    stoneItems.addEventListener('mouseenter', function() {
            firstStone.classList.remove('first-stone');
        });
        stoneItems.addEventListener('mouseleave', function() {
            firstStone.classList.add('first-stone');
        });
});

var newsItems = document.querySelectorAll('.table-information-news');
var firstNews = document.querySelector('.btn-table-news-first');
newsItems.forEach(function(newsItems) {
    newsItems.addEventListener('mouseenter', function() {
            firstNews.classList.remove('btn-table-news-first');
        });
        newsItems.addEventListener('mouseleave', function() {
            firstNews.classList.add('btn-table-news-first');
        });
});