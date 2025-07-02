export interface CreateTransactionDto {
  userId: string;                // ID del usuario asociado (obligatorio)
  amount: number;               // Monto de la transacción (obligatorio)
  description?: string;         // Descripción opcional
  date?: string | Date;         // Fecha de la transacción (opcional, por defecto `now()`)
  type: 'INCOME' | 'EXPENSE';   // Tipo de transacción
  status?: 'PENDING' | 'COMPLETED' | 'CANCELLED'; // Estado (opcional, por defecto 'COMPLETED')
  incomeId?: string;            // Si la transacción está relacionada con un ingreso
  expenseId?: string;           // Si la transacción está relacionada con un gasto
}