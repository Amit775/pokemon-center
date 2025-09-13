import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStylesCountNaturePreferencesArgs } from "./args/MoveBattleStylesCountNaturePreferencesArgs";

@TypeGraphQL.ObjectType("MoveBattleStylesCount", {})
export class MoveBattleStylesCount {
  naturePreferences!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "naturePreferences",
    nullable: false
  })
  getNaturePreferences(@TypeGraphQL.Root() root: MoveBattleStylesCount, @TypeGraphQL.Args() args: MoveBattleStylesCountNaturePreferencesArgs): number {
    return root.naturePreferences;
  }
}
