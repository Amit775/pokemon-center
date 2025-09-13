import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonSpecies } from "../models/PokemonSpecies";
import { PokemonColorsCount } from "../resolvers/outputs/PokemonColorsCount";

@TypeGraphQL.ObjectType("PokemonColors", {})
export class PokemonColors {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  species?: PokemonSpecies[];

  @TypeGraphQL.Field(_type => PokemonColorsCount, {
    nullable: true
  })
  _count?: PokemonColorsCount | null;
}
