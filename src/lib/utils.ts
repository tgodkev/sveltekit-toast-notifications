import { writable } from "svelte/store";
type ToastType = "info" | "error" | "success" | "warning"; // You can add more as needed

interface Toast {
    id: number;
    message: string;
    type: ToastType;
}

export const toast = writable<Toast[]>([]);

export const addToast = (message: string, type: ToastType = "info") => {
  const id: number = Math.random();
  toast.update((n: Toast[]) => [...n, { id, message, type }]);
};

export const removeToast = (id: number) => {
  toast.update((n: Toast[]) => n.filter((t) => t.id !== id));
};
