import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Abilities } from "../models/Abilities";
import { ItemGameIndices } from "../models/ItemGameIndices";
import { LocationGameIndices } from "../models/LocationGameIndices";
import { Moves } from "../models/Moves";
import { PokemonFormGenerations } from "../models/PokemonFormGenerations";
import { PokemonSpecies } from "../models/PokemonSpecies";
import { Regions } from "../models/Regions";
import { TypeGameIndices } from "../models/TypeGameIndices";
import { Types } from "../models/Types";
import { VersionGroups } from "../models/VersionGroups";
import { GenerationsCount } from "../resolvers/outputs/GenerationsCount";

@TypeGraphQL.ObjectType("Generations", {})
export class Generations {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  main_region_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  region?: Regions;

  pokemonSpecies?: PokemonSpecies[];

  moves?: Moves[];

  types?: Types[];

  abilities?: Abilities[];

  pokemonFormGenerations?: PokemonFormGenerations[];

  itemGameIndices?: ItemGameIndices[];

  typeGameIndices?: TypeGameIndices[];

  locationGameIndices?: LocationGameIndices[];

  versionGroups?: VersionGroups[];

  @TypeGraphQL.Field(_type => GenerationsCount, {
    nullable: true
  })
  _count?: GenerationsCount | null;
}
