chrome.tabs.getSelected(null, function (tab) {

  const page_name = tab.title;

  let bar;
  let leftBracket;
  let rightBracket;
  let card_name;
  let google_search;

  if (tab.url.match(/www.db.yugioh-card.com/)) {
    bar = page_name.indexOf(' | ');
    card_name = page_name.substr(0, bar);
  }

  if (tab.url.match(/yugioh-wiki.net/)) {
    leftBracket = page_name.indexOf('《');
    rightBracket = page_name.indexOf('》');
    card_name = page_name.substring((leftBracket + 1), (rightBracket));
  }

  google_search = 'https://www.google.com/search?q=' + card_name;

  window.open(google_search, '_blank');
});
