/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Artificer, called "Demolitionist"
				This subclass has been made by /u/VALOR DM
	Code by:	Exiate
	Date:		2023/03/25 (sheet v13.0.0beta15)
*/

var iFileName = "Demolitionist.js";
RequiredSheetVersion(13);

SourceList["UA:PDF"] = {
	name : "Demolitionist",
	abbreviation : "UA:PDF",
	group : "Reddit/r/UnearthedArcana",
	url : "https://drive.google.com/file/d/1htXDI9SaVEoVEKubZM71DuqPdECzwyCq/view",
	date : "2023/03/25"
};

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
	description : "Slashing, Piercing, Bludgeoning, Fire or Thunder Damage",
	list : "ranged",
	dc : true,
},

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
	description : "Slashing, Piercing, Bludgeoning, Fire or Thunder Damage",
	list : "ranged",
	dc : true,
},

AddSubClass("Artificer", "Demolitionist", {
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
                "Creatures must make a Constitution Saving throw or become deafened or blinded (your choice). This effectlasts for a number of rounds equal to your half your proficiency bonus rounded down. Creatures affected by this feature may repeat the saving throw at the end of their turn, ending the effect on a success."
			])
		},
		"subclassfeature5" : {
			name : "Homebrew Powder",
			source : ["UA:PDF", 0],
			minlevel : 5,
			description : desc([
				"Starting at 5th level, you have learned a unique blend of ingredients to create more potent explosions. All Artificer spells & abilities that can affect an area deal 1d4 additional damage. This additional damage increases to 2d4 at 11th level, and 3d4 at 17th.",
				"Additionally all Artificer spells spells and abilities that affect an area now deal “Siege Damage” to objects andstructures.",
				"Siege Damage: Damage dealt to objects and structures is doubled by effects and attacks which deal Siege damage."
			]),
			calcChanges : {
				atkAdd : ["if (classes.known.artificer && classes.known.artificer.level > 4 && ((/explosive/i).test(fields.Description) || (/explosive/i).test(WeaponName))) {fields.Description += (fields.Description ? '; ' : '') + 'Homebrew Powder: +' + (classes.known.artificer.level < 11 ? 1 : classes.known.artificer.level < 17 ? 2 : 3)} + 'd4 damage';"]
			}
		},
		//"subclassfeature9" : {
		//	name : "Hunter's Instincts", 
		//	source : ["UA:PDF", 0],
		//	minlevel : 9,
		//	description : desc([
		//		"Your instincts are honed to the dangers around you, protecting you from ambush. You gain the following benefits:",
		//		"• You can add your Wisdom modifiers to your initiative rolls.",
		//		"• You may never be surprised, and may always act in a surprise round of combat.",
		//		"• If you roll initiative and have no remaining uses of your Wild shape remaining, you regain one use of your Wild Shape."
		//	]),
		//	//addmod : { type : "ability", field : "Init", mod : "Wis", text : "I can add my Wisdom modifier to initiative rolls." }
		//	initiative: "if (classes.known.artificer && classes.known.artificer.level >= 10) { addMod(What('Wis'), 'Initiative'); };"
		//},
		//"subclassfeature15" : {
		//	name : "Apex",
		//	source : ["UA:PDF", 0],
		//	minlevel : 15,
		//	description : desc([
		//		"Sharpened blades and Arrows pose little threat to you as you adopt the mantle of an apex predator. You gain the following benefits:",
		//		"• You are immune to Poison damage and the Poisoned condition. You are also immune to disease.",
		//		"• While under the effects of your Primal Might feature, you gain resistance to bludgeoning, piercing and slashing damage."
		//	]),
		//	savetxt : { immune : ["poison", "disease"] },
		//	dmgres : [ 
		//		"Bludgeoning",
		//		"Piercing",
		//		"Slashing"
		//	],
		//}
	}
});
