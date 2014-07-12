// source: dry_eraser.jscad

// producer: OpenJSCAD CLI 0.010
function main(){


return CSG.cube({center: [NaN,NaN,NaN],radius: [NaN,NaN,NaN], resolution: 16}).setColor(0,0,1).union([CSG.cube({center: [NaN,NaN,NaN],radius: [NaN,NaN,NaN], resolution: 16}).translate([,0,0]).setColor(0,0.502,0),
CSG.cube({center: [NaN,NaN,NaN],radius: [NaN,NaN,NaN], resolution: 16}).translate([NaN,0,0]).union([CSG.cube({center: [NaN,NaN,NaN],radius: [NaN,NaN,NaN], resolution: 16}).translate([,0,0])]).setColor(1,0,0)]).subtract([CSG.cube({center: [NaN,NaN,NaN],radius: [NaN,NaN,NaN], resolution: 16}).translate([,,]),
.translate([,,])]);
};