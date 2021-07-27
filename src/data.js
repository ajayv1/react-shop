import iphone from './images/iphone.jpeg';
import iphoneSe from './images/iphone-se.jpeg'; 
import macAir from './images/macbook-air.jpeg';
import macPro from './images/macbook-pro.jpeg';
import ps4 from './images/ps4.jpeg';
import ps5 from './images/ps5.jpeg';
import xbox from './images/xbox.jpeg';



const SHOP_DATA = {
  "mobiles": [
    {
      id: 0,
      imgUrl: iphoneSe,
      title: "IPhone 12",
      desc: "Best smartphone available at budget price in India. This is a 5G based smartphone from Apple",
      price: "Rs 65,599",
      memory: '2 GB',
      storage: '1 TB',
      colors: ["red", "yellow", "blue"]
    },
    {
      id: 1,
      imgUrl: iphoneSe,
      title: "IPhone 12",
      desc: "Best smartphone available at budget price in India. This is a 5G based smartphone from Apple",
      price: "Rs 65,599",
      memory: '2 GB',
      storage: '1 TB',
      colors: ["red", "yellow", "blue"]
    },
    {
      id: 2,
      imgUrl: iphoneSe,
      title: "IPhone 12",
      desc: "Best smartphone available at budget price in India. This is a 5G based smartphone from Apple",
      price: "Rs 65,599",
      memory: '2 GB',
      storage: '1 TB',
      colors: ["red", "yellow", "blue"]
    },
    {
      id: 3,
      title: 'IPhone 12',
      desc: 'A13 bionic based 5G ready smartphones from Apple',
      imgUrl: iphone,
      price: 65999,
      memory: '4 GB',
      storage: '128 GB',
      colors: ['red', 'yellow', 'blue']
    },
    {
      id: 4,
      title: 'IPhone SE',
      desc: 'The same A13 bionic in a smaller form factor from Apple',
      imgUrl: iphone,
      price: 45999,
      memory: '4 GB',
      storage: '128 GB',
      colors: ['red', 'yellow', 'blue']
    },
    {
      id: 5,
      title: 'IPhone 12',
      desc: 'A13 bionic based 5G ready smartphones from Apple',
      imgUrl: iphone,
      price: 65999,
      memory: '4 GB',
      storage: '128 GB',
      colors: ['red', 'yellow', 'blue']
    },
    {
      id: 6,
      title: 'IPhone SE',
      desc: 'Best smartphone available at budget price in India. This is a 5G based smartphone from Apple',
      imgUrl: iphoneSe,
      price: 45999,
      memory: '4 GB',
      storage: '128 GB',
      colors: ['red', 'yellow', 'blue']
    },
    {
      id: 7,
      imgUrl: iphoneSe,
      title: "IPhone 12",
      desc: "Best smartphone available at budget price in India. This is a 5G based smartphone from Apple",
      price: "Rs 65,599",
      memory: '2 GB',
      storage: '1 TB',
      colors: ["red", "yellow", "blue"]
    },
    {
      id: 8,
      imgUrl: iphoneSe,
      title: "IPhone SE",
      desc: "Best smartphone available at budget price in India. This is a 5G based smartphone from Apple",
      price: "Rs 65,599",
      memory: '2 GB',
      storage: '1 TB',
      colors: ["red", "yellow", "blue"]
    },
    {
      id: 9,
      title: 'IPhone 12',
      desc: 'Best smartphone available at budget price in India. This is a 5G based smartphone from Apple',
      imgUrl: iphoneSe,
      price: 65999,
      memory: '4 GB',
      storage: '128 GB',
      colors: ['red', 'yellow', 'blue']
    }
  ],
  "laptops": [
    {
      id: 10,
      title: 'MacBook Pro',
      desc: 'M1 powered MacBooks for professionals',
      imgUrl: macPro,
      price: 69999,
      memory: '6 GB',
      storage: '1 TB',
      colors: ['blue', 'yellow', 'red']
    },
    {
      id: 11,
      title: 'MacBook Air',
      desc: 'M1 powered MacBooks for professionals',
      imgUrl: macPro,
      price: 69999,
      memory: '6 GB',
      storage: '1 TB',
      colors: ['red', 'green', 'blue']
    },
    {
      id: 12,
      title: 'MacBook Air',
      desc: 'M1 powered MacBooks for professionals',
      imgUrl: macPro,
      price: 29999,
      memory: '2 GB',
      storage: '1 TB',
      colors: ['red', 'green', 'blue']
    },
    {
      id: 13,
      title: 'MacBook Pro',
      desc: 'New powered MacBooks for professionals',
      imgUrl: macAir,
      price: 69999,
      memory: '6 GB',
      storage: '1 TB',
      colors: ['blue', 'yellow', 'red']
    },
    {
      id: 14,
      title: 'MacBook Air',
      desc: 'Latest powered MacBooks for professionals',
      imgUrl: macAir,
      price: 69999,
      memory: '6 GB',
      storage: '1 TB',
      colors: ['red', 'green', 'blue']
    },
    {
      id: 15,
      title: 'MacBook Pro',
      desc: 'New powered MacBooks for professionals',
      imgUrl: macAir,
      price: 69999,
      memory: '6 GB',
      storage: '1 TB',
      colors: ['blue', 'yellow', 'red']
    },
    {
      id: 16,
      title: 'MacBook Air',
      desc: 'Latest powered MacBooks for professionals',
      imgUrl: macPro,
      price: 69999,
      memory: '6 GB',
      storage: '1 TB',
      colors: ['red', 'green', 'blue']
    },
    {
      id: 17,
      title: 'MacBook Pro',
      desc: 'M1 powered MacBooks for Students',
      imgUrl: macPro,
      price: 89999,
      memory: '10 GB',
      storage: '1 TB',
      colors: ['blue', 'yellow', 'red']
    },
    {
      id: 18,
      title: 'MacBook Air',
      desc: 'M1 powered MacBooks for WFH',
      imgUrl: macPro,
      price: 69999,
      memory: '6 GB',
      storage: '1 TB',
      colors: ['red', 'green', 'blue']
    },
    {
      id: 19,
      title: 'MacBook Air',
      desc: 'M1 powered MacBooks for professionals',
      imgUrl: macAir,
      price: 29999,
      memory: '2 GB',
      storage: '1 TB',
      colors: ['red', 'green', 'blue']
    },
    {
      id: 20,
      title: 'MacBook Pro',
      desc: 'New powered MacBooks for Teacher',
      imgUrl: macAir,
      price: 69999,
      memory: '6 GB',
      storage: '1 TB',
      colors: ['blue', 'yellow', 'red']
    },
    {
      id: 21,
      title: 'MacBook Air',
      desc: 'Latest powered MacBooks for IT',
      imgUrl: macAir,
      price: 69999,
      memory: '6 GB',
      storage: '1 TB',
      colors: ['red', 'green', 'blue']
    },
    {
      id: 22,
      title: 'MacBook Pro',
      desc: 'New powered MacBooks for Doctors',
      imgUrl: macPro,
      price: 69999,
      memory: '6 GB',
      storage: '1 TB',
      colors: ['blue', 'yellow', 'red']
    },
    {
      id: 23,
      title: 'MacBook Air',
      desc: 'Latest powered MacBooks for Engineers',
      imgUrl: macPro,
      price: 69999,
      memory: '6 GB',
      storage: '1 TB',
      colors: ['red', 'green', 'blue']
    }
  ],
  "games": [
    {
      id: 24,
      title: 'PlayStation 5',
      desc: 'Next generation PlayStation from Sony packing the latest AMD Zen CPUs',
      imgUrl: ps4,
      price: 39999,
      memory: '8 GB',
      storage: '2 TB',
      colors: ['blue', 'black', 'red']
    },
    {
      id: 25,
      title: 'PlayStation 5',
      desc: 'Next generation PlayStation from Sony packing the latest AMD Zen CPUs',
      imgUrl: ps5,
      price: 39999,
      memory: '8 GB',
      storage: '2 TB',
      colors: ['blue', 'black', 'red']
    },
    {
      id: 26,
      title: 'PlayStation 4',
      desc: 'Last generation PlayStation from Sony with older generation Intel CPUs',
      imgUrl: xbox,
      price: 29999,
      memory: '4 GB',
      storage: '1 TB',
      colors: ['yellow', 'black', 'red']
    },
    {
      id: 27,
      title: 'X-Box One',
      desc: 'Current generation X-Box from Microsoft with latest AMD Zen CPUs',
      imgUrl: xbox,
      price: 35999,
      memory: '6 GB',
      storage: '1 TB',
      colors: ['blue', 'black', 'green']
    },
    {
      id: 28,
      title: 'PlayStation 5',
      desc: 'Next generation PlayStation from Sony packing the latest AMD Zen CPUs',
      imgUrl: ps4,
      price: 39999,
      memory: '8 GB',
      storage: '2 TB',
      colors: ['blue', 'black', 'red']
    },
    {
      id: 29,
      title: 'PlayStation 5',
      desc: 'Next generation PlayStation from Sony packing the latest AMD Zen CPUs',
      imgUrl: ps5,
      price: 39999,
      memory: '8 GB',
      storage: '2 TB',
      colors: ['blue', 'black', 'red']
    },
    {
      id: 30,
      title: 'PlayStation 4',
      desc: 'Last generation PlayStation from Sony with older generation Intel CPUs',
      imgUrl: xbox,
      price: 29999,
      memory: '4 GB',
      storage: '1 TB',
      colors: ['yellow', 'black', 'red']
    },
    {
      id: 31,
      title: 'X-Box One',
      desc: 'Current generation X-Box from Microsoft with latest AMD Zen CPUs',
      imgUrl: xbox,
      price: 35999,
      memory: '6 GB',
      storage: '1 TB',
      colors: ['blue', 'black', 'green']
    },
    {
      id: 32,
      title: 'PlayStation 5',
      desc: 'Next generation PlayStation from Sony packing the latest AMD Zen CPUs',
      imgUrl: ps4,
      price: 39999,
      memory: '8 GB',
      storage: '2 TB',
      colors: ['blue', 'black', 'red']
    },
    {
      id: 33,
      title: 'PlayStation 5',
      desc: 'Next generation PlayStation from Sony packing the latest AMD Zen CPUs',
      imgUrl: ps5,
      price: 39999,
      memory: '8 GB',
      storage: '2 TB',
      colors: ['blue', 'black', 'red']
    },
    {
      id: 34,
      title: 'PlayStation 4',
      desc: 'Last generation PlayStation from Sony with older generation Intel CPUs',
      imgUrl: xbox,
      price: 29999,
      memory: '4 GB',
      storage: '1 TB',
      colors: ['yellow', 'black', 'red']
    },
    {
      id: 35,
      title: 'X-Box One',
      desc: 'Current generation X-Box from Microsoft with latest AMD Zen CPUs',
      imgUrl: xbox,
      price: 35999,
      memory: '6 GB',
      storage: '1 TB',
      colors: ['blue', 'black', 'green']
    }
  ],
  "homePage": [
    {
      id: 0,
      collection: "Mobiles",
      handle: "mobiles",
      imgUrl: iphoneSe
    },
    {
      id: 1,
      collection: "Laptops",
      handle: "laptops",
      imgUrl: macAir
    },
    {
      id: 2,
      collection: "Games",
      imgUrl: ps5,
      handle: "games",
    }
  ]
};

const SHOP_PRODUCT_DATA = {};
let temp = [], iter = 0;

for (let collection in SHOP_DATA) {
  if (collection !== 'homePage') {
    temp = SHOP_DATA[collection];
    for (let product of temp) {
      SHOP_PRODUCT_DATA[iter] = product;
      iter++;
    }
  }
}

export { SHOP_PRODUCT_DATA };

export default SHOP_DATA;