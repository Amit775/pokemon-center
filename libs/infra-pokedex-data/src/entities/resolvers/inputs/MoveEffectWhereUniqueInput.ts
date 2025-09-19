import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveEffectWhereInput } from "../inputs/MoveEffectWhereInput";
import { MoveListRelationFilter } from "../inputs/MoveListRelationFilter";

@TypeGraphQL.InputType("MoveEffectWhereUniqueInput", {})
export class MoveEffectWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectWhereInput], {
    nullable: true
  })
  AND?: MoveEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectWhereInput], {
    nullable: true
  })
  OR?: MoveEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MoveEffectWhereInput], {
    nullable: true
  })
  NOT?: MoveEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveListRelationFilter, {
    nullable: true
  })
  moves?: MoveListRelationFilter | undefined;
}
