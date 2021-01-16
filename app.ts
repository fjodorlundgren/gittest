//const person: {
 //   name: string;
 //   age: number;
//} = {
//const person: {
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number, string]
// } = {
//     name: 'Marta',
//     age:13 ,
//     hobbies: ['Sports', 'Cooking'],
//     role:[2,'author'],
//};

enum Role {Admin, Read_Only, AUTHOR};
const person = {
    name: 'Marta',
    age:13 ,
    hobbies: ['Sports', 'Cooking'],
    role:  Role.Admin
};
//person.role.push('admin');
//person.role[1] =10;

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.name);

for( const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    //console.log(hobby.map());
}

if (person.role === Role.Admin) {
    console.log('is Admin')
}