import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateOrConnectWithoutEncountersInput } from "../inputs/EncounterSlotCreateOrConnectWithoutEncountersInput";
import { EncounterSlotCreateWithoutEncountersInput } from "../inputs/EncounterSlotCreateWithoutEncountersInput";
import { EncounterSlotWhereUniqueInput } from "../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotCreateNestedOneWithoutEncountersInput", {})
export class EncounterSlotCreateNestedOneWithoutEncountersInput {
  @TypeGraphQL.Field(_type => EncounterSlotCreateWithoutEncountersInput, {
    nullable: true
  })
  create?: EncounterSlotCreateWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotCreateOrConnectWithoutEncountersInput, {
    nullable: true
  })
  connectOrCreate?: EncounterSlotCreateOrConnectWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterSlotWhereUniqueInput | undefined;
}
