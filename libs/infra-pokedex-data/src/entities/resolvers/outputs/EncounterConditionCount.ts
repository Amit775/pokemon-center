import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionCountValuesArgs } from "./args/EncounterConditionCountValuesArgs";

@TypeGraphQL.ObjectType("EncounterConditionCount", {})
export class EncounterConditionCount {
  values!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "values",
    nullable: false
  })
  getValues(@TypeGraphQL.Root() root: EncounterConditionCount, @TypeGraphQL.Args() args: EncounterConditionCountValuesArgs): number {
    return root.values;
  }
}
