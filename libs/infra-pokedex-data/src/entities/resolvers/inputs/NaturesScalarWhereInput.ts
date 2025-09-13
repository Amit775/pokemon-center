import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("NaturesScalarWhereInput", {})
export class NaturesScalarWhereInput {
  @TypeGraphQL.Field(_type => [NaturesScalarWhereInput], {
    nullable: true
  })
  AND?: NaturesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesScalarWhereInput], {
    nullable: true
  })
  OR?: NaturesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NaturesScalarWhereInput], {
    nullable: true
  })
  NOT?: NaturesScalarWhereInput[] | undefined;

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
