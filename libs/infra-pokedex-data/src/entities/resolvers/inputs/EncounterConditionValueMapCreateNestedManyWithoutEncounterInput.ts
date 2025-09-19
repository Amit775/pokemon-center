import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapCreateManyEncounterInputEnvelope } from "../inputs/EncounterConditionValueMapCreateManyEncounterInputEnvelope";
import { EncounterConditionValueMapCreateOrConnectWithoutEncounterInput } from "../inputs/EncounterConditionValueMapCreateOrConnectWithoutEncounterInput";
import { EncounterConditionValueMapCreateWithoutEncounterInput } from "../inputs/EncounterConditionValueMapCreateWithoutEncounterInput";
import { EncounterConditionValueMapWhereUniqueInput } from "../inputs/EncounterConditionValueMapWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueMapCreateNestedManyWithoutEncounterInput", {})
export class EncounterConditionValueMapCreateNestedManyWithoutEncounterInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValueMapCreateWithoutEncounterInput], {
    nullable: true
  })
  create?: EncounterConditionValueMapCreateWithoutEncounterInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapCreateOrConnectWithoutEncounterInput], {
    nullable: true
  })
  connectOrCreate?: EncounterConditionValueMapCreateOrConnectWithoutEncounterInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapCreateManyEncounterInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterConditionValueMapCreateManyEncounterInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterConditionValueMapWhereUniqueInput[] | undefined;
}
