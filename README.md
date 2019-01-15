Wrap An AngularJS1 Component to React and to AngularJS1 Again Demo
==================================================================

使用`angular2react`和`react2angular`这两个库，把一个angularjs1的component先转换成react再转换成angularjs1，
还是可以正常运行的。

不过有一些地方需要注意：

1. 为了得到`$injector`，需要执行一次`angular.bootstrap`
2. `angular2react("someComponent"`中的`someComponent`这个名字必须与原有已注册的名字相同

```
npm install
npm start
```
