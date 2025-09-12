import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesCountConditionValueMapArgs } from "./args/EncounterConditionValuesCountConditionValueMapArgs";

@TypeGraphQL.ObjectType("EncounterConditionValuesCount", {})
export class EncounterConditionValuesCount {
  conditionValueMap!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "conditionValueMap",
    nullable: false
  })
  getConditionValueMap(@TypeGraphQL.Root() root: EncounterConditionValuesCount, @TypeGraphQL.Args() args: EncounterConditionValuesCountConditionValueMapArgs): number {
    return root.conditionValueMap;
  }
}
