import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueCreateOrConnectWithoutConditionValueMapInput } from "../inputs/EncounterConditionValueCreateOrConnectWithoutConditionValueMapInput";
import { EncounterConditionValueCreateWithoutConditionValueMapInput } from "../inputs/EncounterConditionValueCreateWithoutConditionValueMapInput";
import { EncounterConditionValueWhereUniqueInput } from "../inputs/EncounterConditionValueWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueCreateNestedOneWithoutConditionValueMapInput", {})
export class EncounterConditionValueCreateNestedOneWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncounterConditionValueCreateWithoutConditionValueMapInput, {
    nullable: true
  })
  create?: EncounterConditionValueCreateWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueCreateOrConnectWithoutConditionValueMapInput, {
    nullable: true
  })
  connectOrCreate?: EncounterConditionValueCreateOrConnectWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterConditionValueWhereUniqueInput | undefined;
}
