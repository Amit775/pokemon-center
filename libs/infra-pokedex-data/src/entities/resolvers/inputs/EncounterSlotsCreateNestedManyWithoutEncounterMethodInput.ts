import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCreateManyEncounterMethodInputEnvelope } from "../inputs/EncounterSlotsCreateManyEncounterMethodInputEnvelope";
import { EncounterSlotsCreateOrConnectWithoutEncounterMethodInput } from "../inputs/EncounterSlotsCreateOrConnectWithoutEncounterMethodInput";
import { EncounterSlotsCreateWithoutEncounterMethodInput } from "../inputs/EncounterSlotsCreateWithoutEncounterMethodInput";
import { EncounterSlotsWhereUniqueInput } from "../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotsCreateNestedManyWithoutEncounterMethodInput", {})
export class EncounterSlotsCreateNestedManyWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => [EncounterSlotsCreateWithoutEncounterMethodInput], {
    nullable: true
  })
  create?: EncounterSlotsCreateWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsCreateOrConnectWithoutEncounterMethodInput], {
    nullable: true
  })
  connectOrCreate?: EncounterSlotsCreateOrConnectWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsCreateManyEncounterMethodInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterSlotsCreateManyEncounterMethodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterSlotsWhereUniqueInput[] | undefined;
}
