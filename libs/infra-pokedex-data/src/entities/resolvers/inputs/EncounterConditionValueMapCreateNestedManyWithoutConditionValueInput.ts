import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterConditionValueMapCreateManyConditionValueInputEnvelope } from "../inputs/EncounterConditionValueMapCreateManyConditionValueInputEnvelope";
import { EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput } from "../inputs/EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput";
import { EncounterConditionValueMapCreateWithoutConditionValueInput } from "../inputs/EncounterConditionValueMapCreateWithoutConditionValueInput";
import { EncounterConditionValueMapWhereUniqueInput } from "../inputs/EncounterConditionValueMapWhereUniqueInput";

@TypeGraphQL.InputType("EncounterConditionValueMapCreateNestedManyWithoutConditionValueInput", {})
export class EncounterConditionValueMapCreateNestedManyWithoutConditionValueInput {
  @TypeGraphQL.Field(_type => [EncounterConditionValueMapCreateWithoutConditionValueInput], {
    nullable: true
  })
  create?: EncounterConditionValueMapCreateWithoutConditionValueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput], {
    nullable: true
  })
  connectOrCreate?: EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterConditionValueMapCreateManyConditionValueInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterConditionValueMapCreateManyConditionValueInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterConditionValueMapWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterConditionValueMapWhereUniqueInput[] | undefined;
}
