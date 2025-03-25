<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    // 1. List tasks with pagination, searching, and sorting
    public function index(Request $request)
    {
        $query = Task::query();

        // Searching
        if ($request->has('search')) {
            $query->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('description', 'like', '%' . $request->search . '%');
        }

        // Sorting
        $sortBy = $request->get('sortBy', 'id'); // Default sorting by 'id'
        $sortOrder = $request->get('sortOrder', 'desc'); // Default 'asc'
        $query->orderBy($sortBy, $sortOrder);

        // Pagination (default 10 per page)
        $tasks = $query->paginate($request->get('perPage', 10));

        return response()->json($tasks);
    }

    // 2. Store a new task
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'status' => 'required|in:To Do,In Progress,Done',
            'due_date' => 'nullable|date',
        ]);

        $task = Task::create($validated);
        return response()->json($task, 201);
    }

    // 3. Show a specific task
    public function show($id)
    {
        $task = Task::findOrFail($id);
        return response()->json($task);
    }

    // 4. Update an existing task
    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'status' => 'sometimes|required|in:To Do,In Progress,Done',
            'due_date' => 'nullable|date',
        ]);

        $task->update($validated);
        return response()->json($task);
    }

    // 5. Delete a task
    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return response()->json(['message' => 'Task deleted successfully']);
    }
}
