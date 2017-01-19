// function log(text) {
// 	console.log(text);

// }
// let s1 = new Set();

// [2,3,4,5,'5',4,3,'5'].map(x => s1.add(x));
// log(s1)

// let s2 = new Set([1,2,2,3,4,5,6,5,5]);
// log(s2)

// function sum() {
// 	var labels = document.all;
// 	log(labels);
// 	labels = Array.from(labels);
// 	var names = labels.map(x => x.tagName);
// 	var s3 = new Set(names);
// 	log(s3);
// }
// // setTimeout(sum, 2000);

// // 一、set
// // Set.prototype.constructor：构造函数，默认就是Set函数。
// // Set.prototype.size：返回Set实例的成员总数。

// // add(value)：添加某个值，返回Set结构本身。
// // delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// // has(value)：返回一个布尔值，表示该值是否为Set的成员。
// // clear()：清除所有成员，没有返回值。

// // keys()：返回键名的遍历器
// // values()：返回键值的遍历器 //values() == keys()
// // entries()：返回键值对的遍历器
// // forEach((k, v, set) => {}, [scope])：使用回调函数遍历每个成员

// // map, filter, reduce 遍历都可以用，默认遍历器生成函数是value

// // 二、weakset 
// // 只接受对象，弱引用不考虑垃圾回收
// var ws1 = new WeakSet();
// var obj1 = {a : 'a'}
// ws1.add(obj1);
// console.log(ws1);
// obj1 = null;
// log(ws1)
// // WeakSet.prototype.add(value)：向WeakSet实例添加一个新成员。
// // WeakSet.prototype.delete(value)：清除WeakSet实例的指定成员。
// // WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在

// // 三、map
// // 跟传统对象的区别在于，传统对象的key必须为String，而map的key可以为bool,obj,array,function
// var m = new Map();
// function mf() {};
// m.set(mf, 'func');
// log(m)
// var obj1 = {a:'a'};
// m.set(obj1, 'objjj');
// log(m);
// log(m.get(obj1))
// obj1.b = 'bbb';
// log(m.get(obj1));

// // m.set(obj1, 'objjjjj');	//可用set覆盖
// // m.get(obj1);
// // m.has(obj1);
// // m.delete(obj1);
// // log(m.size);
// // m.clear();

// // keys()：返回键名的遍历器。
// // values()：返回键值的遍历器。
// // entries()：返回所有成员的遍历器。
// // forEach((key, value, map) => {}, [scope])：遍历Map的所有成员。

// // map, filter, reduce 原生不能用，可以使用...map, 扩展使用，默认遍历器生成函数的事entries
// var items = [
//   ['name', '张三'],
//   ['title', 'Author']
// ];
// var map = new Map();
// items.forEach(([key, value]) => map.set(key, value));
// log(map);
// [...map.entries()].map( ([k, v]) => { k * 2 })
// // 由上可知，Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。

// // 如果Map的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map将其视为一个键，包括0和-0。另外，虽然NaN不严格相等于自身，但Map将其视为同一个键。

// // （1）Map转为数组
// // （2）数组转为Map
// // （3）Map转为对象
// // （4）对象转为Map
// // （5）Map转为JSON
// // （6）JSON转为Map

// // 四、weakmap
// // WeakMap结构与Map结构基本类似，唯一的区别是它只接受对象作为键名（null除外），不接受其他类型的值作为键名，而且键名所指向的对象，不计入垃圾回收机制。 跟weakset差不多的要求