// For this exercise you will be strengthening your page - fu mastery.You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page.The types of values contained within the collection / array are not relevant.
// var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1

class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }
    itemCount() {
        return this.collection.length;
    }
    pageItemCount(pageIndex) {
        if (pageIndex === 0 && this.itemCount() > this.pageCount()) {
            return this.itemsPerPage;
        } else {
            if (pageIndex >= this.pageCount()) return -1;
            let total = this.itemCount();
            while (pageIndex > 0 && total > this.itemsPerPage) {
                total -= this.itemsPerPage;
                pageIndex--;
            }
            if (total > this.itemsPerPage) return this.itemsPerPage;
            return total;
        }
    }
    pageIndex(itemIndex) {
        if (itemIndex > this.itemCount() || itemIndex < 0 || this.collection.length === 0) return -1;
        let page = 0,
            itemsLeft = itemIndex;
        while (itemsLeft > this.itemsPerPage) {
            itemsLeft -= this.itemsPerPage;
            page++;
        }
        return page;
    }
}

let helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log(helper.pageCount(), 2);
console.log(helper.itemCount(), 6);
console.log(helper.pageItemCount(0), 4);
console.log(helper.pageItemCount(1), 2);
console.log(helper.pageItemCount(2), -1);
console.log(helper.pageIndex(5), 1);
console.log(helper.pageIndex(2), 0);
console.log(helper.pageIndex(20), -1);
console.log(helper.pageIndex(-10), -1);