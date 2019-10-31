class ToolbarController {
  constructor($mdSidenav,$http,$state,dataService){
      'ngInject';
    this.$http = $http;
      this.$mdSidenav = $mdSidenav;
      this.$state = $state;
      this.dataService = dataService;
      this.lists = ['Air tickts', 'Railway tickets', 'Bus', 'Office', 'Hotel','Transport', 'Tour'];
      this.token = sessionStorage.getItem('token');
  }
    open(Id) {
       this.$mdSidenav(Id).open()
    }
    close(id){
      if(event.target.tagName == 'MD-BACKDROP')
      this.$mdSidenav(id).close()
    }
    to(value){
        this.$state.go(value)
    }
    active(){
      this.$mdSidenav('right').close()
      this.dataService.formmodal = true
      this.dataService.scroll.hide()

    }
}

export default ToolbarController;
// ToolbarController.$inject = ['$mdSidenav'];
