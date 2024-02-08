"use strict";
(function() {
    // Model
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

    // View
    let view = {
        isbnInput: document.getElementById('isbn'),
        titelInput: document.getElementById('titel'),
        jaarInput: document.getElementById('jaar'),
        publisherInput: document.getElementById('publisher'),
        statusInput: document.getElementById('status'),

        init: function() {
            // TODO: Eventuele view initialisatie
        },

        setView: function(book) {
            this.isbnInput.value = book.isbn;
            this.titelInput.value = book.titel;
            this.jaarInput.value = book.jaar;
            this.publisherInput.value = book.publisher;
            this.statusInput.value = book.status;
        }
    };

    // Controller
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

            // Uitvoeren van de setView uit de view
            let initialBookData = model.getData();
            view.setView(initialBookData);
        }
    };

    // Start de applicatie
    controller.init();
})();
