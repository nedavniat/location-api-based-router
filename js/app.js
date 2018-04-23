const router = new Router([
  new Route('home', 'views/home.html', true),
  new Route('about', 'views/about.html'),
  new Route('contacts', 'views/contacts.html')
]);
router.init();