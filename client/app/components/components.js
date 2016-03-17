import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Todo from './todo/todo';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Todo.name
]);

export default componentModule;
