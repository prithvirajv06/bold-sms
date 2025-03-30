export const MENU_CONFIGS: {
  lable: string;
  hasSubMenu?: boolean;
  icon?: string;
  showHighlightIcon?: string;
  routerLink?: string;
  subMenu?: {
    lable: string;
    hasSubMenu?: boolean;
    icon?: string;
    routerLink?: string;
  }[];
}[] = [
  {
    lable: 'Dashboard',
    hasSubMenu: false,
    icon: 'fa-gauge-high',
    routerLink: '/',
  },
  {
    lable: 'Administration',
    hasSubMenu: true,
    icon: 'fa-user-tie',
    subMenu: [
      {
        lable: 'Role Management',
      },
      {
        lable: 'Onboarding',
      },
      {
        lable: 'Staff Management',
      },
      {
        lable: 'Org Chart',
      },
      {
        lable: 'Payroll',
      },
      {
        lable: 'Report',
      },
      {
        lable: 'Application Studio',
      },
    ],
  },
  {
    lable: 'Learning Space',
    hasSubMenu: true,
    icon: 'fa-chalkboard-user',
    subMenu: [
      {
        lable: 'Student Class Map',
      },
      {
        lable: 'Instructor Allocation',
      },
      {
        lable: 'Instructor Lobby',
      },
      {
        lable: 'Time Table',
      },
      {
        lable: 'Attendance',
      },
    ],
  },
  {
    lable: 'New Application',
    hasSubMenu: true,
    icon: 'fa-file-lines',
    showHighlightIcon: 'solar:star-bold',
  },
  {
    lable: 'Broadcase Notification',
    hasSubMenu: true,
    icon: 'fa-bullhorn',
  },
];
