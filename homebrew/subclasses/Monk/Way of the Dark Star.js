/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Monk, called "Way of the Dark Star"
				This subclass has been made by /u/DarklingNinja
	Code by:	Exiate
	Date:		2022-12-4 (sheet v13.0.0beta15)
*/

var iFileName = "Way of the Dark Star.js";
RequiredSheetVersion(13);

SourceList["UA:PDF"] = {
	name : "Way of the Dark Star",
	abbreviation : "UA:PDF",
	group : "Reddit/r/UnearthedArcana",
	url : "https://i.redd.it/rodb7l5gmvc91.jpg",
	date : "2022/12/04"
};

AddSubClass("monk", "Way of the Dark Star", {
	regExpSearch : /^(?=.*(monk))(?=.*\b(way|of|the|dark|star)\b).*$/i,
	subname : "Way of the Dark Star",
	source : ["UA:PDFF", 0],
	features : {
		"subclassfeature1" : {
			name : "Palm of the Dark Star",
			source : ["UA:PDFF", 0],
			minlevel : 3,
			description : desc([
				"Starting at the 3rd level when you choose this tradition, you are able to extend the reach of your attacks. When you do, Orbs of dark energy spring forth from your fist. When you make an ·unarmed Strike, you can instead make a ranged attack against a target you can see within 60 feet. On a hit the creature takes force damage instead of bludgeoning."
			]),
			calcChanges : {
				atkAdd : ["if (classes.known.monk && classes.known.monk.level > 2 && ((/unarmed/i).test(fields.Description) || (/unarmed/i).test(WeaponName))) {fields.Mod = (fields.Mod ? '' : '') + '2'} {fields.Range = (fields.Range ? '' : '') + '60ft'} {fields.Damage_Type = (fields.Damage_Type ? '' : '') + 'Force'};"]
			},
		},
		"subclassfeature1.1" : {
			name : "Devour Energy",
			source : ["UA:PDFF", 0],
			minlevel : 3,
			description : " [2 ki points]" + desc([
				"Starting at the 3rd level you can use the power of the void to absorb energy. When you are subject to damage from an attack that deals acid, cold, fire, force, lightning, necrotic, poison, or thunder damage you may use your reaction to expend 2 Ki points to half the damage taken from that damage type on the attack. In addition, on your next turn all your attacks deal an additional 1d4 damage of the same type of damage as the one you halved."
			]),
			action : ["reaction", ""]
		},
		"subclassfeature2" : {
			name : "Fists of Consuming Void",
			source : ["UA:PDFF", 0],
			minlevel : 6,
			description : desc([
				"Beginning at the 6th level you can harness the power of the void. As a bonus action, you condense gravity into orbs of force in your hands. For the next minute spheres of swirling void cover your hands. During this time, you gain the following benefits. ",
				"- All your unarmed attacks deal an additional 1d4 damage force damage. This damage increases to 1d8 at 11th level and 1d12 at 17th level. This damage is also added to your palm of the dark star attacks. ",
				"- Creatures of your choice within 5ft must make a strength saving throw against your ki DC save in order to move away from you. At 17th level, the range of this ability increases to 10 ft. ",
				"- You gain an additional +2 AC. This increases to +3 at 11th level and +4 at 17th level. ",
				"You can use this ability a number of times equal to your proficiency modifier. When you finish a long, you regain any expended uses."
			]),
			additional : levels.map(function (n) {
				return n < 6 ? "" : "+1d" + (n < 11 ? 4 : n < 17 ? 8 : 12) + " damage";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.monk && classes.known.monk.level > 5 && ((/unarmed/i).test(fields.Description) || (/unarmed/i).test(WeaponName))) {fields.Description += (fields.Description ? '; ' : '') + 'Consuming Void: +1d' + (classes.known.monk.level < 11 ? 4 : classes.known.monk.level < 17 ? 8 : 12)} + ' damage';"]
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
	}
});
