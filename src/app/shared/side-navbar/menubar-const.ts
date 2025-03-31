export const MENU_CONFIGS: {
  lable: string;
  hasSubMenu?: boolean;
  icon?: string;
  showHighlightIcon?: string;
  routerLink?: string;
  menuId?: string;
  subMenu?: {
    lable: string;
    hasSubMenu?: boolean;
    icon?: string;
    routerLink?: string;
    menuId?: string;
  }[];
}[] = [
  {
    lable: 'Dashboard',
    hasSubMenu: false,
    icon: 'fa-gauge-high',
    routerLink: 'dashboard',
    menuId: 'DASHBOARD',
  },
  {
    lable: 'Administration',
    hasSubMenu: true,
    icon: 'fa-user-tie',
    routerLink: 'admin',
    menuId: 'ADMIN',
    subMenu: [
      {
        lable: 'Role Management',
        icon: 'fa-toolbox',
        routerLink: '/role-management',
      },
      {
        lable: 'Onboarding',
        icon: 'fa-clipboard-user',
        routerLink: '/staff-onboarding',
      },
      {
        lable: 'Staff Management',
        icon: 'fa-people-group',
      },
      {
        lable: 'Org Chart',
        icon: 'fa-chart-diagram',
      },
      {
        lable: 'Payroll',
        icon: 'fa-money-bills',
      },
      {
        lable: 'Report',
        icon: 'fa-folder-open',
      },
      {
        lable: 'Application Studio',
        icon: 'fa-spell-check',
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
    lable: 'Mentor Space',
    hasSubMenu: true,
    icon: 'fa-person-chalkboard',
  },
  {
    lable: 'Student Space',
    hasSubMenu: true,
    icon: 'fa-graduation-cap',
  },
  {
    lable: 'Admission',
    hasSubMenu: true,
    icon: 'fa-file-lines',
    showHighlightIcon: 'solar:star-bold',
  },
  {
    lable: 'Inventory',
    hasSubMenu: true,
    icon: 'fa-boxes-stacked',
    showHighlightIcon: 'solar:star-bold',
  },
  {
    lable: 'Broadcase Notification',
    hasSubMenu: true,
    icon: 'fa-bullhorn',
  },
];
