import { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors, spacing } from '@/src/theme';

const background = 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85';

export default function SplashScreen() {
  useEffect(() => { const timer = setTimeout(() => router.replace('/onboarding'), 1900); return () => clearTimeout(timer); }, []);
  return <View style={styles.container}><StatusBar style="light" /><ImageBackground source={{ uri: background }} style={styles.background}><LinearGradient colors={['rgba(16,19,16,.25)', 'rgba(16,19,16,.95)']} style={styles.overlay}><View style={styles.logoMark}><Text style={styles.logoGlyph}>G</Text></View><Text style={styles.logo}>Game<Text style={styles.logoAccent}>Spot</Text></Text><Text style={styles.tagline}>Book Your Turf. Build Your Game.</Text><View style={styles.bottom}><Text style={styles.loading}>FIND YOUR PLAYGROUND</Text><View style={styles.loader}><View style={styles.loaderFill} /></View></View></LinearGradient></ImageBackground></View>;
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: colors.background }, background: { flex: 1 }, overlay: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.xl }, logoMark: { width: 68, height: 68, backgroundColor: colors.lime, borderRadius: 20, alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '-8deg' }], marginBottom: spacing.md }, logoGlyph: { color: colors.background, fontSize: 43, fontWeight: '900', fontStyle: 'italic' }, logo: { color: colors.white, fontSize: 44, fontWeight: '900', letterSpacing: -2 }, logoAccent: { color: colors.lime }, tagline: { color: colors.muted, fontSize: 14, marginTop: spacing.sm, letterSpacing: 0.4 }, bottom: { position: 'absolute', bottom: 50, width: '100%', alignItems: 'center' }, loading: { color: colors.subtle, fontSize: 10, letterSpacing: 1.5, fontWeight: '800', marginBottom: 10 }, loader: { height: 3, width: 100, backgroundColor: 'rgba(255,255,255,.2)', borderRadius: 4, overflow: 'hidden' }, loaderFill: { width: '70%', height: '100%', backgroundColor: colors.lime } });
