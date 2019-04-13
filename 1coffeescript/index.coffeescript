###
Simple effect for roll over on grids, where the content slides based on the previous position.

You can see also in use here: http://worldbakingday.com

Libraries: jQuery and jQuery.transit
###

$ ->
  grid = $ ".grid"
  current = index:-1, column:0, line:0
  
  columns = 10
  easing = "cubic-bezier(0.165, 0.840, 0.440, 1.000)"
  time = 400
    
  grid.on "mouseenter", "a", (e) =>
    el = $ e.currentTarget
    info = el.find ".info"
    image = el.find "img"
    index = el.parent().index()
    column = index % columns
    line = Math.floor(index / columns)
    console.log index, column, line
    item = el:el, index:index, column:column, line:line, info:info, image:image
    
    # stop if the 
    return if current.el and current.index is index
  
    if line == current.line and column > current.column
      showItem item, "-100%", 0, "25%", 0
      hideItem current, "100%", 0, "-25%", 0
    else if line == current.line and column < current.column
      showItem item, "100%", 0, "-25%", 0
      hideItem current, "-100%", 0, "25%", 0
    else if line > current.line and column == current.column
      showItem item, 0, "-100%", 0, "25%"
      hideItem current, 0, "100%", 0, "-25%"
    else
      showItem item, 0, "100%", 0, "-25%"
      hideItem current, 0, "-100%", 0, "25%"
  
    current = item
  
  showItem = (item, infoX, infoY, imageX, imageY) ->
    item.info.stop().css(x:infoX, y:infoY, display:"block").transition x:0, y:0, duration:time, easing:easing
    item.image.stop().transition x:imageX, y:imageY, opacity:.5, duration:time, easing:easing
  
  hideItem = (item, infoX, infoY, imageX, imageY) ->
    return unless item.el
    item.info.stop().transition x:infoX, y:infoY, duration:time, easing:easing
    item.image.stop().css(x:imageX, y:imageY, opacity:.5).transition x:0, y:0, opacity:1, duration:time, easing:easing