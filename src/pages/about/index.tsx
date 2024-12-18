import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// File name kept the same to preserve content naming convention
import AboutPageContent from '@/pages/about/about.mdx';
import styles from '@/styles/Menu.module.css';
import { StaffBioDisplay } from '@/components/staff-bio-display';
import { StaffBio } from '@/types';

type AboutPageProps = {
  staffBioList: StaffBio[];
};

export default function AboutPage({ staffBioList }: AboutPageProps) {
  return (
    <div>
      <AboutPageContent />

      <div className={styles.menu}>
        {/* Dynamic pricing calculator after content */}
        <StaffBioDisplay staffBioList={staffBioList} />
      </div>
    </div>
  );
}

/**
 * Static Props
 * 1. Get `.mdx` files from this folder for each menu item
 * 2. Return array of metadata for each item
 */
export async function getStaticProps() {
  const staffBioList = [];
  // ITEMS_PATH is useful when you want to get the path to a specific file
  const ITEMS_PATH = path.join(process.cwd(), `src/pages/about/staff`);

  // menuItemFilePaths is the list of all mdx files inside the ITEMS_PATH directory
  const menuItemFilePaths = fs
    .readdirSync(ITEMS_PATH)
    // Only include md(x) files
    .filter((path) => path.endsWith('.mdx'));

  staffBioList.push(
    ...menuItemFilePaths.map((filePath) => {
      const source = fs.readFileSync(path.join(ITEMS_PATH, filePath));
      const { content, data } = matter(source);

      return {
        content,
        data,
        filePath,
        itemKey: filePath.replace('.mdx', ''),
      };
    })
  );

  return { props: { staffBioList } };
}
