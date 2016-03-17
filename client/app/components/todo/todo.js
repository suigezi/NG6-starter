import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todoComponent from './todo.component';

let todoModule = angular.module('todo', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  
  $stateProvider.state('todo',{
    url: "/todo",
    template:"<div>todo</div>"
  });
})
.component('todo', todoComponent);

export default todoModule;
