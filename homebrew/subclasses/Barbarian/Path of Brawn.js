/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Barbarian, called "Path of Brawn"
	Code by:	https://github.com/Exiate
	Date:		2023-08-08 (sheet v13.0.0beta15)
*/

var iFileName = "Path of Brawn.js";
RequiredSheetVersion(13);

SourceList["UA:PDF"] = {
	name : "Path of Brawn",
	abbreviation : "UA:PDF",
	group : "Reddit/r/UnearthedArcana",
	url : "unknown",
	date : "2023/08/08"
};

AddSubClass("barbarian", "Path of Brawn", {
	regExpSearch : /^(?=.*(barbarian))(?=.*\b(path|of|brawn|strength)\b).*$/i,
	subname : "Path of Brawn",
	source : ["UA:PDFF", 0],
	features : {
		"subclassfeature3" : {
			name : "Strength of Mountains",
			source : ["UA:PDFF", 0],
			minlevel : 3,
			description : desc([
				"While raging, you are able to wield a two-handed weapon in one hand. If wielding a two-handed weapon in each hand, your off-hand attack can be taken as part of your attack action. Strength increases by 1 to a max of 21."
			]),
			action : ["action", "Strength of Mountains"],
			scores : [1, 0, 0, 0, 0, 0],
			scoresMaximum : [21, 0, 0, 0, 0, 0]
		},
		"subclassfeature6" : {
			name : "Empowered Resistance",
			source : ["UA:PDFF", 0],
			minlevel : 6,
			description : desc([
				"While raging, you have resistance to all damage except psychic damage. Strength increases by 1 to a max of 22."
			]),
			dmgres : [["All -Psychic", "All -Psychic (rage)"]],
			eval : function() {
					processResistance(false, 'Barbarian: Rage', ClassList.barbarian.features.rage.dmgres);
				},
			scores : [1, 0, 0, 0, 0, 0],
			scoresMaximum : [22, 0, 0, 0, 0, 0]
		},
		"subclassfeature9" : {
			name : "Bounding Might",
			source : ["UA:PDFF", 0],
			minlevel : 9,
			description : desc([
				"Upon reaching 9th level, your physical strength increases your movement speed by 10ft. Additionally, you may take the dash action as a bonus action. Strength increases by 1 to a max of 23."
			]),
			speed : { allModes : "+10" },
			action : ["bonus action", "(Dash)"],
			scores : [1, 0, 0, 0, 0, 0],
			scoresMaximum : [23, 0, 0, 0, 0, 0]
		},
		"subclassfeature12" : {
			name : "Brutal",
			source : ["UA:PDFF", 0],
			minlevel : 12,
			description : desc([
				"While raging, and when using reckless attack, you may forgo any advantage received and take a -5 to hit. If you do and your attack hits, the hit is automatically counted as a critical strike. Strength increases by 1 to a max of 24."
			]),
			scores : [1, 0, 0, 0, 0, 0],
			scoresMaximum : [24, 0, 0, 0, 0, 0]
		},
		"subclassfeature20" : {
			name : "Indomitable",
			source : ["UA:PDFF", 0],
			minlevel : 20,
			description : desc([
				"At 20th level, Your max strength increases to 28."
			]),
			scoresMaximum : [28, 0, 0, 0, 0, 0]
		}
	}
});