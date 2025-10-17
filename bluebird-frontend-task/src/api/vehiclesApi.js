export const vehiclesData = {
  category: [
    {
      id: 1,
      name: "Taxi",
      imageURL: "https://www.bluebirdgroup.com/storage/armadaservicetype/67724b974f817.png",
    },
    {
      id: 2,
      name: "Car Rental",
      imageURL: "https://www.bluebirdgroup.com/storage/armadaservicetype/67724b7ca3d8e.png",
    },
    {
      id: 3,
      name: "Shuttle Service",
      imageURL: "https://www.bluebirdgroup.com/storage/armadaservicetype/67724b9f173f4.png",
    },
    {
      id: 4,
      name: "Bus",
      imageURL: "https://www.bluebirdgroup.com/storage/armadaservicetype/67724bc6f1f7c.png",
    },
  ],
  type: [
    {
      id: 1,
      category_id: 1,
      car_type: [
        {
          vehicle: "Regular",
          imageURL: "https://www.bluebirdgroup.com/storage/armadaservicecars/66b46d3c7f6fe.png",
          price: "IDR 70.000",
          description: ["7 seats", "Charging Port"],
        },
        {
          vehicle: "Electric",
          imageURL: "https://www.bluebirdgroup.com/img/armadaservicecars/628e0fbdf1dbb.png?w=273",
          price: "IDR 120.000",
          description: ["4 seats", "Charging Port"],
        },
        {
          vehicle: "Silver",
          imageURL: "https://www.bluebirdgroup.com/storage/armadaservicecars/66b47218e288f.png",
          price: "IDR 200.000",
          description: ["6 seats", "Charging Port"],
        },
      ],
    },
    {
      id: 2,
      category_id: 3,
      car_type: [
        {
          vehicle: "Hiace Premio",
          imageURL: "https://www.bluebirdgroup.com/storage/armadaservicecars/67adbc9e72449.png",
          price: "IDR 1.340.000",
          description: [
            "8 Comfortable Seats",
            "Executive Leather Seat with Leg Support",
            "Charging Port",
            "Windows Breaker",
          ],
        },
        {
          vehicle: "Hiace Commuter",
          imageURL: "https://www.bluebirdgroup.com/storage/armadaservicecars/67adbc9e6e020.png",
          price: "IDR 970.000",
          description: [
            "8 Comfortable Seats",
            "Executive Leather Seat",
            "Charging Port",
            "Windows Breaker",
          ],
        },
        {
          vehicle: "Isuzu Elf",
          imageURL: "https://www.bluebirdgroup.com/storage/armadaservicecars/67adbc9e7a40b.png",
          price: "IDR 500.000",
          description: [
            "10/11 Reclining Fabric Seats",
            "Windows Breaker",
            "Small Capacity Luggage",
          ],
        },
      ],
    },
    {
      id: 3,
      category_id: 4,
      car_type: [
        {
          vehicle: "Alpha Premium",
          imageURL: "https://www.bluebirdgroup.com/img/armadaservicecars/6268f2161c0b4.png?w=273",
          price: "IDR 7.570.000",
          description: [
            "14 Comfortable Seats",
            "Executive Leather Seat",
            "Charging Port",
            "Windows Breaker",
            "Karaoke Sound System",
            "10inch LED TV",
            "Mini Bar",
          ],
        },
        {
          vehicle: "Bravo Premium",
          imageURL: "https://www.bluebirdgroup.com/img/armadaservicecars/6268ef881cf5a.png?w=273",
          price: "IDR 5.600.000",
          description: [
            "14 Comfortable Seats",
            "Executive Leather Seat",
            "Charging Port",
            "Windows Breaker",
            "Karaoke Sound System",
            "LED TV",
          ],
        },
        {
          vehicle: "Charlie Bus",
          imageURL: "https://www.bluebirdgroup.com/storage/armadaservicecars/6268f3f677c42.png",
          price: "IDR 2.750.000",
          description: ["14 Seats", "Charging Port", "Windows Breaker", "LED TV"],
        },
      ],
    },
    {
      id: 4,
      category_id: 2,
      car_type: [
        {
          vehicle: "Innova Type G",
          imageURL: "https://www.bluebirdgroup.com/img/armadaservicecars/6268e7084d2f4.png?w=273",
          price: "IDR 3.070.000",
          description: ["7 seats", "Charging Port"],
        },
        {
          vehicle: "BMW 528i",
          imageURL: "https://www.bluebirdgroup.com/img/armadaservicecars/6268e8ba85765.png?w=273",
          price: "IDR 5.070.000",
          description: ["4 seats", "Charging Port"],
        },
        {
          vehicle: "Marcedes E200",
          imageURL: "https://www.bluebirdgroup.com/img/armadaservicecars/6268ec4a4b400.png?w=273",
          price: "IDR 6.000.000",
          description: ["4 seats", "Charging Port"],
        },
      ],
    },
  ],
};

// Simulasi fetch API
export const getCategories = () => {
  return Promise.resolve(vehiclesData.category);
};

export const getVehicleTypesByCategory = (categoryId) => {
  const data = vehiclesData.type.find((item) => item.category_id === categoryId);
  return Promise.resolve(data ? data.car_type : []);
};

export const getVehiclesData = () => {
  return Promise.resolve(vehiclesData);
};