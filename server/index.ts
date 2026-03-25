import express from 'express';
import cors from 'cors';
import { supabase } from './supabase.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Users routes
app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
  
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Products routes
app.get('/api/products', async (req, res) => {
  const { category, search } = req.query;
  
  let query = supabase.from('products').select(`*, users(name, rating, reviews_count)`).order('created_at', { ascending: false });
  
  if (category) query = query.eq('category', category as string);
  if (search) query = query.ilike('name', `%${search}%`);

  const { data, error } = await query;
  
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

app.get('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from('products').select(`*, users(name, rating, reviews_count)`).eq('id', id).single();
  
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

app.post('/api/products', async (req, res) => {
  const { name, price, category, description, image_url, seller_id } = req.body;
  const { data, error } = await supabase.from('products').insert([
    { name, price, category, description, image_url, seller_id }
  ]).select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
