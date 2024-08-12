import { useEffect, useReducer } from "react";
import axios from 'axios';


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
}
const initialState = {
  favorites:[],
  selectedPhoto: null,
  photoData: null,
  topicData: null,
  isModalOpen: false,
  photoData: [],
  topicData: [],
  photoByTopic: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favorites: state.favorites.filter(id => id !== action.payload) };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, isModalOpen: !state.isModalOpen };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {...state, photoByTopic:action.payload }
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const useApplicationData  = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('/api/photos')
    .then((response) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data}))
  }, [])

  useEffect(() => {
    axios.get('/api/topics')
    .then((response) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data}))
  }, [])

  const fetchPhotosByTopic = (id) => {
    axios.get(`/api/topics/photos/${id}`)
    .then((response) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: response.data}))
  }

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS }); 
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS})
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: null})
  };


  const updateToFavPhotoIds = (photoID) => {
    const actionType = state.favorites.includes(photoID)
      ? ACTIONS.FAV_PHOTO_REMOVED
      : ACTIONS.FAV_PHOTO_ADDED;

    dispatch({ type: actionType, payload: photoID });
  };

  return {
    state,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    selectedPhoto: state.selectedPhoto,
    favorites: state.favorites,
    updateToFavPhotoIds,
    fetchPhotosByTopic
  };
};

export default useApplicationData;