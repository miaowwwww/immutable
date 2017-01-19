import Immutable from 'immutable';

// import './map&set';

// import './typeOfJsData';

function log(...text) {
	console.log(...text);
}
// List
const list1 = Immutable.List.of(1,2,3);
console.log(list1)
const list2 = list1.push('3');
log(list2);
//push, pop, shift, unshift, splice, slice, concat, 全部返回一个新的immutable对象
// list.of
var list = Immutable.List.of(3,4,5,6);
log('list.of',list)

// Map
// 1.map && foreach
var map = Immutable.Map({a:1, b:2, c: {d: 'd', e:{ f:'f'}}});
console.log(map);
map.map((v, k) => {console.log(v,'===', k)})
// 2.merge
var map1 = Immutable.Map({a:1, b:2, c:3, d:4});
var map2 = Immutable.Map({c:10, a:20, t:30});
var obj = {d:100, o:200, g:300};
var map3 = map1.merge(map2, obj);
log(map3)
// Map { a: 20, b: 2, c: 10, d: 100, t: 30, o: 200, g: 300 }
// 3.Seq
var myObject = {a:1,b:2,c:3};
var myobj1 = Immutable.Seq(myObject);
log('seq', myobj1);
// myobj1.map(x => x * x).toObject();
// { a: 1, b: 4, c: 9 }
log(myObject)
// myObject.map((v, k) => {}), //这是不可以的，map不能用于对象
// 4.fromJS
var obj1 = Immutable.fromJS(myObject);
console.log('4.fromJS', obj1)
// 5.转换
var deep = Immutable.Map({ a: 1, b: 2, c: Immutable.List.of(3, 4, 5) });
deep.toObject() // { a: 1, b: 2, c: List [ 3, 4, 5 ] }
deep.toArray() // [ 1, 2, List [ 3, 4, 5 ] ]
deep.toJS() // { a: 1, b: 2, c: [ 3, 4, 5 ] }
JSON.stringify(deep) // '{"a":1,"b":2,"c":[3,4,5]}'

// 6.操作
// mergeDeep, getIn, setIn, and updateIn, found on List, Map and OrderedMap.
var nested = Immutable.fromJS({a:{b:{c:[3,4,5]}}});

var nested2 = nested.mergeDeep({a:{b:{d:6}}});//merge 只有一层，这个是深度
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 6 } } }

nested2.getIn(['a', 'b', 'd']); // 6

var nested3 = nested2.updateIn(['a', 'b', 'd'], value => value + 1);
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 7 } } }

var nested4 = nested3.updateIn(['a', 'b', 'c'], list => list.push(6));
// Map { a: Map { b: Map { c: List [ 3, 4, 5, 6 ], d: 7 } } }

// Lazy Seq, 生成了seq，在使用oddSquares.get(1),等其他方法才开始计算filter。map的算法，并在使用之前oddSquares只是一个seq对象，值都不清楚
var oddSquares = Immutable.Seq.of(1,2,3,4,5,6,7,8).filter(x => x % 2).map(x => x * x);
console.log(oddSquares)
console.log(oddSquares.get(1)); // 9
log('seq', oddSquares)
var myObject = {a:1,b:2,c:3};
var myobj1 = Immutable.Seq(myObject);
log('seq', myobj1);
var obj2 = myobj1.map(x => x * x).toObject();
log(obj2)
// 1.toSeq
var seq = Immutable.Map({a:1, b:1, c:1}).toSeq();
log('toseq',seq)

// 两个immutable对象的比较
var map1 = Immutable.Map({a:1, b:1, c:1});
var map2 = Immutable.Map({a:1, b:1, c:1});
log(map1 === map2)
log(Immutable.is(map1, map2));
log(map1.equals(map2))

var obj1 = {a:'a',b:'b'};
var obj2 = {a:'a',b:'b'};
log(obj1 === obj2)
log(obj1 == obj2);
log(Object.is(obj1, obj2));

// 在immutable数据中，把它变成mutabule数据操作，在变成immutable
// .asMutable, .asImmutable 这两个只用在withMutations不能用的使用
var list1 = Immutable.List.of(1,2,3);
var list2 = list1.withMutations(function (list) {
	// 这里面只能使用一些突变数据的方法，例如set，pop，push
	// 不能使用返回新对象，新数组的方法，例如map，filter，sort，splice
  list.push(4).push(5).push(6);
});
log(list1.size === 3);
log(list2.size === 6);