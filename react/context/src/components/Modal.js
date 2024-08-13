import React, { useState,  useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddModal from './AddModal';
import { useWorkActions } from '../Context/WorkActions';
import { useWorkContext } from '../Context/WorkContext';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
};

export default function BasicModal({ isOpen, setIsOpen }) {
  const authHeader = useAuthHeader();
  const [addIsOpen, setAddIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  // const { works } = useContext(WorksContext);
  const { state } = useWorkContext();
  const { fetchWorks, deleteWork } = useWorkActions();

  useEffect(() => {
    fetchWorks();
  }, []);

  const handleOpenAddModal = () => {
    setIsOpen(false);
    setAddIsOpen(true);
  };


  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={true}
      >
        <Box sx={style}>
          <Typography className='flex justify-center ' style={{ fontSize: "25px" }} id="modal-modal-title" variant="h6" component="h2">
            Galerie photo
          </Typography>
          <div className='max-w-6xl grid grid-cols-4 gap-7 pt-5'>
            {state.works.map((work, index) => (
              <figure className='relative' key={index}>
                <img src={work.imageUrl} alt={work.title} />
                <button onClick={() => deleteWork(work.id, authHeader)} className="absolute top-2 left-24">
                  <img src="/assets/trash.png" className='object-cover w-5' alt='Trash icon' />
                </button>
                {/* <figcaption className='text-xs'>{work.title}</figcaption> */}
              </figure>
            ))}
          </div>
          <div className='modal-border' />
          <div className='modal-btns'>
            <button id="modal-box-add" onClick={handleOpenAddModal}>Ajouter une photo</button>
            <button id="modal-box-delete">Supprimer la galerie</button>
          </div>
        </Box>
      </Modal>

      {/* AddModal Component */}
      <AddModal addIsOpen={addIsOpen} setAddIsOpen={setAddIsOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
