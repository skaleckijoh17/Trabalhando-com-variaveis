console.log(`Trabalhando com Listas`);

console.log(`Cidades que ja visitei:`);

const Curitiba = `Curitiba`;
const Brusque = `Brusque`;
const BalnearioCamboriu = `Balneário Camboriú`;
const CandidoDeAbreu = `Cândido de Abreu`;
const CampinaGrande = `Campina Grande`;

console.log(Curitiba, Brusque, BalnearioCamboriu, CandidoDeAbreu, CampinaGrande);

const cidadesQueJaVisitei = new Array(
  `Curitiba`,
  `Brusque`,
  `Balneário Camboriú`,
  `Cândido de Abreu`,
  `Campina Grande`,
);

cidadesQueJaVisitei.push(`Ivaiporã`);

console.log(cidadesQueJaVisitei);

console.log(`A cidade mais linda:`);

console.log(cidadesQueJaVisitei[3]);

console.log(`meus amigos me disseram que eu nunca fui a Balneário Camboriú, eu estava muito bebada e eles mentiram pra mim`);

cidadesQueJaVisitei.splice(3, 0);

console.log(cidadesQueJaVisitei);

