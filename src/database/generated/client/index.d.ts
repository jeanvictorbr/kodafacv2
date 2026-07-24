
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Faccao
 * 
 */
export type Faccao = $Result.DefaultSelection<Prisma.$FaccaoPayload>
/**
 * Model Membro
 * 
 */
export type Membro = $Result.DefaultSelection<Prisma.$MembroPayload>
/**
 * Model ChaveVIP
 * 
 */
export type ChaveVIP = $Result.DefaultSelection<Prisma.$ChaveVIPPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Faccaos
 * const faccaos = await prisma.faccao.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Faccaos
   * const faccaos = await prisma.faccao.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.faccao`: Exposes CRUD operations for the **Faccao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faccaos
    * const faccaos = await prisma.faccao.findMany()
    * ```
    */
  get faccao(): Prisma.FaccaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membro`: Exposes CRUD operations for the **Membro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Membros
    * const membros = await prisma.membro.findMany()
    * ```
    */
  get membro(): Prisma.MembroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chaveVIP`: Exposes CRUD operations for the **ChaveVIP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChaveVIPS
    * const chaveVIPS = await prisma.chaveVIP.findMany()
    * ```
    */
  get chaveVIP(): Prisma.ChaveVIPDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.0
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Faccao: 'Faccao',
    Membro: 'Membro',
    ChaveVIP: 'ChaveVIP'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "faccao" | "membro" | "chaveVIP"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Faccao: {
        payload: Prisma.$FaccaoPayload<ExtArgs>
        fields: Prisma.FaccaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaccaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaccaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaccaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaccaoPayload>
          }
          findFirst: {
            args: Prisma.FaccaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaccaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaccaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaccaoPayload>
          }
          findMany: {
            args: Prisma.FaccaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaccaoPayload>[]
          }
          create: {
            args: Prisma.FaccaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaccaoPayload>
          }
          createMany: {
            args: Prisma.FaccaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FaccaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaccaoPayload>[]
          }
          delete: {
            args: Prisma.FaccaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaccaoPayload>
          }
          update: {
            args: Prisma.FaccaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaccaoPayload>
          }
          deleteMany: {
            args: Prisma.FaccaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaccaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FaccaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaccaoPayload>[]
          }
          upsert: {
            args: Prisma.FaccaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaccaoPayload>
          }
          aggregate: {
            args: Prisma.FaccaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaccao>
          }
          groupBy: {
            args: Prisma.FaccaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaccaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaccaoCountArgs<ExtArgs>
            result: $Utils.Optional<FaccaoCountAggregateOutputType> | number
          }
        }
      }
      Membro: {
        payload: Prisma.$MembroPayload<ExtArgs>
        fields: Prisma.MembroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>
          }
          findFirst: {
            args: Prisma.MembroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>
          }
          findMany: {
            args: Prisma.MembroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>[]
          }
          create: {
            args: Prisma.MembroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>
          }
          createMany: {
            args: Prisma.MembroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>[]
          }
          delete: {
            args: Prisma.MembroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>
          }
          update: {
            args: Prisma.MembroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>
          }
          deleteMany: {
            args: Prisma.MembroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>[]
          }
          upsert: {
            args: Prisma.MembroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembroPayload>
          }
          aggregate: {
            args: Prisma.MembroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembro>
          }
          groupBy: {
            args: Prisma.MembroGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembroGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembroCountArgs<ExtArgs>
            result: $Utils.Optional<MembroCountAggregateOutputType> | number
          }
        }
      }
      ChaveVIP: {
        payload: Prisma.$ChaveVIPPayload<ExtArgs>
        fields: Prisma.ChaveVIPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChaveVIPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaveVIPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChaveVIPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaveVIPPayload>
          }
          findFirst: {
            args: Prisma.ChaveVIPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaveVIPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChaveVIPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaveVIPPayload>
          }
          findMany: {
            args: Prisma.ChaveVIPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaveVIPPayload>[]
          }
          create: {
            args: Prisma.ChaveVIPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaveVIPPayload>
          }
          createMany: {
            args: Prisma.ChaveVIPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChaveVIPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaveVIPPayload>[]
          }
          delete: {
            args: Prisma.ChaveVIPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaveVIPPayload>
          }
          update: {
            args: Prisma.ChaveVIPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaveVIPPayload>
          }
          deleteMany: {
            args: Prisma.ChaveVIPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChaveVIPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChaveVIPUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaveVIPPayload>[]
          }
          upsert: {
            args: Prisma.ChaveVIPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChaveVIPPayload>
          }
          aggregate: {
            args: Prisma.ChaveVIPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChaveVIP>
          }
          groupBy: {
            args: Prisma.ChaveVIPGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChaveVIPGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChaveVIPCountArgs<ExtArgs>
            result: $Utils.Optional<ChaveVIPCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    faccao?: FaccaoOmit
    membro?: MembroOmit
    chaveVIP?: ChaveVIPOmit
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
   * Count Type FaccaoCountOutputType
   */

  export type FaccaoCountOutputType = {
    membros: number
  }

  export type FaccaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membros?: boolean | FaccaoCountOutputTypeCountMembrosArgs
  }

  // Custom InputTypes
  /**
   * FaccaoCountOutputType without action
   */
  export type FaccaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaccaoCountOutputType
     */
    select?: FaccaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FaccaoCountOutputType without action
   */
  export type FaccaoCountOutputTypeCountMembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembroWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Faccao
   */

  export type AggregateFaccao = {
    _count: FaccaoCountAggregateOutputType | null
    _min: FaccaoMinAggregateOutputType | null
    _max: FaccaoMaxAggregateOutputType | null
  }

  export type FaccaoMinAggregateOutputType = {
    guildId: string | null
    nomeFac: string | null
    isPremium: boolean | null
    premiumVenceEm: Date | null
  }

  export type FaccaoMaxAggregateOutputType = {
    guildId: string | null
    nomeFac: string | null
    isPremium: boolean | null
    premiumVenceEm: Date | null
  }

  export type FaccaoCountAggregateOutputType = {
    guildId: number
    nomeFac: number
    isPremium: number
    premiumVenceEm: number
    _all: number
  }


  export type FaccaoMinAggregateInputType = {
    guildId?: true
    nomeFac?: true
    isPremium?: true
    premiumVenceEm?: true
  }

  export type FaccaoMaxAggregateInputType = {
    guildId?: true
    nomeFac?: true
    isPremium?: true
    premiumVenceEm?: true
  }

  export type FaccaoCountAggregateInputType = {
    guildId?: true
    nomeFac?: true
    isPremium?: true
    premiumVenceEm?: true
    _all?: true
  }

  export type FaccaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faccao to aggregate.
     */
    where?: FaccaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faccaos to fetch.
     */
    orderBy?: FaccaoOrderByWithRelationInput | FaccaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaccaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faccaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faccaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faccaos
    **/
    _count?: true | FaccaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaccaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaccaoMaxAggregateInputType
  }

  export type GetFaccaoAggregateType<T extends FaccaoAggregateArgs> = {
        [P in keyof T & keyof AggregateFaccao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaccao[P]>
      : GetScalarType<T[P], AggregateFaccao[P]>
  }




  export type FaccaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaccaoWhereInput
    orderBy?: FaccaoOrderByWithAggregationInput | FaccaoOrderByWithAggregationInput[]
    by: FaccaoScalarFieldEnum[] | FaccaoScalarFieldEnum
    having?: FaccaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaccaoCountAggregateInputType | true
    _min?: FaccaoMinAggregateInputType
    _max?: FaccaoMaxAggregateInputType
  }

  export type FaccaoGroupByOutputType = {
    guildId: string
    nomeFac: string
    isPremium: boolean
    premiumVenceEm: Date | null
    _count: FaccaoCountAggregateOutputType | null
    _min: FaccaoMinAggregateOutputType | null
    _max: FaccaoMaxAggregateOutputType | null
  }

  type GetFaccaoGroupByPayload<T extends FaccaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaccaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaccaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaccaoGroupByOutputType[P]>
            : GetScalarType<T[P], FaccaoGroupByOutputType[P]>
        }
      >
    >


  export type FaccaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    nomeFac?: boolean
    isPremium?: boolean
    premiumVenceEm?: boolean
    membros?: boolean | Faccao$membrosArgs<ExtArgs>
    _count?: boolean | FaccaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faccao"]>

  export type FaccaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    nomeFac?: boolean
    isPremium?: boolean
    premiumVenceEm?: boolean
  }, ExtArgs["result"]["faccao"]>

  export type FaccaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    nomeFac?: boolean
    isPremium?: boolean
    premiumVenceEm?: boolean
  }, ExtArgs["result"]["faccao"]>

  export type FaccaoSelectScalar = {
    guildId?: boolean
    nomeFac?: boolean
    isPremium?: boolean
    premiumVenceEm?: boolean
  }

  export type FaccaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"guildId" | "nomeFac" | "isPremium" | "premiumVenceEm", ExtArgs["result"]["faccao"]>
  export type FaccaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membros?: boolean | Faccao$membrosArgs<ExtArgs>
    _count?: boolean | FaccaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FaccaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FaccaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FaccaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faccao"
    objects: {
      membros: Prisma.$MembroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      guildId: string
      nomeFac: string
      isPremium: boolean
      premiumVenceEm: Date | null
    }, ExtArgs["result"]["faccao"]>
    composites: {}
  }

  type FaccaoGetPayload<S extends boolean | null | undefined | FaccaoDefaultArgs> = $Result.GetResult<Prisma.$FaccaoPayload, S>

  type FaccaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FaccaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaccaoCountAggregateInputType | true
    }

  export interface FaccaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faccao'], meta: { name: 'Faccao' } }
    /**
     * Find zero or one Faccao that matches the filter.
     * @param {FaccaoFindUniqueArgs} args - Arguments to find a Faccao
     * @example
     * // Get one Faccao
     * const faccao = await prisma.faccao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaccaoFindUniqueArgs>(args: SelectSubset<T, FaccaoFindUniqueArgs<ExtArgs>>): Prisma__FaccaoClient<$Result.GetResult<Prisma.$FaccaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faccao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FaccaoFindUniqueOrThrowArgs} args - Arguments to find a Faccao
     * @example
     * // Get one Faccao
     * const faccao = await prisma.faccao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaccaoFindUniqueOrThrowArgs>(args: SelectSubset<T, FaccaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaccaoClient<$Result.GetResult<Prisma.$FaccaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faccao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaccaoFindFirstArgs} args - Arguments to find a Faccao
     * @example
     * // Get one Faccao
     * const faccao = await prisma.faccao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaccaoFindFirstArgs>(args?: SelectSubset<T, FaccaoFindFirstArgs<ExtArgs>>): Prisma__FaccaoClient<$Result.GetResult<Prisma.$FaccaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faccao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaccaoFindFirstOrThrowArgs} args - Arguments to find a Faccao
     * @example
     * // Get one Faccao
     * const faccao = await prisma.faccao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaccaoFindFirstOrThrowArgs>(args?: SelectSubset<T, FaccaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaccaoClient<$Result.GetResult<Prisma.$FaccaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faccaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaccaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faccaos
     * const faccaos = await prisma.faccao.findMany()
     * 
     * // Get first 10 Faccaos
     * const faccaos = await prisma.faccao.findMany({ take: 10 })
     * 
     * // Only select the `guildId`
     * const faccaoWithGuildIdOnly = await prisma.faccao.findMany({ select: { guildId: true } })
     * 
     */
    findMany<T extends FaccaoFindManyArgs>(args?: SelectSubset<T, FaccaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaccaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faccao.
     * @param {FaccaoCreateArgs} args - Arguments to create a Faccao.
     * @example
     * // Create one Faccao
     * const Faccao = await prisma.faccao.create({
     *   data: {
     *     // ... data to create a Faccao
     *   }
     * })
     * 
     */
    create<T extends FaccaoCreateArgs>(args: SelectSubset<T, FaccaoCreateArgs<ExtArgs>>): Prisma__FaccaoClient<$Result.GetResult<Prisma.$FaccaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faccaos.
     * @param {FaccaoCreateManyArgs} args - Arguments to create many Faccaos.
     * @example
     * // Create many Faccaos
     * const faccao = await prisma.faccao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaccaoCreateManyArgs>(args?: SelectSubset<T, FaccaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faccaos and returns the data saved in the database.
     * @param {FaccaoCreateManyAndReturnArgs} args - Arguments to create many Faccaos.
     * @example
     * // Create many Faccaos
     * const faccao = await prisma.faccao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faccaos and only return the `guildId`
     * const faccaoWithGuildIdOnly = await prisma.faccao.createManyAndReturn({
     *   select: { guildId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FaccaoCreateManyAndReturnArgs>(args?: SelectSubset<T, FaccaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaccaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Faccao.
     * @param {FaccaoDeleteArgs} args - Arguments to delete one Faccao.
     * @example
     * // Delete one Faccao
     * const Faccao = await prisma.faccao.delete({
     *   where: {
     *     // ... filter to delete one Faccao
     *   }
     * })
     * 
     */
    delete<T extends FaccaoDeleteArgs>(args: SelectSubset<T, FaccaoDeleteArgs<ExtArgs>>): Prisma__FaccaoClient<$Result.GetResult<Prisma.$FaccaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faccao.
     * @param {FaccaoUpdateArgs} args - Arguments to update one Faccao.
     * @example
     * // Update one Faccao
     * const faccao = await prisma.faccao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaccaoUpdateArgs>(args: SelectSubset<T, FaccaoUpdateArgs<ExtArgs>>): Prisma__FaccaoClient<$Result.GetResult<Prisma.$FaccaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faccaos.
     * @param {FaccaoDeleteManyArgs} args - Arguments to filter Faccaos to delete.
     * @example
     * // Delete a few Faccaos
     * const { count } = await prisma.faccao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaccaoDeleteManyArgs>(args?: SelectSubset<T, FaccaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faccaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaccaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faccaos
     * const faccao = await prisma.faccao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaccaoUpdateManyArgs>(args: SelectSubset<T, FaccaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faccaos and returns the data updated in the database.
     * @param {FaccaoUpdateManyAndReturnArgs} args - Arguments to update many Faccaos.
     * @example
     * // Update many Faccaos
     * const faccao = await prisma.faccao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Faccaos and only return the `guildId`
     * const faccaoWithGuildIdOnly = await prisma.faccao.updateManyAndReturn({
     *   select: { guildId: true },
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
    updateManyAndReturn<T extends FaccaoUpdateManyAndReturnArgs>(args: SelectSubset<T, FaccaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaccaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Faccao.
     * @param {FaccaoUpsertArgs} args - Arguments to update or create a Faccao.
     * @example
     * // Update or create a Faccao
     * const faccao = await prisma.faccao.upsert({
     *   create: {
     *     // ... data to create a Faccao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faccao we want to update
     *   }
     * })
     */
    upsert<T extends FaccaoUpsertArgs>(args: SelectSubset<T, FaccaoUpsertArgs<ExtArgs>>): Prisma__FaccaoClient<$Result.GetResult<Prisma.$FaccaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faccaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaccaoCountArgs} args - Arguments to filter Faccaos to count.
     * @example
     * // Count the number of Faccaos
     * const count = await prisma.faccao.count({
     *   where: {
     *     // ... the filter for the Faccaos we want to count
     *   }
     * })
    **/
    count<T extends FaccaoCountArgs>(
      args?: Subset<T, FaccaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaccaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faccao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaccaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FaccaoAggregateArgs>(args: Subset<T, FaccaoAggregateArgs>): Prisma.PrismaPromise<GetFaccaoAggregateType<T>>

    /**
     * Group by Faccao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaccaoGroupByArgs} args - Group by arguments.
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
      T extends FaccaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaccaoGroupByArgs['orderBy'] }
        : { orderBy?: FaccaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FaccaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaccaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faccao model
   */
  readonly fields: FaccaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faccao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaccaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    membros<T extends Faccao$membrosArgs<ExtArgs> = {}>(args?: Subset<T, Faccao$membrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Faccao model
   */
  interface FaccaoFieldRefs {
    readonly guildId: FieldRef<"Faccao", 'String'>
    readonly nomeFac: FieldRef<"Faccao", 'String'>
    readonly isPremium: FieldRef<"Faccao", 'Boolean'>
    readonly premiumVenceEm: FieldRef<"Faccao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Faccao findUnique
   */
  export type FaccaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faccao
     */
    select?: FaccaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faccao
     */
    omit?: FaccaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaccaoInclude<ExtArgs> | null
    /**
     * Filter, which Faccao to fetch.
     */
    where: FaccaoWhereUniqueInput
  }

  /**
   * Faccao findUniqueOrThrow
   */
  export type FaccaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faccao
     */
    select?: FaccaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faccao
     */
    omit?: FaccaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaccaoInclude<ExtArgs> | null
    /**
     * Filter, which Faccao to fetch.
     */
    where: FaccaoWhereUniqueInput
  }

  /**
   * Faccao findFirst
   */
  export type FaccaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faccao
     */
    select?: FaccaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faccao
     */
    omit?: FaccaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaccaoInclude<ExtArgs> | null
    /**
     * Filter, which Faccao to fetch.
     */
    where?: FaccaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faccaos to fetch.
     */
    orderBy?: FaccaoOrderByWithRelationInput | FaccaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faccaos.
     */
    cursor?: FaccaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faccaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faccaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faccaos.
     */
    distinct?: FaccaoScalarFieldEnum | FaccaoScalarFieldEnum[]
  }

  /**
   * Faccao findFirstOrThrow
   */
  export type FaccaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faccao
     */
    select?: FaccaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faccao
     */
    omit?: FaccaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaccaoInclude<ExtArgs> | null
    /**
     * Filter, which Faccao to fetch.
     */
    where?: FaccaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faccaos to fetch.
     */
    orderBy?: FaccaoOrderByWithRelationInput | FaccaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faccaos.
     */
    cursor?: FaccaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faccaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faccaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faccaos.
     */
    distinct?: FaccaoScalarFieldEnum | FaccaoScalarFieldEnum[]
  }

  /**
   * Faccao findMany
   */
  export type FaccaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faccao
     */
    select?: FaccaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faccao
     */
    omit?: FaccaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaccaoInclude<ExtArgs> | null
    /**
     * Filter, which Faccaos to fetch.
     */
    where?: FaccaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faccaos to fetch.
     */
    orderBy?: FaccaoOrderByWithRelationInput | FaccaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faccaos.
     */
    cursor?: FaccaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faccaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faccaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faccaos.
     */
    distinct?: FaccaoScalarFieldEnum | FaccaoScalarFieldEnum[]
  }

  /**
   * Faccao create
   */
  export type FaccaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faccao
     */
    select?: FaccaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faccao
     */
    omit?: FaccaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaccaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Faccao.
     */
    data: XOR<FaccaoCreateInput, FaccaoUncheckedCreateInput>
  }

  /**
   * Faccao createMany
   */
  export type FaccaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faccaos.
     */
    data: FaccaoCreateManyInput | FaccaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faccao createManyAndReturn
   */
  export type FaccaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faccao
     */
    select?: FaccaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faccao
     */
    omit?: FaccaoOmit<ExtArgs> | null
    /**
     * The data used to create many Faccaos.
     */
    data: FaccaoCreateManyInput | FaccaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faccao update
   */
  export type FaccaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faccao
     */
    select?: FaccaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faccao
     */
    omit?: FaccaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaccaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Faccao.
     */
    data: XOR<FaccaoUpdateInput, FaccaoUncheckedUpdateInput>
    /**
     * Choose, which Faccao to update.
     */
    where: FaccaoWhereUniqueInput
  }

  /**
   * Faccao updateMany
   */
  export type FaccaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faccaos.
     */
    data: XOR<FaccaoUpdateManyMutationInput, FaccaoUncheckedUpdateManyInput>
    /**
     * Filter which Faccaos to update
     */
    where?: FaccaoWhereInput
    /**
     * Limit how many Faccaos to update.
     */
    limit?: number
  }

  /**
   * Faccao updateManyAndReturn
   */
  export type FaccaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faccao
     */
    select?: FaccaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faccao
     */
    omit?: FaccaoOmit<ExtArgs> | null
    /**
     * The data used to update Faccaos.
     */
    data: XOR<FaccaoUpdateManyMutationInput, FaccaoUncheckedUpdateManyInput>
    /**
     * Filter which Faccaos to update
     */
    where?: FaccaoWhereInput
    /**
     * Limit how many Faccaos to update.
     */
    limit?: number
  }

  /**
   * Faccao upsert
   */
  export type FaccaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faccao
     */
    select?: FaccaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faccao
     */
    omit?: FaccaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaccaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Faccao to update in case it exists.
     */
    where: FaccaoWhereUniqueInput
    /**
     * In case the Faccao found by the `where` argument doesn't exist, create a new Faccao with this data.
     */
    create: XOR<FaccaoCreateInput, FaccaoUncheckedCreateInput>
    /**
     * In case the Faccao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaccaoUpdateInput, FaccaoUncheckedUpdateInput>
  }

  /**
   * Faccao delete
   */
  export type FaccaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faccao
     */
    select?: FaccaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faccao
     */
    omit?: FaccaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaccaoInclude<ExtArgs> | null
    /**
     * Filter which Faccao to delete.
     */
    where: FaccaoWhereUniqueInput
  }

  /**
   * Faccao deleteMany
   */
  export type FaccaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faccaos to delete
     */
    where?: FaccaoWhereInput
    /**
     * Limit how many Faccaos to delete.
     */
    limit?: number
  }

  /**
   * Faccao.membros
   */
  export type Faccao$membrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    where?: MembroWhereInput
    orderBy?: MembroOrderByWithRelationInput | MembroOrderByWithRelationInput[]
    cursor?: MembroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembroScalarFieldEnum | MembroScalarFieldEnum[]
  }

  /**
   * Faccao without action
   */
  export type FaccaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faccao
     */
    select?: FaccaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faccao
     */
    omit?: FaccaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaccaoInclude<ExtArgs> | null
  }


  /**
   * Model Membro
   */

  export type AggregateMembro = {
    _count: MembroCountAggregateOutputType | null
    _avg: MembroAvgAggregateOutputType | null
    _sum: MembroSumAggregateOutputType | null
    _min: MembroMinAggregateOutputType | null
    _max: MembroMaxAggregateOutputType | null
  }

  export type MembroAvgAggregateOutputType = {
    xpFidelidade: number | null
    advertencias: number | null
  }

  export type MembroSumAggregateOutputType = {
    xpFidelidade: number | null
    advertencias: number | null
  }

  export type MembroMinAggregateOutputType = {
    userId: string | null
    faccaoId: string | null
    xpFidelidade: number | null
    advertencias: number | null
  }

  export type MembroMaxAggregateOutputType = {
    userId: string | null
    faccaoId: string | null
    xpFidelidade: number | null
    advertencias: number | null
  }

  export type MembroCountAggregateOutputType = {
    userId: number
    faccaoId: number
    xpFidelidade: number
    advertencias: number
    _all: number
  }


  export type MembroAvgAggregateInputType = {
    xpFidelidade?: true
    advertencias?: true
  }

  export type MembroSumAggregateInputType = {
    xpFidelidade?: true
    advertencias?: true
  }

  export type MembroMinAggregateInputType = {
    userId?: true
    faccaoId?: true
    xpFidelidade?: true
    advertencias?: true
  }

  export type MembroMaxAggregateInputType = {
    userId?: true
    faccaoId?: true
    xpFidelidade?: true
    advertencias?: true
  }

  export type MembroCountAggregateInputType = {
    userId?: true
    faccaoId?: true
    xpFidelidade?: true
    advertencias?: true
    _all?: true
  }

  export type MembroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membro to aggregate.
     */
    where?: MembroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membros to fetch.
     */
    orderBy?: MembroOrderByWithRelationInput | MembroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Membros
    **/
    _count?: true | MembroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembroMaxAggregateInputType
  }

  export type GetMembroAggregateType<T extends MembroAggregateArgs> = {
        [P in keyof T & keyof AggregateMembro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembro[P]>
      : GetScalarType<T[P], AggregateMembro[P]>
  }




  export type MembroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembroWhereInput
    orderBy?: MembroOrderByWithAggregationInput | MembroOrderByWithAggregationInput[]
    by: MembroScalarFieldEnum[] | MembroScalarFieldEnum
    having?: MembroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembroCountAggregateInputType | true
    _avg?: MembroAvgAggregateInputType
    _sum?: MembroSumAggregateInputType
    _min?: MembroMinAggregateInputType
    _max?: MembroMaxAggregateInputType
  }

  export type MembroGroupByOutputType = {
    userId: string
    faccaoId: string
    xpFidelidade: number
    advertencias: number
    _count: MembroCountAggregateOutputType | null
    _avg: MembroAvgAggregateOutputType | null
    _sum: MembroSumAggregateOutputType | null
    _min: MembroMinAggregateOutputType | null
    _max: MembroMaxAggregateOutputType | null
  }

  type GetMembroGroupByPayload<T extends MembroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembroGroupByOutputType[P]>
            : GetScalarType<T[P], MembroGroupByOutputType[P]>
        }
      >
    >


  export type MembroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    faccaoId?: boolean
    xpFidelidade?: boolean
    advertencias?: boolean
    faccao?: boolean | FaccaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membro"]>

  export type MembroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    faccaoId?: boolean
    xpFidelidade?: boolean
    advertencias?: boolean
    faccao?: boolean | FaccaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membro"]>

  export type MembroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    faccaoId?: boolean
    xpFidelidade?: boolean
    advertencias?: boolean
    faccao?: boolean | FaccaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membro"]>

  export type MembroSelectScalar = {
    userId?: boolean
    faccaoId?: boolean
    xpFidelidade?: boolean
    advertencias?: boolean
  }

  export type MembroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "faccaoId" | "xpFidelidade" | "advertencias", ExtArgs["result"]["membro"]>
  export type MembroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faccao?: boolean | FaccaoDefaultArgs<ExtArgs>
  }
  export type MembroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faccao?: boolean | FaccaoDefaultArgs<ExtArgs>
  }
  export type MembroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faccao?: boolean | FaccaoDefaultArgs<ExtArgs>
  }

  export type $MembroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membro"
    objects: {
      faccao: Prisma.$FaccaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      faccaoId: string
      xpFidelidade: number
      advertencias: number
    }, ExtArgs["result"]["membro"]>
    composites: {}
  }

  type MembroGetPayload<S extends boolean | null | undefined | MembroDefaultArgs> = $Result.GetResult<Prisma.$MembroPayload, S>

  type MembroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembroCountAggregateInputType | true
    }

  export interface MembroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membro'], meta: { name: 'Membro' } }
    /**
     * Find zero or one Membro that matches the filter.
     * @param {MembroFindUniqueArgs} args - Arguments to find a Membro
     * @example
     * // Get one Membro
     * const membro = await prisma.membro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembroFindUniqueArgs>(args: SelectSubset<T, MembroFindUniqueArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Membro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembroFindUniqueOrThrowArgs} args - Arguments to find a Membro
     * @example
     * // Get one Membro
     * const membro = await prisma.membro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembroFindUniqueOrThrowArgs>(args: SelectSubset<T, MembroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembroFindFirstArgs} args - Arguments to find a Membro
     * @example
     * // Get one Membro
     * const membro = await prisma.membro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembroFindFirstArgs>(args?: SelectSubset<T, MembroFindFirstArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembroFindFirstOrThrowArgs} args - Arguments to find a Membro
     * @example
     * // Get one Membro
     * const membro = await prisma.membro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembroFindFirstOrThrowArgs>(args?: SelectSubset<T, MembroFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Membros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Membros
     * const membros = await prisma.membro.findMany()
     * 
     * // Get first 10 Membros
     * const membros = await prisma.membro.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const membroWithUserIdOnly = await prisma.membro.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends MembroFindManyArgs>(args?: SelectSubset<T, MembroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Membro.
     * @param {MembroCreateArgs} args - Arguments to create a Membro.
     * @example
     * // Create one Membro
     * const Membro = await prisma.membro.create({
     *   data: {
     *     // ... data to create a Membro
     *   }
     * })
     * 
     */
    create<T extends MembroCreateArgs>(args: SelectSubset<T, MembroCreateArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Membros.
     * @param {MembroCreateManyArgs} args - Arguments to create many Membros.
     * @example
     * // Create many Membros
     * const membro = await prisma.membro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembroCreateManyArgs>(args?: SelectSubset<T, MembroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Membros and returns the data saved in the database.
     * @param {MembroCreateManyAndReturnArgs} args - Arguments to create many Membros.
     * @example
     * // Create many Membros
     * const membro = await prisma.membro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Membros and only return the `userId`
     * const membroWithUserIdOnly = await prisma.membro.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembroCreateManyAndReturnArgs>(args?: SelectSubset<T, MembroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Membro.
     * @param {MembroDeleteArgs} args - Arguments to delete one Membro.
     * @example
     * // Delete one Membro
     * const Membro = await prisma.membro.delete({
     *   where: {
     *     // ... filter to delete one Membro
     *   }
     * })
     * 
     */
    delete<T extends MembroDeleteArgs>(args: SelectSubset<T, MembroDeleteArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Membro.
     * @param {MembroUpdateArgs} args - Arguments to update one Membro.
     * @example
     * // Update one Membro
     * const membro = await prisma.membro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembroUpdateArgs>(args: SelectSubset<T, MembroUpdateArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Membros.
     * @param {MembroDeleteManyArgs} args - Arguments to filter Membros to delete.
     * @example
     * // Delete a few Membros
     * const { count } = await prisma.membro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembroDeleteManyArgs>(args?: SelectSubset<T, MembroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Membros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Membros
     * const membro = await prisma.membro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembroUpdateManyArgs>(args: SelectSubset<T, MembroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Membros and returns the data updated in the database.
     * @param {MembroUpdateManyAndReturnArgs} args - Arguments to update many Membros.
     * @example
     * // Update many Membros
     * const membro = await prisma.membro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Membros and only return the `userId`
     * const membroWithUserIdOnly = await prisma.membro.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends MembroUpdateManyAndReturnArgs>(args: SelectSubset<T, MembroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Membro.
     * @param {MembroUpsertArgs} args - Arguments to update or create a Membro.
     * @example
     * // Update or create a Membro
     * const membro = await prisma.membro.upsert({
     *   create: {
     *     // ... data to create a Membro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membro we want to update
     *   }
     * })
     */
    upsert<T extends MembroUpsertArgs>(args: SelectSubset<T, MembroUpsertArgs<ExtArgs>>): Prisma__MembroClient<$Result.GetResult<Prisma.$MembroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Membros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembroCountArgs} args - Arguments to filter Membros to count.
     * @example
     * // Count the number of Membros
     * const count = await prisma.membro.count({
     *   where: {
     *     // ... the filter for the Membros we want to count
     *   }
     * })
    **/
    count<T extends MembroCountArgs>(
      args?: Subset<T, MembroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembroAggregateArgs>(args: Subset<T, MembroAggregateArgs>): Prisma.PrismaPromise<GetMembroAggregateType<T>>

    /**
     * Group by Membro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembroGroupByArgs} args - Group by arguments.
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
      T extends MembroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembroGroupByArgs['orderBy'] }
        : { orderBy?: MembroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Membro model
   */
  readonly fields: MembroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Membro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faccao<T extends FaccaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FaccaoDefaultArgs<ExtArgs>>): Prisma__FaccaoClient<$Result.GetResult<Prisma.$FaccaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Membro model
   */
  interface MembroFieldRefs {
    readonly userId: FieldRef<"Membro", 'String'>
    readonly faccaoId: FieldRef<"Membro", 'String'>
    readonly xpFidelidade: FieldRef<"Membro", 'Int'>
    readonly advertencias: FieldRef<"Membro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Membro findUnique
   */
  export type MembroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * Filter, which Membro to fetch.
     */
    where: MembroWhereUniqueInput
  }

  /**
   * Membro findUniqueOrThrow
   */
  export type MembroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * Filter, which Membro to fetch.
     */
    where: MembroWhereUniqueInput
  }

  /**
   * Membro findFirst
   */
  export type MembroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * Filter, which Membro to fetch.
     */
    where?: MembroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membros to fetch.
     */
    orderBy?: MembroOrderByWithRelationInput | MembroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Membros.
     */
    cursor?: MembroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Membros.
     */
    distinct?: MembroScalarFieldEnum | MembroScalarFieldEnum[]
  }

  /**
   * Membro findFirstOrThrow
   */
  export type MembroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * Filter, which Membro to fetch.
     */
    where?: MembroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membros to fetch.
     */
    orderBy?: MembroOrderByWithRelationInput | MembroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Membros.
     */
    cursor?: MembroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Membros.
     */
    distinct?: MembroScalarFieldEnum | MembroScalarFieldEnum[]
  }

  /**
   * Membro findMany
   */
  export type MembroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * Filter, which Membros to fetch.
     */
    where?: MembroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membros to fetch.
     */
    orderBy?: MembroOrderByWithRelationInput | MembroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Membros.
     */
    cursor?: MembroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Membros.
     */
    distinct?: MembroScalarFieldEnum | MembroScalarFieldEnum[]
  }

  /**
   * Membro create
   */
  export type MembroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * The data needed to create a Membro.
     */
    data: XOR<MembroCreateInput, MembroUncheckedCreateInput>
  }

  /**
   * Membro createMany
   */
  export type MembroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Membros.
     */
    data: MembroCreateManyInput | MembroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Membro createManyAndReturn
   */
  export type MembroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * The data used to create many Membros.
     */
    data: MembroCreateManyInput | MembroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membro update
   */
  export type MembroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * The data needed to update a Membro.
     */
    data: XOR<MembroUpdateInput, MembroUncheckedUpdateInput>
    /**
     * Choose, which Membro to update.
     */
    where: MembroWhereUniqueInput
  }

  /**
   * Membro updateMany
   */
  export type MembroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Membros.
     */
    data: XOR<MembroUpdateManyMutationInput, MembroUncheckedUpdateManyInput>
    /**
     * Filter which Membros to update
     */
    where?: MembroWhereInput
    /**
     * Limit how many Membros to update.
     */
    limit?: number
  }

  /**
   * Membro updateManyAndReturn
   */
  export type MembroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * The data used to update Membros.
     */
    data: XOR<MembroUpdateManyMutationInput, MembroUncheckedUpdateManyInput>
    /**
     * Filter which Membros to update
     */
    where?: MembroWhereInput
    /**
     * Limit how many Membros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membro upsert
   */
  export type MembroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * The filter to search for the Membro to update in case it exists.
     */
    where: MembroWhereUniqueInput
    /**
     * In case the Membro found by the `where` argument doesn't exist, create a new Membro with this data.
     */
    create: XOR<MembroCreateInput, MembroUncheckedCreateInput>
    /**
     * In case the Membro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembroUpdateInput, MembroUncheckedUpdateInput>
  }

  /**
   * Membro delete
   */
  export type MembroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
    /**
     * Filter which Membro to delete.
     */
    where: MembroWhereUniqueInput
  }

  /**
   * Membro deleteMany
   */
  export type MembroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membros to delete
     */
    where?: MembroWhereInput
    /**
     * Limit how many Membros to delete.
     */
    limit?: number
  }

  /**
   * Membro without action
   */
  export type MembroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membro
     */
    select?: MembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membro
     */
    omit?: MembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembroInclude<ExtArgs> | null
  }


  /**
   * Model ChaveVIP
   */

  export type AggregateChaveVIP = {
    _count: ChaveVIPCountAggregateOutputType | null
    _avg: ChaveVIPAvgAggregateOutputType | null
    _sum: ChaveVIPSumAggregateOutputType | null
    _min: ChaveVIPMinAggregateOutputType | null
    _max: ChaveVIPMaxAggregateOutputType | null
  }

  export type ChaveVIPAvgAggregateOutputType = {
    dias: number | null
  }

  export type ChaveVIPSumAggregateOutputType = {
    dias: number | null
  }

  export type ChaveVIPMinAggregateOutputType = {
    keyCode: string | null
    dias: number | null
    usada: boolean | null
  }

  export type ChaveVIPMaxAggregateOutputType = {
    keyCode: string | null
    dias: number | null
    usada: boolean | null
  }

  export type ChaveVIPCountAggregateOutputType = {
    keyCode: number
    dias: number
    usada: number
    _all: number
  }


  export type ChaveVIPAvgAggregateInputType = {
    dias?: true
  }

  export type ChaveVIPSumAggregateInputType = {
    dias?: true
  }

  export type ChaveVIPMinAggregateInputType = {
    keyCode?: true
    dias?: true
    usada?: true
  }

  export type ChaveVIPMaxAggregateInputType = {
    keyCode?: true
    dias?: true
    usada?: true
  }

  export type ChaveVIPCountAggregateInputType = {
    keyCode?: true
    dias?: true
    usada?: true
    _all?: true
  }

  export type ChaveVIPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChaveVIP to aggregate.
     */
    where?: ChaveVIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChaveVIPS to fetch.
     */
    orderBy?: ChaveVIPOrderByWithRelationInput | ChaveVIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChaveVIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChaveVIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChaveVIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChaveVIPS
    **/
    _count?: true | ChaveVIPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChaveVIPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChaveVIPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChaveVIPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChaveVIPMaxAggregateInputType
  }

  export type GetChaveVIPAggregateType<T extends ChaveVIPAggregateArgs> = {
        [P in keyof T & keyof AggregateChaveVIP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChaveVIP[P]>
      : GetScalarType<T[P], AggregateChaveVIP[P]>
  }




  export type ChaveVIPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChaveVIPWhereInput
    orderBy?: ChaveVIPOrderByWithAggregationInput | ChaveVIPOrderByWithAggregationInput[]
    by: ChaveVIPScalarFieldEnum[] | ChaveVIPScalarFieldEnum
    having?: ChaveVIPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChaveVIPCountAggregateInputType | true
    _avg?: ChaveVIPAvgAggregateInputType
    _sum?: ChaveVIPSumAggregateInputType
    _min?: ChaveVIPMinAggregateInputType
    _max?: ChaveVIPMaxAggregateInputType
  }

  export type ChaveVIPGroupByOutputType = {
    keyCode: string
    dias: number
    usada: boolean
    _count: ChaveVIPCountAggregateOutputType | null
    _avg: ChaveVIPAvgAggregateOutputType | null
    _sum: ChaveVIPSumAggregateOutputType | null
    _min: ChaveVIPMinAggregateOutputType | null
    _max: ChaveVIPMaxAggregateOutputType | null
  }

  type GetChaveVIPGroupByPayload<T extends ChaveVIPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChaveVIPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChaveVIPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChaveVIPGroupByOutputType[P]>
            : GetScalarType<T[P], ChaveVIPGroupByOutputType[P]>
        }
      >
    >


  export type ChaveVIPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    keyCode?: boolean
    dias?: boolean
    usada?: boolean
  }, ExtArgs["result"]["chaveVIP"]>

  export type ChaveVIPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    keyCode?: boolean
    dias?: boolean
    usada?: boolean
  }, ExtArgs["result"]["chaveVIP"]>

  export type ChaveVIPSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    keyCode?: boolean
    dias?: boolean
    usada?: boolean
  }, ExtArgs["result"]["chaveVIP"]>

  export type ChaveVIPSelectScalar = {
    keyCode?: boolean
    dias?: boolean
    usada?: boolean
  }

  export type ChaveVIPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"keyCode" | "dias" | "usada", ExtArgs["result"]["chaveVIP"]>

  export type $ChaveVIPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChaveVIP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      keyCode: string
      dias: number
      usada: boolean
    }, ExtArgs["result"]["chaveVIP"]>
    composites: {}
  }

  type ChaveVIPGetPayload<S extends boolean | null | undefined | ChaveVIPDefaultArgs> = $Result.GetResult<Prisma.$ChaveVIPPayload, S>

  type ChaveVIPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChaveVIPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChaveVIPCountAggregateInputType | true
    }

  export interface ChaveVIPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChaveVIP'], meta: { name: 'ChaveVIP' } }
    /**
     * Find zero or one ChaveVIP that matches the filter.
     * @param {ChaveVIPFindUniqueArgs} args - Arguments to find a ChaveVIP
     * @example
     * // Get one ChaveVIP
     * const chaveVIP = await prisma.chaveVIP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChaveVIPFindUniqueArgs>(args: SelectSubset<T, ChaveVIPFindUniqueArgs<ExtArgs>>): Prisma__ChaveVIPClient<$Result.GetResult<Prisma.$ChaveVIPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChaveVIP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChaveVIPFindUniqueOrThrowArgs} args - Arguments to find a ChaveVIP
     * @example
     * // Get one ChaveVIP
     * const chaveVIP = await prisma.chaveVIP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChaveVIPFindUniqueOrThrowArgs>(args: SelectSubset<T, ChaveVIPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChaveVIPClient<$Result.GetResult<Prisma.$ChaveVIPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChaveVIP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaveVIPFindFirstArgs} args - Arguments to find a ChaveVIP
     * @example
     * // Get one ChaveVIP
     * const chaveVIP = await prisma.chaveVIP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChaveVIPFindFirstArgs>(args?: SelectSubset<T, ChaveVIPFindFirstArgs<ExtArgs>>): Prisma__ChaveVIPClient<$Result.GetResult<Prisma.$ChaveVIPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChaveVIP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaveVIPFindFirstOrThrowArgs} args - Arguments to find a ChaveVIP
     * @example
     * // Get one ChaveVIP
     * const chaveVIP = await prisma.chaveVIP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChaveVIPFindFirstOrThrowArgs>(args?: SelectSubset<T, ChaveVIPFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChaveVIPClient<$Result.GetResult<Prisma.$ChaveVIPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChaveVIPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaveVIPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChaveVIPS
     * const chaveVIPS = await prisma.chaveVIP.findMany()
     * 
     * // Get first 10 ChaveVIPS
     * const chaveVIPS = await prisma.chaveVIP.findMany({ take: 10 })
     * 
     * // Only select the `keyCode`
     * const chaveVIPWithKeyCodeOnly = await prisma.chaveVIP.findMany({ select: { keyCode: true } })
     * 
     */
    findMany<T extends ChaveVIPFindManyArgs>(args?: SelectSubset<T, ChaveVIPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaveVIPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChaveVIP.
     * @param {ChaveVIPCreateArgs} args - Arguments to create a ChaveVIP.
     * @example
     * // Create one ChaveVIP
     * const ChaveVIP = await prisma.chaveVIP.create({
     *   data: {
     *     // ... data to create a ChaveVIP
     *   }
     * })
     * 
     */
    create<T extends ChaveVIPCreateArgs>(args: SelectSubset<T, ChaveVIPCreateArgs<ExtArgs>>): Prisma__ChaveVIPClient<$Result.GetResult<Prisma.$ChaveVIPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChaveVIPS.
     * @param {ChaveVIPCreateManyArgs} args - Arguments to create many ChaveVIPS.
     * @example
     * // Create many ChaveVIPS
     * const chaveVIP = await prisma.chaveVIP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChaveVIPCreateManyArgs>(args?: SelectSubset<T, ChaveVIPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChaveVIPS and returns the data saved in the database.
     * @param {ChaveVIPCreateManyAndReturnArgs} args - Arguments to create many ChaveVIPS.
     * @example
     * // Create many ChaveVIPS
     * const chaveVIP = await prisma.chaveVIP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChaveVIPS and only return the `keyCode`
     * const chaveVIPWithKeyCodeOnly = await prisma.chaveVIP.createManyAndReturn({
     *   select: { keyCode: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChaveVIPCreateManyAndReturnArgs>(args?: SelectSubset<T, ChaveVIPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaveVIPPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChaveVIP.
     * @param {ChaveVIPDeleteArgs} args - Arguments to delete one ChaveVIP.
     * @example
     * // Delete one ChaveVIP
     * const ChaveVIP = await prisma.chaveVIP.delete({
     *   where: {
     *     // ... filter to delete one ChaveVIP
     *   }
     * })
     * 
     */
    delete<T extends ChaveVIPDeleteArgs>(args: SelectSubset<T, ChaveVIPDeleteArgs<ExtArgs>>): Prisma__ChaveVIPClient<$Result.GetResult<Prisma.$ChaveVIPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChaveVIP.
     * @param {ChaveVIPUpdateArgs} args - Arguments to update one ChaveVIP.
     * @example
     * // Update one ChaveVIP
     * const chaveVIP = await prisma.chaveVIP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChaveVIPUpdateArgs>(args: SelectSubset<T, ChaveVIPUpdateArgs<ExtArgs>>): Prisma__ChaveVIPClient<$Result.GetResult<Prisma.$ChaveVIPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChaveVIPS.
     * @param {ChaveVIPDeleteManyArgs} args - Arguments to filter ChaveVIPS to delete.
     * @example
     * // Delete a few ChaveVIPS
     * const { count } = await prisma.chaveVIP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChaveVIPDeleteManyArgs>(args?: SelectSubset<T, ChaveVIPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChaveVIPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaveVIPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChaveVIPS
     * const chaveVIP = await prisma.chaveVIP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChaveVIPUpdateManyArgs>(args: SelectSubset<T, ChaveVIPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChaveVIPS and returns the data updated in the database.
     * @param {ChaveVIPUpdateManyAndReturnArgs} args - Arguments to update many ChaveVIPS.
     * @example
     * // Update many ChaveVIPS
     * const chaveVIP = await prisma.chaveVIP.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChaveVIPS and only return the `keyCode`
     * const chaveVIPWithKeyCodeOnly = await prisma.chaveVIP.updateManyAndReturn({
     *   select: { keyCode: true },
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
    updateManyAndReturn<T extends ChaveVIPUpdateManyAndReturnArgs>(args: SelectSubset<T, ChaveVIPUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChaveVIPPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChaveVIP.
     * @param {ChaveVIPUpsertArgs} args - Arguments to update or create a ChaveVIP.
     * @example
     * // Update or create a ChaveVIP
     * const chaveVIP = await prisma.chaveVIP.upsert({
     *   create: {
     *     // ... data to create a ChaveVIP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChaveVIP we want to update
     *   }
     * })
     */
    upsert<T extends ChaveVIPUpsertArgs>(args: SelectSubset<T, ChaveVIPUpsertArgs<ExtArgs>>): Prisma__ChaveVIPClient<$Result.GetResult<Prisma.$ChaveVIPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChaveVIPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaveVIPCountArgs} args - Arguments to filter ChaveVIPS to count.
     * @example
     * // Count the number of ChaveVIPS
     * const count = await prisma.chaveVIP.count({
     *   where: {
     *     // ... the filter for the ChaveVIPS we want to count
     *   }
     * })
    **/
    count<T extends ChaveVIPCountArgs>(
      args?: Subset<T, ChaveVIPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChaveVIPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChaveVIP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaveVIPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChaveVIPAggregateArgs>(args: Subset<T, ChaveVIPAggregateArgs>): Prisma.PrismaPromise<GetChaveVIPAggregateType<T>>

    /**
     * Group by ChaveVIP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChaveVIPGroupByArgs} args - Group by arguments.
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
      T extends ChaveVIPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChaveVIPGroupByArgs['orderBy'] }
        : { orderBy?: ChaveVIPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChaveVIPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChaveVIPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChaveVIP model
   */
  readonly fields: ChaveVIPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChaveVIP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChaveVIPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ChaveVIP model
   */
  interface ChaveVIPFieldRefs {
    readonly keyCode: FieldRef<"ChaveVIP", 'String'>
    readonly dias: FieldRef<"ChaveVIP", 'Int'>
    readonly usada: FieldRef<"ChaveVIP", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ChaveVIP findUnique
   */
  export type ChaveVIPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaveVIP
     */
    select?: ChaveVIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChaveVIP
     */
    omit?: ChaveVIPOmit<ExtArgs> | null
    /**
     * Filter, which ChaveVIP to fetch.
     */
    where: ChaveVIPWhereUniqueInput
  }

  /**
   * ChaveVIP findUniqueOrThrow
   */
  export type ChaveVIPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaveVIP
     */
    select?: ChaveVIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChaveVIP
     */
    omit?: ChaveVIPOmit<ExtArgs> | null
    /**
     * Filter, which ChaveVIP to fetch.
     */
    where: ChaveVIPWhereUniqueInput
  }

  /**
   * ChaveVIP findFirst
   */
  export type ChaveVIPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaveVIP
     */
    select?: ChaveVIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChaveVIP
     */
    omit?: ChaveVIPOmit<ExtArgs> | null
    /**
     * Filter, which ChaveVIP to fetch.
     */
    where?: ChaveVIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChaveVIPS to fetch.
     */
    orderBy?: ChaveVIPOrderByWithRelationInput | ChaveVIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChaveVIPS.
     */
    cursor?: ChaveVIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChaveVIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChaveVIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChaveVIPS.
     */
    distinct?: ChaveVIPScalarFieldEnum | ChaveVIPScalarFieldEnum[]
  }

  /**
   * ChaveVIP findFirstOrThrow
   */
  export type ChaveVIPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaveVIP
     */
    select?: ChaveVIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChaveVIP
     */
    omit?: ChaveVIPOmit<ExtArgs> | null
    /**
     * Filter, which ChaveVIP to fetch.
     */
    where?: ChaveVIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChaveVIPS to fetch.
     */
    orderBy?: ChaveVIPOrderByWithRelationInput | ChaveVIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChaveVIPS.
     */
    cursor?: ChaveVIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChaveVIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChaveVIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChaveVIPS.
     */
    distinct?: ChaveVIPScalarFieldEnum | ChaveVIPScalarFieldEnum[]
  }

  /**
   * ChaveVIP findMany
   */
  export type ChaveVIPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaveVIP
     */
    select?: ChaveVIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChaveVIP
     */
    omit?: ChaveVIPOmit<ExtArgs> | null
    /**
     * Filter, which ChaveVIPS to fetch.
     */
    where?: ChaveVIPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChaveVIPS to fetch.
     */
    orderBy?: ChaveVIPOrderByWithRelationInput | ChaveVIPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChaveVIPS.
     */
    cursor?: ChaveVIPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChaveVIPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChaveVIPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChaveVIPS.
     */
    distinct?: ChaveVIPScalarFieldEnum | ChaveVIPScalarFieldEnum[]
  }

  /**
   * ChaveVIP create
   */
  export type ChaveVIPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaveVIP
     */
    select?: ChaveVIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChaveVIP
     */
    omit?: ChaveVIPOmit<ExtArgs> | null
    /**
     * The data needed to create a ChaveVIP.
     */
    data: XOR<ChaveVIPCreateInput, ChaveVIPUncheckedCreateInput>
  }

  /**
   * ChaveVIP createMany
   */
  export type ChaveVIPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChaveVIPS.
     */
    data: ChaveVIPCreateManyInput | ChaveVIPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChaveVIP createManyAndReturn
   */
  export type ChaveVIPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaveVIP
     */
    select?: ChaveVIPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChaveVIP
     */
    omit?: ChaveVIPOmit<ExtArgs> | null
    /**
     * The data used to create many ChaveVIPS.
     */
    data: ChaveVIPCreateManyInput | ChaveVIPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChaveVIP update
   */
  export type ChaveVIPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaveVIP
     */
    select?: ChaveVIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChaveVIP
     */
    omit?: ChaveVIPOmit<ExtArgs> | null
    /**
     * The data needed to update a ChaveVIP.
     */
    data: XOR<ChaveVIPUpdateInput, ChaveVIPUncheckedUpdateInput>
    /**
     * Choose, which ChaveVIP to update.
     */
    where: ChaveVIPWhereUniqueInput
  }

  /**
   * ChaveVIP updateMany
   */
  export type ChaveVIPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChaveVIPS.
     */
    data: XOR<ChaveVIPUpdateManyMutationInput, ChaveVIPUncheckedUpdateManyInput>
    /**
     * Filter which ChaveVIPS to update
     */
    where?: ChaveVIPWhereInput
    /**
     * Limit how many ChaveVIPS to update.
     */
    limit?: number
  }

  /**
   * ChaveVIP updateManyAndReturn
   */
  export type ChaveVIPUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaveVIP
     */
    select?: ChaveVIPSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChaveVIP
     */
    omit?: ChaveVIPOmit<ExtArgs> | null
    /**
     * The data used to update ChaveVIPS.
     */
    data: XOR<ChaveVIPUpdateManyMutationInput, ChaveVIPUncheckedUpdateManyInput>
    /**
     * Filter which ChaveVIPS to update
     */
    where?: ChaveVIPWhereInput
    /**
     * Limit how many ChaveVIPS to update.
     */
    limit?: number
  }

  /**
   * ChaveVIP upsert
   */
  export type ChaveVIPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaveVIP
     */
    select?: ChaveVIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChaveVIP
     */
    omit?: ChaveVIPOmit<ExtArgs> | null
    /**
     * The filter to search for the ChaveVIP to update in case it exists.
     */
    where: ChaveVIPWhereUniqueInput
    /**
     * In case the ChaveVIP found by the `where` argument doesn't exist, create a new ChaveVIP with this data.
     */
    create: XOR<ChaveVIPCreateInput, ChaveVIPUncheckedCreateInput>
    /**
     * In case the ChaveVIP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChaveVIPUpdateInput, ChaveVIPUncheckedUpdateInput>
  }

  /**
   * ChaveVIP delete
   */
  export type ChaveVIPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaveVIP
     */
    select?: ChaveVIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChaveVIP
     */
    omit?: ChaveVIPOmit<ExtArgs> | null
    /**
     * Filter which ChaveVIP to delete.
     */
    where: ChaveVIPWhereUniqueInput
  }

  /**
   * ChaveVIP deleteMany
   */
  export type ChaveVIPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChaveVIPS to delete
     */
    where?: ChaveVIPWhereInput
    /**
     * Limit how many ChaveVIPS to delete.
     */
    limit?: number
  }

  /**
   * ChaveVIP without action
   */
  export type ChaveVIPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChaveVIP
     */
    select?: ChaveVIPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChaveVIP
     */
    omit?: ChaveVIPOmit<ExtArgs> | null
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


  export const FaccaoScalarFieldEnum: {
    guildId: 'guildId',
    nomeFac: 'nomeFac',
    isPremium: 'isPremium',
    premiumVenceEm: 'premiumVenceEm'
  };

  export type FaccaoScalarFieldEnum = (typeof FaccaoScalarFieldEnum)[keyof typeof FaccaoScalarFieldEnum]


  export const MembroScalarFieldEnum: {
    userId: 'userId',
    faccaoId: 'faccaoId',
    xpFidelidade: 'xpFidelidade',
    advertencias: 'advertencias'
  };

  export type MembroScalarFieldEnum = (typeof MembroScalarFieldEnum)[keyof typeof MembroScalarFieldEnum]


  export const ChaveVIPScalarFieldEnum: {
    keyCode: 'keyCode',
    dias: 'dias',
    usada: 'usada'
  };

  export type ChaveVIPScalarFieldEnum = (typeof ChaveVIPScalarFieldEnum)[keyof typeof ChaveVIPScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type FaccaoWhereInput = {
    AND?: FaccaoWhereInput | FaccaoWhereInput[]
    OR?: FaccaoWhereInput[]
    NOT?: FaccaoWhereInput | FaccaoWhereInput[]
    guildId?: StringFilter<"Faccao"> | string
    nomeFac?: StringFilter<"Faccao"> | string
    isPremium?: BoolFilter<"Faccao"> | boolean
    premiumVenceEm?: DateTimeNullableFilter<"Faccao"> | Date | string | null
    membros?: MembroListRelationFilter
  }

  export type FaccaoOrderByWithRelationInput = {
    guildId?: SortOrder
    nomeFac?: SortOrder
    isPremium?: SortOrder
    premiumVenceEm?: SortOrderInput | SortOrder
    membros?: MembroOrderByRelationAggregateInput
  }

  export type FaccaoWhereUniqueInput = Prisma.AtLeast<{
    guildId?: string
    AND?: FaccaoWhereInput | FaccaoWhereInput[]
    OR?: FaccaoWhereInput[]
    NOT?: FaccaoWhereInput | FaccaoWhereInput[]
    nomeFac?: StringFilter<"Faccao"> | string
    isPremium?: BoolFilter<"Faccao"> | boolean
    premiumVenceEm?: DateTimeNullableFilter<"Faccao"> | Date | string | null
    membros?: MembroListRelationFilter
  }, "guildId">

  export type FaccaoOrderByWithAggregationInput = {
    guildId?: SortOrder
    nomeFac?: SortOrder
    isPremium?: SortOrder
    premiumVenceEm?: SortOrderInput | SortOrder
    _count?: FaccaoCountOrderByAggregateInput
    _max?: FaccaoMaxOrderByAggregateInput
    _min?: FaccaoMinOrderByAggregateInput
  }

  export type FaccaoScalarWhereWithAggregatesInput = {
    AND?: FaccaoScalarWhereWithAggregatesInput | FaccaoScalarWhereWithAggregatesInput[]
    OR?: FaccaoScalarWhereWithAggregatesInput[]
    NOT?: FaccaoScalarWhereWithAggregatesInput | FaccaoScalarWhereWithAggregatesInput[]
    guildId?: StringWithAggregatesFilter<"Faccao"> | string
    nomeFac?: StringWithAggregatesFilter<"Faccao"> | string
    isPremium?: BoolWithAggregatesFilter<"Faccao"> | boolean
    premiumVenceEm?: DateTimeNullableWithAggregatesFilter<"Faccao"> | Date | string | null
  }

  export type MembroWhereInput = {
    AND?: MembroWhereInput | MembroWhereInput[]
    OR?: MembroWhereInput[]
    NOT?: MembroWhereInput | MembroWhereInput[]
    userId?: StringFilter<"Membro"> | string
    faccaoId?: StringFilter<"Membro"> | string
    xpFidelidade?: IntFilter<"Membro"> | number
    advertencias?: IntFilter<"Membro"> | number
    faccao?: XOR<FaccaoScalarRelationFilter, FaccaoWhereInput>
  }

  export type MembroOrderByWithRelationInput = {
    userId?: SortOrder
    faccaoId?: SortOrder
    xpFidelidade?: SortOrder
    advertencias?: SortOrder
    faccao?: FaccaoOrderByWithRelationInput
  }

  export type MembroWhereUniqueInput = Prisma.AtLeast<{
    userId_faccaoId?: MembroUserIdFaccaoIdCompoundUniqueInput
    AND?: MembroWhereInput | MembroWhereInput[]
    OR?: MembroWhereInput[]
    NOT?: MembroWhereInput | MembroWhereInput[]
    userId?: StringFilter<"Membro"> | string
    faccaoId?: StringFilter<"Membro"> | string
    xpFidelidade?: IntFilter<"Membro"> | number
    advertencias?: IntFilter<"Membro"> | number
    faccao?: XOR<FaccaoScalarRelationFilter, FaccaoWhereInput>
  }, "userId_faccaoId">

  export type MembroOrderByWithAggregationInput = {
    userId?: SortOrder
    faccaoId?: SortOrder
    xpFidelidade?: SortOrder
    advertencias?: SortOrder
    _count?: MembroCountOrderByAggregateInput
    _avg?: MembroAvgOrderByAggregateInput
    _max?: MembroMaxOrderByAggregateInput
    _min?: MembroMinOrderByAggregateInput
    _sum?: MembroSumOrderByAggregateInput
  }

  export type MembroScalarWhereWithAggregatesInput = {
    AND?: MembroScalarWhereWithAggregatesInput | MembroScalarWhereWithAggregatesInput[]
    OR?: MembroScalarWhereWithAggregatesInput[]
    NOT?: MembroScalarWhereWithAggregatesInput | MembroScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Membro"> | string
    faccaoId?: StringWithAggregatesFilter<"Membro"> | string
    xpFidelidade?: IntWithAggregatesFilter<"Membro"> | number
    advertencias?: IntWithAggregatesFilter<"Membro"> | number
  }

  export type ChaveVIPWhereInput = {
    AND?: ChaveVIPWhereInput | ChaveVIPWhereInput[]
    OR?: ChaveVIPWhereInput[]
    NOT?: ChaveVIPWhereInput | ChaveVIPWhereInput[]
    keyCode?: StringFilter<"ChaveVIP"> | string
    dias?: IntFilter<"ChaveVIP"> | number
    usada?: BoolFilter<"ChaveVIP"> | boolean
  }

  export type ChaveVIPOrderByWithRelationInput = {
    keyCode?: SortOrder
    dias?: SortOrder
    usada?: SortOrder
  }

  export type ChaveVIPWhereUniqueInput = Prisma.AtLeast<{
    keyCode?: string
    AND?: ChaveVIPWhereInput | ChaveVIPWhereInput[]
    OR?: ChaveVIPWhereInput[]
    NOT?: ChaveVIPWhereInput | ChaveVIPWhereInput[]
    dias?: IntFilter<"ChaveVIP"> | number
    usada?: BoolFilter<"ChaveVIP"> | boolean
  }, "keyCode">

  export type ChaveVIPOrderByWithAggregationInput = {
    keyCode?: SortOrder
    dias?: SortOrder
    usada?: SortOrder
    _count?: ChaveVIPCountOrderByAggregateInput
    _avg?: ChaveVIPAvgOrderByAggregateInput
    _max?: ChaveVIPMaxOrderByAggregateInput
    _min?: ChaveVIPMinOrderByAggregateInput
    _sum?: ChaveVIPSumOrderByAggregateInput
  }

  export type ChaveVIPScalarWhereWithAggregatesInput = {
    AND?: ChaveVIPScalarWhereWithAggregatesInput | ChaveVIPScalarWhereWithAggregatesInput[]
    OR?: ChaveVIPScalarWhereWithAggregatesInput[]
    NOT?: ChaveVIPScalarWhereWithAggregatesInput | ChaveVIPScalarWhereWithAggregatesInput[]
    keyCode?: StringWithAggregatesFilter<"ChaveVIP"> | string
    dias?: IntWithAggregatesFilter<"ChaveVIP"> | number
    usada?: BoolWithAggregatesFilter<"ChaveVIP"> | boolean
  }

  export type FaccaoCreateInput = {
    guildId: string
    nomeFac: string
    isPremium?: boolean
    premiumVenceEm?: Date | string | null
    membros?: MembroCreateNestedManyWithoutFaccaoInput
  }

  export type FaccaoUncheckedCreateInput = {
    guildId: string
    nomeFac: string
    isPremium?: boolean
    premiumVenceEm?: Date | string | null
    membros?: MembroUncheckedCreateNestedManyWithoutFaccaoInput
  }

  export type FaccaoUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    nomeFac?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumVenceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membros?: MembroUpdateManyWithoutFaccaoNestedInput
  }

  export type FaccaoUncheckedUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    nomeFac?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumVenceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membros?: MembroUncheckedUpdateManyWithoutFaccaoNestedInput
  }

  export type FaccaoCreateManyInput = {
    guildId: string
    nomeFac: string
    isPremium?: boolean
    premiumVenceEm?: Date | string | null
  }

  export type FaccaoUpdateManyMutationInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    nomeFac?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumVenceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FaccaoUncheckedUpdateManyInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    nomeFac?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumVenceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MembroCreateInput = {
    userId: string
    xpFidelidade?: number
    advertencias?: number
    faccao: FaccaoCreateNestedOneWithoutMembrosInput
  }

  export type MembroUncheckedCreateInput = {
    userId: string
    faccaoId: string
    xpFidelidade?: number
    advertencias?: number
  }

  export type MembroUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    xpFidelidade?: IntFieldUpdateOperationsInput | number
    advertencias?: IntFieldUpdateOperationsInput | number
    faccao?: FaccaoUpdateOneRequiredWithoutMembrosNestedInput
  }

  export type MembroUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    faccaoId?: StringFieldUpdateOperationsInput | string
    xpFidelidade?: IntFieldUpdateOperationsInput | number
    advertencias?: IntFieldUpdateOperationsInput | number
  }

  export type MembroCreateManyInput = {
    userId: string
    faccaoId: string
    xpFidelidade?: number
    advertencias?: number
  }

  export type MembroUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    xpFidelidade?: IntFieldUpdateOperationsInput | number
    advertencias?: IntFieldUpdateOperationsInput | number
  }

  export type MembroUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    faccaoId?: StringFieldUpdateOperationsInput | string
    xpFidelidade?: IntFieldUpdateOperationsInput | number
    advertencias?: IntFieldUpdateOperationsInput | number
  }

  export type ChaveVIPCreateInput = {
    keyCode: string
    dias: number
    usada?: boolean
  }

  export type ChaveVIPUncheckedCreateInput = {
    keyCode: string
    dias: number
    usada?: boolean
  }

  export type ChaveVIPUpdateInput = {
    keyCode?: StringFieldUpdateOperationsInput | string
    dias?: IntFieldUpdateOperationsInput | number
    usada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChaveVIPUncheckedUpdateInput = {
    keyCode?: StringFieldUpdateOperationsInput | string
    dias?: IntFieldUpdateOperationsInput | number
    usada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChaveVIPCreateManyInput = {
    keyCode: string
    dias: number
    usada?: boolean
  }

  export type ChaveVIPUpdateManyMutationInput = {
    keyCode?: StringFieldUpdateOperationsInput | string
    dias?: IntFieldUpdateOperationsInput | number
    usada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChaveVIPUncheckedUpdateManyInput = {
    keyCode?: StringFieldUpdateOperationsInput | string
    dias?: IntFieldUpdateOperationsInput | number
    usada?: BoolFieldUpdateOperationsInput | boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type MembroListRelationFilter = {
    every?: MembroWhereInput
    some?: MembroWhereInput
    none?: MembroWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MembroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FaccaoCountOrderByAggregateInput = {
    guildId?: SortOrder
    nomeFac?: SortOrder
    isPremium?: SortOrder
    premiumVenceEm?: SortOrder
  }

  export type FaccaoMaxOrderByAggregateInput = {
    guildId?: SortOrder
    nomeFac?: SortOrder
    isPremium?: SortOrder
    premiumVenceEm?: SortOrder
  }

  export type FaccaoMinOrderByAggregateInput = {
    guildId?: SortOrder
    nomeFac?: SortOrder
    isPremium?: SortOrder
    premiumVenceEm?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FaccaoScalarRelationFilter = {
    is?: FaccaoWhereInput
    isNot?: FaccaoWhereInput
  }

  export type MembroUserIdFaccaoIdCompoundUniqueInput = {
    userId: string
    faccaoId: string
  }

  export type MembroCountOrderByAggregateInput = {
    userId?: SortOrder
    faccaoId?: SortOrder
    xpFidelidade?: SortOrder
    advertencias?: SortOrder
  }

  export type MembroAvgOrderByAggregateInput = {
    xpFidelidade?: SortOrder
    advertencias?: SortOrder
  }

  export type MembroMaxOrderByAggregateInput = {
    userId?: SortOrder
    faccaoId?: SortOrder
    xpFidelidade?: SortOrder
    advertencias?: SortOrder
  }

  export type MembroMinOrderByAggregateInput = {
    userId?: SortOrder
    faccaoId?: SortOrder
    xpFidelidade?: SortOrder
    advertencias?: SortOrder
  }

  export type MembroSumOrderByAggregateInput = {
    xpFidelidade?: SortOrder
    advertencias?: SortOrder
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

  export type ChaveVIPCountOrderByAggregateInput = {
    keyCode?: SortOrder
    dias?: SortOrder
    usada?: SortOrder
  }

  export type ChaveVIPAvgOrderByAggregateInput = {
    dias?: SortOrder
  }

  export type ChaveVIPMaxOrderByAggregateInput = {
    keyCode?: SortOrder
    dias?: SortOrder
    usada?: SortOrder
  }

  export type ChaveVIPMinOrderByAggregateInput = {
    keyCode?: SortOrder
    dias?: SortOrder
    usada?: SortOrder
  }

  export type ChaveVIPSumOrderByAggregateInput = {
    dias?: SortOrder
  }

  export type MembroCreateNestedManyWithoutFaccaoInput = {
    create?: XOR<MembroCreateWithoutFaccaoInput, MembroUncheckedCreateWithoutFaccaoInput> | MembroCreateWithoutFaccaoInput[] | MembroUncheckedCreateWithoutFaccaoInput[]
    connectOrCreate?: MembroCreateOrConnectWithoutFaccaoInput | MembroCreateOrConnectWithoutFaccaoInput[]
    createMany?: MembroCreateManyFaccaoInputEnvelope
    connect?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
  }

  export type MembroUncheckedCreateNestedManyWithoutFaccaoInput = {
    create?: XOR<MembroCreateWithoutFaccaoInput, MembroUncheckedCreateWithoutFaccaoInput> | MembroCreateWithoutFaccaoInput[] | MembroUncheckedCreateWithoutFaccaoInput[]
    connectOrCreate?: MembroCreateOrConnectWithoutFaccaoInput | MembroCreateOrConnectWithoutFaccaoInput[]
    createMany?: MembroCreateManyFaccaoInputEnvelope
    connect?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MembroUpdateManyWithoutFaccaoNestedInput = {
    create?: XOR<MembroCreateWithoutFaccaoInput, MembroUncheckedCreateWithoutFaccaoInput> | MembroCreateWithoutFaccaoInput[] | MembroUncheckedCreateWithoutFaccaoInput[]
    connectOrCreate?: MembroCreateOrConnectWithoutFaccaoInput | MembroCreateOrConnectWithoutFaccaoInput[]
    upsert?: MembroUpsertWithWhereUniqueWithoutFaccaoInput | MembroUpsertWithWhereUniqueWithoutFaccaoInput[]
    createMany?: MembroCreateManyFaccaoInputEnvelope
    set?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    disconnect?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    delete?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    connect?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    update?: MembroUpdateWithWhereUniqueWithoutFaccaoInput | MembroUpdateWithWhereUniqueWithoutFaccaoInput[]
    updateMany?: MembroUpdateManyWithWhereWithoutFaccaoInput | MembroUpdateManyWithWhereWithoutFaccaoInput[]
    deleteMany?: MembroScalarWhereInput | MembroScalarWhereInput[]
  }

  export type MembroUncheckedUpdateManyWithoutFaccaoNestedInput = {
    create?: XOR<MembroCreateWithoutFaccaoInput, MembroUncheckedCreateWithoutFaccaoInput> | MembroCreateWithoutFaccaoInput[] | MembroUncheckedCreateWithoutFaccaoInput[]
    connectOrCreate?: MembroCreateOrConnectWithoutFaccaoInput | MembroCreateOrConnectWithoutFaccaoInput[]
    upsert?: MembroUpsertWithWhereUniqueWithoutFaccaoInput | MembroUpsertWithWhereUniqueWithoutFaccaoInput[]
    createMany?: MembroCreateManyFaccaoInputEnvelope
    set?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    disconnect?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    delete?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    connect?: MembroWhereUniqueInput | MembroWhereUniqueInput[]
    update?: MembroUpdateWithWhereUniqueWithoutFaccaoInput | MembroUpdateWithWhereUniqueWithoutFaccaoInput[]
    updateMany?: MembroUpdateManyWithWhereWithoutFaccaoInput | MembroUpdateManyWithWhereWithoutFaccaoInput[]
    deleteMany?: MembroScalarWhereInput | MembroScalarWhereInput[]
  }

  export type FaccaoCreateNestedOneWithoutMembrosInput = {
    create?: XOR<FaccaoCreateWithoutMembrosInput, FaccaoUncheckedCreateWithoutMembrosInput>
    connectOrCreate?: FaccaoCreateOrConnectWithoutMembrosInput
    connect?: FaccaoWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FaccaoUpdateOneRequiredWithoutMembrosNestedInput = {
    create?: XOR<FaccaoCreateWithoutMembrosInput, FaccaoUncheckedCreateWithoutMembrosInput>
    connectOrCreate?: FaccaoCreateOrConnectWithoutMembrosInput
    upsert?: FaccaoUpsertWithoutMembrosInput
    connect?: FaccaoWhereUniqueInput
    update?: XOR<XOR<FaccaoUpdateToOneWithWhereWithoutMembrosInput, FaccaoUpdateWithoutMembrosInput>, FaccaoUncheckedUpdateWithoutMembrosInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MembroCreateWithoutFaccaoInput = {
    userId: string
    xpFidelidade?: number
    advertencias?: number
  }

  export type MembroUncheckedCreateWithoutFaccaoInput = {
    userId: string
    xpFidelidade?: number
    advertencias?: number
  }

  export type MembroCreateOrConnectWithoutFaccaoInput = {
    where: MembroWhereUniqueInput
    create: XOR<MembroCreateWithoutFaccaoInput, MembroUncheckedCreateWithoutFaccaoInput>
  }

  export type MembroCreateManyFaccaoInputEnvelope = {
    data: MembroCreateManyFaccaoInput | MembroCreateManyFaccaoInput[]
    skipDuplicates?: boolean
  }

  export type MembroUpsertWithWhereUniqueWithoutFaccaoInput = {
    where: MembroWhereUniqueInput
    update: XOR<MembroUpdateWithoutFaccaoInput, MembroUncheckedUpdateWithoutFaccaoInput>
    create: XOR<MembroCreateWithoutFaccaoInput, MembroUncheckedCreateWithoutFaccaoInput>
  }

  export type MembroUpdateWithWhereUniqueWithoutFaccaoInput = {
    where: MembroWhereUniqueInput
    data: XOR<MembroUpdateWithoutFaccaoInput, MembroUncheckedUpdateWithoutFaccaoInput>
  }

  export type MembroUpdateManyWithWhereWithoutFaccaoInput = {
    where: MembroScalarWhereInput
    data: XOR<MembroUpdateManyMutationInput, MembroUncheckedUpdateManyWithoutFaccaoInput>
  }

  export type MembroScalarWhereInput = {
    AND?: MembroScalarWhereInput | MembroScalarWhereInput[]
    OR?: MembroScalarWhereInput[]
    NOT?: MembroScalarWhereInput | MembroScalarWhereInput[]
    userId?: StringFilter<"Membro"> | string
    faccaoId?: StringFilter<"Membro"> | string
    xpFidelidade?: IntFilter<"Membro"> | number
    advertencias?: IntFilter<"Membro"> | number
  }

  export type FaccaoCreateWithoutMembrosInput = {
    guildId: string
    nomeFac: string
    isPremium?: boolean
    premiumVenceEm?: Date | string | null
  }

  export type FaccaoUncheckedCreateWithoutMembrosInput = {
    guildId: string
    nomeFac: string
    isPremium?: boolean
    premiumVenceEm?: Date | string | null
  }

  export type FaccaoCreateOrConnectWithoutMembrosInput = {
    where: FaccaoWhereUniqueInput
    create: XOR<FaccaoCreateWithoutMembrosInput, FaccaoUncheckedCreateWithoutMembrosInput>
  }

  export type FaccaoUpsertWithoutMembrosInput = {
    update: XOR<FaccaoUpdateWithoutMembrosInput, FaccaoUncheckedUpdateWithoutMembrosInput>
    create: XOR<FaccaoCreateWithoutMembrosInput, FaccaoUncheckedCreateWithoutMembrosInput>
    where?: FaccaoWhereInput
  }

  export type FaccaoUpdateToOneWithWhereWithoutMembrosInput = {
    where?: FaccaoWhereInput
    data: XOR<FaccaoUpdateWithoutMembrosInput, FaccaoUncheckedUpdateWithoutMembrosInput>
  }

  export type FaccaoUpdateWithoutMembrosInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    nomeFac?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumVenceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FaccaoUncheckedUpdateWithoutMembrosInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    nomeFac?: StringFieldUpdateOperationsInput | string
    isPremium?: BoolFieldUpdateOperationsInput | boolean
    premiumVenceEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MembroCreateManyFaccaoInput = {
    userId: string
    xpFidelidade?: number
    advertencias?: number
  }

  export type MembroUpdateWithoutFaccaoInput = {
    userId?: StringFieldUpdateOperationsInput | string
    xpFidelidade?: IntFieldUpdateOperationsInput | number
    advertencias?: IntFieldUpdateOperationsInput | number
  }

  export type MembroUncheckedUpdateWithoutFaccaoInput = {
    userId?: StringFieldUpdateOperationsInput | string
    xpFidelidade?: IntFieldUpdateOperationsInput | number
    advertencias?: IntFieldUpdateOperationsInput | number
  }

  export type MembroUncheckedUpdateManyWithoutFaccaoInput = {
    userId?: StringFieldUpdateOperationsInput | string
    xpFidelidade?: IntFieldUpdateOperationsInput | number
    advertencias?: IntFieldUpdateOperationsInput | number
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