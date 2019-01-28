/* === Emeraude template manager ============================================ */
var emeraudeMgr = {

/* === Public API =========================================================== */
	/** init function - must be called at the end of page body */
	init : function(){
		try {
			tplMgr.fStrings[0] = "Fermer";
			tplMgr.fStrings[1] = "Cacher le menu de l\'activité";
			tplMgr.fStrings[2] = "Menu";
			tplMgr.fStrings[3] = "Afficher le menu de l\'activité";
			if (scPaLib.checkNode(".module.emeraude", document.body)) tplMgr.fZenMode = 3;
			else tplMgr.fZenMode = 2;
		} catch(e) {
			scCoLib.log("emeraudeMgr init failed: "+e);
		}
	}
}
