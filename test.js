let randomArray = [1,'test',['hello', 2, false, [1,2,['longs',[false]], {favColors: [1,3, [ 'print me']]}]]]
console.log(randomArray[2][3][3].favColors[2][0])

let complexArray = [
    42,
    'example',
    [true, false, [null, 'deep', [99, ['even deeper', [undefined, {key: ['find me']}]]]]],
    {data: ['start',{nested: ['keep going', {final: ['almost', {target: 'you got it!'}]}]}]},
    [[['very',['deep',[3.14,['levels',{mystery:['last',['hidden',['treasure']]]}]]]]]]
]
console.log(complexArray.length)
console.log(complexArray[4][0][0][1][1][1][1].mystery[1][1][0])

let myCollection = ['what is the meaning of life', 42 , true]
console.log(myCollection.length)
console.log(complexArray[2][2][2][1][1][0])
console.log(complexArray[4][0][0][1][1][0])
