import bannerFirst from '../img/banner1.jpg';
import bannerSecond from '../img/banner2.jpg';
import bannerThird from '../img/banner3.jpg';

import coffee from '../img/coffee.svg';
import bone from '../img/bone.svg';
import socks from '../img/socks.svg';
import arabica from '../img/coffee-arabica.svg';


export const productBoxContent = [
  {
    title: 'Etiopie washed, 250 g',
    price: 369,
    description: 'Promytá světle pražená Etiopie je jako stvořená pro váš ranní šálek filtrované kávy. Nádech jahod spolu s karamelem se stane vaší múzou, kvůli které nebudete moci dospat.',
    datum: '2021-04-01',
    alt: 'coffee',
    src: coffee
  },
  {
    title: 'Kenya natural, 250 g',
    price: 550,
    description: 'Světle pražená naturální káva z Kenyi je naší novinkou. Zamilujete si ji pro její nádech mléčné čokolády spolu s černým rybízem a lískovým oříškem. Budete ji milovat.',
    alt: 'bone',
    src: bone
  },
  {
    title: 'Ponožky s motivem kávy',
    price: 150,
    description: 'Každý kávomilec by je chtěl mít. Vyrobili jsme 30 párů ponožek, které vám bude barista ve vaší oblíbené kavárně závidět. Hnědá zrnka na 100% bavlně jsou vytvořena pro vás.',
    alt: 'socks',
    src: socks
  },
  {
    title: 'Rostlinka Coffee Arabica',
    price: 359,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum fermentum tortor id mi. Pellentesque sapien. Praesent id justo.',
    alt: 'arabica',
    src: arabica
  }
];

export const button = {
  title: 'Detail',
  type: 'green'
}

export const brownButton = {
  title: 'Detail',
  type: 'brown'
}

export const bannerSection = {
  main: {
    type: 'brown',
    text: 'Ochutnejte novou kávu z Etiopie',
    src: '#',
    className: 'mainBanner'
  },
  second: {
    className: 'secondBanner'
  },
  third: {
    className: 'thirdBanner'
  }
};

export const informationBoxContent = {
    title: 'Proč bychom měli pít kávu?',
    liFirst: 'Život je příliš krátký na špatnou kávu.',
    liSecond: 'Dobrá káva dělá den hezčí a veselejší.',
    liThird: 'Zapomeňte na lásku, propadněte kávě.',
    text: 'Ne nadarmo se říká, že život je příliš krátký na špatnou kávu. Naštěstí u nás špatnou kávu vůbec nemáme.'
}

export const carouselBanner = {
  bannerFirst: bannerFirst,
  bannerSecond: bannerSecond,
  bannerThird: bannerThird
}

export const dropdown = {
  kavovary: {
    brandFirst: 'Nuova Simonelli',
    brandSecond: 'La Marzocco',
    brandThird:  'Modbar'
  },
  coffee: {
    brandFirst: 'The Naughty Dog',
    brandSecond: 'Nordbeans',
    brandThird: 'The Candy Cane'
  }
}

export const footerBox = {
  customerService: {
    claim: 'Zákaznický servis',
    first: 'Doprava a platba',
    second: 'Obchodní podmínky',
    third: 'Jak reklamovat zboží'
  },
  aboutUs: {
    claim: 'Něco o nás',
    first: 'Náš příběh',
    second: 'Jak vybrat kávu',
    third: 'Baristické kurzy'
  }
}

export const reviews = {
  reviewFirst: {
    text: 'Když nevím jakou kávu si koupit, e-shop Coffeeshot je vždy jistota. Mají tu jen ty nejlepší kousky.',
    author: 'Marcela'
  },
  reviewSecond: {
    text: 'Hlavně jejich přístup. Nikdo vám lépe neporadí, už při první větě cítíte, že milují kávu.',
    author: 'Martin'
  },
  reviewThird: {
    text: 'Občas si chodím na jejich pobočku povídat o kávě. Zaměstnanci jsou skvělí.',
    author: 'Anežka'
  }
}

export const labels = {
  giftFree: {
    title: 'Dárek zdarma',
    className: 'label giftFree'
  },
  newProduct: {
    title: 'Novinka',
    className: 'newProduct'
  }
}
