import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MoveListRelationFilter } from "../inputs/MoveListRelationFilter";

@TypeGraphQL.InputType("SuperContestEffectWhereInput", {})
export class SuperContestEffectWhereInput {
  @TypeGraphQL.Field(_type => [SuperContestEffectWhereInput], {
    nullable: true
  })
  AND?: SuperContestEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectWhereInput], {
    nullable: true
  })
  OR?: SuperContestEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectWhereInput], {
    nullable: true
  })
  NOT?: SuperContestEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  appeal?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MoveListRelationFilter, {
    nullable: true
  })
  moves?: MoveListRelationFilter | undefined;
}
