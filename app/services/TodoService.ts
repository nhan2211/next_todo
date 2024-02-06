import { Todo } from "../models/Todo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getTodos = async () => {
    // API URL設定
    const url = `${API_URL}/data/todo.json`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error);
    }
}

export const postTodos = async (todos: Todo[]) => {
    if (!todos) return;

    // API URL設定
    const url = `${API_URL}/data/todo.json`;
    const data = JSON.stringify(todos);

    try {
        // APIで保存
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        });

        if (response.ok) {
            // データを返す
            return await response.json();
        }
    } catch (error) {
        console.error(error);
    }
}
