import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GenderWhereInput", {})
export class GenderWhereInput {
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
