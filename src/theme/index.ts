import { Platform } from 'react-native';
export const colors = { lime: '#B7F500', background: '#101310', secondary: '#1C211D', card: '#242A25', cardLight: '#2C342D', white: '#FFFFFF', text: '#F6F8F3', muted: '#A0A99F', subtle: '#6E786E', success: '#20C878', warning: '#FFB547', error: '#FF5252', line: '#343C35', overlay: 'rgba(0,0,0,0.45)' };
export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 };
export const radii = { sm: 8, md: 14, lg: 20, xl: 28, pill: 999 };
export const shadow = Platform.select({ ios: { shadowColor: '#000', shadowOpacity: 0.22, shadowRadius: 12, shadowOffset: { width: 0, height: 6 } }, android: { elevation: 5 }, default: {} });
