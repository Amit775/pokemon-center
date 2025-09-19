import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCountBattleStylePreferencesArgs } from "./args/NatureCountBattleStylePreferencesArgs";
import { NatureCountDecreasedStatTypesArgs } from "./args/NatureCountDecreasedStatTypesArgs";
import { NatureCountIncreasedStatTypesArgs } from "./args/NatureCountIncreasedStatTypesArgs";

@TypeGraphQL.ObjectType("NatureCount", {})
export class NatureCount {
  battleStylePreferences!: number;
  decreasedStatTypes!: number;
  increasedStatTypes!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "battleStylePreferences",
    nullable: false
  })
  getBattleStylePreferences(@TypeGraphQL.Root() root: NatureCount, @TypeGraphQL.Args() args: NatureCountBattleStylePreferencesArgs): number {
    return root.battleStylePreferences;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "decreasedStatTypes",
    nullable: false
  })
  getDecreasedStatTypes(@TypeGraphQL.Root() root: NatureCount, @TypeGraphQL.Args() args: NatureCountDecreasedStatTypesArgs): number {
    return root.decreasedStatTypes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "increasedStatTypes",
    nullable: false
  })
  getIncreasedStatTypes(@TypeGraphQL.Root() root: NatureCount, @TypeGraphQL.Args() args: NatureCountIncreasedStatTypesArgs): number {
    return root.increasedStatTypes;
  }
}
