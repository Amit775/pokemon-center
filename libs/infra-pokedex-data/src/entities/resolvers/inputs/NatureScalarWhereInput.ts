import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("NatureScalarWhereInput", {})
export class NatureScalarWhereInput {
  @TypeGraphQL.Field(_type => [NatureScalarWhereInput], {
    nullable: true
  })
  AND?: NatureScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureScalarWhereInput], {
    nullable: true
  })
  OR?: NatureScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NatureScalarWhereInput], {
    nullable: true
  })
  NOT?: NatureScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  decreased_stat_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  increased_stat_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  hates_flavor_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  likes_flavor_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;
}
