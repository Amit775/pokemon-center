import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodCreateWithoutSlotsInput } from "../inputs/EncounterMethodCreateWithoutSlotsInput";
import { EncounterMethodUpdateWithoutSlotsInput } from "../inputs/EncounterMethodUpdateWithoutSlotsInput";
import { EncounterMethodWhereInput } from "../inputs/EncounterMethodWhereInput";

@TypeGraphQL.InputType("EncounterMethodUpsertWithoutSlotsInput", {})
export class EncounterMethodUpsertWithoutSlotsInput {
  @TypeGraphQL.Field(_type => EncounterMethodUpdateWithoutSlotsInput, {
    nullable: false
  })
  update!: EncounterMethodUpdateWithoutSlotsInput;

  @TypeGraphQL.Field(_type => EncounterMethodCreateWithoutSlotsInput, {
    nullable: false
  })
  create!: EncounterMethodCreateWithoutSlotsInput;

  @TypeGraphQL.Field(_type => EncounterMethodWhereInput, {
    nullable: true
  })
  where?: EncounterMethodWhereInput | undefined;
}
