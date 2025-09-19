import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionCreateOrConnectWithoutValuesInput } from "../inputs/EncounterConditionCreateOrConnectWithoutValuesInput";
import { EncounterConditionCreateWithoutValuesInput } from "../inputs/EncounterConditionCreateWithoutValuesInput";
import { EncounterConditionUpdateToOneWithWhereWithoutValuesInput } from "../inputs/EncounterConditionUpdateToOneWithWhereWithoutValuesInput";
import { EncounterConditionUpsertWithoutValuesInput } from "../inputs/EncounterConditionUpsertWithoutValuesInput";
import { EncounterConditionWhereUniqueInput } from "../inputs/EncounterConditionWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionUpdateOneRequiredWithoutValuesNestedInput", {})
export class EncounterConditionUpdateOneRequiredWithoutValuesNestedInput {
  @TypeGraphQL.Field(_type => EncounterConditionCreateWithoutValuesInput, {
    nullable: true
  })
  create?: EncounterConditionCreateWithoutValuesInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionCreateOrConnectWithoutValuesInput, {
    nullable: true
  })
  connectOrCreate?: EncounterConditionCreateOrConnectWithoutValuesInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionUpsertWithoutValuesInput, {
    nullable: true
  })
  upsert?: EncounterConditionUpsertWithoutValuesInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterConditionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionUpdateToOneWithWhereWithoutValuesInput, {
    nullable: true
  })
  update?: EncounterConditionUpdateToOneWithWhereWithoutValuesInput | undefined;
}
