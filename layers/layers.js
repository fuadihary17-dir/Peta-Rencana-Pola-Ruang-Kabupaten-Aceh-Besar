var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PolaRuangKabupatenAcehBesar_1 = new ol.format.GeoJSON();
var features_PolaRuangKabupatenAcehBesar_1 = format_PolaRuangKabupatenAcehBesar_1.readFeatures(json_PolaRuangKabupatenAcehBesar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolaRuangKabupatenAcehBesar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolaRuangKabupatenAcehBesar_1.addFeatures(features_PolaRuangKabupatenAcehBesar_1);
var lyr_PolaRuangKabupatenAcehBesar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolaRuangKabupatenAcehBesar_1, 
                style: style_PolaRuangKabupatenAcehBesar_1,
                popuplayertitle: 'Pola Ruang Kabupaten Aceh Besar',
                interactive: true,
    title: 'Pola Ruang Kabupaten Aceh Besar<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_0.png" /> Bandara<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_1.png" /> Cagar Alam Pinus Jantho<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_2.png" /> Cagar Budaya<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_3.png" /> Embung<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_4.png" /> Holtikultura<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_5.png" /> Hutan Lindung<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_6.png" /> Hutan Pendidikan STIK<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_7.png" /> Hutan Produksi<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_8.png" /> Hutan Produksi Konversi<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_9.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_10.png" /> Hutan Rakyat<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_11.png" /> Kawasan HANKAM<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_12.png" /> Kawasan Industri<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_13.png" /> Kawasan Peruntukkan Transmigrasi<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_14.png" /> Kawasan Peternakan<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_15.png" /> Kawasan Pusat Pendidikan dan Olah Raga Terpadu<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_16.png" /> Kebun Plasma Nutfah<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_17.png" /> Perkebunan<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_18.png" /> Perkebunan Kakao<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_19.png" /> Permukiman Pedesaan<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_20.png" /> Permukiman Perkotaan<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_21.png" /> Pertambangan<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_22.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_23.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_24.png" /> RTH<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_25.png" /> Sempadan Embung<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_26.png" /> Sempadan Pantai<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_27.png" /> Sempadan Sungai<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_28.png" /> Sempadan Waduk<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_29.png" /> Sungai<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_30.png" /> Tahura Pocut Meurah Intan<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_31.png" /> Taman Wisata Alam Kuta Malaka<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_32.png" /> Taman Wisata Alam Pinus Jantho<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_33.png" /> Tambak<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_34.png" /> Waduk<br />\
    <img src="styles/legend/PolaRuangKabupatenAcehBesar_1_35.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_PolaRuangKabupatenAcehBesar_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PolaRuangKabupatenAcehBesar_1];
lyr_PolaRuangKabupatenAcehBesar_1.set('fieldAliases', {'Pola_Ruang': 'Rencana Pola Ruang', 'Kaw_Lind': 'Kaw_Lind', 'Kaw_Budi': 'Fungsi Kawasan', 'NAMA_KEC': 'Kecamatan', 'Luas': 'Luas (Ha)', 'Nama': 'Nama', 'ZONASI': 'ZONASI', });
lyr_PolaRuangKabupatenAcehBesar_1.set('fieldImages', {'Pola_Ruang': 'TextEdit', 'Kaw_Lind': 'Hidden', 'Kaw_Budi': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'Luas': 'TextEdit', 'Nama': 'Hidden', 'ZONASI': 'Hidden', });
lyr_PolaRuangKabupatenAcehBesar_1.set('fieldLabels', {'Pola_Ruang': 'inline label - always visible', 'Kaw_Budi': 'inline label - always visible', 'NAMA_KEC': 'inline label - always visible', 'Luas': 'inline label - always visible', });
lyr_PolaRuangKabupatenAcehBesar_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});