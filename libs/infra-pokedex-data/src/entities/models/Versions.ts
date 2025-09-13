import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Encounters } from "../models/Encounters";
import { LocationAreaEncounterRates } from "../models/LocationAreaEncounterRates";
import { PokemonGameIndices } from "../models/PokemonGameIndices";
import { PokemonItems } from "../models/PokemonItems";
import { VersionGroups } from "../models/VersionGroups";
import { VersionsCount } from "../resolvers/outputs/VersionsCount";

@TypeGraphQL.ObjectType("Versions", {})
export class Versions {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  versionGroup?: VersionGroups;

  encounters?: Encounters[];

  pokemonItems?: PokemonItems[];

  pokemonGameIndices?: PokemonGameIndices[];

  locationAreaEncounterRates?: LocationAreaEncounterRates[];

  @TypeGraphQL.Field(_type => VersionsCount, {
    nullable: true
  })
  _count?: VersionsCount | null;
}
