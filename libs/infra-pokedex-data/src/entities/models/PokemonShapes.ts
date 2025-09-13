import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonSpecies } from "../models/PokemonSpecies";
import { PokemonShapesCount } from "../resolvers/outputs/PokemonShapesCount";

@TypeGraphQL.ObjectType("PokemonShapes", {})
export class PokemonShapes {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  species?: PokemonSpecies[];

  @TypeGraphQL.Field(_type => PokemonShapesCount, {
    nullable: true
  })
  _count?: PokemonShapesCount | null;
}
