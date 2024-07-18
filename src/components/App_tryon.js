import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './apptryon.css';

const StyledImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  margin: 5px;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start; // This centers the items, you might want to adjust this
  flex-wrap: wrap; // Allows items to wrap on smaller screens
  gap: 20px; // Adds space between children
`;

const Section = styled.div`
  flex: 1; // This makes each section take up equal width
  max-width: 800px; // Prevents sections from growing too large
  display: flex;
  flex-direction: column;
  align-items: center; // Center align the content of each section
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: flex-start;
`;

const ProcessedImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  margin-left: 20px;
`;

const ColorPalette = ({ onSelectColor }) => {
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']; // Example colors
    return (
        <div>
            {colors.map((color, index) => (
                <button key={index} style={{ backgroundColor: color, width: '30px', height: '30px', margin: '5px' }} onClick={() => onSelectColor(color)} />
            ))}
        </div>
    );
};
const ImageGallery = ({ onSelectDress }) => {

    const dresses = [
        process.env.PUBLIC_URL + '/dress_sample_1.jpg',
        process.env.PUBLIC_URL + '/dress_sample_2.jpg',
        process.env.PUBLIC_URL + '/dress_sample_3.jpg',
        process.env.PUBLIC_URL + '/dress_sample_4.jpg',
        process.env.PUBLIC_URL + '/dress_sample_5.jpg',
        process.env.PUBLIC_URL + '/Dress_1.jpg',
        process.env.PUBLIC_URL + '/Dress_4.jpg',
        process.env.PUBLIC_URL + '/d_4.jpg',
       
        // Add more dress image paths here
    ];


    return (
        <div className="image-gallery">
            {dresses.map((dress, index) => (
                < StyledImage
                    key={index}
                    src={dress}
                    alt={`Dress ${index}`}
                    onClick={() => onSelectDress(dress)}
                />
            ))}
        </div>
    );
};


const ProgressBar = () => (
    <div className="ProgressBarContainer">
        <div className="ProgressBar"></div>
    </div>
);


const Apptryon = () => {
    const [selectedDress, setSelectedDress] = useState(null);
    const [userImage, setUserImage] = useState(null);
    const [userText, setUserText] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [processedImages, setProcessedImages] = useState([]);
    const [userImagePreview, setUserImagePreview] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState('');

    const onSelectDress = (dressUrl) => {
        setSelectedDress(dressUrl);
    };

    const onFileSelect = (file) => {
        setUserImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setUserImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setSubmissionMessage('Try on submitted. Please wait...');

        if (!selectedDress || !userImage) {
            alert('Please select a dress and upload an image.');
            setIsSubmitting(false);
            return;
        }

        const formData = new FormData();
        try {
            const response = await fetch(selectedDress);
            const blob = await response.blob();
            formData.append('dressImage', new File([blob], "dressImage.jpg", { type: "image/jpeg" }));
        } catch (error) {
            console.error('Error fetching dress image:', error);
            setIsSubmitting(false);
            return;
        }

        formData.append('userImage', userImage);
        formData.append('userText', userText); // Include the text customization
        formData.append('selectedColor', selectedColor); // Include the selected color

        try {
            const response = await axios.post('http://34.41.129.247:5000/proc', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true
            });
            setSubmissionMessage('Success! Check out the result.');
            setProcessedImages([...processedImages, response.data.processedImage]); // Assuming backend returns a single processed image path
        } catch (error) {
            console.error('Error uploading images:', error);
            setSubmissionMessage('Failed to process your request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="app-try-on">
            <h1 className="text-2xl font-bold" style={{ textAlign: 'center' }}>Try On Your Favorite Dress</h1>
            <h3 className="mt-4" style={{ textAlign: "center" }}>Upload your photo to try on dresses virtually.</h3>
            <Container>
                <Section>
                    <ImagePreviewContainer>
                        <h2>Upload Your Image</h2>
                        <input type="file" onChange={(e) => onFileSelect(e.target.files[0])} />
                        {userImagePreview && <StyledImage src={userImagePreview} alt="Uploaded Image" />}
                        {selectedDress && (
                            <Section>
                                <h2>Selected Dress</h2>
                                <StyledImage src={selectedDress} alt="Selected Dress" />
                            </Section>
                        )}
                        <h2>Text Customization</h2>
                        <input type="text" placeholder="Enter custom text" value={userText} onChange={(e) => setUserText(e.target.value)} />
                        <h2>Select Color</h2>
                        <ColorPalette onSelectColor={setSelectedColor} />
                    </ImagePreviewContainer>

                    <button onClick={handleSubmit} disabled={isSubmitting}>Submit</button>
                    {isSubmitting && <p>{submissionMessage} <ProgressBar /> </p>}
                </Section>
                <Section>
                    <h2>Select a Dress</h2>
                    {/* Assuming ImageGallery is defined elsewhere and passed onSelectDress */}
                    <ImageGallery onSelectDress={onSelectDress} />
                </Section>
            </Container>
            <ProcessedImagesContainer>
                {processedImages.map((imageSrc, index) => (
                    <StyledImage key={index} src={imageSrc} alt={`Processed ${index + 1}`} />
                ))}
            </ProcessedImagesContainer>
        </div>
    );
};

export default Apptryon;
