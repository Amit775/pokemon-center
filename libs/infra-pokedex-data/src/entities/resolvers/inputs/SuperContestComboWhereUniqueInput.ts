import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MoveRelationFilter } from "../inputs/MoveRelationFilter";
import { SuperContestComboWhereInput } from "../inputs/SuperContestComboWhereInput";

@TypeGraphQL.InputType("SuperContestComboWhereUniqueInput", {})
export class SuperContestComboWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  first_move_id?: number | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboWhereInput], {
    nullable: true
  })
  AND?: SuperContestComboWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboWhereInput], {
    nullable: true
  })
  OR?: SuperContestComboWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestComboWhereInput], {
    nullable: true
  })
  NOT?: SuperContestComboWhereInput[] | undefined;

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
