/**
 * center - jQuery library to make element center as compare to his outside element 
 * @version v1.0.0
 */
 
$('document').ready(function(e) {
	
/*	
* Get outside element height and width 
* Store into array 
*/  	
	var z = [], i = 0;
	$('[data-box]').each(function() {
		z[i] = [];
		n = $(this).children('[data-center], [data-hcenter], [data-vcenter], [data-mhcenter], [data-mvcenter]').length;	
		child = $(this).children().length;
		
		
			j = 0 , k = 0, x = 0; 
			z[i][j++] = $(this).children('[data-center]').length;
			z[i][j++] = $(this).children('[data-hcenter]').length;
			z[i][j++] = $(this).children('[data-vcenter]').length;
			z[i][j++] = $(this).children('[data-mhcenter]').length;
			z[i][j++] = $(this).children('[data-mvcenter]').length;
			
			if(z[i][x++] != 0){
				k++;		
			}
			if(z[i][x++] != 0){
				k++;		
			}
			if(z[i][x++] != 0){
				k++;		
			}
			if(z[i][x++] != 0){
				k++;		
			}
			if(z[i][x++] != 0){
				k++;		
			}
		
		if(n != child){
			throw new Error("data-box inside can't set element without center.js data element (data-center, data-vcenter, data-hcenter, data-mvcenter, data-mhcenter) ");
		}else if($(this).children('[data-center]').length > 1){
				throw new Error("Can't use multiple data-center in one data-box. Use data-mhcenter or data-mvcenter as your requirement");
		}else if($(this).children('[data-vcenter]').length > 1){
				throw new Error("Can't use multiple data-vcenter in one data-box. Use data-mhcenter or data-mvcenter as your requirement");
		}else if($(this).children('[data-hcenter]').length > 1){
				throw new Error("Can't use multiple data-hcenter in one data-box. Use data-mhcenter or data-mvcenter as your requirement");
		}else if(k != 1){
				throw new Error("Can't use two or more type center.js data element in one data-box");
		}

		i++;
	});
	
	
    var outelewidth = [],
        outeleheight = [];
    	i = 0, j = 0;
		
    $('[data-box]').each(function() {
        outelewidth[i++] = $(this).width();
        outeleheight[j++] = $(this).height();
		//$(this).css('text-align','center');
    });

/*	
* Get inside element height and width 
* Store into array 
*/

    var inseleheight = [],
        inselewidth = [];

    x = 0;
    $('[data-box]').each(function() {

        inseleheight[x] = [];
        inselewidth[x] = [];
        var y = 0;

        $(this).children('[data-center], [data-hcenter], [data-vcenter], [data-mhcenter], [data-mvcenter]').each(function() {
            inseleheight[x][y] = $(this).outerHeight();
            inselewidth[x][y] = $(this).outerWidth();
            y++;

        });
        x++;
    });

/*	
* Only one inside element 
* Use data-center
* vertically and horizontally center
* Inside and outside element height and width
* Through get top and left margin for inside element
*/
    z = 0;
    $('[data-box]').each(function() {

        for (var y = 0; y < $(this).children('[data-center]').length; y++) {
			
            $(this).children('[data-center]').each(function() {
                $(this).css('margin-top', (outeleheight[z] - inseleheight[z][y]) / 2);
                $(this).css('margin-left', (outelewidth[z] - inselewidth[z][y]) / 2);

            });
        }
        z++;
    });

/*	
* Multipal inside element
* Use data-mhcenter
* Only horizontally center
* Inside and outside element height and width
* Through get top and left margin for inside element
*/

    z = 0;
    $('[data-box]').each(function() {

        var y = 0;
        n = $(this).children('[data-mhcenter]').length;

        $(this).children('[data-mhcenter]').each(function() {
            inseleheight[z][n] = 0;
            for (var i = 0; i < n; i++) {
                inseleheight[z][n] = inseleheight[z][i] + inseleheight[z][n];
            }
            $(this).css('margin-top', (outeleheight[z] - inseleheight[z][n]) / (n + 1));
            $(this).css('margin-left', (outelewidth[z] - inselewidth[z][y]) / 2);
            y++;
        });
        z++;
    });
	
/*	
* Multipal inside element
* Use data-mvcenter
* Only vertically center
* Inside and outside element height and width
* Through get top and left margin for inside element
*/

    z = 0;
    $('[data-box]').each(function() {

        var y = 0;
        n = $(this).children('[data-mvcenter]').length;

        $(this).children('[data-mvcenter]').each(function() {
            inselewidth[z][n] = 0;
            for (var i = 0; i < n; i++) {
                inselewidth[z][n] = inselewidth[z][i] + inselewidth[z][n];
            }
			if( y == 0){
				$(this).css('margin-left', (outelewidth[z] - inselewidth[z][n]) / (n + 1));	
			}else{
				$(this).css('margin-left', ( (outelewidth[z] - inselewidth[z][n]) / (n + 1) - 5));		
			}
            $(this).css('margin-top', (outeleheight[z] - inseleheight[z][y]) / 2);
            $(this).css('display', 'inline-block');
            $(this).css('vertical-align', 'top');
            y++;
        });
        z++;
    });

/*	
* Only one inside element 
* Use data-vcenter
* Only vertically center
* Inside and outside element height and width
* Through get top and left margin for inside element
*/

    z = 0;
    $('[data-box]').each(function() {
		
        for (var y = 0; y < $(this).children('[data-vcenter]').length; y++) {
            $(this).children('[data-vcenter]').each(function() {
                $(this).css('margin-top', (outeleheight[z] - inseleheight[z][y]) / 2);
            });
        }
        z++;
    });


/*	
* Only one inside element 
* Use data-hcenter
* Only horizontally center
* Inside and outside element height and width
* Through get top and left margin for inside element
*/

    z = 0;
    $('[data-box]').each(function() {
		
		
        for (var y = 0; y < $(this).children('[data-hcenter]').length; y++) {
            $(this).children('[data-hcenter]').each(function() {
                $(this).css('margin-left', (outelewidth[z] - inselewidth[z][y]) / 2);
            });
        }
        z++;
    });



/*Responsive center*/
   
    $(window).resize(function() {

/*	
* Get outside element height and width 
* Store into array 
*/  	
	var z = [], i = 0;
	$('[data-box]').each(function() {
		z[i] = [];
		n = $(this).children('[data-center], [data-hcenter], [data-vcenter], [data-mhcenter], [data-mvcenter]').length;	
		child = $(this).children().length;
		
		
			j = 0 , k = 0, x = 0; 
			z[i][j++] = $(this).children('[data-center]').length;
			z[i][j++] = $(this).children('[data-hcenter]').length;
			z[i][j++] = $(this).children('[data-vcenter]').length;
			z[i][j++] = $(this).children('[data-mhcenter]').length;
			z[i][j++] = $(this).children('[data-mvcenter]').length;
			
			if(z[i][x++] != 0){
				k++;		
			}
			if(z[i][x++] != 0){
				k++;		
			}
			if(z[i][x++] != 0){
				k++;		
			}
			if(z[i][x++] != 0){
				k++;		
			}
			if(z[i][x++] != 0){
				k++;		
			}
		
		if(n != child){
			throw new Error("data-box inside can't set element without center.js data element (data-center, data-vcenter, data-hcenter, data-mvcenter, data-mhcenter) ");
		}else if($(this).children('[data-center]').length > 1){
				throw new Error("Can't use multiple data-center in one data-box. Use data-mhcenter or data-mvcenter as your requirement");
		}else if($(this).children('[data-vcenter]').length > 1){
				throw new Error("Can't use multiple data-vcenter in one data-box. Use data-mhcenter or data-mvcenter as your requirement");
		}else if($(this).children('[data-hcenter]').length > 1){
				throw new Error("Can't use multiple data-hcenter in one data-box. Use data-mhcenter or data-mvcenter as your requirement");
		}else if(k != 1){
				throw new Error("Can't use two or more type center.js data element in one data-box");
		}

		i++;
	});
	
	
    var outelewidth = [],
        outeleheight = [];
    	i = 0, j = 0;
		
    $('[data-box]').each(function() {
        outelewidth[i++] = $(this).width();
        outeleheight[j++] = $(this).height();
		//$(this).css('text-align','center');
    });

/*	
* Get inside element height and width 
* Store into array 
*/

    var inseleheight = [],
        inselewidth = [];

    x = 0;
    $('[data-box]').each(function() {

        inseleheight[x] = [];
        inselewidth[x] = [];
        var y = 0;

        $(this).children('[data-center], [data-hcenter], [data-vcenter], [data-mhcenter], [data-mvcenter]').each(function() {
            inseleheight[x][y] = $(this).outerHeight();
            inselewidth[x][y] = $(this).outerWidth();
            y++;

        });
        x++;
    });

/*	
* Only one inside element 
* Use data-center
* vertically and horizontally center
* Inside and outside element height and width
* Through get top and left margin for inside element
*/
    z = 0;
    $('[data-box]').each(function() {

        for (var y = 0; y < $(this).children('[data-center]').length; y++) {
			
            $(this).children('[data-center]').each(function() {
                $(this).css('margin-top', (outeleheight[z] - inseleheight[z][y]) / 2);
                $(this).css('margin-left', (outelewidth[z] - inselewidth[z][y]) / 2);

            });
        }
        z++;
    });

/*	
* Multipal inside element
* Use data-mhcenter
* Only horizontally center
* Inside and outside element height and width
* Through get top and left margin for inside element
*/

    z = 0;
    $('[data-box]').each(function() {

        var y = 0;
        n = $(this).children('[data-mhcenter]').length;

        $(this).children('[data-mhcenter]').each(function() {
            inseleheight[z][n] = 0;
            for (var i = 0; i < n; i++) {
                inseleheight[z][n] = inseleheight[z][i] + inseleheight[z][n];
            }
            $(this).css('margin-top', (outeleheight[z] - inseleheight[z][n]) / (n + 1));
            $(this).css('margin-left', (outelewidth[z] - inselewidth[z][y]) / 2);
            y++;
        });
        z++;
    });
	
/*	
* Multipal inside element
* Use data-mvcenter
* Only vertically center
* Inside and outside element height and width

* Through get top and left margin for inside element
*/

    z = 0;
    $('[data-box]').each(function() {

        var y = 0;
        n = $(this).children('[data-mvcenter]').length;

        $(this).children('[data-mvcenter]').each(function() {
            inselewidth[z][n] = 0;
            for (var i = 0; i < n; i++) {
                inselewidth[z][n] = inselewidth[z][i] + inselewidth[z][n];
            }
			if( y == 0){
				$(this).css('margin-left', (outelewidth[z] - inselewidth[z][n]) / (n + 1));	
			}else{
				$(this).css('margin-left', ( (outelewidth[z] - inselewidth[z][n]) / (n + 1) - 5));		
			}
            $(this).css('margin-top', (outeleheight[z] - inseleheight[z][y]) / 2);
            $(this).css('display', 'inline-block');
            $(this).css('vertical-align', 'top');
            y++;
        });
        z++;
    });

/*	
* Only one inside element 
* Use data-vcenter
* Only vertically center
* Inside and outside element height and width
* Through get top and left margin for inside element
*/

    z = 0;
    $('[data-box]').each(function() {
		
        for (var y = 0; y < $(this).children('[data-vcenter]').length; y++) {
            $(this).children('[data-vcenter]').each(function() {
                $(this).css('margin-top', (outeleheight[z] - inseleheight[z][y]) / 2);
            });
        }
        z++;
    });


/*	
* Only one inside element 
* Use data-hcenter
* Only horizontally center
* Inside and outside element height and width
* Through get top and left margin for inside element
*/

    z = 0;
    $('[data-box]').each(function() {
		
		
        for (var y = 0; y < $(this).children('[data-hcenter]').length; y++) {
            $(this).children('[data-hcenter]').each(function() {
                $(this).css('margin-left', (outelewidth[z] - inselewidth[z][y]) / 2);
            });
        }
        z++;
    });

	
    });




});