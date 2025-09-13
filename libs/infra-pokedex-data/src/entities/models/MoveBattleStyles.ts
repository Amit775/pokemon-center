import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { NatureBattleStylePreferences } from "../models/NatureBattleStylePreferences";
import { MoveBattleStylesCount } from "../resolvers/outputs/MoveBattleStylesCount";

@TypeGraphQL.ObjectType("MoveBattleStyles", {})
export class MoveBattleStyles {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  naturePreferences?: NatureBattleStylePreferences[];

  @TypeGraphQL.Field(_type => MoveBattleStylesCount, {
    nullable: true
  })
  _count?: MoveBattleStylesCount | null;
}
