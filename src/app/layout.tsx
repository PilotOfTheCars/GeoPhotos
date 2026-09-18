import "./globals.css";
import type { Metadata } from "next";
export const metadata:Metadata={title:"GeoPhotos — Capture GeoFS",description:"A quality-controlled photographic archive for GeoFS."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}