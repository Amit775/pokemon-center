import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonSpecies } from "../models/PokemonSpecies";
import { PokemonHabitatsCount } from "../resolvers/outputs/PokemonHabitatsCount";

@TypeGraphQL.ObjectType("PokemonHabitats", {})
export class PokemonHabitats {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  species?: PokemonSpecies[];

  @TypeGraphQL.Field(_type => PokemonHabitatsCount, {
    nullable: true
  })
  _count?: PokemonHabitatsCount | null;
}
