// ==UserScript==
// @name 💩-Cloud
// @version 1.5
// @description made with 💩 in potsdam
// @include https://schul-cloud.org/*
// @downloadURL https://raw.githubusercontent.com/karlbeecken/made-with-poop-in-potsdam/master/script.user.js
// @updateURL https://raw.githubusercontent.com/karlbeecken/made-with-poop-in-potsdam/master/script.user.js
// ==/UserScript==

// replace all Schul with poop

function walkText(node) {
  if (node.nodeType == 3) {
    node.data = node.data.replace(/Schul-Cloud/, "💩-Cloud");
    node.data = node.data.replace(/schul-cloud/, "💩-cloud");
    node.data = node.data.replace(/Hasso-Plattner-Institut/g, "Heinz-Plattnasen-Institut");
    node.data = node.data.replace(/Kara/g, "Kaka");
    node.data = node.data.replace(/Abgabe/g, "Abkacke");
    node.data = node.data.replace(/Aufgaben|Aufgabe/g, "Kinderarbeit");
    node.data = node.data.replace(/Neuigkeiten/g, "Fake News");
    node.data = node.data.replace(/Team/g, "Clan");
    node.data = node.data.replace(/kkos/g, "kakaos");
  }
  if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
    for (var i = 0; i < node.childNodes.length; i++) {
      walkText(node.childNodes[i]);
    }
  }
}
walkText(document.body);
walkText(document.head);


// modify footer to correct the given false statements, there is no ❤️ anymore!

if (document.querySelector('.made-with-love')) {
	document.querySelector('.made-with-love').innerHTML = "Made with <span class=\"heart\">💩</span> in Potsdam"
}

// modify logo

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle(`
aside.nav-sidebar .sc-branding .cloud-logo {
	display: inline-block;
	vertical-align: top;
	width: 100%;
	height: 100%;
	margin-top: 5px;
	margin-bottom: -5px;
	margin-right: .25rem;
	background: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' width='340' height='60' fill='%23fff' fill-rule='evenodd' version='1.1' id='svg3767' sodipodi:docname='schul-cloud-logo.svg' inkscape:version='0.92.4 5da689c313, 2019-01-14'%3E%3Cmetadata id='metadata3773'%3E%3Crdf:RDF%3E%3Ccc:Work rdf:about=''%3E%3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E%3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E%3Cdc:title%3E%3C/dc:title%3E%3C/cc:Work%3E%3C/rdf:RDF%3E%3C/metadata%3E%3Cdefs id='defs3771' /%3E%3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='1366' inkscape:window-height='703' id='namedview3769' showgrid='false' inkscape:zoom='2.4249603' inkscape:cx='144.64292' inkscape:cy='54.52978' inkscape:window-x='0' inkscape:window-y='0' inkscape:window-maximized='1' inkscape:current-layer='svg3767' /%3E%3Cpath d='M140.314 22.76l-7.7 7.693c-1.202 1.2-1.485 2.753-.707 3.53s2.332.494 3.533-.706l7.324-7.316 1.364.65-7.68 7.67a2.464 2.464 0 00-.706 1.977l-5.23 1.835-2.824-2.82 1.836-5.226a2.48 2.48 0 001.98-.705l8.247-8.238.566 1.656zm5.94 5.257c2.974 2.343 4.747 5.633 4.747 9.15 0 7.087-6.896 12.778-15.392 12.778H90.134c-6.896 0-12.293.7-16.5-2.895-5.997-4.492-1.9-18.07 13.392-15.074 0-7.487 7.795-11.88 16.09-8.585 1.3-8.086 9.794-13.078 18.4-13.377 6.664-.232 13.433 2.373 17.077 8.713l-9.78 9.77c-.212.21-.565.707-.635 1.06l-4.073 10.05a1.48 1.48 0 00-.145.773c-.703.438-1.396 1.06-1.83 1.29-1.817.97-3.39.55-4.913-.75-1.5-1.27-2.61-2.922-4.304-3.96-1.592-.973-3.38-1.295-5.145-.6-1.797.708-3.035 2.013-4.35 3.364-1.145 1.176-2.7 2.73-4.5 2.517-1.7-.202-2.822-2.03-4.02-3.07-1.298-1.13-2.888-1.826-4.618-1.336-1.547.44-2.71 1.55-3.898 2.566-.472.403-1.164.84-1.08 1.558.093.794.976 1.06 1.625.77.634-.284 1.013-.88 1.492-1.345.6-.584 1.36-1.166 2.15-1.463 1.793-.673 3.046.796 4.167 1.97 1.095 1.148 2.3 2.232 3.97 2.353 1.706.124 3.266-.69 4.552-1.735 2.112-1.72 4.51-5.63 7.695-4.36 3.61 1.44 5.36 6.748 9.876 6.073.736-.11 3.546-1.243 4.786-2.402.183-.017.368-.06.553-.15l10.06-4.07c.355-.07.85-.422 1.062-.634l8.96-8.948z' id='path3763' /%3E%3Cpath d='m 30.546,43.123 c 0,0.364508 -0.295492,0.66 -0.66,0.66 H 26.62 c -0.364508,0 -0.66,-0.295492 -0.66,-0.66 V 33.025 h -9.372 v 10.098 c 0,0.364508 -0.295492,0.66 -0.66,0.66 H 12.66 C 12.295492,43.783 12,43.487508 12,43.123 V 19.9 c 0,-0.363 0.297,-0.627 0.66,-0.627 h 3.267 c 0.363,0 0.66,0.264 0.66,0.627 V 29 h 9.372 v -9.1 c 0,-0.363 0.297,-0.627 0.66,-0.627 h 3.267 c 0.363,0 0.66,0.264 0.66,0.627 V 43.132 Z M 52.566,26.92 c 0,5.84 -4.422,7.722 -9.504,7.722 -0.858,0 -2.178,-0.1 -2.937,-0.132 v 8.613 c 0,0.363 -0.264,0.66 -0.627,0.66 h -3.3 c -0.364508,0 -0.66,-0.295492 -0.66,-0.66 V 20.42 c 0,-0.66 0.396,-0.9 1.056,-1 1.716,-0.264 4.06,-0.43 6.468,-0.43 5.082,0 9.504,1.782 9.504,7.623 v 0.297 z m -4.554,0 v -0.297 c 0,-2.772 -1.65,-3.828 -4.95,-3.828 -0.693,0 -2.343,0.066 -2.937,0.132 v 7.854 c 0.978346,0.05037 1.957494,0.08371 2.937,0.1 3.564,0 4.95,-1.32 4.95,-3.96 z m 12.995,16.203 c 0,0.364508 -0.295492,0.66 -0.66,0.66 H 57.08 c -0.364508,0 -0.66,-0.295492 -0.66,-0.66 V 19.9 c 0,-0.363 0.297,-0.627 0.66,-0.627 h 3.267 c 0.363,0 0.66,0.264 0.66,0.627 v 23.232 z m 185.011,-8.328 c 0,0.33 -0.264,0.56 -0.627,0.56 h -6.567 c -0.363,0 -0.627,-0.198 -0.627,-0.56 V 33.52 c 0,-0.33 0.264,-0.594 0.627,-0.594 h 6.567 c 0.363,0 0.627,0.23 0.627,0.594 v 1.287 z m 19.024,8.15 c 0,0.396 -0.297,0.594 -0.66,0.66 -1.386,0.264 -2.673,0.43 -5.478,0.43 -4.06,0 -8.712,-2.178 -8.712,-10.197 V 29.26 c 0,-8.085 4.653,-10.197 8.712,-10.197 2.08,0 4.092,0.297 5.544,0.528 0.297,0.033 0.528,0.132 0.528,0.43 v 1.683 c 0,0.198 -0.066,0.363 -0.396,0.363 h -0.1 c -1.188,-0.1 -3.63,-0.297 -5.544,-0.297 -3.234,0 -5.742,1.88 -5.742,7.5 v 4.587 c 0,5.544 2.508,7.5 5.742,7.5 1.88,0 4.257,-0.165 5.445,-0.264 h 0.132 c 0.363,0 0.528,0.165 0.528,0.528 v 1.353 z m 6.83,0.198 c 0,0.33 -0.23,0.66 -0.594,0.66 h -1.716 c -0.33,0 -0.594,-0.297 -0.594,-0.66 v -23.53 c 0,-0.33 0.23,-0.627 0.594,-0.627 h 1.716 c 0.33,0 0.594,0.264 0.594,0.627 z m 18.918,-7.16 c 0,4.85 -2.508,8.052 -7.36,8.052 -4.852,0 -7.326,-3.2 -7.326,-8.052 v -2.508 c 0,-4.85 2.475,-8.052 7.326,-8.052 4.851,0 7.36,3.2 7.36,8.052 z m -2.904,0 v -2.508 c 0,-3.366 -1.353,-5.5 -4.455,-5.5 -3.07,0 -4.422,2.112 -4.422,5.5 v 2.508 c 0,3.366 1.32,5.5 4.422,5.5 3.07,0 4.455,-2.112 4.455,-5.5 z m 20.855,7.16 c 0,0.363 -0.264,0.66 -0.627,0.66 h -1.65 c -0.363,0 -0.627,-0.297 -0.627,-0.66 v -0.627 c -1.815,1.023 -3.3,1.518 -5.247,1.518 -3.96,0 -5.742,-2.475 -5.742,-6.864 V 26.326 c 0,-0.364508 0.29549,-0.66 0.66,-0.66 h 1.584 c 0.36451,0 0.66,0.295492 0.66,0.66 v 10.857 c 0,3.333 1.122,4.356 3.63,4.356 1.386,0 2.937,-0.528 4.455,-1.287 V 26.326 c 0,-0.33 0.297,-0.66 0.66,-0.66 h 1.617 c 0.33,0 0.627,0.297 0.627,0.66 v 16.83 z m 18.103,-0.43 c 0,0.43 -0.1,0.66 -0.693,0.76 -2.046,0.396 -4.06,0.56 -6.072,0.56 -4.917,0 -7.194,-3.2 -7.194,-8.15 V 33.52 c 0,-5.18 2.376,-8.085 7.194,-8.085 1.29378,0.0061 2.58496,0.116412 3.861,0.33 v -6.138 c 0,-0.33 0.264,-0.627 0.627,-0.627 h 1.683 c 0.33,0 0.594,0.264 0.594,0.627 v 23.1 z m -2.904,-1.42 v -13.1 c -1.1,-0.198 -2.805,-0.23 -3.86,-0.23 -3.234,0 -4.3,2.013 -4.3,5.544 v 2.376 c 0,3.597 1.023,5.6 4.3,5.6 1.122,0 2.74,-0.1 3.86,-0.198 z' id='path3765' inkscape:connector-curvature='0' style='fill-rule:nonzero' sodipodi:nodetypes='csssccssssssssccssssccsscssssscsscscsscccsccssssssscccsssssssccccsssscssscsssscssccssssssssssssssssssssssscssscsssssssscssssccccsssccssssccccsssscc' /%3E%3Cg id='图层_2' transform='translate(66.929314,-24.704989)'%3E%3Cg id='g3860'%3E%3Cpath id='path3842' style='fill:%23865d53;stroke-width:0.45504001' d='m 153.91519,59.716717 c -0.5961,-1.237709 -1.57443,-2.516371 -3.17163,-3.335443 -1.07844,-0.67346 -2.07953,-1.01929 -2.73479,-1.196756 0.69621,-2.548224 -0.29122,-4.577702 -1.6791,-6.092985 -2.06133,-2.220595 -4.21822,-2.543674 -4.21822,-2.543674 h -0.004 c 0.70987,-1.378771 0.97834,-2.975961 0.61886,-4.545849 -0.45504,-1.938471 -1.49708,-3.157978 -2.87131,-3.9725 -1.40607,-0.832723 -3.14432,-1.242259 -4.92808,-1.560787 -0.85547,-0.154713 -4.46394,-0.659808 -5.96102,-2.73024 -1.20586,-1.679097 -1.24226,-4.700563 -1.56989,-5.606093 -0.35038,-0.932832 -1.53803,-0.523296 -2.8349,0.345831 -1.51528,1.010189 -4.65506,4.254624 -5.86547,7.503609 -0.92373,2.489069 -0.94648,4.645959 -0.58245,6.320506 -1.49707,0.250272 -2.62102,0.755366 -2.83489,0.855475 -0.0728,0.02275 -0.14562,0.0455 -0.22298,0.07736 -1.36966,0.56425 -4.29102,3.194381 -4.55494,7.212384 -0.091,1.428826 0.0956,2.871302 0.54604,4.21367 -1.79285,0.500544 -2.83034,1.155802 -2.84855,1.169453 -0.91008,0.34128 -2.3571,1.342368 -2.79849,1.879315 -0.89643,1.082996 -1.51984,2.370759 -1.88842,3.722228 -0.80542,2.939558 -0.50964,6.284102 0.91918,8.99614 0.79177,1.506183 1.87477,3.107924 3.06697,4.331981 3.89059,3.999802 10.60698,5.510536 15.9082,6.384214 6.45702,1.06479 13.21891,0.691656 19.26185,-1.80651 9.06439,-3.74043 11.4761,-9.756059 11.83104,-11.453358 0.79632,-3.781383 -0.16837,-7.317043 -0.58246,-8.167968 z' inkscape:connector-curvature='0' /%3E%3Cg id='g3856'%3E%3Cg id='g3848'%3E%3Cellipse id='ellipse3844' transform='rotate(-83.650318)' style='fill:%23ffffff;stroke-width:0.45505583' ry='7.0533652' rx='7.5584774' cy='144.2357' cx='-40.032246' /%3E%3Cpath id='path3846' style='fill:%232f2f2f;stroke-width:0.45504001' d='m 141.96584,55.726016 c -0.10466,1.501632 -1.42882,2.648333 -2.95321,2.557325 -1.52893,-0.08646 -2.68473,-1.383322 -2.58008,-2.884954 0.10011,-1.506182 1.41973,-2.648333 2.94866,-2.557325 1.52894,0.08646 2.68929,1.383322 2.58463,2.884954' inkscape:connector-curvature='0' /%3E%3C/g%3E%3Cg id='g3854'%3E%3Cellipse id='ellipse3850' transform='rotate(-4.3125781)' style='fill:%23ffffff;stroke-width:0.45505431' ry='7.5584526' rx='7.0533419' cy='64.545578' cx='114.60867' /%3E%3Cpath id='path3852' style='fill:%232f2f2f;stroke-width:0.45504001' d='m 122.12155,55.166317 c 0.17291,1.497081 -0.91463,2.866752 -2.42991,3.057869 -1.51984,0.195667 -2.89406,-0.864576 -3.06698,-2.357108 -0.18201,-1.497081 0.90554,-2.866752 2.42537,-3.062419 1.51528,-0.191117 2.89405,0.869127 3.07152,2.361658' inkscape:connector-curvature='0' /%3E%3C/g%3E%3C/g%3E%3Cpath id='path3858' style='fill:%23ed6d31;stroke-width:0.45504001' d='m 139.56323,66.23744 c -1.01019,-0.68256 -2.2843,-0.23207 -3.40825,0 -3.13977,0.646157 -5.89277,0.673459 -7.21694,0.673459 -1.32416,0 -4.07715,-0.0273 -7.21693,-0.673459 -1.12395,-0.23207 -2.39806,-0.68256 -3.40825,0 -1.28321,0.864576 -0.33673,3.97705 1.68365,6.079334 1.21951,1.269562 4.12721,3.735879 8.94609,3.735879 4.81432,0 7.72203,-2.466317 8.94608,-3.735879 2.01128,-2.102284 2.95776,-5.210208 1.67455,-6.079334 z' inkscape:connector-curvature='0' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	-webkit-background-size: contain;
	background-size: contain;
	background-repeat: no-repeat;
}
`)

if (document.querySelector('.logo')) {
	document.querySelector('.logo').src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIzNDAiCiAgIGhlaWdodD0iNjAiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzI4MiIKICAgc29kaXBvZGk6ZG9jbmFtZT0ic2NodWwtY2xvdWQtY29sb3Iuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjQgNWRhNjg5YzMxMywgMjAxOS0wMS0xNCI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMjg2Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEzNjYiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNzAzIgogICAgIGlkPSJuYW1lZHZpZXcyODQiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgaW5rc2NhcGU6em9vbT0iMi4yNjQ3MDU5IgogICAgIGlua3NjYXBlOmN4PSIxNzguOTQxMzUiCiAgICAgaW5rc2NhcGU6Y3k9Ii0xMy4xODI5OTkiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJnMjgwIiAvPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyNjMiPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBpZD0iYSIKICAgICAgIHgxPSIxMjAuMjY5MzciCiAgICAgICB4Mj0iMTYzLjE4ODE5IgogICAgICAgeTE9IjI0LjMwMTEzIgogICAgICAgeTI9IjIzLjMzODMyNiIKICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPSJzY2FsZSgxLjkwMjAwMTcsMC41MjU3NjE4OCkiCiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wCiAgICAgICAgIG9mZnNldD0iMCUiCiAgICAgICAgIHN0b3AtY29sb3I9IiNCMTA2M0EiCiAgICAgICAgIGlkPSJzdG9wMjUyIiAvPgogICAgICA8c3RvcAogICAgICAgICBvZmZzZXQ9IjEwMCUiCiAgICAgICAgIHN0b3AtY29sb3I9IiNGNkE4MDAiCiAgICAgICAgIGlkPSJzdG9wMjU0IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudAogICAgICAgaWQ9ImMiCiAgICAgICB4MT0iMCUiCiAgICAgICB5MT0iNTAlIgogICAgICAgeTI9IjUwJSI+CiAgICAgIDxzdG9wCiAgICAgICAgIG9mZnNldD0iMCUiCiAgICAgICAgIHN0b3AtY29sb3I9IiNCMTA1M0EiCiAgICAgICAgIGlkPSJzdG9wMjU3IiAvPgogICAgICA8c3RvcAogICAgICAgICBvZmZzZXQ9IjEwMCUiCiAgICAgICAgIHN0b3AtY29sb3I9IiNGNkE4MDAiCiAgICAgICAgIGlkPSJzdG9wMjU5IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxwYXRoCiAgICAgICBpZD0iYiIKICAgICAgIGQ9Ik01MS4xNTkgMGMtLjIxNC4wMDItLjQyOC4wMDYtLjY0Mi4wMTQtOC41OTUuMy0xNy4wOSA1LjI5MS0xOC4zOSAxMy4zNzctOC4yOTUtMy4yOTQtMTYuMDkxIDEuMDk5LTE2LjA5MSA4LjU4NkMuNzQ1IDE4Ljk4MS0zLjM1MiAzMi41NTggMi42NDMgMzcuMDUxYzQuMTk4IDMuNTkzIDkuNTk1IDIuODk0IDE2LjQ5MiAyLjg5NGg0NS40NzNjOC40OTUgMCAxNS4zOTItNS42OSAxNS4zOTItMTIuNzc4IDAtMy41MTYtMS43NzQtNi44MDYtNC43NDctOS4xNDlsLTguOTU5IDguOTQ4Yy0uMjEyLjIxMy0uNzA3LjU2NS0xLjA2Mi42MzRsLTEwLjA2IDQuMDdjLS4yNDMuMTItLjQ4Ni4xNTItLjcyMy4xNDUtMS4yNDcgMS4wOTgtMy45MzUgMi4xOC00LjYzNSAyLjI4NC0yLjY2NS4zOTUtNC4zMTctMS4zMTEtNi4wNjgtMy4xMjEtMS4xMjUtMS4xNjItMi4yOS0yLjM2NS0zLjc0My0yLjk0NGEzLjQ5NSAzLjQ5NSAwIDAwLTEuMzA1LS4yNjFjLTEuOTAzIDAtMy41MDMgMS42NDgtNC45NDUgMy4xMzItLjU1LjU2Ni0xLjA2OSAxLjA5OS0xLjU3MSAxLjUwNy0xLjUyMSAxLjIzOC0zLjAzMSAxLjgwNi00LjQ2MyAxLjcwNy0xLjY2NS0uMTItMi44NzktMS4yNTgtMy44ODgtMi4zMTRsLS4xODMtLjE5NGMtMS4wOTktMS4xNTktMi4zNDItMi40NzItNC4xMTgtMS44MDgtLjg5NS4zMzctMS42ODguOTk2LTIuMTk1IDEuNDktLjE0LjEzNi0uMjcuMjgyLS40MDIuNDMtLjMyMi4zNi0uNjI3LjctMS4wNTQuODkyLS4zMjkuMTQ2LS43MzUuMTM1LTEuMDI5LS4wMzJhLjgxNC44MTQgMCAwMS0uNDIxLS42MzljLS4wNjYtLjU1MS4zODktLjkxOS44MjYtMS4yNzUuMDczLS4wNTkuMTQzLS4xMTYuMjEtLjE3NGwuMzYyLS4zMTJjMS4wNDUtLjkwNSAyLjEyNi0xLjg0MSAzLjQ5LTIuMjI4IDEuODcxLS41MjUgMy40OC40MjEgNC41MDEgMS4zMTEuMzI4LjI4NS42NDkuNjI3Ljk4OC45OTEuODk3Ljk2MiAxLjgyNiAxLjk1NSAzLjA5OCAyLjEwNiAxLjg5OS4yMjYgMy41MjgtMS40NDcgNC42MDUtMi41NTJsLjExOC0uMTIyYzEuMjcxLTEuMzA0IDIuNDctMi41MzcgNC4xODgtMy4yMTQgMS42MTktLjYzNyAzLjM2Mi0uNDM0IDUuMDM1LjU5IDEuMDIyLjYyOCAxLjg1NCAxLjUwMyAyLjY1OSAyLjM0OS41MTQuNTQyIDEuMDQ2IDEuMTAzIDEuNjI5IDEuNiAxLjcwMiAxLjQ1MSAzLjMwNyAxLjY5NCA1LjA1MS43NjUuMjI3LS4xMjEuNTA3LS4zMzQuODM0LS41ODEuMjktLjIxOS42MTQtLjQ2MS45NDMtLjY3YTEuNTAyIDEuNTAyIDAgMDEuMTM5LS45MjNsNC4wNzUtMTAuMDQ4Yy4wNjktLjM1NS40MjItLjg0OS42MzMtMS4wNjFsOS43ODEtOS43NjlDNjQuMTMgMi43IDU3Ljg0MS4wNDggNTEuNTAzIDBoLS4zNDR6TTYwLjUgMTkuMzQ0YTIuNDc3IDIuNDc3IDAgMDEtMS45NzkuNzA1bC0xLjgzNiA1LjIyNSAyLjgyNSAyLjgyMiA1LjIzLTEuODM1YTIuNDY3IDIuNDY3IDAgMDEuNzA1LTEuOTc3bDcuNjgxLTcuNjcxYTE2LjI0MyAxNi4yNDMgMCAwMC0xLjg2NC0uODU2bC03LjE3NyA3LjE2OGMtLjUwOC41MDctMS4wOTkuODQ3LTEuNjY3Ljk1OC0uNDk0LjA5NS0uOTAxLjAwNS0xLjE2LS4yNTEtLjU4NC0uNTg0LS4yNjctMS44NTIuNzA3LTIuODI1bDcuNTEzLTcuNTA1YTIwLjI3MiAyMC4yNzIgMCAwMC0uNzMtMi4xOTdMNjAuNSAxOS4zNDR6IiAvPgogICAgPGNsaXBQYXRoCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIGlkPSJjbGlwUGF0aDMxMSI+CiAgICAgIDxnCiAgICAgICAgIGlkPSJ1c2UzMTMiCiAgICAgICAgIGlua3NjYXBlOmxhYmVsPSJDbGlwIj4KICAgICAgICA8cmVjdAogICAgICAgICAgIGlkPSJyZWN0MzE1IgogICAgICAgICAgIHdpZHRoPSI3NC4zODkzODkiCiAgICAgICAgICAgaGVpZ2h0PSIyNi40Mjg3MjYiCiAgICAgICAgICAgeD0iMTU5LjQwMjYiCiAgICAgICAgICAgeT0iMTYuNzI3MjcyIiAvPgogICAgICA8L2c+CiAgICA8L2NsaXBQYXRoPgogICAgPGNsaXBQYXRoCiAgICAgICBjbGlwUGF0aFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIGlkPSJjbGlwUGF0aDMyMSI+CiAgICAgIDxyZWN0CiAgICAgICAgIGlkPSJyZWN0MzIzIgogICAgICAgICB3aWR0aD0iOTMuNjEwMzkiCiAgICAgICAgIGhlaWdodD0iMzUuNzY2MjM1IgogICAgICAgICB4PSIyMjQuMjMzNzYiCiAgICAgICAgIHk9Ii01LjM2MzYzNiIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxnCiAgICAgaWQ9ImcyODAiCiAgICAgZmlsbC1ydWxlPSJldmVub2RkIgogICAgIGZpbGw9Im5vbmUiPgogICAgPGcKICAgICAgIGlkPSJnMjY5IgogICAgICAgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgPHBhdGgKICAgICAgICAgZD0iTTMwLjU0NiA0My4xMjNjMCAuMzYzLS4yOTcuNjYtLjY2LjY2aC0zLjI2N2EuNjYyLjY2MiAwIDAxLS42Ni0uNjZWMzMuMDI1aC05LjM3MnYxMC4wOThjMCAuMzYzLS4yOTcuNjYtLjY2LjY2SDEyLjY2YS42NjIuNjYyIDAgMDEtLjY2LS42NlYxOS44OTFjMC0uMzYzLjI5Ny0uNjI3LjY2LS42MjdoMy4yNjdjLjM2MyAwIC42Ni4yNjQuNjYuNjI3djkuMTA4aDkuMzcydi05LjEwOGMwLS4zNjMuMjk3LS42MjcuNjYtLjYyN2gzLjI2N2MuMzYzIDAgLjY2LjI2NC42Ni42Mjd2MjMuMjMyem0yMi4wMi0xNi4yMDNjMCA1Ljg0MS00LjQyMiA3LjcyMi05LjUwNCA3LjcyMi0uODU4IDAtMi4xNzgtLjA5OS0yLjkzNy0uMTMydjguNjEzYzAgLjM2My0uMjY0LjY2LS42MjcuNjZoLTMuM2EuNjYyLjY2MiAwIDAxLS42Ni0uNjZWMjAuNDE5YzAtLjY2LjM5Ni0uODkxIDEuMDU2LS45OSAxLjcxNi0uMjY0IDQuMDU5LS40MjkgNi40NjgtLjQyOSA1LjA4MiAwIDkuNTA0IDEuNzgyIDkuNTA0IDcuNjIzdi4yOTd6bS00LjU1NCAwdi0uMjk3YzAtMi43NzItMS42NS0zLjgyOC00Ljk1LTMuODI4LS42OTMgMC0yLjM0My4wNjYtMi45MzcuMTMydjcuODU0Yy41MjguMDMzIDIuMzc2LjA5OSAyLjkzNy4wOTkgMy41NjQgMCA0Ljk1LTEuMzIgNC45NS0zLjk2em0xMi45OTUgMTYuMjAzYzAgLjM2My0uMjk3LjY2LS42Ni42Nkg1Ny4wOGEuNjYyLjY2MiAwIDAxLS42Ni0uNjZWMTkuODkxYzAtLjM2My4yOTctLjYyNy42Ni0uNjI3aDMuMjY3Yy4zNjIgMCAuNjYuMjY0LjY2LjYyN3YyMy4yMzJ6IgogICAgICAgICBpZD0icGF0aDI2NSIKICAgICAgICAgZmlsbD0iI0IxMDYzQSIgLz4KICAgIDwvZz4KICAgIDxwYXRoCiAgICAgICBkPSJNMTIxLjUxNyAxMC4wMTRjLTguNTk2LjMtMTcuMDkxIDUuMjkxLTE4LjM5IDEzLjM3Ny04LjI5Ni0zLjI5NC0xNi4wOSAxLjA5OC0xNi4wOSA4LjU4NS0xNS4yOTItMi45OTUtMTkuMzkgMTAuNTgxLTEzLjM5MyAxNS4wNzQgNC4xOTcgMy41OTMgOS41OTUgMi44OTUgMTYuNDkgMi44OTVoNDUuNDc1YzguNDk1IDAgMTUuMzktNS42OSAxNS4zOS0xMi43NzggMC01LjI5LTMuOTk3LTEwLjA4My0xMC4wOTMtMTEuODh2LS4wOTljLTItMTEuMDgtMTAuNzk0LTE1LjQ3NC0xOS4zOS0xNS4xNzQiCiAgICAgICBpZD0icGF0aDI3MSIKICAgICAgIGZpbGw9IiNGRkYiIC8+CiAgICA8ZwogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzEgMTApIgogICAgICAgaWQ9ImcyNzgiPgogICAgICA8bWFzawogICAgICAgICBpZD0iZCIKICAgICAgICAgZmlsbD0iI2ZmZiI+CiAgICAgICAgPHVzZQogICAgICAgICAgIHhsaW5rOmhyZWY9IiNiIgogICAgICAgICAgIGlkPSJ1c2UyNzMiIC8+CiAgICAgIDwvbWFzaz4KICAgICAgPHBhdGgKICAgICAgICAgZD0iTTUxLjE1OSAwYy0uMjE0LjAwMi0uNDI4LjAwNi0uNjQyLjAxNC04LjU5NS4zLTE3LjA5IDUuMjkxLTE4LjM5IDEzLjM3Ny04LjI5NS0zLjI5NC0xNi4wOTEgMS4wOTktMTYuMDkxIDguNTg2Qy43NDUgMTguOTgxLTMuMzUyIDMyLjU1OCAyLjY0MyAzNy4wNTFjNC4xOTggMy41OTMgOS41OTUgMi44OTQgMTYuNDkyIDIuODk0aDQ1LjQ3M2M4LjQ5NSAwIDE1LjM5Mi01LjY5IDE1LjM5Mi0xMi43NzggMC0zLjUxNi0xLjc3NC02LjgwNi00Ljc0Ny05LjE0OWwtOC45NTkgOC45NDhjLS4yMTIuMjEzLS43MDcuNTY1LTEuMDYyLjYzNGwtMTAuMDYgNC4wN2MtLjI0My4xMi0uNDg2LjE1Mi0uNzIzLjE0NS0xLjI0NyAxLjA5OC0zLjkzNSAyLjE4LTQuNjM1IDIuMjg0LTIuNjY1LjM5NS00LjMxNy0xLjMxMS02LjA2OC0zLjEyMS0xLjEyNS0xLjE2Mi0yLjI5LTIuMzY1LTMuNzQzLTIuOTQ0YTMuNDk1IDMuNDk1IDAgMDAtMS4zMDUtLjI2MWMtMS45MDMgMC0zLjUwMyAxLjY0OC00Ljk0NSAzLjEzMi0uNTUuNTY2LTEuMDY5IDEuMDk5LTEuNTcxIDEuNTA3LTEuNTIxIDEuMjM4LTMuMDMxIDEuODA2LTQuNDYzIDEuNzA3LTEuNjY1LS4xMi0yLjg3OS0xLjI1OC0zLjg4OC0yLjMxNGwtLjE4My0uMTk0Yy0xLjA5OS0xLjE1OS0yLjM0Mi0yLjQ3Mi00LjExOC0xLjgwOC0uODk1LjMzNy0xLjY4OC45OTYtMi4xOTUgMS40OS0uMTQuMTM2LS4yNy4yODItLjQwMi40My0uMzIyLjM2LS42MjcuNy0xLjA1NC44OTItLjMyOS4xNDYtLjczNS4xMzUtMS4wMjktLjAzMmEuODE0LjgxNCAwIDAxLS40MjEtLjYzOWMtLjA2Ni0uNTUxLjM4OS0uOTE5LjgyNi0xLjI3NS4wNzMtLjA1OS4xNDMtLjExNi4yMS0uMTc0bC4zNjItLjMxMmMxLjA0NS0uOTA1IDIuMTI2LTEuODQxIDMuNDktMi4yMjggMS44NzEtLjUyNSAzLjQ4LjQyMSA0LjUwMSAxLjMxMS4zMjguMjg1LjY0OS42MjcuOTg4Ljk5MS44OTcuOTYyIDEuODI2IDEuOTU1IDMuMDk4IDIuMTA2IDEuODk5LjIyNiAzLjUyOC0xLjQ0NyA0LjYwNS0yLjU1MmwuMTE4LS4xMjJjMS4yNzEtMS4zMDQgMi40Ny0yLjUzNyA0LjE4OC0zLjIxNCAxLjYxOS0uNjM3IDMuMzYyLS40MzQgNS4wMzUuNTkgMS4wMjIuNjI4IDEuODU0IDEuNTAzIDIuNjU5IDIuMzQ5LjUxNC41NDIgMS4wNDYgMS4xMDMgMS42MjkgMS42IDEuNzAyIDEuNDUxIDMuMzA3IDEuNjk0IDUuMDUxLjc2NS4yMjctLjEyMS41MDctLjMzNC44MzQtLjU4MS4yOS0uMjE5LjYxNC0uNDYxLjk0My0uNjdhMS41MDIgMS41MDIgMCAwMS4xMzktLjkyM2w0LjA3NS0xMC4wNDhjLjA2OS0uMzU1LjQyMi0uODQ5LjYzMy0xLjA2MWw5Ljc4MS05Ljc2OUM2NC4xMyAyLjcgNTcuODQxLjA0OCA1MS41MDMgMGgtLjM0NHpNNjAuNSAxOS4zNDRhMi40NzcgMi40NzcgMCAwMS0xLjk3OS43MDVsLTEuODM2IDUuMjI1IDIuODI1IDIuODIyIDUuMjMtMS44MzVhMi40NjcgMi40NjcgMCAwMS43MDUtMS45NzdsNy42ODEtNy42NzFhMTYuMjQzIDE2LjI0MyAwIDAwLTEuODY0LS44NTZsLTcuMTc3IDcuMTY4Yy0uNTA4LjUwNy0xLjA5OS44NDctMS42NjcuOTU4LS40OTQuMDk1LS45MDEuMDA1LTEuMTYtLjI1MS0uNTg0LS41ODQtLjI2Ny0xLjg1Mi43MDctMi44MjVsNy41MTMtNy41MDVhMjAuMjcyIDIwLjI3MiAwIDAwLS43My0yLjE5N0w2MC41IDE5LjM0NHoiCiAgICAgICAgIG1hc2s9InVybCgjZCkiCiAgICAgICAgIGlkPSJwYXRoMjc2IgogICAgICAgICBmaWxsPSJ1cmwoI2MpIiAvPgogICAgPC9nPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOnVybCgjYSkiCiAgICAgICBkPSJtIDE2Mi40NjQsMTguNDQ3IGMgMCwzLjE2OCAtMS42NSw2LjYgLTguMTUxLDYuNiAtMi4zMSwwIC00LjAyNiwtMC4yMzEgLTUuNDc4LC0wLjQ2MiAtMC41NjEsLTAuMDk5IC0wLjYyNywtMC4yMzEgLTAuNjI3LC0wLjU5NCB2IC0xLjMyIGMgMCwtMC4zNjMgMC4yNjMsLTAuNTI4IDAuNTYsLTAuNTI4IGggMC4xIGMgMS41MTgsMC4xMzIgMy45MjcsMC4xOTggNS40NDUsMC4xOTggMy45NiwwIDUuMDE2LC0xLjU4NCA1LjAxNiwtMy44OTQgMCwtMS42NSAtMC45NTgsLTIuNTc0IC0zLjk2LC00LjQyMiBsIC0zLjIwMiwtMS45NDcgYyAtMy4wMzYsLTEuODQ4IC00LjU1NCwtMy41MzEgLTQuNTU0LC02LjE3MSAwLC0zLjk5MyAyLjg3MSwtNS44NDEgNy44ODcsLTUuODQxIDEuOTQ3LDAgNC40ODgsMC4xOTggNS43NDMsMC4zOTYgMC4zMywwLjA2NiAwLjU2LDAuMjMxIDAuNTYsMC41NjEgdiAxLjQxOSBjIDAsMC4zMyAtMC4yMywwLjUyOCAtMC41NiwwLjUyOCBoIC0wLjA2NiBBIDkzLjEzOCw5My4xMzggMCAwIDAgMTU1LjUsMi43NzIgYyAtMy4zOTksMCAtNC44NSwwLjcyNiAtNC44NSwzLjEzNSAwLDEuNTUxIDEuMDg4LDIuNDc1IDMuNTk2LDMuOTkzIGwgMy4wMzYsMS44MTUgYyAzLjgyOCwyLjI3NyA1LjE4MSw0LjA5MiA1LjE4MSw2LjczMiB6IG0gMTUuNTE5LDUuNTExIGMgMCwwLjQyOSAtMC4xMzIsMC42MjcgLTAuNjYsMC43MjYgYSAyMy45MzMsMjMuOTMzIDAgMCAxIC00LjEyNSwwLjM2MyBjIC00LjQ4OCwwIC03LjAzLC0zLjE2OCAtNy4wMywtOC4wMTkgdiAtMi41NzQgYyAwLC00Ljg1MSAyLjUwOSwtOC4wMTkgNy4wMywtOC4wMTkgMS41MTgsMCAzLjAzNiwwLjE2NSA0LjEyNSwwLjM2MyAwLjUyOCwwLjA5OSAwLjY2LDAuMjY0IDAuNjYsMC43MjYgdiAxLjE4OCBjIDAsMC4zMyAtMC4yNjQsMC40OTUgLTAuNTYxLDAuNDk1IGggLTAuMTMyIGEgMzIuMTgsMzIuMTggMCAwIDAgLTQuMDkyLC0wLjIzMSBjIC0yLjY0LDAgLTQuMTI1LDEuNzQ5IC00LjEyNSw1LjQ3OCB2IDIuNTc0IGMgMCwzLjY5NiAxLjQ1Miw1LjQ3OCA0LjEyNSw1LjQ3OCAxLjYxNywwIDIuNjQsLTAuMDY2IDQuMDkyLC0wLjIzMSBoIDAuMTMyIGMgMC4yOTcsMCAwLjU2LDAuMTY1IDAuNTYsMC40OTUgdiAxLjE4OCB6IG0gMTcuNjI4LDAuMTk4IGMgMCwwLjM2MyAtMC4yOTcsMC42NiAtMC42NiwwLjY2IGggLTEuNTg0IGEgMC42NjIsMC42NjIgMCAwIDEgLTAuNjYsLTAuNjYgViAxMy4yOTkgYyAwLC0zLjMgLTEuMzg2LC00LjMyMyAtMy41MzEsLTQuMzIzIC0xLjAyMywwIC0zLjEwMiwwLjI2NCAtNC41NTQsMC45MjQgdiAxNC4yNTYgYyAwLDAuMzMgLTAuMjk3LDAuNjYgLTAuNjYsMC42NiBoIC0xLjYxNyBjIC0wLjMzLDAgLTAuNjI3LC0wLjI5NyAtMC42MjcsLTAuNjYgViAwLjY2IGMgMCwtMC4zNjMgMC4yNjQsLTAuNjYgMC42MjcsLTAuNjYgaCAxLjY1IGMgMC4zNjMsMCAwLjYyNywwLjI5NyAwLjYyNywwLjY2IHYgNi43OTggYyAxLjU4NCwtMC42OTMgMy42MywtMS4wMjMgNS4wNDksLTEuMDIzIDMuNDk4LDAgNS45NCwyLjAxMyA1Ljk0LDYuODY0IHogbSAxOC40MiwwIGMgMCwwLjM2MyAtMC4yNjQsMC42NiAtMC42MjcsMC42NiBoIC0xLjY1IGMgLTAuMzYzLDAgLTAuNjI3LC0wLjI5NyAtMC42MjcsLTAuNjYgdiAtMC42MjcgYyAtMS44MTUsMS4wMjMgLTMuMywxLjUxOCAtNS4yNDcsMS41MTggLTMuOTYsMCAtNS43NDIsLTIuNDc1IC01Ljc0MiwtNi44NjQgViA3LjMyNiBjIDAsLTAuMzYzIDAuMjk3LC0wLjY2IDAuNjYsLTAuNjYgaCAxLjU4NCBjIDAuMzYzLDAgMC42NiwwLjI5NyAwLjY2LDAuNjYgdiAxMC44NTcgYyAwLDMuMzMzIDEuMTIyLDQuMzU2IDMuNjMsNC4zNTYgMS4zODYsMCAyLjkzNywtMC41MjggNC40NTUsLTEuMjg3IFYgNy4zMjYgYyAwLC0wLjMzIDAuMjk3LC0wLjY2IDAuNjYsLTAuNjYgaCAxLjYxNyBjIDAuMzMsMCAwLjYyNywwLjI5NyAwLjYyNywwLjY2IHogbSA3Ljc2LDAgYyAwLDAuMzMgLTAuMjMsMC42NiAtMC41OTMsMC42NiBoIC0xLjcxNiBjIC0wLjMzLDAgLTAuNTk0LC0wLjI5NyAtMC41OTQsLTAuNjYgViAwLjYyNyBjIDAsLTAuMzMgMC4yMywtMC42MjcgMC41OTQsLTAuNjI3IGggMS43MTYgYyAwLjMzLDAgMC41OTQsMC4yNjQgMC41OTQsMC42MjcgdiAyMy41MjkgeiBtIDEyLjIyNywtOC4zNDkgYyAwLDAuMzMgLTAuMjY0LDAuNTYxIC0wLjYyNywwLjU2MSBoIC02LjU2NyBjIC0wLjM2MywwIC0wLjYyNywtMC4xOTggLTAuNjI3LC0wLjU2MSBWIDE0LjUyIGMgMCwtMC4zMyAwLjI2NCwtMC41OTQgMC42MjcsLTAuNTk0IGggNi41NjcgYyAwLjM2MywwIDAuNjI3LDAuMjMxIDAuNjI3LDAuNTk0IHogbSAxOS4wMjQsOC4xNTEgYyAwLDAuMzk2IC0wLjI5NywwLjU5NCAtMC42NiwwLjY2IC0xLjM4NiwwLjI2NCAtMi42NzMsMC40MjkgLTUuNDc4LDAuNDI5IC00LjA2LDAgLTguNzEyLC0yLjE3OCAtOC43MTIsLTEwLjE5NyB2IC00LjU4NyBjIDAsLTguMDg1IDQuNjUzLC0xMC4xOTcgOC43MTIsLTEwLjE5NyAyLjA3OSwwIDQuMDkyLDAuMjk3IDUuNTQ0LDAuNTI4IDAuMjk3LDAuMDMzIDAuNTI4LDAuMTMyIDAuNTI4LDAuNDI5IHYgMS42ODMgYyAwLDAuMTk4IC0wLjA2NiwwLjM2MyAtMC4zOTYsMC4zNjMgaCAtMC4xIGMgLTEuMTg3LC0wLjA5OSAtMy42MywtMC4yOTcgLTUuNTQzLC0wLjI5NyAtMy4yMzQsMCAtNS43NDIsMS44ODEgLTUuNzQyLDcuNDkxIHYgNC41ODcgYyAwLDUuNTQ0IDIuNTA4LDcuNDkxIDUuNzQyLDcuNDkxIDEuODgsMCA0LjI1NywtMC4xNjUgNS40NDUsLTAuMjY0IGggMC4xMzIgYyAwLjM2MywwIDAuNTI4LDAuMTY1IDAuNTI4LDAuNTI4IHogbSA2LjgzLDAuMTk4IGMgMCwwLjMzIC0wLjIzMSwwLjY2IC0wLjU5NCwwLjY2IGggLTEuNzE2IGMgLTAuMzMsMCAtMC41OTQsLTAuMjk3IC0wLjU5NCwtMC42NiBWIDAuNjI3IGMgMCwtMC4zMyAwLjIzMSwtMC42MjcgMC41OTQsLTAuNjI3IGggMS43MTYgYyAwLjMzLDAgMC41OTQsMC4yNjQgMC41OTQsMC42MjcgeiBtIDE4LjkxOCwtNy4xNjEgYyAwLDQuODUxIC0yLjUwOCw4LjA1MiAtNy4zNTksOC4wNTIgLTQuODUsMCAtNy4zMjYsLTMuMjAxIC03LjMyNiwtOC4wNTIgdiAtMi41MDggYyAwLC00Ljg1MSAyLjQ3NSwtOC4wNTIgNy4zMjYsLTguMDUyIDQuODUxLDAgNy4zNiwzLjIwMSA3LjM2LDguMDUyIHYgMi41MDggeiBtIC0yLjkwNCwwIHYgLTIuNTA4IGMgMCwtMy4zNjYgLTEuMzUzLC01LjUxMSAtNC40NTUsLTUuNTExIC0zLjA2OSwwIC00LjQyMiwyLjExMiAtNC40MjIsNS41MTEgdiAyLjUwOCBjIDAsMy4zNjYgMS4zMiw1LjUxMSA0LjQyMiw1LjUxMSAzLjA3LDAgNC40NTUsLTIuMTEyIDQuNDU1LC01LjUxMSB6IG0gMjAuODU2LDcuMTYxIGMgMCwwLjM2MyAtMC4yNjQsMC42NiAtMC42MjcsMC42NiBoIC0xLjY1IGMgLTAuMzYzLDAgLTAuNjI3LC0wLjI5NyAtMC42MjcsLTAuNjYgdiAtMC42MjcgYyAtMS44MTUsMS4wMjMgLTMuMywxLjUxOCAtNS4yNDcsMS41MTggLTMuOTYsMCAtNS43NDIsLTIuNDc1IC01Ljc0MiwtNi44NjQgViA3LjMyNiBjIDAsLTAuMzYzIDAuMjk3LC0wLjY2IDAuNjYsLTAuNjYgaCAxLjU4NCBjIDAuMzYzLDAgMC42NiwwLjI5NyAwLjY2LDAuNjYgdiAxMC44NTcgYyAwLDMuMzMzIDEuMTIyLDQuMzU2IDMuNjMsNC4zNTYgMS4zODYsMCAyLjkzNywtMC41MjggNC40NTUsLTEuMjg3IFYgNy4zMjYgYyAwLC0wLjMzIDAuMjk3LC0wLjY2IDAuNjYsLTAuNjYgaCAxLjYxNyBjIDAuMzMsMCAwLjYyNywwLjI5NyAwLjYyNywwLjY2IHogbSAxOC4xMDMsLTAuNDI5IGMgMCwwLjQyOSAtMC4xLDAuNjYgLTAuNjkzLDAuNzU5IGEgMzEuNzQ4LDMxLjc0OCAwIDAgMSAtNi4wNzIsMC41NjEgYyAtNC45MTcsMCAtNy4xOTQsLTMuMjAxIC03LjE5NCwtOC4xNTEgViAxNC41MiBjIDAsLTUuMTgxIDIuMzc2LC04LjA4NSA3LjE5NCwtOC4wODUgMS4wMjMsMCAyLjU3NCwwLjA5OSAzLjg2LDAuMzMgViAwLjYyNyBDIDMxMS45NCwwLjI5NyAzMTIuMjA1LDAgMzEyLjU2OCwwIGggMS42ODMgYyAwLjMzLDAgMC41OTQsMC4yNjQgMC41OTQsMC42MjcgeiBtIC0yLjkwNCwtMS40MTkgViA5LjIwNyBjIC0xLjA5LC0wLjE5OCAtMi44MDUsLTAuMjMxIC0zLjg2MSwtMC4yMzEgLTMuMjM0LDAgLTQuMjksMi4wMTMgLTQuMjksNS41NDQgdiAyLjM3NiBjIDAsMy41OTcgMS4wMjMsNS42MSA0LjI5LDUuNjEgMS4xMjIsMCAyLjczOSwtMC4wOTkgMy44NiwtMC4xOTggeiIKICAgICAgIGlkPSJwYXRoMjY3IgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuODgzMTE3LDE5KSIKICAgICAgIGNsaXAtcGF0aD0idXJsKCNjbGlwUGF0aDMyMSkiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPGcKICAgICAgIGlkPSLlm77lsYJfMiIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuNDUxMjM3OCwwLDAsMC40MTg2MzY2OSwxODAuNTk0NSwyLjgwMDc2MTcpIj4KICAgICAgPGcKICAgICAgICAgaWQ9Imc0MjYiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgaWQ9InBhdGg0MDgiCiAgICAgICAgICAgc3R5bGU9ImZpbGw6Izg2NWQ1MyIKICAgICAgICAgICBkPSJtIDExOC44OSw3NS4xMyBjIC0xLjMxLC0yLjcyIC0zLjQ2LC01LjUzIC02Ljk3LC03LjMzIC0yLjM3LC0xLjQ4IC00LjU3LC0yLjI0IC02LjAxLC0yLjYzIDEuNTMsLTUuNiAtMC42NCwtMTAuMDYgLTMuNjksLTEzLjM5IC00LjUzLC00Ljg4IC05LjI3LC01LjU5IC05LjI3LC01LjU5IEggOTIuOTQgQyA5NC41LDQzLjE2IDk1LjA5LDM5LjY1IDk0LjMsMzYuMiA5My4zLDMxLjk0IDkxLjAxLDI5LjI2IDg3Ljk5LDI3LjQ3IDg0LjksMjUuNjQgODEuMDgsMjQuNzQgNzcuMTYsMjQuMDQgNzUuMjgsMjMuNyA2Ny4zNSwyMi41OSA2NC4wNiwxOC4wNCA2MS40MSwxNC4zNSA2MS4zMyw3LjcxIDYwLjYxLDUuNzIgNTkuODQsMy42NyA1Ny4yMyw0LjU3IDU0LjM4LDYuNDggNTEuMDUsOC43IDQ0LjE1LDE1LjgzIDQxLjQ5LDIyLjk3IGMgLTIuMDMsNS40NyAtMi4wOCwxMC4yMSAtMS4yOCwxMy44OSAtMy4yOSwwLjU1IC01Ljc2LDEuNjYgLTYuMjMsMS44OCAtMC4xNiwwLjA1IC0wLjMyLDAuMSAtMC40OSwwLjE3IC0zLjAxLDEuMjQgLTkuNDMsNy4wMiAtMTAuMDEsMTUuODUgLTAuMiwzLjE0IDAuMjEsNi4zMSAxLjIsOS4yNiAtMy45NCwxLjEgLTYuMjIsMi41NCAtNi4yNiwyLjU3IC0yLDAuNzUgLTUuMTgsMi45NSAtNi4xNSw0LjEzIEMgMTAuMyw3My4xIDguOTMsNzUuOTMgOC4xMiw3OC45IDYuMzUsODUuMzYgNyw5Mi43MSAxMC4xNCw5OC42NyBjIDEuNzQsMy4zMSA0LjEyLDYuODMgNi43NCw5LjUyIDguNTUsOC43OSAyMy4zMSwxMi4xMSAzNC45NiwxNC4wMyAxNC4xOSwyLjM0IDI5LjA1LDEuNTIgNDIuMzMsLTMuOTcgMTkuOTIsLTguMjIgMjUuMjIsLTIxLjQ0IDI2LC0yNS4xNyAxLjc1LC04LjMxIC0wLjM3LC0xNi4wOCAtMS4yOCwtMTcuOTUgeiIKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgICAgIDxnCiAgICAgICAgICAgaWQ9Imc0MjIiPgogICAgICAgICAgPGcKICAgICAgICAgICAgIGlkPSJnNDE0Ij4KICAgICAgICAgICAgPGVsbGlwc2UKICAgICAgICAgICAgICAgaWQ9ImVsbGlwc2U0MTAiCiAgICAgICAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMTEwNiwtMC45OTM5LDAuOTkzOSwwLjExMDYsMTAuNDUzLDE0NC40NzA2KSIKICAgICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIKICAgICAgICAgICAgICAgcnk9IjE1LjUiCiAgICAgICAgICAgICAgIHJ4PSIxNi42MTAwMDEiCiAgICAgICAgICAgICAgIGN5PSI2Ni4zODk5OTkiCiAgICAgICAgICAgICAgIGN4PSI4NS45NDk5OTciIC8+CiAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgIGlkPSJwYXRoNDEyIgogICAgICAgICAgICAgICBzdHlsZT0iZmlsbDojMmYyZjJmIgogICAgICAgICAgICAgICBkPSJtIDkyLjYzLDY2LjM2IGMgLTAuMjMsMy4zIC0zLjE0LDUuODIgLTYuNDksNS42MiAtMy4zNiwtMC4xOSAtNS45LC0zLjA0IC01LjY3LC02LjM0IDAuMjIsLTMuMzEgMy4xMiwtNS44MiA2LjQ4LC01LjYyIDMuMzYsMC4xOSA1LjkxLDMuMDQgNS42OCw2LjM0IgogICAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgICAgICAgPC9nPgogICAgICAgICAgPGcKICAgICAgICAgICAgIGlkPSJnNDIwIj4KICAgICAgICAgICAgPGVsbGlwc2UKICAgICAgICAgICAgICAgaWQ9ImVsbGlwc2U0MTYiCiAgICAgICAgICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuOTk3MiwtMC4wNzUyLDAuMDc1MiwwLjk5NzIsLTQuODcxNCwzLjM3OTYpIgogICAgICAgICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIgogICAgICAgICAgICAgICByeT0iMTYuNjEwMDAxIgogICAgICAgICAgICAgICByeD0iMTUuNSIKICAgICAgICAgICAgICAgY3k9IjY2LjQwMDAwMiIKICAgICAgICAgICAgICAgY3g9IjQyLjQ1OTk5OSIgLz4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgaWQ9InBhdGg0MTgiCiAgICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiMyZjJmMmYiCiAgICAgICAgICAgICAgIGQ9Im0gNDkuMDIsNjUuMTMgYyAwLjM4LDMuMjkgLTIuMDEsNi4zIC01LjM0LDYuNzIgLTMuMzQsMC40MyAtNi4zNiwtMS45IC02Ljc0LC01LjE4IC0wLjQsLTMuMjkgMS45OSwtNi4zIDUuMzMsLTYuNzMgMy4zMywtMC40MiA2LjM2LDEuOTEgNi43NSw1LjE5IgogICAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aAogICAgICAgICAgIGlkPSJwYXRoNDI0IgogICAgICAgICAgIHN0eWxlPSJmaWxsOiNlZDZkMzEiCiAgICAgICAgICAgZD0ibSA4Ny4zNSw4OS40NiBjIC0yLjIyLC0xLjUgLTUuMDIsLTAuNTEgLTcuNDksMCAtNi45LDEuNDIgLTEyLjk1LDEuNDggLTE1Ljg2LDEuNDggLTIuOTEsMCAtOC45NiwtMC4wNiAtMTUuODYsLTEuNDggLTIuNDcsLTAuNTEgLTUuMjcsLTEuNSAtNy40OSwwIC0yLjgyLDEuOSAtMC43NCw4Ljc0IDMuNywxMy4zNiAyLjY4LDIuNzkgOS4wNyw4LjIxIDE5LjY2LDguMjEgMTAuNTgsMCAxNi45NywtNS40MiAxOS42NiwtOC4yMSA0LjQyLC00LjYyIDYuNSwtMTEuNDUgMy42OCwtMTMuMzYgeiIKICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"
}
