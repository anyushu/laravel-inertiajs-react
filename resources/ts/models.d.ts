/**
 * This file is auto generated using 'php artisan typescript:generate'
 *
 * Changes to this file will be lost when the command is run again
 */

declare namespace App.Models {
    export interface DeletedToDo {
        id: number;
        user_id: number;
        to_do_status_id: number | null;
        title: string;
        description: string | null;
        deadline: string | null;
        created_at: string | null;
        updated_at: string | null;
        user?: App.Models.User | null;
        to_do?: App.Models.ToDo | null;
    }

    export interface ToDo {
        id: number;
        user_id: number;
        to_do_status_id: number | null;
        title: string;
        description: string | null;
        deadline: string | null;
        created_at: string | null;
        updated_at: string | null;
        user?: App.Models.User | null;
        deleted_to_dos?: Array<App.Models.DeletedToDo> | null;
        status?: App.Models.ToDoStatus | null;
        deleted_to_dos_count?: number | null;
    }

    export interface ToDoStatus {
        id: number;
        user_id: number;
        name: string;
        color: string | null;
        created_at: string | null;
        updated_at: string | null;
        user?: App.Models.User | null;
        to_dos?: Array<App.Models.ToDo> | null;
        to_dos_count?: number | null;
    }

    export interface User {
        id: number;
        name: string;
        email: string;
        email_verified_at: string | null;
        password: string;
        remember_token: string | null;
        created_at: string | null;
        updated_at: string | null;
        to_do_statuses?: Array<App.Models.ToDoStatus> | null;
        to_dos?: Array<App.Models.ToDo> | null;
        to_do_statuses_count?: number | null;
        to_dos_count?: number | null;
    }

}
