export interface CreateExpenseDto {
  userId: string;                     // ID del usuario al que pertenece el gasto
  name: string;                       // Nombre del gasto
  description?: string;              // Descripción opcional
  amount: number;                    // Monto del gasto
  frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY' | 'ONE_TIME'; // Frecuencia
  startDate?: string | Date;         // Fecha de inicio (opcional)
  endDate?: string | Date;           // Fecha de fin (opcional)
  categoryId?: string;               // Relación con categoría (opcional)
}