import React, { useEffect, useState, useCallback } from 'react';
import Modal from './components/Modal';
import ImageCard from './components/ImageCard';
import ImageModal from './components/ImageModal';
import Loader from './components/Loader';
import Header from './components/Header';
import useDebounce from './components/hooks/Debounce';
import axios from './utils/axios';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const [loading, setLoading] = useState(false);

  const debouncedSearchTerm = useDebounce(searchKeyWord, 500);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSelectedImage = (image) => {
    setSelectedImage(image);
    toggleModal();
  };

  const handleSearch = useCallback(async () => {
    try {
      setLoading(true);
      const newPhotos = await axios.get(`?query=${debouncedSearchTerm}`);
      setPhotos(newPhotos.data);
    } catch (error) {
    }
    setLoading(false);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearch();
    }
  }, [debouncedSearchTerm, handleSearch]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <>
      <div className='app'>
        <Header handleSearch={setSearchKeyWord} onKeyDown={handleSearch}/>
        <div className='images__container'>
          <div className='images__wrapper'>
            {loading ?
            <>
              {[300,280,400,400,500,300].map((skimmer) => {
                  return (<Loader height={skimmer}/>)
                })}
            </>
            :
            photos.map((image) => (
              <ImageCard
                key={image.urls.regular}
                image={image.urls.regular}
                name={image.user.name}
                location={image.user.location}
                handleClick={() => handleSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      </div>
      {showModal ? (
        <Modal>
          <span className='cancel__button' onClick={toggleModal}>
            &times;
          </span>
          <ImageModal
            image={selectedImage.urls.regular}
            name={selectedImage.user.name}
            location={selectedImage.user.location}
            detailClassName='modal__card__details'
            nameClassName='name__modal'
            locationClassName='location__modal'
          />
        </Modal>
      ) : null}
    </>
  );
}

export default App;
