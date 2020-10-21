let products = $( "#list-cars" );
products.empty();

datas = fetchData();

datas.forEach( item => {
    const product = createCell( item );
    products.append( product );
} );

function fetchData () {
    return finaldatas.mobils;
}

function createCell ( item ) {
    var card = $( '<div class="card"></div>' );

    img = $( `<img src="../image/mobil/${ item.foto[ 0 ] }" alt="foto ${ item.merk + ' ' + item.type }" class="card-img-top product-img" />` );

    card.append( img );

    cardbody = $( '<div class="card-body"></div>' );
    title = $( "<h4 class=\"card-title card-title-center text-center text-capitalize\"></h4>" )
        .append( item.merk + " " + item.type + " " )
        .append( `<sup>${ ( item.spesifikasi.tahun ) }</sup > ` );
    harian = $( `<h5> Harian : ${ convert( item.harga.harian ) } </h5> ` );

<<<<<<< HEAD
        btn = $( '<button type="submit" class="btn btn-primary btn-rent">Detail</button>' );
        cardbody.append( btn );
    } else {
        mingguan = $( `<h5> Mingguan : ${ convert( item.harga.mingguan ) } </h5> ` );
        cardbody.append( title ).append( harian ).append( mingguan );

        btn = $( '<button type="submit" class="btn btn-primary btn-rent">Detail</button>' );
        cardbody.append( btn );
    }
=======
    mingguan = $( `<h5> Mingguan : ${ convert( item.harga.mingguan ) } </h5> ` );
    cardbody.append( title ).append( harian ).append( mingguan );

    btn = $( `<button type="submit" onclick="location.href=\'../04 detail/${ item.url } \'" class="btn btn-primary btn-rent">RENT</button>` );
    cardbody.append( btn );

>>>>>>> 034fb273e436838624e32598bb53e22200be147c


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

        case 'toyota':
            products.empty();
            datas = fetchData();
            datas = datas.filter( function ( objek ) {
                return objek.merk == teks;
            } );

            datas.forEach( item => {
                const product = createCell( item );
                products.append( product );
            }
            );
            break;

        case 'daihatsu':

            products.empty();
            datas = fetchData();
            datas = datas.filter( function ( objek ) {
                return objek.merk == teks;
            } );

            datas.forEach( item => {
                const product = createCell( item );
                products.append( product );
            }
            );
            break;

        case 'mercedes':

            products.empty();
            datas = fetchData();
            datas = datas.filter( function ( objek ) {
                return objek.merk == teks;
            } );

            datas.forEach( item => {
                const product = createCell( item );
                products.append( product );
            }
            );
            break;


        default:
            products.empty();
            datas = fetchData();
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
};

function slicing ( text ) {
    text = text.toString();
    return text.slice( -2 );
};