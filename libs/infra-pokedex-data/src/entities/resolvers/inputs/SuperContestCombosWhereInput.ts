import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MovesRelationFilter } from "../inputs/MovesRelationFilter";

@TypeGraphQL.InputType("SuperContestCombosWhereInput", {})
export class SuperContestCombosWhereInput {
  @TypeGraphQL.Field(_type => [SuperContestCombosWhereInput], {
    nullable: true
  })
  AND?: SuperContestCombosWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosWhereInput], {
    nullable: true
  })
  OR?: SuperContestCombosWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestCombosWhereInput], {
    nullable: true
  })
  NOT?: SuperContestCombosWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  first_move_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  second_move_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MovesRelationFilter, {
    nullable: true
  })
  firstMove?: MovesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovesRelationFilter, {
    nullable: true
  })
  secondMove?: MovesRelationFilter | undefined;
}
