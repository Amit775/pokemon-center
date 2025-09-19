import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MoveFlagMapWhereInput } from "../inputs/MoveFlagMapWhereInput";
import { MoveFlagRelationFilter } from "../inputs/MoveFlagRelationFilter";
import { MoveRelationFilter } from "../inputs/MoveRelationFilter";

@TypeGraphQL.InputType("MoveFlagMapWhereUniqueInput", {})
export class MoveFlagMapWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  move_id?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapWhereInput], {
    nullable: true
  })
  AND?: MoveFlagMapWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapWhereInput], {
    nullable: true
  })
  OR?: MoveFlagMapWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveFlagMapWhereInput], {
    nullable: true
  })
  NOT?: MoveFlagMapWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  move_flag_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MoveRelationFilter, {
    nullable: true
  })
  move?: MoveRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveFlagRelationFilter, {
    nullable: true
  })
  flag?: MoveFlagRelationFilter | undefined;
}
