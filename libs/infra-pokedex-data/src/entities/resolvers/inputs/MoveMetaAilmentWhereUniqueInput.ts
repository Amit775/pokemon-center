import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentWhereInput } from "../inputs/MoveMetaAilmentWhereInput";
import { MoveMetaListRelationFilter } from "../inputs/MoveMetaListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MoveMetaAilmentWhereUniqueInput", {})
export class MoveMetaAilmentWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentWhereInput], {
    nullable: true
  })
  AND?: MoveMetaAilmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentWhereInput], {
    nullable: true
  })
  OR?: MoveMetaAilmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentWhereInput], {
    nullable: true
  })
  NOT?: MoveMetaAilmentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MoveMetaListRelationFilter, {
    nullable: true
  })
  meta?: MoveMetaListRelationFilter | undefined;
}
