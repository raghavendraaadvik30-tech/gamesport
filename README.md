# GameSpot – Football & Cricket Turf

A frontend-only Expo + React Native + TypeScript mobile app for discovering cricket and football turfs, selecting time slots, submitting manual UPI payment details, and tracking bookings.

## Frontend scope

- All content uses local mock data and in-memory state.
- Authentication, payment verification, booking confirmation, refunds, and notifications are simulated.
- No backend API, database, Razorpay, payment gateway, or server authentication is included.
- Payment submissions remain **Payment Submitted – Awaiting Verification**. The app never auto-confirms a payment.

## Run locally

```bash
npm install
npx expo start
```

Then:

- Press `a` to open Android if an emulator is installed.
- Press `i` to open iOS if Xcode and an iOS simulator are installed on macOS.
- Scan the QR code with Expo Go for a physical device on the same network.
- Use `npx expo start --web` for a browser preview.

Convenience scripts:

```bash
npm run android
npm run ios
npm run web
npm run typecheck
```

## Replace business placeholders

Update `src/data/mockData.ts` before release:

```ts
export const paymentConfig = {
  upiId: 'YOUR_UPI_ID@BANK',
  recipientName: 'Business owner name pending verification',
  phone: '+91 XXXXXXXXXX',
  qrImage: '...verified QR image...',
};
```

The WhatsApp and support phone placeholders are in `app/support.tsx`.

## Structure

```text
app/
  _layout.tsx                 Root stack and AppProvider
  index.tsx                   Animated splash
  onboarding.tsx              Three-step onboarding
  auth.tsx                    Mock login, registration, OTP, guest flow
  (tabs)/
    _layout.tsx               Home, Explore, Bookings, Alerts, Profile tabs
    index.tsx                 Home dashboard
    explore.tsx               Search and filters
    bookings.tsx              Upcoming/completed/cancelled bookings
    notifications.tsx         Mock notification center
    profile.tsx               Profile editing and favourites
  turf/[id].tsx               Turf details
  slots/[id].tsx              Date and consecutive slot selection
  booking-details.tsx         Customer/team details and price summary
  payment.tsx                 Manual UPI QR payment submission
  confirmation.tsx            Booking/cancellation submission status
  cancellation.tsx            Cancellation and refund request workflow
  support.tsx                 FAQ and support links
src/
  components/
    ui.tsx                    Shared controls and status components
    TurfCard.tsx              Turf list/card presentation
    BookingCard.tsx           Booking list/card presentation
    SlotPicker.tsx             Slot grid and legend
    LoadingSkeleton.tsx        Reusable loading placeholders
    ConfirmationModal.tsx      Reusable confirm dialog
  data/mockData.ts             Replaceable turf, booking, slot, payment data
  services/                    Backend-ready mock booking/payment boundary
  store/AppProvider.tsx        Frontend booking, profile, favourites state
  theme/index.ts              GameSpot design tokens
  types/index.ts              Shared domain models
app.json                      Expo configuration
babel.config.js               Expo Babel configuration
package.json                  Scripts and dependencies
tsconfig.json                 TypeScript paths/config
```

## Windows dependency reset

If a previous install left an incomplete `node_modules` folder or an old lockfile, run this from PowerShell after pulling `main`:

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm install
npm run dev -- --clear
```

The project pins the Expo SDK 52 dependency family. Run `npm install` before `npx expo install --fix`; otherwise `npx` may download a newer Expo CLI while the local Expo package is not installed yet. `react-native-svg`, `react-native-web`, `react-dom`, `expo-asset`, and `query-string` are included because the icon, asset, and web/router bundles need them.
