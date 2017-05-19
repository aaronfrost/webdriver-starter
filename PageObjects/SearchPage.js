const Page = require('./Page');
const SearchPageMap = require('../Maps/SearchPageMap');

class SearchPage extends Page{

    open(){
        super.open('https://www.google.com');
    }

    get feelingLucky()          { return $(SearchPageMap.feelingLuckyButton); }
    get searchBox()             { return $(SearchPageMap.searchBox); }
    get searchButton()          { return $(SearchPageMap.searchButton); }
    get suggestedSearchOptions(){ return browser.elements(SearchPageMap.suggestedSearchOptions); }
}

module.exports = SearchPage;