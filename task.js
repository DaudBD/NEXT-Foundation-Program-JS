
let movies =[
    {name: "Toxic",year: 2026,rating: 7.9, genre: "Sci-Fi"},
  {name: "Borbad",year: 2025,rating: 7.5, genre: "Violence"},
  {name: "Avater",year: 2008,rating: 9.5, genre: "Sci-Fi"},
  {name: "Salar",year: 2025,rating: 9.2, genre: "Thriller"},
    {name: "Kgf",year: 2022,rating: 8.2, genre: "Drama"},
      {name: "Animal",year: 2024,rating: 7.9, genre: "Sci-Fi"},
        {name: "Titanic",year: 2000,rating: 9, genre: "Story"},
];

let topscifi = movies?.filter((m) => m.genre === "Sci-Fi")?.sort((a,b) => b.rating - a.rating)?.map((m) =>`Movie Name:${m.name}, Rating:(${m.rating}),Realse year:(${m.year})`);

console.log(topscifi);


// Produts Task 
let products =[
{id:1, title: "Mouse",price:500, category:"Accesories",instock: true},
{id:2, title: "Headphone",price:2900, category:"Accesories",instock: false},
 {id:1, title: "Laptop",price:55500, category:"Computer",instock: true},
 {id:1, title: "Airbud",price:5050, category:"Accesories",instock: false},  
 {id:1, title: "Keyboard",price:1000, category:"Accesories",instock: true},
 {id:1, title: "Monitor",price:15500, category:"Display",instock: true},
{id:1, title: "Touchpad",price:3400, category:"Display",instock: false},
];

let topstock = products?.filter((p) => p.instock === true)?.sort((a,b) => b.price - a.price)?.map((p) =>`Instock:${p.instock},${p.price}`);

console.log(topstock);