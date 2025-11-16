export type FleetVehicle = {
  id: string;
  name: string;
  capacity: string;
  images: {
    url: string;
    alt: string;
  }[];
};

export const fleetData: FleetVehicle[] = [
  {
    id: 'motorcycle-courier',
    name: 'Motoboy',
    capacity: 'Documentos e Pequenos Pacotes',
    images: [
      { url: 'https://i.imgur.com/jqSXvhF.jpeg', alt: 'Motoboy Fapex' },
      { url: 'https://i.imgur.com/TZ9838k.jpeg', alt: 'Motoboy Fapex em serviço' },
      { url: 'https://i.imgur.com/BbxwWoZ.jpeg', alt: 'Motoboy Fapex com baú' },
      { url: 'https://i.imgur.com/0YeF6k8.jpeg', alt: 'Frota de Motoboys Fapex' },
      { url: 'https://i.imgur.com/cZStzqY.jpeg', alt: 'Detalhe da moto Fapex' },
    ],
  },
  {
    id: 'box-truck',
    name: 'Utilitário Baú',
    capacity: 'Cargas Médias até 1000kg',
    images: [
      { url: 'https://i.imgur.com/UKNi0o3.jpeg', alt: 'Utilitário Baú Fapex' },
      { url: 'https://i.imgur.com/62eKuGc.png', alt: 'Utilitário Baú Fapex branco' },
      { url: 'https://i.imgur.com/BuiCPHA.png', alt: 'Fiorino Fapex' },
      { url: 'https://i.imgur.com/a49Ee3E.png', alt: 'Lateral do Utilitário Baú Fapex' },
      { url: 'https://i.imgur.com/Beg2XXA.png', alt: 'Frente do Utilitário Baú Fapex' },
      { url: 'https://i.imgur.com/TDZnU1z.png', alt: 'Traseira do Utilitário Baú Fapex' },
    ],
  },
  {
    id: 'pickup-truck',
    name: 'PickUp',
    capacity: 'Cargas Volumosas e Pesadas',
    images: [
      { url: 'https://i.imgur.com/OJmYBRW.png', alt: 'Pickup Fapex' },
      { url: 'https://i.imgur.com/vV9KN3H.png', alt: 'Pickup Strada Fapex' },
      { url: 'https://i.imgur.com/mZPPbOe.jpeg', alt: 'Pickup Fapex em detalhes' },
      { url: 'https://i.imgur.com/RKFCThS.jpeg', alt: 'Pickup Fapex de frente' },
      { url: 'https://i.imgur.com/z6jd081.jpeg', alt: 'Pickup Fapex pronta para carga' },
    ],
  },
  {
    id: 'executive-sedan',
    name: 'Transfer Executivo',
    capacity: 'Até 4 Passageiros com Conforto',
    images: [
      { url: 'https://i.imgur.com/yK5EDkN.jpeg', alt: 'Carro executivo Fapex' },
      { url: 'https://i.imgur.com/77FuBdk.jpeg', alt: 'Cobalt para transporte executivo' },
      { url: 'https://i.imgur.com/gYidKPj.png', alt: 'SW4 para transporte executivo' },
    ],
  },
];
