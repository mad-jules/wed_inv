export interface Guest {
  id: number;
  name: string;
  photo: string;
}

export const guests: Guest[] = [
  {
    id: 1,
    name: "Алла Петрівна",
    photo: "/guests/Alla.png",
  },
  {
    id: 2,
    name: "Олександр Борисович",
    photo: "/guests/Oleksandr.png",
  },
  {
    id: 3,
    name: "Ольга Миколаївна",
    photo: "/guests/Olia.png",
  },
  {
    id: 4,
    name: "Володимир Володимирович",
    photo: "/guests/Vova.png",
  },
  {
    id: 5,
    name: "Микола Григорович",
    photo: "/guests/Mykola.png",
  },
  {
    id: 6,
    name: "Віра Іванівна",
    photo: "/guests/Vira.png",
  },
  {
    id: 6,
    name: "Софія",
    photo: "/guests/Sofiia.png",
  },
];
