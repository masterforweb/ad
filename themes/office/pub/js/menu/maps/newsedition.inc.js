function createjsDOMenu() {
     
   
 
 absoluteMenu9 = new jsDOMenu(180, "absolute");
  with (absoluteMenu9) {
    addMenuItem(new menuItem("Новости", "", script+'?admin=news_lite.xml'));
	addMenuItem(new menuItem("Таблоид", "", script+'?admin=tabloid.xmlv'));
	}
 
    
  
  absoluteMenuBar = new jsDOMenuBar("static", "staticMenuBar");
  with (absoluteMenuBar) {
    addMenuBarItem(new menuBarItem("Новости", absoluteMenu9));
	setActivateMode("over");
  }
}