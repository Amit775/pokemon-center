import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCountConditionValueMapArgs } from "./args/EncounterCountConditionValueMapArgs";

@TypeGraphQL.ObjectType("EncounterCount", {})
export class EncounterCount {
  conditionValueMap!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "conditionValueMap",
    nullable: false
  })
  getConditionValueMap(@TypeGraphQL.Root() root: EncounterCount, @TypeGraphQL.Args() args: EncounterCountConditionValueMapArgs): number {
    return root.conditionValueMap;
  }
}
