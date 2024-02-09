"use strict";
(function() {
    let model = {
        boek: {},
        init: function() {
            this.boek = {
                isbn: "01234567",
                titel: "JavaScript, the right way",
                jaar: 2012,
                publisher: "jstherightway.com",
                status: "aanwezig"
            };
        },
        setStatus: function(newStatus) {
            this.boek.status = newStatus;
        },
        getData: function() {
            return this.boek;
        }
    };
    let view = {
        isbnInput: document.getElementById('isbn'),
        titelInput: document.getElementById('titel'),
        jaarInput: document.getElementById('jaar'),
        publisherInput: document.getElementById('publisher'),
        statusInput: document.getElementById('status'),
        init: function() {
        },
        setView: function(book) {
            this.isbnInput.value = book.isbn;
            this.titelInput.value = book.titel;
            this.jaarInput.value = book.jaar;
            this.publisherInput.value = book.publisher;
            this.statusInput.value = book.status;
        }
    };
    let controller = {
        init: function() {
            model.init();
            view.init();
            document.getElementById('btnOntleend').addEventListener('click', function() {
                model.setStatus('ontleend');
                let bookData = model.getData();
                view.setView(bookData);
            });
            document.getElementById('btnTerugBinnen').addEventListener('click', function() {
                model.setStatus('terug binnen');
                let bookData = model.getData();
                view.setView(bookData);
            });
            let initialBookData = model.getData();
            view.setView(initialBookData);
        }
    };
    controller.init();
})();