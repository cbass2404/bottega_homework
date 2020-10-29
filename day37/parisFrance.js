// fetch(
//   "https://en.wikipedia.org/wiki/api.php?action=query&origin=*&format=json&formatversion=2&page=Category:Boulevards_in_Paris"
// )
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
const blvdsInParis = [
  "Boulevard de l'Amiral-Bruix",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard de la Zone",
];

const listMapper = () => {
  return blvdsInParis.map((street) => {
    pushToDom(".blvd-paris-target", "Li", street);
  });
};
listMapper();
