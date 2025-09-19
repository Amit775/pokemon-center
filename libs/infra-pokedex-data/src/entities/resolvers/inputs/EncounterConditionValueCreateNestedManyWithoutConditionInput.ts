import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueCreateManyConditionInputEnvelope } from "../inputs/EncounterConditionValueCreateManyConditionInputEnvelope";
import { EncounterConditionValueCreateOrConnectWithoutConditionInput } from "../inputs/EncounterConditionValueCreateOrConnectWithoutConditionInput";
import { EncounterConditionValueCreateWithoutConditionInput } from "../inputs/EncounterConditionValueCreateWithoutConditionInput";
import { EncounterConditionValueWhereUniqueInput } from "../inputs/EncounterConditionValueWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueCreateNestedManyWithoutConditionInput", {})
export class EncounterConditionValueCreateNestedManyWithoutConditionInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValueCreateWithoutConditionInput], {
    nullable: true
  })
  create?: EncounterConditionValueCreateWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueCreateOrConnectWithoutConditionInput], {
    nullable: true
  })
  connectOrCreate?: EncounterConditionValueCreateOrConnectWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueCreateManyConditionInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterConditionValueCreateManyConditionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterConditionValueWhereUniqueInput[] | undefined;
}
