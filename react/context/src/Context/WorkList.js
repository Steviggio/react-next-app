import React, { useEffect } from 'react';
import {  useWorkContext } from './WorkContext';
import { useWorkActions } from './WorkActions';


export default function WorkList({ selectedCategory }) {
  const { state } = useWorkContext();
  const { fetchWorks, fetchCategories } = useWorkActions();

  useEffect(() => {
    fetchWorks();
    fetchCategories();
  }, []);

  const filteredWorks = selectedCategory === "All"
    ? state.works
    : state.works.filter(work => work.category && work.category.name === selectedCategory);

  // console.log("Les travaux", state.works)
  // console.log("Les catégories", state.categories)

  return (
    <div className='max-w-6xl grid grid-cols-3 gap-7'>
      {filteredWorks.map(work => (
        <figure className='flex flex-col justify-start gap-1' key={work.id}>
          <img className='w-full h-full' src={work.imageUrl} alt={work.title} />
          <div >
            <h3 className='text-base text-left font-normal'>{work.title}</h3>
          </div>
        </figure>
      ))}
    </div>
  );
};