import React from "react";
import { ButtonProps } from "../types";

export default function Button({job, styles, onClick}: ButtonProps) {
    return (
      <button key={job.id} onClick={onClick} className={styles}>
        {job.company}
      </button>
    );
}