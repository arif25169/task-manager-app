<?php

namespace Tests\Feature;

use App\Models\Task;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class TaskControllerTest extends TestCase
{
    use RefreshDatabase; // Refresh DB after each test

    protected function setUp(): void
    {
        parent::setUp();
        // Create and authenticate a user for all tests
        $this->user = User::factory()->create();
        Sanctum::actingAs($this->user);
    }

    /**
     * Test listing tasks (GET /api/tasks).
     */
    public function test_can_list_tasks()
    {
        Task::factory()->count(5)->create();

        $response = $this->getJson('/api/tasks');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    '*' => ['id', 'name', 'description', 'status', 'due_date', 'created_at', 'updated_at'],
                ],
                'current_page',
                'last_page',
                'total',
            ]);
    }

    /**
     * Test creating a task (POST /api/tasks).
     */
    public function test_can_create_task()
    {
        $taskData = [
            'name' => 'Learn Laravel',
            'description' => 'Learn how to build a CRUD API with Laravel',
            'status' => 'To Do',
            'due_date' => now()->addDays(7)->toDateTimeString(),
        ];

        $response = $this->postJson('/api/tasks', $taskData);

        $response->assertStatus(201)
            ->assertJsonFragment(['name' => 'Learn Laravel']);

        $this->assertDatabaseHas('tasks', $taskData);
    }

    /**
     * Test showing a specific task (GET /api/tasks/{id}).
     */
    public function test_can_show_task()
    {
        $task = Task::factory()->create();

        $response = $this->getJson("/api/tasks/{$task->id}");

        $response->assertStatus(200)
            ->assertJsonFragment(['id' => $task->id, 'name' => $task->name]);
    }

    /**
     * Test updating a task (PUT /api/tasks/{id}).
     */
    public function test_can_update_task()
    {
        $task = Task::factory()->create();

        $updateData = ['status' => 'Done'];

        $response = $this->putJson("/api/tasks/{$task->id}", $updateData);

        $response->assertStatus(200)
            ->assertJsonFragment(['status' => 'Done']);

        $this->assertDatabaseHas('tasks', array_merge($task->toArray(), $updateData));
    }

    /**
     * Test deleting a task (DELETE /api/tasks/{id}).
     */
    public function test_can_delete_task()
    {
        $task = Task::factory()->create();

        $response = $this->deleteJson("/api/tasks/{$task->id}");

        $response->assertStatus(200)
            ->assertJson(['message' => 'Task deleted successfully']);

        $this->assertDatabaseMissing('tasks', ['id' => $task->id]);
    }
}
