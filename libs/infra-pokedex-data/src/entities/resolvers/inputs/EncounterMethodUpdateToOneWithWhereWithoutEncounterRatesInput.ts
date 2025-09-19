import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodUpdateWithoutEncounterRatesInput } from "../inputs/EncounterMethodUpdateWithoutEncounterRatesInput";
import { EncounterMethodWhereInput } from "../inputs/EncounterMethodWhereInput";

@TypeGraphQL.InputType("EncounterMethodUpdateToOneWithWhereWithoutEncounterRatesInput", {})
export class EncounterMethodUpdateToOneWithWhereWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => EncounterMethodWhereInput, {
    nullable: true
  })
  where?: EncounterMethodWhereInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodUpdateWithoutEncounterRatesInput, {
    nullable: false
  })
  data!: EncounterMethodUpdateWithoutEncounterRatesInput;
}
