import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("EncounterScalarWhereInput", {})
export class EncounterScalarWhereInput {
  @TypeGraphQL.Field(_type => [EncounterScalarWhereInput], {
    nullable: true
  })
  AND?: EncounterScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterScalarWhereInput], {
    nullable: true
  })
  OR?: EncounterScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncounterScalarWhereInput], {
    nullable: true
  })
  NOT?: EncounterScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  location_area_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  encounter_slot_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemon_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  min_level?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  max_level?: IntFilter | undefined;
}
