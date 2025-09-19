import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoryWhereInput } from "../inputs/MoveMetaCategoryWhereInput";
import { MoveMetaListRelationFilter } from "../inputs/MoveMetaListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MoveMetaCategoryWhereUniqueInput", {})
export class MoveMetaCategoryWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoryWhereInput], {
    nullable: true
  })
  AND?: MoveMetaCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoryWhereInput], {
    nullable: true
  })
  OR?: MoveMetaCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaCategoryWhereInput], {
    nullable: true
  })
  NOT?: MoveMetaCategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MoveMetaListRelationFilter, {
    nullable: true
  })
  meta?: MoveMetaListRelationFilter | undefined;
}
