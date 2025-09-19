import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyleCountNaturePreferencesArgs } from "./args/MoveBattleStyleCountNaturePreferencesArgs";

@TypeGraphQL.ObjectType("MoveBattleStyleCount", {})
export class MoveBattleStyleCount {
  naturePreferences!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "naturePreferences",
    nullable: false
  })
  getNaturePreferences(@TypeGraphQL.Root() root: MoveBattleStyleCount, @TypeGraphQL.Args() args: MoveBattleStyleCountNaturePreferencesArgs): number {
    return root.naturePreferences;
  }
}
