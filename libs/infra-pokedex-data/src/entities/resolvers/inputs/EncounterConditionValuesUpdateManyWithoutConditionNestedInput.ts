import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValuesCreateManyConditionInputEnvelope } from "../inputs/EncounterConditionValuesCreateManyConditionInputEnvelope";
import { EncounterConditionValuesCreateOrConnectWithoutConditionInput } from "../inputs/EncounterConditionValuesCreateOrConnectWithoutConditionInput";
import { EncounterConditionValuesCreateWithoutConditionInput } from "../inputs/EncounterConditionValuesCreateWithoutConditionInput";
import { EncounterConditionValuesScalarWhereInput } from "../inputs/EncounterConditionValuesScalarWhereInput";
import { EncounterConditionValuesUpdateManyWithWhereWithoutConditionInput } from "../inputs/EncounterConditionValuesUpdateManyWithWhereWithoutConditionInput";
import { EncounterConditionValuesUpdateWithWhereUniqueWithoutConditionInput } from "../inputs/EncounterConditionValuesUpdateWithWhereUniqueWithoutConditionInput";
import { EncounterConditionValuesUpsertWithWhereUniqueWithoutConditionInput } from "../inputs/EncounterConditionValuesUpsertWithWhereUniqueWithoutConditionInput";
import { EncounterConditionValuesWhereUniqueInput } from "../inputs/EncounterConditionValuesWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValuesUpdateManyWithoutConditionNestedInput", {})
export class EncounterConditionValuesUpdateManyWithoutConditionNestedInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValuesCreateWithoutConditionInput], {
    nullable: true
  })
  create?: EncounterConditionValuesCreateWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesCreateOrConnectWithoutConditionInput], {
    nullable: true
  })
  connectOrCreate?: EncounterConditionValuesCreateOrConnectWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesUpsertWithWhereUniqueWithoutConditionInput], {
    nullable: true
  })
  upsert?: EncounterConditionValuesUpsertWithWhereUniqueWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValuesCreateManyConditionInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterConditionValuesCreateManyConditionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesWhereUniqueInput], {
    nullable: true
  })
  set?: EncounterConditionValuesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EncounterConditionValuesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesWhereUniqueInput], {
    nullable: true
  })
  delete?: EncounterConditionValuesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterConditionValuesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesUpdateWithWhereUniqueWithoutConditionInput], {
    nullable: true
  })
  update?: EncounterConditionValuesUpdateWithWhereUniqueWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesUpdateManyWithWhereWithoutConditionInput], {
    nullable: true
  })
  updateMany?: EncounterConditionValuesUpdateManyWithWhereWithoutConditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValuesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncounterConditionValuesScalarWhereInput[] | undefined;
}
