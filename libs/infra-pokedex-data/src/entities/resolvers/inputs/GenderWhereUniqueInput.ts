import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenderWhereInput } from "../inputs/GenderWhereInput";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GenderWhereUniqueInput", {})
export class GenderWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [GenderWhereInput], {
    nullable: true
  })
  AND?: GenderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenderWhereInput], {
    nullable: true
  })
  OR?: GenderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenderWhereInput], {
    nullable: true
  })
  NOT?: GenderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  evolution?: PokemonEvolutionListRelationFilter | undefined;
}
