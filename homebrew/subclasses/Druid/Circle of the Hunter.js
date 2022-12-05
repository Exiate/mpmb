/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Druid, called "Circle of the Hunter"
				This subclass has been made by /u/VALOR DM
	Code by:	Exiate
	Date:		2022-12-04 (sheet v13.0.0beta15)
*/

var iFileName = "Circle of the Hunter.js";
RequiredSheetVersion(13);

SourceList["UA:PDF"] = {
	name : "Circle of the Hunter",
	abbreviation : "UA:PDF",
	group : "Reddit/r/UnearthedArcana",
	url : "https://drive.google.com/file/d/1htXDI9SaVEoVEKubZM71DuqPdECzwyCq/view",
	date : "2022/12/04"
};

AddSubClass("druid", "circle of the hunter", {
	regExpSearch : /^(?=.*(druid))(?=.*\b(circle|hunter|hunt)\b).*$/i,
	subname : "Circle of the Hunter",
	source : ["UA:PDF", 0],
	spellcastingExtra : ["hunter's mark", "longstrider", "darkvision", "enhance ability", "fear", "haste", "death ward", "freedom of movement", "commune with nature", "dominate person"],
	features : {
		"subclassfeature1" : {
			name : "Primal Might",
			source : ["UA:PDF", 0],
			minlevel : 2,
			description : desc([
				"You draw upon the primal powers of nature enhancing your natural form. As a bonus action, you can expend a use of your Wild Shape feature to empower yourself. Rather than transforming into a beast form you gain 5 temporary hit points for each level you have in this class. While this feature is active you gain the following benefits:",
				"• When you use your strength modifier for ability checks, saving throws or on attack and damage rolls, you may use your wisdom modifier instead when attacking with unarmed strikes or weapons a druid is proficient with.",
				"• Your melee weapon attacks made with unarmed strikes, or weapons that a druid is proficient with deal an additional ld6 damage to any target they hit.",
				"• When you take the Attack action, you may expend one spell slot as part of the action to grant yourself ld8 temporary hit points per level of the spell slot expended.",
				"These benefits last for 10 minutes, until you are reduced to O hit points. or until you use your Wild Shape again.",
			]),
			calcChanges : {
				atkAdd : ["if (classes.known.druid && classes.known.druid.level > 2 && ((/unarmed/i).test(fields.Description) || (/unarmed/i).test(WeaponName))) {fields.Description += (fields.Description ? '; ' : '') + 'Primal Might: +1d6'}; + ' damage'"]
			},
			action : ["action", ""],
			eval : function () { RemoveAction("action", "Primal Might"); }
		},
		"subclassfeature2" : {
			name : "Savage Ferocity",
			source : ["UA:PDF", 0],
			minlevel : 6,
			description : desc([
				"On a turn in which you take the attack action, cast a druid spell or druid cantrip, you may use a bonus action to make an additional attack."
			]),
		},
		"subclassfeature2.1" : {
			name : "Untamed Trails",
			source : ["UA:PDF", 0],
			minlevel : 6,
			description : desc([
				"You gain a climbing and swimming speed equal to your walking speed."
			]),
			speed : { climb : {spd : "walk", enc : "walk"} },
			speed : { swim : {spd : "walk", enc : "walk"} },
		},
		"subclassfeature3" : {
			name : "Hunter's Instincts", 
			source : ["UA:PDF", 0],
			minlevel : 10,
			description : desc([
				"Your instincts are honed to the dangers around you, protecting you from ambush. You gain the following benefits:",
				"• You can add your Wisdom modifiers to your initiative rolls.",
				"• You may never be surprised, and may always act in a surprise round of combat.",
				"• If you roll initiative and have no remaining uses of your Wild shape remaining, you regain one use of your Wild Shape."
			]),
			addmod : [
				{ type : "skill", field : "Init", mod : "Wis", text : "I can add my Wisdom modifier to initiative rolls." },
			],	
		},
		"subclassfeature4" : {
			name : "Apex",
			source : ["UA:PDF", 0],
			minlevel : 14,
			description : desc([
				"Sharpened blades and Arrows pose little threat to you as you adopt the mantle of an apex predator. You gain the following benefits:",
				"• You are immune to Poison damage and the Poisoned condition. You are also immune to disease.",
				"• While under the effects of your Primal Might feature, you gain resistance to bludgeoning, piercing and slashing damage."
			]),
			savetxt : { immune : ["poison", "disease"] },
			dmgres : [ 
				"Bludgeoning",
				"Piercing",
				"Slashing"
			],
		}
	}
});
