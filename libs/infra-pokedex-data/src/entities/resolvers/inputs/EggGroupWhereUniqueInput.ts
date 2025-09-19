import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupWhereInput } from "../inputs/EggGroupWhereInput";
import { PokemonEggGroupListRelationFilter } from "../inputs/PokemonEggGroupListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EggGroupWhereUniqueInput", {})
export class EggGroupWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [EggGroupWhereInput], {
    nullable: true
  })
  AND?: EggGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EggGroupWhereInput], {
    nullable: true
  })
  OR?: EggGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EggGroupWhereInput], {
    nullable: true
  })
  NOT?: EggGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupListRelationFilter, {
    nullable: true
  })
  species?: PokemonEggGroupListRelationFilter | undefined;
}
