export const people = [
  {
    id: 0,
    name: "shd1",
    age: 24,
    gender: "male",
  },
  {
    id: 1,
    name: "shd2",
    age: 24,
    gender: "male",
  },
  {
    id: 2,
    name: "shd3",
    age: 24,
    gender: "male",
  },
  {
    id: 3,
    name: "shd4",
    age: 24,
    gender: "male",
  },
];

export const getById = (id: any) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};
