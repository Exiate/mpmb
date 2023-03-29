/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Artificer, called "Demolitionist"
				This subclass has been made by GM Binder
	Code by:	https://github.com/Exiate
	Date:		2023/03/28 (sheet v13.0.0beta15)
*/

var iFileName = "Demolitionist.js";
RequiredSheetVersion(13);

SourceList["UA:PDF"] = {
	name : "Demolitionist",
	abbreviation : "UA:PDF",
	group : "Reddit/r/UnearthedArcana",
	url : "https://drive.google.com/file/d/1-rInVC6FNGl3zU26lrcxvHDEejvT2n4u/view",
	date : "2023/03/28"
};

// New Artificer Infusions
AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Magic Bomb (prereq: level 6 artificer)", {
	name : "Magic Bomb",
	source : ["UA:PDF"],
	limfeaname : "Explosives Recovery",
	usages : 1,
	recovery : "short rest",
	description : desc([
		"You infuse implosive power into an object which you can throw. As an action, you or any creature holding the Magic Bomb can throw it up to 60 feet away. Upon collision with any object or creature the magic bomb detonates affecting all creatures, objects, and structures in 20 foot radius. Each creature in this radius must make a Constitution save taking 2d6 thunder damage and 2d6 force damage and be pulled up to 10 feet towards where the magic bomb landed on a failed save or half as much damage and not pulled on a successful save. Objects & structures take double damage, and objects that aren't being held automatically fail this saving throw and fly to the center of the implosion.",
		"At 11th level the damage increases to 3d6 thunder and 3d6 force, and 17th to 4d6 thunder and 4d6 force.",
		"You make a number of magic bombs equal to half your proficiency bonus rounded up, and at the conclusion of a short rest you can remake 1 magic bomb and 1 advanced explosive if you are a Demolitionist."
	]),
	prereqeval : function(v) { return classes.known.artificer.level >= 6; },
	magicitemsAdd : ["Magic Bomb"]
});

//Add Magic Bomb to Magic Items List
MagicItemsList["Magic Bomb"] = {
	name : "Magic Bomb",
	source : ["UA:PDF"],
	type : "ranged",
	limfeaname : "Magic Bomb",
	usages : [1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3],
	recovery : "long rest",
		descriptionFull : desc([
		"You infuse implosive power into an object which you can throw. As an action, you or any creature holding the Magic Bomb can throw it up to 60 feet away. Upon collision with any object or creature the magic bomb detonates affecting all creatures, objects, and structures in 20 foot radius. Each creature in this radius must make a Constitution save taking 2d6 thunder damage and 2d6 force damage and be pulled up to 10 feet towards where the magic bomb landed on a failed save or half as much damage and not pulled on a successful save. Objects & structures take double damage, and objects that aren't being held automatically fail this saving throw and fly to the center of the implosion.",
		"At 11th level the damage increases to 3d6 thunder and 3d6 force, and 17th to 4d6 thunder and 4d6 force.",
		"You make a number of magic bombs equal to half your proficiency bonus rounded up, and at the conclusion of a short rest you can remake 1 magic bomb and 1 advanced explosive if you are a Demolitionist."
	]),
	description : desc([
		"You create a number of Magic Bombs equal to your Proficiency Bonus divided by two rounded up. They deal 2d6 Thunder and 2d6 Force damage in a 20ft radius. This damage increases to 3d6 each at 11th, and 4d6 each at 17th level."
	])
};

//Add Magic Bomb to Weapons list to show damage, saves, details etc.
WeaponsList["magic bomb"] = {
	name : "Magic Bomb",
	source : ["UA:PDF"],
	regExpSearch : /^(?=.*magic)(?=.*bomb).*$/i,
	type : "AlwaysProf",
	ability : 4,
	abilitytodamage : false,
	damage : ['C', 6],
	range : "60ft(20ft)",
	defaultExcluded : false,
	description : "Thunder and Force; Vs.Con",
	list : "ranged",
	dc : true
};

//Add Basic Explosive to Weapons List
WeaponsList["basic explosive"] = {
	name : "Basic Explosive",
	source : ["UA:PDF"],
	regExpSearch : /^(?=.*basic)(?=.*explosive).*$/i,
	type : "AlwaysProf",
	ability : 4,
	abilitytodamage : false,
	damage : ['C', 6],
	range : "60ft(5ft)",
	defaultExcluded : false,
	description : "Slashing, Piercing, Bludgeoning, Fire or Thunder Damage; Vs.Dex",
	list : "ranged",
	dc : true,
};

//Add Advanced Explosive to Weapons List
WeaponsList["advanced explosive"] = {
	name : "Advanced Explosive",
	source : ["UA:PDF"],
	regExpSearch : /^(?=.*advanced)(?=.*explosive).*$/i,
	type : "AlwaysProf",
	ability : 4,
	abilitytodamage : false,
	damage : ['Q', 6],
	range : "60ft(10ft)",
	defaultExcluded : false,
	description : "Slashing, Piercing, Bludgeoning, Fire or Thunder Damage; Vs.Dex",
	list : "ranged",
	dc : true,
};

AddSubClass("artificer", "demolitionist", {
	regExpSearch : /^(?=.*(artificer))(?=.*\b(demo|explosive|bomb)\b).*$/i,
	subname : "Demolitionist",
	source : ["UA:PDF", 0],
	spellcastingExtra : ["magnify gravity", "thunderwave", "immovable object", "shatter", "melf's minute meteors", "pulse wave", "gravity sinkhole", "storm sphere", "destructive wave", "maelstrom"],
	features : {
		"subclassfeature3" : {
			name : "Tool Proficiency",
			source : ["KT:AA", 26],
			minlevel : 3,
			description : " [masons's tools, smith's tools]",
			toolProfs : ["Masons's tools", "Smith's tools"]
		},
		"subclassfeature3.1" : {
			name : "Packaged Explosives",
			source : ["UA:PDF", 0],
			minlevel : 3,
			limfeaname : "Advanced Explosives",
			usages : [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6],
			recovery : "long rest",
			description : desc([
				"At 3rd level, you learn to embrace your destructive nature. Over the course of a long rest you create a satchel which magically creates all the materials you need to create basic explosives. Due to the unstable nature of these basic explosives, they are rendered inert at the end of your next turn if they are not used. You may use your reaction to set off any and all explosives of your choice within 60 feet of you.",
                "Basic Explosives",
                "As an action you can withdraw or create from your satchel a Basic Explosive and then hurl it up to a point 60 feet away, it then explodes in a 5 foot radius, alternatively it rests in that space and does not explode. Creatures caught within this explosion may make a dexterity saving throw against your Artificer spell DC (8 + proficiency + intelligence modifier), taking 1d6 slashing, piercing, bludgeoning, fire, thunder damage, or any combination of those if you roll more than 1 damage die (your choice) on a failure, taking no damage on a success.",
                "Basic Explosives' damage increases by 1d6 when you reach certain levels in this class. At 5th level (2d6), 11th level (3d6), and 17th level (4d6) in this class.",
                "Advanced Explosives",
                "Additionally, at the end of each long rest you can create a number of Advanced Explosives equal to your proficiency modifier. These advanced explosives remain active until you use this feature again.",
                "As an action you can withdraw from your satchel an Advanced Explosive and then hurl it up to a point 60 feet away, it then explodes in a 10 foot radius. Creatures caught within this explosion may make a dexterity saving throw against your Artificer spell DC (8 + proficiency + intelligence modifier), taking 3d6 slashing, piercing, bludgeoning, fire, thunder damage, or any combination of those (your choice) on a failure, or half as much on a successful one.",
                "The Advanced Explosives damage increases by 1d6 when you reach 5th level (4d6), 11th level (5d6), and 17th level (6d6) in this class.",
                "In addition to the damage for your Advanced Explosives, select one of the following options as an added effect.",
                "Creatures in the radius of this explosion must make a Strength Saving Throw or be pulled towards the center of the explosion, ending this forced movement in the closest empty space.",
                "Creatures in the radius of this explosion must make a Strength Saving Throw or be pushed 15 feet away from the center of the explosion and knocked prone.",
                "Creatures must make a Constitution Saving throw or become deafened or blinded (your choice). This effect lasts for a number of rounds equal to your half your proficiency bonus rounded down. Creatures affected by this feature may repeat the saving throw at the end of their turn, ending the effect on a success."
			])
		},
		"subclassfeature5" : {
			name : "Homebrew Powder",
			source : ["UA:PDF", 0],
			minlevel : 5,
			description : desc([
				"Starting at 5th level, you have learned a unique blend of ingredients to create more potent explosions. All Artificer spells & abilities that can affect an area deal 1d4 additional damage. This additional damage increases to 2d4 at 11th level, and 3d4 at 17th.",
				"Additionally all Artificer spells spells and abilities that affect an area now deal “Siege Damage” to objects and structures.",
				"Siege Damage: Damage dealt to objects and structures is doubled by effects and attacks which deal Siege damage."
			]),
			calcChanges : {
				atkAdd : ["if (classes.known.artificer && classes.known.artificer.level > 4 && ((/basic/i).test(WeaponName) || (/advanced/i).test(WeaponName))) {fields.Description += (fields.Description ? '; ' : '') + 'Homebrew Powder: +' + (classes.known.artificer.level < 11 ? 1 : classes.known.artificer.level < 17 ? 2 : 3) + 'd4 damage'};"]
			}
		},
		"subclassfeature9" : {
			name : "Bigger Explosives", 
			source : ["UA:PDF", 0],
			minlevel : 9,
			description : desc([
				"Starting at 9th level your Basic and Advanced Explosives can have their radius increased by an additional 5 feet.",
				"Additionally, you now create and hurl a Basic Explosive as bonus action or as an action, but you are only able to use one Basic Explosive per round."
			]),
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : ["if (classes.known.artificer && classes.known.artificer.level > 8 && (/basic/i).test(WeaponName)) {fields.Range = (fields.Range ? '' : '') + '60ft(10ft)'};"]
			}
		},
		"subclassfeature9.1" : {
			name : "Bigger AExplosives 2", 
			source : ["UA:PDF", 0],
			minlevel : 9,
			description : desc([
				"Starting at 9th level your Basic and Advanced Explosives can have their radius increased by an additional 5 feet.",
				"Additionally, you now create and hurl a Basic Explosive as bonus action or as an action, but you are only able to use one Basic Explosive per round."
			]),
			calcChanges : {
				atkAdd : ["if (classes.known.artificer && classes.known.artificer.level > 8 && (/advanced/i).test(WeaponName)) {fields.Range = (fields.Range ? '' : '') + '60ft(15ft)'};"]
			}
		},
		"subclassfeature15" : {
			name : "Bringing Down the House",
			source : ["UA:PDF", 0],
			minlevel : 15,
			description : desc([
				"Starting at 15th level you mastered the art of bringing down structures. Over the course of 1 hour you can rig a structure no more than 50 ft cube or 8 hours to bring down a structure no more than a 500 ft cube, to implode causing no damage to surrounding structures. The course of this work includes exploring the building finding key structural pieces to target.",
				"If you do not care about collateral damage, or are pressed for time, a more 'spectacular' approach can be utilized. Over the course of 10 minutes you can rig a structure no more than 50 ft cube or 1 hour to bring down a structure no more than a 500 ft cube, to explode violently damaging nearby structures, creatures, and objects as if a trebuchet was fired at them. The location for the debris 'targeting' is entirely upto the gm. The course of this work includes exploring the building finding at least one key structural pieces to target, but primarily just a heaping pile of explosives towards the center.",
				"Additionally, Artificer spells and abilities that have an area of effect have their radius increased by up to 5 feet, or up to 5 additional feet on a side for 'cubes'. Using this ability, you choose the radius or size for your abilities and spells upon use."
			]),
		}
	}
});
