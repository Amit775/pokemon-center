import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapCreateManyConditionValueInputEnvelope } from "../inputs/EncounterConditionValueMapCreateManyConditionValueInputEnvelope";
import { EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput } from "../inputs/EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput";
import { EncounterConditionValueMapCreateWithoutConditionValueInput } from "../inputs/EncounterConditionValueMapCreateWithoutConditionValueInput";
import { EncounterConditionValueMapScalarWhereInput } from "../inputs/EncounterConditionValueMapScalarWhereInput";
import { EncounterConditionValueMapUpdateManyWithWhereWithoutConditionValueInput } from "../inputs/EncounterConditionValueMapUpdateManyWithWhereWithoutConditionValueInput";
import { EncounterConditionValueMapUpdateWithWhereUniqueWithoutConditionValueInput } from "../inputs/EncounterConditionValueMapUpdateWithWhereUniqueWithoutConditionValueInput";
import { EncounterConditionValueMapUpsertWithWhereUniqueWithoutConditionValueInput } from "../inputs/EncounterConditionValueMapUpsertWithWhereUniqueWithoutConditionValueInput";
import { EncounterConditionValueMapWhereUniqueInput } from "../inputs/EncounterConditionValueMapWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueMapUpdateManyWithoutConditionValueNestedInput", {})
export class EncounterConditionValueMapUpdateManyWithoutConditionValueNestedInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValueMapCreateWithoutConditionValueInput], {
    nullable: true
  })
  create?: EncounterConditionValueMapCreateWithoutConditionValueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput], {
    nullable: true
  })
  connectOrCreate?: EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapUpsertWithWhereUniqueWithoutConditionValueInput], {
    nullable: true
  })
  upsert?: EncounterConditionValueMapUpsertWithWhereUniqueWithoutConditionValueInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapCreateManyConditionValueInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterConditionValueMapCreateManyConditionValueInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapWhereUniqueInput], {
    nullable: true
  })
  set?: EncounterConditionValueMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EncounterConditionValueMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapWhereUniqueInput], {
    nullable: true
  })
  delete?: EncounterConditionValueMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterConditionValueMapWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapUpdateWithWhereUniqueWithoutConditionValueInput], {
    nullable: true
  })
  update?: EncounterConditionValueMapUpdateWithWhereUniqueWithoutConditionValueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapUpdateManyWithWhereWithoutConditionValueInput], {
    nullable: true
  })
  updateMany?: EncounterConditionValueMapUpdateManyWithWhereWithoutConditionValueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EncounterConditionValueMapScalarWhereInput[] | undefined;
}
