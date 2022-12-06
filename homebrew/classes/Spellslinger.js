/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Class
	Effect:		This script adds the class called "Spellslinger"
    Created by: Mitchell Turnbull
    Code by:	/u/Exiate
	Date:		2022-12-05
	Please support the creator of this content (DawnforgedCast) and download their material from their website: http://dawnforgedcast.org/
*/

/*	-IMPORTANT NOTICE-
	This code has not been corrected by MPMB to his usual rigid standards. He only corrected errors in the code, but hasn't compared the content to the original source.
	Things will not look as polished as with the other pre-written code that you can find in the same folder. For example, descriptions for class features will overflow their allowed space.
	Also, automation for spell selection isn't fully functional for several of the subclass features.
*/

var iFileName = "Spellslinger.js";
RequiredSheetVersion(13);

//first make the sheet know which spells are spellslinger spells
[//level 0 (cantrips)
    "blade ward", "friends", "guidance", "light", "prestidigitation", "resistance", "true strike",

    //level 1
    "absorb elements", "animal friendship", "armor of agathys", "arms of hadar", "comprehend languages", "cure wounds", "detect evil and good", "detect magic", "detect poison and disease", "disguise self", "expeditious retreat", "false life", "feather fall", "grease", "identify", "illusory script", "jump", "longstrider", "mage armor", "protection from evil and good", "speak with animals", "entangle", "faerie fire", "fog", "cloud",

    //level 2
    "aid", "alter self", "barkskin", "blur", "darkvision", "enhance ability", "enlarge/reduce", "find traps", "invisibility", "lesser restoration", "levitate", "locate animals or plants", "locate object", "mirror image", "pass without trace", "protection from poison", "see invisibility", "spider climb", "web", "darkness", "silence", "spike growth", "zone of truth",

    //level 3
    "blink", "elemental weapon", "feign death", "fly", "gaseous form", "haste", "meld into stone", "nondetection", "protection from energy", "remove curse", "tongues", "water breathing", "water walk", "hungering void", "sleet storm", "stinking cloud", "wind wall",

    //level 4
    "death ward", "fire shield", "freedom of movement", "greater invisibility", "locate creature", "polymorph", "stoneskin", "black tentacles", "hallucinatory terrain", "storm sphere", "wall of fire",

    //level 5
    "greater restoration", "legend lore", "telekinesis", "treestride",

    //level 6
    "find the path", "globe of invulnerability", "heal", "investiture of flame", "investiture of ice", "investiture of stone", "investiture of wind", "primordial ward", "true seeing", "wind walk",

    //level 7
    "etherealness", "plane shift", "regenerate", "simulacrum"
].forEach( function (s) {
    if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("spellslinger") === -1) SpellsList[s].classes.push("spellslinger");
});

/*      Spells need to be set before moving on */