function createjsDOMenu() {
     
  absoluteMenu1 = new jsDOMenu(180, "absolute");
  with (absoluteMenu1) {
    addMenuItem(new menuItem("РќРѕРјРµСЂР°", "", script+'?admin=numbers'));
	addMenuItem(new menuItem("-"));
    addMenuItem(new menuItem("Р СѓР±СЂРёРєР°С†РёСЏ СЃС‚Р°С‚РµР№", "", script+'?admin=parts'));
	addMenuItem(new menuItem("Р СѓР±СЂРёРєР°С†РёСЏ РџСЂР°РІРѕРІРµРґР°", "", script+'?admin=partspravoved'));
	addMenuItem(new menuItem("Р СѓР±СЂРёРєР°С†РёСЏ РІРѕРїСЂРѕСЃРѕРІ", "", script+'?admin=questparts'));
	addMenuItem(new menuItem("Р РµРіРёРѕРЅР°Р»СЊРЅС‹Рµ СЂСѓР±СЂРёРєРё", "", script+'?admin=regionparts'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Р–Р°РЅСЂС‹", "", script+'?admin=genres'));
	addMenuItem(new menuItem("РЎРїРµС†СЂСѓР±СЂРёРєРё", "", script+'?admin=specials'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Р СЃС‚РѕС‡РЅРёРєРё РЅРѕРІРѕСЃС‚РµР№", "", script+'?admin=source'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("РўР°Р±Р»РѕР№Рґ", "", script + '?admin=tabloid'));
	addMenuItem(new menuItem("-"));
	}
     
  absoluteMenu2 = new jsDOMenu(140, "absolute");
  with (absoluteMenu2) {
    addMenuItem(new menuItem("РЎС‚Р°С‚СЊРё", "", script + '?admin=publ'));
	addMenuItem(new menuItem("Р РµРіРёРѕРЅР°Р»СЊРЅС‹Рµ СЃС‚Р°С‚СЊРё", "", script + '?admin=regionpubls'));
	addMenuItem(new menuItem("РђРЅРѕРЅСЃС‹", "", script + '?admin=exportanons'));
	addMenuItem(new menuItem("-"));
    addMenuItem(new menuItem("РќРѕРІРѕСЃС‚Рё", "", script + '?admin=news'));
	addMenuItem(new menuItem("Р РµРіРёРѕРЅР°Р»СЊРЅС‹Рµ РЅРѕРІРѕСЃС‚Рё", "", script + '?admin=rnews'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("РђРІС‚РѕСЂС‹", "", script + '?admin=authors'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Р”Р°С‚С‹ Рё Р»СЋРґРё", "", script + '?admin=dates'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Р РµРєР»Р°РјР°", "", script + '?admin=informations'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("РџСЂР°РІРѕРІРµРґ", "", script + '?admin=pravoved'));
	addMenuItem(new menuItem("РђРІС‚РѕСЂС‹ РїСЂР°РІРѕРІРµРґР°", "", script + '?admin=prav_authors'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Р’РѕРїСЂРѕСЃ-РѕС‚РІРµС‚", "", script + '?admin=questions'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Р¤РѕС‚РѕРіСЂР°С„РёРё", "", script + '?admin=photes_gallery'));
	addMenuItem(new menuItem("Р¤РѕС‚РѕРіР°Р»РµСЂРµРё", "", script + '?admin=photogallery'));
	
	/*addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("РђС„РѕСЂРёР·РјС‹", "", script + '?admin=aforms'));
	addMenuItem(new menuItem("РђРЅРµРєРґРѕС‚С‹", "", script + '?admin=anekdots'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Р‘Р»РѕРіРё", "", script + '?admin=blogs'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Р Р°СЃРїРѕР»РѕР¶РµРЅРёРµ Р±Р°РЅРЅРµСЂРѕРІ", "", script + '?admin=banner_locations'));
	addMenuItem(new menuItem("Р‘Р°РЅРЅРµСЂС‹", "", script + '?admin=banners'));
	addMenuItem(new menuItem("РњРµСЃС‚РѕСЂР°СЃРїРѕР»РѕР¶РµРЅРёСЏ", "", script + '?admin=locations'));
	addMenuItem(new menuItem("РџР°СЂС‚РЅРµСЂС‹", "", script + '?admin=parthers'));*/
    }
  
    
  absoluteMenu3 = new jsDOMenu(140, "absolute");
  with (absoluteMenu3) {
    addMenuItem(new menuItem("РђРЅРѕРЅСЃС‹ RSS", "item1", ""));
    addMenuItem(new menuItem("-"));
    addMenuItem(new menuItem("Р РЅС‚РµСЂС„Р°РєСЃ", "", server + 'interfax.php'));
  }

  
  absoluteMenu3_1 = new jsDOMenu(150, "absolute");
  with (absoluteMenu3_1) {
    addMenuItem(new menuItem("Р’СЃРµ Р»РµРЅС‚С‹", "", "http://www.argumenti.ru/rss/all/1"));
    addMenuItem(new menuItem("-"));
    addMenuItem(new menuItem("MAIL-RU", "",  "http://www.argumenti.ru/rss/feed/mailru/create/1"));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("РќР°С€Р° Р»РµРЅС‚Р°", "",  "http://www.argumenti.ru/rss/feed/argumenti/create/1"));
    addMenuItem(new menuItem("Yandex", "",  "http://www.argumenti.ru/rss/feed/yandex/create/1"));
    addMenuItem(new menuItem("Rambler", "",  "http://www.argumenti.ru/rss/feed/rambler/create/1"));
    addMenuItem(new menuItem("SMI-RU", "", "http://www.argumenti.ru/rss/feed/smiru/create/1"));
	
  }
  
  
   absoluteMenu4 = new jsDOMenu(180, "absolute");
  with (absoluteMenu4) {
    addMenuItem(new menuItem("Р’Р°С€Рµ РјРЅРµРЅРёРµ: Р’РѕРїСЂРѕСЃС‹", "", server + "admins.php?admin=mnequest"));
	addMenuItem(new menuItem("Р’Р°С€Рµ РјРЅРµРЅРёРµ: РћС‚РІРµС‚С‹", "", server + "admins.php?admin=mneanswer"));
    addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("РљРѕРјРјРµРЅС‚Р°СЂРёРё Рє СЃС‚Р°С‚СЊРј", "", script + '?admin=comments_publs'));
	addMenuItem(new menuItem("РљРѕРјРјРµРЅС‚Р°СЂРёРё Рє РЅРѕРІРѕСЃС‚СЏРј", "", script + '?admin=comments_news'));
	addMenuItem(new menuItem("РљРѕРјРјРµРЅС‚Р°СЂРёРё Рє Р±Р»РѕРіР°Рј", "", script + '?admin=comments_posts'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("РџРѕР»СЊР·РѕРІР°С‚РµР»Рё", "",  script + 'admins.php?admin=users'));
    }
  
  
  absoluteMenu5 = new jsDOMenu(140, "absolute");
  with (absoluteMenu5) {
    addMenuItem(new menuItem("РћС‚РґРµР»С‹", "", server + "admins.php?admin=regions"));
    addMenuItem(new menuItem("-"));
    addMenuItem(new menuItem("Р РµРіРёРѕРЅС‹", "", server + "admins.php?admin=regions"));
  }
  
  
   absoluteMenu5 = new jsDOMenu(140, "absolute");
	with (absoluteMenu5) {
		addMenuItem(new menuItem("Р РµРіРёСЃС‚СЂР°С†РёСЏ РѕРЅ-Р»Р°Р№РЅ", "", script + '?admin=online'));
		addMenuItem(new menuItem("Р’РѕРїСЂРѕСЃС‹ Рё РѕС‚РІРµС‚С‹", "", script + '?admin=onlinequest'));
		addMenuItem(new menuItem("-"));
		addMenuItem(new menuItem("РџСЂРµСЃСЃ-РєРѕРЅС„РµСЂРµРЅС†РёРё", "", script + '?admin=presscenter'));
  }
  
  absoluteMenu6 = new jsDOMenu(140, "absolute");
	with (absoluteMenu6) {
		addMenuItem(new menuItem("РџРѕР»СЊР·РѕРІР°С‚РµР»Рё", "", server + "admins.php?admin=users"));
		addMenuItem(new menuItem("Р“СЂСѓРїРїС‹", "", server + "admins.php?admin=groupuser"));
		addMenuItem(new menuItem("РџРµСЂРµСЃРѕР·РґР°С‚СЊ РґРѕСЃС‚СѓРї", "", "http://www.argumenti.ru/passwords/create"));
		addMenuItem(new menuItem("-"));
		addMenuItem(new menuItem("Р РµРіРёРѕРЅС‹", "",script + '?admin=regions'));
		addMenuItem(new menuItem("РЈРїСЂР°РІР»РµРЅРёРµ", "", script+"?admin=adsmini_banner_locations"));
		addMenuItem(new menuItem("Р‘Р°РЅРЅРµСЂС‹", "", script+ "?admin=adsmini_banners"));
		addMenuItem(new menuItem("-"));
		addMenuItem(new menuItem("РџР°СЂС‚РЅРµСЂС‹", "", script+"?admin=adsmini_partners"));
		addMenuItem(new menuItem("РўРёРїС‹ РїР°СЂС‚РЅРµСЂРѕРІ", "", script+"?admin=adsmini_type_partners"));
		addMenuItem(new menuItem("-"));
		addMenuItem(new menuItem("Р—РѕРЅС‹", "", script+"?admin=adsmini_localtions"));
		addMenuItem(new menuItem("РџР»РѕС‰Р°РґРєРё", "", script+"?admin=adsmini_sites"));
		addMenuItem(new menuItem("-"));
		addMenuItem(new menuItem("РљРѕРЅС‚РµРєСЃС‚ СЃС‚Р°С‚РµР№", "", script+"?admin=publs_links"));
		
  }
  
  
 absoluteMenu7 = new jsDOMenu(140, "absolute");
  with (absoluteMenu7) {
    addMenuItem(new menuItem("Р РµРіРёРѕРЅР°Р»СЊРЅС‹Рµ СЃС‚Р°С‚СЊРё", "", script + '?admin=regionpubls'));
	addMenuItem(new menuItem("Р РµРіРёРѕРЅР°Р»СЊРЅС‹Рµ РЅРѕРІРѕСЃС‚Рё", "", script + '?admin=rnews'));
	}
	
	
 absoluteMenu8 = new jsDOMenu(140, "absolute");
  with (absoluteMenu8) {
    addMenuItem(new menuItem("РљРѕРЅС‚РµРєСЃС‚РЅР°СЏ СЂРµРєР»Р°РјР°", "", script + '?admin=contexts'));
	addMenuItem(new menuItem("-"));
	addMenuItem(new menuItem("Р‘Р°РЅРЅРµСЂС‹", "",script + '?admin=banners'));
	addMenuItem(new menuItem("РњРµСЃС‚Р° РїРѕРґ Р±Р°РЅРЅРµСЂС‹", "",script + '?admin=locations'));
	addMenuItem(new menuItem("-"));
	}
  
  
  absoluteMenu3.items.item1.setSubMenu(absoluteMenu3_1);
  //absoluteMenu1.items.item2.setSubMenu(absoluteMenu1_1);
  //absoluteMenu2.items.item4.setSubMenu(absoluteMenu2_1);
 
  
  absoluteMenuBar = new jsDOMenuBar("static", "staticMenuBar");
  with (absoluteMenuBar) {
    addMenuBarItem(new menuBarItem("РљР°С‚Р°Р»РѕРіРё", absoluteMenu1));
    addMenuBarItem(new menuBarItem("РљРѕРЅС‚РµРЅС‚", absoluteMenu2));
    addMenuBarItem(new menuBarItem("Р­РєСЃРїРѕСЂС‚", absoluteMenu3));
	addMenuBarItem(new menuBarItem("Р РµРіРёРѕРЅС‹", absoluteMenu7));
	addMenuBarItem(new menuBarItem("Р РЅС‚РµСЂР°РєС‚РёРІ", absoluteMenu4));
	addMenuBarItem(new menuBarItem("РџСЂРµСЃСЃ-С†РµРЅС‚СЂ", absoluteMenu5));
	addMenuBarItem(new menuBarItem("Р РµРєР»Р°РјР°", absoluteMenu8));
	addMenuBarItem(new menuBarItem("РђРґРјРёРЅРёСЃС‚СЂРёСЂРѕРІР°РЅРёРµ", absoluteMenu6));
	setActivateMode("over");
  }
}