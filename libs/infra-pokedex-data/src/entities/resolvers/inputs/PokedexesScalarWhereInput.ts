import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PokedexesScalarWhereInput", {})
export class PokedexesScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokedexesScalarWhereInput], {
    nullable: true
  })
  AND?: PokedexesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesScalarWhereInput], {
    nullable: true
  })
  OR?: PokedexesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokedexesScalarWhereInput], {
    nullable: true
  })
  NOT?: PokedexesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  region_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  is_main_series?: IntFilter | undefined;
}
