import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import { useWorkContext } from '../Context/WorkContext';
import { useWorkActions } from '../Context/WorkActions';


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

export default function AddModal({ addIsOpen, setAddIsOpen, setIsOpen }) {
  const authHeader = useAuthHeader();
  const [formData, setFormData] = React.useState({ imageUrl: "", title: "", category: 1 });
  const [previewUrl, setPreviewUrl] = React.useState(null);
  const { addWork, fetchCategories } = useWorkActions();
  const { state } = useWorkContext();


  const handleClose = () => {
    setAddIsOpen(false);
  };

  const handleBack = () => {
    setAddIsOpen(false);
    setIsOpen(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, imageUrl: file });
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  React.useEffect(() => {
    fetchCategories()
  }, [])


  const onSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append('image', e.target.image.files[0]);
    formDataObj.append('title', formData.title);
    formDataObj.append('category', formData.category);

    try {
      addWork(formDataObj, authHeader)
      setAddIsOpen(false)
      setFormData({ imageUrl: '', title: '', category: '' });
      setPreviewUrl(null);
    } catch (err) {
      console.error("An error occurred trying to add a new work", err);
    }
  };

  const allFieldsFilled = formData.imageUrl && formData.title && formData.category;

  return (
    <Modal
      open={addIsOpen}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
      disableScrollLock={true}
    >
      <Box sx={style}>
        <button onClick={handleBack}>← </button>
        <Typography id="child-modal-title" className='text-center' variant="h6" component="h2">
          Ajout photo
        </Typography>
        <div id="modal-add-jpg">
          <div id="modal-add-jpg-container"></div>
          {previewUrl ? (
            <img className="modal-add-element" id="modal-add-img-active" src={previewUrl} alt="Prévisualisation" />
          ) : (<>
            <img className="modal-add-element" id="modal-add-img" src="./assets/add-photo.png" alt="" />
            <label htmlFor="modal-add-input" id="modal-add-jpg-btn">+ Ajouter photo</label>
            <p className="modal-add-element" id="modal-add-text">jpg, png : 4mo max</p>
          </>
          )}
        </div>
        <form onSubmit={onSubmit} className='font-bold' id="modal-add-form" action="" autoComplete="off">
          <input
            className=""
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*" id="modal-add-input" />
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            name="title"
            className='w-full font-normal pl-2'
            id="title"
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            value={formData.title} />
          <label htmlFor="category">Catégorie</label>
          <div id="datalist">
            <input list="categories"
              className='w-full font-normal pl-2'
              id="category"
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              // value={formData.category}
              placeholder='Choisir une catégorie'
              />
            <i id="datalist-icon" className="icon iconfont icon-arrow"></i>
            <datalist id="categories">
              {state.categories.map(category => (
                <option key={category.id} value={category.id} >{category.name}</option>
              ))}
            </datalist>
          </div>
          <div class="modal-border"></div>
          <div class="modal-btns">
            <button
              type="submit"
              form="modal-add-form"
              id="modal-box-validate"
              className={allFieldsFilled ? 'bg-green-500' : ''}
              style={{
                backgroundColor: allFieldsFilled ? 'green' : '',
                color: allFieldsFilled ? 'white' : '',
              }}
              disabled={!allFieldsFilled}
            >
              Valider
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
}
