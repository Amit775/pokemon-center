import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonEvolution } from "../models/PokemonEvolution";
import { GendersCount } from "../resolvers/outputs/GendersCount";

@TypeGraphQL.ObjectType("Genders", {})
export class Genders {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  evolution?: PokemonEvolution[];

  @TypeGraphQL.Field(_type => GendersCount, {
    nullable: true
  })
  _count?: GendersCount | null;
}
