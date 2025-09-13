import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("LocationGameIndicesScalarWhereInput", {})
export class LocationGameIndicesScalarWhereInput {
  @TypeGraphQL.Field(_type => [LocationGameIndicesScalarWhereInput], {
    nullable: true
  })
  AND?: LocationGameIndicesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesScalarWhereInput], {
    nullable: true
  })
  OR?: LocationGameIndicesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesScalarWhereInput], {
    nullable: true
  })
  NOT?: LocationGameIndicesScalarWhereInput[] | undefined;

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
}
