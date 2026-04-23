"use client";

/**
 * ViewfinderCorners — Esquinas en L que enmarcan el viewport.
 * 4 brackets fijos, estilo visor de cámara táctica.
 */
export default function ViewfinderCorners() {
  const baseClass =
    "fixed w-10 h-10 pointer-events-none z-[100] border-white/40";

  return (
    <>
      <div className={`${baseClass} top-8 left-8 border-t-2 border-l-2`} />
      <div className={`${baseClass} top-8 right-8 border-t-2 border-r-2`} />
      <div className={`${baseClass} bottom-8 left-8 border-b-2 border-l-2`} />
      <div className={`${baseClass} bottom-8 right-8 border-b-2 border-r-2`} />
    </>
  );
}
