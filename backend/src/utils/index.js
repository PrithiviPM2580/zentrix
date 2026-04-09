export const MODEL = Object.freeze({
  GEMIPRO: "gemini-2.5-pro",
  GEMI_FLASH: "gemini-2.5-flash",
  GEMI_FLASH_PREVIEW_09_2025: "gemini-2.5-flash-preview-09-2025",
  GEMI_FLASH_LITE: "gemini-2.5-flash-lite",
  GEMI_FLASH_LITE_PREVIEW_09_2025: "gemini-2.5-flash-lite-preview-09-2025",
});

export const DEFAULT_MODEL = MODEL.GEMI_FLASH_LITE;

export function globalErrorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
}
