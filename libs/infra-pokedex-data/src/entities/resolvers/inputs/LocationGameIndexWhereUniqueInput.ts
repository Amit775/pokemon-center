import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationRelationFilter } from "../inputs/GenerationRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationGameIndexWhereInput } from "../inputs/LocationGameIndexWhereInput";
import { LocationGameIndicesLocation_idGeneration_idCompoundUniqueInput } from "../inputs/LocationGameIndicesLocation_idGeneration_idCompoundUniqueInput";
import { LocationRelationFilter } from "../inputs/LocationRelationFilter";

@TypeGraphQL.InputType("LocationGameIndexWhereUniqueInput", {})
export class LocationGameIndexWhereUniqueInput {
  @TypeGraphQL.Field(_type => LocationGameIndicesLocation_idGeneration_idCompoundUniqueInput, {
    nullable: true
  })
  location_id_generation_id?: LocationGameIndicesLocation_idGeneration_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexWhereInput], {
    nullable: true
  })
  AND?: LocationGameIndexWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexWhereInput], {
    nullable: true
  })
  OR?: LocationGameIndexWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexWhereInput], {
    nullable: true
  })
  NOT?: LocationGameIndexWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  location_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => LocationRelationFilter, {
    nullable: true
  })
  location?: LocationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationRelationFilter, {
    nullable: true
  })
  generation?: GenerationRelationFilter | undefined;
}
