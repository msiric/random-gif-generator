export enum Animals {
  cat = "cat",
  dog = "dog",
  elephant = "elephant",
  lion = "lion",
  monkey = "monkey",
}

export interface AnimalOption {
  name: string;
  image: string;
  fact: string;
}

export interface AnimalFact {
  [key: string]: string;
}

export const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const GIPHY_APPROPRIATE_RATING = "g";

export const ANIMAL_FACTS: AnimalFact = {
  [Animals.cat]:
    "Cats can make over 100 vocal sounds, while dogs can only make about ten. They were also considered sacred in Ancient Egypt.",
  [Animals.dog]:
    "A dog can smell about 100,000 times better and hear around 10 times better than the average human.",
  [Animals.elephant]:
    "Male elephants live alone once they become adults. However, the females live in tight family groups led by the oldest female, called a matriarch.",
  [Animals.lion]:
    "Lions are famous for their loud roar which can be heard up to 5 miles away. They can make such a loud roar because the cartilage in their throats has turned into bone.",
  [Animals.monkey]:
    "Like humans, monkeys have unique fingerprints. Albert II was the first monkey in space in 1949 and flew to an altitude of 83 miles (134 km).",
};

export const ANIMAL_LIST: AnimalOption[] = Object.keys(Animals).map(
  (animal) => ({
    name: animal,
    image: require(`../assets/${animal}.png`),
    fact: ANIMAL_FACTS[animal as keyof typeof ANIMAL_FACTS],
  })
);
