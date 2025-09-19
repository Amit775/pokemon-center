import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodUpdateWithoutSlotsInput } from "../inputs/EncounterMethodUpdateWithoutSlotsInput";
import { EncounterMethodWhereInput } from "../inputs/EncounterMethodWhereInput";

@TypeGraphQL.InputType("EncounterMethodUpdateToOneWithWhereWithoutSlotsInput", {})
export class EncounterMethodUpdateToOneWithWhereWithoutSlotsInput {
  @TypeGraphQL.Field(_type => EncounterMethodWhereInput, {
    nullable: true
  })
  where?: EncounterMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodUpdateWithoutSlotsInput, {
    nullable: false
  })
  data!: EncounterMethodUpdateWithoutSlotsInput;
}
