import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodCreateWithoutSlotsInput } from "../inputs/EncounterMethodCreateWithoutSlotsInput";
import { EncounterMethodWhereUniqueInput } from "../inputs/EncounterMethodWhereUniqueInput";

@TypeGraphQL.InputType("EncounterMethodCreateOrConnectWithoutSlotsInput", {})
export class EncounterMethodCreateOrConnectWithoutSlotsInput {
  @TypeGraphQL.Field(_type => EncounterMethodWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterMethodWhereUniqueInput;

  @TypeGraphQL.Field(_type => EncounterMethodCreateWithoutSlotsInput, {
    nullable: false
  })
  create!: EncounterMethodCreateWithoutSlotsInput;
}
