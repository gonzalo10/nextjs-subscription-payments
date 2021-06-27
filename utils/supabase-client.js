import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function test() {
  const { data, error } = await supabase.from('products').select('*');

  console.log(data, error);
}

export const getActiveProductsWithPrices = async () => {
  await test();
  // const { data, error } = await supabase
  //   .from('products')
  //   .select('*, prices(*)')
  //   .eq('active', true)
  //   .eq('prices.active', true)
  //   .order('metadata->index')
  //   .order('unit_amount', { foreignTable: 'prices' });

  // if (error) {
  //   console.log(error.message);
  //   throw error;
  // }

  // return data || [];
  return [];
};

export const updateUserName = async (user, name) => {
  await supabase
    .from('users')
    .update({
      full_name: name
    })
    .eq('id', user.id);
};
