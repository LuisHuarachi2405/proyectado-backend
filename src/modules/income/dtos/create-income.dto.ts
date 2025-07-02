export interface CreateIncomeDto {
  userId: string;                     // Relación con usuario (obligatorio)
  name: string;                      // Nombre del ingreso
  description?: string;              // Opcional
  amount: number;                    // Monto del ingreso
  frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY' | 'ONE_TIME'; // Enum obligatorio
  startDate?: string | Date;         // Fecha de inicio (por defecto `now()` si no se envía)
  endDate?: string | Date;           // Opcional
  categoryId?: string;               // Si pertenece a una categoría
}