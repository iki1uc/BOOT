const DOOR = {
  mode: "single-entry",
  action: () => loadKernel(),
  fail: () => halt("NO KERNEL")
};

const DOO = {
  readSector: () => BIOS.INT13.read(),
  offset: 0x0000,
  kernelLBA: 1,
  kernelSize: 32 * 1024
};

const RESPO = {
  log: msg => console.log("[BOOT]", msg),
  error: msg => console.error("[ERROR]", msg),
  ok: msg => console.log("[OK]", msg)
};

const OS = {
  kernel: "/boot/kernel.bin",
  entry: 0x1000,
  map: "flat",
  handoff: () => jump(OS.entry)
};

const NC_engine = {
  cpu: "real-mode",
  memDetect: () => detectMemory(0x413),
  stack: 0x9000,
  disk: () => BIOS.INT13.enable(),
  video: () => BIOS.INT10.textmode(0x03)
};

const _243 = {
  timer: () => BIOS.INT1A(),
  stamp: () => recordStamp(),
  sync: arg => sync(arg)
};

const SCORE = {
  trace: true,
  write: "/boot/trace.log",
  mode: "sequential"
};

const WETTE = {
  checksum: "CRC16",
  verify: file => verifyCRC(file),
  fail: () => halt("CRC ERROR")
};

const SLIDE = {
  relocate: addr => relocateKernel(addr),
  mode: "linear"
};
