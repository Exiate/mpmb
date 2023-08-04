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
	Date:		2023/08/04 (sheet v13.0.0beta15)
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
	source : ["UA:PDF", 0],
	features : {
		"subclassfeature3.1" : {
			name : "Naturalist Magic",
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
		"subclassfeature3.2" : {
			name : "Herbal Brewer",
			source : ["UA:PDFF", 0],
			minlevel : 3,
			description : desc([
				"Your time spent studying and living in nature has made you an expert in using nature to heal others. You gain proficiency in the herbalism kit if you haven't already. You also gain proficiency in one of the following skills: Medicine, Nature, or Survival. In addition, once a day, as part of a short or long rest, you can spend 1 hour foraging and use your herbalism kit to create a potion of healing. You can create a number of these potions equal to your proficiency bonus, which last until the end of your next long rest. When you reach 9th level in this class, you can expend three uses of this feature to create a potion of superior healing."
			]),
			limfeaname : "Herbal Brewer",
			usages : [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6],
			recovery : "long rest",
            toolProfs : ["Herbalism kit"],
            skillstxt : "Choose one from Medicine, Nature, or Survival",
        },
        "subclassfeature3.3" : {
			name : "Wildlife Whisperer",
			source : ["UA:PDFF", 0],
			minlevel : 3,
			description : desc([
				"You have the ability to communicate with creatures of the natural world. As an action, you can choose a beast or plant creature you can see within 30 feet of you. The target must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you for up to 1 hour or until you or your companions do anything harmful to it. You can dismiss the effect early as a bonus action. While the creature is charmed in this way, it regards you as a friendly companion and you gain the ability to comprehend and telepathically communicate with each other. When this effect ends, the creature knows it was charmed by you. Once you use this feature, you can't use it again until you finish a short or long rest."
			]),
			limfeaname : "Wildlife Whisperer",
			action : ["action", ""],
			recovery : "short rest"
		},
		"subclassfeature7.1" : {
			name : "Natural Awareness",
			source : ["UA:PDFF", 0],
			minlevel : 7,
			description : desc([
				"Your keen awareness of the natural world allows you to tap into its power. You can cast each of the spells in your Naturalist Magic feature once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest."
			]),
			recovery : "long rest"
		},
		"subclassfeature11.1" : {
			name : "Bestial Connection",
			source : ["UA:PDFF", 0],
			minlevel : 11,
			description : desc([
				"You can call upon the animals of nature to aid you: you know summon beast. It doesn't count against the number of ranger spells you know, and you can cast it without a material component. You can also cast it once without a spell slot, and you regain the ability to do so when you finish a long rest. Whenever you start casting the spell you can modify it so that it doesn't require concentration. If you do so, the spell's duration becomes 1 minute for that casting."
			]),
			spellcastingBonus : {
				name : "Bestial Connection",
				spells : ["summon beast"],
			},
			recovery : "long rest"
		},
		"subclassfeature15.1.1" : {
			name : "Nature's Concoction",
			source : ["UA:PDFF", 0],
			minlevel : 15,
			description : desc([
				"The herbal potions you create have increased efficacy. When you create a potion of healing with your Herbal Brewer feature, you can choose from the following damage types: acid, cold, fire, lightning, thunder. A creature that ingests the potion gains resistance to the chosen damage type for 1 hour."
			])
		}
	}
})

AddSubClass("rangerua", "The Naturalist", {
	regExpSearch : /^(?=.*(ranger))(?=.*\b(naturalist|nature|natural)\b).*$/i,
	subname : "The Naturalist",
	source : ["UA:PDF", 0],
	features : {
		"subclassfeature3.1" : {
			name : "Naturalist Magic",
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
		"subclassfeature3.2" : {
			name : "Herbal Brewer",
			source : ["UA:PDFF", 0],
			minlevel : 3,
			description : desc([
				"Your time spent studying and living in nature has made you an expert in using nature to heal others. You gain proficiency in the herbalism kit if you haven't already. You also gain proficiency in one of the following skills: Medicine, Nature, or Survival. In addition, once a day, as part of a short or long rest, you can spend 1 hour foraging and use your herbalism kit to create a potion of healing. You can create a number of these potions equal to your proficiency bonus, which last until the end of your next long rest. When you reach 9th level in this class, you can expend three uses of this feature to create a potion of superior healing."
			]),
			limfeaname : "Herbal Brewer",
			usages : [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6],
			recovery : "long rest",
            toolProfs : ["Herbalism kit"],
            skillstxt : "Choose one from Medicine, Nature, or Survival",
        },
        "subclassfeature3.3" : {
			name : "Wildlife Whisperer",
			source : ["UA:PDFF", 0],
			minlevel : 3,
			description : desc([
				"You have the ability to communicate with creatures of the natural world. As an action, you can choose a beast or plant creature you can see within 30 feet of you. The target must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you for up to 1 hour or until you or your companions do anything harmful to it. You can dismiss the effect early as a bonus action. While the creature is charmed in this way, it regards you as a friendly companion and you gain the ability to comprehend and telepathically communicate with each other. When this effect ends, the creature knows it was charmed by you. Once you use this feature, you can't use it again until you finish a short or long rest."
			]),
			limfeaname : "Wildlife Whisperer",
			action : ["action", ""],
			recovery : "short rest"
		},
		"subclassfeature7.1" : {
			name : "Natural Awareness",
			source : ["UA:PDFF", 0],
			minlevel : 7,
			description : desc([
				"Your keen awareness of the natural world allows you to tap into its power. You can cast each of the spells in your Naturalist Magic feature once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest."
			]),
			recovery : "long rest"
		},
		"subclassfeature11.1" : {
			name : "Bestial Connection",
			source : ["UA:PDFF", 0],
			minlevel : 11,
			description : desc([
				"You can call upon the animals of nature to aid you: you know summon beast. It doesn't count against the number of ranger spells you know, and you can cast it without a material component. You can also cast it once without a spell slot, and you regain the ability to do so when you finish a long rest. Whenever you start casting the spell you can modify it so that it doesn't require concentration. If you do so, the spell's duration becomes 1 minute for that casting."
			]),
			spellcastingBonus : {
				name : "Bestial Connection",
				spells : ["summon beast"],
			},
			recovery : "long rest"
		},
		"subclassfeature15.1.1" : {
			name : "Nature's Concoction",
			source : ["UA:PDFF", 0],
			minlevel : 15,
			description : desc([
				"The herbal potions you create have increased efficacy. When you create a potion of healing with your Herbal Brewer feature, you can choose from the following damage types: acid, cold, fire, lightning, thunder. A creature that ingests the potion gains resistance to the chosen damage type for 1 hour."
			])
		}
	}
});
