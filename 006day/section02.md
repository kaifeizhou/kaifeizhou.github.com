## Promise

Promise是es6新增了异步操作的写法，来解决异步操作函数回调的问题，这个新增的写法就是Promise对象，Promise实际上就是一个特殊的Javascript对象，反映了”异步操作的最终值”。”Promise”直译过来有预期的意思，因此，它也代表了某种承诺，即无论你异步操作成功与否，这个对象最终都会返回一个值给你。  
在实际开发中，如果我们在写ajax程序时，我们如果希望两个ajax程序都执行完后，再去做一件事情，我们实现的方法可以是，在一个ajax中嵌套另外一个ajax程序：
```javascript
$.ajax({
	url:'js/data01.json',
	type:'get',
	dataType:'json',
	success:function(dat1){
		$.ajax({
			url:'js/data02.json',
			type:'get',
			dataType:'json',
			success:function(dat2){
				console.log([dat1,dat2])
			}
		})
})
```
上面的写法不方便编写，也不方便阅读，Promise对象就可以解决这个问题
```javascript
// 实例化一个Promise对象
var pro01 = new Promise(function(resolve,reject){
	$.ajax({
		url:'js/data01.json',
		type:'get',
		dataType:'json'
	}).done(function(dat){
		resolve(dat)
	}).fail(function(err){
		reject(err)
	})
});

var pro02 = new Promise(function(resolve,reject){
	$.ajax({
		url:'js/data02.json',
		type:'get',
		dataType:'json'
	}).done(function(dat){
		resolve(dat)
	}).fail(function(err){
		reject(err)
	})
});

// 通过Promise对象来处理回调
pro01.then(function(dat){
	console.log(dat);
}).catch(function(err){
	console.log(err)
})

```
上面将两个ajax请求分别放在两个promise对象中，其中resolve参数是处理请求成功的回调函数，reject是处理失败的回调函数，接着就可以通过这个对象，来处理ajax的回调，相当于把回调拆开了写。
如果希望两个ajax程序都执行完后，再去做一件事情，可以写成如下的形式：
```javascript
Promise.all([pro01,pro02]).then(result=>console.log(result));
```







