import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersCreateManyEncounterSlotInputEnvelope } from "../inputs/EncountersCreateManyEncounterSlotInputEnvelope";
import { EncountersCreateOrConnectWithoutEncounterSlotInput } from "../inputs/EncountersCreateOrConnectWithoutEncounterSlotInput";
import { EncountersCreateWithoutEncounterSlotInput } from "../inputs/EncountersCreateWithoutEncounterSlotInput";
import { EncountersWhereUniqueInput } from "../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.InputType("EncountersCreateNestedManyWithoutEncounterSlotInput", {})
export class EncountersCreateNestedManyWithoutEncounterSlotInput {
  @TypeGraphQL.Field(_type => [EncountersCreateWithoutEncounterSlotInput], {
    nullable: true
  })
  create?: EncountersCreateWithoutEncounterSlotInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersCreateOrConnectWithoutEncounterSlotInput], {
    nullable: true
  })
  connectOrCreate?: EncountersCreateOrConnectWithoutEncounterSlotInput[] | undefined;

  @TypeGraphQL.Field(_type => EncountersCreateManyEncounterSlotInputEnvelope, {
    nullable: true
  })
  createMany?: EncountersCreateManyEncounterSlotInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EncountersWhereUniqueInput], {
    nullable: true
  })
  connect?: EncountersWhereUniqueInput[] | undefined;
}
