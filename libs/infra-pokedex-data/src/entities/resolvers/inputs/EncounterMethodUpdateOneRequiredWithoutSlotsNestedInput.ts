import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterMethodCreateOrConnectWithoutSlotsInput } from "../inputs/EncounterMethodCreateOrConnectWithoutSlotsInput";
import { EncounterMethodCreateWithoutSlotsInput } from "../inputs/EncounterMethodCreateWithoutSlotsInput";
import { EncounterMethodUpdateToOneWithWhereWithoutSlotsInput } from "../inputs/EncounterMethodUpdateToOneWithWhereWithoutSlotsInput";
import { EncounterMethodUpsertWithoutSlotsInput } from "../inputs/EncounterMethodUpsertWithoutSlotsInput";
import { EncounterMethodWhereUniqueInput } from "../inputs/EncounterMethodWhereUniqueInput";

@TypeGraphQL.InputType("EncounterMethodUpdateOneRequiredWithoutSlotsNestedInput", {})
export class EncounterMethodUpdateOneRequiredWithoutSlotsNestedInput {
  @TypeGraphQL.Field(_type => EncounterMethodCreateWithoutSlotsInput, {
    nullable: true
  })
  create?: EncounterMethodCreateWithoutSlotsInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodCreateOrConnectWithoutSlotsInput, {
    nullable: true
  })
  connectOrCreate?: EncounterMethodCreateOrConnectWithoutSlotsInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodUpsertWithoutSlotsInput, {
    nullable: true
  })
  upsert?: EncounterMethodUpsertWithoutSlotsInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodWhereUniqueInput, {
    nullable: true
  })
  connect?: EncounterMethodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EncounterMethodUpdateToOneWithWhereWithoutSlotsInput, {
    nullable: true
  })
  update?: EncounterMethodUpdateToOneWithWhereWithoutSlotsInput | undefined;
}
