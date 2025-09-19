import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboWhereInput } from "../inputs/ContestComboWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { MoveRelationFilter } from "../inputs/MoveRelationFilter";

@TypeGraphQL.InputType("ContestComboWhereUniqueInput", {})
export class ContestComboWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  first_move_id?: number | undefined;

  @TypeGraphQL.Field(_type => [ContestComboWhereInput], {
    nullable: true
  })
  AND?: ContestComboWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboWhereInput], {
    nullable: true
  })
  OR?: ContestComboWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestComboWhereInput], {
    nullable: true
  })
  NOT?: ContestComboWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  second_move_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MoveRelationFilter, {
    nullable: true
  })
  firstMove?: MoveRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MoveRelationFilter, {
    nullable: true
  })
  secondMove?: MoveRelationFilter | undefined;
}
