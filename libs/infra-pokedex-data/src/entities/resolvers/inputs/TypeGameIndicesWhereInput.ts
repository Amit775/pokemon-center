import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsRelationFilter } from "../inputs/GenerationsRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TypesRelationFilter } from "../inputs/TypesRelationFilter";

@TypeGraphQL.InputType("TypeGameIndicesWhereInput", {})
export class TypeGameIndicesWhereInput {
  @TypeGraphQL.Field(_type => [TypeGameIndicesWhereInput], {
    nullable: true
  })
  AND?: TypeGameIndicesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesWhereInput], {
    nullable: true
  })
  OR?: TypeGameIndicesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeGameIndicesWhereInput], {
    nullable: true
  })
  NOT?: TypeGameIndicesWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => TypesRelationFilter, {
    nullable: true
  })
  type?: TypesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GenerationsRelationFilter, {
    nullable: true
  })
  generation?: GenerationsRelationFilter | undefined;
}
