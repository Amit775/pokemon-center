import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("EncountersScalarWhereInput", {})
export class EncountersScalarWhereInput {
  @TypeGraphQL.Field(_type => [EncountersScalarWhereInput], {
    nullable: true
  })
  AND?: EncountersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersScalarWhereInput], {
    nullable: true
  })
  OR?: EncountersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EncountersScalarWhereInput], {
    nullable: true
  })
  NOT?: EncountersScalarWhereInput[] | undefined;

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
