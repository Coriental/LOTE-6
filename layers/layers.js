ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([444347.339299, 7189110.644166, 460475.339299, 7196604.615891]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PostacinNuevaL6_1 = new ol.format.GeoJSON();
var features_PostacinNuevaL6_1 = format_PostacinNuevaL6_1.readFeatures(json_PostacinNuevaL6_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinNuevaL6_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinNuevaL6_1.addFeatures(features_PostacinNuevaL6_1);
var lyr_PostacinNuevaL6_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinNuevaL6_1, 
                style: style_PostacinNuevaL6_1,
                popuplayertitle: "Postación Nueva L6",
                interactive: true,
                title: '<img src="styles/legend/PostacinNuevaL6_1.png" /> Postación Nueva L6'
            });
var format_postexist_2 = new ol.format.GeoJSON();
var features_postexist_2 = format_postexist_2.readFeatures(json_postexist_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_postexist_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postexist_2.addFeatures(features_postexist_2);
var lyr_postexist_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postexist_2, 
                style: style_postexist_2,
                popuplayertitle: "post exist",
                interactive: true,
                title: '<img src="styles/legend/postexist_2.png" /> post exist'
            });
var format_PD5_3 = new ol.format.GeoJSON();
var features_PD5_3 = format_PD5_3.readFeatures(json_PD5_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PD5_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PD5_3.addFeatures(features_PD5_3);
var lyr_PD5_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PD5_3, 
                style: style_PD5_3,
                popuplayertitle: "PD 5",
                interactive: true,
                title: '<img src="styles/legend/PD5_3.png" /> PD 5'
            });
var format_MT3x185_L6_4 = new ol.format.GeoJSON();
var features_MT3x185_L6_4 = format_MT3x185_L6_4.readFeatures(json_MT3x185_L6_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185_L6_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185_L6_4.addFeatures(features_MT3x185_L6_4);
var lyr_MT3x185_L6_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185_L6_4, 
                style: style_MT3x185_L6_4,
                popuplayertitle: "MT 3x185_L6",
                interactive: true,
                title: '<img src="styles/legend/MT3x185_L6_4.png" /> MT 3x185_L6'
            });
var format_MT3x70_5 = new ol.format.GeoJSON();
var features_MT3x70_5 = format_MT3x70_5.readFeatures(json_MT3x70_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70_5.addFeatures(features_MT3x70_5);
var lyr_MT3x70_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70_5, 
                style: style_MT3x70_5,
                popuplayertitle: "MT 3x70",
                interactive: true,
                title: '<img src="styles/legend/MT3x70_5.png" /> MT 3x70'
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
var format_BT3x701x501x25_7 = new ol.format.GeoJSON();
var features_BT3x701x501x25_7 = format_BT3x701x501x25_7.readFeatures(json_BT3x701x501x25_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25_7.addFeatures(features_BT3x701x501x25_7);
var lyr_BT3x701x501x25_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25_7, 
                style: style_BT3x701x501x25_7,
                popuplayertitle: "BT 3x70+1x50+1x25",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25_7.png" /> BT 3x70+1x50+1x25'
            });
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 1"});
var group_LOTE2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 2"});
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
var group_LOTE6 = new ol.layer.Group({
                                layers: [lyr_PostacinNuevaL6_1,lyr_postexist_2,],
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
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "OpenStreetMap"});

lyr_OpenStreetMap_0.setVisible(true);lyr_PostacinNuevaL6_1.setVisible(true);lyr_postexist_2.setVisible(true);lyr_PD5_3.setVisible(true);lyr_MT3x185_L6_4.setVisible(true);lyr_MT3x70_5.setVisible(true);lyr_MT3x35_6.setVisible(true);lyr_BT3x701x501x25_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_LOTE6,lyr_PD5_3,lyr_MT3x185_L6_4,lyr_MT3x70_5,lyr_MT3x35_6,lyr_BT3x701x501x25_7];
lyr_PostacinNuevaL6_1.set('fieldAliases', {'ALIMENT.': 'ALIMENT.', 'Sostén': 'Sostén', 'TIPO/POSTE': 'TIPO/POSTE', 'Nro de Fab': 'Nro de Fab', 'Coord. X': 'Coord. X', 'Coord. Y': 'Coord. Y', });
lyr_postexist_2.set('fieldAliases', {'Nro Sosten': 'Nro Sosten', 'poste': 'poste', 'x': 'x', 'y': 'y', 'XX': 'XX', 'yy': 'yy', });
lyr_PD5_3.set('fieldAliases', {'Nro de Sosten': 'Nro de Sosten', 'Alimentador': 'Alimentador', 'x': 'x', 'y': 'y', 'Nro. De Fábrica': 'Nro. De Fábrica', 'Nro. de Ande': 'Nro. de Ande', 'Cuadrilla': 'Cuadrilla', });
lyr_MT3x185_L6_4.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMEN.': 'ALIMEN.', 'Ítem': 'Ítem', });
lyr_MT3x70_5.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ALIMEN.': 'ALIMEN.', 'ÍTEM': 'ÍTEM', 'DO/ACO': 'DO/ACO', });
lyr_MT3x35_6.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'Alimen.': 'Alimen.', 'ÍTEM': 'ÍTEM', });
lyr_BT3x701x501x25_7.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ÍTEM': 'ÍTEM', 'ALIMEN': 'ALIMEN', 'DO/ACO': 'DO/ACO', });
lyr_PostacinNuevaL6_1.set('fieldImages', {'ALIMENT.': 'TextEdit', 'Sostén': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'Nro de Fab': 'TextEdit', 'Coord. X': 'TextEdit', 'Coord. Y': 'TextEdit', });
lyr_postexist_2.set('fieldImages', {'Nro Sosten': 'TextEdit', 'poste': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'XX': 'TextEdit', 'yy': 'TextEdit', });
lyr_PD5_3.set('fieldImages', {'Nro de Sosten': 'TextEdit', 'Alimentador': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Nro. De Fábrica': 'Range', 'Nro. de Ande': 'Range', 'Cuadrilla': 'TextEdit', });
lyr_MT3x185_L6_4.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': '', 'ALIMEN.': '', 'Ítem': '', });
lyr_MT3x70_5.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMEN.': '', 'ÍTEM': '', 'DO/ACO': '', });
lyr_MT3x35_6.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': '', 'Alimen.': '', 'ÍTEM': '', });
lyr_BT3x701x501x25_7.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ÍTEM': '', 'ALIMEN': '', 'DO/ACO': '', });
lyr_PostacinNuevaL6_1.set('fieldLabels', {'ALIMENT.': 'no label', 'Sostén': 'no label', 'TIPO/POSTE': 'no label', 'Nro de Fab': 'no label', 'Coord. X': 'no label', 'Coord. Y': 'no label', });
lyr_postexist_2.set('fieldLabels', {'Nro Sosten': 'no label', 'poste': 'no label', 'x': 'no label', 'y': 'no label', 'XX': 'no label', 'yy': 'no label', });
lyr_PD5_3.set('fieldLabels', {'Nro de Sosten': 'no label', 'Alimentador': 'no label', 'x': 'no label', 'y': 'no label', 'Nro. De Fábrica': 'no label', 'Nro. de Ande': 'no label', 'Cuadrilla': 'no label', });
lyr_MT3x185_L6_4.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'DO/ACO': 'no label', 'ALIMEN.': 'no label', 'Ítem': 'no label', });
lyr_MT3x70_5.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'ALIMEN.': 'no label', 'ÍTEM': 'no label', 'DO/ACO': 'no label', });
lyr_MT3x35_6.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'DO/ACO': 'no label', 'Alimen.': 'no label', 'ÍTEM': 'no label', });
lyr_BT3x701x501x25_7.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'ÍTEM': 'no label', 'ALIMEN': 'no label', 'DO/ACO': 'no label', });
lyr_BT3x701x501x25_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});