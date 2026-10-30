export interface DicomStudy {
  external_id: string;
  study_uid: string | null;
  study_date: string;
  study_description: string;
  study_modalities: string[];
  study_series: DicomSeries[];
  has_report: boolean;
  // Pending rows: MPPS status received, DICOM study not linked yet
  is_pending?: boolean;
  mpps_status?: string;
  service_request_id?: string;
}

export interface DicomSeries {
  series_uid: string;
  series_number: string;
  series_instance_count: string;
  series_description: string;
  series_protocol: string;
}