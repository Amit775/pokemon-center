import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonSpecies } from "../models/PokemonSpecies";
import { PokemonColorCount } from "../resolvers/outputs/PokemonColorCount";

@TypeGraphQL.ObjectType("PokemonColor", {})
export class PokemonColor {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  species?: PokemonSpecies[];

  @TypeGraphQL.Field(_type => PokemonColorCount, {
    nullable: true
  })
  _count?: PokemonColorCount | null;
}
