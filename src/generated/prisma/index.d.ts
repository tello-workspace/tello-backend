
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model OrganizationMember
 * 
 */
export type OrganizationMember = $Result.DefaultSelection<Prisma.$OrganizationMemberPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Column
 * 
 */
export type Column = $Result.DefaultSelection<Prisma.$ColumnPayload>
/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Label
 * 
 */
export type Label = $Result.DefaultSelection<Prisma.$LabelPayload>
/**
 * Model CardLabel
 * 
 */
export type CardLabel = $Result.DefaultSelection<Prisma.$CardLabelPayload>
/**
 * Model CardDependency
 * 
 */
export type CardDependency = $Result.DefaultSelection<Prisma.$CardDependencyPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const ActivityType: {
  CARD_CREATED: 'CARD_CREATED',
  CARD_UPDATED: 'CARD_UPDATED',
  CARD_MOVED: 'CARD_MOVED',
  CARD_ASSIGNED: 'CARD_ASSIGNED',
  CARD_COMPLETED: 'CARD_COMPLETED',
  COMMENT_ADDED: 'COMMENT_ADDED',
  MEMBER_JOINED: 'MEMBER_JOINED',
  DEPENDENCY_ADDED: 'DEPENDENCY_ADDED'
};

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]


export const NotificationType: {
  ASSIGNED: 'ASSIGNED',
  BLOCKER_RESOLVED: 'BLOCKER_RESOLVED',
  DEADLINE_RISK: 'DEADLINE_RISK',
  STALE_CARD: 'STALE_CARD',
  WIP_EXCEEDED: 'WIP_EXCEEDED'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type ActivityType = $Enums.ActivityType

export const ActivityType: typeof $Enums.ActivityType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationMember`: Exposes CRUD operations for the **OrganizationMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationMembers
    * const organizationMembers = await prisma.organizationMember.findMany()
    * ```
    */
  get organizationMember(): Prisma.OrganizationMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.column`: Exposes CRUD operations for the **Column** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Columns
    * const columns = await prisma.column.findMany()
    * ```
    */
  get column(): Prisma.ColumnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.label`: Exposes CRUD operations for the **Label** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Labels
    * const labels = await prisma.label.findMany()
    * ```
    */
  get label(): Prisma.LabelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardLabel`: Exposes CRUD operations for the **CardLabel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardLabels
    * const cardLabels = await prisma.cardLabel.findMany()
    * ```
    */
  get cardLabel(): Prisma.CardLabelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardDependency`: Exposes CRUD operations for the **CardDependency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardDependencies
    * const cardDependencies = await prisma.cardDependency.findMany()
    * ```
    */
  get cardDependency(): Prisma.CardDependencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    User: 'User',
    Organization: 'Organization',
    OrganizationMember: 'OrganizationMember',
    Project: 'Project',
    Column: 'Column',
    Card: 'Card',
    Comment: 'Comment',
    Label: 'Label',
    CardLabel: 'CardLabel',
    CardDependency: 'CardDependency',
    Activity: 'Activity',
    Notification: 'Notification'
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
      modelProps: "user" | "organization" | "organizationMember" | "project" | "column" | "card" | "comment" | "label" | "cardLabel" | "cardDependency" | "activity" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      OrganizationMember: {
        payload: Prisma.$OrganizationMemberPayload<ExtArgs>
        fields: Prisma.OrganizationMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          findFirst: {
            args: Prisma.OrganizationMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          findMany: {
            args: Prisma.OrganizationMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          create: {
            args: Prisma.OrganizationMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          createMany: {
            args: Prisma.OrganizationMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          delete: {
            args: Prisma.OrganizationMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          update: {
            args: Prisma.OrganizationMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          aggregate: {
            args: Prisma.OrganizationMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationMember>
          }
          groupBy: {
            args: Prisma.OrganizationMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationMemberCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMemberCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Column: {
        payload: Prisma.$ColumnPayload<ExtArgs>
        fields: Prisma.ColumnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColumnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColumnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          findFirst: {
            args: Prisma.ColumnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColumnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          findMany: {
            args: Prisma.ColumnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[]
          }
          create: {
            args: Prisma.ColumnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          createMany: {
            args: Prisma.ColumnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColumnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[]
          }
          delete: {
            args: Prisma.ColumnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          update: {
            args: Prisma.ColumnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          deleteMany: {
            args: Prisma.ColumnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColumnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColumnUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[]
          }
          upsert: {
            args: Prisma.ColumnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          aggregate: {
            args: Prisma.ColumnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColumn>
          }
          groupBy: {
            args: Prisma.ColumnGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColumnGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColumnCountArgs<ExtArgs>
            result: $Utils.Optional<ColumnCountAggregateOutputType> | number
          }
        }
      }
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Label: {
        payload: Prisma.$LabelPayload<ExtArgs>
        fields: Prisma.LabelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          findFirst: {
            args: Prisma.LabelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          findMany: {
            args: Prisma.LabelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>[]
          }
          create: {
            args: Prisma.LabelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          createMany: {
            args: Prisma.LabelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>[]
          }
          delete: {
            args: Prisma.LabelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          update: {
            args: Prisma.LabelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          deleteMany: {
            args: Prisma.LabelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>[]
          }
          upsert: {
            args: Prisma.LabelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          aggregate: {
            args: Prisma.LabelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabel>
          }
          groupBy: {
            args: Prisma.LabelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabelCountArgs<ExtArgs>
            result: $Utils.Optional<LabelCountAggregateOutputType> | number
          }
        }
      }
      CardLabel: {
        payload: Prisma.$CardLabelPayload<ExtArgs>
        fields: Prisma.CardLabelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardLabelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLabelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardLabelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLabelPayload>
          }
          findFirst: {
            args: Prisma.CardLabelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLabelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardLabelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLabelPayload>
          }
          findMany: {
            args: Prisma.CardLabelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLabelPayload>[]
          }
          create: {
            args: Prisma.CardLabelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLabelPayload>
          }
          createMany: {
            args: Prisma.CardLabelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardLabelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLabelPayload>[]
          }
          delete: {
            args: Prisma.CardLabelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLabelPayload>
          }
          update: {
            args: Prisma.CardLabelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLabelPayload>
          }
          deleteMany: {
            args: Prisma.CardLabelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardLabelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardLabelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLabelPayload>[]
          }
          upsert: {
            args: Prisma.CardLabelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardLabelPayload>
          }
          aggregate: {
            args: Prisma.CardLabelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardLabel>
          }
          groupBy: {
            args: Prisma.CardLabelGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardLabelGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardLabelCountArgs<ExtArgs>
            result: $Utils.Optional<CardLabelCountAggregateOutputType> | number
          }
        }
      }
      CardDependency: {
        payload: Prisma.$CardDependencyPayload<ExtArgs>
        fields: Prisma.CardDependencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardDependencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardDependencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardDependencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardDependencyPayload>
          }
          findFirst: {
            args: Prisma.CardDependencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardDependencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardDependencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardDependencyPayload>
          }
          findMany: {
            args: Prisma.CardDependencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardDependencyPayload>[]
          }
          create: {
            args: Prisma.CardDependencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardDependencyPayload>
          }
          createMany: {
            args: Prisma.CardDependencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardDependencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardDependencyPayload>[]
          }
          delete: {
            args: Prisma.CardDependencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardDependencyPayload>
          }
          update: {
            args: Prisma.CardDependencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardDependencyPayload>
          }
          deleteMany: {
            args: Prisma.CardDependencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardDependencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardDependencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardDependencyPayload>[]
          }
          upsert: {
            args: Prisma.CardDependencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardDependencyPayload>
          }
          aggregate: {
            args: Prisma.CardDependencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardDependency>
          }
          groupBy: {
            args: Prisma.CardDependencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardDependencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardDependencyCountArgs<ExtArgs>
            result: $Utils.Optional<CardDependencyCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    user?: UserOmit
    organization?: OrganizationOmit
    organizationMember?: OrganizationMemberOmit
    project?: ProjectOmit
    column?: ColumnOmit
    card?: CardOmit
    comment?: CommentOmit
    label?: LabelOmit
    cardLabel?: CardLabelOmit
    cardDependency?: CardDependencyOmit
    activity?: ActivityOmit
    notification?: NotificationOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedOrganizations: number
    organizationMemberships: number
    ownedProjects: number
    createdCards: number
    assignedCards: number
    comments: number
    activities: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedOrganizations?: boolean | UserCountOutputTypeCountOwnedOrganizationsArgs
    organizationMemberships?: boolean | UserCountOutputTypeCountOrganizationMembershipsArgs
    ownedProjects?: boolean | UserCountOutputTypeCountOwnedProjectsArgs
    createdCards?: boolean | UserCountOutputTypeCountCreatedCardsArgs
    assignedCards?: boolean | UserCountOutputTypeCountAssignedCardsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    members: number
    projects: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | OrganizationCountOutputTypeCountMembersArgs
    projects?: boolean | OrganizationCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    columns: number
    labels: number
    activities: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    columns?: boolean | ProjectCountOutputTypeCountColumnsArgs
    labels?: boolean | ProjectCountOutputTypeCountLabelsArgs
    activities?: boolean | ProjectCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountColumnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLabelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabelWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }


  /**
   * Count Type ColumnCountOutputType
   */

  export type ColumnCountOutputType = {
    cards: number
  }

  export type ColumnCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | ColumnCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnCountOutputType
     */
    select?: ColumnCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }


  /**
   * Count Type CardCountOutputType
   */

  export type CardCountOutputType = {
    comments: number
    labels: number
    blocking: number
    blockedBy: number
    activities: number
    notifications: number
  }

  export type CardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | CardCountOutputTypeCountCommentsArgs
    labels?: boolean | CardCountOutputTypeCountLabelsArgs
    blocking?: boolean | CardCountOutputTypeCountBlockingArgs
    blockedBy?: boolean | CardCountOutputTypeCountBlockedByArgs
    activities?: boolean | CardCountOutputTypeCountActivitiesArgs
    notifications?: boolean | CardCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardCountOutputType
     */
    select?: CardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountLabelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardLabelWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountBlockingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardDependencyWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountBlockedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardDependencyWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type LabelCountOutputType
   */

  export type LabelCountOutputType = {
    cards: number
  }

  export type LabelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | LabelCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * LabelCountOutputType without action
   */
  export type LabelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelCountOutputType
     */
    select?: LabelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LabelCountOutputType without action
   */
  export type LabelCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardLabelWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    ownedOrganizations?: boolean | User$ownedOrganizationsArgs<ExtArgs>
    organizationMemberships?: boolean | User$organizationMembershipsArgs<ExtArgs>
    ownedProjects?: boolean | User$ownedProjectsArgs<ExtArgs>
    createdCards?: boolean | User$createdCardsArgs<ExtArgs>
    assignedCards?: boolean | User$assignedCardsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedOrganizations?: boolean | User$ownedOrganizationsArgs<ExtArgs>
    organizationMemberships?: boolean | User$organizationMembershipsArgs<ExtArgs>
    ownedProjects?: boolean | User$ownedProjectsArgs<ExtArgs>
    createdCards?: boolean | User$createdCardsArgs<ExtArgs>
    assignedCards?: boolean | User$assignedCardsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedOrganizations: Prisma.$OrganizationPayload<ExtArgs>[]
      organizationMemberships: Prisma.$OrganizationMemberPayload<ExtArgs>[]
      ownedProjects: Prisma.$ProjectPayload<ExtArgs>[]
      createdCards: Prisma.$CardPayload<ExtArgs>[]
      assignedCards: Prisma.$CardPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedOrganizations<T extends User$ownedOrganizationsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedOrganizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organizationMemberships<T extends User$organizationMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$organizationMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedProjects<T extends User$ownedProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdCards<T extends User$createdCardsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedCards<T extends User$assignedCardsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends User$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedOrganizations
   */
  export type User$ownedOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    cursor?: OrganizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * User.organizationMemberships
   */
  export type User$organizationMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    cursor?: OrganizationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * User.ownedProjects
   */
  export type User$ownedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.createdCards
   */
  export type User$createdCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * User.assignedCards
   */
  export type User$assignedCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.activities
   */
  export type User$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    description: number
    ownerId: number
    createdAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
    createdAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
    createdAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    ownerId?: true
    createdAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    description: string | null
    ownerId: string
    createdAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Organization$membersArgs<ExtArgs>
    projects?: boolean | Organization$projectsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    ownerId?: boolean
    createdAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "ownerId" | "createdAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Organization$membersArgs<ExtArgs>
    projects?: boolean | Organization$projectsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$OrganizationMemberPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      ownerId: string
      createdAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Organization$membersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Organization$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly description: FieldRef<"Organization", 'String'>
    readonly ownerId: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.members
   */
  export type Organization$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    cursor?: OrganizationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * Organization.projects
   */
  export type Organization$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationMember
   */

  export type AggregateOrganizationMember = {
    _count: OrganizationMemberCountAggregateOutputType | null
    _min: OrganizationMemberMinAggregateOutputType | null
    _max: OrganizationMemberMaxAggregateOutputType | null
  }

  export type OrganizationMemberMinAggregateOutputType = {
    organizationId: string | null
    userId: string | null
    role: $Enums.Role | null
    joinedAt: Date | null
  }

  export type OrganizationMemberMaxAggregateOutputType = {
    organizationId: string | null
    userId: string | null
    role: $Enums.Role | null
    joinedAt: Date | null
  }

  export type OrganizationMemberCountAggregateOutputType = {
    organizationId: number
    userId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type OrganizationMemberMinAggregateInputType = {
    organizationId?: true
    userId?: true
    role?: true
    joinedAt?: true
  }

  export type OrganizationMemberMaxAggregateInputType = {
    organizationId?: true
    userId?: true
    role?: true
    joinedAt?: true
  }

  export type OrganizationMemberCountAggregateInputType = {
    organizationId?: true
    userId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type OrganizationMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMember to aggregate.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationMembers
    **/
    _count?: true | OrganizationMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMemberMaxAggregateInputType
  }

  export type GetOrganizationMemberAggregateType<T extends OrganizationMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationMember[P]>
      : GetScalarType<T[P], AggregateOrganizationMember[P]>
  }




  export type OrganizationMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithAggregationInput | OrganizationMemberOrderByWithAggregationInput[]
    by: OrganizationMemberScalarFieldEnum[] | OrganizationMemberScalarFieldEnum
    having?: OrganizationMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationMemberCountAggregateInputType | true
    _min?: OrganizationMemberMinAggregateInputType
    _max?: OrganizationMemberMaxAggregateInputType
  }

  export type OrganizationMemberGroupByOutputType = {
    organizationId: string
    userId: string
    role: $Enums.Role
    joinedAt: Date
    _count: OrganizationMemberCountAggregateOutputType | null
    _min: OrganizationMemberMinAggregateOutputType | null
    _max: OrganizationMemberMaxAggregateOutputType | null
  }

  type GetOrganizationMemberGroupByPayload<T extends OrganizationMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organizationId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectScalar = {
    organizationId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type OrganizationMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"organizationId" | "userId" | "role" | "joinedAt", ExtArgs["result"]["organizationMember"]>
  export type OrganizationMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrganizationMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationMember"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      organizationId: string
      userId: string
      role: $Enums.Role
      joinedAt: Date
    }, ExtArgs["result"]["organizationMember"]>
    composites: {}
  }

  type OrganizationMemberGetPayload<S extends boolean | null | undefined | OrganizationMemberDefaultArgs> = $Result.GetResult<Prisma.$OrganizationMemberPayload, S>

  type OrganizationMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationMemberCountAggregateInputType | true
    }

  export interface OrganizationMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationMember'], meta: { name: 'OrganizationMember' } }
    /**
     * Find zero or one OrganizationMember that matches the filter.
     * @param {OrganizationMemberFindUniqueArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationMemberFindUniqueArgs>(args: SelectSubset<T, OrganizationMemberFindUniqueArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationMemberFindUniqueOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationMemberFindFirstArgs>(args?: SelectSubset<T, OrganizationMemberFindFirstArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany()
     * 
     * // Get first 10 OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany({ take: 10 })
     * 
     * // Only select the `organizationId`
     * const organizationMemberWithOrganizationIdOnly = await prisma.organizationMember.findMany({ select: { organizationId: true } })
     * 
     */
    findMany<T extends OrganizationMemberFindManyArgs>(args?: SelectSubset<T, OrganizationMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationMember.
     * @param {OrganizationMemberCreateArgs} args - Arguments to create a OrganizationMember.
     * @example
     * // Create one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.create({
     *   data: {
     *     // ... data to create a OrganizationMember
     *   }
     * })
     * 
     */
    create<T extends OrganizationMemberCreateArgs>(args: SelectSubset<T, OrganizationMemberCreateArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationMembers.
     * @param {OrganizationMemberCreateManyArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationMemberCreateManyArgs>(args?: SelectSubset<T, OrganizationMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationMembers and returns the data saved in the database.
     * @param {OrganizationMemberCreateManyAndReturnArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationMembers and only return the `organizationId`
     * const organizationMemberWithOrganizationIdOnly = await prisma.organizationMember.createManyAndReturn({
     *   select: { organizationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationMember.
     * @param {OrganizationMemberDeleteArgs} args - Arguments to delete one OrganizationMember.
     * @example
     * // Delete one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.delete({
     *   where: {
     *     // ... filter to delete one OrganizationMember
     *   }
     * })
     * 
     */
    delete<T extends OrganizationMemberDeleteArgs>(args: SelectSubset<T, OrganizationMemberDeleteArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationMember.
     * @param {OrganizationMemberUpdateArgs} args - Arguments to update one OrganizationMember.
     * @example
     * // Update one OrganizationMember
     * const organizationMember = await prisma.organizationMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationMemberUpdateArgs>(args: SelectSubset<T, OrganizationMemberUpdateArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationMembers.
     * @param {OrganizationMemberDeleteManyArgs} args - Arguments to filter OrganizationMembers to delete.
     * @example
     * // Delete a few OrganizationMembers
     * const { count } = await prisma.organizationMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationMemberDeleteManyArgs>(args?: SelectSubset<T, OrganizationMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationMemberUpdateManyArgs>(args: SelectSubset<T, OrganizationMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMembers and returns the data updated in the database.
     * @param {OrganizationMemberUpdateManyAndReturnArgs} args - Arguments to update many OrganizationMembers.
     * @example
     * // Update many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationMembers and only return the `organizationId`
     * const organizationMemberWithOrganizationIdOnly = await prisma.organizationMember.updateManyAndReturn({
     *   select: { organizationId: true },
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
    updateManyAndReturn<T extends OrganizationMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationMember.
     * @param {OrganizationMemberUpsertArgs} args - Arguments to update or create a OrganizationMember.
     * @example
     * // Update or create a OrganizationMember
     * const organizationMember = await prisma.organizationMember.upsert({
     *   create: {
     *     // ... data to create a OrganizationMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationMember we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationMemberUpsertArgs>(args: SelectSubset<T, OrganizationMemberUpsertArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberCountArgs} args - Arguments to filter OrganizationMembers to count.
     * @example
     * // Count the number of OrganizationMembers
     * const count = await prisma.organizationMember.count({
     *   where: {
     *     // ... the filter for the OrganizationMembers we want to count
     *   }
     * })
    **/
    count<T extends OrganizationMemberCountArgs>(
      args?: Subset<T, OrganizationMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationMemberAggregateArgs>(args: Subset<T, OrganizationMemberAggregateArgs>): Prisma.PrismaPromise<GetOrganizationMemberAggregateType<T>>

    /**
     * Group by OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberGroupByArgs} args - Group by arguments.
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
      T extends OrganizationMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationMemberGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationMember model
   */
  readonly fields: OrganizationMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrganizationMember model
   */
  interface OrganizationMemberFieldRefs {
    readonly organizationId: FieldRef<"OrganizationMember", 'String'>
    readonly userId: FieldRef<"OrganizationMember", 'String'>
    readonly role: FieldRef<"OrganizationMember", 'Role'>
    readonly joinedAt: FieldRef<"OrganizationMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationMember findUnique
   */
  export type OrganizationMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember findUniqueOrThrow
   */
  export type OrganizationMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember findFirst
   */
  export type OrganizationMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember findFirstOrThrow
   */
  export type OrganizationMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember findMany
   */
  export type OrganizationMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembers to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember create
   */
  export type OrganizationMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationMember.
     */
    data: XOR<OrganizationMemberCreateInput, OrganizationMemberUncheckedCreateInput>
  }

  /**
   * OrganizationMember createMany
   */
  export type OrganizationMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMemberCreateManyInput | OrganizationMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationMember createManyAndReturn
   */
  export type OrganizationMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMemberCreateManyInput | OrganizationMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMember update
   */
  export type OrganizationMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationMember.
     */
    data: XOR<OrganizationMemberUpdateInput, OrganizationMemberUncheckedUpdateInput>
    /**
     * Choose, which OrganizationMember to update.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember updateMany
   */
  export type OrganizationMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationMembers.
     */
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMembers to update
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to update.
     */
    limit?: number
  }

  /**
   * OrganizationMember updateManyAndReturn
   */
  export type OrganizationMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationMembers.
     */
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMembers to update
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMember upsert
   */
  export type OrganizationMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationMember to update in case it exists.
     */
    where: OrganizationMemberWhereUniqueInput
    /**
     * In case the OrganizationMember found by the `where` argument doesn't exist, create a new OrganizationMember with this data.
     */
    create: XOR<OrganizationMemberCreateInput, OrganizationMemberUncheckedCreateInput>
    /**
     * In case the OrganizationMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationMemberUpdateInput, OrganizationMemberUncheckedUpdateInput>
  }

  /**
   * OrganizationMember delete
   */
  export type OrganizationMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter which OrganizationMember to delete.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember deleteMany
   */
  export type OrganizationMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMembers to delete
     */
    where?: OrganizationMemberWhereInput
    /**
     * Limit how many OrganizationMembers to delete.
     */
    limit?: number
  }

  /**
   * OrganizationMember without action
   */
  export type OrganizationMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationMember
     */
    omit?: OrganizationMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    organizationId: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    organizationId: string | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    organizationId: number
    ownerId: number
    createdAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    organizationId?: true
    ownerId?: true
    createdAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    organizationId?: true
    ownerId?: true
    createdAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    organizationId?: true
    ownerId?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    organizationId: string
    ownerId: string
    createdAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    organizationId?: boolean
    ownerId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    columns?: boolean | Project$columnsArgs<ExtArgs>
    labels?: boolean | Project$labelsArgs<ExtArgs>
    activities?: boolean | Project$activitiesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    organizationId?: boolean
    ownerId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    organizationId?: boolean
    ownerId?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    organizationId?: boolean
    ownerId?: boolean
    createdAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "organizationId" | "ownerId" | "createdAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    columns?: boolean | Project$columnsArgs<ExtArgs>
    labels?: boolean | Project$labelsArgs<ExtArgs>
    activities?: boolean | Project$activitiesArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      owner: Prisma.$UserPayload<ExtArgs>
      columns: Prisma.$ColumnPayload<ExtArgs>[]
      labels: Prisma.$LabelPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      organizationId: string
      ownerId: string
      createdAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    columns<T extends Project$columnsArgs<ExtArgs> = {}>(args?: Subset<T, Project$columnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labels<T extends Project$labelsArgs<ExtArgs> = {}>(args?: Subset<T, Project$labelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Project$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Project$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly organizationId: FieldRef<"Project", 'String'>
    readonly ownerId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.columns
   */
  export type Project$columnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    where?: ColumnWhereInput
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    cursor?: ColumnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Project.labels
   */
  export type Project$labelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    where?: LabelWhereInput
    orderBy?: LabelOrderByWithRelationInput | LabelOrderByWithRelationInput[]
    cursor?: LabelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabelScalarFieldEnum | LabelScalarFieldEnum[]
  }

  /**
   * Project.activities
   */
  export type Project$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Column
   */

  export type AggregateColumn = {
    _count: ColumnCountAggregateOutputType | null
    _avg: ColumnAvgAggregateOutputType | null
    _sum: ColumnSumAggregateOutputType | null
    _min: ColumnMinAggregateOutputType | null
    _max: ColumnMaxAggregateOutputType | null
  }

  export type ColumnAvgAggregateOutputType = {
    position: number | null
    wipLimit: number | null
  }

  export type ColumnSumAggregateOutputType = {
    position: number | null
    wipLimit: number | null
  }

  export type ColumnMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    position: number | null
    wipLimit: number | null
    isDone: boolean | null
  }

  export type ColumnMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    position: number | null
    wipLimit: number | null
    isDone: boolean | null
  }

  export type ColumnCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    position: number
    wipLimit: number
    isDone: number
    _all: number
  }


  export type ColumnAvgAggregateInputType = {
    position?: true
    wipLimit?: true
  }

  export type ColumnSumAggregateInputType = {
    position?: true
    wipLimit?: true
  }

  export type ColumnMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    position?: true
    wipLimit?: true
    isDone?: true
  }

  export type ColumnMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    position?: true
    wipLimit?: true
    isDone?: true
  }

  export type ColumnCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    position?: true
    wipLimit?: true
    isDone?: true
    _all?: true
  }

  export type ColumnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Column to aggregate.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Columns
    **/
    _count?: true | ColumnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColumnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColumnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColumnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColumnMaxAggregateInputType
  }

  export type GetColumnAggregateType<T extends ColumnAggregateArgs> = {
        [P in keyof T & keyof AggregateColumn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColumn[P]>
      : GetScalarType<T[P], AggregateColumn[P]>
  }




  export type ColumnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnWhereInput
    orderBy?: ColumnOrderByWithAggregationInput | ColumnOrderByWithAggregationInput[]
    by: ColumnScalarFieldEnum[] | ColumnScalarFieldEnum
    having?: ColumnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColumnCountAggregateInputType | true
    _avg?: ColumnAvgAggregateInputType
    _sum?: ColumnSumAggregateInputType
    _min?: ColumnMinAggregateInputType
    _max?: ColumnMaxAggregateInputType
  }

  export type ColumnGroupByOutputType = {
    id: string
    projectId: string
    name: string
    position: number
    wipLimit: number | null
    isDone: boolean
    _count: ColumnCountAggregateOutputType | null
    _avg: ColumnAvgAggregateOutputType | null
    _sum: ColumnSumAggregateOutputType | null
    _min: ColumnMinAggregateOutputType | null
    _max: ColumnMaxAggregateOutputType | null
  }

  type GetColumnGroupByPayload<T extends ColumnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColumnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColumnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColumnGroupByOutputType[P]>
            : GetScalarType<T[P], ColumnGroupByOutputType[P]>
        }
      >
    >


  export type ColumnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    position?: boolean
    wipLimit?: boolean
    isDone?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    cards?: boolean | Column$cardsArgs<ExtArgs>
    _count?: boolean | ColumnCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["column"]>

  export type ColumnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    position?: boolean
    wipLimit?: boolean
    isDone?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["column"]>

  export type ColumnSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    position?: boolean
    wipLimit?: boolean
    isDone?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["column"]>

  export type ColumnSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    position?: boolean
    wipLimit?: boolean
    isDone?: boolean
  }

  export type ColumnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "position" | "wipLimit" | "isDone", ExtArgs["result"]["column"]>
  export type ColumnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    cards?: boolean | Column$cardsArgs<ExtArgs>
    _count?: boolean | ColumnCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ColumnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ColumnIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ColumnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Column"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      cards: Prisma.$CardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      position: number
      wipLimit: number | null
      isDone: boolean
    }, ExtArgs["result"]["column"]>
    composites: {}
  }

  type ColumnGetPayload<S extends boolean | null | undefined | ColumnDefaultArgs> = $Result.GetResult<Prisma.$ColumnPayload, S>

  type ColumnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColumnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColumnCountAggregateInputType | true
    }

  export interface ColumnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Column'], meta: { name: 'Column' } }
    /**
     * Find zero or one Column that matches the filter.
     * @param {ColumnFindUniqueArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColumnFindUniqueArgs>(args: SelectSubset<T, ColumnFindUniqueArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Column that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColumnFindUniqueOrThrowArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColumnFindUniqueOrThrowArgs>(args: SelectSubset<T, ColumnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Column that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindFirstArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColumnFindFirstArgs>(args?: SelectSubset<T, ColumnFindFirstArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Column that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindFirstOrThrowArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColumnFindFirstOrThrowArgs>(args?: SelectSubset<T, ColumnFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Columns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Columns
     * const columns = await prisma.column.findMany()
     * 
     * // Get first 10 Columns
     * const columns = await prisma.column.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const columnWithIdOnly = await prisma.column.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColumnFindManyArgs>(args?: SelectSubset<T, ColumnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Column.
     * @param {ColumnCreateArgs} args - Arguments to create a Column.
     * @example
     * // Create one Column
     * const Column = await prisma.column.create({
     *   data: {
     *     // ... data to create a Column
     *   }
     * })
     * 
     */
    create<T extends ColumnCreateArgs>(args: SelectSubset<T, ColumnCreateArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Columns.
     * @param {ColumnCreateManyArgs} args - Arguments to create many Columns.
     * @example
     * // Create many Columns
     * const column = await prisma.column.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColumnCreateManyArgs>(args?: SelectSubset<T, ColumnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Columns and returns the data saved in the database.
     * @param {ColumnCreateManyAndReturnArgs} args - Arguments to create many Columns.
     * @example
     * // Create many Columns
     * const column = await prisma.column.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Columns and only return the `id`
     * const columnWithIdOnly = await prisma.column.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColumnCreateManyAndReturnArgs>(args?: SelectSubset<T, ColumnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Column.
     * @param {ColumnDeleteArgs} args - Arguments to delete one Column.
     * @example
     * // Delete one Column
     * const Column = await prisma.column.delete({
     *   where: {
     *     // ... filter to delete one Column
     *   }
     * })
     * 
     */
    delete<T extends ColumnDeleteArgs>(args: SelectSubset<T, ColumnDeleteArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Column.
     * @param {ColumnUpdateArgs} args - Arguments to update one Column.
     * @example
     * // Update one Column
     * const column = await prisma.column.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColumnUpdateArgs>(args: SelectSubset<T, ColumnUpdateArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Columns.
     * @param {ColumnDeleteManyArgs} args - Arguments to filter Columns to delete.
     * @example
     * // Delete a few Columns
     * const { count } = await prisma.column.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColumnDeleteManyArgs>(args?: SelectSubset<T, ColumnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Columns
     * const column = await prisma.column.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColumnUpdateManyArgs>(args: SelectSubset<T, ColumnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Columns and returns the data updated in the database.
     * @param {ColumnUpdateManyAndReturnArgs} args - Arguments to update many Columns.
     * @example
     * // Update many Columns
     * const column = await prisma.column.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Columns and only return the `id`
     * const columnWithIdOnly = await prisma.column.updateManyAndReturn({
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
    updateManyAndReturn<T extends ColumnUpdateManyAndReturnArgs>(args: SelectSubset<T, ColumnUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Column.
     * @param {ColumnUpsertArgs} args - Arguments to update or create a Column.
     * @example
     * // Update or create a Column
     * const column = await prisma.column.upsert({
     *   create: {
     *     // ... data to create a Column
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Column we want to update
     *   }
     * })
     */
    upsert<T extends ColumnUpsertArgs>(args: SelectSubset<T, ColumnUpsertArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnCountArgs} args - Arguments to filter Columns to count.
     * @example
     * // Count the number of Columns
     * const count = await prisma.column.count({
     *   where: {
     *     // ... the filter for the Columns we want to count
     *   }
     * })
    **/
    count<T extends ColumnCountArgs>(
      args?: Subset<T, ColumnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColumnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Column.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColumnAggregateArgs>(args: Subset<T, ColumnAggregateArgs>): Prisma.PrismaPromise<GetColumnAggregateType<T>>

    /**
     * Group by Column.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnGroupByArgs} args - Group by arguments.
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
      T extends ColumnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColumnGroupByArgs['orderBy'] }
        : { orderBy?: ColumnGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ColumnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Column model
   */
  readonly fields: ColumnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Column.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColumnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cards<T extends Column$cardsArgs<ExtArgs> = {}>(args?: Subset<T, Column$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Column model
   */
  interface ColumnFieldRefs {
    readonly id: FieldRef<"Column", 'String'>
    readonly projectId: FieldRef<"Column", 'String'>
    readonly name: FieldRef<"Column", 'String'>
    readonly position: FieldRef<"Column", 'Float'>
    readonly wipLimit: FieldRef<"Column", 'Int'>
    readonly isDone: FieldRef<"Column", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Column findUnique
   */
  export type ColumnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column findUniqueOrThrow
   */
  export type ColumnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column findFirst
   */
  export type ColumnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column findFirstOrThrow
   */
  export type ColumnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column findMany
   */
  export type ColumnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Columns to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column create
   */
  export type ColumnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The data needed to create a Column.
     */
    data: XOR<ColumnCreateInput, ColumnUncheckedCreateInput>
  }

  /**
   * Column createMany
   */
  export type ColumnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Columns.
     */
    data: ColumnCreateManyInput | ColumnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Column createManyAndReturn
   */
  export type ColumnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * The data used to create many Columns.
     */
    data: ColumnCreateManyInput | ColumnCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Column update
   */
  export type ColumnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The data needed to update a Column.
     */
    data: XOR<ColumnUpdateInput, ColumnUncheckedUpdateInput>
    /**
     * Choose, which Column to update.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column updateMany
   */
  export type ColumnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Columns.
     */
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyInput>
    /**
     * Filter which Columns to update
     */
    where?: ColumnWhereInput
    /**
     * Limit how many Columns to update.
     */
    limit?: number
  }

  /**
   * Column updateManyAndReturn
   */
  export type ColumnUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * The data used to update Columns.
     */
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyInput>
    /**
     * Filter which Columns to update
     */
    where?: ColumnWhereInput
    /**
     * Limit how many Columns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Column upsert
   */
  export type ColumnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The filter to search for the Column to update in case it exists.
     */
    where: ColumnWhereUniqueInput
    /**
     * In case the Column found by the `where` argument doesn't exist, create a new Column with this data.
     */
    create: XOR<ColumnCreateInput, ColumnUncheckedCreateInput>
    /**
     * In case the Column was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColumnUpdateInput, ColumnUncheckedUpdateInput>
  }

  /**
   * Column delete
   */
  export type ColumnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter which Column to delete.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column deleteMany
   */
  export type ColumnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Columns to delete
     */
    where?: ColumnWhereInput
    /**
     * Limit how many Columns to delete.
     */
    limit?: number
  }

  /**
   * Column.cards
   */
  export type Column$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Column without action
   */
  export type ColumnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
  }


  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    position: number | null
  }

  export type CardSumAggregateOutputType = {
    position: number | null
  }

  export type CardMinAggregateOutputType = {
    id: string | null
    columnId: string | null
    title: string | null
    description: string | null
    creatorId: string | null
    assigneeId: string | null
    priority: $Enums.Priority | null
    dueDate: Date | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    lastActivityAt: Date | null
  }

  export type CardMaxAggregateOutputType = {
    id: string | null
    columnId: string | null
    title: string | null
    description: string | null
    creatorId: string | null
    assigneeId: string | null
    priority: $Enums.Priority | null
    dueDate: Date | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    lastActivityAt: Date | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    columnId: number
    title: number
    description: number
    creatorId: number
    assigneeId: number
    priority: number
    dueDate: number
    position: number
    createdAt: number
    updatedAt: number
    lastActivityAt: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    position?: true
  }

  export type CardSumAggregateInputType = {
    position?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    columnId?: true
    title?: true
    description?: true
    creatorId?: true
    assigneeId?: true
    priority?: true
    dueDate?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    lastActivityAt?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    columnId?: true
    title?: true
    description?: true
    creatorId?: true
    assigneeId?: true
    priority?: true
    dueDate?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    lastActivityAt?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    columnId?: true
    title?: true
    description?: true
    creatorId?: true
    assigneeId?: true
    priority?: true
    dueDate?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    lastActivityAt?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: string
    columnId: string
    title: string
    description: string | null
    creatorId: string
    assigneeId: string | null
    priority: $Enums.Priority
    dueDate: Date | null
    position: number
    createdAt: Date
    updatedAt: Date
    lastActivityAt: Date
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    columnId?: boolean
    title?: boolean
    description?: boolean
    creatorId?: boolean
    assigneeId?: boolean
    priority?: boolean
    dueDate?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastActivityAt?: boolean
    column?: boolean | ColumnDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    assignee?: boolean | Card$assigneeArgs<ExtArgs>
    comments?: boolean | Card$commentsArgs<ExtArgs>
    labels?: boolean | Card$labelsArgs<ExtArgs>
    blocking?: boolean | Card$blockingArgs<ExtArgs>
    blockedBy?: boolean | Card$blockedByArgs<ExtArgs>
    activities?: boolean | Card$activitiesArgs<ExtArgs>
    notifications?: boolean | Card$notificationsArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    columnId?: boolean
    title?: boolean
    description?: boolean
    creatorId?: boolean
    assigneeId?: boolean
    priority?: boolean
    dueDate?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastActivityAt?: boolean
    column?: boolean | ColumnDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    assignee?: boolean | Card$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    columnId?: boolean
    title?: boolean
    description?: boolean
    creatorId?: boolean
    assigneeId?: boolean
    priority?: boolean
    dueDate?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastActivityAt?: boolean
    column?: boolean | ColumnDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    assignee?: boolean | Card$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    columnId?: boolean
    title?: boolean
    description?: boolean
    creatorId?: boolean
    assigneeId?: boolean
    priority?: boolean
    dueDate?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastActivityAt?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "columnId" | "title" | "description" | "creatorId" | "assigneeId" | "priority" | "dueDate" | "position" | "createdAt" | "updatedAt" | "lastActivityAt", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    column?: boolean | ColumnDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    assignee?: boolean | Card$assigneeArgs<ExtArgs>
    comments?: boolean | Card$commentsArgs<ExtArgs>
    labels?: boolean | Card$labelsArgs<ExtArgs>
    blocking?: boolean | Card$blockingArgs<ExtArgs>
    blockedBy?: boolean | Card$blockedByArgs<ExtArgs>
    activities?: boolean | Card$activitiesArgs<ExtArgs>
    notifications?: boolean | Card$notificationsArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    column?: boolean | ColumnDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    assignee?: boolean | Card$assigneeArgs<ExtArgs>
  }
  export type CardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    column?: boolean | ColumnDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    assignee?: boolean | Card$assigneeArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      column: Prisma.$ColumnPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      assignee: Prisma.$UserPayload<ExtArgs> | null
      comments: Prisma.$CommentPayload<ExtArgs>[]
      labels: Prisma.$CardLabelPayload<ExtArgs>[]
      blocking: Prisma.$CardDependencyPayload<ExtArgs>[]
      blockedBy: Prisma.$CardDependencyPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      columnId: string
      title: string
      description: string | null
      creatorId: string
      assigneeId: string | null
      priority: $Enums.Priority
      dueDate: Date | null
      position: number
      createdAt: Date
      updatedAt: Date
      lastActivityAt: Date
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
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
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
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
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    column<T extends ColumnDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColumnDefaultArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignee<T extends Card$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, Card$assigneeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comments<T extends Card$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Card$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labels<T extends Card$labelsArgs<ExtArgs> = {}>(args?: Subset<T, Card$labelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardLabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blocking<T extends Card$blockingArgs<ExtArgs> = {}>(args?: Subset<T, Card$blockingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blockedBy<T extends Card$blockedByArgs<ExtArgs> = {}>(args?: Subset<T, Card$blockedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Card$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Card$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Card$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Card$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'String'>
    readonly columnId: FieldRef<"Card", 'String'>
    readonly title: FieldRef<"Card", 'String'>
    readonly description: FieldRef<"Card", 'String'>
    readonly creatorId: FieldRef<"Card", 'String'>
    readonly assigneeId: FieldRef<"Card", 'String'>
    readonly priority: FieldRef<"Card", 'Priority'>
    readonly dueDate: FieldRef<"Card", 'DateTime'>
    readonly position: FieldRef<"Card", 'Float'>
    readonly createdAt: FieldRef<"Card", 'DateTime'>
    readonly updatedAt: FieldRef<"Card", 'DateTime'>
    readonly lastActivityAt: FieldRef<"Card", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card updateManyAndReturn
   */
  export type CardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card.assignee
   */
  export type Card$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Card.comments
   */
  export type Card$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Card.labels
   */
  export type Card$labelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLabel
     */
    select?: CardLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLabel
     */
    omit?: CardLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLabelInclude<ExtArgs> | null
    where?: CardLabelWhereInput
    orderBy?: CardLabelOrderByWithRelationInput | CardLabelOrderByWithRelationInput[]
    cursor?: CardLabelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardLabelScalarFieldEnum | CardLabelScalarFieldEnum[]
  }

  /**
   * Card.blocking
   */
  export type Card$blockingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDependency
     */
    select?: CardDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardDependency
     */
    omit?: CardDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardDependencyInclude<ExtArgs> | null
    where?: CardDependencyWhereInput
    orderBy?: CardDependencyOrderByWithRelationInput | CardDependencyOrderByWithRelationInput[]
    cursor?: CardDependencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardDependencyScalarFieldEnum | CardDependencyScalarFieldEnum[]
  }

  /**
   * Card.blockedBy
   */
  export type Card$blockedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDependency
     */
    select?: CardDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardDependency
     */
    omit?: CardDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardDependencyInclude<ExtArgs> | null
    where?: CardDependencyWhereInput
    orderBy?: CardDependencyOrderByWithRelationInput | CardDependencyOrderByWithRelationInput[]
    cursor?: CardDependencyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardDependencyScalarFieldEnum | CardDependencyScalarFieldEnum[]
  }

  /**
   * Card.activities
   */
  export type Card$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Card.notifications
   */
  export type Card$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    cardId: string | null
    authorId: string | null
    text: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    cardId: string | null
    authorId: string | null
    text: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    cardId: number
    authorId: number
    text: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    cardId?: true
    authorId?: true
    text?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    cardId?: true
    authorId?: true
    text?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    cardId?: true
    authorId?: true
    text?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    cardId: string
    authorId: string
    text: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    authorId?: boolean
    text?: boolean
    createdAt?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    authorId?: boolean
    text?: boolean
    createdAt?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    authorId?: boolean
    text?: boolean
    createdAt?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    cardId?: boolean
    authorId?: boolean
    text?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardId" | "authorId" | "text" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardId: string
      authorId: string
      text: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly cardId: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Label
   */

  export type AggregateLabel = {
    _count: LabelCountAggregateOutputType | null
    _min: LabelMinAggregateOutputType | null
    _max: LabelMaxAggregateOutputType | null
  }

  export type LabelMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    color: string | null
  }

  export type LabelMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    color: string | null
  }

  export type LabelCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    color: number
    _all: number
  }


  export type LabelMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    color?: true
  }

  export type LabelMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    color?: true
  }

  export type LabelCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    color?: true
    _all?: true
  }

  export type LabelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Label to aggregate.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: LabelOrderByWithRelationInput | LabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Labels
    **/
    _count?: true | LabelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabelMaxAggregateInputType
  }

  export type GetLabelAggregateType<T extends LabelAggregateArgs> = {
        [P in keyof T & keyof AggregateLabel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabel[P]>
      : GetScalarType<T[P], AggregateLabel[P]>
  }




  export type LabelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabelWhereInput
    orderBy?: LabelOrderByWithAggregationInput | LabelOrderByWithAggregationInput[]
    by: LabelScalarFieldEnum[] | LabelScalarFieldEnum
    having?: LabelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabelCountAggregateInputType | true
    _min?: LabelMinAggregateInputType
    _max?: LabelMaxAggregateInputType
  }

  export type LabelGroupByOutputType = {
    id: string
    projectId: string
    name: string
    color: string
    _count: LabelCountAggregateOutputType | null
    _min: LabelMinAggregateOutputType | null
    _max: LabelMaxAggregateOutputType | null
  }

  type GetLabelGroupByPayload<T extends LabelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabelGroupByOutputType[P]>
            : GetScalarType<T[P], LabelGroupByOutputType[P]>
        }
      >
    >


  export type LabelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    color?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    cards?: boolean | Label$cardsArgs<ExtArgs>
    _count?: boolean | LabelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["label"]>

  export type LabelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    color?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["label"]>

  export type LabelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    color?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["label"]>

  export type LabelSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    color?: boolean
  }

  export type LabelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "color", ExtArgs["result"]["label"]>
  export type LabelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    cards?: boolean | Label$cardsArgs<ExtArgs>
    _count?: boolean | LabelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LabelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type LabelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $LabelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Label"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      cards: Prisma.$CardLabelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      color: string
    }, ExtArgs["result"]["label"]>
    composites: {}
  }

  type LabelGetPayload<S extends boolean | null | undefined | LabelDefaultArgs> = $Result.GetResult<Prisma.$LabelPayload, S>

  type LabelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabelCountAggregateInputType | true
    }

  export interface LabelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Label'], meta: { name: 'Label' } }
    /**
     * Find zero or one Label that matches the filter.
     * @param {LabelFindUniqueArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabelFindUniqueArgs>(args: SelectSubset<T, LabelFindUniqueArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Label that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabelFindUniqueOrThrowArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabelFindUniqueOrThrowArgs>(args: SelectSubset<T, LabelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Label that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelFindFirstArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabelFindFirstArgs>(args?: SelectSubset<T, LabelFindFirstArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Label that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelFindFirstOrThrowArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabelFindFirstOrThrowArgs>(args?: SelectSubset<T, LabelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Labels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Labels
     * const labels = await prisma.label.findMany()
     * 
     * // Get first 10 Labels
     * const labels = await prisma.label.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labelWithIdOnly = await prisma.label.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabelFindManyArgs>(args?: SelectSubset<T, LabelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Label.
     * @param {LabelCreateArgs} args - Arguments to create a Label.
     * @example
     * // Create one Label
     * const Label = await prisma.label.create({
     *   data: {
     *     // ... data to create a Label
     *   }
     * })
     * 
     */
    create<T extends LabelCreateArgs>(args: SelectSubset<T, LabelCreateArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Labels.
     * @param {LabelCreateManyArgs} args - Arguments to create many Labels.
     * @example
     * // Create many Labels
     * const label = await prisma.label.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabelCreateManyArgs>(args?: SelectSubset<T, LabelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Labels and returns the data saved in the database.
     * @param {LabelCreateManyAndReturnArgs} args - Arguments to create many Labels.
     * @example
     * // Create many Labels
     * const label = await prisma.label.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Labels and only return the `id`
     * const labelWithIdOnly = await prisma.label.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabelCreateManyAndReturnArgs>(args?: SelectSubset<T, LabelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Label.
     * @param {LabelDeleteArgs} args - Arguments to delete one Label.
     * @example
     * // Delete one Label
     * const Label = await prisma.label.delete({
     *   where: {
     *     // ... filter to delete one Label
     *   }
     * })
     * 
     */
    delete<T extends LabelDeleteArgs>(args: SelectSubset<T, LabelDeleteArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Label.
     * @param {LabelUpdateArgs} args - Arguments to update one Label.
     * @example
     * // Update one Label
     * const label = await prisma.label.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabelUpdateArgs>(args: SelectSubset<T, LabelUpdateArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Labels.
     * @param {LabelDeleteManyArgs} args - Arguments to filter Labels to delete.
     * @example
     * // Delete a few Labels
     * const { count } = await prisma.label.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabelDeleteManyArgs>(args?: SelectSubset<T, LabelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Labels
     * const label = await prisma.label.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabelUpdateManyArgs>(args: SelectSubset<T, LabelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labels and returns the data updated in the database.
     * @param {LabelUpdateManyAndReturnArgs} args - Arguments to update many Labels.
     * @example
     * // Update many Labels
     * const label = await prisma.label.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Labels and only return the `id`
     * const labelWithIdOnly = await prisma.label.updateManyAndReturn({
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
    updateManyAndReturn<T extends LabelUpdateManyAndReturnArgs>(args: SelectSubset<T, LabelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Label.
     * @param {LabelUpsertArgs} args - Arguments to update or create a Label.
     * @example
     * // Update or create a Label
     * const label = await prisma.label.upsert({
     *   create: {
     *     // ... data to create a Label
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Label we want to update
     *   }
     * })
     */
    upsert<T extends LabelUpsertArgs>(args: SelectSubset<T, LabelUpsertArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Labels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelCountArgs} args - Arguments to filter Labels to count.
     * @example
     * // Count the number of Labels
     * const count = await prisma.label.count({
     *   where: {
     *     // ... the filter for the Labels we want to count
     *   }
     * })
    **/
    count<T extends LabelCountArgs>(
      args?: Subset<T, LabelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Label.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabelAggregateArgs>(args: Subset<T, LabelAggregateArgs>): Prisma.PrismaPromise<GetLabelAggregateType<T>>

    /**
     * Group by Label.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelGroupByArgs} args - Group by arguments.
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
      T extends LabelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabelGroupByArgs['orderBy'] }
        : { orderBy?: LabelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Label model
   */
  readonly fields: LabelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Label.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cards<T extends Label$cardsArgs<ExtArgs> = {}>(args?: Subset<T, Label$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardLabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Label model
   */
  interface LabelFieldRefs {
    readonly id: FieldRef<"Label", 'String'>
    readonly projectId: FieldRef<"Label", 'String'>
    readonly name: FieldRef<"Label", 'String'>
    readonly color: FieldRef<"Label", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Label findUnique
   */
  export type LabelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Label to fetch.
     */
    where: LabelWhereUniqueInput
  }

  /**
   * Label findUniqueOrThrow
   */
  export type LabelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Label to fetch.
     */
    where: LabelWhereUniqueInput
  }

  /**
   * Label findFirst
   */
  export type LabelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Label to fetch.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: LabelOrderByWithRelationInput | LabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labels.
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labels.
     */
    distinct?: LabelScalarFieldEnum | LabelScalarFieldEnum[]
  }

  /**
   * Label findFirstOrThrow
   */
  export type LabelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Label to fetch.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: LabelOrderByWithRelationInput | LabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labels.
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labels.
     */
    distinct?: LabelScalarFieldEnum | LabelScalarFieldEnum[]
  }

  /**
   * Label findMany
   */
  export type LabelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Labels to fetch.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: LabelOrderByWithRelationInput | LabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Labels.
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labels.
     */
    distinct?: LabelScalarFieldEnum | LabelScalarFieldEnum[]
  }

  /**
   * Label create
   */
  export type LabelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * The data needed to create a Label.
     */
    data: XOR<LabelCreateInput, LabelUncheckedCreateInput>
  }

  /**
   * Label createMany
   */
  export type LabelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Labels.
     */
    data: LabelCreateManyInput | LabelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Label createManyAndReturn
   */
  export type LabelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * The data used to create many Labels.
     */
    data: LabelCreateManyInput | LabelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Label update
   */
  export type LabelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * The data needed to update a Label.
     */
    data: XOR<LabelUpdateInput, LabelUncheckedUpdateInput>
    /**
     * Choose, which Label to update.
     */
    where: LabelWhereUniqueInput
  }

  /**
   * Label updateMany
   */
  export type LabelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Labels.
     */
    data: XOR<LabelUpdateManyMutationInput, LabelUncheckedUpdateManyInput>
    /**
     * Filter which Labels to update
     */
    where?: LabelWhereInput
    /**
     * Limit how many Labels to update.
     */
    limit?: number
  }

  /**
   * Label updateManyAndReturn
   */
  export type LabelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * The data used to update Labels.
     */
    data: XOR<LabelUpdateManyMutationInput, LabelUncheckedUpdateManyInput>
    /**
     * Filter which Labels to update
     */
    where?: LabelWhereInput
    /**
     * Limit how many Labels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Label upsert
   */
  export type LabelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * The filter to search for the Label to update in case it exists.
     */
    where: LabelWhereUniqueInput
    /**
     * In case the Label found by the `where` argument doesn't exist, create a new Label with this data.
     */
    create: XOR<LabelCreateInput, LabelUncheckedCreateInput>
    /**
     * In case the Label was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabelUpdateInput, LabelUncheckedUpdateInput>
  }

  /**
   * Label delete
   */
  export type LabelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter which Label to delete.
     */
    where: LabelWhereUniqueInput
  }

  /**
   * Label deleteMany
   */
  export type LabelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Labels to delete
     */
    where?: LabelWhereInput
    /**
     * Limit how many Labels to delete.
     */
    limit?: number
  }

  /**
   * Label.cards
   */
  export type Label$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLabel
     */
    select?: CardLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLabel
     */
    omit?: CardLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLabelInclude<ExtArgs> | null
    where?: CardLabelWhereInput
    orderBy?: CardLabelOrderByWithRelationInput | CardLabelOrderByWithRelationInput[]
    cursor?: CardLabelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardLabelScalarFieldEnum | CardLabelScalarFieldEnum[]
  }

  /**
   * Label without action
   */
  export type LabelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
  }


  /**
   * Model CardLabel
   */

  export type AggregateCardLabel = {
    _count: CardLabelCountAggregateOutputType | null
    _min: CardLabelMinAggregateOutputType | null
    _max: CardLabelMaxAggregateOutputType | null
  }

  export type CardLabelMinAggregateOutputType = {
    cardId: string | null
    labelId: string | null
  }

  export type CardLabelMaxAggregateOutputType = {
    cardId: string | null
    labelId: string | null
  }

  export type CardLabelCountAggregateOutputType = {
    cardId: number
    labelId: number
    _all: number
  }


  export type CardLabelMinAggregateInputType = {
    cardId?: true
    labelId?: true
  }

  export type CardLabelMaxAggregateInputType = {
    cardId?: true
    labelId?: true
  }

  export type CardLabelCountAggregateInputType = {
    cardId?: true
    labelId?: true
    _all?: true
  }

  export type CardLabelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardLabel to aggregate.
     */
    where?: CardLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardLabels to fetch.
     */
    orderBy?: CardLabelOrderByWithRelationInput | CardLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardLabels
    **/
    _count?: true | CardLabelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardLabelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardLabelMaxAggregateInputType
  }

  export type GetCardLabelAggregateType<T extends CardLabelAggregateArgs> = {
        [P in keyof T & keyof AggregateCardLabel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardLabel[P]>
      : GetScalarType<T[P], AggregateCardLabel[P]>
  }




  export type CardLabelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardLabelWhereInput
    orderBy?: CardLabelOrderByWithAggregationInput | CardLabelOrderByWithAggregationInput[]
    by: CardLabelScalarFieldEnum[] | CardLabelScalarFieldEnum
    having?: CardLabelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardLabelCountAggregateInputType | true
    _min?: CardLabelMinAggregateInputType
    _max?: CardLabelMaxAggregateInputType
  }

  export type CardLabelGroupByOutputType = {
    cardId: string
    labelId: string
    _count: CardLabelCountAggregateOutputType | null
    _min: CardLabelMinAggregateOutputType | null
    _max: CardLabelMaxAggregateOutputType | null
  }

  type GetCardLabelGroupByPayload<T extends CardLabelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardLabelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardLabelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardLabelGroupByOutputType[P]>
            : GetScalarType<T[P], CardLabelGroupByOutputType[P]>
        }
      >
    >


  export type CardLabelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cardId?: boolean
    labelId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardLabel"]>

  export type CardLabelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cardId?: boolean
    labelId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardLabel"]>

  export type CardLabelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cardId?: boolean
    labelId?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardLabel"]>

  export type CardLabelSelectScalar = {
    cardId?: boolean
    labelId?: boolean
  }

  export type CardLabelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cardId" | "labelId", ExtArgs["result"]["cardLabel"]>
  export type CardLabelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }
  export type CardLabelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }
  export type CardLabelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }

  export type $CardLabelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardLabel"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
      label: Prisma.$LabelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cardId: string
      labelId: string
    }, ExtArgs["result"]["cardLabel"]>
    composites: {}
  }

  type CardLabelGetPayload<S extends boolean | null | undefined | CardLabelDefaultArgs> = $Result.GetResult<Prisma.$CardLabelPayload, S>

  type CardLabelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardLabelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardLabelCountAggregateInputType | true
    }

  export interface CardLabelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardLabel'], meta: { name: 'CardLabel' } }
    /**
     * Find zero or one CardLabel that matches the filter.
     * @param {CardLabelFindUniqueArgs} args - Arguments to find a CardLabel
     * @example
     * // Get one CardLabel
     * const cardLabel = await prisma.cardLabel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardLabelFindUniqueArgs>(args: SelectSubset<T, CardLabelFindUniqueArgs<ExtArgs>>): Prisma__CardLabelClient<$Result.GetResult<Prisma.$CardLabelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardLabel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardLabelFindUniqueOrThrowArgs} args - Arguments to find a CardLabel
     * @example
     * // Get one CardLabel
     * const cardLabel = await prisma.cardLabel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardLabelFindUniqueOrThrowArgs>(args: SelectSubset<T, CardLabelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardLabelClient<$Result.GetResult<Prisma.$CardLabelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardLabel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardLabelFindFirstArgs} args - Arguments to find a CardLabel
     * @example
     * // Get one CardLabel
     * const cardLabel = await prisma.cardLabel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardLabelFindFirstArgs>(args?: SelectSubset<T, CardLabelFindFirstArgs<ExtArgs>>): Prisma__CardLabelClient<$Result.GetResult<Prisma.$CardLabelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardLabel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardLabelFindFirstOrThrowArgs} args - Arguments to find a CardLabel
     * @example
     * // Get one CardLabel
     * const cardLabel = await prisma.cardLabel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardLabelFindFirstOrThrowArgs>(args?: SelectSubset<T, CardLabelFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardLabelClient<$Result.GetResult<Prisma.$CardLabelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardLabels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardLabelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardLabels
     * const cardLabels = await prisma.cardLabel.findMany()
     * 
     * // Get first 10 CardLabels
     * const cardLabels = await prisma.cardLabel.findMany({ take: 10 })
     * 
     * // Only select the `cardId`
     * const cardLabelWithCardIdOnly = await prisma.cardLabel.findMany({ select: { cardId: true } })
     * 
     */
    findMany<T extends CardLabelFindManyArgs>(args?: SelectSubset<T, CardLabelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardLabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardLabel.
     * @param {CardLabelCreateArgs} args - Arguments to create a CardLabel.
     * @example
     * // Create one CardLabel
     * const CardLabel = await prisma.cardLabel.create({
     *   data: {
     *     // ... data to create a CardLabel
     *   }
     * })
     * 
     */
    create<T extends CardLabelCreateArgs>(args: SelectSubset<T, CardLabelCreateArgs<ExtArgs>>): Prisma__CardLabelClient<$Result.GetResult<Prisma.$CardLabelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardLabels.
     * @param {CardLabelCreateManyArgs} args - Arguments to create many CardLabels.
     * @example
     * // Create many CardLabels
     * const cardLabel = await prisma.cardLabel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardLabelCreateManyArgs>(args?: SelectSubset<T, CardLabelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardLabels and returns the data saved in the database.
     * @param {CardLabelCreateManyAndReturnArgs} args - Arguments to create many CardLabels.
     * @example
     * // Create many CardLabels
     * const cardLabel = await prisma.cardLabel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardLabels and only return the `cardId`
     * const cardLabelWithCardIdOnly = await prisma.cardLabel.createManyAndReturn({
     *   select: { cardId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardLabelCreateManyAndReturnArgs>(args?: SelectSubset<T, CardLabelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardLabelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardLabel.
     * @param {CardLabelDeleteArgs} args - Arguments to delete one CardLabel.
     * @example
     * // Delete one CardLabel
     * const CardLabel = await prisma.cardLabel.delete({
     *   where: {
     *     // ... filter to delete one CardLabel
     *   }
     * })
     * 
     */
    delete<T extends CardLabelDeleteArgs>(args: SelectSubset<T, CardLabelDeleteArgs<ExtArgs>>): Prisma__CardLabelClient<$Result.GetResult<Prisma.$CardLabelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardLabel.
     * @param {CardLabelUpdateArgs} args - Arguments to update one CardLabel.
     * @example
     * // Update one CardLabel
     * const cardLabel = await prisma.cardLabel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardLabelUpdateArgs>(args: SelectSubset<T, CardLabelUpdateArgs<ExtArgs>>): Prisma__CardLabelClient<$Result.GetResult<Prisma.$CardLabelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardLabels.
     * @param {CardLabelDeleteManyArgs} args - Arguments to filter CardLabels to delete.
     * @example
     * // Delete a few CardLabels
     * const { count } = await prisma.cardLabel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardLabelDeleteManyArgs>(args?: SelectSubset<T, CardLabelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardLabels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardLabelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardLabels
     * const cardLabel = await prisma.cardLabel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardLabelUpdateManyArgs>(args: SelectSubset<T, CardLabelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardLabels and returns the data updated in the database.
     * @param {CardLabelUpdateManyAndReturnArgs} args - Arguments to update many CardLabels.
     * @example
     * // Update many CardLabels
     * const cardLabel = await prisma.cardLabel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardLabels and only return the `cardId`
     * const cardLabelWithCardIdOnly = await prisma.cardLabel.updateManyAndReturn({
     *   select: { cardId: true },
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
    updateManyAndReturn<T extends CardLabelUpdateManyAndReturnArgs>(args: SelectSubset<T, CardLabelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardLabelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardLabel.
     * @param {CardLabelUpsertArgs} args - Arguments to update or create a CardLabel.
     * @example
     * // Update or create a CardLabel
     * const cardLabel = await prisma.cardLabel.upsert({
     *   create: {
     *     // ... data to create a CardLabel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardLabel we want to update
     *   }
     * })
     */
    upsert<T extends CardLabelUpsertArgs>(args: SelectSubset<T, CardLabelUpsertArgs<ExtArgs>>): Prisma__CardLabelClient<$Result.GetResult<Prisma.$CardLabelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardLabels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardLabelCountArgs} args - Arguments to filter CardLabels to count.
     * @example
     * // Count the number of CardLabels
     * const count = await prisma.cardLabel.count({
     *   where: {
     *     // ... the filter for the CardLabels we want to count
     *   }
     * })
    **/
    count<T extends CardLabelCountArgs>(
      args?: Subset<T, CardLabelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardLabelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardLabel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardLabelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardLabelAggregateArgs>(args: Subset<T, CardLabelAggregateArgs>): Prisma.PrismaPromise<GetCardLabelAggregateType<T>>

    /**
     * Group by CardLabel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardLabelGroupByArgs} args - Group by arguments.
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
      T extends CardLabelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardLabelGroupByArgs['orderBy'] }
        : { orderBy?: CardLabelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardLabelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardLabelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardLabel model
   */
  readonly fields: CardLabelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardLabel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardLabelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    label<T extends LabelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LabelDefaultArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CardLabel model
   */
  interface CardLabelFieldRefs {
    readonly cardId: FieldRef<"CardLabel", 'String'>
    readonly labelId: FieldRef<"CardLabel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CardLabel findUnique
   */
  export type CardLabelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLabel
     */
    select?: CardLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLabel
     */
    omit?: CardLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLabelInclude<ExtArgs> | null
    /**
     * Filter, which CardLabel to fetch.
     */
    where: CardLabelWhereUniqueInput
  }

  /**
   * CardLabel findUniqueOrThrow
   */
  export type CardLabelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLabel
     */
    select?: CardLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLabel
     */
    omit?: CardLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLabelInclude<ExtArgs> | null
    /**
     * Filter, which CardLabel to fetch.
     */
    where: CardLabelWhereUniqueInput
  }

  /**
   * CardLabel findFirst
   */
  export type CardLabelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLabel
     */
    select?: CardLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLabel
     */
    omit?: CardLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLabelInclude<ExtArgs> | null
    /**
     * Filter, which CardLabel to fetch.
     */
    where?: CardLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardLabels to fetch.
     */
    orderBy?: CardLabelOrderByWithRelationInput | CardLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardLabels.
     */
    cursor?: CardLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardLabels.
     */
    distinct?: CardLabelScalarFieldEnum | CardLabelScalarFieldEnum[]
  }

  /**
   * CardLabel findFirstOrThrow
   */
  export type CardLabelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLabel
     */
    select?: CardLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLabel
     */
    omit?: CardLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLabelInclude<ExtArgs> | null
    /**
     * Filter, which CardLabel to fetch.
     */
    where?: CardLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardLabels to fetch.
     */
    orderBy?: CardLabelOrderByWithRelationInput | CardLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardLabels.
     */
    cursor?: CardLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardLabels.
     */
    distinct?: CardLabelScalarFieldEnum | CardLabelScalarFieldEnum[]
  }

  /**
   * CardLabel findMany
   */
  export type CardLabelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLabel
     */
    select?: CardLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLabel
     */
    omit?: CardLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLabelInclude<ExtArgs> | null
    /**
     * Filter, which CardLabels to fetch.
     */
    where?: CardLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardLabels to fetch.
     */
    orderBy?: CardLabelOrderByWithRelationInput | CardLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardLabels.
     */
    cursor?: CardLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardLabels.
     */
    distinct?: CardLabelScalarFieldEnum | CardLabelScalarFieldEnum[]
  }

  /**
   * CardLabel create
   */
  export type CardLabelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLabel
     */
    select?: CardLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLabel
     */
    omit?: CardLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLabelInclude<ExtArgs> | null
    /**
     * The data needed to create a CardLabel.
     */
    data: XOR<CardLabelCreateInput, CardLabelUncheckedCreateInput>
  }

  /**
   * CardLabel createMany
   */
  export type CardLabelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardLabels.
     */
    data: CardLabelCreateManyInput | CardLabelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardLabel createManyAndReturn
   */
  export type CardLabelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLabel
     */
    select?: CardLabelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardLabel
     */
    omit?: CardLabelOmit<ExtArgs> | null
    /**
     * The data used to create many CardLabels.
     */
    data: CardLabelCreateManyInput | CardLabelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLabelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardLabel update
   */
  export type CardLabelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLabel
     */
    select?: CardLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLabel
     */
    omit?: CardLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLabelInclude<ExtArgs> | null
    /**
     * The data needed to update a CardLabel.
     */
    data: XOR<CardLabelUpdateInput, CardLabelUncheckedUpdateInput>
    /**
     * Choose, which CardLabel to update.
     */
    where: CardLabelWhereUniqueInput
  }

  /**
   * CardLabel updateMany
   */
  export type CardLabelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardLabels.
     */
    data: XOR<CardLabelUpdateManyMutationInput, CardLabelUncheckedUpdateManyInput>
    /**
     * Filter which CardLabels to update
     */
    where?: CardLabelWhereInput
    /**
     * Limit how many CardLabels to update.
     */
    limit?: number
  }

  /**
   * CardLabel updateManyAndReturn
   */
  export type CardLabelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLabel
     */
    select?: CardLabelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardLabel
     */
    omit?: CardLabelOmit<ExtArgs> | null
    /**
     * The data used to update CardLabels.
     */
    data: XOR<CardLabelUpdateManyMutationInput, CardLabelUncheckedUpdateManyInput>
    /**
     * Filter which CardLabels to update
     */
    where?: CardLabelWhereInput
    /**
     * Limit how many CardLabels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLabelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardLabel upsert
   */
  export type CardLabelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLabel
     */
    select?: CardLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLabel
     */
    omit?: CardLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLabelInclude<ExtArgs> | null
    /**
     * The filter to search for the CardLabel to update in case it exists.
     */
    where: CardLabelWhereUniqueInput
    /**
     * In case the CardLabel found by the `where` argument doesn't exist, create a new CardLabel with this data.
     */
    create: XOR<CardLabelCreateInput, CardLabelUncheckedCreateInput>
    /**
     * In case the CardLabel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardLabelUpdateInput, CardLabelUncheckedUpdateInput>
  }

  /**
   * CardLabel delete
   */
  export type CardLabelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLabel
     */
    select?: CardLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLabel
     */
    omit?: CardLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLabelInclude<ExtArgs> | null
    /**
     * Filter which CardLabel to delete.
     */
    where: CardLabelWhereUniqueInput
  }

  /**
   * CardLabel deleteMany
   */
  export type CardLabelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardLabels to delete
     */
    where?: CardLabelWhereInput
    /**
     * Limit how many CardLabels to delete.
     */
    limit?: number
  }

  /**
   * CardLabel without action
   */
  export type CardLabelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardLabel
     */
    select?: CardLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardLabel
     */
    omit?: CardLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardLabelInclude<ExtArgs> | null
  }


  /**
   * Model CardDependency
   */

  export type AggregateCardDependency = {
    _count: CardDependencyCountAggregateOutputType | null
    _min: CardDependencyMinAggregateOutputType | null
    _max: CardDependencyMaxAggregateOutputType | null
  }

  export type CardDependencyMinAggregateOutputType = {
    blockerId: string | null
    blockedId: string | null
  }

  export type CardDependencyMaxAggregateOutputType = {
    blockerId: string | null
    blockedId: string | null
  }

  export type CardDependencyCountAggregateOutputType = {
    blockerId: number
    blockedId: number
    _all: number
  }


  export type CardDependencyMinAggregateInputType = {
    blockerId?: true
    blockedId?: true
  }

  export type CardDependencyMaxAggregateInputType = {
    blockerId?: true
    blockedId?: true
  }

  export type CardDependencyCountAggregateInputType = {
    blockerId?: true
    blockedId?: true
    _all?: true
  }

  export type CardDependencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardDependency to aggregate.
     */
    where?: CardDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardDependencies to fetch.
     */
    orderBy?: CardDependencyOrderByWithRelationInput | CardDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardDependencies
    **/
    _count?: true | CardDependencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardDependencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardDependencyMaxAggregateInputType
  }

  export type GetCardDependencyAggregateType<T extends CardDependencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCardDependency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardDependency[P]>
      : GetScalarType<T[P], AggregateCardDependency[P]>
  }




  export type CardDependencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardDependencyWhereInput
    orderBy?: CardDependencyOrderByWithAggregationInput | CardDependencyOrderByWithAggregationInput[]
    by: CardDependencyScalarFieldEnum[] | CardDependencyScalarFieldEnum
    having?: CardDependencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardDependencyCountAggregateInputType | true
    _min?: CardDependencyMinAggregateInputType
    _max?: CardDependencyMaxAggregateInputType
  }

  export type CardDependencyGroupByOutputType = {
    blockerId: string
    blockedId: string
    _count: CardDependencyCountAggregateOutputType | null
    _min: CardDependencyMinAggregateOutputType | null
    _max: CardDependencyMaxAggregateOutputType | null
  }

  type GetCardDependencyGroupByPayload<T extends CardDependencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardDependencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardDependencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardDependencyGroupByOutputType[P]>
            : GetScalarType<T[P], CardDependencyGroupByOutputType[P]>
        }
      >
    >


  export type CardDependencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blockerId?: boolean
    blockedId?: boolean
    blocker?: boolean | CardDefaultArgs<ExtArgs>
    blocked?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardDependency"]>

  export type CardDependencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blockerId?: boolean
    blockedId?: boolean
    blocker?: boolean | CardDefaultArgs<ExtArgs>
    blocked?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardDependency"]>

  export type CardDependencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blockerId?: boolean
    blockedId?: boolean
    blocker?: boolean | CardDefaultArgs<ExtArgs>
    blocked?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardDependency"]>

  export type CardDependencySelectScalar = {
    blockerId?: boolean
    blockedId?: boolean
  }

  export type CardDependencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"blockerId" | "blockedId", ExtArgs["result"]["cardDependency"]>
  export type CardDependencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocker?: boolean | CardDefaultArgs<ExtArgs>
    blocked?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type CardDependencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocker?: boolean | CardDefaultArgs<ExtArgs>
    blocked?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type CardDependencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocker?: boolean | CardDefaultArgs<ExtArgs>
    blocked?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $CardDependencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardDependency"
    objects: {
      blocker: Prisma.$CardPayload<ExtArgs>
      blocked: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      blockerId: string
      blockedId: string
    }, ExtArgs["result"]["cardDependency"]>
    composites: {}
  }

  type CardDependencyGetPayload<S extends boolean | null | undefined | CardDependencyDefaultArgs> = $Result.GetResult<Prisma.$CardDependencyPayload, S>

  type CardDependencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardDependencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardDependencyCountAggregateInputType | true
    }

  export interface CardDependencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardDependency'], meta: { name: 'CardDependency' } }
    /**
     * Find zero or one CardDependency that matches the filter.
     * @param {CardDependencyFindUniqueArgs} args - Arguments to find a CardDependency
     * @example
     * // Get one CardDependency
     * const cardDependency = await prisma.cardDependency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardDependencyFindUniqueArgs>(args: SelectSubset<T, CardDependencyFindUniqueArgs<ExtArgs>>): Prisma__CardDependencyClient<$Result.GetResult<Prisma.$CardDependencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardDependency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardDependencyFindUniqueOrThrowArgs} args - Arguments to find a CardDependency
     * @example
     * // Get one CardDependency
     * const cardDependency = await prisma.cardDependency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardDependencyFindUniqueOrThrowArgs>(args: SelectSubset<T, CardDependencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardDependencyClient<$Result.GetResult<Prisma.$CardDependencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardDependency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardDependencyFindFirstArgs} args - Arguments to find a CardDependency
     * @example
     * // Get one CardDependency
     * const cardDependency = await prisma.cardDependency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardDependencyFindFirstArgs>(args?: SelectSubset<T, CardDependencyFindFirstArgs<ExtArgs>>): Prisma__CardDependencyClient<$Result.GetResult<Prisma.$CardDependencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardDependency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardDependencyFindFirstOrThrowArgs} args - Arguments to find a CardDependency
     * @example
     * // Get one CardDependency
     * const cardDependency = await prisma.cardDependency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardDependencyFindFirstOrThrowArgs>(args?: SelectSubset<T, CardDependencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardDependencyClient<$Result.GetResult<Prisma.$CardDependencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardDependencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardDependencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardDependencies
     * const cardDependencies = await prisma.cardDependency.findMany()
     * 
     * // Get first 10 CardDependencies
     * const cardDependencies = await prisma.cardDependency.findMany({ take: 10 })
     * 
     * // Only select the `blockerId`
     * const cardDependencyWithBlockerIdOnly = await prisma.cardDependency.findMany({ select: { blockerId: true } })
     * 
     */
    findMany<T extends CardDependencyFindManyArgs>(args?: SelectSubset<T, CardDependencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardDependencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardDependency.
     * @param {CardDependencyCreateArgs} args - Arguments to create a CardDependency.
     * @example
     * // Create one CardDependency
     * const CardDependency = await prisma.cardDependency.create({
     *   data: {
     *     // ... data to create a CardDependency
     *   }
     * })
     * 
     */
    create<T extends CardDependencyCreateArgs>(args: SelectSubset<T, CardDependencyCreateArgs<ExtArgs>>): Prisma__CardDependencyClient<$Result.GetResult<Prisma.$CardDependencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardDependencies.
     * @param {CardDependencyCreateManyArgs} args - Arguments to create many CardDependencies.
     * @example
     * // Create many CardDependencies
     * const cardDependency = await prisma.cardDependency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardDependencyCreateManyArgs>(args?: SelectSubset<T, CardDependencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardDependencies and returns the data saved in the database.
     * @param {CardDependencyCreateManyAndReturnArgs} args - Arguments to create many CardDependencies.
     * @example
     * // Create many CardDependencies
     * const cardDependency = await prisma.cardDependency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardDependencies and only return the `blockerId`
     * const cardDependencyWithBlockerIdOnly = await prisma.cardDependency.createManyAndReturn({
     *   select: { blockerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardDependencyCreateManyAndReturnArgs>(args?: SelectSubset<T, CardDependencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardDependencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardDependency.
     * @param {CardDependencyDeleteArgs} args - Arguments to delete one CardDependency.
     * @example
     * // Delete one CardDependency
     * const CardDependency = await prisma.cardDependency.delete({
     *   where: {
     *     // ... filter to delete one CardDependency
     *   }
     * })
     * 
     */
    delete<T extends CardDependencyDeleteArgs>(args: SelectSubset<T, CardDependencyDeleteArgs<ExtArgs>>): Prisma__CardDependencyClient<$Result.GetResult<Prisma.$CardDependencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardDependency.
     * @param {CardDependencyUpdateArgs} args - Arguments to update one CardDependency.
     * @example
     * // Update one CardDependency
     * const cardDependency = await prisma.cardDependency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardDependencyUpdateArgs>(args: SelectSubset<T, CardDependencyUpdateArgs<ExtArgs>>): Prisma__CardDependencyClient<$Result.GetResult<Prisma.$CardDependencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardDependencies.
     * @param {CardDependencyDeleteManyArgs} args - Arguments to filter CardDependencies to delete.
     * @example
     * // Delete a few CardDependencies
     * const { count } = await prisma.cardDependency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDependencyDeleteManyArgs>(args?: SelectSubset<T, CardDependencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardDependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardDependencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardDependencies
     * const cardDependency = await prisma.cardDependency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardDependencyUpdateManyArgs>(args: SelectSubset<T, CardDependencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardDependencies and returns the data updated in the database.
     * @param {CardDependencyUpdateManyAndReturnArgs} args - Arguments to update many CardDependencies.
     * @example
     * // Update many CardDependencies
     * const cardDependency = await prisma.cardDependency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardDependencies and only return the `blockerId`
     * const cardDependencyWithBlockerIdOnly = await prisma.cardDependency.updateManyAndReturn({
     *   select: { blockerId: true },
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
    updateManyAndReturn<T extends CardDependencyUpdateManyAndReturnArgs>(args: SelectSubset<T, CardDependencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardDependencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardDependency.
     * @param {CardDependencyUpsertArgs} args - Arguments to update or create a CardDependency.
     * @example
     * // Update or create a CardDependency
     * const cardDependency = await prisma.cardDependency.upsert({
     *   create: {
     *     // ... data to create a CardDependency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardDependency we want to update
     *   }
     * })
     */
    upsert<T extends CardDependencyUpsertArgs>(args: SelectSubset<T, CardDependencyUpsertArgs<ExtArgs>>): Prisma__CardDependencyClient<$Result.GetResult<Prisma.$CardDependencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardDependencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardDependencyCountArgs} args - Arguments to filter CardDependencies to count.
     * @example
     * // Count the number of CardDependencies
     * const count = await prisma.cardDependency.count({
     *   where: {
     *     // ... the filter for the CardDependencies we want to count
     *   }
     * })
    **/
    count<T extends CardDependencyCountArgs>(
      args?: Subset<T, CardDependencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardDependencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardDependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardDependencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CardDependencyAggregateArgs>(args: Subset<T, CardDependencyAggregateArgs>): Prisma.PrismaPromise<GetCardDependencyAggregateType<T>>

    /**
     * Group by CardDependency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardDependencyGroupByArgs} args - Group by arguments.
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
      T extends CardDependencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardDependencyGroupByArgs['orderBy'] }
        : { orderBy?: CardDependencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CardDependencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardDependencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardDependency model
   */
  readonly fields: CardDependencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardDependency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardDependencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blocker<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blocked<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CardDependency model
   */
  interface CardDependencyFieldRefs {
    readonly blockerId: FieldRef<"CardDependency", 'String'>
    readonly blockedId: FieldRef<"CardDependency", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CardDependency findUnique
   */
  export type CardDependencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDependency
     */
    select?: CardDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardDependency
     */
    omit?: CardDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardDependencyInclude<ExtArgs> | null
    /**
     * Filter, which CardDependency to fetch.
     */
    where: CardDependencyWhereUniqueInput
  }

  /**
   * CardDependency findUniqueOrThrow
   */
  export type CardDependencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDependency
     */
    select?: CardDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardDependency
     */
    omit?: CardDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardDependencyInclude<ExtArgs> | null
    /**
     * Filter, which CardDependency to fetch.
     */
    where: CardDependencyWhereUniqueInput
  }

  /**
   * CardDependency findFirst
   */
  export type CardDependencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDependency
     */
    select?: CardDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardDependency
     */
    omit?: CardDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardDependencyInclude<ExtArgs> | null
    /**
     * Filter, which CardDependency to fetch.
     */
    where?: CardDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardDependencies to fetch.
     */
    orderBy?: CardDependencyOrderByWithRelationInput | CardDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardDependencies.
     */
    cursor?: CardDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardDependencies.
     */
    distinct?: CardDependencyScalarFieldEnum | CardDependencyScalarFieldEnum[]
  }

  /**
   * CardDependency findFirstOrThrow
   */
  export type CardDependencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDependency
     */
    select?: CardDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardDependency
     */
    omit?: CardDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardDependencyInclude<ExtArgs> | null
    /**
     * Filter, which CardDependency to fetch.
     */
    where?: CardDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardDependencies to fetch.
     */
    orderBy?: CardDependencyOrderByWithRelationInput | CardDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardDependencies.
     */
    cursor?: CardDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardDependencies.
     */
    distinct?: CardDependencyScalarFieldEnum | CardDependencyScalarFieldEnum[]
  }

  /**
   * CardDependency findMany
   */
  export type CardDependencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDependency
     */
    select?: CardDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardDependency
     */
    omit?: CardDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardDependencyInclude<ExtArgs> | null
    /**
     * Filter, which CardDependencies to fetch.
     */
    where?: CardDependencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardDependencies to fetch.
     */
    orderBy?: CardDependencyOrderByWithRelationInput | CardDependencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardDependencies.
     */
    cursor?: CardDependencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardDependencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardDependencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardDependencies.
     */
    distinct?: CardDependencyScalarFieldEnum | CardDependencyScalarFieldEnum[]
  }

  /**
   * CardDependency create
   */
  export type CardDependencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDependency
     */
    select?: CardDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardDependency
     */
    omit?: CardDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardDependencyInclude<ExtArgs> | null
    /**
     * The data needed to create a CardDependency.
     */
    data: XOR<CardDependencyCreateInput, CardDependencyUncheckedCreateInput>
  }

  /**
   * CardDependency createMany
   */
  export type CardDependencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardDependencies.
     */
    data: CardDependencyCreateManyInput | CardDependencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardDependency createManyAndReturn
   */
  export type CardDependencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDependency
     */
    select?: CardDependencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardDependency
     */
    omit?: CardDependencyOmit<ExtArgs> | null
    /**
     * The data used to create many CardDependencies.
     */
    data: CardDependencyCreateManyInput | CardDependencyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardDependencyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardDependency update
   */
  export type CardDependencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDependency
     */
    select?: CardDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardDependency
     */
    omit?: CardDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardDependencyInclude<ExtArgs> | null
    /**
     * The data needed to update a CardDependency.
     */
    data: XOR<CardDependencyUpdateInput, CardDependencyUncheckedUpdateInput>
    /**
     * Choose, which CardDependency to update.
     */
    where: CardDependencyWhereUniqueInput
  }

  /**
   * CardDependency updateMany
   */
  export type CardDependencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardDependencies.
     */
    data: XOR<CardDependencyUpdateManyMutationInput, CardDependencyUncheckedUpdateManyInput>
    /**
     * Filter which CardDependencies to update
     */
    where?: CardDependencyWhereInput
    /**
     * Limit how many CardDependencies to update.
     */
    limit?: number
  }

  /**
   * CardDependency updateManyAndReturn
   */
  export type CardDependencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDependency
     */
    select?: CardDependencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardDependency
     */
    omit?: CardDependencyOmit<ExtArgs> | null
    /**
     * The data used to update CardDependencies.
     */
    data: XOR<CardDependencyUpdateManyMutationInput, CardDependencyUncheckedUpdateManyInput>
    /**
     * Filter which CardDependencies to update
     */
    where?: CardDependencyWhereInput
    /**
     * Limit how many CardDependencies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardDependencyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CardDependency upsert
   */
  export type CardDependencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDependency
     */
    select?: CardDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardDependency
     */
    omit?: CardDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardDependencyInclude<ExtArgs> | null
    /**
     * The filter to search for the CardDependency to update in case it exists.
     */
    where: CardDependencyWhereUniqueInput
    /**
     * In case the CardDependency found by the `where` argument doesn't exist, create a new CardDependency with this data.
     */
    create: XOR<CardDependencyCreateInput, CardDependencyUncheckedCreateInput>
    /**
     * In case the CardDependency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardDependencyUpdateInput, CardDependencyUncheckedUpdateInput>
  }

  /**
   * CardDependency delete
   */
  export type CardDependencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDependency
     */
    select?: CardDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardDependency
     */
    omit?: CardDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardDependencyInclude<ExtArgs> | null
    /**
     * Filter which CardDependency to delete.
     */
    where: CardDependencyWhereUniqueInput
  }

  /**
   * CardDependency deleteMany
   */
  export type CardDependencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardDependencies to delete
     */
    where?: CardDependencyWhereInput
    /**
     * Limit how many CardDependencies to delete.
     */
    limit?: number
  }

  /**
   * CardDependency without action
   */
  export type CardDependencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardDependency
     */
    select?: CardDependencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardDependency
     */
    omit?: CardDependencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardDependencyInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    cardId: string | null
    userId: string | null
    type: $Enums.ActivityType | null
    createdAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    cardId: string | null
    userId: string | null
    type: $Enums.ActivityType | null
    createdAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    projectId: number
    cardId: number
    userId: number
    type: number
    data: number
    createdAt: number
    _all: number
  }


  export type ActivityMinAggregateInputType = {
    id?: true
    projectId?: true
    cardId?: true
    userId?: true
    type?: true
    createdAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    projectId?: true
    cardId?: true
    userId?: true
    type?: true
    createdAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    projectId?: true
    cardId?: true
    userId?: true
    type?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    projectId: string
    cardId: string | null
    userId: string
    type: $Enums.ActivityType
    data: JsonValue | null
    createdAt: Date
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    cardId?: boolean
    userId?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    card?: boolean | Activity$cardArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    cardId?: boolean
    userId?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    card?: boolean | Activity$cardArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    cardId?: boolean
    userId?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    card?: boolean | Activity$cardArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    projectId?: boolean
    cardId?: boolean
    userId?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "cardId" | "userId" | "type" | "data" | "createdAt", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    card?: boolean | Activity$cardArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    card?: boolean | Activity$cardArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    card?: boolean | Activity$cardArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      card: Prisma.$CardPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      cardId: string | null
      userId: string
      type: $Enums.ActivityType
      data: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    card<T extends Activity$cardArgs<ExtArgs> = {}>(args?: Subset<T, Activity$cardArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly projectId: FieldRef<"Activity", 'String'>
    readonly cardId: FieldRef<"Activity", 'String'>
    readonly userId: FieldRef<"Activity", 'String'>
    readonly type: FieldRef<"Activity", 'ActivityType'>
    readonly data: FieldRef<"Activity", 'Json'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.card
   */
  export type Activity$cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    cardId: string | null
    type: $Enums.NotificationType | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    cardId: string | null
    type: $Enums.NotificationType | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    cardId: number
    type: number
    message: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    cardId?: true
    type?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    cardId?: true
    type?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    cardId?: true
    type?: true
    message?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    cardId: string | null
    type: $Enums.NotificationType
    message: string
    read: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardId?: boolean
    type?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | Notification$cardArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardId?: boolean
    type?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | Notification$cardArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardId?: boolean
    type?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | Notification$cardArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    cardId?: boolean
    type?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "cardId" | "type" | "message" | "read" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | Notification$cardArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | Notification$cardArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | Notification$cardArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      card: Prisma.$CardPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      cardId: string | null
      type: $Enums.NotificationType
      message: string
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    card<T extends Notification$cardArgs<ExtArgs> = {}>(args?: Subset<T, Notification$cardArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly cardId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.card
   */
  export type Notification$cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    ownerId: 'ownerId',
    createdAt: 'createdAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OrganizationMemberScalarFieldEnum: {
    organizationId: 'organizationId',
    userId: 'userId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type OrganizationMemberScalarFieldEnum = (typeof OrganizationMemberScalarFieldEnum)[keyof typeof OrganizationMemberScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    organizationId: 'organizationId',
    ownerId: 'ownerId',
    createdAt: 'createdAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ColumnScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    position: 'position',
    wipLimit: 'wipLimit',
    isDone: 'isDone'
  };

  export type ColumnScalarFieldEnum = (typeof ColumnScalarFieldEnum)[keyof typeof ColumnScalarFieldEnum]


  export const CardScalarFieldEnum: {
    id: 'id',
    columnId: 'columnId',
    title: 'title',
    description: 'description',
    creatorId: 'creatorId',
    assigneeId: 'assigneeId',
    priority: 'priority',
    dueDate: 'dueDate',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastActivityAt: 'lastActivityAt'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    authorId: 'authorId',
    text: 'text',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const LabelScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    color: 'color'
  };

  export type LabelScalarFieldEnum = (typeof LabelScalarFieldEnum)[keyof typeof LabelScalarFieldEnum]


  export const CardLabelScalarFieldEnum: {
    cardId: 'cardId',
    labelId: 'labelId'
  };

  export type CardLabelScalarFieldEnum = (typeof CardLabelScalarFieldEnum)[keyof typeof CardLabelScalarFieldEnum]


  export const CardDependencyScalarFieldEnum: {
    blockerId: 'blockerId',
    blockedId: 'blockedId'
  };

  export type CardDependencyScalarFieldEnum = (typeof CardDependencyScalarFieldEnum)[keyof typeof CardDependencyScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    cardId: 'cardId',
    userId: 'userId',
    type: 'type',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cardId: 'cardId',
    type: 'type',
    message: 'message',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType'>
    


  /**
   * Reference to a field of type 'ActivityType[]'
   */
  export type ListEnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    ownedOrganizations?: OrganizationListRelationFilter
    organizationMemberships?: OrganizationMemberListRelationFilter
    ownedProjects?: ProjectListRelationFilter
    createdCards?: CardListRelationFilter
    assignedCards?: CardListRelationFilter
    comments?: CommentListRelationFilter
    activities?: ActivityListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    ownedOrganizations?: OrganizationOrderByRelationAggregateInput
    organizationMemberships?: OrganizationMemberOrderByRelationAggregateInput
    ownedProjects?: ProjectOrderByRelationAggregateInput
    createdCards?: CardOrderByRelationAggregateInput
    assignedCards?: CardOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    ownedOrganizations?: OrganizationListRelationFilter
    organizationMemberships?: OrganizationMemberListRelationFilter
    ownedProjects?: ProjectListRelationFilter
    createdCards?: CardListRelationFilter
    assignedCards?: CardListRelationFilter
    comments?: CommentListRelationFilter
    activities?: ActivityListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    description?: StringNullableFilter<"Organization"> | string | null
    ownerId?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: OrganizationMemberListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: OrganizationMemberOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    description?: StringNullableFilter<"Organization"> | string | null
    ownerId?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: OrganizationMemberListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    description?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    ownerId?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type OrganizationMemberWhereInput = {
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    OR?: OrganizationMemberWhereInput[]
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    organizationId?: StringFilter<"OrganizationMember"> | string
    userId?: StringFilter<"OrganizationMember"> | string
    role?: EnumRoleFilter<"OrganizationMember"> | $Enums.Role
    joinedAt?: DateTimeFilter<"OrganizationMember"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrganizationMemberOrderByWithRelationInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OrganizationMemberWhereUniqueInput = Prisma.AtLeast<{
    organizationId_userId?: OrganizationMemberOrganizationIdUserIdCompoundUniqueInput
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    OR?: OrganizationMemberWhereInput[]
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    organizationId?: StringFilter<"OrganizationMember"> | string
    userId?: StringFilter<"OrganizationMember"> | string
    role?: EnumRoleFilter<"OrganizationMember"> | $Enums.Role
    joinedAt?: DateTimeFilter<"OrganizationMember"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "organizationId_userId">

  export type OrganizationMemberOrderByWithAggregationInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: OrganizationMemberCountOrderByAggregateInput
    _max?: OrganizationMemberMaxOrderByAggregateInput
    _min?: OrganizationMemberMinOrderByAggregateInput
  }

  export type OrganizationMemberScalarWhereWithAggregatesInput = {
    AND?: OrganizationMemberScalarWhereWithAggregatesInput | OrganizationMemberScalarWhereWithAggregatesInput[]
    OR?: OrganizationMemberScalarWhereWithAggregatesInput[]
    NOT?: OrganizationMemberScalarWhereWithAggregatesInput | OrganizationMemberScalarWhereWithAggregatesInput[]
    organizationId?: StringWithAggregatesFilter<"OrganizationMember"> | string
    userId?: StringWithAggregatesFilter<"OrganizationMember"> | string
    role?: EnumRoleWithAggregatesFilter<"OrganizationMember"> | $Enums.Role
    joinedAt?: DateTimeWithAggregatesFilter<"OrganizationMember"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    organizationId?: StringFilter<"Project"> | string
    ownerId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    columns?: ColumnListRelationFilter
    labels?: LabelListRelationFilter
    activities?: ActivityListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    columns?: ColumnOrderByRelationAggregateInput
    labels?: LabelOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    organizationId?: StringFilter<"Project"> | string
    ownerId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    columns?: ColumnListRelationFilter
    labels?: LabelListRelationFilter
    activities?: ActivityListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    organizationId?: StringWithAggregatesFilter<"Project"> | string
    ownerId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ColumnWhereInput = {
    AND?: ColumnWhereInput | ColumnWhereInput[]
    OR?: ColumnWhereInput[]
    NOT?: ColumnWhereInput | ColumnWhereInput[]
    id?: StringFilter<"Column"> | string
    projectId?: StringFilter<"Column"> | string
    name?: StringFilter<"Column"> | string
    position?: FloatFilter<"Column"> | number
    wipLimit?: IntNullableFilter<"Column"> | number | null
    isDone?: BoolFilter<"Column"> | boolean
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    cards?: CardListRelationFilter
  }

  export type ColumnOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    wipLimit?: SortOrderInput | SortOrder
    isDone?: SortOrder
    project?: ProjectOrderByWithRelationInput
    cards?: CardOrderByRelationAggregateInput
  }

  export type ColumnWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ColumnWhereInput | ColumnWhereInput[]
    OR?: ColumnWhereInput[]
    NOT?: ColumnWhereInput | ColumnWhereInput[]
    projectId?: StringFilter<"Column"> | string
    name?: StringFilter<"Column"> | string
    position?: FloatFilter<"Column"> | number
    wipLimit?: IntNullableFilter<"Column"> | number | null
    isDone?: BoolFilter<"Column"> | boolean
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    cards?: CardListRelationFilter
  }, "id">

  export type ColumnOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    wipLimit?: SortOrderInput | SortOrder
    isDone?: SortOrder
    _count?: ColumnCountOrderByAggregateInput
    _avg?: ColumnAvgOrderByAggregateInput
    _max?: ColumnMaxOrderByAggregateInput
    _min?: ColumnMinOrderByAggregateInput
    _sum?: ColumnSumOrderByAggregateInput
  }

  export type ColumnScalarWhereWithAggregatesInput = {
    AND?: ColumnScalarWhereWithAggregatesInput | ColumnScalarWhereWithAggregatesInput[]
    OR?: ColumnScalarWhereWithAggregatesInput[]
    NOT?: ColumnScalarWhereWithAggregatesInput | ColumnScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Column"> | string
    projectId?: StringWithAggregatesFilter<"Column"> | string
    name?: StringWithAggregatesFilter<"Column"> | string
    position?: FloatWithAggregatesFilter<"Column"> | number
    wipLimit?: IntNullableWithAggregatesFilter<"Column"> | number | null
    isDone?: BoolWithAggregatesFilter<"Column"> | boolean
  }

  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: StringFilter<"Card"> | string
    columnId?: StringFilter<"Card"> | string
    title?: StringFilter<"Card"> | string
    description?: StringNullableFilter<"Card"> | string | null
    creatorId?: StringFilter<"Card"> | string
    assigneeId?: StringNullableFilter<"Card"> | string | null
    priority?: EnumPriorityFilter<"Card"> | $Enums.Priority
    dueDate?: DateTimeNullableFilter<"Card"> | Date | string | null
    position?: FloatFilter<"Card"> | number
    createdAt?: DateTimeFilter<"Card"> | Date | string
    updatedAt?: DateTimeFilter<"Card"> | Date | string
    lastActivityAt?: DateTimeFilter<"Card"> | Date | string
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    comments?: CommentListRelationFilter
    labels?: CardLabelListRelationFilter
    blocking?: CardDependencyListRelationFilter
    blockedBy?: CardDependencyListRelationFilter
    activities?: ActivityListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    columnId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    priority?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActivityAt?: SortOrder
    column?: ColumnOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    assignee?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    labels?: CardLabelOrderByRelationAggregateInput
    blocking?: CardDependencyOrderByRelationAggregateInput
    blockedBy?: CardDependencyOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    columnId?: StringFilter<"Card"> | string
    title?: StringFilter<"Card"> | string
    description?: StringNullableFilter<"Card"> | string | null
    creatorId?: StringFilter<"Card"> | string
    assigneeId?: StringNullableFilter<"Card"> | string | null
    priority?: EnumPriorityFilter<"Card"> | $Enums.Priority
    dueDate?: DateTimeNullableFilter<"Card"> | Date | string | null
    position?: FloatFilter<"Card"> | number
    createdAt?: DateTimeFilter<"Card"> | Date | string
    updatedAt?: DateTimeFilter<"Card"> | Date | string
    lastActivityAt?: DateTimeFilter<"Card"> | Date | string
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    comments?: CommentListRelationFilter
    labels?: CardLabelListRelationFilter
    blocking?: CardDependencyListRelationFilter
    blockedBy?: CardDependencyListRelationFilter
    activities?: ActivityListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    columnId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    priority?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActivityAt?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Card"> | string
    columnId?: StringWithAggregatesFilter<"Card"> | string
    title?: StringWithAggregatesFilter<"Card"> | string
    description?: StringNullableWithAggregatesFilter<"Card"> | string | null
    creatorId?: StringWithAggregatesFilter<"Card"> | string
    assigneeId?: StringNullableWithAggregatesFilter<"Card"> | string | null
    priority?: EnumPriorityWithAggregatesFilter<"Card"> | $Enums.Priority
    dueDate?: DateTimeNullableWithAggregatesFilter<"Card"> | Date | string | null
    position?: FloatWithAggregatesFilter<"Card"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
    lastActivityAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    cardId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    cardId?: SortOrder
    authorId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    card?: CardOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    cardId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    cardId?: SortOrder
    authorId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    cardId?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: StringWithAggregatesFilter<"Comment"> | string
    text?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type LabelWhereInput = {
    AND?: LabelWhereInput | LabelWhereInput[]
    OR?: LabelWhereInput[]
    NOT?: LabelWhereInput | LabelWhereInput[]
    id?: StringFilter<"Label"> | string
    projectId?: StringFilter<"Label"> | string
    name?: StringFilter<"Label"> | string
    color?: StringFilter<"Label"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    cards?: CardLabelListRelationFilter
  }

  export type LabelOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    project?: ProjectOrderByWithRelationInput
    cards?: CardLabelOrderByRelationAggregateInput
  }

  export type LabelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LabelWhereInput | LabelWhereInput[]
    OR?: LabelWhereInput[]
    NOT?: LabelWhereInput | LabelWhereInput[]
    projectId?: StringFilter<"Label"> | string
    name?: StringFilter<"Label"> | string
    color?: StringFilter<"Label"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    cards?: CardLabelListRelationFilter
  }, "id">

  export type LabelOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    _count?: LabelCountOrderByAggregateInput
    _max?: LabelMaxOrderByAggregateInput
    _min?: LabelMinOrderByAggregateInput
  }

  export type LabelScalarWhereWithAggregatesInput = {
    AND?: LabelScalarWhereWithAggregatesInput | LabelScalarWhereWithAggregatesInput[]
    OR?: LabelScalarWhereWithAggregatesInput[]
    NOT?: LabelScalarWhereWithAggregatesInput | LabelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Label"> | string
    projectId?: StringWithAggregatesFilter<"Label"> | string
    name?: StringWithAggregatesFilter<"Label"> | string
    color?: StringWithAggregatesFilter<"Label"> | string
  }

  export type CardLabelWhereInput = {
    AND?: CardLabelWhereInput | CardLabelWhereInput[]
    OR?: CardLabelWhereInput[]
    NOT?: CardLabelWhereInput | CardLabelWhereInput[]
    cardId?: StringFilter<"CardLabel"> | string
    labelId?: StringFilter<"CardLabel"> | string
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    label?: XOR<LabelScalarRelationFilter, LabelWhereInput>
  }

  export type CardLabelOrderByWithRelationInput = {
    cardId?: SortOrder
    labelId?: SortOrder
    card?: CardOrderByWithRelationInput
    label?: LabelOrderByWithRelationInput
  }

  export type CardLabelWhereUniqueInput = Prisma.AtLeast<{
    cardId_labelId?: CardLabelCardIdLabelIdCompoundUniqueInput
    AND?: CardLabelWhereInput | CardLabelWhereInput[]
    OR?: CardLabelWhereInput[]
    NOT?: CardLabelWhereInput | CardLabelWhereInput[]
    cardId?: StringFilter<"CardLabel"> | string
    labelId?: StringFilter<"CardLabel"> | string
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
    label?: XOR<LabelScalarRelationFilter, LabelWhereInput>
  }, "cardId_labelId">

  export type CardLabelOrderByWithAggregationInput = {
    cardId?: SortOrder
    labelId?: SortOrder
    _count?: CardLabelCountOrderByAggregateInput
    _max?: CardLabelMaxOrderByAggregateInput
    _min?: CardLabelMinOrderByAggregateInput
  }

  export type CardLabelScalarWhereWithAggregatesInput = {
    AND?: CardLabelScalarWhereWithAggregatesInput | CardLabelScalarWhereWithAggregatesInput[]
    OR?: CardLabelScalarWhereWithAggregatesInput[]
    NOT?: CardLabelScalarWhereWithAggregatesInput | CardLabelScalarWhereWithAggregatesInput[]
    cardId?: StringWithAggregatesFilter<"CardLabel"> | string
    labelId?: StringWithAggregatesFilter<"CardLabel"> | string
  }

  export type CardDependencyWhereInput = {
    AND?: CardDependencyWhereInput | CardDependencyWhereInput[]
    OR?: CardDependencyWhereInput[]
    NOT?: CardDependencyWhereInput | CardDependencyWhereInput[]
    blockerId?: StringFilter<"CardDependency"> | string
    blockedId?: StringFilter<"CardDependency"> | string
    blocker?: XOR<CardScalarRelationFilter, CardWhereInput>
    blocked?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type CardDependencyOrderByWithRelationInput = {
    blockerId?: SortOrder
    blockedId?: SortOrder
    blocker?: CardOrderByWithRelationInput
    blocked?: CardOrderByWithRelationInput
  }

  export type CardDependencyWhereUniqueInput = Prisma.AtLeast<{
    blockerId_blockedId?: CardDependencyBlockerIdBlockedIdCompoundUniqueInput
    AND?: CardDependencyWhereInput | CardDependencyWhereInput[]
    OR?: CardDependencyWhereInput[]
    NOT?: CardDependencyWhereInput | CardDependencyWhereInput[]
    blockerId?: StringFilter<"CardDependency"> | string
    blockedId?: StringFilter<"CardDependency"> | string
    blocker?: XOR<CardScalarRelationFilter, CardWhereInput>
    blocked?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "blockerId_blockedId">

  export type CardDependencyOrderByWithAggregationInput = {
    blockerId?: SortOrder
    blockedId?: SortOrder
    _count?: CardDependencyCountOrderByAggregateInput
    _max?: CardDependencyMaxOrderByAggregateInput
    _min?: CardDependencyMinOrderByAggregateInput
  }

  export type CardDependencyScalarWhereWithAggregatesInput = {
    AND?: CardDependencyScalarWhereWithAggregatesInput | CardDependencyScalarWhereWithAggregatesInput[]
    OR?: CardDependencyScalarWhereWithAggregatesInput[]
    NOT?: CardDependencyScalarWhereWithAggregatesInput | CardDependencyScalarWhereWithAggregatesInput[]
    blockerId?: StringWithAggregatesFilter<"CardDependency"> | string
    blockedId?: StringWithAggregatesFilter<"CardDependency"> | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    projectId?: StringFilter<"Activity"> | string
    cardId?: StringNullableFilter<"Activity"> | string | null
    userId?: StringFilter<"Activity"> | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    data?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    card?: XOR<CardNullableScalarRelationFilter, CardWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    cardId?: SortOrderInput | SortOrder
    userId?: SortOrder
    type?: SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    card?: CardOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    projectId?: StringFilter<"Activity"> | string
    cardId?: StringNullableFilter<"Activity"> | string | null
    userId?: StringFilter<"Activity"> | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    data?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    card?: XOR<CardNullableScalarRelationFilter, CardWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    cardId?: SortOrderInput | SortOrder
    userId?: SortOrder
    type?: SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    projectId?: StringWithAggregatesFilter<"Activity"> | string
    cardId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    userId?: StringWithAggregatesFilter<"Activity"> | string
    type?: EnumActivityTypeWithAggregatesFilter<"Activity"> | $Enums.ActivityType
    data?: JsonNullableWithAggregatesFilter<"Activity">
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    cardId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    card?: XOR<CardNullableScalarRelationFilter, CardWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrderInput | SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    card?: CardOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    cardId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    card?: XOR<CardNullableScalarRelationFilter, CardWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrderInput | SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    cardId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    organizationMemberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    createdCards?: CardCreateNestedManyWithoutCreatorInput
    assignedCards?: CardCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    organizationMemberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    createdCards?: CardUncheckedCreateNestedManyWithoutCreatorInput
    assignedCards?: CardUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    organizationMemberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    createdCards?: CardUpdateManyWithoutCreatorNestedInput
    assignedCards?: CardUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    organizationMemberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    createdCards?: CardUncheckedUpdateManyWithoutCreatorNestedInput
    assignedCards?: CardUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedOrganizationsInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    projects?: ProjectCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedOrganizationsNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    projects?: ProjectUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberCreateInput = {
    role?: $Enums.Role
    joinedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutOrganizationMembershipsInput
  }

  export type OrganizationMemberUncheckedCreateInput = {
    organizationId: string
    userId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type OrganizationMemberUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutOrganizationMembershipsNestedInput
  }

  export type OrganizationMemberUncheckedUpdateInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberCreateManyInput = {
    organizationId: string
    userId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type OrganizationMemberUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberUncheckedUpdateManyInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutProjectsInput
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    columns?: ColumnCreateNestedManyWithoutProjectInput
    labels?: LabelCreateNestedManyWithoutProjectInput
    activities?: ActivityCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    ownerId: string
    createdAt?: Date | string
    columns?: ColumnUncheckedCreateNestedManyWithoutProjectInput
    labels?: LabelUncheckedCreateNestedManyWithoutProjectInput
    activities?: ActivityUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    columns?: ColumnUpdateManyWithoutProjectNestedInput
    labels?: LabelUpdateManyWithoutProjectNestedInput
    activities?: ActivityUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: ColumnUncheckedUpdateManyWithoutProjectNestedInput
    labels?: LabelUncheckedUpdateManyWithoutProjectNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    ownerId: string
    createdAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnCreateInput = {
    id?: string
    name: string
    position: number
    wipLimit?: number | null
    isDone?: boolean
    project: ProjectCreateNestedOneWithoutColumnsInput
    cards?: CardCreateNestedManyWithoutColumnInput
  }

  export type ColumnUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    position: number
    wipLimit?: number | null
    isDone?: boolean
    cards?: CardUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    wipLimit?: NullableIntFieldUpdateOperationsInput | number | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectUpdateOneRequiredWithoutColumnsNestedInput
    cards?: CardUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    wipLimit?: NullableIntFieldUpdateOperationsInput | number | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    cards?: CardUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ColumnCreateManyInput = {
    id?: string
    projectId: string
    name: string
    position: number
    wipLimit?: number | null
    isDone?: boolean
  }

  export type ColumnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    wipLimit?: NullableIntFieldUpdateOperationsInput | number | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColumnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    wipLimit?: NullableIntFieldUpdateOperationsInput | number | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CardCreateInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    column: ColumnCreateNestedOneWithoutCardsInput
    creator: UserCreateNestedOneWithoutCreatedCardsInput
    assignee?: UserCreateNestedOneWithoutAssignedCardsInput
    comments?: CommentCreateNestedManyWithoutCardInput
    labels?: CardLabelCreateNestedManyWithoutCardInput
    blocking?: CardDependencyCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyCreateNestedManyWithoutBlockedInput
    activities?: ActivityCreateNestedManyWithoutCardInput
    notifications?: NotificationCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateInput = {
    id?: string
    columnId: string
    title: string
    description?: string | null
    creatorId: string
    assigneeId?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutCardInput
    labels?: CardLabelUncheckedCreateNestedManyWithoutCardInput
    blocking?: CardDependencyUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyUncheckedCreateNestedManyWithoutBlockedInput
    activities?: ActivityUncheckedCreateNestedManyWithoutCardInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    column?: ColumnUpdateOneRequiredWithoutCardsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedCardsNestedInput
    assignee?: UserUpdateOneWithoutAssignedCardsNestedInput
    comments?: CommentUpdateManyWithoutCardNestedInput
    labels?: CardLabelUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUpdateManyWithoutCardNestedInput
    notifications?: NotificationUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutCardNestedInput
    labels?: CardLabelUncheckedUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUncheckedUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutCardNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardCreateManyInput = {
    id?: string
    columnId: string
    title: string
    description?: string | null
    creatorId: string
    assigneeId?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
  }

  export type CardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    card: CardCreateNestedOneWithoutCommentsInput
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    cardId: string
    authorId: string
    text: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    card?: CardUpdateOneRequiredWithoutCommentsNestedInput
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    cardId: string
    authorId: string
    text: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabelCreateInput = {
    id?: string
    name: string
    color: string
    project: ProjectCreateNestedOneWithoutLabelsInput
    cards?: CardLabelCreateNestedManyWithoutLabelInput
  }

  export type LabelUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    color: string
    cards?: CardLabelUncheckedCreateNestedManyWithoutLabelInput
  }

  export type LabelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutLabelsNestedInput
    cards?: CardLabelUpdateManyWithoutLabelNestedInput
  }

  export type LabelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    cards?: CardLabelUncheckedUpdateManyWithoutLabelNestedInput
  }

  export type LabelCreateManyInput = {
    id?: string
    projectId: string
    name: string
    color: string
  }

  export type LabelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type LabelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type CardLabelCreateInput = {
    card: CardCreateNestedOneWithoutLabelsInput
    label: LabelCreateNestedOneWithoutCardsInput
  }

  export type CardLabelUncheckedCreateInput = {
    cardId: string
    labelId: string
  }

  export type CardLabelUpdateInput = {
    card?: CardUpdateOneRequiredWithoutLabelsNestedInput
    label?: LabelUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardLabelUncheckedUpdateInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    labelId?: StringFieldUpdateOperationsInput | string
  }

  export type CardLabelCreateManyInput = {
    cardId: string
    labelId: string
  }

  export type CardLabelUpdateManyMutationInput = {

  }

  export type CardLabelUncheckedUpdateManyInput = {
    cardId?: StringFieldUpdateOperationsInput | string
    labelId?: StringFieldUpdateOperationsInput | string
  }

  export type CardDependencyCreateInput = {
    blocker: CardCreateNestedOneWithoutBlockingInput
    blocked: CardCreateNestedOneWithoutBlockedByInput
  }

  export type CardDependencyUncheckedCreateInput = {
    blockerId: string
    blockedId: string
  }

  export type CardDependencyUpdateInput = {
    blocker?: CardUpdateOneRequiredWithoutBlockingNestedInput
    blocked?: CardUpdateOneRequiredWithoutBlockedByNestedInput
  }

  export type CardDependencyUncheckedUpdateInput = {
    blockerId?: StringFieldUpdateOperationsInput | string
    blockedId?: StringFieldUpdateOperationsInput | string
  }

  export type CardDependencyCreateManyInput = {
    blockerId: string
    blockedId: string
  }

  export type CardDependencyUpdateManyMutationInput = {

  }

  export type CardDependencyUncheckedUpdateManyInput = {
    blockerId?: StringFieldUpdateOperationsInput | string
    blockedId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityCreateInput = {
    id?: string
    type: $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutActivitiesInput
    card?: CardCreateNestedOneWithoutActivitiesInput
    user: UserCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    projectId: string
    cardId?: string | null
    userId: string
    type: $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutActivitiesNestedInput
    card?: CardUpdateOneWithoutActivitiesNestedInput
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyInput = {
    id?: string
    projectId: string
    cardId?: string | null
    userId: string
    type: $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
    card?: CardCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    cardId?: string | null
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    card?: CardUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    cardId?: string | null
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type OrganizationListRelationFilter = {
    every?: OrganizationWhereInput
    some?: OrganizationWhereInput
    none?: OrganizationWhereInput
  }

  export type OrganizationMemberListRelationFilter = {
    every?: OrganizationMemberWhereInput
    some?: OrganizationMemberWhereInput
    none?: OrganizationMemberWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type CardListRelationFilter = {
    every?: CardWhereInput
    some?: CardWhereInput
    none?: CardWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type OrganizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type OrganizationMemberOrganizationIdUserIdCompoundUniqueInput = {
    organizationId: string
    userId: string
  }

  export type OrganizationMemberCountOrderByAggregateInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type OrganizationMemberMaxOrderByAggregateInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type OrganizationMemberMinOrderByAggregateInput = {
    organizationId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type ColumnListRelationFilter = {
    every?: ColumnWhereInput
    some?: ColumnWhereInput
    none?: ColumnWhereInput
  }

  export type LabelListRelationFilter = {
    every?: LabelWhereInput
    some?: LabelWhereInput
    none?: LabelWhereInput
  }

  export type ColumnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ColumnCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    wipLimit?: SortOrder
    isDone?: SortOrder
  }

  export type ColumnAvgOrderByAggregateInput = {
    position?: SortOrder
    wipLimit?: SortOrder
  }

  export type ColumnMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    wipLimit?: SortOrder
    isDone?: SortOrder
  }

  export type ColumnMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    wipLimit?: SortOrder
    isDone?: SortOrder
  }

  export type ColumnSumOrderByAggregateInput = {
    position?: SortOrder
    wipLimit?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
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

  export type ColumnScalarRelationFilter = {
    is?: ColumnWhereInput
    isNot?: ColumnWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CardLabelListRelationFilter = {
    every?: CardLabelWhereInput
    some?: CardLabelWhereInput
    none?: CardLabelWhereInput
  }

  export type CardDependencyListRelationFilter = {
    every?: CardDependencyWhereInput
    some?: CardDependencyWhereInput
    none?: CardDependencyWhereInput
  }

  export type CardLabelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardDependencyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    columnId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    assigneeId?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActivityAt?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    columnId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    assigneeId?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActivityAt?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    columnId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    assigneeId?: SortOrder
    priority?: SortOrder
    dueDate?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActivityAt?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
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

  export type CardScalarRelationFilter = {
    is?: CardWhereInput
    isNot?: CardWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    authorId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    authorId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    authorId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type LabelCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type LabelMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type LabelMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type LabelScalarRelationFilter = {
    is?: LabelWhereInput
    isNot?: LabelWhereInput
  }

  export type CardLabelCardIdLabelIdCompoundUniqueInput = {
    cardId: string
    labelId: string
  }

  export type CardLabelCountOrderByAggregateInput = {
    cardId?: SortOrder
    labelId?: SortOrder
  }

  export type CardLabelMaxOrderByAggregateInput = {
    cardId?: SortOrder
    labelId?: SortOrder
  }

  export type CardLabelMinOrderByAggregateInput = {
    cardId?: SortOrder
    labelId?: SortOrder
  }

  export type CardDependencyBlockerIdBlockedIdCompoundUniqueInput = {
    blockerId: string
    blockedId: string
  }

  export type CardDependencyCountOrderByAggregateInput = {
    blockerId?: SortOrder
    blockedId?: SortOrder
  }

  export type CardDependencyMaxOrderByAggregateInput = {
    blockerId?: SortOrder
    blockedId?: SortOrder
  }

  export type CardDependencyMinOrderByAggregateInput = {
    blockerId?: SortOrder
    blockedId?: SortOrder
  }

  export type EnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CardNullableScalarRelationFilter = {
    is?: CardWhereInput | null
    isNot?: CardWhereInput | null
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type OrganizationCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type OrganizationMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type CardCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CardCreateWithoutCreatorInput, CardUncheckedCreateWithoutCreatorInput> | CardCreateWithoutCreatorInput[] | CardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CardCreateOrConnectWithoutCreatorInput | CardCreateOrConnectWithoutCreatorInput[]
    createMany?: CardCreateManyCreatorInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<CardCreateWithoutAssigneeInput, CardUncheckedCreateWithoutAssigneeInput> | CardCreateWithoutAssigneeInput[] | CardUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: CardCreateOrConnectWithoutAssigneeInput | CardCreateOrConnectWithoutAssigneeInput[]
    createMany?: CardCreateManyAssigneeInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type OrganizationUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type OrganizationMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CardCreateWithoutCreatorInput, CardUncheckedCreateWithoutCreatorInput> | CardCreateWithoutCreatorInput[] | CardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CardCreateOrConnectWithoutCreatorInput | CardCreateOrConnectWithoutCreatorInput[]
    createMany?: CardCreateManyCreatorInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<CardCreateWithoutAssigneeInput, CardUncheckedCreateWithoutAssigneeInput> | CardCreateWithoutAssigneeInput[] | CardUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: CardCreateOrConnectWithoutAssigneeInput | CardCreateOrConnectWithoutAssigneeInput[]
    createMany?: CardCreateManyAssigneeInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrganizationUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutOwnerInput | OrganizationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutOwnerInput | OrganizationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutOwnerInput | OrganizationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type OrganizationMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutUserInput | OrganizationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutUserInput | OrganizationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutUserInput | OrganizationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CardUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CardCreateWithoutCreatorInput, CardUncheckedCreateWithoutCreatorInput> | CardCreateWithoutCreatorInput[] | CardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CardCreateOrConnectWithoutCreatorInput | CardCreateOrConnectWithoutCreatorInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutCreatorInput | CardUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CardCreateManyCreatorInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutCreatorInput | CardUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CardUpdateManyWithWhereWithoutCreatorInput | CardUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<CardCreateWithoutAssigneeInput, CardUncheckedCreateWithoutAssigneeInput> | CardCreateWithoutAssigneeInput[] | CardUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: CardCreateOrConnectWithoutAssigneeInput | CardCreateOrConnectWithoutAssigneeInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutAssigneeInput | CardUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: CardCreateManyAssigneeInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutAssigneeInput | CardUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: CardUpdateManyWithWhereWithoutAssigneeInput | CardUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput | ActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUserInput | ActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUserInput | ActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type OrganizationUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput> | OrganizationCreateWithoutOwnerInput[] | OrganizationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutOwnerInput | OrganizationCreateOrConnectWithoutOwnerInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutOwnerInput | OrganizationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OrganizationCreateManyOwnerInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutOwnerInput | OrganizationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutOwnerInput | OrganizationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput> | OrganizationMemberCreateWithoutUserInput[] | OrganizationMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutUserInput | OrganizationMemberCreateOrConnectWithoutUserInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutUserInput | OrganizationMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrganizationMemberCreateManyUserInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutUserInput | OrganizationMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutUserInput | OrganizationMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CardCreateWithoutCreatorInput, CardUncheckedCreateWithoutCreatorInput> | CardCreateWithoutCreatorInput[] | CardUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CardCreateOrConnectWithoutCreatorInput | CardCreateOrConnectWithoutCreatorInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutCreatorInput | CardUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CardCreateManyCreatorInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutCreatorInput | CardUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CardUpdateManyWithWhereWithoutCreatorInput | CardUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<CardCreateWithoutAssigneeInput, CardUncheckedCreateWithoutAssigneeInput> | CardCreateWithoutAssigneeInput[] | CardUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: CardCreateOrConnectWithoutAssigneeInput | CardCreateOrConnectWithoutAssigneeInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutAssigneeInput | CardUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: CardCreateManyAssigneeInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutAssigneeInput | CardUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: CardUpdateManyWithWhereWithoutAssigneeInput | CardUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput> | ActivityCreateWithoutUserInput[] | ActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutUserInput | ActivityCreateOrConnectWithoutUserInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutUserInput | ActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityCreateManyUserInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutUserInput | ActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutUserInput | ActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedOrganizationsInput = {
    create?: XOR<UserCreateWithoutOwnedOrganizationsInput, UserUncheckedCreateWithoutOwnedOrganizationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedOrganizationsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationMemberCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput> | ProjectCreateWithoutOrganizationInput[] | ProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrganizationInput | ProjectCreateOrConnectWithoutOrganizationInput[]
    createMany?: ProjectCreateManyOrganizationInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput> | ProjectCreateWithoutOrganizationInput[] | ProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrganizationInput | ProjectCreateOrConnectWithoutOrganizationInput[]
    createMany?: ProjectCreateManyOrganizationInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutOwnedOrganizationsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedOrganizationsInput, UserUncheckedCreateWithoutOwnedOrganizationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedOrganizationsInput
    upsert?: UserUpsertWithoutOwnedOrganizationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedOrganizationsInput, UserUpdateWithoutOwnedOrganizationsInput>, UserUncheckedUpdateWithoutOwnedOrganizationsInput>
  }

  export type OrganizationMemberUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput> | ProjectCreateWithoutOrganizationInput[] | ProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrganizationInput | ProjectCreateOrConnectWithoutOrganizationInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOrganizationInput | ProjectUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ProjectCreateManyOrganizationInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOrganizationInput | ProjectUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOrganizationInput | ProjectUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput> | ProjectCreateWithoutOrganizationInput[] | ProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrganizationInput | ProjectCreateOrConnectWithoutOrganizationInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOrganizationInput | ProjectUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ProjectCreateManyOrganizationInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOrganizationInput | ProjectUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOrganizationInput | ProjectUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutMembersInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrganizationMembershipsInput = {
    create?: XOR<UserCreateWithoutOrganizationMembershipsInput, UserUncheckedCreateWithoutOrganizationMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type OrganizationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    upsert?: OrganizationUpsertWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMembersInput, OrganizationUpdateWithoutMembersInput>, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutOrganizationMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationMembershipsInput, UserUncheckedCreateWithoutOrganizationMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationMembershipsInput
    upsert?: UserUpsertWithoutOrganizationMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganizationMembershipsInput, UserUpdateWithoutOrganizationMembershipsInput>, UserUncheckedUpdateWithoutOrganizationMembershipsInput>
  }

  export type OrganizationCreateNestedOneWithoutProjectsInput = {
    create?: XOR<OrganizationCreateWithoutProjectsInput, OrganizationUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutProjectsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOwnedProjectsInput = {
    create?: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ColumnCreateNestedManyWithoutProjectInput = {
    create?: XOR<ColumnCreateWithoutProjectInput, ColumnUncheckedCreateWithoutProjectInput> | ColumnCreateWithoutProjectInput[] | ColumnUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ColumnCreateOrConnectWithoutProjectInput | ColumnCreateOrConnectWithoutProjectInput[]
    createMany?: ColumnCreateManyProjectInputEnvelope
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
  }

  export type LabelCreateNestedManyWithoutProjectInput = {
    create?: XOR<LabelCreateWithoutProjectInput, LabelUncheckedCreateWithoutProjectInput> | LabelCreateWithoutProjectInput[] | LabelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LabelCreateOrConnectWithoutProjectInput | LabelCreateOrConnectWithoutProjectInput[]
    createMany?: LabelCreateManyProjectInputEnvelope
    connect?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutProjectInput = {
    create?: XOR<ActivityCreateWithoutProjectInput, ActivityUncheckedCreateWithoutProjectInput> | ActivityCreateWithoutProjectInput[] | ActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutProjectInput | ActivityCreateOrConnectWithoutProjectInput[]
    createMany?: ActivityCreateManyProjectInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type ColumnUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ColumnCreateWithoutProjectInput, ColumnUncheckedCreateWithoutProjectInput> | ColumnCreateWithoutProjectInput[] | ColumnUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ColumnCreateOrConnectWithoutProjectInput | ColumnCreateOrConnectWithoutProjectInput[]
    createMany?: ColumnCreateManyProjectInputEnvelope
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
  }

  export type LabelUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<LabelCreateWithoutProjectInput, LabelUncheckedCreateWithoutProjectInput> | LabelCreateWithoutProjectInput[] | LabelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LabelCreateOrConnectWithoutProjectInput | LabelCreateOrConnectWithoutProjectInput[]
    createMany?: LabelCreateManyProjectInputEnvelope
    connect?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ActivityCreateWithoutProjectInput, ActivityUncheckedCreateWithoutProjectInput> | ActivityCreateWithoutProjectInput[] | ActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutProjectInput | ActivityCreateOrConnectWithoutProjectInput[]
    createMany?: ActivityCreateManyProjectInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<OrganizationCreateWithoutProjectsInput, OrganizationUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutProjectsInput
    upsert?: OrganizationUpsertWithoutProjectsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutProjectsInput, OrganizationUpdateWithoutProjectsInput>, OrganizationUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateOneRequiredWithoutOwnedProjectsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedProjectsInput
    upsert?: UserUpsertWithoutOwnedProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedProjectsInput, UserUpdateWithoutOwnedProjectsInput>, UserUncheckedUpdateWithoutOwnedProjectsInput>
  }

  export type ColumnUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ColumnCreateWithoutProjectInput, ColumnUncheckedCreateWithoutProjectInput> | ColumnCreateWithoutProjectInput[] | ColumnUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ColumnCreateOrConnectWithoutProjectInput | ColumnCreateOrConnectWithoutProjectInput[]
    upsert?: ColumnUpsertWithWhereUniqueWithoutProjectInput | ColumnUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ColumnCreateManyProjectInputEnvelope
    set?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    disconnect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    delete?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    update?: ColumnUpdateWithWhereUniqueWithoutProjectInput | ColumnUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ColumnUpdateManyWithWhereWithoutProjectInput | ColumnUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ColumnScalarWhereInput | ColumnScalarWhereInput[]
  }

  export type LabelUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LabelCreateWithoutProjectInput, LabelUncheckedCreateWithoutProjectInput> | LabelCreateWithoutProjectInput[] | LabelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LabelCreateOrConnectWithoutProjectInput | LabelCreateOrConnectWithoutProjectInput[]
    upsert?: LabelUpsertWithWhereUniqueWithoutProjectInput | LabelUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LabelCreateManyProjectInputEnvelope
    set?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    disconnect?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    delete?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    connect?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    update?: LabelUpdateWithWhereUniqueWithoutProjectInput | LabelUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LabelUpdateManyWithWhereWithoutProjectInput | LabelUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LabelScalarWhereInput | LabelScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ActivityCreateWithoutProjectInput, ActivityUncheckedCreateWithoutProjectInput> | ActivityCreateWithoutProjectInput[] | ActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutProjectInput | ActivityCreateOrConnectWithoutProjectInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutProjectInput | ActivityUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ActivityCreateManyProjectInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutProjectInput | ActivityUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutProjectInput | ActivityUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type ColumnUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ColumnCreateWithoutProjectInput, ColumnUncheckedCreateWithoutProjectInput> | ColumnCreateWithoutProjectInput[] | ColumnUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ColumnCreateOrConnectWithoutProjectInput | ColumnCreateOrConnectWithoutProjectInput[]
    upsert?: ColumnUpsertWithWhereUniqueWithoutProjectInput | ColumnUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ColumnCreateManyProjectInputEnvelope
    set?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    disconnect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    delete?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    update?: ColumnUpdateWithWhereUniqueWithoutProjectInput | ColumnUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ColumnUpdateManyWithWhereWithoutProjectInput | ColumnUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ColumnScalarWhereInput | ColumnScalarWhereInput[]
  }

  export type LabelUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LabelCreateWithoutProjectInput, LabelUncheckedCreateWithoutProjectInput> | LabelCreateWithoutProjectInput[] | LabelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LabelCreateOrConnectWithoutProjectInput | LabelCreateOrConnectWithoutProjectInput[]
    upsert?: LabelUpsertWithWhereUniqueWithoutProjectInput | LabelUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LabelCreateManyProjectInputEnvelope
    set?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    disconnect?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    delete?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    connect?: LabelWhereUniqueInput | LabelWhereUniqueInput[]
    update?: LabelUpdateWithWhereUniqueWithoutProjectInput | LabelUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LabelUpdateManyWithWhereWithoutProjectInput | LabelUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LabelScalarWhereInput | LabelScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ActivityCreateWithoutProjectInput, ActivityUncheckedCreateWithoutProjectInput> | ActivityCreateWithoutProjectInput[] | ActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutProjectInput | ActivityCreateOrConnectWithoutProjectInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutProjectInput | ActivityUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ActivityCreateManyProjectInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutProjectInput | ActivityUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutProjectInput | ActivityUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutColumnsInput = {
    create?: XOR<ProjectCreateWithoutColumnsInput, ProjectUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutColumnsInput
    connect?: ProjectWhereUniqueInput
  }

  export type CardCreateNestedManyWithoutColumnInput = {
    create?: XOR<CardCreateWithoutColumnInput, CardUncheckedCreateWithoutColumnInput> | CardCreateWithoutColumnInput[] | CardUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CardCreateOrConnectWithoutColumnInput | CardCreateOrConnectWithoutColumnInput[]
    createMany?: CardCreateManyColumnInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutColumnInput = {
    create?: XOR<CardCreateWithoutColumnInput, CardUncheckedCreateWithoutColumnInput> | CardCreateWithoutColumnInput[] | CardUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CardCreateOrConnectWithoutColumnInput | CardCreateOrConnectWithoutColumnInput[]
    createMany?: CardCreateManyColumnInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectUpdateOneRequiredWithoutColumnsNestedInput = {
    create?: XOR<ProjectCreateWithoutColumnsInput, ProjectUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutColumnsInput
    upsert?: ProjectUpsertWithoutColumnsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutColumnsInput, ProjectUpdateWithoutColumnsInput>, ProjectUncheckedUpdateWithoutColumnsInput>
  }

  export type CardUpdateManyWithoutColumnNestedInput = {
    create?: XOR<CardCreateWithoutColumnInput, CardUncheckedCreateWithoutColumnInput> | CardCreateWithoutColumnInput[] | CardUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CardCreateOrConnectWithoutColumnInput | CardCreateOrConnectWithoutColumnInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutColumnInput | CardUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: CardCreateManyColumnInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutColumnInput | CardUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: CardUpdateManyWithWhereWithoutColumnInput | CardUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutColumnNestedInput = {
    create?: XOR<CardCreateWithoutColumnInput, CardUncheckedCreateWithoutColumnInput> | CardCreateWithoutColumnInput[] | CardUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CardCreateOrConnectWithoutColumnInput | CardCreateOrConnectWithoutColumnInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutColumnInput | CardUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: CardCreateManyColumnInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutColumnInput | CardUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: CardUpdateManyWithWhereWithoutColumnInput | CardUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type ColumnCreateNestedOneWithoutCardsInput = {
    create?: XOR<ColumnCreateWithoutCardsInput, ColumnUncheckedCreateWithoutCardsInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutCardsInput
    connect?: ColumnWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedCardsInput = {
    create?: XOR<UserCreateWithoutCreatedCardsInput, UserUncheckedCreateWithoutCreatedCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCardsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedCardsInput = {
    create?: XOR<UserCreateWithoutAssignedCardsInput, UserUncheckedCreateWithoutAssignedCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedCardsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutCardInput = {
    create?: XOR<CommentCreateWithoutCardInput, CommentUncheckedCreateWithoutCardInput> | CommentCreateWithoutCardInput[] | CommentUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCardInput | CommentCreateOrConnectWithoutCardInput[]
    createMany?: CommentCreateManyCardInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CardLabelCreateNestedManyWithoutCardInput = {
    create?: XOR<CardLabelCreateWithoutCardInput, CardLabelUncheckedCreateWithoutCardInput> | CardLabelCreateWithoutCardInput[] | CardLabelUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardLabelCreateOrConnectWithoutCardInput | CardLabelCreateOrConnectWithoutCardInput[]
    createMany?: CardLabelCreateManyCardInputEnvelope
    connect?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
  }

  export type CardDependencyCreateNestedManyWithoutBlockerInput = {
    create?: XOR<CardDependencyCreateWithoutBlockerInput, CardDependencyUncheckedCreateWithoutBlockerInput> | CardDependencyCreateWithoutBlockerInput[] | CardDependencyUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: CardDependencyCreateOrConnectWithoutBlockerInput | CardDependencyCreateOrConnectWithoutBlockerInput[]
    createMany?: CardDependencyCreateManyBlockerInputEnvelope
    connect?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
  }

  export type CardDependencyCreateNestedManyWithoutBlockedInput = {
    create?: XOR<CardDependencyCreateWithoutBlockedInput, CardDependencyUncheckedCreateWithoutBlockedInput> | CardDependencyCreateWithoutBlockedInput[] | CardDependencyUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: CardDependencyCreateOrConnectWithoutBlockedInput | CardDependencyCreateOrConnectWithoutBlockedInput[]
    createMany?: CardDependencyCreateManyBlockedInputEnvelope
    connect?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutCardInput = {
    create?: XOR<ActivityCreateWithoutCardInput, ActivityUncheckedCreateWithoutCardInput> | ActivityCreateWithoutCardInput[] | ActivityUncheckedCreateWithoutCardInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutCardInput | ActivityCreateOrConnectWithoutCardInput[]
    createMany?: ActivityCreateManyCardInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutCardInput = {
    create?: XOR<NotificationCreateWithoutCardInput, NotificationUncheckedCreateWithoutCardInput> | NotificationCreateWithoutCardInput[] | NotificationUncheckedCreateWithoutCardInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCardInput | NotificationCreateOrConnectWithoutCardInput[]
    createMany?: NotificationCreateManyCardInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<CommentCreateWithoutCardInput, CommentUncheckedCreateWithoutCardInput> | CommentCreateWithoutCardInput[] | CommentUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCardInput | CommentCreateOrConnectWithoutCardInput[]
    createMany?: CommentCreateManyCardInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CardLabelUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<CardLabelCreateWithoutCardInput, CardLabelUncheckedCreateWithoutCardInput> | CardLabelCreateWithoutCardInput[] | CardLabelUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardLabelCreateOrConnectWithoutCardInput | CardLabelCreateOrConnectWithoutCardInput[]
    createMany?: CardLabelCreateManyCardInputEnvelope
    connect?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
  }

  export type CardDependencyUncheckedCreateNestedManyWithoutBlockerInput = {
    create?: XOR<CardDependencyCreateWithoutBlockerInput, CardDependencyUncheckedCreateWithoutBlockerInput> | CardDependencyCreateWithoutBlockerInput[] | CardDependencyUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: CardDependencyCreateOrConnectWithoutBlockerInput | CardDependencyCreateOrConnectWithoutBlockerInput[]
    createMany?: CardDependencyCreateManyBlockerInputEnvelope
    connect?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
  }

  export type CardDependencyUncheckedCreateNestedManyWithoutBlockedInput = {
    create?: XOR<CardDependencyCreateWithoutBlockedInput, CardDependencyUncheckedCreateWithoutBlockedInput> | CardDependencyCreateWithoutBlockedInput[] | CardDependencyUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: CardDependencyCreateOrConnectWithoutBlockedInput | CardDependencyCreateOrConnectWithoutBlockedInput[]
    createMany?: CardDependencyCreateManyBlockedInputEnvelope
    connect?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<ActivityCreateWithoutCardInput, ActivityUncheckedCreateWithoutCardInput> | ActivityCreateWithoutCardInput[] | ActivityUncheckedCreateWithoutCardInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutCardInput | ActivityCreateOrConnectWithoutCardInput[]
    createMany?: ActivityCreateManyCardInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<NotificationCreateWithoutCardInput, NotificationUncheckedCreateWithoutCardInput> | NotificationCreateWithoutCardInput[] | NotificationUncheckedCreateWithoutCardInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCardInput | NotificationCreateOrConnectWithoutCardInput[]
    createMany?: NotificationCreateManyCardInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ColumnUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<ColumnCreateWithoutCardsInput, ColumnUncheckedCreateWithoutCardsInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutCardsInput
    upsert?: ColumnUpsertWithoutCardsInput
    connect?: ColumnWhereUniqueInput
    update?: XOR<XOR<ColumnUpdateToOneWithWhereWithoutCardsInput, ColumnUpdateWithoutCardsInput>, ColumnUncheckedUpdateWithoutCardsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedCardsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedCardsInput, UserUncheckedCreateWithoutCreatedCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCardsInput
    upsert?: UserUpsertWithoutCreatedCardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedCardsInput, UserUpdateWithoutCreatedCardsInput>, UserUncheckedUpdateWithoutCreatedCardsInput>
  }

  export type UserUpdateOneWithoutAssignedCardsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedCardsInput, UserUncheckedCreateWithoutAssignedCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedCardsInput
    upsert?: UserUpsertWithoutAssignedCardsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedCardsInput, UserUpdateWithoutAssignedCardsInput>, UserUncheckedUpdateWithoutAssignedCardsInput>
  }

  export type CommentUpdateManyWithoutCardNestedInput = {
    create?: XOR<CommentCreateWithoutCardInput, CommentUncheckedCreateWithoutCardInput> | CommentCreateWithoutCardInput[] | CommentUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCardInput | CommentCreateOrConnectWithoutCardInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutCardInput | CommentUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CommentCreateManyCardInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutCardInput | CommentUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutCardInput | CommentUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CardLabelUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardLabelCreateWithoutCardInput, CardLabelUncheckedCreateWithoutCardInput> | CardLabelCreateWithoutCardInput[] | CardLabelUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardLabelCreateOrConnectWithoutCardInput | CardLabelCreateOrConnectWithoutCardInput[]
    upsert?: CardLabelUpsertWithWhereUniqueWithoutCardInput | CardLabelUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardLabelCreateManyCardInputEnvelope
    set?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    disconnect?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    delete?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    connect?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    update?: CardLabelUpdateWithWhereUniqueWithoutCardInput | CardLabelUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardLabelUpdateManyWithWhereWithoutCardInput | CardLabelUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardLabelScalarWhereInput | CardLabelScalarWhereInput[]
  }

  export type CardDependencyUpdateManyWithoutBlockerNestedInput = {
    create?: XOR<CardDependencyCreateWithoutBlockerInput, CardDependencyUncheckedCreateWithoutBlockerInput> | CardDependencyCreateWithoutBlockerInput[] | CardDependencyUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: CardDependencyCreateOrConnectWithoutBlockerInput | CardDependencyCreateOrConnectWithoutBlockerInput[]
    upsert?: CardDependencyUpsertWithWhereUniqueWithoutBlockerInput | CardDependencyUpsertWithWhereUniqueWithoutBlockerInput[]
    createMany?: CardDependencyCreateManyBlockerInputEnvelope
    set?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    disconnect?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    delete?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    connect?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    update?: CardDependencyUpdateWithWhereUniqueWithoutBlockerInput | CardDependencyUpdateWithWhereUniqueWithoutBlockerInput[]
    updateMany?: CardDependencyUpdateManyWithWhereWithoutBlockerInput | CardDependencyUpdateManyWithWhereWithoutBlockerInput[]
    deleteMany?: CardDependencyScalarWhereInput | CardDependencyScalarWhereInput[]
  }

  export type CardDependencyUpdateManyWithoutBlockedNestedInput = {
    create?: XOR<CardDependencyCreateWithoutBlockedInput, CardDependencyUncheckedCreateWithoutBlockedInput> | CardDependencyCreateWithoutBlockedInput[] | CardDependencyUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: CardDependencyCreateOrConnectWithoutBlockedInput | CardDependencyCreateOrConnectWithoutBlockedInput[]
    upsert?: CardDependencyUpsertWithWhereUniqueWithoutBlockedInput | CardDependencyUpsertWithWhereUniqueWithoutBlockedInput[]
    createMany?: CardDependencyCreateManyBlockedInputEnvelope
    set?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    disconnect?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    delete?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    connect?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    update?: CardDependencyUpdateWithWhereUniqueWithoutBlockedInput | CardDependencyUpdateWithWhereUniqueWithoutBlockedInput[]
    updateMany?: CardDependencyUpdateManyWithWhereWithoutBlockedInput | CardDependencyUpdateManyWithWhereWithoutBlockedInput[]
    deleteMany?: CardDependencyScalarWhereInput | CardDependencyScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutCardNestedInput = {
    create?: XOR<ActivityCreateWithoutCardInput, ActivityUncheckedCreateWithoutCardInput> | ActivityCreateWithoutCardInput[] | ActivityUncheckedCreateWithoutCardInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutCardInput | ActivityCreateOrConnectWithoutCardInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutCardInput | ActivityUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: ActivityCreateManyCardInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutCardInput | ActivityUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutCardInput | ActivityUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutCardNestedInput = {
    create?: XOR<NotificationCreateWithoutCardInput, NotificationUncheckedCreateWithoutCardInput> | NotificationCreateWithoutCardInput[] | NotificationUncheckedCreateWithoutCardInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCardInput | NotificationCreateOrConnectWithoutCardInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutCardInput | NotificationUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: NotificationCreateManyCardInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutCardInput | NotificationUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutCardInput | NotificationUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<CommentCreateWithoutCardInput, CommentUncheckedCreateWithoutCardInput> | CommentCreateWithoutCardInput[] | CommentUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCardInput | CommentCreateOrConnectWithoutCardInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutCardInput | CommentUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CommentCreateManyCardInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutCardInput | CommentUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutCardInput | CommentUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CardLabelUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<CardLabelCreateWithoutCardInput, CardLabelUncheckedCreateWithoutCardInput> | CardLabelCreateWithoutCardInput[] | CardLabelUncheckedCreateWithoutCardInput[]
    connectOrCreate?: CardLabelCreateOrConnectWithoutCardInput | CardLabelCreateOrConnectWithoutCardInput[]
    upsert?: CardLabelUpsertWithWhereUniqueWithoutCardInput | CardLabelUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: CardLabelCreateManyCardInputEnvelope
    set?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    disconnect?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    delete?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    connect?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    update?: CardLabelUpdateWithWhereUniqueWithoutCardInput | CardLabelUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: CardLabelUpdateManyWithWhereWithoutCardInput | CardLabelUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: CardLabelScalarWhereInput | CardLabelScalarWhereInput[]
  }

  export type CardDependencyUncheckedUpdateManyWithoutBlockerNestedInput = {
    create?: XOR<CardDependencyCreateWithoutBlockerInput, CardDependencyUncheckedCreateWithoutBlockerInput> | CardDependencyCreateWithoutBlockerInput[] | CardDependencyUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: CardDependencyCreateOrConnectWithoutBlockerInput | CardDependencyCreateOrConnectWithoutBlockerInput[]
    upsert?: CardDependencyUpsertWithWhereUniqueWithoutBlockerInput | CardDependencyUpsertWithWhereUniqueWithoutBlockerInput[]
    createMany?: CardDependencyCreateManyBlockerInputEnvelope
    set?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    disconnect?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    delete?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    connect?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    update?: CardDependencyUpdateWithWhereUniqueWithoutBlockerInput | CardDependencyUpdateWithWhereUniqueWithoutBlockerInput[]
    updateMany?: CardDependencyUpdateManyWithWhereWithoutBlockerInput | CardDependencyUpdateManyWithWhereWithoutBlockerInput[]
    deleteMany?: CardDependencyScalarWhereInput | CardDependencyScalarWhereInput[]
  }

  export type CardDependencyUncheckedUpdateManyWithoutBlockedNestedInput = {
    create?: XOR<CardDependencyCreateWithoutBlockedInput, CardDependencyUncheckedCreateWithoutBlockedInput> | CardDependencyCreateWithoutBlockedInput[] | CardDependencyUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: CardDependencyCreateOrConnectWithoutBlockedInput | CardDependencyCreateOrConnectWithoutBlockedInput[]
    upsert?: CardDependencyUpsertWithWhereUniqueWithoutBlockedInput | CardDependencyUpsertWithWhereUniqueWithoutBlockedInput[]
    createMany?: CardDependencyCreateManyBlockedInputEnvelope
    set?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    disconnect?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    delete?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    connect?: CardDependencyWhereUniqueInput | CardDependencyWhereUniqueInput[]
    update?: CardDependencyUpdateWithWhereUniqueWithoutBlockedInput | CardDependencyUpdateWithWhereUniqueWithoutBlockedInput[]
    updateMany?: CardDependencyUpdateManyWithWhereWithoutBlockedInput | CardDependencyUpdateManyWithWhereWithoutBlockedInput[]
    deleteMany?: CardDependencyScalarWhereInput | CardDependencyScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<ActivityCreateWithoutCardInput, ActivityUncheckedCreateWithoutCardInput> | ActivityCreateWithoutCardInput[] | ActivityUncheckedCreateWithoutCardInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutCardInput | ActivityCreateOrConnectWithoutCardInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutCardInput | ActivityUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: ActivityCreateManyCardInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutCardInput | ActivityUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutCardInput | ActivityUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<NotificationCreateWithoutCardInput, NotificationUncheckedCreateWithoutCardInput> | NotificationCreateWithoutCardInput[] | NotificationUncheckedCreateWithoutCardInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutCardInput | NotificationCreateOrConnectWithoutCardInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutCardInput | NotificationUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: NotificationCreateManyCardInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutCardInput | NotificationUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutCardInput | NotificationUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CardCreateNestedOneWithoutCommentsInput = {
    create?: XOR<CardCreateWithoutCommentsInput, CardUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: CardCreateOrConnectWithoutCommentsInput
    connect?: CardWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<CardCreateWithoutCommentsInput, CardUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: CardCreateOrConnectWithoutCommentsInput
    upsert?: CardUpsertWithoutCommentsInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutCommentsInput, CardUpdateWithoutCommentsInput>, CardUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type ProjectCreateNestedOneWithoutLabelsInput = {
    create?: XOR<ProjectCreateWithoutLabelsInput, ProjectUncheckedCreateWithoutLabelsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLabelsInput
    connect?: ProjectWhereUniqueInput
  }

  export type CardLabelCreateNestedManyWithoutLabelInput = {
    create?: XOR<CardLabelCreateWithoutLabelInput, CardLabelUncheckedCreateWithoutLabelInput> | CardLabelCreateWithoutLabelInput[] | CardLabelUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: CardLabelCreateOrConnectWithoutLabelInput | CardLabelCreateOrConnectWithoutLabelInput[]
    createMany?: CardLabelCreateManyLabelInputEnvelope
    connect?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
  }

  export type CardLabelUncheckedCreateNestedManyWithoutLabelInput = {
    create?: XOR<CardLabelCreateWithoutLabelInput, CardLabelUncheckedCreateWithoutLabelInput> | CardLabelCreateWithoutLabelInput[] | CardLabelUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: CardLabelCreateOrConnectWithoutLabelInput | CardLabelCreateOrConnectWithoutLabelInput[]
    createMany?: CardLabelCreateManyLabelInputEnvelope
    connect?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutLabelsNestedInput = {
    create?: XOR<ProjectCreateWithoutLabelsInput, ProjectUncheckedCreateWithoutLabelsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLabelsInput
    upsert?: ProjectUpsertWithoutLabelsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLabelsInput, ProjectUpdateWithoutLabelsInput>, ProjectUncheckedUpdateWithoutLabelsInput>
  }

  export type CardLabelUpdateManyWithoutLabelNestedInput = {
    create?: XOR<CardLabelCreateWithoutLabelInput, CardLabelUncheckedCreateWithoutLabelInput> | CardLabelCreateWithoutLabelInput[] | CardLabelUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: CardLabelCreateOrConnectWithoutLabelInput | CardLabelCreateOrConnectWithoutLabelInput[]
    upsert?: CardLabelUpsertWithWhereUniqueWithoutLabelInput | CardLabelUpsertWithWhereUniqueWithoutLabelInput[]
    createMany?: CardLabelCreateManyLabelInputEnvelope
    set?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    disconnect?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    delete?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    connect?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    update?: CardLabelUpdateWithWhereUniqueWithoutLabelInput | CardLabelUpdateWithWhereUniqueWithoutLabelInput[]
    updateMany?: CardLabelUpdateManyWithWhereWithoutLabelInput | CardLabelUpdateManyWithWhereWithoutLabelInput[]
    deleteMany?: CardLabelScalarWhereInput | CardLabelScalarWhereInput[]
  }

  export type CardLabelUncheckedUpdateManyWithoutLabelNestedInput = {
    create?: XOR<CardLabelCreateWithoutLabelInput, CardLabelUncheckedCreateWithoutLabelInput> | CardLabelCreateWithoutLabelInput[] | CardLabelUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: CardLabelCreateOrConnectWithoutLabelInput | CardLabelCreateOrConnectWithoutLabelInput[]
    upsert?: CardLabelUpsertWithWhereUniqueWithoutLabelInput | CardLabelUpsertWithWhereUniqueWithoutLabelInput[]
    createMany?: CardLabelCreateManyLabelInputEnvelope
    set?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    disconnect?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    delete?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    connect?: CardLabelWhereUniqueInput | CardLabelWhereUniqueInput[]
    update?: CardLabelUpdateWithWhereUniqueWithoutLabelInput | CardLabelUpdateWithWhereUniqueWithoutLabelInput[]
    updateMany?: CardLabelUpdateManyWithWhereWithoutLabelInput | CardLabelUpdateManyWithWhereWithoutLabelInput[]
    deleteMany?: CardLabelScalarWhereInput | CardLabelScalarWhereInput[]
  }

  export type CardCreateNestedOneWithoutLabelsInput = {
    create?: XOR<CardCreateWithoutLabelsInput, CardUncheckedCreateWithoutLabelsInput>
    connectOrCreate?: CardCreateOrConnectWithoutLabelsInput
    connect?: CardWhereUniqueInput
  }

  export type LabelCreateNestedOneWithoutCardsInput = {
    create?: XOR<LabelCreateWithoutCardsInput, LabelUncheckedCreateWithoutCardsInput>
    connectOrCreate?: LabelCreateOrConnectWithoutCardsInput
    connect?: LabelWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutLabelsNestedInput = {
    create?: XOR<CardCreateWithoutLabelsInput, CardUncheckedCreateWithoutLabelsInput>
    connectOrCreate?: CardCreateOrConnectWithoutLabelsInput
    upsert?: CardUpsertWithoutLabelsInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutLabelsInput, CardUpdateWithoutLabelsInput>, CardUncheckedUpdateWithoutLabelsInput>
  }

  export type LabelUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<LabelCreateWithoutCardsInput, LabelUncheckedCreateWithoutCardsInput>
    connectOrCreate?: LabelCreateOrConnectWithoutCardsInput
    upsert?: LabelUpsertWithoutCardsInput
    connect?: LabelWhereUniqueInput
    update?: XOR<XOR<LabelUpdateToOneWithWhereWithoutCardsInput, LabelUpdateWithoutCardsInput>, LabelUncheckedUpdateWithoutCardsInput>
  }

  export type CardCreateNestedOneWithoutBlockingInput = {
    create?: XOR<CardCreateWithoutBlockingInput, CardUncheckedCreateWithoutBlockingInput>
    connectOrCreate?: CardCreateOrConnectWithoutBlockingInput
    connect?: CardWhereUniqueInput
  }

  export type CardCreateNestedOneWithoutBlockedByInput = {
    create?: XOR<CardCreateWithoutBlockedByInput, CardUncheckedCreateWithoutBlockedByInput>
    connectOrCreate?: CardCreateOrConnectWithoutBlockedByInput
    connect?: CardWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutBlockingNestedInput = {
    create?: XOR<CardCreateWithoutBlockingInput, CardUncheckedCreateWithoutBlockingInput>
    connectOrCreate?: CardCreateOrConnectWithoutBlockingInput
    upsert?: CardUpsertWithoutBlockingInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutBlockingInput, CardUpdateWithoutBlockingInput>, CardUncheckedUpdateWithoutBlockingInput>
  }

  export type CardUpdateOneRequiredWithoutBlockedByNestedInput = {
    create?: XOR<CardCreateWithoutBlockedByInput, CardUncheckedCreateWithoutBlockedByInput>
    connectOrCreate?: CardCreateOrConnectWithoutBlockedByInput
    upsert?: CardUpsertWithoutBlockedByInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutBlockedByInput, CardUpdateWithoutBlockedByInput>, CardUncheckedUpdateWithoutBlockedByInput>
  }

  export type ProjectCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<ProjectCreateWithoutActivitiesInput, ProjectUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutActivitiesInput
    connect?: ProjectWhereUniqueInput
  }

  export type CardCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<CardCreateWithoutActivitiesInput, CardUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: CardCreateOrConnectWithoutActivitiesInput
    connect?: CardWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType
  }

  export type ProjectUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<ProjectCreateWithoutActivitiesInput, ProjectUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutActivitiesInput
    upsert?: ProjectUpsertWithoutActivitiesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutActivitiesInput, ProjectUpdateWithoutActivitiesInput>, ProjectUncheckedUpdateWithoutActivitiesInput>
  }

  export type CardUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<CardCreateWithoutActivitiesInput, CardUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: CardCreateOrConnectWithoutActivitiesInput
    upsert?: CardUpsertWithoutActivitiesInput
    disconnect?: CardWhereInput | boolean
    delete?: CardWhereInput | boolean
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutActivitiesInput, CardUpdateWithoutActivitiesInput>, CardUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    upsert?: UserUpsertWithoutActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivitiesInput, UserUpdateWithoutActivitiesInput>, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type CardCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<CardCreateWithoutNotificationsInput, CardUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: CardCreateOrConnectWithoutNotificationsInput
    connect?: CardWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type CardUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<CardCreateWithoutNotificationsInput, CardUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: CardCreateOrConnectWithoutNotificationsInput
    upsert?: CardUpsertWithoutNotificationsInput
    disconnect?: CardWhereInput | boolean
    delete?: CardWhereInput | boolean
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutNotificationsInput, CardUpdateWithoutNotificationsInput>, CardUncheckedUpdateWithoutNotificationsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
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

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
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

  export type NestedEnumActivityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeFilter<$PrismaModel> | $Enums.ActivityType
  }

  export type NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type OrganizationCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
    projects?: ProjectCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput>
  }

  export type OrganizationCreateManyOwnerInputEnvelope = {
    data: OrganizationCreateManyOwnerInput | OrganizationCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationMemberCreateWithoutUserInput = {
    role?: $Enums.Role
    joinedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutMembersInput
  }

  export type OrganizationMemberUncheckedCreateWithoutUserInput = {
    organizationId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type OrganizationMemberCreateOrConnectWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    create: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMemberCreateManyUserInputEnvelope = {
    data: OrganizationMemberCreateManyUserInput | OrganizationMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutProjectsInput
    columns?: ColumnCreateNestedManyWithoutProjectInput
    labels?: LabelCreateNestedManyWithoutProjectInput
    activities?: ActivityCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    createdAt?: Date | string
    columns?: ColumnUncheckedCreateNestedManyWithoutProjectInput
    labels?: LabelUncheckedCreateNestedManyWithoutProjectInput
    activities?: ActivityUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: ProjectCreateManyOwnerInput | ProjectCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CardCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    column: ColumnCreateNestedOneWithoutCardsInput
    assignee?: UserCreateNestedOneWithoutAssignedCardsInput
    comments?: CommentCreateNestedManyWithoutCardInput
    labels?: CardLabelCreateNestedManyWithoutCardInput
    blocking?: CardDependencyCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyCreateNestedManyWithoutBlockedInput
    activities?: ActivityCreateNestedManyWithoutCardInput
    notifications?: NotificationCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutCreatorInput = {
    id?: string
    columnId: string
    title: string
    description?: string | null
    assigneeId?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutCardInput
    labels?: CardLabelUncheckedCreateNestedManyWithoutCardInput
    blocking?: CardDependencyUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyUncheckedCreateNestedManyWithoutBlockedInput
    activities?: ActivityUncheckedCreateNestedManyWithoutCardInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutCreatorInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutCreatorInput, CardUncheckedCreateWithoutCreatorInput>
  }

  export type CardCreateManyCreatorInputEnvelope = {
    data: CardCreateManyCreatorInput | CardCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type CardCreateWithoutAssigneeInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    column: ColumnCreateNestedOneWithoutCardsInput
    creator: UserCreateNestedOneWithoutCreatedCardsInput
    comments?: CommentCreateNestedManyWithoutCardInput
    labels?: CardLabelCreateNestedManyWithoutCardInput
    blocking?: CardDependencyCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyCreateNestedManyWithoutBlockedInput
    activities?: ActivityCreateNestedManyWithoutCardInput
    notifications?: NotificationCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutAssigneeInput = {
    id?: string
    columnId: string
    title: string
    description?: string | null
    creatorId: string
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutCardInput
    labels?: CardLabelUncheckedCreateNestedManyWithoutCardInput
    blocking?: CardDependencyUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyUncheckedCreateNestedManyWithoutBlockedInput
    activities?: ActivityUncheckedCreateNestedManyWithoutCardInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutAssigneeInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutAssigneeInput, CardUncheckedCreateWithoutAssigneeInput>
  }

  export type CardCreateManyAssigneeInputEnvelope = {
    data: CardCreateManyAssigneeInput | CardCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    text: string
    createdAt?: Date | string
    card: CardCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    cardId: string
    text: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutUserInput = {
    id?: string
    type: $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutActivitiesInput
    card?: CardCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    cardId?: string | null
    type: $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutUserInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityCreateManyUserInputEnvelope = {
    data: ActivityCreateManyUserInput | ActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
    card?: CardCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    cardId?: string | null
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithWhereUniqueWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    update: XOR<OrganizationUpdateWithoutOwnerInput, OrganizationUncheckedUpdateWithoutOwnerInput>
    create: XOR<OrganizationCreateWithoutOwnerInput, OrganizationUncheckedCreateWithoutOwnerInput>
  }

  export type OrganizationUpdateWithWhereUniqueWithoutOwnerInput = {
    where: OrganizationWhereUniqueInput
    data: XOR<OrganizationUpdateWithoutOwnerInput, OrganizationUncheckedUpdateWithoutOwnerInput>
  }

  export type OrganizationUpdateManyWithWhereWithoutOwnerInput = {
    where: OrganizationScalarWhereInput
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyWithoutOwnerInput>
  }

  export type OrganizationScalarWhereInput = {
    AND?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    OR?: OrganizationScalarWhereInput[]
    NOT?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    description?: StringNullableFilter<"Organization"> | string | null
    ownerId?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
  }

  export type OrganizationMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    update: XOR<OrganizationMemberUpdateWithoutUserInput, OrganizationMemberUncheckedUpdateWithoutUserInput>
    create: XOR<OrganizationMemberCreateWithoutUserInput, OrganizationMemberUncheckedCreateWithoutUserInput>
  }

  export type OrganizationMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: OrganizationMemberWhereUniqueInput
    data: XOR<OrganizationMemberUpdateWithoutUserInput, OrganizationMemberUncheckedUpdateWithoutUserInput>
  }

  export type OrganizationMemberUpdateManyWithWhereWithoutUserInput = {
    where: OrganizationMemberScalarWhereInput
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type OrganizationMemberScalarWhereInput = {
    AND?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
    OR?: OrganizationMemberScalarWhereInput[]
    NOT?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
    organizationId?: StringFilter<"OrganizationMember"> | string
    userId?: StringFilter<"OrganizationMember"> | string
    role?: EnumRoleFilter<"OrganizationMember"> | $Enums.Role
    joinedAt?: DateTimeFilter<"OrganizationMember"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    organizationId?: StringFilter<"Project"> | string
    ownerId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type CardUpsertWithWhereUniqueWithoutCreatorInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutCreatorInput, CardUncheckedUpdateWithoutCreatorInput>
    create: XOR<CardCreateWithoutCreatorInput, CardUncheckedCreateWithoutCreatorInput>
  }

  export type CardUpdateWithWhereUniqueWithoutCreatorInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutCreatorInput, CardUncheckedUpdateWithoutCreatorInput>
  }

  export type CardUpdateManyWithWhereWithoutCreatorInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutCreatorInput>
  }

  export type CardScalarWhereInput = {
    AND?: CardScalarWhereInput | CardScalarWhereInput[]
    OR?: CardScalarWhereInput[]
    NOT?: CardScalarWhereInput | CardScalarWhereInput[]
    id?: StringFilter<"Card"> | string
    columnId?: StringFilter<"Card"> | string
    title?: StringFilter<"Card"> | string
    description?: StringNullableFilter<"Card"> | string | null
    creatorId?: StringFilter<"Card"> | string
    assigneeId?: StringNullableFilter<"Card"> | string | null
    priority?: EnumPriorityFilter<"Card"> | $Enums.Priority
    dueDate?: DateTimeNullableFilter<"Card"> | Date | string | null
    position?: FloatFilter<"Card"> | number
    createdAt?: DateTimeFilter<"Card"> | Date | string
    updatedAt?: DateTimeFilter<"Card"> | Date | string
    lastActivityAt?: DateTimeFilter<"Card"> | Date | string
  }

  export type CardUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutAssigneeInput, CardUncheckedUpdateWithoutAssigneeInput>
    create: XOR<CardCreateWithoutAssigneeInput, CardUncheckedCreateWithoutAssigneeInput>
  }

  export type CardUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutAssigneeInput, CardUncheckedUpdateWithoutAssigneeInput>
  }

  export type CardUpdateManyWithWhereWithoutAssigneeInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    cardId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type ActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityCreateWithoutUserInput, ActivityUncheckedCreateWithoutUserInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutUserInput, ActivityUncheckedUpdateWithoutUserInput>
  }

  export type ActivityUpdateManyWithWhereWithoutUserInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    projectId?: StringFilter<"Activity"> | string
    cardId?: StringNullableFilter<"Activity"> | string | null
    userId?: StringFilter<"Activity"> | string
    type?: EnumActivityTypeFilter<"Activity"> | $Enums.ActivityType
    data?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    cardId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutOwnedOrganizationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    organizationMemberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    createdCards?: CardCreateNestedManyWithoutCreatorInput
    assignedCards?: CardCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedOrganizationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    organizationMemberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    createdCards?: CardUncheckedCreateNestedManyWithoutCreatorInput
    assignedCards?: CardUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedOrganizationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedOrganizationsInput, UserUncheckedCreateWithoutOwnedOrganizationsInput>
  }

  export type OrganizationMemberCreateWithoutOrganizationInput = {
    role?: $Enums.Role
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutOrganizationMembershipsInput
  }

  export type OrganizationMemberUncheckedCreateWithoutOrganizationInput = {
    userId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type OrganizationMemberCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    create: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberCreateManyOrganizationInputEnvelope = {
    data: OrganizationMemberCreateManyOrganizationInput | OrganizationMemberCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    columns?: ColumnCreateNestedManyWithoutProjectInput
    labels?: LabelCreateNestedManyWithoutProjectInput
    activities?: ActivityCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    columns?: ColumnUncheckedCreateNestedManyWithoutProjectInput
    labels?: LabelUncheckedCreateNestedManyWithoutProjectInput
    activities?: ActivityUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOrganizationInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput>
  }

  export type ProjectCreateManyOrganizationInputEnvelope = {
    data: ProjectCreateManyOrganizationInput | ProjectCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedOrganizationsInput = {
    update: XOR<UserUpdateWithoutOwnedOrganizationsInput, UserUncheckedUpdateWithoutOwnedOrganizationsInput>
    create: XOR<UserCreateWithoutOwnedOrganizationsInput, UserUncheckedCreateWithoutOwnedOrganizationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedOrganizationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedOrganizationsInput, UserUncheckedUpdateWithoutOwnedOrganizationsInput>
  }

  export type UserUpdateWithoutOwnedOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationMemberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    createdCards?: CardUpdateManyWithoutCreatorNestedInput
    assignedCards?: CardUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationMemberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    createdCards?: CardUncheckedUpdateManyWithoutCreatorNestedInput
    assignedCards?: CardUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    update: XOR<OrganizationMemberUpdateWithoutOrganizationInput, OrganizationMemberUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    data: XOR<OrganizationMemberUpdateWithoutOrganizationInput, OrganizationMemberUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationMemberScalarWhereInput
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOrganizationInput, ProjectUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOrganizationInput, ProjectUncheckedUpdateWithoutOrganizationInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOrganizationInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrganizationCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedOrganizationsInput
    projects?: ProjectCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMembersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutOrganizationMembershipsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    createdCards?: CardCreateNestedManyWithoutCreatorInput
    assignedCards?: CardCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrganizationMembershipsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    createdCards?: CardUncheckedCreateNestedManyWithoutCreatorInput
    assignedCards?: CardUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrganizationMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationMembershipsInput, UserUncheckedCreateWithoutOrganizationMembershipsInput>
  }

  export type OrganizationUpsertWithoutMembersInput = {
    update: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMembersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedOrganizationsNestedInput
    projects?: ProjectUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutOrganizationMembershipsInput = {
    update: XOR<UserUpdateWithoutOrganizationMembershipsInput, UserUncheckedUpdateWithoutOrganizationMembershipsInput>
    create: XOR<UserCreateWithoutOrganizationMembershipsInput, UserUncheckedCreateWithoutOrganizationMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganizationMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganizationMembershipsInput, UserUncheckedUpdateWithoutOrganizationMembershipsInput>
  }

  export type UserUpdateWithoutOrganizationMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    createdCards?: CardUpdateManyWithoutCreatorNestedInput
    assignedCards?: CardUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    createdCards?: CardUncheckedUpdateManyWithoutCreatorNestedInput
    assignedCards?: CardUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationCreateWithoutProjectsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedOrganizationsInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutProjectsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutProjectsInput, OrganizationUncheckedCreateWithoutProjectsInput>
  }

  export type UserCreateWithoutOwnedProjectsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    organizationMemberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    createdCards?: CardCreateNestedManyWithoutCreatorInput
    assignedCards?: CardCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedProjectsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    organizationMemberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    createdCards?: CardUncheckedCreateNestedManyWithoutCreatorInput
    assignedCards?: CardUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
  }

  export type ColumnCreateWithoutProjectInput = {
    id?: string
    name: string
    position: number
    wipLimit?: number | null
    isDone?: boolean
    cards?: CardCreateNestedManyWithoutColumnInput
  }

  export type ColumnUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    position: number
    wipLimit?: number | null
    isDone?: boolean
    cards?: CardUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnCreateOrConnectWithoutProjectInput = {
    where: ColumnWhereUniqueInput
    create: XOR<ColumnCreateWithoutProjectInput, ColumnUncheckedCreateWithoutProjectInput>
  }

  export type ColumnCreateManyProjectInputEnvelope = {
    data: ColumnCreateManyProjectInput | ColumnCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type LabelCreateWithoutProjectInput = {
    id?: string
    name: string
    color: string
    cards?: CardLabelCreateNestedManyWithoutLabelInput
  }

  export type LabelUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    color: string
    cards?: CardLabelUncheckedCreateNestedManyWithoutLabelInput
  }

  export type LabelCreateOrConnectWithoutProjectInput = {
    where: LabelWhereUniqueInput
    create: XOR<LabelCreateWithoutProjectInput, LabelUncheckedCreateWithoutProjectInput>
  }

  export type LabelCreateManyProjectInputEnvelope = {
    data: LabelCreateManyProjectInput | LabelCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutProjectInput = {
    id?: string
    type: $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    card?: CardCreateNestedOneWithoutActivitiesInput
    user: UserCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutProjectInput = {
    id?: string
    cardId?: string | null
    userId: string
    type: $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutProjectInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutProjectInput, ActivityUncheckedCreateWithoutProjectInput>
  }

  export type ActivityCreateManyProjectInputEnvelope = {
    data: ActivityCreateManyProjectInput | ActivityCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutProjectsInput = {
    update: XOR<OrganizationUpdateWithoutProjectsInput, OrganizationUncheckedUpdateWithoutProjectsInput>
    create: XOR<OrganizationCreateWithoutProjectsInput, OrganizationUncheckedCreateWithoutProjectsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutProjectsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutProjectsInput, OrganizationUncheckedUpdateWithoutProjectsInput>
  }

  export type OrganizationUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedOrganizationsNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithoutOwnedProjectsInput = {
    update: XOR<UserUpdateWithoutOwnedProjectsInput, UserUncheckedUpdateWithoutOwnedProjectsInput>
    create: XOR<UserCreateWithoutOwnedProjectsInput, UserUncheckedCreateWithoutOwnedProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedProjectsInput, UserUncheckedUpdateWithoutOwnedProjectsInput>
  }

  export type UserUpdateWithoutOwnedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    organizationMemberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    createdCards?: CardUpdateManyWithoutCreatorNestedInput
    assignedCards?: CardUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    organizationMemberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    createdCards?: CardUncheckedUpdateManyWithoutCreatorNestedInput
    assignedCards?: CardUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ColumnUpsertWithWhereUniqueWithoutProjectInput = {
    where: ColumnWhereUniqueInput
    update: XOR<ColumnUpdateWithoutProjectInput, ColumnUncheckedUpdateWithoutProjectInput>
    create: XOR<ColumnCreateWithoutProjectInput, ColumnUncheckedCreateWithoutProjectInput>
  }

  export type ColumnUpdateWithWhereUniqueWithoutProjectInput = {
    where: ColumnWhereUniqueInput
    data: XOR<ColumnUpdateWithoutProjectInput, ColumnUncheckedUpdateWithoutProjectInput>
  }

  export type ColumnUpdateManyWithWhereWithoutProjectInput = {
    where: ColumnScalarWhereInput
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyWithoutProjectInput>
  }

  export type ColumnScalarWhereInput = {
    AND?: ColumnScalarWhereInput | ColumnScalarWhereInput[]
    OR?: ColumnScalarWhereInput[]
    NOT?: ColumnScalarWhereInput | ColumnScalarWhereInput[]
    id?: StringFilter<"Column"> | string
    projectId?: StringFilter<"Column"> | string
    name?: StringFilter<"Column"> | string
    position?: FloatFilter<"Column"> | number
    wipLimit?: IntNullableFilter<"Column"> | number | null
    isDone?: BoolFilter<"Column"> | boolean
  }

  export type LabelUpsertWithWhereUniqueWithoutProjectInput = {
    where: LabelWhereUniqueInput
    update: XOR<LabelUpdateWithoutProjectInput, LabelUncheckedUpdateWithoutProjectInput>
    create: XOR<LabelCreateWithoutProjectInput, LabelUncheckedCreateWithoutProjectInput>
  }

  export type LabelUpdateWithWhereUniqueWithoutProjectInput = {
    where: LabelWhereUniqueInput
    data: XOR<LabelUpdateWithoutProjectInput, LabelUncheckedUpdateWithoutProjectInput>
  }

  export type LabelUpdateManyWithWhereWithoutProjectInput = {
    where: LabelScalarWhereInput
    data: XOR<LabelUpdateManyMutationInput, LabelUncheckedUpdateManyWithoutProjectInput>
  }

  export type LabelScalarWhereInput = {
    AND?: LabelScalarWhereInput | LabelScalarWhereInput[]
    OR?: LabelScalarWhereInput[]
    NOT?: LabelScalarWhereInput | LabelScalarWhereInput[]
    id?: StringFilter<"Label"> | string
    projectId?: StringFilter<"Label"> | string
    name?: StringFilter<"Label"> | string
    color?: StringFilter<"Label"> | string
  }

  export type ActivityUpsertWithWhereUniqueWithoutProjectInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutProjectInput, ActivityUncheckedUpdateWithoutProjectInput>
    create: XOR<ActivityCreateWithoutProjectInput, ActivityUncheckedCreateWithoutProjectInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutProjectInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutProjectInput, ActivityUncheckedUpdateWithoutProjectInput>
  }

  export type ActivityUpdateManyWithWhereWithoutProjectInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutColumnsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutProjectsInput
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    labels?: LabelCreateNestedManyWithoutProjectInput
    activities?: ActivityCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutColumnsInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    ownerId: string
    createdAt?: Date | string
    labels?: LabelUncheckedCreateNestedManyWithoutProjectInput
    activities?: ActivityUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutColumnsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutColumnsInput, ProjectUncheckedCreateWithoutColumnsInput>
  }

  export type CardCreateWithoutColumnInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCardsInput
    assignee?: UserCreateNestedOneWithoutAssignedCardsInput
    comments?: CommentCreateNestedManyWithoutCardInput
    labels?: CardLabelCreateNestedManyWithoutCardInput
    blocking?: CardDependencyCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyCreateNestedManyWithoutBlockedInput
    activities?: ActivityCreateNestedManyWithoutCardInput
    notifications?: NotificationCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutColumnInput = {
    id?: string
    title: string
    description?: string | null
    creatorId: string
    assigneeId?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutCardInput
    labels?: CardLabelUncheckedCreateNestedManyWithoutCardInput
    blocking?: CardDependencyUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyUncheckedCreateNestedManyWithoutBlockedInput
    activities?: ActivityUncheckedCreateNestedManyWithoutCardInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutColumnInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutColumnInput, CardUncheckedCreateWithoutColumnInput>
  }

  export type CardCreateManyColumnInputEnvelope = {
    data: CardCreateManyColumnInput | CardCreateManyColumnInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutColumnsInput = {
    update: XOR<ProjectUpdateWithoutColumnsInput, ProjectUncheckedUpdateWithoutColumnsInput>
    create: XOR<ProjectCreateWithoutColumnsInput, ProjectUncheckedCreateWithoutColumnsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutColumnsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutColumnsInput, ProjectUncheckedUpdateWithoutColumnsInput>
  }

  export type ProjectUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    labels?: LabelUpdateManyWithoutProjectNestedInput
    activities?: ActivityUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labels?: LabelUncheckedUpdateManyWithoutProjectNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type CardUpsertWithWhereUniqueWithoutColumnInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutColumnInput, CardUncheckedUpdateWithoutColumnInput>
    create: XOR<CardCreateWithoutColumnInput, CardUncheckedCreateWithoutColumnInput>
  }

  export type CardUpdateWithWhereUniqueWithoutColumnInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutColumnInput, CardUncheckedUpdateWithoutColumnInput>
  }

  export type CardUpdateManyWithWhereWithoutColumnInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutColumnInput>
  }

  export type ColumnCreateWithoutCardsInput = {
    id?: string
    name: string
    position: number
    wipLimit?: number | null
    isDone?: boolean
    project: ProjectCreateNestedOneWithoutColumnsInput
  }

  export type ColumnUncheckedCreateWithoutCardsInput = {
    id?: string
    projectId: string
    name: string
    position: number
    wipLimit?: number | null
    isDone?: boolean
  }

  export type ColumnCreateOrConnectWithoutCardsInput = {
    where: ColumnWhereUniqueInput
    create: XOR<ColumnCreateWithoutCardsInput, ColumnUncheckedCreateWithoutCardsInput>
  }

  export type UserCreateWithoutCreatedCardsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    organizationMemberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    assignedCards?: CardCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedCardsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    organizationMemberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    assignedCards?: CardUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedCardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedCardsInput, UserUncheckedCreateWithoutCreatedCardsInput>
  }

  export type UserCreateWithoutAssignedCardsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    organizationMemberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    createdCards?: CardCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedCardsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    organizationMemberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    createdCards?: CardUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedCardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedCardsInput, UserUncheckedCreateWithoutAssignedCardsInput>
  }

  export type CommentCreateWithoutCardInput = {
    id?: string
    text: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutCardInput = {
    id?: string
    authorId: string
    text: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutCardInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCardInput, CommentUncheckedCreateWithoutCardInput>
  }

  export type CommentCreateManyCardInputEnvelope = {
    data: CommentCreateManyCardInput | CommentCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type CardLabelCreateWithoutCardInput = {
    label: LabelCreateNestedOneWithoutCardsInput
  }

  export type CardLabelUncheckedCreateWithoutCardInput = {
    labelId: string
  }

  export type CardLabelCreateOrConnectWithoutCardInput = {
    where: CardLabelWhereUniqueInput
    create: XOR<CardLabelCreateWithoutCardInput, CardLabelUncheckedCreateWithoutCardInput>
  }

  export type CardLabelCreateManyCardInputEnvelope = {
    data: CardLabelCreateManyCardInput | CardLabelCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type CardDependencyCreateWithoutBlockerInput = {
    blocked: CardCreateNestedOneWithoutBlockedByInput
  }

  export type CardDependencyUncheckedCreateWithoutBlockerInput = {
    blockedId: string
  }

  export type CardDependencyCreateOrConnectWithoutBlockerInput = {
    where: CardDependencyWhereUniqueInput
    create: XOR<CardDependencyCreateWithoutBlockerInput, CardDependencyUncheckedCreateWithoutBlockerInput>
  }

  export type CardDependencyCreateManyBlockerInputEnvelope = {
    data: CardDependencyCreateManyBlockerInput | CardDependencyCreateManyBlockerInput[]
    skipDuplicates?: boolean
  }

  export type CardDependencyCreateWithoutBlockedInput = {
    blocker: CardCreateNestedOneWithoutBlockingInput
  }

  export type CardDependencyUncheckedCreateWithoutBlockedInput = {
    blockerId: string
  }

  export type CardDependencyCreateOrConnectWithoutBlockedInput = {
    where: CardDependencyWhereUniqueInput
    create: XOR<CardDependencyCreateWithoutBlockedInput, CardDependencyUncheckedCreateWithoutBlockedInput>
  }

  export type CardDependencyCreateManyBlockedInputEnvelope = {
    data: CardDependencyCreateManyBlockedInput | CardDependencyCreateManyBlockedInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutCardInput = {
    id?: string
    type: $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutActivitiesInput
    user: UserCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutCardInput = {
    id?: string
    projectId: string
    userId: string
    type: $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutCardInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutCardInput, ActivityUncheckedCreateWithoutCardInput>
  }

  export type ActivityCreateManyCardInputEnvelope = {
    data: ActivityCreateManyCardInput | ActivityCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutCardInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutCardInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutCardInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutCardInput, NotificationUncheckedCreateWithoutCardInput>
  }

  export type NotificationCreateManyCardInputEnvelope = {
    data: NotificationCreateManyCardInput | NotificationCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type ColumnUpsertWithoutCardsInput = {
    update: XOR<ColumnUpdateWithoutCardsInput, ColumnUncheckedUpdateWithoutCardsInput>
    create: XOR<ColumnCreateWithoutCardsInput, ColumnUncheckedCreateWithoutCardsInput>
    where?: ColumnWhereInput
  }

  export type ColumnUpdateToOneWithWhereWithoutCardsInput = {
    where?: ColumnWhereInput
    data: XOR<ColumnUpdateWithoutCardsInput, ColumnUncheckedUpdateWithoutCardsInput>
  }

  export type ColumnUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    wipLimit?: NullableIntFieldUpdateOperationsInput | number | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    project?: ProjectUpdateOneRequiredWithoutColumnsNestedInput
  }

  export type ColumnUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    wipLimit?: NullableIntFieldUpdateOperationsInput | number | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutCreatedCardsInput = {
    update: XOR<UserUpdateWithoutCreatedCardsInput, UserUncheckedUpdateWithoutCreatedCardsInput>
    create: XOR<UserCreateWithoutCreatedCardsInput, UserUncheckedCreateWithoutCreatedCardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedCardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedCardsInput, UserUncheckedUpdateWithoutCreatedCardsInput>
  }

  export type UserUpdateWithoutCreatedCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    organizationMemberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    assignedCards?: CardUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    organizationMemberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    assignedCards?: CardUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutAssignedCardsInput = {
    update: XOR<UserUpdateWithoutAssignedCardsInput, UserUncheckedUpdateWithoutAssignedCardsInput>
    create: XOR<UserCreateWithoutAssignedCardsInput, UserUncheckedCreateWithoutAssignedCardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedCardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedCardsInput, UserUncheckedUpdateWithoutAssignedCardsInput>
  }

  export type UserUpdateWithoutAssignedCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    organizationMemberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    createdCards?: CardUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    organizationMemberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    createdCards?: CardUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutCardInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutCardInput, CommentUncheckedUpdateWithoutCardInput>
    create: XOR<CommentCreateWithoutCardInput, CommentUncheckedCreateWithoutCardInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutCardInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutCardInput, CommentUncheckedUpdateWithoutCardInput>
  }

  export type CommentUpdateManyWithWhereWithoutCardInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCardInput>
  }

  export type CardLabelUpsertWithWhereUniqueWithoutCardInput = {
    where: CardLabelWhereUniqueInput
    update: XOR<CardLabelUpdateWithoutCardInput, CardLabelUncheckedUpdateWithoutCardInput>
    create: XOR<CardLabelCreateWithoutCardInput, CardLabelUncheckedCreateWithoutCardInput>
  }

  export type CardLabelUpdateWithWhereUniqueWithoutCardInput = {
    where: CardLabelWhereUniqueInput
    data: XOR<CardLabelUpdateWithoutCardInput, CardLabelUncheckedUpdateWithoutCardInput>
  }

  export type CardLabelUpdateManyWithWhereWithoutCardInput = {
    where: CardLabelScalarWhereInput
    data: XOR<CardLabelUpdateManyMutationInput, CardLabelUncheckedUpdateManyWithoutCardInput>
  }

  export type CardLabelScalarWhereInput = {
    AND?: CardLabelScalarWhereInput | CardLabelScalarWhereInput[]
    OR?: CardLabelScalarWhereInput[]
    NOT?: CardLabelScalarWhereInput | CardLabelScalarWhereInput[]
    cardId?: StringFilter<"CardLabel"> | string
    labelId?: StringFilter<"CardLabel"> | string
  }

  export type CardDependencyUpsertWithWhereUniqueWithoutBlockerInput = {
    where: CardDependencyWhereUniqueInput
    update: XOR<CardDependencyUpdateWithoutBlockerInput, CardDependencyUncheckedUpdateWithoutBlockerInput>
    create: XOR<CardDependencyCreateWithoutBlockerInput, CardDependencyUncheckedCreateWithoutBlockerInput>
  }

  export type CardDependencyUpdateWithWhereUniqueWithoutBlockerInput = {
    where: CardDependencyWhereUniqueInput
    data: XOR<CardDependencyUpdateWithoutBlockerInput, CardDependencyUncheckedUpdateWithoutBlockerInput>
  }

  export type CardDependencyUpdateManyWithWhereWithoutBlockerInput = {
    where: CardDependencyScalarWhereInput
    data: XOR<CardDependencyUpdateManyMutationInput, CardDependencyUncheckedUpdateManyWithoutBlockerInput>
  }

  export type CardDependencyScalarWhereInput = {
    AND?: CardDependencyScalarWhereInput | CardDependencyScalarWhereInput[]
    OR?: CardDependencyScalarWhereInput[]
    NOT?: CardDependencyScalarWhereInput | CardDependencyScalarWhereInput[]
    blockerId?: StringFilter<"CardDependency"> | string
    blockedId?: StringFilter<"CardDependency"> | string
  }

  export type CardDependencyUpsertWithWhereUniqueWithoutBlockedInput = {
    where: CardDependencyWhereUniqueInput
    update: XOR<CardDependencyUpdateWithoutBlockedInput, CardDependencyUncheckedUpdateWithoutBlockedInput>
    create: XOR<CardDependencyCreateWithoutBlockedInput, CardDependencyUncheckedCreateWithoutBlockedInput>
  }

  export type CardDependencyUpdateWithWhereUniqueWithoutBlockedInput = {
    where: CardDependencyWhereUniqueInput
    data: XOR<CardDependencyUpdateWithoutBlockedInput, CardDependencyUncheckedUpdateWithoutBlockedInput>
  }

  export type CardDependencyUpdateManyWithWhereWithoutBlockedInput = {
    where: CardDependencyScalarWhereInput
    data: XOR<CardDependencyUpdateManyMutationInput, CardDependencyUncheckedUpdateManyWithoutBlockedInput>
  }

  export type ActivityUpsertWithWhereUniqueWithoutCardInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutCardInput, ActivityUncheckedUpdateWithoutCardInput>
    create: XOR<ActivityCreateWithoutCardInput, ActivityUncheckedCreateWithoutCardInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutCardInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutCardInput, ActivityUncheckedUpdateWithoutCardInput>
  }

  export type ActivityUpdateManyWithWhereWithoutCardInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutCardInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutCardInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutCardInput, NotificationUncheckedUpdateWithoutCardInput>
    create: XOR<NotificationCreateWithoutCardInput, NotificationUncheckedCreateWithoutCardInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutCardInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutCardInput, NotificationUncheckedUpdateWithoutCardInput>
  }

  export type NotificationUpdateManyWithWhereWithoutCardInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutCardInput>
  }

  export type CardCreateWithoutCommentsInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    column: ColumnCreateNestedOneWithoutCardsInput
    creator: UserCreateNestedOneWithoutCreatedCardsInput
    assignee?: UserCreateNestedOneWithoutAssignedCardsInput
    labels?: CardLabelCreateNestedManyWithoutCardInput
    blocking?: CardDependencyCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyCreateNestedManyWithoutBlockedInput
    activities?: ActivityCreateNestedManyWithoutCardInput
    notifications?: NotificationCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutCommentsInput = {
    id?: string
    columnId: string
    title: string
    description?: string | null
    creatorId: string
    assigneeId?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    labels?: CardLabelUncheckedCreateNestedManyWithoutCardInput
    blocking?: CardDependencyUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyUncheckedCreateNestedManyWithoutBlockedInput
    activities?: ActivityUncheckedCreateNestedManyWithoutCardInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutCommentsInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutCommentsInput, CardUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    organizationMemberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    createdCards?: CardCreateNestedManyWithoutCreatorInput
    assignedCards?: CardCreateNestedManyWithoutAssigneeInput
    activities?: ActivityCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    organizationMemberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    createdCards?: CardUncheckedCreateNestedManyWithoutCreatorInput
    assignedCards?: CardUncheckedCreateNestedManyWithoutAssigneeInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type CardUpsertWithoutCommentsInput = {
    update: XOR<CardUpdateWithoutCommentsInput, CardUncheckedUpdateWithoutCommentsInput>
    create: XOR<CardCreateWithoutCommentsInput, CardUncheckedCreateWithoutCommentsInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutCommentsInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutCommentsInput, CardUncheckedUpdateWithoutCommentsInput>
  }

  export type CardUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    column?: ColumnUpdateOneRequiredWithoutCardsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedCardsNestedInput
    assignee?: UserUpdateOneWithoutAssignedCardsNestedInput
    labels?: CardLabelUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUpdateManyWithoutCardNestedInput
    notifications?: NotificationUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labels?: CardLabelUncheckedUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUncheckedUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutCardNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCardNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    organizationMemberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    createdCards?: CardUpdateManyWithoutCreatorNestedInput
    assignedCards?: CardUpdateManyWithoutAssigneeNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    organizationMemberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    createdCards?: CardUncheckedUpdateManyWithoutCreatorNestedInput
    assignedCards?: CardUncheckedUpdateManyWithoutAssigneeNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutLabelsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutProjectsInput
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    columns?: ColumnCreateNestedManyWithoutProjectInput
    activities?: ActivityCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLabelsInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    ownerId: string
    createdAt?: Date | string
    columns?: ColumnUncheckedCreateNestedManyWithoutProjectInput
    activities?: ActivityUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLabelsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLabelsInput, ProjectUncheckedCreateWithoutLabelsInput>
  }

  export type CardLabelCreateWithoutLabelInput = {
    card: CardCreateNestedOneWithoutLabelsInput
  }

  export type CardLabelUncheckedCreateWithoutLabelInput = {
    cardId: string
  }

  export type CardLabelCreateOrConnectWithoutLabelInput = {
    where: CardLabelWhereUniqueInput
    create: XOR<CardLabelCreateWithoutLabelInput, CardLabelUncheckedCreateWithoutLabelInput>
  }

  export type CardLabelCreateManyLabelInputEnvelope = {
    data: CardLabelCreateManyLabelInput | CardLabelCreateManyLabelInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutLabelsInput = {
    update: XOR<ProjectUpdateWithoutLabelsInput, ProjectUncheckedUpdateWithoutLabelsInput>
    create: XOR<ProjectCreateWithoutLabelsInput, ProjectUncheckedCreateWithoutLabelsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLabelsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLabelsInput, ProjectUncheckedUpdateWithoutLabelsInput>
  }

  export type ProjectUpdateWithoutLabelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    columns?: ColumnUpdateManyWithoutProjectNestedInput
    activities?: ActivityUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLabelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: ColumnUncheckedUpdateManyWithoutProjectNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type CardLabelUpsertWithWhereUniqueWithoutLabelInput = {
    where: CardLabelWhereUniqueInput
    update: XOR<CardLabelUpdateWithoutLabelInput, CardLabelUncheckedUpdateWithoutLabelInput>
    create: XOR<CardLabelCreateWithoutLabelInput, CardLabelUncheckedCreateWithoutLabelInput>
  }

  export type CardLabelUpdateWithWhereUniqueWithoutLabelInput = {
    where: CardLabelWhereUniqueInput
    data: XOR<CardLabelUpdateWithoutLabelInput, CardLabelUncheckedUpdateWithoutLabelInput>
  }

  export type CardLabelUpdateManyWithWhereWithoutLabelInput = {
    where: CardLabelScalarWhereInput
    data: XOR<CardLabelUpdateManyMutationInput, CardLabelUncheckedUpdateManyWithoutLabelInput>
  }

  export type CardCreateWithoutLabelsInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    column: ColumnCreateNestedOneWithoutCardsInput
    creator: UserCreateNestedOneWithoutCreatedCardsInput
    assignee?: UserCreateNestedOneWithoutAssignedCardsInput
    comments?: CommentCreateNestedManyWithoutCardInput
    blocking?: CardDependencyCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyCreateNestedManyWithoutBlockedInput
    activities?: ActivityCreateNestedManyWithoutCardInput
    notifications?: NotificationCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutLabelsInput = {
    id?: string
    columnId: string
    title: string
    description?: string | null
    creatorId: string
    assigneeId?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutCardInput
    blocking?: CardDependencyUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyUncheckedCreateNestedManyWithoutBlockedInput
    activities?: ActivityUncheckedCreateNestedManyWithoutCardInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutLabelsInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutLabelsInput, CardUncheckedCreateWithoutLabelsInput>
  }

  export type LabelCreateWithoutCardsInput = {
    id?: string
    name: string
    color: string
    project: ProjectCreateNestedOneWithoutLabelsInput
  }

  export type LabelUncheckedCreateWithoutCardsInput = {
    id?: string
    projectId: string
    name: string
    color: string
  }

  export type LabelCreateOrConnectWithoutCardsInput = {
    where: LabelWhereUniqueInput
    create: XOR<LabelCreateWithoutCardsInput, LabelUncheckedCreateWithoutCardsInput>
  }

  export type CardUpsertWithoutLabelsInput = {
    update: XOR<CardUpdateWithoutLabelsInput, CardUncheckedUpdateWithoutLabelsInput>
    create: XOR<CardCreateWithoutLabelsInput, CardUncheckedCreateWithoutLabelsInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutLabelsInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutLabelsInput, CardUncheckedUpdateWithoutLabelsInput>
  }

  export type CardUpdateWithoutLabelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    column?: ColumnUpdateOneRequiredWithoutCardsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedCardsNestedInput
    assignee?: UserUpdateOneWithoutAssignedCardsNestedInput
    comments?: CommentUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUpdateManyWithoutCardNestedInput
    notifications?: NotificationUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutLabelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUncheckedUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutCardNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCardNestedInput
  }

  export type LabelUpsertWithoutCardsInput = {
    update: XOR<LabelUpdateWithoutCardsInput, LabelUncheckedUpdateWithoutCardsInput>
    create: XOR<LabelCreateWithoutCardsInput, LabelUncheckedCreateWithoutCardsInput>
    where?: LabelWhereInput
  }

  export type LabelUpdateToOneWithWhereWithoutCardsInput = {
    where?: LabelWhereInput
    data: XOR<LabelUpdateWithoutCardsInput, LabelUncheckedUpdateWithoutCardsInput>
  }

  export type LabelUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutLabelsNestedInput
  }

  export type LabelUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type CardCreateWithoutBlockingInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    column: ColumnCreateNestedOneWithoutCardsInput
    creator: UserCreateNestedOneWithoutCreatedCardsInput
    assignee?: UserCreateNestedOneWithoutAssignedCardsInput
    comments?: CommentCreateNestedManyWithoutCardInput
    labels?: CardLabelCreateNestedManyWithoutCardInput
    blockedBy?: CardDependencyCreateNestedManyWithoutBlockedInput
    activities?: ActivityCreateNestedManyWithoutCardInput
    notifications?: NotificationCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutBlockingInput = {
    id?: string
    columnId: string
    title: string
    description?: string | null
    creatorId: string
    assigneeId?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutCardInput
    labels?: CardLabelUncheckedCreateNestedManyWithoutCardInput
    blockedBy?: CardDependencyUncheckedCreateNestedManyWithoutBlockedInput
    activities?: ActivityUncheckedCreateNestedManyWithoutCardInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutBlockingInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutBlockingInput, CardUncheckedCreateWithoutBlockingInput>
  }

  export type CardCreateWithoutBlockedByInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    column: ColumnCreateNestedOneWithoutCardsInput
    creator: UserCreateNestedOneWithoutCreatedCardsInput
    assignee?: UserCreateNestedOneWithoutAssignedCardsInput
    comments?: CommentCreateNestedManyWithoutCardInput
    labels?: CardLabelCreateNestedManyWithoutCardInput
    blocking?: CardDependencyCreateNestedManyWithoutBlockerInput
    activities?: ActivityCreateNestedManyWithoutCardInput
    notifications?: NotificationCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutBlockedByInput = {
    id?: string
    columnId: string
    title: string
    description?: string | null
    creatorId: string
    assigneeId?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutCardInput
    labels?: CardLabelUncheckedCreateNestedManyWithoutCardInput
    blocking?: CardDependencyUncheckedCreateNestedManyWithoutBlockerInput
    activities?: ActivityUncheckedCreateNestedManyWithoutCardInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutBlockedByInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutBlockedByInput, CardUncheckedCreateWithoutBlockedByInput>
  }

  export type CardUpsertWithoutBlockingInput = {
    update: XOR<CardUpdateWithoutBlockingInput, CardUncheckedUpdateWithoutBlockingInput>
    create: XOR<CardCreateWithoutBlockingInput, CardUncheckedCreateWithoutBlockingInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutBlockingInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutBlockingInput, CardUncheckedUpdateWithoutBlockingInput>
  }

  export type CardUpdateWithoutBlockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    column?: ColumnUpdateOneRequiredWithoutCardsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedCardsNestedInput
    assignee?: UserUpdateOneWithoutAssignedCardsNestedInput
    comments?: CommentUpdateManyWithoutCardNestedInput
    labels?: CardLabelUpdateManyWithoutCardNestedInput
    blockedBy?: CardDependencyUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUpdateManyWithoutCardNestedInput
    notifications?: NotificationUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutBlockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutCardNestedInput
    labels?: CardLabelUncheckedUpdateManyWithoutCardNestedInput
    blockedBy?: CardDependencyUncheckedUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutCardNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardUpsertWithoutBlockedByInput = {
    update: XOR<CardUpdateWithoutBlockedByInput, CardUncheckedUpdateWithoutBlockedByInput>
    create: XOR<CardCreateWithoutBlockedByInput, CardUncheckedCreateWithoutBlockedByInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutBlockedByInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutBlockedByInput, CardUncheckedUpdateWithoutBlockedByInput>
  }

  export type CardUpdateWithoutBlockedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    column?: ColumnUpdateOneRequiredWithoutCardsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedCardsNestedInput
    assignee?: UserUpdateOneWithoutAssignedCardsNestedInput
    comments?: CommentUpdateManyWithoutCardNestedInput
    labels?: CardLabelUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUpdateManyWithoutBlockerNestedInput
    activities?: ActivityUpdateManyWithoutCardNestedInput
    notifications?: NotificationUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutBlockedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutCardNestedInput
    labels?: CardLabelUncheckedUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUncheckedUpdateManyWithoutBlockerNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutCardNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCardNestedInput
  }

  export type ProjectCreateWithoutActivitiesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutProjectsInput
    owner: UserCreateNestedOneWithoutOwnedProjectsInput
    columns?: ColumnCreateNestedManyWithoutProjectInput
    labels?: LabelCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutActivitiesInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    ownerId: string
    createdAt?: Date | string
    columns?: ColumnUncheckedCreateNestedManyWithoutProjectInput
    labels?: LabelUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutActivitiesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutActivitiesInput, ProjectUncheckedCreateWithoutActivitiesInput>
  }

  export type CardCreateWithoutActivitiesInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    column: ColumnCreateNestedOneWithoutCardsInput
    creator: UserCreateNestedOneWithoutCreatedCardsInput
    assignee?: UserCreateNestedOneWithoutAssignedCardsInput
    comments?: CommentCreateNestedManyWithoutCardInput
    labels?: CardLabelCreateNestedManyWithoutCardInput
    blocking?: CardDependencyCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyCreateNestedManyWithoutBlockedInput
    notifications?: NotificationCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutActivitiesInput = {
    id?: string
    columnId: string
    title: string
    description?: string | null
    creatorId: string
    assigneeId?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutCardInput
    labels?: CardLabelUncheckedCreateNestedManyWithoutCardInput
    blocking?: CardDependencyUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyUncheckedCreateNestedManyWithoutBlockedInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutActivitiesInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutActivitiesInput, CardUncheckedCreateWithoutActivitiesInput>
  }

  export type UserCreateWithoutActivitiesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    organizationMemberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    createdCards?: CardCreateNestedManyWithoutCreatorInput
    assignedCards?: CardCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivitiesInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    organizationMemberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    createdCards?: CardUncheckedCreateNestedManyWithoutCreatorInput
    assignedCards?: CardUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
  }

  export type ProjectUpsertWithoutActivitiesInput = {
    update: XOR<ProjectUpdateWithoutActivitiesInput, ProjectUncheckedUpdateWithoutActivitiesInput>
    create: XOR<ProjectCreateWithoutActivitiesInput, ProjectUncheckedCreateWithoutActivitiesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutActivitiesInput, ProjectUncheckedUpdateWithoutActivitiesInput>
  }

  export type ProjectUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    columns?: ColumnUpdateManyWithoutProjectNestedInput
    labels?: LabelUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: ColumnUncheckedUpdateManyWithoutProjectNestedInput
    labels?: LabelUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type CardUpsertWithoutActivitiesInput = {
    update: XOR<CardUpdateWithoutActivitiesInput, CardUncheckedUpdateWithoutActivitiesInput>
    create: XOR<CardCreateWithoutActivitiesInput, CardUncheckedCreateWithoutActivitiesInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutActivitiesInput, CardUncheckedUpdateWithoutActivitiesInput>
  }

  export type CardUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    column?: ColumnUpdateOneRequiredWithoutCardsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedCardsNestedInput
    assignee?: UserUpdateOneWithoutAssignedCardsNestedInput
    comments?: CommentUpdateManyWithoutCardNestedInput
    labels?: CardLabelUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUpdateManyWithoutBlockedNestedInput
    notifications?: NotificationUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutCardNestedInput
    labels?: CardLabelUncheckedUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUncheckedUpdateManyWithoutBlockedNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCardNestedInput
  }

  export type UserUpsertWithoutActivitiesInput = {
    update: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    organizationMemberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    createdCards?: CardUpdateManyWithoutCreatorNestedInput
    assignedCards?: CardUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    organizationMemberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    createdCards?: CardUncheckedUpdateManyWithoutCreatorNestedInput
    assignedCards?: CardUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationCreateNestedManyWithoutOwnerInput
    organizationMemberships?: OrganizationMemberCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput
    createdCards?: CardCreateNestedManyWithoutCreatorInput
    assignedCards?: CardCreateNestedManyWithoutAssigneeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    activities?: ActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    ownedOrganizations?: OrganizationUncheckedCreateNestedManyWithoutOwnerInput
    organizationMemberships?: OrganizationMemberUncheckedCreateNestedManyWithoutUserInput
    ownedProjects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    createdCards?: CardUncheckedCreateNestedManyWithoutCreatorInput
    assignedCards?: CardUncheckedCreateNestedManyWithoutAssigneeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    activities?: ActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type CardCreateWithoutNotificationsInput = {
    id?: string
    title: string
    description?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    column: ColumnCreateNestedOneWithoutCardsInput
    creator: UserCreateNestedOneWithoutCreatedCardsInput
    assignee?: UserCreateNestedOneWithoutAssignedCardsInput
    comments?: CommentCreateNestedManyWithoutCardInput
    labels?: CardLabelCreateNestedManyWithoutCardInput
    blocking?: CardDependencyCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyCreateNestedManyWithoutBlockedInput
    activities?: ActivityCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutNotificationsInput = {
    id?: string
    columnId: string
    title: string
    description?: string | null
    creatorId: string
    assigneeId?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutCardInput
    labels?: CardLabelUncheckedCreateNestedManyWithoutCardInput
    blocking?: CardDependencyUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: CardDependencyUncheckedCreateNestedManyWithoutBlockedInput
    activities?: ActivityUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutNotificationsInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutNotificationsInput, CardUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUpdateManyWithoutOwnerNestedInput
    organizationMemberships?: OrganizationMemberUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUpdateManyWithoutOwnerNestedInput
    createdCards?: CardUpdateManyWithoutCreatorNestedInput
    assignedCards?: CardUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    activities?: ActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedOrganizations?: OrganizationUncheckedUpdateManyWithoutOwnerNestedInput
    organizationMemberships?: OrganizationMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedProjects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    createdCards?: CardUncheckedUpdateManyWithoutCreatorNestedInput
    assignedCards?: CardUncheckedUpdateManyWithoutAssigneeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CardUpsertWithoutNotificationsInput = {
    update: XOR<CardUpdateWithoutNotificationsInput, CardUncheckedUpdateWithoutNotificationsInput>
    create: XOR<CardCreateWithoutNotificationsInput, CardUncheckedCreateWithoutNotificationsInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutNotificationsInput, CardUncheckedUpdateWithoutNotificationsInput>
  }

  export type CardUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    column?: ColumnUpdateOneRequiredWithoutCardsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedCardsNestedInput
    assignee?: UserUpdateOneWithoutAssignedCardsNestedInput
    comments?: CommentUpdateManyWithoutCardNestedInput
    labels?: CardLabelUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutCardNestedInput
    labels?: CardLabelUncheckedUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUncheckedUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutCardNestedInput
  }

  export type OrganizationCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type OrganizationMemberCreateManyUserInput = {
    organizationId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type ProjectCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    createdAt?: Date | string
  }

  export type CardCreateManyCreatorInput = {
    id?: string
    columnId: string
    title: string
    description?: string | null
    assigneeId?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
  }

  export type CardCreateManyAssigneeInput = {
    id?: string
    columnId: string
    title: string
    description?: string | null
    creatorId: string
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    cardId: string
    text: string
    createdAt?: Date | string
  }

  export type ActivityCreateManyUserInput = {
    id?: string
    projectId: string
    cardId?: string | null
    type: $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    cardId?: string | null
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type OrganizationUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
    projects?: ProjectUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberUpdateWithoutUserInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput
  }

  export type OrganizationMemberUncheckedUpdateWithoutUserInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutUserInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput
    columns?: ColumnUpdateManyWithoutProjectNestedInput
    labels?: LabelUpdateManyWithoutProjectNestedInput
    activities?: ActivityUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: ColumnUncheckedUpdateManyWithoutProjectNestedInput
    labels?: LabelUncheckedUpdateManyWithoutProjectNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    column?: ColumnUpdateOneRequiredWithoutCardsNestedInput
    assignee?: UserUpdateOneWithoutAssignedCardsNestedInput
    comments?: CommentUpdateManyWithoutCardNestedInput
    labels?: CardLabelUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUpdateManyWithoutCardNestedInput
    notifications?: NotificationUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutCardNestedInput
    labels?: CardLabelUncheckedUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUncheckedUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutCardNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    column?: ColumnUpdateOneRequiredWithoutCardsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedCardsNestedInput
    comments?: CommentUpdateManyWithoutCardNestedInput
    labels?: CardLabelUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUpdateManyWithoutCardNestedInput
    notifications?: NotificationUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutCardNestedInput
    labels?: CardLabelUncheckedUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUncheckedUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutCardNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateManyWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    card?: CardUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutActivitiesNestedInput
    card?: CardUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    card?: CardUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberCreateManyOrganizationInput = {
    userId: string
    role?: $Enums.Role
    joinedAt?: Date | string
  }

  export type ProjectCreateManyOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    ownerId: string
    createdAt?: Date | string
  }

  export type OrganizationMemberUpdateWithoutOrganizationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrganizationMembershipsNestedInput
  }

  export type OrganizationMemberUncheckedUpdateWithoutOrganizationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedProjectsNestedInput
    columns?: ColumnUpdateManyWithoutProjectNestedInput
    labels?: LabelUpdateManyWithoutProjectNestedInput
    activities?: ActivityUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: ColumnUncheckedUpdateManyWithoutProjectNestedInput
    labels?: LabelUncheckedUpdateManyWithoutProjectNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnCreateManyProjectInput = {
    id?: string
    name: string
    position: number
    wipLimit?: number | null
    isDone?: boolean
  }

  export type LabelCreateManyProjectInput = {
    id?: string
    name: string
    color: string
  }

  export type ActivityCreateManyProjectInput = {
    id?: string
    cardId?: string | null
    userId: string
    type: $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ColumnUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    wipLimit?: NullableIntFieldUpdateOperationsInput | number | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    cards?: CardUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    wipLimit?: NullableIntFieldUpdateOperationsInput | number | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    cards?: CardUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    wipLimit?: NullableIntFieldUpdateOperationsInput | number | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LabelUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    cards?: CardLabelUpdateManyWithoutLabelNestedInput
  }

  export type LabelUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    cards?: CardLabelUncheckedUpdateManyWithoutLabelNestedInput
  }

  export type LabelUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    card?: CardUpdateOneWithoutActivitiesNestedInput
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardCreateManyColumnInput = {
    id?: string
    title: string
    description?: string | null
    creatorId: string
    assigneeId?: string | null
    priority?: $Enums.Priority
    dueDate?: Date | string | null
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActivityAt?: Date | string
  }

  export type CardUpdateWithoutColumnInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCardsNestedInput
    assignee?: UserUpdateOneWithoutAssignedCardsNestedInput
    comments?: CommentUpdateManyWithoutCardNestedInput
    labels?: CardLabelUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUpdateManyWithoutCardNestedInput
    notifications?: NotificationUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutColumnInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutCardNestedInput
    labels?: CardLabelUncheckedUpdateManyWithoutCardNestedInput
    blocking?: CardDependencyUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: CardDependencyUncheckedUpdateManyWithoutBlockedNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutCardNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateManyWithoutColumnInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    position?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyCardInput = {
    id?: string
    authorId: string
    text: string
    createdAt?: Date | string
  }

  export type CardLabelCreateManyCardInput = {
    labelId: string
  }

  export type CardDependencyCreateManyBlockerInput = {
    blockedId: string
  }

  export type CardDependencyCreateManyBlockedInput = {
    blockerId: string
  }

  export type ActivityCreateManyCardInput = {
    id?: string
    projectId: string
    userId: string
    type: $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NotificationCreateManyCardInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardLabelUpdateWithoutCardInput = {
    label?: LabelUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardLabelUncheckedUpdateWithoutCardInput = {
    labelId?: StringFieldUpdateOperationsInput | string
  }

  export type CardLabelUncheckedUpdateManyWithoutCardInput = {
    labelId?: StringFieldUpdateOperationsInput | string
  }

  export type CardDependencyUpdateWithoutBlockerInput = {
    blocked?: CardUpdateOneRequiredWithoutBlockedByNestedInput
  }

  export type CardDependencyUncheckedUpdateWithoutBlockerInput = {
    blockedId?: StringFieldUpdateOperationsInput | string
  }

  export type CardDependencyUncheckedUpdateManyWithoutBlockerInput = {
    blockedId?: StringFieldUpdateOperationsInput | string
  }

  export type CardDependencyUpdateWithoutBlockedInput = {
    blocker?: CardUpdateOneRequiredWithoutBlockingNestedInput
  }

  export type CardDependencyUncheckedUpdateWithoutBlockedInput = {
    blockerId?: StringFieldUpdateOperationsInput | string
  }

  export type CardDependencyUncheckedUpdateManyWithoutBlockedInput = {
    blockerId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutActivitiesNestedInput
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardLabelCreateManyLabelInput = {
    cardId: string
  }

  export type CardLabelUpdateWithoutLabelInput = {
    card?: CardUpdateOneRequiredWithoutLabelsNestedInput
  }

  export type CardLabelUncheckedUpdateWithoutLabelInput = {
    cardId?: StringFieldUpdateOperationsInput | string
  }

  export type CardLabelUncheckedUpdateManyWithoutLabelInput = {
    cardId?: StringFieldUpdateOperationsInput | string
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