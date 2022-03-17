import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Payal",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
      image: "https://res.cloudinary.com/dhqxln7zi/image/upload/v1647536227/p-3_lshhcf.png"
  },
  {
    _id: uuid(),
    categoryName: "Ear Rings",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
      image: "https://res.cloudinary.com/dhqxln7zi/image/upload/v1647536227/p-1_dlbquw.png"
  },
  {
    _id: uuid(),
    categoryName: "Necklace",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      image: "https://res.cloudinary.com/dhqxln7zi/image/upload/v1647536227/p-2_kcpznk.png"
  },
  {
    _id: uuid(),
    categoryName: "Ring",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      image: "https://res.cloudinary.com/dhqxln7zi/image/upload/v1647536227/p-4_dvwtmj.png"
  },
  {
    _id: uuid(),
    categoryName: "Pendent",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      image: "https://res.cloudinary.com/dhqxln7zi/image/upload/v1647536227/p-5_j1yces.png"
  },
];
