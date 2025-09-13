import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCreateOrConnectWithoutEncountersInput } from "../inputs/EncounterSlotsCreateOrConnectWithoutEncountersInput";
import { EncounterSlotsCreateWithoutEncountersInput } from "../inputs/EncounterSlotsCreateWithoutEncountersInput";
import { EncounterSlotsWhereUniqueInput } from "../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotsCreateNestedOneWithoutEncountersInput", {})
export class EncounterSlotsCreateNestedOneWithoutEncountersInput {
  @TypeGraphQL.Field(_type => EncounterSlotsCreateWithoutEncountersInput, {
    nullable: true
  })
  create?: EncounterSlotsCreateWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsCreateOrConnectWithoutEncountersInput, {
    nullable: true
  })
  connectOrCreate?: EncounterSlotsCreateOrConnectWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterSlotsWhereUniqueInput | undefined;
}
