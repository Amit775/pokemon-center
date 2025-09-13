import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonMoves } from "../models/PokemonMoves";
import { VersionGroupPokemonMoveMethods } from "../models/VersionGroupPokemonMoveMethods";
import { PokemonMoveMethodsCount } from "../resolvers/outputs/PokemonMoveMethodsCount";

@TypeGraphQL.ObjectType("PokemonMoveMethods", {})
export class PokemonMoveMethods {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  pokemonMoves?: PokemonMoves[];

  versionGroups?: VersionGroupPokemonMoveMethods[];

  @TypeGraphQL.Field(_type => PokemonMoveMethodsCount, {
    nullable: true
  })
  _count?: PokemonMoveMethodsCount | null;
}
