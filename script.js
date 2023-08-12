let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  for(let i of arr)
  {
    if(i.profession === 'developer')
    console.log(i)
  }
}

function addData() {
  let add = {id:4,name:"susan",age:20,profession:"intern"};
  arr.push(add);
  console.log(arr)
  //Write your code here, just console.log

}

function removeAdmin() {
  //Write your code here, just console.log
  for(let i in arr)
  {
    if(arr[i].profession == 'admin')
    {
      arr.splice(i,1)
    }
  }
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 5, name: 'teja', age: 23, profession: 'developer' },
    { id: 6, name: 'krishna', age: 23, profession: 'developer' },
  ]

  arr = arr.concat(arr1);
  console.log(arr)
}