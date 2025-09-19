import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationRelationFilter } from "../inputs/GenerationRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TypeGameIndexWhereInput } from "../inputs/TypeGameIndexWhereInput";
import { TypeGameIndicesType_idGeneration_idCompoundUniqueInput } from "../inputs/TypeGameIndicesType_idGeneration_idCompoundUniqueInput";
import { TypeRelationFilter } from "../inputs/TypeRelationFilter";

@TypeGraphQL.InputType("TypeGameIndexWhereUniqueInput", {})
export class TypeGameIndexWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGameIndicesType_idGeneration_idCompoundUniqueInput, {
    nullable: true
  })
  type_id_generation_id?: TypeGameIndicesType_idGeneration_idCompoundUniqueInput | undefined;

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
