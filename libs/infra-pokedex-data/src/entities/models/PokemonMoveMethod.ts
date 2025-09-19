import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonMove } from "../models/PokemonMove";
import { VersionGroupPokemonMoveMethod } from "../models/VersionGroupPokemonMoveMethod";
import { PokemonMoveMethodCount } from "../resolvers/outputs/PokemonMoveMethodCount";

@TypeGraphQL.ObjectType("PokemonMoveMethod", {})
export class PokemonMoveMethod {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  pokemonMoves?: PokemonMove[];

  versionGroups?: VersionGroupPokemonMoveMethod[];

  @TypeGraphQL.Field(_type => PokemonMoveMethodCount, {
    nullable: true
  })
  _count?: PokemonMoveMethodCount | null;
}
