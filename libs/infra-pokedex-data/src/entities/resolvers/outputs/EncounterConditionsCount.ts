import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionsCountValuesArgs } from "./args/EncounterConditionsCountValuesArgs";

@TypeGraphQL.ObjectType("EncounterConditionsCount", {})
export class EncounterConditionsCount {
  values!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "values",
    nullable: false
  })
  getValues(@TypeGraphQL.Root() root: EncounterConditionsCount, @TypeGraphQL.Args() args: EncounterConditionsCountValuesArgs): number {
    return root.values;
  }
}
