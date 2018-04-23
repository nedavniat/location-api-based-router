class Router {
  constructor(routes = [], root='app') {
    this.routes = routes;
    this.root = document.getElementById(root);
  }

  hashChange() {
    if(location.hash.length > 0) {
      this.routes.forEach((r) => {
        if(r.isActiveRoute(location.hash.substr(1))){
          this.followRoute(r.htmlFileName);
        }
      });
    } else {
      this.routes.forEach((r) => {
        if(r.isHome){
          this.followRoute(r.htmlFileName);
        }
      });
    }
  }

  followRoute(htmlName) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${htmlName}`);
    xhr.onreadystatechange =  () => {
      if(xhr.readyState === 4 && xhr.status === 200) {
        this.root.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }

  init() {
    window.addEventListener('hashchange', () => this.hashChange());
    this.hashChange(this.routes);
  }
}