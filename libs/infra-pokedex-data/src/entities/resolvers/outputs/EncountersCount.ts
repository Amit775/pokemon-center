import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCountConditionValueMapArgs } from "./args/EncountersCountConditionValueMapArgs";

@TypeGraphQL.ObjectType("EncountersCount", {})
export class EncountersCount {
  conditionValueMap!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "conditionValueMap",
    nullable: false
  })
  getConditionValueMap(@TypeGraphQL.Root() root: EncountersCount, @TypeGraphQL.Args() args: EncountersCountConditionValueMapArgs): number {
    return root.conditionValueMap;
  }
}
