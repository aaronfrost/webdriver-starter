const assert = require('assert');
const SearchPage = require('../PageObjects/SearchPage');

describe('Google Search Page', function(){
    let searchPage;

    beforeEach(function(){
        searchPage = new SearchPage();
        searchPage.open();
    });

    it('should have search box', function(){
        expect(searchPage.searchBox).not.toBe(undefined);
    });

    it('should show suggested searches when I type in search box', function(){
        searchPage.searchBox.setValue('asdf');
        searchPage.suggestedSearchOptions.waitForExist();
        expect(searchPage.suggestedSearchOptions.value.length).not.toBe(0);
        expect(searchPage.suggestedSearchOptions.value.length).toBe(5);
    });
});