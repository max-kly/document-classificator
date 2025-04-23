export interface UploadRecord {
    id: number;
    created_at: string;
    file_name: string;
    category: string;
    confidence_rate: string;
    url: string | null;
}