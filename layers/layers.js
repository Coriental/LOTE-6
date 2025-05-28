ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([449839.902875, 7195376.812083, 452346.211562, 7196702.931136]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
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
                popuplayertitle: 'post exist',
                interactive: true,
                title: '<img src="styles/legend/postexist_2.png" /> post exist'
            });
var format_Postacin19112024_3 = new ol.format.GeoJSON();
var features_Postacin19112024_3 = format_Postacin19112024_3.readFeatures(json_Postacin19112024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_Postacin19112024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postacin19112024_3.addFeatures(features_Postacin19112024_3);
var lyr_Postacin19112024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Postacin19112024_3, 
                style: style_Postacin19112024_3,
                popuplayertitle: 'Postación 19-11-2024',
                interactive: true,
                title: '<img src="styles/legend/Postacin19112024_3.png" /> Postación 19-11-2024'
            });
var format_PostacionSistL6Exist22052025_4 = new ol.format.GeoJSON();
var features_PostacionSistL6Exist22052025_4 = format_PostacionSistL6Exist22052025_4.readFeatures(json_PostacionSistL6Exist22052025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL6Exist22052025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL6Exist22052025_4.addFeatures(features_PostacionSistL6Exist22052025_4);
var lyr_PostacionSistL6Exist22052025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL6Exist22052025_4, 
                style: style_PostacionSistL6Exist22052025_4,
                popuplayertitle: 'Postacion Sist L6 Exist 22-05-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL6Exist22052025_4.png" /> Postacion Sist L6 Exist 22-05-2025'
            });
var format_PostacionSistL6Nuevo22052025_5 = new ol.format.GeoJSON();
var features_PostacionSistL6Nuevo22052025_5 = format_PostacionSistL6Nuevo22052025_5.readFeatures(json_PostacionSistL6Nuevo22052025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL6Nuevo22052025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL6Nuevo22052025_5.addFeatures(features_PostacionSistL6Nuevo22052025_5);
var lyr_PostacionSistL6Nuevo22052025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL6Nuevo22052025_5, 
                style: style_PostacionSistL6Nuevo22052025_5,
                popuplayertitle: 'Postacion Sist L6 Nuevo 22-05-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL6Nuevo22052025_5.png" /> Postacion Sist L6 Nuevo 22-05-2025'
            });
var format_MTSubterraneo3x1x240_L6_6 = new ol.format.GeoJSON();
var features_MTSubterraneo3x1x240_L6_6 = format_MTSubterraneo3x1x240_L6_6.readFeatures(json_MTSubterraneo3x1x240_L6_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MTSubterraneo3x1x240_L6_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTSubterraneo3x1x240_L6_6.addFeatures(features_MTSubterraneo3x1x240_L6_6);
var lyr_MTSubterraneo3x1x240_L6_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTSubterraneo3x1x240_L6_6, 
                style: style_MTSubterraneo3x1x240_L6_6,
                popuplayertitle: 'MT Subterraneo 3x1x240_L6',
                interactive: true,
                title: '<img src="styles/legend/MTSubterraneo3x1x240_L6_6.png" /> MT Subterraneo 3x1x240_L6'
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
                popuplayertitle: 'BT 3x70+1x50+1x25',
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25_7.png" /> BT 3x70+1x50+1x25'
            });
var format_MT3x35_8 = new ol.format.GeoJSON();
var features_MT3x35_8 = format_MT3x35_8.readFeatures(json_MT3x35_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35_8.addFeatures(features_MT3x35_8);
var lyr_MT3x35_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35_8, 
                style: style_MT3x35_8,
                popuplayertitle: 'MT 3x35',
                interactive: true,
                title: '<img src="styles/legend/MT3x35_8.png" /> MT 3x35'
            });
var format_MT3x70_9 = new ol.format.GeoJSON();
var features_MT3x70_9 = format_MT3x70_9.readFeatures(json_MT3x70_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70_9.addFeatures(features_MT3x70_9);
var lyr_MT3x70_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70_9, 
                style: style_MT3x70_9,
                popuplayertitle: 'MT 3x70',
                interactive: true,
                title: '<img src="styles/legend/MT3x70_9.png" /> MT 3x70'
            });
var format_MT3x185_L6_10 = new ol.format.GeoJSON();
var features_MT3x185_L6_10 = format_MT3x185_L6_10.readFeatures(json_MT3x185_L6_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185_L6_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185_L6_10.addFeatures(features_MT3x185_L6_10);
var lyr_MT3x185_L6_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185_L6_10, 
                style: style_MT3x185_L6_10,
                popuplayertitle: 'MT 3x185_L6',
                interactive: true,
                title: '<img src="styles/legend/MT3x185_L6_10.png" /> MT 3x185_L6'
            });
var format_PDL60411_11 = new ol.format.GeoJSON();
var features_PDL60411_11 = format_PDL60411_11.readFeatures(json_PDL60411_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL60411_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL60411_11.addFeatures(features_PDL60411_11);
var lyr_PDL60411_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL60411_11, 
                style: style_PDL60411_11,
                popuplayertitle: 'PD L6 04-11',
                interactive: true,
                title: '<img src="styles/legend/PDL60411_11.png" /> PD L6 04-11'
            });
var format_PDL6Sist29042025_12 = new ol.format.GeoJSON();
var features_PDL6Sist29042025_12 = format_PDL6Sist29042025_12.readFeatures(json_PDL6Sist29042025_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL6Sist29042025_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL6Sist29042025_12.addFeatures(features_PDL6Sist29042025_12);
var lyr_PDL6Sist29042025_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL6Sist29042025_12, 
                style: style_PDL6Sist29042025_12,
                popuplayertitle: 'PD L6 Sist 29-04-2025',
                interactive: true,
                title: '<img src="styles/legend/PDL6Sist29042025_12.png" /> PD L6 Sist 29-04-2025'
            });
var group_Lote1 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Lote 1'});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 2'});
var group_Lote3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 3'});
var group_Lote4 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 4'});
var group_Lote5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 5'});
var group_Lote6 = new ol.layer.Group({
                                layers: [lyr_PDL60411_11,lyr_PDL6Sist29042025_12,],
                                fold: 'close',
                                title: 'Lote 6'});
var group_PRIORITARIO = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'PRIORITARIO'});
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 1'});
var group_LOTE2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 2'});
var group_FDM1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'FDM1'});
var group_FDM2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'FDM2'});
var group_VAU1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU1'});
var group_VAU2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU2'});
var group_VAU3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU3'});
var group_VAU5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU5'});
var group_VAU9 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU9'});
var group_VAU11 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU11'});
var group_VAU12 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU12'});
var group_VAU13 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU13'});
var group_VAU14 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU14'});
var group_VAU24 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU24'});
var group_VAU25 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU25'});
var group_VAU28 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU28'});
var group_N2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'N2'});
var group_N3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'N3'});
var group_LOTE3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 3'});
var group_LOTE4 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 4'});
var group_LOTE5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 5'});
var group_Baslica = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Basílica'});
var group_LOTE6 = new ol.layer.Group({
                                layers: [lyr_postexist_2,lyr_Postacin19112024_3,lyr_PostacionSistL6Exist22052025_4,lyr_PostacionSistL6Nuevo22052025_5,],
                                fold: 'close',
                                title: 'LOTE 6'});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote2'});
var group_lote5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'lote 5'});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'OpenStreetMap'});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MPAA DE UBICACÓN'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_postexist_2.setVisible(true);lyr_Postacin19112024_3.setVisible(true);lyr_PostacionSistL6Exist22052025_4.setVisible(true);lyr_PostacionSistL6Nuevo22052025_5.setVisible(true);lyr_MTSubterraneo3x1x240_L6_6.setVisible(true);lyr_BT3x701x501x25_7.setVisible(true);lyr_MT3x35_8.setVisible(true);lyr_MT3x70_9.setVisible(true);lyr_MT3x185_L6_10.setVisible(true);lyr_PDL60411_11.setVisible(true);lyr_PDL6Sist29042025_12.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,group_LOTE6,lyr_MTSubterraneo3x1x240_L6_6,lyr_BT3x701x501x25_7,lyr_MT3x35_8,lyr_MT3x70_9,lyr_MT3x185_L6_10,group_Lote6];
lyr_postexist_2.set('fieldAliases', {'Nro Sosten': 'Nro Sosten', 'poste': 'poste', 'x': 'x', 'y': 'y', 'XX': 'XX', 'yy': 'yy', });
lyr_Postacin19112024_3.set('fieldAliases', {'ALIMENT.': 'ALIMENT.', 'Sostén': 'Sostén', 'TIPO/POSTE': 'TIPO/POSTE', 'Nro de Fab': 'Nro de Fab', 'Coord. X.': 'Coord. X.', 'Coord. Y.': 'Coord. Y.', 'Coor X': 'Coor X', 'Coor Y': 'Coor Y', });
lyr_PostacionSistL6Exist22052025_4.set('fieldAliases', {'Alimentadores Lote 6': 'Alimentadores Lote 6', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_PostacionSistL6Nuevo22052025_5.set('fieldAliases', {'Alimentadores Lote 6': 'Alimentadores Lote 6', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_MTSubterraneo3x1x240_L6_6.set('fieldAliases', {'Fecha': 'Fecha', 'Inicio-Fin': 'Inicio-Fin', 'Alimentado': 'Alimentado', 'Longitud': 'Longitud', 'Item': 'Item', 'DO/ACO': 'DO/ACO', });
lyr_BT3x701x501x25_7.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ÍTEM': 'ÍTEM', 'ALIMEN': 'ALIMEN', 'DO/ACO': 'DO/ACO', 'Inicio-F_1': 'Inicio-F_1', });
lyr_MT3x35_8.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'Alimen.': 'Alimen.', 'ÍTEM': 'ÍTEM', });
lyr_MT3x70_9.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'ALIMEN.': 'ALIMEN.', 'ÍTEM': 'ÍTEM', 'DO/ACO': 'DO/ACO', });
lyr_MT3x185_L6_10.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMEN.': 'ALIMEN.', 'Ítem': 'Ítem', 'DO/ACO.': 'DO/ACO.', });
lyr_PDL60411_11.set('fieldAliases', {'N°': 'N°', 'ALIM': 'ALIM', 'DENOM': 'DENOM', 'NRO DE SOSTEN': 'NRO DE SOSTEN', 'NRO OT': 'NRO OT', 'MES/AÑO': 'MES/AÑO', 'FECHA MONTAJE': 'FECHA MONTAJE', 'ESTADO': 'ESTADO', 'FECHA EN SERVICIO': 'FECHA EN SERVICIO', 'COORD X': 'COORD X', 'COODR Y': 'COODR Y', 'MARCA': 'MARCA', 'NRO FABR': 'NRO FABR', 'NRO ANDE': 'NRO ANDE', 'CUADRILLA': 'CUADRILLA', 'CIUDAD': 'CIUDAD', 'DIRECCIÓN': 'DIRECCIÓN', 'CERTIF.': 'CERTIF.', });
lyr_PDL6Sist29042025_12.set('fieldAliases', {'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 6': 'Alimentadores Lote 6', 'N�ANDE': 'N�ANDE', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_postexist_2.set('fieldImages', {'Nro Sosten': 'TextEdit', 'poste': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'XX': 'TextEdit', 'yy': 'TextEdit', });
lyr_Postacin19112024_3.set('fieldImages', {'ALIMENT.': 'TextEdit', 'Sostén': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'Nro de Fab': 'TextEdit', 'Coord. X.': 'TextEdit', 'Coord. Y.': 'TextEdit', 'Coor X': 'TextEdit', 'Coor Y': 'TextEdit', });
lyr_PostacionSistL6Exist22052025_4.set('fieldImages', {'Alimentadores Lote 6': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_PostacionSistL6Nuevo22052025_5.set('fieldImages', {'Alimentadores Lote 6': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_MTSubterraneo3x1x240_L6_6.set('fieldImages', {'Fecha': 'TextEdit', 'Inicio-Fin': 'TextEdit', 'Alimentado': 'TextEdit', 'Longitud': 'TextEdit', 'Item': 'TextEdit', 'DO/ACO': 'TextEdit', });
lyr_BT3x701x501x25_7.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ÍTEM': 'TextEdit', 'ALIMEN': 'TextEdit', 'DO/ACO': 'TextEdit', 'Inicio-F_1': '', });
lyr_MT3x35_8.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'Alimen.': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_MT3x70_9.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMEN.': 'TextEdit', 'ÍTEM': 'TextEdit', 'DO/ACO': 'TextEdit', });
lyr_MT3x185_L6_10.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ALIMEN.': 'TextEdit', 'Ítem': 'TextEdit', 'DO/ACO.': 'TextEdit', });
lyr_PDL60411_11.set('fieldImages', {'N°': 'Range', 'ALIM': 'TextEdit', 'DENOM': 'TextEdit', 'NRO DE SOSTEN': 'TextEdit', 'NRO OT': 'TextEdit', 'MES/AÑO': 'TextEdit', 'FECHA MONTAJE': 'TextEdit', 'ESTADO': 'TextEdit', 'FECHA EN SERVICIO': 'TextEdit', 'COORD X': 'TextEdit', 'COODR Y': 'TextEdit', 'MARCA': 'TextEdit', 'NRO FABR': 'Range', 'NRO ANDE': 'Range', 'CUADRILLA': 'TextEdit', 'CIUDAD': 'TextEdit', 'DIRECCIÓN': 'TextEdit', 'CERTIF.': 'TextEdit', });
lyr_PDL6Sist29042025_12.set('fieldImages', {'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 6': 'TextEdit', 'N�ANDE': 'Range', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_postexist_2.set('fieldLabels', {'Nro Sosten': 'inline label - visible with data', 'poste': 'inline label - visible with data', 'x': 'no label', 'y': 'no label', 'XX': 'no label', 'yy': 'no label', });
lyr_Postacin19112024_3.set('fieldLabels', {'ALIMENT.': 'no label', 'Sostén': 'no label', 'TIPO/POSTE': 'no label', 'Nro de Fab': 'no label', 'Coord. X.': 'no label', 'Coord. Y.': 'no label', 'Coor X': 'no label', 'Coor Y': 'no label', });
lyr_PostacionSistL6Exist22052025_4.set('fieldLabels', {'Alimentadores Lote 6': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_PostacionSistL6Nuevo22052025_5.set('fieldLabels', {'Alimentadores Lote 6': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_MTSubterraneo3x1x240_L6_6.set('fieldLabels', {'Fecha': 'no label', 'Inicio-Fin': 'no label', 'Alimentado': 'no label', 'Longitud': 'no label', 'Item': 'no label', 'DO/ACO': 'no label', });
lyr_BT3x701x501x25_7.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'ALIMEN': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'Inicio-F_1': 'no label', });
lyr_MT3x35_8.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'Alimen.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x70_9.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'ALIMEN.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', });
lyr_MT3x185_L6_10.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ALIMEN.': 'inline label - visible with data', 'Ítem': 'inline label - visible with data', 'DO/ACO.': 'inline label - visible with data', });
lyr_PDL60411_11.set('fieldLabels', {'N°': 'no label', 'ALIM': 'no label', 'DENOM': 'no label', 'NRO DE SOSTEN': 'no label', 'NRO OT': 'no label', 'MES/AÑO': 'no label', 'FECHA MONTAJE': 'no label', 'ESTADO': 'no label', 'FECHA EN SERVICIO': 'no label', 'COORD X': 'no label', 'COODR Y': 'no label', 'MARCA': 'no label', 'NRO FABR': 'no label', 'NRO ANDE': 'no label', 'CUADRILLA': 'no label', 'CIUDAD': 'no label', 'DIRECCIÓN': 'no label', 'CERTIF.': 'no label', });
lyr_PDL6Sist29042025_12.set('fieldLabels', {'Numero de Sosten': 'no label', 'Alimentadores Lote 6': 'no label', 'N�ANDE': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_PDL6Sist29042025_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});