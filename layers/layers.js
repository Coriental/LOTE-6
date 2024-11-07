ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([438139.847085, 7186376.004600, 462238.097085, 7198548.583750]);
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
var format_PostExistsis_3 = new ol.format.GeoJSON();
var features_PostExistsis_3 = format_PostExistsis_3.readFeatures(json_PostExistsis_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostExistsis_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostExistsis_3.addFeatures(features_PostExistsis_3);
var lyr_PostExistsis_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostExistsis_3, 
                style: style_PostExistsis_3,
                popuplayertitle: "Post. Exist. sis",
                interactive: true,
                title: '<img src="styles/legend/PostExistsis_3.png" /> Post. Exist. sis'
            });
var format_PostNuevsis_4 = new ol.format.GeoJSON();
var features_PostNuevsis_4 = format_PostNuevsis_4.readFeatures(json_PostNuevsis_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostNuevsis_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostNuevsis_4.addFeatures(features_PostNuevsis_4);
var lyr_PostNuevsis_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostNuevsis_4, 
                style: style_PostNuevsis_4,
                popuplayertitle: "Post. Nuev. sis",
                interactive: true,
                title: '<img src="styles/legend/PostNuevsis_4.png" /> Post. Nuev. sis'
            });
var format_BT3x701x501x25_5 = new ol.format.GeoJSON();
var features_BT3x701x501x25_5 = format_BT3x701x501x25_5.readFeatures(json_BT3x701x501x25_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25_5.addFeatures(features_BT3x701x501x25_5);
var lyr_BT3x701x501x25_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25_5, 
                style: style_BT3x701x501x25_5,
                popuplayertitle: "BT 3x70+1x50+1x25",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25_5.png" /> BT 3x70+1x50+1x25'
            });
var format_MT3x35_6 = new ol.format.GeoJSON();
var features_MT3x35_6 = format_MT3x35_6.readFeatures(json_MT3x35_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35_6.addFeatures(features_MT3x35_6);
var lyr_MT3x35_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35_6, 
                style: style_MT3x35_6,
                popuplayertitle: "MT 3x35",
                interactive: true,
                title: '<img src="styles/legend/MT3x35_6.png" /> MT 3x35'
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
                                layers: [lyr_postexist_1,lyr_Postacin23102024_2,lyr_PostExistsis_3,lyr_PostNuevsis_4,],
                                fold: "open",
                                title: "LOTE 6"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote2"});
var group_lote5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "lote 5"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: "open",
                                title: "OpenStreetMap"});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "MPAA DE UBICACÓN"});

lyr_OSMStandard_0.setVisible(true);lyr_postexist_1.setVisible(true);lyr_Postacin23102024_2.setVisible(true);lyr_PostExistsis_3.setVisible(true);lyr_PostNuevsis_4.setVisible(true);lyr_BT3x701x501x25_5.setVisible(true);lyr_MT3x35_6.setVisible(true);lyr_MT3x70_7.setVisible(true);lyr_MT3x185_L6_8.setVisible(true);
var layersList = [group_OpenStreetMap,group_LOTE6,lyr_BT3x701x501x25_5,lyr_MT3x35_6,lyr_MT3x70_7,lyr_MT3x185_L6_8];
lyr_postexist_1.set('fieldAliases', {'Nro Sosten': 'Nro Sosten', 'poste': 'poste', 'x': 'x', 'y': 'y', 'XX': 'XX', 'yy': 'yy', });
lyr_Postacin23102024_2.set('fieldAliases', {'ALIMENT.': 'ALIMENT.', 'Sostén': 'Sostén', 'TIPO/POSTE': 'TIPO/POSTE', 'Nro de Fab': 'Nro de Fab', 'Coord. X': 'Coord. X', 'Coord. Y': 'Coord. Y', });
lyr_PostExistsis_3.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 6': 'Alimentadores Lote 6', 'Cuadrilla 6': 'Cuadrilla 6', 'Marca': 'Marca', 'Número de Fábrica': 'Número de Fábrica', 'Fecha de Postación': 'Fecha de Postación', 'Creado': 'Creado', 'Poste': 'Poste', 'Tipo de Poste': 'Tipo de Poste', 'Cambio Sosten': 'Cambio Sosten', 'Motivo': 'Motivo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_PostNuevsis_4.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 6': 'Alimentadores Lote 6', 'Cuadrilla 6': 'Cuadrilla 6', 'Marca': 'Marca', 'Número de Fábrica': 'Número de Fábrica', 'Fecha de Postación': 'Fecha de Postación', 'Creado': 'Creado', 'Poste': 'Poste', 'Tipo de Poste': 'Tipo de Poste', 'Cambio Sosten': 'Cambio Sosten', 'Motivo': 'Motivo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_BT3x701x501x25_5.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ÍTEM': 'ÍTEM', 'ALIMEN': 'ALIMEN', 'DO/ACO': 'DO/ACO', });
lyr_MT3x35_6.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'Alimen.': 'Alimen.', 'ÍTEM': 'ÍTEM', });
lyr_MT3x70_7.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ALIMEN.': 'ALIMEN.', 'ÍTEM': 'ÍTEM', 'DO/ACO': 'DO/ACO', });
lyr_MT3x185_L6_8.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMEN.': 'ALIMEN.', 'Ítem': 'Ítem', });
lyr_postexist_1.set('fieldImages', {'Nro Sosten': 'TextEdit', 'poste': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'XX': 'TextEdit', 'yy': 'TextEdit', });
lyr_Postacin23102024_2.set('fieldImages', {'ALIMENT.': 'TextEdit', 'Sostén': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'Nro de Fab': 'TextEdit', 'Coord. X': 'TextEdit', 'Coord. Y': 'TextEdit', });
lyr_PostExistsis_3.set('fieldImages', {'#': 'Range', 'Tipo': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 6': 'TextEdit', 'Cuadrilla 6': 'TextEdit', 'Marca': 'TextEdit', 'Número de Fábrica': 'Range', 'Fecha de Postación': 'TextEdit', 'Creado': 'TextEdit', 'Poste': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Cambio Sosten': 'CheckBox', 'Motivo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_PostNuevsis_4.set('fieldImages', {'#': 'Range', 'Tipo': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 6': 'TextEdit', 'Cuadrilla 6': 'TextEdit', 'Marca': 'TextEdit', 'Número de Fábrica': 'Range', 'Fecha de Postación': 'TextEdit', 'Creado': 'TextEdit', 'Poste': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Cambio Sosten': 'TextEdit', 'Motivo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_BT3x701x501x25_5.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ÍTEM': 'TextEdit', 'ALIMEN': 'TextEdit', 'DO/ACO': 'TextEdit', });
lyr_MT3x35_6.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'Alimen.': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_MT3x70_7.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMEN.': 'TextEdit', 'ÍTEM': 'TextEdit', 'DO/ACO': 'TextEdit', });
lyr_MT3x185_L6_8.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ALIMEN.': 'TextEdit', 'Ítem': 'TextEdit', });
lyr_postexist_1.set('fieldLabels', {'Nro Sosten': 'inline label - visible with data', 'poste': 'inline label - visible with data', 'x': 'no label', 'y': 'no label', 'XX': 'no label', 'yy': 'no label', });
lyr_Postacin23102024_2.set('fieldLabels', {'ALIMENT.': 'inline label - visible with data', 'Sostén': 'inline label - visible with data', 'TIPO/POSTE': 'inline label - visible with data', 'Nro de Fab': 'inline label - visible with data', 'Coord. X': 'inline label - visible with data', 'Coord. Y': 'inline label - visible with data', });
lyr_PostExistsis_3.set('fieldLabels', {'#': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Numero de Sosten': 'inline label - visible with data', 'Alimentadores Lote 6': 'inline label - visible with data', 'Cuadrilla 6': 'inline label - visible with data', 'Marca': 'inline label - visible with data', 'Número de Fábrica': 'inline label - visible with data', 'Fecha de Postación': 'inline label - visible with data', 'Creado': 'inline label - visible with data', 'Poste': 'inline label - visible with data', 'Tipo de Poste': 'inline label - visible with data', 'Cambio Sosten': 'inline label - visible with data', 'Motivo': 'inline label - visible with data', 'Latitud': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_PostNuevsis_4.set('fieldLabels', {'#': 'no label', 'Tipo': 'no label', 'Numero de Sosten': 'no label', 'Alimentadores Lote 6': 'no label', 'Cuadrilla 6': 'no label', 'Marca': 'no label', 'Número de Fábrica': 'no label', 'Fecha de Postación': 'no label', 'Creado': 'no label', 'Poste': 'no label', 'Tipo de Poste': 'no label', 'Cambio Sosten': 'no label', 'Motivo': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_BT3x701x501x25_5.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'ALIMEN': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', });
lyr_MT3x35_6.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'Alimen.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x70_7.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'ALIMEN.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', });
lyr_MT3x185_L6_8.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ALIMEN.': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', });
lyr_MT3x185_L6_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});