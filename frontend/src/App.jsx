// App.jsx 

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp } from '@clerk/clerk-react';
import HomePage from './pages/HomePage';
import CenteredContainer from './components/CenteredContainer'; 
import BookDetails from './pages/BookDetails';
import CreateReviewISBN from './pages/CreateReviewISBN';
import CreateReviewSearch from './pages/CreateReviewSearch';
import EditReview from './pages/EditReview';  
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:isbn" element={<BookDetails />} />
        <Route path="/book/create/:isbn" element={<CreateReviewISBN />} />
        <Route path="/create" element={<CreateReviewSearch />} />
        <Route path="/:isbn/reviews/:reviewId/edit" element={<EditReview />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        
        {/* SignIn Route */}
        <Route
          path="/sign-in/*"
          element={
            <CenteredContainer>
              <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
            </CenteredContainer>
          }
        />
        
        {/* SignUp Route */}
        <Route
          path="/sign-up/*"
          element={
            <CenteredContainer>
              <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
            </CenteredContainer>
          }
        />
      </Routes>
    </>
  );
}

// Wrapper components to extract URL params
import { useParams } from 'react-router-dom';

const ReviewsWrapper = () => {
  const { isbn } = useParams();
  return <Reviews bookIsbn={isbn} />;
};

const CreateReviewWrapper = () => {
  const { isbn } = useParams();
  return <CreateReview bookIsbn={isbn} />;
};

// NotFound Component
const NotFound = () => (
  <Typography variant="h4" align="center" sx={{ mt: 4 }}>
    404 - Page Not Found
  </Typography>
);

export default App;
