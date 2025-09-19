import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MoveRelationFilter } from "../inputs/MoveRelationFilter";

@TypeGraphQL.InputType("ContestComboWhereInput", {})
export class ContestComboWhereInput {
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
  first_move_id?: IntFilter | undefined;

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
