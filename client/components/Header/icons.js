import React from "react";

export const HamSVG = props => (
  <svg width={23} height={17} className="icons__ham" {...props}>
    <path fill="#312F3B" d="M0 0h23v3H0V0zm5 7h18v3H5V7zm5 7h13v3H10v-3z" />
  </svg>
);

export const ChevrondownSVG = props => (
  <svg width={16} height={10} className="icons__down" {...props}>
    <path fill="#0643FF" d="M7 9l1 1 8-8-2-2-6 5.999L2 0 0 2z" />
  </svg>
);

export const MailSVG = props => (
  <svg viewBox="0 0 20 20" className="icons__mail" {...props}>
    <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
  </svg>
);

export const TwitterSVG = props => (
  <svg className="icons__twitter" viewBox="0 0 22 18" {...props}>
    <path d="M22 2.107c-.81.358-1.679.6-2.591.708A4.52 4.52 0 0 0 21.392.33c-.874.515-1.84.889-2.867 1.092A4.507 4.507 0 0 0 15.23 0c-2.493 0-4.514 2.014-4.514 4.497 0 .352.04.696.117 1.024A12.827 12.827 0 0 1 1.533.822 4.491 4.491 0 0 0 2.93 6.826 4.525 4.525 0 0 1 .885 6.26v.056a4.506 4.506 0 0 0 3.62 4.41 4.586 4.586 0 0 1-1.19.158c-.29 0-.572-.029-.849-.083a4.514 4.514 0 0 0 4.215 3.123 9.074 9.074 0 0 1-5.605 1.923c-.364 0-.723-.022-1.076-.062a12.789 12.789 0 0 0 6.918 2.024c8.302 0 12.84-6.854 12.84-12.797l-.015-.582A8.996 8.996 0 0 0 22 2.107z" />
  </svg>
);
