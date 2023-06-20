/**
 * This code defines classes and functions for working with the Either type, which represents a value that can be either a Left or a Right.
 */

/**
 * Represents the Left side of the Either type.
 * @template L - Type of the Left value.
 * @template A - Type of the Right value.
 */
export class Left<L, A> {
  /**
   * Constructs a new Left instance.
   * @param value - The value of type L.
   */

  constructor(readonly value: L) {
    this.value = value;
  }

  /**
   * Checks if the instance is of type Left.
   * @returns True if the instance is of type Left, false otherwise.
   */
  isLeft(): this is Left<L, A> {
    return true;
  }

  /**
   * Checks if the instance is of type Right.
   * @returns False if the instance is of type Right, true otherwise.
   */
  isRight(): this is Right<L, A> {
    return false;
  }
}

/**
 * Represents the Right side of the Either type.
 * @template L - Type of the Left value.
 * @template A - Type of the Right value.
 */
export class Right<L, A> {
  /**
   * Constructs a new Right instance.
   * @param value - The value of type A.
   */
  constructor(readonly value: A) {
    this.value = value;
  }

  /**
   * Checks if the instance is of type Left.
   * @returns False if the instance is of type Left, true otherwise.
   */
  isLeft(): this is Left<L, A> {
    return false;
  }

  /**
   * Checks if the instance is of type Right.
   * @returns True if the instance is of type Right, false otherwise.
   */
  isRight(): this is Right<L, A> {
    return true;
  }
}

/**
 * Represents a value that can be either a Left or a Right.
 * @template L - Type of the Left value.
 * @template A - Type of the Right value.
 */
export type Either<L, A> = Left<L, A> | Right<L, A>;

/**
 * Constructs a new Left instance with the provided value.
 * @param l - The value of type L.
 * @returns A new Left instance.
 * @template L - Type of the Left value.
 * @template A - Type of the Right value.
 */
export const left = <L, A>(l: L): Either<L, A> => {
  return new Left<L, A>(l);
};

/**
 * Constructs a new Right instance with the provided value.
 * @param a - The value of type A.
 * @returns A new Right instance.
 * @template L - Type of the Left value.
 * @template A - Type of the Right value.
 */
export const right = <L, A>(a: A): Either<L, A> => {
  return new Right<L, A>(a);
};
 