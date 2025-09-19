import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Encounter } from "../models/Encounter";
import { LocationAreaEncounterRate } from "../models/LocationAreaEncounterRate";
import { PokemonGameIndex } from "../models/PokemonGameIndex";
import { PokemonItem } from "../models/PokemonItem";
import { VersionGroup } from "../models/VersionGroup";
import { VersionCount } from "../resolvers/outputs/VersionCount";

@TypeGraphQL.ObjectType("Version", {})
export class Version {
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

  versionGroup?: VersionGroup;

  encounters?: Encounter[];

  pokemonItems?: PokemonItem[];

  pokemonGameIndices?: PokemonGameIndex[];

  locationAreaEncounterRates?: LocationAreaEncounterRate[];

  @TypeGraphQL.Field(_type => VersionCount, {
    nullable: true
  })
  _count?: VersionCount | null;
}
