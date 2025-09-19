import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotCreateOrConnectWithoutEncountersInput } from "../inputs/EncounterSlotCreateOrConnectWithoutEncountersInput";
import { EncounterSlotCreateWithoutEncountersInput } from "../inputs/EncounterSlotCreateWithoutEncountersInput";
import { EncounterSlotUpdateToOneWithWhereWithoutEncountersInput } from "../inputs/EncounterSlotUpdateToOneWithWhereWithoutEncountersInput";
import { EncounterSlotUpsertWithoutEncountersInput } from "../inputs/EncounterSlotUpsertWithoutEncountersInput";
import { EncounterSlotWhereUniqueInput } from "../inputs/EncounterSlotWhereUniqueInput";

@TypeGraphQL.InputType("EncounterSlotUpdateOneRequiredWithoutEncountersNestedInput", {})
export class EncounterSlotUpdateOneRequiredWithoutEncountersNestedInput {
  @TypeGraphQL.Field(_type => EncounterSlotCreateWithoutEncountersInput, {
    nullable: true
  })
  create?: EncounterSlotCreateWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotCreateOrConnectWithoutEncountersInput, {
    nullable: true
  })
  connectOrCreate?: EncounterSlotCreateOrConnectWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotUpsertWithoutEncountersInput, {
    nullable: true
  })
  upsert?: EncounterSlotUpsertWithoutEncountersInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterSlotWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotUpdateToOneWithWhereWithoutEncountersInput, {
    nullable: true
  })
  update?: EncounterSlotUpdateToOneWithWhereWithoutEncountersInput | undefined;
}
