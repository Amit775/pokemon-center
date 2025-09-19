import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateManyEncounterMethodInputEnvelope } from "../inputs/EncounterSlotCreateManyEncounterMethodInputEnvelope";
import { EncounterSlotCreateOrConnectWithoutEncounterMethodInput } from "../inputs/EncounterSlotCreateOrConnectWithoutEncounterMethodInput";
import { EncounterSlotCreateWithoutEncounterMethodInput } from "../inputs/EncounterSlotCreateWithoutEncounterMethodInput";
import { EncounterSlotWhereUniqueInput } from "../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotCreateNestedManyWithoutEncounterMethodInput", {})
export class EncounterSlotCreateNestedManyWithoutEncounterMethodInput {
  @TypeGraphQL.Field(_type => [EncounterSlotCreateWithoutEncounterMethodInput], {
    nullable: true
  })
  create?: EncounterSlotCreateWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotCreateOrConnectWithoutEncounterMethodInput], {
    nullable: true
  })
  connectOrCreate?: EncounterSlotCreateOrConnectWithoutEncounterMethodInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotCreateManyEncounterMethodInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterSlotCreateManyEncounterMethodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterSlotWhereUniqueInput[] | undefined;
}
