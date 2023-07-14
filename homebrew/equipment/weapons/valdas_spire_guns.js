/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Artificer, called "Guns"
				This subclass has been made by Mage Hand Press
	Code by:	https://github.com/Exiate
	Date:		2023/07/14 (sheet v13.0.0beta15)
*/

var iFileName = "valdas_spire_guns.js";
RequiredSheetVersion(13);

SourceList["MH:VPS"] = {
	name : "Valda's Spire of Secrets - Guns",
	abbreviation : "MH:VPS",
	group : "Mage Hand Press",
	url : "https://home.mycloud.com/public/9fda733c-19df-43be-ad56-67cc1ebe7681/folders/m24wzfdax4afii3cgpmy7jjq",
	date : "2023/03/28"
};

WeaponsList["Flintlock"] = {
	regExpSearch : /flintlock/i,
	name : "Flintlock",
	source : ["MH:VPS", 4],
	list : "ranged",
	ability : 2,
	type : "Simple",
	damage : [2, 6, "piercing"],
	range : "30/120",
	weight : 6,
	description : "Ammunition, dry, light, loading, misfire",
	abilitytodamage : false
};