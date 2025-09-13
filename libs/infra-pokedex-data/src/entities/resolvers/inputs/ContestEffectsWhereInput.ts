import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MovesListRelationFilter } from "../inputs/MovesListRelationFilter";

@TypeGraphQL.InputType("ContestEffectsWhereInput", {})
export class ContestEffectsWhereInput {
  @TypeGraphQL.Field(_type => [ContestEffectsWhereInput], {
    nullable: true
  })
  AND?: ContestEffectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectsWhereInput], {
    nullable: true
  })
  OR?: ContestEffectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectsWhereInput], {
    nullable: true
  })
  NOT?: ContestEffectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  appeal?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  jam?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MovesListRelationFilter, {
    nullable: true
  })
  moves?: MovesListRelationFilter | undefined;
}
