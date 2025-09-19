import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("EncounterSlotScalarWhereInput", {})
export class EncounterSlotScalarWhereInput {
  @TypeGraphQL.Field(_type => [EncounterSlotScalarWhereInput], {
    nullable: true
  })
  AND?: EncounterSlotScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotScalarWhereInput], {
    nullable: true
  })
  OR?: EncounterSlotScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotScalarWhereInput], {
    nullable: true
  })
  NOT?: EncounterSlotScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  encounter_method_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  slot?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rarity?: IntFilter | undefined;
}
