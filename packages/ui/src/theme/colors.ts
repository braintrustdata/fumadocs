import type { Preset } from '@/tailwind-plugin';

const defaultPreset: Preset = {
  light: {
    background: '0 0% 100%',
    foreground: '0 0% 3.9%',
    muted: '0 0% 96.1%',
    'muted-foreground': '0 0% 45.1%',
    popover: '0 0% 100%',
    'popover-foreground': '0 0% 15.1%',
    card: '0 0% 99.7%',
    'card-foreground': '0 0% 3.9%',
    border: '0 0% 89.8%',
    input: '0 0% 89.8%',
    primary: '0 0% 9%',
    'primary-foreground': '0 0% 98%',
    secondary: '0 0% 96.1%',
    'secondary-foreground': '0 0% 9%',
    accent: '0 0% 94.1%',
    'accent-foreground': '0 0% 9%',
    ring: '0 0% 63.9%',
  },
  dark: {
    background: '0 0% 3.9%',
    foreground: '0 0% 98%',
    muted: '0 0% 14.9%',
    'muted-foreground': '0 0% 60.9%',
    popover: '0 0% 7%',
    'popover-foreground': '0 0% 88%',
    card: '0 0% 8%',
    'card-foreground': '0 0% 98%',
    border: '0 0% 18%',
    input: '0 0% 14.9%',
    primary: '0 0% 98%',
    'primary-foreground': '0 0% 9%',
    secondary: '0 0% 10.9%',
    'secondary-foreground': '0 0% 98%',
    accent: '0 0% 14.9%',
    'accent-foreground': '0 0% 90%',
    ring: '0 0% 14.9%',
  },
};

const oceanPreset: Preset = {
  light: {
    background: '0 0% 100%',
    foreground: '0 0% 3.9%',
    muted: '220 90% 96.1%',
    'muted-foreground': '0 0% 45.1%',
    popover: '0 0% 100%',
    'popover-foreground': '0 0% 15.1%',
    card: '220 50% 98%',
    'card-foreground': '0 0% 3.9%',
    border: '220 50% 89.8%',
    input: '0 0% 89.8%',
    primary: '210 80% 20.2%',
    'primary-foreground': '0 0% 98%',
    secondary: '220 90% 96.1%',
    'secondary-foreground': '0 0% 9%',
    accent: '220 50% 94.1%',
    'accent-foreground': '0 0% 9%',
    ring: '220 100% 63.9%',
    'global-background': 'transparent',
  },
  dark: {
    'card-foreground': '220 60% 94.5%',
    input: '0 0% 14.9%',
    'primary-foreground': '0 0% 9%',
    'secondary-foreground': '220 80% 90%',
    ring: '205 100% 85%',
    card: '220 50% 10%',
    muted: '220 50% 10%',
    'muted-foreground': '220 30% 65%',
    'accent-foreground': '220 80% 90%',
    popover: '220 50% 10%',
    'popover-foreground': '220 30% 65%',
    accent: '220 40% 20%',
    secondary: '220 50% 20%',
    background: '220 60% 6%',
    foreground: '220 60% 94.5%',
    primary: '205 100% 85%',
    border: '220 50% 20%',
    'global-background': 'rgba(5, 105, 255, 0.15)',
  },
  backgroundImage:
    'linear-gradient(var(--global-background), transparent 20rem, transparent)',
};

export const presets = {
  default: defaultPreset,
  ocean: oceanPreset,
};
