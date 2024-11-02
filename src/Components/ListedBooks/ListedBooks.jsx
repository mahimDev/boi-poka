import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getLocalStoreReadBooks } from '../../Utility/utility';
import ListedCard from '../ListedCard/ListedCard';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData()
    useEffect(() => {
        const storeBooks = getLocalStoreReadBooks()
        const storeBooksInt = storeBooks.map(id => parseInt(id))
        const reaBookList = allBooks.filter(book => storeBooksInt.includes(book.bookId))
        console.log(reaBookList)
        setReadList(reaBookList)
    }, [allBooks])
    return (
        <div className='w-11/12 mx-auto mt-14'>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className=''>
                        {
                            readList.map(data => <ListedCard key={data.id} data={data}></ListedCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;