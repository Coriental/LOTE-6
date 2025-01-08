ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([444063.597107, 7188652.210513, 459220.983792, 7196627.228268]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PDL60411_2 = new ol.format.GeoJSON();
var features_PDL60411_2 = format_PDL60411_2.readFeatures(json_PDL60411_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL60411_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL60411_2.addFeatures(features_PDL60411_2);
var lyr_PDL60411_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL60411_2, 
                style: style_PDL60411_2,
                popuplayertitle: "PD L6 04-11",
                interactive: true,
                title: '<img src="styles/legend/PDL60411_2.png" /> PD L6 04-11'
            });
var format_Lote616122024_3 = new ol.format.GeoJSON();
var features_Lote616122024_3 = format_Lote616122024_3.readFeatures(json_Lote616122024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_Lote616122024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote616122024_3.addFeatures(features_Lote616122024_3);
var lyr_Lote616122024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote616122024_3, 
                style: style_Lote616122024_3,
                popuplayertitle: "Lote 6 16-12-2024",
                interactive: true,
                title: '<img src="styles/legend/Lote616122024_3.png" /> Lote 6 16-12-2024'
            });
var format_postexist_4 = new ol.format.GeoJSON();
var features_postexist_4 = format_postexist_4.readFeatures(json_postexist_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_postexist_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postexist_4.addFeatures(features_postexist_4);
var lyr_postexist_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postexist_4, 
                style: style_postexist_4,
                popuplayertitle: "post exist",
                interactive: true,
                title: '<img src="styles/legend/postexist_4.png" /> post exist'
            });
var format_Postacin19112024_5 = new ol.format.GeoJSON();
var features_Postacin19112024_5 = format_Postacin19112024_5.readFeatures(json_Postacin19112024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_Postacin19112024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postacin19112024_5.addFeatures(features_Postacin19112024_5);
var lyr_Postacin19112024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Postacin19112024_5, 
                style: style_Postacin19112024_5,
                popuplayertitle: "Postación 19-11-2024",
                interactive: true,
                title: '<img src="styles/legend/Postacin19112024_5.png" /> Postación 19-11-2024'
            });
var format_PostacionL6Nuevo18122024_6 = new ol.format.GeoJSON();
var features_PostacionL6Nuevo18122024_6 = format_PostacionL6Nuevo18122024_6.readFeatures(json_PostacionL6Nuevo18122024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionL6Nuevo18122024_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL6Nuevo18122024_6.addFeatures(features_PostacionL6Nuevo18122024_6);
var lyr_PostacionL6Nuevo18122024_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL6Nuevo18122024_6, 
                style: style_PostacionL6Nuevo18122024_6,
                popuplayertitle: "Postacion L6 Nuevo 18-12-2024",
                interactive: true,
                title: '<img src="styles/legend/PostacionL6Nuevo18122024_6.png" /> Postacion L6 Nuevo 18-12-2024'
            });
var format_PostacionesL6Exist18122024_7 = new ol.format.GeoJSON();
var features_PostacionesL6Exist18122024_7 = format_PostacionesL6Exist18122024_7.readFeatures(json_PostacionesL6Exist18122024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionesL6Exist18122024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionesL6Exist18122024_7.addFeatures(features_PostacionesL6Exist18122024_7);
var lyr_PostacionesL6Exist18122024_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionesL6Exist18122024_7, 
                style: style_PostacionesL6Exist18122024_7,
                popuplayertitle: "Postaciones L6 Exist. 18-12-2024",
                interactive: true,
                title: '<img src="styles/legend/PostacionesL6Exist18122024_7.png" /> Postaciones L6 Exist. 18-12-2024'
            });
var format_BT3x701x501x25_8 = new ol.format.GeoJSON();
var features_BT3x701x501x25_8 = format_BT3x701x501x25_8.readFeatures(json_BT3x701x501x25_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25_8.addFeatures(features_BT3x701x501x25_8);
var lyr_BT3x701x501x25_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25_8, 
                style: style_BT3x701x501x25_8,
                popuplayertitle: "BT 3x70+1x50+1x25",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25_8.png" /> BT 3x70+1x50+1x25'
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
var format_MT3x70_10 = new ol.format.GeoJSON();
var features_MT3x70_10 = format_MT3x70_10.readFeatures(json_MT3x70_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70_10.addFeatures(features_MT3x70_10);
var lyr_MT3x70_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70_10, 
                style: style_MT3x70_10,
                popuplayertitle: "MT 3x70",
                interactive: true,
                title: '<img src="styles/legend/MT3x70_10.png" /> MT 3x70'
            });
var format_MT3x185_L6_11 = new ol.format.GeoJSON();
var features_MT3x185_L6_11 = format_MT3x185_L6_11.readFeatures(json_MT3x185_L6_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185_L6_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185_L6_11.addFeatures(features_MT3x185_L6_11);
var lyr_MT3x185_L6_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185_L6_11, 
                style: style_MT3x185_L6_11,
                popuplayertitle: "MT 3x185_L6",
                interactive: true,
                title: '<img src="styles/legend/MT3x185_L6_11.png" /> MT 3x185_L6'
            });
var format_estaqueoLote6_12 = new ol.format.GeoJSON();
var features_estaqueoLote6_12 = format_estaqueoLote6_12.readFeatures(json_estaqueoLote6_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_estaqueoLote6_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estaqueoLote6_12.addFeatures(features_estaqueoLote6_12);
var lyr_estaqueoLote6_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estaqueoLote6_12, 
                style: style_estaqueoLote6_12,
                popuplayertitle: "estaqueo Lote 6",
                interactive: true,
                title: '<img src="styles/legend/estaqueoLote6_12.png" /> estaqueo Lote 6'
            });
var format_L6ESTESI_13 = new ol.format.GeoJSON();
var features_L6ESTESI_13 = format_L6ESTESI_13.readFeatures(json_L6ESTESI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_L6ESTESI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L6ESTESI_13.addFeatures(features_L6ESTESI_13);
var lyr_L6ESTESI_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L6ESTESI_13, 
                style: style_L6ESTESI_13,
                popuplayertitle: "L6 ESTESI",
                interactive: true,
                title: '<img src="styles/legend/L6ESTESI_13.png" /> L6 ESTESI'
            });
var group_PRIORITARIO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "PRIORITARIO"});
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
                                layers: [lyr_PDL60411_2,lyr_Lote616122024_3,],
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
                                layers: [lyr_postexist_4,lyr_Postacin19112024_5,lyr_PostacionL6Nuevo18122024_6,lyr_PostacionesL6Exist18122024_7,],
                                fold: "open",
                                title: "LOTE 6"});
var group_AP = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "AP"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote2"});
var group_lote5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "lote 5"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "OpenStreetMap"});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "MPAA DE UBICACÓN"});

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_PDL60411_2.setVisible(true);lyr_Lote616122024_3.setVisible(true);lyr_postexist_4.setVisible(true);lyr_Postacin19112024_5.setVisible(true);lyr_PostacionL6Nuevo18122024_6.setVisible(true);lyr_PostacionesL6Exist18122024_7.setVisible(true);lyr_BT3x701x501x25_8.setVisible(true);lyr_MT3x35_9.setVisible(true);lyr_MT3x70_10.setVisible(true);lyr_MT3x185_L6_11.setVisible(true);lyr_estaqueoLote6_12.setVisible(true);lyr_L6ESTESI_13.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,group_Lote6,group_LOTE6,lyr_BT3x701x501x25_8,lyr_MT3x35_9,lyr_MT3x70_10,lyr_MT3x185_L6_11,lyr_estaqueoLote6_12,lyr_L6ESTESI_13];
lyr_PDL60411_2.set('fieldAliases', {'N°': 'N°', 'ALIM': 'ALIM', 'DENOM': 'DENOM', 'NRO DE SOSTEN': 'NRO DE SOSTEN', 'NRO OT': 'NRO OT', 'MES/AÑO': 'MES/AÑO', 'FECHA MONTAJE': 'FECHA MONTAJE', 'ESTADO': 'ESTADO', 'FECHA EN SERVICIO': 'FECHA EN SERVICIO', 'COORD X': 'COORD X', 'COODR Y': 'COODR Y', 'MARCA': 'MARCA', 'NRO FABR': 'NRO FABR', 'NRO ANDE': 'NRO ANDE', 'CUADRILLA': 'CUADRILLA', 'CIUDAD': 'CIUDAD', 'DIRECCIÓN': 'DIRECCIÓN', 'CERTIF.': 'CERTIF.', });
lyr_Lote616122024_3.set('fieldAliases', {'Alimentadores Lote 6': 'Alimentadores Lote 6', 'Numero de Sosten': 'Numero de Sosten', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_postexist_4.set('fieldAliases', {'Nro Sosten': 'Nro Sosten', 'poste': 'poste', 'x': 'x', 'y': 'y', 'XX': 'XX', 'yy': 'yy', });
lyr_Postacin19112024_5.set('fieldAliases', {'ALIMENT.': 'ALIMENT.', 'Sostén': 'Sostén', 'TIPO/POSTE': 'TIPO/POSTE', 'Nro de Fab': 'Nro de Fab', 'Coord. X.': 'Coord. X.', 'Coord. Y.': 'Coord. Y.', 'Coor X': 'Coor X', 'Coor Y': 'Coor Y', });
lyr_PostacionL6Nuevo18122024_6.set('fieldAliases', {'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 6': 'Alimentadores Lote 6', 'Fecha de Postaci�n': 'Fecha de Postaci�n', 'Poste': 'Poste', 'Tipo de Poste': 'Tipo de Poste', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_PostacionesL6Exist18122024_7.set('fieldAliases', {'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 6': 'Alimentadores Lote 6', 'Fecha de Postaci�n': 'Fecha de Postaci�n', 'Poste': 'Poste', 'Tipo de Poste': 'Tipo de Poste', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_BT3x701x501x25_8.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ÍTEM': 'ÍTEM', 'ALIMEN': 'ALIMEN', 'DO/ACO': 'DO/ACO', 'Inicio-F_1': 'Inicio-F_1', });
lyr_MT3x35_9.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'Alimen.': 'Alimen.', 'ÍTEM': 'ÍTEM', });
lyr_MT3x70_10.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ALIMEN.': 'ALIMEN.', 'ÍTEM': 'ÍTEM', 'DO/ACO': 'DO/ACO', });
lyr_MT3x185_L6_11.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMEN.': 'ALIMEN.', 'Ítem': 'Ítem', 'DO/ACO.': 'DO/ACO.', });
lyr_estaqueoLote6_12.set('fieldAliases', {'sosten': 'sosten', 'X': 'X', 'Y': 'Y', });
lyr_L6ESTESI_13.set('fieldAliases', {'ALIMENT.': 'ALIMENT.', 'Sostén': 'Sostén', 'TIPO/POSTE': 'TIPO/POSTE', 'COORD. X': 'COORD. X', 'COORD.Y': 'COORD.Y', });
lyr_PDL60411_2.set('fieldImages', {'N°': 'Range', 'ALIM': 'TextEdit', 'DENOM': 'TextEdit', 'NRO DE SOSTEN': 'TextEdit', 'NRO OT': 'TextEdit', 'MES/AÑO': 'TextEdit', 'FECHA MONTAJE': 'TextEdit', 'ESTADO': 'TextEdit', 'FECHA EN SERVICIO': 'TextEdit', 'COORD X': 'TextEdit', 'COODR Y': 'TextEdit', 'MARCA': 'TextEdit', 'NRO FABR': 'Range', 'NRO ANDE': 'Range', 'CUADRILLA': 'TextEdit', 'CIUDAD': 'TextEdit', 'DIRECCIÓN': 'TextEdit', 'CERTIF.': 'TextEdit', });
lyr_Lote616122024_3.set('fieldImages', {'Alimentadores Lote 6': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_postexist_4.set('fieldImages', {'Nro Sosten': 'TextEdit', 'poste': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'XX': 'TextEdit', 'yy': 'TextEdit', });
lyr_Postacin19112024_5.set('fieldImages', {'ALIMENT.': 'TextEdit', 'Sostén': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'Nro de Fab': 'TextEdit', 'Coord. X.': 'TextEdit', 'Coord. Y.': 'TextEdit', 'Coor X': 'TextEdit', 'Coor Y': 'TextEdit', });
lyr_PostacionL6Nuevo18122024_6.set('fieldImages', {'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 6': 'TextEdit', 'Fecha de Postaci�n': 'TextEdit', 'Poste': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_PostacionesL6Exist18122024_7.set('fieldImages', {'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 6': 'TextEdit', 'Fecha de Postaci�n': 'TextEdit', 'Poste': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_BT3x701x501x25_8.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ÍTEM': 'TextEdit', 'ALIMEN': 'TextEdit', 'DO/ACO': 'TextEdit', 'Inicio-F_1': '', });
lyr_MT3x35_9.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'Alimen.': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_MT3x70_10.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMEN.': 'TextEdit', 'ÍTEM': 'TextEdit', 'DO/ACO': 'TextEdit', });
lyr_MT3x185_L6_11.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ALIMEN.': 'TextEdit', 'Ítem': 'TextEdit', 'DO/ACO.': 'TextEdit', });
lyr_estaqueoLote6_12.set('fieldImages', {'sosten': 'TextEdit', 'X': 'Range', 'Y': 'Range', });
lyr_L6ESTESI_13.set('fieldImages', {'ALIMENT.': 'TextEdit', 'Sostén': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'COORD. X': 'Range', 'COORD.Y': 'Range', });
lyr_PDL60411_2.set('fieldLabels', {'N°': 'no label', 'ALIM': 'no label', 'DENOM': 'no label', 'NRO DE SOSTEN': 'no label', 'NRO OT': 'no label', 'MES/AÑO': 'no label', 'FECHA MONTAJE': 'no label', 'ESTADO': 'no label', 'FECHA EN SERVICIO': 'no label', 'COORD X': 'no label', 'COODR Y': 'no label', 'MARCA': 'no label', 'NRO FABR': 'no label', 'NRO ANDE': 'no label', 'CUADRILLA': 'no label', 'CIUDAD': 'no label', 'DIRECCIÓN': 'no label', 'CERTIF.': 'no label', });
lyr_Lote616122024_3.set('fieldLabels', {'Alimentadores Lote 6': 'no label', 'Numero de Sosten': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_postexist_4.set('fieldLabels', {'Nro Sosten': 'inline label - visible with data', 'poste': 'inline label - visible with data', 'x': 'no label', 'y': 'no label', 'XX': 'no label', 'yy': 'no label', });
lyr_Postacin19112024_5.set('fieldLabels', {'ALIMENT.': 'no label', 'Sostén': 'no label', 'TIPO/POSTE': 'no label', 'Nro de Fab': 'no label', 'Coord. X.': 'no label', 'Coord. Y.': 'no label', 'Coor X': 'no label', 'Coor Y': 'no label', });
lyr_PostacionL6Nuevo18122024_6.set('fieldLabels', {'Numero de Sosten': 'no label', 'Alimentadores Lote 6': 'no label', 'Fecha de Postaci�n': 'no label', 'Poste': 'no label', 'Tipo de Poste': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_PostacionesL6Exist18122024_7.set('fieldLabels', {'Numero de Sosten': 'no label', 'Alimentadores Lote 6': 'no label', 'Fecha de Postaci�n': 'no label', 'Poste': 'no label', 'Tipo de Poste': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_BT3x701x501x25_8.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'ALIMEN': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'Inicio-F_1': 'no label', });
lyr_MT3x35_9.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'Alimen.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x70_10.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'ALIMEN.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', });
lyr_MT3x185_L6_11.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ALIMEN.': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', 'DO/ACO.': 'inline label - visible with data', });
lyr_estaqueoLote6_12.set('fieldLabels', {'sosten': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_L6ESTESI_13.set('fieldLabels', {'ALIMENT.': 'no label', 'Sostén': 'no label', 'TIPO/POSTE': 'no label', 'COORD. X': 'no label', 'COORD.Y': 'no label', });
lyr_L6ESTESI_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});