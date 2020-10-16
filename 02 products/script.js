let products = $( "#list-bike" );
products.empty();

datas = datas.products;
datas.forEach( item => {
    const product = createCell( item );
    products.append( product );
} );

function createCell ( item ) {
    var card = $( '<div class="card"></div>' );

    img = $( `<img src="../image/motor/${ item.foto[ 0 ] }" alt="foto ${ item.merk + ' ' + item.type }" class="card-img-top product-img" />` );

    card.append( img );

    cardbody = $( '<div class="card-body"></div>' );
    title = $( "<h4 class=card-title card-title-centre></h4>" ).append( item.merk + " " + item.type );
    harian = $( `<h5>Harian : ${ convert( item.harga.harian ) } </h5>` );
    if ( item.merk.toLowerCase() === 'harley davidson' ) {
        cardbody.append( title ).append( harian );

        btn = $( '<button type="submit" class="btn-rent">RENT</button>' );
        cardbody.append( btn );
    } else {
        mingguan = $( `<h5>Mingguan : ${ convert( item.harga.mingguan ) } </h5>` );
        cardbody.append( title ).append( harian ).append( mingguan );

        btn = $( '<button type="submit" class="btn-rent">RENT</button>' );
        cardbody.append( btn );
    }


    card.append( cardbody );
    return card;
}

$( "#sorter .dropdown-menu a" ).click( function () {

    var teks = $( this ).text();
    switch ( teks.toLowerCase() ) {
        case "harga terendah":
            products.empty();
            datas.sort( function ( a, b ) {
                var hargaA = a.harga.harian;
                var hargaB = b.harga.harian;

                if ( hargaA < hargaB ) return -1;
                if ( hargaB < hargaA ) return 1;
                return 0;
            } );
            datas.forEach( item => {
                const product = createCell( item );
                products.append( product );
            } );
            break;
        case "harga tertinggi":

            products.empty();
            datas.sort( function ( a, b ) {
                var hargaA = a.harga.harian;
                var hargaB = b.harga.harian;

                if ( hargaB < hargaA ) return -1;
                if ( hargaA < hargaB ) return 1;
                return 0;
            } );
            datas.forEach( item => {
                const product = createCell( item );
                products.append( product );
            } );
            break;
        case "produk terbaru":
            products.empty();
            datas.sort( function ( a, b ) {
                var tahunA = a.spesifikasi.tahun;
                var tahunB = b.spesifikasi.tahun;

                if ( tahunA > tahunB ) return -1;
                if ( tahunB > tahunA ) return 1;
                return 0;
            } );
            datas.forEach( item => {
                const product = createCell( item );
                products.append( product );
            } );
            break;
        default:
            break;
    }
} );


$( "#merk-motor .dropdown-menu a" ).click( function () {
    var teks = $( this ).text();
    switch ( teks.toLowerCase() ) {

        case 'harley davidson':
            products.empty();
            datas.forEach( item => {
                if ( item.merk === teks ) {
                    const product = createCell( item );
                    products.append( product );
                }
            } );
            break;

        case 'honda':
            products.empty();
            datas.forEach( item => {
                if ( item.merk === teks ) {
                    const product = createCell( item );
                    products.append( product );
                }
            } );

            break;

        case 'suzuki':
            products.empty();
            datas.forEach( item => {
                if ( item.merk === teks ) {
                    const product = createCell( item );
                    products.append( product );
                }
            } );
            break;

        case 'yamaha':
            products.empty();
            datas.forEach( item => {
                if ( item.merk === "yamaha" ) {
                    const product = createCell( item );
                    products.append( product );
                }
            } );
            break;

        default:
            products.empty();
            datas.forEach( item => {
                const product = createCell( item );
                products.append( product );
            } );
            break;


    }
} );

function convert ( value ) {
    if ( value >= 1000000 ) {
        value = ( value / 1000000 ) + " Jt";
    }
    else if ( value >= 1000 ) {
        value = ( value / 1000 ) + " Rb";
    }
    return value;
}