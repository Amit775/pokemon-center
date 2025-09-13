import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MovesRelationFilter } from "../inputs/MovesRelationFilter";

@TypeGraphQL.InputType("ContestCombosWhereInput", {})
export class ContestCombosWhereInput {
  @TypeGraphQL.Field(_type => [ContestCombosWhereInput], {
    nullable: true
  })
  AND?: ContestCombosWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosWhereInput], {
    nullable: true
  })
  OR?: ContestCombosWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestCombosWhereInput], {
    nullable: true
  })
  NOT?: ContestCombosWhereInput[] | undefined;

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
