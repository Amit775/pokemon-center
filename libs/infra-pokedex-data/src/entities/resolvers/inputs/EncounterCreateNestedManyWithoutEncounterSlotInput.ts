import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterCreateManyEncounterSlotInputEnvelope } from "../inputs/EncounterCreateManyEncounterSlotInputEnvelope";
import { EncounterCreateOrConnectWithoutEncounterSlotInput } from "../inputs/EncounterCreateOrConnectWithoutEncounterSlotInput";
import { EncounterCreateWithoutEncounterSlotInput } from "../inputs/EncounterCreateWithoutEncounterSlotInput";
import { EncounterWhereUniqueInput } from "../inputs/EncounterWhereUniqueInput";

@TypeGraphQL.InputType("EncounterCreateNestedManyWithoutEncounterSlotInput", {})
export class EncounterCreateNestedManyWithoutEncounterSlotInput {
  @TypeGraphQL.Field(_type => [EncounterCreateWithoutEncounterSlotInput], {
    nullable: true
  })
  create?: EncounterCreateWithoutEncounterSlotInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterCreateOrConnectWithoutEncounterSlotInput], {
    nullable: true
  })
  connectOrCreate?: EncounterCreateOrConnectWithoutEncounterSlotInput[] | undefined;

  @TypeGraphQL.Field(_type => EncounterCreateManyEncounterSlotInputEnvelope, {
    nullable: true
  })
  createMany?: EncounterCreateManyEncounterSlotInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncounterWhereUniqueInput], {
    nullable: true
  })
  connect?: EncounterWhereUniqueInput[] | undefined;
}
