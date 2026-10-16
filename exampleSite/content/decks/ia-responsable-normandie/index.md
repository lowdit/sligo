---
title: "IA Ethique ? - Normandie AI"
subtitle: Panorama des Référentiels de l'éthique pour les IA
type: presentation
image: handicap.jpg
description: |-
    Réflexion sur l’influence du parc de périphériques sur les capacités d’accès aux services.
authors:
    - Bertrand Keller
slides:
  content:
    - part: D'où on se place ?
    - title: Référentiels
    - texte: |-
        > Les Référentiels sont des aides qui permettent d'augmenter la probabilité d'une réponse correcte d'un individu quand les antécédents ordinaires ne suffisent pas à engendrer le comportement.
    - title: Divides (Fractures)
    - focus: Je dois vérifier que l'IA qu'on développe est éthique.
    - part: Immersion ?
    - references: act
    - part: Est-ce éthique ?
    - title: "CNIL | https://www.cnil.fr/fr/comment-permettre-lhomme-de-garder-la-main-rapport-sur-les-enjeux-ethiques-des-algorithmes-et-de"

    - texte: |-
        ### Les 6 recommandations

        1. Formation à l’éthique tous les acteurs clefs 
        1. Rendre les syst. algo compréhensibles
        1. Design des syst. algo au service de la liberté humaine
    - texte: |-
        ### Les 6 recommandations

        1. Une plateforme nationale d’audit des algorithmes ;
        1. Recherche sur l’IA éthique et lancer une grande cause nationale participative autour d’un projet de recherche d’intérêt général 
        1. Renforcer la fonction éthique au sein des entreprises
    - texte: |-
        > Algorithmes et intelligence artificielle permettent la délégation croissante de tâches, de raisonnements ou de décisions de plus en plus critiques à des machines. Souvent jugées infaillibles et « neutres », celles-ci n’ouvrent-elles pas la voie à une confiance excessive et à la tentation pour chacun de ne pas exercer pleinement ses responsabilités ? 
        >
        > **Comment faire face aux formes nouvelles de dilution de la responsabilité qu’impliquent des systèmes algorithmiques complexes et très segmentés ?**
    - title: La malédiction de la récurrence - l'entraiment sur les données générées résulte que les modèles oublient
    - texte: |-
        > Nous constatons que l'utilisation d'un contenu généré par un modèle lors de l'entraiment provoque des défauts irréversibles dans les modèles résultants.
        
        [The curse of recursion: training on generated data makes models forget](https://arxiv.org/pdf/2305.17493)
    - texte: |-
        > Plus une caractéristique culturelle est inhabituelle, moins elle a de chances d’être mise en évidence dans la représentation de la culture par un grand modèle. L’IA nous conduit à un aplatissement, effaçant les particularités qui nous distinguent.
          **Henri Farrell** 
    - texte: |-
        > Contrairement à son apport dans le monde logiciel, l’ouverture de l’IA, elle, repose sur un ensemble de couches plus complexes, dont les modalités d’ouverture et de transparence minimales ne sont pas construites. 
    - texte: |- 
        ### Humanitarian action and responsible artificial intelligence (AI) 

        <https://www.gov.uk/international-development-funding/humanitarian-action-and-responsible-artificial-intelligence-ai>
act: 
  - type: Déclarations
    items: 
      - name: Bletchley Declaration
        by: AI Safety Summit international (28 pays)
        date: Novembre 2023
        url: "[Bletchley Declaration](https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration/the-bletchley-declaration-by-countries-attending-the-ai-safety-summit-1-2-november-2023)"
        occurence:
          ethic: 1
          inclusive: 6
          divide: 1
          accessibility: 1
        criteria:
        - texte: |-
            De nombreux risques liés à l’IA sont intrinsèquement de nature internationale et il est donc préférable de les gérer par la coopération internationale. Nous sommes résolus à travailler ensemble de manière inclusive pour garantir une IA centrée sur l'humain, fiable et responsable. 
            
            Ce faisant, nous reconnaissons que les pays devraient considérer l’**importance d’une approche de gouvernance et de réglementation favorable à l’innovation et proportionnée qui maximise les avantages et prend en compte les risques associés à l’IA**.
      - name: Global Digital Compact
        by: Nations Unies
        date: Septembre 2024
        url: "[Global Digital Compact](https://www.un.org/global-digital-compact/sites/default/files/2024-09/Global%20Digital%20Compact%20-%20English_0.pdf)"
        occurence:
             ethic: 1
             inclusive: 26
             divide: 10
             accessibility: 1
        criteria:
        - id: 1
          texte: |-
            Les technologies numériques transforment radicalement notre monde. Elles offrent d'immenses avantages potentiels pour le bien-être et le progrès des personnes et des sociétés, ainsi que pour notre planète. Ils promettent d'accélérer la réalisation des objectifs de développement durable.
        - id: 2
          texte: |-
            Nous n'y parviendrons que par une **coopération internationale renforcée** qui combler toutes les **fractures numériques** entre les pays et à l'intérieur de ceux-ci. Nous sommes conscients des défis que ces **fractures** posent à de nombreux pays, en particulier aux pays en développement, dont les besoins de développement sont pressants et les ressources limitées.
      - name: Issue Note - Sherpa track G20 South Africa 2025
        by: Digital Economy Working Group - G20
        date: Septembre 2024
        url: https://g20.org/wp-content/uploads/2024/12/Issue-Note_Digital-Economy-WG.pdf
        occurence:
             ethic: 2
             inclusive: 11
             divide: 0
             accessibility: 0
        criteria:
        - id: Priorité 4
          texte: |-
            Reconnaissant que les décisions d'aujourd'hui façonnent les perspectives de prospérité de demain, l'Afrique du Sud concentrera les discussions sur les questions éthiques et politiques, notamment en ce qui concerne le secteur privé et les plateformes de médias sociaux. 
            
            **Afin de répondre à la nécessité d'institutionnaliser les garanties et les évaluations de l'impact sur les droits de l'homme, conformément aux principes directeurs des Nations unies relatifs aux entreprises et aux droits de l'homme**. 
        - id: Priorité 4
          texte: |-
            Une considération essentielle est la partialité et la discrimination qui peuvent résulter de la conception des algorithmes, en particulier des ensembles de données utilisés pour former les algorithmes dont la grande majorité des Africains est exclue.
      - name: Declaration on digital inclusion for all
        by: Digital Economy Working Group - G20
        date: Septembre 2024
        url: "[Declaration on digital inclusion for all](https://g7g20-documents.org/fileadmin/G7G20_documents/2024/G20/Brazil/Sherpa-Track/Digital%20Economy%20Ministers/1%20Ministers'%20Language/G20_DEWG_Maceio_Ministerial_Declaration_13092024.pdf)"
        occurence:
            ethic: 7
            inclusive: 28
            divide: 8
            accessibility: 7
        criteria:
          - id: 17
            texte: |-
              Nous reconnaissons que l'intelligence artificielle (IA) sûre, sécurisée et fiable, lorsqu'elle est **appliquée de manière transparente, éthique, responsable et fiable**, peut servir de catalyseur pour parvenir à la croissance économique et à un développement durable inclusif dans ses **3 dimensions : sociale, économique et environnementale**. 
              
              Nous réaffirmons les principes du G20 en matière d'IA et la **recommandation de l'UNESCO sur l'éthique de l'IA**.
  - type: Référentiels
    items: 
     - name: Recommandation sur l’éthique de l’intelligence artificielle
       by: UNESCO
       date: Novembre 2021
       url: https://unesdoc.unesco.org/ark:/48223/pf0000381137_fre
       occurence:
         ethic: 33
         inclusive: 10
         divide: 30 
         accessibility: 0
       criteria:
          - id: 50
            texte: |- 
              Les États membres devraient mettre en place des cadres relatifs aux évaluations de l’impact tels que l’évaluation de l’impact éthique, pour identifier et analyser les avantages et  les  risques  des  systèmes  d’IA ,   ainsi   que   des   mesures   appropriées   de   prévention,  d’atténuation  et  de  suivi  des  risques,  entre  autres  mécanismes  de  certification.  Ces  évaluations  de  l’impact devraient mettre en évidence les répercussions sur  les  droits  de  l’homme  et  les  libertés  fondamentales,  notamment  **les  droits  des  personnes  marginalisées  et  vulnérables  ou  en  situation  de  vulnérabilité,  le  droit  du  travail,  l’environnement  et  les  écosystèmes  ainsi  que  les  incidences éthiques et sociales, et faciliter la participation citoyenne**.
          - id: 51
            texte: |- 
              Les  États  membres  et  les  entreprises  du  secteur  privé  devraient mettre en place des mécanismes de diligence requise  et  de  supervision  pour  identifier,  prévenir  et  atténuer  les  risques  et  rendre  compte  de  la  manière  dont ils traitent les répercussions des systèmes d’IA sur le **respect des droits de l’homme, l’état de droit et les sociétés inclusives**.   Les   États   membres   devraient   également   être   capables   d’**évaluer   les   effets   socioéconomiques   des  systèmes  d’IA  sur  la  pauvreté  et  de  s’assurer  que  le  fossé entre les riches et les pauvres, ainsi que la fracture numérique   entre   les   pays   et   à   l’intérieur   de   ceux-ci**,  ne  s’accentuent  pas  avec  l’adoption  massive  des  technologies de l’IA.
          - id: 52. 
            texte: |- 
              Les gouvernements devraient adopter un cadre réglementaire qui définisse une procédure permettant en particulier aux **autorités publiques de mener à bien des  évaluations  sur  l’impact  des  systèmes  d’IA**  afin  d’anticiper  les  répercussions,  d’atténuer  les  risques,  d’éviter  les  conséquences  préjudiciables, faciliter la participation des citoyens et de faire face aux défis sociétaux. 

     - name: "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile"
       by: NIST
       date: Juillet 2024
       url: "[NIST Trustworthy and Responsible AI - NIST AI 600-1](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)"
       occurence:
         ethic: 7
         inclusive: 2
         divide: 1
         accessibility: 1
       criteria:
          - id: MP-3.4-006
            texte: |-
              Impliquer les utilisateurs finaux, les praticiens et les opérateurs du système GAI dans les activités de prototypage et d'essai. Veillez à ce que ces tests couvrent différents scénarios, tels que des **situations de crise ou des contextes sensibles sur le plan éthique**. 

              **Risques :** Configuration homme-IA ; Intégrité de l'information ; biais nuisibles et homogénéisation ; contenu dangereux, dangereux, violent ou haineux
     - name: ISO/IEC 42001:2023
       by: ISO
       date: 2023
       url: https://www.iso.org/fr/standard/81230.html
       criteria:
          - id: Annexe 2
            texte: |-
              Elle aborde les défis uniques que pose l’IA, notamment les considérations éthiques, la transparence et l’apprentissage continu. Elle propose aux organismes une méthodologie structurée pour gérer les risques et opportunités associés à l’IA, tout en conciliant innovation et gouvernance.

              **MAIS c'est payant !**
     - name: A Vision for Prioritizing Human Well-being with Autonomous and Intelligent Systems
       by: IEEE
       date: 2019 (V2)
       url: "[Ethically aligned design](https://standards.ieee.org/wp-content/uploads/import/documents/other/ead_v2.pdf)"
       occurence:
         ethic: 500
         inclusive: 28
         divide: 5
         accessibility: 1
       criteria:
          - id: Accès à l'éthique classique par les entreprises et les sociétés
            texte: |-
              Combler le fossé linguistique entre les techniciens, les philosophes et les décideurs politiques. Comprendre les nuances du langage philosophique est crucial, qu'il s'agisse de l'IoT, de la vie privée, de la cybersécurité ou de la gouvernance de l'internet.
          - id: L'application des traditions éthiques bouddhistes classiques à la conception de l'IA
            texte: |-
              Selon le bouddhisme, l'éthique consiste à se comporter de manière à ce que le sujet atteigne en fin de compte réaliser l'objectif de la libération. La question «&nbsp; Comment dois-je agir ?&nbsp;» trouve une réponse directe...
     - name: RGESN
       by: ARCEP, DINUM, ADEME
       date: Avril 2024
       url: https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/
       occurence:
         ethic: 0
         inclusive: 0
         divide: 1
         accessibility: 0
       criteria:
          - id: 1.1
            texte: |-
              Prendre en compte l’utilité du service numérique dès sa conception et son inscription dans au moins l’un des objectifs de développement durable (ODD), l’un des enjeux de limites planétaires ou tout autre référentiel du même type.
              
              Vérifier par exemple un ou plusieurs de ces points : la pertinence du service, son utilité, sa création de valeur, son bien-fondé, son service pour l’intérêt général, sa réponse à des besoins essentiels, sa participation à la mise en place de communs numériques, etc.

              Il convient d’afficher dans la déclaration d’écoconception les ODD dans lequel le service s’inscrit.
     - name: Référentiel général pour l'IA frugale pour mesurer et réduire l'impact environnemental de l'IA
       by: AFNOR 
       date: Juin 2024
       url: https://www.afnor.org/actualites/referentiel-pour-mesurer-et-reduire-impact-environnemental-de-ia/
       occurence:
         ethic: 2
         inclusive: 0
         divide: 0
         accessibility: 0
       criteria:
          - id: BP01
            texte: |-
              Utiliser des méthodes d'analyse de besoin pour mettre en œuvre la frugalité.

              L'usage de l'I! doit être motivé Ŕar la confirmation du besoin via une méthode centrée sur l’utilisateur : ´ l’emŔloi d’une solution IA pour rÈpondre ‡ quel usage/finalitÈ ?

              Prise en compte des critËres 1.1 et 1.2 du RGESN
          - id: BP02
            texte: |-
              Choisir et dÈvelopper la solution pour rÈpondre spÈcifiquement au besoin, en considÈrant les alternatives ‡ l'IA

              Challenger les besoins exprimÈs par les utilisateurs et notamment la performance et la qualitÈ des rÈsultats pour arriver aux besoins fondamentaux et permettre de proposer diverses approches et non uniquement celles basées sur l’I! (voir également la bonne Ŕratique N∞ 01). Les besoins doivent Ítre formulÈs de telle sorte que toutes les solutions, IA et non-IA, soient possibles.
     - name: RIA31 Référentiel IA Ethique et Responsable
       by: Institut du numérique responsable
       date: Septembre 2021
       url: https://ref-ia.isit-europe.org/
       occurence:
         ethic: 4
         inclusive: 0
         divide: 0
         accessibility: 0
       criteria: 
          - texte: |-
              Un comité éthique & environnemental est-il mis en place ? Les référents pluridisciplinaire (juristes, RSE, métiers, data scientist, data ingénieur, sociologues, ...), sont-ils identifiés et intégrés dans une gouvernance RSE ? L'éthique, la déontologie, la tracabilité des sources et la finalité de l'IA sont-elles suivies ?
          - texte: |-
              Est-ce qu'une **matrice d'éligibilité aux 7 éléments** essentiels pour qualifier une IA de confiance au regard de la commission européenne (**IA Act - 2026**) est instanciée ? La transparence, l'éthique, équitable, securité, explicabilité, robustesse, gouvernance de données et données privées sont-elles prises en compte ?
          - texte: |-
             La responsabilité légale et éthique du résultat de l'IA, et les nécessités d'**intervention humaine** pour exploiter ce résultat sont-elles identifiées ?
     - name: Recommandations de sécurite pour un systeme d'IA générative
       by: ANSSI
       date: Septembre 2024
       url: https://cyber.gouv.fr/publications/recommandations-de-securite-pour-un-systeme-dia-generative
       occurence:
         ethic: 0
         inclusive: 0
         divide: 0
         accessibility: 0
       criteria: 
          - id: R15
            texte:  |-
              **Prévoir un mode dégradé des services métier sans système d'IA**
              
              Afin de prévenir des dysfonctionnements ou des incohérences dans les réponses apportées par le modèle d’IA, il est recommandé de prévoir au minimum une procédure de contournement du système d’IA pour les utilisateurs, afin de répondre aux besoins métier.
  - type: Rapports
    items: 
      - name: Governing AI for humanity
        by: AI Advisory Body
        date: Septembre 2024
        url: "[Governing ai for humanity](https://www.un.org/sites/un2.un.org/files/governing_ai_for_humanity_final_report_en.pdf)"
        occurence:
          ethic: 33
          inclusive: 10
          divide: 30
          accessibility: 0
        images: 
          - Governing-AI-for-humanity-figure6.png
          - Governing-AI-for-humanity-figure9.png
          - Governing-AI-for-humanity-figure12.png
          - Governing-AI-for-humanity-figure13.png
        criteria:
          - id: 44
            texte: |-
              Il existe aujourd'hui un déficit de gouvernance mondiale en ce qui concerne l'IA. Malgré de nombreuses discussions sur l'éthique et les principes, la mosaïque de normes, d'institutions et d'initiatives est encore naissante et pleine de lacunes. La responsabilité et les recours en cas de préjudice se distinguent souvent par leur absence. 
              
              Le respect des règles repose sur le volontariat. Il existe un **décalage fondamental entre la rhétorique de haut niveau, les systèmes développés, déployés et utilisés**, et les conditions requises pour la sécurité et l'inclusion...
          - id: 61
            texte: |-
              Le manque de coordination entre les initiatives et les organismes risque de **diviser le monde en régimes de gouvernance de l’IA déconnectés et incompatibles**.
          - id: 72
            texte: |-
              L’émergence et l’évolution constantes des initiatives de gouvernance de l’IA ne **garantissent pas une collaboration efficace au bénéfice de l’humanité**. 
  - type: Risques
    items: 
     - name: IA risks
       by: MIT 
       date: Août 2024
       url: "[The AI Risk Repository](https://cdn.prod.website-files.com/669550d38372f33552d2516e/66bc918b580467717e194940_The%20AI%20Risk%20Repository_13_8_2024.pdf) - [The AI Risk DataBase](https://docs.google.com/spreadsheets/d/1evwjF4XmpykycpeZFq0FUteEAt7awx2i2oE6kMrV_xE/copy)"
       occurence:
         ethic: 41
         inclusive: 4
         divide: 0 
         accessibility: 0
       images: 
          - ai-risk.png
          - ai-risk-table1.png 
          - ai-risk-table2.png
  - type: Lois
    items: 
     - name: Pre-Rulemaking Considerations for Anti-Discrimination in AI Act
       by: Colorado State
       date: Mai 2024
       url: "[Colorado’s Anti-Discrimination in AI Act](https://coag.gov/app/uploads/2024/09/09.10.2024-AI-Pre-Rulemaking-Considerations-for-the-ADAI-1.pdf)"
       occurence:
         ethic: 0
         discrimination: 26
       criteria: 
          - texte: |-
              Lorsqu’un système d’intelligence artificielle est déployé et «&nbsp;**apporte ou constitue un facteur substantiel**&nbsp;» en prenant une décision conséquente », il est considéré comme un « **système d’intelligence artificielle à haut risque**&nbsp;». 
              
              Une « décision consécutive » est une décision qui a un «&nbsp;effet juridique important ou un effet tout aussi important&nbsp;».
              
              Comme à une inscription à l’école ou une **opportunité d’éducation ; un emploi ou une opportunité d'emploi ; un service financier ou de prêt; un service gouvernemental essentiel; services de soins de santé; logement; assurance; ou un service juridique**.
     - name: AI Act
       by: Union Européenne 
       date: Mai 2024
       url: "[La loi européenne sur l'intelligence artificielle](https://artificialintelligenceact.eu/fr/)"
       occurence:
         ethic: 3
         discrimination: 17
         accessibility: 10
       criteria: 
         - id: Article 5
           texte: |-
              La mise sur le marché, la mise en service ou l'utilisation d'un système d'IA qui exploite les vulnérabilités d'une personne physique ou d'un groupe spécifique de personnes en raison de leur âge, d'un **handicap ou d'une situation sociale ou économique particulière**, avec pour objectif ou pour effet d'altérer de manière significative le comportement de cette personne ou d'une personne appartenant à ce groupe d'une manière qui cause ou est raisonnablement susceptible de causer à cette personne ou à une autre personne un préjudice important
         - id: Article 12
           texte: |-
              Veiller à ce que le système d'IA à haut risque soit **conforme aux exigences en matière d'accessibilité conformément aux directives (UE) 2016/2102 et (UE) 2019/882**.
---




OCDE

- name: Fostering an inclusive digital transformation as AI spreads among firms
        date: Octobre 2024
        url: "[Fostering an inclusive digital transformation as AI spreads among firms](https://g7g20-documents.org/fileadmin/G7G20_documents/2024/G20/Brazil/Sherpa-Track/Digital%20Economy%20Ministers/1%20Ministers'%20Language/G20_DEWG_Maceio_Ministerial_Declaration_13092024.pdf)"
        occurence:
            ethic: 0
            inclusive: 13
            divide: 3
            accessibility: 0


## Plan

Qu'est-ce que je fais là ? Certains doivent bien rire, je n'aime par l'IA, je n'utilise pas l'IA, je décris l'usage de l'IA... Mais, mais, je suis là.

Pour vous expliquer pourquoi, je suis devant vous. Le mieux c'est que je vous raconte, une histoire, mon histoire. Comment on passe de dévelopeur d'interfaces à expert de l'accessibilité numérique ; de spécialiste de l'inclusion numérique à expert des référentiels donc eux sur l'éthique de l'IA.

I. Histoire 
En 1984 ans, attendez, non... on va sauter des étapes. 2020. Je participe à une mission Commando pour l'administration Française, la DINUM. Comme bouger l'adminsitration c'est long, COVID, télétravail. Je buche la réglementation sur le RGAA, l'accessibilité. Je fais le lien entre ce qu'on doit produire et ce qui est stipulé dans la loi. De l'action/recherche.
Je deviens spécialiste des stratégies d'amélioration de l'accessibilité. Mais avec un profil prod, car c'est ma formation. Ingénieur en productique.

Comme l'informatique ne s'occupe pas des humains, j'ai du mal à trouver un emploi... euh, sur sur le début de la phrase, on est d'accord,   on vous l'a pas dit ? On partage ce principe ? Où pas ? L'humain n'existe pas dans le numérique. Des utilisateurs existent. Mais des humains... parce qu'on va parler spécifiquement de ce sujet. Dites moi, faut repréciser des choses ? Ok, ok. Je vais vous expliquer. ça va être le sujet.

Bref, comme, j'aime bien maitriser un sujet. Je fais une mission courte dans une boîte d'audit. Je découvre tout le métier de conseil à des entreprises sur l'amélioration de l'accessibilité. Où ça bloque. Je commence à bien étayé mes compétences. 

Je continue à galérer et je trouve un poste dans une ONG internationale, pas trop loin de chez moi. Encore un grand saut dans le vide. Nouveau domaine que je ne connais pas. L'inclusion numérique son histoire, ses théories. Le monde des ONG, comment ça fonctionne à l'ONU. 

Ma mission chez HI est d'essayer de justifier pourquoi développer une compétence par HI sur le numérique en interne. Complétement fou, je dois trouver des arguments pour convaincre qu'il faut être vigileant et que le numérique exclu des personnes (je vous l'ai dit, l'humain n'existe pas).
Je commence à donc à lire des papiers sur tous les sujets: recherche, charte, études, appel d'offre, rapport d'évaluation en Ukraine, Afrique du Sud, Vietnam, Inde. Qu'est-ce que j'apprends ?

II. Engagements

Référentiel <-> Raison

II.1 Les Fractures ? Vulnérabilité.
En anglais on dit Gap : Educational Gap, Gender gap, Digital Gap et maintenant un truc tout nouveau le IA Gap. [Boîtent qui s'emboîtent]. 
On verra ça plus tard. Voilà le grand enjeu est de garantir une certaine forme d'équité dans la capacité à pourvoir participer à la vie en société. Normal.
Les ONG, l'ONU, les états s'engagent à respecter ce principe à **leave non none behind**.

II.2 Charte
Vous savez que les normands sont différents. Vous le savez que... quand vous allez dans les autres régions de France...
Et donc charte sur les personnes handicapée. Attendez personne est en train penser que je prétends que les Normands sont des handicapés. Non, non, non. La charte ne dit pas ça. Elle est un peu mal nommée. Mais elle parle bien de situations de handicap.
Moi en partant de Normandie. Je m'en suis rendu compte. Je ne suis plus en situation de handicap. pourtant je ne suis pas handicapé.

Après, t'es bien emmerdé, parce ce que dès que tu veux écrire une autre charte, tu dois être sûr que tu respectes des chartes préalables. Surtout celles qui concerne les droits fondamentaux.

Instances Internationales
Ce qui se discute : G20, UNESCO,... les droits humains

EXEMPLE D'ENGAGEMENT

IV. Les référentiels
Tout d'abord les référentiels c'est un concept qui semble à la fois assez logique mais qui reste assez compliqué à mettre en place. Parce que vous le savez dire si un critère est vérifié ou non, c'est pas toujours simple et ça demande d'avoir une bonne connaissance technique voire de comprendre le sens de la loi. Pour pas faire de contresens.

Ex: 

La logique des guidances
Voir mattermost

> Les guidances sont des aides qui permettent d'augmenter la probabilité d'une réponse correcte d'un individu quand les antécédents ordinaires.

IV.1 Distinction

On va donc faire un tour sur différents référentiels, matrices, accords, lois. Et on va essayer de les faire coller ?

Qu'est-ce qu'on a : colorado, RGESN, IA Risk, IA Frugal, UNESCO, OCDE, https://ref-ia.isit-europe.org/


VI Ia dépende de l'humain

-----

Universal Paperclip
Répondre aux demandes des humains : les images ne sont pas éthiques, pas poli, pas de moral.
=> réponde d'une IA sur l'éthique

https://www.zulma.fr/livre/contre-atlas-de-lintelligence-artificielle/
https://cafeia.org/index.php/qu-est-ce-que-l-ia/

https://www.qqf.fr/infographie/comment-etre-plus-malin-que-son-telephone/

https://greentechinnovation.fr/storage/V3-Livre-blanc-1.pdf
https://www.laquadrature.net/donner/

Safety Institute
https://www.aisi.gov.uk/ 

Colorado 
https://coag.gov/app/uploads/2024/09/09.10.2024-AI-Pre-Rulemaking-Considerations-for-the-ADAI-1.pdf

IA Risks
https://docs.google.com/spreadsheets/d/1evwjF4XmpykycpeZFq0FUteEAt7awx2i2oE6kMrV_xE/copy
https://cdn.prod.website-files.com/669550d38372f33552d2516e/66bc918b580467717e194940_The%20AI%20Risk%20Repository_13_8_2024.pdf
https://www.actuia.com/actualite/ai-risk-repertory-le-mit-publie-un-referentiel-des-risques-lies-a-lia/

OCDE
https://wp.oecd.ai/app/uploads/2022/02/Classification-2-pager-1.pdf

> Pour Henri Farrell, il y a là une caractéristique problématique de l’IA : « plus une caractéristique culturelle est inhabituelle, moins elle a de chances d’être mise en évidence dans la représentation de la culture par un grand modèle ». Pour Farrell, ce constat contredit les grands discours sur la capacité d’innovation distribuée de l’IA. Au contraire, l’IA nous conduit à un aplatissement, effaçant les particularités qui nous distinguent, 

>« Lorsque les ensembles de données ne sont pas mis à disposition pour examen, ou lorsqu’ils sont d’une taille insondable, il devient très difficile de vérifier si ces ensembles de données blanchissent la propriété intellectuelle d’autrui ou utilisent commercialement des données qui ne devraient pas l’être »

> Contrairement à son apport dans le monde logiciel, l’ouverture de l’IA, elle, repose sur un ensemble de couches plus complexes, dont les modalités d’ouverture et de transparence minimales ne sont pas construites.

https://www.ibm.com/blog/10-ai-dangers-and-risks-and-how-to-manage-them/

https://builtin.com/artificial-intelligence/risks-of-artificial-intelligence

    Automation-spurred job loss
    Deepfakes
    Privacy violations
    Algorithmic bias caused by bad data
    Socioeconomic inequality
    Market volatility
    Weapons automatization
    Uncontrollable self-aware AI



    Quelques référentiels existent concernant l'IA : L'IA Frugale, le RGESN, Recommandation éthiques de l'UNESCO, La matrice IA Risks... On va décortiquer quelques textes et critères afin de se familiariser avec les critères éthiques.

    La question éthique est centrale dans les accords internationaux pour développer des projets avec de l'IA, mais en évitant les fraudes ou mésusages. En effet, le respect des droits humains est considéré comme fondamental à l'ONU.

    Qu'est-ce qui se joue dans ces accords, sur quelle base sont écrits les critères de respects éthiques, quels sont les enjeux de la connaître ou de les appliquer...?
  
    Discutons simplement de ce qui se joue quand on parle de volonté de contrôler l'usage de l'IA.




