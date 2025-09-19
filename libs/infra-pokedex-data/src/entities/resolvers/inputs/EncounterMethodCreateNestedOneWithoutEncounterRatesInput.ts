import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodCreateOrConnectWithoutEncounterRatesInput } from "../inputs/EncounterMethodCreateOrConnectWithoutEncounterRatesInput";
import { EncounterMethodCreateWithoutEncounterRatesInput } from "../inputs/EncounterMethodCreateWithoutEncounterRatesInput";
import { EncounterMethodWhereUniqueInput } from "../inputs/EncounterMethodWhereUniqueInput";

@TypeGraphQL.InputType("EncounterMethodCreateNestedOneWithoutEncounterRatesInput", {})
export class EncounterMethodCreateNestedOneWithoutEncounterRatesInput {
  @TypeGraphQL.Field(_type => EncounterMethodCreateWithoutEncounterRatesInput, {
    nullable: true
  })
  create?: EncounterMethodCreateWithoutEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodCreateOrConnectWithoutEncounterRatesInput, {
    nullable: true
  })
  connectOrCreate?: EncounterMethodCreateOrConnectWithoutEncounterRatesInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterMethodWhereUniqueInput | undefined;
}
