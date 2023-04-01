/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Warlock, called "The Dearly Departed"
				This subclass has been made by /u/FrenchTech16
	Code by:	https://github.com/Exiate
	Date:		2023-03-31 (sheet v13.0.0beta15)
*/

var iFileName = "The Dearly Departed.js";
RequiredSheetVersion(13);

SourceList["UA:PDF"] = {
	name : "The Dearly Departed",
	abbreviation : "UA:PDF",
	group : "Reddit/r/UnearthedArcana",
	url : "https://koboldpress.com/kpstore/product/deep-magic-for-5th-edition/",
	date : "2023/03/31"
};

AddSubClass("warlock", "the dearly departed", {
	regExpSearch : /^(?=.*(warlock))(?=.*\b(dearly|departed|spirit|soul)\b).*$/i,
	subname : "The Dearly Departed",
	source : ["UA:PDF"],
    spellcastingExtra : ["false life", "sanctuary", "gentle repose", "warding bond", "life transference", "speak with dead", "banishment", "death ward", "antilife shell", "raise dead"],
    features : {
		"subclassfeature1" : {
			name : "School Mastery",
			source : ["UA:PDF"],
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
		"subclassfeature1" : {
			name : "Channel Energy",
			source : ["UA:PDF"],
			minlevel : 1,
			description : desc([
				"After making a successful saving throw against a spell of a level no higher than my sorcer level, I can negate the effect by absorbing the energy of the spell and regain a number of expended spell slots equal to the level of the spell. I can regain no more than twice my sorcerer level in spells slots per long rest."
			]),
			action : ["reaction", "Channel Energy"],
		},
        "subclassfeature2" : {
			name : "Metamagic Mastery",
			source : ["UA:PDF"],
			minlevel : 6,
			description : desc([
				"Metamagic options used on spells of my associated school costs 1 less sorcery point. If the option would normally cost 1 sorcery point, it costs .5 instead."
			]),
		},
        "subclassfeature3" : {
			name : "Power of the Elite",
			source : ["UA:PDF"],
			minlevel : 14,
			description : " [4 sorcery points]" + desc([
				"For 1 minute, I double my proficiency bonus on any Charisma-based checks made against others of my race, and I have advantage on those checks. Any creatures not of my race have disadvantage on saving throws against spells I cast. Additionally, I add my Charisma bonus to the damage of any spells I cast. Once I use this feature, I must finish a long rest before I can use it again."
			]),
		},
        "subclassfeature4" : {
			name : "Inexorable Might",
			source : ["UA:PDF"],
			minlevel : 18,
			description : " [2 sorcery points]" + desc([
				"I can spend 2 sorcery points when I cast a spell. If the spell deals damage, I can roll twice for damage and use the higher result. If the spell does not deal damage, the targets of the spell have disadvantage on the saving throw against it."
			]),
		}
    }
});