import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("LocationGameIndexScalarWhereInput", {})
export class LocationGameIndexScalarWhereInput {
  @TypeGraphQL.Field(_type => [LocationGameIndexScalarWhereInput], {
    nullable: true
  })
  AND?: LocationGameIndexScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexScalarWhereInput], {
    nullable: true
  })
  OR?: LocationGameIndexScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexScalarWhereInput], {
    nullable: true
  })
  NOT?: LocationGameIndexScalarWhereInput[] | undefined;

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
