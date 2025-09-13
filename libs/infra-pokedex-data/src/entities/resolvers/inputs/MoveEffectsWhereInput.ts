import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MovesListRelationFilter } from "../inputs/MovesListRelationFilter";

@TypeGraphQL.InputType("MoveEffectsWhereInput", {})
export class MoveEffectsWhereInput {
  @TypeGraphQL.Field(_type => [MoveEffectsWhereInput], {
    nullable: true
  })
  AND?: MoveEffectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectsWhereInput], {
    nullable: true
  })
  OR?: MoveEffectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectsWhereInput], {
    nullable: true
  })
  NOT?: MoveEffectsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MovesListRelationFilter, {
    nullable: true
  })
  moves?: MovesListRelationFilter | undefined;
}
