ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([445998.922047, 7190613.649096, 452243.088714, 7193458.726885]);
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
var format_POSTACIONL6_2 = new ol.format.GeoJSON();
var features_POSTACIONL6_2 = format_POSTACIONL6_2.readFeatures(json_POSTACIONL6_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_POSTACIONL6_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTACIONL6_2.addFeatures(features_POSTACIONL6_2);
var lyr_POSTACIONL6_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTACIONL6_2, 
                style: style_POSTACIONL6_2,
                popuplayertitle: "POSTACION L6",
                interactive: true,
                title: '<img src="styles/legend/POSTACIONL6_2.png" /> POSTACION L6'
            });
var format_BT3x701x501x25_3 = new ol.format.GeoJSON();
var features_BT3x701x501x25_3 = format_BT3x701x501x25_3.readFeatures(json_BT3x701x501x25_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25_3.addFeatures(features_BT3x701x501x25_3);
var lyr_BT3x701x501x25_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25_3, 
                style: style_BT3x701x501x25_3,
                popuplayertitle: "BT 3x70+1x50+1x25",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25_3.png" /> BT 3x70+1x50+1x25'
            });
var format_MT3x70_4 = new ol.format.GeoJSON();
var features_MT3x70_4 = format_MT3x70_4.readFeatures(json_MT3x70_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70_4.addFeatures(features_MT3x70_4);
var lyr_MT3x70_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70_4, 
                style: style_MT3x70_4,
                popuplayertitle: "MT 3x70",
                interactive: true,
                title: '<img src="styles/legend/MT3x70_4.png" /> MT 3x70'
            });
var format_MT3x185_L6_5 = new ol.format.GeoJSON();
var features_MT3x185_L6_5 = format_MT3x185_L6_5.readFeatures(json_MT3x185_L6_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185_L6_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185_L6_5.addFeatures(features_MT3x185_L6_5);
var lyr_MT3x185_L6_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185_L6_5, 
                style: style_MT3x185_L6_5,
                popuplayertitle: "MT 3x185_L6",
                interactive: true,
                title: '<img src="styles/legend/MT3x185_L6_5.png" /> MT 3x185_L6'
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
                                layers: [lyr_postexist_1,lyr_POSTACIONL6_2,],
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

lyr_OSMStandard_0.setVisible(true);lyr_postexist_1.setVisible(true);lyr_POSTACIONL6_2.setVisible(true);lyr_BT3x701x501x25_3.setVisible(true);lyr_MT3x70_4.setVisible(true);lyr_MT3x185_L6_5.setVisible(true);lyr_MT3x35_6.setVisible(true);
var layersList = [group_OpenStreetMap,group_LOTE6,lyr_BT3x701x501x25_3,lyr_MT3x70_4,lyr_MT3x185_L6_5,lyr_MT3x35_6];
lyr_postexist_1.set('fieldAliases', {'Nro Sosten': 'Nro Sosten', 'poste': 'poste', 'x': 'x', 'y': 'y', 'XX': 'XX', 'yy': 'yy', });
lyr_POSTACIONL6_2.set('fieldAliases', {'ALIMENT.': 'ALIMENT.', 'Sostén': 'Sostén', 'TIPO/POSTE': 'TIPO/POSTE', 'Nro de Fab': 'Nro de Fab', 'x': 'x', 'y': 'y', });
lyr_BT3x701x501x25_3.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ÍTEM': 'ÍTEM', 'ALIMEN': 'ALIMEN', 'DO/ACO': 'DO/ACO', });
lyr_MT3x70_4.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ALIMEN.': 'ALIMEN.', 'ÍTEM': 'ÍTEM', 'DO/ACO': 'DO/ACO', });
lyr_MT3x185_L6_5.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMEN.': 'ALIMEN.', 'Ítem': 'Ítem', });
lyr_MT3x35_6.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'Alimen.': 'Alimen.', 'ÍTEM': 'ÍTEM', });
lyr_postexist_1.set('fieldImages', {'Nro Sosten': 'TextEdit', 'poste': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'XX': 'TextEdit', 'yy': 'TextEdit', });
lyr_POSTACIONL6_2.set('fieldImages', {'ALIMENT.': 'TextEdit', 'Sostén': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'Nro de Fab': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_BT3x701x501x25_3.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ÍTEM': 'TextEdit', 'ALIMEN': 'TextEdit', 'DO/ACO': 'TextEdit', });
lyr_MT3x70_4.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMEN.': '', 'ÍTEM': '', 'DO/ACO': '', });
lyr_MT3x185_L6_5.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ALIMEN.': 'TextEdit', 'Ítem': 'TextEdit', });
lyr_MT3x35_6.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'Alimen.': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_postexist_1.set('fieldLabels', {'Nro Sosten': 'inline label - visible with data', 'poste': 'inline label - visible with data', 'x': 'no label', 'y': 'no label', 'XX': 'no label', 'yy': 'no label', });
lyr_POSTACIONL6_2.set('fieldLabels', {'ALIMENT.': 'inline label - visible with data', 'Sostén': 'inline label - visible with data', 'TIPO/POSTE': 'inline label - visible with data', 'Nro de Fab': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', });
lyr_BT3x701x501x25_3.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'ALIMEN': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', });
lyr_MT3x70_4.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'ALIMEN.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', });
lyr_MT3x185_L6_5.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ALIMEN.': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', });
lyr_MT3x35_6.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'Alimen.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x35_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});