import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';

const Carousel = ({ items = [], autoPlay = true, autoPlayInterval = 2000, height = { xs: 220, md: 420 } }) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  const start = () => {
    if (!autoPlay || items.length <= 1) return;
    stop();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, autoPlayInterval);
  };

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, autoPlay, autoPlayInterval]);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const onTouchStart = (e) => {
    stop();
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const onTouchMove = (e) => {
    if (touchStartX.current == null) return;
    const current = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = touchStartX.current - current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next(); else prev();
      touchStartX.current = null;
    }
  };

  const onTouchEnd = () => {
    touchStartX.current = null;
    start();
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: 2 }}>
      <Box
        onMouseEnter={stop}
        onMouseLeave={start}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        sx={{
          display: 'flex',
          transition: 'transform 600ms ease',
          // compute widths relative to the sliding container so translateX moves by one slide
          // avoid division by zero by using total = max(items.length, 1)
          transform: `translateX(-${(items.length ? (index * 100) / items.length : 0)}%)`,
          width: `${(items.length || 1) * 100}%`,
          height: { xs: height.xs, md: height.md }
        }}
      >
        {items.map((it, i) => (
          <Box key={it.id ?? i} sx={{ width: `${100 / (items.length || 1)}%`, flexShrink: 0 }}>
            <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
              <img
                src={it.imageUrl}
                alt={it.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <Box sx={{ position: 'absolute', left: 16, bottom: 16, color: 'common.white', textShadow: '0 6px 18px rgba(0,0,0,0.6)' }}>
                <Typography variant="h5" sx={{ fontWeight: 400 }}>{it.name}</Typography>
                <Typography variant="body2">{it.description}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {items.length > 1 && (
        <>
          <IconButton
            onClick={prev}
            size="small"
            sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.7)', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
            aria-label="previous"
          >
            ‹
          </IconButton>

          <IconButton
            onClick={next}
            size="small"
            sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.7)', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
            aria-label="next"
          >
            ›
          </IconButton>

          <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: 8, display: 'flex', gap: 1 }}>
            {items.map((_, i) => (
              <Box
                key={i}
                onClick={() => setIndex(i)}
                sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: i === index ? 'white' : 'rgba(255,255,255,0.7)', cursor: 'pointer', border: '1px solid rgba(0,0,0,0.12)' }}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Carousel;
