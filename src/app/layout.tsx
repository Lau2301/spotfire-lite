// import { DataProvider } from '../context/DataContext';
import  ClientProvider  from '../context/ClientContext';

export default function  Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex justify-center items-center">
        <ClientProvider>
        {children}
        </ClientProvider>
        
      </body>
    </html>
  );
};