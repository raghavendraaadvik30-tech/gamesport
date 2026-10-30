export type Sport = 'Cricket' | 'Football';
export type BookingStatus = 'Payment Submitted' | 'Confirmed' | 'Completed' | 'Cancelled';
export type PaymentStatus = 'Awaiting Verification' | 'Verified' | 'Rejected';
export type RefundStatus = 'Refund Requested' | 'Under Review' | 'Approved' | 'Refund Processed' | 'Rejected';
export interface Turf { id: string; name: string; sport: Sport; location: string; address: string; price: number; rating: number; reviewCount: number; image: string; gallery: string[]; facilities: string[]; description: string; openingHours: string; rules: string[]; phone: string; distance: string; featured?: boolean; popular?: boolean; }
export interface TurfSlot { id: string; time: string; available: boolean; }
export interface Booking { id: string; turfId: string; turfName: string; turfImage: string; sport: Sport; location: string; date: string; slots: string[]; teamSize: number; notes?: string; amount: number; bookingStatus: BookingStatus; paymentStatus: PaymentStatus; createdAt: string; refund?: Refund; }
export interface Refund { status: RefundStatus; amount: number; reason: string; requestedAt: string; upiId?: string; accountName?: string; contactMobile?: string; transactionReference?: string; }
export interface Customer { name: string; mobile: string; avatar: string; location: string; }
export interface NotificationItem { id: string; title: string; message: string; type: 'booking' | 'payment' | 'reminder' | 'offer' | 'refund'; timestamp: string; read: boolean; }
export interface FilterState { sport: Sport | 'All'; location: string; maxPrice: number; minRating: number; facility: string; availability: 'Any time' | 'Tonight' | 'Weekend'; sort: 'Popular' | 'Price: Low to High' | 'Rating'; }
