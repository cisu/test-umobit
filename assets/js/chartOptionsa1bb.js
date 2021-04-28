var language = $('html').attr('lang');

if (language === "el") {
    Highcharts.setOptions({
        lang: {
            loading: "Φόρτωση...",
            months: [
                "Ιανουάριος",
                "Φεβρουάριος",
                "Μάρτιος",
                "Απρίλιος",
                "Μάιος",
                "Ιούνιος",
                "Ιούλιος",
                "Αύγουστος",
                "Σεπτέμβριος",
                "Οκτώβριος",
                "Νοέμβριος",
                "Δεκέμβριος"
            ],
            weekdays: [
                "Κυριακή",
                "Δευτέρα",
                "Τρίτη",
                "Τετάρτη",
                "Πέμπτη",
                "Παρασκευή",
                "Σάββατο"
            ],
            shortMonths: [
                "Ιαν",
                "Φεβ",
                "Μαρ",
                "Απρ",
                "Μαι",
                "Ιουν",
                "Ιουλ",
                "Αυγ",
                "Σεπ",
                "Οκτ",
                "Νοε",
                "Δεκ"
            ],
            contextButtonTitle: 'Περισσότερες Ρυθμίσεις',
            downloadCSV: 'Κάντε λήψη του CSV',
            downloadJPEG: 'Λήψη εικόνας JPEG',
            downloadPDF: 'Λήψη εγγράφου PDF',
            downloadPNG: 'Λήψη εικόνας PNG',
            downloadSVG: 'Λήψη εικόνας SVG',
            downloadXLS: 'Λήψη εγγράφου XLS',
            drillUpText: 'Επιστροφή στην {series.name}',
            noData: 'Δεν υπάρχουν δεδομένα προς εμφάνιση',
            printChart: 'Εκτύπωση του Διαγράμματος',
            viewData: 'Προβολή πίνακα δεδομένων',
            rangeSelectorFrom: "Από",
            rangeSelectorTo: "Έως",
            rangeSelectorZoom: "Περίοδος",
            thousandsSep: ".",
            decimalPoint: ","
        }
    });
}

Highcharts.setOptions({
    chart: {
        fontFamily: 'Roboto Condensed'
    },
    exporting: {
        enabled: false,
        buttons: {
            contextButton: {
                enabled: false
            }
        }
    },
    rangeSelector: {
        style: {
            fill: '#326F96' // Blue
        }
    },
    credits: {
        enabled: false
    },
    colors: [
        '#326F96', // Blue
        '#8080B2', // Purple
        '#5D9E9B', // Green
        '#B2B2B2' // Gray
    ]
});

//#region Labels

var txtClosure = "Closure",
    txtVolume = "Volume";


if (language === 'el') {
    txtClosure = "Κλείσιμο";
    txtVolume = "Όγκος";
}

//#endregion Labels