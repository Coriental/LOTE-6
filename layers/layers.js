ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([442491.461873, 7185789.972064, 457041.501498, 7197917.747076]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 0.907000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_postexist_1 = new ol.format.GeoJSON();
var features_postexist_1 = format_postexist_1.readFeatures(json_postexist_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_postexist_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postexist_1.addFeatures(features_postexist_1);
var lyr_postexist_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postexist_1, 
                style: style_postexist_1,
                popuplayertitle: "post exist",
                interactive: true,
                title: '<img src="styles/legend/postexist_1.png" /> post exist'
            });
var format_Postacin23102024_2 = new ol.format.GeoJSON();
var features_Postacin23102024_2 = format_Postacin23102024_2.readFeatures(json_Postacin23102024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_Postacin23102024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postacin23102024_2.addFeatures(features_Postacin23102024_2);
var lyr_Postacin23102024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Postacin23102024_2, 
                style: style_Postacin23102024_2,
                popuplayertitle: "Postación 23-10-2024",
                interactive: true,
                title: '<img src="styles/legend/Postacin23102024_2.png" /> Postación 23-10-2024'
            });
var format_PostExist2310_3 = new ol.format.GeoJSON();
var features_PostExist2310_3 = format_PostExist2310_3.readFeatures(json_PostExist2310_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostExist2310_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostExist2310_3.addFeatures(features_PostExist2310_3);
var lyr_PostExist2310_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostExist2310_3, 
                style: style_PostExist2310_3,
                popuplayertitle: "Post. Exist. 23-10",
                interactive: true,
                title: '<img src="styles/legend/PostExist2310_3.png" /> Post. Exist. 23-10'
            });
var format_PostNuev2310_4 = new ol.format.GeoJSON();
var features_PostNuev2310_4 = format_PostNuev2310_4.readFeatures(json_PostNuev2310_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostNuev2310_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostNuev2310_4.addFeatures(features_PostNuev2310_4);
var lyr_PostNuev2310_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostNuev2310_4, 
                style: style_PostNuev2310_4,
                popuplayertitle: "Post. Nuev. 23-10",
                interactive: true,
                title: '<img src="styles/legend/PostNuev2310_4.png" /> Post. Nuev. 23-10'
            });
var format_PDL62310_5 = new ol.format.GeoJSON();
var features_PDL62310_5 = format_PDL62310_5.readFeatures(json_PDL62310_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL62310_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL62310_5.addFeatures(features_PDL62310_5);
var lyr_PDL62310_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL62310_5, 
                style: style_PDL62310_5,
                popuplayertitle: "PD L6 23-10",
                interactive: true,
                title: '<img src="styles/legend/PDL62310_5.png" /> PD L6 23-10'
            });
var format_BT3x701x501x25_6 = new ol.format.GeoJSON();
var features_BT3x701x501x25_6 = format_BT3x701x501x25_6.readFeatures(json_BT3x701x501x25_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25_6.addFeatures(features_BT3x701x501x25_6);
var lyr_BT3x701x501x25_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25_6, 
                style: style_BT3x701x501x25_6,
                popuplayertitle: "BT 3x70+1x50+1x25",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25_6.png" /> BT 3x70+1x50+1x25'
            });
var format_MT3x70_7 = new ol.format.GeoJSON();
var features_MT3x70_7 = format_MT3x70_7.readFeatures(json_MT3x70_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70_7.addFeatures(features_MT3x70_7);
var lyr_MT3x70_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70_7, 
                style: style_MT3x70_7,
                popuplayertitle: "MT 3x70",
                interactive: true,
                title: '<img src="styles/legend/MT3x70_7.png" /> MT 3x70'
            });
var format_MT3x185_L6_8 = new ol.format.GeoJSON();
var features_MT3x185_L6_8 = format_MT3x185_L6_8.readFeatures(json_MT3x185_L6_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185_L6_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185_L6_8.addFeatures(features_MT3x185_L6_8);
var lyr_MT3x185_L6_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185_L6_8, 
                style: style_MT3x185_L6_8,
                popuplayertitle: "MT 3x185_L6",
                interactive: true,
                title: '<img src="styles/legend/MT3x185_L6_8.png" /> MT 3x185_L6'
            });
var format_MT3x35_9 = new ol.format.GeoJSON();
var features_MT3x35_9 = format_MT3x35_9.readFeatures(json_MT3x35_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35_9.addFeatures(features_MT3x35_9);
var lyr_MT3x35_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35_9, 
                style: style_MT3x35_9,
                popuplayertitle: "MT 3x35",
                interactive: true,
                title: '<img src="styles/legend/MT3x35_9.png" /> MT 3x35'
            });
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 1"});
var group_LOTE2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 2"});
var group_FDM1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "FDM1"});
var group_FDM2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "FDM2"});
var group_VAU1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU1"});
var group_VAU2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU2"});
var group_VAU3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU3"});
var group_VAU5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU5"});
var group_VAU9 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU9"});
var group_VAU11 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU11"});
var group_VAU12 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU12"});
var group_VAU13 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU13"});
var group_VAU14 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU14"});
var group_VAU24 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU24"});
var group_VAU25 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU25"});
var group_VAU28 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU28"});
var group_N2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "N2"});
var group_N3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "N3"});
var group_LOTE3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 3"});
var group_LOTE4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 4"});
var group_LOTE5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 5"});
var group_Baslica = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Basílica"});
var group_LOTE6 = new ol.layer.Group({
                                layers: [lyr_postexist_1,lyr_Postacin23102024_2,lyr_PostExist2310_3,lyr_PostNuev2310_4,],
                                fold: "open",
                                title: "LOTE 6"});
var group_Lote1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 1"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 2"});
var group_Lote3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 3"});
var group_Lote4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 4"});
var group_Lote5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 5"});
var group_Lote6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 6"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote2"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: "open",
                                title: "OpenStreetMap"});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "MPAA DE UBICACÓN"});

lyr_OSMStandard_0.setVisible(true);lyr_postexist_1.setVisible(true);lyr_Postacin23102024_2.setVisible(true);lyr_PostExist2310_3.setVisible(true);lyr_PostNuev2310_4.setVisible(true);lyr_PDL62310_5.setVisible(true);lyr_BT3x701x501x25_6.setVisible(true);lyr_MT3x70_7.setVisible(true);lyr_MT3x185_L6_8.setVisible(true);lyr_MT3x35_9.setVisible(true);
var layersList = [group_OpenStreetMap,group_LOTE6,lyr_PDL62310_5,lyr_BT3x701x501x25_6,lyr_MT3x70_7,lyr_MT3x185_L6_8,lyr_MT3x35_9];
lyr_postexist_1.set('fieldAliases', {'Nro Sosten': 'Nro Sosten', 'poste': 'poste', 'x': 'x', 'y': 'y', 'XX': 'XX', 'yy': 'yy', });
lyr_Postacin23102024_2.set('fieldAliases', {'ALIMENT.': 'ALIMENT.', 'Sostén': 'Sostén', 'TIPO/POSTE': 'TIPO/POSTE', 'Nro de Fab': 'Nro de Fab', 'Coord. X': 'Coord. X', 'Coord. Y': 'Coord. Y', });
lyr_PostExist2310_3.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 6': 'Alimentadores Lote 6', 'Cuadrilla 6': 'Cuadrilla 6', 'Marca': 'Marca', 'Número de Fábrica': 'Número de Fábrica', 'Fecha de Postación': 'Fecha de Postación', 'Creado': 'Creado', 'Poste': 'Poste', 'Tipo de Poste': 'Tipo de Poste', 'Cambio Sosten': 'Cambio Sosten', 'Motivo': 'Motivo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_PostNuev2310_4.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 6': 'Alimentadores Lote 6', 'Cuadrilla 6': 'Cuadrilla 6', 'Marca': 'Marca', 'Número de Fábrica': 'Número de Fábrica', 'Fecha de Postación': 'Fecha de Postación', 'Creado': 'Creado', 'Poste': 'Poste', 'Tipo de Poste': 'Tipo de Poste', 'Cambio Sosten': 'Cambio Sosten', 'Motivo': 'Motivo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_PDL62310_5.set('fieldAliases', {'N°': 'N°', 'ALIM': 'ALIM', 'DENOM': 'DENOM', 'NRO DE SOSTEN': 'NRO DE SOSTEN', 'NRO OT': 'NRO OT', 'MES/AÑO': 'MES/AÑO', 'FECHA MONTAJE': 'FECHA MONTAJE', 'ESTADO': 'ESTADO', 'FECHA EN SERVICIO': 'FECHA EN SERVICIO', 'COORD X': 'COORD X', 'COODR Y': 'COODR Y', 'MARCA': 'MARCA', 'NRO FABR': 'NRO FABR', 'NRO ANDE': 'NRO ANDE', 'CUADRILLA': 'CUADRILLA', 'CIUDAD': 'CIUDAD', 'DIRECCIÓN': 'DIRECCIÓN', 'CERTIF.': 'CERTIF.', });
lyr_BT3x701x501x25_6.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ÍTEM': 'ÍTEM', 'ALIMEN': 'ALIMEN', 'DO/ACO': 'DO/ACO', });
lyr_MT3x70_7.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ALIMEN.': 'ALIMEN.', 'ÍTEM': 'ÍTEM', 'DO/ACO': 'DO/ACO', });
lyr_MT3x185_L6_8.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMEN.': 'ALIMEN.', 'Ítem': 'Ítem', });
lyr_MT3x35_9.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'Alimen.': 'Alimen.', 'ÍTEM': 'ÍTEM', });
lyr_postexist_1.set('fieldImages', {'Nro Sosten': 'TextEdit', 'poste': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'XX': 'TextEdit', 'yy': 'TextEdit', });
lyr_Postacin23102024_2.set('fieldImages', {'ALIMENT.': 'TextEdit', 'Sostén': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'Nro de Fab': 'TextEdit', 'Coord. X': 'TextEdit', 'Coord. Y': 'TextEdit', });
lyr_PostExist2310_3.set('fieldImages', {'#': 'Range', 'Tipo': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 6': 'TextEdit', 'Cuadrilla 6': 'TextEdit', 'Marca': 'TextEdit', 'Número de Fábrica': 'Range', 'Fecha de Postación': 'TextEdit', 'Creado': 'TextEdit', 'Poste': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Cambio Sosten': 'CheckBox', 'Motivo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_PostNuev2310_4.set('fieldImages', {'#': 'Range', 'Tipo': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 6': 'TextEdit', 'Cuadrilla 6': 'TextEdit', 'Marca': 'TextEdit', 'Número de Fábrica': 'Range', 'Fecha de Postación': 'TextEdit', 'Creado': 'TextEdit', 'Poste': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Cambio Sosten': 'TextEdit', 'Motivo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_PDL62310_5.set('fieldImages', {'N°': 'Range', 'ALIM': 'TextEdit', 'DENOM': 'TextEdit', 'NRO DE SOSTEN': 'TextEdit', 'NRO OT': 'TextEdit', 'MES/AÑO': 'TextEdit', 'FECHA MONTAJE': 'Range', 'ESTADO': 'TextEdit', 'FECHA EN SERVICIO': 'Range', 'COORD X': 'TextEdit', 'COODR Y': 'TextEdit', 'MARCA': 'TextEdit', 'NRO FABR': 'Range', 'NRO ANDE': 'Range', 'CUADRILLA': 'TextEdit', 'CIUDAD': 'TextEdit', 'DIRECCIÓN': 'TextEdit', 'CERTIF.': 'TextEdit', });
lyr_BT3x701x501x25_6.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ÍTEM': 'TextEdit', 'ALIMEN': 'TextEdit', 'DO/ACO': 'TextEdit', });
lyr_MT3x70_7.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMEN.': '', 'ÍTEM': '', 'DO/ACO': '', });
lyr_MT3x185_L6_8.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ALIMEN.': 'TextEdit', 'Ítem': 'TextEdit', });
lyr_MT3x35_9.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'Alimen.': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_postexist_1.set('fieldLabels', {'Nro Sosten': 'inline label - visible with data', 'poste': 'inline label - visible with data', 'x': 'no label', 'y': 'no label', 'XX': 'no label', 'yy': 'no label', });
lyr_Postacin23102024_2.set('fieldLabels', {'ALIMENT.': 'no label', 'Sostén': 'no label', 'TIPO/POSTE': 'no label', 'Nro de Fab': 'no label', 'Coord. X': 'no label', 'Coord. Y': 'no label', });
lyr_PostExist2310_3.set('fieldLabels', {'#': 'no label', 'Tipo': 'no label', 'Numero de Sosten': 'no label', 'Alimentadores Lote 6': 'no label', 'Cuadrilla 6': 'no label', 'Marca': 'no label', 'Número de Fábrica': 'no label', 'Fecha de Postación': 'no label', 'Creado': 'no label', 'Poste': 'no label', 'Tipo de Poste': 'no label', 'Cambio Sosten': 'no label', 'Motivo': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_PostNuev2310_4.set('fieldLabels', {'#': 'no label', 'Tipo': 'no label', 'Numero de Sosten': 'no label', 'Alimentadores Lote 6': 'no label', 'Cuadrilla 6': 'no label', 'Marca': 'no label', 'Número de Fábrica': 'no label', 'Fecha de Postación': 'no label', 'Creado': 'no label', 'Poste': 'no label', 'Tipo de Poste': 'no label', 'Cambio Sosten': 'no label', 'Motivo': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_PDL62310_5.set('fieldLabels', {'N°': 'no label', 'ALIM': 'no label', 'DENOM': 'no label', 'NRO DE SOSTEN': 'no label', 'NRO OT': 'no label', 'MES/AÑO': 'no label', 'FECHA MONTAJE': 'no label', 'ESTADO': 'no label', 'FECHA EN SERVICIO': 'no label', 'COORD X': 'no label', 'COODR Y': 'no label', 'MARCA': 'no label', 'NRO FABR': 'no label', 'NRO ANDE': 'no label', 'CUADRILLA': 'no label', 'CIUDAD': 'no label', 'DIRECCIÓN': 'no label', 'CERTIF.': 'no label', });
lyr_BT3x701x501x25_6.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'ALIMEN': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', });
lyr_MT3x70_7.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'ALIMEN.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', });
lyr_MT3x185_L6_8.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ALIMEN.': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', });
lyr_MT3x35_9.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'Alimen.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x35_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});