export function getDynamicCorsOrigin(origin: string | null): string {
  const allowedOrigins = [
    "https://<BRAND_NAME>.com.br",
    "https://app.<BRAND_NAME>.com.br",
  ];

  if (origin && allowedOrigins.includes(origin)) {
    return origin;
  }

  // Se não for reconhecido, bloqueia
  return "null";
}
