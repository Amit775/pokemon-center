import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupsWhereInput } from "../inputs/EggGroupsWhereInput";
import { PokemonEggGroupsListRelationFilter } from "../inputs/PokemonEggGroupsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EggGroupsWhereUniqueInput", {})
export class EggGroupsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [EggGroupsWhereInput], {
    nullable: true
  })
  AND?: EggGroupsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EggGroupsWhereInput], {
    nullable: true
  })
  OR?: EggGroupsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EggGroupsWhereInput], {
    nullable: true
  })
  NOT?: EggGroupsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsListRelationFilter, {
    nullable: true
  })
  species?: PokemonEggGroupsListRelationFilter | undefined;
}
