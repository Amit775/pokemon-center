import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsCreateManyVersionGroupInputEnvelope } from "../inputs/EncounterSlotsCreateManyVersionGroupInputEnvelope";
import { EncounterSlotsCreateOrConnectWithoutVersionGroupInput } from "../inputs/EncounterSlotsCreateOrConnectWithoutVersionGroupInput";
import { EncounterSlotsCreateWithoutVersionGroupInput } from "../inputs/EncounterSlotsCreateWithoutVersionGroupInput";
import { EncounterSlotsWhereUniqueInput } from "../inputs/EncounterSlotsWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotsCreateNestedManyWithoutVersionGroupInput", {})
export class EncounterSlotsCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [EncounterSlotsCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: EncounterSlotsCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: EncounterSlotsCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterSlotsCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterSlotsWhereUniqueInput[] | undefined;
}
