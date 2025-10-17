// BlockRoll Constants

export const THEME_CONFIG = {
  light: "light",
  dark: "dark",
} as const;

export const APP_CONFIG = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  WS_URL: process.env.NEXT_PUBLIC_WS_URL || "http://localhost:5000",
  GITHUB_URL: "https://github.com/BlockRoll",
  TWITTER_URL: "",
  DOCS_URL: "",
} as const;

export const FILE_CONFIG = {
  MAX_FILE_SIZE: 100 * 1024 * 1024, // 100MB
  ALLOWED_TYPES: [
    "image/*",
    "video/*",
    "audio/*",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/*",
  ],
} as const;

export const NOTIFICATION_TYPES = {
  FILE_SHARED: "file_shared",
  FILE_ACCESSED: "file_accessed",
  ACCESS_REVOKED: "access_revoked",
  SECURITY_ALERT: "security_alert",
  WORKSPACE_INVITE: "workspace_invite",
} as const;
