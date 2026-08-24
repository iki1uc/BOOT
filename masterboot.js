# BOOT.geo
zone: "BOOT"
pos: [0,0,0]
dir: "C"
val: 0
mov: "none"

memory:
  type: "ram-rom"
  mode: "virtual"
  location: "RAM"
  bootable: true

rules:
  - keine Drift
  - keine Fremdlogik
  - OS-only
