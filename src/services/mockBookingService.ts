import { Booking, Refund } from '@/src/types';

/** Replace this module with API calls when the backend is available. */
export function calculateBookingTotal(hourlyPrice: number, slots: string[]) { return hourlyPrice * slots.length; }
export function createBookingReference() { return `GS-${Math.floor(100000 + Math.random() * 899999)}`; }
export function submitManualPayment(booking: Booking, transactionReference: string): Pick<Booking, 'paymentStatus' | 'bookingStatus'> { return transactionReference.trim().length >= 6 ? { paymentStatus: 'Awaiting Verification', bookingStatus: 'Payment Submitted' } : { paymentStatus: booking.paymentStatus, bookingStatus: booking.bookingStatus }; }
export function createRefundRequest(booking: Booking, details: Omit<Refund, 'status' | 'amount'>): Refund { return { ...details, status: 'Refund Requested', amount: booking.amount }; }
