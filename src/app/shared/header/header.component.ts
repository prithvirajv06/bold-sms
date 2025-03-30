import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuItems = [
    {
      label: 'Overview',
      child: [
        {
          label: 'Dashboard',
        },
      ],
    },
    {
      label: 'Student',
      child: [
        {
          label: 'Student Information',
        },
        {
          label: 'Admission',
        },
        {
          label: 'Student Tracking',
        },
      ],
    },
    {
      label: 'Academic',
      child: [
        {
          label: 'Academics',
        },
        {
          label: 'Examination',
        },
      ],
    },
    {
      label: 'Staff',
      child: [
        {
          label: 'Staff Information',
        },
        {
          label: 'Staff Performance',
        },
      ],
    },

    {
      label: 'Financial ',
      child: [
        {
          label: 'Fee Management',
        },
        {
          label: 'Payroll',
        },
        {
          label: 'Financial Reporting',
        },
      ],
    },
  ];
}
