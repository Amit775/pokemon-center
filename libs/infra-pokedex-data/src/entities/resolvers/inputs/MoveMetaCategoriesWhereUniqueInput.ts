import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoriesWhereInput } from "../inputs/MoveMetaCategoriesWhereInput";
import { MoveMetaListRelationFilter } from "../inputs/MoveMetaListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MoveMetaCategoriesWhereUniqueInput", {})
export class MoveMetaCategoriesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoriesWhereInput], {
    nullable: true
  })
  AND?: MoveMetaCategoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoriesWhereInput], {
    nullable: true
  })
  OR?: MoveMetaCategoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoriesWhereInput], {
    nullable: true
  })
  NOT?: MoveMetaCategoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MoveMetaListRelationFilter, {
    nullable: true
  })
  meta?: MoveMetaListRelationFilter | undefined;
}
