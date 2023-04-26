import { JobData } from "./api"

export type ButtonProps = {
    job: JobData,
    styles?: string,
    onClick: () => void
}
