import PublicationItem from './PublicationItem'
import data from './data/publications.json'
import { Divider } from 'antd';


const PublicationList = (): JSX.Element => {
  return (
    <section className="grid w-full" id="publications">
      <Divider className='bg-gray-500' />

      <h2 className="text-xl font-bold  mb-4">Publications</h2>
      <div>
        {data.map((publication, index) => (
          <PublicationItem publication={publication} index={index} key={index} />
        ))}
      </div>

      <Divider className='bg-gray-500' />
    </section>
  );
};



export default PublicationList;
