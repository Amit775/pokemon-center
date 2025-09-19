import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonSpecies } from "../models/PokemonSpecies";
import { PokemonHabitatCount } from "../resolvers/outputs/PokemonHabitatCount";

@TypeGraphQL.ObjectType("PokemonHabitat", {})
export class PokemonHabitat {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  species?: PokemonSpecies[];

  @TypeGraphQL.Field(_type => PokemonHabitatCount, {
    nullable: true
  })
  _count?: PokemonHabitatCount | null;
}
