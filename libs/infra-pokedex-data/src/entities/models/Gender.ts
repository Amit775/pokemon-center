import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonEvolution } from "../models/PokemonEvolution";
import { GenderCount } from "../resolvers/outputs/GenderCount";

@TypeGraphQL.ObjectType("Gender", {})
export class Gender {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  evolution?: PokemonEvolution[];

  @TypeGraphQL.Field(_type => GenderCount, {
    nullable: true
  })
  _count?: GenderCount | null;
}
