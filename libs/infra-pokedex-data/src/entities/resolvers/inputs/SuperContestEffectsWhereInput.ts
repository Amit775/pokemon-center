import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MovesListRelationFilter } from "../inputs/MovesListRelationFilter";

@TypeGraphQL.InputType("SuperContestEffectsWhereInput", {})
export class SuperContestEffectsWhereInput {
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
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  appeal?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MovesListRelationFilter, {
    nullable: true
  })
  moves?: MovesListRelationFilter | undefined;
}
