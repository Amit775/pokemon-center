import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonEggGroup } from "../models/PokemonEggGroup";
import { EggGroupCount } from "../resolvers/outputs/EggGroupCount";

@TypeGraphQL.ObjectType("EggGroup", {})
export class EggGroup {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  species?: PokemonEggGroup[];

  @TypeGraphQL.Field(_type => EggGroupCount, {
    nullable: true
  })
  _count?: EggGroupCount | null;
}
