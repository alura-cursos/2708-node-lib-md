function extraiLinks (arrLinks) {
  return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

export default function listaValidada (listaDeLinks) {
  return extraiLinks(listaDeLinks);
}