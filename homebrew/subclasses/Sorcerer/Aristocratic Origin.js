/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Sorcerer, called "Aristocratic"
				This is taken from the 'Kobold Press - Deep Magic' created by Dan Dillon, Jeff Lee, and Chris Harris
	Code by:	/u/Exiate
	Date:		2022-12-05
*/

var iFileName = "Aristocratic Origin.js";
RequiredSheetVersion(13);

SourceList["KDM"] = {
	name : "Kobold Press - Deep Magic",
	abbreviation : "KDM",
	group : "Kobold Press",
	url : "https://koboldpress.com/kpstore/product/deep-magic-for-5th-edition/",
	date : "2020/01/01"
};

AddSubClass("sorcerer", "aristocratic", {
	regExpSearch : /^(?=.*(sorcerer|soradin))(?=.*\b(aristocrat|aristocratic|ristocrat)\b).*$/i,
	subname : "aristocratic",
	source : ["KDM", 146],
	fullname : "aristocratic",
	features : {
		/* "subclassfeature1" : {
			name : "School Mastery",
			source : ["KDM", 146],
			minlevel : 1,
			description : desc([
				"I learn Produce Flame, Detect Magic, and Identify in addition to my spells known",
				"As an action, I can ignite a flammable object with the touch of my hand"
			]),
			action : ["action", " (ignite)"],
			spellcastingBonus : {
				name : "Bonus Spells",
				spells : ["produce flame", "detect magic", "identify"],
				selection : ["produce flame", "detect magic", "identify"],
				times : 3
			}
		},
        */
        "subclassfeature1.1" : {
			name : "Channel Energy",
			source : ["KDM", 146],
			minlevel : 1,
			description : desc([
				"After making a successful saving throw against a spell of a level no higher than my sorcer level, I can negate the effect by absorbing the energy of the spell and regain a number of expended spell slots equal to the level of the spell. I can regain no more than twice my sorcerer level in spells slots per long rest."
			]),
			action : ["reaction", "Channel Energy"],
		},
        "subclassfeature2" : {
			name : "Metamagic Mastery",
			source : ["KDM", 147],
			minlevel : 6,
			description : desc([
				"Metamagic options used on spells of my associated school costs 1 less sorcery point. If the option would normally cost 1 sorcery point, it costs .5 instead."
			]),
		},
        "subclassfeature3" : {
			name : "Power of the Elite",
			source : ["KDM", 147],
			minlevel : 14,
			description : " [4 sorcery points]" + desc([
				"For 1 minute, I double my proficiency bonus on any Charisma-based checks made against others of my race, and I have advantage on those checks. Any creatures not of my race have disadvantage on saving throws against spells I cast. Additionally, I add my Charisma bonus to the damage of any spells I cast. Once I use this feature, I must finish a long rest before I can use it again."
			]),
		},
        "subclassfeature4" : {
			name : "Inexorable Might",
			source : ["KDM", 147],
			minlevel : 18,
			description : " [2 sorcery points]" + desc([
				"I can spend 2 sorcery points when I cast a spell. If the spell deals damage, I can roll twice for damage and use the higher result. If the spell does not deal damage, the targets of the spell have disadvantage on the saving throw against it."
			]),
		}
    }
});