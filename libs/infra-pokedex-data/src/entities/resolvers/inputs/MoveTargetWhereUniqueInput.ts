import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveListRelationFilter } from "../inputs/MoveListRelationFilter";
import { MoveTargetWhereInput } from "../inputs/MoveTargetWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MoveTargetWhereUniqueInput", {})
export class MoveTargetWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetWhereInput], {
    nullable: true
  })
  AND?: MoveTargetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetWhereInput], {
    nullable: true
  })
  OR?: MoveTargetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetWhereInput], {
    nullable: true
  })
  NOT?: MoveTargetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MoveListRelationFilter, {
    nullable: true
  })
  moves?: MoveListRelationFilter | undefined;
}
