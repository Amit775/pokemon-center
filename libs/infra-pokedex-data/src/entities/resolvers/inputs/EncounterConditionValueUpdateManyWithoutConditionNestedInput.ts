import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueCreateManyConditionInputEnvelope } from "../inputs/EncounterConditionValueCreateManyConditionInputEnvelope";
import { EncounterConditionValueCreateOrConnectWithoutConditionInput } from "../inputs/EncounterConditionValueCreateOrConnectWithoutConditionInput";
import { EncounterConditionValueCreateWithoutConditionInput } from "../inputs/EncounterConditionValueCreateWithoutConditionInput";
import { EncounterConditionValueScalarWhereInput } from "../inputs/EncounterConditionValueScalarWhereInput";
import { EncounterConditionValueUpdateManyWithWhereWithoutConditionInput } from "../inputs/EncounterConditionValueUpdateManyWithWhereWithoutConditionInput";
import { EncounterConditionValueUpdateWithWhereUniqueWithoutConditionInput } from "../inputs/EncounterConditionValueUpdateWithWhereUniqueWithoutConditionInput";
import { EncounterConditionValueUpsertWithWhereUniqueWithoutConditionInput } from "../inputs/EncounterConditionValueUpsertWithWhereUniqueWithoutConditionInput";
import { EncounterConditionValueWhereUniqueInput } from "../inputs/EncounterConditionValueWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueUpdateManyWithoutConditionNestedInput", {})
export class EncounterConditionValueUpdateManyWithoutConditionNestedInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValueCreateWithoutConditionInput], {
    nullable: true
  })
  create?: EncounterConditionValueCreateWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueCreateOrConnectWithoutConditionInput], {
    nullable: true
  })
  connectOrCreate?: EncounterConditionValueCreateOrConnectWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueUpsertWithWhereUniqueWithoutConditionInput], {
    nullable: true
  })
  upsert?: EncounterConditionValueUpsertWithWhereUniqueWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueCreateManyConditionInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterConditionValueCreateManyConditionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueWhereUniqueInput], {
    nullable: true
  })
  set?: EncounterConditionValueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EncounterConditionValueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueWhereUniqueInput], {
    nullable: true
  })
  delete?: EncounterConditionValueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterConditionValueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueUpdateWithWhereUniqueWithoutConditionInput], {
    nullable: true
  })
  update?: EncounterConditionValueUpdateWithWhereUniqueWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueUpdateManyWithWhereWithoutConditionInput], {
    nullable: true
  })
  updateMany?: EncounterConditionValueUpdateManyWithWhereWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncounterConditionValueScalarWhereInput[] | undefined;
}
