import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsRelationFilter } from "../inputs/GenerationsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LocationsRelationFilter } from "../inputs/LocationsRelationFilter";

@TypeGraphQL.InputType("LocationGameIndicesWhereInput", {})
export class LocationGameIndicesWhereInput {
  @TypeGraphQL.Field(_type => [LocationGameIndicesWhereInput], {
    nullable: true
  })
  AND?: LocationGameIndicesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesWhereInput], {
    nullable: true
  })
  OR?: LocationGameIndicesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesWhereInput], {
    nullable: true
  })
  NOT?: LocationGameIndicesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => LocationsRelationFilter, {
    nullable: true
  })
  location?: LocationsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationsRelationFilter, {
    nullable: true
  })
  generation?: GenerationsRelationFilter | undefined;
}
