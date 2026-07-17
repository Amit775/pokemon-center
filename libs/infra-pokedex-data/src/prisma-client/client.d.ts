import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
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
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Pokemon
 *
 */
export type Pokemon = Prisma.PokemonModel;
/**
 * Model PokemonSpecies
 *
 */
export type PokemonSpecies = Prisma.PokemonSpeciesModel;
/**
 * Model PokemonForms
 * @@TypeGraphQL.type(name: "PokemonForm")
 */
export type PokemonForms = Prisma.PokemonFormsModel;
/**
 * Model Moves
 * @@TypeGraphQL.type(name: "Move")
 */
export type Moves = Prisma.MovesModel;
/**
 * Model MoveTargets
 * @@TypeGraphQL.type(name: "MoveTarget")
 */
export type MoveTargets = Prisma.MoveTargetsModel;
/**
 * Model MoveDamageClasses
 * @@TypeGraphQL.type(name: "MoveDamageClass")
 */
export type MoveDamageClasses = Prisma.MoveDamageClassesModel;
/**
 * Model Types
 * @@TypeGraphQL.type(name: "Type")
 */
export type Types = Prisma.TypesModel;
/**
 * Model Abilities
 * @@TypeGraphQL.type(name: "Ability")
 */
export type Abilities = Prisma.AbilitiesModel;
/**
 * Model Items
 * @@TypeGraphQL.type(name: "Item")
 */
export type Items = Prisma.ItemsModel;
/**
 * Model ItemCategories
 * @@TypeGraphQL.type(name: "ItemCategory")
 */
export type ItemCategories = Prisma.ItemCategoriesModel;
/**
 * Model ItemPockets
 * @@TypeGraphQL.type(name: "ItemPocket")
 */
export type ItemPockets = Prisma.ItemPocketsModel;
/**
 * Model Stats
 * @@TypeGraphQL.type(name: "Stat")
 */
export type Stats = Prisma.StatsModel;
/**
 * Model Generations
 * @@TypeGraphQL.type(name: "Generation")
 */
export type Generations = Prisma.GenerationsModel;
/**
 * Model VersionGroups
 * @@TypeGraphQL.type(name: "VersionGroup")
 */
export type VersionGroups = Prisma.VersionGroupsModel;
/**
 * Model Versions
 * @@TypeGraphQL.type(name: "Version")
 */
export type Versions = Prisma.VersionsModel;
/**
 * Model Regions
 * @@TypeGraphQL.type(name: "Region")
 */
export type Regions = Prisma.RegionsModel;
/**
 * Model Locations
 * @@TypeGraphQL.type(name: "Location")
 */
export type Locations = Prisma.LocationsModel;
/**
 * Model LocationAreas
 * @@TypeGraphQL.type(name: "LocationArea")
 */
export type LocationAreas = Prisma.LocationAreasModel;
/**
 * Model Pokedexes
 * @@TypeGraphQL.type(name: "Pokedex")
 */
export type Pokedexes = Prisma.PokedexesModel;
/**
 * Model EvolutionChains
 * @@TypeGraphQL.type(name: "EvolutionChain")
 */
export type EvolutionChains = Prisma.EvolutionChainsModel;
/**
 * Model EvolutionTriggers
 * @@TypeGraphQL.type(name: "EvolutionTrigger")
 */
export type EvolutionTriggers = Prisma.EvolutionTriggersModel;
/**
 * Model PokemonEvolution
 *
 */
export type PokemonEvolution = Prisma.PokemonEvolutionModel;
/**
 * Model GrowthRates
 *
 */
export type GrowthRates = Prisma.GrowthRatesModel;
/**
 * Model Experience
 *
 */
export type Experience = Prisma.ExperienceModel;
/**
 * Model Genders
 * @@TypeGraphQL.type(name: "Gender")
 */
export type Genders = Prisma.GendersModel;
/**
 * Model Languages
 * @@TypeGraphQL.type(name: "Language")
 */
export type Languages = Prisma.LanguagesModel;
/**
 * Model EggGroups
 * @@TypeGraphQL.type(name: "EggGroup")
 */
export type EggGroups = Prisma.EggGroupsModel;
/**
 * Model Natures
 * @@TypeGraphQL.type(name: "Nature")
 */
export type Natures = Prisma.NaturesModel;
/**
 * Model ContestTypes
 * @@TypeGraphQL.type(name: "ContestType")
 */
export type ContestTypes = Prisma.ContestTypesModel;
/**
 * Model ContestEffects
 * @@TypeGraphQL.type(name: "ContestEffect")
 */
export type ContestEffects = Prisma.ContestEffectsModel;
/**
 * Model SuperContestEffects
 * @@TypeGraphQL.type(name: "SuperContestEffect")
 */
export type SuperContestEffects = Prisma.SuperContestEffectsModel;
/**
 * Model Machines
 * @@TypeGraphQL.type(name: "Machine")
 */
export type Machines = Prisma.MachinesModel;
/**
 * Model EncounterMethods
 * @@TypeGraphQL.type(name: "EncounterMethod")
 */
export type EncounterMethods = Prisma.EncounterMethodsModel;
/**
 * Model EncounterSlots
 * @@TypeGraphQL.type(name: "EncounterSlot")
 */
export type EncounterSlots = Prisma.EncounterSlotsModel;
/**
 * Model Encounters
 * @@TypeGraphQL.type(name: "Encounter")
 */
export type Encounters = Prisma.EncountersModel;
/**
 * Model EncounterConditions
 * @@TypeGraphQL.type(name: "EncounterCondition")
 */
export type EncounterConditions = Prisma.EncounterConditionsModel;
/**
 * Model EncounterConditionValues
 * @@TypeGraphQL.type(name: "EncounterConditionValue")
 */
export type EncounterConditionValues = Prisma.EncounterConditionValuesModel;
/**
 * Model EncounterConditionValueMap
 * @@TypeGraphQL.type(name: "EncounterConditionValueMap")
 */
export type EncounterConditionValueMap = Prisma.EncounterConditionValueMapModel;
/**
 * Model MoveMetaCategories
 * @@TypeGraphQL.type(name: "MoveMetaCategory")
 */
export type MoveMetaCategories = Prisma.MoveMetaCategoriesModel;
/**
 * Model MoveMetaAilments
 * @@TypeGraphQL.type(name: "MoveMetaAilment")
 */
export type MoveMetaAilments = Prisma.MoveMetaAilmentsModel;
/**
 * Model MoveMeta
 * @@TypeGraphQL.type(name: "MoveMeta")
 */
export type MoveMeta = Prisma.MoveMetaModel;
/**
 * Model MoveMetaStatChanges
 * @@TypeGraphQL.type(name: "MoveMetaStatChanges")
 */
export type MoveMetaStatChanges = Prisma.MoveMetaStatChangesModel;
/**
 * Model MoveFlags
 * @@TypeGraphQL.type(name: "MoveFlag")
 */
export type MoveFlags = Prisma.MoveFlagsModel;
/**
 * Model MoveFlagMap
 * @@TypeGraphQL.type(name: "MoveFlagMap")
 */
export type MoveFlagMap = Prisma.MoveFlagMapModel;
/**
 * Model MoveBattleStyles
 * @@TypeGraphQL.type(name: "MoveBattleStyle")
 */
export type MoveBattleStyles = Prisma.MoveBattleStylesModel;
/**
 * Model ItemFlags
 * @@TypeGraphQL.type(name: "ItemFlag")
 */
export type ItemFlags = Prisma.ItemFlagsModel;
/**
 * Model ItemFlagMap
 * @@TypeGraphQL.type(name: "ItemFlagMap")
 */
export type ItemFlagMap = Prisma.ItemFlagMapModel;
/**
 * Model ItemFlingEffects
 * @@TypeGraphQL.type(name: "ItemFlingEffect")
 */
export type ItemFlingEffects = Prisma.ItemFlingEffectsModel;
/**
 * Model Berries
 * @@TypeGraphQL.type(name: "Berry")
 */
export type Berries = Prisma.BerriesModel;
/**
 * Model BerryFirmness
 * @@TypeGraphQL.type(name: "BerryFirmness")
 */
export type BerryFirmness = Prisma.BerryFirmnessModel;
/**
 * Model BerryFlavors
 * @@TypeGraphQL.type(name: "BerryFlavor")
 */
export type BerryFlavors = Prisma.BerryFlavorsModel;
/**
 * Model Characteristics
 * @@TypeGraphQL.type(name: "Characteristic")
 */
export type Characteristics = Prisma.CharacteristicsModel;
/**
 * Model ContestCombos
 * @@TypeGraphQL.type(name: "ContestCombo")
 */
export type ContestCombos = Prisma.ContestCombosModel;
/**
 * Model SuperContestCombos
 * @@TypeGraphQL.type(name: "SuperContestCombo")
 */
export type SuperContestCombos = Prisma.SuperContestCombosModel;
/**
 * Model PokemonMoveMethods
 * @@TypeGraphQL.type(name: "PokemonMoveMethod")
 */
export type PokemonMoveMethods = Prisma.PokemonMoveMethodsModel;
/**
 * Model VersionGroupPokemonMoveMethods
 * @@TypeGraphQL.type(name: "VersionGroupPokemonMoveMethod")
 */
export type VersionGroupPokemonMoveMethods = Prisma.VersionGroupPokemonMoveMethodsModel;
/**
 * Model PokemonShapes
 * @@TypeGraphQL.type(name: "PokemonShape")
 */
export type PokemonShapes = Prisma.PokemonShapesModel;
/**
 * Model PokemonColors
 * @@TypeGraphQL.type(name: "PokemonColor")
 */
export type PokemonColors = Prisma.PokemonColorsModel;
/**
 * Model PokemonHabitats
 * @@TypeGraphQL.type(name: "PokemonHabitat")
 */
export type PokemonHabitats = Prisma.PokemonHabitatsModel;
/**
 * Model TypeEfficacy
 * @@TypeGraphQL.type(name: "TypeEfficacy")
 */
export type TypeEfficacy = Prisma.TypeEfficacyModel;
/**
 * Model VersionGroupRegions
 * @@TypeGraphQL.type(name: "VersionGroupRegion")
 */
export type VersionGroupRegions = Prisma.VersionGroupRegionsModel;
/**
 * Model PokedexVersionGroups
 * @@TypeGraphQL.type(name: "PokedexVersionGroup")
 */
export type PokedexVersionGroups = Prisma.PokedexVersionGroupsModel;
/**
 * Model PokemonAbilities
 * @@TypeGraphQL.type(name: "PokemonAbility")
 */
export type PokemonAbilities = Prisma.PokemonAbilitiesModel;
/**
 * Model PokemonMoves
 * @@TypeGraphQL.type(name: "PokemonMove")
 */
export type PokemonMoves = Prisma.PokemonMovesModel;
/**
 * Model PokemonStats
 * @@TypeGraphQL.type(name: "PokemonStat")
 */
export type PokemonStats = Prisma.PokemonStatsModel;
/**
 * Model PokemonTypes
 * @@TypeGraphQL.type(name: "PokemonType")
 */
export type PokemonTypes = Prisma.PokemonTypesModel;
/**
 * Model PokemonEggGroups
 * @@TypeGraphQL.type(name: "PokemonEggGroup")
 */
export type PokemonEggGroups = Prisma.PokemonEggGroupsModel;
/**
 * Model PokemonItems
 * @@TypeGraphQL.type(name: "PokemonItem")
 */
export type PokemonItems = Prisma.PokemonItemsModel;
/**
 * Model PokemonGameIndices
 * @@TypeGraphQL.type(name: "PokemonGameIndex")
 */
export type PokemonGameIndices = Prisma.PokemonGameIndicesModel;
/**
 * Model PokemonDexNumbers
 * @@TypeGraphQL.type(name: "PokemonDexNumber")
 */
export type PokemonDexNumbers = Prisma.PokemonDexNumbersModel;
/**
 * Model PokemonFormGenerations
 * @@TypeGraphQL.type(name: "PokemonFormGeneration")
 */
export type PokemonFormGenerations = Prisma.PokemonFormGenerationsModel;
/**
 * Model PokemonFormTypes
 * @@TypeGraphQL.type(name: "PokemonFormType")
 */
export type PokemonFormTypes = Prisma.PokemonFormTypesModel;
/**
 * Model TypeGameIndices
 * @@TypeGraphQL.type(name: "TypeGameIndex")
 */
export type TypeGameIndices = Prisma.TypeGameIndicesModel;
/**
 * Model ItemGameIndices
 * @@TypeGraphQL.type(name: "ItemGameIndex")
 */
export type ItemGameIndices = Prisma.ItemGameIndicesModel;
/**
 * Model LocationGameIndices
 * @@TypeGraphQL.type(name: "LocationGameIndex")
 */
export type LocationGameIndices = Prisma.LocationGameIndicesModel;
/**
 * Model LocationAreaEncounterRates
 * @@TypeGraphQL.type(name: "LocationAreaEncounterRate")
 */
export type LocationAreaEncounterRates = Prisma.LocationAreaEncounterRatesModel;
/**
 * Model NatureBattleStylePreferences
 * @@TypeGraphQL.type(name: "NatureBattleStylePreference")
 */
export type NatureBattleStylePreferences = Prisma.NatureBattleStylePreferencesModel;
