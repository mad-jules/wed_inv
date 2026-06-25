export type Location = {
  name: string;
  lat: number;
  lng: number;
  address: string;
};

export const locations: Location[] = [
  {
    name: "РАЦС",
    lat: 50.5533067,
    lng: 30.2179522,
    address: "Буча, вул. Енергетиків, 2",
  },
  // {
  //   name: "Бістро Пекаря",
  //   lat: 50.5554642,
  //   lng: 30.2512558,
  //   address: "м. Буча, вул. Шевченка, 2г",
  // },
  {
    name: "WorkIT",
    lat: 50.53544,
    lng: 30.15736,
    address: "Ворзель, вул. Шевченка, 22, 24",
  },
];
