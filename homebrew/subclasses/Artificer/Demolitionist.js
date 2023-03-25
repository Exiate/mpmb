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
			]),
            WeaponsList : ["basic explosive"] = {
                name : "Basic Explosive",
                defaultExcluded : false,
                damage : [1, 6],
                list : "ranged",
                range : "60ft",
                dc : true,
                type : "AlwaysProf",
                description : "Slashing, Piercing, Bludgeoning, Fire or Thunder Damage",
            },
            calcChanges : {
				atkAdd : ["if (classes.known.artificer && classes.known.artificer.level > 2 && ((/unarmed/i).test(fields.Description) || (/unarmed/i).test(WeaponName))) {fields.Damage = (fields.damage ? '' : '') + (classes.known.artificer.level > 4 < 11 ? 2 : classes.known.artificer.level > 10 < 17 ? 3 : 4)} + 'd6';"]
			},
            WeaponsList : ["advanced explosive"] = {
                name : "Advanced Explosive",
                defaultExcluded : false,
                damage : [3, 6],
                list : "ranged",
                range : "60ft",
                dc : true,
                type : "AlwaysProf",
                description : "Slashing, Piercing, Bludgeoning, Fire or Thunder Damage",
            },
            calcChanges : {
				atkAdd : ["if (classes.known.artificer && classes.known.artificer.level > 2 && ((/unarmed/i).test(fields.Description) || (/unarmed/i).test(WeaponName))) {fields.Damage = (fields.damage ? '' : '') + (classes.known.artificer.level > 4 < 11 ? 4 : classes.known.artificer.level > 10 < 17 ? 5 : 6)} + 'd6';"]
			}
		}
		//"subclassfeature5" : {
		//	name : "Untamed Trails",
		//	source : ["UA:PDF", 0],
		//	minlevel : 6,
		//	description : desc([
		//		"You gain a climbing and swimming speed equal to your walking speed."
		//	]),
		//	speed : { climb : {spd : "walk", enc : "walk"} },
		//	speed : { swim : {spd : "walk", enc : "walk"} }
		//},
		//"subclassfeature9" : {
		//	name : "Hunter's Instincts", 
		//	source : ["UA:PDF", 0],
		//	minlevel : 10,
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
		//	minlevel : 14,
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
