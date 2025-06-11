const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const USER_API_END_POINT = `${BACKEND_URL}/api/v1/users`;
export const JOB_API_END_POINT = `${BACKEND_URL}/api/v1/jobs`; // fixed
export const APPLICATION_API_END_POINT = `${BACKEND_URL}/api/v1/applications`; // fixed
export const COMPANY_API_END_POINT = `${BACKEND_URL}/api/v1/companies`; // fixed
export const SAVE_JOB_API_END_POINT = `${BACKEND_URL}/api/v1/savedjobs`; // also fixed if you're using `savedJobRoute`
