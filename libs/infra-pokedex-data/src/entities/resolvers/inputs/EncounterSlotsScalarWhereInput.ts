import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("EncounterSlotsScalarWhereInput", {})
export class EncounterSlotsScalarWhereInput {
  @TypeGraphQL.Field(_type => [EncounterSlotsScalarWhereInput], {
    nullable: true
  })
  AND?: EncounterSlotsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsScalarWhereInput], {
    nullable: true
  })
  OR?: EncounterSlotsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterSlotsScalarWhereInput], {
    nullable: true
  })
  NOT?: EncounterSlotsScalarWhereInput[] | undefined;

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
