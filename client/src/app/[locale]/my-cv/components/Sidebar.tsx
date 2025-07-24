import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Sidebar() {
  const params = useParams();
  const locale = params?.locale || 'en'; // Default to 'en' if no locale is provided

  const data =
    locale === 'vn'
      ? {
          alt: 'Ảnh đại diện',
          name: 'Lâm Quang Vinh',
          title: 'Lập trình viên Backend .NET',
          about:
            'Là một lập trình viên Backend .NET, tôi đã trau dồi chuyên môn về .NET Core và tối ưu hóa hiệu suất SQL, với nền tảng trong Next.js. Tham vọng của tôi là sử dụng kỹ năng của mình cho các dự án ý nghĩa, cũng như phát triển thành một lập trình viên Full-Stack. Tôi rất mong muốn mang kỹ năng và sự cống hiến của mình đến với đội ngũ của bạn.',
          skills: [
            'Giải quyết vấn đề',
            'Khả năng học hỏi',
            'Tối ưu SQL',
            '.NET',
            'NextJs'
          ],
          links: [
            {
              name: 'LinkedIn',
              link: 'https://www.linkedin.com/in/lqvinh2512/'
            },
            {
              name: 'GitHub',
              link: 'https://github.com/vinhlq2512'
            },
            {
              name: 'Facebook',
              link: 'https://www.facebook.com/vinhlq2512/'
            }
          ],
          futureGoals: [
            'IELTS 7.0 - 7.5',
            'Thạc sĩ Khoa học Máy tính tại Đại học Bách Khoa Hà Nội.'
          ],
          personalInfo: [
            'Ngày sinh: 25/12/2001',
            'Địa chỉ: Hà Nội, Việt Nam',
            'Email: vinhlq2512@gmail.com'
          ]
        }
      : {
          alt: 'Profile Picture',
          name: 'Lâm Quang Vinh',
          title: 'Backend .NET Developer',
          about:
            'As a .NET Backend Developer, I have honed expertise in .NET Core and SQL performance optimization, with a foundation in Next.js. My ambitions lie in utilizing my skills for meaningful projects, as well as developing into a Full-Stack Developer. I am keenly interested in bringing my skills and dedication to your team.',
          skills: [
            'Problem Solving',
            'Ability to Learn',
            'SQL Optimization',
            '.NET',
            'NextJs'
          ],
          links: [
            {
              name: 'LinkedIn',
              link: 'https://www.linkedin.com/in/lqvinh2512/'
            },
            {
              name: 'GitHub',
              link: 'https://github.com/vinhlq2512'
            },
            {
              name: 'Facebook',
              link: 'https://www.facebook.com/vinhlq2512/'
            }
          ],
          futureGoals: [
            'IELTS 7.0 - 7.5',
            'Master of Computer Science at Hanoi University of Science and Technology.'
          ],
          personalInfo: [
            'Date of Birth: 25/12/2001',
            'Address: Hanoi, Vietnam',
            'Email: vinhlq2512@gmail.com'
          ]
        };

  return (
    <aside className="bg-gray-900 text-white p-6 lg:w-1/3">
      {/* Profile Section */}
      <div className="text-center">
        <Image
          src="/avt.jpg"
          width={128}
          height={128}
          className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
          alt={data.alt}
        />
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p className="text-sm">{data.title}</p>
      </div>

      {/* About Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
          {locale === 'en' ? 'About Me' : 'Giới thiệu'}
        </h2>
        <p className="text-sm mt-2">{data.about}</p>
      </div>

      {/* Skills Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
          {locale === 'en' ? 'Skills' : 'Kỹ năng'}
        </h2>
        <ul className="mt-2 space-y-2">
          {data.skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-800 text-white px-3 py-1 rounded text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Links Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
          {locale === 'en' ? 'Links' : 'Liên kết'}
        </h2>

        <ul className="mt-2 space-y-2 text-sm">
          {data.links.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Future Goals Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
          {locale === 'en' ? 'Future Goals' : 'Mục tiêu tương lai'}
        </h2>
        <ul className="mt-2 space-y-2 text-sm">
          {data.futureGoals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>

      {/* Personal Info Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold border-b border-gray-700 pb-2">
          {locale === 'en' ? 'Personal Information' : 'Thông tin cá nhân'}
        </h2>
        <ul className="mt-2 space-y-2 text-sm">
          {data.personalInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
