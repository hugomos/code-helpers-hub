/**
 * Defines a type called Optional that creates a new type with certain properties as optional.
 * @template T - The original type.
 * @template K - The keys of the properties to make optional.
 * @returns A new type with specified properties as optional.
 * @example
 * // Create a type with 'age' property as optional
 * type Person = {
 *   name: string;
 *   age: number;
 *   address: string;
 * };
 *
 * type OptionalAgePerson = Optional<Person, 'age' | 'address'>;
 * // OptionalAgePerson is equivalent to:
 * // {
 * //   name: string;
 * //   age?: number;
 * //   address?: string;
 * // }
 */
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
