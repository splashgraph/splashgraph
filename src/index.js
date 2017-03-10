import './index.css';


const data = [{
  "img" : "2004_Porsche_911_Carrera_type_997.jpg",
  "manufacturer" : "Porsche",
  "model" : "911",
  "price" : 135000,
  "quality" : [{
    "name" : "overall",
    "rating" : 1
  },{
    "name" : "mechanical",
    "rating" : 4
  },{
    "name" : "powertrain",
    "rating" : 2
  },{
    "name" : "body",
    "rating" : 4
  },{
    "name" : "interior",
    "rating" : 3
  },{
    "name" : "accessories",
    "rating" : 2
  }],
  "wiki" : "http://en.wikipedia.org/wiki/Porsche_997"
},{
  "img" : "250px-Nissan_GT-R.jpg",
  "manufacturer" : "Nissan",
  "model" : "GT-R",
  "price" : 80000,
  "quality" : [{
    "name" : "overall",
    "rating" : 2
  },
    { "name" : "mechanical",
      "rating" : 3
    },
    { "name" : "powertrain",
      "rating" : 5
    },
    { "name" : "body",
      "rating" : 4
    },
    { "name" : "interior",
      "rating" : 2
    },
    { "name" : "accessories",
      "rating" : 2
    }
  ],
  "wiki" : "http://en.wikipedia.org/wiki/Nissan_Gt-r"
},{
  "img" : "250px-BMW_M3_E92.jpg",
  "manufacturer" : "BMW",
  "model" : "M3",
  "price" : 60500,
  "quality" : [ { "name" : "overall",
    "rating" : 3
  },
    { "name" : "mechanical",
      "rating" : 5
    },
    { "name" : "powertrain",
      "rating" : 3
    },
    { "name" : "body",
      "rating" : 4
    },
    { "name" : "interior",
      "rating" : 5
    },
    { "name" : "accessories",
      "rating" : 3
    }
  ],
  "wiki" : "http://en.wikipedia.org/wiki/Bmw_m3"
},{
  "img" : "250px-Audi_S5.jpg",
  "manufacturer" : "Audi",
  "model" : "S5",
  "price" : 53000,
  "quality" : [ { "name" : "overall",
    "rating" : 4
  },
    { "name" : "mechanical",
      "rating" : 1
    },
    { "name" : "powertrain",
      "rating" : 1
    },
    { "name" : "body",
      "rating" : 4
    },
    { "name" : "interior",
      "rating" : 1
    },
    { "name" : "accessories",
      "rating" : 5
    }
  ],
  "wiki" : "http://en.wikipedia.org/wiki/Audi_S5#Audi_S5"
},{
  "img" : "250px-2007_Audi_TT_Coupe.jpg",
  "manufacturer" : "Audi",
  "model" : "TT",
  "price" : 40000,
  "quality" : [{
    "name" : "overall",
    "rating" : 5
  },
    { "name" : "mechanical",
      "rating" : 2
    },
    { "name" : "powertrain",
      "rating" : 2
    },
    { "name" : "body",
      "rating" : 3
    },
    { "name" : "interior",
      "rating" : 4
    },
    { "name" : "accessories",
      "rating" : 1
    }
  ],
  "wiki" : "http://en.wikipedia.org/wiki/Audi_TT"
}];














// function reduce(arr, reducer, initialValue) {
//   console.log('Array:', arr);
//   console.log('Reducer:', reducer);
//   console.log('Initial value:', initialValue);
//   let sum = initialValue;
//   for (let i = 0; i < arr.length; i++) {
//     const elem = arr[i];
//     reducer(sum, elem);
//   }
// }
//
//
// reduce(data, function(sum, car) {
//   return sum + car;
// }, 0);


// for (let i = 0; i < data.length; i++) {
//   const car = data[i];
// }
//
// let average = data.reduce(function(sum, car) {
//   return sum + car.price
// }, 0);

// average = average / data.length;
// console.log(average);
//
// let avgQuality = data.map(car => {
//   return car.quality.reduce((sum, qual) => sum + qual.rating, 0) / car.quality.length;
// });
// console.log(avgQuality);
//
// let prices = data.map(car => car.price);
// console.log(prices);
