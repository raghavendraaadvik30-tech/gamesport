import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { AlertTriangle, X } from 'lucide-react-native';
import { colors, radii, spacing } from '@/src/theme';
import { IconButton, PrimaryButton, SecondaryButton } from './ui';

export function ConfirmationModal({ visible, title, message, confirmLabel = 'Confirm', onConfirm, onClose }: { visible: boolean; title: string; message: string; confirmLabel?: string; onConfirm: () => void; onClose: () => void }) {
  return <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}><View style={styles.backdrop}><View style={styles.modal}><View style={styles.top}><View style={styles.icon}><AlertTriangle size={22} color={colors.warning} /></View><IconButton accessibilityLabel="Close dialog" onPress={onClose}><X size={18} color={colors.muted} /></IconButton></View><Text style={styles.title}>{title}</Text><Text style={styles.message}>{message}</Text><View style={styles.actions}><PrimaryButton label={confirmLabel} onPress={onConfirm} /><SecondaryButton label="Go back" onPress={onClose} /></View></View></View></Modal>;
}
const styles = StyleSheet.create({ backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,.7)', justifyContent: 'center', padding: spacing.xl }, modal: { backgroundColor: colors.card, borderRadius: radii.xl, padding: spacing.lg }, top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, icon: { width: 44, height: 44, borderRadius: 15, backgroundColor: '#2A251B', alignItems: 'center', justifyContent: 'center' }, title: { color: colors.white, fontSize: 20, fontWeight: '900', marginTop: spacing.lg }, message: { color: colors.muted, fontSize: 13, lineHeight: 20, marginTop: spacing.sm }, actions: { gap: spacing.sm, marginTop: spacing.xl } });
