import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodCreateOrConnectWithoutSlotsInput } from "../inputs/EncounterMethodCreateOrConnectWithoutSlotsInput";
import { EncounterMethodCreateWithoutSlotsInput } from "../inputs/EncounterMethodCreateWithoutSlotsInput";
import { EncounterMethodWhereUniqueInput } from "../inputs/EncounterMethodWhereUniqueInput";

@TypeGraphQL.InputType("EncounterMethodCreateNestedOneWithoutSlotsInput", {})
export class EncounterMethodCreateNestedOneWithoutSlotsInput {
  @TypeGraphQL.Field(_type => EncounterMethodCreateWithoutSlotsInput, {
    nullable: true
  })
  create?: EncounterMethodCreateWithoutSlotsInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodCreateOrConnectWithoutSlotsInput, {
    nullable: true
  })
  connectOrCreate?: EncounterMethodCreateOrConnectWithoutSlotsInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterMethodWhereUniqueInput | undefined;
}
