import Layout from '../components/Layout';
import Image from 'next/image';

export default function Contact(){
  return (
    <Layout title="Context">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Contant info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/avatar.jpeg"
            width={60}
            height={60}
            alt="Avatar"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Address</p>
          <p className="text-xs mt-2 text-gray-600">神奈川県横浜市</p>
          <p className="font-bold mt-3">E-mail</p>
          <p className="text-xs mt-2 text-gray-600">skmt_dgr@gmail.com</p>
          {/* <p className="font-bold mt-3">Phone</p>
          <p className="text-xs mt-2 text-gray-600"></p> */}
        </div>
        <div className="mt-6 flex justify-around">
          <div>
            <a
              href="https://twitter.com/skmtdgr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/nolan/64/twitter-circled.png"
                width={60}
                height={60}
                alt="twitter"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/da_s9714/?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/nolan/64/instagram-new.png"
                width={60}
                height={60}
                alt="twitter"
              />
            </a>
            </div>
            <div>
            <a
              href="https://github.com/sakamotodd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/nolan/64/github.png"
                width={60}
                height={60}
                alt="twitter"
              />
            </a>
            </div>
        </div>
      </div>
    </Layout>
  );
};


