
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SupportHouse
 * 
 */
export type SupportHouse = $Result.DefaultSelection<Prisma.$SupportHousePayload>
/**
 * Model Accommodation
 * 
 */
export type Accommodation = $Result.DefaultSelection<Prisma.$AccommodationPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model Phone
 * 
 */
export type Phone = $Result.DefaultSelection<Prisma.$PhonePayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model PatientGuardian
 * 
 */
export type PatientGuardian = $Result.DefaultSelection<Prisma.$PatientGuardianPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model TripPassenger
 * 
 */
export type TripPassenger = $Result.DefaultSelection<Prisma.$TripPassengerPayload>
/**
 * Model TripRoute
 * 
 */
export type TripRoute = $Result.DefaultSelection<Prisma.$TripRoutePayload>
/**
 * Model VehicleDocument
 * 
 */
export type VehicleDocument = $Result.DefaultSelection<Prisma.$VehicleDocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DocumentType: {
  RG: 'RG',
  CPF: 'CPF',
  CNH: 'CNH',
  BIRTH_CERTIFICATE: 'BIRTH_CERTIFICATE',
  PROOF_OF_RESIDENCE: 'PROOF_OF_RESIDENCE',
  MEDICAL_REPORT: 'MEDICAL_REPORT',
  OTHER: 'OTHER'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]


export const Relationship: {
  FATHER: 'FATHER',
  MOTHER: 'MOTHER',
  SON: 'SON',
  DAUGHTER: 'DAUGHTER',
  SPOUSE: 'SPOUSE',
  BROTHER: 'BROTHER',
  SISTER: 'SISTER',
  UNCLE: 'UNCLE',
  AUNT: 'AUNT',
  GRANDFATHER: 'GRANDFATHER',
  GRANDMOTHER: 'GRANDMOTHER',
  OTHER: 'OTHER'
};

export type Relationship = (typeof Relationship)[keyof typeof Relationship]


export const PersonType: {
  PATIENT: 'PATIENT',
  COMPANION: 'COMPANION',
  EMPLOYEE: 'EMPLOYEE',
  OTHER: 'OTHER'
};

export type PersonType = (typeof PersonType)[keyof typeof PersonType]


export const EmployeeType: {
  DRIVER: 'DRIVER',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN',
  OTHER: 'OTHER'
};

export type EmployeeType = (typeof EmployeeType)[keyof typeof EmployeeType]


export const VehicleStatus: {
  ACTIVE: 'ACTIVE',
  MAINTENANCE: 'MAINTENANCE',
  INACTIVE: 'INACTIVE'
};

export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus]


export const VehicleDocumentType: {
  INSURANCE: 'INSURANCE',
  REGISTRATION: 'REGISTRATION',
  INSPECTION: 'INSPECTION',
  OTHER: 'OTHER'
};

export type VehicleDocumentType = (typeof VehicleDocumentType)[keyof typeof VehicleDocumentType]


export const TripStatus: {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type TripStatus = (typeof TripStatus)[keyof typeof TripStatus]

}

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

export type Relationship = $Enums.Relationship

export const Relationship: typeof $Enums.Relationship

export type PersonType = $Enums.PersonType

export const PersonType: typeof $Enums.PersonType

export type EmployeeType = $Enums.EmployeeType

export const EmployeeType: typeof $Enums.EmployeeType

export type VehicleStatus = $Enums.VehicleStatus

export const VehicleStatus: typeof $Enums.VehicleStatus

export type VehicleDocumentType = $Enums.VehicleDocumentType

export const VehicleDocumentType: typeof $Enums.VehicleDocumentType

export type TripStatus = $Enums.TripStatus

export const TripStatus: typeof $Enums.TripStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SupportHouses
 * const supportHouses = await prisma.supportHouse.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SupportHouses
   * const supportHouses = await prisma.supportHouse.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.supportHouse`: Exposes CRUD operations for the **SupportHouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportHouses
    * const supportHouses = await prisma.supportHouse.findMany()
    * ```
    */
  get supportHouse(): Prisma.SupportHouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accommodation`: Exposes CRUD operations for the **Accommodation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accommodations
    * const accommodations = await prisma.accommodation.findMany()
    * ```
    */
  get accommodation(): Prisma.AccommodationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phone`: Exposes CRUD operations for the **Phone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phones
    * const phones = await prisma.phone.findMany()
    * ```
    */
  get phone(): Prisma.PhoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patientGuardian`: Exposes CRUD operations for the **PatientGuardian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientGuardians
    * const patientGuardians = await prisma.patientGuardian.findMany()
    * ```
    */
  get patientGuardian(): Prisma.PatientGuardianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripPassenger`: Exposes CRUD operations for the **TripPassenger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripPassengers
    * const tripPassengers = await prisma.tripPassenger.findMany()
    * ```
    */
  get tripPassenger(): Prisma.TripPassengerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripRoute`: Exposes CRUD operations for the **TripRoute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripRoutes
    * const tripRoutes = await prisma.tripRoute.findMany()
    * ```
    */
  get tripRoute(): Prisma.TripRouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleDocument`: Exposes CRUD operations for the **VehicleDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleDocuments
    * const vehicleDocuments = await prisma.vehicleDocument.findMany()
    * ```
    */
  get vehicleDocument(): Prisma.VehicleDocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SupportHouse: 'SupportHouse',
    Accommodation: 'Accommodation',
    Document: 'Document',
    Employee: 'Employee',
    Person: 'Person',
    Phone: 'Phone',
    Address: 'Address',
    PatientGuardian: 'PatientGuardian',
    Vehicle: 'Vehicle',
    Trip: 'Trip',
    TripPassenger: 'TripPassenger',
    TripRoute: 'TripRoute',
    VehicleDocument: 'VehicleDocument'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "supportHouse" | "accommodation" | "document" | "employee" | "person" | "phone" | "address" | "patientGuardian" | "vehicle" | "trip" | "tripPassenger" | "tripRoute" | "vehicleDocument"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SupportHouse: {
        payload: Prisma.$SupportHousePayload<ExtArgs>
        fields: Prisma.SupportHouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportHouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportHousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportHouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportHousePayload>
          }
          findFirst: {
            args: Prisma.SupportHouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportHousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportHouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportHousePayload>
          }
          findMany: {
            args: Prisma.SupportHouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportHousePayload>[]
          }
          create: {
            args: Prisma.SupportHouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportHousePayload>
          }
          createMany: {
            args: Prisma.SupportHouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportHouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportHousePayload>[]
          }
          delete: {
            args: Prisma.SupportHouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportHousePayload>
          }
          update: {
            args: Prisma.SupportHouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportHousePayload>
          }
          deleteMany: {
            args: Prisma.SupportHouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportHouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupportHouseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportHousePayload>[]
          }
          upsert: {
            args: Prisma.SupportHouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportHousePayload>
          }
          aggregate: {
            args: Prisma.SupportHouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportHouse>
          }
          groupBy: {
            args: Prisma.SupportHouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportHouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportHouseCountArgs<ExtArgs>
            result: $Utils.Optional<SupportHouseCountAggregateOutputType> | number
          }
        }
      }
      Accommodation: {
        payload: Prisma.$AccommodationPayload<ExtArgs>
        fields: Prisma.AccommodationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccommodationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccommodationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          findFirst: {
            args: Prisma.AccommodationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccommodationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          findMany: {
            args: Prisma.AccommodationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>[]
          }
          create: {
            args: Prisma.AccommodationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          createMany: {
            args: Prisma.AccommodationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccommodationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>[]
          }
          delete: {
            args: Prisma.AccommodationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          update: {
            args: Prisma.AccommodationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          deleteMany: {
            args: Prisma.AccommodationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccommodationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccommodationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>[]
          }
          upsert: {
            args: Prisma.AccommodationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccommodationPayload>
          }
          aggregate: {
            args: Prisma.AccommodationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccommodation>
          }
          groupBy: {
            args: Prisma.AccommodationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccommodationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccommodationCountArgs<ExtArgs>
            result: $Utils.Optional<AccommodationCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      Phone: {
        payload: Prisma.$PhonePayload<ExtArgs>
        fields: Prisma.PhoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>
          }
          findFirst: {
            args: Prisma.PhoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>
          }
          findMany: {
            args: Prisma.PhoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>[]
          }
          create: {
            args: Prisma.PhoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>
          }
          createMany: {
            args: Prisma.PhoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>[]
          }
          delete: {
            args: Prisma.PhoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>
          }
          update: {
            args: Prisma.PhoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>
          }
          deleteMany: {
            args: Prisma.PhoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>[]
          }
          upsert: {
            args: Prisma.PhoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>
          }
          aggregate: {
            args: Prisma.PhoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhone>
          }
          groupBy: {
            args: Prisma.PhoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      PatientGuardian: {
        payload: Prisma.$PatientGuardianPayload<ExtArgs>
        fields: Prisma.PatientGuardianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientGuardianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientGuardianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientGuardianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientGuardianPayload>
          }
          findFirst: {
            args: Prisma.PatientGuardianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientGuardianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientGuardianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientGuardianPayload>
          }
          findMany: {
            args: Prisma.PatientGuardianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientGuardianPayload>[]
          }
          create: {
            args: Prisma.PatientGuardianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientGuardianPayload>
          }
          createMany: {
            args: Prisma.PatientGuardianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientGuardianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientGuardianPayload>[]
          }
          delete: {
            args: Prisma.PatientGuardianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientGuardianPayload>
          }
          update: {
            args: Prisma.PatientGuardianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientGuardianPayload>
          }
          deleteMany: {
            args: Prisma.PatientGuardianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientGuardianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientGuardianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientGuardianPayload>[]
          }
          upsert: {
            args: Prisma.PatientGuardianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientGuardianPayload>
          }
          aggregate: {
            args: Prisma.PatientGuardianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientGuardian>
          }
          groupBy: {
            args: Prisma.PatientGuardianGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGuardianGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientGuardianCountArgs<ExtArgs>
            result: $Utils.Optional<PatientGuardianCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      TripPassenger: {
        payload: Prisma.$TripPassengerPayload<ExtArgs>
        fields: Prisma.TripPassengerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripPassengerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPassengerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripPassengerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPassengerPayload>
          }
          findFirst: {
            args: Prisma.TripPassengerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPassengerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripPassengerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPassengerPayload>
          }
          findMany: {
            args: Prisma.TripPassengerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPassengerPayload>[]
          }
          create: {
            args: Prisma.TripPassengerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPassengerPayload>
          }
          createMany: {
            args: Prisma.TripPassengerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripPassengerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPassengerPayload>[]
          }
          delete: {
            args: Prisma.TripPassengerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPassengerPayload>
          }
          update: {
            args: Prisma.TripPassengerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPassengerPayload>
          }
          deleteMany: {
            args: Prisma.TripPassengerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripPassengerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripPassengerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPassengerPayload>[]
          }
          upsert: {
            args: Prisma.TripPassengerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPassengerPayload>
          }
          aggregate: {
            args: Prisma.TripPassengerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripPassenger>
          }
          groupBy: {
            args: Prisma.TripPassengerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripPassengerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripPassengerCountArgs<ExtArgs>
            result: $Utils.Optional<TripPassengerCountAggregateOutputType> | number
          }
        }
      }
      TripRoute: {
        payload: Prisma.$TripRoutePayload<ExtArgs>
        fields: Prisma.TripRouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripRouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripRoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripRouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripRoutePayload>
          }
          findFirst: {
            args: Prisma.TripRouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripRoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripRouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripRoutePayload>
          }
          findMany: {
            args: Prisma.TripRouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripRoutePayload>[]
          }
          create: {
            args: Prisma.TripRouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripRoutePayload>
          }
          createMany: {
            args: Prisma.TripRouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripRouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripRoutePayload>[]
          }
          delete: {
            args: Prisma.TripRouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripRoutePayload>
          }
          update: {
            args: Prisma.TripRouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripRoutePayload>
          }
          deleteMany: {
            args: Prisma.TripRouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripRouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripRouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripRoutePayload>[]
          }
          upsert: {
            args: Prisma.TripRouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripRoutePayload>
          }
          aggregate: {
            args: Prisma.TripRouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripRoute>
          }
          groupBy: {
            args: Prisma.TripRouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripRouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripRouteCountArgs<ExtArgs>
            result: $Utils.Optional<TripRouteCountAggregateOutputType> | number
          }
        }
      }
      VehicleDocument: {
        payload: Prisma.$VehicleDocumentPayload<ExtArgs>
        fields: Prisma.VehicleDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDocumentPayload>
          }
          findFirst: {
            args: Prisma.VehicleDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDocumentPayload>
          }
          findMany: {
            args: Prisma.VehicleDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDocumentPayload>[]
          }
          create: {
            args: Prisma.VehicleDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDocumentPayload>
          }
          createMany: {
            args: Prisma.VehicleDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDocumentPayload>[]
          }
          delete: {
            args: Prisma.VehicleDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDocumentPayload>
          }
          update: {
            args: Prisma.VehicleDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDocumentPayload>
          }
          deleteMany: {
            args: Prisma.VehicleDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDocumentPayload>[]
          }
          upsert: {
            args: Prisma.VehicleDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleDocumentPayload>
          }
          aggregate: {
            args: Prisma.VehicleDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleDocument>
          }
          groupBy: {
            args: Prisma.VehicleDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleDocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    supportHouse?: SupportHouseOmit
    accommodation?: AccommodationOmit
    document?: DocumentOmit
    employee?: EmployeeOmit
    person?: PersonOmit
    phone?: PhoneOmit
    address?: AddressOmit
    patientGuardian?: PatientGuardianOmit
    vehicle?: VehicleOmit
    trip?: TripOmit
    tripPassenger?: TripPassengerOmit
    tripRoute?: TripRouteOmit
    vehicleDocument?: VehicleDocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SupportHouseCountOutputType
   */

  export type SupportHouseCountOutputType = {
    accommodations: number
    employees: number
    tripRoutes: number
  }

  export type SupportHouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accommodations?: boolean | SupportHouseCountOutputTypeCountAccommodationsArgs
    employees?: boolean | SupportHouseCountOutputTypeCountEmployeesArgs
    tripRoutes?: boolean | SupportHouseCountOutputTypeCountTripRoutesArgs
  }

  // Custom InputTypes
  /**
   * SupportHouseCountOutputType without action
   */
  export type SupportHouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportHouseCountOutputType
     */
    select?: SupportHouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupportHouseCountOutputType without action
   */
  export type SupportHouseCountOutputTypeCountAccommodationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccommodationWhereInput
  }

  /**
   * SupportHouseCountOutputType without action
   */
  export type SupportHouseCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * SupportHouseCountOutputType without action
   */
  export type SupportHouseCountOutputTypeCountTripRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripRouteWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    trips: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | EmployeeCountOutputTypeCountTripsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    phones: number
    documents: number
    accommodations: number
    tripPassengers: number
    companionGuardianships: number
    patientGuardianships: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phones?: boolean | PersonCountOutputTypeCountPhonesArgs
    documents?: boolean | PersonCountOutputTypeCountDocumentsArgs
    accommodations?: boolean | PersonCountOutputTypeCountAccommodationsArgs
    tripPassengers?: boolean | PersonCountOutputTypeCountTripPassengersArgs
    companionGuardianships?: boolean | PersonCountOutputTypeCountCompanionGuardianshipsArgs
    patientGuardianships?: boolean | PersonCountOutputTypeCountPatientGuardianshipsArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountPhonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountAccommodationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccommodationWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountTripPassengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPassengerWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountCompanionGuardianshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientGuardianWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountPatientGuardianshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientGuardianWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    trips: number
    documents: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | VehicleCountOutputTypeCountTripsArgs
    documents?: boolean | VehicleCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleDocumentWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    passengers: number
    patientGuardians: number
    routes: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passengers?: boolean | TripCountOutputTypeCountPassengersArgs
    patientGuardians?: boolean | TripCountOutputTypeCountPatientGuardiansArgs
    routes?: boolean | TripCountOutputTypeCountRoutesArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountPassengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPassengerWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountPatientGuardiansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientGuardianWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripRouteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SupportHouse
   */

  export type AggregateSupportHouse = {
    _count: SupportHouseCountAggregateOutputType | null
    _avg: SupportHouseAvgAggregateOutputType | null
    _sum: SupportHouseSumAggregateOutputType | null
    _min: SupportHouseMinAggregateOutputType | null
    _max: SupportHouseMaxAggregateOutputType | null
  }

  export type SupportHouseAvgAggregateOutputType = {
    capacity: number | null
  }

  export type SupportHouseSumAggregateOutputType = {
    capacity: number | null
  }

  export type SupportHouseMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    capacity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportHouseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    capacity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportHouseCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    capacity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupportHouseAvgAggregateInputType = {
    capacity?: true
  }

  export type SupportHouseSumAggregateInputType = {
    capacity?: true
  }

  export type SupportHouseMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    capacity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportHouseMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    capacity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportHouseCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    capacity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupportHouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportHouse to aggregate.
     */
    where?: SupportHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportHouses to fetch.
     */
    orderBy?: SupportHouseOrderByWithRelationInput | SupportHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportHouses
    **/
    _count?: true | SupportHouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupportHouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupportHouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportHouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportHouseMaxAggregateInputType
  }

  export type GetSupportHouseAggregateType<T extends SupportHouseAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportHouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportHouse[P]>
      : GetScalarType<T[P], AggregateSupportHouse[P]>
  }




  export type SupportHouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportHouseWhereInput
    orderBy?: SupportHouseOrderByWithAggregationInput | SupportHouseOrderByWithAggregationInput[]
    by: SupportHouseScalarFieldEnum[] | SupportHouseScalarFieldEnum
    having?: SupportHouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportHouseCountAggregateInputType | true
    _avg?: SupportHouseAvgAggregateInputType
    _sum?: SupportHouseSumAggregateInputType
    _min?: SupportHouseMinAggregateInputType
    _max?: SupportHouseMaxAggregateInputType
  }

  export type SupportHouseGroupByOutputType = {
    id: string
    name: string
    address: string
    phone: string | null
    capacity: number | null
    createdAt: Date
    updatedAt: Date
    _count: SupportHouseCountAggregateOutputType | null
    _avg: SupportHouseAvgAggregateOutputType | null
    _sum: SupportHouseSumAggregateOutputType | null
    _min: SupportHouseMinAggregateOutputType | null
    _max: SupportHouseMaxAggregateOutputType | null
  }

  type GetSupportHouseGroupByPayload<T extends SupportHouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportHouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportHouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportHouseGroupByOutputType[P]>
            : GetScalarType<T[P], SupportHouseGroupByOutputType[P]>
        }
      >
    >


  export type SupportHouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    capacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accommodations?: boolean | SupportHouse$accommodationsArgs<ExtArgs>
    employees?: boolean | SupportHouse$employeesArgs<ExtArgs>
    tripRoutes?: boolean | SupportHouse$tripRoutesArgs<ExtArgs>
    _count?: boolean | SupportHouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportHouse"]>

  export type SupportHouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    capacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supportHouse"]>

  export type SupportHouseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    capacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supportHouse"]>

  export type SupportHouseSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    capacity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupportHouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone" | "capacity" | "createdAt" | "updatedAt", ExtArgs["result"]["supportHouse"]>
  export type SupportHouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accommodations?: boolean | SupportHouse$accommodationsArgs<ExtArgs>
    employees?: boolean | SupportHouse$employeesArgs<ExtArgs>
    tripRoutes?: boolean | SupportHouse$tripRoutesArgs<ExtArgs>
    _count?: boolean | SupportHouseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupportHouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupportHouseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupportHousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportHouse"
    objects: {
      accommodations: Prisma.$AccommodationPayload<ExtArgs>[]
      employees: Prisma.$EmployeePayload<ExtArgs>[]
      tripRoutes: Prisma.$TripRoutePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phone: string | null
      capacity: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supportHouse"]>
    composites: {}
  }

  type SupportHouseGetPayload<S extends boolean | null | undefined | SupportHouseDefaultArgs> = $Result.GetResult<Prisma.$SupportHousePayload, S>

  type SupportHouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupportHouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupportHouseCountAggregateInputType | true
    }

  export interface SupportHouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportHouse'], meta: { name: 'SupportHouse' } }
    /**
     * Find zero or one SupportHouse that matches the filter.
     * @param {SupportHouseFindUniqueArgs} args - Arguments to find a SupportHouse
     * @example
     * // Get one SupportHouse
     * const supportHouse = await prisma.supportHouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportHouseFindUniqueArgs>(args: SelectSubset<T, SupportHouseFindUniqueArgs<ExtArgs>>): Prisma__SupportHouseClient<$Result.GetResult<Prisma.$SupportHousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupportHouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupportHouseFindUniqueOrThrowArgs} args - Arguments to find a SupportHouse
     * @example
     * // Get one SupportHouse
     * const supportHouse = await prisma.supportHouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportHouseFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportHouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportHouseClient<$Result.GetResult<Prisma.$SupportHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportHouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportHouseFindFirstArgs} args - Arguments to find a SupportHouse
     * @example
     * // Get one SupportHouse
     * const supportHouse = await prisma.supportHouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportHouseFindFirstArgs>(args?: SelectSubset<T, SupportHouseFindFirstArgs<ExtArgs>>): Prisma__SupportHouseClient<$Result.GetResult<Prisma.$SupportHousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportHouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportHouseFindFirstOrThrowArgs} args - Arguments to find a SupportHouse
     * @example
     * // Get one SupportHouse
     * const supportHouse = await prisma.supportHouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportHouseFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportHouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportHouseClient<$Result.GetResult<Prisma.$SupportHousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupportHouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportHouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportHouses
     * const supportHouses = await prisma.supportHouse.findMany()
     * 
     * // Get first 10 SupportHouses
     * const supportHouses = await prisma.supportHouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportHouseWithIdOnly = await prisma.supportHouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportHouseFindManyArgs>(args?: SelectSubset<T, SupportHouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportHousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupportHouse.
     * @param {SupportHouseCreateArgs} args - Arguments to create a SupportHouse.
     * @example
     * // Create one SupportHouse
     * const SupportHouse = await prisma.supportHouse.create({
     *   data: {
     *     // ... data to create a SupportHouse
     *   }
     * })
     * 
     */
    create<T extends SupportHouseCreateArgs>(args: SelectSubset<T, SupportHouseCreateArgs<ExtArgs>>): Prisma__SupportHouseClient<$Result.GetResult<Prisma.$SupportHousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupportHouses.
     * @param {SupportHouseCreateManyArgs} args - Arguments to create many SupportHouses.
     * @example
     * // Create many SupportHouses
     * const supportHouse = await prisma.supportHouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportHouseCreateManyArgs>(args?: SelectSubset<T, SupportHouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupportHouses and returns the data saved in the database.
     * @param {SupportHouseCreateManyAndReturnArgs} args - Arguments to create many SupportHouses.
     * @example
     * // Create many SupportHouses
     * const supportHouse = await prisma.supportHouse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupportHouses and only return the `id`
     * const supportHouseWithIdOnly = await prisma.supportHouse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportHouseCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportHouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportHousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupportHouse.
     * @param {SupportHouseDeleteArgs} args - Arguments to delete one SupportHouse.
     * @example
     * // Delete one SupportHouse
     * const SupportHouse = await prisma.supportHouse.delete({
     *   where: {
     *     // ... filter to delete one SupportHouse
     *   }
     * })
     * 
     */
    delete<T extends SupportHouseDeleteArgs>(args: SelectSubset<T, SupportHouseDeleteArgs<ExtArgs>>): Prisma__SupportHouseClient<$Result.GetResult<Prisma.$SupportHousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupportHouse.
     * @param {SupportHouseUpdateArgs} args - Arguments to update one SupportHouse.
     * @example
     * // Update one SupportHouse
     * const supportHouse = await prisma.supportHouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportHouseUpdateArgs>(args: SelectSubset<T, SupportHouseUpdateArgs<ExtArgs>>): Prisma__SupportHouseClient<$Result.GetResult<Prisma.$SupportHousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupportHouses.
     * @param {SupportHouseDeleteManyArgs} args - Arguments to filter SupportHouses to delete.
     * @example
     * // Delete a few SupportHouses
     * const { count } = await prisma.supportHouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportHouseDeleteManyArgs>(args?: SelectSubset<T, SupportHouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportHouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportHouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportHouses
     * const supportHouse = await prisma.supportHouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportHouseUpdateManyArgs>(args: SelectSubset<T, SupportHouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportHouses and returns the data updated in the database.
     * @param {SupportHouseUpdateManyAndReturnArgs} args - Arguments to update many SupportHouses.
     * @example
     * // Update many SupportHouses
     * const supportHouse = await prisma.supportHouse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupportHouses and only return the `id`
     * const supportHouseWithIdOnly = await prisma.supportHouse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupportHouseUpdateManyAndReturnArgs>(args: SelectSubset<T, SupportHouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportHousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupportHouse.
     * @param {SupportHouseUpsertArgs} args - Arguments to update or create a SupportHouse.
     * @example
     * // Update or create a SupportHouse
     * const supportHouse = await prisma.supportHouse.upsert({
     *   create: {
     *     // ... data to create a SupportHouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportHouse we want to update
     *   }
     * })
     */
    upsert<T extends SupportHouseUpsertArgs>(args: SelectSubset<T, SupportHouseUpsertArgs<ExtArgs>>): Prisma__SupportHouseClient<$Result.GetResult<Prisma.$SupportHousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupportHouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportHouseCountArgs} args - Arguments to filter SupportHouses to count.
     * @example
     * // Count the number of SupportHouses
     * const count = await prisma.supportHouse.count({
     *   where: {
     *     // ... the filter for the SupportHouses we want to count
     *   }
     * })
    **/
    count<T extends SupportHouseCountArgs>(
      args?: Subset<T, SupportHouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportHouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportHouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportHouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupportHouseAggregateArgs>(args: Subset<T, SupportHouseAggregateArgs>): Prisma.PrismaPromise<GetSupportHouseAggregateType<T>>

    /**
     * Group by SupportHouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportHouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupportHouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportHouseGroupByArgs['orderBy'] }
        : { orderBy?: SupportHouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupportHouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportHouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportHouse model
   */
  readonly fields: SupportHouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportHouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportHouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accommodations<T extends SupportHouse$accommodationsArgs<ExtArgs> = {}>(args?: Subset<T, SupportHouse$accommodationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employees<T extends SupportHouse$employeesArgs<ExtArgs> = {}>(args?: Subset<T, SupportHouse$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tripRoutes<T extends SupportHouse$tripRoutesArgs<ExtArgs> = {}>(args?: Subset<T, SupportHouse$tripRoutesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripRoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupportHouse model
   */
  interface SupportHouseFieldRefs {
    readonly id: FieldRef<"SupportHouse", 'String'>
    readonly name: FieldRef<"SupportHouse", 'String'>
    readonly address: FieldRef<"SupportHouse", 'String'>
    readonly phone: FieldRef<"SupportHouse", 'String'>
    readonly capacity: FieldRef<"SupportHouse", 'Int'>
    readonly createdAt: FieldRef<"SupportHouse", 'DateTime'>
    readonly updatedAt: FieldRef<"SupportHouse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupportHouse findUnique
   */
  export type SupportHouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportHouse
     */
    select?: SupportHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportHouse
     */
    omit?: SupportHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportHouseInclude<ExtArgs> | null
    /**
     * Filter, which SupportHouse to fetch.
     */
    where: SupportHouseWhereUniqueInput
  }

  /**
   * SupportHouse findUniqueOrThrow
   */
  export type SupportHouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportHouse
     */
    select?: SupportHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportHouse
     */
    omit?: SupportHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportHouseInclude<ExtArgs> | null
    /**
     * Filter, which SupportHouse to fetch.
     */
    where: SupportHouseWhereUniqueInput
  }

  /**
   * SupportHouse findFirst
   */
  export type SupportHouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportHouse
     */
    select?: SupportHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportHouse
     */
    omit?: SupportHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportHouseInclude<ExtArgs> | null
    /**
     * Filter, which SupportHouse to fetch.
     */
    where?: SupportHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportHouses to fetch.
     */
    orderBy?: SupportHouseOrderByWithRelationInput | SupportHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportHouses.
     */
    cursor?: SupportHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportHouses.
     */
    distinct?: SupportHouseScalarFieldEnum | SupportHouseScalarFieldEnum[]
  }

  /**
   * SupportHouse findFirstOrThrow
   */
  export type SupportHouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportHouse
     */
    select?: SupportHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportHouse
     */
    omit?: SupportHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportHouseInclude<ExtArgs> | null
    /**
     * Filter, which SupportHouse to fetch.
     */
    where?: SupportHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportHouses to fetch.
     */
    orderBy?: SupportHouseOrderByWithRelationInput | SupportHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportHouses.
     */
    cursor?: SupportHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportHouses.
     */
    distinct?: SupportHouseScalarFieldEnum | SupportHouseScalarFieldEnum[]
  }

  /**
   * SupportHouse findMany
   */
  export type SupportHouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportHouse
     */
    select?: SupportHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportHouse
     */
    omit?: SupportHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportHouseInclude<ExtArgs> | null
    /**
     * Filter, which SupportHouses to fetch.
     */
    where?: SupportHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportHouses to fetch.
     */
    orderBy?: SupportHouseOrderByWithRelationInput | SupportHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportHouses.
     */
    cursor?: SupportHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportHouses.
     */
    skip?: number
    distinct?: SupportHouseScalarFieldEnum | SupportHouseScalarFieldEnum[]
  }

  /**
   * SupportHouse create
   */
  export type SupportHouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportHouse
     */
    select?: SupportHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportHouse
     */
    omit?: SupportHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportHouseInclude<ExtArgs> | null
    /**
     * The data needed to create a SupportHouse.
     */
    data: XOR<SupportHouseCreateInput, SupportHouseUncheckedCreateInput>
  }

  /**
   * SupportHouse createMany
   */
  export type SupportHouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportHouses.
     */
    data: SupportHouseCreateManyInput | SupportHouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportHouse createManyAndReturn
   */
  export type SupportHouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportHouse
     */
    select?: SupportHouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportHouse
     */
    omit?: SupportHouseOmit<ExtArgs> | null
    /**
     * The data used to create many SupportHouses.
     */
    data: SupportHouseCreateManyInput | SupportHouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportHouse update
   */
  export type SupportHouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportHouse
     */
    select?: SupportHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportHouse
     */
    omit?: SupportHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportHouseInclude<ExtArgs> | null
    /**
     * The data needed to update a SupportHouse.
     */
    data: XOR<SupportHouseUpdateInput, SupportHouseUncheckedUpdateInput>
    /**
     * Choose, which SupportHouse to update.
     */
    where: SupportHouseWhereUniqueInput
  }

  /**
   * SupportHouse updateMany
   */
  export type SupportHouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportHouses.
     */
    data: XOR<SupportHouseUpdateManyMutationInput, SupportHouseUncheckedUpdateManyInput>
    /**
     * Filter which SupportHouses to update
     */
    where?: SupportHouseWhereInput
    /**
     * Limit how many SupportHouses to update.
     */
    limit?: number
  }

  /**
   * SupportHouse updateManyAndReturn
   */
  export type SupportHouseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportHouse
     */
    select?: SupportHouseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportHouse
     */
    omit?: SupportHouseOmit<ExtArgs> | null
    /**
     * The data used to update SupportHouses.
     */
    data: XOR<SupportHouseUpdateManyMutationInput, SupportHouseUncheckedUpdateManyInput>
    /**
     * Filter which SupportHouses to update
     */
    where?: SupportHouseWhereInput
    /**
     * Limit how many SupportHouses to update.
     */
    limit?: number
  }

  /**
   * SupportHouse upsert
   */
  export type SupportHouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportHouse
     */
    select?: SupportHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportHouse
     */
    omit?: SupportHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportHouseInclude<ExtArgs> | null
    /**
     * The filter to search for the SupportHouse to update in case it exists.
     */
    where: SupportHouseWhereUniqueInput
    /**
     * In case the SupportHouse found by the `where` argument doesn't exist, create a new SupportHouse with this data.
     */
    create: XOR<SupportHouseCreateInput, SupportHouseUncheckedCreateInput>
    /**
     * In case the SupportHouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportHouseUpdateInput, SupportHouseUncheckedUpdateInput>
  }

  /**
   * SupportHouse delete
   */
  export type SupportHouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportHouse
     */
    select?: SupportHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportHouse
     */
    omit?: SupportHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportHouseInclude<ExtArgs> | null
    /**
     * Filter which SupportHouse to delete.
     */
    where: SupportHouseWhereUniqueInput
  }

  /**
   * SupportHouse deleteMany
   */
  export type SupportHouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportHouses to delete
     */
    where?: SupportHouseWhereInput
    /**
     * Limit how many SupportHouses to delete.
     */
    limit?: number
  }

  /**
   * SupportHouse.accommodations
   */
  export type SupportHouse$accommodationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    where?: AccommodationWhereInput
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    cursor?: AccommodationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccommodationScalarFieldEnum | AccommodationScalarFieldEnum[]
  }

  /**
   * SupportHouse.employees
   */
  export type SupportHouse$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * SupportHouse.tripRoutes
   */
  export type SupportHouse$tripRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripRoute
     */
    select?: TripRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripRoute
     */
    omit?: TripRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripRouteInclude<ExtArgs> | null
    where?: TripRouteWhereInput
    orderBy?: TripRouteOrderByWithRelationInput | TripRouteOrderByWithRelationInput[]
    cursor?: TripRouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripRouteScalarFieldEnum | TripRouteScalarFieldEnum[]
  }

  /**
   * SupportHouse without action
   */
  export type SupportHouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportHouse
     */
    select?: SupportHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportHouse
     */
    omit?: SupportHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportHouseInclude<ExtArgs> | null
  }


  /**
   * Model Accommodation
   */

  export type AggregateAccommodation = {
    _count: AccommodationCountAggregateOutputType | null
    _min: AccommodationMinAggregateOutputType | null
    _max: AccommodationMaxAggregateOutputType | null
  }

  export type AccommodationMinAggregateOutputType = {
    id: string | null
    personId: string | null
    supportHouseId: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccommodationMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    supportHouseId: string | null
    checkInDate: Date | null
    checkOutDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccommodationCountAggregateOutputType = {
    id: number
    personId: number
    supportHouseId: number
    checkInDate: number
    checkOutDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccommodationMinAggregateInputType = {
    id?: true
    personId?: true
    supportHouseId?: true
    checkInDate?: true
    checkOutDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccommodationMaxAggregateInputType = {
    id?: true
    personId?: true
    supportHouseId?: true
    checkInDate?: true
    checkOutDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccommodationCountAggregateInputType = {
    id?: true
    personId?: true
    supportHouseId?: true
    checkInDate?: true
    checkOutDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccommodationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accommodation to aggregate.
     */
    where?: AccommodationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accommodations to fetch.
     */
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccommodationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accommodations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accommodations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accommodations
    **/
    _count?: true | AccommodationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccommodationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccommodationMaxAggregateInputType
  }

  export type GetAccommodationAggregateType<T extends AccommodationAggregateArgs> = {
        [P in keyof T & keyof AggregateAccommodation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccommodation[P]>
      : GetScalarType<T[P], AggregateAccommodation[P]>
  }




  export type AccommodationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccommodationWhereInput
    orderBy?: AccommodationOrderByWithAggregationInput | AccommodationOrderByWithAggregationInput[]
    by: AccommodationScalarFieldEnum[] | AccommodationScalarFieldEnum
    having?: AccommodationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccommodationCountAggregateInputType | true
    _min?: AccommodationMinAggregateInputType
    _max?: AccommodationMaxAggregateInputType
  }

  export type AccommodationGroupByOutputType = {
    id: string
    personId: string
    supportHouseId: string
    checkInDate: Date
    checkOutDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AccommodationCountAggregateOutputType | null
    _min: AccommodationMinAggregateOutputType | null
    _max: AccommodationMaxAggregateOutputType | null
  }

  type GetAccommodationGroupByPayload<T extends AccommodationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccommodationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccommodationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccommodationGroupByOutputType[P]>
            : GetScalarType<T[P], AccommodationGroupByOutputType[P]>
        }
      >
    >


  export type AccommodationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    supportHouseId?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    supportHouse?: boolean | SupportHouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accommodation"]>

  export type AccommodationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    supportHouseId?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    supportHouse?: boolean | SupportHouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accommodation"]>

  export type AccommodationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    supportHouseId?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    supportHouse?: boolean | SupportHouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accommodation"]>

  export type AccommodationSelectScalar = {
    id?: boolean
    personId?: boolean
    supportHouseId?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccommodationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "supportHouseId" | "checkInDate" | "checkOutDate" | "createdAt" | "updatedAt", ExtArgs["result"]["accommodation"]>
  export type AccommodationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    supportHouse?: boolean | SupportHouseDefaultArgs<ExtArgs>
  }
  export type AccommodationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    supportHouse?: boolean | SupportHouseDefaultArgs<ExtArgs>
  }
  export type AccommodationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    supportHouse?: boolean | SupportHouseDefaultArgs<ExtArgs>
  }

  export type $AccommodationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accommodation"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      supportHouse: Prisma.$SupportHousePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      supportHouseId: string
      checkInDate: Date
      checkOutDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accommodation"]>
    composites: {}
  }

  type AccommodationGetPayload<S extends boolean | null | undefined | AccommodationDefaultArgs> = $Result.GetResult<Prisma.$AccommodationPayload, S>

  type AccommodationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccommodationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccommodationCountAggregateInputType | true
    }

  export interface AccommodationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accommodation'], meta: { name: 'Accommodation' } }
    /**
     * Find zero or one Accommodation that matches the filter.
     * @param {AccommodationFindUniqueArgs} args - Arguments to find a Accommodation
     * @example
     * // Get one Accommodation
     * const accommodation = await prisma.accommodation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccommodationFindUniqueArgs>(args: SelectSubset<T, AccommodationFindUniqueArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accommodation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccommodationFindUniqueOrThrowArgs} args - Arguments to find a Accommodation
     * @example
     * // Get one Accommodation
     * const accommodation = await prisma.accommodation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccommodationFindUniqueOrThrowArgs>(args: SelectSubset<T, AccommodationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accommodation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationFindFirstArgs} args - Arguments to find a Accommodation
     * @example
     * // Get one Accommodation
     * const accommodation = await prisma.accommodation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccommodationFindFirstArgs>(args?: SelectSubset<T, AccommodationFindFirstArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accommodation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationFindFirstOrThrowArgs} args - Arguments to find a Accommodation
     * @example
     * // Get one Accommodation
     * const accommodation = await prisma.accommodation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccommodationFindFirstOrThrowArgs>(args?: SelectSubset<T, AccommodationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accommodations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accommodations
     * const accommodations = await prisma.accommodation.findMany()
     * 
     * // Get first 10 Accommodations
     * const accommodations = await prisma.accommodation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accommodationWithIdOnly = await prisma.accommodation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccommodationFindManyArgs>(args?: SelectSubset<T, AccommodationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accommodation.
     * @param {AccommodationCreateArgs} args - Arguments to create a Accommodation.
     * @example
     * // Create one Accommodation
     * const Accommodation = await prisma.accommodation.create({
     *   data: {
     *     // ... data to create a Accommodation
     *   }
     * })
     * 
     */
    create<T extends AccommodationCreateArgs>(args: SelectSubset<T, AccommodationCreateArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accommodations.
     * @param {AccommodationCreateManyArgs} args - Arguments to create many Accommodations.
     * @example
     * // Create many Accommodations
     * const accommodation = await prisma.accommodation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccommodationCreateManyArgs>(args?: SelectSubset<T, AccommodationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accommodations and returns the data saved in the database.
     * @param {AccommodationCreateManyAndReturnArgs} args - Arguments to create many Accommodations.
     * @example
     * // Create many Accommodations
     * const accommodation = await prisma.accommodation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accommodations and only return the `id`
     * const accommodationWithIdOnly = await prisma.accommodation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccommodationCreateManyAndReturnArgs>(args?: SelectSubset<T, AccommodationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accommodation.
     * @param {AccommodationDeleteArgs} args - Arguments to delete one Accommodation.
     * @example
     * // Delete one Accommodation
     * const Accommodation = await prisma.accommodation.delete({
     *   where: {
     *     // ... filter to delete one Accommodation
     *   }
     * })
     * 
     */
    delete<T extends AccommodationDeleteArgs>(args: SelectSubset<T, AccommodationDeleteArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accommodation.
     * @param {AccommodationUpdateArgs} args - Arguments to update one Accommodation.
     * @example
     * // Update one Accommodation
     * const accommodation = await prisma.accommodation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccommodationUpdateArgs>(args: SelectSubset<T, AccommodationUpdateArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accommodations.
     * @param {AccommodationDeleteManyArgs} args - Arguments to filter Accommodations to delete.
     * @example
     * // Delete a few Accommodations
     * const { count } = await prisma.accommodation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccommodationDeleteManyArgs>(args?: SelectSubset<T, AccommodationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accommodations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accommodations
     * const accommodation = await prisma.accommodation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccommodationUpdateManyArgs>(args: SelectSubset<T, AccommodationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accommodations and returns the data updated in the database.
     * @param {AccommodationUpdateManyAndReturnArgs} args - Arguments to update many Accommodations.
     * @example
     * // Update many Accommodations
     * const accommodation = await prisma.accommodation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accommodations and only return the `id`
     * const accommodationWithIdOnly = await prisma.accommodation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccommodationUpdateManyAndReturnArgs>(args: SelectSubset<T, AccommodationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accommodation.
     * @param {AccommodationUpsertArgs} args - Arguments to update or create a Accommodation.
     * @example
     * // Update or create a Accommodation
     * const accommodation = await prisma.accommodation.upsert({
     *   create: {
     *     // ... data to create a Accommodation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accommodation we want to update
     *   }
     * })
     */
    upsert<T extends AccommodationUpsertArgs>(args: SelectSubset<T, AccommodationUpsertArgs<ExtArgs>>): Prisma__AccommodationClient<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accommodations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationCountArgs} args - Arguments to filter Accommodations to count.
     * @example
     * // Count the number of Accommodations
     * const count = await prisma.accommodation.count({
     *   where: {
     *     // ... the filter for the Accommodations we want to count
     *   }
     * })
    **/
    count<T extends AccommodationCountArgs>(
      args?: Subset<T, AccommodationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccommodationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accommodation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccommodationAggregateArgs>(args: Subset<T, AccommodationAggregateArgs>): Prisma.PrismaPromise<GetAccommodationAggregateType<T>>

    /**
     * Group by Accommodation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccommodationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccommodationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccommodationGroupByArgs['orderBy'] }
        : { orderBy?: AccommodationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccommodationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccommodationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accommodation model
   */
  readonly fields: AccommodationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accommodation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccommodationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supportHouse<T extends SupportHouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupportHouseDefaultArgs<ExtArgs>>): Prisma__SupportHouseClient<$Result.GetResult<Prisma.$SupportHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Accommodation model
   */
  interface AccommodationFieldRefs {
    readonly id: FieldRef<"Accommodation", 'String'>
    readonly personId: FieldRef<"Accommodation", 'String'>
    readonly supportHouseId: FieldRef<"Accommodation", 'String'>
    readonly checkInDate: FieldRef<"Accommodation", 'DateTime'>
    readonly checkOutDate: FieldRef<"Accommodation", 'DateTime'>
    readonly createdAt: FieldRef<"Accommodation", 'DateTime'>
    readonly updatedAt: FieldRef<"Accommodation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Accommodation findUnique
   */
  export type AccommodationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodation to fetch.
     */
    where: AccommodationWhereUniqueInput
  }

  /**
   * Accommodation findUniqueOrThrow
   */
  export type AccommodationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodation to fetch.
     */
    where: AccommodationWhereUniqueInput
  }

  /**
   * Accommodation findFirst
   */
  export type AccommodationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodation to fetch.
     */
    where?: AccommodationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accommodations to fetch.
     */
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accommodations.
     */
    cursor?: AccommodationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accommodations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accommodations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accommodations.
     */
    distinct?: AccommodationScalarFieldEnum | AccommodationScalarFieldEnum[]
  }

  /**
   * Accommodation findFirstOrThrow
   */
  export type AccommodationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodation to fetch.
     */
    where?: AccommodationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accommodations to fetch.
     */
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accommodations.
     */
    cursor?: AccommodationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accommodations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accommodations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accommodations.
     */
    distinct?: AccommodationScalarFieldEnum | AccommodationScalarFieldEnum[]
  }

  /**
   * Accommodation findMany
   */
  export type AccommodationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter, which Accommodations to fetch.
     */
    where?: AccommodationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accommodations to fetch.
     */
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accommodations.
     */
    cursor?: AccommodationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accommodations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accommodations.
     */
    skip?: number
    distinct?: AccommodationScalarFieldEnum | AccommodationScalarFieldEnum[]
  }

  /**
   * Accommodation create
   */
  export type AccommodationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * The data needed to create a Accommodation.
     */
    data: XOR<AccommodationCreateInput, AccommodationUncheckedCreateInput>
  }

  /**
   * Accommodation createMany
   */
  export type AccommodationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accommodations.
     */
    data: AccommodationCreateManyInput | AccommodationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accommodation createManyAndReturn
   */
  export type AccommodationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * The data used to create many Accommodations.
     */
    data: AccommodationCreateManyInput | AccommodationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accommodation update
   */
  export type AccommodationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * The data needed to update a Accommodation.
     */
    data: XOR<AccommodationUpdateInput, AccommodationUncheckedUpdateInput>
    /**
     * Choose, which Accommodation to update.
     */
    where: AccommodationWhereUniqueInput
  }

  /**
   * Accommodation updateMany
   */
  export type AccommodationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accommodations.
     */
    data: XOR<AccommodationUpdateManyMutationInput, AccommodationUncheckedUpdateManyInput>
    /**
     * Filter which Accommodations to update
     */
    where?: AccommodationWhereInput
    /**
     * Limit how many Accommodations to update.
     */
    limit?: number
  }

  /**
   * Accommodation updateManyAndReturn
   */
  export type AccommodationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * The data used to update Accommodations.
     */
    data: XOR<AccommodationUpdateManyMutationInput, AccommodationUncheckedUpdateManyInput>
    /**
     * Filter which Accommodations to update
     */
    where?: AccommodationWhereInput
    /**
     * Limit how many Accommodations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accommodation upsert
   */
  export type AccommodationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * The filter to search for the Accommodation to update in case it exists.
     */
    where: AccommodationWhereUniqueInput
    /**
     * In case the Accommodation found by the `where` argument doesn't exist, create a new Accommodation with this data.
     */
    create: XOR<AccommodationCreateInput, AccommodationUncheckedCreateInput>
    /**
     * In case the Accommodation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccommodationUpdateInput, AccommodationUncheckedUpdateInput>
  }

  /**
   * Accommodation delete
   */
  export type AccommodationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    /**
     * Filter which Accommodation to delete.
     */
    where: AccommodationWhereUniqueInput
  }

  /**
   * Accommodation deleteMany
   */
  export type AccommodationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accommodations to delete
     */
    where?: AccommodationWhereInput
    /**
     * Limit how many Accommodations to delete.
     */
    limit?: number
  }

  /**
   * Accommodation without action
   */
  export type AccommodationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    size: number | null
  }

  export type DocumentSumAggregateOutputType = {
    size: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    personId: string | null
    name: string | null
    type: $Enums.DocumentType | null
    size: number | null
    path: string | null
    uploadDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    name: string | null
    type: $Enums.DocumentType | null
    size: number | null
    path: string | null
    uploadDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    personId: number
    name: number
    type: number
    size: number
    path: number
    uploadDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    size?: true
  }

  export type DocumentSumAggregateInputType = {
    size?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    personId?: true
    name?: true
    type?: true
    size?: true
    path?: true
    uploadDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    personId?: true
    name?: true
    type?: true
    size?: true
    path?: true
    uploadDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    personId?: true
    name?: true
    type?: true
    size?: true
    path?: true
    uploadDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    personId: string
    name: string
    type: $Enums.DocumentType
    size: number
    path: string
    uploadDate: Date
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    name?: boolean
    type?: boolean
    size?: boolean
    path?: boolean
    uploadDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    name?: boolean
    type?: boolean
    size?: boolean
    path?: boolean
    uploadDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    name?: boolean
    type?: boolean
    size?: boolean
    path?: boolean
    uploadDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    personId?: boolean
    name?: boolean
    type?: boolean
    size?: boolean
    path?: boolean
    uploadDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "name" | "type" | "size" | "path" | "uploadDate" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      name: string
      type: $Enums.DocumentType
      size: number
      path: string
      uploadDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly personId: FieldRef<"Document", 'String'>
    readonly name: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'DocumentType'>
    readonly size: FieldRef<"Document", 'Int'>
    readonly path: FieldRef<"Document", 'String'>
    readonly uploadDate: FieldRef<"Document", 'DateTime'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    personId: string | null
    email: string | null
    password: string | null
    registrationNumber: string | null
    type: $Enums.EmployeeType | null
    supportHouseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    email: string | null
    password: string | null
    registrationNumber: string | null
    type: $Enums.EmployeeType | null
    supportHouseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    personId: number
    email: number
    password: number
    registrationNumber: number
    type: number
    supportHouseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    personId?: true
    email?: true
    password?: true
    registrationNumber?: true
    type?: true
    supportHouseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    personId?: true
    email?: true
    password?: true
    registrationNumber?: true
    type?: true
    supportHouseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    personId?: true
    email?: true
    password?: true
    registrationNumber?: true
    type?: true
    supportHouseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    personId: string
    email: string
    password: string
    registrationNumber: string
    type: $Enums.EmployeeType
    supportHouseId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    email?: boolean
    password?: boolean
    registrationNumber?: boolean
    type?: boolean
    supportHouseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    supportHouse?: boolean | Employee$supportHouseArgs<ExtArgs>
    trips?: boolean | Employee$tripsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    email?: boolean
    password?: boolean
    registrationNumber?: boolean
    type?: boolean
    supportHouseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    supportHouse?: boolean | Employee$supportHouseArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    email?: boolean
    password?: boolean
    registrationNumber?: boolean
    type?: boolean
    supportHouseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
    supportHouse?: boolean | Employee$supportHouseArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    personId?: boolean
    email?: boolean
    password?: boolean
    registrationNumber?: boolean
    type?: boolean
    supportHouseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "email" | "password" | "registrationNumber" | "type" | "supportHouseId" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    supportHouse?: boolean | Employee$supportHouseArgs<ExtArgs>
    trips?: boolean | Employee$tripsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    supportHouse?: boolean | Employee$supportHouseArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
    supportHouse?: boolean | Employee$supportHouseArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
      supportHouse: Prisma.$SupportHousePayload<ExtArgs> | null
      trips: Prisma.$TripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      email: string
      password: string
      registrationNumber: string
      type: $Enums.EmployeeType
      supportHouseId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supportHouse<T extends Employee$supportHouseArgs<ExtArgs> = {}>(args?: Subset<T, Employee$supportHouseArgs<ExtArgs>>): Prisma__SupportHouseClient<$Result.GetResult<Prisma.$SupportHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trips<T extends Employee$tripsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly personId: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly password: FieldRef<"Employee", 'String'>
    readonly registrationNumber: FieldRef<"Employee", 'String'>
    readonly type: FieldRef<"Employee", 'EmployeeType'>
    readonly supportHouseId: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.supportHouse
   */
  export type Employee$supportHouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportHouse
     */
    select?: SupportHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportHouse
     */
    omit?: SupportHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportHouseInclude<ExtArgs> | null
    where?: SupportHouseWhereInput
  }

  /**
   * Employee.trips
   */
  export type Employee$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    cpf: string | null
    name: string | null
    birthDate: Date | null
    rg: string | null
    type: $Enums.PersonType | null
    medicalNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    cpf: string | null
    name: string | null
    birthDate: Date | null
    rg: string | null
    type: $Enums.PersonType | null
    medicalNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    cpf: number
    name: number
    birthDate: number
    rg: number
    type: number
    medicalNotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonMinAggregateInputType = {
    id?: true
    cpf?: true
    name?: true
    birthDate?: true
    rg?: true
    type?: true
    medicalNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    cpf?: true
    name?: true
    birthDate?: true
    rg?: true
    type?: true
    medicalNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    cpf?: true
    name?: true
    birthDate?: true
    rg?: true
    type?: true
    medicalNotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: string
    cpf: string
    name: string
    birthDate: Date
    rg: string | null
    type: $Enums.PersonType
    medicalNotes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PersonCountAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    name?: boolean
    birthDate?: boolean
    rg?: boolean
    type?: boolean
    medicalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phones?: boolean | Person$phonesArgs<ExtArgs>
    address?: boolean | Person$addressArgs<ExtArgs>
    employee?: boolean | Person$employeeArgs<ExtArgs>
    documents?: boolean | Person$documentsArgs<ExtArgs>
    accommodations?: boolean | Person$accommodationsArgs<ExtArgs>
    tripPassengers?: boolean | Person$tripPassengersArgs<ExtArgs>
    companionGuardianships?: boolean | Person$companionGuardianshipsArgs<ExtArgs>
    patientGuardianships?: boolean | Person$patientGuardianshipsArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    name?: boolean
    birthDate?: boolean
    rg?: boolean
    type?: boolean
    medicalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf?: boolean
    name?: boolean
    birthDate?: boolean
    rg?: boolean
    type?: boolean
    medicalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    cpf?: boolean
    name?: boolean
    birthDate?: boolean
    rg?: boolean
    type?: boolean
    medicalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cpf" | "name" | "birthDate" | "rg" | "type" | "medicalNotes" | "createdAt" | "updatedAt", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phones?: boolean | Person$phonesArgs<ExtArgs>
    address?: boolean | Person$addressArgs<ExtArgs>
    employee?: boolean | Person$employeeArgs<ExtArgs>
    documents?: boolean | Person$documentsArgs<ExtArgs>
    accommodations?: boolean | Person$accommodationsArgs<ExtArgs>
    tripPassengers?: boolean | Person$tripPassengersArgs<ExtArgs>
    companionGuardianships?: boolean | Person$companionGuardianshipsArgs<ExtArgs>
    patientGuardianships?: boolean | Person$patientGuardianshipsArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      phones: Prisma.$PhonePayload<ExtArgs>[]
      address: Prisma.$AddressPayload<ExtArgs> | null
      employee: Prisma.$EmployeePayload<ExtArgs> | null
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      accommodations: Prisma.$AccommodationPayload<ExtArgs>[]
      tripPassengers: Prisma.$TripPassengerPayload<ExtArgs>[]
      companionGuardianships: Prisma.$PatientGuardianPayload<ExtArgs>[]
      patientGuardianships: Prisma.$PatientGuardianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cpf: string
      name: string
      birthDate: Date
      rg: string | null
      type: $Enums.PersonType
      medicalNotes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phones<T extends Person$phonesArgs<ExtArgs> = {}>(args?: Subset<T, Person$phonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    address<T extends Person$addressArgs<ExtArgs> = {}>(args?: Subset<T, Person$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employee<T extends Person$employeeArgs<ExtArgs> = {}>(args?: Subset<T, Person$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    documents<T extends Person$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Person$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accommodations<T extends Person$accommodationsArgs<ExtArgs> = {}>(args?: Subset<T, Person$accommodationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccommodationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tripPassengers<T extends Person$tripPassengersArgs<ExtArgs> = {}>(args?: Subset<T, Person$tripPassengersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPassengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companionGuardianships<T extends Person$companionGuardianshipsArgs<ExtArgs> = {}>(args?: Subset<T, Person$companionGuardianshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientGuardianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patientGuardianships<T extends Person$patientGuardianshipsArgs<ExtArgs> = {}>(args?: Subset<T, Person$patientGuardianshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientGuardianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'String'>
    readonly cpf: FieldRef<"Person", 'String'>
    readonly name: FieldRef<"Person", 'String'>
    readonly birthDate: FieldRef<"Person", 'DateTime'>
    readonly rg: FieldRef<"Person", 'String'>
    readonly type: FieldRef<"Person", 'PersonType'>
    readonly medicalNotes: FieldRef<"Person", 'String'>
    readonly createdAt: FieldRef<"Person", 'DateTime'>
    readonly updatedAt: FieldRef<"Person", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person.phones
   */
  export type Person$phonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    where?: PhoneWhereInput
    orderBy?: PhoneOrderByWithRelationInput | PhoneOrderByWithRelationInput[]
    cursor?: PhoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhoneScalarFieldEnum | PhoneScalarFieldEnum[]
  }

  /**
   * Person.address
   */
  export type Person$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Person.employee
   */
  export type Person$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Person.documents
   */
  export type Person$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Person.accommodations
   */
  export type Person$accommodationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accommodation
     */
    select?: AccommodationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accommodation
     */
    omit?: AccommodationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccommodationInclude<ExtArgs> | null
    where?: AccommodationWhereInput
    orderBy?: AccommodationOrderByWithRelationInput | AccommodationOrderByWithRelationInput[]
    cursor?: AccommodationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccommodationScalarFieldEnum | AccommodationScalarFieldEnum[]
  }

  /**
   * Person.tripPassengers
   */
  export type Person$tripPassengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPassenger
     */
    select?: TripPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPassenger
     */
    omit?: TripPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPassengerInclude<ExtArgs> | null
    where?: TripPassengerWhereInput
    orderBy?: TripPassengerOrderByWithRelationInput | TripPassengerOrderByWithRelationInput[]
    cursor?: TripPassengerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripPassengerScalarFieldEnum | TripPassengerScalarFieldEnum[]
  }

  /**
   * Person.companionGuardianships
   */
  export type Person$companionGuardianshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianInclude<ExtArgs> | null
    where?: PatientGuardianWhereInput
    orderBy?: PatientGuardianOrderByWithRelationInput | PatientGuardianOrderByWithRelationInput[]
    cursor?: PatientGuardianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientGuardianScalarFieldEnum | PatientGuardianScalarFieldEnum[]
  }

  /**
   * Person.patientGuardianships
   */
  export type Person$patientGuardianshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianInclude<ExtArgs> | null
    where?: PatientGuardianWhereInput
    orderBy?: PatientGuardianOrderByWithRelationInput | PatientGuardianOrderByWithRelationInput[]
    cursor?: PatientGuardianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientGuardianScalarFieldEnum | PatientGuardianScalarFieldEnum[]
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model Phone
   */

  export type AggregatePhone = {
    _count: PhoneCountAggregateOutputType | null
    _min: PhoneMinAggregateOutputType | null
    _max: PhoneMaxAggregateOutputType | null
  }

  export type PhoneMinAggregateOutputType = {
    id: string | null
    personId: string | null
    number: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    number: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneCountAggregateOutputType = {
    id: number
    personId: number
    number: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhoneMinAggregateInputType = {
    id?: true
    personId?: true
    number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneMaxAggregateInputType = {
    id?: true
    personId?: true
    number?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneCountAggregateInputType = {
    id?: true
    personId?: true
    number?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phone to aggregate.
     */
    where?: PhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phones to fetch.
     */
    orderBy?: PhoneOrderByWithRelationInput | PhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Phones
    **/
    _count?: true | PhoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneMaxAggregateInputType
  }

  export type GetPhoneAggregateType<T extends PhoneAggregateArgs> = {
        [P in keyof T & keyof AggregatePhone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhone[P]>
      : GetScalarType<T[P], AggregatePhone[P]>
  }




  export type PhoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneWhereInput
    orderBy?: PhoneOrderByWithAggregationInput | PhoneOrderByWithAggregationInput[]
    by: PhoneScalarFieldEnum[] | PhoneScalarFieldEnum
    having?: PhoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneCountAggregateInputType | true
    _min?: PhoneMinAggregateInputType
    _max?: PhoneMaxAggregateInputType
  }

  export type PhoneGroupByOutputType = {
    id: string
    personId: string
    number: string
    createdAt: Date
    updatedAt: Date
    _count: PhoneCountAggregateOutputType | null
    _min: PhoneMinAggregateOutputType | null
    _max: PhoneMaxAggregateOutputType | null
  }

  type GetPhoneGroupByPayload<T extends PhoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneGroupByOutputType[P]>
        }
      >
    >


  export type PhoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phone"]>

  export type PhoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phone"]>

  export type PhoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phone"]>

  export type PhoneSelectScalar = {
    id?: boolean
    personId?: boolean
    number?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "number" | "createdAt" | "updatedAt", ExtArgs["result"]["phone"]>
  export type PhoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type PhoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type PhoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $PhonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Phone"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      number: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["phone"]>
    composites: {}
  }

  type PhoneGetPayload<S extends boolean | null | undefined | PhoneDefaultArgs> = $Result.GetResult<Prisma.$PhonePayload, S>

  type PhoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhoneCountAggregateInputType | true
    }

  export interface PhoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Phone'], meta: { name: 'Phone' } }
    /**
     * Find zero or one Phone that matches the filter.
     * @param {PhoneFindUniqueArgs} args - Arguments to find a Phone
     * @example
     * // Get one Phone
     * const phone = await prisma.phone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneFindUniqueArgs>(args: SelectSubset<T, PhoneFindUniqueArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Phone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhoneFindUniqueOrThrowArgs} args - Arguments to find a Phone
     * @example
     * // Get one Phone
     * const phone = await prisma.phone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneFindFirstArgs} args - Arguments to find a Phone
     * @example
     * // Get one Phone
     * const phone = await prisma.phone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneFindFirstArgs>(args?: SelectSubset<T, PhoneFindFirstArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneFindFirstOrThrowArgs} args - Arguments to find a Phone
     * @example
     * // Get one Phone
     * const phone = await prisma.phone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Phones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phones
     * const phones = await prisma.phone.findMany()
     * 
     * // Get first 10 Phones
     * const phones = await prisma.phone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneWithIdOnly = await prisma.phone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneFindManyArgs>(args?: SelectSubset<T, PhoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Phone.
     * @param {PhoneCreateArgs} args - Arguments to create a Phone.
     * @example
     * // Create one Phone
     * const Phone = await prisma.phone.create({
     *   data: {
     *     // ... data to create a Phone
     *   }
     * })
     * 
     */
    create<T extends PhoneCreateArgs>(args: SelectSubset<T, PhoneCreateArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Phones.
     * @param {PhoneCreateManyArgs} args - Arguments to create many Phones.
     * @example
     * // Create many Phones
     * const phone = await prisma.phone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneCreateManyArgs>(args?: SelectSubset<T, PhoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Phones and returns the data saved in the database.
     * @param {PhoneCreateManyAndReturnArgs} args - Arguments to create many Phones.
     * @example
     * // Create many Phones
     * const phone = await prisma.phone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Phones and only return the `id`
     * const phoneWithIdOnly = await prisma.phone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Phone.
     * @param {PhoneDeleteArgs} args - Arguments to delete one Phone.
     * @example
     * // Delete one Phone
     * const Phone = await prisma.phone.delete({
     *   where: {
     *     // ... filter to delete one Phone
     *   }
     * })
     * 
     */
    delete<T extends PhoneDeleteArgs>(args: SelectSubset<T, PhoneDeleteArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Phone.
     * @param {PhoneUpdateArgs} args - Arguments to update one Phone.
     * @example
     * // Update one Phone
     * const phone = await prisma.phone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneUpdateArgs>(args: SelectSubset<T, PhoneUpdateArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Phones.
     * @param {PhoneDeleteManyArgs} args - Arguments to filter Phones to delete.
     * @example
     * // Delete a few Phones
     * const { count } = await prisma.phone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneDeleteManyArgs>(args?: SelectSubset<T, PhoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phones
     * const phone = await prisma.phone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneUpdateManyArgs>(args: SelectSubset<T, PhoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phones and returns the data updated in the database.
     * @param {PhoneUpdateManyAndReturnArgs} args - Arguments to update many Phones.
     * @example
     * // Update many Phones
     * const phone = await prisma.phone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Phones and only return the `id`
     * const phoneWithIdOnly = await prisma.phone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhoneUpdateManyAndReturnArgs>(args: SelectSubset<T, PhoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Phone.
     * @param {PhoneUpsertArgs} args - Arguments to update or create a Phone.
     * @example
     * // Update or create a Phone
     * const phone = await prisma.phone.upsert({
     *   create: {
     *     // ... data to create a Phone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phone we want to update
     *   }
     * })
     */
    upsert<T extends PhoneUpsertArgs>(args: SelectSubset<T, PhoneUpsertArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Phones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneCountArgs} args - Arguments to filter Phones to count.
     * @example
     * // Count the number of Phones
     * const count = await prisma.phone.count({
     *   where: {
     *     // ... the filter for the Phones we want to count
     *   }
     * })
    **/
    count<T extends PhoneCountArgs>(
      args?: Subset<T, PhoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhoneAggregateArgs>(args: Subset<T, PhoneAggregateArgs>): Prisma.PrismaPromise<GetPhoneAggregateType<T>>

    /**
     * Group by Phone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneGroupByArgs['orderBy'] }
        : { orderBy?: PhoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Phone model
   */
  readonly fields: PhoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Phone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Phone model
   */
  interface PhoneFieldRefs {
    readonly id: FieldRef<"Phone", 'String'>
    readonly personId: FieldRef<"Phone", 'String'>
    readonly number: FieldRef<"Phone", 'String'>
    readonly createdAt: FieldRef<"Phone", 'DateTime'>
    readonly updatedAt: FieldRef<"Phone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Phone findUnique
   */
  export type PhoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * Filter, which Phone to fetch.
     */
    where: PhoneWhereUniqueInput
  }

  /**
   * Phone findUniqueOrThrow
   */
  export type PhoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * Filter, which Phone to fetch.
     */
    where: PhoneWhereUniqueInput
  }

  /**
   * Phone findFirst
   */
  export type PhoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * Filter, which Phone to fetch.
     */
    where?: PhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phones to fetch.
     */
    orderBy?: PhoneOrderByWithRelationInput | PhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phones.
     */
    cursor?: PhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phones.
     */
    distinct?: PhoneScalarFieldEnum | PhoneScalarFieldEnum[]
  }

  /**
   * Phone findFirstOrThrow
   */
  export type PhoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * Filter, which Phone to fetch.
     */
    where?: PhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phones to fetch.
     */
    orderBy?: PhoneOrderByWithRelationInput | PhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phones.
     */
    cursor?: PhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phones.
     */
    distinct?: PhoneScalarFieldEnum | PhoneScalarFieldEnum[]
  }

  /**
   * Phone findMany
   */
  export type PhoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * Filter, which Phones to fetch.
     */
    where?: PhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phones to fetch.
     */
    orderBy?: PhoneOrderByWithRelationInput | PhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Phones.
     */
    cursor?: PhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phones.
     */
    skip?: number
    distinct?: PhoneScalarFieldEnum | PhoneScalarFieldEnum[]
  }

  /**
   * Phone create
   */
  export type PhoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Phone.
     */
    data: XOR<PhoneCreateInput, PhoneUncheckedCreateInput>
  }

  /**
   * Phone createMany
   */
  export type PhoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Phones.
     */
    data: PhoneCreateManyInput | PhoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Phone createManyAndReturn
   */
  export type PhoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * The data used to create many Phones.
     */
    data: PhoneCreateManyInput | PhoneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Phone update
   */
  export type PhoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Phone.
     */
    data: XOR<PhoneUpdateInput, PhoneUncheckedUpdateInput>
    /**
     * Choose, which Phone to update.
     */
    where: PhoneWhereUniqueInput
  }

  /**
   * Phone updateMany
   */
  export type PhoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Phones.
     */
    data: XOR<PhoneUpdateManyMutationInput, PhoneUncheckedUpdateManyInput>
    /**
     * Filter which Phones to update
     */
    where?: PhoneWhereInput
    /**
     * Limit how many Phones to update.
     */
    limit?: number
  }

  /**
   * Phone updateManyAndReturn
   */
  export type PhoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * The data used to update Phones.
     */
    data: XOR<PhoneUpdateManyMutationInput, PhoneUncheckedUpdateManyInput>
    /**
     * Filter which Phones to update
     */
    where?: PhoneWhereInput
    /**
     * Limit how many Phones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Phone upsert
   */
  export type PhoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Phone to update in case it exists.
     */
    where: PhoneWhereUniqueInput
    /**
     * In case the Phone found by the `where` argument doesn't exist, create a new Phone with this data.
     */
    create: XOR<PhoneCreateInput, PhoneUncheckedCreateInput>
    /**
     * In case the Phone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneUpdateInput, PhoneUncheckedUpdateInput>
  }

  /**
   * Phone delete
   */
  export type PhoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * Filter which Phone to delete.
     */
    where: PhoneWhereUniqueInput
  }

  /**
   * Phone deleteMany
   */
  export type PhoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phones to delete
     */
    where?: PhoneWhereInput
    /**
     * Limit how many Phones to delete.
     */
    limit?: number
  }

  /**
   * Phone without action
   */
  export type PhoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    personId: string | null
    street: string | null
    number: string | null
    neighborhood: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    personId: string | null
    street: string | null
    number: string | null
    neighborhood: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    personId: number
    street: number
    number: number
    neighborhood: number
    city: number
    state: number
    zipCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    personId?: true
    street?: true
    number?: true
    neighborhood?: true
    city?: true
    state?: true
    zipCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    personId?: true
    street?: true
    number?: true
    neighborhood?: true
    city?: true
    state?: true
    zipCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    personId?: true
    street?: true
    number?: true
    neighborhood?: true
    city?: true
    state?: true
    zipCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    personId: string
    street: string
    number: string | null
    neighborhood: string | null
    city: string
    state: string
    zipCode: string | null
    createdAt: Date
    updatedAt: Date
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    street?: boolean
    number?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    street?: boolean
    number?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personId?: boolean
    street?: boolean
    number?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    personId?: boolean
    street?: boolean
    number?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personId" | "street" | "number" | "neighborhood" | "city" | "state" | "zipCode" | "createdAt" | "updatedAt", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personId: string
      street: string
      number: string | null
      neighborhood: string | null
      city: string
      state: string
      zipCode: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly personId: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly number: FieldRef<"Address", 'String'>
    readonly neighborhood: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly zipCode: FieldRef<"Address", 'String'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model PatientGuardian
   */

  export type AggregatePatientGuardian = {
    _count: PatientGuardianCountAggregateOutputType | null
    _min: PatientGuardianMinAggregateOutputType | null
    _max: PatientGuardianMaxAggregateOutputType | null
  }

  export type PatientGuardianMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    companionId: string | null
    patientId: string | null
    relationship: $Enums.Relationship | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientGuardianMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    companionId: string | null
    patientId: string | null
    relationship: $Enums.Relationship | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientGuardianCountAggregateOutputType = {
    id: number
    tripId: number
    companionId: number
    patientId: number
    relationship: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientGuardianMinAggregateInputType = {
    id?: true
    tripId?: true
    companionId?: true
    patientId?: true
    relationship?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientGuardianMaxAggregateInputType = {
    id?: true
    tripId?: true
    companionId?: true
    patientId?: true
    relationship?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientGuardianCountAggregateInputType = {
    id?: true
    tripId?: true
    companionId?: true
    patientId?: true
    relationship?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientGuardianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientGuardian to aggregate.
     */
    where?: PatientGuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientGuardians to fetch.
     */
    orderBy?: PatientGuardianOrderByWithRelationInput | PatientGuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientGuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientGuardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientGuardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientGuardians
    **/
    _count?: true | PatientGuardianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientGuardianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientGuardianMaxAggregateInputType
  }

  export type GetPatientGuardianAggregateType<T extends PatientGuardianAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientGuardian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientGuardian[P]>
      : GetScalarType<T[P], AggregatePatientGuardian[P]>
  }




  export type PatientGuardianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientGuardianWhereInput
    orderBy?: PatientGuardianOrderByWithAggregationInput | PatientGuardianOrderByWithAggregationInput[]
    by: PatientGuardianScalarFieldEnum[] | PatientGuardianScalarFieldEnum
    having?: PatientGuardianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientGuardianCountAggregateInputType | true
    _min?: PatientGuardianMinAggregateInputType
    _max?: PatientGuardianMaxAggregateInputType
  }

  export type PatientGuardianGroupByOutputType = {
    id: string
    tripId: string
    companionId: string
    patientId: string
    relationship: $Enums.Relationship
    createdAt: Date
    updatedAt: Date
    _count: PatientGuardianCountAggregateOutputType | null
    _min: PatientGuardianMinAggregateOutputType | null
    _max: PatientGuardianMaxAggregateOutputType | null
  }

  type GetPatientGuardianGroupByPayload<T extends PatientGuardianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGuardianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGuardianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGuardianGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGuardianGroupByOutputType[P]>
        }
      >
    >


  export type PatientGuardianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    companionId?: boolean
    patientId?: boolean
    relationship?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    companion?: boolean | PersonDefaultArgs<ExtArgs>
    patient?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientGuardian"]>

  export type PatientGuardianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    companionId?: boolean
    patientId?: boolean
    relationship?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    companion?: boolean | PersonDefaultArgs<ExtArgs>
    patient?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientGuardian"]>

  export type PatientGuardianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    companionId?: boolean
    patientId?: boolean
    relationship?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    companion?: boolean | PersonDefaultArgs<ExtArgs>
    patient?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientGuardian"]>

  export type PatientGuardianSelectScalar = {
    id?: boolean
    tripId?: boolean
    companionId?: boolean
    patientId?: boolean
    relationship?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientGuardianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "companionId" | "patientId" | "relationship" | "createdAt" | "updatedAt", ExtArgs["result"]["patientGuardian"]>
  export type PatientGuardianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    companion?: boolean | PersonDefaultArgs<ExtArgs>
    patient?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type PatientGuardianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    companion?: boolean | PersonDefaultArgs<ExtArgs>
    patient?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type PatientGuardianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    companion?: boolean | PersonDefaultArgs<ExtArgs>
    patient?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $PatientGuardianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientGuardian"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      companion: Prisma.$PersonPayload<ExtArgs>
      patient: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      companionId: string
      patientId: string
      relationship: $Enums.Relationship
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patientGuardian"]>
    composites: {}
  }

  type PatientGuardianGetPayload<S extends boolean | null | undefined | PatientGuardianDefaultArgs> = $Result.GetResult<Prisma.$PatientGuardianPayload, S>

  type PatientGuardianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientGuardianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientGuardianCountAggregateInputType | true
    }

  export interface PatientGuardianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientGuardian'], meta: { name: 'PatientGuardian' } }
    /**
     * Find zero or one PatientGuardian that matches the filter.
     * @param {PatientGuardianFindUniqueArgs} args - Arguments to find a PatientGuardian
     * @example
     * // Get one PatientGuardian
     * const patientGuardian = await prisma.patientGuardian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientGuardianFindUniqueArgs>(args: SelectSubset<T, PatientGuardianFindUniqueArgs<ExtArgs>>): Prisma__PatientGuardianClient<$Result.GetResult<Prisma.$PatientGuardianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientGuardian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientGuardianFindUniqueOrThrowArgs} args - Arguments to find a PatientGuardian
     * @example
     * // Get one PatientGuardian
     * const patientGuardian = await prisma.patientGuardian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientGuardianFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientGuardianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientGuardianClient<$Result.GetResult<Prisma.$PatientGuardianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientGuardian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGuardianFindFirstArgs} args - Arguments to find a PatientGuardian
     * @example
     * // Get one PatientGuardian
     * const patientGuardian = await prisma.patientGuardian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientGuardianFindFirstArgs>(args?: SelectSubset<T, PatientGuardianFindFirstArgs<ExtArgs>>): Prisma__PatientGuardianClient<$Result.GetResult<Prisma.$PatientGuardianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientGuardian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGuardianFindFirstOrThrowArgs} args - Arguments to find a PatientGuardian
     * @example
     * // Get one PatientGuardian
     * const patientGuardian = await prisma.patientGuardian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientGuardianFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientGuardianFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientGuardianClient<$Result.GetResult<Prisma.$PatientGuardianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientGuardians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGuardianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientGuardians
     * const patientGuardians = await prisma.patientGuardian.findMany()
     * 
     * // Get first 10 PatientGuardians
     * const patientGuardians = await prisma.patientGuardian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientGuardianWithIdOnly = await prisma.patientGuardian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientGuardianFindManyArgs>(args?: SelectSubset<T, PatientGuardianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientGuardianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientGuardian.
     * @param {PatientGuardianCreateArgs} args - Arguments to create a PatientGuardian.
     * @example
     * // Create one PatientGuardian
     * const PatientGuardian = await prisma.patientGuardian.create({
     *   data: {
     *     // ... data to create a PatientGuardian
     *   }
     * })
     * 
     */
    create<T extends PatientGuardianCreateArgs>(args: SelectSubset<T, PatientGuardianCreateArgs<ExtArgs>>): Prisma__PatientGuardianClient<$Result.GetResult<Prisma.$PatientGuardianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientGuardians.
     * @param {PatientGuardianCreateManyArgs} args - Arguments to create many PatientGuardians.
     * @example
     * // Create many PatientGuardians
     * const patientGuardian = await prisma.patientGuardian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientGuardianCreateManyArgs>(args?: SelectSubset<T, PatientGuardianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientGuardians and returns the data saved in the database.
     * @param {PatientGuardianCreateManyAndReturnArgs} args - Arguments to create many PatientGuardians.
     * @example
     * // Create many PatientGuardians
     * const patientGuardian = await prisma.patientGuardian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientGuardians and only return the `id`
     * const patientGuardianWithIdOnly = await prisma.patientGuardian.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientGuardianCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientGuardianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientGuardianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatientGuardian.
     * @param {PatientGuardianDeleteArgs} args - Arguments to delete one PatientGuardian.
     * @example
     * // Delete one PatientGuardian
     * const PatientGuardian = await prisma.patientGuardian.delete({
     *   where: {
     *     // ... filter to delete one PatientGuardian
     *   }
     * })
     * 
     */
    delete<T extends PatientGuardianDeleteArgs>(args: SelectSubset<T, PatientGuardianDeleteArgs<ExtArgs>>): Prisma__PatientGuardianClient<$Result.GetResult<Prisma.$PatientGuardianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientGuardian.
     * @param {PatientGuardianUpdateArgs} args - Arguments to update one PatientGuardian.
     * @example
     * // Update one PatientGuardian
     * const patientGuardian = await prisma.patientGuardian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientGuardianUpdateArgs>(args: SelectSubset<T, PatientGuardianUpdateArgs<ExtArgs>>): Prisma__PatientGuardianClient<$Result.GetResult<Prisma.$PatientGuardianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientGuardians.
     * @param {PatientGuardianDeleteManyArgs} args - Arguments to filter PatientGuardians to delete.
     * @example
     * // Delete a few PatientGuardians
     * const { count } = await prisma.patientGuardian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientGuardianDeleteManyArgs>(args?: SelectSubset<T, PatientGuardianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientGuardians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGuardianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientGuardians
     * const patientGuardian = await prisma.patientGuardian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientGuardianUpdateManyArgs>(args: SelectSubset<T, PatientGuardianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientGuardians and returns the data updated in the database.
     * @param {PatientGuardianUpdateManyAndReturnArgs} args - Arguments to update many PatientGuardians.
     * @example
     * // Update many PatientGuardians
     * const patientGuardian = await prisma.patientGuardian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatientGuardians and only return the `id`
     * const patientGuardianWithIdOnly = await prisma.patientGuardian.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientGuardianUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientGuardianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientGuardianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatientGuardian.
     * @param {PatientGuardianUpsertArgs} args - Arguments to update or create a PatientGuardian.
     * @example
     * // Update or create a PatientGuardian
     * const patientGuardian = await prisma.patientGuardian.upsert({
     *   create: {
     *     // ... data to create a PatientGuardian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientGuardian we want to update
     *   }
     * })
     */
    upsert<T extends PatientGuardianUpsertArgs>(args: SelectSubset<T, PatientGuardianUpsertArgs<ExtArgs>>): Prisma__PatientGuardianClient<$Result.GetResult<Prisma.$PatientGuardianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientGuardians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGuardianCountArgs} args - Arguments to filter PatientGuardians to count.
     * @example
     * // Count the number of PatientGuardians
     * const count = await prisma.patientGuardian.count({
     *   where: {
     *     // ... the filter for the PatientGuardians we want to count
     *   }
     * })
    **/
    count<T extends PatientGuardianCountArgs>(
      args?: Subset<T, PatientGuardianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientGuardianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientGuardian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGuardianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientGuardianAggregateArgs>(args: Subset<T, PatientGuardianAggregateArgs>): Prisma.PrismaPromise<GetPatientGuardianAggregateType<T>>

    /**
     * Group by PatientGuardian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGuardianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGuardianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGuardianGroupByArgs['orderBy'] }
        : { orderBy?: PatientGuardianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGuardianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGuardianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientGuardian model
   */
  readonly fields: PatientGuardianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientGuardian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientGuardianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    companion<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatientGuardian model
   */
  interface PatientGuardianFieldRefs {
    readonly id: FieldRef<"PatientGuardian", 'String'>
    readonly tripId: FieldRef<"PatientGuardian", 'String'>
    readonly companionId: FieldRef<"PatientGuardian", 'String'>
    readonly patientId: FieldRef<"PatientGuardian", 'String'>
    readonly relationship: FieldRef<"PatientGuardian", 'Relationship'>
    readonly createdAt: FieldRef<"PatientGuardian", 'DateTime'>
    readonly updatedAt: FieldRef<"PatientGuardian", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatientGuardian findUnique
   */
  export type PatientGuardianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianInclude<ExtArgs> | null
    /**
     * Filter, which PatientGuardian to fetch.
     */
    where: PatientGuardianWhereUniqueInput
  }

  /**
   * PatientGuardian findUniqueOrThrow
   */
  export type PatientGuardianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianInclude<ExtArgs> | null
    /**
     * Filter, which PatientGuardian to fetch.
     */
    where: PatientGuardianWhereUniqueInput
  }

  /**
   * PatientGuardian findFirst
   */
  export type PatientGuardianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianInclude<ExtArgs> | null
    /**
     * Filter, which PatientGuardian to fetch.
     */
    where?: PatientGuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientGuardians to fetch.
     */
    orderBy?: PatientGuardianOrderByWithRelationInput | PatientGuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientGuardians.
     */
    cursor?: PatientGuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientGuardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientGuardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientGuardians.
     */
    distinct?: PatientGuardianScalarFieldEnum | PatientGuardianScalarFieldEnum[]
  }

  /**
   * PatientGuardian findFirstOrThrow
   */
  export type PatientGuardianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianInclude<ExtArgs> | null
    /**
     * Filter, which PatientGuardian to fetch.
     */
    where?: PatientGuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientGuardians to fetch.
     */
    orderBy?: PatientGuardianOrderByWithRelationInput | PatientGuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientGuardians.
     */
    cursor?: PatientGuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientGuardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientGuardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientGuardians.
     */
    distinct?: PatientGuardianScalarFieldEnum | PatientGuardianScalarFieldEnum[]
  }

  /**
   * PatientGuardian findMany
   */
  export type PatientGuardianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianInclude<ExtArgs> | null
    /**
     * Filter, which PatientGuardians to fetch.
     */
    where?: PatientGuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientGuardians to fetch.
     */
    orderBy?: PatientGuardianOrderByWithRelationInput | PatientGuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientGuardians.
     */
    cursor?: PatientGuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientGuardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientGuardians.
     */
    skip?: number
    distinct?: PatientGuardianScalarFieldEnum | PatientGuardianScalarFieldEnum[]
  }

  /**
   * PatientGuardian create
   */
  export type PatientGuardianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientGuardian.
     */
    data: XOR<PatientGuardianCreateInput, PatientGuardianUncheckedCreateInput>
  }

  /**
   * PatientGuardian createMany
   */
  export type PatientGuardianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientGuardians.
     */
    data: PatientGuardianCreateManyInput | PatientGuardianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientGuardian createManyAndReturn
   */
  export type PatientGuardianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * The data used to create many PatientGuardians.
     */
    data: PatientGuardianCreateManyInput | PatientGuardianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientGuardian update
   */
  export type PatientGuardianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientGuardian.
     */
    data: XOR<PatientGuardianUpdateInput, PatientGuardianUncheckedUpdateInput>
    /**
     * Choose, which PatientGuardian to update.
     */
    where: PatientGuardianWhereUniqueInput
  }

  /**
   * PatientGuardian updateMany
   */
  export type PatientGuardianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientGuardians.
     */
    data: XOR<PatientGuardianUpdateManyMutationInput, PatientGuardianUncheckedUpdateManyInput>
    /**
     * Filter which PatientGuardians to update
     */
    where?: PatientGuardianWhereInput
    /**
     * Limit how many PatientGuardians to update.
     */
    limit?: number
  }

  /**
   * PatientGuardian updateManyAndReturn
   */
  export type PatientGuardianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * The data used to update PatientGuardians.
     */
    data: XOR<PatientGuardianUpdateManyMutationInput, PatientGuardianUncheckedUpdateManyInput>
    /**
     * Filter which PatientGuardians to update
     */
    where?: PatientGuardianWhereInput
    /**
     * Limit how many PatientGuardians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientGuardian upsert
   */
  export type PatientGuardianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientGuardian to update in case it exists.
     */
    where: PatientGuardianWhereUniqueInput
    /**
     * In case the PatientGuardian found by the `where` argument doesn't exist, create a new PatientGuardian with this data.
     */
    create: XOR<PatientGuardianCreateInput, PatientGuardianUncheckedCreateInput>
    /**
     * In case the PatientGuardian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientGuardianUpdateInput, PatientGuardianUncheckedUpdateInput>
  }

  /**
   * PatientGuardian delete
   */
  export type PatientGuardianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianInclude<ExtArgs> | null
    /**
     * Filter which PatientGuardian to delete.
     */
    where: PatientGuardianWhereUniqueInput
  }

  /**
   * PatientGuardian deleteMany
   */
  export type PatientGuardianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientGuardians to delete
     */
    where?: PatientGuardianWhereInput
    /**
     * Limit how many PatientGuardians to delete.
     */
    limit?: number
  }

  /**
   * PatientGuardian without action
   */
  export type PatientGuardianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    year: number | null
    maxCapacity: number | null
  }

  export type VehicleSumAggregateOutputType = {
    year: number | null
    maxCapacity: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    plate: string | null
    chassis: string | null
    model: string | null
    year: number | null
    color: string | null
    maxCapacity: number | null
    status: $Enums.VehicleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    plate: string | null
    chassis: string | null
    model: string | null
    year: number | null
    color: string | null
    maxCapacity: number | null
    status: $Enums.VehicleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    plate: number
    chassis: number
    model: number
    year: number
    color: number
    maxCapacity: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    year?: true
    maxCapacity?: true
  }

  export type VehicleSumAggregateInputType = {
    year?: true
    maxCapacity?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    plate?: true
    chassis?: true
    model?: true
    year?: true
    color?: true
    maxCapacity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    plate?: true
    chassis?: true
    model?: true
    year?: true
    color?: true
    maxCapacity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    plate?: true
    chassis?: true
    model?: true
    year?: true
    color?: true
    maxCapacity?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    plate: string
    chassis: string
    model: string
    year: number
    color: string
    maxCapacity: number
    status: $Enums.VehicleStatus
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plate?: boolean
    chassis?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    maxCapacity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trips?: boolean | Vehicle$tripsArgs<ExtArgs>
    documents?: boolean | Vehicle$documentsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plate?: boolean
    chassis?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    maxCapacity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plate?: boolean
    chassis?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    maxCapacity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    plate?: boolean
    chassis?: boolean
    model?: boolean
    year?: boolean
    color?: boolean
    maxCapacity?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plate" | "chassis" | "model" | "year" | "color" | "maxCapacity" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | Vehicle$tripsArgs<ExtArgs>
    documents?: boolean | Vehicle$documentsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      trips: Prisma.$TripPayload<ExtArgs>[]
      documents: Prisma.$VehicleDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plate: string
      chassis: string
      model: string
      year: number
      color: string
      maxCapacity: number
      status: $Enums.VehicleStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trips<T extends Vehicle$tripsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Vehicle$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly plate: FieldRef<"Vehicle", 'String'>
    readonly chassis: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly year: FieldRef<"Vehicle", 'Int'>
    readonly color: FieldRef<"Vehicle", 'String'>
    readonly maxCapacity: FieldRef<"Vehicle", 'Int'>
    readonly status: FieldRef<"Vehicle", 'VehicleStatus'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.trips
   */
  export type Vehicle$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Vehicle.documents
   */
  export type Vehicle$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDocument
     */
    select?: VehicleDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDocument
     */
    omit?: VehicleDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDocumentInclude<ExtArgs> | null
    where?: VehicleDocumentWhereInput
    orderBy?: VehicleDocumentOrderByWithRelationInput | VehicleDocumentOrderByWithRelationInput[]
    cursor?: VehicleDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleDocumentScalarFieldEnum | VehicleDocumentScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    driverId: string | null
    origin: string | null
    destination: string | null
    departureDate: Date | null
    arrivalDate: Date | null
    status: $Enums.TripStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    driverId: string | null
    origin: string | null
    destination: string | null
    departureDate: Date | null
    arrivalDate: Date | null
    status: $Enums.TripStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    vehicleId: number
    driverId: number
    origin: number
    destination: number
    departureDate: number
    arrivalDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripMinAggregateInputType = {
    id?: true
    vehicleId?: true
    driverId?: true
    origin?: true
    destination?: true
    departureDate?: true
    arrivalDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    driverId?: true
    origin?: true
    destination?: true
    departureDate?: true
    arrivalDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    vehicleId?: true
    driverId?: true
    origin?: true
    destination?: true
    departureDate?: true
    arrivalDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    vehicleId: string
    driverId: string
    origin: string
    destination: string
    departureDate: Date
    arrivalDate: Date | null
    status: $Enums.TripStatus
    createdAt: Date
    updatedAt: Date
    _count: TripCountAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    driverId?: boolean
    origin?: boolean
    destination?: boolean
    departureDate?: boolean
    arrivalDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | EmployeeDefaultArgs<ExtArgs>
    passengers?: boolean | Trip$passengersArgs<ExtArgs>
    patientGuardians?: boolean | Trip$patientGuardiansArgs<ExtArgs>
    routes?: boolean | Trip$routesArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    driverId?: boolean
    origin?: boolean
    destination?: boolean
    departureDate?: boolean
    arrivalDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    driverId?: boolean
    origin?: boolean
    destination?: boolean
    departureDate?: boolean
    arrivalDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    driverId?: boolean
    origin?: boolean
    destination?: boolean
    departureDate?: boolean
    arrivalDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "driverId" | "origin" | "destination" | "departureDate" | "arrivalDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | EmployeeDefaultArgs<ExtArgs>
    passengers?: boolean | Trip$passengersArgs<ExtArgs>
    patientGuardians?: boolean | Trip$patientGuardiansArgs<ExtArgs>
    routes?: boolean | Trip$routesArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type TripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      driver: Prisma.$EmployeePayload<ExtArgs>
      passengers: Prisma.$TripPassengerPayload<ExtArgs>[]
      patientGuardians: Prisma.$PatientGuardianPayload<ExtArgs>[]
      routes: Prisma.$TripRoutePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      driverId: string
      origin: string
      destination: string
      departureDate: Date
      arrivalDate: Date | null
      status: $Enums.TripStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips and returns the data updated in the database.
     * @param {TripUpdateManyAndReturnArgs} args - Arguments to update many Trips.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripUpdateManyAndReturnArgs>(args: SelectSubset<T, TripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    passengers<T extends Trip$passengersArgs<ExtArgs> = {}>(args?: Subset<T, Trip$passengersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPassengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patientGuardians<T extends Trip$patientGuardiansArgs<ExtArgs> = {}>(args?: Subset<T, Trip$patientGuardiansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientGuardianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routes<T extends Trip$routesArgs<ExtArgs> = {}>(args?: Subset<T, Trip$routesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripRoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly vehicleId: FieldRef<"Trip", 'String'>
    readonly driverId: FieldRef<"Trip", 'String'>
    readonly origin: FieldRef<"Trip", 'String'>
    readonly destination: FieldRef<"Trip", 'String'>
    readonly departureDate: FieldRef<"Trip", 'DateTime'>
    readonly arrivalDate: FieldRef<"Trip", 'DateTime'>
    readonly status: FieldRef<"Trip", 'TripStatus'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip updateManyAndReturn
   */
  export type TripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.passengers
   */
  export type Trip$passengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPassenger
     */
    select?: TripPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPassenger
     */
    omit?: TripPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPassengerInclude<ExtArgs> | null
    where?: TripPassengerWhereInput
    orderBy?: TripPassengerOrderByWithRelationInput | TripPassengerOrderByWithRelationInput[]
    cursor?: TripPassengerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripPassengerScalarFieldEnum | TripPassengerScalarFieldEnum[]
  }

  /**
   * Trip.patientGuardians
   */
  export type Trip$patientGuardiansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientGuardian
     */
    select?: PatientGuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientGuardian
     */
    omit?: PatientGuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientGuardianInclude<ExtArgs> | null
    where?: PatientGuardianWhereInput
    orderBy?: PatientGuardianOrderByWithRelationInput | PatientGuardianOrderByWithRelationInput[]
    cursor?: PatientGuardianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientGuardianScalarFieldEnum | PatientGuardianScalarFieldEnum[]
  }

  /**
   * Trip.routes
   */
  export type Trip$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripRoute
     */
    select?: TripRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripRoute
     */
    omit?: TripRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripRouteInclude<ExtArgs> | null
    where?: TripRouteWhereInput
    orderBy?: TripRouteOrderByWithRelationInput | TripRouteOrderByWithRelationInput[]
    cursor?: TripRouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripRouteScalarFieldEnum | TripRouteScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model TripPassenger
   */

  export type AggregateTripPassenger = {
    _count: TripPassengerCountAggregateOutputType | null
    _min: TripPassengerMinAggregateOutputType | null
    _max: TripPassengerMaxAggregateOutputType | null
  }

  export type TripPassengerMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    personId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripPassengerMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    personId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripPassengerCountAggregateOutputType = {
    id: number
    tripId: number
    personId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripPassengerMinAggregateInputType = {
    id?: true
    tripId?: true
    personId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripPassengerMaxAggregateInputType = {
    id?: true
    tripId?: true
    personId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripPassengerCountAggregateInputType = {
    id?: true
    tripId?: true
    personId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripPassengerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPassenger to aggregate.
     */
    where?: TripPassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPassengers to fetch.
     */
    orderBy?: TripPassengerOrderByWithRelationInput | TripPassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripPassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPassengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripPassengers
    **/
    _count?: true | TripPassengerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripPassengerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripPassengerMaxAggregateInputType
  }

  export type GetTripPassengerAggregateType<T extends TripPassengerAggregateArgs> = {
        [P in keyof T & keyof AggregateTripPassenger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripPassenger[P]>
      : GetScalarType<T[P], AggregateTripPassenger[P]>
  }




  export type TripPassengerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripPassengerWhereInput
    orderBy?: TripPassengerOrderByWithAggregationInput | TripPassengerOrderByWithAggregationInput[]
    by: TripPassengerScalarFieldEnum[] | TripPassengerScalarFieldEnum
    having?: TripPassengerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripPassengerCountAggregateInputType | true
    _min?: TripPassengerMinAggregateInputType
    _max?: TripPassengerMaxAggregateInputType
  }

  export type TripPassengerGroupByOutputType = {
    id: string
    tripId: string
    personId: string
    createdAt: Date
    updatedAt: Date
    _count: TripPassengerCountAggregateOutputType | null
    _min: TripPassengerMinAggregateOutputType | null
    _max: TripPassengerMaxAggregateOutputType | null
  }

  type GetTripPassengerGroupByPayload<T extends TripPassengerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripPassengerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripPassengerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripPassengerGroupByOutputType[P]>
            : GetScalarType<T[P], TripPassengerGroupByOutputType[P]>
        }
      >
    >


  export type TripPassengerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    personId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPassenger"]>

  export type TripPassengerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    personId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPassenger"]>

  export type TripPassengerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    personId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripPassenger"]>

  export type TripPassengerSelectScalar = {
    id?: boolean
    tripId?: boolean
    personId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripPassengerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "personId" | "createdAt" | "updatedAt", ExtArgs["result"]["tripPassenger"]>
  export type TripPassengerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type TripPassengerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type TripPassengerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $TripPassengerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripPassenger"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      personId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tripPassenger"]>
    composites: {}
  }

  type TripPassengerGetPayload<S extends boolean | null | undefined | TripPassengerDefaultArgs> = $Result.GetResult<Prisma.$TripPassengerPayload, S>

  type TripPassengerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripPassengerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripPassengerCountAggregateInputType | true
    }

  export interface TripPassengerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripPassenger'], meta: { name: 'TripPassenger' } }
    /**
     * Find zero or one TripPassenger that matches the filter.
     * @param {TripPassengerFindUniqueArgs} args - Arguments to find a TripPassenger
     * @example
     * // Get one TripPassenger
     * const tripPassenger = await prisma.tripPassenger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripPassengerFindUniqueArgs>(args: SelectSubset<T, TripPassengerFindUniqueArgs<ExtArgs>>): Prisma__TripPassengerClient<$Result.GetResult<Prisma.$TripPassengerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripPassenger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripPassengerFindUniqueOrThrowArgs} args - Arguments to find a TripPassenger
     * @example
     * // Get one TripPassenger
     * const tripPassenger = await prisma.tripPassenger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripPassengerFindUniqueOrThrowArgs>(args: SelectSubset<T, TripPassengerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripPassengerClient<$Result.GetResult<Prisma.$TripPassengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPassenger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPassengerFindFirstArgs} args - Arguments to find a TripPassenger
     * @example
     * // Get one TripPassenger
     * const tripPassenger = await prisma.tripPassenger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripPassengerFindFirstArgs>(args?: SelectSubset<T, TripPassengerFindFirstArgs<ExtArgs>>): Prisma__TripPassengerClient<$Result.GetResult<Prisma.$TripPassengerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripPassenger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPassengerFindFirstOrThrowArgs} args - Arguments to find a TripPassenger
     * @example
     * // Get one TripPassenger
     * const tripPassenger = await prisma.tripPassenger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripPassengerFindFirstOrThrowArgs>(args?: SelectSubset<T, TripPassengerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripPassengerClient<$Result.GetResult<Prisma.$TripPassengerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripPassengers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPassengerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripPassengers
     * const tripPassengers = await prisma.tripPassenger.findMany()
     * 
     * // Get first 10 TripPassengers
     * const tripPassengers = await prisma.tripPassenger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripPassengerWithIdOnly = await prisma.tripPassenger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripPassengerFindManyArgs>(args?: SelectSubset<T, TripPassengerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPassengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripPassenger.
     * @param {TripPassengerCreateArgs} args - Arguments to create a TripPassenger.
     * @example
     * // Create one TripPassenger
     * const TripPassenger = await prisma.tripPassenger.create({
     *   data: {
     *     // ... data to create a TripPassenger
     *   }
     * })
     * 
     */
    create<T extends TripPassengerCreateArgs>(args: SelectSubset<T, TripPassengerCreateArgs<ExtArgs>>): Prisma__TripPassengerClient<$Result.GetResult<Prisma.$TripPassengerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripPassengers.
     * @param {TripPassengerCreateManyArgs} args - Arguments to create many TripPassengers.
     * @example
     * // Create many TripPassengers
     * const tripPassenger = await prisma.tripPassenger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripPassengerCreateManyArgs>(args?: SelectSubset<T, TripPassengerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripPassengers and returns the data saved in the database.
     * @param {TripPassengerCreateManyAndReturnArgs} args - Arguments to create many TripPassengers.
     * @example
     * // Create many TripPassengers
     * const tripPassenger = await prisma.tripPassenger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripPassengers and only return the `id`
     * const tripPassengerWithIdOnly = await prisma.tripPassenger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripPassengerCreateManyAndReturnArgs>(args?: SelectSubset<T, TripPassengerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPassengerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripPassenger.
     * @param {TripPassengerDeleteArgs} args - Arguments to delete one TripPassenger.
     * @example
     * // Delete one TripPassenger
     * const TripPassenger = await prisma.tripPassenger.delete({
     *   where: {
     *     // ... filter to delete one TripPassenger
     *   }
     * })
     * 
     */
    delete<T extends TripPassengerDeleteArgs>(args: SelectSubset<T, TripPassengerDeleteArgs<ExtArgs>>): Prisma__TripPassengerClient<$Result.GetResult<Prisma.$TripPassengerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripPassenger.
     * @param {TripPassengerUpdateArgs} args - Arguments to update one TripPassenger.
     * @example
     * // Update one TripPassenger
     * const tripPassenger = await prisma.tripPassenger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripPassengerUpdateArgs>(args: SelectSubset<T, TripPassengerUpdateArgs<ExtArgs>>): Prisma__TripPassengerClient<$Result.GetResult<Prisma.$TripPassengerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripPassengers.
     * @param {TripPassengerDeleteManyArgs} args - Arguments to filter TripPassengers to delete.
     * @example
     * // Delete a few TripPassengers
     * const { count } = await prisma.tripPassenger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripPassengerDeleteManyArgs>(args?: SelectSubset<T, TripPassengerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPassengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPassengerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripPassengers
     * const tripPassenger = await prisma.tripPassenger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripPassengerUpdateManyArgs>(args: SelectSubset<T, TripPassengerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripPassengers and returns the data updated in the database.
     * @param {TripPassengerUpdateManyAndReturnArgs} args - Arguments to update many TripPassengers.
     * @example
     * // Update many TripPassengers
     * const tripPassenger = await prisma.tripPassenger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripPassengers and only return the `id`
     * const tripPassengerWithIdOnly = await prisma.tripPassenger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripPassengerUpdateManyAndReturnArgs>(args: SelectSubset<T, TripPassengerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPassengerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripPassenger.
     * @param {TripPassengerUpsertArgs} args - Arguments to update or create a TripPassenger.
     * @example
     * // Update or create a TripPassenger
     * const tripPassenger = await prisma.tripPassenger.upsert({
     *   create: {
     *     // ... data to create a TripPassenger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripPassenger we want to update
     *   }
     * })
     */
    upsert<T extends TripPassengerUpsertArgs>(args: SelectSubset<T, TripPassengerUpsertArgs<ExtArgs>>): Prisma__TripPassengerClient<$Result.GetResult<Prisma.$TripPassengerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripPassengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPassengerCountArgs} args - Arguments to filter TripPassengers to count.
     * @example
     * // Count the number of TripPassengers
     * const count = await prisma.tripPassenger.count({
     *   where: {
     *     // ... the filter for the TripPassengers we want to count
     *   }
     * })
    **/
    count<T extends TripPassengerCountArgs>(
      args?: Subset<T, TripPassengerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripPassengerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripPassenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPassengerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripPassengerAggregateArgs>(args: Subset<T, TripPassengerAggregateArgs>): Prisma.PrismaPromise<GetTripPassengerAggregateType<T>>

    /**
     * Group by TripPassenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripPassengerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripPassengerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripPassengerGroupByArgs['orderBy'] }
        : { orderBy?: TripPassengerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripPassengerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripPassengerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripPassenger model
   */
  readonly fields: TripPassengerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripPassenger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripPassengerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripPassenger model
   */
  interface TripPassengerFieldRefs {
    readonly id: FieldRef<"TripPassenger", 'String'>
    readonly tripId: FieldRef<"TripPassenger", 'String'>
    readonly personId: FieldRef<"TripPassenger", 'String'>
    readonly createdAt: FieldRef<"TripPassenger", 'DateTime'>
    readonly updatedAt: FieldRef<"TripPassenger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TripPassenger findUnique
   */
  export type TripPassengerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPassenger
     */
    select?: TripPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPassenger
     */
    omit?: TripPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPassengerInclude<ExtArgs> | null
    /**
     * Filter, which TripPassenger to fetch.
     */
    where: TripPassengerWhereUniqueInput
  }

  /**
   * TripPassenger findUniqueOrThrow
   */
  export type TripPassengerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPassenger
     */
    select?: TripPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPassenger
     */
    omit?: TripPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPassengerInclude<ExtArgs> | null
    /**
     * Filter, which TripPassenger to fetch.
     */
    where: TripPassengerWhereUniqueInput
  }

  /**
   * TripPassenger findFirst
   */
  export type TripPassengerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPassenger
     */
    select?: TripPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPassenger
     */
    omit?: TripPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPassengerInclude<ExtArgs> | null
    /**
     * Filter, which TripPassenger to fetch.
     */
    where?: TripPassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPassengers to fetch.
     */
    orderBy?: TripPassengerOrderByWithRelationInput | TripPassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPassengers.
     */
    cursor?: TripPassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPassengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPassengers.
     */
    distinct?: TripPassengerScalarFieldEnum | TripPassengerScalarFieldEnum[]
  }

  /**
   * TripPassenger findFirstOrThrow
   */
  export type TripPassengerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPassenger
     */
    select?: TripPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPassenger
     */
    omit?: TripPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPassengerInclude<ExtArgs> | null
    /**
     * Filter, which TripPassenger to fetch.
     */
    where?: TripPassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPassengers to fetch.
     */
    orderBy?: TripPassengerOrderByWithRelationInput | TripPassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripPassengers.
     */
    cursor?: TripPassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPassengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripPassengers.
     */
    distinct?: TripPassengerScalarFieldEnum | TripPassengerScalarFieldEnum[]
  }

  /**
   * TripPassenger findMany
   */
  export type TripPassengerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPassenger
     */
    select?: TripPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPassenger
     */
    omit?: TripPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPassengerInclude<ExtArgs> | null
    /**
     * Filter, which TripPassengers to fetch.
     */
    where?: TripPassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripPassengers to fetch.
     */
    orderBy?: TripPassengerOrderByWithRelationInput | TripPassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripPassengers.
     */
    cursor?: TripPassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripPassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripPassengers.
     */
    skip?: number
    distinct?: TripPassengerScalarFieldEnum | TripPassengerScalarFieldEnum[]
  }

  /**
   * TripPassenger create
   */
  export type TripPassengerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPassenger
     */
    select?: TripPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPassenger
     */
    omit?: TripPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPassengerInclude<ExtArgs> | null
    /**
     * The data needed to create a TripPassenger.
     */
    data: XOR<TripPassengerCreateInput, TripPassengerUncheckedCreateInput>
  }

  /**
   * TripPassenger createMany
   */
  export type TripPassengerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripPassengers.
     */
    data: TripPassengerCreateManyInput | TripPassengerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripPassenger createManyAndReturn
   */
  export type TripPassengerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPassenger
     */
    select?: TripPassengerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPassenger
     */
    omit?: TripPassengerOmit<ExtArgs> | null
    /**
     * The data used to create many TripPassengers.
     */
    data: TripPassengerCreateManyInput | TripPassengerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPassengerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPassenger update
   */
  export type TripPassengerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPassenger
     */
    select?: TripPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPassenger
     */
    omit?: TripPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPassengerInclude<ExtArgs> | null
    /**
     * The data needed to update a TripPassenger.
     */
    data: XOR<TripPassengerUpdateInput, TripPassengerUncheckedUpdateInput>
    /**
     * Choose, which TripPassenger to update.
     */
    where: TripPassengerWhereUniqueInput
  }

  /**
   * TripPassenger updateMany
   */
  export type TripPassengerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripPassengers.
     */
    data: XOR<TripPassengerUpdateManyMutationInput, TripPassengerUncheckedUpdateManyInput>
    /**
     * Filter which TripPassengers to update
     */
    where?: TripPassengerWhereInput
    /**
     * Limit how many TripPassengers to update.
     */
    limit?: number
  }

  /**
   * TripPassenger updateManyAndReturn
   */
  export type TripPassengerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPassenger
     */
    select?: TripPassengerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripPassenger
     */
    omit?: TripPassengerOmit<ExtArgs> | null
    /**
     * The data used to update TripPassengers.
     */
    data: XOR<TripPassengerUpdateManyMutationInput, TripPassengerUncheckedUpdateManyInput>
    /**
     * Filter which TripPassengers to update
     */
    where?: TripPassengerWhereInput
    /**
     * Limit how many TripPassengers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPassengerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripPassenger upsert
   */
  export type TripPassengerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPassenger
     */
    select?: TripPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPassenger
     */
    omit?: TripPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPassengerInclude<ExtArgs> | null
    /**
     * The filter to search for the TripPassenger to update in case it exists.
     */
    where: TripPassengerWhereUniqueInput
    /**
     * In case the TripPassenger found by the `where` argument doesn't exist, create a new TripPassenger with this data.
     */
    create: XOR<TripPassengerCreateInput, TripPassengerUncheckedCreateInput>
    /**
     * In case the TripPassenger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripPassengerUpdateInput, TripPassengerUncheckedUpdateInput>
  }

  /**
   * TripPassenger delete
   */
  export type TripPassengerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPassenger
     */
    select?: TripPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPassenger
     */
    omit?: TripPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPassengerInclude<ExtArgs> | null
    /**
     * Filter which TripPassenger to delete.
     */
    where: TripPassengerWhereUniqueInput
  }

  /**
   * TripPassenger deleteMany
   */
  export type TripPassengerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripPassengers to delete
     */
    where?: TripPassengerWhereInput
    /**
     * Limit how many TripPassengers to delete.
     */
    limit?: number
  }

  /**
   * TripPassenger without action
   */
  export type TripPassengerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripPassenger
     */
    select?: TripPassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripPassenger
     */
    omit?: TripPassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripPassengerInclude<ExtArgs> | null
  }


  /**
   * Model TripRoute
   */

  export type AggregateTripRoute = {
    _count: TripRouteCountAggregateOutputType | null
    _avg: TripRouteAvgAggregateOutputType | null
    _sum: TripRouteSumAggregateOutputType | null
    _min: TripRouteMinAggregateOutputType | null
    _max: TripRouteMaxAggregateOutputType | null
  }

  export type TripRouteAvgAggregateOutputType = {
    sequence: number | null
  }

  export type TripRouteSumAggregateOutputType = {
    sequence: number | null
  }

  export type TripRouteMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    supportHouseId: string | null
    sequence: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripRouteMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    supportHouseId: string | null
    sequence: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripRouteCountAggregateOutputType = {
    id: number
    tripId: number
    supportHouseId: number
    sequence: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripRouteAvgAggregateInputType = {
    sequence?: true
  }

  export type TripRouteSumAggregateInputType = {
    sequence?: true
  }

  export type TripRouteMinAggregateInputType = {
    id?: true
    tripId?: true
    supportHouseId?: true
    sequence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripRouteMaxAggregateInputType = {
    id?: true
    tripId?: true
    supportHouseId?: true
    sequence?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripRouteCountAggregateInputType = {
    id?: true
    tripId?: true
    supportHouseId?: true
    sequence?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripRouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripRoute to aggregate.
     */
    where?: TripRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripRoutes to fetch.
     */
    orderBy?: TripRouteOrderByWithRelationInput | TripRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripRoutes
    **/
    _count?: true | TripRouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripRouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripRouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripRouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripRouteMaxAggregateInputType
  }

  export type GetTripRouteAggregateType<T extends TripRouteAggregateArgs> = {
        [P in keyof T & keyof AggregateTripRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripRoute[P]>
      : GetScalarType<T[P], AggregateTripRoute[P]>
  }




  export type TripRouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripRouteWhereInput
    orderBy?: TripRouteOrderByWithAggregationInput | TripRouteOrderByWithAggregationInput[]
    by: TripRouteScalarFieldEnum[] | TripRouteScalarFieldEnum
    having?: TripRouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripRouteCountAggregateInputType | true
    _avg?: TripRouteAvgAggregateInputType
    _sum?: TripRouteSumAggregateInputType
    _min?: TripRouteMinAggregateInputType
    _max?: TripRouteMaxAggregateInputType
  }

  export type TripRouteGroupByOutputType = {
    id: string
    tripId: string
    supportHouseId: string
    sequence: number
    createdAt: Date
    updatedAt: Date
    _count: TripRouteCountAggregateOutputType | null
    _avg: TripRouteAvgAggregateOutputType | null
    _sum: TripRouteSumAggregateOutputType | null
    _min: TripRouteMinAggregateOutputType | null
    _max: TripRouteMaxAggregateOutputType | null
  }

  type GetTripRouteGroupByPayload<T extends TripRouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripRouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripRouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripRouteGroupByOutputType[P]>
            : GetScalarType<T[P], TripRouteGroupByOutputType[P]>
        }
      >
    >


  export type TripRouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    supportHouseId?: boolean
    sequence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    supportHouse?: boolean | SupportHouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripRoute"]>

  export type TripRouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    supportHouseId?: boolean
    sequence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    supportHouse?: boolean | SupportHouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripRoute"]>

  export type TripRouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    supportHouseId?: boolean
    sequence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    supportHouse?: boolean | SupportHouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripRoute"]>

  export type TripRouteSelectScalar = {
    id?: boolean
    tripId?: boolean
    supportHouseId?: boolean
    sequence?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripRouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "supportHouseId" | "sequence" | "createdAt" | "updatedAt", ExtArgs["result"]["tripRoute"]>
  export type TripRouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    supportHouse?: boolean | SupportHouseDefaultArgs<ExtArgs>
  }
  export type TripRouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    supportHouse?: boolean | SupportHouseDefaultArgs<ExtArgs>
  }
  export type TripRouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    supportHouse?: boolean | SupportHouseDefaultArgs<ExtArgs>
  }

  export type $TripRoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripRoute"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      supportHouse: Prisma.$SupportHousePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: string
      supportHouseId: string
      sequence: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tripRoute"]>
    composites: {}
  }

  type TripRouteGetPayload<S extends boolean | null | undefined | TripRouteDefaultArgs> = $Result.GetResult<Prisma.$TripRoutePayload, S>

  type TripRouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripRouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripRouteCountAggregateInputType | true
    }

  export interface TripRouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripRoute'], meta: { name: 'TripRoute' } }
    /**
     * Find zero or one TripRoute that matches the filter.
     * @param {TripRouteFindUniqueArgs} args - Arguments to find a TripRoute
     * @example
     * // Get one TripRoute
     * const tripRoute = await prisma.tripRoute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripRouteFindUniqueArgs>(args: SelectSubset<T, TripRouteFindUniqueArgs<ExtArgs>>): Prisma__TripRouteClient<$Result.GetResult<Prisma.$TripRoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripRoute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripRouteFindUniqueOrThrowArgs} args - Arguments to find a TripRoute
     * @example
     * // Get one TripRoute
     * const tripRoute = await prisma.tripRoute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripRouteFindUniqueOrThrowArgs>(args: SelectSubset<T, TripRouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripRouteClient<$Result.GetResult<Prisma.$TripRoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripRoute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripRouteFindFirstArgs} args - Arguments to find a TripRoute
     * @example
     * // Get one TripRoute
     * const tripRoute = await prisma.tripRoute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripRouteFindFirstArgs>(args?: SelectSubset<T, TripRouteFindFirstArgs<ExtArgs>>): Prisma__TripRouteClient<$Result.GetResult<Prisma.$TripRoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripRoute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripRouteFindFirstOrThrowArgs} args - Arguments to find a TripRoute
     * @example
     * // Get one TripRoute
     * const tripRoute = await prisma.tripRoute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripRouteFindFirstOrThrowArgs>(args?: SelectSubset<T, TripRouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripRouteClient<$Result.GetResult<Prisma.$TripRoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripRoutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripRouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripRoutes
     * const tripRoutes = await prisma.tripRoute.findMany()
     * 
     * // Get first 10 TripRoutes
     * const tripRoutes = await prisma.tripRoute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripRouteWithIdOnly = await prisma.tripRoute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripRouteFindManyArgs>(args?: SelectSubset<T, TripRouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripRoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripRoute.
     * @param {TripRouteCreateArgs} args - Arguments to create a TripRoute.
     * @example
     * // Create one TripRoute
     * const TripRoute = await prisma.tripRoute.create({
     *   data: {
     *     // ... data to create a TripRoute
     *   }
     * })
     * 
     */
    create<T extends TripRouteCreateArgs>(args: SelectSubset<T, TripRouteCreateArgs<ExtArgs>>): Prisma__TripRouteClient<$Result.GetResult<Prisma.$TripRoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripRoutes.
     * @param {TripRouteCreateManyArgs} args - Arguments to create many TripRoutes.
     * @example
     * // Create many TripRoutes
     * const tripRoute = await prisma.tripRoute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripRouteCreateManyArgs>(args?: SelectSubset<T, TripRouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripRoutes and returns the data saved in the database.
     * @param {TripRouteCreateManyAndReturnArgs} args - Arguments to create many TripRoutes.
     * @example
     * // Create many TripRoutes
     * const tripRoute = await prisma.tripRoute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripRoutes and only return the `id`
     * const tripRouteWithIdOnly = await prisma.tripRoute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripRouteCreateManyAndReturnArgs>(args?: SelectSubset<T, TripRouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripRoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripRoute.
     * @param {TripRouteDeleteArgs} args - Arguments to delete one TripRoute.
     * @example
     * // Delete one TripRoute
     * const TripRoute = await prisma.tripRoute.delete({
     *   where: {
     *     // ... filter to delete one TripRoute
     *   }
     * })
     * 
     */
    delete<T extends TripRouteDeleteArgs>(args: SelectSubset<T, TripRouteDeleteArgs<ExtArgs>>): Prisma__TripRouteClient<$Result.GetResult<Prisma.$TripRoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripRoute.
     * @param {TripRouteUpdateArgs} args - Arguments to update one TripRoute.
     * @example
     * // Update one TripRoute
     * const tripRoute = await prisma.tripRoute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripRouteUpdateArgs>(args: SelectSubset<T, TripRouteUpdateArgs<ExtArgs>>): Prisma__TripRouteClient<$Result.GetResult<Prisma.$TripRoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripRoutes.
     * @param {TripRouteDeleteManyArgs} args - Arguments to filter TripRoutes to delete.
     * @example
     * // Delete a few TripRoutes
     * const { count } = await prisma.tripRoute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripRouteDeleteManyArgs>(args?: SelectSubset<T, TripRouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripRouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripRoutes
     * const tripRoute = await prisma.tripRoute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripRouteUpdateManyArgs>(args: SelectSubset<T, TripRouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripRoutes and returns the data updated in the database.
     * @param {TripRouteUpdateManyAndReturnArgs} args - Arguments to update many TripRoutes.
     * @example
     * // Update many TripRoutes
     * const tripRoute = await prisma.tripRoute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripRoutes and only return the `id`
     * const tripRouteWithIdOnly = await prisma.tripRoute.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripRouteUpdateManyAndReturnArgs>(args: SelectSubset<T, TripRouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripRoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripRoute.
     * @param {TripRouteUpsertArgs} args - Arguments to update or create a TripRoute.
     * @example
     * // Update or create a TripRoute
     * const tripRoute = await prisma.tripRoute.upsert({
     *   create: {
     *     // ... data to create a TripRoute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripRoute we want to update
     *   }
     * })
     */
    upsert<T extends TripRouteUpsertArgs>(args: SelectSubset<T, TripRouteUpsertArgs<ExtArgs>>): Prisma__TripRouteClient<$Result.GetResult<Prisma.$TripRoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripRouteCountArgs} args - Arguments to filter TripRoutes to count.
     * @example
     * // Count the number of TripRoutes
     * const count = await prisma.tripRoute.count({
     *   where: {
     *     // ... the filter for the TripRoutes we want to count
     *   }
     * })
    **/
    count<T extends TripRouteCountArgs>(
      args?: Subset<T, TripRouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripRouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripRouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripRouteAggregateArgs>(args: Subset<T, TripRouteAggregateArgs>): Prisma.PrismaPromise<GetTripRouteAggregateType<T>>

    /**
     * Group by TripRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripRouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripRouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripRouteGroupByArgs['orderBy'] }
        : { orderBy?: TripRouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripRouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripRoute model
   */
  readonly fields: TripRouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripRoute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripRouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supportHouse<T extends SupportHouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupportHouseDefaultArgs<ExtArgs>>): Prisma__SupportHouseClient<$Result.GetResult<Prisma.$SupportHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TripRoute model
   */
  interface TripRouteFieldRefs {
    readonly id: FieldRef<"TripRoute", 'String'>
    readonly tripId: FieldRef<"TripRoute", 'String'>
    readonly supportHouseId: FieldRef<"TripRoute", 'String'>
    readonly sequence: FieldRef<"TripRoute", 'Int'>
    readonly createdAt: FieldRef<"TripRoute", 'DateTime'>
    readonly updatedAt: FieldRef<"TripRoute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TripRoute findUnique
   */
  export type TripRouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripRoute
     */
    select?: TripRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripRoute
     */
    omit?: TripRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripRouteInclude<ExtArgs> | null
    /**
     * Filter, which TripRoute to fetch.
     */
    where: TripRouteWhereUniqueInput
  }

  /**
   * TripRoute findUniqueOrThrow
   */
  export type TripRouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripRoute
     */
    select?: TripRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripRoute
     */
    omit?: TripRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripRouteInclude<ExtArgs> | null
    /**
     * Filter, which TripRoute to fetch.
     */
    where: TripRouteWhereUniqueInput
  }

  /**
   * TripRoute findFirst
   */
  export type TripRouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripRoute
     */
    select?: TripRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripRoute
     */
    omit?: TripRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripRouteInclude<ExtArgs> | null
    /**
     * Filter, which TripRoute to fetch.
     */
    where?: TripRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripRoutes to fetch.
     */
    orderBy?: TripRouteOrderByWithRelationInput | TripRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripRoutes.
     */
    cursor?: TripRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripRoutes.
     */
    distinct?: TripRouteScalarFieldEnum | TripRouteScalarFieldEnum[]
  }

  /**
   * TripRoute findFirstOrThrow
   */
  export type TripRouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripRoute
     */
    select?: TripRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripRoute
     */
    omit?: TripRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripRouteInclude<ExtArgs> | null
    /**
     * Filter, which TripRoute to fetch.
     */
    where?: TripRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripRoutes to fetch.
     */
    orderBy?: TripRouteOrderByWithRelationInput | TripRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripRoutes.
     */
    cursor?: TripRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripRoutes.
     */
    distinct?: TripRouteScalarFieldEnum | TripRouteScalarFieldEnum[]
  }

  /**
   * TripRoute findMany
   */
  export type TripRouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripRoute
     */
    select?: TripRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripRoute
     */
    omit?: TripRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripRouteInclude<ExtArgs> | null
    /**
     * Filter, which TripRoutes to fetch.
     */
    where?: TripRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripRoutes to fetch.
     */
    orderBy?: TripRouteOrderByWithRelationInput | TripRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripRoutes.
     */
    cursor?: TripRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripRoutes.
     */
    skip?: number
    distinct?: TripRouteScalarFieldEnum | TripRouteScalarFieldEnum[]
  }

  /**
   * TripRoute create
   */
  export type TripRouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripRoute
     */
    select?: TripRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripRoute
     */
    omit?: TripRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripRouteInclude<ExtArgs> | null
    /**
     * The data needed to create a TripRoute.
     */
    data: XOR<TripRouteCreateInput, TripRouteUncheckedCreateInput>
  }

  /**
   * TripRoute createMany
   */
  export type TripRouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripRoutes.
     */
    data: TripRouteCreateManyInput | TripRouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripRoute createManyAndReturn
   */
  export type TripRouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripRoute
     */
    select?: TripRouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripRoute
     */
    omit?: TripRouteOmit<ExtArgs> | null
    /**
     * The data used to create many TripRoutes.
     */
    data: TripRouteCreateManyInput | TripRouteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripRouteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripRoute update
   */
  export type TripRouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripRoute
     */
    select?: TripRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripRoute
     */
    omit?: TripRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripRouteInclude<ExtArgs> | null
    /**
     * The data needed to update a TripRoute.
     */
    data: XOR<TripRouteUpdateInput, TripRouteUncheckedUpdateInput>
    /**
     * Choose, which TripRoute to update.
     */
    where: TripRouteWhereUniqueInput
  }

  /**
   * TripRoute updateMany
   */
  export type TripRouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripRoutes.
     */
    data: XOR<TripRouteUpdateManyMutationInput, TripRouteUncheckedUpdateManyInput>
    /**
     * Filter which TripRoutes to update
     */
    where?: TripRouteWhereInput
    /**
     * Limit how many TripRoutes to update.
     */
    limit?: number
  }

  /**
   * TripRoute updateManyAndReturn
   */
  export type TripRouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripRoute
     */
    select?: TripRouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripRoute
     */
    omit?: TripRouteOmit<ExtArgs> | null
    /**
     * The data used to update TripRoutes.
     */
    data: XOR<TripRouteUpdateManyMutationInput, TripRouteUncheckedUpdateManyInput>
    /**
     * Filter which TripRoutes to update
     */
    where?: TripRouteWhereInput
    /**
     * Limit how many TripRoutes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripRouteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripRoute upsert
   */
  export type TripRouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripRoute
     */
    select?: TripRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripRoute
     */
    omit?: TripRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripRouteInclude<ExtArgs> | null
    /**
     * The filter to search for the TripRoute to update in case it exists.
     */
    where: TripRouteWhereUniqueInput
    /**
     * In case the TripRoute found by the `where` argument doesn't exist, create a new TripRoute with this data.
     */
    create: XOR<TripRouteCreateInput, TripRouteUncheckedCreateInput>
    /**
     * In case the TripRoute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripRouteUpdateInput, TripRouteUncheckedUpdateInput>
  }

  /**
   * TripRoute delete
   */
  export type TripRouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripRoute
     */
    select?: TripRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripRoute
     */
    omit?: TripRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripRouteInclude<ExtArgs> | null
    /**
     * Filter which TripRoute to delete.
     */
    where: TripRouteWhereUniqueInput
  }

  /**
   * TripRoute deleteMany
   */
  export type TripRouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripRoutes to delete
     */
    where?: TripRouteWhereInput
    /**
     * Limit how many TripRoutes to delete.
     */
    limit?: number
  }

  /**
   * TripRoute without action
   */
  export type TripRouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripRoute
     */
    select?: TripRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripRoute
     */
    omit?: TripRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripRouteInclude<ExtArgs> | null
  }


  /**
   * Model VehicleDocument
   */

  export type AggregateVehicleDocument = {
    _count: VehicleDocumentCountAggregateOutputType | null
    _avg: VehicleDocumentAvgAggregateOutputType | null
    _sum: VehicleDocumentSumAggregateOutputType | null
    _min: VehicleDocumentMinAggregateOutputType | null
    _max: VehicleDocumentMaxAggregateOutputType | null
  }

  export type VehicleDocumentAvgAggregateOutputType = {
    size: number | null
  }

  export type VehicleDocumentSumAggregateOutputType = {
    size: number | null
  }

  export type VehicleDocumentMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    name: string | null
    type: $Enums.VehicleDocumentType | null
    expiryDate: Date | null
    size: number | null
    path: string | null
    uploadDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleDocumentMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    name: string | null
    type: $Enums.VehicleDocumentType | null
    expiryDate: Date | null
    size: number | null
    path: string | null
    uploadDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleDocumentCountAggregateOutputType = {
    id: number
    vehicleId: number
    name: number
    type: number
    expiryDate: number
    size: number
    path: number
    uploadDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleDocumentAvgAggregateInputType = {
    size?: true
  }

  export type VehicleDocumentSumAggregateInputType = {
    size?: true
  }

  export type VehicleDocumentMinAggregateInputType = {
    id?: true
    vehicleId?: true
    name?: true
    type?: true
    expiryDate?: true
    size?: true
    path?: true
    uploadDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleDocumentMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    name?: true
    type?: true
    expiryDate?: true
    size?: true
    path?: true
    uploadDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleDocumentCountAggregateInputType = {
    id?: true
    vehicleId?: true
    name?: true
    type?: true
    expiryDate?: true
    size?: true
    path?: true
    uploadDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleDocument to aggregate.
     */
    where?: VehicleDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleDocuments to fetch.
     */
    orderBy?: VehicleDocumentOrderByWithRelationInput | VehicleDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleDocuments
    **/
    _count?: true | VehicleDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleDocumentMaxAggregateInputType
  }

  export type GetVehicleDocumentAggregateType<T extends VehicleDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleDocument[P]>
      : GetScalarType<T[P], AggregateVehicleDocument[P]>
  }




  export type VehicleDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleDocumentWhereInput
    orderBy?: VehicleDocumentOrderByWithAggregationInput | VehicleDocumentOrderByWithAggregationInput[]
    by: VehicleDocumentScalarFieldEnum[] | VehicleDocumentScalarFieldEnum
    having?: VehicleDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleDocumentCountAggregateInputType | true
    _avg?: VehicleDocumentAvgAggregateInputType
    _sum?: VehicleDocumentSumAggregateInputType
    _min?: VehicleDocumentMinAggregateInputType
    _max?: VehicleDocumentMaxAggregateInputType
  }

  export type VehicleDocumentGroupByOutputType = {
    id: string
    vehicleId: string
    name: string
    type: $Enums.VehicleDocumentType
    expiryDate: Date | null
    size: number
    path: string
    uploadDate: Date
    createdAt: Date
    updatedAt: Date
    _count: VehicleDocumentCountAggregateOutputType | null
    _avg: VehicleDocumentAvgAggregateOutputType | null
    _sum: VehicleDocumentSumAggregateOutputType | null
    _min: VehicleDocumentMinAggregateOutputType | null
    _max: VehicleDocumentMaxAggregateOutputType | null
  }

  type GetVehicleDocumentGroupByPayload<T extends VehicleDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleDocumentGroupByOutputType[P]>
        }
      >
    >


  export type VehicleDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    name?: boolean
    type?: boolean
    expiryDate?: boolean
    size?: boolean
    path?: boolean
    uploadDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleDocument"]>

  export type VehicleDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    name?: boolean
    type?: boolean
    expiryDate?: boolean
    size?: boolean
    path?: boolean
    uploadDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleDocument"]>

  export type VehicleDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    name?: boolean
    type?: boolean
    expiryDate?: boolean
    size?: boolean
    path?: boolean
    uploadDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleDocument"]>

  export type VehicleDocumentSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    name?: boolean
    type?: boolean
    expiryDate?: boolean
    size?: boolean
    path?: boolean
    uploadDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "name" | "type" | "expiryDate" | "size" | "path" | "uploadDate" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicleDocument"]>
  export type VehicleDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type VehicleDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type VehicleDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $VehicleDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleDocument"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      name: string
      type: $Enums.VehicleDocumentType
      expiryDate: Date | null
      size: number
      path: string
      uploadDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicleDocument"]>
    composites: {}
  }

  type VehicleDocumentGetPayload<S extends boolean | null | undefined | VehicleDocumentDefaultArgs> = $Result.GetResult<Prisma.$VehicleDocumentPayload, S>

  type VehicleDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleDocumentCountAggregateInputType | true
    }

  export interface VehicleDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleDocument'], meta: { name: 'VehicleDocument' } }
    /**
     * Find zero or one VehicleDocument that matches the filter.
     * @param {VehicleDocumentFindUniqueArgs} args - Arguments to find a VehicleDocument
     * @example
     * // Get one VehicleDocument
     * const vehicleDocument = await prisma.vehicleDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleDocumentFindUniqueArgs>(args: SelectSubset<T, VehicleDocumentFindUniqueArgs<ExtArgs>>): Prisma__VehicleDocumentClient<$Result.GetResult<Prisma.$VehicleDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleDocumentFindUniqueOrThrowArgs} args - Arguments to find a VehicleDocument
     * @example
     * // Get one VehicleDocument
     * const vehicleDocument = await prisma.vehicleDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleDocumentClient<$Result.GetResult<Prisma.$VehicleDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDocumentFindFirstArgs} args - Arguments to find a VehicleDocument
     * @example
     * // Get one VehicleDocument
     * const vehicleDocument = await prisma.vehicleDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleDocumentFindFirstArgs>(args?: SelectSubset<T, VehicleDocumentFindFirstArgs<ExtArgs>>): Prisma__VehicleDocumentClient<$Result.GetResult<Prisma.$VehicleDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDocumentFindFirstOrThrowArgs} args - Arguments to find a VehicleDocument
     * @example
     * // Get one VehicleDocument
     * const vehicleDocument = await prisma.vehicleDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleDocumentClient<$Result.GetResult<Prisma.$VehicleDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleDocuments
     * const vehicleDocuments = await prisma.vehicleDocument.findMany()
     * 
     * // Get first 10 VehicleDocuments
     * const vehicleDocuments = await prisma.vehicleDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleDocumentWithIdOnly = await prisma.vehicleDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleDocumentFindManyArgs>(args?: SelectSubset<T, VehicleDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleDocument.
     * @param {VehicleDocumentCreateArgs} args - Arguments to create a VehicleDocument.
     * @example
     * // Create one VehicleDocument
     * const VehicleDocument = await prisma.vehicleDocument.create({
     *   data: {
     *     // ... data to create a VehicleDocument
     *   }
     * })
     * 
     */
    create<T extends VehicleDocumentCreateArgs>(args: SelectSubset<T, VehicleDocumentCreateArgs<ExtArgs>>): Prisma__VehicleDocumentClient<$Result.GetResult<Prisma.$VehicleDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleDocuments.
     * @param {VehicleDocumentCreateManyArgs} args - Arguments to create many VehicleDocuments.
     * @example
     * // Create many VehicleDocuments
     * const vehicleDocument = await prisma.vehicleDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleDocumentCreateManyArgs>(args?: SelectSubset<T, VehicleDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleDocuments and returns the data saved in the database.
     * @param {VehicleDocumentCreateManyAndReturnArgs} args - Arguments to create many VehicleDocuments.
     * @example
     * // Create many VehicleDocuments
     * const vehicleDocument = await prisma.vehicleDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleDocuments and only return the `id`
     * const vehicleDocumentWithIdOnly = await prisma.vehicleDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehicleDocument.
     * @param {VehicleDocumentDeleteArgs} args - Arguments to delete one VehicleDocument.
     * @example
     * // Delete one VehicleDocument
     * const VehicleDocument = await prisma.vehicleDocument.delete({
     *   where: {
     *     // ... filter to delete one VehicleDocument
     *   }
     * })
     * 
     */
    delete<T extends VehicleDocumentDeleteArgs>(args: SelectSubset<T, VehicleDocumentDeleteArgs<ExtArgs>>): Prisma__VehicleDocumentClient<$Result.GetResult<Prisma.$VehicleDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleDocument.
     * @param {VehicleDocumentUpdateArgs} args - Arguments to update one VehicleDocument.
     * @example
     * // Update one VehicleDocument
     * const vehicleDocument = await prisma.vehicleDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleDocumentUpdateArgs>(args: SelectSubset<T, VehicleDocumentUpdateArgs<ExtArgs>>): Prisma__VehicleDocumentClient<$Result.GetResult<Prisma.$VehicleDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleDocuments.
     * @param {VehicleDocumentDeleteManyArgs} args - Arguments to filter VehicleDocuments to delete.
     * @example
     * // Delete a few VehicleDocuments
     * const { count } = await prisma.vehicleDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDocumentDeleteManyArgs>(args?: SelectSubset<T, VehicleDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleDocuments
     * const vehicleDocument = await prisma.vehicleDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleDocumentUpdateManyArgs>(args: SelectSubset<T, VehicleDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleDocuments and returns the data updated in the database.
     * @param {VehicleDocumentUpdateManyAndReturnArgs} args - Arguments to update many VehicleDocuments.
     * @example
     * // Update many VehicleDocuments
     * const vehicleDocument = await prisma.vehicleDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehicleDocuments and only return the `id`
     * const vehicleDocumentWithIdOnly = await prisma.vehicleDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehicleDocument.
     * @param {VehicleDocumentUpsertArgs} args - Arguments to update or create a VehicleDocument.
     * @example
     * // Update or create a VehicleDocument
     * const vehicleDocument = await prisma.vehicleDocument.upsert({
     *   create: {
     *     // ... data to create a VehicleDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleDocument we want to update
     *   }
     * })
     */
    upsert<T extends VehicleDocumentUpsertArgs>(args: SelectSubset<T, VehicleDocumentUpsertArgs<ExtArgs>>): Prisma__VehicleDocumentClient<$Result.GetResult<Prisma.$VehicleDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDocumentCountArgs} args - Arguments to filter VehicleDocuments to count.
     * @example
     * // Count the number of VehicleDocuments
     * const count = await prisma.vehicleDocument.count({
     *   where: {
     *     // ... the filter for the VehicleDocuments we want to count
     *   }
     * })
    **/
    count<T extends VehicleDocumentCountArgs>(
      args?: Subset<T, VehicleDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleDocumentAggregateArgs>(args: Subset<T, VehicleDocumentAggregateArgs>): Prisma.PrismaPromise<GetVehicleDocumentAggregateType<T>>

    /**
     * Group by VehicleDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleDocumentGroupByArgs['orderBy'] }
        : { orderBy?: VehicleDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleDocument model
   */
  readonly fields: VehicleDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VehicleDocument model
   */
  interface VehicleDocumentFieldRefs {
    readonly id: FieldRef<"VehicleDocument", 'String'>
    readonly vehicleId: FieldRef<"VehicleDocument", 'String'>
    readonly name: FieldRef<"VehicleDocument", 'String'>
    readonly type: FieldRef<"VehicleDocument", 'VehicleDocumentType'>
    readonly expiryDate: FieldRef<"VehicleDocument", 'DateTime'>
    readonly size: FieldRef<"VehicleDocument", 'Int'>
    readonly path: FieldRef<"VehicleDocument", 'String'>
    readonly uploadDate: FieldRef<"VehicleDocument", 'DateTime'>
    readonly createdAt: FieldRef<"VehicleDocument", 'DateTime'>
    readonly updatedAt: FieldRef<"VehicleDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VehicleDocument findUnique
   */
  export type VehicleDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDocument
     */
    select?: VehicleDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDocument
     */
    omit?: VehicleDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDocument to fetch.
     */
    where: VehicleDocumentWhereUniqueInput
  }

  /**
   * VehicleDocument findUniqueOrThrow
   */
  export type VehicleDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDocument
     */
    select?: VehicleDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDocument
     */
    omit?: VehicleDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDocument to fetch.
     */
    where: VehicleDocumentWhereUniqueInput
  }

  /**
   * VehicleDocument findFirst
   */
  export type VehicleDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDocument
     */
    select?: VehicleDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDocument
     */
    omit?: VehicleDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDocument to fetch.
     */
    where?: VehicleDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleDocuments to fetch.
     */
    orderBy?: VehicleDocumentOrderByWithRelationInput | VehicleDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleDocuments.
     */
    cursor?: VehicleDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleDocuments.
     */
    distinct?: VehicleDocumentScalarFieldEnum | VehicleDocumentScalarFieldEnum[]
  }

  /**
   * VehicleDocument findFirstOrThrow
   */
  export type VehicleDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDocument
     */
    select?: VehicleDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDocument
     */
    omit?: VehicleDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDocument to fetch.
     */
    where?: VehicleDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleDocuments to fetch.
     */
    orderBy?: VehicleDocumentOrderByWithRelationInput | VehicleDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleDocuments.
     */
    cursor?: VehicleDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleDocuments.
     */
    distinct?: VehicleDocumentScalarFieldEnum | VehicleDocumentScalarFieldEnum[]
  }

  /**
   * VehicleDocument findMany
   */
  export type VehicleDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDocument
     */
    select?: VehicleDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDocument
     */
    omit?: VehicleDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VehicleDocuments to fetch.
     */
    where?: VehicleDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleDocuments to fetch.
     */
    orderBy?: VehicleDocumentOrderByWithRelationInput | VehicleDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleDocuments.
     */
    cursor?: VehicleDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleDocuments.
     */
    skip?: number
    distinct?: VehicleDocumentScalarFieldEnum | VehicleDocumentScalarFieldEnum[]
  }

  /**
   * VehicleDocument create
   */
  export type VehicleDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDocument
     */
    select?: VehicleDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDocument
     */
    omit?: VehicleDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleDocument.
     */
    data: XOR<VehicleDocumentCreateInput, VehicleDocumentUncheckedCreateInput>
  }

  /**
   * VehicleDocument createMany
   */
  export type VehicleDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleDocuments.
     */
    data: VehicleDocumentCreateManyInput | VehicleDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleDocument createManyAndReturn
   */
  export type VehicleDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDocument
     */
    select?: VehicleDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDocument
     */
    omit?: VehicleDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many VehicleDocuments.
     */
    data: VehicleDocumentCreateManyInput | VehicleDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleDocument update
   */
  export type VehicleDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDocument
     */
    select?: VehicleDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDocument
     */
    omit?: VehicleDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleDocument.
     */
    data: XOR<VehicleDocumentUpdateInput, VehicleDocumentUncheckedUpdateInput>
    /**
     * Choose, which VehicleDocument to update.
     */
    where: VehicleDocumentWhereUniqueInput
  }

  /**
   * VehicleDocument updateMany
   */
  export type VehicleDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleDocuments.
     */
    data: XOR<VehicleDocumentUpdateManyMutationInput, VehicleDocumentUncheckedUpdateManyInput>
    /**
     * Filter which VehicleDocuments to update
     */
    where?: VehicleDocumentWhereInput
    /**
     * Limit how many VehicleDocuments to update.
     */
    limit?: number
  }

  /**
   * VehicleDocument updateManyAndReturn
   */
  export type VehicleDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDocument
     */
    select?: VehicleDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDocument
     */
    omit?: VehicleDocumentOmit<ExtArgs> | null
    /**
     * The data used to update VehicleDocuments.
     */
    data: XOR<VehicleDocumentUpdateManyMutationInput, VehicleDocumentUncheckedUpdateManyInput>
    /**
     * Filter which VehicleDocuments to update
     */
    where?: VehicleDocumentWhereInput
    /**
     * Limit how many VehicleDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleDocument upsert
   */
  export type VehicleDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDocument
     */
    select?: VehicleDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDocument
     */
    omit?: VehicleDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleDocument to update in case it exists.
     */
    where: VehicleDocumentWhereUniqueInput
    /**
     * In case the VehicleDocument found by the `where` argument doesn't exist, create a new VehicleDocument with this data.
     */
    create: XOR<VehicleDocumentCreateInput, VehicleDocumentUncheckedCreateInput>
    /**
     * In case the VehicleDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleDocumentUpdateInput, VehicleDocumentUncheckedUpdateInput>
  }

  /**
   * VehicleDocument delete
   */
  export type VehicleDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDocument
     */
    select?: VehicleDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDocument
     */
    omit?: VehicleDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDocumentInclude<ExtArgs> | null
    /**
     * Filter which VehicleDocument to delete.
     */
    where: VehicleDocumentWhereUniqueInput
  }

  /**
   * VehicleDocument deleteMany
   */
  export type VehicleDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleDocuments to delete
     */
    where?: VehicleDocumentWhereInput
    /**
     * Limit how many VehicleDocuments to delete.
     */
    limit?: number
  }

  /**
   * VehicleDocument without action
   */
  export type VehicleDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleDocument
     */
    select?: VehicleDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleDocument
     */
    omit?: VehicleDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleDocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SupportHouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    capacity: 'capacity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupportHouseScalarFieldEnum = (typeof SupportHouseScalarFieldEnum)[keyof typeof SupportHouseScalarFieldEnum]


  export const AccommodationScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    supportHouseId: 'supportHouseId',
    checkInDate: 'checkInDate',
    checkOutDate: 'checkOutDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccommodationScalarFieldEnum = (typeof AccommodationScalarFieldEnum)[keyof typeof AccommodationScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    name: 'name',
    type: 'type',
    size: 'size',
    path: 'path',
    uploadDate: 'uploadDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    email: 'email',
    password: 'password',
    registrationNumber: 'registrationNumber',
    type: 'type',
    supportHouseId: 'supportHouseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    cpf: 'cpf',
    name: 'name',
    birthDate: 'birthDate',
    rg: 'rg',
    type: 'type',
    medicalNotes: 'medicalNotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const PhoneScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    number: 'number',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhoneScalarFieldEnum = (typeof PhoneScalarFieldEnum)[keyof typeof PhoneScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    personId: 'personId',
    street: 'street',
    number: 'number',
    neighborhood: 'neighborhood',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const PatientGuardianScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    companionId: 'companionId',
    patientId: 'patientId',
    relationship: 'relationship',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientGuardianScalarFieldEnum = (typeof PatientGuardianScalarFieldEnum)[keyof typeof PatientGuardianScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    plate: 'plate',
    chassis: 'chassis',
    model: 'model',
    year: 'year',
    color: 'color',
    maxCapacity: 'maxCapacity',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    driverId: 'driverId',
    origin: 'origin',
    destination: 'destination',
    departureDate: 'departureDate',
    arrivalDate: 'arrivalDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const TripPassengerScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    personId: 'personId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripPassengerScalarFieldEnum = (typeof TripPassengerScalarFieldEnum)[keyof typeof TripPassengerScalarFieldEnum]


  export const TripRouteScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    supportHouseId: 'supportHouseId',
    sequence: 'sequence',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripRouteScalarFieldEnum = (typeof TripRouteScalarFieldEnum)[keyof typeof TripRouteScalarFieldEnum]


  export const VehicleDocumentScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    name: 'name',
    type: 'type',
    expiryDate: 'expiryDate',
    size: 'size',
    path: 'path',
    uploadDate: 'uploadDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleDocumentScalarFieldEnum = (typeof VehicleDocumentScalarFieldEnum)[keyof typeof VehicleDocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>
    


  /**
   * Reference to a field of type 'DocumentType[]'
   */
  export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>
    


  /**
   * Reference to a field of type 'EmployeeType'
   */
  export type EnumEmployeeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeType'>
    


  /**
   * Reference to a field of type 'EmployeeType[]'
   */
  export type ListEnumEmployeeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeType[]'>
    


  /**
   * Reference to a field of type 'PersonType'
   */
  export type EnumPersonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PersonType'>
    


  /**
   * Reference to a field of type 'PersonType[]'
   */
  export type ListEnumPersonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PersonType[]'>
    


  /**
   * Reference to a field of type 'Relationship'
   */
  export type EnumRelationshipFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Relationship'>
    


  /**
   * Reference to a field of type 'Relationship[]'
   */
  export type ListEnumRelationshipFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Relationship[]'>
    


  /**
   * Reference to a field of type 'VehicleStatus'
   */
  export type EnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus'>
    


  /**
   * Reference to a field of type 'VehicleStatus[]'
   */
  export type ListEnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus[]'>
    


  /**
   * Reference to a field of type 'TripStatus'
   */
  export type EnumTripStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripStatus'>
    


  /**
   * Reference to a field of type 'TripStatus[]'
   */
  export type ListEnumTripStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripStatus[]'>
    


  /**
   * Reference to a field of type 'VehicleDocumentType'
   */
  export type EnumVehicleDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleDocumentType'>
    


  /**
   * Reference to a field of type 'VehicleDocumentType[]'
   */
  export type ListEnumVehicleDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleDocumentType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SupportHouseWhereInput = {
    AND?: SupportHouseWhereInput | SupportHouseWhereInput[]
    OR?: SupportHouseWhereInput[]
    NOT?: SupportHouseWhereInput | SupportHouseWhereInput[]
    id?: StringFilter<"SupportHouse"> | string
    name?: StringFilter<"SupportHouse"> | string
    address?: StringFilter<"SupportHouse"> | string
    phone?: StringNullableFilter<"SupportHouse"> | string | null
    capacity?: IntNullableFilter<"SupportHouse"> | number | null
    createdAt?: DateTimeFilter<"SupportHouse"> | Date | string
    updatedAt?: DateTimeFilter<"SupportHouse"> | Date | string
    accommodations?: AccommodationListRelationFilter
    employees?: EmployeeListRelationFilter
    tripRoutes?: TripRouteListRelationFilter
  }

  export type SupportHouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accommodations?: AccommodationOrderByRelationAggregateInput
    employees?: EmployeeOrderByRelationAggregateInput
    tripRoutes?: TripRouteOrderByRelationAggregateInput
  }

  export type SupportHouseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupportHouseWhereInput | SupportHouseWhereInput[]
    OR?: SupportHouseWhereInput[]
    NOT?: SupportHouseWhereInput | SupportHouseWhereInput[]
    name?: StringFilter<"SupportHouse"> | string
    address?: StringFilter<"SupportHouse"> | string
    phone?: StringNullableFilter<"SupportHouse"> | string | null
    capacity?: IntNullableFilter<"SupportHouse"> | number | null
    createdAt?: DateTimeFilter<"SupportHouse"> | Date | string
    updatedAt?: DateTimeFilter<"SupportHouse"> | Date | string
    accommodations?: AccommodationListRelationFilter
    employees?: EmployeeListRelationFilter
    tripRoutes?: TripRouteListRelationFilter
  }, "id">

  export type SupportHouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupportHouseCountOrderByAggregateInput
    _avg?: SupportHouseAvgOrderByAggregateInput
    _max?: SupportHouseMaxOrderByAggregateInput
    _min?: SupportHouseMinOrderByAggregateInput
    _sum?: SupportHouseSumOrderByAggregateInput
  }

  export type SupportHouseScalarWhereWithAggregatesInput = {
    AND?: SupportHouseScalarWhereWithAggregatesInput | SupportHouseScalarWhereWithAggregatesInput[]
    OR?: SupportHouseScalarWhereWithAggregatesInput[]
    NOT?: SupportHouseScalarWhereWithAggregatesInput | SupportHouseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupportHouse"> | string
    name?: StringWithAggregatesFilter<"SupportHouse"> | string
    address?: StringWithAggregatesFilter<"SupportHouse"> | string
    phone?: StringNullableWithAggregatesFilter<"SupportHouse"> | string | null
    capacity?: IntNullableWithAggregatesFilter<"SupportHouse"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"SupportHouse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupportHouse"> | Date | string
  }

  export type AccommodationWhereInput = {
    AND?: AccommodationWhereInput | AccommodationWhereInput[]
    OR?: AccommodationWhereInput[]
    NOT?: AccommodationWhereInput | AccommodationWhereInput[]
    id?: StringFilter<"Accommodation"> | string
    personId?: StringFilter<"Accommodation"> | string
    supportHouseId?: StringFilter<"Accommodation"> | string
    checkInDate?: DateTimeFilter<"Accommodation"> | Date | string
    checkOutDate?: DateTimeNullableFilter<"Accommodation"> | Date | string | null
    createdAt?: DateTimeFilter<"Accommodation"> | Date | string
    updatedAt?: DateTimeFilter<"Accommodation"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    supportHouse?: XOR<SupportHouseScalarRelationFilter, SupportHouseWhereInput>
  }

  export type AccommodationOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    supportHouseId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
    supportHouse?: SupportHouseOrderByWithRelationInput
  }

  export type AccommodationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccommodationWhereInput | AccommodationWhereInput[]
    OR?: AccommodationWhereInput[]
    NOT?: AccommodationWhereInput | AccommodationWhereInput[]
    personId?: StringFilter<"Accommodation"> | string
    supportHouseId?: StringFilter<"Accommodation"> | string
    checkInDate?: DateTimeFilter<"Accommodation"> | Date | string
    checkOutDate?: DateTimeNullableFilter<"Accommodation"> | Date | string | null
    createdAt?: DateTimeFilter<"Accommodation"> | Date | string
    updatedAt?: DateTimeFilter<"Accommodation"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    supportHouse?: XOR<SupportHouseScalarRelationFilter, SupportHouseWhereInput>
  }, "id">

  export type AccommodationOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    supportHouseId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccommodationCountOrderByAggregateInput
    _max?: AccommodationMaxOrderByAggregateInput
    _min?: AccommodationMinOrderByAggregateInput
  }

  export type AccommodationScalarWhereWithAggregatesInput = {
    AND?: AccommodationScalarWhereWithAggregatesInput | AccommodationScalarWhereWithAggregatesInput[]
    OR?: AccommodationScalarWhereWithAggregatesInput[]
    NOT?: AccommodationScalarWhereWithAggregatesInput | AccommodationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Accommodation"> | string
    personId?: StringWithAggregatesFilter<"Accommodation"> | string
    supportHouseId?: StringWithAggregatesFilter<"Accommodation"> | string
    checkInDate?: DateTimeWithAggregatesFilter<"Accommodation"> | Date | string
    checkOutDate?: DateTimeNullableWithAggregatesFilter<"Accommodation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Accommodation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Accommodation"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    personId?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    size?: IntFilter<"Document"> | number
    path?: StringFilter<"Document"> | string
    uploadDate?: DateTimeFilter<"Document"> | Date | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    personId?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    size?: IntFilter<"Document"> | number
    path?: StringFilter<"Document"> | string
    uploadDate?: DateTimeFilter<"Document"> | Date | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    personId?: StringWithAggregatesFilter<"Document"> | string
    name?: StringWithAggregatesFilter<"Document"> | string
    type?: EnumDocumentTypeWithAggregatesFilter<"Document"> | $Enums.DocumentType
    size?: IntWithAggregatesFilter<"Document"> | number
    path?: StringWithAggregatesFilter<"Document"> | string
    uploadDate?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    personId?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    registrationNumber?: StringFilter<"Employee"> | string
    type?: EnumEmployeeTypeFilter<"Employee"> | $Enums.EmployeeType
    supportHouseId?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    supportHouse?: XOR<SupportHouseNullableScalarRelationFilter, SupportHouseWhereInput> | null
    trips?: TripListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registrationNumber?: SortOrder
    type?: SortOrder
    supportHouseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
    supportHouse?: SupportHouseOrderByWithRelationInput
    trips?: TripOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    personId?: string
    email?: string
    registrationNumber?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    password?: StringFilter<"Employee"> | string
    type?: EnumEmployeeTypeFilter<"Employee"> | $Enums.EmployeeType
    supportHouseId?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    supportHouse?: XOR<SupportHouseNullableScalarRelationFilter, SupportHouseWhereInput> | null
    trips?: TripListRelationFilter
  }, "id" | "personId" | "email" | "registrationNumber">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registrationNumber?: SortOrder
    type?: SortOrder
    supportHouseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    personId?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
    password?: StringWithAggregatesFilter<"Employee"> | string
    registrationNumber?: StringWithAggregatesFilter<"Employee"> | string
    type?: EnumEmployeeTypeWithAggregatesFilter<"Employee"> | $Enums.EmployeeType
    supportHouseId?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: StringFilter<"Person"> | string
    cpf?: StringFilter<"Person"> | string
    name?: StringFilter<"Person"> | string
    birthDate?: DateTimeFilter<"Person"> | Date | string
    rg?: StringNullableFilter<"Person"> | string | null
    type?: EnumPersonTypeFilter<"Person"> | $Enums.PersonType
    medicalNotes?: StringNullableFilter<"Person"> | string | null
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    phones?: PhoneListRelationFilter
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    documents?: DocumentListRelationFilter
    accommodations?: AccommodationListRelationFilter
    tripPassengers?: TripPassengerListRelationFilter
    companionGuardianships?: PatientGuardianListRelationFilter
    patientGuardianships?: PatientGuardianListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    rg?: SortOrderInput | SortOrder
    type?: SortOrder
    medicalNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phones?: PhoneOrderByRelationAggregateInput
    address?: AddressOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
    accommodations?: AccommodationOrderByRelationAggregateInput
    tripPassengers?: TripPassengerOrderByRelationAggregateInput
    companionGuardianships?: PatientGuardianOrderByRelationAggregateInput
    patientGuardianships?: PatientGuardianOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    name?: StringFilter<"Person"> | string
    birthDate?: DateTimeFilter<"Person"> | Date | string
    rg?: StringNullableFilter<"Person"> | string | null
    type?: EnumPersonTypeFilter<"Person"> | $Enums.PersonType
    medicalNotes?: StringNullableFilter<"Person"> | string | null
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    phones?: PhoneListRelationFilter
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    documents?: DocumentListRelationFilter
    accommodations?: AccommodationListRelationFilter
    tripPassengers?: TripPassengerListRelationFilter
    companionGuardianships?: PatientGuardianListRelationFilter
    patientGuardianships?: PatientGuardianListRelationFilter
  }, "id" | "cpf">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    rg?: SortOrderInput | SortOrder
    type?: SortOrder
    medicalNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Person"> | string
    cpf?: StringWithAggregatesFilter<"Person"> | string
    name?: StringWithAggregatesFilter<"Person"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    rg?: StringNullableWithAggregatesFilter<"Person"> | string | null
    type?: EnumPersonTypeWithAggregatesFilter<"Person"> | $Enums.PersonType
    medicalNotes?: StringNullableWithAggregatesFilter<"Person"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
  }

  export type PhoneWhereInput = {
    AND?: PhoneWhereInput | PhoneWhereInput[]
    OR?: PhoneWhereInput[]
    NOT?: PhoneWhereInput | PhoneWhereInput[]
    id?: StringFilter<"Phone"> | string
    personId?: StringFilter<"Phone"> | string
    number?: StringFilter<"Phone"> | string
    createdAt?: DateTimeFilter<"Phone"> | Date | string
    updatedAt?: DateTimeFilter<"Phone"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type PhoneOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type PhoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhoneWhereInput | PhoneWhereInput[]
    OR?: PhoneWhereInput[]
    NOT?: PhoneWhereInput | PhoneWhereInput[]
    personId?: StringFilter<"Phone"> | string
    number?: StringFilter<"Phone"> | string
    createdAt?: DateTimeFilter<"Phone"> | Date | string
    updatedAt?: DateTimeFilter<"Phone"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id">

  export type PhoneOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhoneCountOrderByAggregateInput
    _max?: PhoneMaxOrderByAggregateInput
    _min?: PhoneMinOrderByAggregateInput
  }

  export type PhoneScalarWhereWithAggregatesInput = {
    AND?: PhoneScalarWhereWithAggregatesInput | PhoneScalarWhereWithAggregatesInput[]
    OR?: PhoneScalarWhereWithAggregatesInput[]
    NOT?: PhoneScalarWhereWithAggregatesInput | PhoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Phone"> | string
    personId?: StringWithAggregatesFilter<"Phone"> | string
    number?: StringWithAggregatesFilter<"Phone"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Phone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Phone"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    personId?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    number?: StringNullableFilter<"Address"> | string | null
    neighborhood?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    zipCode?: StringNullableFilter<"Address"> | string | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    personId?: SortOrder
    street?: SortOrder
    number?: SortOrderInput | SortOrder
    neighborhood?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    personId?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street?: StringFilter<"Address"> | string
    number?: StringNullableFilter<"Address"> | string | null
    neighborhood?: StringNullableFilter<"Address"> | string | null
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    zipCode?: StringNullableFilter<"Address"> | string | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id" | "personId">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    personId?: SortOrder
    street?: SortOrder
    number?: SortOrderInput | SortOrder
    neighborhood?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    personId?: StringWithAggregatesFilter<"Address"> | string
    street?: StringWithAggregatesFilter<"Address"> | string
    number?: StringNullableWithAggregatesFilter<"Address"> | string | null
    neighborhood?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    zipCode?: StringNullableWithAggregatesFilter<"Address"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type PatientGuardianWhereInput = {
    AND?: PatientGuardianWhereInput | PatientGuardianWhereInput[]
    OR?: PatientGuardianWhereInput[]
    NOT?: PatientGuardianWhereInput | PatientGuardianWhereInput[]
    id?: StringFilter<"PatientGuardian"> | string
    tripId?: StringFilter<"PatientGuardian"> | string
    companionId?: StringFilter<"PatientGuardian"> | string
    patientId?: StringFilter<"PatientGuardian"> | string
    relationship?: EnumRelationshipFilter<"PatientGuardian"> | $Enums.Relationship
    createdAt?: DateTimeFilter<"PatientGuardian"> | Date | string
    updatedAt?: DateTimeFilter<"PatientGuardian"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    companion?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    patient?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type PatientGuardianOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    companionId?: SortOrder
    patientId?: SortOrder
    relationship?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trip?: TripOrderByWithRelationInput
    companion?: PersonOrderByWithRelationInput
    patient?: PersonOrderByWithRelationInput
  }

  export type PatientGuardianWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tripId_companionId_patientId?: PatientGuardianTripIdCompanionIdPatientIdCompoundUniqueInput
    AND?: PatientGuardianWhereInput | PatientGuardianWhereInput[]
    OR?: PatientGuardianWhereInput[]
    NOT?: PatientGuardianWhereInput | PatientGuardianWhereInput[]
    tripId?: StringFilter<"PatientGuardian"> | string
    companionId?: StringFilter<"PatientGuardian"> | string
    patientId?: StringFilter<"PatientGuardian"> | string
    relationship?: EnumRelationshipFilter<"PatientGuardian"> | $Enums.Relationship
    createdAt?: DateTimeFilter<"PatientGuardian"> | Date | string
    updatedAt?: DateTimeFilter<"PatientGuardian"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    companion?: XOR<PersonScalarRelationFilter, PersonWhereInput>
    patient?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id" | "tripId_companionId_patientId">

  export type PatientGuardianOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    companionId?: SortOrder
    patientId?: SortOrder
    relationship?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientGuardianCountOrderByAggregateInput
    _max?: PatientGuardianMaxOrderByAggregateInput
    _min?: PatientGuardianMinOrderByAggregateInput
  }

  export type PatientGuardianScalarWhereWithAggregatesInput = {
    AND?: PatientGuardianScalarWhereWithAggregatesInput | PatientGuardianScalarWhereWithAggregatesInput[]
    OR?: PatientGuardianScalarWhereWithAggregatesInput[]
    NOT?: PatientGuardianScalarWhereWithAggregatesInput | PatientGuardianScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientGuardian"> | string
    tripId?: StringWithAggregatesFilter<"PatientGuardian"> | string
    companionId?: StringWithAggregatesFilter<"PatientGuardian"> | string
    patientId?: StringWithAggregatesFilter<"PatientGuardian"> | string
    relationship?: EnumRelationshipWithAggregatesFilter<"PatientGuardian"> | $Enums.Relationship
    createdAt?: DateTimeWithAggregatesFilter<"PatientGuardian"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PatientGuardian"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    plate?: StringFilter<"Vehicle"> | string
    chassis?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    color?: StringFilter<"Vehicle"> | string
    maxCapacity?: IntFilter<"Vehicle"> | number
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    trips?: TripListRelationFilter
    documents?: VehicleDocumentListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    plate?: SortOrder
    chassis?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    maxCapacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trips?: TripOrderByRelationAggregateInput
    documents?: VehicleDocumentOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plate?: string
    chassis?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    model?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    color?: StringFilter<"Vehicle"> | string
    maxCapacity?: IntFilter<"Vehicle"> | number
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    trips?: TripListRelationFilter
    documents?: VehicleDocumentListRelationFilter
  }, "id" | "plate" | "chassis">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    plate?: SortOrder
    chassis?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    maxCapacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    plate?: StringWithAggregatesFilter<"Vehicle"> | string
    chassis?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    year?: IntWithAggregatesFilter<"Vehicle"> | number
    color?: StringWithAggregatesFilter<"Vehicle"> | string
    maxCapacity?: IntWithAggregatesFilter<"Vehicle"> | number
    status?: EnumVehicleStatusWithAggregatesFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: StringFilter<"Trip"> | string
    vehicleId?: StringFilter<"Trip"> | string
    driverId?: StringFilter<"Trip"> | string
    origin?: StringFilter<"Trip"> | string
    destination?: StringFilter<"Trip"> | string
    departureDate?: DateTimeFilter<"Trip"> | Date | string
    arrivalDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    driver?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    passengers?: TripPassengerListRelationFilter
    patientGuardians?: PatientGuardianListRelationFilter
    routes?: TripRouteListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    departureDate?: SortOrder
    arrivalDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    driver?: EmployeeOrderByWithRelationInput
    passengers?: TripPassengerOrderByRelationAggregateInput
    patientGuardians?: PatientGuardianOrderByRelationAggregateInput
    routes?: TripRouteOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    vehicleId?: StringFilter<"Trip"> | string
    driverId?: StringFilter<"Trip"> | string
    origin?: StringFilter<"Trip"> | string
    destination?: StringFilter<"Trip"> | string
    departureDate?: DateTimeFilter<"Trip"> | Date | string
    arrivalDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    driver?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    passengers?: TripPassengerListRelationFilter
    patientGuardians?: PatientGuardianListRelationFilter
    routes?: TripRouteListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    departureDate?: SortOrder
    arrivalDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trip"> | string
    vehicleId?: StringWithAggregatesFilter<"Trip"> | string
    driverId?: StringWithAggregatesFilter<"Trip"> | string
    origin?: StringWithAggregatesFilter<"Trip"> | string
    destination?: StringWithAggregatesFilter<"Trip"> | string
    departureDate?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    arrivalDate?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    status?: EnumTripStatusWithAggregatesFilter<"Trip"> | $Enums.TripStatus
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type TripPassengerWhereInput = {
    AND?: TripPassengerWhereInput | TripPassengerWhereInput[]
    OR?: TripPassengerWhereInput[]
    NOT?: TripPassengerWhereInput | TripPassengerWhereInput[]
    id?: StringFilter<"TripPassenger"> | string
    tripId?: StringFilter<"TripPassenger"> | string
    personId?: StringFilter<"TripPassenger"> | string
    createdAt?: DateTimeFilter<"TripPassenger"> | Date | string
    updatedAt?: DateTimeFilter<"TripPassenger"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type TripPassengerOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    personId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trip?: TripOrderByWithRelationInput
    person?: PersonOrderByWithRelationInput
  }

  export type TripPassengerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tripId_personId?: TripPassengerTripIdPersonIdCompoundUniqueInput
    AND?: TripPassengerWhereInput | TripPassengerWhereInput[]
    OR?: TripPassengerWhereInput[]
    NOT?: TripPassengerWhereInput | TripPassengerWhereInput[]
    tripId?: StringFilter<"TripPassenger"> | string
    personId?: StringFilter<"TripPassenger"> | string
    createdAt?: DateTimeFilter<"TripPassenger"> | Date | string
    updatedAt?: DateTimeFilter<"TripPassenger"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id" | "tripId_personId">

  export type TripPassengerOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    personId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripPassengerCountOrderByAggregateInput
    _max?: TripPassengerMaxOrderByAggregateInput
    _min?: TripPassengerMinOrderByAggregateInput
  }

  export type TripPassengerScalarWhereWithAggregatesInput = {
    AND?: TripPassengerScalarWhereWithAggregatesInput | TripPassengerScalarWhereWithAggregatesInput[]
    OR?: TripPassengerScalarWhereWithAggregatesInput[]
    NOT?: TripPassengerScalarWhereWithAggregatesInput | TripPassengerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripPassenger"> | string
    tripId?: StringWithAggregatesFilter<"TripPassenger"> | string
    personId?: StringWithAggregatesFilter<"TripPassenger"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TripPassenger"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripPassenger"> | Date | string
  }

  export type TripRouteWhereInput = {
    AND?: TripRouteWhereInput | TripRouteWhereInput[]
    OR?: TripRouteWhereInput[]
    NOT?: TripRouteWhereInput | TripRouteWhereInput[]
    id?: StringFilter<"TripRoute"> | string
    tripId?: StringFilter<"TripRoute"> | string
    supportHouseId?: StringFilter<"TripRoute"> | string
    sequence?: IntFilter<"TripRoute"> | number
    createdAt?: DateTimeFilter<"TripRoute"> | Date | string
    updatedAt?: DateTimeFilter<"TripRoute"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    supportHouse?: XOR<SupportHouseScalarRelationFilter, SupportHouseWhereInput>
  }

  export type TripRouteOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    supportHouseId?: SortOrder
    sequence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trip?: TripOrderByWithRelationInput
    supportHouse?: SupportHouseOrderByWithRelationInput
  }

  export type TripRouteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tripId_supportHouseId?: TripRouteTripIdSupportHouseIdCompoundUniqueInput
    AND?: TripRouteWhereInput | TripRouteWhereInput[]
    OR?: TripRouteWhereInput[]
    NOT?: TripRouteWhereInput | TripRouteWhereInput[]
    tripId?: StringFilter<"TripRoute"> | string
    supportHouseId?: StringFilter<"TripRoute"> | string
    sequence?: IntFilter<"TripRoute"> | number
    createdAt?: DateTimeFilter<"TripRoute"> | Date | string
    updatedAt?: DateTimeFilter<"TripRoute"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    supportHouse?: XOR<SupportHouseScalarRelationFilter, SupportHouseWhereInput>
  }, "id" | "tripId_supportHouseId">

  export type TripRouteOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    supportHouseId?: SortOrder
    sequence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripRouteCountOrderByAggregateInput
    _avg?: TripRouteAvgOrderByAggregateInput
    _max?: TripRouteMaxOrderByAggregateInput
    _min?: TripRouteMinOrderByAggregateInput
    _sum?: TripRouteSumOrderByAggregateInput
  }

  export type TripRouteScalarWhereWithAggregatesInput = {
    AND?: TripRouteScalarWhereWithAggregatesInput | TripRouteScalarWhereWithAggregatesInput[]
    OR?: TripRouteScalarWhereWithAggregatesInput[]
    NOT?: TripRouteScalarWhereWithAggregatesInput | TripRouteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TripRoute"> | string
    tripId?: StringWithAggregatesFilter<"TripRoute"> | string
    supportHouseId?: StringWithAggregatesFilter<"TripRoute"> | string
    sequence?: IntWithAggregatesFilter<"TripRoute"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TripRoute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripRoute"> | Date | string
  }

  export type VehicleDocumentWhereInput = {
    AND?: VehicleDocumentWhereInput | VehicleDocumentWhereInput[]
    OR?: VehicleDocumentWhereInput[]
    NOT?: VehicleDocumentWhereInput | VehicleDocumentWhereInput[]
    id?: StringFilter<"VehicleDocument"> | string
    vehicleId?: StringFilter<"VehicleDocument"> | string
    name?: StringFilter<"VehicleDocument"> | string
    type?: EnumVehicleDocumentTypeFilter<"VehicleDocument"> | $Enums.VehicleDocumentType
    expiryDate?: DateTimeNullableFilter<"VehicleDocument"> | Date | string | null
    size?: IntFilter<"VehicleDocument"> | number
    path?: StringFilter<"VehicleDocument"> | string
    uploadDate?: DateTimeFilter<"VehicleDocument"> | Date | string
    createdAt?: DateTimeFilter<"VehicleDocument"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleDocument"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type VehicleDocumentOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type VehicleDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VehicleDocumentWhereInput | VehicleDocumentWhereInput[]
    OR?: VehicleDocumentWhereInput[]
    NOT?: VehicleDocumentWhereInput | VehicleDocumentWhereInput[]
    vehicleId?: StringFilter<"VehicleDocument"> | string
    name?: StringFilter<"VehicleDocument"> | string
    type?: EnumVehicleDocumentTypeFilter<"VehicleDocument"> | $Enums.VehicleDocumentType
    expiryDate?: DateTimeNullableFilter<"VehicleDocument"> | Date | string | null
    size?: IntFilter<"VehicleDocument"> | number
    path?: StringFilter<"VehicleDocument"> | string
    uploadDate?: DateTimeFilter<"VehicleDocument"> | Date | string
    createdAt?: DateTimeFilter<"VehicleDocument"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleDocument"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "id">

  export type VehicleDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    expiryDate?: SortOrderInput | SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleDocumentCountOrderByAggregateInput
    _avg?: VehicleDocumentAvgOrderByAggregateInput
    _max?: VehicleDocumentMaxOrderByAggregateInput
    _min?: VehicleDocumentMinOrderByAggregateInput
    _sum?: VehicleDocumentSumOrderByAggregateInput
  }

  export type VehicleDocumentScalarWhereWithAggregatesInput = {
    AND?: VehicleDocumentScalarWhereWithAggregatesInput | VehicleDocumentScalarWhereWithAggregatesInput[]
    OR?: VehicleDocumentScalarWhereWithAggregatesInput[]
    NOT?: VehicleDocumentScalarWhereWithAggregatesInput | VehicleDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VehicleDocument"> | string
    vehicleId?: StringWithAggregatesFilter<"VehicleDocument"> | string
    name?: StringWithAggregatesFilter<"VehicleDocument"> | string
    type?: EnumVehicleDocumentTypeWithAggregatesFilter<"VehicleDocument"> | $Enums.VehicleDocumentType
    expiryDate?: DateTimeNullableWithAggregatesFilter<"VehicleDocument"> | Date | string | null
    size?: IntWithAggregatesFilter<"VehicleDocument"> | number
    path?: StringWithAggregatesFilter<"VehicleDocument"> | string
    uploadDate?: DateTimeWithAggregatesFilter<"VehicleDocument"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"VehicleDocument"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VehicleDocument"> | Date | string
  }

  export type SupportHouseCreateInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    capacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accommodations?: AccommodationCreateNestedManyWithoutSupportHouseInput
    employees?: EmployeeCreateNestedManyWithoutSupportHouseInput
    tripRoutes?: TripRouteCreateNestedManyWithoutSupportHouseInput
  }

  export type SupportHouseUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    capacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accommodations?: AccommodationUncheckedCreateNestedManyWithoutSupportHouseInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutSupportHouseInput
    tripRoutes?: TripRouteUncheckedCreateNestedManyWithoutSupportHouseInput
  }

  export type SupportHouseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accommodations?: AccommodationUpdateManyWithoutSupportHouseNestedInput
    employees?: EmployeeUpdateManyWithoutSupportHouseNestedInput
    tripRoutes?: TripRouteUpdateManyWithoutSupportHouseNestedInput
  }

  export type SupportHouseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accommodations?: AccommodationUncheckedUpdateManyWithoutSupportHouseNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutSupportHouseNestedInput
    tripRoutes?: TripRouteUncheckedUpdateManyWithoutSupportHouseNestedInput
  }

  export type SupportHouseCreateManyInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    capacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportHouseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportHouseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccommodationCreateInput = {
    id?: string
    checkInDate: Date | string
    checkOutDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutAccommodationsInput
    supportHouse: SupportHouseCreateNestedOneWithoutAccommodationsInput
  }

  export type AccommodationUncheckedCreateInput = {
    id?: string
    personId: string
    supportHouseId: string
    checkInDate: Date | string
    checkOutDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccommodationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutAccommodationsNestedInput
    supportHouse?: SupportHouseUpdateOneRequiredWithoutAccommodationsNestedInput
  }

  export type AccommodationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    supportHouseId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccommodationCreateManyInput = {
    id?: string
    personId: string
    supportHouseId: string
    checkInDate: Date | string
    checkOutDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccommodationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccommodationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    supportHouseId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    name: string
    type: $Enums.DocumentType
    size: number
    path: string
    uploadDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    personId: string
    name: string
    type: $Enums.DocumentType
    size: number
    path: string
    uploadDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    personId: string
    name: string
    type: $Enums.DocumentType
    size: number
    path: string
    uploadDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    email: string
    password: string
    registrationNumber: string
    type: $Enums.EmployeeType
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutEmployeeInput
    supportHouse?: SupportHouseCreateNestedOneWithoutEmployeesInput
    trips?: TripCreateNestedManyWithoutDriverInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    personId: string
    email: string
    password: string
    registrationNumber: string
    type: $Enums.EmployeeType
    supportHouseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutDriverInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutEmployeeNestedInput
    supportHouse?: SupportHouseUpdateOneWithoutEmployeesNestedInput
    trips?: TripUpdateManyWithoutDriverNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    supportHouseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    personId: string
    email: string
    password: string
    registrationNumber: string
    type: $Enums.EmployeeType
    supportHouseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    supportHouseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneCreateNestedManyWithoutPersonInput
    address?: AddressCreateNestedOneWithoutPersonInput
    employee?: EmployeeCreateNestedOneWithoutPersonInput
    documents?: DocumentCreateNestedManyWithoutPersonInput
    accommodations?: AccommodationCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianCreateNestedManyWithoutCompanionInput
    patientGuardianships?: PatientGuardianCreateNestedManyWithoutPatientInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneUncheckedCreateNestedManyWithoutPersonInput
    address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutPersonInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPersonInput
    accommodations?: AccommodationUncheckedCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerUncheckedCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutCompanionInput
    patientGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUpdateManyWithoutPersonNestedInput
    address?: AddressUpdateOneWithoutPersonNestedInput
    employee?: EmployeeUpdateOneWithoutPersonNestedInput
    documents?: DocumentUpdateManyWithoutPersonNestedInput
    accommodations?: AccommodationUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUpdateManyWithoutCompanionNestedInput
    patientGuardianships?: PatientGuardianUpdateManyWithoutPatientNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUncheckedUpdateManyWithoutPersonNestedInput
    address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutPersonNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPersonNestedInput
    accommodations?: AccommodationUncheckedUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUncheckedUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUncheckedUpdateManyWithoutCompanionNestedInput
    patientGuardianships?: PatientGuardianUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneCreateInput = {
    id?: string
    number: string
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutPhonesInput
  }

  export type PhoneUncheckedCreateInput = {
    id?: string
    personId: string
    number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutPhonesNestedInput
  }

  export type PhoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneCreateManyInput = {
    id?: string
    personId: string
    number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    id?: string
    street: string
    number?: string | null
    neighborhood?: string | null
    city: string
    state: string
    zipCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    personId: string
    street: string
    number?: string | null
    neighborhood?: string | null
    city: string
    state: string
    zipCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateManyInput = {
    id?: string
    personId: string
    street: string
    number?: string | null
    neighborhood?: string | null
    city: string
    state: string
    zipCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientGuardianCreateInput = {
    id?: string
    relationship: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutPatientGuardiansInput
    companion: PersonCreateNestedOneWithoutCompanionGuardianshipsInput
    patient: PersonCreateNestedOneWithoutPatientGuardianshipsInput
  }

  export type PatientGuardianUncheckedCreateInput = {
    id?: string
    tripId: string
    companionId: string
    patientId: string
    relationship: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientGuardianUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutPatientGuardiansNestedInput
    companion?: PersonUpdateOneRequiredWithoutCompanionGuardianshipsNestedInput
    patient?: PersonUpdateOneRequiredWithoutPatientGuardianshipsNestedInput
  }

  export type PatientGuardianUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    companionId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientGuardianCreateManyInput = {
    id?: string
    tripId: string
    companionId: string
    patientId: string
    relationship: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientGuardianUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientGuardianUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    companionId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    id?: string
    plate: string
    chassis: string
    model: string
    year: number
    color: string
    maxCapacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutVehicleInput
    documents?: VehicleDocumentCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    plate: string
    chassis: string
    model: string
    year: number
    color: string
    maxCapacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
    documents?: VehicleDocumentUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    chassis?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    maxCapacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutVehicleNestedInput
    documents?: VehicleDocumentUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    chassis?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    maxCapacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
    documents?: VehicleDocumentUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    plate: string
    chassis: string
    model: string
    year: number
    color: string
    maxCapacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    chassis?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    maxCapacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    chassis?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    maxCapacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    id?: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    driver: EmployeeCreateNestedOneWithoutTripsInput
    passengers?: TripPassengerCreateNestedManyWithoutTripInput
    patientGuardians?: PatientGuardianCreateNestedManyWithoutTripInput
    routes?: TripRouteCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    vehicleId: string
    driverId: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    passengers?: TripPassengerUncheckedCreateNestedManyWithoutTripInput
    patientGuardians?: PatientGuardianUncheckedCreateNestedManyWithoutTripInput
    routes?: TripRouteUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    driver?: EmployeeUpdateOneRequiredWithoutTripsNestedInput
    passengers?: TripPassengerUpdateManyWithoutTripNestedInput
    patientGuardians?: PatientGuardianUpdateManyWithoutTripNestedInput
    routes?: TripRouteUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passengers?: TripPassengerUncheckedUpdateManyWithoutTripNestedInput
    patientGuardians?: PatientGuardianUncheckedUpdateManyWithoutTripNestedInput
    routes?: TripRouteUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    vehicleId: string
    driverId: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPassengerCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutPassengersInput
    person: PersonCreateNestedOneWithoutTripPassengersInput
  }

  export type TripPassengerUncheckedCreateInput = {
    id?: string
    tripId: string
    personId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPassengerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutPassengersNestedInput
    person?: PersonUpdateOneRequiredWithoutTripPassengersNestedInput
  }

  export type TripPassengerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPassengerCreateManyInput = {
    id?: string
    tripId: string
    personId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPassengerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPassengerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripRouteCreateInput = {
    id?: string
    sequence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutRoutesInput
    supportHouse: SupportHouseCreateNestedOneWithoutTripRoutesInput
  }

  export type TripRouteUncheckedCreateInput = {
    id?: string
    tripId: string
    supportHouseId: string
    sequence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripRouteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutRoutesNestedInput
    supportHouse?: SupportHouseUpdateOneRequiredWithoutTripRoutesNestedInput
  }

  export type TripRouteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    supportHouseId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripRouteCreateManyInput = {
    id?: string
    tripId: string
    supportHouseId: string
    sequence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripRouteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripRouteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    supportHouseId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleDocumentCreateInput = {
    id?: string
    name: string
    type: $Enums.VehicleDocumentType
    expiryDate?: Date | string | null
    size: number
    path: string
    uploadDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutDocumentsInput
  }

  export type VehicleDocumentUncheckedCreateInput = {
    id?: string
    vehicleId: string
    name: string
    type: $Enums.VehicleDocumentType
    expiryDate?: Date | string | null
    size: number
    path: string
    uploadDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleDocumentTypeFieldUpdateOperationsInput | $Enums.VehicleDocumentType
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type VehicleDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleDocumentTypeFieldUpdateOperationsInput | $Enums.VehicleDocumentType
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleDocumentCreateManyInput = {
    id?: string
    vehicleId: string
    name: string
    type: $Enums.VehicleDocumentType
    expiryDate?: Date | string | null
    size: number
    path: string
    uploadDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleDocumentTypeFieldUpdateOperationsInput | $Enums.VehicleDocumentType
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleDocumentTypeFieldUpdateOperationsInput | $Enums.VehicleDocumentType
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccommodationListRelationFilter = {
    every?: AccommodationWhereInput
    some?: AccommodationWhereInput
    none?: AccommodationWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type TripRouteListRelationFilter = {
    every?: TripRouteWhereInput
    some?: TripRouteWhereInput
    none?: TripRouteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccommodationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripRouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupportHouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportHouseAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type SupportHouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportHouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportHouseSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PersonScalarRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type SupportHouseScalarRelationFilter = {
    is?: SupportHouseWhereInput
    isNot?: SupportHouseWhereInput
  }

  export type AccommodationCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    supportHouseId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccommodationMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    supportHouseId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccommodationMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    supportHouseId?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumEmployeeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeTypeFilter<$PrismaModel> | $Enums.EmployeeType
  }

  export type SupportHouseNullableScalarRelationFilter = {
    is?: SupportHouseWhereInput | null
    isNot?: SupportHouseWhereInput | null
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registrationNumber?: SortOrder
    type?: SortOrder
    supportHouseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registrationNumber?: SortOrder
    type?: SortOrder
    supportHouseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registrationNumber?: SortOrder
    type?: SortOrder
    supportHouseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEmployeeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeTypeFilter<$PrismaModel>
    _max?: NestedEnumEmployeeTypeFilter<$PrismaModel>
  }

  export type EnumPersonTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonType | EnumPersonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonTypeFilter<$PrismaModel> | $Enums.PersonType
  }

  export type PhoneListRelationFilter = {
    every?: PhoneWhereInput
    some?: PhoneWhereInput
    none?: PhoneWhereInput
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type TripPassengerListRelationFilter = {
    every?: TripPassengerWhereInput
    some?: TripPassengerWhereInput
    none?: TripPassengerWhereInput
  }

  export type PatientGuardianListRelationFilter = {
    every?: PatientGuardianWhereInput
    some?: PatientGuardianWhereInput
    none?: PatientGuardianWhereInput
  }

  export type PhoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripPassengerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientGuardianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    rg?: SortOrder
    type?: SortOrder
    medicalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    rg?: SortOrder
    type?: SortOrder
    medicalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    rg?: SortOrder
    type?: SortOrder
    medicalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPersonTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonType | EnumPersonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonTypeWithAggregatesFilter<$PrismaModel> | $Enums.PersonType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPersonTypeFilter<$PrismaModel>
    _max?: NestedEnumPersonTypeFilter<$PrismaModel>
  }

  export type PhoneCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    street?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    street?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    personId?: SortOrder
    street?: SortOrder
    number?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRelationshipFilter<$PrismaModel = never> = {
    equals?: $Enums.Relationship | EnumRelationshipFieldRefInput<$PrismaModel>
    in?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    notIn?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipFilter<$PrismaModel> | $Enums.Relationship
  }

  export type TripScalarRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type PatientGuardianTripIdCompanionIdPatientIdCompoundUniqueInput = {
    tripId: string
    companionId: string
    patientId: string
  }

  export type PatientGuardianCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    companionId?: SortOrder
    patientId?: SortOrder
    relationship?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientGuardianMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    companionId?: SortOrder
    patientId?: SortOrder
    relationship?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientGuardianMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    companionId?: SortOrder
    patientId?: SortOrder
    relationship?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRelationshipWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Relationship | EnumRelationshipFieldRefInput<$PrismaModel>
    in?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    notIn?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipWithAggregatesFilter<$PrismaModel> | $Enums.Relationship
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipFilter<$PrismaModel>
    _max?: NestedEnumRelationshipFilter<$PrismaModel>
  }

  export type EnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type VehicleDocumentListRelationFilter = {
    every?: VehicleDocumentWhereInput
    some?: VehicleDocumentWhereInput
    none?: VehicleDocumentWhereInput
  }

  export type VehicleDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    chassis?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    maxCapacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    year?: SortOrder
    maxCapacity?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    chassis?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    maxCapacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    chassis?: SortOrder
    model?: SortOrder
    year?: SortOrder
    color?: SortOrder
    maxCapacity?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    year?: SortOrder
    maxCapacity?: SortOrder
  }

  export type EnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type EnumTripStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusFilter<$PrismaModel> | $Enums.TripStatus
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    departureDate?: SortOrder
    arrivalDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    departureDate?: SortOrder
    arrivalDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    departureDate?: SortOrder
    arrivalDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTripStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusWithAggregatesFilter<$PrismaModel> | $Enums.TripStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripStatusFilter<$PrismaModel>
    _max?: NestedEnumTripStatusFilter<$PrismaModel>
  }

  export type TripPassengerTripIdPersonIdCompoundUniqueInput = {
    tripId: string
    personId: string
  }

  export type TripPassengerCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    personId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPassengerMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    personId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripPassengerMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    personId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripRouteTripIdSupportHouseIdCompoundUniqueInput = {
    tripId: string
    supportHouseId: string
  }

  export type TripRouteCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    supportHouseId?: SortOrder
    sequence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripRouteAvgOrderByAggregateInput = {
    sequence?: SortOrder
  }

  export type TripRouteMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    supportHouseId?: SortOrder
    sequence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripRouteMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    supportHouseId?: SortOrder
    sequence?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripRouteSumOrderByAggregateInput = {
    sequence?: SortOrder
  }

  export type EnumVehicleDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleDocumentType | EnumVehicleDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleDocumentType[] | ListEnumVehicleDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleDocumentType[] | ListEnumVehicleDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleDocumentTypeFilter<$PrismaModel> | $Enums.VehicleDocumentType
  }

  export type VehicleDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    expiryDate?: SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleDocumentAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type VehicleDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    expiryDate?: SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    expiryDate?: SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleDocumentSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type EnumVehicleDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleDocumentType | EnumVehicleDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleDocumentType[] | ListEnumVehicleDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleDocumentType[] | ListEnumVehicleDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleDocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleDocumentTypeFilter<$PrismaModel>
  }

  export type AccommodationCreateNestedManyWithoutSupportHouseInput = {
    create?: XOR<AccommodationCreateWithoutSupportHouseInput, AccommodationUncheckedCreateWithoutSupportHouseInput> | AccommodationCreateWithoutSupportHouseInput[] | AccommodationUncheckedCreateWithoutSupportHouseInput[]
    connectOrCreate?: AccommodationCreateOrConnectWithoutSupportHouseInput | AccommodationCreateOrConnectWithoutSupportHouseInput[]
    createMany?: AccommodationCreateManySupportHouseInputEnvelope
    connect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
  }

  export type EmployeeCreateNestedManyWithoutSupportHouseInput = {
    create?: XOR<EmployeeCreateWithoutSupportHouseInput, EmployeeUncheckedCreateWithoutSupportHouseInput> | EmployeeCreateWithoutSupportHouseInput[] | EmployeeUncheckedCreateWithoutSupportHouseInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutSupportHouseInput | EmployeeCreateOrConnectWithoutSupportHouseInput[]
    createMany?: EmployeeCreateManySupportHouseInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type TripRouteCreateNestedManyWithoutSupportHouseInput = {
    create?: XOR<TripRouteCreateWithoutSupportHouseInput, TripRouteUncheckedCreateWithoutSupportHouseInput> | TripRouteCreateWithoutSupportHouseInput[] | TripRouteUncheckedCreateWithoutSupportHouseInput[]
    connectOrCreate?: TripRouteCreateOrConnectWithoutSupportHouseInput | TripRouteCreateOrConnectWithoutSupportHouseInput[]
    createMany?: TripRouteCreateManySupportHouseInputEnvelope
    connect?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
  }

  export type AccommodationUncheckedCreateNestedManyWithoutSupportHouseInput = {
    create?: XOR<AccommodationCreateWithoutSupportHouseInput, AccommodationUncheckedCreateWithoutSupportHouseInput> | AccommodationCreateWithoutSupportHouseInput[] | AccommodationUncheckedCreateWithoutSupportHouseInput[]
    connectOrCreate?: AccommodationCreateOrConnectWithoutSupportHouseInput | AccommodationCreateOrConnectWithoutSupportHouseInput[]
    createMany?: AccommodationCreateManySupportHouseInputEnvelope
    connect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutSupportHouseInput = {
    create?: XOR<EmployeeCreateWithoutSupportHouseInput, EmployeeUncheckedCreateWithoutSupportHouseInput> | EmployeeCreateWithoutSupportHouseInput[] | EmployeeUncheckedCreateWithoutSupportHouseInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutSupportHouseInput | EmployeeCreateOrConnectWithoutSupportHouseInput[]
    createMany?: EmployeeCreateManySupportHouseInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type TripRouteUncheckedCreateNestedManyWithoutSupportHouseInput = {
    create?: XOR<TripRouteCreateWithoutSupportHouseInput, TripRouteUncheckedCreateWithoutSupportHouseInput> | TripRouteCreateWithoutSupportHouseInput[] | TripRouteUncheckedCreateWithoutSupportHouseInput[]
    connectOrCreate?: TripRouteCreateOrConnectWithoutSupportHouseInput | TripRouteCreateOrConnectWithoutSupportHouseInput[]
    createMany?: TripRouteCreateManySupportHouseInputEnvelope
    connect?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccommodationUpdateManyWithoutSupportHouseNestedInput = {
    create?: XOR<AccommodationCreateWithoutSupportHouseInput, AccommodationUncheckedCreateWithoutSupportHouseInput> | AccommodationCreateWithoutSupportHouseInput[] | AccommodationUncheckedCreateWithoutSupportHouseInput[]
    connectOrCreate?: AccommodationCreateOrConnectWithoutSupportHouseInput | AccommodationCreateOrConnectWithoutSupportHouseInput[]
    upsert?: AccommodationUpsertWithWhereUniqueWithoutSupportHouseInput | AccommodationUpsertWithWhereUniqueWithoutSupportHouseInput[]
    createMany?: AccommodationCreateManySupportHouseInputEnvelope
    set?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    disconnect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    delete?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    connect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    update?: AccommodationUpdateWithWhereUniqueWithoutSupportHouseInput | AccommodationUpdateWithWhereUniqueWithoutSupportHouseInput[]
    updateMany?: AccommodationUpdateManyWithWhereWithoutSupportHouseInput | AccommodationUpdateManyWithWhereWithoutSupportHouseInput[]
    deleteMany?: AccommodationScalarWhereInput | AccommodationScalarWhereInput[]
  }

  export type EmployeeUpdateManyWithoutSupportHouseNestedInput = {
    create?: XOR<EmployeeCreateWithoutSupportHouseInput, EmployeeUncheckedCreateWithoutSupportHouseInput> | EmployeeCreateWithoutSupportHouseInput[] | EmployeeUncheckedCreateWithoutSupportHouseInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutSupportHouseInput | EmployeeCreateOrConnectWithoutSupportHouseInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutSupportHouseInput | EmployeeUpsertWithWhereUniqueWithoutSupportHouseInput[]
    createMany?: EmployeeCreateManySupportHouseInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutSupportHouseInput | EmployeeUpdateWithWhereUniqueWithoutSupportHouseInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutSupportHouseInput | EmployeeUpdateManyWithWhereWithoutSupportHouseInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type TripRouteUpdateManyWithoutSupportHouseNestedInput = {
    create?: XOR<TripRouteCreateWithoutSupportHouseInput, TripRouteUncheckedCreateWithoutSupportHouseInput> | TripRouteCreateWithoutSupportHouseInput[] | TripRouteUncheckedCreateWithoutSupportHouseInput[]
    connectOrCreate?: TripRouteCreateOrConnectWithoutSupportHouseInput | TripRouteCreateOrConnectWithoutSupportHouseInput[]
    upsert?: TripRouteUpsertWithWhereUniqueWithoutSupportHouseInput | TripRouteUpsertWithWhereUniqueWithoutSupportHouseInput[]
    createMany?: TripRouteCreateManySupportHouseInputEnvelope
    set?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    disconnect?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    delete?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    connect?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    update?: TripRouteUpdateWithWhereUniqueWithoutSupportHouseInput | TripRouteUpdateWithWhereUniqueWithoutSupportHouseInput[]
    updateMany?: TripRouteUpdateManyWithWhereWithoutSupportHouseInput | TripRouteUpdateManyWithWhereWithoutSupportHouseInput[]
    deleteMany?: TripRouteScalarWhereInput | TripRouteScalarWhereInput[]
  }

  export type AccommodationUncheckedUpdateManyWithoutSupportHouseNestedInput = {
    create?: XOR<AccommodationCreateWithoutSupportHouseInput, AccommodationUncheckedCreateWithoutSupportHouseInput> | AccommodationCreateWithoutSupportHouseInput[] | AccommodationUncheckedCreateWithoutSupportHouseInput[]
    connectOrCreate?: AccommodationCreateOrConnectWithoutSupportHouseInput | AccommodationCreateOrConnectWithoutSupportHouseInput[]
    upsert?: AccommodationUpsertWithWhereUniqueWithoutSupportHouseInput | AccommodationUpsertWithWhereUniqueWithoutSupportHouseInput[]
    createMany?: AccommodationCreateManySupportHouseInputEnvelope
    set?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    disconnect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    delete?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    connect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    update?: AccommodationUpdateWithWhereUniqueWithoutSupportHouseInput | AccommodationUpdateWithWhereUniqueWithoutSupportHouseInput[]
    updateMany?: AccommodationUpdateManyWithWhereWithoutSupportHouseInput | AccommodationUpdateManyWithWhereWithoutSupportHouseInput[]
    deleteMany?: AccommodationScalarWhereInput | AccommodationScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutSupportHouseNestedInput = {
    create?: XOR<EmployeeCreateWithoutSupportHouseInput, EmployeeUncheckedCreateWithoutSupportHouseInput> | EmployeeCreateWithoutSupportHouseInput[] | EmployeeUncheckedCreateWithoutSupportHouseInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutSupportHouseInput | EmployeeCreateOrConnectWithoutSupportHouseInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutSupportHouseInput | EmployeeUpsertWithWhereUniqueWithoutSupportHouseInput[]
    createMany?: EmployeeCreateManySupportHouseInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutSupportHouseInput | EmployeeUpdateWithWhereUniqueWithoutSupportHouseInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutSupportHouseInput | EmployeeUpdateManyWithWhereWithoutSupportHouseInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type TripRouteUncheckedUpdateManyWithoutSupportHouseNestedInput = {
    create?: XOR<TripRouteCreateWithoutSupportHouseInput, TripRouteUncheckedCreateWithoutSupportHouseInput> | TripRouteCreateWithoutSupportHouseInput[] | TripRouteUncheckedCreateWithoutSupportHouseInput[]
    connectOrCreate?: TripRouteCreateOrConnectWithoutSupportHouseInput | TripRouteCreateOrConnectWithoutSupportHouseInput[]
    upsert?: TripRouteUpsertWithWhereUniqueWithoutSupportHouseInput | TripRouteUpsertWithWhereUniqueWithoutSupportHouseInput[]
    createMany?: TripRouteCreateManySupportHouseInputEnvelope
    set?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    disconnect?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    delete?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    connect?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    update?: TripRouteUpdateWithWhereUniqueWithoutSupportHouseInput | TripRouteUpdateWithWhereUniqueWithoutSupportHouseInput[]
    updateMany?: TripRouteUpdateManyWithWhereWithoutSupportHouseInput | TripRouteUpdateManyWithWhereWithoutSupportHouseInput[]
    deleteMany?: TripRouteScalarWhereInput | TripRouteScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutAccommodationsInput = {
    create?: XOR<PersonCreateWithoutAccommodationsInput, PersonUncheckedCreateWithoutAccommodationsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutAccommodationsInput
    connect?: PersonWhereUniqueInput
  }

  export type SupportHouseCreateNestedOneWithoutAccommodationsInput = {
    create?: XOR<SupportHouseCreateWithoutAccommodationsInput, SupportHouseUncheckedCreateWithoutAccommodationsInput>
    connectOrCreate?: SupportHouseCreateOrConnectWithoutAccommodationsInput
    connect?: SupportHouseWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PersonUpdateOneRequiredWithoutAccommodationsNestedInput = {
    create?: XOR<PersonCreateWithoutAccommodationsInput, PersonUncheckedCreateWithoutAccommodationsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutAccommodationsInput
    upsert?: PersonUpsertWithoutAccommodationsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutAccommodationsInput, PersonUpdateWithoutAccommodationsInput>, PersonUncheckedUpdateWithoutAccommodationsInput>
  }

  export type SupportHouseUpdateOneRequiredWithoutAccommodationsNestedInput = {
    create?: XOR<SupportHouseCreateWithoutAccommodationsInput, SupportHouseUncheckedCreateWithoutAccommodationsInput>
    connectOrCreate?: SupportHouseCreateOrConnectWithoutAccommodationsInput
    upsert?: SupportHouseUpsertWithoutAccommodationsInput
    connect?: SupportHouseWhereUniqueInput
    update?: XOR<XOR<SupportHouseUpdateToOneWithWhereWithoutAccommodationsInput, SupportHouseUpdateWithoutAccommodationsInput>, SupportHouseUncheckedUpdateWithoutAccommodationsInput>
  }

  export type PersonCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<PersonCreateWithoutDocumentsInput, PersonUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutDocumentsInput
    connect?: PersonWhereUniqueInput
  }

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PersonUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<PersonCreateWithoutDocumentsInput, PersonUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutDocumentsInput
    upsert?: PersonUpsertWithoutDocumentsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutDocumentsInput, PersonUpdateWithoutDocumentsInput>, PersonUncheckedUpdateWithoutDocumentsInput>
  }

  export type PersonCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<PersonCreateWithoutEmployeeInput, PersonUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: PersonCreateOrConnectWithoutEmployeeInput
    connect?: PersonWhereUniqueInput
  }

  export type SupportHouseCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<SupportHouseCreateWithoutEmployeesInput, SupportHouseUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: SupportHouseCreateOrConnectWithoutEmployeesInput
    connect?: SupportHouseWhereUniqueInput
  }

  export type TripCreateNestedManyWithoutDriverInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type EnumEmployeeTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmployeeType
  }

  export type PersonUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<PersonCreateWithoutEmployeeInput, PersonUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: PersonCreateOrConnectWithoutEmployeeInput
    upsert?: PersonUpsertWithoutEmployeeInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutEmployeeInput, PersonUpdateWithoutEmployeeInput>, PersonUncheckedUpdateWithoutEmployeeInput>
  }

  export type SupportHouseUpdateOneWithoutEmployeesNestedInput = {
    create?: XOR<SupportHouseCreateWithoutEmployeesInput, SupportHouseUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: SupportHouseCreateOrConnectWithoutEmployeesInput
    upsert?: SupportHouseUpsertWithoutEmployeesInput
    disconnect?: SupportHouseWhereInput | boolean
    delete?: SupportHouseWhereInput | boolean
    connect?: SupportHouseWhereUniqueInput
    update?: XOR<XOR<SupportHouseUpdateToOneWithWhereWithoutEmployeesInput, SupportHouseUpdateWithoutEmployeesInput>, SupportHouseUncheckedUpdateWithoutEmployeesInput>
  }

  export type TripUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutDriverInput | TripUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutDriverInput | TripUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TripUpdateManyWithWhereWithoutDriverInput | TripUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutDriverInput | TripUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutDriverInput | TripUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TripUpdateManyWithWhereWithoutDriverInput | TripUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type PhoneCreateNestedManyWithoutPersonInput = {
    create?: XOR<PhoneCreateWithoutPersonInput, PhoneUncheckedCreateWithoutPersonInput> | PhoneCreateWithoutPersonInput[] | PhoneUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PhoneCreateOrConnectWithoutPersonInput | PhoneCreateOrConnectWithoutPersonInput[]
    createMany?: PhoneCreateManyPersonInputEnvelope
    connect?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
  }

  export type AddressCreateNestedOneWithoutPersonInput = {
    create?: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPersonInput
    connect?: AddressWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutPersonInput = {
    create?: XOR<EmployeeCreateWithoutPersonInput, EmployeeUncheckedCreateWithoutPersonInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPersonInput
    connect?: EmployeeWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutPersonInput = {
    create?: XOR<DocumentCreateWithoutPersonInput, DocumentUncheckedCreateWithoutPersonInput> | DocumentCreateWithoutPersonInput[] | DocumentUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutPersonInput | DocumentCreateOrConnectWithoutPersonInput[]
    createMany?: DocumentCreateManyPersonInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type AccommodationCreateNestedManyWithoutPersonInput = {
    create?: XOR<AccommodationCreateWithoutPersonInput, AccommodationUncheckedCreateWithoutPersonInput> | AccommodationCreateWithoutPersonInput[] | AccommodationUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: AccommodationCreateOrConnectWithoutPersonInput | AccommodationCreateOrConnectWithoutPersonInput[]
    createMany?: AccommodationCreateManyPersonInputEnvelope
    connect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
  }

  export type TripPassengerCreateNestedManyWithoutPersonInput = {
    create?: XOR<TripPassengerCreateWithoutPersonInput, TripPassengerUncheckedCreateWithoutPersonInput> | TripPassengerCreateWithoutPersonInput[] | TripPassengerUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: TripPassengerCreateOrConnectWithoutPersonInput | TripPassengerCreateOrConnectWithoutPersonInput[]
    createMany?: TripPassengerCreateManyPersonInputEnvelope
    connect?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
  }

  export type PatientGuardianCreateNestedManyWithoutCompanionInput = {
    create?: XOR<PatientGuardianCreateWithoutCompanionInput, PatientGuardianUncheckedCreateWithoutCompanionInput> | PatientGuardianCreateWithoutCompanionInput[] | PatientGuardianUncheckedCreateWithoutCompanionInput[]
    connectOrCreate?: PatientGuardianCreateOrConnectWithoutCompanionInput | PatientGuardianCreateOrConnectWithoutCompanionInput[]
    createMany?: PatientGuardianCreateManyCompanionInputEnvelope
    connect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
  }

  export type PatientGuardianCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientGuardianCreateWithoutPatientInput, PatientGuardianUncheckedCreateWithoutPatientInput> | PatientGuardianCreateWithoutPatientInput[] | PatientGuardianUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientGuardianCreateOrConnectWithoutPatientInput | PatientGuardianCreateOrConnectWithoutPatientInput[]
    createMany?: PatientGuardianCreateManyPatientInputEnvelope
    connect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
  }

  export type PhoneUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<PhoneCreateWithoutPersonInput, PhoneUncheckedCreateWithoutPersonInput> | PhoneCreateWithoutPersonInput[] | PhoneUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PhoneCreateOrConnectWithoutPersonInput | PhoneCreateOrConnectWithoutPersonInput[]
    createMany?: PhoneCreateManyPersonInputEnvelope
    connect?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPersonInput
    connect?: AddressWhereUniqueInput
  }

  export type EmployeeUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<EmployeeCreateWithoutPersonInput, EmployeeUncheckedCreateWithoutPersonInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPersonInput
    connect?: EmployeeWhereUniqueInput
  }

  export type DocumentUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<DocumentCreateWithoutPersonInput, DocumentUncheckedCreateWithoutPersonInput> | DocumentCreateWithoutPersonInput[] | DocumentUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutPersonInput | DocumentCreateOrConnectWithoutPersonInput[]
    createMany?: DocumentCreateManyPersonInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type AccommodationUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<AccommodationCreateWithoutPersonInput, AccommodationUncheckedCreateWithoutPersonInput> | AccommodationCreateWithoutPersonInput[] | AccommodationUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: AccommodationCreateOrConnectWithoutPersonInput | AccommodationCreateOrConnectWithoutPersonInput[]
    createMany?: AccommodationCreateManyPersonInputEnvelope
    connect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
  }

  export type TripPassengerUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<TripPassengerCreateWithoutPersonInput, TripPassengerUncheckedCreateWithoutPersonInput> | TripPassengerCreateWithoutPersonInput[] | TripPassengerUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: TripPassengerCreateOrConnectWithoutPersonInput | TripPassengerCreateOrConnectWithoutPersonInput[]
    createMany?: TripPassengerCreateManyPersonInputEnvelope
    connect?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
  }

  export type PatientGuardianUncheckedCreateNestedManyWithoutCompanionInput = {
    create?: XOR<PatientGuardianCreateWithoutCompanionInput, PatientGuardianUncheckedCreateWithoutCompanionInput> | PatientGuardianCreateWithoutCompanionInput[] | PatientGuardianUncheckedCreateWithoutCompanionInput[]
    connectOrCreate?: PatientGuardianCreateOrConnectWithoutCompanionInput | PatientGuardianCreateOrConnectWithoutCompanionInput[]
    createMany?: PatientGuardianCreateManyCompanionInputEnvelope
    connect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
  }

  export type PatientGuardianUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientGuardianCreateWithoutPatientInput, PatientGuardianUncheckedCreateWithoutPatientInput> | PatientGuardianCreateWithoutPatientInput[] | PatientGuardianUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientGuardianCreateOrConnectWithoutPatientInput | PatientGuardianCreateOrConnectWithoutPatientInput[]
    createMany?: PatientGuardianCreateManyPatientInputEnvelope
    connect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
  }

  export type EnumPersonTypeFieldUpdateOperationsInput = {
    set?: $Enums.PersonType
  }

  export type PhoneUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PhoneCreateWithoutPersonInput, PhoneUncheckedCreateWithoutPersonInput> | PhoneCreateWithoutPersonInput[] | PhoneUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PhoneCreateOrConnectWithoutPersonInput | PhoneCreateOrConnectWithoutPersonInput[]
    upsert?: PhoneUpsertWithWhereUniqueWithoutPersonInput | PhoneUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PhoneCreateManyPersonInputEnvelope
    set?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    disconnect?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    delete?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    connect?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    update?: PhoneUpdateWithWhereUniqueWithoutPersonInput | PhoneUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PhoneUpdateManyWithWhereWithoutPersonInput | PhoneUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PhoneScalarWhereInput | PhoneScalarWhereInput[]
  }

  export type AddressUpdateOneWithoutPersonNestedInput = {
    create?: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPersonInput
    upsert?: AddressUpsertWithoutPersonInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutPersonInput, AddressUpdateWithoutPersonInput>, AddressUncheckedUpdateWithoutPersonInput>
  }

  export type EmployeeUpdateOneWithoutPersonNestedInput = {
    create?: XOR<EmployeeCreateWithoutPersonInput, EmployeeUncheckedCreateWithoutPersonInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPersonInput
    upsert?: EmployeeUpsertWithoutPersonInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPersonInput, EmployeeUpdateWithoutPersonInput>, EmployeeUncheckedUpdateWithoutPersonInput>
  }

  export type DocumentUpdateManyWithoutPersonNestedInput = {
    create?: XOR<DocumentCreateWithoutPersonInput, DocumentUncheckedCreateWithoutPersonInput> | DocumentCreateWithoutPersonInput[] | DocumentUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutPersonInput | DocumentCreateOrConnectWithoutPersonInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutPersonInput | DocumentUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: DocumentCreateManyPersonInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutPersonInput | DocumentUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutPersonInput | DocumentUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AccommodationUpdateManyWithoutPersonNestedInput = {
    create?: XOR<AccommodationCreateWithoutPersonInput, AccommodationUncheckedCreateWithoutPersonInput> | AccommodationCreateWithoutPersonInput[] | AccommodationUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: AccommodationCreateOrConnectWithoutPersonInput | AccommodationCreateOrConnectWithoutPersonInput[]
    upsert?: AccommodationUpsertWithWhereUniqueWithoutPersonInput | AccommodationUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: AccommodationCreateManyPersonInputEnvelope
    set?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    disconnect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    delete?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    connect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    update?: AccommodationUpdateWithWhereUniqueWithoutPersonInput | AccommodationUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: AccommodationUpdateManyWithWhereWithoutPersonInput | AccommodationUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: AccommodationScalarWhereInput | AccommodationScalarWhereInput[]
  }

  export type TripPassengerUpdateManyWithoutPersonNestedInput = {
    create?: XOR<TripPassengerCreateWithoutPersonInput, TripPassengerUncheckedCreateWithoutPersonInput> | TripPassengerCreateWithoutPersonInput[] | TripPassengerUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: TripPassengerCreateOrConnectWithoutPersonInput | TripPassengerCreateOrConnectWithoutPersonInput[]
    upsert?: TripPassengerUpsertWithWhereUniqueWithoutPersonInput | TripPassengerUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: TripPassengerCreateManyPersonInputEnvelope
    set?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    disconnect?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    delete?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    connect?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    update?: TripPassengerUpdateWithWhereUniqueWithoutPersonInput | TripPassengerUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: TripPassengerUpdateManyWithWhereWithoutPersonInput | TripPassengerUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: TripPassengerScalarWhereInput | TripPassengerScalarWhereInput[]
  }

  export type PatientGuardianUpdateManyWithoutCompanionNestedInput = {
    create?: XOR<PatientGuardianCreateWithoutCompanionInput, PatientGuardianUncheckedCreateWithoutCompanionInput> | PatientGuardianCreateWithoutCompanionInput[] | PatientGuardianUncheckedCreateWithoutCompanionInput[]
    connectOrCreate?: PatientGuardianCreateOrConnectWithoutCompanionInput | PatientGuardianCreateOrConnectWithoutCompanionInput[]
    upsert?: PatientGuardianUpsertWithWhereUniqueWithoutCompanionInput | PatientGuardianUpsertWithWhereUniqueWithoutCompanionInput[]
    createMany?: PatientGuardianCreateManyCompanionInputEnvelope
    set?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    disconnect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    delete?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    connect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    update?: PatientGuardianUpdateWithWhereUniqueWithoutCompanionInput | PatientGuardianUpdateWithWhereUniqueWithoutCompanionInput[]
    updateMany?: PatientGuardianUpdateManyWithWhereWithoutCompanionInput | PatientGuardianUpdateManyWithWhereWithoutCompanionInput[]
    deleteMany?: PatientGuardianScalarWhereInput | PatientGuardianScalarWhereInput[]
  }

  export type PatientGuardianUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientGuardianCreateWithoutPatientInput, PatientGuardianUncheckedCreateWithoutPatientInput> | PatientGuardianCreateWithoutPatientInput[] | PatientGuardianUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientGuardianCreateOrConnectWithoutPatientInput | PatientGuardianCreateOrConnectWithoutPatientInput[]
    upsert?: PatientGuardianUpsertWithWhereUniqueWithoutPatientInput | PatientGuardianUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientGuardianCreateManyPatientInputEnvelope
    set?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    disconnect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    delete?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    connect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    update?: PatientGuardianUpdateWithWhereUniqueWithoutPatientInput | PatientGuardianUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientGuardianUpdateManyWithWhereWithoutPatientInput | PatientGuardianUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientGuardianScalarWhereInput | PatientGuardianScalarWhereInput[]
  }

  export type PhoneUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PhoneCreateWithoutPersonInput, PhoneUncheckedCreateWithoutPersonInput> | PhoneCreateWithoutPersonInput[] | PhoneUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PhoneCreateOrConnectWithoutPersonInput | PhoneCreateOrConnectWithoutPersonInput[]
    upsert?: PhoneUpsertWithWhereUniqueWithoutPersonInput | PhoneUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PhoneCreateManyPersonInputEnvelope
    set?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    disconnect?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    delete?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    connect?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    update?: PhoneUpdateWithWhereUniqueWithoutPersonInput | PhoneUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PhoneUpdateManyWithWhereWithoutPersonInput | PhoneUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PhoneScalarWhereInput | PhoneScalarWhereInput[]
  }

  export type AddressUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
    connectOrCreate?: AddressCreateOrConnectWithoutPersonInput
    upsert?: AddressUpsertWithoutPersonInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutPersonInput, AddressUpdateWithoutPersonInput>, AddressUncheckedUpdateWithoutPersonInput>
  }

  export type EmployeeUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<EmployeeCreateWithoutPersonInput, EmployeeUncheckedCreateWithoutPersonInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPersonInput
    upsert?: EmployeeUpsertWithoutPersonInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPersonInput, EmployeeUpdateWithoutPersonInput>, EmployeeUncheckedUpdateWithoutPersonInput>
  }

  export type DocumentUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<DocumentCreateWithoutPersonInput, DocumentUncheckedCreateWithoutPersonInput> | DocumentCreateWithoutPersonInput[] | DocumentUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutPersonInput | DocumentCreateOrConnectWithoutPersonInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutPersonInput | DocumentUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: DocumentCreateManyPersonInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutPersonInput | DocumentUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutPersonInput | DocumentUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AccommodationUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<AccommodationCreateWithoutPersonInput, AccommodationUncheckedCreateWithoutPersonInput> | AccommodationCreateWithoutPersonInput[] | AccommodationUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: AccommodationCreateOrConnectWithoutPersonInput | AccommodationCreateOrConnectWithoutPersonInput[]
    upsert?: AccommodationUpsertWithWhereUniqueWithoutPersonInput | AccommodationUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: AccommodationCreateManyPersonInputEnvelope
    set?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    disconnect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    delete?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    connect?: AccommodationWhereUniqueInput | AccommodationWhereUniqueInput[]
    update?: AccommodationUpdateWithWhereUniqueWithoutPersonInput | AccommodationUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: AccommodationUpdateManyWithWhereWithoutPersonInput | AccommodationUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: AccommodationScalarWhereInput | AccommodationScalarWhereInput[]
  }

  export type TripPassengerUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<TripPassengerCreateWithoutPersonInput, TripPassengerUncheckedCreateWithoutPersonInput> | TripPassengerCreateWithoutPersonInput[] | TripPassengerUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: TripPassengerCreateOrConnectWithoutPersonInput | TripPassengerCreateOrConnectWithoutPersonInput[]
    upsert?: TripPassengerUpsertWithWhereUniqueWithoutPersonInput | TripPassengerUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: TripPassengerCreateManyPersonInputEnvelope
    set?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    disconnect?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    delete?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    connect?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    update?: TripPassengerUpdateWithWhereUniqueWithoutPersonInput | TripPassengerUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: TripPassengerUpdateManyWithWhereWithoutPersonInput | TripPassengerUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: TripPassengerScalarWhereInput | TripPassengerScalarWhereInput[]
  }

  export type PatientGuardianUncheckedUpdateManyWithoutCompanionNestedInput = {
    create?: XOR<PatientGuardianCreateWithoutCompanionInput, PatientGuardianUncheckedCreateWithoutCompanionInput> | PatientGuardianCreateWithoutCompanionInput[] | PatientGuardianUncheckedCreateWithoutCompanionInput[]
    connectOrCreate?: PatientGuardianCreateOrConnectWithoutCompanionInput | PatientGuardianCreateOrConnectWithoutCompanionInput[]
    upsert?: PatientGuardianUpsertWithWhereUniqueWithoutCompanionInput | PatientGuardianUpsertWithWhereUniqueWithoutCompanionInput[]
    createMany?: PatientGuardianCreateManyCompanionInputEnvelope
    set?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    disconnect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    delete?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    connect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    update?: PatientGuardianUpdateWithWhereUniqueWithoutCompanionInput | PatientGuardianUpdateWithWhereUniqueWithoutCompanionInput[]
    updateMany?: PatientGuardianUpdateManyWithWhereWithoutCompanionInput | PatientGuardianUpdateManyWithWhereWithoutCompanionInput[]
    deleteMany?: PatientGuardianScalarWhereInput | PatientGuardianScalarWhereInput[]
  }

  export type PatientGuardianUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientGuardianCreateWithoutPatientInput, PatientGuardianUncheckedCreateWithoutPatientInput> | PatientGuardianCreateWithoutPatientInput[] | PatientGuardianUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientGuardianCreateOrConnectWithoutPatientInput | PatientGuardianCreateOrConnectWithoutPatientInput[]
    upsert?: PatientGuardianUpsertWithWhereUniqueWithoutPatientInput | PatientGuardianUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientGuardianCreateManyPatientInputEnvelope
    set?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    disconnect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    delete?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    connect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    update?: PatientGuardianUpdateWithWhereUniqueWithoutPatientInput | PatientGuardianUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientGuardianUpdateManyWithWhereWithoutPatientInput | PatientGuardianUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientGuardianScalarWhereInput | PatientGuardianScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutPhonesInput = {
    create?: XOR<PersonCreateWithoutPhonesInput, PersonUncheckedCreateWithoutPhonesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPhonesInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutPhonesNestedInput = {
    create?: XOR<PersonCreateWithoutPhonesInput, PersonUncheckedCreateWithoutPhonesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPhonesInput
    upsert?: PersonUpsertWithoutPhonesInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutPhonesInput, PersonUpdateWithoutPhonesInput>, PersonUncheckedUpdateWithoutPhonesInput>
  }

  export type PersonCreateNestedOneWithoutAddressInput = {
    create?: XOR<PersonCreateWithoutAddressInput, PersonUncheckedCreateWithoutAddressInput>
    connectOrCreate?: PersonCreateOrConnectWithoutAddressInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<PersonCreateWithoutAddressInput, PersonUncheckedCreateWithoutAddressInput>
    connectOrCreate?: PersonCreateOrConnectWithoutAddressInput
    upsert?: PersonUpsertWithoutAddressInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutAddressInput, PersonUpdateWithoutAddressInput>, PersonUncheckedUpdateWithoutAddressInput>
  }

  export type TripCreateNestedOneWithoutPatientGuardiansInput = {
    create?: XOR<TripCreateWithoutPatientGuardiansInput, TripUncheckedCreateWithoutPatientGuardiansInput>
    connectOrCreate?: TripCreateOrConnectWithoutPatientGuardiansInput
    connect?: TripWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutCompanionGuardianshipsInput = {
    create?: XOR<PersonCreateWithoutCompanionGuardianshipsInput, PersonUncheckedCreateWithoutCompanionGuardianshipsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCompanionGuardianshipsInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutPatientGuardianshipsInput = {
    create?: XOR<PersonCreateWithoutPatientGuardianshipsInput, PersonUncheckedCreateWithoutPatientGuardianshipsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPatientGuardianshipsInput
    connect?: PersonWhereUniqueInput
  }

  export type EnumRelationshipFieldUpdateOperationsInput = {
    set?: $Enums.Relationship
  }

  export type TripUpdateOneRequiredWithoutPatientGuardiansNestedInput = {
    create?: XOR<TripCreateWithoutPatientGuardiansInput, TripUncheckedCreateWithoutPatientGuardiansInput>
    connectOrCreate?: TripCreateOrConnectWithoutPatientGuardiansInput
    upsert?: TripUpsertWithoutPatientGuardiansInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutPatientGuardiansInput, TripUpdateWithoutPatientGuardiansInput>, TripUncheckedUpdateWithoutPatientGuardiansInput>
  }

  export type PersonUpdateOneRequiredWithoutCompanionGuardianshipsNestedInput = {
    create?: XOR<PersonCreateWithoutCompanionGuardianshipsInput, PersonUncheckedCreateWithoutCompanionGuardianshipsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutCompanionGuardianshipsInput
    upsert?: PersonUpsertWithoutCompanionGuardianshipsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutCompanionGuardianshipsInput, PersonUpdateWithoutCompanionGuardianshipsInput>, PersonUncheckedUpdateWithoutCompanionGuardianshipsInput>
  }

  export type PersonUpdateOneRequiredWithoutPatientGuardianshipsNestedInput = {
    create?: XOR<PersonCreateWithoutPatientGuardianshipsInput, PersonUncheckedCreateWithoutPatientGuardianshipsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutPatientGuardianshipsInput
    upsert?: PersonUpsertWithoutPatientGuardianshipsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutPatientGuardianshipsInput, PersonUpdateWithoutPatientGuardianshipsInput>, PersonUncheckedUpdateWithoutPatientGuardianshipsInput>
  }

  export type TripCreateNestedManyWithoutVehicleInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type VehicleDocumentCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleDocumentCreateWithoutVehicleInput, VehicleDocumentUncheckedCreateWithoutVehicleInput> | VehicleDocumentCreateWithoutVehicleInput[] | VehicleDocumentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleDocumentCreateOrConnectWithoutVehicleInput | VehicleDocumentCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleDocumentCreateManyVehicleInputEnvelope
    connect?: VehicleDocumentWhereUniqueInput | VehicleDocumentWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type VehicleDocumentUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleDocumentCreateWithoutVehicleInput, VehicleDocumentUncheckedCreateWithoutVehicleInput> | VehicleDocumentCreateWithoutVehicleInput[] | VehicleDocumentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleDocumentCreateOrConnectWithoutVehicleInput | VehicleDocumentCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleDocumentCreateManyVehicleInputEnvelope
    connect?: VehicleDocumentWhereUniqueInput | VehicleDocumentWhereUniqueInput[]
  }

  export type EnumVehicleStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehicleStatus
  }

  export type TripUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutVehicleInput | TripUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutVehicleInput | TripUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: TripUpdateManyWithWhereWithoutVehicleInput | TripUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type VehicleDocumentUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleDocumentCreateWithoutVehicleInput, VehicleDocumentUncheckedCreateWithoutVehicleInput> | VehicleDocumentCreateWithoutVehicleInput[] | VehicleDocumentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleDocumentCreateOrConnectWithoutVehicleInput | VehicleDocumentCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleDocumentUpsertWithWhereUniqueWithoutVehicleInput | VehicleDocumentUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleDocumentCreateManyVehicleInputEnvelope
    set?: VehicleDocumentWhereUniqueInput | VehicleDocumentWhereUniqueInput[]
    disconnect?: VehicleDocumentWhereUniqueInput | VehicleDocumentWhereUniqueInput[]
    delete?: VehicleDocumentWhereUniqueInput | VehicleDocumentWhereUniqueInput[]
    connect?: VehicleDocumentWhereUniqueInput | VehicleDocumentWhereUniqueInput[]
    update?: VehicleDocumentUpdateWithWhereUniqueWithoutVehicleInput | VehicleDocumentUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleDocumentUpdateManyWithWhereWithoutVehicleInput | VehicleDocumentUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleDocumentScalarWhereInput | VehicleDocumentScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutVehicleInput | TripUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutVehicleInput | TripUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: TripUpdateManyWithWhereWithoutVehicleInput | TripUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type VehicleDocumentUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleDocumentCreateWithoutVehicleInput, VehicleDocumentUncheckedCreateWithoutVehicleInput> | VehicleDocumentCreateWithoutVehicleInput[] | VehicleDocumentUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleDocumentCreateOrConnectWithoutVehicleInput | VehicleDocumentCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleDocumentUpsertWithWhereUniqueWithoutVehicleInput | VehicleDocumentUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleDocumentCreateManyVehicleInputEnvelope
    set?: VehicleDocumentWhereUniqueInput | VehicleDocumentWhereUniqueInput[]
    disconnect?: VehicleDocumentWhereUniqueInput | VehicleDocumentWhereUniqueInput[]
    delete?: VehicleDocumentWhereUniqueInput | VehicleDocumentWhereUniqueInput[]
    connect?: VehicleDocumentWhereUniqueInput | VehicleDocumentWhereUniqueInput[]
    update?: VehicleDocumentUpdateWithWhereUniqueWithoutVehicleInput | VehicleDocumentUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleDocumentUpdateManyWithWhereWithoutVehicleInput | VehicleDocumentUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleDocumentScalarWhereInput | VehicleDocumentScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutTripsInput = {
    create?: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTripsInput
    connect?: VehicleWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutTripsInput = {
    create?: XOR<EmployeeCreateWithoutTripsInput, EmployeeUncheckedCreateWithoutTripsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTripsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type TripPassengerCreateNestedManyWithoutTripInput = {
    create?: XOR<TripPassengerCreateWithoutTripInput, TripPassengerUncheckedCreateWithoutTripInput> | TripPassengerCreateWithoutTripInput[] | TripPassengerUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripPassengerCreateOrConnectWithoutTripInput | TripPassengerCreateOrConnectWithoutTripInput[]
    createMany?: TripPassengerCreateManyTripInputEnvelope
    connect?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
  }

  export type PatientGuardianCreateNestedManyWithoutTripInput = {
    create?: XOR<PatientGuardianCreateWithoutTripInput, PatientGuardianUncheckedCreateWithoutTripInput> | PatientGuardianCreateWithoutTripInput[] | PatientGuardianUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PatientGuardianCreateOrConnectWithoutTripInput | PatientGuardianCreateOrConnectWithoutTripInput[]
    createMany?: PatientGuardianCreateManyTripInputEnvelope
    connect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
  }

  export type TripRouteCreateNestedManyWithoutTripInput = {
    create?: XOR<TripRouteCreateWithoutTripInput, TripRouteUncheckedCreateWithoutTripInput> | TripRouteCreateWithoutTripInput[] | TripRouteUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripRouteCreateOrConnectWithoutTripInput | TripRouteCreateOrConnectWithoutTripInput[]
    createMany?: TripRouteCreateManyTripInputEnvelope
    connect?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
  }

  export type TripPassengerUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripPassengerCreateWithoutTripInput, TripPassengerUncheckedCreateWithoutTripInput> | TripPassengerCreateWithoutTripInput[] | TripPassengerUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripPassengerCreateOrConnectWithoutTripInput | TripPassengerCreateOrConnectWithoutTripInput[]
    createMany?: TripPassengerCreateManyTripInputEnvelope
    connect?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
  }

  export type PatientGuardianUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<PatientGuardianCreateWithoutTripInput, PatientGuardianUncheckedCreateWithoutTripInput> | PatientGuardianCreateWithoutTripInput[] | PatientGuardianUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PatientGuardianCreateOrConnectWithoutTripInput | PatientGuardianCreateOrConnectWithoutTripInput[]
    createMany?: PatientGuardianCreateManyTripInputEnvelope
    connect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
  }

  export type TripRouteUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripRouteCreateWithoutTripInput, TripRouteUncheckedCreateWithoutTripInput> | TripRouteCreateWithoutTripInput[] | TripRouteUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripRouteCreateOrConnectWithoutTripInput | TripRouteCreateOrConnectWithoutTripInput[]
    createMany?: TripRouteCreateManyTripInputEnvelope
    connect?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
  }

  export type EnumTripStatusFieldUpdateOperationsInput = {
    set?: $Enums.TripStatus
  }

  export type VehicleUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTripsInput
    upsert?: VehicleUpsertWithoutTripsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutTripsInput, VehicleUpdateWithoutTripsInput>, VehicleUncheckedUpdateWithoutTripsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<EmployeeCreateWithoutTripsInput, EmployeeUncheckedCreateWithoutTripsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTripsInput
    upsert?: EmployeeUpsertWithoutTripsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutTripsInput, EmployeeUpdateWithoutTripsInput>, EmployeeUncheckedUpdateWithoutTripsInput>
  }

  export type TripPassengerUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripPassengerCreateWithoutTripInput, TripPassengerUncheckedCreateWithoutTripInput> | TripPassengerCreateWithoutTripInput[] | TripPassengerUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripPassengerCreateOrConnectWithoutTripInput | TripPassengerCreateOrConnectWithoutTripInput[]
    upsert?: TripPassengerUpsertWithWhereUniqueWithoutTripInput | TripPassengerUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripPassengerCreateManyTripInputEnvelope
    set?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    disconnect?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    delete?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    connect?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    update?: TripPassengerUpdateWithWhereUniqueWithoutTripInput | TripPassengerUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripPassengerUpdateManyWithWhereWithoutTripInput | TripPassengerUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripPassengerScalarWhereInput | TripPassengerScalarWhereInput[]
  }

  export type PatientGuardianUpdateManyWithoutTripNestedInput = {
    create?: XOR<PatientGuardianCreateWithoutTripInput, PatientGuardianUncheckedCreateWithoutTripInput> | PatientGuardianCreateWithoutTripInput[] | PatientGuardianUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PatientGuardianCreateOrConnectWithoutTripInput | PatientGuardianCreateOrConnectWithoutTripInput[]
    upsert?: PatientGuardianUpsertWithWhereUniqueWithoutTripInput | PatientGuardianUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: PatientGuardianCreateManyTripInputEnvelope
    set?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    disconnect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    delete?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    connect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    update?: PatientGuardianUpdateWithWhereUniqueWithoutTripInput | PatientGuardianUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: PatientGuardianUpdateManyWithWhereWithoutTripInput | PatientGuardianUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: PatientGuardianScalarWhereInput | PatientGuardianScalarWhereInput[]
  }

  export type TripRouteUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripRouteCreateWithoutTripInput, TripRouteUncheckedCreateWithoutTripInput> | TripRouteCreateWithoutTripInput[] | TripRouteUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripRouteCreateOrConnectWithoutTripInput | TripRouteCreateOrConnectWithoutTripInput[]
    upsert?: TripRouteUpsertWithWhereUniqueWithoutTripInput | TripRouteUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripRouteCreateManyTripInputEnvelope
    set?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    disconnect?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    delete?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    connect?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    update?: TripRouteUpdateWithWhereUniqueWithoutTripInput | TripRouteUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripRouteUpdateManyWithWhereWithoutTripInput | TripRouteUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripRouteScalarWhereInput | TripRouteScalarWhereInput[]
  }

  export type TripPassengerUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripPassengerCreateWithoutTripInput, TripPassengerUncheckedCreateWithoutTripInput> | TripPassengerCreateWithoutTripInput[] | TripPassengerUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripPassengerCreateOrConnectWithoutTripInput | TripPassengerCreateOrConnectWithoutTripInput[]
    upsert?: TripPassengerUpsertWithWhereUniqueWithoutTripInput | TripPassengerUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripPassengerCreateManyTripInputEnvelope
    set?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    disconnect?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    delete?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    connect?: TripPassengerWhereUniqueInput | TripPassengerWhereUniqueInput[]
    update?: TripPassengerUpdateWithWhereUniqueWithoutTripInput | TripPassengerUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripPassengerUpdateManyWithWhereWithoutTripInput | TripPassengerUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripPassengerScalarWhereInput | TripPassengerScalarWhereInput[]
  }

  export type PatientGuardianUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<PatientGuardianCreateWithoutTripInput, PatientGuardianUncheckedCreateWithoutTripInput> | PatientGuardianCreateWithoutTripInput[] | PatientGuardianUncheckedCreateWithoutTripInput[]
    connectOrCreate?: PatientGuardianCreateOrConnectWithoutTripInput | PatientGuardianCreateOrConnectWithoutTripInput[]
    upsert?: PatientGuardianUpsertWithWhereUniqueWithoutTripInput | PatientGuardianUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: PatientGuardianCreateManyTripInputEnvelope
    set?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    disconnect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    delete?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    connect?: PatientGuardianWhereUniqueInput | PatientGuardianWhereUniqueInput[]
    update?: PatientGuardianUpdateWithWhereUniqueWithoutTripInput | PatientGuardianUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: PatientGuardianUpdateManyWithWhereWithoutTripInput | PatientGuardianUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: PatientGuardianScalarWhereInput | PatientGuardianScalarWhereInput[]
  }

  export type TripRouteUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripRouteCreateWithoutTripInput, TripRouteUncheckedCreateWithoutTripInput> | TripRouteCreateWithoutTripInput[] | TripRouteUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripRouteCreateOrConnectWithoutTripInput | TripRouteCreateOrConnectWithoutTripInput[]
    upsert?: TripRouteUpsertWithWhereUniqueWithoutTripInput | TripRouteUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripRouteCreateManyTripInputEnvelope
    set?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    disconnect?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    delete?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    connect?: TripRouteWhereUniqueInput | TripRouteWhereUniqueInput[]
    update?: TripRouteUpdateWithWhereUniqueWithoutTripInput | TripRouteUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripRouteUpdateManyWithWhereWithoutTripInput | TripRouteUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripRouteScalarWhereInput | TripRouteScalarWhereInput[]
  }

  export type TripCreateNestedOneWithoutPassengersInput = {
    create?: XOR<TripCreateWithoutPassengersInput, TripUncheckedCreateWithoutPassengersInput>
    connectOrCreate?: TripCreateOrConnectWithoutPassengersInput
    connect?: TripWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutTripPassengersInput = {
    create?: XOR<PersonCreateWithoutTripPassengersInput, PersonUncheckedCreateWithoutTripPassengersInput>
    connectOrCreate?: PersonCreateOrConnectWithoutTripPassengersInput
    connect?: PersonWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutPassengersNestedInput = {
    create?: XOR<TripCreateWithoutPassengersInput, TripUncheckedCreateWithoutPassengersInput>
    connectOrCreate?: TripCreateOrConnectWithoutPassengersInput
    upsert?: TripUpsertWithoutPassengersInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutPassengersInput, TripUpdateWithoutPassengersInput>, TripUncheckedUpdateWithoutPassengersInput>
  }

  export type PersonUpdateOneRequiredWithoutTripPassengersNestedInput = {
    create?: XOR<PersonCreateWithoutTripPassengersInput, PersonUncheckedCreateWithoutTripPassengersInput>
    connectOrCreate?: PersonCreateOrConnectWithoutTripPassengersInput
    upsert?: PersonUpsertWithoutTripPassengersInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutTripPassengersInput, PersonUpdateWithoutTripPassengersInput>, PersonUncheckedUpdateWithoutTripPassengersInput>
  }

  export type TripCreateNestedOneWithoutRoutesInput = {
    create?: XOR<TripCreateWithoutRoutesInput, TripUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: TripCreateOrConnectWithoutRoutesInput
    connect?: TripWhereUniqueInput
  }

  export type SupportHouseCreateNestedOneWithoutTripRoutesInput = {
    create?: XOR<SupportHouseCreateWithoutTripRoutesInput, SupportHouseUncheckedCreateWithoutTripRoutesInput>
    connectOrCreate?: SupportHouseCreateOrConnectWithoutTripRoutesInput
    connect?: SupportHouseWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutRoutesNestedInput = {
    create?: XOR<TripCreateWithoutRoutesInput, TripUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: TripCreateOrConnectWithoutRoutesInput
    upsert?: TripUpsertWithoutRoutesInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutRoutesInput, TripUpdateWithoutRoutesInput>, TripUncheckedUpdateWithoutRoutesInput>
  }

  export type SupportHouseUpdateOneRequiredWithoutTripRoutesNestedInput = {
    create?: XOR<SupportHouseCreateWithoutTripRoutesInput, SupportHouseUncheckedCreateWithoutTripRoutesInput>
    connectOrCreate?: SupportHouseCreateOrConnectWithoutTripRoutesInput
    upsert?: SupportHouseUpsertWithoutTripRoutesInput
    connect?: SupportHouseWhereUniqueInput
    update?: XOR<XOR<SupportHouseUpdateToOneWithWhereWithoutTripRoutesInput, SupportHouseUpdateWithoutTripRoutesInput>, SupportHouseUncheckedUpdateWithoutTripRoutesInput>
  }

  export type VehicleCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<VehicleCreateWithoutDocumentsInput, VehicleUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDocumentsInput
    connect?: VehicleWhereUniqueInput
  }

  export type EnumVehicleDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleDocumentType
  }

  export type VehicleUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<VehicleCreateWithoutDocumentsInput, VehicleUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutDocumentsInput
    upsert?: VehicleUpsertWithoutDocumentsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutDocumentsInput, VehicleUpdateWithoutDocumentsInput>, VehicleUncheckedUpdateWithoutDocumentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumEmployeeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeTypeFilter<$PrismaModel> | $Enums.EmployeeType
  }

  export type NestedEnumEmployeeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmployeeType[] | ListEnumEmployeeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmployeeTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeTypeFilter<$PrismaModel>
    _max?: NestedEnumEmployeeTypeFilter<$PrismaModel>
  }

  export type NestedEnumPersonTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonType | EnumPersonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonTypeFilter<$PrismaModel> | $Enums.PersonType
  }

  export type NestedEnumPersonTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PersonType | EnumPersonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PersonType[] | ListEnumPersonTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPersonTypeWithAggregatesFilter<$PrismaModel> | $Enums.PersonType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPersonTypeFilter<$PrismaModel>
    _max?: NestedEnumPersonTypeFilter<$PrismaModel>
  }

  export type NestedEnumRelationshipFilter<$PrismaModel = never> = {
    equals?: $Enums.Relationship | EnumRelationshipFieldRefInput<$PrismaModel>
    in?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    notIn?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipFilter<$PrismaModel> | $Enums.Relationship
  }

  export type NestedEnumRelationshipWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Relationship | EnumRelationshipFieldRefInput<$PrismaModel>
    in?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    notIn?: $Enums.Relationship[] | ListEnumRelationshipFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationshipWithAggregatesFilter<$PrismaModel> | $Enums.Relationship
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipFilter<$PrismaModel>
    _max?: NestedEnumRelationshipFilter<$PrismaModel>
  }

  export type NestedEnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type NestedEnumTripStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusFilter<$PrismaModel> | $Enums.TripStatus
  }

  export type NestedEnumTripStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusWithAggregatesFilter<$PrismaModel> | $Enums.TripStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripStatusFilter<$PrismaModel>
    _max?: NestedEnumTripStatusFilter<$PrismaModel>
  }

  export type NestedEnumVehicleDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleDocumentType | EnumVehicleDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleDocumentType[] | ListEnumVehicleDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleDocumentType[] | ListEnumVehicleDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleDocumentTypeFilter<$PrismaModel> | $Enums.VehicleDocumentType
  }

  export type NestedEnumVehicleDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleDocumentType | EnumVehicleDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleDocumentType[] | ListEnumVehicleDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleDocumentType[] | ListEnumVehicleDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleDocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleDocumentTypeFilter<$PrismaModel>
  }

  export type AccommodationCreateWithoutSupportHouseInput = {
    id?: string
    checkInDate: Date | string
    checkOutDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutAccommodationsInput
  }

  export type AccommodationUncheckedCreateWithoutSupportHouseInput = {
    id?: string
    personId: string
    checkInDate: Date | string
    checkOutDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccommodationCreateOrConnectWithoutSupportHouseInput = {
    where: AccommodationWhereUniqueInput
    create: XOR<AccommodationCreateWithoutSupportHouseInput, AccommodationUncheckedCreateWithoutSupportHouseInput>
  }

  export type AccommodationCreateManySupportHouseInputEnvelope = {
    data: AccommodationCreateManySupportHouseInput | AccommodationCreateManySupportHouseInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeCreateWithoutSupportHouseInput = {
    id?: string
    email: string
    password: string
    registrationNumber: string
    type: $Enums.EmployeeType
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutEmployeeInput
    trips?: TripCreateNestedManyWithoutDriverInput
  }

  export type EmployeeUncheckedCreateWithoutSupportHouseInput = {
    id?: string
    personId: string
    email: string
    password: string
    registrationNumber: string
    type: $Enums.EmployeeType
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutDriverInput
  }

  export type EmployeeCreateOrConnectWithoutSupportHouseInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutSupportHouseInput, EmployeeUncheckedCreateWithoutSupportHouseInput>
  }

  export type EmployeeCreateManySupportHouseInputEnvelope = {
    data: EmployeeCreateManySupportHouseInput | EmployeeCreateManySupportHouseInput[]
    skipDuplicates?: boolean
  }

  export type TripRouteCreateWithoutSupportHouseInput = {
    id?: string
    sequence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutRoutesInput
  }

  export type TripRouteUncheckedCreateWithoutSupportHouseInput = {
    id?: string
    tripId: string
    sequence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripRouteCreateOrConnectWithoutSupportHouseInput = {
    where: TripRouteWhereUniqueInput
    create: XOR<TripRouteCreateWithoutSupportHouseInput, TripRouteUncheckedCreateWithoutSupportHouseInput>
  }

  export type TripRouteCreateManySupportHouseInputEnvelope = {
    data: TripRouteCreateManySupportHouseInput | TripRouteCreateManySupportHouseInput[]
    skipDuplicates?: boolean
  }

  export type AccommodationUpsertWithWhereUniqueWithoutSupportHouseInput = {
    where: AccommodationWhereUniqueInput
    update: XOR<AccommodationUpdateWithoutSupportHouseInput, AccommodationUncheckedUpdateWithoutSupportHouseInput>
    create: XOR<AccommodationCreateWithoutSupportHouseInput, AccommodationUncheckedCreateWithoutSupportHouseInput>
  }

  export type AccommodationUpdateWithWhereUniqueWithoutSupportHouseInput = {
    where: AccommodationWhereUniqueInput
    data: XOR<AccommodationUpdateWithoutSupportHouseInput, AccommodationUncheckedUpdateWithoutSupportHouseInput>
  }

  export type AccommodationUpdateManyWithWhereWithoutSupportHouseInput = {
    where: AccommodationScalarWhereInput
    data: XOR<AccommodationUpdateManyMutationInput, AccommodationUncheckedUpdateManyWithoutSupportHouseInput>
  }

  export type AccommodationScalarWhereInput = {
    AND?: AccommodationScalarWhereInput | AccommodationScalarWhereInput[]
    OR?: AccommodationScalarWhereInput[]
    NOT?: AccommodationScalarWhereInput | AccommodationScalarWhereInput[]
    id?: StringFilter<"Accommodation"> | string
    personId?: StringFilter<"Accommodation"> | string
    supportHouseId?: StringFilter<"Accommodation"> | string
    checkInDate?: DateTimeFilter<"Accommodation"> | Date | string
    checkOutDate?: DateTimeNullableFilter<"Accommodation"> | Date | string | null
    createdAt?: DateTimeFilter<"Accommodation"> | Date | string
    updatedAt?: DateTimeFilter<"Accommodation"> | Date | string
  }

  export type EmployeeUpsertWithWhereUniqueWithoutSupportHouseInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutSupportHouseInput, EmployeeUncheckedUpdateWithoutSupportHouseInput>
    create: XOR<EmployeeCreateWithoutSupportHouseInput, EmployeeUncheckedCreateWithoutSupportHouseInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutSupportHouseInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutSupportHouseInput, EmployeeUncheckedUpdateWithoutSupportHouseInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutSupportHouseInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutSupportHouseInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: StringFilter<"Employee"> | string
    personId?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    password?: StringFilter<"Employee"> | string
    registrationNumber?: StringFilter<"Employee"> | string
    type?: EnumEmployeeTypeFilter<"Employee"> | $Enums.EmployeeType
    supportHouseId?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
  }

  export type TripRouteUpsertWithWhereUniqueWithoutSupportHouseInput = {
    where: TripRouteWhereUniqueInput
    update: XOR<TripRouteUpdateWithoutSupportHouseInput, TripRouteUncheckedUpdateWithoutSupportHouseInput>
    create: XOR<TripRouteCreateWithoutSupportHouseInput, TripRouteUncheckedCreateWithoutSupportHouseInput>
  }

  export type TripRouteUpdateWithWhereUniqueWithoutSupportHouseInput = {
    where: TripRouteWhereUniqueInput
    data: XOR<TripRouteUpdateWithoutSupportHouseInput, TripRouteUncheckedUpdateWithoutSupportHouseInput>
  }

  export type TripRouteUpdateManyWithWhereWithoutSupportHouseInput = {
    where: TripRouteScalarWhereInput
    data: XOR<TripRouteUpdateManyMutationInput, TripRouteUncheckedUpdateManyWithoutSupportHouseInput>
  }

  export type TripRouteScalarWhereInput = {
    AND?: TripRouteScalarWhereInput | TripRouteScalarWhereInput[]
    OR?: TripRouteScalarWhereInput[]
    NOT?: TripRouteScalarWhereInput | TripRouteScalarWhereInput[]
    id?: StringFilter<"TripRoute"> | string
    tripId?: StringFilter<"TripRoute"> | string
    supportHouseId?: StringFilter<"TripRoute"> | string
    sequence?: IntFilter<"TripRoute"> | number
    createdAt?: DateTimeFilter<"TripRoute"> | Date | string
    updatedAt?: DateTimeFilter<"TripRoute"> | Date | string
  }

  export type PersonCreateWithoutAccommodationsInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneCreateNestedManyWithoutPersonInput
    address?: AddressCreateNestedOneWithoutPersonInput
    employee?: EmployeeCreateNestedOneWithoutPersonInput
    documents?: DocumentCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianCreateNestedManyWithoutCompanionInput
    patientGuardianships?: PatientGuardianCreateNestedManyWithoutPatientInput
  }

  export type PersonUncheckedCreateWithoutAccommodationsInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneUncheckedCreateNestedManyWithoutPersonInput
    address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutPersonInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerUncheckedCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutCompanionInput
    patientGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PersonCreateOrConnectWithoutAccommodationsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutAccommodationsInput, PersonUncheckedCreateWithoutAccommodationsInput>
  }

  export type SupportHouseCreateWithoutAccommodationsInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    capacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeCreateNestedManyWithoutSupportHouseInput
    tripRoutes?: TripRouteCreateNestedManyWithoutSupportHouseInput
  }

  export type SupportHouseUncheckedCreateWithoutAccommodationsInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    capacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutSupportHouseInput
    tripRoutes?: TripRouteUncheckedCreateNestedManyWithoutSupportHouseInput
  }

  export type SupportHouseCreateOrConnectWithoutAccommodationsInput = {
    where: SupportHouseWhereUniqueInput
    create: XOR<SupportHouseCreateWithoutAccommodationsInput, SupportHouseUncheckedCreateWithoutAccommodationsInput>
  }

  export type PersonUpsertWithoutAccommodationsInput = {
    update: XOR<PersonUpdateWithoutAccommodationsInput, PersonUncheckedUpdateWithoutAccommodationsInput>
    create: XOR<PersonCreateWithoutAccommodationsInput, PersonUncheckedCreateWithoutAccommodationsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutAccommodationsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutAccommodationsInput, PersonUncheckedUpdateWithoutAccommodationsInput>
  }

  export type PersonUpdateWithoutAccommodationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUpdateManyWithoutPersonNestedInput
    address?: AddressUpdateOneWithoutPersonNestedInput
    employee?: EmployeeUpdateOneWithoutPersonNestedInput
    documents?: DocumentUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUpdateManyWithoutCompanionNestedInput
    patientGuardianships?: PatientGuardianUpdateManyWithoutPatientNestedInput
  }

  export type PersonUncheckedUpdateWithoutAccommodationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUncheckedUpdateManyWithoutPersonNestedInput
    address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutPersonNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUncheckedUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUncheckedUpdateManyWithoutCompanionNestedInput
    patientGuardianships?: PatientGuardianUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type SupportHouseUpsertWithoutAccommodationsInput = {
    update: XOR<SupportHouseUpdateWithoutAccommodationsInput, SupportHouseUncheckedUpdateWithoutAccommodationsInput>
    create: XOR<SupportHouseCreateWithoutAccommodationsInput, SupportHouseUncheckedCreateWithoutAccommodationsInput>
    where?: SupportHouseWhereInput
  }

  export type SupportHouseUpdateToOneWithWhereWithoutAccommodationsInput = {
    where?: SupportHouseWhereInput
    data: XOR<SupportHouseUpdateWithoutAccommodationsInput, SupportHouseUncheckedUpdateWithoutAccommodationsInput>
  }

  export type SupportHouseUpdateWithoutAccommodationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutSupportHouseNestedInput
    tripRoutes?: TripRouteUpdateManyWithoutSupportHouseNestedInput
  }

  export type SupportHouseUncheckedUpdateWithoutAccommodationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutSupportHouseNestedInput
    tripRoutes?: TripRouteUncheckedUpdateManyWithoutSupportHouseNestedInput
  }

  export type PersonCreateWithoutDocumentsInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneCreateNestedManyWithoutPersonInput
    address?: AddressCreateNestedOneWithoutPersonInput
    employee?: EmployeeCreateNestedOneWithoutPersonInput
    accommodations?: AccommodationCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianCreateNestedManyWithoutCompanionInput
    patientGuardianships?: PatientGuardianCreateNestedManyWithoutPatientInput
  }

  export type PersonUncheckedCreateWithoutDocumentsInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneUncheckedCreateNestedManyWithoutPersonInput
    address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutPersonInput
    accommodations?: AccommodationUncheckedCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerUncheckedCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutCompanionInput
    patientGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PersonCreateOrConnectWithoutDocumentsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutDocumentsInput, PersonUncheckedCreateWithoutDocumentsInput>
  }

  export type PersonUpsertWithoutDocumentsInput = {
    update: XOR<PersonUpdateWithoutDocumentsInput, PersonUncheckedUpdateWithoutDocumentsInput>
    create: XOR<PersonCreateWithoutDocumentsInput, PersonUncheckedCreateWithoutDocumentsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutDocumentsInput, PersonUncheckedUpdateWithoutDocumentsInput>
  }

  export type PersonUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUpdateManyWithoutPersonNestedInput
    address?: AddressUpdateOneWithoutPersonNestedInput
    employee?: EmployeeUpdateOneWithoutPersonNestedInput
    accommodations?: AccommodationUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUpdateManyWithoutCompanionNestedInput
    patientGuardianships?: PatientGuardianUpdateManyWithoutPatientNestedInput
  }

  export type PersonUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUncheckedUpdateManyWithoutPersonNestedInput
    address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutPersonNestedInput
    accommodations?: AccommodationUncheckedUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUncheckedUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUncheckedUpdateManyWithoutCompanionNestedInput
    patientGuardianships?: PatientGuardianUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PersonCreateWithoutEmployeeInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneCreateNestedManyWithoutPersonInput
    address?: AddressCreateNestedOneWithoutPersonInput
    documents?: DocumentCreateNestedManyWithoutPersonInput
    accommodations?: AccommodationCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianCreateNestedManyWithoutCompanionInput
    patientGuardianships?: PatientGuardianCreateNestedManyWithoutPatientInput
  }

  export type PersonUncheckedCreateWithoutEmployeeInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneUncheckedCreateNestedManyWithoutPersonInput
    address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPersonInput
    accommodations?: AccommodationUncheckedCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerUncheckedCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutCompanionInput
    patientGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PersonCreateOrConnectWithoutEmployeeInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutEmployeeInput, PersonUncheckedCreateWithoutEmployeeInput>
  }

  export type SupportHouseCreateWithoutEmployeesInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    capacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accommodations?: AccommodationCreateNestedManyWithoutSupportHouseInput
    tripRoutes?: TripRouteCreateNestedManyWithoutSupportHouseInput
  }

  export type SupportHouseUncheckedCreateWithoutEmployeesInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    capacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accommodations?: AccommodationUncheckedCreateNestedManyWithoutSupportHouseInput
    tripRoutes?: TripRouteUncheckedCreateNestedManyWithoutSupportHouseInput
  }

  export type SupportHouseCreateOrConnectWithoutEmployeesInput = {
    where: SupportHouseWhereUniqueInput
    create: XOR<SupportHouseCreateWithoutEmployeesInput, SupportHouseUncheckedCreateWithoutEmployeesInput>
  }

  export type TripCreateWithoutDriverInput = {
    id?: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    passengers?: TripPassengerCreateNestedManyWithoutTripInput
    patientGuardians?: PatientGuardianCreateNestedManyWithoutTripInput
    routes?: TripRouteCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutDriverInput = {
    id?: string
    vehicleId: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    passengers?: TripPassengerUncheckedCreateNestedManyWithoutTripInput
    patientGuardians?: PatientGuardianUncheckedCreateNestedManyWithoutTripInput
    routes?: TripRouteUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutDriverInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput>
  }

  export type TripCreateManyDriverInputEnvelope = {
    data: TripCreateManyDriverInput | TripCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type PersonUpsertWithoutEmployeeInput = {
    update: XOR<PersonUpdateWithoutEmployeeInput, PersonUncheckedUpdateWithoutEmployeeInput>
    create: XOR<PersonCreateWithoutEmployeeInput, PersonUncheckedCreateWithoutEmployeeInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutEmployeeInput, PersonUncheckedUpdateWithoutEmployeeInput>
  }

  export type PersonUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUpdateManyWithoutPersonNestedInput
    address?: AddressUpdateOneWithoutPersonNestedInput
    documents?: DocumentUpdateManyWithoutPersonNestedInput
    accommodations?: AccommodationUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUpdateManyWithoutCompanionNestedInput
    patientGuardianships?: PatientGuardianUpdateManyWithoutPatientNestedInput
  }

  export type PersonUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUncheckedUpdateManyWithoutPersonNestedInput
    address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPersonNestedInput
    accommodations?: AccommodationUncheckedUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUncheckedUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUncheckedUpdateManyWithoutCompanionNestedInput
    patientGuardianships?: PatientGuardianUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type SupportHouseUpsertWithoutEmployeesInput = {
    update: XOR<SupportHouseUpdateWithoutEmployeesInput, SupportHouseUncheckedUpdateWithoutEmployeesInput>
    create: XOR<SupportHouseCreateWithoutEmployeesInput, SupportHouseUncheckedCreateWithoutEmployeesInput>
    where?: SupportHouseWhereInput
  }

  export type SupportHouseUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: SupportHouseWhereInput
    data: XOR<SupportHouseUpdateWithoutEmployeesInput, SupportHouseUncheckedUpdateWithoutEmployeesInput>
  }

  export type SupportHouseUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accommodations?: AccommodationUpdateManyWithoutSupportHouseNestedInput
    tripRoutes?: TripRouteUpdateManyWithoutSupportHouseNestedInput
  }

  export type SupportHouseUncheckedUpdateWithoutEmployeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accommodations?: AccommodationUncheckedUpdateManyWithoutSupportHouseNestedInput
    tripRoutes?: TripRouteUncheckedUpdateManyWithoutSupportHouseNestedInput
  }

  export type TripUpsertWithWhereUniqueWithoutDriverInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutDriverInput, TripUncheckedUpdateWithoutDriverInput>
    create: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput>
  }

  export type TripUpdateWithWhereUniqueWithoutDriverInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutDriverInput, TripUncheckedUpdateWithoutDriverInput>
  }

  export type TripUpdateManyWithWhereWithoutDriverInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutDriverInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: StringFilter<"Trip"> | string
    vehicleId?: StringFilter<"Trip"> | string
    driverId?: StringFilter<"Trip"> | string
    origin?: StringFilter<"Trip"> | string
    destination?: StringFilter<"Trip"> | string
    departureDate?: DateTimeFilter<"Trip"> | Date | string
    arrivalDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
  }

  export type PhoneCreateWithoutPersonInput = {
    id?: string
    number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneUncheckedCreateWithoutPersonInput = {
    id?: string
    number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneCreateOrConnectWithoutPersonInput = {
    where: PhoneWhereUniqueInput
    create: XOR<PhoneCreateWithoutPersonInput, PhoneUncheckedCreateWithoutPersonInput>
  }

  export type PhoneCreateManyPersonInputEnvelope = {
    data: PhoneCreateManyPersonInput | PhoneCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutPersonInput = {
    id?: string
    street: string
    number?: string | null
    neighborhood?: string | null
    city: string
    state: string
    zipCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUncheckedCreateWithoutPersonInput = {
    id?: string
    street: string
    number?: string | null
    neighborhood?: string | null
    city: string
    state: string
    zipCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutPersonInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
  }

  export type EmployeeCreateWithoutPersonInput = {
    id?: string
    email: string
    password: string
    registrationNumber: string
    type: $Enums.EmployeeType
    createdAt?: Date | string
    updatedAt?: Date | string
    supportHouse?: SupportHouseCreateNestedOneWithoutEmployeesInput
    trips?: TripCreateNestedManyWithoutDriverInput
  }

  export type EmployeeUncheckedCreateWithoutPersonInput = {
    id?: string
    email: string
    password: string
    registrationNumber: string
    type: $Enums.EmployeeType
    supportHouseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutDriverInput
  }

  export type EmployeeCreateOrConnectWithoutPersonInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPersonInput, EmployeeUncheckedCreateWithoutPersonInput>
  }

  export type DocumentCreateWithoutPersonInput = {
    id?: string
    name: string
    type: $Enums.DocumentType
    size: number
    path: string
    uploadDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutPersonInput = {
    id?: string
    name: string
    type: $Enums.DocumentType
    size: number
    path: string
    uploadDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutPersonInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutPersonInput, DocumentUncheckedCreateWithoutPersonInput>
  }

  export type DocumentCreateManyPersonInputEnvelope = {
    data: DocumentCreateManyPersonInput | DocumentCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type AccommodationCreateWithoutPersonInput = {
    id?: string
    checkInDate: Date | string
    checkOutDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supportHouse: SupportHouseCreateNestedOneWithoutAccommodationsInput
  }

  export type AccommodationUncheckedCreateWithoutPersonInput = {
    id?: string
    supportHouseId: string
    checkInDate: Date | string
    checkOutDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccommodationCreateOrConnectWithoutPersonInput = {
    where: AccommodationWhereUniqueInput
    create: XOR<AccommodationCreateWithoutPersonInput, AccommodationUncheckedCreateWithoutPersonInput>
  }

  export type AccommodationCreateManyPersonInputEnvelope = {
    data: AccommodationCreateManyPersonInput | AccommodationCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type TripPassengerCreateWithoutPersonInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutPassengersInput
  }

  export type TripPassengerUncheckedCreateWithoutPersonInput = {
    id?: string
    tripId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPassengerCreateOrConnectWithoutPersonInput = {
    where: TripPassengerWhereUniqueInput
    create: XOR<TripPassengerCreateWithoutPersonInput, TripPassengerUncheckedCreateWithoutPersonInput>
  }

  export type TripPassengerCreateManyPersonInputEnvelope = {
    data: TripPassengerCreateManyPersonInput | TripPassengerCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type PatientGuardianCreateWithoutCompanionInput = {
    id?: string
    relationship: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutPatientGuardiansInput
    patient: PersonCreateNestedOneWithoutPatientGuardianshipsInput
  }

  export type PatientGuardianUncheckedCreateWithoutCompanionInput = {
    id?: string
    tripId: string
    patientId: string
    relationship: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientGuardianCreateOrConnectWithoutCompanionInput = {
    where: PatientGuardianWhereUniqueInput
    create: XOR<PatientGuardianCreateWithoutCompanionInput, PatientGuardianUncheckedCreateWithoutCompanionInput>
  }

  export type PatientGuardianCreateManyCompanionInputEnvelope = {
    data: PatientGuardianCreateManyCompanionInput | PatientGuardianCreateManyCompanionInput[]
    skipDuplicates?: boolean
  }

  export type PatientGuardianCreateWithoutPatientInput = {
    id?: string
    relationship: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutPatientGuardiansInput
    companion: PersonCreateNestedOneWithoutCompanionGuardianshipsInput
  }

  export type PatientGuardianUncheckedCreateWithoutPatientInput = {
    id?: string
    tripId: string
    companionId: string
    relationship: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientGuardianCreateOrConnectWithoutPatientInput = {
    where: PatientGuardianWhereUniqueInput
    create: XOR<PatientGuardianCreateWithoutPatientInput, PatientGuardianUncheckedCreateWithoutPatientInput>
  }

  export type PatientGuardianCreateManyPatientInputEnvelope = {
    data: PatientGuardianCreateManyPatientInput | PatientGuardianCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PhoneUpsertWithWhereUniqueWithoutPersonInput = {
    where: PhoneWhereUniqueInput
    update: XOR<PhoneUpdateWithoutPersonInput, PhoneUncheckedUpdateWithoutPersonInput>
    create: XOR<PhoneCreateWithoutPersonInput, PhoneUncheckedCreateWithoutPersonInput>
  }

  export type PhoneUpdateWithWhereUniqueWithoutPersonInput = {
    where: PhoneWhereUniqueInput
    data: XOR<PhoneUpdateWithoutPersonInput, PhoneUncheckedUpdateWithoutPersonInput>
  }

  export type PhoneUpdateManyWithWhereWithoutPersonInput = {
    where: PhoneScalarWhereInput
    data: XOR<PhoneUpdateManyMutationInput, PhoneUncheckedUpdateManyWithoutPersonInput>
  }

  export type PhoneScalarWhereInput = {
    AND?: PhoneScalarWhereInput | PhoneScalarWhereInput[]
    OR?: PhoneScalarWhereInput[]
    NOT?: PhoneScalarWhereInput | PhoneScalarWhereInput[]
    id?: StringFilter<"Phone"> | string
    personId?: StringFilter<"Phone"> | string
    number?: StringFilter<"Phone"> | string
    createdAt?: DateTimeFilter<"Phone"> | Date | string
    updatedAt?: DateTimeFilter<"Phone"> | Date | string
  }

  export type AddressUpsertWithoutPersonInput = {
    update: XOR<AddressUpdateWithoutPersonInput, AddressUncheckedUpdateWithoutPersonInput>
    create: XOR<AddressCreateWithoutPersonInput, AddressUncheckedCreateWithoutPersonInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutPersonInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutPersonInput, AddressUncheckedUpdateWithoutPersonInput>
  }

  export type AddressUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpsertWithoutPersonInput = {
    update: XOR<EmployeeUpdateWithoutPersonInput, EmployeeUncheckedUpdateWithoutPersonInput>
    create: XOR<EmployeeCreateWithoutPersonInput, EmployeeUncheckedCreateWithoutPersonInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutPersonInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutPersonInput, EmployeeUncheckedUpdateWithoutPersonInput>
  }

  export type EmployeeUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supportHouse?: SupportHouseUpdateOneWithoutEmployeesNestedInput
    trips?: TripUpdateManyWithoutDriverNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    supportHouseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutPersonInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutPersonInput, DocumentUncheckedUpdateWithoutPersonInput>
    create: XOR<DocumentCreateWithoutPersonInput, DocumentUncheckedCreateWithoutPersonInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutPersonInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutPersonInput, DocumentUncheckedUpdateWithoutPersonInput>
  }

  export type DocumentUpdateManyWithWhereWithoutPersonInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutPersonInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    personId?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    size?: IntFilter<"Document"> | number
    path?: StringFilter<"Document"> | string
    uploadDate?: DateTimeFilter<"Document"> | Date | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type AccommodationUpsertWithWhereUniqueWithoutPersonInput = {
    where: AccommodationWhereUniqueInput
    update: XOR<AccommodationUpdateWithoutPersonInput, AccommodationUncheckedUpdateWithoutPersonInput>
    create: XOR<AccommodationCreateWithoutPersonInput, AccommodationUncheckedCreateWithoutPersonInput>
  }

  export type AccommodationUpdateWithWhereUniqueWithoutPersonInput = {
    where: AccommodationWhereUniqueInput
    data: XOR<AccommodationUpdateWithoutPersonInput, AccommodationUncheckedUpdateWithoutPersonInput>
  }

  export type AccommodationUpdateManyWithWhereWithoutPersonInput = {
    where: AccommodationScalarWhereInput
    data: XOR<AccommodationUpdateManyMutationInput, AccommodationUncheckedUpdateManyWithoutPersonInput>
  }

  export type TripPassengerUpsertWithWhereUniqueWithoutPersonInput = {
    where: TripPassengerWhereUniqueInput
    update: XOR<TripPassengerUpdateWithoutPersonInput, TripPassengerUncheckedUpdateWithoutPersonInput>
    create: XOR<TripPassengerCreateWithoutPersonInput, TripPassengerUncheckedCreateWithoutPersonInput>
  }

  export type TripPassengerUpdateWithWhereUniqueWithoutPersonInput = {
    where: TripPassengerWhereUniqueInput
    data: XOR<TripPassengerUpdateWithoutPersonInput, TripPassengerUncheckedUpdateWithoutPersonInput>
  }

  export type TripPassengerUpdateManyWithWhereWithoutPersonInput = {
    where: TripPassengerScalarWhereInput
    data: XOR<TripPassengerUpdateManyMutationInput, TripPassengerUncheckedUpdateManyWithoutPersonInput>
  }

  export type TripPassengerScalarWhereInput = {
    AND?: TripPassengerScalarWhereInput | TripPassengerScalarWhereInput[]
    OR?: TripPassengerScalarWhereInput[]
    NOT?: TripPassengerScalarWhereInput | TripPassengerScalarWhereInput[]
    id?: StringFilter<"TripPassenger"> | string
    tripId?: StringFilter<"TripPassenger"> | string
    personId?: StringFilter<"TripPassenger"> | string
    createdAt?: DateTimeFilter<"TripPassenger"> | Date | string
    updatedAt?: DateTimeFilter<"TripPassenger"> | Date | string
  }

  export type PatientGuardianUpsertWithWhereUniqueWithoutCompanionInput = {
    where: PatientGuardianWhereUniqueInput
    update: XOR<PatientGuardianUpdateWithoutCompanionInput, PatientGuardianUncheckedUpdateWithoutCompanionInput>
    create: XOR<PatientGuardianCreateWithoutCompanionInput, PatientGuardianUncheckedCreateWithoutCompanionInput>
  }

  export type PatientGuardianUpdateWithWhereUniqueWithoutCompanionInput = {
    where: PatientGuardianWhereUniqueInput
    data: XOR<PatientGuardianUpdateWithoutCompanionInput, PatientGuardianUncheckedUpdateWithoutCompanionInput>
  }

  export type PatientGuardianUpdateManyWithWhereWithoutCompanionInput = {
    where: PatientGuardianScalarWhereInput
    data: XOR<PatientGuardianUpdateManyMutationInput, PatientGuardianUncheckedUpdateManyWithoutCompanionInput>
  }

  export type PatientGuardianScalarWhereInput = {
    AND?: PatientGuardianScalarWhereInput | PatientGuardianScalarWhereInput[]
    OR?: PatientGuardianScalarWhereInput[]
    NOT?: PatientGuardianScalarWhereInput | PatientGuardianScalarWhereInput[]
    id?: StringFilter<"PatientGuardian"> | string
    tripId?: StringFilter<"PatientGuardian"> | string
    companionId?: StringFilter<"PatientGuardian"> | string
    patientId?: StringFilter<"PatientGuardian"> | string
    relationship?: EnumRelationshipFilter<"PatientGuardian"> | $Enums.Relationship
    createdAt?: DateTimeFilter<"PatientGuardian"> | Date | string
    updatedAt?: DateTimeFilter<"PatientGuardian"> | Date | string
  }

  export type PatientGuardianUpsertWithWhereUniqueWithoutPatientInput = {
    where: PatientGuardianWhereUniqueInput
    update: XOR<PatientGuardianUpdateWithoutPatientInput, PatientGuardianUncheckedUpdateWithoutPatientInput>
    create: XOR<PatientGuardianCreateWithoutPatientInput, PatientGuardianUncheckedCreateWithoutPatientInput>
  }

  export type PatientGuardianUpdateWithWhereUniqueWithoutPatientInput = {
    where: PatientGuardianWhereUniqueInput
    data: XOR<PatientGuardianUpdateWithoutPatientInput, PatientGuardianUncheckedUpdateWithoutPatientInput>
  }

  export type PatientGuardianUpdateManyWithWhereWithoutPatientInput = {
    where: PatientGuardianScalarWhereInput
    data: XOR<PatientGuardianUpdateManyMutationInput, PatientGuardianUncheckedUpdateManyWithoutPatientInput>
  }

  export type PersonCreateWithoutPhonesInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutPersonInput
    employee?: EmployeeCreateNestedOneWithoutPersonInput
    documents?: DocumentCreateNestedManyWithoutPersonInput
    accommodations?: AccommodationCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianCreateNestedManyWithoutCompanionInput
    patientGuardianships?: PatientGuardianCreateNestedManyWithoutPatientInput
  }

  export type PersonUncheckedCreateWithoutPhonesInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutPersonInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPersonInput
    accommodations?: AccommodationUncheckedCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerUncheckedCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutCompanionInput
    patientGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PersonCreateOrConnectWithoutPhonesInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutPhonesInput, PersonUncheckedCreateWithoutPhonesInput>
  }

  export type PersonUpsertWithoutPhonesInput = {
    update: XOR<PersonUpdateWithoutPhonesInput, PersonUncheckedUpdateWithoutPhonesInput>
    create: XOR<PersonCreateWithoutPhonesInput, PersonUncheckedCreateWithoutPhonesInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutPhonesInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutPhonesInput, PersonUncheckedUpdateWithoutPhonesInput>
  }

  export type PersonUpdateWithoutPhonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutPersonNestedInput
    employee?: EmployeeUpdateOneWithoutPersonNestedInput
    documents?: DocumentUpdateManyWithoutPersonNestedInput
    accommodations?: AccommodationUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUpdateManyWithoutCompanionNestedInput
    patientGuardianships?: PatientGuardianUpdateManyWithoutPatientNestedInput
  }

  export type PersonUncheckedUpdateWithoutPhonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutPersonNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPersonNestedInput
    accommodations?: AccommodationUncheckedUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUncheckedUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUncheckedUpdateManyWithoutCompanionNestedInput
    patientGuardianships?: PatientGuardianUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PersonCreateWithoutAddressInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneCreateNestedManyWithoutPersonInput
    employee?: EmployeeCreateNestedOneWithoutPersonInput
    documents?: DocumentCreateNestedManyWithoutPersonInput
    accommodations?: AccommodationCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianCreateNestedManyWithoutCompanionInput
    patientGuardianships?: PatientGuardianCreateNestedManyWithoutPatientInput
  }

  export type PersonUncheckedCreateWithoutAddressInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneUncheckedCreateNestedManyWithoutPersonInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutPersonInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPersonInput
    accommodations?: AccommodationUncheckedCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerUncheckedCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutCompanionInput
    patientGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PersonCreateOrConnectWithoutAddressInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutAddressInput, PersonUncheckedCreateWithoutAddressInput>
  }

  export type PersonUpsertWithoutAddressInput = {
    update: XOR<PersonUpdateWithoutAddressInput, PersonUncheckedUpdateWithoutAddressInput>
    create: XOR<PersonCreateWithoutAddressInput, PersonUncheckedCreateWithoutAddressInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutAddressInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutAddressInput, PersonUncheckedUpdateWithoutAddressInput>
  }

  export type PersonUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUpdateManyWithoutPersonNestedInput
    employee?: EmployeeUpdateOneWithoutPersonNestedInput
    documents?: DocumentUpdateManyWithoutPersonNestedInput
    accommodations?: AccommodationUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUpdateManyWithoutCompanionNestedInput
    patientGuardianships?: PatientGuardianUpdateManyWithoutPatientNestedInput
  }

  export type PersonUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUncheckedUpdateManyWithoutPersonNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutPersonNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPersonNestedInput
    accommodations?: AccommodationUncheckedUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUncheckedUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUncheckedUpdateManyWithoutCompanionNestedInput
    patientGuardianships?: PatientGuardianUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type TripCreateWithoutPatientGuardiansInput = {
    id?: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    driver: EmployeeCreateNestedOneWithoutTripsInput
    passengers?: TripPassengerCreateNestedManyWithoutTripInput
    routes?: TripRouteCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutPatientGuardiansInput = {
    id?: string
    vehicleId: string
    driverId: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    passengers?: TripPassengerUncheckedCreateNestedManyWithoutTripInput
    routes?: TripRouteUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutPatientGuardiansInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutPatientGuardiansInput, TripUncheckedCreateWithoutPatientGuardiansInput>
  }

  export type PersonCreateWithoutCompanionGuardianshipsInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneCreateNestedManyWithoutPersonInput
    address?: AddressCreateNestedOneWithoutPersonInput
    employee?: EmployeeCreateNestedOneWithoutPersonInput
    documents?: DocumentCreateNestedManyWithoutPersonInput
    accommodations?: AccommodationCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerCreateNestedManyWithoutPersonInput
    patientGuardianships?: PatientGuardianCreateNestedManyWithoutPatientInput
  }

  export type PersonUncheckedCreateWithoutCompanionGuardianshipsInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneUncheckedCreateNestedManyWithoutPersonInput
    address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutPersonInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPersonInput
    accommodations?: AccommodationUncheckedCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerUncheckedCreateNestedManyWithoutPersonInput
    patientGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PersonCreateOrConnectWithoutCompanionGuardianshipsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutCompanionGuardianshipsInput, PersonUncheckedCreateWithoutCompanionGuardianshipsInput>
  }

  export type PersonCreateWithoutPatientGuardianshipsInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneCreateNestedManyWithoutPersonInput
    address?: AddressCreateNestedOneWithoutPersonInput
    employee?: EmployeeCreateNestedOneWithoutPersonInput
    documents?: DocumentCreateNestedManyWithoutPersonInput
    accommodations?: AccommodationCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianCreateNestedManyWithoutCompanionInput
  }

  export type PersonUncheckedCreateWithoutPatientGuardianshipsInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneUncheckedCreateNestedManyWithoutPersonInput
    address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutPersonInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPersonInput
    accommodations?: AccommodationUncheckedCreateNestedManyWithoutPersonInput
    tripPassengers?: TripPassengerUncheckedCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutCompanionInput
  }

  export type PersonCreateOrConnectWithoutPatientGuardianshipsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutPatientGuardianshipsInput, PersonUncheckedCreateWithoutPatientGuardianshipsInput>
  }

  export type TripUpsertWithoutPatientGuardiansInput = {
    update: XOR<TripUpdateWithoutPatientGuardiansInput, TripUncheckedUpdateWithoutPatientGuardiansInput>
    create: XOR<TripCreateWithoutPatientGuardiansInput, TripUncheckedCreateWithoutPatientGuardiansInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutPatientGuardiansInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutPatientGuardiansInput, TripUncheckedUpdateWithoutPatientGuardiansInput>
  }

  export type TripUpdateWithoutPatientGuardiansInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    driver?: EmployeeUpdateOneRequiredWithoutTripsNestedInput
    passengers?: TripPassengerUpdateManyWithoutTripNestedInput
    routes?: TripRouteUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutPatientGuardiansInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passengers?: TripPassengerUncheckedUpdateManyWithoutTripNestedInput
    routes?: TripRouteUncheckedUpdateManyWithoutTripNestedInput
  }

  export type PersonUpsertWithoutCompanionGuardianshipsInput = {
    update: XOR<PersonUpdateWithoutCompanionGuardianshipsInput, PersonUncheckedUpdateWithoutCompanionGuardianshipsInput>
    create: XOR<PersonCreateWithoutCompanionGuardianshipsInput, PersonUncheckedCreateWithoutCompanionGuardianshipsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutCompanionGuardianshipsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutCompanionGuardianshipsInput, PersonUncheckedUpdateWithoutCompanionGuardianshipsInput>
  }

  export type PersonUpdateWithoutCompanionGuardianshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUpdateManyWithoutPersonNestedInput
    address?: AddressUpdateOneWithoutPersonNestedInput
    employee?: EmployeeUpdateOneWithoutPersonNestedInput
    documents?: DocumentUpdateManyWithoutPersonNestedInput
    accommodations?: AccommodationUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUpdateManyWithoutPersonNestedInput
    patientGuardianships?: PatientGuardianUpdateManyWithoutPatientNestedInput
  }

  export type PersonUncheckedUpdateWithoutCompanionGuardianshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUncheckedUpdateManyWithoutPersonNestedInput
    address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutPersonNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPersonNestedInput
    accommodations?: AccommodationUncheckedUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUncheckedUpdateManyWithoutPersonNestedInput
    patientGuardianships?: PatientGuardianUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PersonUpsertWithoutPatientGuardianshipsInput = {
    update: XOR<PersonUpdateWithoutPatientGuardianshipsInput, PersonUncheckedUpdateWithoutPatientGuardianshipsInput>
    create: XOR<PersonCreateWithoutPatientGuardianshipsInput, PersonUncheckedCreateWithoutPatientGuardianshipsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutPatientGuardianshipsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutPatientGuardianshipsInput, PersonUncheckedUpdateWithoutPatientGuardianshipsInput>
  }

  export type PersonUpdateWithoutPatientGuardianshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUpdateManyWithoutPersonNestedInput
    address?: AddressUpdateOneWithoutPersonNestedInput
    employee?: EmployeeUpdateOneWithoutPersonNestedInput
    documents?: DocumentUpdateManyWithoutPersonNestedInput
    accommodations?: AccommodationUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUpdateManyWithoutCompanionNestedInput
  }

  export type PersonUncheckedUpdateWithoutPatientGuardianshipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUncheckedUpdateManyWithoutPersonNestedInput
    address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutPersonNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPersonNestedInput
    accommodations?: AccommodationUncheckedUpdateManyWithoutPersonNestedInput
    tripPassengers?: TripPassengerUncheckedUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUncheckedUpdateManyWithoutCompanionNestedInput
  }

  export type TripCreateWithoutVehicleInput = {
    id?: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: EmployeeCreateNestedOneWithoutTripsInput
    passengers?: TripPassengerCreateNestedManyWithoutTripInput
    patientGuardians?: PatientGuardianCreateNestedManyWithoutTripInput
    routes?: TripRouteCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutVehicleInput = {
    id?: string
    driverId: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    passengers?: TripPassengerUncheckedCreateNestedManyWithoutTripInput
    patientGuardians?: PatientGuardianUncheckedCreateNestedManyWithoutTripInput
    routes?: TripRouteUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutVehicleInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput>
  }

  export type TripCreateManyVehicleInputEnvelope = {
    data: TripCreateManyVehicleInput | TripCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type VehicleDocumentCreateWithoutVehicleInput = {
    id?: string
    name: string
    type: $Enums.VehicleDocumentType
    expiryDate?: Date | string | null
    size: number
    path: string
    uploadDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleDocumentUncheckedCreateWithoutVehicleInput = {
    id?: string
    name: string
    type: $Enums.VehicleDocumentType
    expiryDate?: Date | string | null
    size: number
    path: string
    uploadDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleDocumentCreateOrConnectWithoutVehicleInput = {
    where: VehicleDocumentWhereUniqueInput
    create: XOR<VehicleDocumentCreateWithoutVehicleInput, VehicleDocumentUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleDocumentCreateManyVehicleInputEnvelope = {
    data: VehicleDocumentCreateManyVehicleInput | VehicleDocumentCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithWhereUniqueWithoutVehicleInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutVehicleInput, TripUncheckedUpdateWithoutVehicleInput>
    create: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput>
  }

  export type TripUpdateWithWhereUniqueWithoutVehicleInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutVehicleInput, TripUncheckedUpdateWithoutVehicleInput>
  }

  export type TripUpdateManyWithWhereWithoutVehicleInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VehicleDocumentUpsertWithWhereUniqueWithoutVehicleInput = {
    where: VehicleDocumentWhereUniqueInput
    update: XOR<VehicleDocumentUpdateWithoutVehicleInput, VehicleDocumentUncheckedUpdateWithoutVehicleInput>
    create: XOR<VehicleDocumentCreateWithoutVehicleInput, VehicleDocumentUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleDocumentUpdateWithWhereUniqueWithoutVehicleInput = {
    where: VehicleDocumentWhereUniqueInput
    data: XOR<VehicleDocumentUpdateWithoutVehicleInput, VehicleDocumentUncheckedUpdateWithoutVehicleInput>
  }

  export type VehicleDocumentUpdateManyWithWhereWithoutVehicleInput = {
    where: VehicleDocumentScalarWhereInput
    data: XOR<VehicleDocumentUpdateManyMutationInput, VehicleDocumentUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VehicleDocumentScalarWhereInput = {
    AND?: VehicleDocumentScalarWhereInput | VehicleDocumentScalarWhereInput[]
    OR?: VehicleDocumentScalarWhereInput[]
    NOT?: VehicleDocumentScalarWhereInput | VehicleDocumentScalarWhereInput[]
    id?: StringFilter<"VehicleDocument"> | string
    vehicleId?: StringFilter<"VehicleDocument"> | string
    name?: StringFilter<"VehicleDocument"> | string
    type?: EnumVehicleDocumentTypeFilter<"VehicleDocument"> | $Enums.VehicleDocumentType
    expiryDate?: DateTimeNullableFilter<"VehicleDocument"> | Date | string | null
    size?: IntFilter<"VehicleDocument"> | number
    path?: StringFilter<"VehicleDocument"> | string
    uploadDate?: DateTimeFilter<"VehicleDocument"> | Date | string
    createdAt?: DateTimeFilter<"VehicleDocument"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleDocument"> | Date | string
  }

  export type VehicleCreateWithoutTripsInput = {
    id?: string
    plate: string
    chassis: string
    model: string
    year: number
    color: string
    maxCapacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: VehicleDocumentCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutTripsInput = {
    id?: string
    plate: string
    chassis: string
    model: string
    year: number
    color: string
    maxCapacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: VehicleDocumentUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutTripsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
  }

  export type EmployeeCreateWithoutTripsInput = {
    id?: string
    email: string
    password: string
    registrationNumber: string
    type: $Enums.EmployeeType
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutEmployeeInput
    supportHouse?: SupportHouseCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutTripsInput = {
    id?: string
    personId: string
    email: string
    password: string
    registrationNumber: string
    type: $Enums.EmployeeType
    supportHouseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutTripsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutTripsInput, EmployeeUncheckedCreateWithoutTripsInput>
  }

  export type TripPassengerCreateWithoutTripInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutTripPassengersInput
  }

  export type TripPassengerUncheckedCreateWithoutTripInput = {
    id?: string
    personId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPassengerCreateOrConnectWithoutTripInput = {
    where: TripPassengerWhereUniqueInput
    create: XOR<TripPassengerCreateWithoutTripInput, TripPassengerUncheckedCreateWithoutTripInput>
  }

  export type TripPassengerCreateManyTripInputEnvelope = {
    data: TripPassengerCreateManyTripInput | TripPassengerCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type PatientGuardianCreateWithoutTripInput = {
    id?: string
    relationship: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
    companion: PersonCreateNestedOneWithoutCompanionGuardianshipsInput
    patient: PersonCreateNestedOneWithoutPatientGuardianshipsInput
  }

  export type PatientGuardianUncheckedCreateWithoutTripInput = {
    id?: string
    companionId: string
    patientId: string
    relationship: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientGuardianCreateOrConnectWithoutTripInput = {
    where: PatientGuardianWhereUniqueInput
    create: XOR<PatientGuardianCreateWithoutTripInput, PatientGuardianUncheckedCreateWithoutTripInput>
  }

  export type PatientGuardianCreateManyTripInputEnvelope = {
    data: PatientGuardianCreateManyTripInput | PatientGuardianCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type TripRouteCreateWithoutTripInput = {
    id?: string
    sequence: number
    createdAt?: Date | string
    updatedAt?: Date | string
    supportHouse: SupportHouseCreateNestedOneWithoutTripRoutesInput
  }

  export type TripRouteUncheckedCreateWithoutTripInput = {
    id?: string
    supportHouseId: string
    sequence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripRouteCreateOrConnectWithoutTripInput = {
    where: TripRouteWhereUniqueInput
    create: XOR<TripRouteCreateWithoutTripInput, TripRouteUncheckedCreateWithoutTripInput>
  }

  export type TripRouteCreateManyTripInputEnvelope = {
    data: TripRouteCreateManyTripInput | TripRouteCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithoutTripsInput = {
    update: XOR<VehicleUpdateWithoutTripsInput, VehicleUncheckedUpdateWithoutTripsInput>
    create: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutTripsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutTripsInput, VehicleUncheckedUpdateWithoutTripsInput>
  }

  export type VehicleUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    chassis?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    maxCapacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: VehicleDocumentUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    chassis?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    maxCapacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: VehicleDocumentUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type EmployeeUpsertWithoutTripsInput = {
    update: XOR<EmployeeUpdateWithoutTripsInput, EmployeeUncheckedUpdateWithoutTripsInput>
    create: XOR<EmployeeCreateWithoutTripsInput, EmployeeUncheckedCreateWithoutTripsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutTripsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutTripsInput, EmployeeUncheckedUpdateWithoutTripsInput>
  }

  export type EmployeeUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutEmployeeNestedInput
    supportHouse?: SupportHouseUpdateOneWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    supportHouseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPassengerUpsertWithWhereUniqueWithoutTripInput = {
    where: TripPassengerWhereUniqueInput
    update: XOR<TripPassengerUpdateWithoutTripInput, TripPassengerUncheckedUpdateWithoutTripInput>
    create: XOR<TripPassengerCreateWithoutTripInput, TripPassengerUncheckedCreateWithoutTripInput>
  }

  export type TripPassengerUpdateWithWhereUniqueWithoutTripInput = {
    where: TripPassengerWhereUniqueInput
    data: XOR<TripPassengerUpdateWithoutTripInput, TripPassengerUncheckedUpdateWithoutTripInput>
  }

  export type TripPassengerUpdateManyWithWhereWithoutTripInput = {
    where: TripPassengerScalarWhereInput
    data: XOR<TripPassengerUpdateManyMutationInput, TripPassengerUncheckedUpdateManyWithoutTripInput>
  }

  export type PatientGuardianUpsertWithWhereUniqueWithoutTripInput = {
    where: PatientGuardianWhereUniqueInput
    update: XOR<PatientGuardianUpdateWithoutTripInput, PatientGuardianUncheckedUpdateWithoutTripInput>
    create: XOR<PatientGuardianCreateWithoutTripInput, PatientGuardianUncheckedCreateWithoutTripInput>
  }

  export type PatientGuardianUpdateWithWhereUniqueWithoutTripInput = {
    where: PatientGuardianWhereUniqueInput
    data: XOR<PatientGuardianUpdateWithoutTripInput, PatientGuardianUncheckedUpdateWithoutTripInput>
  }

  export type PatientGuardianUpdateManyWithWhereWithoutTripInput = {
    where: PatientGuardianScalarWhereInput
    data: XOR<PatientGuardianUpdateManyMutationInput, PatientGuardianUncheckedUpdateManyWithoutTripInput>
  }

  export type TripRouteUpsertWithWhereUniqueWithoutTripInput = {
    where: TripRouteWhereUniqueInput
    update: XOR<TripRouteUpdateWithoutTripInput, TripRouteUncheckedUpdateWithoutTripInput>
    create: XOR<TripRouteCreateWithoutTripInput, TripRouteUncheckedCreateWithoutTripInput>
  }

  export type TripRouteUpdateWithWhereUniqueWithoutTripInput = {
    where: TripRouteWhereUniqueInput
    data: XOR<TripRouteUpdateWithoutTripInput, TripRouteUncheckedUpdateWithoutTripInput>
  }

  export type TripRouteUpdateManyWithWhereWithoutTripInput = {
    where: TripRouteScalarWhereInput
    data: XOR<TripRouteUpdateManyMutationInput, TripRouteUncheckedUpdateManyWithoutTripInput>
  }

  export type TripCreateWithoutPassengersInput = {
    id?: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    driver: EmployeeCreateNestedOneWithoutTripsInput
    patientGuardians?: PatientGuardianCreateNestedManyWithoutTripInput
    routes?: TripRouteCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutPassengersInput = {
    id?: string
    vehicleId: string
    driverId: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patientGuardians?: PatientGuardianUncheckedCreateNestedManyWithoutTripInput
    routes?: TripRouteUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutPassengersInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutPassengersInput, TripUncheckedCreateWithoutPassengersInput>
  }

  export type PersonCreateWithoutTripPassengersInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneCreateNestedManyWithoutPersonInput
    address?: AddressCreateNestedOneWithoutPersonInput
    employee?: EmployeeCreateNestedOneWithoutPersonInput
    documents?: DocumentCreateNestedManyWithoutPersonInput
    accommodations?: AccommodationCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianCreateNestedManyWithoutCompanionInput
    patientGuardianships?: PatientGuardianCreateNestedManyWithoutPatientInput
  }

  export type PersonUncheckedCreateWithoutTripPassengersInput = {
    id?: string
    cpf: string
    name: string
    birthDate: Date | string
    rg?: string | null
    type: $Enums.PersonType
    medicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    phones?: PhoneUncheckedCreateNestedManyWithoutPersonInput
    address?: AddressUncheckedCreateNestedOneWithoutPersonInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutPersonInput
    documents?: DocumentUncheckedCreateNestedManyWithoutPersonInput
    accommodations?: AccommodationUncheckedCreateNestedManyWithoutPersonInput
    companionGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutCompanionInput
    patientGuardianships?: PatientGuardianUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PersonCreateOrConnectWithoutTripPassengersInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutTripPassengersInput, PersonUncheckedCreateWithoutTripPassengersInput>
  }

  export type TripUpsertWithoutPassengersInput = {
    update: XOR<TripUpdateWithoutPassengersInput, TripUncheckedUpdateWithoutPassengersInput>
    create: XOR<TripCreateWithoutPassengersInput, TripUncheckedCreateWithoutPassengersInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutPassengersInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutPassengersInput, TripUncheckedUpdateWithoutPassengersInput>
  }

  export type TripUpdateWithoutPassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    driver?: EmployeeUpdateOneRequiredWithoutTripsNestedInput
    patientGuardians?: PatientGuardianUpdateManyWithoutTripNestedInput
    routes?: TripRouteUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutPassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientGuardians?: PatientGuardianUncheckedUpdateManyWithoutTripNestedInput
    routes?: TripRouteUncheckedUpdateManyWithoutTripNestedInput
  }

  export type PersonUpsertWithoutTripPassengersInput = {
    update: XOR<PersonUpdateWithoutTripPassengersInput, PersonUncheckedUpdateWithoutTripPassengersInput>
    create: XOR<PersonCreateWithoutTripPassengersInput, PersonUncheckedCreateWithoutTripPassengersInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutTripPassengersInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutTripPassengersInput, PersonUncheckedUpdateWithoutTripPassengersInput>
  }

  export type PersonUpdateWithoutTripPassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUpdateManyWithoutPersonNestedInput
    address?: AddressUpdateOneWithoutPersonNestedInput
    employee?: EmployeeUpdateOneWithoutPersonNestedInput
    documents?: DocumentUpdateManyWithoutPersonNestedInput
    accommodations?: AccommodationUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUpdateManyWithoutCompanionNestedInput
    patientGuardianships?: PatientGuardianUpdateManyWithoutPatientNestedInput
  }

  export type PersonUncheckedUpdateWithoutTripPassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    rg?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPersonTypeFieldUpdateOperationsInput | $Enums.PersonType
    medicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phones?: PhoneUncheckedUpdateManyWithoutPersonNestedInput
    address?: AddressUncheckedUpdateOneWithoutPersonNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutPersonNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutPersonNestedInput
    accommodations?: AccommodationUncheckedUpdateManyWithoutPersonNestedInput
    companionGuardianships?: PatientGuardianUncheckedUpdateManyWithoutCompanionNestedInput
    patientGuardianships?: PatientGuardianUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type TripCreateWithoutRoutesInput = {
    id?: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    driver: EmployeeCreateNestedOneWithoutTripsInput
    passengers?: TripPassengerCreateNestedManyWithoutTripInput
    patientGuardians?: PatientGuardianCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutRoutesInput = {
    id?: string
    vehicleId: string
    driverId: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    passengers?: TripPassengerUncheckedCreateNestedManyWithoutTripInput
    patientGuardians?: PatientGuardianUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutRoutesInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutRoutesInput, TripUncheckedCreateWithoutRoutesInput>
  }

  export type SupportHouseCreateWithoutTripRoutesInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    capacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accommodations?: AccommodationCreateNestedManyWithoutSupportHouseInput
    employees?: EmployeeCreateNestedManyWithoutSupportHouseInput
  }

  export type SupportHouseUncheckedCreateWithoutTripRoutesInput = {
    id?: string
    name: string
    address: string
    phone?: string | null
    capacity?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accommodations?: AccommodationUncheckedCreateNestedManyWithoutSupportHouseInput
    employees?: EmployeeUncheckedCreateNestedManyWithoutSupportHouseInput
  }

  export type SupportHouseCreateOrConnectWithoutTripRoutesInput = {
    where: SupportHouseWhereUniqueInput
    create: XOR<SupportHouseCreateWithoutTripRoutesInput, SupportHouseUncheckedCreateWithoutTripRoutesInput>
  }

  export type TripUpsertWithoutRoutesInput = {
    update: XOR<TripUpdateWithoutRoutesInput, TripUncheckedUpdateWithoutRoutesInput>
    create: XOR<TripCreateWithoutRoutesInput, TripUncheckedCreateWithoutRoutesInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutRoutesInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutRoutesInput, TripUncheckedUpdateWithoutRoutesInput>
  }

  export type TripUpdateWithoutRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    driver?: EmployeeUpdateOneRequiredWithoutTripsNestedInput
    passengers?: TripPassengerUpdateManyWithoutTripNestedInput
    patientGuardians?: PatientGuardianUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passengers?: TripPassengerUncheckedUpdateManyWithoutTripNestedInput
    patientGuardians?: PatientGuardianUncheckedUpdateManyWithoutTripNestedInput
  }

  export type SupportHouseUpsertWithoutTripRoutesInput = {
    update: XOR<SupportHouseUpdateWithoutTripRoutesInput, SupportHouseUncheckedUpdateWithoutTripRoutesInput>
    create: XOR<SupportHouseCreateWithoutTripRoutesInput, SupportHouseUncheckedCreateWithoutTripRoutesInput>
    where?: SupportHouseWhereInput
  }

  export type SupportHouseUpdateToOneWithWhereWithoutTripRoutesInput = {
    where?: SupportHouseWhereInput
    data: XOR<SupportHouseUpdateWithoutTripRoutesInput, SupportHouseUncheckedUpdateWithoutTripRoutesInput>
  }

  export type SupportHouseUpdateWithoutTripRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accommodations?: AccommodationUpdateManyWithoutSupportHouseNestedInput
    employees?: EmployeeUpdateManyWithoutSupportHouseNestedInput
  }

  export type SupportHouseUncheckedUpdateWithoutTripRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accommodations?: AccommodationUncheckedUpdateManyWithoutSupportHouseNestedInput
    employees?: EmployeeUncheckedUpdateManyWithoutSupportHouseNestedInput
  }

  export type VehicleCreateWithoutDocumentsInput = {
    id?: string
    plate: string
    chassis: string
    model: string
    year: number
    color: string
    maxCapacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutDocumentsInput = {
    id?: string
    plate: string
    chassis: string
    model: string
    year: number
    color: string
    maxCapacity: number
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutDocumentsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutDocumentsInput, VehicleUncheckedCreateWithoutDocumentsInput>
  }

  export type VehicleUpsertWithoutDocumentsInput = {
    update: XOR<VehicleUpdateWithoutDocumentsInput, VehicleUncheckedUpdateWithoutDocumentsInput>
    create: XOR<VehicleCreateWithoutDocumentsInput, VehicleUncheckedCreateWithoutDocumentsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutDocumentsInput, VehicleUncheckedUpdateWithoutDocumentsInput>
  }

  export type VehicleUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    chassis?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    maxCapacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    chassis?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    maxCapacity?: IntFieldUpdateOperationsInput | number
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type AccommodationCreateManySupportHouseInput = {
    id?: string
    personId: string
    checkInDate: Date | string
    checkOutDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateManySupportHouseInput = {
    id?: string
    personId: string
    email: string
    password: string
    registrationNumber: string
    type: $Enums.EmployeeType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripRouteCreateManySupportHouseInput = {
    id?: string
    tripId: string
    sequence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccommodationUpdateWithoutSupportHouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutAccommodationsNestedInput
  }

  export type AccommodationUncheckedUpdateWithoutSupportHouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccommodationUncheckedUpdateManyWithoutSupportHouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpdateWithoutSupportHouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutEmployeeNestedInput
    trips?: TripUpdateManyWithoutDriverNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutSupportHouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutSupportHouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripRouteUpdateWithoutSupportHouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutRoutesNestedInput
  }

  export type TripRouteUncheckedUpdateWithoutSupportHouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripRouteUncheckedUpdateManyWithoutSupportHouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateManyDriverInput = {
    id?: string
    vehicleId: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    passengers?: TripPassengerUpdateManyWithoutTripNestedInput
    patientGuardians?: PatientGuardianUpdateManyWithoutTripNestedInput
    routes?: TripRouteUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passengers?: TripPassengerUncheckedUpdateManyWithoutTripNestedInput
    patientGuardians?: PatientGuardianUncheckedUpdateManyWithoutTripNestedInput
    routes?: TripRouteUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneCreateManyPersonInput = {
    id?: string
    number: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateManyPersonInput = {
    id?: string
    name: string
    type: $Enums.DocumentType
    size: number
    path: string
    uploadDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccommodationCreateManyPersonInput = {
    id?: string
    supportHouseId: string
    checkInDate: Date | string
    checkOutDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPassengerCreateManyPersonInput = {
    id?: string
    tripId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientGuardianCreateManyCompanionInput = {
    id?: string
    tripId: string
    patientId: string
    relationship: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientGuardianCreateManyPatientInput = {
    id?: string
    tripId: string
    companionId: string
    relationship: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccommodationUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supportHouse?: SupportHouseUpdateOneRequiredWithoutAccommodationsNestedInput
  }

  export type AccommodationUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    supportHouseId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccommodationUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    supportHouseId?: StringFieldUpdateOperationsInput | string
    checkInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPassengerUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutPassengersNestedInput
  }

  export type TripPassengerUncheckedUpdateWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPassengerUncheckedUpdateManyWithoutPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientGuardianUpdateWithoutCompanionInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutPatientGuardiansNestedInput
    patient?: PersonUpdateOneRequiredWithoutPatientGuardianshipsNestedInput
  }

  export type PatientGuardianUncheckedUpdateWithoutCompanionInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientGuardianUncheckedUpdateManyWithoutCompanionInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientGuardianUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutPatientGuardiansNestedInput
    companion?: PersonUpdateOneRequiredWithoutCompanionGuardianshipsNestedInput
  }

  export type PatientGuardianUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    companionId?: StringFieldUpdateOperationsInput | string
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientGuardianUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    companionId?: StringFieldUpdateOperationsInput | string
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateManyVehicleInput = {
    id?: string
    driverId: string
    origin: string
    destination: string
    departureDate: Date | string
    arrivalDate?: Date | string | null
    status?: $Enums.TripStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleDocumentCreateManyVehicleInput = {
    id?: string
    name: string
    type: $Enums.VehicleDocumentType
    expiryDate?: Date | string | null
    size: number
    path: string
    uploadDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: EmployeeUpdateOneRequiredWithoutTripsNestedInput
    passengers?: TripPassengerUpdateManyWithoutTripNestedInput
    patientGuardians?: PatientGuardianUpdateManyWithoutTripNestedInput
    routes?: TripRouteUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passengers?: TripPassengerUncheckedUpdateManyWithoutTripNestedInput
    patientGuardians?: PatientGuardianUncheckedUpdateManyWithoutTripNestedInput
    routes?: TripRouteUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleDocumentUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleDocumentTypeFieldUpdateOperationsInput | $Enums.VehicleDocumentType
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleDocumentUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleDocumentTypeFieldUpdateOperationsInput | $Enums.VehicleDocumentType
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleDocumentUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumVehicleDocumentTypeFieldUpdateOperationsInput | $Enums.VehicleDocumentType
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPassengerCreateManyTripInput = {
    id?: string
    personId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientGuardianCreateManyTripInput = {
    id?: string
    companionId: string
    patientId: string
    relationship: $Enums.Relationship
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripRouteCreateManyTripInput = {
    id?: string
    supportHouseId: string
    sequence: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripPassengerUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutTripPassengersNestedInput
  }

  export type TripPassengerUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripPassengerUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientGuardianUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companion?: PersonUpdateOneRequiredWithoutCompanionGuardianshipsNestedInput
    patient?: PersonUpdateOneRequiredWithoutPatientGuardianshipsNestedInput
  }

  export type PatientGuardianUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    companionId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientGuardianUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    companionId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    relationship?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripRouteUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supportHouse?: SupportHouseUpdateOneRequiredWithoutTripRoutesNestedInput
  }

  export type TripRouteUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    supportHouseId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripRouteUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    supportHouseId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}