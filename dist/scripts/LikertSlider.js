!function(a){a.fn.slider=function(b,c){var d={random:!1,stops:0,step:0},e=["I strongly disagree","I disagree","Neutral","I agree","I strongly agree"],b=a.extend(d,b),c=a.extend(e,c),f=this.find("button"),g=this.find(".selection-tag"),h=this;return this.initialize=function(){b.stops=f.length,step=1,f.each(function(b,c){a(c).attr("data-seq",b).on("click",h.changeSelectedButton).on("mouseover",h.hoverButton).on("mouseout",h.outButton)}),this.selected=b.random?Math.round(Math.random()*f.length-1):Math.floor(b.stops/2),b.random&&(this.switchActiveButton(),f.eq(this.selected).trigger("click"))},this.switchActiveButton=function(){f.each(function(b,c){a(c).removeClass("active")}),f.eq(this.selected).addClass("active")},this.updateTag=function(a,b){g.html(c[a]),"undefined"!=typeof b&&b===!0?g.addClass("highlight"):g.removeClass("highlight")},this.changeSelectedButton=function(b){h.selected=a(b.currentTarget).attr("data-seq"),h.switchActiveButton(),h.updateTag(h.selected,!0),h.clicked=!0},this.hoverButton=function(b){var c=a(b.currentTarget).attr("data-seq");h.updateTag(c,c===h.selected)},this.outButton=function(){h.clicked?h.updateTag(h.selected,!0):g.html("")},this.getSelected=function(){return h.selected},this.initialize(),this}}(jQuery);