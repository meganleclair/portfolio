/**
 * Signal profile link for case study footers (“You gotta Signal”).
 * In Signal: Settings → your name / profile → Share / copy link (looks like
 * https://signal.me/#eu/yourname.01 or a phone link).
 * Or set NEXT_PUBLIC_SIGNAL_URL in `.env.local`.
 * Leave both empty and the footer line stays hidden.
 */
const SIGNAL_URL_INLINE = "";

export function getSignalContactUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SIGNAL_URL?.trim();
  if (fromEnv) return fromEnv;
  return SIGNAL_URL_INLINE.trim();
}
