import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EncounterSlot } from "../models/EncounterSlot";
import { Generation } from "../models/Generation";
import { Machine } from "../models/Machine";
import { PokedexVersionGroup } from "../models/PokedexVersionGroup";
import { PokemonForm } from "../models/PokemonForm";
import { PokemonMove } from "../models/PokemonMove";
import { Version } from "../models/Version";
import { VersionGroupPokemonMoveMethod } from "../models/VersionGroupPokemonMoveMethod";
import { VersionGroupRegion } from "../models/VersionGroupRegion";
import { VersionGroupCount } from "../resolvers/outputs/VersionGroupCount";

@TypeGraphQL.ObjectType("VersionGroup", {})
export class VersionGroup {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  generation?: Generation;

  versions?: Version[];

  encounterSlots?: EncounterSlot[];

  machines?: Machine[];

  versionGroupPokemonMoveMethods?: VersionGroupPokemonMoveMethod[];

  versionGroupRegions?: VersionGroupRegion[];

  pokedexVersionGroups?: PokedexVersionGroup[];

  pokemonMoves?: PokemonMove[];

  pokemonForms?: PokemonForm[];

  @TypeGraphQL.Field(_type => VersionGroupCount, {
    nullable: true
  })
  _count?: VersionGroupCount | null;
}
