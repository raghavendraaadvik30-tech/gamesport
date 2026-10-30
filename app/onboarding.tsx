import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight, CalendarCheck2, MapPinned, QrCode } from 'lucide-react-native';
import { colors, radii, spacing } from '@/src/theme';

const slides = [
  { title: 'Find your\nperfect turf', copy: 'Discover match-ready cricket grounds and football turfs around you.', image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=85', icon: MapPinned },
  { title: 'Make time\nfor your game', copy: 'Pick your date, choose a slot and get your squad moving in seconds.', image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1200&q=85', icon: CalendarCheck2 },
  { title: 'Pay simply.\nPlay sooner.', copy: 'Use the owner’s UPI QR and track your verification from one place.', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=85', icon: QrCode },
];

export default function Onboarding() {
  const [step, setStep] = useState(0); const slide = slides[step]; const Icon = slide.icon;
  const next = () => step === slides.length - 1 ? router.replace('/auth') : setStep(step + 1);
  return <View style={styles.container}><Image source={{ uri: slide.image }} style={styles.image} /><LinearGradient colors={['rgba(16,19,16,0)', colors.background]} locations={[0.2, 0.82]} style={styles.gradient} /><Pressable onPress={() => router.replace('/auth')} style={styles.skip}><Text style={styles.skipText}>Skip</Text></Pressable><View style={styles.content}><View style={styles.icon}><Icon size={23} color={colors.background} /></View><Text style={styles.title}>{slide.title}</Text><Text style={styles.copy}>{slide.copy}</Text><View style={styles.footer}><View style={styles.dots}>{slides.map((_, index) => <View key={index} style={[styles.dot, index === step && styles.activeDot]} />)}</View><Pressable onPress={next} style={styles.next}><Text style={styles.nextText}>{step === slides.length - 1 ? 'Get Started' : 'Next'}</Text><ArrowRight size={19} color={colors.background} /></Pressable></View></View></View>;
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: colors.background }, image: { width: '100%', height: '62%', position: 'absolute' }, gradient: { position: 'absolute', width: '100%', height: '75%', top: '28%' }, skip: { position: 'absolute', right: spacing.lg, top: 58, backgroundColor: 'rgba(16,19,16,.65)', paddingHorizontal: spacing.md, paddingVertical: spacing.sm, borderRadius: radii.pill }, skipText: { color: colors.white, fontWeight: '700' }, content: { flex: 1, justifyContent: 'flex-end', padding: spacing.xl, paddingBottom: 42 }, icon: { width: 48, height: 48, backgroundColor: colors.lime, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.lg }, title: { color: colors.white, fontSize: 39, lineHeight: 43, fontWeight: '900', letterSpacing: -1 }, copy: { color: colors.muted, fontSize: 16, lineHeight: 24, marginTop: spacing.lg, maxWidth: 320 }, footer: { marginTop: 42, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, dots: { flexDirection: 'row', gap: 6 }, dot: { height: 5, width: 18, backgroundColor: colors.cardLight, borderRadius: 4 }, activeDot: { width: 32, backgroundColor: colors.lime }, next: { backgroundColor: colors.lime, minHeight: 52, borderRadius: 17, paddingHorizontal: spacing.lg, flexDirection: 'row', gap: 8, alignItems: 'center' }, nextText: { color: colors.background, fontWeight: '900', fontSize: 14 } });
