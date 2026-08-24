masterboot = {

  load: function(file) {
    return OS.read(file)
  },

  apply: function(geo) {
    OS.zone = geo.zone
    OS.pos  = geo.pos
    OS.dir  = geo.dir
    OS.val  = geo.val
    OS.mov  = geo.mov
  },

  start: function() {
    let geo = this.load("BOOT.geo")
    this.apply(geo)
  }
}
