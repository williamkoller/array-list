import { ArrayList } from './ArrayList';

const arrayList = new ArrayList<number>();

arrayList.add(1);
arrayList.add(2);
arrayList.add(3);

console.log(arrayList.get(0));
console.log(arrayList.get(1));
console.log(arrayList.get(2));
console.log(arrayList.size());
console.log(arrayList.toArray());

arrayList.addAll([4, 5, 6]);
console.log(arrayList.toArray());

arrayList.set(0, 10);
console.log(arrayList.get(0));

arrayList.remove(1);
console.log(arrayList.toArray());

console.log(arrayList.contains(3));
console.log(arrayList.indexOf(3));

arrayList.clear();
console.log(arrayList.isEmpty());

arrayList.addAll([7, 8, 9, 10]);
console.log(arrayList.subList(1, 3));

arrayList.forEach((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});

arrayList.sort((a, b) => b - a);
console.log(arrayList.toArray());

arrayList.setKeyValue('key1', 100);
console.log(arrayList.getValue('key1'));

arrayList.setKeyValue('key2', 200);
console.log(arrayList.getValue('key2'));

console.log(arrayList.hasKey('key1'));
console.log(arrayList.mapSize());

arrayList.removeKey('key1');
console.log(arrayList.hasKey('key1'));

arrayList.clearMap();
console.log(arrayList.mapSize());
