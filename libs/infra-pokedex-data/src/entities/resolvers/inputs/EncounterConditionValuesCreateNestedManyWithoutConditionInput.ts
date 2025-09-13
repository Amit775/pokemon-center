import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesCreateManyConditionInputEnvelope } from "../inputs/EncounterConditionValuesCreateManyConditionInputEnvelope";
import { EncounterConditionValuesCreateOrConnectWithoutConditionInput } from "../inputs/EncounterConditionValuesCreateOrConnectWithoutConditionInput";
import { EncounterConditionValuesCreateWithoutConditionInput } from "../inputs/EncounterConditionValuesCreateWithoutConditionInput";
import { EncounterConditionValuesWhereUniqueInput } from "../inputs/EncounterConditionValuesWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValuesCreateNestedManyWithoutConditionInput", {})
export class EncounterConditionValuesCreateNestedManyWithoutConditionInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValuesCreateWithoutConditionInput], {
    nullable: true
  })
  create?: EncounterConditionValuesCreateWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesCreateOrConnectWithoutConditionInput], {
    nullable: true
  })
  connectOrCreate?: EncounterConditionValuesCreateOrConnectWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateManyConditionInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterConditionValuesCreateManyConditionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterConditionValuesWhereUniqueInput[] | undefined;
}
