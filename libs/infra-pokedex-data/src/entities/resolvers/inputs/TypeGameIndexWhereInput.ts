import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationRelationFilter } from "../inputs/GenerationRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TypeRelationFilter } from "../inputs/TypeRelationFilter";

@TypeGraphQL.InputType("TypeGameIndexWhereInput", {})
export class TypeGameIndexWhereInput {
  @TypeGraphQL.Field(_type => [TypeGameIndexWhereInput], {
    nullable: true
  })
  AND?: TypeGameIndexWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexWhereInput], {
    nullable: true
  })
  OR?: TypeGameIndexWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndexWhereInput], {
    nullable: true
  })
  NOT?: TypeGameIndexWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  game_index?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => TypeRelationFilter, {
    nullable: true
  })
  type?: TypeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationRelationFilter, {
    nullable: true
  })
  generation?: GenerationRelationFilter | undefined;
}
