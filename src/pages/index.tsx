import ChartList from '@/components/Home/ChartList';
import HomeText from '@/components/Home/HomeText';
import SearchBar from '@/components/Main/SearchBar';

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <HomeText />
        <div className="mx-auto max-w-md mt-4">
          <SearchBar />
        </div>
        <ChartList />
      </div>
    </>
  );
}
