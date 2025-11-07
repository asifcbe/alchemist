import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
const quotes = [
  { id: 1, language: 'French', quote: "Le parfum est l'art invisible. Il danse sur la peau comme un souvenir d’été.", translation: "Perfume is the invisible art. It dances on the skin like a summer memory." },
  { id: 2, language: 'Spanish', quote: "El perfume es memoria olfativa. Un suspiro que nunca se olvida.", translation: "Perfume is olfactory memory. A sigh that is never forgotten." },
  { id: 3, language: 'Italian', quote: "Il profumo racconta storie. Ogni nota è una parola del cuore.", translation: "Perfume tells stories. Each note is a word from the heart." },
  { id: 4, language: 'German', quote: "Duft ist Emotion. Er flüstert, wo Worte versagen.", translation: "Scent is emotion. It whispers where words fail." },
  { id: 5, language: 'Portuguese', quote: "O perfume é a essência da alma. Um poema que vive no ar.", translation: "Perfume is the essence of the soul. A poem that lives in the air." },
  { id: 6, language: 'Hindi', quote: "खुशबू मन की भाषा है। यह समय को रोक देती है एक पल के लिए।", translation: "Fragrance is the language of the mind. It stops time for just a moment." },
  { id: 7, language: 'Chinese', quote: "香水是无声的诗。它让空气也有了情感。", translation: "Perfume is a silent poem. It gives emotion to the air itself." },
  { id: 8, language: 'Japanese', quote: "香りは記憶を呼び起こす。心に花を咲かせる魔法。", translation: "Scent evokes memories. A magic that makes the heart bloom." },
  { id: 9, language: 'Arabic', quote: "العطر هو السحر الخفي. يروي قصة لا تُقال بالكلمات.", translation: "Perfume is hidden magic. It tells a story words cannot say." },
  { id: 10, language: 'Russian', quote: "Духи — это искусство в бутылке. Они дарят дыханию мечты.", translation: "Perfume is art in a bottle. It gives breath to dreams." },
  { id: 11, language: 'Swahili', quote: "Manukato ni kumbukumbu. Ni upepo wa moyo uliohai.", translation: "Perfume is memory. It is the living wind of the heart." },
  { id: 12, language: 'Turkish', quote: "Parfüm bir sanat. Her damla bir hikâye fısıldar.", translation: "Perfume is an art. Every drop whispers a story." },
  { id: 13, language: 'Korean', quote: "향기는 감정이다. 기억의 빛으로 피어난다.", translation: "Fragrance is emotion. It blossoms in the light of memory." },
  { id: 14, language: 'Dutch', quote: "Parfum is een verhaal. Een adem van schoonheid zonder einde.", translation: "Perfume is a story. A breath of beauty without end." },
  { id: 15, language: 'Greek', quote: "Το άρωμα είναι η ψυχή. Ανασαίνει ρυθμούς του ανέμου.", translation: "Perfume is the soul. It breathes in the rhythm of the wind." },
  { id: 16, language: 'Polish', quote: "Perfumy to sztuka niewidzialna. Ślad serca w powietrzu.", translation: "Perfume is invisible art. A trace of the heart in the air." },
  { id: 17, language: 'Hebrew', quote: "בושם הוא זיכרון בריח. נשימה של עבר בתוך ההווה.", translation: "Perfume is a memory in scent. A breath of the past within the present." },
  { id: 18, language: 'Finnish', quote: "Hajuvesi on tunteiden kieli. Se laulaa hiljaa iholla.", translation: "Perfume is the language of feelings. It sings softly on the skin." },
  { id: 19, language: 'Swedish', quote: "Parfym är en känsla. Ett ljus som aldrig dör i luften.", translation: "Perfume is a feeling. A light that never dies in the air." },
  { id: 20, language: 'Persian', quote: "عطر زبان دل است. می‌نویسد شعر بر باد.", translation: "Perfume is the language of the heart. It writes poetry upon the wind." },
  { id: 21, language: 'Thai', quote: "น้ำหอมคือศิลปะแห่งกลิ่น กลิ่นนั้นเป็นเสียงของจิตใจ.", translation: "Perfume is the art of scent. Its fragrance is the voice of the soul." },
  { id: 22, language: 'Vietnamese', quote: "Nước hoa là ký ức hương thơm. Là cảm xúc chưa bao giờ ngủ quên.", translation: "Perfume is fragrant memory. It is a feeling that never sleeps." },
  { id: 23, language: 'Romanian', quote: "Parfumul este emoție lichidă. O atingere ce rămâne invizibilă.", translation: "Perfume is liquid emotion. A touch that remains unseen." },
  { id: 24, language: 'Hungarian', quote: "A parfüm a lélek illata. Egy pillanat örökkévalóságában él.", translation: "Perfume is the scent of the soul. It lives in the eternity of a moment." },
  { id: 25, language: 'Czech', quote: "Parfém je umění neviditelné. Je to dech poezie.", translation: "Perfume is invisible art. It is the breath of poetry." },
  { id: 26, language: 'Bengali', quote: "সুগন্ধি হলো আত্মার অভিব্যক্তি। এটি মনের আকাশে ছায়া ফেলে।", translation: "Perfume is the expression of the soul. It leaves shadows on the sky of the mind." },
  { id: 27, language: 'Malay', quote: "Minyak wangi ialah puisi tanpa kata. Ia bernyanyi di udara.", translation: "Perfume is poetry without words. It sings in the air." },
  { id: 28, language: 'Indonesian', quote: "Parfum adalah kenangan yang hidup. Setiap aroma membawa kisah baru.", translation: "Perfume is a living memory. Every aroma carries a new story." },
  { id: 29, language: 'Norwegian', quote: "Parfyme er minner i lufta. En vind som bærer sjelens stemme.", translation: "Perfume is memory in the air. A wind that carries the soul’s voice." },
  { id: 30, language: 'Ukrainian', quote: "Парфуми — це мистецтво душі. Вони торкаються серця без слів.", translation: "Perfume is the art of the soul. It touches the heart without words." }
];



const Quotes = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false,
          arrows: false,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  return (
    <Container maxWidth={false} sx={{ my: { xs: 3, sm: 6 }, width: '70vw', mx: 'auto' }}>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        align="center"
        gutterBottom
        sx={{
          fontWeight: 500,
          fontFamily: "'Cormorant Garamond', serif",
          color: '#000000',
        }}
      >
        Al Chemy of Perfumes
      </Typography>
      <Slider {...settings}>
        {quotes.map(({ id, language, quote, translation }) => (
          <Box
            key={id}
            sx={{
              px: 2,
              py: 4,
              textAlign: 'center',
              fontFamily: "'Cormorant Garamond', serif",
              color: '#000000',
              fontStyle: 'italic',
              minHeight: '180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant={isMobile ? 'h6' : 'h5'} gutterBottom>
              "{quote}"
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, fontStyle: 'normal', color: 'text.primary' }}>
              — {language}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color: 'text.primary' }}>
              Translation: {translation}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Quotes;
