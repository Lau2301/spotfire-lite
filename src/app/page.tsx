import  FileUpload from '../components/FileUpload';
import  DataTable from '../components/DataTable';
import  Chart  from '../components/Chart';

export default function Home() {
  return (
    <div className="p-6 max-w-5xl mx-auto flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-center text-pink-700">Spotfire Lite</h1>
      <FileUpload />
      <DataTable />
      <Chart />
    </div>
  );
}