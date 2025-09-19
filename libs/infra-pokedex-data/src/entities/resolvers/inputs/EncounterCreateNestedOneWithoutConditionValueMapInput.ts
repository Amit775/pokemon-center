import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateOrConnectWithoutConditionValueMapInput } from "../inputs/EncounterCreateOrConnectWithoutConditionValueMapInput";
import { EncounterCreateWithoutConditionValueMapInput } from "../inputs/EncounterCreateWithoutConditionValueMapInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterCreateNestedOneWithoutConditionValueMapInput", {})
export class EncounterCreateNestedOneWithoutConditionValueMapInput {
  @TypeGraphQL.Field(_type => EncounterCreateWithoutConditionValueMapInput, {
    nullable: true
  })
  create?: EncounterCreateWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterCreateOrConnectWithoutConditionValueMapInput, {
    nullable: true
  })
  connectOrCreate?: EncounterCreateOrConnectWithoutConditionValueMapInput | undefined;

  @TypeGraphQL.Field(_type => EncounterWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterWhereUniqueInput | undefined;
}
