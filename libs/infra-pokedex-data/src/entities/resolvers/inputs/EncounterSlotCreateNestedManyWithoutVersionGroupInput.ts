import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateManyVersionGroupInputEnvelope } from "../inputs/EncounterSlotCreateManyVersionGroupInputEnvelope";
import { EncounterSlotCreateOrConnectWithoutVersionGroupInput } from "../inputs/EncounterSlotCreateOrConnectWithoutVersionGroupInput";
import { EncounterSlotCreateWithoutVersionGroupInput } from "../inputs/EncounterSlotCreateWithoutVersionGroupInput";
import { EncounterSlotWhereUniqueInput } from "../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotCreateNestedManyWithoutVersionGroupInput", {})
export class EncounterSlotCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [EncounterSlotCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: EncounterSlotCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: EncounterSlotCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterSlotCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterSlotWhereUniqueInput[] | undefined;
}
