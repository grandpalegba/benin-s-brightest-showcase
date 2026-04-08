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
}

export const talents: Talent[] = [
  { name: "Amina Dossou", category: "Beauté Féminine", image: aminaDossou, description: "Élégance royale, foulard Gèlè en soie, bijoux en bronze" },
  { name: "Sika Amoussou", category: "Beauté Féminine", image: sikaAmoussou, description: "Beauté naturelle, tresses fines perlées, robe en pagne Kanvô" },
  { name: "Kofi Agossou", category: "Beauté Masculine", image: kofiAgossou, description: "Charisme imposant, tenue Agbada brodée, allure de leader" },
  { name: "Blaise Houessou", category: "Beauté Masculine", image: blaiseHouessou, description: "Style moderne, costume cintré avec détails wax" },
  { name: "Yapi Akodé", category: "Mode & Style", image: yapiAkode, description: "Créatrice avant-gardiste, coiffure sculpturale, accessoires en cauris" },
  { name: "Sènami Zinsou", category: "Mode & Style", image: senamiZinsou, description: "Mannequin haute couture, drapé asymétrique audacieux" },
  { name: "Yemi Alihonou", category: "Musiques", image: yemiAlihonou, description: "Chanteuse afro-pop, micro vintage, expression passionnée" },
  { name: "Gan-Gan Bio", category: "Musiques", image: ganGanBio, description: "Percussionniste traditionnel, tambour parlant" },
  { name: "Fifi Gnahoui", category: "Danses", image: fifiGnahoui, description: "Danseuse contemporaine, tenue fluide et colorée" },
  { name: "Toundé Codjia", category: "Danses", image: toundeCodjia, description: "Danseur de Tipa, pagne court traditionnel" },
  { name: 'Mamoudou "Mam"', category: "Humour", image: mamoudouMam, description: "Expression faciale hilarante, yeux écarquillés" },
  { name: "Yomie Kpadé", category: "Humour", image: yomieKpade, description: "Gestuelle expressive, sourire communicatif" },
  { name: "Arielle Gogan", category: "Éloquence", image: arielleGogan, description: "Oratrice inspirante, style business" },
  { name: "Marc Valery", category: "Éloquence", image: marcValery, description: "Slammeur, bonnet stylé, intensité dans le regard" },
  { name: "Ousmane Bakary", category: "Mémoire", image: ousmaneBakary, description: "Historien, entouré de vieux manuscrits" },
  { name: "Runna Tossou", category: "Mémoire", image: runnaTossou, description: "Regard chargé d'histoire, tenue sobre" },
  { name: "Zannou Loko", category: "Mythes", image: zannouLoko, description: "Performance avec masque de bois, costume mystique" },
  { name: "Dah Queen", category: "Mythes", image: dahQueen, description: "Prêtresse en blanc, colliers de perles sacrées" },
  { name: "Patrice Akou", category: "Sagesse", image: patriceAkou, description: "Doyen sous un baobab, canne sculptée, sourire serein" },
  { name: "Maman Ahoué", category: "Sagesse", image: mamanAhoue, description: "Grand-mère bienveillante, visage ridé et radieux" },
  { name: "Yvan Chaka", category: "Génie Art.", image: yvanChaka, description: "Sculpteur, mains couvertes de poussière de bois" },
  { name: "Sonia Laly", category: "Génie Art.", image: soniaLaly, description: "Peintre devant une toile abstraite, style bohème" },
  { name: "Chef Ignace", category: "Saveurs", image: chefIgnace, description: "Toque blanche, plat fumant d'Igname pilée" },
  { name: "Tantie Flore", category: "Saveurs", image: tantieFlore, description: "Cuisinière de rue dynamique, sourire accueillant" },
  { name: "Guide Moïse", category: "Voix des Lieux", image: guideMoise, description: "Chapeau de brousse, devant les pilotis de Ganvié" },
  { name: "Inès Douté", category: "Voix des Lieux", image: inesDoute, description: "Exploratrice devant la Porte du Non-Retour" },
  { name: "Cyril Coder", category: "Innovation", image: cyrilCoder, description: "Développeur avec casque audio, setup multi-écrans" },
  { name: "Honorine Tech", category: "Innovation", image: honorineTech, description: "Ingénieure drone, éoliennes en arrière-plan" },
  { name: "Paris Sènou", category: "Diaspora", image: parisSenou, description: "Femme d'affaires devant la Tour Eiffel" },
  { name: "New York Djimon", category: "Diaspora", image: newyorkDjimon, description: "Architecte, allure cosmopolite et fière" },
  { name: "Smart Adjovi", category: "Vision", image: smartAdjovi, description: "Jeune fille avec tablette, Cotonou 2050" },
  { name: "Futur Yao", category: "Vision", image: futurYao, description: "Urbaniste pointant vers le ciel" },
];
