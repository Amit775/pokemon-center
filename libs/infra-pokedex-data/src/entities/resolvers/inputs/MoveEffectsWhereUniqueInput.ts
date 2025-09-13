import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectsWhereInput } from "../inputs/MoveEffectsWhereInput";
import { MovesListRelationFilter } from "../inputs/MovesListRelationFilter";

@TypeGraphQL.InputType("MoveEffectsWhereUniqueInput", {})
export class MoveEffectsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => MovesListRelationFilter, {
    nullable: true
  })
  moves?: MovesListRelationFilter | undefined;
}
