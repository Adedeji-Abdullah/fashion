import {create} from 'zustand';

// type CartItem = {
//     id: string;
//     name: string;
//     price: number;
//     quantity: number;
// };

type CartItem2 = {
    cart: string[];
    addToCart: (item: string) => void;
    removeFromCart: (item: string) => void;
};

// const useCartStore = create<{ cart: CartItem[]; addToCart: (item: CartItem) => void; removeFromCart: (item: CartItem) => void }>((set) => ({
//   cart: [],
//   addToCart: (item: CartItem) => set((state) => ({ cart: [...state.cart, item] })),
//   removeFromCart: (item: CartItem) => set((state) => ({ cart: state.cart.filter((i) => i.id !== item.id) })),
// }));

export const useCartStore = create<CartItem2>((set) => ({
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item]})),
    removeFromCart: (item) => set((state) => ({ cart: state.cart.filter((i) => i !== item) })),
}))