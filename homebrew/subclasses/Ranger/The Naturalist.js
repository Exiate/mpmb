/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Ranger, called "The Naturalist"
				This subclass has been made by unknown.
	Code by:	https://github.com/Exiate
	Date:		2022-12-4 (sheet v13.0.0beta15)
*/

var iFileName = "The Naturalist.js";
RequiredSheetVersion(13);

SourceList["UA:PDF"] = {
	name : "The Naturalist",
	abbreviation : "UA:PDF",
	group : "Reddit/r/UnearthedArcana",
	url : "Unknown",
	date : "2023/05/26"
};

AddSubClass("ranger", "The Naturalist", {
	regExpSearch : /^(?=.*(ranger))(?=.*\b(naturalist|nature|natural)\b).*$/i,
	subname : "The Naturalist",
	source : ["UA:PDFF", 0],
	features : {
		"subclassfeature1" : {
			name : "Naturlist Magic",
			source : ["UA:PDF"],
			minlevel : 3,
			description : desc([
				"You learn the druidcraft cantrip if you haven't already. You also learn an additional spell when you reach certain levels in this class, as shown in the Naturalist Spells table. Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know."
			]),
			action : ["action", " (ignite)"],
			spellcastingBonus : {
				name : "Bonus Spells",
				spells : ["druidcraft"],
			},
            spellcastingExtra : ["sanctuary", "continual flame", "create food and water", "find greater steed", "awaken"]
		},
		"subclassfeature1.1" : {
			name : "Herbal Brewer",
			source : ["UA:PDFF", 0],
			minlevel : 3,
			description : desc([
				"Your time spent studying and living in nature has made you an expert in using nature to heal others. You gain proficiency in the herbalism kit if you haven't already. You also gain proficiency in one of the following skills: Medicine, Nature, or Survival, ",
                "In addition, once a day, as part of a short or long rest, you can spend 1 hour foraging and use your herbalism kit to create a potion of healing. You can create a number of these potions equal to your proficiency bonus, which last until the end of your next long rest. When you reach 9th level in this class, you can expend three uses of this feature to create a potion of superior healing."
			]),
			limfeaname : "Herbal Brewer",
			usages : [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6],
			recovery : "long rest",
            toolProfs : ["Herbalism kit"],
            skillstxt : "Choose one from Medicine, Nature, or Survival",
        },
		/*
        "subclassfeature1.2" : {
			name : "Wildlife Whisperer",
			source : ["UA:PDFF", 0],
			minlevel : 3,
			description : desc([
				"Beginning at the 6th level you can harness the power of the void. As a bonus action, you condense gravity into orbs of force in your hands. For the next minute spheres of swirling void cover your hands. During this time, you gain the following benefits. ",
				"- All your unarmed attacks deal an additional 1d4 damage force damage. This damage increases to 1d8 at 11th level and 1d12 at 17th level. This damage is also added to your palm of the dark star attacks. ",
				"- Creatures of your choice within 5ft must make a strength saving throw against your ki DC save in order to move away from you. At 17th level, the range of this ability increases to 10 ft. ",
				"- You gain an additional +2 AC. This increases to +3 at 11th level and +4 at 17th level. ",
				"You can use this ability a number of times equal to your proficiency modifier. When you finish a long rest, you regain any expended uses."
			]),
			limfeaname : "Fists of Consuming Void",
			//If Gestalt use
			usages : [2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6],
			//If NOT Gestalt
			//usages : [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6],
			recovery : "long rest",
			additional : levels.map(function (n) {
				return n < 6 ? "" : "+1d" + (n < 11 ? 4 : n < 17 ? 8 : 12) + " damage";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.monk && classes.known.monk.level > 5 && ((/unarmed/i).test(fields.Description) || (/unarmed/i).test(WeaponName))) {fields.Description += (fields.Description ? '; ' : '') + 'Consuming Void: +1d' + (classes.known.monk.level < 11 ? 4 : classes.known.monk.level < 17 ? 8 : 12) + ' damage'};"]
			}
		},
		"subclassfeature3" : {
			name : "Repulsion and Attraction",
			source : ["UA:PDFF", 0],
			minlevel : 11,
			description : desc([
				"Starting at the 11th level, when you hit a creature with an attack, you are able to force them to move. You can choose to push or pull that creature 10ft.",
				"Additionally, you can use the deflect missile ability on non-weapon ranged attacks. However, if you choose to use deflect missile this way; you cannot spend a ki point to make a ranged attack as part of the deflect missile ability."
			]),
		},
		"subclassfeature4" : {
			name : "Center  of Gravity",
			source : ["UA:PDFF", 0],
			minlevel : 17,
			description : desc([
				"Starting at the 17th level you can manipulate the gravitational forces around you. You gain a flying speed equal to your movement speed. When you are flying this way, you cannot be knocked prone. ",
				"With your mastery over the force of gravity, you can create a dark singularity. You can spend 12 ki points to cast the dark star spell at the 8th level. Wisdom is your spell casting ability for this spell."
			]),
			speed : { fly : {spd : "walk", enc : "walk"} },
		}
		*/
	}
});
