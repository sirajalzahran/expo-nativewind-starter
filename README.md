# Expo NativeWind Starter

A modern starter template for building React Native apps using **Expo**, **NativeWind (TailwindCSS)**, **TypeScript**, and **EAS Build**.

Created by **Siraj AL Zahran**.

---

## Features

- Built with [Expo](https://expo.dev)
- Styling with [NativeWind](https://www.nativewind.dev/) (TailwindCSS for React Native)
- TypeScript support out of the box
- Easy production builds with EAS
- Prettier for clean code formatting

---

## Installation

```bash
npm install
```

---

## Run the App (Development)

Start the Expo development server:

```bash
npm start
# or
npm run start
```

Other commands:

```bash
npm run android    # Run on Android emulator/device
npm run ios        # Run on iOS simulator/device (macOS only)
npm run web        # Run on Web
```

---

## Build for Production (Android)

1. Login to your Expo account:

```bash
npx expo login
```

2. Build the Android app:

```bash
eas build --platform android --profile production
```

Or use the script:

```bash
npm run build:android
```

---

## Project Scripts

```json
"scripts": {
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web",
  "build:android": "eas build --platform android --profile production",
  "build:ios": "eas build --platform ios --profile production"
}
```

---

## Project Structure

```
.
├── App.tsx
├── tailwind.config.js
├── tsconfig.json
├── assets/
└── ...
```

---

## Design Resources

- App Icon & Splash Screen (Figma):  
  [Figma Design](https://www.figma.com/design/b8E5qmcq4KhpuJsJtBInv6/Expo-App-Icon---Splash--Community-?node-id=0-1&p=f&t=fZd3FuH0bcKrXiom-0)

- Walkthrough Video:  
  [YouTube Guide](https://youtu.be/QSNkU7v0MPc?si=c4ioRdaoOopdMOgo)

---

## License

MIT © [Siraj AL Zahran](https://github.com/sirajalzahran)

---

## Tech Stack

- React Native 0.79.5
- React 19.0.0
- Expo ~53.0.20
- NativeWind ^4.1.23
- TailwindCSS ^3.4.0
- TypeScript ~5.8.3

---

## Feedback & Contributions

Feel free to open issues or submit pull requests. Contributions are welcome.
