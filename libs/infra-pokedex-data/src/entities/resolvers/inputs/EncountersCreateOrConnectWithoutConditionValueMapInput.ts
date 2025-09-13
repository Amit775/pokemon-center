import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateWithoutConditionValueMapInput } from "../inputs/EncountersCreateWithoutConditionValueMapInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersCreateOrConnectWithoutConditionValueMapInput", {})
export class EncountersCreateOrConnectWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncountersCreateWithoutConditionValueMapInput, {
    nullable: false
  })
  create!: EncountersCreateWithoutConditionValueMapInput;
}
