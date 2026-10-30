export const MAX_OTP_RESEND_COUNT = 3;
export const SUPPORTED_AUTH_METHODS = ["AADHAAR_OTP", "MOBILE_OTP"] as const;

export const I18NNAMESPACE = "care_radiology_fe";

// Poll the study list while a scan is pending (MPPS received, study not linked yet)
export const PENDING_STUDY_REFETCH_INTERVAL = 30_000;
