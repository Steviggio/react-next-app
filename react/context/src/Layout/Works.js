import React, { useState } from 'react';
import Example from '../components/Modal';
import Loading from '../Context/Loading.js';
import { useWorkContext } from '../Context/WorkContext.js';

const WorkList = React.lazy(() => import("../Context/WorkList.js"))

export default function Works() {
  const { state, isAuthenticated } = useWorkContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8">
        {!isAuthenticated ? (
          <div className='flex flex-col gap-3'>
            <h3 className="text-greenBtns text-3xl text-center">Mes projets</h3>
            <div className="flex gap-4 my-4 text-lg">
              <button onClick={() => handleCategoryChange('All')} className={`buttons px-5 ${selectedCategory === 'All' ? 'bg-greenBtns text-white' : ''}`}>Tous</button>
              {state.categories.map(category => (
                <button key={category.id} onClick={() => handleCategoryChange(category.name)}
                  className={`buttons px-4 py-2 ${selectedCategory === category.name ? 'bg-greenBtns text-white' : ''}`}>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative flex justify-center items-center pb-7">
            <h3 className="text-greenBtns text-3xl">Mes projets</h3>
            <div className="absolute left-52 items-center justify-center flex gap-2 text-sm">
              <img src="/assets/modify.png" className="object-contain" alt="Modify" />
              <button className="font-normal" onClick={() => setIsOpen(true)}>Modifier</button>
            </div>
          </div>
        )}
        <React.Suspense fallback={<Loading />}>
          <WorkList selectedCategory={selectedCategory} />
        </React.Suspense>
      </div >
      <Example isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}


// function delayForDemo(promise) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }