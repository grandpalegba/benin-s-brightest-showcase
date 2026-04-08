import aminaDossou from "@/assets/talents/amina-dossou.jpg";
import sikaAmoussou from "@/assets/talents/sika-amoussou.jpg";
import kofiAgossou from "@/assets/talents/kofi-agossou.jpg";
import blaiseHouessou from "@/assets/talents/blaise-houessou.jpg";
import yapiAkode from "@/assets/talents/yapi-akode.jpg";
import senamiZinsou from "@/assets/talents/senami-zinsou.jpg";
import yemiAlihonou from "@/assets/talents/yemi-alihonou.jpg";
import ganGanBio from "@/assets/talents/gan-gan-bio.jpg";
import fifiGnahoui from "@/assets/talents/fifi-gnahoui.jpg";
import toundeCodjia from "@/assets/talents/tounde-codjia.jpg";
import mamoudouMam from "@/assets/talents/mamoudou-mam.jpg";
import yomieKpade from "@/assets/talents/yomie-kpade.jpg";
import arielleGogan from "@/assets/talents/arielle-gogan.jpg";
import marcValery from "@/assets/talents/marc-valery.jpg";
import ousmaneBakary from "@/assets/talents/ousmane-bakary.jpg";
import runnaTossou from "@/assets/talents/runna-tossou.jpg";
import zannouLoko from "@/assets/talents/zannou-loko.jpg";
import dahQueen from "@/assets/talents/dah-queen.jpg";
import patriceAkou from "@/assets/talents/patrice-akou.jpg";
import mamanAhoue from "@/assets/talents/maman-ahoue.jpg";
import yvanChaka from "@/assets/talents/yvan-chaka.jpg";
import soniaLaly from "@/assets/talents/sonia-laly.jpg";
import chefIgnace from "@/assets/talents/chef-ignace.jpg";
import tantieFlore from "@/assets/talents/tantie-flore.jpg";
import guideMoise from "@/assets/talents/guide-moise.jpg";
import inesDoute from "@/assets/talents/ines-doute.jpg";
import cyrilCoder from "@/assets/talents/cyril-coder.jpg";
import honorineTech from "@/assets/talents/honorine-tech.jpg";
import parisSenou from "@/assets/talents/paris-senou.jpg";
import newyorkDjimon from "@/assets/talents/newyork-djimon.jpg";
import smartAdjovi from "@/assets/talents/smart-adjovi.jpg";
import futurYao from "@/assets/talents/futur-yao.jpg";

export interface Talent {
  name: string;
  category: string;
  image: string;
  description: string;
  quote: string;
}

export const talents: Talent[] = [
  { name: "Amina Dossou", category: "Beauté Féminine", image: aminaDossou, description: "Élégance royale, foulard Gèlè en soie, bijoux en bronze", quote: "La beauté béninoise, c'est porter son histoire avec fierté." },
  { name: "Sika Amoussou", category: "Beauté Féminine", image: sikaAmoussou, description: "Beauté naturelle, tresses fines perlées, robe en pagne Kanvô", quote: "Chaque tresse raconte un chapitre de notre héritage." },
  { name: "Kofi Agossou", category: "Beauté Masculine", image: kofiAgossou, description: "Charisme imposant, tenue Agbada brodée, allure de leader", quote: "L'élégance d'un homme se mesure à la dignité de son port." },
  { name: "Blaise Houessou", category: "Beauté Masculine", image: blaiseHouessou, description: "Style moderne, costume cintré avec détails wax", quote: "Le wax sur un costume, c'est l'Afrique qui dialogue avec le monde." },
  { name: "Yapi Akodé", category: "Mode & Style", image: yapiAkode, description: "Créatrice avant-gardiste, coiffure sculpturale, accessoires en cauris", quote: "La mode africaine n'imite personne, elle inspire le monde entier." },
  { name: "Sènami Zinsou", category: "Mode & Style", image: senamiZinsou, description: "Mannequin haute couture, drapé asymétrique audacieux", quote: "Chaque tissu a une âme, il suffit de savoir l'écouter." },
  { name: "Yemi Alihonou", category: "Musiques", image: yemiAlihonou, description: "Chanteuse afro-pop, micro vintage, expression passionnée", quote: "Ma voix porte les mélodies que mes ancêtres fredonnaient." },
  { name: "Gan-Gan Bio", category: "Musiques", image: ganGanBio, description: "Percussionniste traditionnel, tambour parlant", quote: "Le tambour ne fait pas de bruit, il parle aux esprits." },
  { name: "Fifi Gnahoui", category: "Danses", image: fifiGnahoui, description: "Danseuse contemporaine, tenue fluide et colorée", quote: "Danser, c'est libérer ce que les mots ne peuvent pas dire." },
  { name: "Toundé Codjia", category: "Danses", image: toundeCodjia, description: "Danseur de Tipa, pagne court traditionnel", quote: "Le Tipa, c'est le battement de cœur de notre terre." },
  { name: 'Mamoudou "Mam"', category: "Humour", image: mamoudouMam, description: "Expression faciale hilarante, yeux écarquillés", quote: "Rire ensemble, c'est la meilleure médecine du Bénin." },
  { name: "Yomie Kpadé", category: "Humour", image: yomieKpade, description: "Gestuelle expressive, sourire communicatif", quote: "L'humour, c'est dire la vérité en faisant sourire." },
  { name: "Arielle Gogan", category: "Éloquence", image: arielleGogan, description: "Oratrice inspirante, style business", quote: "Les mots justes peuvent déplacer des montagnes." },
  { name: "Marc Valery", category: "Éloquence", image: marcValery, description: "Slammeur, bonnet stylé, intensité dans le regard", quote: "Chaque slam est une lettre d'amour à mon pays." },
  { name: "Ousmane Bakary", category: "Mémoire", image: ousmaneBakary, description: "Historien, entouré de vieux manuscrits", quote: "Oublier son passé, c'est marcher sans ombre." },
  { name: "Runna Tossou", category: "Mémoire", image: runnaTossou, description: "Regard chargé d'histoire, tenue sobre", quote: "Mes rides sont les pages d'un livre que personne n'a encore lu." },
  { name: "Zannou Loko", category: "Mythes", image: zannouLoko, description: "Performance avec masque de bois, costume mystique", quote: "Derrière chaque masque se cache une vérité ancestrale." },
  { name: "Dah Queen", category: "Mythes", image: dahQueen, description: "Prêtresse en blanc, colliers de perles sacrées", quote: "Le vodoun n'est pas de la magie, c'est de la sagesse vivante." },
  { name: "Patrice Akou", category: "Sagesse", image: patriceAkou, description: "Doyen sous un baobab, canne sculptée, sourire serein", quote: "Un vieillard qui meurt, c'est une bibliothèque qui brûle." },
  { name: "Maman Ahoué", category: "Sagesse", image: mamanAhoue, description: "Grand-mère bienveillante, visage ridé et radieux", quote: "La patience est l'arbre dont les fruits sont la paix." },
  { name: "Yvan Chaka", category: "Génie Art.", image: yvanChaka, description: "Sculpteur, mains couvertes de poussière de bois", quote: "Chaque sculpture est un dialogue entre mes mains et le bois." },
  { name: "Sonia Laly", category: "Génie Art.", image: soniaLaly, description: "Peintre devant une toile abstraite, style bohème", quote: "Je peins ce que le Bénin me murmure à l'oreille." },
  { name: "Chef Ignace", category: "Saveurs", image: chefIgnace, description: "Toque blanche, plat fumant d'Igname pilée", quote: "La cuisine béninoise, c'est l'amour servi dans une assiette." },
  { name: "Tantie Flore", category: "Saveurs", image: tantieFlore, description: "Cuisinière de rue dynamique, sourire accueillant", quote: "Mon secret ? Je cuisine avec le cœur, jamais avec la montre." },
  { name: "Guide Moïse", category: "Voix des Lieux", image: guideMoise, description: "Chapeau de brousse, devant les pilotis de Ganvié", quote: "Ganvié n'est pas un village sur l'eau, c'est un miracle qui flotte." },
  { name: "Inès Douté", category: "Voix des Lieux", image: inesDoute, description: "Exploratrice devant la Porte du Non-Retour", quote: "Chaque pierre de Ouidah chuchote une histoire qu'il faut entendre." },
  { name: "Cyril Coder", category: "Innovation", image: cyrilCoder, description: "Développeur avec casque audio, setup multi-écrans", quote: "Le code est le nouveau tam-tam : il connecte les peuples." },
  { name: "Honorine Tech", category: "Innovation", image: honorineTech, description: "Ingénieure drone, éoliennes en arrière-plan", quote: "L'Afrique n'attend plus la technologie, elle la crée." },
  { name: "Paris Sènou", category: "Diaspora", image: parisSenou, description: "Femme d'affaires devant la Tour Eiffel", quote: "Où que j'aille, le Bénin bat dans ma poitrine." },
  { name: "New York Djimon", category: "Diaspora", image: newyorkDjimon, description: "Architecte, allure cosmopolite et fière", quote: "Je construis des ponts entre deux mondes qui m'habitent." },
  { name: "Smart Adjovi", category: "Vision", image: smartAdjovi, description: "Jeune fille avec tablette, Cotonou 2050", quote: "Le futur du Bénin se dessine sur nos écrans aujourd'hui." },
  { name: "Futur Yao", category: "Vision", image: futurYao, description: "Urbaniste pointant vers le ciel", quote: "Demain, Cotonou sera la ville dont le monde parlera." },
];
