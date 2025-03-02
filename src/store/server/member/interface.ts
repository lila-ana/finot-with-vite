export interface Member {
  full_name: string;
  gender: "male" | "female";
  date_of_birth: string;
  blood_type: "O+" | "O-" | "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-";
  marital_status: "single" | "married";
  address: string;
  phone_number: string;
  email_address: string;
  membership_status: "active" | "inactive";
  profession_detail: string;
  date_of_baptism: string;
  elder_id: string;
  class_id: string;
  previous_church_affiliation: string;
  profileImage: string;
  family_members: string;
  children_info: string;
  areas_of_interest: string;
  spiritual_gifts: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  emergency_contact_relation: string;
  updated_at: Date;
  class_name?: string;
}

export type Members = Member[];
