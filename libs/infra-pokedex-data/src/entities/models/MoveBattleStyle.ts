import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { NatureBattleStylePreference } from "../models/NatureBattleStylePreference";
import { MoveBattleStyleCount } from "../resolvers/outputs/MoveBattleStyleCount";

@TypeGraphQL.ObjectType("MoveBattleStyle", {})
export class MoveBattleStyle {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  naturePreferences?: NatureBattleStylePreference[];

  @TypeGraphQL.Field(_type => MoveBattleStyleCount, {
    nullable: true
  })
  _count?: MoveBattleStyleCount | null;
}
