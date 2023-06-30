import ExtLink from './ExtLink';

interface Props {
    publication: any;
    index: number;
}

const PublicationItem = ({ publication, index }: Props): JSX.Element => {
    return (
        <div className="mt-4 mb-8">
            <p className="text-base text-gray-800 dark:text-gray-200">
                [{index + 1}] <b><i>{publication.title}</i></b><br />

            </p><p className='text-base text-gray-500'>{publication.author}<br />
                <a className="text-sm">{publication.conference}</a>
            </p>
            <p className="text-blue-500 flex justify-end text-sm bold">
                {publication.links.map((linkItem: any, idx: any) => (
                    <ExtLink href={linkItem.url} key={idx}> [{linkItem.name}] &nbsp;</ExtLink>
                ))}
            </p>

        </div>

    );
};

export default PublicationItem;
