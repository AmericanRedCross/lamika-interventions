//JS and Leaflet

//tile layer
	//mapbox style
var osm = L.tileLayer("https://api.mapbox.com/styles/v1/americanredcross/ciyf7a6k9000g2smfg3nhz9ua/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW1lcmljYW5yZWRjcm9zcyIsImEiOiJzdHVRWjA4In0.bnfdwZhKX8tQeMkwY-kknQ", {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 20,
		}),
		imagery = L.tileLayer("https://api.mapbox.com/styles/v1/americanredcross/ciyxzd2hl00112rpexc7whp9j/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW1lcmljYW5yZWRjcm9zcyIsImEiOiJzdHVRWjA4In0.bnfdwZhKX8tQeMkwY-kknQ", {
			attribution: 'Mapgive, Digital Globe, NextView License',
			maxZoom: 20,
		});

//intitialize map
var map = L.map('map',{
	center: [18.52489,-72.33451],
	zoom: 16,
	layers: [osm,imagery]
});

//LAMIKA logo

var logo = L.control({position: 'bottomleft'});
logo.onAdd=function(map){
	var div = L.DomUtil.create('div','myclass');
	div.innerHTML="<img src= './lib/img/LAMIKA-logo.jpg'/>";
	return div;
}
logo.addTo(map);

//icons for geojsons

var watertap = new L.Icon({iconUrl:'./lib/img/watertap.png', iconSize: 20});
var school = new L.Icon({iconUrl:'./lib/img/school.png', iconSize: 20});
var health = new L.Icon({iconUrl:'./lib/img/healthfacilities.png', iconSize:20});
var hrc = new L.Icon({iconUrl:'./lib/img/westBranch.png', iconSize:25});
var lamps = new L.Icon({iconUrl:'./lib/img/solarlights.png', iconSize:15});

//styles for lines and polys
var pubSpacesStyle = {
	"color": "#8ec06c",
	"weight": 1,
	"opacity": 0.75
};

var buildingsStyle = {
	"color": "#ecb731",
	"weight": 1,
	"opacity": 0.75
};

var roadsStyle = {
	"color": "#ed1b2e",
	"weight": 5,
	"opacity": 0.75
};

var corridorsStyle = {
	"color": "#7f181b",
	"weight": 2,
	"opacity": 0.75
};

var wallsStyle = {
	"color": "9f9fa3",
	"weight": 1,
	"opacity": 0.75
};

//set icons and info windows
function waterIcon(feature,layer){
		layer.setIcon(watertap);
};

function lampsIcon(feature,layer){
		layer.setIcon(lamps);

};

function schoolInfoWindow(feature,layer){
	var html = "<p class='infoHeader'>" + "<b>" + feature.properties.name + "</b>";
	if(feature.properties.beforeImg.length > 1) {
		html += "</p>"  + "Before:" + "<br>" +
		"<img style='max-height:200px;max-width:200px;' src='" + feature.properties.beforeImg + "' />";
	} else {

	}
	if(feature.properties.afterImg.length > 1) {
		html+= "<br>" + "After: " + "<br>" +
		"<img style='max-height:200px;max-width:200px;' src='" + feature.properties.afterImg + "'/>";
	} else {

	}

	layer.bindPopup(html),
	layer.setIcon(school);
};

function healthInfoWindow(feature,layer){
	var html = "<p class='infoHeader'>" + "<b>" + feature.properties.name + "</b>";
	if(feature.properties.beforeImg.length > 1) {
		html += "</p>"  + "Before:" + "<br>" +
		"<img style='max-height:200px;max-width:200px;' src='" + feature.properties.beforeImg + "' />";
	} else {

	}
	if(feature.properties.afterImg.length > 1) {
		html+= "<br>" + "After: " + "<br>" +
		"<img style='max-height:200px;max-width:200px;' src='" + feature.properties.afterImg + "'/>";
	} else {

	}
		layer.bindPopup(html),
		layer.setIcon(health);
};

function hrcInfoWindow(feature,layer){
	var html = "<p class='infoHeader'>" + "<b>" + feature.properties.name + "</b>";
	if(feature.properties.beforeImg.length > 1) {
		html += "</p>"  + "Before:" + "<br>" +
		"<img style='max-height:200px;max-width:200px;' src='" + feature.properties.beforeImg + "' />";
	} else {

	}
	if(feature.properties.afterImg.length > 1) {
		html+= "<br>" + "After: " + "<br>" +
		"<img style='max-height:200px;max-width:200px;' src='" + feature.properties.afterImg + "'/>";
	} else {

	}
		layer.bindPopup(html),
		layer.setIcon(hrc);
};

function pubSpaceInfoWindow(feature,layer){
	var html = "<p class='infoHeader'>" + "<b>" + feature.properties.name + "</b>";
	if(feature.properties.beforeImg.length > 1) {
		html += "</p>"  + "Before:" + "<br>" +
		"<img style='max-height:200px;max-width:200px;' src='" + feature.properties.beforeImg + "' />";
	} else {

	}
	if(feature.properties.afterImg.length > 1) {
		html+= "<br>" + "After: " + "<br>" +
		"<img style='max-height:200px;max-width:200px;' src='" + feature.properties.afterImg + "'/>";
	} else {

	}

	layer.bindPopup(html);

};

function roadInfoWindow(feature,layer){
	var html = "<p class='infoHeader'>" + "<b>" + feature.properties.name + "</b>";
	if(feature.properties.beforeImg.length > 1) {
		html += "</p>"  + "Before:" + "<br>" +
		"<img style='max-height:200px;max-width:200px;' src='" + feature.properties.beforeImg + "' />";
	} else {

	}
	if(feature.properties.afterImg.length > 1) {
		html+= "<br>" + "After: " + "<br>" +
		"<img style='max-height:200px;max-width:200px;' src='" + feature.properties.afterImg + "'/>";
	} else {

	}

	layer.bindPopup(html);

};

function corridorInfoWindow(feature,layer){
	var html =
	"<p class='infoHeader'>" + "<b>" + feature.properties.name + "</b>";
	if(feature.properties.beforeImg.length > 1) {
		html += "</p>"  + "Before:" + "<br>" +
		"<img style='max-height:200px;max-width:200px;' src='" + feature.properties.beforeImg + "' />";
	} else {

	}
	if(feature.properties.afterImg.length > 1) {
		html+= "<br>" + "After: " + "<br>" +
		"<img style='max-height:200px;max-width:200px;' src='" + feature.properties.afterImg + "'/>";
	} else {

	}

	layer.bindPopup(html);

};

function addDataToMap(data,map){
	var dataLayer = L.geoJson(data);
	dataLayer.addTo(map);
};

//add geojsons

	//waterpoints
$.getJSON("./data/waterPoints.geojson", function(data){
		 var waterPoints = L.geoJson(data,{
		 onEachFeature: waterIcon
	});
	waterPoints.addTo(map);
	controlLayers.addOverlay(waterPoints, "Water Points");
});

	//schools
$.getJSON("./data/schools.geojson",function(data){
		var schools = L.geoJson(data, {
			onEachFeature: schoolInfoWindow
		});
	schools.addTo(map);
	controlLayers.addOverlay(schools, "Schools");
});

	//hospitals
$.getJSON("./data/health.geojson",function(data){
		var healthFacilities = L.geoJson(data, {
			onEachFeature: healthInfoWindow
		});
	healthFacilities.addTo(map);
	controlLayers.addOverlay(healthFacilities, "Health Facilities");
});

	//West Branch
$.getJSON("./data/hrc.geojson",function(data){
		var westBranch = L.geoJson(data, {
			onEachFeature: hrcInfoWindow
		});
	westBranch.addTo(map);
	controlLayers.addOverlay(westBranch, "HRC West Branch Office");
});

	//public spaces
$.getJSON("./data/publicSpaces.geojson", function(data){
		 var publicSpaces = L.geoJson(data, {
			 style: pubSpacesStyle,
		 onEachFeature: pubSpaceInfoWindow
	});
publicSpaces.addTo(map);
controlLayers.addOverlay(publicSpaces, "Public Spaces");
});

	//buildings
$.getJSON("./data/retrofittedBuildings.geojson", function(data){
		 var buildings = L.geoJson(data, {
			 style: buildingsStyle,
			 interactive: false
	});
buildings.addTo(map);
controlLayers.addOverlay(buildings, "Retrofitted Buildings");
});

	//retainingWalls
$.getJSON("./data/retainingWalls.geojson", function(data){
	var walls = L.geoJson(data, {
		style: wallsStyle
	});
	walls.addTo(map);
	controlLayers.addOverlay(walls, "Retaining Walls");
});

	//roads
	$.getJSON("./data/roads.geojson", function(data){
			 var roads = L.geoJson(data, {
				 style: roadsStyle,
			 onEachFeature: roadInfoWindow
		});
	roads.addTo(map);
	controlLayers.addOverlay(roads, "Roads");
	});

//corridors

$.getJSON("./data/corridors.geojson", function(data){
		 var corridors = L.geoJson(data, {
			 style: corridorsStyle,
	 		 onEachFeature: corridorInfoWindow
	});
corridors.addTo(map);
controlLayers.addOverlay(corridors, "Corridors");
});

//solarLamps
$.getJSON("./data/solarLamps.geojson", function(data){
		 var solarLamps = L.geoJson(data,{
		 onEachFeature: lampsIcon,
		 interactive: false
	});
	solarLamps.addTo(map);
	controlLayers.addOverlay(solarLamps, "Solar Lights");
});


//legend and layer controls
	//basemaps
var baseMaps = {
	"Satellite Imagery":imagery,
	"OpenStreetMap":osm
};

		//create control layer variable for toggling layers layer control
var controlLayers = L.control.layers(baseMaps).addTo(map);
