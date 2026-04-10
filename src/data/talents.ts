import aminaDossou from "@/assets/talents/amina-dossou.jpg";
import sikaAmoussou from "@/assets/talents/sika-amoussou.jpg";
import graceAbalo from "@/assets/talents/grace-abalo.jpg";
import lolaKerekou from "@/assets/talents/lola-kerekou.jpg";
import kofiAgossou from "@/assets/talents/kofi-agossou.jpg";
import blaiseHouessou from "@/assets/talents/blaise-houessou.jpg";
import danielKpossou from "@/assets/talents/daniel-kpossou.jpg";
import sergeDossavi from "@/assets/talents/serge-dossavi.jpg";
import yapiAkode from "@/assets/talents/yapi-akode.jpg";
import senamiZinsou from "@/assets/talents/senami-zinsou.jpg";
import ninaAdjaho from "@/assets/talents/nina-adjaho.jpg";
import felixHounsou from "@/assets/talents/felix-hounsou.jpg";
import yemiAlihonou from "@/assets/talents/yemi-alihonou.jpg";
import ganGanBio from "@/assets/talents/gan-gan-bio.jpg";
import elvisGoudjo from "@/assets/talents/elvis-goudjo.jpg";
import celineAgbo from "@/assets/talents/celine-agbo.jpg";
import fifiGnahoui from "@/assets/talents/fifi-gnahoui.jpg";
import toundeCodjia from "@/assets/talents/tounde-codjia.jpg";
import aidaSossou from "@/assets/talents/aida-sossou.jpg";
import kevinBoko from "@/assets/talents/kevin-boko.jpg";
import mamoudouMam from "@/assets/talents/mamoudou-mam.jpg";
import yomieKpade from "@/assets/talents/yomie-kpade.jpg";
import landryComlan from "@/assets/talents/landry-comlan.jpg";
import rosaDah from "@/assets/talents/rosa-dah.jpg";
import arielleGogan from "@/assets/talents/arielle-gogan.jpg";
import marcValery from "@/assets/talents/marc-valery.jpg";
import ruthAssogba from "@/assets/talents/ruth-assogba.jpg";
import joelFagnon from "@/assets/talents/joel-fagnon.jpg";
import ousmaneBakary from "@/assets/talents/ousmane-bakary.jpg";
import runnaTossou from "@/assets/talents/runna-tossou.jpg";
import basileDaho from "@/assets/talents/basile-daho.jpg";
import mamaTola from "@/assets/talents/mama-tola.jpg";
import zannouLoko from "@/assets/talents/zannou-loko.jpg";
import dahQueen from "@/assets/talents/dah-queen.jpg";
import cosmeVodounou from "@/assets/talents/cosme-vodounou.jpg";
import nanaAdjassin from "@/assets/talents/nana-adjassin.jpg";
import patriceAkou from "@/assets/talents/patrice-akou.jpg";
import mamanAhoue from "@/assets/talents/maman-ahoue.jpg";
import tanteAdjo from "@/assets/talents/tante-adjo.jpg";
import sageGbeto from "@/assets/talents/sage-gbeto.jpg";
import yvanChaka from "@/assets/talents/yvan-chaka.jpg";
import soniaLaly from "@/assets/talents/sonia-laly.jpg";
import dianeHoungbo from "@/assets/talents/diane-houngbo.jpg";
import borisAgoli from "@/assets/talents/boris-agoli.jpg";
import chefIgnace from "@/assets/talents/chef-ignace.jpg";
import tantieFlore from "@/assets/talents/tantie-flore.jpg";
import estelleMensah from "@/assets/talents/estelle-mensah.jpg";
import remySodabi from "@/assets/talents/remy-sodabi.jpg";
import guideMoise from "@/assets/talents/guide-moise.jpg";
import inesDoute from "@/assets/talents/ines-doute.jpg";
import fatouDossou from "@/assets/talents/fatou-dossou.jpg";
import ericGandonou from "@/assets/talents/eric-gandonou.jpg";
import cyrilCoder from "@/assets/talents/cyril-coder.jpg";
import honorineTech from "@/assets/talents/honorine-tech.jpg";
import amaraKouagou from "@/assets/talents/amara-kouagou.jpg";
import idrissBello from "@/assets/talents/idriss-bello.jpg";
import parisSenou from "@/assets/talents/paris-senou.jpg";
import newyorkDjimon from "@/assets/talents/newyork-djimon.jpg";
import lindaAkplogan from "@/assets/talents/linda-akplogan.jpg";
import charlesAdande from "@/assets/talents/charles-adande.jpg";
import smartAdjovi from "@/assets/talents/smart-adjovi.jpg";
import futurYao from "@/assets/talents/futur-yao.jpg";
import mayaTossou from "@/assets/talents/maya-tossou.jpg";
import princeHouenou from "@/assets/talents/prince-houenou.jpg";

export interface Talent {
  name: string;
  category: string;
  image: string;
  bio: string;
  quote: string;
}

export const talents: Talent[] = [
  // Beauté Féminine
  { name: "Amina Dossou", category: "Beauté Féminine", image: aminaDossou, bio: "Née à Porto-Novo, Amina est mannequin et ambassadrice de la beauté traditionnelle béninoise. Elle parcourt l'Afrique pour promouvoir l'élégance du Gèlè et des bijoux artisanaux en bronze.", quote: "La beauté béninoise, c'est porter son histoire avec fierté." },
  { name: "Sika Amoussou", category: "Beauté Féminine", image: sikaAmoussou, bio: "Originaire d'Abomey, Sika est coiffeuse artistique et créatrice de mode. Elle réinvente les tresses traditionnelles perlées et popularise le pagne Kanvô auprès de la jeune génération.", quote: "Chaque tresse raconte un chapitre de notre héritage." },
  { name: "Grâce Abalo", category: "Beauté Féminine", image: graceAbalo, bio: "Esthéticienne et influenceuse beauté de Cotonou, Grâce crée des cosmétiques naturels à base de beurre de karité et d'huile de baobab, valorisant les ingrédients locaux du Bénin.", quote: "La vraie beauté naît de ce que la terre nous offre." },
  { name: "Lola Kérékou", category: "Beauté Féminine", image: lolaKerekou, bio: "Photographe et militante de la beauté noire à Parakou, Lola capture la diversité des visages béninois dans des portraits saisissants exposés à travers l'Afrique de l'Ouest.", quote: "Chaque visage béninois est une œuvre d'art vivante." },

  // Beauté Masculine
  { name: "Kofi Agossou", category: "Beauté Masculine", image: kofiAgossou, bio: "Entrepreneur et figure publique de Cotonou, Kofi est connu pour son charisme naturel et son engagement à préserver l'art vestimentaire Agbada dans les cérémonies contemporaines.", quote: "L'élégance d'un homme se mesure à la dignité de son port." },
  { name: "Blaise Houessou", category: "Beauté Masculine", image: blaiseHouessou, bio: "Styliste basé à Cotonou, Blaise fusionne la haute couture européenne avec les textiles wax du Bénin. Ses créations sont portées par des célébrités à travers le continent.", quote: "Le wax sur un costume, c'est l'Afrique qui dialogue avec le monde." },
  { name: "Daniel Kpossou", category: "Beauté Masculine", image: danielKpossou, bio: "Barbier et créateur de tendances à Porto-Novo, Daniel a popularisé les coupes inspirées des motifs scarifications traditionnels, mêlant héritage et modernité.", quote: "Un homme soigné honore ses ancêtres et inspire sa génération." },
  { name: "Serge Dossavi", category: "Beauté Masculine", image: sergeDossavi, bio: "Mannequin international originaire de Ouidah, Serge défile à Lagos, Accra et Paris. Il est aussi ambassadeur d'une marque de soins masculins fabriqués au Bénin.", quote: "Porter le Bénin sur les podiums du monde est mon plus grand honneur." },

  // Mode & Style
  { name: "Yapi Akodé", category: "Mode & Style", image: yapiAkode, bio: "Créatrice avant-gardiste de Parakou, Yapi transforme les cauris et matériaux locaux en accessoires de haute couture. Ses collections ont été présentées à Lagos et Dakar.", quote: "La mode africaine n'imite personne, elle inspire le monde entier." },
  { name: "Sènami Zinsou", category: "Mode & Style", image: senamiZinsou, bio: "Top model internationale originaire de Ouidah, Sènami défile pour les plus grandes maisons africaines. Elle milite pour la représentation des mannequins béninois sur la scène mondiale.", quote: "Chaque tissu a une âme, il suffit de savoir l'écouter." },
  { name: "Nina Adjaho", category: "Mode & Style", image: ninaAdjaho, bio: "Créatrice de bijoux écoresponsables à Cotonou, Nina recycle le laiton et les perles anciennes pour créer des pièces uniques inspirées des parures royales du Dahomey.", quote: "Mes bijoux portent la mémoire de reines oubliées." },
  { name: "Félix Hounsou", category: "Mode & Style", image: felixHounsou, bio: "Directeur artistique et styliste de Cotonou, Félix habille les stars de la musique béninoise. Sa marque fusionne streetwear et tissus traditionnels Adirè.", quote: "Le style, c'est quand la rue rencontre le palais." },

  // Musiques
  { name: "Yemi Alihonou", category: "Musiques", image: yemiAlihonou, bio: "Chanteuse afro-pop née à Lokossa, Yemi mêle rythmes traditionnels Fon et sonorités modernes. Son premier album a été certifié disque d'or en Afrique de l'Ouest.", quote: "Ma voix porte les mélodies que mes ancêtres fredonnaient." },
  { name: "Gan-Gan Bio", category: "Musiques", image: ganGanBio, bio: "Maître percussionniste de Djougou, Gan-Gan perpétue l'art du tambour parlant. Il enseigne aux jeunes les codes rythmiques ancestraux utilisés dans les cérémonies royales.", quote: "Le tambour ne fait pas de bruit, il parle aux esprits." },
  { name: "Elvis Goudjo", category: "Musiques", image: elvisGoudjo, bio: "Producteur et beatmaker de Cotonou, Elvis mélange afrobeat, hip-hop et rythmes Tchinkoumè. Ses productions ont été reprises par des artistes de toute l'Afrique francophone.", quote: "Le son du Bénin est universel, il suffit de l'amplifier." },
  { name: "Céline Agbo", category: "Musiques", image: celineAgbo, bio: "Chanteuse de gospel et de musique traditionnelle Mahi, Céline enchante les scènes de Bohicon à Lomé. Sa voix puissante est devenue un symbole de la spiritualité musicale béninoise.", quote: "Quand je chante, c'est mon âme qui prie à haute voix." },

  // Danses
  { name: "Fifi Gnahoui", category: "Danses", image: fifiGnahoui, bio: "Danseuse et chorégraphe contemporaine de Cotonou, Fifi fusionne danse traditionnelle et expression corporelle moderne. Elle dirige sa propre compagnie de danse depuis 2019.", quote: "Danser, c'est libérer ce que les mots ne peuvent pas dire." },
  { name: "Toundé Codjia", category: "Danses", image: toundeCodjia, bio: "Danseur de Tipa originaire de Savalou, Toundé est gardien de cette danse guerrière ancestrale. Il forme la nouvelle génération lors de festivals à travers le Bénin.", quote: "Le Tipa, c'est le battement de cœur de notre terre." },
  { name: "Aïda Sossou", category: "Danses", image: aidaSossou, bio: "Danseuse de Zangbéto et chorégraphe à Ouidah, Aïda réinterprète les danses rituelles vodoun pour les porter sur les scènes internationales tout en respectant leur sacralité.", quote: "La danse sacrée ne se performe pas, elle se vit." },
  { name: "Kévin Boko", category: "Danses", image: kevinBoko, bio: "Danseur urbain et champion d'afrodance à Cotonou, Kévin fusionne le coupé-décalé, l'azonto et les pas traditionnels Fon dans un style explosif viral sur les réseaux.", quote: "Mes pieds parlent toutes les langues de l'Afrique." },

  // Humour
  { name: 'Mamoudou "Mam"', category: "Humour", image: mamoudouMam, bio: "Humoriste star de Cotonou, Mam est célèbre pour ses sketchs qui caricaturent la vie quotidienne béninoise. Ses vidéos cumulent des millions de vues sur les réseaux sociaux.", quote: "Rire ensemble, c'est la meilleure médecine du Bénin." },
  { name: "Yomie Kpadé", category: "Humour", image: yomieKpade, bio: "Comédienne et imitatrice de Bohicon, Yomie fait rire le Bénin entier avec ses personnages hauts en couleur. Elle anime aussi des événements culturels majeurs.", quote: "L'humour, c'est dire la vérité en faisant sourire." },
  { name: "Landry Comlan", category: "Humour", image: landryComlan, bio: "Stand-uppeur et créateur de contenu de Cotonou, Landry transforme les galères du quotidien béninois en sketchs hilarants. Son one-man-show a fait salle comble à Cadjèhoun.", quote: "Au Bénin, même les embouteillages sont comiques." },
  { name: "Rosa Dah", category: "Humour", image: rosaDah, bio: "Humoriste et actrice de Porto-Novo, Rosa crée des personnages féminins inoubliables qui dénoncent avec humour les clichés sur les femmes béninoises.", quote: "Je ris de tout, surtout de ce qui devrait changer." },

  // Éloquence
  { name: "Arielle Gogan", category: "Éloquence", image: arielleGogan, bio: "Oratrice et coach en leadership basée à Cotonou, Arielle forme les jeunes entrepreneurs béninois à l'art de convaincre. Elle a remporté plusieurs concours d'éloquence panafricains.", quote: "Les mots justes peuvent déplacer des montagnes." },
  { name: "Marc Valery", category: "Éloquence", image: marcValery, bio: "Slammeur et poète engagé de Porto-Novo, Marc utilise la puissance des mots pour dénoncer les injustices et célébrer la culture béninoise sur scène.", quote: "Chaque slam est une lettre d'amour à mon pays." },
  { name: "Ruth Assogba", category: "Éloquence", image: ruthAssogba, bio: "Avocate et oratrice de Cotonou, Ruth plaide pour les droits des femmes et anime des ateliers de prise de parole en public dans les universités béninoises.", quote: "La parole est l'arme la plus noble qu'on puisse porter." },
  { name: "Joël Fagnon", category: "Éloquence", image: joelFagnon, bio: "Professeur de philosophie et debater à Abomey-Calavi, Joël a représenté le Bénin dans des compétitions internationales de débat et forme la relève intellectuelle.", quote: "Penser clairement, c'est parler puissamment." },

  // Mémoire
  { name: "Ousmane Bakary", category: "Mémoire", image: ousmaneBakary, bio: "Historien et archiviste de Nikki, Ousmane consacre sa vie à la préservation des manuscrits anciens du royaume Bariba et à la transmission de l'histoire orale du Nord-Bénin.", quote: "Oublier son passé, c'est marcher sans ombre." },
  { name: "Runna Tossou", category: "Mémoire", image: runnaTossou, bio: "Griotte et conteuse de Abomey, Runna est la mémoire vivante des dynasties royales du Dahomey. Elle transmet les récits des ancêtres lors de veillées communautaires.", quote: "Mes rides sont les pages d'un livre que personne n'a encore lu." },
  { name: "Basile Daho", category: "Mémoire", image: basileDaho, bio: "Anthropologue et conservateur du musée de Ouidah, Basile documente les traditions en voie de disparition et crée des archives numériques accessibles à tous les Béninois.", quote: "Préserver la mémoire, c'est construire l'avenir sur des fondations solides." },
  { name: "Mama Tola", category: "Mémoire", image: mamaTola, bio: "Doyenne du village de Savalou, Mama Tola est la gardienne des chants funéraires Mahi. À 87 ans, elle transmet encore chaque soir les récits fondateurs à ses petits-enfants.", quote: "Tant que je respire, nos histoires ne mourront pas." },

  // Mythes
  { name: "Zannou Loko", category: "Mythes", image: zannouLoko, bio: "Artiste performeur et gardien des traditions Guèlèdè, Zannou sculpte ses propres masques et donne vie aux mythes yoruba-nago lors de cérémonies rituelles.", quote: "Derrière chaque masque se cache une vérité ancestrale." },
  { name: "Dah Queen", category: "Mythes", image: dahQueen, bio: "Prêtresse vodoun et conférencière, Dah Queen œuvre à démystifier le vodoun béninois auprès du grand public et à préserver les savoirs spirituels traditionnels.", quote: "Le vodoun n'est pas de la magie, c'est de la sagesse vivante." },
  { name: "Cosme Vodounou", category: "Mythes", image: cosmeVodounou, bio: "Peintre et sculpteur rituel d'Allada, Cosme crée des œuvres inspirées des divinités vodoun. Ses installations immersives transportent les visiteurs dans l'univers des mythes Fon.", quote: "L'art est le pont entre le visible et l'invisible." },
  { name: "Nana Adjassin", category: "Mythes", image: nanaAdjassin, bio: "Conteuse et ethnologue de Porto-Novo, Nana collecte et publie les légendes yoruba-nago du Sud-Bénin. Ses livres sont utilisés dans les écoles pour enseigner le patrimoine oral.", quote: "Les mythes ne sont pas des mensonges, ce sont des vérités profondes." },

  // Sagesse
  { name: "Patrice Akou", category: "Sagesse", image: patriceAkou, bio: "Doyen du village de Tanguiéta, Patrice est un sage respecté dont les conseils guident les décisions communautaires. Il siège sous le baobab centenaire chaque matin.", quote: "Un vieillard qui meurt, c'est une bibliothèque qui brûle." },
  { name: "Maman Ahoué", category: "Sagesse", image: mamanAhoue, bio: "Grand-mère et guérisseuse traditionnelle de Natitingou, Maman Ahoué connaît les vertus de centaines de plantes médicinales et transmet ce savoir à ses petites-filles.", quote: "La patience est l'arbre dont les fruits sont la paix." },
  { name: "Tante Adjo", category: "Sagesse", image: tanteAdjo, bio: "Médiatrice communautaire de Djougou, Tante Adjo résout les conflits familiaux et fonciers grâce à sa sagesse légendaire. Les villages voisins font appel à elle depuis 40 ans.", quote: "La sagesse, c'est écouter deux fois avant de parler une fois." },
  { name: "Sage Gbéto", category: "Sagesse", image: sageGbeto, bio: "Ancien instituteur et philosophe de Savè, Sage Gbéto enseigne les proverbes Fon aux jeunes générations et anime un cercle de réflexion hebdomadaire sous l'arbre à palabres.", quote: "Le savoir des anciens est la boussole des temps modernes." },

  // Génie Art.
  { name: "Yvan Chaka", category: "Génie Art.", image: yvanChaka, bio: "Sculpteur sur bois installé à Ouidah, Yvan transforme l'iroko et l'acajou en œuvres monumentales exposées dans les galeries d'art de Cotonou, Lomé et Accra.", quote: "Chaque sculpture est un dialogue entre mes mains et le bois." },
  { name: "Sonia Laly", category: "Génie Art.", image: soniaLaly, bio: "Peintre abstraite et muraliste de Cotonou, Sonia s'inspire des motifs Adinkra et des paysages béninois pour créer des toiles vibrantes vendues à l'international.", quote: "Je peins ce que le Bénin me murmure à l'oreille." },
  { name: "Diane Houngbo", category: "Génie Art.", image: dianeHoungbo, bio: "Céramiste et potière contemporaine de Sè, Diane perpétue l'art ancestral de la poterie tout en créant des pièces modernes exposées dans des galeries d'art contemporain.", quote: "L'argile se souvient de toutes les mains qui l'ont façonnée." },
  { name: "Boris Agoli", category: "Génie Art.", image: borisAgoli, bio: "Photographe documentaire de Cotonou, Boris capture la vie quotidienne béninoise avec un regard poétique. Ses séries sur les marchés et les rituels ont été publiées internationalement.", quote: "Mon appareil photo est mon stylo, le Bénin est mon encre." },

  // Saveurs
  { name: "Chef Ignace", category: "Saveurs", image: chefIgnace, bio: "Chef cuisinier renommé spécialisé dans la gastronomie béninoise, Ignace a ouvert trois restaurants à Cotonou et participe à des compétitions culinaires internationales.", quote: "La cuisine béninoise, c'est l'amour servi dans une assiette." },
  { name: "Tantie Flore", category: "Saveurs", image: tantieFlore, bio: "Reine de la street food à Dantokpa, Tantie Flore nourrit des centaines de clients chaque jour avec son Atassi légendaire et sa sauce arachide inimitable.", quote: "Mon secret ? Je cuisine avec le cœur, jamais avec la montre." },
  { name: "Estelle Mensah", category: "Saveurs", image: estelleMensah, bio: "Pâtissière créative de Cotonou, Estelle fusionne pâtisserie française et saveurs béninoises : gâteau au gari, macaron au baobab, tarte à l'ananas du Bénin.", quote: "Le sucré béninois mérite sa place parmi les grands desserts du monde." },
  { name: "Rémy Sodabi", category: "Saveurs", image: remySodabi, bio: "Chef spécialisé en cuisine de brousse à Natitingou, Rémy valorise les ingrédients oubliés du terroir béninois et organise des dîners immersifs en pleine nature.", quote: "La forêt est le plus grand restaurant du Bénin." },

  // Voix des Lieux
  { name: "Guide Moïse", category: "Voix des Lieux", image: guideMoise, bio: "Guide touristique passionné de Ganvié, Moïse fait découvrir la cité lacustre aux visiteurs du monde entier depuis plus de 15 ans, racontant chaque pilotis comme un chapitre d'histoire.", quote: "Ganvié n'est pas un village sur l'eau, c'est un miracle qui flotte." },
  { name: "Inès Douté", category: "Voix des Lieux", image: inesDoute, bio: "Historienne et guide culturelle de Ouidah, Inès est spécialiste de la Route des Esclaves. Elle sensibilise les jeunes Béninois à ce pan douloureux mais essentiel de leur histoire.", quote: "Chaque pierre de Ouidah chuchote une histoire qu'il faut entendre." },
  { name: "Fatou Dossou", category: "Voix des Lieux", image: fatouDossou, bio: "Guide écotouristique de la Pendjari, Fatou fait découvrir la faune et la flore du parc national aux visiteurs tout en sensibilisant à la conservation de la biodiversité.", quote: "La Pendjari est le cœur sauvage du Bénin, il faut le protéger." },
  { name: "Éric Gandonou", category: "Voix des Lieux", image: ericGandonou, bio: "Guide et conteur des palais royaux d'Abomey, Éric fait revivre l'histoire des rois du Dahomey avec une passion communicative qui captive touristes et écoliers.", quote: "Les murs d'Abomey parlent encore, il suffit de tendre l'oreille." },

  // Innovation
  { name: "Cyril Coder", category: "Innovation", image: cyrilCoder, bio: "Développeur full-stack et fondateur d'une startup tech à Cotonou, Cyril crée des applications mobiles qui facilitent l'accès aux services publics pour les citoyens béninois.", quote: "Le code est le nouveau tam-tam : il connecte les peuples." },
  { name: "Honorine Tech", category: "Innovation", image: honorineTech, bio: "Ingénieure en énergies renouvelables, Honorine développe des solutions solaires et éoliennes adaptées aux zones rurales du Bénin, électrifiant des villages entiers.", quote: "L'Afrique n'attend plus la technologie, elle la crée." },
  { name: "Amara Kouagou", category: "Innovation", image: amaraKouagou, bio: "Data scientist et cofondatrice d'une fintech à Cotonou, Amara utilise l'intelligence artificielle pour améliorer l'accès au crédit des petits commerçants béninois.", quote: "Les données sont le nouveau or, et le Bénin en regorge." },
  { name: "Idriss Bello", category: "Innovation", image: idrissBello, bio: "Ingénieur en robotique diplômé de l'EPAC, Idriss conçoit des drones agricoles adaptés aux cultures béninoises et forme les jeunes à la mécatronique.", quote: "L'innovation africaine résout des problèmes que le monde n'a pas encore vus." },

  // Diaspora
  { name: "Paris Sènou", category: "Diaspora", image: parisSenou, bio: "Femme d'affaires béninoise installée à Paris, Sènou dirige un cabinet de conseil interculturel et organise des événements qui connectent la diaspora à ses racines.", quote: "Où que j'aille, le Bénin bat dans ma poitrine." },
  { name: "New York Djimon", category: "Diaspora", image: newyorkDjimon, bio: "Architecte béninois basé à New York, Djimon conçoit des bâtiments qui intègrent l'esthétique africaine dans le paysage urbain américain. Il finance aussi des écoles au Bénin.", quote: "Je construis des ponts entre deux mondes qui m'habitent." },
  { name: "Linda Akplogan", category: "Diaspora", image: lindaAkplogan, bio: "Entrepreneure béninoise à Londres, Linda a fondé une plateforme e-commerce qui exporte l'artisanat béninois vers l'Europe et reverse 10% aux artisans locaux.", quote: "La diaspora est un pont, pas une fuite." },
  { name: "Charles Adandé", category: "Diaspora", image: charlesAdande, bio: "Réalisateur béninois installé à Montréal, Charles produit des documentaires sur la diaspora africaine et a remporté un prix au Festival du film panafricain de Toronto.", quote: "Ma caméra est ma pirogue entre deux continents." },

  // Vision
  { name: "Smart Adjovi", category: "Vision", image: smartAdjovi, bio: "Lycéenne prodige de Cotonou, Smart développe des applications éducatives et rêve de faire du Bénin un hub technologique africain d'ici 2035.", quote: "Le futur du Bénin se dessine sur nos écrans aujourd'hui." },
  { name: "Futur Yao", category: "Vision", image: futurYao, bio: "Jeune urbaniste diplômé de l'Université d'Abomey-Calavi, Yao imagine la Cotonou de 2050 : verte, connectée et résiliente face au changement climatique.", quote: "Demain, Cotonou sera la ville dont le monde parlera." },
  { name: "Maya Tossou", category: "Vision", image: mayaTossou, bio: "Étudiante en sciences environnementales à l'UAC, Maya développe un projet de reforestation communautaire dans le Nord-Bénin impliquant les femmes rurales.", quote: "Planter un arbre au Bénin, c'est planter l'espoir pour cent ans." },
  { name: "Prince Houénou", category: "Vision", image: princeHouenou, bio: "Étudiant en médecine et entrepreneur social, Prince crée des cliniques mobiles connectées pour apporter des soins de santé dans les zones reculées du Bénin.", quote: "La santé est un droit, pas un privilège de la ville." },
];
