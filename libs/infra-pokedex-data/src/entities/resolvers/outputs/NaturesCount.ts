import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesCountBattleStylePreferencesArgs } from "./args/NaturesCountBattleStylePreferencesArgs";
import { NaturesCountDecreasedStatTypesArgs } from "./args/NaturesCountDecreasedStatTypesArgs";
import { NaturesCountIncreasedStatTypesArgs } from "./args/NaturesCountIncreasedStatTypesArgs";

@TypeGraphQL.ObjectType("NaturesCount", {})
export class NaturesCount {
  battleStylePreferences!: number;
  decreasedStatTypes!: number;
  increasedStatTypes!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "battleStylePreferences",
    nullable: false
  })
  getBattleStylePreferences(@TypeGraphQL.Root() root: NaturesCount, @TypeGraphQL.Args() args: NaturesCountBattleStylePreferencesArgs): number {
    return root.battleStylePreferences;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "decreasedStatTypes",
    nullable: false
  })
  getDecreasedStatTypes(@TypeGraphQL.Root() root: NaturesCount, @TypeGraphQL.Args() args: NaturesCountDecreasedStatTypesArgs): number {
    return root.decreasedStatTypes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "increasedStatTypes",
    nullable: false
  })
  getIncreasedStatTypes(@TypeGraphQL.Root() root: NaturesCount, @TypeGraphQL.Args() args: NaturesCountIncreasedStatTypesArgs): number {
    return root.increasedStatTypes;
  }
}
