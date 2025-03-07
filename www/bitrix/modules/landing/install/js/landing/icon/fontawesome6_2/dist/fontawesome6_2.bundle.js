this.BX = this.BX || {};
this.BX.Landing = this.BX.Landing || {};
(function (exports,landing_loc) {
	'use strict';

	var FontAwesome6_2 = {
	  id: 'fontawesome6_2',
	  name: 'Fontawesome 2',
	  active: true,
	  categories: [{
	    id: 'construction',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_CONSTRUCTION'),
	    items: [{
	      className: 'far fa-angle',
	      options: ['fat fa-angle', 'fal fa-angle', 'far fa-angle', 'fas fa-angle'],
	      defaultOption: 'far fa-angle',
	      keywords: 'measured angle acute measure angle'
	    }, {
	      className: 'far fa-angle-90',
	      options: ['fat fa-angle-90', 'fal fa-angle-90', 'far fa-angle-90', 'fas fa-angle-90'],
	      defaultOption: 'far fa-angle-90',
	      keywords: 'right angle with arc measure right angle angle 90'
	    }, {
	      className: 'far fa-axe',
	      options: ['fat fa-axe', 'fal fa-axe', 'far fa-axe', 'fas fa-axe'],
	      defaultOption: 'far fa-axe',
	      keywords: 'axe blade chop cut fall hatchet lumberjack outdoors sharp split swing tool weapon wood axe'
	    }, {
	      className: 'far fa-block-brick',
	      options: ['fat fa-block-brick', 'fal fa-block-brick', 'far fa-block-brick', 'fas fa-block-brick'],
	      defaultOption: 'far fa-block-brick',
	      keywords: 'block brick mortar super mario wall block brick'
	    }, {
	      className: 'far fa-brush',
	      options: ['fat fa-brush', 'fal fa-brush', 'far fa-brush', 'fas fa-brush'],
	      defaultOption: 'far fa-brush',
	      keywords: 'art bristles color handle paint brush'
	    }, {
	      className: 'far fa-compass-drafting',
	      options: ['fat fa-compass-drafting', 'fal fa-compass-drafting', 'far fa-compass-drafting', 'fas fa-compass-drafting'],
	      defaultOption: 'far fa-compass-drafting',
	      keywords: 'design map mechanical drawing plot plotting compass drafting'
	    }, {
	      className: 'far fa-dumpster',
	      options: ['fat fa-dumpster', 'fal fa-dumpster', 'far fa-dumpster', 'fas fa-dumpster'],
	      defaultOption: 'far fa-dumpster',
	      keywords: 'alley bin commercial trash waste dumpster'
	    }, {
	      className: 'far fa-dumpster-fire',
	      options: ['fat fa-dumpster-fire', 'fal fa-dumpster-fire', 'far fa-dumpster-fire', 'fas fa-dumpster-fire'],
	      defaultOption: 'far fa-dumpster-fire',
	      keywords: 'alley bin commercial danger dangerous euphemism flame heat hot trash waste dumpster fire'
	    }, {
	      className: 'far fa-forklift',
	      options: ['fat fa-forklift', 'fal fa-forklift', 'far fa-forklift', 'fas fa-forklift'],
	      defaultOption: 'far fa-forklift',
	      keywords: 'archive inventory lorry pallet shipping tractor warehouse forklift'
	    }, {
	      className: 'far fa-grate',
	      options: ['fat fa-grate', 'fal fa-grate', 'far fa-grate', 'fas fa-grate'],
	      defaultOption: 'far fa-grate',
	      keywords: 'drain manhole grate'
	    }, {
	      className: 'far fa-grate-droplet',
	      options: ['fat fa-grate-droplet', 'fal fa-grate-droplet', 'far fa-grate-droplet', 'fas fa-grate-droplet'],
	      defaultOption: 'far fa-grate-droplet',
	      keywords: 'drain manhole grate droplet'
	    }, {
	      className: 'far fa-hammer',
	      options: ['fat fa-hammer', 'fal fa-hammer', 'far fa-hammer', 'fas fa-hammer'],
	      defaultOption: 'far fa-hammer',
	      keywords: 'admin fix hammer repair settings tool hammer'
	    }, {
	      className: 'far fa-hammer-crash',
	      options: ['fat fa-hammer-crash', 'fal fa-hammer-crash', 'far fa-hammer-crash', 'fas fa-hammer-crash'],
	      defaultOption: 'far fa-hammer-crash',
	      keywords: 'break crash glass pound smash hammer crash'
	    }, {
	      className: 'far fa-helmet-safety',
	      options: ['fat fa-helmet-safety', 'fal fa-helmet-safety', 'far fa-helmet-safety', 'fas fa-helmet-safety'],
	      defaultOption: 'far fa-helmet-safety',
	      keywords: 'construction hardhat helmet safety helmet safety'
	    }, {
	      className: 'far fa-hose',
	      options: ['fat fa-hose', 'fal fa-hose', 'far fa-hose', 'fas fa-hose'],
	      defaultOption: 'far fa-hose',
	      keywords: 'fire irrigation water hose'
	    }, {
	      className: 'far fa-hose-reel',
	      options: ['fat fa-hose-reel', 'fal fa-hose-reel', 'far fa-hose-reel', 'fas fa-hose-reel'],
	      defaultOption: 'far fa-hose-reel',
	      keywords: 'fire irrigation water hose reel'
	    }, {
	      className: 'far fa-paint-roller',
	      options: ['fat fa-paint-roller', 'fal fa-paint-roller', 'far fa-paint-roller', 'fas fa-paint-roller'],
	      defaultOption: 'far fa-paint-roller',
	      keywords: 'acrylic art brush color fill paint pigment watercolor paint roller'
	    }, {
	      className: 'far fa-pen-ruler',
	      options: ['fat fa-pen-ruler', 'fal fa-pen-ruler', 'far fa-pen-ruler', 'fas fa-pen-ruler'],
	      defaultOption: 'far fa-pen-ruler',
	      keywords: 'design draft draw pencil pen ruler'
	    }, {
	      className: 'far fa-pencil',
	      options: ['fat fa-pencil', 'fal fa-pencil', 'far fa-pencil', 'fas fa-pencil'],
	      defaultOption: 'far fa-pencil',
	      keywords: 'lower left pencil design edit penci pencil update write pencil'
	    }, {
	      className: 'far fa-person-digging',
	      options: ['fat fa-person-digging', 'fal fa-person-digging', 'far fa-person-digging', 'fas fa-person-digging'],
	      defaultOption: 'far fa-person-digging',
	      keywords: 'bury dig men at work person digging'
	    }, {
	      className: 'far fa-reel',
	      options: ['fat fa-reel', 'fal fa-reel', 'far fa-reel', 'fas fa-reel'],
	      defaultOption: 'far fa-reel',
	      keywords: 'needle sewing spool string thread wire reel'
	    }, {
	      className: 'far fa-ruler',
	      options: ['fat fa-ruler', 'fal fa-ruler', 'far fa-ruler', 'fas fa-ruler'],
	      defaultOption: 'far fa-ruler',
	      keywords: 'design draft length measure planning ruler straight edge straight ruler ruler'
	    }, {
	      className: 'far fa-ruler-combined',
	      options: ['fat fa-ruler-combined', 'fal fa-ruler-combined', 'far fa-ruler-combined', 'fas fa-ruler-combined'],
	      defaultOption: 'far fa-ruler-combined',
	      keywords: 'design draft length measure planning ruler combined'
	    }, {
	      className: 'far fa-ruler-horizontal',
	      options: ['fat fa-ruler-horizontal', 'fal fa-ruler-horizontal', 'far fa-ruler-horizontal', 'fas fa-ruler-horizontal'],
	      defaultOption: 'far fa-ruler-horizontal',
	      keywords: 'design draft length measure planning ruler horizontal'
	    }, {
	      className: 'far fa-ruler-triangle',
	      options: ['fat fa-ruler-triangle', 'fal fa-ruler-triangle', 'far fa-ruler-triangle', 'fas fa-ruler-triangle'],
	      defaultOption: 'far fa-ruler-triangle',
	      keywords: 'design draft length measure planning ruler set triangle triangular ruler ruler triangle'
	    }, {
	      className: 'far fa-ruler-vertical',
	      options: ['fat fa-ruler-vertical', 'fal fa-ruler-vertical', 'far fa-ruler-vertical', 'fas fa-ruler-vertical'],
	      defaultOption: 'far fa-ruler-vertical',
	      keywords: 'design draft length measure planning ruler vertical'
	    }, {
	      className: 'far fa-screwdriver',
	      options: ['fat fa-screwdriver', 'fal fa-screwdriver', 'far fa-screwdriver', 'fas fa-screwdriver'],
	      defaultOption: 'far fa-screwdriver',
	      keywords: 'admin fix mechanic repair screw screwdriver settings tool screwdriver'
	    }, {
	      className: 'far fa-screwdriver-wrench',
	      options: ['fat fa-screwdriver-wrench', 'fal fa-screwdriver-wrench', 'far fa-screwdriver-wrench', 'fas fa-screwdriver-wrench'],
	      defaultOption: 'far fa-screwdriver-wrench',
	      keywords: 'admin fix repair screwdriver settings tools wrench screwdriver wrench'
	    }, {
	      className: 'far fa-shovel',
	      options: ['fat fa-shovel', 'fal fa-shovel', 'far fa-shovel', 'fas fa-shovel'],
	      defaultOption: 'far fa-shovel',
	      keywords: 'construction dig excavate tool trench shovel'
	    }, {
	      className: 'far fa-shovel-snow',
	      options: ['fat fa-shovel-snow', 'fal fa-shovel-snow', 'far fa-shovel-snow', 'fas fa-shovel-snow'],
	      defaultOption: 'far fa-shovel-snow',
	      keywords: 'construction dig excavate plow tool trench shovel snow'
	    }, {
	      className: 'far fa-toolbox',
	      options: ['fat fa-toolbox', 'fal fa-toolbox', 'far fa-toolbox', 'fas fa-toolbox'],
	      defaultOption: 'far fa-toolbox',
	      keywords: 'admin chest container fix mechanic repair settings tool toolbox tools toolbox'
	    }, {
	      className: 'far fa-traffic-cone',
	      options: ['fat fa-traffic-cone', 'fal fa-traffic-cone', 'far fa-traffic-cone', 'fas fa-traffic-cone'],
	      defaultOption: 'far fa-traffic-cone',
	      keywords: 'alert construction road traffic cone'
	    }, {
	      className: 'far fa-triangle-person-digging',
	      options: ['fat fa-triangle-person-digging', 'fal fa-triangle-person-digging', 'far fa-triangle-person-digging', 'fas fa-triangle-person-digging'],
	      defaultOption: 'far fa-triangle-person-digging',
	      keywords: 'bury men at work warning triangle person digging'
	    }, {
	      className: 'far fa-truck-container',
	      options: ['fat fa-truck-container', 'fal fa-truck-container', 'far fa-truck-container', 'fas fa-truck-container'],
	      defaultOption: 'far fa-truck-container',
	      keywords: 'cargo delivery shipping vehicle truck container'
	    }, {
	      className: 'far fa-truck-pickup',
	      options: ['fat fa-truck-pickup', 'fal fa-truck-pickup', 'far fa-truck-pickup', 'fas fa-truck-pickup'],
	      defaultOption: 'far fa-truck-pickup',
	      keywords: 'cargo pick up pickup pickup truck truck vehicle truck pickup'
	    }, {
	      className: 'far fa-user-helmet-safety',
	      options: ['fat fa-user-helmet-safety', 'fal fa-user-helmet-safety', 'far fa-user-helmet-safety', 'fas fa-user-helmet-safety'],
	      defaultOption: 'far fa-user-helmet-safety',
	      keywords: 'construction construction worker hardhat hat helmet safety worker user helmet safety'
	    }, {
	      className: 'far fa-wrench',
	      options: ['fat fa-wrench', 'fal fa-wrench', 'far fa-wrench', 'fas fa-wrench'],
	      defaultOption: 'far fa-wrench',
	      keywords: 'construction fix mechanic plumbing settings spanner tool update wrench wrench'
	    }, {
	      className: 'far fa-wrench-simple',
	      options: ['fat fa-wrench-simple', 'fal fa-wrench-simple', 'far fa-wrench-simple', 'fas fa-wrench-simple'],
	      defaultOption: 'far fa-wrench-simple',
	      keywords: 'settings tool wrench simple'
	    }]
	  }, {
	    id: 'design',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_DESIGN'),
	    items: [{
	      className: 'far fa-angle',
	      options: ['fat fa-angle', 'fal fa-angle', 'far fa-angle', 'fas fa-angle'],
	      defaultOption: 'far fa-angle',
	      keywords: 'measured angle acute measure angle'
	    }, {
	      className: 'far fa-angle-90',
	      options: ['fat fa-angle-90', 'fal fa-angle-90', 'far fa-angle-90', 'fas fa-angle-90'],
	      defaultOption: 'far fa-angle-90',
	      keywords: 'right angle with arc measure right angle angle 90'
	    }, {
	      className: 'far fa-ball-pile',
	      options: ['fat fa-ball-pile', 'fal fa-ball-pile', 'far fa-ball-pile', 'fas fa-ball-pile'],
	      defaultOption: 'far fa-ball-pile',
	      keywords: 'balance cannon group pyramid snowball ball pile'
	    }, {
	      className: 'far fa-bezier-curve',
	      options: ['fat fa-bezier-curve', 'fal fa-bezier-curve', 'far fa-bezier-curve', 'fas fa-bezier-curve'],
	      defaultOption: 'far fa-bezier-curve',
	      keywords: 'curves illustrator lines path vector bezier curve'
	    }, {
	      className: 'far fa-book-font',
	      options: ['fat fa-book-font', 'fal fa-book-font', 'far fa-book-font', 'fas fa-book-font'],
	      defaultOption: 'far fa-book-font',
	      keywords: 'library research book font'
	    }, {
	      className: 'far fa-bring-forward',
	      options: ['fat fa-bring-forward', 'fal fa-bring-forward', 'far fa-bring-forward', 'fas fa-bring-forward'],
	      defaultOption: 'far fa-bring-forward',
	      keywords: 'arrange front layer order stack bring forward'
	    }, {
	      className: 'far fa-bring-front',
	      options: ['fat fa-bring-front', 'fal fa-bring-front', 'far fa-bring-front', 'fas fa-bring-front'],
	      defaultOption: 'far fa-bring-front',
	      keywords: 'arrange forward layer order stack bring front'
	    }, {
	      className: 'far fa-brush',
	      options: ['fat fa-brush', 'fal fa-brush', 'far fa-brush', 'fas fa-brush'],
	      defaultOption: 'far fa-brush',
	      keywords: 'art bristles color handle paint brush'
	    }, {
	      className: 'far fa-camera-polaroid',
	      options: ['fat fa-camera-polaroid', 'fal fa-camera-polaroid', 'far fa-camera-polaroid', 'fas fa-camera-polaroid'],
	      defaultOption: 'far fa-camera-polaroid',
	      keywords: 'capture film instant camera lens photo photography retro snapshot vintage camera polaroid'
	    }, {
	      className: 'far fa-circle-dashed',
	      options: ['fat fa-circle-dashed', 'fal fa-circle-dashed', 'far fa-circle-dashed', 'fas fa-circle-dashed'],
	      defaultOption: 'far fa-circle-dashed',
	      keywords: 'dashed dotted select circle dashed'
	    }, {
	      className: 'far fa-circle-half-stroke',
	      options: ['fat fa-circle-half-stroke', 'fal fa-circle-half-stroke', 'far fa-circle-half-stroke', 'fas fa-circle-half-stroke'],
	      defaultOption: 'far fa-circle-half-stroke',
	      keywords: 'circle with left half black contrast dark light saturation circle half stroke'
	    }, {
	      className: 'far fa-clone',
	      options: ['fat fa-clone', 'fal fa-clone', 'far fa-clone', 'fas fa-clone'],
	      defaultOption: 'far fa-clone',
	      keywords: 'arrange copy duplicate paste clone'
	    }, {
	      className: 'far fa-columns-3',
	      options: ['fat fa-columns-3', 'fal fa-columns-3', 'far fa-columns-3', 'fas fa-columns-3'],
	      defaultOption: 'far fa-columns-3',
	      keywords: 'divide organize panes split columns 3'
	    }, {
	      className: 'far fa-compass-drafting',
	      options: ['fat fa-compass-drafting', 'fal fa-compass-drafting', 'far fa-compass-drafting', 'fas fa-compass-drafting'],
	      defaultOption: 'far fa-compass-drafting',
	      keywords: 'design map mechanical drawing plot plotting compass drafting'
	    }, {
	      className: 'far fa-copy',
	      options: ['fat fa-copy', 'fal fa-copy', 'far fa-copy', 'fas fa-copy'],
	      defaultOption: 'far fa-copy',
	      keywords: 'clone duplicate file files o paper paste copy'
	    }, {
	      className: 'far fa-crop',
	      options: ['fat fa-crop', 'fal fa-crop', 'far fa-crop', 'fas fa-crop'],
	      defaultOption: 'far fa-crop',
	      keywords: 'design frame mask resize shrink crop'
	    }, {
	      className: 'far fa-crop-simple',
	      options: ['fat fa-crop-simple', 'fal fa-crop-simple', 'far fa-crop-simple', 'fas fa-crop-simple'],
	      defaultOption: 'far fa-crop-simple',
	      keywords: 'design frame mask resize shrink crop simple'
	    }, {
	      className: 'far fa-crosshairs',
	      options: ['fat fa-crosshairs', 'fal fa-crosshairs', 'far fa-crosshairs', 'fas fa-crosshairs'],
	      defaultOption: 'far fa-crosshairs',
	      keywords: 'aim bullseye gpd picker position crosshairs'
	    }, {
	      className: 'far fa-cube',
	      options: ['fat fa-cube', 'fal fa-cube', 'far fa-cube', 'fas fa-cube'],
	      defaultOption: 'far fa-cube',
	      keywords: '3d block dice package square tesseract cube'
	    }, {
	      className: 'far fa-cubes',
	      options: ['fat fa-cubes', 'fal fa-cubes', 'far fa-cubes', 'fas fa-cubes'],
	      defaultOption: 'far fa-cubes',
	      keywords: '3d block dice package pyramid square stack tesseract cubes'
	    }, {
	      className: 'far fa-distribute-spacing-horizontal',
	      options: ['fat fa-distribute-spacing-horizontal', 'fal fa-distribute-spacing-horizontal', 'far fa-distribute-spacing-horizontal', 'fas fa-distribute-spacing-horizontal'],
	      defaultOption: 'far fa-distribute-spacing-horizontal',
	      keywords: 'align line padding rectangle spacing distribute spacing horizontal'
	    }, {
	      className: 'far fa-distribute-spacing-vertical',
	      options: ['fat fa-distribute-spacing-vertical', 'fal fa-distribute-spacing-vertical', 'far fa-distribute-spacing-vertical', 'fas fa-distribute-spacing-vertical'],
	      defaultOption: 'far fa-distribute-spacing-vertical',
	      keywords: 'align line padding rectangle spacing distribute spacing vertical'
	    }, {
	      className: 'far fa-draw-circle',
	      options: ['fat fa-draw-circle', 'fal fa-draw-circle', 'far fa-draw-circle', 'fas fa-draw-circle'],
	      defaultOption: 'far fa-draw-circle',
	      keywords: 'anchors lines object render shape draw circle'
	    }, {
	      className: 'far fa-draw-polygon',
	      options: ['fat fa-draw-polygon', 'fal fa-draw-polygon', 'far fa-draw-polygon', 'fas fa-draw-polygon'],
	      defaultOption: 'far fa-draw-polygon',
	      keywords: 'anchors lines object render shape draw polygon'
	    }, {
	      className: 'far fa-draw-square',
	      options: ['fat fa-draw-square', 'fal fa-draw-square', 'far fa-draw-square', 'fas fa-draw-square'],
	      defaultOption: 'far fa-draw-square',
	      keywords: 'anchors lines object render shape draw square'
	    }, {
	      className: 'far fa-droplet',
	      options: ['fat fa-droplet', 'fal fa-droplet', 'far fa-droplet', 'fas fa-droplet'],
	      defaultOption: 'far fa-droplet',
	      keywords: 'cold color comic drop droplet raindrop sweat waterdrop droplet'
	    }, {
	      className: 'far fa-droplet-slash',
	      options: ['fat fa-droplet-slash', 'fal fa-droplet-slash', 'far fa-droplet-slash', 'fas fa-droplet-slash'],
	      defaultOption: 'far fa-droplet-slash',
	      keywords: 'color drop droplet raindrop waterdrop droplet slash'
	    }, {
	      className: 'far fa-eraser',
	      options: ['fat fa-eraser', 'fal fa-eraser', 'far fa-eraser', 'fas fa-eraser'],
	      defaultOption: 'far fa-eraser',
	      keywords: 'art delete remove rubber eraser'
	    }, {
	      className: 'far fa-eye',
	      options: ['fat fa-eye', 'fal fa-eye', 'far fa-eye', 'fas fa-eye'],
	      defaultOption: 'far fa-eye',
	      keywords: 'body eye look optic see seen show sight views visible eye'
	    }, {
	      className: 'far fa-eye-dropper',
	      options: ['fat fa-eye-dropper', 'fal fa-eye-dropper', 'far fa-eye-dropper', 'fas fa-eye-dropper'],
	      defaultOption: 'far fa-eye-dropper',
	      keywords: 'beaker clone color copy eyedropper pipette eye dropper'
	    }, {
	      className: 'far fa-eye-dropper-full',
	      options: ['fat fa-eye-dropper-full', 'fal fa-eye-dropper-full', 'far fa-eye-dropper-full', 'fas fa-eye-dropper-full'],
	      defaultOption: 'far fa-eye-dropper-full',
	      keywords: 'color eyedrop eye dropper full'
	    }, {
	      className: 'far fa-eye-dropper-half',
	      options: ['fat fa-eye-dropper-half', 'fal fa-eye-dropper-half', 'far fa-eye-dropper-half', 'fas fa-eye-dropper-half'],
	      defaultOption: 'far fa-eye-dropper-half',
	      keywords: 'color eyedrop eye dropper half'
	    }, {
	      className: 'far fa-eye-slash',
	      options: ['fat fa-eye-slash', 'fal fa-eye-slash', 'far fa-eye-slash', 'fas fa-eye-slash'],
	      defaultOption: 'far fa-eye-slash',
	      keywords: 'blind hide show toggle unseen views visible visiblity eye slash'
	    }, {
	      className: 'far fa-fill',
	      options: ['fat fa-fill', 'fal fa-fill', 'far fa-fill', 'fas fa-fill'],
	      defaultOption: 'far fa-fill',
	      keywords: 'bucket color paint paint bucket fill'
	    }, {
	      className: 'far fa-fill-drip',
	      options: ['fat fa-fill-drip', 'fal fa-fill-drip', 'far fa-fill-drip', 'fas fa-fill-drip'],
	      defaultOption: 'far fa-fill-drip',
	      keywords: 'bucket color drop paint paint bucket spill fill drip'
	    }, {
	      className: 'far fa-floppy-disk',
	      options: ['fat fa-floppy-disk', 'fal fa-floppy-disk', 'far fa-floppy-disk', 'fas fa-floppy-disk'],
	      defaultOption: 'far fa-floppy-disk',
	      keywords: 'black hard shell floppy disk computer disk download floppy floppy disk floppy o floppy disk'
	    }, {
	      className: 'far fa-font-awesome',
	      options: ['fat fa-font-awesome', 'fal fa-font-awesome', 'far fa-font-awesome', 'fas fa-font-awesome'],
	      defaultOption: 'far fa-font-awesome',
	      keywords: 'awesome flag font icons typeface font awesome'
	    }, {
	      className: 'far fa-gallery-thumbnails',
	      options: ['fat fa-gallery-thumbnails', 'fal fa-gallery-thumbnails', 'far fa-gallery-thumbnails', 'fas fa-gallery-thumbnails'],
	      defaultOption: 'far fa-gallery-thumbnails',
	      keywords: 'carousel gallery grid screen view gallery thumbnails'
	    }, {
	      className: 'far fa-grid',
	      options: ['fat fa-grid', 'fal fa-grid', 'far fa-grid', 'fas fa-grid'],
	      defaultOption: 'far fa-grid',
	      keywords: 'filter sort grid'
	    }, {
	      className: 'far fa-grid-2',
	      options: ['fat fa-grid-2', 'fal fa-grid-2', 'far fa-grid-2', 'fas fa-grid-2'],
	      defaultOption: 'far fa-grid-2',
	      keywords: 'filter sort grid 2'
	    }, {
	      className: 'far fa-grid-2-plus',
	      options: ['fat fa-grid-2-plus', 'fal fa-grid-2-plus', 'far fa-grid-2-plus', 'fas fa-grid-2-plus'],
	      defaultOption: 'far fa-grid-2-plus',
	      keywords: 'add filter sort grid 2 plus'
	    }, {
	      className: 'far fa-grid-4',
	      options: ['fat fa-grid-4', 'fal fa-grid-4', 'far fa-grid-4', 'fas fa-grid-4'],
	      defaultOption: 'far fa-grid-4',
	      keywords: 'filter sort grid 4'
	    }, {
	      className: 'far fa-grid-5',
	      options: ['fat fa-grid-5', 'fal fa-grid-5', 'far fa-grid-5', 'fas fa-grid-5'],
	      defaultOption: 'far fa-grid-5',
	      keywords: 'filter sort grid 5'
	    }, {
	      className: 'far fa-grid-dividers',
	      options: ['fat fa-grid-dividers', 'fal fa-grid-dividers', 'far fa-grid-dividers', 'fas fa-grid-dividers'],
	      defaultOption: 'far fa-grid-dividers',
	      keywords: 'grid line square grid dividers'
	    }, {
	      className: 'far fa-highlighter',
	      options: ['fat fa-highlighter', 'fal fa-highlighter', 'far fa-highlighter', 'fas fa-highlighter'],
	      defaultOption: 'far fa-highlighter',
	      keywords: 'edit marker sharpie update write highlighter'
	    }, {
	      className: 'far fa-highlighter-line',
	      options: ['fat fa-highlighter-line', 'fal fa-highlighter-line', 'far fa-highlighter-line', 'fas fa-highlighter-line'],
	      defaultOption: 'far fa-highlighter-line',
	      keywords: 'highlight marker select highlighter line'
	    }, {
	      className: 'far fa-icons',
	      options: ['fat fa-icons', 'fal fa-icons', 'far fa-icons', 'fas fa-icons'],
	      defaultOption: 'far fa-icons',
	      keywords: 'bolt emoji heart image music photo symbols icons'
	    }, {
	      className: 'far fa-image-polaroid',
	      options: ['fat fa-image-polaroid', 'fal fa-image-polaroid', 'far fa-image-polaroid', 'fas fa-image-polaroid'],
	      defaultOption: 'far fa-image-polaroid',
	      keywords: 'capture film instant camera lens photo photography retro snapshot vintage image polaroid'
	    }, {
	      className: 'far fa-lasso',
	      options: ['fat fa-lasso', 'fal fa-lasso', 'far fa-lasso', 'fas fa-lasso'],
	      defaultOption: 'far fa-lasso',
	      keywords: 'cowboy rodeo rope select selection western lasso'
	    }, {
	      className: 'far fa-lasso-sparkles',
	      options: ['fat fa-lasso-sparkles', 'fal fa-lasso-sparkles', 'far fa-lasso-sparkles', 'fas fa-lasso-sparkles'],
	      defaultOption: 'far fa-lasso-sparkles',
	      keywords: 'automatic cowboy magic select lasso sparkles'
	    }, {
	      className: 'far fa-layer-group',
	      options: ['fat fa-layer-group', 'fal fa-layer-group', 'far fa-layer-group', 'fas fa-layer-group'],
	      defaultOption: 'far fa-layer-group',
	      keywords: 'arrange develop layers map stack layer group'
	    }, {
	      className: 'far fa-layer-minus',
	      options: ['fat fa-layer-minus', 'fal fa-layer-minus', 'far fa-layer-minus', 'fas fa-layer-minus'],
	      defaultOption: 'far fa-layer-minus',
	      keywords: 'arrange delete layers negative remove stack layer minus'
	    }, {
	      className: 'far fa-layer-plus',
	      options: ['fat fa-layer-plus', 'fal fa-layer-plus', 'far fa-layer-plus', 'fas fa-layer-plus'],
	      defaultOption: 'far fa-layer-plus',
	      keywords: 'add arrange create layers new positive stack layer plus'
	    }, {
	      className: 'far fa-marker',
	      options: ['fat fa-marker', 'fal fa-marker', 'far fa-marker', 'fas fa-marker'],
	      defaultOption: 'far fa-marker',
	      keywords: 'design edit sharpie update write marker'
	    }, {
	      className: 'far fa-notebook',
	      options: ['fat fa-notebook', 'fal fa-notebook', 'far fa-notebook', 'fas fa-notebook'],
	      defaultOption: 'far fa-notebook',
	      keywords: 'daybook diary journal noteboo notebook sketch notebook'
	    }, {
	      className: 'far fa-object-group',
	      options: ['fat fa-object-group', 'fal fa-object-group', 'far fa-object-group', 'fas fa-object-group'],
	      defaultOption: 'far fa-object-group',
	      keywords: 'combine copy design merge select object group'
	    }, {
	      className: 'far fa-object-ungroup',
	      options: ['fat fa-object-ungroup', 'fal fa-object-ungroup', 'far fa-object-ungroup', 'fas fa-object-ungroup'],
	      defaultOption: 'far fa-object-ungroup',
	      keywords: 'copy design merge select separate object ungroup'
	    }, {
	      className: 'far fa-objects-align-bottom',
	      options: ['fat fa-objects-align-bottom', 'fal fa-objects-align-bottom', 'far fa-objects-align-bottom', 'fas fa-objects-align-bottom'],
	      defaultOption: 'far fa-objects-align-bottom',
	      keywords: 'align distribute line rectangles objects align bottom'
	    }, {
	      className: 'far fa-objects-align-center-horizontal',
	      options: ['fat fa-objects-align-center-horizontal', 'fal fa-objects-align-center-horizontal', 'far fa-objects-align-center-horizontal', 'fas fa-objects-align-center-horizontal'],
	      defaultOption: 'far fa-objects-align-center-horizontal',
	      keywords: 'align distribute line rectangles objects align center horizontal'
	    }, {
	      className: 'far fa-objects-align-center-vertical',
	      options: ['fat fa-objects-align-center-vertical', 'fal fa-objects-align-center-vertical', 'far fa-objects-align-center-vertical', 'fas fa-objects-align-center-vertical'],
	      defaultOption: 'far fa-objects-align-center-vertical',
	      keywords: 'align distribute line rectangles objects align center vertical'
	    }, {
	      className: 'far fa-objects-align-left',
	      options: ['fat fa-objects-align-left', 'fal fa-objects-align-left', 'far fa-objects-align-left', 'fas fa-objects-align-left'],
	      defaultOption: 'far fa-objects-align-left',
	      keywords: 'align distribute line rectangles objects align left'
	    }, {
	      className: 'far fa-objects-align-right',
	      options: ['fat fa-objects-align-right', 'fal fa-objects-align-right', 'far fa-objects-align-right', 'fas fa-objects-align-right'],
	      defaultOption: 'far fa-objects-align-right',
	      keywords: 'align distribute line rectangles objects align right'
	    }, {
	      className: 'far fa-objects-align-top',
	      options: ['fat fa-objects-align-top', 'fal fa-objects-align-top', 'far fa-objects-align-top', 'fas fa-objects-align-top'],
	      defaultOption: 'far fa-objects-align-top',
	      keywords: 'align distribute line rectangles objects align top'
	    }, {
	      className: 'far fa-objects-column',
	      options: ['fat fa-objects-column', 'fal fa-objects-column', 'far fa-objects-column', 'fas fa-objects-column'],
	      defaultOption: 'far fa-objects-column',
	      keywords: 'array grid organize scroll windows objects column'
	    }, {
	      className: 'far fa-paint-brush',
	      options: ['fat fa-paint-brush', 'fal fa-paint-brush', 'far fa-paint-brush', 'fas fa-paint-brush'],
	      defaultOption: 'far fa-paint-brush',
	      keywords: 'acrylic art brush color fill paint paintbrush painting pigment watercolor paint brush'
	    }, {
	      className: 'far fa-paint-brush-fine',
	      options: ['fat fa-paint-brush-fine', 'fal fa-paint-brush-fine', 'far fa-paint-brush-fine', 'fas fa-paint-brush-fine'],
	      defaultOption: 'far fa-paint-brush-fine',
	      keywords: 'acrylic art brush color fill paint pigment watercolor paint brush fine'
	    }, {
	      className: 'far fa-paint-roller',
	      options: ['fat fa-paint-roller', 'fal fa-paint-roller', 'far fa-paint-roller', 'fas fa-paint-roller'],
	      defaultOption: 'far fa-paint-roller',
	      keywords: 'acrylic art brush color fill paint pigment watercolor paint roller'
	    }, {
	      className: 'far fa-paintbrush-pencil',
	      options: ['fat fa-paintbrush-pencil', 'fal fa-paintbrush-pencil', 'far fa-paintbrush-pencil', 'fas fa-paintbrush-pencil'],
	      defaultOption: 'far fa-paintbrush-pencil',
	      keywords: 'art creative paintbrush pencil'
	    }, {
	      className: 'far fa-palette',
	      options: ['fat fa-palette', 'fal fa-palette', 'far fa-palette', 'fas fa-palette'],
	      defaultOption: 'far fa-palette',
	      keywords: 'acrylic art artist palette brush color fill museum paint painting palette pigment watercolor palette'
	    }, {
	      className: 'far fa-paste',
	      options: ['fat fa-paste', 'fal fa-paste', 'far fa-paste', 'fas fa-paste'],
	      defaultOption: 'far fa-paste',
	      keywords: 'clipboard copy document paper paste'
	    }, {
	      className: 'far fa-pen',
	      options: ['fat fa-pen', 'fal fa-pen', 'far fa-pen', 'fas fa-pen'],
	      defaultOption: 'far fa-pen',
	      keywords: 'ballpoint design edit pen update write pen'
	    }, {
	      className: 'far fa-pen-circle',
	      options: ['fat fa-pen-circle', 'fal fa-pen-circle', 'far fa-pen-circle', 'fas fa-pen-circle'],
	      defaultOption: 'far fa-pen-circle',
	      keywords: 'draw edit pencil write pen circle'
	    }, {
	      className: 'far fa-pen-clip',
	      options: ['fat fa-pen-clip', 'fal fa-pen-clip', 'far fa-pen-clip', 'fas fa-pen-clip'],
	      defaultOption: 'far fa-pen-clip',
	      keywords: 'design edit update write pen clip'
	    }, {
	      className: 'far fa-pen-fancy',
	      options: ['fat fa-pen-fancy', 'fal fa-pen-fancy', 'far fa-pen-fancy', 'fas fa-pen-fancy'],
	      defaultOption: 'far fa-pen-fancy',
	      keywords: 'black nib design edit fountain fountain pen nib pen update write pen fancy'
	    }, {
	      className: 'far fa-pen-nib',
	      options: ['fat fa-pen-nib', 'fal fa-pen-nib', 'far fa-pen-nib', 'fas fa-pen-nib'],
	      defaultOption: 'far fa-pen-nib',
	      keywords: 'white nib design edit fountain pen update write pen nib'
	    }, {
	      className: 'far fa-pen-ruler',
	      options: ['fat fa-pen-ruler', 'fal fa-pen-ruler', 'far fa-pen-ruler', 'fas fa-pen-ruler'],
	      defaultOption: 'far fa-pen-ruler',
	      keywords: 'design draft draw pencil pen ruler'
	    }, {
	      className: 'far fa-pen-to-square',
	      options: ['fat fa-pen-to-square', 'fal fa-pen-to-square', 'far fa-pen-to-square', 'fas fa-pen-to-square'],
	      defaultOption: 'far fa-pen-to-square',
	      keywords: 'edit pen pencil update write pen to square'
	    }, {
	      className: 'far fa-pencil',
	      options: ['fat fa-pencil', 'fal fa-pencil', 'far fa-pencil', 'fas fa-pencil'],
	      defaultOption: 'far fa-pencil',
	      keywords: 'lower left pencil design edit penci pencil update write pencil'
	    }, {
	      className: 'far fa-rectangle-pro',
	      options: ['fat fa-rectangle-pro', 'fal fa-rectangle-pro', 'far fa-rectangle-pro', 'fas fa-rectangle-pro'],
	      defaultOption: 'far fa-rectangle-pro',
	      keywords: 'professional rectangle pro'
	    }, {
	      className: 'far fa-rectangles-mixed',
	      options: ['fat fa-rectangles-mixed', 'fal fa-rectangles-mixed', 'far fa-rectangles-mixed', 'fas fa-rectangles-mixed'],
	      defaultOption: 'far fa-rectangles-mixed',
	      keywords: 'mission control random sizing rectangles mixed'
	    }, {
	      className: 'far fa-ruler-combined',
	      options: ['fat fa-ruler-combined', 'fal fa-ruler-combined', 'far fa-ruler-combined', 'fas fa-ruler-combined'],
	      defaultOption: 'far fa-ruler-combined',
	      keywords: 'design draft length measure planning ruler combined'
	    }, {
	      className: 'far fa-ruler-horizontal',
	      options: ['fat fa-ruler-horizontal', 'fal fa-ruler-horizontal', 'far fa-ruler-horizontal', 'fas fa-ruler-horizontal'],
	      defaultOption: 'far fa-ruler-horizontal',
	      keywords: 'design draft length measure planning ruler horizontal'
	    }, {
	      className: 'far fa-ruler-vertical',
	      options: ['fat fa-ruler-vertical', 'fal fa-ruler-vertical', 'far fa-ruler-vertical', 'fas fa-ruler-vertical'],
	      defaultOption: 'far fa-ruler-vertical',
	      keywords: 'design draft length measure planning ruler vertical'
	    }, {
	      className: 'far fa-scanner',
	      options: ['fat fa-scanner', 'fal fa-scanner', 'far fa-scanner', 'fas fa-scanner'],
	      defaultOption: 'far fa-scanner',
	      keywords: 'copy device digitize image import scanner'
	    }, {
	      className: 'far fa-scissors',
	      options: ['fat fa-scissors', 'fal fa-scissors', 'far fa-scissors', 'fas fa-scissors'],
	      defaultOption: 'far fa-scissors',
	      keywords: 'black safety scissors white scissors clip cutting scissors snip tool scissors'
	    }, {
	      className: 'far fa-scribble',
	      options: ['fat fa-scribble', 'fal fa-scribble', 'far fa-scribble', 'fas fa-scribble'],
	      defaultOption: 'far fa-scribble',
	      keywords: 'doodle draw line road scrawl switchback scribble'
	    }, {
	      className: 'far fa-send-back',
	      options: ['fat fa-send-back', 'fal fa-send-back', 'far fa-send-back', 'fas fa-send-back'],
	      defaultOption: 'far fa-send-back',
	      keywords: 'arrange backward layer order stack send back'
	    }, {
	      className: 'far fa-send-backward',
	      options: ['fat fa-send-backward', 'fal fa-send-backward', 'far fa-send-backward', 'fas fa-send-backward'],
	      defaultOption: 'far fa-send-backward',
	      keywords: 'arrange back layer order stack send backward'
	    }, {
	      className: 'far fa-splotch',
	      options: ['fat fa-splotch', 'fal fa-splotch', 'far fa-splotch', 'fas fa-splotch'],
	      defaultOption: 'far fa-splotch',
	      keywords: 'ink blob blotch glob stain splotch'
	    }, {
	      className: 'far fa-spray-can',
	      options: ['fat fa-spray-can', 'fal fa-spray-can', 'far fa-spray-can', 'fas fa-spray-can'],
	      defaultOption: 'far fa-spray-can',
	      keywords: 'paint aerosol design graffiti tag spray can'
	    }, {
	      className: 'far fa-square-dashed',
	      options: ['fat fa-square-dashed', 'fal fa-square-dashed', 'far fa-square-dashed', 'fas fa-square-dashed'],
	      defaultOption: 'far fa-square-dashed',
	      keywords: 'dashed dotted select square dashed'
	    }, {
	      className: 'far fa-stamp',
	      options: ['fat fa-stamp', 'fal fa-stamp', 'far fa-stamp', 'fas fa-stamp'],
	      defaultOption: 'far fa-stamp',
	      keywords: 'art certificate imprint rubber seal stamp'
	    }, {
	      className: 'far fa-swatchbook',
	      options: ['fat fa-swatchbook', 'fal fa-swatchbook', 'far fa-swatchbook', 'fas fa-swatchbook'],
	      defaultOption: 'far fa-swatchbook',
	      keywords: 'pantone color design hue palette swatchbook'
	    }, {
	      className: 'far fa-symbols',
	      options: ['fat fa-symbols', 'fal fa-symbols', 'far fa-symbols', 'fas fa-symbols'],
	      defaultOption: 'far fa-symbols',
	      keywords: 'bolt emoji heart image input input symbols music photo symbols ??&% symbols'
	    }, {
	      className: 'far fa-vector-circle',
	      options: ['fat fa-vector-circle', 'fal fa-vector-circle', 'far fa-vector-circle', 'fas fa-vector-circle'],
	      defaultOption: 'far fa-vector-circle',
	      keywords: 'anchors lines objects render shape vector circle'
	    }, {
	      className: 'far fa-vector-polygon',
	      options: ['fat fa-vector-polygon', 'fal fa-vector-polygon', 'far fa-vector-polygon', 'fas fa-vector-polygon'],
	      defaultOption: 'far fa-vector-polygon',
	      keywords: 'anchors lines objects render shape vector polygon'
	    }, {
	      className: 'far fa-vector-square',
	      options: ['fat fa-vector-square', 'fal fa-vector-square', 'far fa-vector-square', 'fas fa-vector-square'],
	      defaultOption: 'far fa-vector-square',
	      keywords: 'anchors lines object render shape vector square'
	    }, {
	      className: 'far fa-wand-magic',
	      options: ['fat fa-wand-magic', 'fal fa-wand-magic', 'far fa-wand-magic', 'fas fa-wand-magic'],
	      defaultOption: 'far fa-wand-magic',
	      keywords: 'autocomplete automatic mage magic spell wand witch wizard wand magic'
	    }, {
	      className: 'far fa-wand-magic-sparkles',
	      options: ['fat fa-wand-magic-sparkles', 'fal fa-wand-magic-sparkles', 'far fa-wand-magic-sparkles', 'fas fa-wand-magic-sparkles'],
	      defaultOption: 'far fa-wand-magic-sparkles',
	      keywords: 'auto magic magic wand trick witch wizard wand magic sparkles'
	    }, {
	      className: 'far fa-wrench-simple',
	      options: ['fat fa-wrench-simple', 'fal fa-wrench-simple', 'far fa-wrench-simple', 'fas fa-wrench-simple'],
	      defaultOption: 'far fa-wrench-simple',
	      keywords: 'settings tool wrench simple'
	    }]
	  }, {
	    id: 'devices-hardware',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_DEVICES_HARDWARE'),
	    items: [{
	      className: 'far fa-blender-phone',
	      options: ['fat fa-blender-phone', 'fal fa-blender-phone', 'far fa-blender-phone', 'fas fa-blender-phone'],
	      defaultOption: 'far fa-blender-phone',
	      keywords: 'appliance cocktail fantasy milkshake mixer puree silly smoothie blender phone'
	    }, {
	      className: 'far fa-camera',
	      options: ['fat fa-camera', 'fal fa-camera', 'far fa-camera', 'fas fa-camera'],
	      defaultOption: 'far fa-camera',
	      keywords: 'image lens photo picture record shutter video camera'
	    }, {
	      className: 'far fa-camera-retro',
	      options: ['fat fa-camera-retro', 'fal fa-camera-retro', 'far fa-camera-retro', 'fas fa-camera-retro'],
	      defaultOption: 'far fa-camera-retro',
	      keywords: 'camera image lens photo picture record shutter video camera retro'
	    }, {
	      className: 'far fa-camera-web',
	      options: ['fat fa-camera-web', 'fal fa-camera-web', 'far fa-camera-web', 'fas fa-camera-web'],
	      defaultOption: 'far fa-camera-web',
	      keywords: 'chat conference call facetime podcast video videoconferencing youtube camera web'
	    }, {
	      className: 'far fa-camera-web-slash',
	      options: ['fat fa-camera-web-slash', 'fal fa-camera-web-slash', 'far fa-camera-web-slash', 'fas fa-camera-web-slash'],
	      defaultOption: 'far fa-camera-web-slash',
	      keywords: 'chat conference call facetime podcast video videoconferencing youtube camera web slash'
	    }, {
	      className: 'far fa-car-battery',
	      options: ['fat fa-car-battery', 'fal fa-car-battery', 'far fa-car-battery', 'fas fa-car-battery'],
	      defaultOption: 'far fa-car-battery',
	      keywords: 'auto electric mechanic power car battery'
	    }, {
	      className: 'far fa-compact-disc',
	      options: ['fat fa-compact-disc', 'fal fa-compact-disc', 'far fa-compact-disc', 'fas fa-compact-disc'],
	      defaultOption: 'far fa-compact-disc',
	      keywords: 'optical disc icon album blu ray bluray cd computer disc disk dvd media movie music optical optical disk record video vinyl compact disc'
	    }, {
	      className: 'far fa-computer-classic',
	      options: ['fat fa-computer-classic', 'fal fa-computer-classic', 'far fa-computer-classic', 'fas fa-computer-classic'],
	      defaultOption: 'far fa-computer-classic',
	      keywords: 'apple ii hardware machine macintosh programming retro vintage computer classic'
	    }, {
	      className: 'far fa-computer-mouse',
	      options: ['fat fa-computer-mouse', 'fal fa-computer-mouse', 'far fa-computer-mouse', 'fas fa-computer-mouse'],
	      defaultOption: 'far fa-computer-mouse',
	      keywords: 'click computer computer mouse cursor input peripheral computer mouse'
	    }, {
	      className: 'far fa-computer-mouse-scrollwheel',
	      options: ['fat fa-computer-mouse-scrollwheel', 'fal fa-computer-mouse-scrollwheel', 'far fa-computer-mouse-scrollwheel', 'fas fa-computer-mouse-scrollwheel'],
	      defaultOption: 'far fa-computer-mouse-scrollwheel',
	      keywords: 'click computer cursor input peripheral computer mouse scrollwheel'
	    }, {
	      className: 'far fa-computer-speaker',
	      options: ['fat fa-computer-speaker', 'fal fa-computer-speaker', 'far fa-computer-speaker', 'fas fa-computer-speaker'],
	      defaultOption: 'far fa-computer-speaker',
	      keywords: 'airplay bluetooth devices music output pair sound sync computer speaker'
	    }, {
	      className: 'far fa-database',
	      options: ['fat fa-database', 'fal fa-database', 'far fa-database', 'fas fa-database'],
	      defaultOption: 'far fa-database',
	      keywords: 'computer development directory memory storage database'
	    }, {
	      className: 'far fa-desktop',
	      options: ['fat fa-desktop', 'fal fa-desktop', 'far fa-desktop', 'fas fa-desktop'],
	      defaultOption: 'far fa-desktop',
	      keywords: 'computer cpu demo desktop desktop computer device imac machine monitor pc screen desktop'
	    }, {
	      className: 'far fa-desktop-arrow-down',
	      options: ['fat fa-desktop-arrow-down', 'fal fa-desktop-arrow-down', 'far fa-desktop-arrow-down', 'fas fa-desktop-arrow-down'],
	      defaultOption: 'far fa-desktop-arrow-down',
	      keywords: 'computer desktop download desktop arrow down'
	    }, {
	      className: 'far fa-disc-drive',
	      options: ['fat fa-disc-drive', 'fal fa-disc-drive', 'far fa-disc-drive', 'fas fa-disc-drive'],
	      defaultOption: 'far fa-disc-drive',
	      keywords: 'blu ray cd cd rom computer dvd load music optical drive peripheral tray video disc drive'
	    }, {
	      className: 'far fa-display',
	      options: ['fat fa-display', 'fal fa-display', 'far fa-display', 'fas fa-display'],
	      defaultOption: 'far fa-display',
	      keywords: 'screen computer desktop imac display'
	    }, {
	      className: 'far fa-display-arrow-down',
	      options: ['fat fa-display-arrow-down', 'fal fa-display-arrow-down', 'far fa-display-arrow-down', 'fas fa-display-arrow-down'],
	      defaultOption: 'far fa-display-arrow-down',
	      keywords: 'computer desktop download display arrow down'
	    }, {
	      className: 'far fa-display-code',
	      options: ['fat fa-display-code', 'fal fa-display-code', 'far fa-display-code', 'fas fa-display-code'],
	      defaultOption: 'far fa-display-code',
	      keywords: 'coding computer desktop developing display code'
	    }, {
	      className: 'far fa-display-medical',
	      options: ['fat fa-display-medical', 'fal fa-display-medical', 'far fa-display-medical', 'fas fa-display-medical'],
	      defaultOption: 'far fa-display-medical',
	      keywords: 'computer desktop records display medical'
	    }, {
	      className: 'far fa-display-slash',
	      options: ['fat fa-display-slash', 'fal fa-display-slash', 'far fa-display-slash', 'fas fa-display-slash'],
	      defaultOption: 'far fa-display-slash',
	      keywords: 'computer desktop display slash'
	    }, {
	      className: 'far fa-download',
	      options: ['fat fa-download', 'fal fa-download', 'far fa-download', 'fas fa-download'],
	      defaultOption: 'far fa-download',
	      keywords: 'export hard drive save transfer download'
	    }, {
	      className: 'far fa-engine',
	      options: ['fat fa-engine', 'fal fa-engine', 'far fa-engine', 'fas fa-engine'],
	      defaultOption: 'far fa-engine',
	      keywords: 'car engine engine'
	    }, {
	      className: 'far fa-ethernet',
	      options: ['fat fa-ethernet', 'fal fa-ethernet', 'far fa-ethernet', 'fas fa-ethernet'],
	      defaultOption: 'far fa-ethernet',
	      keywords: 'cable cat 5 cat 6 connection hardware internet network wired ethernet'
	    }, {
	      className: 'far fa-fax',
	      options: ['fat fa-fax', 'fal fa-fax', 'far fa-fax', 'fas fa-fax'],
	      defaultOption: 'far fa-fax',
	      keywords: 'fax icon business communicate copy facsimile fax fax machine send fax'
	    }, {
	      className: 'far fa-flashlight',
	      options: ['fat fa-flashlight', 'fal fa-flashlight', 'far fa-flashlight', 'fas fa-flashlight'],
	      defaultOption: 'far fa-flashlight',
	      keywords: 'camping electric flashlight hide and seek lamp light tool torch flashlight'
	    }, {
	      className: 'far fa-floppy-disk',
	      options: ['fat fa-floppy-disk', 'fal fa-floppy-disk', 'far fa-floppy-disk', 'fas fa-floppy-disk'],
	      defaultOption: 'far fa-floppy-disk',
	      keywords: 'black hard shell floppy disk computer disk download floppy floppy disk floppy o floppy disk'
	    }, {
	      className: 'far fa-floppy-disk-pen',
	      options: ['fat fa-floppy-disk-pen', 'fal fa-floppy-disk-pen', 'far fa-floppy-disk-pen', 'fas fa-floppy-disk-pen'],
	      defaultOption: 'far fa-floppy-disk-pen',
	      keywords: 'edit save save as floppy disk pen'
	    }, {
	      className: 'far fa-floppy-disks',
	      options: ['fat fa-floppy-disks', 'fal fa-floppy-disks', 'far fa-floppy-disks', 'fas fa-floppy-disks'],
	      defaultOption: 'far fa-floppy-disks',
	      keywords: 'save save as floppy disks'
	    }, {
	      className: 'far fa-flux-capacitor',
	      options: ['fat fa-flux-capacitor', 'fal fa-flux-capacitor', 'far fa-flux-capacitor', 'fas fa-flux-capacitor'],
	      defaultOption: 'far fa-flux-capacitor',
	      keywords: '1 21 gigawatts 88 mph emmett brown marty mcfly y back to the future delorean dmc time machine time travel flux capacitor'
	    }, {
	      className: 'far fa-game-console-handheld',
	      options: ['fat fa-game-console-handheld', 'fal fa-game-console-handheld', 'far fa-game-console-handheld', 'fas fa-game-console-handheld'],
	      defaultOption: 'far fa-game-console-handheld',
	      keywords: 'cartridge gameboy nintendo retro video games vintage game console handheld'
	    }, {
	      className: 'far fa-gamepad',
	      options: ['fat fa-gamepad', 'fal fa-gamepad', 'far fa-gamepad', 'fas fa-gamepad'],
	      defaultOption: 'far fa-gamepad',
	      keywords: 'arcade controller d pad joystick video video game gamepad'
	    }, {
	      className: 'far fa-gamepad-pager',
	      options: ['fat fa-gamepad-pager', 'fal fa-gamepad-pager', 'far fa-gamepad-pager', 'fas fa-gamepad-pager'],
	      defaultOption: 'far fa-gamepad-pager',
	      keywords: 'arcade controller d pad game joystick video video game gamepad pager'
	    }, {
	      className: 'far fa-hard-drive',
	      options: ['fat fa-hard-drive', 'fal fa-hard-drive', 'far fa-hard-drive', 'fas fa-hard-drive'],
	      defaultOption: 'far fa-hard-drive',
	      keywords: 'hard disk cpu hard drive harddrive machine save storage hard drive'
	    }, {
	      className: 'far fa-headphones',
	      options: ['fat fa-headphones', 'fal fa-headphones', 'far fa-headphones', 'fas fa-headphones'],
	      defaultOption: 'far fa-headphones',
	      keywords: 'audio earbud headphone listen music sound speaker headphones'
	    }, {
	      className: 'far fa-house-laptop',
	      options: ['fat fa-house-laptop', 'fal fa-house-laptop', 'far fa-house-laptop', 'fas fa-house-laptop'],
	      defaultOption: 'far fa-house-laptop',
	      keywords: 'computer covid 19 device office remote work from home house laptop'
	    }, {
	      className: 'far fa-keyboard',
	      options: ['fat fa-keyboard', 'fal fa-keyboard', 'far fa-keyboard', 'fas fa-keyboard'],
	      defaultOption: 'far fa-keyboard',
	      keywords: 'accessory computer edit input keyboard text type write keyboard'
	    }, {
	      className: 'far fa-keyboard-down',
	      options: ['fat fa-keyboard-down', 'fal fa-keyboard-down', 'far fa-keyboard-down', 'fas fa-keyboard-down'],
	      defaultOption: 'far fa-keyboard-down',
	      keywords: 'hide keyboard keyboard down'
	    }, {
	      className: 'far fa-keyboard-left',
	      options: ['fat fa-keyboard-left', 'fal fa-keyboard-left', 'far fa-keyboard-left', 'fas fa-keyboard-left'],
	      defaultOption: 'far fa-keyboard-left',
	      keywords: 'hide keyboard keyboard left'
	    }, {
	      className: 'far fa-laptop',
	      options: ['fat fa-laptop', 'fal fa-laptop', 'far fa-laptop', 'fas fa-laptop'],
	      defaultOption: 'far fa-laptop',
	      keywords: 'computer cpu dell demo device laptop mac macbook machine pc personal laptop'
	    }, {
	      className: 'far fa-laptop-arrow-down',
	      options: ['fat fa-laptop-arrow-down', 'fal fa-laptop-arrow-down', 'far fa-laptop-arrow-down', 'fas fa-laptop-arrow-down'],
	      defaultOption: 'far fa-laptop-arrow-down',
	      keywords: 'computer download laptop mobile remote laptop arrow down'
	    }, {
	      className: 'far fa-laptop-mobile',
	      options: ['fat fa-laptop-mobile', 'fal fa-laptop-mobile', 'far fa-laptop-mobile', 'fas fa-laptop-mobile'],
	      defaultOption: 'far fa-laptop-mobile',
	      keywords: 'computer device mobile technology laptop mobile'
	    }, {
	      className: 'far fa-laptop-slash',
	      options: ['fat fa-laptop-slash', 'fal fa-laptop-slash', 'far fa-laptop-slash', 'fas fa-laptop-slash'],
	      defaultOption: 'far fa-laptop-slash',
	      keywords: 'computer laptop slash'
	    }, {
	      className: 'far fa-memory',
	      options: ['fat fa-memory', 'fal fa-memory', 'far fa-memory', 'fas fa-memory'],
	      defaultOption: 'far fa-memory',
	      keywords: 'dimm ram hardware storage technology memory'
	    }, {
	      className: 'far fa-meter',
	      options: ['fat fa-meter', 'fal fa-meter', 'far fa-meter', 'fas fa-meter'],
	      defaultOption: 'far fa-meter',
	      keywords: 'electricity transmission utilities meter'
	    }, {
	      className: 'far fa-microchip',
	      options: ['fat fa-microchip', 'fal fa-microchip', 'far fa-microchip', 'fas fa-microchip'],
	      defaultOption: 'far fa-microchip',
	      keywords: 'cpu hardware processor technology microchip'
	    }, {
	      className: 'far fa-microchip-ai',
	      options: ['fat fa-microchip-ai', 'fal fa-microchip-ai', 'far fa-microchip-ai', 'fas fa-microchip-ai'],
	      defaultOption: 'far fa-microchip-ai',
	      keywords: 'artificial intelligence computer silicon microchip ai'
	    }, {
	      className: 'far fa-mobile',
	      options: ['fat fa-mobile', 'fal fa-mobile', 'far fa-mobile', 'fas fa-mobile'],
	      defaultOption: 'far fa-mobile',
	      keywords: 'android call cell cell phone device mobile mobile phone number phone screen telephone text mobile'
	    }, {
	      className: 'far fa-mobile-button',
	      options: ['fat fa-mobile-button', 'fal fa-mobile-button', 'far fa-mobile-button', 'fas fa-mobile-button'],
	      defaultOption: 'far fa-mobile-button',
	      keywords: 'apple call cell phone device iphone number screen telephone mobile button'
	    }, {
	      className: 'far fa-mobile-notch',
	      options: ['fat fa-mobile-notch', 'fal fa-mobile-notch', 'far fa-mobile-notch', 'fas fa-mobile-notch'],
	      defaultOption: 'far fa-mobile-notch',
	      keywords: 'display iphone x iphone smartphone mobile notch'
	    }, {
	      className: 'far fa-mobile-screen',
	      options: ['fat fa-mobile-screen', 'fal fa-mobile-screen', 'far fa-mobile-screen', 'fas fa-mobile-screen'],
	      defaultOption: 'far fa-mobile-screen',
	      keywords: 'android call cell phone device number screen telephone text mobile screen'
	    }, {
	      className: 'far fa-mobile-screen-button',
	      options: ['fat fa-mobile-screen-button', 'fal fa-mobile-screen-button', 'far fa-mobile-screen-button', 'fas fa-mobile-screen-button'],
	      defaultOption: 'far fa-mobile-screen-button',
	      keywords: 'apple call cell phone device iphone number screen telephone mobile screen button'
	    }, {
	      className: 'far fa-mobile-signal',
	      options: ['fat fa-mobile-signal', 'fal fa-mobile-signal', 'far fa-mobile-signal', 'fas fa-mobile-signal'],
	      defaultOption: 'far fa-mobile-signal',
	      keywords: 'android iphone nfc scan mobile signal'
	    }, {
	      className: 'far fa-mobile-signal-out',
	      options: ['fat fa-mobile-signal-out', 'fal fa-mobile-signal-out', 'far fa-mobile-signal-out', 'fas fa-mobile-signal-out'],
	      defaultOption: 'far fa-mobile-signal-out',
	      keywords: 'android iphone nfc scan mobile signal out'
	    }, {
	      className: 'far fa-mp3-player',
	      options: ['fat fa-mp3-player', 'fal fa-mp3-player', 'far fa-mp3-player', 'fas fa-mp3-player'],
	      defaultOption: 'far fa-mp3-player',
	      keywords: 'audio handheld ipod itunes music zune mp3 player'
	    }, {
	      className: 'far fa-phone-office',
	      options: ['fat fa-phone-office', 'fal fa-phone-office', 'far fa-phone-office', 'fas fa-phone-office'],
	      defaultOption: 'far fa-phone-office',
	      keywords: 'call earphone number support telephone voice phone office'
	    }, {
	      className: 'far fa-plug',
	      options: ['fat fa-plug', 'fal fa-plug', 'far fa-plug', 'fas fa-plug'],
	      defaultOption: 'far fa-plug',
	      keywords: 'connect electric electric plug electricity online plug power plug'
	    }, {
	      className: 'far fa-power-off',
	      options: ['fat fa-power-off', 'fal fa-power-off', 'far fa-power-off', 'fas fa-power-off'],
	      defaultOption: 'far fa-power-off',
	      keywords: 'power symbol cancel computer on reboot restart power off'
	    }, {
	      className: 'far fa-print',
	      options: ['fat fa-print', 'fal fa-print', 'far fa-print', 'fas fa-print'],
	      defaultOption: 'far fa-print',
	      keywords: 'print screen symbol printer icon business computer copy document office paper printer print'
	    }, {
	      className: 'far fa-projector',
	      options: ['fat fa-projector', 'fal fa-projector', 'far fa-projector', 'fas fa-projector'],
	      defaultOption: 'far fa-projector',
	      keywords: 'cinema keynote movie powerpoint presentation shadow puppets slides projector'
	    }, {
	      className: 'far fa-router',
	      options: ['fat fa-router', 'fal fa-router', 'far fa-router', 'fas fa-router'],
	      defaultOption: 'far fa-router',
	      keywords: 'bandwidth connection dsl ethernet internet modem switch wifi wireless router'
	    }, {
	      className: 'far fa-satellite',
	      options: ['fat fa-satellite', 'fal fa-satellite', 'far fa-satellite', 'fas fa-satellite'],
	      defaultOption: 'far fa-satellite',
	      keywords: 'communications hardware orbit satellite space satellite'
	    }, {
	      className: 'far fa-satellite-dish',
	      options: ['fat fa-satellite-dish', 'fal fa-satellite-dish', 'far fa-satellite-dish', 'fas fa-satellite-dish'],
	      defaultOption: 'far fa-satellite-dish',
	      keywords: 'seti antenna communications dish hardware radar receiver satellite satellite antenna saucer signal space satellite dish'
	    }, {
	      className: 'far fa-scanner',
	      options: ['fat fa-scanner', 'fal fa-scanner', 'far fa-scanner', 'fas fa-scanner'],
	      defaultOption: 'far fa-scanner',
	      keywords: 'copy device digitize image import scanner'
	    }, {
	      className: 'far fa-sd-card',
	      options: ['fat fa-sd-card', 'fal fa-sd-card', 'far fa-sd-card', 'fas fa-sd-card'],
	      defaultOption: 'far fa-sd-card',
	      keywords: 'image memory photo save sd card'
	    }, {
	      className: 'far fa-sd-cards',
	      options: ['fat fa-sd-cards', 'fal fa-sd-cards', 'far fa-sd-cards', 'fas fa-sd-cards'],
	      defaultOption: 'far fa-sd-cards',
	      keywords: 'memory storage sd cards'
	    }, {
	      className: 'far fa-server',
	      options: ['fat fa-server', 'fal fa-server', 'far fa-server', 'fas fa-server'],
	      defaultOption: 'far fa-server',
	      keywords: 'computer cpu database hardware network server'
	    }, {
	      className: 'far fa-shredder',
	      options: ['fat fa-shredder', 'fal fa-shredder', 'far fa-shredder', 'fas fa-shredder'],
	      defaultOption: 'far fa-shredder',
	      keywords: 'destroy document office paper print shredder'
	    }, {
	      className: 'far fa-sim-card',
	      options: ['fat fa-sim-card', 'fal fa-sim-card', 'far fa-sim-card', 'fas fa-sim-card'],
	      defaultOption: 'far fa-sim-card',
	      keywords: 'hard drive hardware portable storage technology tiny sim card'
	    }, {
	      className: 'far fa-sim-cards',
	      options: ['fat fa-sim-cards', 'fal fa-sim-cards', 'far fa-sim-cards', 'fas fa-sim-cards'],
	      defaultOption: 'far fa-sim-cards',
	      keywords: 'contacts memory storage sim cards'
	    }, {
	      className: 'far fa-speaker',
	      options: ['fat fa-speaker', 'fal fa-speaker', 'far fa-speaker', 'fas fa-speaker'],
	      defaultOption: 'far fa-speaker',
	      keywords: 'audio device music sound subwoofer transducer tweeter speaker'
	    }, {
	      className: 'far fa-speakers',
	      options: ['fat fa-speakers', 'fal fa-speakers', 'far fa-speakers', 'fas fa-speakers'],
	      defaultOption: 'far fa-speakers',
	      keywords: 'audio device group music sound subwoofer transducer tweeter speakers'
	    }, {
	      className: 'far fa-tablet',
	      options: ['fat fa-tablet', 'fal fa-tablet', 'far fa-tablet', 'fas fa-tablet'],
	      defaultOption: 'far fa-tablet',
	      keywords: 'device kindle screen tablet'
	    }, {
	      className: 'far fa-tablet-button',
	      options: ['fat fa-tablet-button', 'fal fa-tablet-button', 'far fa-tablet-button', 'fas fa-tablet-button'],
	      defaultOption: 'far fa-tablet-button',
	      keywords: 'apple device ipad kindle screen tablet button'
	    }, {
	      className: 'far fa-tablet-screen',
	      options: ['fat fa-tablet-screen', 'fal fa-tablet-screen', 'far fa-tablet-screen', 'fas fa-tablet-screen'],
	      defaultOption: 'far fa-tablet-screen',
	      keywords: 'device kindle screen tablet screen'
	    }, {
	      className: 'far fa-tablet-screen-button',
	      options: ['fat fa-tablet-screen-button', 'fal fa-tablet-screen-button', 'far fa-tablet-screen-button', 'fas fa-tablet-screen-button'],
	      defaultOption: 'far fa-tablet-screen-button',
	      keywords: 'apple device ipad kindle screen tablet screen button'
	    }, {
	      className: 'far fa-tachograph-digital',
	      options: ['fat fa-tachograph-digital', 'fal fa-tachograph-digital', 'far fa-tachograph-digital', 'fas fa-tachograph-digital'],
	      defaultOption: 'far fa-tachograph-digital',
	      keywords: 'data distance speed tachometer tachograph digital'
	    }, {
	      className: 'far fa-tv',
	      options: ['fat fa-tv', 'fal fa-tv', 'far fa-tv', 'fas fa-tv'],
	      defaultOption: 'far fa-tv',
	      keywords: 'computer display monitor television tv'
	    }, {
	      className: 'far fa-tv-music',
	      options: ['fat fa-tv-music', 'fal fa-tv-music', 'far fa-tv-music', 'fas fa-tv-music'],
	      defaultOption: 'far fa-tv-music',
	      keywords: 'audio mtv music music video sound television vh1 tv music'
	    }, {
	      className: 'far fa-tv-retro',
	      options: ['fat fa-tv-retro', 'fal fa-tv-retro', 'far fa-tv-retro', 'fas fa-tv-retro'],
	      defaultOption: 'far fa-tv-retro',
	      keywords: 'computer display monitor television tv video tv retro'
	    }, {
	      className: 'far fa-typewriter',
	      options: ['fat fa-typewriter', 'fal fa-typewriter', 'far fa-typewriter', 'fas fa-typewriter'],
	      defaultOption: 'far fa-typewriter',
	      keywords: 'keyboard letterpress movable type newspaper novel retro typing vintage writing typewriter'
	    }, {
	      className: 'far fa-upload',
	      options: ['fat fa-upload', 'fal fa-upload', 'far fa-upload', 'fas fa-upload'],
	      defaultOption: 'far fa-upload',
	      keywords: 'hard drive import publish upload'
	    }, {
	      className: 'far fa-usb-drive',
	      options: ['fat fa-usb-drive', 'fal fa-usb-drive', 'far fa-usb-drive', 'fas fa-usb-drive'],
	      defaultOption: 'far fa-usb-drive',
	      keywords: 'access codes device flashdrive goober ssd storage thumbdrive usb drive'
	    }, {
	      className: 'far fa-walkie-talkie',
	      options: ['fat fa-walkie-talkie', 'fal fa-walkie-talkie', 'far fa-walkie-talkie', 'fas fa-walkie-talkie'],
	      defaultOption: 'far fa-walkie-talkie',
	      keywords: 'communication copy intercom over portable radio two way radio walkie talkie'
	    }, {
	      className: 'far fa-watch-calculator',
	      options: ['fat fa-watch-calculator', 'fal fa-watch-calculator', 'far fa-watch-calculator', 'fas fa-watch-calculator'],
	      defaultOption: 'far fa-watch-calculator',
	      keywords: 'casio digital math time watch calculator'
	    }]
	  }, {
	    id: 'editing',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_EDITING'),
	    items: [{
	      className: 'far fa-arrows-rotate',
	      options: ['fat fa-arrows-rotate', 'fal fa-arrows-rotate', 'far fa-arrows-rotate', 'fas fa-arrows-rotate'],
	      defaultOption: 'far fa-arrows-rotate',
	      keywords: 'clockwise right and left semicircle arrows exchange refresh reload rotate swap arrows rotate'
	    }, {
	      className: 'far fa-bandage',
	      options: ['fat fa-bandage', 'fal fa-bandage', 'far fa-bandage', 'fas fa-bandage'],
	      defaultOption: 'far fa-bandage',
	      keywords: 'adhesive bandage bandage boo boo first aid ouch bandage'
	    }, {
	      className: 'far fa-bars',
	      options: ['fat fa-bars', 'fal fa-bars', 'far fa-bars', 'fas fa-bars'],
	      defaultOption: 'far fa-bars',
	      keywords: 'checklist drag hamburger list menu nav navigation ol reorder settings todo ul bars'
	    }, {
	      className: 'far fa-bars-filter',
	      options: ['fat fa-bars-filter', 'fal fa-bars-filter', 'far fa-bars-filter', 'fas fa-bars-filter'],
	      defaultOption: 'far fa-bars-filter',
	      keywords: 'list menu sort bars filter'
	    }, {
	      className: 'far fa-bars-sort',
	      options: ['fat fa-bars-sort', 'fal fa-bars-sort', 'far fa-bars-sort', 'fas fa-bars-sort'],
	      defaultOption: 'far fa-bars-sort',
	      keywords: 'list menu sort bars sort'
	    }, {
	      className: 'far fa-brush',
	      options: ['fat fa-brush', 'fal fa-brush', 'far fa-brush', 'fas fa-brush'],
	      defaultOption: 'far fa-brush',
	      keywords: 'art bristles color handle paint brush'
	    }, {
	      className: 'far fa-check',
	      options: ['fat fa-check', 'fal fa-check', 'far fa-check', 'fas fa-check'],
	      defaultOption: 'far fa-check',
	      keywords: 'check mark accept agree check check mark checkmark confirm correct done mark notice notification notify ok select success tick todo yes ? check'
	    }, {
	      className: 'far fa-check-double',
	      options: ['fat fa-check-double', 'fal fa-check-double', 'far fa-check-double', 'fas fa-check-double'],
	      defaultOption: 'far fa-check-double',
	      keywords: 'accept agree checkmark confirm correct done notice notification notify ok select success tick todo check double'
	    }, {
	      className: 'far fa-circle-check',
	      options: ['fat fa-circle-check', 'fal fa-circle-check', 'far fa-circle-check', 'fas fa-circle-check'],
	      defaultOption: 'far fa-circle-check',
	      keywords: 'accept agree confirm correct done ok select success tick todo yes circle check'
	    }, {
	      className: 'far fa-circle-dashed',
	      options: ['fat fa-circle-dashed', 'fal fa-circle-dashed', 'far fa-circle-dashed', 'fas fa-circle-dashed'],
	      defaultOption: 'far fa-circle-dashed',
	      keywords: 'dashed dotted select circle dashed'
	    }, {
	      className: 'far fa-circle-ellipsis',
	      options: ['fat fa-circle-ellipsis', 'fal fa-circle-ellipsis', 'far fa-circle-ellipsis', 'fas fa-circle-ellipsis'],
	      defaultOption: 'far fa-circle-ellipsis',
	      keywords: 'menu more circle ellipsis'
	    }, {
	      className: 'far fa-circle-ellipsis-vertical',
	      options: ['fat fa-circle-ellipsis-vertical', 'fal fa-circle-ellipsis-vertical', 'far fa-circle-ellipsis-vertical', 'fas fa-circle-ellipsis-vertical'],
	      defaultOption: 'far fa-circle-ellipsis-vertical',
	      keywords: 'menu more circle ellipsis vertical'
	    }, {
	      className: 'far fa-circle-half-stroke',
	      options: ['fat fa-circle-half-stroke', 'fal fa-circle-half-stroke', 'far fa-circle-half-stroke', 'fas fa-circle-half-stroke'],
	      defaultOption: 'far fa-circle-half-stroke',
	      keywords: 'circle with left half black contrast dark light saturation circle half stroke'
	    }, {
	      className: 'far fa-circle-trash',
	      options: ['fat fa-circle-trash', 'fal fa-circle-trash', 'far fa-circle-trash', 'fas fa-circle-trash'],
	      defaultOption: 'far fa-circle-trash',
	      keywords: 'delete garbage hide remove circle trash'
	    }, {
	      className: 'far fa-command',
	      options: ['fat fa-command', 'fal fa-command', 'far fa-command', 'fas fa-command'],
	      defaultOption: 'far fa-command',
	      keywords: 'place of interest sign apple key loop command'
	    }, {
	      className: 'far fa-crop',
	      options: ['fat fa-crop', 'fal fa-crop', 'far fa-crop', 'fas fa-crop'],
	      defaultOption: 'far fa-crop',
	      keywords: 'design frame mask resize shrink crop'
	    }, {
	      className: 'far fa-crop-simple',
	      options: ['fat fa-crop-simple', 'fal fa-crop-simple', 'far fa-crop-simple', 'fas fa-crop-simple'],
	      defaultOption: 'far fa-crop-simple',
	      keywords: 'design frame mask resize shrink crop simple'
	    }, {
	      className: 'far fa-cube',
	      options: ['fat fa-cube', 'fal fa-cube', 'far fa-cube', 'fas fa-cube'],
	      defaultOption: 'far fa-cube',
	      keywords: '3d block dice package square tesseract cube'
	    }, {
	      className: 'far fa-delete-left',
	      options: ['fat fa-delete-left', 'fal fa-delete-left', 'far fa-delete-left', 'fas fa-delete-left'],
	      defaultOption: 'far fa-delete-left',
	      keywords: 'erase to the left command delete erase keyboard undo delete left'
	    }, {
	      className: 'far fa-delete-right',
	      options: ['fat fa-delete-right', 'fal fa-delete-right', 'far fa-delete-right', 'fas fa-delete-right'],
	      defaultOption: 'far fa-delete-right',
	      keywords: 'erase to the right remove trash delete right'
	    }, {
	      className: 'far fa-diagram-venn',
	      options: ['fat fa-diagram-venn', 'fal fa-diagram-venn', 'far fa-diagram-venn', 'fas fa-diagram-venn'],
	      defaultOption: 'far fa-diagram-venn',
	      keywords: 'chart intersection logic overlap diagram venn'
	    }, {
	      className: 'far fa-dial',
	      options: ['fat fa-dial', 'fal fa-dial', 'far fa-dial', 'fas fa-dial'],
	      defaultOption: 'far fa-dial',
	      keywords: 'dial level dial'
	    }, {
	      className: 'far fa-dial-high',
	      options: ['fat fa-dial-high', 'fal fa-dial-high', 'far fa-dial-high', 'fas fa-dial-high'],
	      defaultOption: 'far fa-dial-high',
	      keywords: 'dial level dial high'
	    }, {
	      className: 'far fa-dial-low',
	      options: ['fat fa-dial-low', 'fal fa-dial-low', 'far fa-dial-low', 'fas fa-dial-low'],
	      defaultOption: 'far fa-dial-low',
	      keywords: 'dial level dial low'
	    }, {
	      className: 'far fa-dial-max',
	      options: ['fat fa-dial-max', 'fal fa-dial-max', 'far fa-dial-max', 'fas fa-dial-max'],
	      defaultOption: 'far fa-dial-max',
	      keywords: 'dial level dial max'
	    }, {
	      className: 'far fa-dial-med',
	      options: ['fat fa-dial-med', 'fal fa-dial-med', 'far fa-dial-med', 'fas fa-dial-med'],
	      defaultOption: 'far fa-dial-med',
	      keywords: 'dial level dial med'
	    }, {
	      className: 'far fa-dial-med-low',
	      options: ['fat fa-dial-med-low', 'fal fa-dial-med-low', 'far fa-dial-med-low', 'fas fa-dial-med-low'],
	      defaultOption: 'far fa-dial-med-low',
	      keywords: 'dial level dial med low'
	    }, {
	      className: 'far fa-dial-min',
	      options: ['fat fa-dial-min', 'fal fa-dial-min', 'far fa-dial-min', 'fas fa-dial-min'],
	      defaultOption: 'far fa-dial-min',
	      keywords: 'dial level dial min'
	    }, {
	      className: 'far fa-dial-off',
	      options: ['fat fa-dial-off', 'fal fa-dial-off', 'far fa-dial-off', 'fas fa-dial-off'],
	      defaultOption: 'far fa-dial-off',
	      keywords: 'dial level dial off'
	    }, {
	      className: 'far fa-distribute-spacing-horizontal',
	      options: ['fat fa-distribute-spacing-horizontal', 'fal fa-distribute-spacing-horizontal', 'far fa-distribute-spacing-horizontal', 'fas fa-distribute-spacing-horizontal'],
	      defaultOption: 'far fa-distribute-spacing-horizontal',
	      keywords: 'align line padding rectangle spacing distribute spacing horizontal'
	    }, {
	      className: 'far fa-distribute-spacing-vertical',
	      options: ['fat fa-distribute-spacing-vertical', 'fal fa-distribute-spacing-vertical', 'far fa-distribute-spacing-vertical', 'fas fa-distribute-spacing-vertical'],
	      defaultOption: 'far fa-distribute-spacing-vertical',
	      keywords: 'align line padding rectangle spacing distribute spacing vertical'
	    }, {
	      className: 'far fa-ellipsis',
	      options: ['fat fa-ellipsis', 'fal fa-ellipsis', 'far fa-ellipsis', 'fas fa-ellipsis'],
	      defaultOption: 'far fa-ellipsis',
	      keywords: 'dots drag kebab list menu nav navigation ol reorder settings ul ellipsis'
	    }, {
	      className: 'far fa-ellipsis-stroke',
	      options: ['fat fa-ellipsis-stroke', 'fal fa-ellipsis-stroke', 'far fa-ellipsis-stroke', 'fas fa-ellipsis-stroke'],
	      defaultOption: 'far fa-ellipsis-stroke',
	      keywords: 'dots drag kebab list menu nav navigation ol reorder settings ul ellipsis stroke'
	    }, {
	      className: 'far fa-ellipsis-stroke-vertical',
	      options: ['fat fa-ellipsis-stroke-vertical', 'fal fa-ellipsis-stroke-vertical', 'far fa-ellipsis-stroke-vertical', 'fas fa-ellipsis-stroke-vertical'],
	      defaultOption: 'far fa-ellipsis-stroke-vertical',
	      keywords: 'dots drag kebab list menu nav navigation ol reorder settings ul ellipsis stroke vertical'
	    }, {
	      className: 'far fa-ellipsis-vertical',
	      options: ['fat fa-ellipsis-vertical', 'fal fa-ellipsis-vertical', 'far fa-ellipsis-vertical', 'fas fa-ellipsis-vertical'],
	      defaultOption: 'far fa-ellipsis-vertical',
	      keywords: 'dots drag kebab list menu nav navigation ol reorder settings ul ellipsis vertical'
	    }, {
	      className: 'far fa-eye-dropper',
	      options: ['fat fa-eye-dropper', 'fal fa-eye-dropper', 'far fa-eye-dropper', 'fas fa-eye-dropper'],
	      defaultOption: 'far fa-eye-dropper',
	      keywords: 'beaker clone color copy eyedropper pipette eye dropper'
	    }, {
	      className: 'far fa-eye-dropper-full',
	      options: ['fat fa-eye-dropper-full', 'fal fa-eye-dropper-full', 'far fa-eye-dropper-full', 'fas fa-eye-dropper-full'],
	      defaultOption: 'far fa-eye-dropper-full',
	      keywords: 'color eyedrop eye dropper full'
	    }, {
	      className: 'far fa-eye-dropper-half',
	      options: ['fat fa-eye-dropper-half', 'fal fa-eye-dropper-half', 'far fa-eye-dropper-half', 'fas fa-eye-dropper-half'],
	      defaultOption: 'far fa-eye-dropper-half',
	      keywords: 'color eyedrop eye dropper half'
	    }, {
	      className: 'far fa-eye-slash',
	      options: ['fat fa-eye-slash', 'fal fa-eye-slash', 'far fa-eye-slash', 'fas fa-eye-slash'],
	      defaultOption: 'far fa-eye-slash',
	      keywords: 'blind hide show toggle unseen views visible visiblity eye slash'
	    }, {
	      className: 'far fa-gallery-thumbnails',
	      options: ['fat fa-gallery-thumbnails', 'fal fa-gallery-thumbnails', 'far fa-gallery-thumbnails', 'fas fa-gallery-thumbnails'],
	      defaultOption: 'far fa-gallery-thumbnails',
	      keywords: 'carousel gallery grid screen view gallery thumbnails'
	    }, {
	      className: 'far fa-grid',
	      options: ['fat fa-grid', 'fal fa-grid', 'far fa-grid', 'fas fa-grid'],
	      defaultOption: 'far fa-grid',
	      keywords: 'filter sort grid'
	    }, {
	      className: 'far fa-grid-2',
	      options: ['fat fa-grid-2', 'fal fa-grid-2', 'far fa-grid-2', 'fas fa-grid-2'],
	      defaultOption: 'far fa-grid-2',
	      keywords: 'filter sort grid 2'
	    }, {
	      className: 'far fa-grid-2-plus',
	      options: ['fat fa-grid-2-plus', 'fal fa-grid-2-plus', 'far fa-grid-2-plus', 'fas fa-grid-2-plus'],
	      defaultOption: 'far fa-grid-2-plus',
	      keywords: 'add filter sort grid 2 plus'
	    }, {
	      className: 'far fa-grid-4',
	      options: ['fat fa-grid-4', 'fal fa-grid-4', 'far fa-grid-4', 'fas fa-grid-4'],
	      defaultOption: 'far fa-grid-4',
	      keywords: 'filter sort grid 4'
	    }, {
	      className: 'far fa-grid-5',
	      options: ['fat fa-grid-5', 'fal fa-grid-5', 'far fa-grid-5', 'fas fa-grid-5'],
	      defaultOption: 'far fa-grid-5',
	      keywords: 'filter sort grid 5'
	    }, {
	      className: 'far fa-grid-dividers',
	      options: ['fat fa-grid-dividers', 'fal fa-grid-dividers', 'far fa-grid-dividers', 'fas fa-grid-dividers'],
	      defaultOption: 'far fa-grid-dividers',
	      keywords: 'grid line square grid dividers'
	    }, {
	      className: 'far fa-grid-horizontal',
	      options: ['fat fa-grid-horizontal', 'fal fa-grid-horizontal', 'far fa-grid-horizontal', 'fas fa-grid-horizontal'],
	      defaultOption: 'far fa-grid-horizontal',
	      keywords: 'dashboard launcher square grid horizontal'
	    }, {
	      className: 'far fa-grip',
	      options: ['fat fa-grip', 'fal fa-grip', 'far fa-grip', 'fas fa-grip'],
	      defaultOption: 'far fa-grip',
	      keywords: 'affordance drag drop grab handle grip'
	    }, {
	      className: 'far fa-grip-dots',
	      options: ['fat fa-grip-dots', 'fal fa-grip-dots', 'far fa-grip-dots', 'fas fa-grip-dots'],
	      defaultOption: 'far fa-grip-dots',
	      keywords: 'circles drag drop ellipsis grab grid handle move grip dots'
	    }, {
	      className: 'far fa-grip-dots-vertical',
	      options: ['fat fa-grip-dots-vertical', 'fal fa-grip-dots-vertical', 'far fa-grip-dots-vertical', 'fas fa-grip-dots-vertical'],
	      defaultOption: 'far fa-grip-dots-vertical',
	      keywords: 'circles drag drop ellipsis grab grid handle move grip dots vertical'
	    }, {
	      className: 'far fa-grip-lines',
	      options: ['fat fa-grip-lines', 'fal fa-grip-lines', 'far fa-grip-lines', 'fas fa-grip-lines'],
	      defaultOption: 'far fa-grip-lines',
	      keywords: 'affordance drag drop grab handle grip lines'
	    }, {
	      className: 'far fa-grip-lines-vertical',
	      options: ['fat fa-grip-lines-vertical', 'fal fa-grip-lines-vertical', 'far fa-grip-lines-vertical', 'fas fa-grip-lines-vertical'],
	      defaultOption: 'far fa-grip-lines-vertical',
	      keywords: 'affordance drag drop grab handle grip lines vertical'
	    }, {
	      className: 'far fa-grip-vertical',
	      options: ['fat fa-grip-vertical', 'fal fa-grip-vertical', 'far fa-grip-vertical', 'fas fa-grip-vertical'],
	      defaultOption: 'far fa-grip-vertical',
	      keywords: 'affordance drag drop grab handle grip vertical'
	    }, {
	      className: 'far fa-hexagon-check',
	      options: ['fat fa-hexagon-check', 'fal fa-hexagon-check', 'far fa-hexagon-check', 'fas fa-hexagon-check'],
	      defaultOption: 'far fa-hexagon-check',
	      keywords: 'accept agree box button check checkmark confirm correct done mark ok select success tick todo yes ? hexagon check'
	    }, {
	      className: 'far fa-lasso',
	      options: ['fat fa-lasso', 'fal fa-lasso', 'far fa-lasso', 'fas fa-lasso'],
	      defaultOption: 'far fa-lasso',
	      keywords: 'cowboy rodeo rope select selection western lasso'
	    }, {
	      className: 'far fa-lasso-sparkles',
	      options: ['fat fa-lasso-sparkles', 'fal fa-lasso-sparkles', 'far fa-lasso-sparkles', 'fas fa-lasso-sparkles'],
	      defaultOption: 'far fa-lasso-sparkles',
	      keywords: 'automatic cowboy magic select lasso sparkles'
	    }, {
	      className: 'far fa-link',
	      options: ['fat fa-link', 'fal fa-link', 'far fa-link', 'fas fa-link'],
	      defaultOption: 'far fa-link',
	      keywords: 'attach attachment chain connect lin link link'
	    }, {
	      className: 'far fa-link-simple',
	      options: ['fat fa-link-simple', 'fal fa-link-simple', 'far fa-link-simple', 'fas fa-link-simple'],
	      defaultOption: 'far fa-link-simple',
	      keywords: 'attach attachment chain connect link simple'
	    }, {
	      className: 'far fa-link-simple-slash',
	      options: ['fat fa-link-simple-slash', 'fal fa-link-simple-slash', 'far fa-link-simple-slash', 'fas fa-link-simple-slash'],
	      defaultOption: 'far fa-link-simple-slash',
	      keywords: 'attachment chain chain broken remove link simple slash'
	    }, {
	      className: 'far fa-link-slash',
	      options: ['fat fa-link-slash', 'fal fa-link-slash', 'far fa-link-slash', 'fas fa-link-slash'],
	      defaultOption: 'far fa-link-slash',
	      keywords: 'attachment chain chain broken remove link slash'
	    }, {
	      className: 'far fa-objects-align-bottom',
	      options: ['fat fa-objects-align-bottom', 'fal fa-objects-align-bottom', 'far fa-objects-align-bottom', 'fas fa-objects-align-bottom'],
	      defaultOption: 'far fa-objects-align-bottom',
	      keywords: 'align distribute line rectangles objects align bottom'
	    }, {
	      className: 'far fa-objects-align-center-horizontal',
	      options: ['fat fa-objects-align-center-horizontal', 'fal fa-objects-align-center-horizontal', 'far fa-objects-align-center-horizontal', 'fas fa-objects-align-center-horizontal'],
	      defaultOption: 'far fa-objects-align-center-horizontal',
	      keywords: 'align distribute line rectangles objects align center horizontal'
	    }, {
	      className: 'far fa-objects-align-center-vertical',
	      options: ['fat fa-objects-align-center-vertical', 'fal fa-objects-align-center-vertical', 'far fa-objects-align-center-vertical', 'fas fa-objects-align-center-vertical'],
	      defaultOption: 'far fa-objects-align-center-vertical',
	      keywords: 'align distribute line rectangles objects align center vertical'
	    }, {
	      className: 'far fa-objects-align-left',
	      options: ['fat fa-objects-align-left', 'fal fa-objects-align-left', 'far fa-objects-align-left', 'fas fa-objects-align-left'],
	      defaultOption: 'far fa-objects-align-left',
	      keywords: 'align distribute line rectangles objects align left'
	    }, {
	      className: 'far fa-objects-align-right',
	      options: ['fat fa-objects-align-right', 'fal fa-objects-align-right', 'far fa-objects-align-right', 'fas fa-objects-align-right'],
	      defaultOption: 'far fa-objects-align-right',
	      keywords: 'align distribute line rectangles objects align right'
	    }, {
	      className: 'far fa-objects-align-top',
	      options: ['fat fa-objects-align-top', 'fal fa-objects-align-top', 'far fa-objects-align-top', 'fas fa-objects-align-top'],
	      defaultOption: 'far fa-objects-align-top',
	      keywords: 'align distribute line rectangles objects align top'
	    }, {
	      className: 'far fa-objects-column',
	      options: ['fat fa-objects-column', 'fal fa-objects-column', 'far fa-objects-column', 'fas fa-objects-column'],
	      defaultOption: 'far fa-objects-column',
	      keywords: 'array grid organize scroll windows objects column'
	    }, {
	      className: 'far fa-octagon-check',
	      options: ['fat fa-octagon-check', 'fal fa-octagon-check', 'far fa-octagon-check', 'fas fa-octagon-check'],
	      defaultOption: 'far fa-octagon-check',
	      keywords: 'accept agree box button check checkmark confirm correct done mark ok select success tick todo yes ? octagon check'
	    }, {
	      className: 'far fa-paint-brush',
	      options: ['fat fa-paint-brush', 'fal fa-paint-brush', 'far fa-paint-brush', 'fas fa-paint-brush'],
	      defaultOption: 'far fa-paint-brush',
	      keywords: 'acrylic art brush color fill paint paintbrush painting pigment watercolor paint brush'
	    }, {
	      className: 'far fa-paint-brush-fine',
	      options: ['fat fa-paint-brush-fine', 'fal fa-paint-brush-fine', 'far fa-paint-brush-fine', 'fas fa-paint-brush-fine'],
	      defaultOption: 'far fa-paint-brush-fine',
	      keywords: 'acrylic art brush color fill paint pigment watercolor paint brush fine'
	    }, {
	      className: 'far fa-paintbrush-pencil',
	      options: ['fat fa-paintbrush-pencil', 'fal fa-paintbrush-pencil', 'far fa-paintbrush-pencil', 'fas fa-paintbrush-pencil'],
	      defaultOption: 'far fa-paintbrush-pencil',
	      keywords: 'art creative paintbrush pencil'
	    }, {
	      className: 'far fa-pen',
	      options: ['fat fa-pen', 'fal fa-pen', 'far fa-pen', 'fas fa-pen'],
	      defaultOption: 'far fa-pen',
	      keywords: 'ballpoint design edit pen update write pen'
	    }, {
	      className: 'far fa-pen-circle',
	      options: ['fat fa-pen-circle', 'fal fa-pen-circle', 'far fa-pen-circle', 'fas fa-pen-circle'],
	      defaultOption: 'far fa-pen-circle',
	      keywords: 'draw edit pencil write pen circle'
	    }, {
	      className: 'far fa-pen-clip',
	      options: ['fat fa-pen-clip', 'fal fa-pen-clip', 'far fa-pen-clip', 'fas fa-pen-clip'],
	      defaultOption: 'far fa-pen-clip',
	      keywords: 'design edit update write pen clip'
	    }, {
	      className: 'far fa-pen-clip-slash',
	      options: ['fat fa-pen-clip-slash', 'fal fa-pen-clip-slash', 'far fa-pen-clip-slash', 'fas fa-pen-clip-slash'],
	      defaultOption: 'far fa-pen-clip-slash',
	      keywords: 'remove style pen clip slash'
	    }, {
	      className: 'far fa-pen-fancy',
	      options: ['fat fa-pen-fancy', 'fal fa-pen-fancy', 'far fa-pen-fancy', 'fas fa-pen-fancy'],
	      defaultOption: 'far fa-pen-fancy',
	      keywords: 'black nib design edit fountain fountain pen nib pen update write pen fancy'
	    }, {
	      className: 'far fa-pen-fancy-slash',
	      options: ['fat fa-pen-fancy-slash', 'fal fa-pen-fancy-slash', 'far fa-pen-fancy-slash', 'fas fa-pen-fancy-slash'],
	      defaultOption: 'far fa-pen-fancy-slash',
	      keywords: 'remove style pen fancy slash'
	    }, {
	      className: 'far fa-pen-field',
	      options: ['fat fa-pen-field', 'fal fa-pen-field', 'far fa-pen-field', 'fas fa-pen-field'],
	      defaultOption: 'far fa-pen-field',
	      keywords: 'imput signature pen field'
	    }, {
	      className: 'far fa-pen-line',
	      options: ['fat fa-pen-line', 'fal fa-pen-line', 'far fa-pen-line', 'fas fa-pen-line'],
	      defaultOption: 'far fa-pen-line',
	      keywords: 'draw write pen line'
	    }, {
	      className: 'far fa-pen-nib',
	      options: ['fat fa-pen-nib', 'fal fa-pen-nib', 'far fa-pen-nib', 'fas fa-pen-nib'],
	      defaultOption: 'far fa-pen-nib',
	      keywords: 'white nib design edit fountain pen update write pen nib'
	    }, {
	      className: 'far fa-pen-paintbrush',
	      options: ['fat fa-pen-paintbrush', 'fal fa-pen-paintbrush', 'far fa-pen-paintbrush', 'fas fa-pen-paintbrush'],
	      defaultOption: 'far fa-pen-paintbrush',
	      keywords: 'art design paint pencil write pen paintbrush'
	    }, {
	      className: 'far fa-pen-ruler',
	      options: ['fat fa-pen-ruler', 'fal fa-pen-ruler', 'far fa-pen-ruler', 'fas fa-pen-ruler'],
	      defaultOption: 'far fa-pen-ruler',
	      keywords: 'design draft draw pencil pen ruler'
	    }, {
	      className: 'far fa-pen-slash',
	      options: ['fat fa-pen-slash', 'fal fa-pen-slash', 'far fa-pen-slash', 'fas fa-pen-slash'],
	      defaultOption: 'far fa-pen-slash',
	      keywords: 'remove style pen slash'
	    }, {
	      className: 'far fa-pen-swirl',
	      options: ['fat fa-pen-swirl', 'fal fa-pen-swirl', 'far fa-pen-swirl', 'fas fa-pen-swirl'],
	      defaultOption: 'far fa-pen-swirl',
	      keywords: 'draw scribble stylus pen swirl'
	    }, {
	      className: 'far fa-pen-to-square',
	      options: ['fat fa-pen-to-square', 'fal fa-pen-to-square', 'far fa-pen-to-square', 'fas fa-pen-to-square'],
	      defaultOption: 'far fa-pen-to-square',
	      keywords: 'edit pen pencil update write pen to square'
	    }, {
	      className: 'far fa-pencil',
	      options: ['fat fa-pencil', 'fal fa-pencil', 'far fa-pencil', 'fas fa-pencil'],
	      defaultOption: 'far fa-pencil',
	      keywords: 'lower left pencil design edit penci pencil update write pencil'
	    }, {
	      className: 'far fa-pencil-slash',
	      options: ['fat fa-pencil-slash', 'fal fa-pencil-slash', 'far fa-pencil-slash', 'fas fa-pencil-slash'],
	      defaultOption: 'far fa-pencil-slash',
	      keywords: 'remove style pencil slash'
	    }, {
	      className: 'far fa-rabbit-running',
	      options: ['fat fa-rabbit-running', 'fal fa-rabbit-running', 'far fa-rabbit-running', 'fas fa-rabbit-running'],
	      defaultOption: 'far fa-rabbit-running',
	      keywords: 'animal bunny fast fauna hare mammal running speed wabbit rabbit running'
	    }, {
	      className: 'far fa-rectangles-mixed',
	      options: ['fat fa-rectangles-mixed', 'fal fa-rectangles-mixed', 'far fa-rectangles-mixed', 'fas fa-rectangles-mixed'],
	      defaultOption: 'far fa-rectangles-mixed',
	      keywords: 'mission control random sizing rectangles mixed'
	    }, {
	      className: 'far fa-rotate',
	      options: ['fat fa-rotate', 'fal fa-rotate', 'far fa-rotate', 'fas fa-rotate'],
	      defaultOption: 'far fa-rotate',
	      keywords: 'anticlockwise arrow counterclockwise counterclockwise arrows button exchange refresh reload rotate swap withershins rotate'
	    }, {
	      className: 'far fa-scissors',
	      options: ['fat fa-scissors', 'fal fa-scissors', 'far fa-scissors', 'fas fa-scissors'],
	      defaultOption: 'far fa-scissors',
	      keywords: 'black safety scissors white scissors clip cutting scissors snip tool scissors'
	    }, {
	      className: 'far fa-scribble',
	      options: ['fat fa-scribble', 'fal fa-scribble', 'far fa-scribble', 'fas fa-scribble'],
	      defaultOption: 'far fa-scribble',
	      keywords: 'doodle draw line road scrawl switchback scribble'
	    }, {
	      className: 'far fa-signature',
	      options: ['fat fa-signature', 'fal fa-signature', 'far fa-signature', 'fas fa-signature'],
	      defaultOption: 'far fa-signature',
	      keywords: 'john hancock cursive name writing signature'
	    }, {
	      className: 'far fa-signature-lock',
	      options: ['fat fa-signature-lock', 'fal fa-signature-lock', 'far fa-signature-lock', 'fas fa-signature-lock'],
	      defaultOption: 'far fa-signature-lock',
	      keywords: 'key signature lock private signature verified signature lock'
	    }, {
	      className: 'far fa-signature-slash',
	      options: ['fat fa-signature-slash', 'fal fa-signature-slash', 'far fa-signature-slash', 'fas fa-signature-slash'],
	      defaultOption: 'far fa-signature-slash',
	      keywords: 'signature unverified signature slash'
	    }, {
	      className: 'far fa-sliders',
	      options: ['fat fa-sliders', 'fal fa-sliders', 'far fa-sliders', 'fas fa-sliders'],
	      defaultOption: 'far fa-sliders',
	      keywords: 'adjust settings sliders toggle sliders'
	    }, {
	      className: 'far fa-sliders-simple',
	      options: ['fat fa-sliders-simple', 'fal fa-sliders-simple', 'far fa-sliders-simple', 'fas fa-sliders-simple'],
	      defaultOption: 'far fa-sliders-simple',
	      keywords: 'adjust off on settings toggles sliders simple'
	    }, {
	      className: 'far fa-sliders-up',
	      options: ['fat fa-sliders-up', 'fal fa-sliders-up', 'far fa-sliders-up', 'fas fa-sliders-up'],
	      defaultOption: 'far fa-sliders-up',
	      keywords: 'adjust settings sliders toggle sliders up'
	    }, {
	      className: 'far fa-square-check',
	      options: ['fat fa-square-check', 'fal fa-square-check', 'far fa-square-check', 'fas fa-square-check'],
	      defaultOption: 'far fa-square-check',
	      keywords: 'accept agree box button check check box with check check mark button checkmark confirm correct done mark ok select success tick todo yes ? square check'
	    }, {
	      className: 'far fa-square-dashed',
	      options: ['fat fa-square-dashed', 'fal fa-square-dashed', 'far fa-square-dashed', 'fas fa-square-dashed'],
	      defaultOption: 'far fa-square-dashed',
	      keywords: 'dashed dotted select square dashed'
	    }, {
	      className: 'far fa-square-ellipsis',
	      options: ['fat fa-square-ellipsis', 'fal fa-square-ellipsis', 'far fa-square-ellipsis', 'fas fa-square-ellipsis'],
	      defaultOption: 'far fa-square-ellipsis',
	      keywords: 'dots menu square ellipsis'
	    }, {
	      className: 'far fa-square-ellipsis-vertical',
	      options: ['fat fa-square-ellipsis-vertical', 'fal fa-square-ellipsis-vertical', 'far fa-square-ellipsis-vertical', 'fas fa-square-ellipsis-vertical'],
	      defaultOption: 'far fa-square-ellipsis-vertical',
	      keywords: 'dots menu square ellipsis vertical'
	    }, {
	      className: 'far fa-square-pen',
	      options: ['fat fa-square-pen', 'fal fa-square-pen', 'far fa-square-pen', 'fas fa-square-pen'],
	      defaultOption: 'far fa-square-pen',
	      keywords: 'edit pencil square update write square pen'
	    }, {
	      className: 'far fa-trash',
	      options: ['fat fa-trash', 'fal fa-trash', 'far fa-trash', 'fas fa-trash'],
	      defaultOption: 'far fa-trash',
	      keywords: 'delete garbage hide remove trash'
	    }, {
	      className: 'far fa-trash-arrow-up',
	      options: ['fat fa-trash-arrow-up', 'fal fa-trash-arrow-up', 'far fa-trash-arrow-up', 'fas fa-trash-arrow-up'],
	      defaultOption: 'far fa-trash-arrow-up',
	      keywords: 'back control z delete garbage hide oops remove undo trash arrow up'
	    }, {
	      className: 'far fa-trash-can',
	      options: ['fat fa-trash-can', 'fal fa-trash-can', 'far fa-trash-can', 'fas fa-trash-can'],
	      defaultOption: 'far fa-trash-can',
	      keywords: 'delete garbage hide remove trash o trash can'
	    }, {
	      className: 'far fa-trash-can-arrow-up',
	      options: ['fat fa-trash-can-arrow-up', 'fal fa-trash-can-arrow-up', 'far fa-trash-can-arrow-up', 'fas fa-trash-can-arrow-up'],
	      defaultOption: 'far fa-trash-can-arrow-up',
	      keywords: 'back control z delete garbage hide oops remove undo trash can arrow up'
	    }, {
	      className: 'far fa-trash-can-check',
	      options: ['fat fa-trash-can-check', 'fal fa-trash-can-check', 'far fa-trash-can-check', 'fas fa-trash-can-check'],
	      defaultOption: 'far fa-trash-can-check',
	      keywords: 'confirm delete garbage hide remove trash can check'
	    }, {
	      className: 'far fa-trash-can-clock',
	      options: ['fat fa-trash-can-clock', 'fal fa-trash-can-clock', 'far fa-trash-can-clock', 'fas fa-trash-can-clock'],
	      defaultOption: 'far fa-trash-can-clock',
	      keywords: 'delay delete garbage hide remove trash can clock'
	    }, {
	      className: 'far fa-trash-can-list',
	      options: ['fat fa-trash-can-list', 'fal fa-trash-can-list', 'far fa-trash-can-list', 'fas fa-trash-can-list'],
	      defaultOption: 'far fa-trash-can-list',
	      keywords: 'delete garbage hide remove trash can list'
	    }, {
	      className: 'far fa-trash-can-plus',
	      options: ['fat fa-trash-can-plus', 'fal fa-trash-can-plus', 'far fa-trash-can-plus', 'fas fa-trash-can-plus'],
	      defaultOption: 'far fa-trash-can-plus',
	      keywords: 'delete garbage hide remove trash can plus'
	    }, {
	      className: 'far fa-trash-can-slash',
	      options: ['fat fa-trash-can-slash', 'fal fa-trash-can-slash', 'far fa-trash-can-slash', 'fas fa-trash-can-slash'],
	      defaultOption: 'far fa-trash-can-slash',
	      keywords: 'delete garbage hide remove trash can slash'
	    }, {
	      className: 'far fa-trash-can-undo',
	      options: ['fat fa-trash-can-undo', 'fal fa-trash-can-undo', 'far fa-trash-can-undo', 'fas fa-trash-can-undo'],
	      defaultOption: 'far fa-trash-can-undo',
	      keywords: 'back control z delete garbage hide oops remove restore undo trash can undo'
	    }, {
	      className: 'far fa-trash-can-xmark',
	      options: ['fat fa-trash-can-xmark', 'fal fa-trash-can-xmark', 'far fa-trash-can-xmark', 'fas fa-trash-can-xmark'],
	      defaultOption: 'far fa-trash-can-xmark',
	      keywords: 'cancel delete garbage hide remove trash can xmark'
	    }, {
	      className: 'far fa-trash-check',
	      options: ['fat fa-trash-check', 'fal fa-trash-check', 'far fa-trash-check', 'fas fa-trash-check'],
	      defaultOption: 'far fa-trash-check',
	      keywords: 'confirm delete garbage hide remove trash check'
	    }, {
	      className: 'far fa-trash-clock',
	      options: ['fat fa-trash-clock', 'fal fa-trash-clock', 'far fa-trash-clock', 'fas fa-trash-clock'],
	      defaultOption: 'far fa-trash-clock',
	      keywords: 'delay delete garbage hide remove trash clock'
	    }, {
	      className: 'far fa-trash-list',
	      options: ['fat fa-trash-list', 'fal fa-trash-list', 'far fa-trash-list', 'fas fa-trash-list'],
	      defaultOption: 'far fa-trash-list',
	      keywords: 'delete garbage hide remove trash list'
	    }, {
	      className: 'far fa-trash-plus',
	      options: ['fat fa-trash-plus', 'fal fa-trash-plus', 'far fa-trash-plus', 'fas fa-trash-plus'],
	      defaultOption: 'far fa-trash-plus',
	      keywords: 'delete garbage hide remove trash plus'
	    }, {
	      className: 'far fa-trash-slash',
	      options: ['fat fa-trash-slash', 'fal fa-trash-slash', 'far fa-trash-slash', 'fas fa-trash-slash'],
	      defaultOption: 'far fa-trash-slash',
	      keywords: 'delete garbage hide remove trash slash'
	    }, {
	      className: 'far fa-trash-undo',
	      options: ['fat fa-trash-undo', 'fal fa-trash-undo', 'far fa-trash-undo', 'fas fa-trash-undo'],
	      defaultOption: 'far fa-trash-undo',
	      keywords: 'back control z delete garbage hide oops remove restore undo trash undo'
	    }, {
	      className: 'far fa-trash-xmark',
	      options: ['fat fa-trash-xmark', 'fal fa-trash-xmark', 'far fa-trash-xmark', 'fas fa-trash-xmark'],
	      defaultOption: 'far fa-trash-xmark',
	      keywords: 'delete garbage hide remove trash xmark'
	    }, {
	      className: 'far fa-turtle',
	      options: ['fat fa-turtle', 'fal fa-turtle', 'far fa-turtle', 'fas fa-turtle'],
	      defaultOption: 'far fa-turtle',
	      keywords: 'cowabunga donatello fauna leonardo michaelangelo raphael reptile shell slow terrapin tortoise turtle turtle'
	    }, {
	      className: 'far fa-wand-magic',
	      options: ['fat fa-wand-magic', 'fal fa-wand-magic', 'far fa-wand-magic', 'fas fa-wand-magic'],
	      defaultOption: 'far fa-wand-magic',
	      keywords: 'autocomplete automatic mage magic spell wand witch wizard wand magic'
	    }, {
	      className: 'far fa-wand-magic-sparkles',
	      options: ['fat fa-wand-magic-sparkles', 'fal fa-wand-magic-sparkles', 'far fa-wand-magic-sparkles', 'fas fa-wand-magic-sparkles'],
	      defaultOption: 'far fa-wand-magic-sparkles',
	      keywords: 'auto magic magic wand trick witch wizard wand magic sparkles'
	    }]
	  }, {
	    id: 'education',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_EDUCATION'),
	    items: [{
	      className: 'far fa-apple-whole',
	      options: ['fat fa-apple-whole', 'fal fa-apple-whole', 'far fa-apple-whole', 'fas fa-apple-whole'],
	      defaultOption: 'far fa-apple-whole',
	      keywords: 'apple fall fruit fuji green green apple macintosh orchard red red apple seasonal vegan apple whole'
	    }, {
	      className: 'far fa-atom',
	      options: ['fat fa-atom', 'fal fa-atom', 'far fa-atom', 'fas fa-atom'],
	      defaultOption: 'far fa-atom',
	      keywords: 'atheism atheist atom atom symbol chemistry electron ion isotope neutron nuclear proton science atom'
	    }, {
	      className: 'far fa-atom-simple',
	      options: ['fat fa-atom-simple', 'fal fa-atom-simple', 'far fa-atom-simple', 'fas fa-atom-simple'],
	      defaultOption: 'far fa-atom-simple',
	      keywords: 'atheism chemistry electron ion isotope neutron nuclear proton science space atom simple'
	    }, {
	      className: 'far fa-award',
	      options: ['fat fa-award', 'fal fa-award', 'far fa-award', 'fas fa-award'],
	      defaultOption: 'far fa-award',
	      keywords: 'honor praise prize recognition ribbon trophy award'
	    }, {
	      className: 'far fa-backpack',
	      options: ['fat fa-backpack', 'fal fa-backpack', 'far fa-backpack', 'fas fa-backpack'],
	      defaultOption: 'far fa-backpack',
	      keywords: 'backpack bag book carry hiking rucksack satchel school travel backpack'
	    }, {
	      className: 'far fa-bell',
	      options: ['fat fa-bell', 'fal fa-bell', 'far fa-bell', 'fas fa-bell'],
	      defaultOption: 'far fa-bell',
	      keywords: 'alarm alert bel bell chime notification reminder bell'
	    }, {
	      className: 'far fa-bell-school',
	      options: ['fat fa-bell-school', 'fal fa-bell-school', 'far fa-bell-school', 'fas fa-bell-school'],
	      defaultOption: 'far fa-bell-school',
	      keywords: 'alert chime class notification reminder bell school'
	    }, {
	      className: 'far fa-bell-school-slash',
	      options: ['fat fa-bell-school-slash', 'fal fa-bell-school-slash', 'far fa-bell-school-slash', 'fas fa-bell-school-slash'],
	      defaultOption: 'far fa-bell-school-slash',
	      keywords: 'alert cancel class disabled notification off reminder bell school slash'
	    }, {
	      className: 'far fa-bell-slash',
	      options: ['fat fa-bell-slash', 'fal fa-bell-slash', 'far fa-bell-slash', 'fas fa-bell-slash'],
	      defaultOption: 'far fa-bell-slash',
	      keywords: 'alert bell bell with slash cancel disabled forbidden mute notification off quiet reminder silent bell slash'
	    }, {
	      className: 'far fa-book-blank',
	      options: ['fat fa-book-blank', 'fal fa-book-blank', 'far fa-book-blank', 'fas fa-book-blank'],
	      defaultOption: 'far fa-book-blank',
	      keywords: 'blue blue book book closed closed book diary documentation green green book journal library orange orange book read research book blank'
	    }, {
	      className: 'far fa-book-copy',
	      options: ['fat fa-book-copy', 'fal fa-book-copy', 'far fa-book-copy', 'fas fa-book-copy'],
	      defaultOption: 'far fa-book-copy',
	      keywords: 'library research book copy'
	    }, {
	      className: 'far fa-book-open',
	      options: ['fat fa-book-open', 'fal fa-book-open', 'far fa-book-open', 'fas fa-book-open'],
	      defaultOption: 'far fa-book-open',
	      keywords: 'book book flyer library notebook open open book pamphlet reading research book open'
	    }, {
	      className: 'far fa-book-open-cover',
	      options: ['fat fa-book-open-cover', 'fal fa-book-open-cover', 'far fa-book-open-cover', 'fas fa-book-open-cover'],
	      defaultOption: 'far fa-book-open-cover',
	      keywords: 'library research book open cover'
	    }, {
	      className: 'far fa-book-open-reader',
	      options: ['fat fa-book-open-reader', 'fal fa-book-open-reader', 'far fa-book-open-reader', 'fas fa-book-open-reader'],
	      defaultOption: 'far fa-book-open-reader',
	      keywords: 'flyer library notebook open book pamphlet reading research book open reader'
	    }, {
	      className: 'far fa-books',
	      options: ['fat fa-books', 'fal fa-books', 'far fa-books', 'fas fa-books'],
	      defaultOption: 'far fa-books',
	      keywords: 'book books diary documentation journal library read research books'
	    }, {
	      className: 'far fa-bus-school',
	      options: ['fat fa-bus-school', 'fal fa-bus-school', 'far fa-bus-school', 'fas fa-bus-school'],
	      defaultOption: 'far fa-bus-school',
	      keywords: 'education school transportation vehicle bus school'
	    }, {
	      className: 'far fa-chalkboard',
	      options: ['fat fa-chalkboard', 'fal fa-chalkboard', 'far fa-chalkboard', 'fas fa-chalkboard'],
	      defaultOption: 'far fa-chalkboard',
	      keywords: 'blackboard learning school teaching whiteboard writing chalkboard'
	    }, {
	      className: 'far fa-chalkboard-user',
	      options: ['fat fa-chalkboard-user', 'fal fa-chalkboard-user', 'far fa-chalkboard-user', 'fas fa-chalkboard-user'],
	      defaultOption: 'far fa-chalkboard-user',
	      keywords: 'blackboard instructor learning professor school whiteboard writing chalkboard user'
	    }, {
	      className: 'far fa-diploma',
	      options: ['fat fa-diploma', 'fal fa-diploma', 'far fa-diploma', 'fas fa-diploma'],
	      defaultOption: 'far fa-diploma',
	      keywords: 'award certificate college education graduate graduation university diploma'
	    }, {
	      className: 'far fa-file-certificate',
	      options: ['fat fa-file-certificate', 'fal fa-file-certificate', 'far fa-file-certificate', 'fas fa-file-certificate'],
	      defaultOption: 'far fa-file-certificate',
	      keywords: 'award diploma document license file certificate'
	    }, {
	      className: 'far fa-glasses-round',
	      options: ['fat fa-glasses-round', 'fal fa-glasses-round', 'far fa-glasses-round', 'fas fa-glasses-round'],
	      defaultOption: 'far fa-glasses-round',
	      keywords: 'clothing eye eyeglasses eyewear glasses hipster nerd reading sight spectacles vision glasses round'
	    }, {
	      className: 'far fa-globe-stand',
	      options: ['fat fa-globe-stand', 'fal fa-globe-stand', 'far fa-globe-stand', 'fas fa-globe-stand'],
	      defaultOption: 'far fa-globe-stand',
	      keywords: 'earth geography global localize location map travel world globe stand'
	    }, {
	      className: 'far fa-graduation-cap',
	      options: ['fat fa-graduation-cap', 'fal fa-graduation-cap', 'far fa-graduation-cap', 'fas fa-graduation-cap'],
	      defaultOption: 'far fa-graduation-cap',
	      keywords: 'cap celebration ceremony clothing college graduate graduation graduation cap hat learning school student graduation cap'
	    }, {
	      className: 'far fa-laptop-code',
	      options: ['fat fa-laptop-code', 'fal fa-laptop-code', 'far fa-laptop-code', 'fas fa-laptop-code'],
	      defaultOption: 'far fa-laptop-code',
	      keywords: 'computer cpu dell demo develop device mac macbook machine pc laptop code'
	    }, {
	      className: 'far fa-masks-theater',
	      options: ['fat fa-masks-theater', 'fal fa-masks-theater', 'far fa-masks-theater', 'fas fa-masks-theater'],
	      defaultOption: 'far fa-masks-theater',
	      keywords: 'art comedy mask perform performing performing arts theater theatre tragedy masks theater'
	    }, {
	      className: 'far fa-microscope',
	      options: ['fat fa-microscope', 'fal fa-microscope', 'far fa-microscope', 'fas fa-microscope'],
	      defaultOption: 'far fa-microscope',
	      keywords: 'covid 19 electron lens microscope optics science shrink tool microscope'
	    }, {
	      className: 'far fa-music',
	      options: ['fat fa-music', 'fal fa-music', 'far fa-music', 'fas fa-music'],
	      defaultOption: 'far fa-music',
	      keywords: 'lyrics melody music musical note note sing sound music'
	    }, {
	      className: 'far fa-pen-paintbrush',
	      options: ['fat fa-pen-paintbrush', 'fal fa-pen-paintbrush', 'far fa-pen-paintbrush', 'fas fa-pen-paintbrush'],
	      defaultOption: 'far fa-pen-paintbrush',
	      keywords: 'art design paint pencil write pen paintbrush'
	    }, {
	      className: 'far fa-ruler-triangle',
	      options: ['fat fa-ruler-triangle', 'fal fa-ruler-triangle', 'far fa-ruler-triangle', 'fas fa-ruler-triangle'],
	      defaultOption: 'far fa-ruler-triangle',
	      keywords: 'design draft length measure planning ruler set triangle triangular ruler ruler triangle'
	    }, {
	      className: 'far fa-school',
	      options: ['fat fa-school', 'fal fa-school', 'far fa-school', 'fas fa-school'],
	      defaultOption: 'far fa-school',
	      keywords: 'building education learn school student teacher school'
	    }, {
	      className: 'far fa-screen-users',
	      options: ['fat fa-screen-users', 'fal fa-screen-users', 'far fa-screen-users', 'fas fa-screen-users'],
	      defaultOption: 'far fa-screen-users',
	      keywords: 'chalkboard group presentation students teachers team screen users'
	    }, {
	      className: 'far fa-shapes',
	      options: ['fat fa-shapes', 'fal fa-shapes', 'far fa-shapes', 'fas fa-shapes'],
	      defaultOption: 'far fa-shapes',
	      keywords: 'blocks build circle square triangle shapes'
	    }, {
	      className: 'far fa-thought-bubble',
	      options: ['fat fa-thought-bubble', 'fal fa-thought-bubble', 'far fa-thought-bubble', 'fas fa-thought-bubble'],
	      defaultOption: 'far fa-thought-bubble',
	      keywords: 'right thought bubble balloon bubble comic dream idea imagination think thought thought balloon thought bubble'
	    }, {
	      className: 'far fa-user-graduate',
	      options: ['fat fa-user-graduate', 'fal fa-user-graduate', 'far fa-user-graduate', 'fas fa-user-graduate'],
	      defaultOption: 'far fa-user-graduate',
	      keywords: 'users people user graduate'
	    }]
	  }, {
	    id: 'emoji',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_EMOJI'),
	    items: [{
	      className: 'far fa-face-angry',
	      options: ['fat fa-face-angry', 'fal fa-face-angry', 'far fa-face-angry', 'fas fa-face-angry'],
	      defaultOption: 'far fa-face-angry',
	      keywords: 'angry angry face disapprove emoticon face mad upset face angry'
	    }, {
	      className: 'far fa-face-angry-horns',
	      options: ['fat fa-face-angry-horns', 'fal fa-face-angry-horns', 'far fa-face-angry-horns', 'fas fa-face-angry-horns'],
	      defaultOption: 'far fa-face-angry-horns',
	      keywords: 'angry face with horns demon devil face fantasy goblin imp face angry horns'
	    }, {
	      className: 'far fa-face-anguished',
	      options: ['fat fa-face-anguished', 'fal fa-face-anguished', 'far fa-face-anguished', 'fas fa-face-anguished'],
	      defaultOption: 'far fa-face-anguished',
	      keywords: 'anguished anguished face confusion face frown pain sadness face anguished'
	    }, {
	      className: 'far fa-face-anxious-sweat',
	      options: ['fat fa-face-anxious-sweat', 'fal fa-face-anxious-sweat', 'far fa-face-anxious-sweat', 'fas fa-face-anxious-sweat'],
	      defaultOption: 'far fa-face-anxious-sweat',
	      keywords: 'anxiety anxious face with sweat blue cold concern face nervous rushed sad sweat face anxious sweat'
	    }, {
	      className: 'far fa-face-astonished',
	      options: ['fat fa-face-astonished', 'fal fa-face-astonished', 'far fa-face-astonished', 'fas fa-face-astonished'],
	      defaultOption: 'far fa-face-astonished',
	      keywords: 'astonished astonished face disbelief face gasp shock shocked surprise totally face astonished'
	    }, {
	      className: 'far fa-face-awesome',
	      options: ['fat fa-face-awesome', 'fal fa-face-awesome', 'far fa-face-awesome', 'fas fa-face-awesome'],
	      defaultOption: 'far fa-face-awesome',
	      keywords: 'amazing awesome grin look smile troll face awesome'
	    }, {
	      className: 'far fa-face-confounded',
	      options: ['fat fa-face-confounded', 'fal fa-face-confounded', 'far fa-face-confounded', 'fas fa-face-confounded'],
	      defaultOption: 'far fa-face-confounded',
	      keywords: 'confounded confounded face face grimace quiver scrunched squiggle face confounded'
	    }, {
	      className: 'far fa-face-confused',
	      options: ['fat fa-face-confused', 'fal fa-face-confused', 'far fa-face-confused', 'fas fa-face-confused'],
	      defaultOption: 'far fa-face-confused',
	      keywords: 'confused confused face face meh nonplussed puzzled face confused'
	    }, {
	      className: 'far fa-face-cowboy-hat',
	      options: ['fat fa-face-cowboy-hat', 'fal fa-face-cowboy-hat', 'far fa-face-cowboy-hat', 'fas fa-face-cowboy-hat'],
	      defaultOption: 'far fa-face-cowboy-hat',
	      keywords: 'cowboy cowboy hat face cowgirl face hat face cowboy hat'
	    }, {
	      className: 'far fa-face-disappointed',
	      options: ['fat fa-face-disappointed', 'fal fa-face-disappointed', 'far fa-face-disappointed', 'fas fa-face-disappointed'],
	      defaultOption: 'far fa-face-disappointed',
	      keywords: 'disappointed disappointed face face sad sadface face disappointed'
	    }, {
	      className: 'far fa-face-disguise',
	      options: ['fat fa-face-disguise', 'fal fa-face-disguise', 'far fa-face-disguise', 'fas fa-face-disguise'],
	      defaultOption: 'far fa-face-disguise',
	      keywords: 'disguise disguised face face glasses groucho incognito mustache nose spy face disguise'
	    }, {
	      className: 'far fa-face-dizzy',
	      options: ['fat fa-face-dizzy', 'fal fa-face-dizzy', 'far fa-face-dizzy', 'fas fa-face-dizzy'],
	      defaultOption: 'far fa-face-dizzy',
	      keywords: 'dazed dead disapprove emoticon face face dizzy'
	    }, {
	      className: 'far fa-face-downcast-sweat',
	      options: ['fat fa-face-downcast-sweat', 'fal fa-face-downcast-sweat', 'far fa-face-downcast-sweat', 'fas fa-face-downcast-sweat'],
	      defaultOption: 'far fa-face-downcast-sweat',
	      keywords: 'cold downcast face with sweat face hard work sweat tired tough face downcast sweat'
	    }, {
	      className: 'far fa-face-drooling',
	      options: ['fat fa-face-drooling', 'fal fa-face-drooling', 'far fa-face-drooling', 'fas fa-face-drooling'],
	      defaultOption: 'far fa-face-drooling',
	      keywords: 'drool drooling drooling face face sleep spit face drooling'
	    }, {
	      className: 'far fa-face-explode',
	      options: ['fat fa-face-explode', 'fal fa-face-explode', 'far fa-face-explode', 'fas fa-face-explode'],
	      defaultOption: 'far fa-face-explode',
	      keywords: 'exploding head mind blown omg shocked wow face explode'
	    }, {
	      className: 'far fa-face-expressionless',
	      options: ['fat fa-face-expressionless', 'fal fa-face-expressionless', 'far fa-face-expressionless', 'fas fa-face-expressionless'],
	      defaultOption: 'far fa-face-expressionless',
	      keywords: 'expressionless expressionless face face inexpressive meh unexpressive face expressionless'
	    }, {
	      className: 'far fa-face-eyes-xmarks',
	      options: ['fat fa-face-eyes-xmarks', 'fal fa-face-eyes-xmarks', 'far fa-face-eyes-xmarks', 'fas fa-face-eyes-xmarks'],
	      defaultOption: 'far fa-face-eyes-xmarks',
	      keywords: 'awe crossed dead disbelief dizzy face knocked out knocked out face shock sick face eyes xmarks'
	    }, {
	      className: 'far fa-face-fearful',
	      options: ['fat fa-face-fearful', 'fal fa-face-fearful', 'far fa-face-fearful', 'fas fa-face-fearful'],
	      defaultOption: 'far fa-face-fearful',
	      keywords: 'face fear fearful fearful face scared surprise face fearful'
	    }, {
	      className: 'far fa-face-flushed',
	      options: ['fat fa-face-flushed', 'fal fa-face-flushed', 'far fa-face-flushed', 'fas fa-face-flushed'],
	      defaultOption: 'far fa-face-flushed',
	      keywords: 'dazed embarrassed emoticon face flushed flushed face face flushed'
	    }, {
	      className: 'far fa-face-frown',
	      options: ['fat fa-face-frown', 'fal fa-face-frown', 'far fa-face-frown', 'fas fa-face-frown'],
	      defaultOption: 'far fa-face-frown',
	      keywords: 'disapprove emoticon face frown frowning face rating sad face frown'
	    }, {
	      className: 'far fa-face-frown-open',
	      options: ['fat fa-face-frown-open', 'fal fa-face-frown-open', 'far fa-face-frown-open', 'fas fa-face-frown-open'],
	      defaultOption: 'far fa-face-frown-open',
	      keywords: 'disapprove emoticon face frown frowning face with open mouth mouth open rating sad face frown open'
	    }, {
	      className: 'far fa-face-frown-slight',
	      options: ['fat fa-face-frown-slight', 'fal fa-face-frown-slight', 'far fa-face-frown-slight', 'fas fa-face-frown-slight'],
	      defaultOption: 'far fa-face-frown-slight',
	      keywords: 'disapprove face frown sad slightly frowning face face frown slight'
	    }, {
	      className: 'far fa-face-glasses',
	      options: ['fat fa-face-glasses', 'fal fa-face-glasses', 'far fa-face-glasses', 'fas fa-face-glasses'],
	      defaultOption: 'far fa-face-glasses',
	      keywords: 'face geek glasses nerd nerd face smile teeth face glasses'
	    }, {
	      className: 'far fa-face-grimace',
	      options: ['fat fa-face-grimace', 'fal fa-face-grimace', 'far fa-face-grimace', 'fas fa-face-grimace'],
	      defaultOption: 'far fa-face-grimace',
	      keywords: 'cringe emoticon face grimace grimacing face teeth face grimace'
	    }, {
	      className: 'far fa-face-grin',
	      options: ['fat fa-face-grin', 'fal fa-face-grin', 'far fa-face-grin', 'fas fa-face-grin'],
	      defaultOption: 'far fa-face-grin',
	      keywords: 'emoticon face grin grinning face laugh smile face grin'
	    }, {
	      className: 'far fa-face-grin-beam',
	      options: ['fat fa-face-grin-beam', 'fal fa-face-grin-beam', 'far fa-face-grin-beam', 'fas fa-face-grin-beam'],
	      defaultOption: 'far fa-face-grin-beam',
	      keywords: 'emoticon eye face grinning face with smiling eyes laugh mouth open smile face grin beam'
	    }, {
	      className: 'far fa-face-grin-beam-sweat',
	      options: ['fat fa-face-grin-beam-sweat', 'fal fa-face-grin-beam-sweat', 'far fa-face-grin-beam-sweat', 'fas fa-face-grin-beam-sweat'],
	      defaultOption: 'far fa-face-grin-beam-sweat',
	      keywords: 'cold embarass emoticon face grinning face with sweat open smile sweat face grin beam sweat'
	    }, {
	      className: 'far fa-face-grin-hearts',
	      options: ['fat fa-face-grin-hearts', 'fal fa-face-grin-hearts', 'far fa-face-grin-hearts', 'fas fa-face-grin-hearts'],
	      defaultOption: 'far fa-face-grin-hearts',
	      keywords: 'emoticon eye face love smile smiling face with heart eyes face grin hearts'
	    }, {
	      className: 'far fa-face-grin-squint',
	      options: ['fat fa-face-grin-squint', 'fal fa-face-grin-squint', 'far fa-face-grin-squint', 'fas fa-face-grin-squint'],
	      defaultOption: 'far fa-face-grin-squint',
	      keywords: 'emoticon face grinning squinting face laugh mouth satisfied smile face grin squint'
	    }, {
	      className: 'far fa-face-grin-squint-tears',
	      options: ['fat fa-face-grin-squint-tears', 'fal fa-face-grin-squint-tears', 'far fa-face-grin-squint-tears', 'fas fa-face-grin-squint-tears'],
	      defaultOption: 'far fa-face-grin-squint-tears',
	      keywords: 'emoticon face floor happy laugh rolling rolling on the floor laughing smile face grin squint tears'
	    }, {
	      className: 'far fa-face-grin-stars',
	      options: ['fat fa-face-grin-stars', 'fal fa-face-grin-stars', 'far fa-face-grin-stars', 'fas fa-face-grin-stars'],
	      defaultOption: 'far fa-face-grin-stars',
	      keywords: 'emoticon eyes face grinning star star struck starry eyed face grin stars'
	    }, {
	      className: 'far fa-face-grin-tears',
	      options: ['fat fa-face-grin-tears', 'fal fa-face-grin-tears', 'far fa-face-grin-tears', 'fas fa-face-grin-tears'],
	      defaultOption: 'far fa-face-grin-tears',
	      keywords: 'lol emoticon face face with tears of joy joy laugh tear face grin tears'
	    }, {
	      className: 'far fa-face-grin-tongue',
	      options: ['fat fa-face-grin-tongue', 'fal fa-face-grin-tongue', 'far fa-face-grin-tongue', 'fas fa-face-grin-tongue'],
	      defaultOption: 'far fa-face-grin-tongue',
	      keywords: 'lol emoticon face face with tongue tongue face grin tongue'
	    }, {
	      className: 'far fa-face-grin-tongue-squint',
	      options: ['fat fa-face-grin-tongue-squint', 'fal fa-face-grin-tongue-squint', 'far fa-face-grin-tongue-squint', 'fas fa-face-grin-tongue-squint'],
	      defaultOption: 'far fa-face-grin-tongue-squint',
	      keywords: 'lol emoticon eye face horrible squinting face with tongue taste tongue face grin tongue squint'
	    }, {
	      className: 'far fa-face-grin-tongue-wink',
	      options: ['fat fa-face-grin-tongue-wink', 'fal fa-face-grin-tongue-wink', 'far fa-face-grin-tongue-wink', 'fas fa-face-grin-tongue-wink'],
	      defaultOption: 'far fa-face-grin-tongue-wink',
	      keywords: 'lol emoticon eye face joke tongue wink winking face with tongue face grin tongue wink'
	    }, {
	      className: 'far fa-face-grin-wide',
	      options: ['fat fa-face-grin-wide', 'fal fa-face-grin-wide', 'far fa-face-grin-wide', 'fas fa-face-grin-wide'],
	      defaultOption: 'far fa-face-grin-wide',
	      keywords: 'emoticon face grinning face with big eyes laugh mouth open smile face grin wide'
	    }, {
	      className: 'far fa-face-grin-wink',
	      options: ['fat fa-face-grin-wink', 'fal fa-face-grin-wink', 'far fa-face-grin-wink', 'fas fa-face-grin-wink'],
	      defaultOption: 'far fa-face-grin-wink',
	      keywords: 'emoticon face flirt laugh smile face grin wink'
	    }, {
	      className: 'far fa-face-hand-over-mouth',
	      options: ['fat fa-face-hand-over-mouth', 'fal fa-face-hand-over-mouth', 'far fa-face-hand-over-mouth', 'fas fa-face-hand-over-mouth'],
	      defaultOption: 'far fa-face-hand-over-mouth',
	      keywords: 'awe face with hand over mouth realization shock sudden sudden realization surprise whoops face hand over mouth'
	    }, {
	      className: 'far fa-face-hand-yawn',
	      options: ['fat fa-face-hand-yawn', 'fal fa-face-hand-yawn', 'far fa-face-hand-yawn', 'fas fa-face-hand-yawn'],
	      defaultOption: 'far fa-face-hand-yawn',
	      keywords: 'bored tired yawn yawning face face hand yawn'
	    }, {
	      className: 'far fa-face-head-bandage',
	      options: ['fat fa-face-head-bandage', 'fal fa-face-head-bandage', 'far fa-face-head-bandage', 'fas fa-face-head-bandage'],
	      defaultOption: 'far fa-face-head-bandage',
	      keywords: 'bandage clumsy face face with head bandage hurt ill injury face head bandage'
	    }, {
	      className: 'far fa-face-hushed',
	      options: ['fat fa-face-hushed', 'fal fa-face-hushed', 'far fa-face-hushed', 'fas fa-face-hushed'],
	      defaultOption: 'far fa-face-hushed',
	      keywords: 'face hushed hushed face stunned surprise surprised wow face hushed'
	    }, {
	      className: 'far fa-face-icicles',
	      options: ['fat fa-face-icicles', 'fal fa-face-icicles', 'far fa-face-icicles', 'fas fa-face-icicles'],
	      defaultOption: 'far fa-face-icicles',
	      keywords: 'blue faced chill cold cold face cool freezing frostbite frozen ice icicles face icicles'
	    }, {
	      className: 'far fa-face-kiss',
	      options: ['fat fa-face-kiss', 'fal fa-face-kiss', 'far fa-face-kiss', 'fas fa-face-kiss'],
	      defaultOption: 'far fa-face-kiss',
	      keywords: 'beso emoticon face kiss kissing face love smooch face kiss'
	    }, {
	      className: 'far fa-face-kiss-beam',
	      options: ['fat fa-face-kiss-beam', 'fal fa-face-kiss-beam', 'far fa-face-kiss-beam', 'fas fa-face-kiss-beam'],
	      defaultOption: 'far fa-face-kiss-beam',
	      keywords: 'beso emoticon eye face kiss kissing face with smiling eyes love smile smooch face kiss beam'
	    }, {
	      className: 'far fa-face-kiss-closed-eyes',
	      options: ['fat fa-face-kiss-closed-eyes', 'fal fa-face-kiss-closed-eyes', 'far fa-face-kiss-closed-eyes', 'fas fa-face-kiss-closed-eyes'],
	      defaultOption: 'far fa-face-kiss-closed-eyes',
	      keywords: 'closed eye face heart kiss kissing face with closed eyes love face kiss closed eyes'
	    }, {
	      className: 'far fa-face-kiss-wink-heart',
	      options: ['fat fa-face-kiss-wink-heart', 'fal fa-face-kiss-wink-heart', 'far fa-face-kiss-wink-heart', 'fas fa-face-kiss-wink-heart'],
	      defaultOption: 'far fa-face-kiss-wink-heart',
	      keywords: 'beso emoticon face face blowing a kiss kiss love smooch face kiss wink heart'
	    }, {
	      className: 'far fa-face-laugh',
	      options: ['fat fa-face-laugh', 'fal fa-face-laugh', 'far fa-face-laugh', 'fas fa-face-laugh'],
	      defaultOption: 'far fa-face-laugh',
	      keywords: 'lol emoticon face laugh smile face laugh'
	    }, {
	      className: 'far fa-face-laugh-beam',
	      options: ['fat fa-face-laugh-beam', 'fal fa-face-laugh-beam', 'far fa-face-laugh-beam', 'fas fa-face-laugh-beam'],
	      defaultOption: 'far fa-face-laugh-beam',
	      keywords: 'lol beaming face with smiling eyes emoticon eye face grin happy smile face laugh beam'
	    }, {
	      className: 'far fa-face-laugh-squint',
	      options: ['fat fa-face-laugh-squint', 'fal fa-face-laugh-squint', 'far fa-face-laugh-squint', 'fas fa-face-laugh-squint'],
	      defaultOption: 'far fa-face-laugh-squint',
	      keywords: 'lol emoticon face happy smile face laugh squint'
	    }, {
	      className: 'far fa-face-laugh-wink',
	      options: ['fat fa-face-laugh-wink', 'fal fa-face-laugh-wink', 'far fa-face-laugh-wink', 'fas fa-face-laugh-wink'],
	      defaultOption: 'far fa-face-laugh-wink',
	      keywords: 'lol emoticon face happy smile face laugh wink'
	    }, {
	      className: 'far fa-face-lying',
	      options: ['fat fa-face-lying', 'fal fa-face-lying', 'far fa-face-lying', 'fas fa-face-lying'],
	      defaultOption: 'far fa-face-lying',
	      keywords: 'dishonesty face fake liar lie long nose lying face pinocchio face lying'
	    }, {
	      className: 'far fa-face-mask',
	      options: ['fat fa-face-mask', 'fal fa-face-mask', 'far fa-face-mask', 'fas fa-face-mask'],
	      defaultOption: 'far fa-face-mask',
	      keywords: 'cold coronavirus covid covid 19 doctor face face with medical mask mask medical sick surgical face mask'
	    }, {
	      className: 'far fa-face-meh',
	      options: ['fat fa-face-meh', 'fal fa-face-meh', 'far fa-face-meh', 'fas fa-face-meh'],
	      defaultOption: 'far fa-face-meh',
	      keywords: 'deadpan emoticon face meh neutral neutral face rating face meh'
	    }, {
	      className: 'far fa-face-meh-blank',
	      options: ['fat fa-face-meh-blank', 'fal fa-face-meh-blank', 'far fa-face-meh-blank', 'fas fa-face-meh-blank'],
	      defaultOption: 'far fa-face-meh-blank',
	      keywords: 'emoticon face face without mouth mouth neutral quiet rating silent face meh blank'
	    }, {
	      className: 'far fa-face-monocle',
	      options: ['fat fa-face-monocle', 'fal fa-face-monocle', 'far fa-face-monocle', 'fas fa-face-monocle'],
	      defaultOption: 'far fa-face-monocle',
	      keywords: 'face with monocle stuffy thinking wealthy face monocle'
	    }, {
	      className: 'far fa-face-nauseated',
	      options: ['fat fa-face-nauseated', 'fal fa-face-nauseated', 'far fa-face-nauseated', 'fas fa-face-nauseated'],
	      defaultOption: 'far fa-face-nauseated',
	      keywords: 'digust face flu green mr yuck nauseated nauseated face sickness vomit face nauseated'
	    }, {
	      className: 'far fa-face-nose-steam',
	      options: ['fat fa-face-nose-steam', 'fal fa-face-nose-steam', 'far fa-face-nose-steam', 'fas fa-face-nose-steam'],
	      defaultOption: 'far fa-face-nose-steam',
	      keywords: 'angry face face with steam from nose frustrated mad steaming triumph upset won face nose steam'
	    }, {
	      className: 'far fa-face-party',
	      options: ['fat fa-face-party', 'fal fa-face-party', 'far fa-face-party', 'fas fa-face-party'],
	      defaultOption: 'far fa-face-party',
	      keywords: 'celebration hat horn party partying face face party'
	    }, {
	      className: 'far fa-face-pensive',
	      options: ['fat fa-face-pensive', 'fal fa-face-pensive', 'far fa-face-pensive', 'fas fa-face-pensive'],
	      defaultOption: 'far fa-face-pensive',
	      keywords: 'dejected face pensive pensive face remorse sad sorrow face pensive'
	    }, {
	      className: 'far fa-face-persevering',
	      options: ['fat fa-face-persevering', 'fal fa-face-persevering', 'far fa-face-persevering', 'fas fa-face-persevering'],
	      defaultOption: 'far fa-face-persevering',
	      keywords: 'face frustration helpless persevere persevering face scrunched face persevering'
	    }, {
	      className: 'far fa-face-pleading',
	      options: ['fat fa-face-pleading', 'fal fa-face-pleading', 'far fa-face-pleading', 'fas fa-face-pleading'],
	      defaultOption: 'far fa-face-pleading',
	      keywords: 'begging glossy mercy pleading face puppy eyes simp face pleading'
	    }, {
	      className: 'far fa-face-pouting',
	      options: ['fat fa-face-pouting', 'fal fa-face-pouting', 'far fa-face-pouting', 'fas fa-face-pouting'],
	      defaultOption: 'far fa-face-pouting',
	      keywords: 'angry face mad pouting pouting face rage red face pouting'
	    }, {
	      className: 'far fa-face-raised-eyebrow',
	      options: ['fat fa-face-raised-eyebrow', 'fal fa-face-raised-eyebrow', 'far fa-face-raised-eyebrow', 'fas fa-face-raised-eyebrow'],
	      defaultOption: 'far fa-face-raised-eyebrow',
	      keywords: 'colbert disapproval disbelief distrust face with raised eyebrow mild surprise scepticism skeptic surprise the rock face raised eyebrow'
	    }, {
	      className: 'far fa-face-relieved',
	      options: ['fat fa-face-relieved', 'fal fa-face-relieved', 'far fa-face-relieved', 'fas fa-face-relieved'],
	      defaultOption: 'far fa-face-relieved',
	      keywords: 'content face happy pleased relieved relieved face face relieved'
	    }, {
	      className: 'far fa-face-rolling-eyes',
	      options: ['fat fa-face-rolling-eyes', 'fal fa-face-rolling-eyes', 'far fa-face-rolling-eyes', 'fas fa-face-rolling-eyes'],
	      defaultOption: 'far fa-face-rolling-eyes',
	      keywords: 'emoticon eyeroll eyes face face with rolling eyes neutral rating rolling face rolling eyes'
	    }, {
	      className: 'far fa-face-sad-cry',
	      options: ['fat fa-face-sad-cry', 'fal fa-face-sad-cry', 'far fa-face-sad-cry', 'fas fa-face-sad-cry'],
	      defaultOption: 'far fa-face-sad-cry',
	      keywords: 'cry emoticon face loudly crying face sad sob tear tears face sad cry'
	    }, {
	      className: 'far fa-face-sad-sweat',
	      options: ['fat fa-face-sad-sweat', 'fal fa-face-sad-sweat', 'far fa-face-sad-sweat', 'fas fa-face-sad-sweat'],
	      defaultOption: 'far fa-face-sad-sweat',
	      keywords: 'disappointed face relieved sad but relieved face whew face sad sweat'
	    }, {
	      className: 'far fa-face-sad-tear',
	      options: ['fat fa-face-sad-tear', 'fal fa-face-sad-tear', 'far fa-face-sad-tear', 'fas fa-face-sad-tear'],
	      defaultOption: 'far fa-face-sad-tear',
	      keywords: 'cry crying face emoticon face sad tear tears face sad tear'
	    }, {
	      className: 'far fa-face-scream',
	      options: ['fat fa-face-scream', 'fal fa-face-scream', 'far fa-face-scream', 'fas fa-face-scream'],
	      defaultOption: 'far fa-face-scream',
	      keywords: 'face face screaming in fear fear home alone munch scared scream face scream'
	    }, {
	      className: 'far fa-face-shush',
	      options: ['fat fa-face-shush', 'fal fa-face-shush', 'far fa-face-shush', 'fas fa-face-shush'],
	      defaultOption: 'far fa-face-shush',
	      keywords: 'finger hush quiet shh shush shushing face face shush'
	    }, {
	      className: 'far fa-face-sleeping',
	      options: ['fat fa-face-sleeping', 'fal fa-face-sleeping', 'far fa-face-sleeping', 'fas fa-face-sleeping'],
	      defaultOption: 'far fa-face-sleeping',
	      keywords: 'face sleep sleeping face snooze snoring zzz face sleeping'
	    }, {
	      className: 'far fa-face-sleepy',
	      options: ['fat fa-face-sleepy', 'fal fa-face-sleepy', 'far fa-face-sleepy', 'fas fa-face-sleepy'],
	      defaultOption: 'far fa-face-sleepy',
	      keywords: 'bubble face sleep sleepy face snooze snot tear tired face sleepy'
	    }, {
	      className: 'far fa-face-smile',
	      options: ['fat fa-face-smile', 'fal fa-face-smile', 'far fa-face-smile', 'fas fa-face-smile'],
	      defaultOption: 'far fa-face-smile',
	      keywords: 'approve emoticon face happy rating satisfied slightly smiling face smile face smile'
	    }, {
	      className: 'far fa-face-smile-beam',
	      options: ['fat fa-face-smile-beam', 'fal fa-face-smile-beam', 'far fa-face-smile-beam', 'fas fa-face-smile-beam'],
	      defaultOption: 'far fa-face-smile-beam',
	      keywords: 'blush emoticon eye face happy positive smile smiling face with smiling eyes face smile beam'
	    }, {
	      className: 'far fa-face-smile-halo',
	      options: ['fat fa-face-smile-halo', 'fal fa-face-smile-halo', 'far fa-face-smile-halo', 'fas fa-face-smile-halo'],
	      defaultOption: 'far fa-face-smile-halo',
	      keywords: 'angel face fantasy halo happy innocent smiling face with halo face smile halo'
	    }, {
	      className: 'far fa-face-smile-hearts',
	      options: ['fat fa-face-smile-hearts', 'fal fa-face-smile-hearts', 'far fa-face-smile-hearts', 'fas fa-face-smile-hearts'],
	      defaultOption: 'far fa-face-smile-hearts',
	      keywords: 'adore crush happy hearts in love love smiling face with hearts face smile hearts'
	    }, {
	      className: 'far fa-face-smile-horns',
	      options: ['fat fa-face-smile-horns', 'fal fa-face-smile-horns', 'far fa-face-smile-horns', 'fas fa-face-smile-horns'],
	      defaultOption: 'far fa-face-smile-horns',
	      keywords: 'face fairy tale fantasy goblin horns imp smile smiling face with horns face smile horns'
	    }, {
	      className: 'far fa-face-smile-relaxed',
	      options: ['fat fa-face-smile-relaxed', 'fal fa-face-smile-relaxed', 'far fa-face-smile-relaxed', 'fas fa-face-smile-relaxed'],
	      defaultOption: 'far fa-face-smile-relaxed',
	      keywords: 'face outlined relaxed smile smiling face face smile relaxed'
	    }, {
	      className: 'far fa-face-smile-tear',
	      options: ['fat fa-face-smile-tear', 'fal fa-face-smile-tear', 'far fa-face-smile-tear', 'fas fa-face-smile-tear'],
	      defaultOption: 'far fa-face-smile-tear',
	      keywords: 'cry grateful proud relieved smiling smiling face with tear tear touched face smile tear'
	    }, {
	      className: 'far fa-face-smile-tongue',
	      options: ['fat fa-face-smile-tongue', 'fal fa-face-smile-tongue', 'far fa-face-smile-tongue', 'fas fa-face-smile-tongue'],
	      defaultOption: 'far fa-face-smile-tongue',
	      keywords: 'delicious face face savoring food savoring savouring smile yum face smile tongue'
	    }, {
	      className: 'far fa-face-smile-upside-down',
	      options: ['fat fa-face-smile-upside-down', 'fal fa-face-smile-upside-down', 'far fa-face-smile-upside-down', 'fas fa-face-smile-upside-down'],
	      defaultOption: 'far fa-face-smile-upside-down',
	      keywords: 'awkward face humor irony sarcasm silly upside down upside down face face smile upside down'
	    }, {
	      className: 'far fa-face-smile-wink',
	      options: ['fat fa-face-smile-wink', 'fal fa-face-smile-wink', 'far fa-face-smile-wink', 'fas fa-face-smile-wink'],
	      defaultOption: 'far fa-face-smile-wink',
	      keywords: 'emoticon face happy hint joke wink winking face face smile wink'
	    }, {
	      className: 'far fa-face-smiling-hands',
	      options: ['fat fa-face-smiling-hands', 'fal fa-face-smiling-hands', 'far fa-face-smiling-hands', 'fas fa-face-smiling-hands'],
	      defaultOption: 'far fa-face-smiling-hands',
	      keywords: 'care face hug hugging hugging face jazz hands love support wave face smiling hands'
	    }, {
	      className: 'far fa-face-smirking',
	      options: ['fat fa-face-smirking', 'fal fa-face-smirking', 'far fa-face-smirking', 'fas fa-face-smirking'],
	      defaultOption: 'far fa-face-smirking',
	      keywords: 'face flirt grin sexual smirk smirking face suggestive wry face smirking'
	    }, {
	      className: 'far fa-face-sunglasses',
	      options: ['fat fa-face-sunglasses', 'fal fa-face-sunglasses', 'far fa-face-sunglasses', 'fas fa-face-sunglasses'],
	      defaultOption: 'far fa-face-sunglasses',
	      keywords: 'bright cool face friend shades smiling face with sunglasses sun sunglasses face sunglasses'
	    }, {
	      className: 'far fa-face-surprise',
	      options: ['fat fa-face-surprise', 'fal fa-face-surprise', 'far fa-face-surprise', 'fas fa-face-surprise'],
	      defaultOption: 'far fa-face-surprise',
	      keywords: 'emoticon face face with open mouth mouth open shocked sympathy face surprise'
	    }, {
	      className: 'far fa-face-swear',
	      options: ['fat fa-face-swear', 'fal fa-face-swear', 'far fa-face-swear', 'fas fa-face-swear'],
	      defaultOption: 'far fa-face-swear',
	      keywords: 'anger curse cursing cussing face with symbols on mouth grawlix swearing symbols face swear'
	    }, {
	      className: 'far fa-face-thermometer',
	      options: ['fat fa-face-thermometer', 'fal fa-face-thermometer', 'far fa-face-thermometer', 'fas fa-face-thermometer'],
	      defaultOption: 'far fa-face-thermometer',
	      keywords: 'cold coronavirus covid covid 19 face face with thermometer fever flu ill sick thermometer face thermometer'
	    }, {
	      className: 'far fa-face-thinking',
	      options: ['fat fa-face-thinking', 'fal fa-face-thinking', 'far fa-face-thinking', 'fas fa-face-thinking'],
	      defaultOption: 'far fa-face-thinking',
	      keywords: 'chin face idea shade thinking thinking face thumb face thinking'
	    }, {
	      className: 'far fa-face-tired',
	      options: ['fat fa-face-tired', 'fal fa-face-tired', 'far fa-face-tired', 'fas fa-face-tired'],
	      defaultOption: 'far fa-face-tired',
	      keywords: 'angry emoticon face grumpy tired tired face upset face tired'
	    }, {
	      className: 'far fa-face-tissue',
	      options: ['fat fa-face-tissue', 'fal fa-face-tissue', 'far fa-face-tissue', 'fas fa-face-tissue'],
	      defaultOption: 'far fa-face-tissue',
	      keywords: 'face gesundheit sneeze sneezing face tears face tissue'
	    }, {
	      className: 'far fa-face-tongue-money',
	      options: ['fat fa-face-tongue-money', 'fal fa-face-tongue-money', 'far fa-face-tongue-money', 'fas fa-face-tongue-money'],
	      defaultOption: 'far fa-face-tongue-money',
	      keywords: 'dollar face greed money money mouth face mouth rich face tongue money'
	    }, {
	      className: 'far fa-face-tongue-sweat',
	      options: ['fat fa-face-tongue-sweat', 'fal fa-face-tongue-sweat', 'far fa-face-tongue-sweat', 'fas fa-face-tongue-sweat'],
	      defaultOption: 'far fa-face-tongue-sweat',
	      keywords: 'fever feverish heat stroke hot hot face overheat red faced stroke sweating face tongue sweat'
	    }, {
	      className: 'far fa-face-unamused',
	      options: ['fat fa-face-unamused', 'fal fa-face-unamused', 'far fa-face-unamused', 'fas fa-face-unamused'],
	      defaultOption: 'far fa-face-unamused',
	      keywords: 'dissatisfied face frown grumpy irritated meh skeptical unamused unamused face unhappy unimpressed face unamused'
	    }, {
	      className: 'far fa-face-vomit',
	      options: ['fat fa-face-vomit', 'fal fa-face-vomit', 'far fa-face-vomit', 'fas fa-face-vomit'],
	      defaultOption: 'far fa-face-vomit',
	      keywords: 'face vomiting flu poison sick spew throw up vomit face vomit'
	    }, {
	      className: 'far fa-face-weary',
	      options: ['fat fa-face-weary', 'fal fa-face-weary', 'far fa-face-weary', 'fas fa-face-weary'],
	      defaultOption: 'far fa-face-weary',
	      keywords: 'distraught face tired wailing weary weary face face weary'
	    }, {
	      className: 'far fa-face-woozy',
	      options: ['fat fa-face-woozy', 'fal fa-face-woozy', 'far fa-face-woozy', 'fas fa-face-woozy'],
	      defaultOption: 'far fa-face-woozy',
	      keywords: 'disgust dizzy drunk exhaustion intoxicated tipsy uneven eyes wasckiness wavy mouth woozy face face woozy'
	    }, {
	      className: 'far fa-face-worried',
	      options: ['fat fa-face-worried', 'fal fa-face-worried', 'far fa-face-worried', 'fas fa-face-worried'],
	      defaultOption: 'far fa-face-worried',
	      keywords: 'face sad sadface worried worried face face worried'
	    }, {
	      className: 'far fa-face-zany',
	      options: ['fat fa-face-zany', 'fal fa-face-zany', 'far fa-face-zany', 'fas fa-face-zany'],
	      defaultOption: 'far fa-face-zany',
	      keywords: 'crazy excited eye goofy large small tongue wild zany face face zany'
	    }, {
	      className: 'far fa-face-zipper',
	      options: ['fat fa-face-zipper', 'fal fa-face-zipper', 'far fa-face-zipper', 'fas fa-face-zipper'],
	      defaultOption: 'far fa-face-zipper',
	      keywords: 'face lips mouth quiet sealed secret zipper zipper mouth face face zipper'
	    }]
	  }, {
	    id: 'energy',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_ENERGY'),
	    items: [{
	      className: 'far fa-atom',
	      options: ['fat fa-atom', 'fal fa-atom', 'far fa-atom', 'fas fa-atom'],
	      defaultOption: 'far fa-atom',
	      keywords: 'atheism atheist atom atom symbol chemistry electron ion isotope neutron nuclear proton science atom'
	    }, {
	      className: 'far fa-atom-simple',
	      options: ['fat fa-atom-simple', 'fal fa-atom-simple', 'far fa-atom-simple', 'fas fa-atom-simple'],
	      defaultOption: 'far fa-atom-simple',
	      keywords: 'atheism chemistry electron ion isotope neutron nuclear proton science space atom simple'
	    }, {
	      className: 'far fa-battery-bolt',
	      options: ['fat fa-battery-bolt', 'fal fa-battery-bolt', 'far fa-battery-bolt', 'fas fa-battery-bolt'],
	      defaultOption: 'far fa-battery-bolt',
	      keywords: 'charge power status battery bolt'
	    }, {
	      className: 'far fa-battery-empty',
	      options: ['fat fa-battery-empty', 'fal fa-battery-empty', 'far fa-battery-empty', 'fas fa-battery-empty'],
	      defaultOption: 'far fa-battery-empty',
	      keywords: 'charge dead power status battery empty'
	    }, {
	      className: 'far fa-battery-exclamation',
	      options: ['fat fa-battery-exclamation', 'fal fa-battery-exclamation', 'far fa-battery-exclamation', 'fas fa-battery-exclamation'],
	      defaultOption: 'far fa-battery-exclamation',
	      keywords: 'charge empty power battery exclamation'
	    }, {
	      className: 'far fa-battery-full',
	      options: ['fat fa-battery-full', 'fal fa-battery-full', 'far fa-battery-full', 'fas fa-battery-full'],
	      defaultOption: 'far fa-battery-full',
	      keywords: 'batter battery charge power status battery full'
	    }, {
	      className: 'far fa-battery-half',
	      options: ['fat fa-battery-half', 'fal fa-battery-half', 'far fa-battery-half', 'fas fa-battery-half'],
	      defaultOption: 'far fa-battery-half',
	      keywords: 'charge power status battery half'
	    }, {
	      className: 'far fa-battery-low',
	      options: ['fat fa-battery-low', 'fal fa-battery-low', 'far fa-battery-low', 'fas fa-battery-low'],
	      defaultOption: 'far fa-battery-low',
	      keywords: 'charge empty power battery low'
	    }, {
	      className: 'far fa-battery-quarter',
	      options: ['fat fa-battery-quarter', 'fal fa-battery-quarter', 'far fa-battery-quarter', 'fas fa-battery-quarter'],
	      defaultOption: 'far fa-battery-quarter',
	      keywords: 'charge low power status battery quarter'
	    }, {
	      className: 'far fa-battery-slash',
	      options: ['fat fa-battery-slash', 'fal fa-battery-slash', 'far fa-battery-slash', 'fas fa-battery-slash'],
	      defaultOption: 'far fa-battery-slash',
	      keywords: 'charge dead power status battery slash'
	    }, {
	      className: 'far fa-battery-three-quarters',
	      options: ['fat fa-battery-three-quarters', 'fal fa-battery-three-quarters', 'far fa-battery-three-quarters', 'fas fa-battery-three-quarters'],
	      defaultOption: 'far fa-battery-three-quarters',
	      keywords: 'charge power status battery three quarters'
	    }, {
	      className: 'far fa-bolt',
	      options: ['fat fa-bolt', 'fal fa-bolt', 'far fa-bolt', 'fas fa-bolt'],
	      defaultOption: 'far fa-bolt',
	      keywords: 'charge danger electric electricity flash high voltage lightning voltage weather zap bolt'
	    }, {
	      className: 'far fa-burrito',
	      options: ['fat fa-burrito', 'fal fa-burrito', 'far fa-burrito', 'fas fa-burrito'],
	      defaultOption: 'far fa-burrito',
	      keywords: 'beans breakfast burrito chimichanga mexican salsa taco tortilla wrap burrito'
	    }, {
	      className: 'far fa-car-battery',
	      options: ['fat fa-car-battery', 'fal fa-car-battery', 'far fa-car-battery', 'fas fa-car-battery'],
	      defaultOption: 'far fa-car-battery',
	      keywords: 'auto electric mechanic power car battery'
	    }, {
	      className: 'far fa-car-bolt',
	      options: ['fat fa-car-bolt', 'fal fa-car-bolt', 'far fa-car-bolt', 'fas fa-car-bolt'],
	      defaultOption: 'far fa-car-bolt',
	      keywords: 'auto automobile electric ev sedan tesla transportation travel vehicle car bolt'
	    }, {
	      className: 'far fa-car-circle-bolt',
	      options: ['fat fa-car-circle-bolt', 'fal fa-car-circle-bolt', 'far fa-car-circle-bolt', 'fas fa-car-circle-bolt'],
	      defaultOption: 'far fa-car-circle-bolt',
	      keywords: 'auto automobile electric ev sedan tesla transportation travel vehicle car circle bolt'
	    }, {
	      className: 'far fa-car-side-bolt',
	      options: ['fat fa-car-side-bolt', 'fal fa-car-side-bolt', 'far fa-car-side-bolt', 'fas fa-car-side-bolt'],
	      defaultOption: 'far fa-car-side-bolt',
	      keywords: 'auto automobile electric ev sedan tesla transportation travel vehicle car side bolt'
	    }, {
	      className: 'far fa-charging-station',
	      options: ['fat fa-charging-station', 'fal fa-charging-station', 'far fa-charging-station', 'fas fa-charging-station'],
	      defaultOption: 'far fa-charging-station',
	      keywords: 'electric ev tesla vehicle charging station'
	    }, {
	      className: 'far fa-circle-radiation',
	      options: ['fat fa-circle-radiation', 'fal fa-circle-radiation', 'far fa-circle-radiation', 'fas fa-circle-radiation'],
	      defaultOption: 'far fa-circle-radiation',
	      keywords: 'danger dangerous deadly hazard nuclear radioactive sign warning circle radiation'
	    }, {
	      className: 'far fa-fan',
	      options: ['fat fa-fan', 'fal fa-fan', 'far fa-fan', 'fas fa-fan'],
	      defaultOption: 'far fa-fan',
	      keywords: 'ac air conditioning blade blower cool hot fan'
	    }, {
	      className: 'far fa-fire',
	      options: ['fat fa-fire', 'fal fa-fire', 'far fa-fire', 'fas fa-fire'],
	      defaultOption: 'far fa-fire',
	      keywords: 'burn caliente fire flame heat hot popular tool fire'
	    }, {
	      className: 'far fa-fire-flame-curved',
	      options: ['fat fa-fire-flame-curved', 'fal fa-fire-flame-curved', 'far fa-fire-flame-curved', 'fas fa-fire-flame-curved'],
	      defaultOption: 'far fa-fire-flame-curved',
	      keywords: 'burn caliente flame heat hot popular fire flame curved'
	    }, {
	      className: 'far fa-fire-flame-simple',
	      options: ['fat fa-fire-flame-simple', 'fal fa-fire-flame-simple', 'far fa-fire-flame-simple', 'fas fa-fire-flame-simple'],
	      defaultOption: 'far fa-fire-flame-simple',
	      keywords: 'caliente energy fire flame gas heat hot fire flame simple'
	    }, {
	      className: 'far fa-gas-pump',
	      options: ['fat fa-gas-pump', 'fal fa-gas-pump', 'far fa-gas-pump', 'fas fa-gas-pump'],
	      defaultOption: 'far fa-gas-pump',
	      keywords: 'car diesel fuel fuel pump fuelpump gas gasoline petrol pump station gas pump'
	    }, {
	      className: 'far fa-gas-pump-slash',
	      options: ['fat fa-gas-pump-slash', 'fal fa-gas-pump-slash', 'far fa-gas-pump-slash', 'fas fa-gas-pump-slash'],
	      defaultOption: 'far fa-gas-pump-slash',
	      keywords: 'car empty fuel gasoline petrol gas pump slash'
	    }, {
	      className: 'far fa-grate',
	      options: ['fat fa-grate', 'fal fa-grate', 'far fa-grate', 'fas fa-grate'],
	      defaultOption: 'far fa-grate',
	      keywords: 'drain manhole grate'
	    }, {
	      className: 'far fa-grate-droplet',
	      options: ['fat fa-grate-droplet', 'fal fa-grate-droplet', 'far fa-grate-droplet', 'fas fa-grate-droplet'],
	      defaultOption: 'far fa-grate-droplet',
	      keywords: 'drain manhole grate droplet'
	    }, {
	      className: 'far fa-heat',
	      options: ['fat fa-heat', 'fal fa-heat', 'far fa-heat', 'fas fa-heat'],
	      defaultOption: 'far fa-heat',
	      keywords: 'ac air conditioner boiler heating hot sauna spa summer temperature heat'
	    }, {
	      className: 'far fa-house-day',
	      options: ['fat fa-house-day', 'fal fa-house-day', 'far fa-house-day', 'fas fa-house-day'],
	      defaultOption: 'far fa-house-day',
	      keywords: 'abode building family home residence solar sun house day'
	    }, {
	      className: 'far fa-house-night',
	      options: ['fat fa-house-night', 'fal fa-house-night', 'far fa-house-night', 'fas fa-house-night'],
	      defaultOption: 'far fa-house-night',
	      keywords: 'abode building family home moon residence stars house night'
	    }, {
	      className: 'far fa-industry',
	      options: ['fat fa-industry', 'fal fa-industry', 'far fa-industry', 'fas fa-industry'],
	      defaultOption: 'far fa-industry',
	      keywords: 'building factory industrial manufacturing mill warehouse industry'
	    }, {
	      className: 'far fa-industry-windows',
	      options: ['fat fa-industry-windows', 'fal fa-industry-windows', 'far fa-industry-windows', 'fas fa-industry-windows'],
	      defaultOption: 'far fa-industry-windows',
	      keywords: 'building factory industrial manufacturing mill warehouse industry windows'
	    }, {
	      className: 'far fa-lamp-street',
	      options: ['fat fa-lamp-street', 'fal fa-lamp-street', 'far fa-lamp-street', 'fas fa-lamp-street'],
	      defaultOption: 'far fa-lamp-street',
	      keywords: 'light lighting utilities lamp street'
	    }, {
	      className: 'far fa-leaf',
	      options: ['fat fa-leaf', 'fal fa-leaf', 'far fa-leaf', 'fas fa-leaf'],
	      defaultOption: 'far fa-leaf',
	      keywords: 'eco flora nature plant vegan leaf'
	    }, {
	      className: 'far fa-lightbulb',
	      options: ['fat fa-lightbulb', 'fal fa-lightbulb', 'far fa-lightbulb', 'fas fa-lightbulb'],
	      defaultOption: 'far fa-lightbulb',
	      keywords: 'bulb comic electric energy idea inspiration light light bulb lightbulb'
	    }, {
	      className: 'far fa-manhole',
	      options: ['fat fa-manhole', 'fal fa-manhole', 'far fa-manhole', 'fas fa-manhole'],
	      defaultOption: 'far fa-manhole',
	      keywords: 'grate sewer manhole'
	    }, {
	      className: 'far fa-meter',
	      options: ['fat fa-meter', 'fal fa-meter', 'far fa-meter', 'fas fa-meter'],
	      defaultOption: 'far fa-meter',
	      keywords: 'electricity transmission utilities meter'
	    }, {
	      className: 'far fa-meter-bolt',
	      options: ['fat fa-meter-bolt', 'fal fa-meter-bolt', 'far fa-meter-bolt', 'fas fa-meter-bolt'],
	      defaultOption: 'far fa-meter-bolt',
	      keywords: 'electricity transmission utilities meter bolt'
	    }, {
	      className: 'far fa-meter-droplet',
	      options: ['fat fa-meter-droplet', 'fal fa-meter-droplet', 'far fa-meter-droplet', 'fas fa-meter-droplet'],
	      defaultOption: 'far fa-meter-droplet',
	      keywords: 'electricity transmission utilities meter droplet'
	    }, {
	      className: 'far fa-meter-fire',
	      options: ['fat fa-meter-fire', 'fal fa-meter-fire', 'far fa-meter-fire', 'fas fa-meter-fire'],
	      defaultOption: 'far fa-meter-fire',
	      keywords: 'electricity transmission utilities meter fire'
	    }, {
	      className: 'far fa-outlet',
	      options: ['fat fa-outlet', 'fal fa-outlet', 'far fa-outlet', 'fas fa-outlet'],
	      defaultOption: 'far fa-outlet',
	      keywords: 'electricity energy plug outlet'
	    }, {
	      className: 'far fa-pedestal',
	      options: ['fat fa-pedestal', 'fal fa-pedestal', 'far fa-pedestal', 'fas fa-pedestal'],
	      defaultOption: 'far fa-pedestal',
	      keywords: 'electricity reading pedestal'
	    }, {
	      className: 'far fa-pipe-circle-check',
	      options: ['fat fa-pipe-circle-check', 'fal fa-pipe-circle-check', 'far fa-pipe-circle-check', 'fas fa-pipe-circle-check'],
	      defaultOption: 'far fa-pipe-circle-check',
	      keywords: 'drain plumbing supply vesda water pipe circle check'
	    }, {
	      className: 'far fa-pipe-collar',
	      options: ['fat fa-pipe-collar', 'fal fa-pipe-collar', 'far fa-pipe-collar', 'fas fa-pipe-collar'],
	      defaultOption: 'far fa-pipe-collar',
	      keywords: 'drain plumbing supply water pipe collar'
	    }, {
	      className: 'far fa-pipe-section',
	      options: ['fat fa-pipe-section', 'fal fa-pipe-section', 'far fa-pipe-section', 'fas fa-pipe-section'],
	      defaultOption: 'far fa-pipe-section',
	      keywords: 'drain plumbing supply water pipe section'
	    }, {
	      className: 'far fa-pipe-valve',
	      options: ['fat fa-pipe-valve', 'fal fa-pipe-valve', 'far fa-pipe-valve', 'fas fa-pipe-valve'],
	      defaultOption: 'far fa-pipe-valve',
	      keywords: 'drain plumbing supply water pipe valve'
	    }, {
	      className: 'far fa-plug',
	      options: ['fat fa-plug', 'fal fa-plug', 'far fa-plug', 'fas fa-plug'],
	      defaultOption: 'far fa-plug',
	      keywords: 'connect electric electric plug electricity online plug power plug'
	    }, {
	      className: 'far fa-poop',
	      options: ['fat fa-poop', 'fal fa-poop', 'far fa-poop', 'fas fa-poop'],
	      defaultOption: 'far fa-poop',
	      keywords: 'crap poop shit smile turd poop'
	    }, {
	      className: 'far fa-power-off',
	      options: ['fat fa-power-off', 'fal fa-power-off', 'far fa-power-off', 'fas fa-power-off'],
	      defaultOption: 'far fa-power-off',
	      keywords: 'power symbol cancel computer on reboot restart power off'
	    }, {
	      className: 'far fa-radiation',
	      options: ['fat fa-radiation', 'fal fa-radiation', 'far fa-radiation', 'fas fa-radiation'],
	      defaultOption: 'far fa-radiation',
	      keywords: 'danger dangerous deadly hazard nuclear radioactive warning radiation'
	    }, {
	      className: 'far fa-seedling',
	      options: ['fat fa-seedling', 'fal fa-seedling', 'far fa-seedling', 'fas fa-seedling'],
	      defaultOption: 'far fa-seedling',
	      keywords: 'flora grow plant seedling vegan young seedling'
	    }, {
	      className: 'far fa-solar-panel',
	      options: ['fat fa-solar-panel', 'fal fa-solar-panel', 'far fa-solar-panel', 'fas fa-solar-panel'],
	      defaultOption: 'far fa-solar-panel',
	      keywords: 'clean eco friendly energy green sun solar panel'
	    }, {
	      className: 'far fa-sun',
	      options: ['fat fa-sun', 'fal fa-sun', 'far fa-sun', 'fas fa-sun'],
	      defaultOption: 'far fa-sun',
	      keywords: 'bright brighten contrast day lighter rays sol solar star sun sunny weather sun'
	    }, {
	      className: 'far fa-tower-broadcast',
	      options: ['fat fa-tower-broadcast', 'fal fa-tower-broadcast', 'far fa-tower-broadcast', 'fas fa-tower-broadcast'],
	      defaultOption: 'far fa-tower-broadcast',
	      keywords: 'airwaves antenna radio reception waves tower broadcast'
	    }, {
	      className: 'far fa-transformer-bolt',
	      options: ['fat fa-transformer-bolt', 'fal fa-transformer-bolt', 'far fa-transformer-bolt', 'fas fa-transformer-bolt'],
	      defaultOption: 'far fa-transformer-bolt',
	      keywords: 'electricity energy substation thunderbolt transformer bolt'
	    }, {
	      className: 'far fa-truck-bolt',
	      options: ['fat fa-truck-bolt', 'fal fa-truck-bolt', 'far fa-truck-bolt', 'fas fa-truck-bolt'],
	      defaultOption: 'far fa-truck-bolt',
	      keywords: 'cargo delivery electric ev shipping vehicle truck bolt'
	    }, {
	      className: 'far fa-utility-pole',
	      options: ['fat fa-utility-pole', 'fal fa-utility-pole', 'far fa-utility-pole', 'fas fa-utility-pole'],
	      defaultOption: 'far fa-utility-pole',
	      keywords: 'phone power transmission utility pole'
	    }, {
	      className: 'far fa-utility-pole-double',
	      options: ['fat fa-utility-pole-double', 'fal fa-utility-pole-double', 'far fa-utility-pole-double', 'fas fa-utility-pole-double'],
	      defaultOption: 'far fa-utility-pole-double',
	      keywords: 'phone power transmission utility pole double'
	    }, {
	      className: 'far fa-vent-damper',
	      options: ['fat fa-vent-damper', 'fal fa-vent-damper', 'far fa-vent-damper', 'fas fa-vent-damper'],
	      defaultOption: 'far fa-vent-damper',
	      keywords: 'air fire hvac ventilate vent damper'
	    }, {
	      className: 'far fa-water',
	      options: ['fat fa-water', 'fal fa-water', 'far fa-water', 'fas fa-water'],
	      defaultOption: 'far fa-water',
	      keywords: 'lake liquid ocean sea swim wet water'
	    }, {
	      className: 'far fa-wind',
	      options: ['fat fa-wind', 'fal fa-wind', 'far fa-wind', 'fas fa-wind'],
	      defaultOption: 'far fa-wind',
	      keywords: 'air blow breeze fall seasonal weather wind'
	    }, {
	      className: 'far fa-wind-turbine',
	      options: ['fat fa-wind-turbine', 'fal fa-wind-turbine', 'far fa-wind-turbine', 'fas fa-wind-turbine'],
	      defaultOption: 'far fa-wind-turbine',
	      keywords: 'electricity energy generator renewable wind power windmill wind turbine'
	    }]
	  }, {
	    id: 'files',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_FILES'),
	    items: [{
	      className: 'far fa-box-archive',
	      options: ['fat fa-box-archive', 'fal fa-box-archive', 'far fa-box-archive', 'fas fa-box-archive'],
	      defaultOption: 'far fa-box-archive',
	      keywords: 'box package save storage box archive'
	    }, {
	      className: 'far fa-clone',
	      options: ['fat fa-clone', 'fal fa-clone', 'far fa-clone', 'fas fa-clone'],
	      defaultOption: 'far fa-clone',
	      keywords: 'arrange copy duplicate paste clone'
	    }, {
	      className: 'far fa-copy',
	      options: ['fat fa-copy', 'fal fa-copy', 'far fa-copy', 'fas fa-copy'],
	      defaultOption: 'far fa-copy',
	      keywords: 'clone duplicate file files o paper paste copy'
	    }, {
	      className: 'far fa-file',
	      options: ['fat fa-file', 'fal fa-file', 'far fa-file', 'fas fa-file'],
	      defaultOption: 'far fa-file',
	      keywords: 'empty document document new page page facing up pdf resume file'
	    }, {
	      className: 'far fa-file-arrow-down',
	      options: ['fat fa-file-arrow-down', 'fal fa-file-arrow-down', 'far fa-file-arrow-down', 'fas fa-file-arrow-down'],
	      defaultOption: 'far fa-file-arrow-down',
	      keywords: 'document export save file arrow down'
	    }, {
	      className: 'far fa-file-arrow-up',
	      options: ['fat fa-file-arrow-up', 'fal fa-file-arrow-up', 'far fa-file-arrow-up', 'fas fa-file-arrow-up'],
	      defaultOption: 'far fa-file-arrow-up',
	      keywords: 'document import page save file arrow up'
	    }, {
	      className: 'far fa-file-audio',
	      options: ['fat fa-file-audio', 'fal fa-file-audio', 'far fa-file-audio', 'fas fa-file-audio'],
	      defaultOption: 'far fa-file-audio',
	      keywords: 'document mp3 music page play sound file audio'
	    }, {
	      className: 'far fa-file-binary',
	      options: ['fat fa-file-binary', 'fal fa-file-binary', 'far fa-file-binary', 'fas fa-file-binary'],
	      defaultOption: 'far fa-file-binary',
	      keywords: 'binary code computer file binary'
	    }, {
	      className: 'far fa-file-check',
	      options: ['fat fa-file-check', 'fal fa-file-check', 'far fa-file-check', 'fas fa-file-check'],
	      defaultOption: 'far fa-file-check',
	      keywords: 'accept agree confirm document done ok select success synced tick todo file check'
	    }, {
	      className: 'far fa-file-code',
	      options: ['fat fa-file-code', 'fal fa-file-code', 'far fa-file-code', 'fas fa-file-code'],
	      defaultOption: 'far fa-file-code',
	      keywords: 'css development document html file code'
	    }, {
	      className: 'far fa-file-csv',
	      options: ['fat fa-file-csv', 'fal fa-file-csv', 'far fa-file-csv', 'fas fa-file-csv'],
	      defaultOption: 'far fa-file-csv',
	      keywords: 'document excel numbers spreadsheets table file csv'
	    }, {
	      className: 'far fa-file-excel',
	      options: ['fat fa-file-excel', 'fal fa-file-excel', 'far fa-file-excel', 'fas fa-file-excel'],
	      defaultOption: 'far fa-file-excel',
	      keywords: 'csv document numbers spreadsheets table file excel'
	    }, {
	      className: 'far fa-file-exclamation',
	      options: ['fat fa-file-exclamation', 'fal fa-file-exclamation', 'far fa-file-exclamation', 'fas fa-file-exclamation'],
	      defaultOption: 'far fa-file-exclamation',
	      keywords: 'alert document important page file exclamation'
	    }, {
	      className: 'far fa-file-export',
	      options: ['fat fa-file-export', 'fal fa-file-export', 'far fa-file-export', 'fas fa-file-export'],
	      defaultOption: 'far fa-file-export',
	      keywords: 'download save file export'
	    }, {
	      className: 'far fa-file-heart',
	      options: ['fat fa-file-heart', 'fal fa-file-heart', 'far fa-file-heart', 'fas fa-file-heart'],
	      defaultOption: 'far fa-file-heart',
	      keywords: 'favorite love file heart'
	    }, {
	      className: 'far fa-file-image',
	      options: ['fat fa-file-image', 'fal fa-file-image', 'far fa-file-image', 'fas fa-file-image'],
	      defaultOption: 'far fa-file-image',
	      keywords: 'document with picture document image jpg photo png file image'
	    }, {
	      className: 'far fa-file-import',
	      options: ['fat fa-file-import', 'fal fa-file-import', 'far fa-file-import', 'fas fa-file-import'],
	      defaultOption: 'far fa-file-import',
	      keywords: 'copy document send upload file import'
	    }, {
	      className: 'far fa-file-lines',
	      options: ['fat fa-file-lines', 'fal fa-file-lines', 'far fa-file-lines', 'fas fa-file-lines'],
	      defaultOption: 'far fa-file-lines',
	      keywords: 'document document with text document file text invoice new page pdf file lines'
	    }, {
	      className: 'far fa-file-lock',
	      options: ['fat fa-file-lock', 'fal fa-file-lock', 'far fa-file-lock', 'fas fa-file-lock'],
	      defaultOption: 'far fa-file-lock',
	      keywords: 'contract encrypt lock private protect file lock'
	    }, {
	      className: 'far fa-file-magnifying-glass',
	      options: ['fat fa-file-magnifying-glass', 'fal fa-file-magnifying-glass', 'far fa-file-magnifying-glass', 'fas fa-file-magnifying-glass'],
	      defaultOption: 'far fa-file-magnifying-glass',
	      keywords: 'document find look scan file magnifying glass'
	    }, {
	      className: 'far fa-file-minus',
	      options: ['fat fa-file-minus', 'fal fa-file-minus', 'far fa-file-minus', 'fas fa-file-minus'],
	      defaultOption: 'far fa-file-minus',
	      keywords: 'delete document negative remove file minus'
	    }, {
	      className: 'far fa-file-music',
	      options: ['fat fa-file-music', 'fal fa-file-music', 'far fa-file-music', 'fas fa-file-music'],
	      defaultOption: 'far fa-file-music',
	      keywords: 'aac aif audio midi mp3 ogg sheet music wav wma file music'
	    }, {
	      className: 'far fa-file-pdf',
	      options: ['fat fa-file-pdf', 'fal fa-file-pdf', 'far fa-file-pdf', 'fas fa-file-pdf'],
	      defaultOption: 'far fa-file-pdf',
	      keywords: 'acrobat document preview save file pdf'
	    }, {
	      className: 'far fa-file-pen',
	      options: ['fat fa-file-pen', 'fal fa-file-pen', 'far fa-file-pen', 'fas fa-file-pen'],
	      defaultOption: 'far fa-file-pen',
	      keywords: 'edit memo pen pencil update write file pen'
	    }, {
	      className: 'far fa-file-plus',
	      options: ['fat fa-file-plus', 'fal fa-file-plus', 'far fa-file-plus', 'fas fa-file-plus'],
	      defaultOption: 'far fa-file-plus',
	      keywords: 'add create document medical new positive file plus'
	    }, {
	      className: 'far fa-file-plus-minus',
	      options: ['fat fa-file-plus-minus', 'fal fa-file-plus-minus', 'far fa-file-plus-minus', 'fas fa-file-plus-minus'],
	      defaultOption: 'far fa-file-plus-minus',
	      keywords: 'add difference math subtract file plus minus'
	    }, {
	      className: 'far fa-file-powerpoint',
	      options: ['fat fa-file-powerpoint', 'fal fa-file-powerpoint', 'far fa-file-powerpoint', 'fas fa-file-powerpoint'],
	      defaultOption: 'far fa-file-powerpoint',
	      keywords: 'display document keynote presentation file powerpoint'
	    }, {
	      className: 'far fa-file-slash',
	      options: ['fat fa-file-slash', 'fal fa-file-slash', 'far fa-file-slash', 'fas fa-file-slash'],
	      defaultOption: 'far fa-file-slash',
	      keywords: 'cancel delete paper remove file slash'
	    }, {
	      className: 'far fa-file-video',
	      options: ['fat fa-file-video', 'fal fa-file-video', 'far fa-file-video', 'fas fa-file-video'],
	      defaultOption: 'far fa-file-video',
	      keywords: 'document m4v movie mp4 play file video'
	    }, {
	      className: 'far fa-file-word',
	      options: ['fat fa-file-word', 'fal fa-file-word', 'far fa-file-word', 'fas fa-file-word'],
	      defaultOption: 'far fa-file-word',
	      keywords: 'document edit page text writing file word'
	    }, {
	      className: 'far fa-file-xmark',
	      options: ['fat fa-file-xmark', 'fal fa-file-xmark', 'far fa-file-xmark', 'fas fa-file-xmark'],
	      defaultOption: 'far fa-file-xmark',
	      keywords: 'archive delete document remove x file xmark'
	    }, {
	      className: 'far fa-file-zipper',
	      options: ['fat fa-file-zipper', 'fal fa-file-zipper', 'far fa-file-zipper', 'fas fa-file-zipper'],
	      defaultOption: 'far fa-file-zipper',
	      keywords: ' zip bundle compress compression download zip file zipper'
	    }, {
	      className: 'far fa-files',
	      options: ['fat fa-files', 'fal fa-files', 'far fa-files', 'fas fa-files'],
	      defaultOption: 'far fa-files',
	      keywords: 'history multiple files'
	    }, {
	      className: 'far fa-floppy-disk',
	      options: ['fat fa-floppy-disk', 'fal fa-floppy-disk', 'far fa-floppy-disk', 'fas fa-floppy-disk'],
	      defaultOption: 'far fa-floppy-disk',
	      keywords: 'black hard shell floppy disk computer disk download floppy floppy disk floppy o floppy disk'
	    }, {
	      className: 'far fa-folder',
	      options: ['fat fa-folder', 'fal fa-folder', 'far fa-folder', 'fas fa-folder'],
	      defaultOption: 'far fa-folder',
	      keywords: 'black folder archive directory document file file folder folder folder'
	    }, {
	      className: 'far fa-folder-blank',
	      options: ['fat fa-folder-blank', 'fal fa-folder-blank', 'far fa-folder-blank', 'fas fa-folder-blank'],
	      defaultOption: 'far fa-folder-blank',
	      keywords: 'file folder blank'
	    }, {
	      className: 'far fa-folder-bookmark',
	      options: ['fat fa-folder-bookmark', 'fal fa-folder-bookmark', 'far fa-folder-bookmark', 'fas fa-folder-bookmark'],
	      defaultOption: 'far fa-folder-bookmark',
	      keywords: 'favorite file remember folder bookmark'
	    }, {
	      className: 'far fa-folder-gear',
	      options: ['fat fa-folder-gear', 'fal fa-folder-gear', 'far fa-folder-gear', 'fas fa-folder-gear'],
	      defaultOption: 'far fa-folder-gear',
	      keywords: 'admin cog file preferences settings folder gear'
	    }, {
	      className: 'far fa-folder-grid',
	      options: ['fat fa-folder-grid', 'fal fa-folder-grid', 'far fa-folder-grid', 'fas fa-folder-grid'],
	      defaultOption: 'far fa-folder-grid',
	      keywords: 'contents file folder grid'
	    }, {
	      className: 'far fa-folder-heart',
	      options: ['fat fa-folder-heart', 'fal fa-folder-heart', 'far fa-folder-heart', 'fas fa-folder-heart'],
	      defaultOption: 'far fa-folder-heart',
	      keywords: 'favorite file folder heart'
	    }, {
	      className: 'far fa-folder-image',
	      options: ['fat fa-folder-image', 'fal fa-folder-image', 'far fa-folder-image', 'fas fa-folder-image'],
	      defaultOption: 'far fa-folder-image',
	      keywords: 'file image photos folder image'
	    }, {
	      className: 'far fa-folder-magnifying-glass',
	      options: ['fat fa-folder-magnifying-glass', 'fal fa-folder-magnifying-glass', 'far fa-folder-magnifying-glass', 'fas fa-folder-magnifying-glass'],
	      defaultOption: 'far fa-folder-magnifying-glass',
	      keywords: 'file search folder magnifying glass'
	    }, {
	      className: 'far fa-folder-medical',
	      options: ['fat fa-folder-medical', 'fal fa-folder-medical', 'far fa-folder-medical', 'fas fa-folder-medical'],
	      defaultOption: 'far fa-folder-medical',
	      keywords: 'health patient record folder medical'
	    }, {
	      className: 'far fa-folder-music',
	      options: ['fat fa-folder-music', 'fal fa-folder-music', 'far fa-folder-music', 'fas fa-folder-music'],
	      defaultOption: 'far fa-folder-music',
	      keywords: 'audio mp3 folder music'
	    }, {
	      className: 'far fa-folder-open',
	      options: ['fat fa-folder-open', 'fal fa-folder-open', 'far fa-folder-open', 'fas fa-folder-open'],
	      defaultOption: 'far fa-folder-open',
	      keywords: 'open folder archive directory document empty file folder new open open file folder folder open'
	    }, {
	      className: 'far fa-folder-user',
	      options: ['fat fa-folder-user', 'fal fa-folder-user', 'far fa-folder-user', 'fas fa-folder-user'],
	      defaultOption: 'far fa-folder-user',
	      keywords: 'contacts file resume folder user'
	    }, {
	      className: 'far fa-note-sticky',
	      options: ['fat fa-note-sticky', 'fal fa-note-sticky', 'far fa-note-sticky', 'fas fa-note-sticky'],
	      defaultOption: 'far fa-note-sticky',
	      keywords: 'message note paper reminder sticker note sticky'
	    }, {
	      className: 'far fa-page',
	      options: ['fat fa-page', 'fal fa-page', 'far fa-page', 'fas fa-page'],
	      defaultOption: 'far fa-page',
	      keywords: 'document empty file new pdf resume page'
	    }, {
	      className: 'far fa-page-caret-down',
	      options: ['fat fa-page-caret-down', 'fal fa-page-caret-down', 'far fa-page-caret-down', 'fas fa-page-caret-down'],
	      defaultOption: 'far fa-page-caret-down',
	      keywords: 'document empty file new page down pdf resume page caret down'
	    }, {
	      className: 'far fa-page-caret-up',
	      options: ['fat fa-page-caret-up', 'fal fa-page-caret-up', 'far fa-page-caret-up', 'fas fa-page-caret-up'],
	      defaultOption: 'far fa-page-caret-up',
	      keywords: 'document empty file new page up pdf resume page caret up'
	    }, {
	      className: 'far fa-paste',
	      options: ['fat fa-paste', 'fal fa-paste', 'far fa-paste', 'fas fa-paste'],
	      defaultOption: 'far fa-paste',
	      keywords: 'clipboard copy document paper paste'
	    }, {
	      className: 'far fa-photo-film',
	      options: ['fat fa-photo-film', 'fal fa-photo-film', 'far fa-photo-film', 'fas fa-photo-film'],
	      defaultOption: 'far fa-photo-film',
	      keywords: 'av film image library media photo film'
	    }, {
	      className: 'far fa-scissors',
	      options: ['fat fa-scissors', 'fal fa-scissors', 'far fa-scissors', 'fas fa-scissors'],
	      defaultOption: 'far fa-scissors',
	      keywords: 'black safety scissors white scissors clip cutting scissors snip tool scissors'
	    }]
	  }, {
	    id: 'film-video',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_FILM_VIDEO'),
	    items: [{
	      className: 'far fa-360-degrees',
	      options: ['fat fa-360-degrees', 'fal fa-360-degrees', 'far fa-360-degrees', 'fas fa-360-degrees'],
	      defaultOption: 'far fa-360-degrees',
	      keywords: '3d panorama revolve rotate 360 degrees'
	    }, {
	      className: 'far fa-airplay',
	      options: ['fat fa-airplay', 'fal fa-airplay', 'far fa-airplay', 'fas fa-airplay'],
	      defaultOption: 'far fa-airplay',
	      keywords: 'apple share stream airplay'
	    }, {
	      className: 'far fa-album-collection',
	      options: ['fat fa-album-collection', 'fal fa-album-collection', 'far fa-album-collection', 'fas fa-album-collection'],
	      defaultOption: 'far fa-album-collection',
	      keywords: 'catalog library music record song vinyl album collection'
	    }, {
	      className: 'far fa-amp-guitar',
	      options: ['fat fa-amp-guitar', 'fal fa-amp-guitar', 'far fa-amp-guitar', 'fas fa-amp-guitar'],
	      defaultOption: 'far fa-amp-guitar',
	      keywords: 'audio guitar loudspeaker music pa volume amp guitar'
	    }, {
	      className: 'far fa-audio-description',
	      options: ['fat fa-audio-description', 'fal fa-audio-description', 'far fa-audio-description', 'fas fa-audio-description'],
	      defaultOption: 'far fa-audio-description',
	      keywords: 'blind narration video visual audio description'
	    }, {
	      className: 'far fa-audio-description-slash',
	      options: ['fat fa-audio-description-slash', 'fal fa-audio-description-slash', 'far fa-audio-description-slash', 'fas fa-audio-description-slash'],
	      defaultOption: 'far fa-audio-description-slash',
	      keywords: 'audio narration video visual audio description slash'
	    }, {
	      className: 'far fa-camcorder',
	      options: ['fat fa-camcorder', 'fal fa-camcorder', 'far fa-camcorder', 'fas fa-camcorder'],
	      defaultOption: 'far fa-camcorder',
	      keywords: 'camera cinema director film handheld movie retro theater video video camera vintage camcorder'
	    }, {
	      className: 'far fa-camera-cctv',
	      options: ['fat fa-camera-cctv', 'fal fa-camera-cctv', 'far fa-camera-cctv', 'fas fa-camera-cctv'],
	      defaultOption: 'far fa-camera-cctv',
	      keywords: '1984 big brother george orwell camera security surveillance video camera cctv'
	    }, {
	      className: 'far fa-camera-movie',
	      options: ['fat fa-camera-movie', 'fal fa-camera-movie', 'far fa-camera-movie', 'fas fa-camera-movie'],
	      defaultOption: 'far fa-camera-movie',
	      keywords: 'camera cinema director film movie movie camera theater video camera movie'
	    }, {
	      className: 'far fa-camera-polaroid',
	      options: ['fat fa-camera-polaroid', 'fal fa-camera-polaroid', 'far fa-camera-polaroid', 'fas fa-camera-polaroid'],
	      defaultOption: 'far fa-camera-polaroid',
	      keywords: 'capture film instant camera lens photo photography retro snapshot vintage camera polaroid'
	    }, {
	      className: 'far fa-camera-security',
	      options: ['fat fa-camera-security', 'fal fa-camera-security', 'far fa-camera-security', 'fas fa-camera-security'],
	      defaultOption: 'far fa-camera-security',
	      keywords: 'chat conference call facetime podcast security video videoconferencing youtube camera security'
	    }, {
	      className: 'far fa-camera-web',
	      options: ['fat fa-camera-web', 'fal fa-camera-web', 'far fa-camera-web', 'fas fa-camera-web'],
	      defaultOption: 'far fa-camera-web',
	      keywords: 'chat conference call facetime podcast video videoconferencing youtube camera web'
	    }, {
	      className: 'far fa-camera-web-slash',
	      options: ['fat fa-camera-web-slash', 'fal fa-camera-web-slash', 'far fa-camera-web-slash', 'fas fa-camera-web-slash'],
	      defaultOption: 'far fa-camera-web-slash',
	      keywords: 'chat conference call facetime podcast video videoconferencing youtube camera web slash'
	    }, {
	      className: 'far fa-cassette-betamax',
	      options: ['fat fa-cassette-betamax', 'fal fa-cassette-betamax', 'far fa-cassette-betamax', 'fas fa-cassette-betamax'],
	      defaultOption: 'far fa-cassette-betamax',
	      keywords: 'cassette rental retro tape vhs video vintage cassette betamax'
	    }, {
	      className: 'far fa-cassette-vhs',
	      options: ['fat fa-cassette-vhs', 'fal fa-cassette-vhs', 'far fa-cassette-vhs', 'fas fa-cassette-vhs'],
	      defaultOption: 'far fa-cassette-vhs',
	      keywords: 'betamax cassette rental retro tape vhs video videocassette vintage cassette vhs'
	    }, {
	      className: 'far fa-circle',
	      options: ['fat fa-circle', 'fal fa-circle', 'far fa-circle', 'fas fa-circle'],
	      defaultOption: 'far fa-circle',
	      keywords: 'black circle black large circle black circle blue blue circle brown brown circle circle circle thin diameter dot ellipse geometric green green circle notification orange orange circle purple purple circle red red circle round white circle yellow yellow circle circle'
	    }, {
	      className: 'far fa-circle-microphone',
	      options: ['fat fa-circle-microphone', 'fal fa-circle-microphone', 'far fa-circle-microphone', 'fas fa-circle-microphone'],
	      defaultOption: 'far fa-circle-microphone',
	      keywords: 'listen podcast record circle microphone'
	    }, {
	      className: 'far fa-circle-microphone-lines',
	      options: ['fat fa-circle-microphone-lines', 'fal fa-circle-microphone-lines', 'far fa-circle-microphone-lines', 'fas fa-circle-microphone-lines'],
	      defaultOption: 'far fa-circle-microphone-lines',
	      keywords: 'listen podcast record circle microphone lines'
	    }, {
	      className: 'far fa-circle-video',
	      options: ['fat fa-circle-video', 'fal fa-circle-video', 'far fa-circle-video', 'fas fa-circle-video'],
	      defaultOption: 'far fa-circle-video',
	      keywords: 'camera film circle video'
	    }, {
	      className: 'far fa-circle-waveform-lines',
	      options: ['fat fa-circle-waveform-lines', 'fal fa-circle-waveform-lines', 'far fa-circle-waveform-lines', 'fas fa-circle-waveform-lines'],
	      defaultOption: 'far fa-circle-waveform-lines',
	      keywords: 'signal circle waveform lines'
	    }, {
	      className: 'far fa-clapperboard',
	      options: ['fat fa-clapperboard', 'fal fa-clapperboard', 'far fa-clapperboard', 'fas fa-clapperboard'],
	      defaultOption: 'far fa-clapperboard',
	      keywords: 'camera clapper clapper board director film movie record clapperboard'
	    }, {
	      className: 'far fa-clapperboard-play',
	      options: ['fat fa-clapperboard-play', 'fal fa-clapperboard-play', 'far fa-clapperboard-play', 'fas fa-clapperboard-play'],
	      defaultOption: 'far fa-clapperboard-play',
	      keywords: 'camera director film movie record clapperboard play'
	    }, {
	      className: 'far fa-closed-captioning',
	      options: ['fat fa-closed-captioning', 'fal fa-closed-captioning', 'far fa-closed-captioning', 'fas fa-closed-captioning'],
	      defaultOption: 'far fa-closed-captioning',
	      keywords: 'cc deaf hearing subtitle subtitling text video closed captioning'
	    }, {
	      className: 'far fa-cloud-music',
	      options: ['fat fa-cloud-music', 'fal fa-cloud-music', 'far fa-cloud-music', 'fas fa-cloud-music'],
	      defaultOption: 'far fa-cloud-music',
	      keywords: 'download music spotify streaming cloud music'
	    }, {
	      className: 'far fa-compact-disc',
	      options: ['fat fa-compact-disc', 'fal fa-compact-disc', 'far fa-compact-disc', 'fas fa-compact-disc'],
	      defaultOption: 'far fa-compact-disc',
	      keywords: 'optical disc icon album blu ray bluray cd computer disc disk dvd media movie music optical optical disk record video vinyl compact disc'
	    }, {
	      className: 'far fa-computer-speaker',
	      options: ['fat fa-computer-speaker', 'fal fa-computer-speaker', 'far fa-computer-speaker', 'fas fa-computer-speaker'],
	      defaultOption: 'far fa-computer-speaker',
	      keywords: 'airplay bluetooth devices music output pair sound sync computer speaker'
	    }, {
	      className: 'far fa-dial',
	      options: ['fat fa-dial', 'fal fa-dial', 'far fa-dial', 'fas fa-dial'],
	      defaultOption: 'far fa-dial',
	      keywords: 'dial level dial'
	    }, {
	      className: 'far fa-dial-high',
	      options: ['fat fa-dial-high', 'fal fa-dial-high', 'far fa-dial-high', 'fas fa-dial-high'],
	      defaultOption: 'far fa-dial-high',
	      keywords: 'dial level dial high'
	    }, {
	      className: 'far fa-dial-low',
	      options: ['fat fa-dial-low', 'fal fa-dial-low', 'far fa-dial-low', 'fas fa-dial-low'],
	      defaultOption: 'far fa-dial-low',
	      keywords: 'dial level dial low'
	    }, {
	      className: 'far fa-dial-max',
	      options: ['fat fa-dial-max', 'fal fa-dial-max', 'far fa-dial-max', 'fas fa-dial-max'],
	      defaultOption: 'far fa-dial-max',
	      keywords: 'dial level dial max'
	    }, {
	      className: 'far fa-dial-med',
	      options: ['fat fa-dial-med', 'fal fa-dial-med', 'far fa-dial-med', 'fas fa-dial-med'],
	      defaultOption: 'far fa-dial-med',
	      keywords: 'dial level dial med'
	    }, {
	      className: 'far fa-dial-med-low',
	      options: ['fat fa-dial-med-low', 'fal fa-dial-med-low', 'far fa-dial-med-low', 'fas fa-dial-med-low'],
	      defaultOption: 'far fa-dial-med-low',
	      keywords: 'dial level dial med low'
	    }, {
	      className: 'far fa-dial-min',
	      options: ['fat fa-dial-min', 'fal fa-dial-min', 'far fa-dial-min', 'fas fa-dial-min'],
	      defaultOption: 'far fa-dial-min',
	      keywords: 'dial level dial min'
	    }, {
	      className: 'far fa-dial-off',
	      options: ['fat fa-dial-off', 'fal fa-dial-off', 'far fa-dial-off', 'fas fa-dial-off'],
	      defaultOption: 'far fa-dial-off',
	      keywords: 'dial level dial off'
	    }, {
	      className: 'far fa-disc-drive',
	      options: ['fat fa-disc-drive', 'fal fa-disc-drive', 'far fa-disc-drive', 'fas fa-disc-drive'],
	      defaultOption: 'far fa-disc-drive',
	      keywords: 'blu ray cd cd rom computer dvd load music optical drive peripheral tray video disc drive'
	    }, {
	      className: 'far fa-drone',
	      options: ['fat fa-drone', 'fal fa-drone', 'far fa-drone', 'fas fa-drone'],
	      defaultOption: 'far fa-drone',
	      keywords: 'aerial big brother surveillance uav unmanned vehicle drone'
	    }, {
	      className: 'far fa-drone-front',
	      options: ['fat fa-drone-front', 'fal fa-drone-front', 'far fa-drone-front', 'fas fa-drone-front'],
	      defaultOption: 'far fa-drone-front',
	      keywords: 'aerial big brother surveillance uav unmanned vehicle drone front'
	    }, {
	      className: 'far fa-face-viewfinder',
	      options: ['fat fa-face-viewfinder', 'fal fa-face-viewfinder', 'far fa-face-viewfinder', 'fas fa-face-viewfinder'],
	      defaultOption: 'far fa-face-viewfinder',
	      keywords: 'face id facial identity recognition scan smile face viewfinder'
	    }, {
	      className: 'far fa-file-audio',
	      options: ['fat fa-file-audio', 'fal fa-file-audio', 'far fa-file-audio', 'fas fa-file-audio'],
	      defaultOption: 'far fa-file-audio',
	      keywords: 'document mp3 music page play sound file audio'
	    }, {
	      className: 'far fa-file-video',
	      options: ['fat fa-file-video', 'fal fa-file-video', 'far fa-file-video', 'fas fa-file-video'],
	      defaultOption: 'far fa-file-video',
	      keywords: 'document m4v movie mp4 play file video'
	    }, {
	      className: 'far fa-film',
	      options: ['fat fa-film', 'fal fa-film', 'far fa-film', 'fas fa-film'],
	      defaultOption: 'far fa-film',
	      keywords: 'cinema film film frames frames movie strip video film'
	    }, {
	      className: 'far fa-film-canister',
	      options: ['fat fa-film-canister', 'fal fa-film-canister', 'far fa-film-canister', 'fas fa-film-canister'],
	      defaultOption: 'far fa-film-canister',
	      keywords: '110 35mm darkroom develop image photo photography retro vintage film canister'
	    }, {
	      className: 'far fa-film-simple',
	      options: ['fat fa-film-simple', 'fal fa-film-simple', 'far fa-film-simple', 'fas fa-film-simple'],
	      defaultOption: 'far fa-film-simple',
	      keywords: 'cinema movie strip video film simple'
	    }, {
	      className: 'far fa-film-slash',
	      options: ['fat fa-film-slash', 'fal fa-film-slash', 'far fa-film-slash', 'fas fa-film-slash'],
	      defaultOption: 'far fa-film-slash',
	      keywords: 'cinema movie strip video film slash'
	    }, {
	      className: 'far fa-gif',
	      options: ['fat fa-gif', 'fal fa-gif', 'far fa-gif', 'fas fa-gif'],
	      defaultOption: 'far fa-gif',
	      keywords: 'animation gif'
	    }, {
	      className: 'far fa-head-side-headphones',
	      options: ['fat fa-head-side-headphones', 'fal fa-head-side-headphones', 'far fa-head-side-headphones', 'fas fa-head-side-headphones'],
	      defaultOption: 'far fa-head-side-headphones',
	      keywords: 'amplifier bluetooth earphone headset listen microphone music head side headphones'
	    }, {
	      className: 'far fa-headphones',
	      options: ['fat fa-headphones', 'fal fa-headphones', 'far fa-headphones', 'fas fa-headphones'],
	      defaultOption: 'far fa-headphones',
	      keywords: 'audio earbud headphone listen music sound speaker headphones'
	    }, {
	      className: 'far fa-high-definition',
	      options: ['fat fa-high-definition', 'fal fa-high-definition', 'far fa-high-definition', 'fas fa-high-definition'],
	      defaultOption: 'far fa-high-definition',
	      keywords: 'resolution retina video high definition'
	    }, {
	      className: 'far fa-microphone',
	      options: ['fat fa-microphone', 'fal fa-microphone', 'far fa-microphone', 'fas fa-microphone'],
	      defaultOption: 'far fa-microphone',
	      keywords: 'audio podcast record sing sound voice microphone'
	    }, {
	      className: 'far fa-microphone-lines',
	      options: ['fat fa-microphone-lines', 'fal fa-microphone-lines', 'far fa-microphone-lines', 'fas fa-microphone-lines'],
	      defaultOption: 'far fa-microphone-lines',
	      keywords: 'audio mic microphone music podcast record sing sound studio studio microphone voice microphone lines'
	    }, {
	      className: 'far fa-microphone-lines-slash',
	      options: ['fat fa-microphone-lines-slash', 'fal fa-microphone-lines-slash', 'far fa-microphone-lines-slash', 'fas fa-microphone-lines-slash'],
	      defaultOption: 'far fa-microphone-lines-slash',
	      keywords: 'audio disable mute podcast record sing sound voice microphone lines slash'
	    }, {
	      className: 'far fa-microphone-slash',
	      options: ['fat fa-microphone-slash', 'fal fa-microphone-slash', 'far fa-microphone-slash', 'fas fa-microphone-slash'],
	      defaultOption: 'far fa-microphone-slash',
	      keywords: 'audio disable mute podcast record sing sound voice microphone slash'
	    }, {
	      className: 'far fa-microphone-stand',
	      options: ['fat fa-microphone-stand', 'fal fa-microphone-stand', 'far fa-microphone-stand', 'fas fa-microphone-stand'],
	      defaultOption: 'far fa-microphone-stand',
	      keywords: 'audio karaoke mic microphone podcast record sing sound voice microphone stand'
	    }, {
	      className: 'far fa-photo-film',
	      options: ['fat fa-photo-film', 'fal fa-photo-film', 'far fa-photo-film', 'fas fa-photo-film'],
	      defaultOption: 'far fa-photo-film',
	      keywords: 'av film image library media photo film'
	    }, {
	      className: 'far fa-photo-film-music',
	      options: ['fat fa-photo-film-music', 'fal fa-photo-film-music', 'far fa-photo-film-music', 'fas fa-photo-film-music'],
	      defaultOption: 'far fa-photo-film-music',
	      keywords: 'media photo film music'
	    }, {
	      className: 'far fa-podcast',
	      options: ['fat fa-podcast', 'fal fa-podcast', 'far fa-podcast', 'fas fa-podcast'],
	      defaultOption: 'far fa-podcast',
	      keywords: 'audio broadcast music sound podcast'
	    }, {
	      className: 'far fa-projector',
	      options: ['fat fa-projector', 'fal fa-projector', 'far fa-projector', 'fas fa-projector'],
	      defaultOption: 'far fa-projector',
	      keywords: 'cinema keynote movie powerpoint presentation shadow puppets slides projector'
	    }, {
	      className: 'far fa-screencast',
	      options: ['fat fa-screencast', 'fal fa-screencast', 'far fa-screencast', 'fas fa-screencast'],
	      defaultOption: 'far fa-screencast',
	      keywords: 'airplay share stream screencast'
	    }, {
	      className: 'far fa-signal-stream',
	      options: ['fat fa-signal-stream', 'fal fa-signal-stream', 'far fa-signal-stream', 'fas fa-signal-stream'],
	      defaultOption: 'far fa-signal-stream',
	      keywords: 'podcast radio sisngal streaming wave wifi wireless signal stream'
	    }, {
	      className: 'far fa-signal-stream-slash',
	      options: ['fat fa-signal-stream-slash', 'fal fa-signal-stream-slash', 'far fa-signal-stream-slash', 'fas fa-signal-stream-slash'],
	      defaultOption: 'far fa-signal-stream-slash',
	      keywords: 'podcast radio sisngal streaming wave wifi wireless signal stream slash'
	    }, {
	      className: 'far fa-speaker',
	      options: ['fat fa-speaker', 'fal fa-speaker', 'far fa-speaker', 'fas fa-speaker'],
	      defaultOption: 'far fa-speaker',
	      keywords: 'audio device music sound subwoofer transducer tweeter speaker'
	    }, {
	      className: 'far fa-speakers',
	      options: ['fat fa-speakers', 'fal fa-speakers', 'far fa-speakers', 'fas fa-speakers'],
	      defaultOption: 'far fa-speakers',
	      keywords: 'audio device group music sound subwoofer transducer tweeter speakers'
	    }, {
	      className: 'far fa-square-rss',
	      options: ['fat fa-square-rss', 'fal fa-square-rss', 'far fa-square-rss', 'fas fa-square-rss'],
	      defaultOption: 'far fa-square-rss',
	      keywords: 'blog feed journal news writing square rss'
	    }, {
	      className: 'far fa-standard-definition',
	      options: ['fat fa-standard-definition', 'fal fa-standard-definition', 'far fa-standard-definition', 'fas fa-standard-definition'],
	      defaultOption: 'far fa-standard-definition',
	      keywords: 'low resolution standard definition'
	    }, {
	      className: 'far fa-star-sharp',
	      options: ['fat fa-star-sharp', 'fal fa-star-sharp', 'far fa-star-sharp', 'fas fa-star-sharp'],
	      defaultOption: 'far fa-star-sharp',
	      keywords: 'black small star critic ratings review sky star sharp'
	    }, {
	      className: 'far fa-star-sharp-half',
	      options: ['fat fa-star-sharp-half', 'fal fa-star-sharp-half', 'far fa-star-sharp-half', 'fas fa-star-sharp-half'],
	      defaultOption: 'far fa-star-sharp-half',
	      keywords: 'critic ratings review sky star sharp half'
	    }, {
	      className: 'far fa-star-sharp-half-stroke',
	      options: ['fat fa-star-sharp-half-stroke', 'fal fa-star-sharp-half-stroke', 'far fa-star-sharp-half-stroke', 'fas fa-star-sharp-half-stroke'],
	      defaultOption: 'far fa-star-sharp-half-stroke',
	      keywords: 'critic ratings review sky star sharp half stroke'
	    }, {
	      className: 'far fa-ticket',
	      options: ['fat fa-ticket', 'fal fa-ticket', 'far fa-ticket', 'fas fa-ticket'],
	      defaultOption: 'far fa-ticket',
	      keywords: 'admission admission tickets movie pass support ticket ticket'
	    }, {
	      className: 'far fa-tower-broadcast',
	      options: ['fat fa-tower-broadcast', 'fal fa-tower-broadcast', 'far fa-tower-broadcast', 'fas fa-tower-broadcast'],
	      defaultOption: 'far fa-tower-broadcast',
	      keywords: 'airwaves antenna radio reception waves tower broadcast'
	    }, {
	      className: 'far fa-tv',
	      options: ['fat fa-tv', 'fal fa-tv', 'far fa-tv', 'fas fa-tv'],
	      defaultOption: 'far fa-tv',
	      keywords: 'computer display monitor television tv'
	    }, {
	      className: 'far fa-tv-retro',
	      options: ['fat fa-tv-retro', 'fal fa-tv-retro', 'far fa-tv-retro', 'fas fa-tv-retro'],
	      defaultOption: 'far fa-tv-retro',
	      keywords: 'computer display monitor television tv video tv retro'
	    }, {
	      className: 'far fa-video',
	      options: ['fat fa-video', 'fal fa-video', 'far fa-video', 'fas fa-video'],
	      defaultOption: 'far fa-video',
	      keywords: 'camera film movie record video camera video'
	    }, {
	      className: 'far fa-video-arrow-down-left',
	      options: ['fat fa-video-arrow-down-left', 'fal fa-video-arrow-down-left', 'far fa-video-arrow-down-left', 'fas fa-video-arrow-down-left'],
	      defaultOption: 'far fa-video-arrow-down-left',
	      keywords: 'download film import movie video arrow down left'
	    }, {
	      className: 'far fa-video-arrow-up-right',
	      options: ['fat fa-video-arrow-up-right', 'fal fa-video-arrow-up-right', 'far fa-video-arrow-up-right', 'fas fa-video-arrow-up-right'],
	      defaultOption: 'far fa-video-arrow-up-right',
	      keywords: 'export film movie send video arrow up right'
	    }, {
	      className: 'far fa-video-plus',
	      options: ['fat fa-video-plus', 'fal fa-video-plus', 'far fa-video-plus', 'fas fa-video-plus'],
	      defaultOption: 'far fa-video-plus',
	      keywords: 'add create film new positive record video video plus'
	    }, {
	      className: 'far fa-video-slash',
	      options: ['fat fa-video-slash', 'fal fa-video-slash', 'far fa-video-slash', 'fas fa-video-slash'],
	      defaultOption: 'far fa-video-slash',
	      keywords: 'add create film new positive record video video slash'
	    }, {
	      className: 'far fa-waveform',
	      options: ['fat fa-waveform', 'fal fa-waveform', 'far fa-waveform', 'fas fa-waveform'],
	      defaultOption: 'far fa-waveform',
	      keywords: 'amplitude sound soundwave waveform'
	    }, {
	      className: 'far fa-waveform-lines',
	      options: ['fat fa-waveform-lines', 'fal fa-waveform-lines', 'far fa-waveform-lines', 'fas fa-waveform-lines'],
	      defaultOption: 'far fa-waveform-lines',
	      keywords: 'amplitude sound soundwave waveform lines'
	    }]
	  }, {
	    id: 'food-beverage',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_FOOD_BEVERAGE'),
	    items: [{
	      className: 'far fa-apple-whole',
	      options: ['fat fa-apple-whole', 'fal fa-apple-whole', 'far fa-apple-whole', 'fas fa-apple-whole'],
	      defaultOption: 'far fa-apple-whole',
	      keywords: 'apple fall fruit fuji green green apple macintosh orchard red red apple seasonal vegan apple whole'
	    }, {
	      className: 'far fa-bacon',
	      options: ['fat fa-bacon', 'fal fa-bacon', 'far fa-bacon', 'fas fa-bacon'],
	      defaultOption: 'far fa-bacon',
	      keywords: 'bacon blt breakfast food ham lard meat pancetta pork rasher bacon'
	    }, {
	      className: 'far fa-bagel',
	      options: ['fat fa-bagel', 'fal fa-bagel', 'far fa-bagel', 'fas fa-bagel'],
	      defaultOption: 'far fa-bagel',
	      keywords: 'bagel bakery breakfast cream cheese schmear toast bagel'
	    }, {
	      className: 'far fa-baguette',
	      options: ['fat fa-baguette', 'fal fa-baguette', 'far fa-baguette', 'fas fa-baguette'],
	      defaultOption: 'far fa-baguette',
	      keywords: 'baguette bread french loaf sourdough baguette'
	    }, {
	      className: 'far fa-beer-mug',
	      options: ['fat fa-beer-mug', 'fal fa-beer-mug', 'far fa-beer-mug', 'fas fa-beer-mug'],
	      defaultOption: 'far fa-beer-mug',
	      keywords: 'alcohol ale bar beer beer mug beverage brew brewery drink foam lager mug stein beer mug'
	    }, {
	      className: 'far fa-beer-mug-empty',
	      options: ['fat fa-beer-mug-empty', 'fal fa-beer-mug-empty', 'far fa-beer-mug-empty', 'fas fa-beer-mug-empty'],
	      defaultOption: 'far fa-beer-mug-empty',
	      keywords: 'alcohol ale bar beverage brew brewery drink foam lager liquor mug stein beer mug empty'
	    }, {
	      className: 'far fa-blender',
	      options: ['fat fa-blender', 'fal fa-blender', 'far fa-blender', 'fas fa-blender'],
	      defaultOption: 'far fa-blender',
	      keywords: 'cocktail milkshake mixer puree smoothie blender'
	    }, {
	      className: 'far fa-bone',
	      options: ['fat fa-bone', 'fal fa-bone', 'far fa-bone', 'fas fa-bone'],
	      defaultOption: 'far fa-bone',
	      keywords: 'bone calcium dog skeletal skeleton tibia bone'
	    }, {
	      className: 'far fa-bowl-chopsticks',
	      options: ['fat fa-bowl-chopsticks', 'fal fa-bowl-chopsticks', 'far fa-bowl-chopsticks', 'fas fa-bowl-chopsticks'],
	      defaultOption: 'far fa-bowl-chopsticks',
	      keywords: 'chopsticks noodles ramen steaming bowl chopsticks'
	    }, {
	      className: 'far fa-bowl-chopsticks-noodles',
	      options: ['fat fa-bowl-chopsticks-noodles', 'fal fa-bowl-chopsticks-noodles', 'far fa-bowl-chopsticks-noodles', 'fas fa-bowl-chopsticks-noodles'],
	      defaultOption: 'far fa-bowl-chopsticks-noodles',
	      keywords: 'bowl chopsticks noodle noodles ramen steaming steaming bowl bowl chopsticks noodles'
	    }, {
	      className: 'far fa-bowl-hot',
	      options: ['fat fa-bowl-hot', 'fal fa-bowl-hot', 'far fa-bowl-hot', 'fas fa-bowl-hot'],
	      defaultOption: 'far fa-bowl-hot',
	      keywords: 'bisque bouillon bowl broth chicken chowder gazpacho ramen stew bowl hot'
	    }, {
	      className: 'far fa-bowl-rice',
	      options: ['fat fa-bowl-rice', 'fal fa-bowl-rice', 'far fa-bowl-rice', 'fas fa-bowl-rice'],
	      defaultOption: 'far fa-bowl-rice',
	      keywords: 'boiled cooked cooked rice rice steamed bowl rice'
	    }, {
	      className: 'far fa-bowl-scoop',
	      options: ['fat fa-bowl-scoop', 'fal fa-bowl-scoop', 'far fa-bowl-scoop', 'fas fa-bowl-scoop'],
	      defaultOption: 'far fa-bowl-scoop',
	      keywords: 'dessert ice cream scoop shaved ice sherbert sherbet sorbet bowl scoop'
	    }, {
	      className: 'far fa-bowl-scoops',
	      options: ['fat fa-bowl-scoops', 'fal fa-bowl-scoops', 'far fa-bowl-scoops', 'fas fa-bowl-scoops'],
	      defaultOption: 'far fa-bowl-scoops',
	      keywords: 'dessert ice cream scoop shaved ice sherbert sherbet sorbet bowl scoops'
	    }, {
	      className: 'far fa-bowl-spoon',
	      options: ['fat fa-bowl-spoon', 'fal fa-bowl-spoon', 'far fa-bowl-spoon', 'fas fa-bowl-spoon'],
	      defaultOption: 'far fa-bowl-spoon',
	      keywords: 'breakfast cereal congee oatmeal porridge bowl spoon'
	    }, {
	      className: 'far fa-bread-loaf',
	      options: ['fat fa-bread-loaf', 'fal fa-bread-loaf', 'far fa-bread-loaf', 'fas fa-bread-loaf'],
	      defaultOption: 'far fa-bread-loaf',
	      keywords: 'bake bakery baking bread dough flour gluten grain loaf sandwich sourdough toast wheat yeast bread loaf'
	    }, {
	      className: 'far fa-bread-slice',
	      options: ['fat fa-bread-slice', 'fal fa-bread-slice', 'far fa-bread-slice', 'fas fa-bread-slice'],
	      defaultOption: 'far fa-bread-slice',
	      keywords: 'bake bakery baking dough flour gluten grain sandwich sourdough toast wheat yeast bread slice'
	    }, {
	      className: 'far fa-bread-slice-butter',
	      options: ['fat fa-bread-slice-butter', 'fal fa-bread-slice-butter', 'far fa-bread-slice-butter', 'fas fa-bread-slice-butter'],
	      defaultOption: 'far fa-bread-slice-butter',
	      keywords: 'bread breakfast butter toast bread slice butter'
	    }, {
	      className: 'far fa-burger',
	      options: ['fat fa-burger', 'fal fa-burger', 'far fa-burger', 'fas fa-burger'],
	      defaultOption: 'far fa-burger',
	      keywords: 'bacon beef burger burger king cheeseburger fast food grill ground beef mcdonalds sandwich burger'
	    }, {
	      className: 'far fa-burger-cheese',
	      options: ['fat fa-burger-cheese', 'fal fa-burger-cheese', 'far fa-burger-cheese', 'fas fa-burger-cheese'],
	      defaultOption: 'far fa-burger-cheese',
	      keywords: 'bacon beef burger burger king fast food grill ground beef hamburger mcdonalds sandwich slider wendys white castle burger cheese'
	    }, {
	      className: 'far fa-burger-fries',
	      options: ['fat fa-burger-fries', 'fal fa-burger-fries', 'far fa-burger-fries', 'fas fa-burger-fries'],
	      defaultOption: 'far fa-burger-fries',
	      keywords: 'chips fast food french fries junk food sandwich takeout burger fries'
	    }, {
	      className: 'far fa-burger-glass',
	      options: ['fat fa-burger-glass', 'fal fa-burger-glass', 'far fa-burger-glass', 'fas fa-burger-glass'],
	      defaultOption: 'far fa-burger-glass',
	      keywords: 'beer fast food junk food sandwich soda takeout burger glass'
	    }, {
	      className: 'far fa-burger-lettuce',
	      options: ['fat fa-burger-lettuce', 'fal fa-burger-lettuce', 'far fa-burger-lettuce', 'fas fa-burger-lettuce'],
	      defaultOption: 'far fa-burger-lettuce',
	      keywords: 'burger fast food grill sandwich vegetables veggie burger burger lettuce'
	    }, {
	      className: 'far fa-burger-soda',
	      options: ['fat fa-burger-soda', 'fal fa-burger-soda', 'far fa-burger-soda', 'fas fa-burger-soda'],
	      defaultOption: 'far fa-burger-soda',
	      keywords: 'bacon beef cheeseburger fast food grill ground beef hamburger junk food pop sandwich slider burger soda'
	    }, {
	      className: 'far fa-burrito',
	      options: ['fat fa-burrito', 'fal fa-burrito', 'far fa-burrito', 'fas fa-burrito'],
	      defaultOption: 'far fa-burrito',
	      keywords: 'beans breakfast burrito chimichanga mexican salsa taco tortilla wrap burrito'
	    }, {
	      className: 'far fa-butter',
	      options: ['fat fa-butter', 'fal fa-butter', 'far fa-butter', 'fas fa-butter'],
	      defaultOption: 'far fa-butter',
	      keywords: 'butter dairy margarine spread butter'
	    }, {
	      className: 'far fa-cake-candles',
	      options: ['fat fa-cake-candles', 'fal fa-cake-candles', 'far fa-cake-candles', 'fas fa-cake-candles'],
	      defaultOption: 'far fa-cake-candles',
	      keywords: 'anniversary bakery birthday birthday cake cake candles celebration dessert frosting holiday party pastry sweet cake candles'
	    }, {
	      className: 'far fa-cake-slice',
	      options: ['fat fa-cake-slice', 'fal fa-cake-slice', 'far fa-cake-slice', 'fas fa-cake-slice'],
	      defaultOption: 'far fa-cake-slice',
	      keywords: 'birthday cake dessert frosting icing cake slice'
	    }, {
	      className: 'far fa-can-food',
	      options: ['fat fa-can-food', 'fal fa-can-food', 'far fa-can-food', 'fas fa-can-food'],
	      defaultOption: 'far fa-can-food',
	      keywords: 'canned ration soup tin can food'
	    }, {
	      className: 'far fa-candy',
	      options: ['fat fa-candy', 'fal fa-candy', 'far fa-candy', 'fas fa-candy'],
	      defaultOption: 'far fa-candy',
	      keywords: 'candy sugar sweet wrapper candy'
	    }, {
	      className: 'far fa-candy-bar',
	      options: ['fat fa-candy-bar', 'fal fa-candy-bar', 'far fa-candy-bar', 'fas fa-candy-bar'],
	      defaultOption: 'far fa-candy-bar',
	      keywords: 'candy chocolate hershey candy bar'
	    }, {
	      className: 'far fa-candy-cane',
	      options: ['fat fa-candy-cane', 'fal fa-candy-cane', 'far fa-candy-cane', 'fas fa-candy-cane'],
	      defaultOption: 'far fa-candy-cane',
	      keywords: 'candy christmas holiday mint peppermint striped xmas candy cane'
	    }, {
	      className: 'far fa-candy-corn',
	      options: ['fat fa-candy-corn', 'fal fa-candy-corn', 'far fa-candy-corn', 'fas fa-candy-corn'],
	      defaultOption: 'far fa-candy-corn',
	      keywords: 'halloween holiday sugar triangles candy corn'
	    }, {
	      className: 'far fa-carrot',
	      options: ['fat fa-carrot', 'fal fa-carrot', 'far fa-carrot', 'fas fa-carrot'],
	      defaultOption: 'far fa-carrot',
	      keywords: 'bugs bunny carrot food orange vegan vegetable carrot'
	    }, {
	      className: 'far fa-champagne-glass',
	      options: ['fat fa-champagne-glass', 'fal fa-champagne-glass', 'far fa-champagne-glass', 'fas fa-champagne-glass'],
	      defaultOption: 'far fa-champagne-glass',
	      keywords: 'alcohol bar beverage celebration champagne drink holiday party champagne glass'
	    }, {
	      className: 'far fa-champagne-glasses',
	      options: ['fat fa-champagne-glasses', 'fal fa-champagne-glasses', 'far fa-champagne-glasses', 'fas fa-champagne-glasses'],
	      defaultOption: 'far fa-champagne-glasses',
	      keywords: 'alcohol bar beverage celebrate celebration champagne clink clinking glasses drink glass holiday new year s eve party toast champagne glasses'
	    }, {
	      className: 'far fa-cheese',
	      options: ['fat fa-cheese', 'fal fa-cheese', 'far fa-cheese', 'fas fa-cheese'],
	      defaultOption: 'far fa-cheese',
	      keywords: 'cheddar curd gouda melt parmesan sandwich swiss wedge cheese'
	    }, {
	      className: 'far fa-cheese-swiss',
	      options: ['fat fa-cheese-swiss', 'fal fa-cheese-swiss', 'far fa-cheese-swiss', 'fas fa-cheese-swiss'],
	      defaultOption: 'far fa-cheese-swiss',
	      keywords: 'cheddar cheese cheese wedge curd gouda melt parmesan sandwich swiss wedge cheese swiss'
	    }, {
	      className: 'far fa-chopsticks',
	      options: ['fat fa-chopsticks', 'fal fa-chopsticks', 'far fa-chopsticks', 'fas fa-chopsticks'],
	      defaultOption: 'far fa-chopsticks',
	      keywords: 'bamboo chopsticks utensils chopsticks'
	    }, {
	      className: 'far fa-cloud-meatball',
	      options: ['fat fa-cloud-meatball', 'fal fa-cloud-meatball', 'far fa-cloud-meatball', 'fas fa-cloud-meatball'],
	      defaultOption: 'far fa-cloud-meatball',
	      keywords: 'fldsmdfr food spaghetti storm cloud meatball'
	    }, {
	      className: 'far fa-coffee-bean',
	      options: ['fat fa-coffee-bean', 'fal fa-coffee-bean', 'far fa-coffee-bean', 'fas fa-coffee-bean'],
	      defaultOption: 'far fa-coffee-bean',
	      keywords: 'berry brew coffee espresso java coffee bean'
	    }, {
	      className: 'far fa-coffee-beans',
	      options: ['fat fa-coffee-beans', 'fal fa-coffee-beans', 'far fa-coffee-beans', 'fas fa-coffee-beans'],
	      defaultOption: 'far fa-coffee-beans',
	      keywords: 'berry brew coffee espresso java coffee beans'
	    }, {
	      className: 'far fa-coffee-pot',
	      options: ['fat fa-coffee-pot', 'fal fa-coffee-pot', 'far fa-coffee-pot', 'fas fa-coffee-pot'],
	      defaultOption: 'far fa-coffee-pot',
	      keywords: 'beverage breakfast brew cafe carafe drink morning coffee pot'
	    }, {
	      className: 'far fa-cookie',
	      options: ['fat fa-cookie', 'fal fa-cookie', 'far fa-cookie', 'fas fa-cookie'],
	      defaultOption: 'far fa-cookie',
	      keywords: 'baked good chips chocolate cookie dessert eat snack sweet treat cookie'
	    }, {
	      className: 'far fa-corn',
	      options: ['fat fa-corn', 'fal fa-corn', 'far fa-corn', 'fas fa-corn'],
	      defaultOption: 'far fa-corn',
	      keywords: 'cob corn ear ear of corn fall grain kernel maize maze popcorn corn'
	    }, {
	      className: 'far fa-crab',
	      options: ['fat fa-crab', 'fal fa-crab', 'far fa-crab', 'fas fa-crab'],
	      defaultOption: 'far fa-crab',
	      keywords: 'cancer claws crabmeat crustacean seafood shellfish zodiac crab'
	    }, {
	      className: 'far fa-crate-apple',
	      options: ['fat fa-crate-apple', 'fal fa-crate-apple', 'far fa-crate-apple', 'fas fa-crate-apple'],
	      defaultOption: 'far fa-crate-apple',
	      keywords: 'bushel container fall fruit fuji macintosh orchard peck seasonal crate apple'
	    }, {
	      className: 'far fa-croissant',
	      options: ['fat fa-croissant', 'fal fa-croissant', 'far fa-croissant', 'fas fa-croissant'],
	      defaultOption: 'far fa-croissant',
	      keywords: 'bakery bread breakfast brioche butter crescent croissant dough food french gluten pastry roll croissant'
	    }, {
	      className: 'far fa-cup-straw',
	      options: ['fat fa-cup-straw', 'fal fa-cup-straw', 'far fa-cup-straw', 'fas fa-cup-straw'],
	      defaultOption: 'far fa-cup-straw',
	      keywords: 'caffeine fast food orange mocha frappuccino pop soda soft drink takeout cup straw'
	    }, {
	      className: 'far fa-cup-straw-swoosh',
	      options: ['fat fa-cup-straw-swoosh', 'fal fa-cup-straw-swoosh', 'far fa-cup-straw-swoosh', 'fas fa-cup-straw-swoosh'],
	      defaultOption: 'far fa-cup-straw-swoosh',
	      keywords: 'caffeine fast food orange mocha frappuccino pop soda soft drink takeout cup straw swoosh'
	    }, {
	      className: 'far fa-cup-togo',
	      options: ['fat fa-cup-togo', 'fal fa-cup-togo', 'far fa-cup-togo', 'fas fa-cup-togo'],
	      defaultOption: 'far fa-cup-togo',
	      keywords: 'beverage breakfast cafe drink latte morning mug starbucks takeout tea travel cup togo'
	    }, {
	      className: 'far fa-cupcake',
	      options: ['fat fa-cupcake', 'fal fa-cupcake', 'far fa-cupcake', 'fas fa-cupcake'],
	      defaultOption: 'far fa-cupcake',
	      keywords: 'birthday dessert frosting sweet cupcake'
	    }, {
	      className: 'far fa-custard',
	      options: ['fat fa-custard', 'fal fa-custard', 'far fa-custard', 'fas fa-custard'],
	      defaultOption: 'far fa-custard',
	      keywords: 'caramel custard dessert sweet custard'
	    }, {
	      className: 'far fa-donut',
	      options: ['fat fa-donut', 'fal fa-donut', 'far fa-donut', 'fas fa-donut'],
	      defaultOption: 'far fa-donut',
	      keywords: 'donut doughnut frosting homer simpson jimmies sprinkles donut'
	    }, {
	      className: 'far fa-drumstick',
	      options: ['fat fa-drumstick', 'fal fa-drumstick', 'far fa-drumstick', 'fas fa-drumstick'],
	      defaultOption: 'far fa-drumstick',
	      keywords: 'bone chicken drumstick leg meat poultry poultry leg turkey drumstick'
	    }, {
	      className: 'far fa-drumstick-bite',
	      options: ['fat fa-drumstick-bite', 'fal fa-drumstick-bite', 'far fa-drumstick-bite', 'fas fa-drumstick-bite'],
	      defaultOption: 'far fa-drumstick-bite',
	      keywords: 'bone chicken leg meat poultry turkey drumstick bite'
	    }, {
	      className: 'far fa-egg',
	      options: ['fat fa-egg', 'fal fa-egg', 'far fa-egg', 'fas fa-egg'],
	      defaultOption: 'far fa-egg',
	      keywords: 'breakfast chicken easter egg food shell yolk egg'
	    }, {
	      className: 'far fa-egg-fried',
	      options: ['fat fa-egg-fried', 'fal fa-egg-fried', 'far fa-egg-fried', 'fas fa-egg-fried'],
	      defaultOption: 'far fa-egg-fried',
	      keywords: 'breakfast chicken yolk egg fried'
	    }, {
	      className: 'far fa-falafel',
	      options: ['fat fa-falafel', 'fal fa-falafel', 'far fa-falafel', 'fas fa-falafel'],
	      defaultOption: 'far fa-falafel',
	      keywords: 'chickpea falafel garbanzo meatball falafel'
	    }, {
	      className: 'far fa-fish',
	      options: ['fat fa-fish', 'fal fa-fish', 'far fa-fish', 'fas fa-fish'],
	      defaultOption: 'far fa-fish',
	      keywords: 'pisces fauna fish gold seafood swimming zodiac fish'
	    }, {
	      className: 'far fa-fish-bones',
	      options: ['fat fa-fish-bones', 'fal fa-fish-bones', 'far fa-fish-bones', 'fas fa-fish-bones'],
	      defaultOption: 'far fa-fish-bones',
	      keywords: 'dead fish skeleton fish bones'
	    }, {
	      className: 'far fa-fish-cooked',
	      options: ['fat fa-fish-cooked', 'fal fa-fish-cooked', 'far fa-fish-cooked', 'fas fa-fish-cooked'],
	      defaultOption: 'far fa-fish-cooked',
	      keywords: 'grilled health salmon seafood tuna fish cooked'
	    }, {
	      className: 'far fa-flask',
	      options: ['fat fa-flask', 'fal fa-flask', 'far fa-flask', 'fas fa-flask'],
	      defaultOption: 'far fa-flask',
	      keywords: 'beaker experimental labs science flask'
	    }, {
	      className: 'far fa-flask-round-poison',
	      options: ['fat fa-flask-round-poison', 'fal fa-flask-round-poison', 'far fa-flask-round-poison', 'fas fa-flask-round-poison'],
	      defaultOption: 'far fa-flask-round-poison',
	      keywords: 'beverage container drink halloween health holiday power flask round poison'
	    }, {
	      className: 'far fa-flask-round-potion',
	      options: ['fat fa-flask-round-potion', 'fal fa-flask-round-potion', 'far fa-flask-round-potion', 'fas fa-flask-round-potion'],
	      defaultOption: 'far fa-flask-round-potion',
	      keywords: 'dungeons & dragons alert beaker beverage container d&d danger dangerous deadly death dnd drink fantasy halloween heal health holiday magic mana science flask round potion'
	    }, {
	      className: 'far fa-flatbread',
	      options: ['fat fa-flatbread', 'fal fa-flatbread', 'far fa-flatbread', 'fas fa-flatbread'],
	      defaultOption: 'far fa-flatbread',
	      keywords: 'arepa flatbread lavash naan pita flatbread'
	    }, {
	      className: 'far fa-flatbread-stuffed',
	      options: ['fat fa-flatbread-stuffed', 'fal fa-flatbread-stuffed', 'far fa-flatbread-stuffed', 'fas fa-flatbread-stuffed'],
	      defaultOption: 'far fa-flatbread-stuffed',
	      keywords: 'chickpea falafel garbanzo gyro kebab pita sandwich flatbread stuffed'
	    }, {
	      className: 'far fa-fondue-pot',
	      options: ['fat fa-fondue-pot', 'fal fa-fondue-pot', 'far fa-fondue-pot', 'fas fa-fondue-pot'],
	      defaultOption: 'far fa-fondue-pot',
	      keywords: 'cheese chocolate fondu fondue melted pot swiss fondue pot'
	    }, {
	      className: 'far fa-french-fries',
	      options: ['fat fa-french-fries', 'fal fa-french-fries', 'far fa-french-fries', 'fas fa-french-fries'],
	      defaultOption: 'far fa-french-fries',
	      keywords: 'chips fast food french french fries fried fries ketchup potato poutine french fries'
	    }, {
	      className: 'far fa-gingerbread-man',
	      options: ['fat fa-gingerbread-man', 'fal fa-gingerbread-man', 'far fa-gingerbread-man', 'fas fa-gingerbread-man'],
	      defaultOption: 'far fa-gingerbread-man',
	      keywords: 'cookie decoration frosting holiday gingerbread man'
	    }, {
	      className: 'far fa-glass',
	      options: ['fat fa-glass', 'fal fa-glass', 'far fa-glass', 'fas fa-glass'],
	      defaultOption: 'far fa-glass',
	      keywords: 'alcohol beverage drink glass glass of milk milk water glass'
	    }, {
	      className: 'far fa-glass-citrus',
	      options: ['fat fa-glass-citrus', 'fal fa-glass-citrus', 'far fa-glass-citrus', 'fas fa-glass-citrus'],
	      defaultOption: 'far fa-glass-citrus',
	      keywords: 'cocktail drink lemonade refreshing water glass citrus'
	    }, {
	      className: 'far fa-glass-empty',
	      options: ['fat fa-glass-empty', 'fal fa-glass-empty', 'far fa-glass-empty', 'fas fa-glass-empty'],
	      defaultOption: 'far fa-glass-empty',
	      keywords: 'drink water glass empty'
	    }, {
	      className: 'far fa-glass-half',
	      options: ['fat fa-glass-half', 'fal fa-glass-half', 'far fa-glass-half', 'fas fa-glass-half'],
	      defaultOption: 'far fa-glass-half',
	      keywords: 'drink optimism pessimism water glass half'
	    }, {
	      className: 'far fa-hat-chef',
	      options: ['fat fa-hat-chef', 'fal fa-hat-chef', 'far fa-hat-chef', 'fas fa-hat-chef'],
	      defaultOption: 'far fa-hat-chef',
	      keywords: 'cook cuisine culinary dining kitchen hat chef'
	    }, {
	      className: 'far fa-honey-pot',
	      options: ['fat fa-honey-pot', 'fal fa-honey-pot', 'far fa-honey-pot', 'fas fa-honey-pot'],
	      defaultOption: 'far fa-honey-pot',
	      keywords: 'winnie the pooh drip honey jar sweet honey pot'
	    }, {
	      className: 'far fa-hotdog',
	      options: ['fat fa-hotdog', 'fal fa-hotdog', 'far fa-hotdog', 'fas fa-hotdog'],
	      defaultOption: 'far fa-hotdog',
	      keywords: 'bun chili frankfurt frankfurter hot dog hotdog kosher polish sandwich sausage vienna weiner hotdog'
	    }, {
	      className: 'far fa-ice-cream',
	      options: ['fat fa-ice-cream', 'fal fa-ice-cream', 'far fa-ice-cream', 'fas fa-ice-cream'],
	      defaultOption: 'far fa-ice-cream',
	      keywords: 'chocolate cone cream dessert frozen ice ice cream scoop sorbet sweet vanilla yogurt ice cream'
	    }, {
	      className: 'far fa-jug',
	      options: ['fat fa-jug', 'fal fa-jug', 'far fa-jug', 'fas fa-jug'],
	      defaultOption: 'far fa-jug',
	      keywords: 'beverage bottle drink moonshine pitcher western jug'
	    }, {
	      className: 'far fa-lemon',
	      options: ['fat fa-lemon', 'fal fa-lemon', 'far fa-lemon', 'fas fa-lemon'],
	      defaultOption: 'far fa-lemon',
	      keywords: 'citrus fruit lemon lemonade lime tart lemon'
	    }, {
	      className: 'far fa-lobster',
	      options: ['fat fa-lobster', 'fal fa-lobster', 'far fa-lobster', 'fas fa-lobster'],
	      defaultOption: 'far fa-lobster',
	      keywords: 'bisque claes crustacean lobster seafood shellfish lobster'
	    }, {
	      className: 'far fa-lollipop',
	      options: ['fat fa-lollipop', 'fal fa-lollipop', 'far fa-lollipop', 'fas fa-lollipop'],
	      defaultOption: 'far fa-lollipop',
	      keywords: 'candy lollypop sucker sugar sweet swirl lollipop'
	    }, {
	      className: 'far fa-martini-glass',
	      options: ['fat fa-martini-glass', 'fal fa-martini-glass', 'far fa-martini-glass', 'fas fa-martini-glass'],
	      defaultOption: 'far fa-martini-glass',
	      keywords: 'alcohol bar beverage cocktail cocktail glass drink glass liquor martini glass'
	    }, {
	      className: 'far fa-martini-glass-citrus',
	      options: ['fat fa-martini-glass-citrus', 'fal fa-martini-glass-citrus', 'far fa-martini-glass-citrus', 'fas fa-martini-glass-citrus'],
	      defaultOption: 'far fa-martini-glass-citrus',
	      keywords: 'alcohol beverage drink gin glass margarita martini vodka martini glass citrus'
	    }, {
	      className: 'far fa-martini-glass-empty',
	      options: ['fat fa-martini-glass-empty', 'fal fa-martini-glass-empty', 'far fa-martini-glass-empty', 'fas fa-martini-glass-empty'],
	      defaultOption: 'far fa-martini-glass-empty',
	      keywords: 'alcohol bar beverage drink liquor martini glass empty'
	    }, {
	      className: 'far fa-meat',
	      options: ['fat fa-meat', 'fal fa-meat', 'far fa-meat', 'fas fa-meat'],
	      defaultOption: 'far fa-meat',
	      keywords: 'beef bone ham meat meat on bone mutton pork veal meat'
	    }, {
	      className: 'far fa-mug',
	      options: ['fat fa-mug', 'fal fa-mug', 'far fa-mug', 'fas fa-mug'],
	      defaultOption: 'far fa-mug',
	      keywords: 'coffee cup drink hot chocolate tea mug'
	    }, {
	      className: 'far fa-mug-hot',
	      options: ['fat fa-mug-hot', 'fal fa-mug-hot', 'far fa-mug-hot', 'fas fa-mug-hot'],
	      defaultOption: 'far fa-mug-hot',
	      keywords: 'beverage caliente cocoa coffee cup drink holiday hot hot beverage hot chocolate steam steaming tea warmth mug hot'
	    }, {
	      className: 'far fa-mug-marshmallows',
	      options: ['fat fa-mug-marshmallows', 'fal fa-mug-marshmallows', 'far fa-mug-marshmallows', 'fas fa-mug-marshmallows'],
	      defaultOption: 'far fa-mug-marshmallows',
	      keywords: 'cocoa coffee cup drink hot chocolate seasonal sweet warmth mug marshmallows'
	    }, {
	      className: 'far fa-mug-saucer',
	      options: ['fat fa-mug-saucer', 'fal fa-mug-saucer', 'far fa-mug-saucer', 'fas fa-mug-saucer'],
	      defaultOption: 'far fa-mug-saucer',
	      keywords: 'beverage breakfast cafe drink fall morning mug seasonal tea mug saucer'
	    }, {
	      className: 'far fa-mug-tea',
	      options: ['fat fa-mug-tea', 'fal fa-mug-tea', 'far fa-mug-tea', 'fas fa-mug-tea'],
	      defaultOption: 'far fa-mug-tea',
	      keywords: 'brew drink herbal oolong mug tea'
	    }, {
	      className: 'far fa-mug-tea-saucer',
	      options: ['fat fa-mug-tea-saucer', 'fal fa-mug-tea-saucer', 'far fa-mug-tea-saucer', 'fas fa-mug-tea-saucer'],
	      defaultOption: 'far fa-mug-tea-saucer',
	      keywords: 'afternoon cuppa saucer mug tea saucer'
	    }, {
	      className: 'far fa-pan-food',
	      options: ['fat fa-pan-food', 'fal fa-pan-food', 'far fa-pan-food', 'fas fa-pan-food'],
	      defaultOption: 'far fa-pan-food',
	      keywords: 'casserole paella pan shallow stew pan food'
	    }, {
	      className: 'far fa-pan-frying',
	      options: ['fat fa-pan-frying', 'fal fa-pan-frying', 'far fa-pan-frying', 'fas fa-pan-frying'],
	      defaultOption: 'far fa-pan-frying',
	      keywords: 'breakfast cook egg fry pan frying'
	    }, {
	      className: 'far fa-pancakes',
	      options: ['fat fa-pancakes', 'fal fa-pancakes', 'far fa-pancakes', 'fas fa-pancakes'],
	      defaultOption: 'far fa-pancakes',
	      keywords: 'breakfast crepe flapjack hotcake pancake stack syrup pancakes'
	    }, {
	      className: 'far fa-pepper-hot',
	      options: ['fat fa-pepper-hot', 'fal fa-pepper-hot', 'far fa-pepper-hot', 'fas fa-pepper-hot'],
	      defaultOption: 'far fa-pepper-hot',
	      keywords: 'buffalo wings capsicum chili chilli habanero hot hot pepper jalapeno mexican pepper spicy tabasco vegetable pepper hot'
	    }, {
	      className: 'far fa-pie',
	      options: ['fat fa-pie', 'fal fa-pie', 'far fa-pie', 'fas fa-pie'],
	      defaultOption: 'far fa-pie',
	      keywords: 'apple bakery cake crust dessert filling fruit meat pastry pie pumpkin tart pie'
	    }, {
	      className: 'far fa-pizza',
	      options: ['fat fa-pizza', 'fal fa-pizza', 'far fa-pizza', 'fas fa-pizza'],
	      defaultOption: 'far fa-pizza',
	      keywords: 'cheese chicago italian mozzarella new york pepperoni pie pizza slice teenage mutant ninja turtles tomato pizza'
	    }, {
	      className: 'far fa-pizza-slice',
	      options: ['fat fa-pizza-slice', 'fal fa-pizza-slice', 'far fa-pizza-slice', 'fas fa-pizza-slice'],
	      defaultOption: 'far fa-pizza-slice',
	      keywords: 'cheese chicago italian mozzarella new york pepperoni pie slice teenage mutant ninja turtles tomato pizza slice'
	    }, {
	      className: 'far fa-popcorn',
	      options: ['fat fa-popcorn', 'fal fa-popcorn', 'far fa-popcorn', 'fas fa-popcorn'],
	      defaultOption: 'far fa-popcorn',
	      keywords: 'bucket butter corn junk food kernels movie popcor popcorn snack theater popcorn'
	    }, {
	      className: 'far fa-popsicle',
	      options: ['fat fa-popsicle', 'fal fa-popsicle', 'far fa-popsicle', 'fas fa-popsicle'],
	      defaultOption: 'far fa-popsicle',
	      keywords: 'dessert frozen ice lolly lollipop lolly popsicle sweet popsicle'
	    }, {
	      className: 'far fa-pot-food',
	      options: ['fat fa-pot-food', 'fal fa-pot-food', 'far fa-pot-food', 'fas fa-pot-food'],
	      defaultOption: 'far fa-pot-food',
	      keywords: 'food pot soup stew pot food'
	    }, {
	      className: 'far fa-pretzel',
	      options: ['fat fa-pretzel', 'fal fa-pretzel', 'far fa-pretzel', 'fas fa-pretzel'],
	      defaultOption: 'far fa-pretzel',
	      keywords: 'bakery convoluted dough knot pretzel twisted pretzel'
	    }, {
	      className: 'far fa-pumpkin',
	      options: ['fat fa-pumpkin', 'fal fa-pumpkin', 'far fa-pumpkin', 'fas fa-pumpkin'],
	      defaultOption: 'far fa-pumpkin',
	      keywords: 'autumn gourd halloween harvest squash thanksgiving vegetable pumpkin'
	    }, {
	      className: 'far fa-salad',
	      options: ['fat fa-salad', 'fal fa-salad', 'far fa-salad', 'fas fa-salad'],
	      defaultOption: 'far fa-salad',
	      keywords: 'bowl food green green salad health lettuce salad spinach vegan vegetable vegetarian salad'
	    }, {
	      className: 'far fa-salt-shaker',
	      options: ['fat fa-salt-shaker', 'fal fa-salt-shaker', 'far fa-salt-shaker', 'fas fa-salt-shaker'],
	      defaultOption: 'far fa-salt-shaker',
	      keywords: 'condiment pepper salt salt shaker'
	    }, {
	      className: 'far fa-sandwich',
	      options: ['fat fa-sandwich', 'fal fa-sandwich', 'far fa-sandwich', 'fas fa-sandwich'],
	      defaultOption: 'far fa-sandwich',
	      keywords: 'bread deli grilled cheese sandwich toast sandwich'
	    }, {
	      className: 'far fa-sausage',
	      options: ['fat fa-sausage', 'fal fa-sausage', 'far fa-sausage', 'fas fa-sausage'],
	      defaultOption: 'far fa-sausage',
	      keywords: 'bratwurst breakfast chorizo frankfurt frankfurter hot dog hotdog kielbasa kosher pepperoni polish vienna weiner sausage'
	    }, {
	      className: 'far fa-seedling',
	      options: ['fat fa-seedling', 'fal fa-seedling', 'far fa-seedling', 'fas fa-seedling'],
	      defaultOption: 'far fa-seedling',
	      keywords: 'flora grow plant seedling vegan young seedling'
	    }, {
	      className: 'far fa-shish-kebab',
	      options: ['fat fa-shish-kebab', 'fal fa-shish-kebab', 'far fa-shish-kebab', 'fas fa-shish-kebab'],
	      defaultOption: 'far fa-shish-kebab',
	      keywords: 'grill kabob kebob meat shawarma skewer souvlaki shish kebab'
	    }, {
	      className: 'far fa-shrimp',
	      options: ['fat fa-shrimp', 'fal fa-shrimp', 'far fa-shrimp', 'fas fa-shrimp'],
	      defaultOption: 'far fa-shrimp',
	      keywords: 'allergy crustacean prawn seafood shellfish shrimp tail shrimp'
	    }, {
	      className: 'far fa-soft-serve',
	      options: ['fat fa-soft-serve', 'fal fa-soft-serve', 'far fa-soft-serve', 'fas fa-soft-serve'],
	      defaultOption: 'far fa-soft-serve',
	      keywords: 'cone creemee frozen yogurt ice cream icecream softserve soft serve'
	    }, {
	      className: 'far fa-squid',
	      options: ['fat fa-squid', 'fal fa-squid', 'far fa-squid', 'fas fa-squid'],
	      defaultOption: 'far fa-squid',
	      keywords: 'calamari ink marine ocean squid squid'
	    }, {
	      className: 'far fa-steak',
	      options: ['fat fa-steak', 'fal fa-steak', 'far fa-steak', 'fas fa-steak'],
	      defaultOption: 'far fa-steak',
	      keywords: 'beef chop cut of meat grill lambchop meat porkchop sirloin steak steak'
	    }, {
	      className: 'far fa-stroopwafel',
	      options: ['fat fa-stroopwafel', 'fal fa-stroopwafel', 'far fa-stroopwafel', 'fas fa-stroopwafel'],
	      defaultOption: 'far fa-stroopwafel',
	      keywords: 'caramel cookie dessert sweets waffle stroopwafel'
	    }, {
	      className: 'far fa-taco',
	      options: ['fat fa-taco', 'fal fa-taco', 'far fa-taco', 'fas fa-taco'],
	      defaultOption: 'far fa-taco',
	      keywords: 'corn maize mexican salsa taco tortilla taco'
	    }, {
	      className: 'far fa-tamale',
	      options: ['fat fa-tamale', 'fal fa-tamale', 'far fa-tamale', 'fas fa-tamale'],
	      defaultOption: 'far fa-tamale',
	      keywords: 'mexican tamale wrapped tamale'
	    }, {
	      className: 'far fa-turkey',
	      options: ['fat fa-turkey', 'fal fa-turkey', 'far fa-turkey', 'fas fa-turkey'],
	      defaultOption: 'far fa-turkey',
	      keywords: 'bird chicken meal meat poultry seasonal thanksgiving turkey'
	    }, {
	      className: 'far fa-user-chef',
	      options: ['fat fa-user-chef', 'fal fa-user-chef', 'far fa-user-chef', 'fas fa-user-chef'],
	      defaultOption: 'far fa-user-chef',
	      keywords: 'chef cook dining food kitchen restaurant user chef'
	    }, {
	      className: 'far fa-waffle',
	      options: ['fat fa-waffle', 'fal fa-waffle', 'far fa-waffle', 'fas fa-waffle'],
	      defaultOption: 'far fa-waffle',
	      keywords: 'breakfast indecisive iron waffle waffle'
	    }, {
	      className: 'far fa-wheat',
	      options: ['fat fa-wheat', 'fal fa-wheat', 'far fa-wheat', 'fas fa-wheat'],
	      defaultOption: 'far fa-wheat',
	      keywords: 'agriculture autumn fall farming grain seasonal wheat'
	    }, {
	      className: 'far fa-wheat-awn',
	      options: ['fat fa-wheat-awn', 'fal fa-wheat-awn', 'far fa-wheat-awn', 'fas fa-wheat-awn'],
	      defaultOption: 'far fa-wheat-awn',
	      keywords: 'agriculture autumn fall farming grain wheat awn'
	    }, {
	      className: 'far fa-wheat-awn-slash',
	      options: ['fat fa-wheat-awn-slash', 'fal fa-wheat-awn-slash', 'far fa-wheat-awn-slash', 'fas fa-wheat-awn-slash'],
	      defaultOption: 'far fa-wheat-awn-slash',
	      keywords: 'gluten gluten free wheat wheat awn slash'
	    }, {
	      className: 'far fa-wheat-slash',
	      options: ['fat fa-wheat-slash', 'fal fa-wheat-slash', 'far fa-wheat-slash', 'fas fa-wheat-slash'],
	      defaultOption: 'far fa-wheat-slash',
	      keywords: 'gluten gluten free wheat wheat slash'
	    }, {
	      className: 'far fa-whiskey-glass',
	      options: ['fat fa-whiskey-glass', 'fal fa-whiskey-glass', 'far fa-whiskey-glass', 'fas fa-whiskey-glass'],
	      defaultOption: 'far fa-whiskey-glass',
	      keywords: 'alcohol bar beverage bourbon drink glass liquor neat rye scotch shot tumbler tumbler glass whisky whiskey glass'
	    }, {
	      className: 'far fa-whiskey-glass-ice',
	      options: ['fat fa-whiskey-glass-ice', 'fal fa-whiskey-glass-ice', 'far fa-whiskey-glass-ice', 'fas fa-whiskey-glass-ice'],
	      defaultOption: 'far fa-whiskey-glass-ice',
	      keywords: 'alcohol bar beverage bourbon drink ice liquor rye scotch whisky whiskey glass ice'
	    }, {
	      className: 'far fa-wine-bottle',
	      options: ['fat fa-wine-bottle', 'fal fa-wine-bottle', 'far fa-wine-bottle', 'fas fa-wine-bottle'],
	      defaultOption: 'far fa-wine-bottle',
	      keywords: 'alcohol beverage cabernet drink glass grapes merlot sauvignon wine bottle'
	    }, {
	      className: 'far fa-wine-glass',
	      options: ['fat fa-wine-glass', 'fal fa-wine-glass', 'far fa-wine-glass', 'fas fa-wine-glass'],
	      defaultOption: 'far fa-wine-glass',
	      keywords: 'alcohol bar beverage cabernet drink glass grapes merlot sauvignon wine wine glass wine glass'
	    }, {
	      className: 'far fa-wine-glass-empty',
	      options: ['fat fa-wine-glass-empty', 'fal fa-wine-glass-empty', 'far fa-wine-glass-empty', 'fas fa-wine-glass-empty'],
	      defaultOption: 'far fa-wine-glass-empty',
	      keywords: 'alcohol beverage cabernet drink grapes merlot sauvignon wine glass empty'
	    }]
	  }, {
	    id: 'fruits-vegetables',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_FRUITS_VEGETABLES'),
	    items: [{
	      className: 'far fa-apple-core',
	      options: ['fat fa-apple-core', 'fal fa-apple-core', 'far fa-apple-core', 'fas fa-apple-core'],
	      defaultOption: 'far fa-apple-core',
	      keywords: 'compost eaten fall fruit fuji macintosh orchard seasonal vegan apple core'
	    }, {
	      className: 'far fa-apple-whole',
	      options: ['fat fa-apple-whole', 'fal fa-apple-whole', 'far fa-apple-whole', 'fas fa-apple-whole'],
	      defaultOption: 'far fa-apple-whole',
	      keywords: 'apple fall fruit fuji green green apple macintosh orchard red red apple seasonal vegan apple whole'
	    }, {
	      className: 'far fa-avocado',
	      options: ['fat fa-avocado', 'fal fa-avocado', 'far fa-avocado', 'fas fa-avocado'],
	      defaultOption: 'far fa-avocado',
	      keywords: 'avocado food fruit green guacamole hass pit avocado'
	    }, {
	      className: 'far fa-banana',
	      options: ['fat fa-banana', 'fal fa-banana', 'far fa-banana', 'fas fa-banana'],
	      defaultOption: 'far fa-banana',
	      keywords: 'banana fruit peel plantain potassium banana'
	    }, {
	      className: 'far fa-blueberries',
	      options: ['fat fa-blueberries', 'fal fa-blueberries', 'far fa-blueberries', 'fas fa-blueberries'],
	      defaultOption: 'far fa-blueberries',
	      keywords: 'berry bilberry blue blueberries blueberry juice blueberries'
	    }, {
	      className: 'far fa-broccoli',
	      options: ['fat fa-broccoli', 'fal fa-broccoli', 'far fa-broccoli', 'fas fa-broccoli'],
	      defaultOption: 'far fa-broccoli',
	      keywords: 'bush cauliflower tree wild cabbage broccoli'
	    }, {
	      className: 'far fa-carrot',
	      options: ['fat fa-carrot', 'fal fa-carrot', 'far fa-carrot', 'fas fa-carrot'],
	      defaultOption: 'far fa-carrot',
	      keywords: 'bugs bunny carrot food orange vegan vegetable carrot'
	    }, {
	      className: 'far fa-cherries',
	      options: ['fat fa-cherries', 'fal fa-cherries', 'far fa-cherries', 'fas fa-cherries'],
	      defaultOption: 'far fa-cherries',
	      keywords: 'berries cherries cherry fruit pacman red stem cherries'
	    }, {
	      className: 'far fa-chestnut',
	      options: ['fat fa-chestnut', 'fal fa-chestnut', 'far fa-chestnut', 'fas fa-chestnut'],
	      defaultOption: 'far fa-chestnut',
	      keywords: 'nut plant chestnut'
	    }, {
	      className: 'far fa-citrus',
	      options: ['fat fa-citrus', 'fal fa-citrus', 'far fa-citrus', 'fas fa-citrus'],
	      defaultOption: 'far fa-citrus',
	      keywords: 'fruit grapefruit juice mandarin orange tangerine citrus'
	    }, {
	      className: 'far fa-citrus-slice',
	      options: ['fat fa-citrus-slice', 'fal fa-citrus-slice', 'far fa-citrus-slice', 'fas fa-citrus-slice'],
	      defaultOption: 'far fa-citrus-slice',
	      keywords: 'grapefruit juice lemon lime mandarin orange tangerine wedge citrus slice'
	    }, {
	      className: 'far fa-coconut',
	      options: ['fat fa-coconut', 'fal fa-coconut', 'far fa-coconut', 'fas fa-coconut'],
	      defaultOption: 'far fa-coconut',
	      keywords: 'coconut palm pi?a colada tropical coconut'
	    }, {
	      className: 'far fa-crate-apple',
	      options: ['fat fa-crate-apple', 'fal fa-crate-apple', 'far fa-crate-apple', 'fas fa-crate-apple'],
	      defaultOption: 'far fa-crate-apple',
	      keywords: 'bushel container fall fruit fuji macintosh orchard peck seasonal crate apple'
	    }, {
	      className: 'far fa-crate-empty',
	      options: ['fat fa-crate-empty', 'fal fa-crate-empty', 'far fa-crate-empty', 'fas fa-crate-empty'],
	      defaultOption: 'far fa-crate-empty',
	      keywords: 'box crate crate empty'
	    }, {
	      className: 'far fa-cucumber',
	      options: ['fat fa-cucumber', 'fal fa-cucumber', 'far fa-cucumber', 'fas fa-cucumber'],
	      defaultOption: 'far fa-cucumber',
	      keywords: 'cuke pickle zucchini cucumber'
	    }, {
	      className: 'far fa-eggplant',
	      options: ['fat fa-eggplant', 'fal fa-eggplant', 'far fa-eggplant', 'fas fa-eggplant'],
	      defaultOption: 'far fa-eggplant',
	      keywords: 'adventure island aubergine brinjal eggplant purple vegetable eggplant'
	    }, {
	      className: 'far fa-garlic',
	      options: ['fat fa-garlic', 'fal fa-garlic', 'far fa-garlic', 'fas fa-garlic'],
	      defaultOption: 'far fa-garlic',
	      keywords: 'ail flavor garlic vampire garlic'
	    }, {
	      className: 'far fa-grapes',
	      options: ['fat fa-grapes', 'fal fa-grapes', 'far fa-grapes', 'fas fa-grapes'],
	      defaultOption: 'far fa-grapes',
	      keywords: 'fruit grape grapes raisin vine vineyard wine grapes'
	    }, {
	      className: 'far fa-kiwi-fruit',
	      options: ['fat fa-kiwi-fruit', 'fal fa-kiwi-fruit', 'far fa-kiwi-fruit', 'fas fa-kiwi-fruit'],
	      defaultOption: 'far fa-kiwi-fruit',
	      keywords: 'food fruit gooseberry kiwi kiwi fruit kiwi fruit'
	    }, {
	      className: 'far fa-leaf',
	      options: ['fat fa-leaf', 'fal fa-leaf', 'far fa-leaf', 'fas fa-leaf'],
	      defaultOption: 'far fa-leaf',
	      keywords: 'eco flora nature plant vegan leaf'
	    }, {
	      className: 'far fa-leafy-green',
	      options: ['fat fa-leafy-green', 'fal fa-leafy-green', 'far fa-leafy-green', 'fas fa-leafy-green'],
	      defaultOption: 'far fa-leafy-green',
	      keywords: 'bok choy cabbage kale leafy green lettuce leafy green'
	    }, {
	      className: 'far fa-lemon',
	      options: ['fat fa-lemon', 'fal fa-lemon', 'far fa-lemon', 'fas fa-lemon'],
	      defaultOption: 'far fa-lemon',
	      keywords: 'citrus fruit lemon lemonade lime tart lemon'
	    }, {
	      className: 'far fa-mango',
	      options: ['fat fa-mango', 'fal fa-mango', 'far fa-mango', 'fas fa-mango'],
	      defaultOption: 'far fa-mango',
	      keywords: 'fruit mango tropical mango'
	    }, {
	      className: 'far fa-melon',
	      options: ['fat fa-melon', 'fal fa-melon', 'far fa-melon', 'fas fa-melon'],
	      defaultOption: 'far fa-melon',
	      keywords: 'cantaloupe fruit honeydew melon muskmelon watermelon melon'
	    }, {
	      className: 'far fa-melon-slice',
	      options: ['fat fa-melon-slice', 'fal fa-melon-slice', 'far fa-melon-slice', 'fas fa-melon-slice'],
	      defaultOption: 'far fa-melon-slice',
	      keywords: 'cantaloupe honeydew muskmelon wedge melon slice'
	    }, {
	      className: 'far fa-mushroom',
	      options: ['fat fa-mushroom', 'fal fa-mushroom', 'far fa-mushroom', 'fas fa-mushroom'],
	      defaultOption: 'far fa-mushroom',
	      keywords: '1 up fungus toadstool mushroom'
	    }, {
	      className: 'far fa-olive',
	      options: ['fat fa-olive', 'fal fa-olive', 'far fa-olive', 'fas fa-olive'],
	      defaultOption: 'far fa-olive',
	      keywords: 'pit oil olive pimento olive'
	    }, {
	      className: 'far fa-olive-branch',
	      options: ['fat fa-olive-branch', 'fal fa-olive-branch', 'far fa-olive-branch', 'fas fa-olive-branch'],
	      defaultOption: 'far fa-olive-branch',
	      keywords: 'branch food oil olive peace victory olive branch'
	    }, {
	      className: 'far fa-onion',
	      options: ['fat fa-onion', 'fal fa-onion', 'far fa-onion', 'fas fa-onion'],
	      defaultOption: 'far fa-onion',
	      keywords: 'onion onion'
	    }, {
	      className: 'far fa-peach',
	      options: ['fat fa-peach', 'fal fa-peach', 'far fa-peach', 'fas fa-peach'],
	      defaultOption: 'far fa-peach',
	      keywords: 'butt fruit peach pit stone peach'
	    }, {
	      className: 'far fa-peanut',
	      options: ['fat fa-peanut', 'fal fa-peanut', 'far fa-peanut', 'fas fa-peanut'],
	      defaultOption: 'far fa-peanut',
	      keywords: 'goober legume nut shell peanut'
	    }, {
	      className: 'far fa-peanuts',
	      options: ['fat fa-peanuts', 'fal fa-peanuts', 'far fa-peanuts', 'fas fa-peanuts'],
	      defaultOption: 'far fa-peanuts',
	      keywords: 'goober legume nut shell peanuts'
	    }, {
	      className: 'far fa-peapod',
	      options: ['fat fa-peapod', 'fal fa-peapod', 'far fa-peapod', 'fas fa-peapod'],
	      defaultOption: 'far fa-peapod',
	      keywords: 'pea seed peapod'
	    }, {
	      className: 'far fa-pear',
	      options: ['fat fa-pear', 'fal fa-pear', 'far fa-pear', 'fas fa-pear'],
	      defaultOption: 'far fa-pear',
	      keywords: 'fruit pear pear'
	    }, {
	      className: 'far fa-pepper',
	      options: ['fat fa-pepper', 'fal fa-pepper', 'far fa-pepper', 'fas fa-pepper'],
	      defaultOption: 'far fa-pepper',
	      keywords: 'bell pepper capsicum pepper'
	    }, {
	      className: 'far fa-pepper-hot',
	      options: ['fat fa-pepper-hot', 'fal fa-pepper-hot', 'far fa-pepper-hot', 'fas fa-pepper-hot'],
	      defaultOption: 'far fa-pepper-hot',
	      keywords: 'buffalo wings capsicum chili chilli habanero hot hot pepper jalapeno mexican pepper spicy tabasco vegetable pepper hot'
	    }, {
	      className: 'far fa-pineapple',
	      options: ['fat fa-pineapple', 'fal fa-pineapple', 'far fa-pineapple', 'fas fa-pineapple'],
	      defaultOption: 'far fa-pineapple',
	      keywords: 'ananas fruit pineapple tropical pineapple'
	    }, {
	      className: 'far fa-potato',
	      options: ['fat fa-potato', 'fal fa-potato', 'far fa-potato', 'fas fa-potato'],
	      defaultOption: 'far fa-potato',
	      keywords: 'potato spud tater tuber potato'
	    }, {
	      className: 'far fa-pumpkin',
	      options: ['fat fa-pumpkin', 'fal fa-pumpkin', 'far fa-pumpkin', 'fas fa-pumpkin'],
	      defaultOption: 'far fa-pumpkin',
	      keywords: 'autumn gourd halloween harvest squash thanksgiving vegetable pumpkin'
	    }, {
	      className: 'far fa-salad',
	      options: ['fat fa-salad', 'fal fa-salad', 'far fa-salad', 'fas fa-salad'],
	      defaultOption: 'far fa-salad',
	      keywords: 'bowl food green green salad health lettuce salad spinach vegan vegetable vegetarian salad'
	    }, {
	      className: 'far fa-seedling',
	      options: ['fat fa-seedling', 'fal fa-seedling', 'far fa-seedling', 'fas fa-seedling'],
	      defaultOption: 'far fa-seedling',
	      keywords: 'flora grow plant seedling vegan young seedling'
	    }, {
	      className: 'far fa-strawberry',
	      options: ['fat fa-strawberry', 'fal fa-strawberry', 'far fa-strawberry', 'fas fa-strawberry'],
	      defaultOption: 'far fa-strawberry',
	      keywords: 'berry fruit juice seed strawberry summer strawberry'
	    }, {
	      className: 'far fa-tomato',
	      options: ['fat fa-tomato', 'fal fa-tomato', 'far fa-tomato', 'fas fa-tomato'],
	      defaultOption: 'far fa-tomato',
	      keywords: 'blt fresh fruit garden salad summer tomato vegetable tomato'
	    }, {
	      className: 'far fa-watermelon-slice',
	      options: ['fat fa-watermelon-slice', 'fal fa-watermelon-slice', 'far fa-watermelon-slice', 'fas fa-watermelon-slice'],
	      defaultOption: 'far fa-watermelon-slice',
	      keywords: 'fruit seed watermelon wedge watermelon slice'
	    }, {
	      className: 'far fa-wheat',
	      options: ['fat fa-wheat', 'fal fa-wheat', 'far fa-wheat', 'fas fa-wheat'],
	      defaultOption: 'far fa-wheat',
	      keywords: 'agriculture autumn fall farming grain seasonal wheat'
	    }]
	  }, {
	    id: 'gaming',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_GAMING'),
	    items: [{
	      className: 'far fa-alien-8bit',
	      options: ['fat fa-alien-8bit', 'fal fa-alien-8bit', 'far fa-alien-8bit', 'fas fa-alien-8bit'],
	      defaultOption: 'far fa-alien-8bit',
	      keywords: 'et alien alien monster creature extraterrestrial face humanoid monster space space invader strange ufo video game alien 8bit'
	    }, {
	      className: 'far fa-axe-battle',
	      options: ['fat fa-axe-battle', 'fal fa-axe-battle', 'far fa-axe-battle', 'fas fa-axe-battle'],
	      defaultOption: 'far fa-axe-battle',
	      keywords: 'dungeons & dragons barbarian d&d dnd fantasy gimli lumberjack melee attack axe battle'
	    }, {
	      className: 'far fa-block-brick',
	      options: ['fat fa-block-brick', 'fal fa-block-brick', 'far fa-block-brick', 'fas fa-block-brick'],
	      defaultOption: 'far fa-block-brick',
	      keywords: 'block brick mortar super mario wall block brick'
	    }, {
	      className: 'far fa-block-question',
	      options: ['fat fa-block-question', 'fal fa-block-question', 'far fa-block-question', 'fas fa-block-question'],
	      defaultOption: 'far fa-block-question',
	      keywords: 'block brick mystery prize question super mario block question'
	    }, {
	      className: 'far fa-book-skull',
	      options: ['fat fa-book-skull', 'fal fa-book-skull', 'far fa-book-skull', 'fas fa-book-skull'],
	      defaultOption: 'far fa-book-skull',
	      keywords: 'dungeons & dragons crossbones d&d dark arts death dnd documentation evil fantasy halloween holiday library necronomicon read research skull spell book skull'
	    }, {
	      className: 'far fa-book-sparkles',
	      options: ['fat fa-book-sparkles', 'fal fa-book-sparkles', 'far fa-book-sparkles', 'fas fa-book-sparkles'],
	      defaultOption: 'far fa-book-sparkles',
	      keywords: 'dungeons & dragons d&d dark arts dnd documentation evil fantasy halloween holiday library mage magic read research sorcery voodoo witch wizard book sparkles'
	    }, {
	      className: 'far fa-bow-arrow',
	      options: ['fat fa-bow-arrow', 'fal fa-bow-arrow', 'far fa-bow-arrow', 'fas fa-bow-arrow'],
	      defaultOption: 'far fa-bow-arrow',
	      keywords: 'dungeons & dragons sagittarius archer archery arrow bow bow and arrow d&d dnd fantasy legolas ranged attack ranger weapon zodiac bow arrow'
	    }, {
	      className: 'far fa-campfire',
	      options: ['fat fa-campfire', 'fal fa-campfire', 'far fa-campfire', 'fas fa-campfire'],
	      defaultOption: 'far fa-campfire',
	      keywords: 'dungeons & dragons caliente campaign camping d&d dnd fall fire flame gathering heat hot meeting outdoors seasonal tent wilderness campfire'
	    }, {
	      className: 'far fa-card-club',
	      options: ['fat fa-card-club', 'fal fa-card-club', 'far fa-card-club', 'fas fa-card-club'],
	      defaultOption: 'far fa-card-club',
	      keywords: 'card gamble playing card poker suit card club'
	    }, {
	      className: 'far fa-card-diamond',
	      options: ['fat fa-card-diamond', 'fal fa-card-diamond', 'far fa-card-diamond', 'fas fa-card-diamond'],
	      defaultOption: 'far fa-card-diamond',
	      keywords: 'card gamble playing card poker suit card diamond'
	    }, {
	      className: 'far fa-card-heart',
	      options: ['fat fa-card-heart', 'fal fa-card-heart', 'far fa-card-heart', 'fas fa-card-heart'],
	      defaultOption: 'far fa-card-heart',
	      keywords: 'card gamble playing card poker suit card heart'
	    }, {
	      className: 'far fa-card-spade',
	      options: ['fat fa-card-spade', 'fal fa-card-spade', 'far fa-card-spade', 'fas fa-card-spade'],
	      defaultOption: 'far fa-card-spade',
	      keywords: 'card gamble playing card poker suit card spade'
	    }, {
	      className: 'far fa-cards',
	      options: ['fat fa-cards', 'fal fa-cards', 'far fa-cards', 'fas fa-cards'],
	      defaultOption: 'far fa-cards',
	      keywords: 'card gamble playing card poker suit cards'
	    }, {
	      className: 'far fa-chess',
	      options: ['fat fa-chess', 'fal fa-chess', 'far fa-chess', 'fas fa-chess'],
	      defaultOption: 'far fa-chess',
	      keywords: 'board castle checkmate game king rook strategy tournament chess'
	    }, {
	      className: 'far fa-chess-bishop',
	      options: ['fat fa-chess-bishop', 'fal fa-chess-bishop', 'far fa-chess-bishop', 'fas fa-chess-bishop'],
	      defaultOption: 'far fa-chess-bishop',
	      keywords: 'black chess bishop board checkmate game strategy chess bishop'
	    }, {
	      className: 'far fa-chess-bishop-piece',
	      options: ['fat fa-chess-bishop-piece', 'fal fa-chess-bishop-piece', 'far fa-chess-bishop-piece', 'fas fa-chess-bishop-piece'],
	      defaultOption: 'far fa-chess-bishop-piece',
	      keywords: 'board checkmate game strategy chess bishop piece'
	    }, {
	      className: 'far fa-chess-board',
	      options: ['fat fa-chess-board', 'fal fa-chess-board', 'far fa-chess-board', 'fas fa-chess-board'],
	      defaultOption: 'far fa-chess-board',
	      keywords: 'board checkmate game strategy chess board'
	    }, {
	      className: 'far fa-chess-clock',
	      options: ['fat fa-chess-clock', 'fal fa-chess-clock', 'far fa-chess-clock', 'fas fa-chess-clock'],
	      defaultOption: 'far fa-chess-clock',
	      keywords: 'board checkmate game strategy timer tournament chess clock'
	    }, {
	      className: 'far fa-chess-clock-flip',
	      options: ['fat fa-chess-clock-flip', 'fal fa-chess-clock-flip', 'far fa-chess-clock-flip', 'fas fa-chess-clock-flip'],
	      defaultOption: 'far fa-chess-clock-flip',
	      keywords: 'board checkmate game strategy timer tournament chess clock flip'
	    }, {
	      className: 'far fa-chess-king',
	      options: ['fat fa-chess-king', 'fal fa-chess-king', 'far fa-chess-king', 'fas fa-chess-king'],
	      defaultOption: 'far fa-chess-king',
	      keywords: 'black chess king board checkmate game strategy chess king'
	    }, {
	      className: 'far fa-chess-king-piece',
	      options: ['fat fa-chess-king-piece', 'fal fa-chess-king-piece', 'far fa-chess-king-piece', 'fas fa-chess-king-piece'],
	      defaultOption: 'far fa-chess-king-piece',
	      keywords: 'board checkmate game strategy chess king piece'
	    }, {
	      className: 'far fa-chess-knight',
	      options: ['fat fa-chess-knight', 'fal fa-chess-knight', 'far fa-chess-knight', 'fas fa-chess-knight'],
	      defaultOption: 'far fa-chess-knight',
	      keywords: 'black chess knight board checkmate game horse strategy chess knight'
	    }, {
	      className: 'far fa-chess-knight-piece',
	      options: ['fat fa-chess-knight-piece', 'fal fa-chess-knight-piece', 'far fa-chess-knight-piece', 'fas fa-chess-knight-piece'],
	      defaultOption: 'far fa-chess-knight-piece',
	      keywords: 'board checkmate game horse strategy chess knight piece'
	    }, {
	      className: 'far fa-chess-pawn',
	      options: ['fat fa-chess-pawn', 'fal fa-chess-pawn', 'far fa-chess-pawn', 'fas fa-chess-pawn'],
	      defaultOption: 'far fa-chess-pawn',
	      keywords: 'board checkmate chess chess pawn dupe expendable game strategy chess pawn'
	    }, {
	      className: 'far fa-chess-pawn-piece',
	      options: ['fat fa-chess-pawn-piece', 'fal fa-chess-pawn-piece', 'far fa-chess-pawn-piece', 'fas fa-chess-pawn-piece'],
	      defaultOption: 'far fa-chess-pawn-piece',
	      keywords: 'board checkmate game strategy chess pawn piece'
	    }, {
	      className: 'far fa-chess-queen',
	      options: ['fat fa-chess-queen', 'fal fa-chess-queen', 'far fa-chess-queen', 'fas fa-chess-queen'],
	      defaultOption: 'far fa-chess-queen',
	      keywords: 'black chess queen board checkmate game strategy chess queen'
	    }, {
	      className: 'far fa-chess-queen-piece',
	      options: ['fat fa-chess-queen-piece', 'fal fa-chess-queen-piece', 'far fa-chess-queen-piece', 'fas fa-chess-queen-piece'],
	      defaultOption: 'far fa-chess-queen-piece',
	      keywords: 'board checkmate game strategy chess queen piece'
	    }, {
	      className: 'far fa-chess-rook',
	      options: ['fat fa-chess-rook', 'fal fa-chess-rook', 'far fa-chess-rook', 'fas fa-chess-rook'],
	      defaultOption: 'far fa-chess-rook',
	      keywords: 'black chess rook board castle checkmate game strategy chess rook'
	    }, {
	      className: 'far fa-chess-rook-piece',
	      options: ['fat fa-chess-rook-piece', 'fal fa-chess-rook-piece', 'far fa-chess-rook-piece', 'fas fa-chess-rook-piece'],
	      defaultOption: 'far fa-chess-rook-piece',
	      keywords: 'board castle checkmate game strategy chess rook piece'
	    }, {
	      className: 'far fa-club',
	      options: ['fat fa-club', 'fal fa-club', 'far fa-club', 'fas fa-club'],
	      defaultOption: 'far fa-club',
	      keywords: 'card club suit game poker suit club'
	    }, {
	      className: 'far fa-crystal-ball',
	      options: ['fat fa-crystal-ball', 'fal fa-crystal-ball', 'far fa-crystal-ball', 'fas fa-crystal-ball'],
	      defaultOption: 'far fa-crystal-ball',
	      keywords: 'ball crystal crystal ball fairy tale fantasy fortune future glass globe tool crystal ball'
	    }, {
	      className: 'far fa-dagger',
	      options: ['fat fa-dagger', 'fal fa-dagger', 'far fa-dagger', 'fas fa-dagger'],
	      defaultOption: 'far fa-dagger',
	      keywords: 'dungeons & dragons blade d&d dnd fantasy melee attack rogue sting weapon dagger'
	    }, {
	      className: 'far fa-diamond',
	      options: ['fat fa-diamond', 'fal fa-diamond', 'far fa-diamond', 'fas fa-diamond'],
	      defaultOption: 'far fa-diamond',
	      keywords: 'card cards diamond suit game gem gemstone poker suit diamond'
	    }, {
	      className: 'far fa-dice',
	      options: ['fat fa-dice', 'fal fa-dice', 'far fa-dice', 'fas fa-dice'],
	      defaultOption: 'far fa-dice',
	      keywords: 'chance dice die gambling game game die roll dice'
	    }, {
	      className: 'far fa-dice-d10',
	      options: ['fat fa-dice-d10', 'fal fa-dice-d10', 'far fa-dice-d10', 'fas fa-dice-d10'],
	      defaultOption: 'far fa-dice-d10',
	      keywords: 'dungeons & dragons chance d&d dnd fantasy gambling game roll dice d10'
	    }, {
	      className: 'far fa-dice-d12',
	      options: ['fat fa-dice-d12', 'fal fa-dice-d12', 'far fa-dice-d12', 'fas fa-dice-d12'],
	      defaultOption: 'far fa-dice-d12',
	      keywords: 'dungeons & dragons chance d&d dnd fantasy gambling game roll dice d12'
	    }, {
	      className: 'far fa-dice-d20',
	      options: ['fat fa-dice-d20', 'fal fa-dice-d20', 'far fa-dice-d20', 'fas fa-dice-d20'],
	      defaultOption: 'far fa-dice-d20',
	      keywords: 'dungeons & dragons chance d&d dnd fantasy gambling game roll dice d20'
	    }, {
	      className: 'far fa-dice-d4',
	      options: ['fat fa-dice-d4', 'fal fa-dice-d4', 'far fa-dice-d4', 'fas fa-dice-d4'],
	      defaultOption: 'far fa-dice-d4',
	      keywords: 'dungeons & dragons chance d&d dnd fantasy gambling game roll dice d4'
	    }, {
	      className: 'far fa-dice-d6',
	      options: ['fat fa-dice-d6', 'fal fa-dice-d6', 'far fa-dice-d6', 'fas fa-dice-d6'],
	      defaultOption: 'far fa-dice-d6',
	      keywords: 'dungeons & dragons chance d&d dnd fantasy gambling game roll dice d6'
	    }, {
	      className: 'far fa-dice-d8',
	      options: ['fat fa-dice-d8', 'fal fa-dice-d8', 'far fa-dice-d8', 'fas fa-dice-d8'],
	      defaultOption: 'far fa-dice-d8',
	      keywords: 'dungeons & dragons chance d&d dnd fantasy gambling game roll dice d8'
	    }, {
	      className: 'far fa-dice-five',
	      options: ['fat fa-dice-five', 'fal fa-dice-five', 'far fa-dice-five', 'fas fa-dice-five'],
	      defaultOption: 'far fa-dice-five',
	      keywords: 'die face 5 chance gambling game roll dice five'
	    }, {
	      className: 'far fa-dice-four',
	      options: ['fat fa-dice-four', 'fal fa-dice-four', 'far fa-dice-four', 'fas fa-dice-four'],
	      defaultOption: 'far fa-dice-four',
	      keywords: 'die face 4 chance gambling game roll dice four'
	    }, {
	      className: 'far fa-dice-one',
	      options: ['fat fa-dice-one', 'fal fa-dice-one', 'far fa-dice-one', 'fas fa-dice-one'],
	      defaultOption: 'far fa-dice-one',
	      keywords: 'die face 1 chance gambling game roll dice one'
	    }, {
	      className: 'far fa-dice-six',
	      options: ['fat fa-dice-six', 'fal fa-dice-six', 'far fa-dice-six', 'fas fa-dice-six'],
	      defaultOption: 'far fa-dice-six',
	      keywords: 'die face 6 chance gambling game roll dice six'
	    }, {
	      className: 'far fa-dice-three',
	      options: ['fat fa-dice-three', 'fal fa-dice-three', 'far fa-dice-three', 'fas fa-dice-three'],
	      defaultOption: 'far fa-dice-three',
	      keywords: 'die face 3 chance gambling game roll dice three'
	    }, {
	      className: 'far fa-dice-two',
	      options: ['fat fa-dice-two', 'fal fa-dice-two', 'far fa-dice-two', 'fas fa-dice-two'],
	      defaultOption: 'far fa-dice-two',
	      keywords: 'die face 2 chance gambling game roll dice two'
	    }, {
	      className: 'far fa-dragon',
	      options: ['fat fa-dragon', 'fal fa-dragon', 'far fa-dragon', 'fas fa-dragon'],
	      defaultOption: 'far fa-dragon',
	      keywords: 'dungeons & dragons d&d dnd dragon fairy tale fantasy fire lizard serpent dragon'
	    }, {
	      className: 'far fa-dreidel',
	      options: ['fat fa-dreidel', 'fal fa-dreidel', 'far fa-dreidel', 'fas fa-dreidel'],
	      defaultOption: 'far fa-dreidel',
	      keywords: 'clay hanukkah holiday jewish judaism toy dreidel'
	    }, {
	      className: 'far fa-dungeon',
	      options: ['fat fa-dungeon', 'fal fa-dungeon', 'far fa-dungeon', 'fas fa-dungeon'],
	      defaultOption: 'far fa-dungeon',
	      keywords: 'dungeons & dragons building d&d dnd door entrance fantasy gate dungeon'
	    }, {
	      className: 'far fa-eye-evil',
	      options: ['fat fa-eye-evil', 'fal fa-eye-evil', 'far fa-eye-evil', 'fas fa-eye-evil'],
	      defaultOption: 'far fa-eye-evil',
	      keywords: 'dungeons & dragons d&d dnd fantasy sauron see seen show sight eye evil'
	    }, {
	      className: 'far fa-fire-flame',
	      options: ['fat fa-fire-flame', 'fal fa-fire-flame', 'far fa-fire-flame', 'fas fa-fire-flame'],
	      defaultOption: 'far fa-fire-flame',
	      keywords: 'dungeons & dragons caliente d&d dnd fantasy heat hot fire flame'
	    }, {
	      className: 'far fa-flask-round-potion',
	      options: ['fat fa-flask-round-potion', 'fal fa-flask-round-potion', 'far fa-flask-round-potion', 'fas fa-flask-round-potion'],
	      defaultOption: 'far fa-flask-round-potion',
	      keywords: 'dungeons & dragons alert beaker beverage container d&d danger dangerous deadly death dnd drink fantasy halloween heal health holiday magic mana science flask round potion'
	    }, {
	      className: 'far fa-game-board',
	      options: ['fat fa-game-board', 'fal fa-game-board', 'far fa-game-board', 'fas fa-game-board'],
	      defaultOption: 'far fa-game-board',
	      keywords: 'checkers chess gaming grid tabletop game board'
	    }, {
	      className: 'far fa-game-board-simple',
	      options: ['fat fa-game-board-simple', 'fal fa-game-board-simple', 'far fa-game-board-simple', 'fas fa-game-board-simple'],
	      defaultOption: 'far fa-game-board-simple',
	      keywords: 'checkers chess gaming grid tabletop game board simple'
	    }, {
	      className: 'far fa-game-console-handheld',
	      options: ['fat fa-game-console-handheld', 'fal fa-game-console-handheld', 'far fa-game-console-handheld', 'fas fa-game-console-handheld'],
	      defaultOption: 'far fa-game-console-handheld',
	      keywords: 'cartridge gameboy nintendo retro video games vintage game console handheld'
	    }, {
	      className: 'far fa-gamepad',
	      options: ['fat fa-gamepad', 'fal fa-gamepad', 'far fa-gamepad', 'fas fa-gamepad'],
	      defaultOption: 'far fa-gamepad',
	      keywords: 'arcade controller d pad joystick video video game gamepad'
	    }, {
	      className: 'far fa-gamepad-pager',
	      options: ['fat fa-gamepad-pager', 'fal fa-gamepad-pager', 'far fa-gamepad-pager', 'fas fa-gamepad-pager'],
	      defaultOption: 'far fa-gamepad-pager',
	      keywords: 'arcade controller d pad game joystick video video game gamepad pager'
	    }, {
	      className: 'far fa-ghost',
	      options: ['fat fa-ghost', 'fal fa-ghost', 'far fa-ghost', 'fas fa-ghost'],
	      defaultOption: 'far fa-ghost',
	      keywords: 'apparition blinky clyde creature face fairy tale fantasy floating ghost halloween holiday inky monster pinky spirit ghost'
	    }, {
	      className: 'far fa-hammer-war',
	      options: ['fat fa-hammer-war', 'fal fa-hammer-war', 'far fa-hammer-war', 'fas fa-hammer-war'],
	      defaultOption: 'far fa-hammer-war',
	      keywords: 'dungeons & dragons cleric d&d dnd dwarf fantasy melee attack weapon hammer war'
	    }, {
	      className: 'far fa-hand-fist',
	      options: ['fat fa-hand-fist', 'fal fa-hand-fist', 'far fa-hand-fist', 'fas fa-hand-fist'],
	      defaultOption: 'far fa-hand-fist',
	      keywords: 'dungeons & dragons clenched d&d dnd fantasy fist hand ki monk punch raised fist resist strength unarmed combat hand fist'
	    }, {
	      className: 'far fa-hand-holding-magic',
	      options: ['fat fa-hand-holding-magic', 'fal fa-hand-holding-magic', 'far fa-hand-holding-magic', 'fas fa-hand-holding-magic'],
	      defaultOption: 'far fa-hand-holding-magic',
	      keywords: 'dungeons & dragons carry cast d&d dnd fantasy lift mage spell witch wizard hand holding magic'
	    }, {
	      className: 'far fa-hat-wizard',
	      options: ['fat fa-hat-wizard', 'fal fa-hat-wizard', 'far fa-hat-wizard', 'fas fa-hat-wizard'],
	      defaultOption: 'far fa-hat-wizard',
	      keywords: 'dungeons & dragons accessory buckle clothing d&d dnd fantasy halloween head holiday mage magic pointy witch hat wizard'
	    }, {
	      className: 'far fa-headset',
	      options: ['fat fa-headset', 'fal fa-headset', 'far fa-headset', 'fas fa-headset'],
	      defaultOption: 'far fa-headset',
	      keywords: 'audio gamer gaming listen live chat microphone shot caller sound support telemarketer headset'
	    }, {
	      className: 'far fa-heart',
	      options: ['fat fa-heart', 'fal fa-heart', 'far fa-heart', 'fas fa-heart'],
	      defaultOption: 'far fa-heart',
	      keywords: 'black black heart blue blue heart brown brown heart card evil favorite game green green heart heart heart suit like love orange orange heart purple purple heart red heart relationship valentine white white heart wicked yellow yellow heart heart'
	    }, {
	      className: 'far fa-helmet-battle',
	      options: ['fat fa-helmet-battle', 'fal fa-helmet-battle', 'far fa-helmet-battle', 'fas fa-helmet-battle'],
	      defaultOption: 'far fa-helmet-battle',
	      keywords: 'dungeons & dragons armor clothing d&d dnd fantasy hat knight paladin helmet battle'
	    }, {
	      className: 'far fa-hood-cloak',
	      options: ['fat fa-hood-cloak', 'fal fa-hood-cloak', 'far fa-hood-cloak', 'fas fa-hood-cloak'],
	      defaultOption: 'far fa-hood-cloak',
	      keywords: 'dungeons & dragons clothing d&d dnd fantasy hat rogue stealth hood cloak'
	    }, {
	      className: 'far fa-joystick',
	      options: ['fat fa-joystick', 'fal fa-joystick', 'far fa-joystick', 'fas fa-joystick'],
	      defaultOption: 'far fa-joystick',
	      keywords: 'arcade atari controller game joystick retro video game vintage joystick'
	    }, {
	      className: 'far fa-mace',
	      options: ['fat fa-mace', 'fal fa-mace', 'far fa-mace', 'fas fa-mace'],
	      defaultOption: 'far fa-mace',
	      keywords: 'dungeons & dragons d&d dnd fantasy melee attack weapon windu mace'
	    }, {
	      className: 'far fa-mandolin',
	      options: ['fat fa-mandolin', 'fal fa-mandolin', 'far fa-mandolin', 'fas fa-mandolin'],
	      defaultOption: 'far fa-mandolin',
	      keywords: 'dungeons & dragons bard d&d dnd fantasy guitar instrument lute music song strings mandolin'
	    }, {
	      className: 'far fa-mushroom',
	      options: ['fat fa-mushroom', 'fal fa-mushroom', 'far fa-mushroom', 'fas fa-mushroom'],
	      defaultOption: 'far fa-mushroom',
	      keywords: '1 up fungus toadstool mushroom'
	    }, {
	      className: 'far fa-nesting-dolls',
	      options: ['fat fa-nesting-dolls', 'fal fa-nesting-dolls', 'far fa-nesting-dolls', 'fas fa-nesting-dolls'],
	      defaultOption: 'far fa-nesting-dolls',
	      keywords: 'babushka doll matryoshka nesting nesting dolls russia stacking tea nesting dolls'
	    }, {
	      className: 'far fa-paw-claws',
	      options: ['fat fa-paw-claws', 'fal fa-paw-claws', 'far fa-paw-claws', 'fas fa-paw-claws'],
	      defaultOption: 'far fa-paw-claws',
	      keywords: 'dungeons & dragons animal beast d&d dnd fantasy lion pet print paw claws'
	    }, {
	      className: 'far fa-person-pinball',
	      options: ['fat fa-person-pinball', 'fal fa-person-pinball', 'far fa-person-pinball', 'fas fa-person-pinball'],
	      defaultOption: 'far fa-person-pinball',
	      keywords: 'arcade fun game pinball person pinball'
	    }, {
	      className: 'far fa-pinata',
	      options: ['fat fa-pinata', 'fal fa-pinata', 'far fa-pinata', 'fas fa-pinata'],
	      defaultOption: 'far fa-pinata',
	      keywords: 'celebration party pi?ata pinata'
	    }, {
	      className: 'far fa-pinball',
	      options: ['fat fa-pinball', 'fal fa-pinball', 'far fa-pinball', 'fas fa-pinball'],
	      defaultOption: 'far fa-pinball',
	      keywords: 'arcade fun game pinball pinball'
	    }, {
	      className: 'far fa-pool-8-ball',
	      options: ['fat fa-pool-8-ball', 'fal fa-pool-8-ball', 'far fa-pool-8-ball', 'fas fa-pool-8-ball'],
	      defaultOption: 'far fa-pool-8-ball',
	      keywords: '8 ball billiard billiards eight fortune game luck pool 8 ball pool 8 ball'
	    }, {
	      className: 'far fa-puzzle',
	      options: ['fat fa-puzzle', 'fal fa-puzzle', 'far fa-puzzle', 'fas fa-puzzle'],
	      defaultOption: 'far fa-puzzle',
	      keywords: 'add on addon clue game interlocking jigsaw piece puzzle puzzle piece section puzzle'
	    }, {
	      className: 'far fa-puzzle-piece',
	      options: ['fat fa-puzzle-piece', 'fal fa-puzzle-piece', 'far fa-puzzle-piece', 'fas fa-puzzle-piece'],
	      defaultOption: 'far fa-puzzle-piece',
	      keywords: 'add on addon clue game interlocking jigsaw piece puzzle puzzle piece section puzzle piece'
	    }, {
	      className: 'far fa-puzzle-piece-simple',
	      options: ['fat fa-puzzle-piece-simple', 'fal fa-puzzle-piece-simple', 'far fa-puzzle-piece-simple', 'fas fa-puzzle-piece-simple'],
	      defaultOption: 'far fa-puzzle-piece-simple',
	      keywords: 'assemble plugin puzzle piece simple'
	    }, {
	      className: 'far fa-ring',
	      options: ['fat fa-ring', 'fal fa-ring', 'far fa-ring', 'fas fa-ring'],
	      defaultOption: 'far fa-ring',
	      keywords: 'dungeons & dragons gollum band binding d&d dnd engagement fantasy gold jewelry marriage precious ring'
	    }, {
	      className: 'far fa-scroll',
	      options: ['fat fa-scroll', 'fal fa-scroll', 'far fa-scroll', 'fas fa-scroll'],
	      defaultOption: 'far fa-scroll',
	      keywords: 'dungeons & dragons announcement d&d dnd fantasy paper script scroll scroll'
	    }, {
	      className: 'far fa-scroll-old',
	      options: ['fat fa-scroll-old', 'fal fa-scroll-old', 'far fa-scroll-old', 'fas fa-scroll-old'],
	      defaultOption: 'far fa-scroll-old',
	      keywords: 'dungeons & dragons ancient announcement d&d dnd fantasy paper relic script worn scroll old'
	    }, {
	      className: 'far fa-scythe',
	      options: ['fat fa-scythe', 'fal fa-scythe', 'far fa-scythe', 'fas fa-scythe'],
	      defaultOption: 'far fa-scythe',
	      keywords: 'dungeons & dragons blade d&d death dnd fantasy grim reaper weapon scythe'
	    }, {
	      className: 'far fa-shield-cross',
	      options: ['fat fa-shield-cross', 'fal fa-shield-cross', 'far fa-shield-cross', 'fas fa-shield-cross'],
	      defaultOption: 'far fa-shield-cross',
	      keywords: 'black cross on shield dungeons & dragons block catholicism christianity crusader d&d defend dnd fantasy security templar shield cross'
	    }, {
	      className: 'far fa-sickle',
	      options: ['fat fa-sickle', 'fal fa-sickle', 'far fa-sickle', 'fas fa-sickle'],
	      defaultOption: 'far fa-sickle',
	      keywords: 'blade d&d dnd dungeons & dragons fantasy weapon sickle'
	    }, {
	      className: 'far fa-skull-crossbones',
	      options: ['fat fa-skull-crossbones', 'fal fa-skull-crossbones', 'far fa-skull-crossbones', 'fas fa-skull-crossbones'],
	      defaultOption: 'far fa-skull-crossbones',
	      keywords: 'black skull and crossbones dungeons & dragons alert bones crossbones d&d danger dead deadly death dnd face fantasy halloween holiday jolly roger monster pirate poison skeleton skull skull and crossbones warning skull crossbones'
	    }, {
	      className: 'far fa-slot-machine',
	      options: ['fat fa-slot-machine', 'fal fa-slot-machine', 'far fa-slot-machine', 'fas fa-slot-machine'],
	      defaultOption: 'far fa-slot-machine',
	      keywords: 'gamble gambling game lucky slot slot machine vegas slot machine'
	    }, {
	      className: 'far fa-spade',
	      options: ['fat fa-spade', 'fal fa-spade', 'far fa-spade', 'fas fa-spade'],
	      defaultOption: 'far fa-spade',
	      keywords: 'card game poker spade suit suit spade'
	    }, {
	      className: 'far fa-sparkles',
	      options: ['fat fa-sparkles', 'fal fa-sparkles', 'far fa-sparkles', 'fas fa-sparkles'],
	      defaultOption: 'far fa-sparkles',
	      keywords: '* glitter magic new sparkle sparkles special star twinkle sparkles'
	    }, {
	      className: 'far fa-square-full',
	      options: ['fat fa-square-full', 'fal fa-square-full', 'far fa-square-full', 'fas fa-square-full'],
	      defaultOption: 'far fa-square-full',
	      keywords: 'black large square block blue blue square box brown brown square geometric green green square orange orange square purple purple square red red square shape square white large square yellow yellow square square full'
	    }, {
	      className: 'far fa-staff',
	      options: ['fat fa-staff', 'fal fa-staff', 'far fa-staff', 'fas fa-staff'],
	      defaultOption: 'far fa-staff',
	      keywords: 'dungeons & dragons d&d dnd fantasy mage stick weapon staff'
	    }, {
	      className: 'far fa-sword',
	      options: ['fat fa-sword', 'fal fa-sword', 'far fa-sword', 'fas fa-sword'],
	      defaultOption: 'far fa-sword',
	      keywords: 'dungeons & dragons blade d&d dagger dnd fantasy fight knife sharp weapon sword'
	    }, {
	      className: 'far fa-swords',
	      options: ['fat fa-swords', 'fal fa-swords', 'far fa-swords', 'fas fa-swords'],
	      defaultOption: 'far fa-swords',
	      keywords: 'dungeons & dragons blade crossed crossed swords d&d dnd fantasy fight sharp swords weapon swords'
	    }, {
	      className: 'far fa-teddy-bear',
	      options: ['fat fa-teddy-bear', 'fal fa-teddy-bear', 'far fa-teddy-bear', 'fas fa-teddy-bear'],
	      defaultOption: 'far fa-teddy-bear',
	      keywords: 'plaything plush stuffed teddy bear toy teddy bear'
	    }, {
	      className: 'far fa-treasure-chest',
	      options: ['fat fa-treasure-chest', 'fal fa-treasure-chest', 'far fa-treasure-chest', 'fas fa-treasure-chest'],
	      defaultOption: 'far fa-treasure-chest',
	      keywords: 'dungeons & dragons booty d&d dnd fantasy gold hidden loot reward trap treasure chest'
	    }, {
	      className: 'far fa-vr-cardboard',
	      options: ['fat fa-vr-cardboard', 'fal fa-vr-cardboard', 'far fa-vr-cardboard', 'fas fa-vr-cardboard'],
	      defaultOption: 'far fa-vr-cardboard',
	      keywords: '3d augment google reality virtual vr cardboard'
	    }, {
	      className: 'far fa-wand',
	      options: ['fat fa-wand', 'fal fa-wand', 'far fa-wand', 'fas fa-wand'],
	      defaultOption: 'far fa-wand',
	      keywords: 'dungeons & dragons d&d dnd fantasy halloween holiday magic weapon wand'
	    }, {
	      className: 'far fa-wand-sparkles',
	      options: ['fat fa-wand-sparkles', 'fal fa-wand-sparkles', 'far fa-wand-sparkles', 'fas fa-wand-sparkles'],
	      defaultOption: 'far fa-wand-sparkles',
	      keywords: 'autocomplete automatic fantasy halloween holiday magic weapon witch wizard wand sparkles'
	    }]
	  }, {
	    id: 'gender',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_GENDERS'),
	    items: [{
	      className: 'far fa-genderless',
	      options: ['fat fa-genderless', 'fal fa-genderless', 'far fa-genderless', 'fas fa-genderless'],
	      defaultOption: 'far fa-genderless',
	      keywords: 'androgynous asexual gender sexless genderless'
	    }, {
	      className: 'far fa-mars',
	      options: ['fat fa-mars', 'fal fa-mars', 'far fa-mars', 'fas fa-mars'],
	      defaultOption: 'far fa-mars',
	      keywords: 'gender male male sign man mars'
	    }, {
	      className: 'far fa-mars-and-venus',
	      options: ['fat fa-mars-and-venus', 'fal fa-mars-and-venus', 'far fa-mars-and-venus', 'fas fa-mars-and-venus'],
	      defaultOption: 'far fa-mars-and-venus',
	      keywords: 'male and female sign female gender intersex male transgender mars and venus'
	    }, {
	      className: 'far fa-mars-double',
	      options: ['fat fa-mars-double', 'fal fa-mars-double', 'far fa-mars-double', 'fas fa-mars-double'],
	      defaultOption: 'far fa-mars-double',
	      keywords: 'doubled male sign gay gender male men mars double'
	    }, {
	      className: 'far fa-mars-stroke',
	      options: ['fat fa-mars-stroke', 'fal fa-mars-stroke', 'far fa-mars-stroke', 'fas fa-mars-stroke'],
	      defaultOption: 'far fa-mars-stroke',
	      keywords: 'male with stroke sign gender transgender mars stroke'
	    }, {
	      className: 'far fa-mars-stroke-right',
	      options: ['fat fa-mars-stroke-right', 'fal fa-mars-stroke-right', 'far fa-mars-stroke-right', 'fas fa-mars-stroke-right'],
	      defaultOption: 'far fa-mars-stroke-right',
	      keywords: 'horizontal male with stroke sign gender mars stroke right'
	    }, {
	      className: 'far fa-mars-stroke-up',
	      options: ['fat fa-mars-stroke-up', 'fal fa-mars-stroke-up', 'far fa-mars-stroke-up', 'fas fa-mars-stroke-up'],
	      defaultOption: 'far fa-mars-stroke-up',
	      keywords: 'vertical male with stroke sign gender mars stroke up'
	    }, {
	      className: 'far fa-mercury',
	      options: ['fat fa-mercury', 'fal fa-mercury', 'far fa-mercury', 'fas fa-mercury'],
	      defaultOption: 'far fa-mercury',
	      keywords: 'mercury gender hybrid transgender mercury'
	    }, {
	      className: 'far fa-neuter',
	      options: ['fat fa-neuter', 'fal fa-neuter', 'far fa-neuter', 'fas fa-neuter'],
	      defaultOption: 'far fa-neuter',
	      keywords: 'neuter gender neuter'
	    }, {
	      className: 'far fa-transgender',
	      options: ['fat fa-transgender', 'fal fa-transgender', 'far fa-transgender', 'fas fa-transgender'],
	      defaultOption: 'far fa-transgender',
	      keywords: 'female gender intersex male transgender transgender symbol transgender'
	    }, {
	      className: 'far fa-venus',
	      options: ['fat fa-venus', 'fal fa-venus', 'far fa-venus', 'fas fa-venus'],
	      defaultOption: 'far fa-venus',
	      keywords: 'female female sign gender woman venus'
	    }, {
	      className: 'far fa-venus-double',
	      options: ['fat fa-venus-double', 'fal fa-venus-double', 'far fa-venus-double', 'fas fa-venus-double'],
	      defaultOption: 'far fa-venus-double',
	      keywords: 'doubled female sign female gender lesbian venus double'
	    }, {
	      className: 'far fa-venus-mars',
	      options: ['fat fa-venus-mars', 'fal fa-venus-mars', 'far fa-venus-mars', 'fas fa-venus-mars'],
	      defaultOption: 'far fa-venus-mars',
	      keywords: 'interlocked female and male sign female gender heterosexual male venus mars'
	    }]
	  }, {
	    id: 'halloween',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_HALLOWEEN'),
	    items: [{
	      className: 'far fa-bat',
	      options: ['fat fa-bat', 'fal fa-bat', 'far fa-bat', 'fas fa-bat'],
	      defaultOption: 'far fa-bat',
	      keywords: 'animal batman bruce wayne flying gotham halloween mammal vampire wings bat'
	    }, {
	      className: 'far fa-book-skull',
	      options: ['fat fa-book-skull', 'fal fa-book-skull', 'far fa-book-skull', 'fas fa-book-skull'],
	      defaultOption: 'far fa-book-skull',
	      keywords: 'dungeons & dragons crossbones d&d dark arts death dnd documentation evil fantasy halloween holiday library necronomicon read research skull spell book skull'
	    }, {
	      className: 'far fa-book-sparkles',
	      options: ['fat fa-book-sparkles', 'fal fa-book-sparkles', 'far fa-book-sparkles', 'fas fa-book-sparkles'],
	      defaultOption: 'far fa-book-sparkles',
	      keywords: 'dungeons & dragons d&d dark arts dnd documentation evil fantasy halloween holiday library mage magic read research sorcery voodoo witch wizard book sparkles'
	    }, {
	      className: 'far fa-broom',
	      options: ['fat fa-broom', 'fal fa-broom', 'far fa-broom', 'fas fa-broom'],
	      defaultOption: 'far fa-broom',
	      keywords: 'broom clean cleaning firebolt fly halloween nimbus 2000 quidditch sweep sweeping witch broom'
	    }, {
	      className: 'far fa-candle-holder',
	      options: ['fat fa-candle-holder', 'fal fa-candle-holder', 'far fa-candle-holder', 'fas fa-candle-holder'],
	      defaultOption: 'far fa-candle-holder',
	      keywords: 'candle fire flame halloween holiday hot light lit wick candle holder'
	    }, {
	      className: 'far fa-candy',
	      options: ['fat fa-candy', 'fal fa-candy', 'far fa-candy', 'fas fa-candy'],
	      defaultOption: 'far fa-candy',
	      keywords: 'candy sugar sweet wrapper candy'
	    }, {
	      className: 'far fa-candy-corn',
	      options: ['fat fa-candy-corn', 'fal fa-candy-corn', 'far fa-candy-corn', 'fas fa-candy-corn'],
	      defaultOption: 'far fa-candy-corn',
	      keywords: 'halloween holiday sugar triangles candy corn'
	    }, {
	      className: 'far fa-cat',
	      options: ['fat fa-cat', 'fal fa-cat', 'far fa-cat', 'fas fa-cat'],
	      defaultOption: 'far fa-cat',
	      keywords: 'cat feline halloween holiday kitten kitty meow pet cat'
	    }, {
	      className: 'far fa-cauldron',
	      options: ['fat fa-cauldron', 'fal fa-cauldron', 'far fa-cauldron', 'fas fa-cauldron'],
	      defaultOption: 'far fa-cauldron',
	      keywords: 'boil bubble cooking halloween holiday magic pot sorcery toil trouble witch wizard cauldron'
	    }, {
	      className: 'far fa-claw-marks',
	      options: ['fat fa-claw-marks', 'fal fa-claw-marks', 'far fa-claw-marks', 'fas fa-claw-marks'],
	      defaultOption: 'far fa-claw-marks',
	      keywords: 'attack damage halloween rip scratch snikt tear torn wolverine claw marks'
	    }, {
	      className: 'far fa-cloud-moon',
	      options: ['fat fa-cloud-moon', 'fal fa-cloud-moon', 'far fa-cloud-moon', 'fas fa-cloud-moon'],
	      defaultOption: 'far fa-cloud-moon',
	      keywords: 'crescent evening lunar night partly cloudy sky cloud moon'
	    }, {
	      className: 'far fa-coffin',
	      options: ['fat fa-coffin', 'fal fa-coffin', 'far fa-coffin', 'fas fa-coffin'],
	      defaultOption: 'far fa-coffin',
	      keywords: 'box burial casket cemetery coffin death eulogy funeral halloween vampire coffin'
	    }, {
	      className: 'far fa-coffin-cross',
	      options: ['fat fa-coffin-cross', 'fal fa-coffin-cross', 'far fa-coffin-cross', 'fas fa-coffin-cross'],
	      defaultOption: 'far fa-coffin-cross',
	      keywords: 'box burial casket catholicism cemetery christianity death eulogy funeral halloween vampire coffin cross'
	    }, {
	      className: 'far fa-crow',
	      options: ['fat fa-crow', 'fal fa-crow', 'far fa-crow', 'fas fa-crow'],
	      defaultOption: 'far fa-crow',
	      keywords: 'bird bullfrog fauna halloween holiday toad crow'
	    }, {
	      className: 'far fa-flask-round-poison',
	      options: ['fat fa-flask-round-poison', 'fal fa-flask-round-poison', 'far fa-flask-round-poison', 'fas fa-flask-round-poison'],
	      defaultOption: 'far fa-flask-round-poison',
	      keywords: 'beverage container drink halloween health holiday power flask round poison'
	    }, {
	      className: 'far fa-flask-round-potion',
	      options: ['fat fa-flask-round-potion', 'fal fa-flask-round-potion', 'far fa-flask-round-potion', 'fas fa-flask-round-potion'],
	      defaultOption: 'far fa-flask-round-potion',
	      keywords: 'dungeons & dragons alert beaker beverage container d&d danger dangerous deadly death dnd drink fantasy halloween heal health holiday magic mana science flask round potion'
	    }, {
	      className: 'far fa-ghost',
	      options: ['fat fa-ghost', 'fal fa-ghost', 'far fa-ghost', 'fas fa-ghost'],
	      defaultOption: 'far fa-ghost',
	      keywords: 'apparition blinky clyde creature face fairy tale fantasy floating ghost halloween holiday inky monster pinky spirit ghost'
	    }, {
	      className: 'far fa-hat-witch',
	      options: ['fat fa-hat-witch', 'fal fa-hat-witch', 'far fa-hat-witch', 'fas fa-hat-witch'],
	      defaultOption: 'far fa-hat-witch',
	      keywords: 'accessory clothing halloween head holiday mage magic sorceror hat witch'
	    }, {
	      className: 'far fa-hat-wizard',
	      options: ['fat fa-hat-wizard', 'fal fa-hat-wizard', 'far fa-hat-wizard', 'fas fa-hat-wizard'],
	      defaultOption: 'far fa-hat-wizard',
	      keywords: 'dungeons & dragons accessory buckle clothing d&d dnd fantasy halloween head holiday mage magic pointy witch hat wizard'
	    }, {
	      className: 'far fa-hockey-mask',
	      options: ['fat fa-hockey-mask', 'fal fa-hockey-mask', 'far fa-hockey-mask', 'fas fa-hockey-mask'],
	      defaultOption: 'far fa-hockey-mask',
	      keywords: 'clothing friday halloween ice jason nhl protection sport thirteenth hockey mask'
	    }, {
	      className: 'far fa-jack-o-lantern',
	      options: ['fat fa-jack-o-lantern', 'fal fa-jack-o-lantern', 'far fa-jack-o-lantern', 'fas fa-jack-o-lantern'],
	      defaultOption: 'far fa-jack-o-lantern',
	      keywords: 'carve celebration face halloween jack jack o lantern lantern pumpkin smile jack o lantern'
	    }, {
	      className: 'far fa-key-skeleton',
	      options: ['fat fa-key-skeleton', 'fal fa-key-skeleton', 'far fa-key-skeleton', 'fas fa-key-skeleton'],
	      defaultOption: 'far fa-key-skeleton',
	      keywords: 'clue halloween key lock old old key password private secret unlock key skeleton'
	    }, {
	      className: 'far fa-knife-kitchen',
	      options: ['fat fa-knife-kitchen', 'fal fa-knife-kitchen', 'far fa-knife-kitchen', 'fas fa-knife-kitchen'],
	      defaultOption: 'far fa-knife-kitchen',
	      keywords: 'chef cooking cut halloween hocho kitchen knife knife sharp slice tool weapon knife kitchen'
	    }, {
	      className: 'far fa-lollipop',
	      options: ['fat fa-lollipop', 'fal fa-lollipop', 'far fa-lollipop', 'fas fa-lollipop'],
	      defaultOption: 'far fa-lollipop',
	      keywords: 'candy lollypop sucker sugar sweet swirl lollipop'
	    }, {
	      className: 'far fa-mask',
	      options: ['fat fa-mask', 'fal fa-mask', 'far fa-mask', 'fas fa-mask'],
	      defaultOption: 'far fa-mask',
	      keywords: 'carnivale costume disguise halloween secret super hero mask'
	    }, {
	      className: 'far fa-scarecrow',
	      options: ['fat fa-scarecrow', 'fal fa-scarecrow', 'far fa-scarecrow', 'fas fa-scarecrow'],
	      defaultOption: 'far fa-scarecrow',
	      keywords: 'bird crow farm field halloween strawman scarecrow'
	    }, {
	      className: 'far fa-scythe',
	      options: ['fat fa-scythe', 'fal fa-scythe', 'far fa-scythe', 'fas fa-scythe'],
	      defaultOption: 'far fa-scythe',
	      keywords: 'dungeons & dragons blade d&d death dnd fantasy grim reaper weapon scythe'
	    }, {
	      className: 'far fa-skull',
	      options: ['fat fa-skull', 'fal fa-skull', 'far fa-skull', 'fas fa-skull'],
	      defaultOption: 'far fa-skull',
	      keywords: 'bones death face fairy tale monster skeleton skull x ray yorick skull'
	    }, {
	      className: 'far fa-skull-crossbones',
	      options: ['fat fa-skull-crossbones', 'fal fa-skull-crossbones', 'far fa-skull-crossbones', 'fas fa-skull-crossbones'],
	      defaultOption: 'far fa-skull-crossbones',
	      keywords: 'black skull and crossbones dungeons & dragons alert bones crossbones d&d danger dead deadly death dnd face fantasy halloween holiday jolly roger monster pirate poison skeleton skull skull and crossbones warning skull crossbones'
	    }, {
	      className: 'far fa-sparkles',
	      options: ['fat fa-sparkles', 'fal fa-sparkles', 'far fa-sparkles', 'fas fa-sparkles'],
	      defaultOption: 'far fa-sparkles',
	      keywords: '* glitter magic new sparkle sparkles special star twinkle sparkles'
	    }, {
	      className: 'far fa-spider',
	      options: ['fat fa-spider', 'fal fa-spider', 'far fa-spider', 'fas fa-spider'],
	      defaultOption: 'far fa-spider',
	      keywords: 'arachnid bug charlotte crawl eight halloween insect spider spider'
	    }, {
	      className: 'far fa-spider-black-widow',
	      options: ['fat fa-spider-black-widow', 'fal fa-spider-black-widow', 'far fa-spider-black-widow', 'fas fa-spider-black-widow'],
	      defaultOption: 'far fa-spider-black-widow',
	      keywords: 'alert arachnid bug charlotte crawl danger dangerous deadly eight error halloween spider black widow'
	    }, {
	      className: 'far fa-spider-web',
	      options: ['fat fa-spider-web', 'fal fa-spider-web', 'far fa-spider-web', 'fas fa-spider-web'],
	      defaultOption: 'far fa-spider-web',
	      keywords: 'cobweb gossamer halloween spider spider web web spider web'
	    }, {
	      className: 'far fa-toilet-paper',
	      options: ['fat fa-toilet-paper', 'fal fa-toilet-paper', 'far fa-toilet-paper', 'fas fa-toilet-paper'],
	      defaultOption: 'far fa-toilet-paper',
	      keywords: 'bathroom covid 19 halloween holiday lavatory paper towels prank privy restroom roll roll of paper toilet toilet paper wipe toilet paper'
	    }, {
	      className: 'far fa-toilet-paper-blank',
	      options: ['fat fa-toilet-paper-blank', 'fal fa-toilet-paper-blank', 'far fa-toilet-paper-blank', 'fas fa-toilet-paper-blank'],
	      defaultOption: 'far fa-toilet-paper-blank',
	      keywords: 'bathroom halloween lavatory prank privy restroom roll toilet wipe toilet paper blank'
	    }, {
	      className: 'far fa-tombstone',
	      options: ['fat fa-tombstone', 'fal fa-tombstone', 'far fa-tombstone', 'fas fa-tombstone'],
	      defaultOption: 'far fa-tombstone',
	      keywords: 'cemetery cross dead death delete grave halloween holiday remove tombstone'
	    }, {
	      className: 'far fa-tombstone-blank',
	      options: ['fat fa-tombstone-blank', 'fal fa-tombstone-blank', 'far fa-tombstone-blank', 'fas fa-tombstone-blank'],
	      defaultOption: 'far fa-tombstone-blank',
	      keywords: 'cemetery cross dead death delete grave graveyard halloween headstone holiday remove tombstone tombstone blank'
	    }, {
	      className: 'far fa-wand',
	      options: ['fat fa-wand', 'fal fa-wand', 'far fa-wand', 'fas fa-wand'],
	      defaultOption: 'far fa-wand',
	      keywords: 'dungeons & dragons d&d dnd fantasy halloween holiday magic weapon wand'
	    }, {
	      className: 'far fa-wand-sparkles',
	      options: ['fat fa-wand-sparkles', 'fal fa-wand-sparkles', 'far fa-wand-sparkles', 'fas fa-wand-sparkles'],
	      defaultOption: 'far fa-wand-sparkles',
	      keywords: 'autocomplete automatic fantasy halloween holiday magic weapon witch wizard wand sparkles'
	    }]
	  }, {
	    id: 'hands',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_HANDS'),
	    items: [{
	      className: 'far fa-hand',
	      options: ['fat fa-hand', 'fal fa-hand', 'far fa-hand', 'fas fa-hand'],
	      defaultOption: 'far fa-hand',
	      keywords: 'raised hand backhand game halt palm raised raised back of hand roshambo stop hand'
	    }, {
	      className: 'far fa-hand-back-fist',
	      options: ['fat fa-hand-back-fist', 'fal fa-hand-back-fist', 'far fa-hand-back-fist', 'fas fa-hand-back-fist'],
	      defaultOption: 'far fa-hand-back-fist',
	      keywords: 'fist game roshambo hand back fist'
	    }, {
	      className: 'far fa-hand-back-point-down',
	      options: ['fat fa-hand-back-point-down', 'fal fa-hand-back-point-down', 'far fa-hand-back-point-down', 'fas fa-hand-back-point-down'],
	      defaultOption: 'far fa-hand-back-point-down',
	      keywords: 'backhand backhand index pointing down direction down finger hand point hand back point down'
	    }, {
	      className: 'far fa-hand-back-point-left',
	      options: ['fat fa-hand-back-point-left', 'fal fa-hand-back-point-left', 'far fa-hand-back-point-left', 'fas fa-hand-back-point-left'],
	      defaultOption: 'far fa-hand-back-point-left',
	      keywords: 'backhand backhand index pointing left direction finger hand index point hand back point left'
	    }, {
	      className: 'far fa-hand-back-point-ribbon',
	      options: ['fat fa-hand-back-point-ribbon', 'fal fa-hand-back-point-ribbon', 'far fa-hand-back-point-ribbon', 'fas fa-hand-back-point-ribbon'],
	      defaultOption: 'far fa-hand-back-point-ribbon',
	      keywords: 'remember remind hand back point ribbon'
	    }, {
	      className: 'far fa-hand-back-point-right',
	      options: ['fat fa-hand-back-point-right', 'fal fa-hand-back-point-right', 'far fa-hand-back-point-right', 'fas fa-hand-back-point-right'],
	      defaultOption: 'far fa-hand-back-point-right',
	      keywords: 'backhand backhand index pointing right direction finger hand index point hand back point right'
	    }, {
	      className: 'far fa-hand-back-point-up',
	      options: ['fat fa-hand-back-point-up', 'fal fa-hand-back-point-up', 'far fa-hand-back-point-up', 'fas fa-hand-back-point-up'],
	      defaultOption: 'far fa-hand-back-point-up',
	      keywords: 'backhand backhand index pointing up direction finger hand point up hand back point up'
	    }, {
	      className: 'far fa-hand-dots',
	      options: ['fat fa-hand-dots', 'fal fa-hand-dots', 'far fa-hand-dots', 'fas fa-hand-dots'],
	      defaultOption: 'far fa-hand-dots',
	      keywords: 'allergy freckles hand hives palm pox skin spots hand dots'
	    }, {
	      className: 'far fa-hand-fingers-crossed',
	      options: ['fat fa-hand-fingers-crossed', 'fal fa-hand-fingers-crossed', 'far fa-hand-fingers-crossed', 'fas fa-hand-fingers-crossed'],
	      defaultOption: 'far fa-hand-fingers-crossed',
	      keywords: 'cross crossed fingers finger hand hope luck promise hand fingers crossed'
	    }, {
	      className: 'far fa-hand-fist',
	      options: ['fat fa-hand-fist', 'fal fa-hand-fist', 'far fa-hand-fist', 'fas fa-hand-fist'],
	      defaultOption: 'far fa-hand-fist',
	      keywords: 'dungeons & dragons clenched d&d dnd fantasy fist hand ki monk punch raised fist resist strength unarmed combat hand fist'
	    }, {
	      className: 'far fa-hand-heart',
	      options: ['fat fa-hand-heart', 'fal fa-hand-heart', 'far fa-hand-heart', 'fas fa-hand-heart'],
	      defaultOption: 'far fa-hand-heart',
	      keywords: 'care charity donate help palm hand heart'
	    }, {
	      className: 'far fa-hand-holding',
	      options: ['fat fa-hand-holding', 'fal fa-hand-holding', 'far fa-hand-holding', 'fas fa-hand-holding'],
	      defaultOption: 'far fa-hand-holding',
	      keywords: 'carry lift hand holding'
	    }, {
	      className: 'far fa-hand-holding-box',
	      options: ['fat fa-hand-holding-box', 'fal fa-hand-holding-box', 'far fa-hand-holding-box', 'fas fa-hand-holding-box'],
	      defaultOption: 'far fa-hand-holding-box',
	      keywords: 'carry gift handling lift package hand holding box'
	    }, {
	      className: 'far fa-hand-holding-dollar',
	      options: ['fat fa-hand-holding-dollar', 'fal fa-hand-holding-dollar', 'far fa-hand-holding-dollar', 'fas fa-hand-holding-dollar'],
	      defaultOption: 'far fa-hand-holding-dollar',
	      keywords: '$ carry dollar sign donation giving lift money price hand holding dollar'
	    }, {
	      className: 'far fa-hand-holding-droplet',
	      options: ['fat fa-hand-holding-droplet', 'fal fa-hand-holding-droplet', 'far fa-hand-holding-droplet', 'fas fa-hand-holding-droplet'],
	      defaultOption: 'far fa-hand-holding-droplet',
	      keywords: 'carry covid 19 drought grow lift hand holding droplet'
	    }, {
	      className: 'far fa-hand-holding-heart',
	      options: ['fat fa-hand-holding-heart', 'fal fa-hand-holding-heart', 'far fa-hand-holding-heart', 'fas fa-hand-holding-heart'],
	      defaultOption: 'far fa-hand-holding-heart',
	      keywords: 'carry charity gift lift package hand holding heart'
	    }, {
	      className: 'far fa-hand-holding-magic',
	      options: ['fat fa-hand-holding-magic', 'fal fa-hand-holding-magic', 'far fa-hand-holding-magic', 'fas fa-hand-holding-magic'],
	      defaultOption: 'far fa-hand-holding-magic',
	      keywords: 'dungeons & dragons carry cast d&d dnd fantasy lift mage spell witch wizard hand holding magic'
	    }, {
	      className: 'far fa-hand-holding-medical',
	      options: ['fat fa-hand-holding-medical', 'fal fa-hand-holding-medical', 'far fa-hand-holding-medical', 'fas fa-hand-holding-medical'],
	      defaultOption: 'far fa-hand-holding-medical',
	      keywords: 'care covid 19 donate help hand holding medical'
	    }, {
	      className: 'far fa-hand-holding-seedling',
	      options: ['fat fa-hand-holding-seedling', 'fal fa-hand-holding-seedling', 'far fa-hand-holding-seedling', 'fas fa-hand-holding-seedling'],
	      defaultOption: 'far fa-hand-holding-seedling',
	      keywords: 'carry grow lift plant hand holding seedling'
	    }, {
	      className: 'far fa-hand-holding-skull',
	      options: ['fat fa-hand-holding-skull', 'fal fa-hand-holding-skull', 'far fa-hand-holding-skull', 'fas fa-hand-holding-skull'],
	      defaultOption: 'far fa-hand-holding-skull',
	      keywords: 'hamlet shakespeare yorick hand holding skull'
	    }, {
	      className: 'far fa-hand-horns',
	      options: ['fat fa-hand-horns', 'fal fa-hand-horns', 'far fa-hand-horns', 'fas fa-hand-horns'],
	      defaultOption: 'far fa-hand-horns',
	      keywords: 'devil horns finger hand horns rock rock on sign of the horns hand horns'
	    }, {
	      className: 'far fa-hand-lizard',
	      options: ['fat fa-hand-lizard', 'fal fa-hand-lizard', 'far fa-hand-lizard', 'fas fa-hand-lizard'],
	      defaultOption: 'far fa-hand-lizard',
	      keywords: 'game roshambo hand lizard'
	    }, {
	      className: 'far fa-hand-love',
	      options: ['fat fa-hand-love', 'fal fa-hand-love', 'far fa-hand-love', 'fas fa-hand-love'],
	      defaultOption: 'far fa-hand-love',
	      keywords: 'ily hand love you gesture peace hand love'
	    }, {
	      className: 'far fa-hand-middle-finger',
	      options: ['fat fa-hand-middle-finger', 'fal fa-hand-middle-finger', 'far fa-hand-middle-finger', 'fas fa-hand-middle-finger'],
	      defaultOption: 'far fa-hand-middle-finger',
	      keywords: 'finger flip the bird gesture hand hate middle finger rude hand middle finger'
	    }, {
	      className: 'far fa-hand-peace',
	      options: ['fat fa-hand-peace', 'fal fa-hand-peace', 'far fa-hand-peace', 'fas fa-hand-peace'],
	      defaultOption: 'far fa-hand-peace',
	      keywords: 'hand rest truce v victory victory hand hand peace'
	    }, {
	      className: 'far fa-hand-point-down',
	      options: ['fat fa-hand-point-down', 'fal fa-hand-point-down', 'far fa-hand-point-down', 'fas fa-hand-point-down'],
	      defaultOption: 'far fa-hand-point-down',
	      keywords: 'finger hand o down point hand point down'
	    }, {
	      className: 'far fa-hand-point-left',
	      options: ['fat fa-hand-point-left', 'fal fa-hand-point-left', 'far fa-hand-point-left', 'fas fa-hand-point-left'],
	      defaultOption: 'far fa-hand-point-left',
	      keywords: 'back finger hand o left left point previous hand point left'
	    }, {
	      className: 'far fa-hand-point-ribbon',
	      options: ['fat fa-hand-point-ribbon', 'fal fa-hand-point-ribbon', 'far fa-hand-point-ribbon', 'fas fa-hand-point-ribbon'],
	      defaultOption: 'far fa-hand-point-ribbon',
	      keywords: 'remember remind hand point ribbon'
	    }, {
	      className: 'far fa-hand-point-right',
	      options: ['fat fa-hand-point-right', 'fal fa-hand-point-right', 'far fa-hand-point-right', 'fas fa-hand-point-right'],
	      defaultOption: 'far fa-hand-point-right',
	      keywords: 'finger forward hand o right next point right hand point right'
	    }, {
	      className: 'far fa-hand-point-up',
	      options: ['fat fa-hand-point-up', 'fal fa-hand-point-up', 'far fa-hand-point-up', 'fas fa-hand-point-up'],
	      defaultOption: 'far fa-hand-point-up',
	      keywords: 'finger hand hand o up index index pointing up point up hand point up'
	    }, {
	      className: 'far fa-hand-pointer',
	      options: ['fat fa-hand-pointer', 'fal fa-hand-pointer', 'far fa-hand-pointer', 'fas fa-hand-pointer'],
	      defaultOption: 'far fa-hand-pointer',
	      keywords: 'arrow cursor select hand pointer'
	    }, {
	      className: 'far fa-hand-scissors',
	      options: ['fat fa-hand-scissors', 'fal fa-hand-scissors', 'far fa-hand-scissors', 'fas fa-hand-scissors'],
	      defaultOption: 'far fa-hand-scissors',
	      keywords: 'cut game roshambo hand scissors'
	    }, {
	      className: 'far fa-hand-sparkles',
	      options: ['fat fa-hand-sparkles', 'fal fa-hand-sparkles', 'far fa-hand-sparkles', 'fas fa-hand-sparkles'],
	      defaultOption: 'far fa-hand-sparkles',
	      keywords: 'clean covid 19 hygiene magic palm soap wash hand sparkles'
	    }, {
	      className: 'far fa-hand-spock',
	      options: ['fat fa-hand-spock', 'fal fa-hand-spock', 'far fa-hand-spock', 'fas fa-hand-spock'],
	      defaultOption: 'far fa-hand-spock',
	      keywords: 'finger hand live long palm prosper salute spock star trek vulcan vulcan salute hand spock'
	    }, {
	      className: 'far fa-hand-wave',
	      options: ['fat fa-hand-wave', 'fal fa-hand-wave', 'far fa-hand-wave', 'fas fa-hand-wave'],
	      defaultOption: 'far fa-hand-wave',
	      keywords: 'hand hello palm wave waving waving hand hand wave'
	    }, {
	      className: 'far fa-hands-bubbles',
	      options: ['fat fa-hands-bubbles', 'fal fa-hands-bubbles', 'far fa-hands-bubbles', 'fas fa-hands-bubbles'],
	      defaultOption: 'far fa-hands-bubbles',
	      keywords: 'covid 19 hygiene soap wash hands bubbles'
	    }, {
	      className: 'far fa-hands-clapping',
	      options: ['fat fa-hands-clapping', 'fal fa-hands-clapping', 'far fa-hands-clapping', 'fas fa-hands-clapping'],
	      defaultOption: 'far fa-hands-clapping',
	      keywords: 'applause clap clapping hands hand hands clapping'
	    }, {
	      className: 'far fa-hands-holding',
	      options: ['fat fa-hands-holding', 'fal fa-hands-holding', 'far fa-hands-holding', 'fas fa-hands-holding'],
	      defaultOption: 'far fa-hands-holding',
	      keywords: 'carry hold lift hands holding'
	    }, {
	      className: 'far fa-hands-holding-diamond',
	      options: ['fat fa-hands-holding-diamond', 'fal fa-hands-holding-diamond', 'far fa-hands-holding-diamond', 'fas fa-hands-holding-diamond'],
	      defaultOption: 'far fa-hands-holding-diamond',
	      keywords: 'carry gift handling package shipping hands holding diamond'
	    }, {
	      className: 'far fa-hands-holding-dollar',
	      options: ['fat fa-hands-holding-dollar', 'fal fa-hands-holding-dollar', 'far fa-hands-holding-dollar', 'fas fa-hands-holding-dollar'],
	      defaultOption: 'far fa-hands-holding-dollar',
	      keywords: '$ carry dollar sign donation giving hold money price usd hands holding dollar'
	    }, {
	      className: 'far fa-hands-holding-heart',
	      options: ['fat fa-hands-holding-heart', 'fal fa-hands-holding-heart', 'far fa-hands-holding-heart', 'fas fa-hands-holding-heart'],
	      defaultOption: 'far fa-hands-holding-heart',
	      keywords: 'carry gift help hold lift hands holding heart'
	    }, {
	      className: 'far fa-hands-praying',
	      options: ['fat fa-hands-praying', 'fal fa-hands-praying', 'far fa-hands-praying', 'fas fa-hands-praying'],
	      defaultOption: 'far fa-hands-praying',
	      keywords: 'kneel preach religion worship hands praying'
	    }, {
	      className: 'far fa-handshake',
	      options: ['fat fa-handshake', 'fal fa-handshake', 'far fa-handshake', 'fas fa-handshake'],
	      defaultOption: 'far fa-handshake',
	      keywords: 'agreement greeting meeting partnership handshake'
	    }, {
	      className: 'far fa-handshake-angle',
	      options: ['fat fa-handshake-angle', 'fal fa-handshake-angle', 'far fa-handshake-angle', 'fas fa-handshake-angle'],
	      defaultOption: 'far fa-handshake-angle',
	      keywords: 'aid assistance handshake partnership volunteering handshake angle'
	    }, {
	      className: 'far fa-handshake-simple',
	      options: ['fat fa-handshake-simple', 'fal fa-handshake-simple', 'far fa-handshake-simple', 'fas fa-handshake-simple'],
	      defaultOption: 'far fa-handshake-simple',
	      keywords: 'agreement greeting hand handshake meeting partnership shake handshake simple'
	    }, {
	      className: 'far fa-handshake-simple-slash',
	      options: ['fat fa-handshake-simple-slash', 'fal fa-handshake-simple-slash', 'far fa-handshake-simple-slash', 'fas fa-handshake-simple-slash'],
	      defaultOption: 'far fa-handshake-simple-slash',
	      keywords: 'broken covid 19 social distance handshake simple slash'
	    }, {
	      className: 'far fa-handshake-slash',
	      options: ['fat fa-handshake-slash', 'fal fa-handshake-slash', 'far fa-handshake-slash', 'fas fa-handshake-slash'],
	      defaultOption: 'far fa-handshake-slash',
	      keywords: 'broken covid 19 social distance handshake slash'
	    }, {
	      className: 'far fa-thumbs-down',
	      options: ['fat fa-thumbs-down', 'fal fa-thumbs-down', 'far fa-thumbs-down', 'fas fa-thumbs-down'],
	      defaultOption: 'far fa-thumbs-down',
	      keywords: ' 1 disagree disapprove dislike down hand social thumb thumbs down thumbs o down thumbs down'
	    }, {
	      className: 'far fa-thumbs-up',
	      options: ['fat fa-thumbs-up', 'fal fa-thumbs-up', 'far fa-thumbs-up', 'fas fa-thumbs-up'],
	      defaultOption: 'far fa-thumbs-up',
	      keywords: '+1 agree approve favorite hand like ok okay social success thumb thumbs up thumbs o up up yes you got it dude thumbs up'
	    }]
	  }, {
	    id: 'holidays',
	    name: landing_loc.Loc.getMessage('LANDING_ICONS_SECTION_HOLIDAYS'),
	    items: [{
	      className: 'far fa-angel',
	      options: ['fat fa-angel', 'fal fa-angel', 'far fa-angel', 'fas fa-angel'],
	      defaultOption: 'far fa-angel',
	      keywords: 'christmas decoration halo holiday holy michael landon wings xmas angel'
	    }, {
	      className: 'far fa-bells',
	      options: ['fat fa-bells', 'fal fa-bells', 'far fa-bells', 'fas fa-bells'],
	      defaultOption: 'far fa-bells',
	      keywords: 'alert christmas holiday notification reminder xmas bells'
	    }, {
	      className: 'far fa-calendar-heart',
	      options: ['fat fa-calendar-heart', 'fal fa-calendar-heart', 'far fa-calendar-heart', 'fas fa-calendar-heart'],
	      defaultOption: 'far fa-calendar-heart',
	      keywords: 'date day favorite month rsvp valentine year calendar heart'
	    }, {
	      className: 'far fa-candy-cane',
	      options: ['fat fa-candy-cane', 'fal fa-candy-cane', 'far fa-candy-cane', 'fas fa-candy-cane'],
	      defaultOption: 'far fa-candy-cane',
	      keywords: 'candy christmas holiday mint peppermint striped xmas candy cane'
	    }, {
	      className: 'far fa-carrot',
	      options: ['fat fa-carrot', 'fal fa-carrot', 'far fa-carrot', 'fas fa-carrot'],
	      defaultOption: 'far fa-carrot',
	      keywords: 'bugs bunny carrot food orange vegan vegetable carrot'
	    }, {
	      className: 'far fa-champagne-glass',
	      options: ['fat fa-champagne-glass', 'fal fa-champagne-glass', 'far fa-champagne-glass', 'fas fa-champagne-glass'],
	      defaultOption: 'far fa-champagne-glass',
	      keywords: 'alcohol bar beverage celebration champagne drink holiday party champagne glass'
	    }, {
	      className: 'far fa-champagne-glasses',
	      options: ['fat fa-champagne-glasses', 'fal fa-champagne-glasses', 'far fa-champagne-glasses', 'fas fa-champagne-glasses'],
	      defaultOption: 'far fa-champagne-glasses',
	      keywords: 'alcohol bar beverage celebrate celebration champagne clink clinking glasses drink glass holiday new year s eve party toast champagne glasses'
	    }, {
	      className: 'far fa-chestnut',
	      options: ['fat fa-chestnut', 'fal fa-chestnut', 'far fa-chestnut', 'fas fa-chestnut'],
	      defaultOption: 'far fa-chestnut',
	      keywords: 'nut plant chestnut'
	    }, {
	      className: 'far fa-cookie-bite',
	      options: ['fat fa-cookie-bite', 'fal fa-cookie-bite', 'far fa-cookie-bite', 'fas fa-cookie-bite'],
	      defaultOption: 'far fa-cookie-bite',
	      keywords: 'baked good bitten chips chocolate eat snack sweet treat cookie bite'
	    }, {
	      className: 'far fa-cupcake',
	      options: ['fat fa-cupcake', 'fal fa-cupcake', 'far fa-cupcake', 'fas fa-cupcake'],
	      defaultOption: 'far fa-cupcake',
	      keywords: 'birthday dessert frosting sweet cupcake'
	    }, {
	      className: 'far fa-deer',
	      options: ['fat fa-deer', 'fal fa-deer', 'far fa-deer', 'fas fa-deer'],
	      defaultOption: 'far fa-deer',
	      keywords: 'animal antlers blitzen comet cupid dancer dasher dee deer donner fauna mammal prancer reindeer vixen deer'
	    }, {
	      className: 'far fa-deer-rudolph',
	      options: ['fat fa-deer-rudolph', 'fal fa-deer-rudolph', 'far fa-deer-rudolph', 'fas fa-deer-rudolph'],
	      defaultOption: 'far fa-deer-rudolph',
	      keywords: 'animal antlers fauna mammal reindeer deer rudolph'
	    }, {
	      className: 'far fa-dreidel',
	      options: ['fat fa-dreidel', 'fal fa-dreidel', 'far fa-dreidel', 'fas fa-dreidel'],
	      defaultOption: 'far fa-dreidel',
	      keywords: 'clay hanukkah holiday jewish judaism toy dreidel'
	    }, {
	      className: 'far fa-face-grin-hearts',
	      options: ['fat fa-face-grin-hearts', 'fal fa-face-grin-hearts', 'far fa-face-grin-hearts', 'fas fa-face-grin-hearts'],
	      defaultOption: 'far fa-face-grin-hearts',
	      keywords: 'emoticon eye face love smile smiling face with heart eyes face grin hearts'
	    }, {
	      className: 'far fa-face-kiss-wink-heart',
	      options: ['fat fa-face-kiss-wink-heart', 'fal fa-face-kiss-wink-heart', 'far fa-face-kiss-wink-heart', 'fas fa-face-kiss-wink-heart'],
	      defaultOption: 'far fa-face-kiss-wink-heart',
	      keywords: 'beso emoticon face face blowing a kiss kiss love smooch face kiss wink heart'
	    }, {
	      className: 'far fa-fireplace',
	      options: ['fat fa-fireplace', 'fal fa-fireplace', 'far fa-fireplace', 'fas fa-fireplace'],
	      defaultOption: 'far fa-fireplace',
	      keywords: 'caliente flame hearth heat holiday mantle toasty warmth fireplace'
	    }, {
	      className: 'far fa-gift',
	      options: ['fat fa-gift', 'fal fa-gift', 'far fa-gift', 'fas fa-gift'],
	      defaultOption: 'far fa-gift',
	      keywords: 'box celebration christmas generosity gift giving holiday party present wrapped wrapped gift xmas gift'
	    }, {
	      className: 'far fa-gifts',
	      options: ['fat fa-gifts', 'fal fa-gifts', 'far fa-gifts', 'fas fa-gifts'],
	      defaultOption: 'far fa-gifts',
	      keywords: 'christmas generosity giving holiday party present wrapped xmas gifts'
	    }, {
	      className: 'far fa-gingerbread-man',
	      options: ['fat fa-gingerbread-man', 'fal fa-gingerbread-man', 'far fa-gingerbread-man', 'fas fa-gingerbread-man'],
	      defaultOption: 'far fa-gingerbread-man',
	      keywords: 'cookie decoration frosting holiday gingerbread man'
	    }, {
	      className: 'far fa-hat-santa',
	      options: ['fat fa-hat-santa', 'fal fa-hat-santa', 'far fa-hat-santa', 'fas fa-hat-santa'],
	      defaultOption: 'far fa-hat-santa',
	      keywords: 'accessory christmas claus clothing head holiday santa xmas hat santa'
	    }, {
	      className: 'far fa-head-side-heart',
	      options: ['fat fa-head-side-heart', 'fal fa-head-side-heart', 'far fa-head-side-heart', 'fas fa-head-side-heart'],
	      defaultOption: 'far fa-head-side-heart',
	      keywords: 'care love thought head side heart'
	    }, {
	      className: 'far fa-heart',
	      options: ['fat fa-heart', 'fal fa-heart', 'far fa-heart', 'fas fa-heart'],
	      defaultOption: 'far fa-heart',
	      keywords: 'black black heart blue blue heart brown brown heart card evil favorite game green green heart heart heart suit like love orange orange heart purple purple heart red heart relationship valentine white white heart wicked yellow yellow heart heart'
	    }, {
	      className: 'far fa-holly-berry',
	      options: ['fat fa-holly-berry', 'fal fa-holly-berry', 'far fa-holly-berry', 'fas fa-holly-berry'],
	      defaultOption: 'far fa-holly-berry',
	      keywords: 'catwoman christmas decoration flora halle holiday ororo munroe plant storm xmas holly berry'
	    }, {
	      className: 'far fa-jack-o-lantern',
	      options: ['fat fa-jack-o-lantern', 'fal fa-jack-o-lantern', 'far fa-jack-o-lantern', 'fas fa-jack-o-lantern'],
	      defaultOption: 'far fa-jack-o-lantern',
	      keywords: 'carve celebration face halloween jack jack o lantern lantern pumpkin smile jack o lantern'
	    }, {
	      className: 'far fa-lights-holiday',
	      options: ['fat fa-lights-holiday', 'fal fa-lights-holiday', 'far fa-lights-holiday', 'fas fa-lights-holiday'],
	      defaultOption: 'far fa-lights-holiday',
	      keywords: 'bulb christmas decoration holiday string xmas lights holiday'
	    }, {
	      className: 'far fa-menorah',
	      options: ['fat fa-menorah', 'fal fa-menorah', 'far fa-menorah', 'fas fa-menorah'],
	      defaultOption: 'far fa-menorah',
	      keywords: 'candle hanukkah jewish judaism light menorah'
	    }, {
	      className: 'far fa-mistletoe',
	      options: ['fat fa-mistletoe', 'fal fa-mistletoe', 'far fa-mistletoe', 'fas fa-mistletoe'],
	      defaultOption: 'far fa-mistletoe',
	      keywords: 'awkward christmas decoration flora holiday kiss plant tradition trap xmas mistletoe'
	    }, {
	      className: 'far fa-mug-hot',
	      options: ['fat fa-mug-hot', 'fal fa-mug-hot', 'far fa-mug-hot', 'fas fa-mug-hot'],
	      defaultOption: 'far fa-mug-hot',
	      keywords: 'beverage caliente cocoa coffee cup drink holiday hot hot beverage hot chocolate steam steaming tea warmth mug hot'
	    }, {
	      className: 'far fa-narwhal',
	      options: ['fat fa-narwhal', 'fal fa-narwhal', 'far fa-narwhal', 'fas fa-narwhal'],
	      defaultOption: 'far fa-narwhal',
	      keywords: 'animal fauna holiday ivory mammal tusk unicorn whale narwhal'
	    }, {
	      className: 'far fa-ornament',
	      options: ['fat fa-ornament', 'fal fa-ornament', 'far fa-ornament', 'fas fa-ornament'],
	      defaultOption: 'far fa-ornament',
	      keywords: 'christmas decoration holiday xmas ornament'
	    }, {
	      className: 'far fa-party-bell',
	      options: ['fat fa-party-bell', 'fal fa-party-bell', 'far fa-party-bell', 'fas fa-party-bell'],
	      defaultOption: 'far fa-party-bell',
	      keywords: 'ball celebrate celebration confetti confetti ball party tada party bell'
	    }, {
	      className: 'far fa-party-horn',
	      options: ['fat fa-party-horn', 'fal fa-party-horn', 'far fa-party-horn', 'fas fa-party-horn'],
	      defaultOption: 'far fa-party-horn',
	      keywords: 'celebrate celebration confetti party party popper popper tada trumpet party horn'
	    }, {
	      className: 'far fa-pinata',
	      options: ['fat fa-pinata', 'fal fa-pinata', 'far fa-pinata', 'fas fa-pinata'],
	      defaultOption: 'far fa-pinata',
	      keywords: 'celebration party pi?ata pinata'
	    }, {
	      className: 'far fa-rv',
	      options: ['fat fa-rv', 'fal fa-rv', 'far fa-rv', 'fas fa-rv'],
	      defaultOption: 'far fa-rv',
	      keywords: 'camping cousin eddie recreational travel vehicle rv'
	    }, {
	      className: 'far fa-sleigh',
	      options: ['fat fa-sleigh', 'fal fa-sleigh', 'far fa-sleigh', 'fas fa-sleigh'],
	      defaultOption: 'far fa-sleigh',
	      keywords: 'christmas claus fly holiday santa sled snow xmas sleigh'
	    }, {
	      className: 'far fa-snowman',
	      options: ['fat fa-snowman', 'fal fa-snowman', 'far fa-snowman', 'fas fa-snowman'],
	      defaultOption: 'far fa-snowman',
	      keywords: 'cold decoration frost frosty holiday snow snowman snowman without snow snowman'
	    }, {
	      className: 'far fa-snowman-head',
	      options: ['fat fa-snowman-head', 'fal fa-snowman-head', 'far fa-snowman-head', 'fas fa-snowman-head'],
	      defaultOption: 'far fa-snowman-head',
	      keywords: 'carrot hat snowman winter snowman head'
	    }, {
	      className: 'far fa-star-christmas',
	      options: ['fat fa-star-christmas', 'fal fa-star-christmas', 'far fa-star-christmas', 'fas fa-star-christmas'],
	      defaultOption: 'far fa-star-christmas',
	      keywords: 'bethlehem christmas holiday north xmas star christmas'
	    }, {
	      className: 'far fa-stocking',
	      options: ['fat fa-stocking', 'fal fa-stocking', 'far fa-stocking', 'fas fa-stocking'],
	      defaultOption: 'far fa-stocking',
	      keywords: 'christmas clothing decoration gift holiday present sock tradition xmas stocking'
	    }, {
	      className: 'far fa-tree-christmas',
	      options: ['fat fa-tree-christmas', 'fal fa-tree-christmas', 'far fa-tree-christmas', 'fas fa-tree-christmas'],
	      defaultOption: 'far fa-tree-christmas',
	      keywords: 'christmas christmas tree celebration christmas decorated decorations flora holiday lights plant star tree xmas tree christmas'
	    }, {
	      className: 'far fa-tree-decorated',
	      options: ['fat fa-tree-decorated', 'fal fa-tree-decorated', 'far fa-tree-decorated', 'fas fa-tree-decorated'],
	      defaultOption: 'far fa-tree-decorated',
	      keywords: 'christmas decorations flora holiday lights plant xmas tree decorated'
	    }, {
	      className: 'far fa-turkey',
	      options: ['fat fa-turkey', 'fal fa-turkey', 'far fa-turkey', 'fas fa-turkey'],
	      defaultOption: 'far fa-turkey',
	      keywords: 'bird chicken meal meat poultry seasonal thanksgiving turkey'
	    }, {
	      className: 'far fa-wreath',
	      options: ['fat fa-wreath', 'fal fa-wreath', 'far fa-wreath', 'fas fa-wreath'],
	      defaultOption: 'far fa-wreath',
	      keywords: 'christmas decoration door holiday welcome xmas wreath'
	    }]
	  }]
	};

	exports.FontAwesome6_2 = FontAwesome6_2;

}((this.BX.Landing.Icon = this.BX.Landing.Icon || {}),BX.Landing));
//# sourceMappingURL=fontawesome6_2.bundle.js.map
