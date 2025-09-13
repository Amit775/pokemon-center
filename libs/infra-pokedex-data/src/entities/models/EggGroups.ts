import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonEggGroups } from "../models/PokemonEggGroups";
import { EggGroupsCount } from "../resolvers/outputs/EggGroupsCount";

@TypeGraphQL.ObjectType("EggGroups", {})
export class EggGroups {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  species?: PokemonEggGroups[];

  @TypeGraphQL.Field(_type => EggGroupsCount, {
    nullable: true
  })
  _count?: EggGroupsCount | null;
}
