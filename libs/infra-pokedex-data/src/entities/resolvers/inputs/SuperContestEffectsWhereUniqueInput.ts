import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MovesListRelationFilter } from "../inputs/MovesListRelationFilter";
import { SuperContestEffectsWhereInput } from "../inputs/SuperContestEffectsWhereInput";

@TypeGraphQL.InputType("SuperContestEffectsWhereUniqueInput", {})
export class SuperContestEffectsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectsWhereInput], {
    nullable: true
  })
  AND?: SuperContestEffectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectsWhereInput], {
    nullable: true
  })
  OR?: SuperContestEffectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuperContestEffectsWhereInput], {
    nullable: true
  })
  NOT?: SuperContestEffectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  appeal?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MovesListRelationFilter, {
    nullable: true
  })
  moves?: MovesListRelationFilter | undefined;
}
