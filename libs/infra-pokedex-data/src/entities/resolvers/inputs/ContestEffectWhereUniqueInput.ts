import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestEffectWhereInput } from "../inputs/ContestEffectWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { MoveListRelationFilter } from "../inputs/MoveListRelationFilter";

@TypeGraphQL.InputType("ContestEffectWhereUniqueInput", {})
export class ContestEffectWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectWhereInput], {
    nullable: true
  })
  AND?: ContestEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectWhereInput], {
    nullable: true
  })
  OR?: ContestEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContestEffectWhereInput], {
    nullable: true
  })
  NOT?: ContestEffectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  appeal?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  jam?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MoveListRelationFilter, {
    nullable: true
  })
  moves?: MoveListRelationFilter | undefined;
}
