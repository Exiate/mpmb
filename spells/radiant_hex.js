/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Spells
	Effect:     This script adds one spell "Radiant Hex"

				This spell is a flavoring of the Hex spell to use Radiant damage instead.

	Code by:	MorePurpleMoreBetter
	Date:		2022-04-26 (sheet v13.1.0)
*/
var iFileName = "radiant_hex.js";
RequiredSheetVersion(13.1);

// The source (EN5ider 108)
SourceList["HB:DnDB"] = {
	name : "Homebrew on D&D Beyond",
	abbreviation : "HB:DnDB",
	abbreviationSpellsheet : "HB",
	group : "D&D Beyond",
	url : "https://www.dndbeyond.com/homebrew"
};

// Add the spells
SpellsList["radiant hex"] = {
	name : "Radiant Hex",
	nameAlt : "Radiant Hex",
	classes : ["warlock"],
	source : [["HB:DnDB", 0]],
	level : 1,
	school : "Ench",
	time : "1 ba",
	range : "90 ft",
	components : "V,S,M",
	compMaterial : "A feather",
	duration : "Conc, 1h",
	description : "1 crea +1d6 Radiant dmg from my atks; dis. on chosen ability checks; SL3: conc, 8h; SL5: conc, 24h.",
	descriptionFull : "You place a curse on a creature that you can see within range. Until the spell end, you deal an extra 1d6 radiant damage to the target whenever you hit it with an attack Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature. A remove curse cast on the target ends this spell early. At Higher Levels: When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a Spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours." 
};