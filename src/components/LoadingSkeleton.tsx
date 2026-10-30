import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { colors, radii, spacing } from '@/src/theme';

export function LoadingSkeleton({ width = '100%', height = 18, radius = radii.sm }: { width?: number | `${number}%`; height?: number; radius?: number }) {
  const opacity = useRef(new Animated.Value(0.35)).current;
  useEffect(() => { const loop = Animated.loop(Animated.sequence([Animated.timing(opacity, { toValue: 0.8, duration: 650, useNativeDriver: true }), Animated.timing(opacity, { toValue: 0.35, duration: 650, useNativeDriver: true })])); loop.start(); return () => loop.stop(); }, [opacity]);
  return <Animated.View style={[styles.skeleton, { width, height, borderRadius: radius, opacity }]} />;
}

export function TurfCardSkeleton() { return <View style={styles.card}><LoadingSkeleton height={145} radius={radii.lg} /><View style={styles.cardBody}><LoadingSkeleton width="72%" /><LoadingSkeleton width="46%" height={12} /><View style={styles.row}><LoadingSkeleton width="28%" height={15} /><LoadingSkeleton width="34%" height={12} /></View></View></View>; }

const styles = StyleSheet.create({ skeleton: { backgroundColor: colors.cardLight }, card: { width: 272, backgroundColor: colors.card, borderRadius: radii.lg, overflow: 'hidden' }, cardBody: { padding: spacing.md, gap: spacing.sm }, row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: spacing.sm } });
