import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueCountConditionValueMapArgs } from "./args/EncounterConditionValueCountConditionValueMapArgs";

@TypeGraphQL.ObjectType("EncounterConditionValueCount", {})
export class EncounterConditionValueCount {
  conditionValueMap!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "conditionValueMap",
    nullable: false
  })
  getConditionValueMap(@TypeGraphQL.Root() root: EncounterConditionValueCount, @TypeGraphQL.Args() args: EncounterConditionValueCountConditionValueMapArgs): number {
    return root.conditionValueMap;
  }
}
