import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput } from "../inputs/EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput";
import { EncounterConditionValuesCreateWithoutConditionValueMapInput } from "../inputs/EncounterConditionValuesCreateWithoutConditionValueMapInput";
import { EncounterConditionValuesWhereUniqueInput } from "../inputs/EncounterConditionValuesWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput", {})
export class EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateWithoutConditionValueMapInput, {
    nullable: true
  })
  create?: EncounterConditionValuesCreateWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput, {
    nullable: true
  })
  connectOrCreate?: EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterConditionValuesWhereUniqueInput | undefined;
}
