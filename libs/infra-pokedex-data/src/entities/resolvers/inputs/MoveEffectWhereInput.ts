import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MoveListRelationFilter } from "../inputs/MoveListRelationFilter";

@TypeGraphQL.InputType("MoveEffectWhereInput", {})
export class MoveEffectWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MoveListRelationFilter, {
    nullable: true
  })
  moves?: MoveListRelationFilter | undefined;
}
