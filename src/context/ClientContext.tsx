
"use client" // ✅ Ensures this file runs on the client side
import { DataProvider } from '../context/DataContext';


// This component will wrap the app and ensure global state is on the client
export default function ClientProvider({ children }: { children: React.ReactNode }) {
    return <DataProvider>{children}</DataProvider>;
}