import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetsWhereInput } from "../inputs/MoveTargetsWhereInput";
import { MovesListRelationFilter } from "../inputs/MovesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MoveTargetsWhereUniqueInput", {})
export class MoveTargetsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetsWhereInput], {
    nullable: true
  })
  AND?: MoveTargetsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetsWhereInput], {
    nullable: true
  })
  OR?: MoveTargetsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetsWhereInput], {
    nullable: true
  })
  NOT?: MoveTargetsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MovesListRelationFilter, {
    nullable: true
  })
  moves?: MovesListRelationFilter | undefined;
}
