import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Pokemon
   * const pokemon = await prisma.pokemon.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Pokemon
 * const pokemon = await prisma.pokemon.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
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
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.pokemon`: Exposes CRUD operations for the **Pokemon** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Pokemon
  * const pokemon = await prisma.pokemon.findMany()
  * ```
  */
    get pokemon(): Prisma.PokemonDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonSpecies`: Exposes CRUD operations for the **PokemonSpecies** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonSpecies
      * const pokemonSpecies = await prisma.pokemonSpecies.findMany()
      * ```
      */
    get pokemonSpecies(): Prisma.PokemonSpeciesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonForms`: Exposes CRUD operations for the **PokemonForms** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonForms
      * const pokemonForms = await prisma.pokemonForms.findMany()
      * ```
      */
    get pokemonForms(): Prisma.PokemonFormsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.moves`: Exposes CRUD operations for the **Moves** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Moves
      * const moves = await prisma.moves.findMany()
      * ```
      */
    get moves(): Prisma.MovesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.moveTargets`: Exposes CRUD operations for the **MoveTargets** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MoveTargets
      * const moveTargets = await prisma.moveTargets.findMany()
      * ```
      */
    get moveTargets(): Prisma.MoveTargetsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.moveDamageClasses`: Exposes CRUD operations for the **MoveDamageClasses** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MoveDamageClasses
      * const moveDamageClasses = await prisma.moveDamageClasses.findMany()
      * ```
      */
    get moveDamageClasses(): Prisma.MoveDamageClassesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.types`: Exposes CRUD operations for the **Types** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Types
      * const types = await prisma.types.findMany()
      * ```
      */
    get types(): Prisma.TypesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.abilities`: Exposes CRUD operations for the **Abilities** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Abilities
      * const abilities = await prisma.abilities.findMany()
      * ```
      */
    get abilities(): Prisma.AbilitiesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.items`: Exposes CRUD operations for the **Items** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Items
      * const items = await prisma.items.findMany()
      * ```
      */
    get items(): Prisma.ItemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.itemCategories`: Exposes CRUD operations for the **ItemCategories** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ItemCategories
      * const itemCategories = await prisma.itemCategories.findMany()
      * ```
      */
    get itemCategories(): Prisma.ItemCategoriesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.itemPockets`: Exposes CRUD operations for the **ItemPockets** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ItemPockets
      * const itemPockets = await prisma.itemPockets.findMany()
      * ```
      */
    get itemPockets(): Prisma.ItemPocketsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.stats`: Exposes CRUD operations for the **Stats** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Stats
      * const stats = await prisma.stats.findMany()
      * ```
      */
    get stats(): Prisma.StatsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.generations`: Exposes CRUD operations for the **Generations** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Generations
      * const generations = await prisma.generations.findMany()
      * ```
      */
    get generations(): Prisma.GenerationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.versionGroups`: Exposes CRUD operations for the **VersionGroups** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more VersionGroups
      * const versionGroups = await prisma.versionGroups.findMany()
      * ```
      */
    get versionGroups(): Prisma.VersionGroupsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.versions`: Exposes CRUD operations for the **Versions** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Versions
      * const versions = await prisma.versions.findMany()
      * ```
      */
    get versions(): Prisma.VersionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.regions`: Exposes CRUD operations for the **Regions** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Regions
      * const regions = await prisma.regions.findMany()
      * ```
      */
    get regions(): Prisma.RegionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.locations`: Exposes CRUD operations for the **Locations** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Locations
      * const locations = await prisma.locations.findMany()
      * ```
      */
    get locations(): Prisma.LocationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.locationAreas`: Exposes CRUD operations for the **LocationAreas** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LocationAreas
      * const locationAreas = await prisma.locationAreas.findMany()
      * ```
      */
    get locationAreas(): Prisma.LocationAreasDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokedexes`: Exposes CRUD operations for the **Pokedexes** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Pokedexes
      * const pokedexes = await prisma.pokedexes.findMany()
      * ```
      */
    get pokedexes(): Prisma.PokedexesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.evolutionChains`: Exposes CRUD operations for the **EvolutionChains** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EvolutionChains
      * const evolutionChains = await prisma.evolutionChains.findMany()
      * ```
      */
    get evolutionChains(): Prisma.EvolutionChainsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.evolutionTriggers`: Exposes CRUD operations for the **EvolutionTriggers** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EvolutionTriggers
      * const evolutionTriggers = await prisma.evolutionTriggers.findMany()
      * ```
      */
    get evolutionTriggers(): Prisma.EvolutionTriggersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonEvolution`: Exposes CRUD operations for the **PokemonEvolution** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonEvolutions
      * const pokemonEvolutions = await prisma.pokemonEvolution.findMany()
      * ```
      */
    get pokemonEvolution(): Prisma.PokemonEvolutionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.growthRates`: Exposes CRUD operations for the **GrowthRates** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more GrowthRates
      * const growthRates = await prisma.growthRates.findMany()
      * ```
      */
    get growthRates(): Prisma.GrowthRatesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Experiences
      * const experiences = await prisma.experience.findMany()
      * ```
      */
    get experience(): Prisma.ExperienceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.genders`: Exposes CRUD operations for the **Genders** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Genders
      * const genders = await prisma.genders.findMany()
      * ```
      */
    get genders(): Prisma.GendersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.languages`: Exposes CRUD operations for the **Languages** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Languages
      * const languages = await prisma.languages.findMany()
      * ```
      */
    get languages(): Prisma.LanguagesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.eggGroups`: Exposes CRUD operations for the **EggGroups** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EggGroups
      * const eggGroups = await prisma.eggGroups.findMany()
      * ```
      */
    get eggGroups(): Prisma.EggGroupsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.natures`: Exposes CRUD operations for the **Natures** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Natures
      * const natures = await prisma.natures.findMany()
      * ```
      */
    get natures(): Prisma.NaturesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.contestTypes`: Exposes CRUD operations for the **ContestTypes** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ContestTypes
      * const contestTypes = await prisma.contestTypes.findMany()
      * ```
      */
    get contestTypes(): Prisma.ContestTypesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.contestEffects`: Exposes CRUD operations for the **ContestEffects** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ContestEffects
      * const contestEffects = await prisma.contestEffects.findMany()
      * ```
      */
    get contestEffects(): Prisma.ContestEffectsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.superContestEffects`: Exposes CRUD operations for the **SuperContestEffects** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SuperContestEffects
      * const superContestEffects = await prisma.superContestEffects.findMany()
      * ```
      */
    get superContestEffects(): Prisma.SuperContestEffectsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.machines`: Exposes CRUD operations for the **Machines** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Machines
      * const machines = await prisma.machines.findMany()
      * ```
      */
    get machines(): Prisma.MachinesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.encounterMethods`: Exposes CRUD operations for the **EncounterMethods** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EncounterMethods
      * const encounterMethods = await prisma.encounterMethods.findMany()
      * ```
      */
    get encounterMethods(): Prisma.EncounterMethodsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.encounterSlots`: Exposes CRUD operations for the **EncounterSlots** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EncounterSlots
      * const encounterSlots = await prisma.encounterSlots.findMany()
      * ```
      */
    get encounterSlots(): Prisma.EncounterSlotsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.encounters`: Exposes CRUD operations for the **Encounters** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Encounters
      * const encounters = await prisma.encounters.findMany()
      * ```
      */
    get encounters(): Prisma.EncountersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.encounterConditions`: Exposes CRUD operations for the **EncounterConditions** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EncounterConditions
      * const encounterConditions = await prisma.encounterConditions.findMany()
      * ```
      */
    get encounterConditions(): Prisma.EncounterConditionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.encounterConditionValues`: Exposes CRUD operations for the **EncounterConditionValues** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EncounterConditionValues
      * const encounterConditionValues = await prisma.encounterConditionValues.findMany()
      * ```
      */
    get encounterConditionValues(): Prisma.EncounterConditionValuesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.encounterConditionValueMap`: Exposes CRUD operations for the **EncounterConditionValueMap** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EncounterConditionValueMaps
      * const encounterConditionValueMaps = await prisma.encounterConditionValueMap.findMany()
      * ```
      */
    get encounterConditionValueMap(): Prisma.EncounterConditionValueMapDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.moveMetaCategories`: Exposes CRUD operations for the **MoveMetaCategories** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MoveMetaCategories
      * const moveMetaCategories = await prisma.moveMetaCategories.findMany()
      * ```
      */
    get moveMetaCategories(): Prisma.MoveMetaCategoriesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.moveMetaAilments`: Exposes CRUD operations for the **MoveMetaAilments** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MoveMetaAilments
      * const moveMetaAilments = await prisma.moveMetaAilments.findMany()
      * ```
      */
    get moveMetaAilments(): Prisma.MoveMetaAilmentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.moveMeta`: Exposes CRUD operations for the **MoveMeta** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MoveMetas
      * const moveMetas = await prisma.moveMeta.findMany()
      * ```
      */
    get moveMeta(): Prisma.MoveMetaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.moveMetaStatChanges`: Exposes CRUD operations for the **MoveMetaStatChanges** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MoveMetaStatChanges
      * const moveMetaStatChanges = await prisma.moveMetaStatChanges.findMany()
      * ```
      */
    get moveMetaStatChanges(): Prisma.MoveMetaStatChangesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.moveFlags`: Exposes CRUD operations for the **MoveFlags** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MoveFlags
      * const moveFlags = await prisma.moveFlags.findMany()
      * ```
      */
    get moveFlags(): Prisma.MoveFlagsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.moveFlagMap`: Exposes CRUD operations for the **MoveFlagMap** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MoveFlagMaps
      * const moveFlagMaps = await prisma.moveFlagMap.findMany()
      * ```
      */
    get moveFlagMap(): Prisma.MoveFlagMapDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.moveBattleStyles`: Exposes CRUD operations for the **MoveBattleStyles** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MoveBattleStyles
      * const moveBattleStyles = await prisma.moveBattleStyles.findMany()
      * ```
      */
    get moveBattleStyles(): Prisma.MoveBattleStylesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.itemFlags`: Exposes CRUD operations for the **ItemFlags** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ItemFlags
      * const itemFlags = await prisma.itemFlags.findMany()
      * ```
      */
    get itemFlags(): Prisma.ItemFlagsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.itemFlagMap`: Exposes CRUD operations for the **ItemFlagMap** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ItemFlagMaps
      * const itemFlagMaps = await prisma.itemFlagMap.findMany()
      * ```
      */
    get itemFlagMap(): Prisma.ItemFlagMapDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.itemFlingEffects`: Exposes CRUD operations for the **ItemFlingEffects** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ItemFlingEffects
      * const itemFlingEffects = await prisma.itemFlingEffects.findMany()
      * ```
      */
    get itemFlingEffects(): Prisma.ItemFlingEffectsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.berries`: Exposes CRUD operations for the **Berries** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Berries
      * const berries = await prisma.berries.findMany()
      * ```
      */
    get berries(): Prisma.BerriesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.berryFirmness`: Exposes CRUD operations for the **BerryFirmness** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BerryFirmnesses
      * const berryFirmnesses = await prisma.berryFirmness.findMany()
      * ```
      */
    get berryFirmness(): Prisma.BerryFirmnessDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.berryFlavors`: Exposes CRUD operations for the **BerryFlavors** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BerryFlavors
      * const berryFlavors = await prisma.berryFlavors.findMany()
      * ```
      */
    get berryFlavors(): Prisma.BerryFlavorsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.characteristics`: Exposes CRUD operations for the **Characteristics** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Characteristics
      * const characteristics = await prisma.characteristics.findMany()
      * ```
      */
    get characteristics(): Prisma.CharacteristicsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.contestCombos`: Exposes CRUD operations for the **ContestCombos** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ContestCombos
      * const contestCombos = await prisma.contestCombos.findMany()
      * ```
      */
    get contestCombos(): Prisma.ContestCombosDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.superContestCombos`: Exposes CRUD operations for the **SuperContestCombos** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SuperContestCombos
      * const superContestCombos = await prisma.superContestCombos.findMany()
      * ```
      */
    get superContestCombos(): Prisma.SuperContestCombosDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonMoveMethods`: Exposes CRUD operations for the **PokemonMoveMethods** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonMoveMethods
      * const pokemonMoveMethods = await prisma.pokemonMoveMethods.findMany()
      * ```
      */
    get pokemonMoveMethods(): Prisma.PokemonMoveMethodsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.versionGroupPokemonMoveMethods`: Exposes CRUD operations for the **VersionGroupPokemonMoveMethods** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more VersionGroupPokemonMoveMethods
      * const versionGroupPokemonMoveMethods = await prisma.versionGroupPokemonMoveMethods.findMany()
      * ```
      */
    get versionGroupPokemonMoveMethods(): Prisma.VersionGroupPokemonMoveMethodsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonShapes`: Exposes CRUD operations for the **PokemonShapes** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonShapes
      * const pokemonShapes = await prisma.pokemonShapes.findMany()
      * ```
      */
    get pokemonShapes(): Prisma.PokemonShapesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonColors`: Exposes CRUD operations for the **PokemonColors** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonColors
      * const pokemonColors = await prisma.pokemonColors.findMany()
      * ```
      */
    get pokemonColors(): Prisma.PokemonColorsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonHabitats`: Exposes CRUD operations for the **PokemonHabitats** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonHabitats
      * const pokemonHabitats = await prisma.pokemonHabitats.findMany()
      * ```
      */
    get pokemonHabitats(): Prisma.PokemonHabitatsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.typeEfficacy`: Exposes CRUD operations for the **TypeEfficacy** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TypeEfficacies
      * const typeEfficacies = await prisma.typeEfficacy.findMany()
      * ```
      */
    get typeEfficacy(): Prisma.TypeEfficacyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.versionGroupRegions`: Exposes CRUD operations for the **VersionGroupRegions** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more VersionGroupRegions
      * const versionGroupRegions = await prisma.versionGroupRegions.findMany()
      * ```
      */
    get versionGroupRegions(): Prisma.VersionGroupRegionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokedexVersionGroups`: Exposes CRUD operations for the **PokedexVersionGroups** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokedexVersionGroups
      * const pokedexVersionGroups = await prisma.pokedexVersionGroups.findMany()
      * ```
      */
    get pokedexVersionGroups(): Prisma.PokedexVersionGroupsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonAbilities`: Exposes CRUD operations for the **PokemonAbilities** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonAbilities
      * const pokemonAbilities = await prisma.pokemonAbilities.findMany()
      * ```
      */
    get pokemonAbilities(): Prisma.PokemonAbilitiesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonMoves`: Exposes CRUD operations for the **PokemonMoves** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonMoves
      * const pokemonMoves = await prisma.pokemonMoves.findMany()
      * ```
      */
    get pokemonMoves(): Prisma.PokemonMovesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonStats`: Exposes CRUD operations for the **PokemonStats** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonStats
      * const pokemonStats = await prisma.pokemonStats.findMany()
      * ```
      */
    get pokemonStats(): Prisma.PokemonStatsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonTypes`: Exposes CRUD operations for the **PokemonTypes** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonTypes
      * const pokemonTypes = await prisma.pokemonTypes.findMany()
      * ```
      */
    get pokemonTypes(): Prisma.PokemonTypesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonEggGroups`: Exposes CRUD operations for the **PokemonEggGroups** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonEggGroups
      * const pokemonEggGroups = await prisma.pokemonEggGroups.findMany()
      * ```
      */
    get pokemonEggGroups(): Prisma.PokemonEggGroupsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonItems`: Exposes CRUD operations for the **PokemonItems** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonItems
      * const pokemonItems = await prisma.pokemonItems.findMany()
      * ```
      */
    get pokemonItems(): Prisma.PokemonItemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonGameIndices`: Exposes CRUD operations for the **PokemonGameIndices** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonGameIndices
      * const pokemonGameIndices = await prisma.pokemonGameIndices.findMany()
      * ```
      */
    get pokemonGameIndices(): Prisma.PokemonGameIndicesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonDexNumbers`: Exposes CRUD operations for the **PokemonDexNumbers** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonDexNumbers
      * const pokemonDexNumbers = await prisma.pokemonDexNumbers.findMany()
      * ```
      */
    get pokemonDexNumbers(): Prisma.PokemonDexNumbersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonFormGenerations`: Exposes CRUD operations for the **PokemonFormGenerations** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonFormGenerations
      * const pokemonFormGenerations = await prisma.pokemonFormGenerations.findMany()
      * ```
      */
    get pokemonFormGenerations(): Prisma.PokemonFormGenerationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pokemonFormTypes`: Exposes CRUD operations for the **PokemonFormTypes** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PokemonFormTypes
      * const pokemonFormTypes = await prisma.pokemonFormTypes.findMany()
      * ```
      */
    get pokemonFormTypes(): Prisma.PokemonFormTypesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.typeGameIndices`: Exposes CRUD operations for the **TypeGameIndices** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TypeGameIndices
      * const typeGameIndices = await prisma.typeGameIndices.findMany()
      * ```
      */
    get typeGameIndices(): Prisma.TypeGameIndicesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.itemGameIndices`: Exposes CRUD operations for the **ItemGameIndices** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ItemGameIndices
      * const itemGameIndices = await prisma.itemGameIndices.findMany()
      * ```
      */
    get itemGameIndices(): Prisma.ItemGameIndicesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.locationGameIndices`: Exposes CRUD operations for the **LocationGameIndices** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LocationGameIndices
      * const locationGameIndices = await prisma.locationGameIndices.findMany()
      * ```
      */
    get locationGameIndices(): Prisma.LocationGameIndicesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.locationAreaEncounterRates`: Exposes CRUD operations for the **LocationAreaEncounterRates** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LocationAreaEncounterRates
      * const locationAreaEncounterRates = await prisma.locationAreaEncounterRates.findMany()
      * ```
      */
    get locationAreaEncounterRates(): Prisma.LocationAreaEncounterRatesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.natureBattleStylePreferences`: Exposes CRUD operations for the **NatureBattleStylePreferences** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more NatureBattleStylePreferences
      * const natureBattleStylePreferences = await prisma.natureBattleStylePreferences.findMany()
      * ```
      */
    get natureBattleStylePreferences(): Prisma.NatureBattleStylePreferencesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
