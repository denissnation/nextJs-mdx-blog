import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className='mx-auto'>
      <MyProfilePic></MyProfilePic>
      <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
        Hello and Welcome 👋&nbsp;
        <span className='whitespace-nowrap'>
          I'm <span className='font-bold'>Denis Nasution</span>.
        </span>
      </p>
      <Posts></Posts>
    </div>
  );
}
