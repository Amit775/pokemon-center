import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GendersWhereInput } from "../inputs/GendersWhereInput";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GendersWhereUniqueInput", {})
export class GendersWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [GendersWhereInput], {
    nullable: true
  })
  AND?: GendersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GendersWhereInput], {
    nullable: true
  })
  OR?: GendersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GendersWhereInput], {
    nullable: true
  })
  NOT?: GendersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  evolution?: PokemonEvolutionListRelationFilter | undefined;
}
