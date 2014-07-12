//var n_markers = 6;

var height = 50;
var thickness = 3; // General padding between markers

var eraser_width = 55;
var eraser_depth = 35;

var marker_rad = 10; // This radius value works for standard expo dry erase markers
var marker_ridge_height = 5; // for... smoother marker entry

var fastener_width = 15;
var fastener_hole_rad = 3;

var nudge = 0.1; 
var precision = 24;
var autodesk_blue = [0.03125,0.5859375,0.78125];
var autodesk_green = [0.4375,0.6640625,0.3125];

function getParameterDefinitions() {
	return [
		{
			name: 'n_markers', 
			type: 'int',
			caption: 'Markers:',
			initial: 4
		}
	];
}

function main(params){
	return rotate([0,0,-90], difference(
		union(
			//eraser block
			cube({size:[eraser_width + thickness * 2, eraser_depth + thickness * 2, height + thickness]})
    
			//markers block
			, cube({size:[(marker_rad * 2 + thickness) * params.n_markers, marker_rad * 2 + thickness * 2, height + thickness]})
			.translate([eraser_width + thickness * 2,0,0])
    
			//fasteners();
			, fasteners(params)
		).setColor(autodesk_blue),
    	
		union(
			//eraser hole
			cube({size:[eraser_width, eraser_depth, height]})
			.translate([thickness, thickness, thickness])
            
			//marker holes
			, markers(params)
		).setColor(autodesk_green)
	).translate([-params.n_markers*(thickness + marker_rad * 2) + eraser_width,0,0]));
}

function fastener(){
	return difference(
		cube({size:[fastener_width, thickness, height + thickness]})
		, rotate([90,0,0], cylinder({r:fastener_hole_rad,h:thickness}))
		.translate([fastener_width / 2,thickness,height - thickness - fastener_hole_rad])
	);
}

function fasteners(params){
	return union(
		fastener().translate([-fastener_width,0,0])

		, fastener().translate([eraser_width + thickness * 2 + (marker_rad * 2 + thickness) * params.n_markers, 0, 0])
	);
}

function markers(params){
	p = [];
	for(var i = 0; i < params.n_markers; i++){
		p.push(
			union(
				cylinder({r:marker_rad,h:height-marker_ridge_height,fn:precision})
				, cylinder({r1:marker_rad,r2:marker_rad + thickness / 2, h:marker_ridge_height,fn:precision})
				.translate([0,0,height - marker_ridge_height])
			).translate([(marker_rad * 2 + thickness) * i, 0, 0])
		);
	}
	return union(p).translate([thickness * 2 + eraser_width + marker_rad,thickness + marker_rad,thickness])
	;
}
