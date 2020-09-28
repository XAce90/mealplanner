import { useState } from 'react';
import { Router, useRouter } from 'next/router';
import PropTypes from 'prop-types';
import InputField from './InputField';
import SelectField from './SelectField';
import TextArea from './TextArea';

function RecipeForm(props) {
  const router = useRouter();
  const [ name, setName ] = useState(props.data ? props.data.name : '');
  const [ description, setDescription ] = useState(props.description ? props.data.description : '');
  const [ servings, setServings ] = useState(props.data ? props.data.servings : '');
  const [ image, setImage ] = useState(props.data ? props.data.image : '');

  const uploadImage = async (id) => {
    let imageData = new FormData();
    imageData.append('file', image);

    const imageUpload = await fetch(`http://localhost:5000/api/v1/recipes/${id}/photo`, {
      method: 'PUT',
      body: imageData,
    })

    const imageUploadResponse = await imageUpload.json();
    if(imageUploadResponse.success) {
      console.log('image uploaded!');
    } else {
      console.error('image failed to upload...');
      /* todo: if the image fails, show failure */
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let data = {
      name,
      description,
      servings,
    };
    data = JSON.stringify(data);

    if(props.action === 'edit') {
      const res = await fetch(`http://localhost:5000/api/v1/recipes/${props.recipeId}`, {
        method: 'PUT',
        body: data,
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const response = await res.json();
      if(response.success) {
        //todo: show success notice
        const {_id: recipeId} = response.data;
        uploadImage(recipeId)
          .then(() => router.push(`/recipes/${recipeId}`))
          .catch(() => 
            console.error('error uploading image')
          )

      } else {
        //todo: show failure
        console.error('update failed!');
      }
    }

    if(props.action === 'create') {
      const res = await fetch(`http://localhost:5000/api/v1/recipes`, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const response = await res.json();
      if(response.success) {
        const {_id: recipeId} = response.data;
        uploadImage(recipeId)
          .then(() => router.push(`/recipes/${recipeId}`))
          .catch(() => 
            console.error('error uploading image')
          )

        // todo: show success notice
        // maybe include a link to create another recipe?
      } else {
        // todo: show failure
        console.error('update failed!');
      }
    }
  }

  return (
    <form
      id={props.id}
      className="recipe-form"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <div className="field">
        <label className="field__label">Image</label>
        <input
          type="file"
          className="field__input"
          // value={image.name}
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />
      </div>
      <InputField 
        type="text"
        label="Recipe Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
      />
      <TextArea
        label="Description"
        onChange={(e) => setDescription(e.target.value)}
      >
        {description}
      </TextArea>
      <InputField 
        type="number"
        label="Servings"
        name="servings"
        onChange={(e) => setServings(e.target.value)}
        value={servings}
      />
      {/* todo: instructions / steps */}
      {/* <SelectField 
        label="Recipe Type"
        name="type"
        onChange={this.handleChange}
        options={[{value: 'onePot', text: 'One Pot'}, {value: 'side', text: 'Side'}, {value: 'main', text: 'Main'}]}
      /> */}
      <button>Save Recipe</button>
    </form>
  )
}

export default RecipeForm;

RecipeForm.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
  action: PropTypes.oneOf(['edit', 'create']),
  recipeId: PropTypes.string,
  id: PropTypes.string,
}