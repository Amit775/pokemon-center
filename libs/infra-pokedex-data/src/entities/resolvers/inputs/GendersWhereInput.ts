import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GendersWhereInput", {})
export class GendersWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  evolution?: PokemonEvolutionListRelationFilter | undefined;
}
