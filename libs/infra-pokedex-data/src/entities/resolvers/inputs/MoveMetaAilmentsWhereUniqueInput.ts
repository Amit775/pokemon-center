import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaAilmentsWhereInput } from "../inputs/MoveMetaAilmentsWhereInput";
import { MoveMetaListRelationFilter } from "../inputs/MoveMetaListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MoveMetaAilmentsWhereUniqueInput", {})
export class MoveMetaAilmentsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentsWhereInput], {
    nullable: true
  })
  AND?: MoveMetaAilmentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentsWhereInput], {
    nullable: true
  })
  OR?: MoveMetaAilmentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveMetaAilmentsWhereInput], {
    nullable: true
  })
  NOT?: MoveMetaAilmentsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MoveMetaListRelationFilter, {
    nullable: true
  })
  meta?: MoveMetaListRelationFilter | undefined;
}
