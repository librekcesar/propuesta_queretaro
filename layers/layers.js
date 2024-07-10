var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_QER1_v63_1 = new ol.format.GeoJSON();
var features_QER1_v63_1 = format_QER1_v63_1.readFeatures(json_QER1_v63_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QER1_v63_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QER1_v63_1.addFeatures(features_QER1_v63_1);
var lyr_QER1_v63_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QER1_v63_1, 
                style: style_QER1_v63_1,
                interactive: true,
    title: 'QER1_v63<br />\
    <img src="styles/legend/QER1_v63_1_0.png" /> QER1<br />\
    <img src="styles/legend/QER1_v63_1_1.png" /> QER2<br />\
    <img src="styles/legend/QER1_v63_1_2.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_QER1_v63_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_QER1_v63_1];
lyr_QER1_v63_1.set('fieldAliases', {'zonificacion': 'zonificacion', 'station_code': 'station_code', 'prop': 'prop', 'VOLUMEN': 'VOLUMEN', 'PROMEDIO': 'PROMEDIO', 'PORCENTAJE': 'PORCENTAJE', });
lyr_QER1_v63_1.set('fieldImages', {'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'prop': 'TextEdit', 'VOLUMEN': 'Range', 'PROMEDIO': 'Range', 'PORCENTAJE': 'TextEdit', });
lyr_QER1_v63_1.set('fieldLabels', {'zonificacion': 'header label', 'station_code': 'header label', 'prop': 'header label', 'VOLUMEN': 'header label', 'PROMEDIO': 'header label', 'PORCENTAJE': 'header label', });
lyr_QER1_v63_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});