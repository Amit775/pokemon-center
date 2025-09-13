import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggersWhereInput } from "../inputs/EvolutionTriggersWhereInput";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EvolutionTriggersWhereUniqueInput", {})
export class EvolutionTriggersWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggersWhereInput], {
    nullable: true
  })
  AND?: EvolutionTriggersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggersWhereInput], {
    nullable: true
  })
  OR?: EvolutionTriggersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggersWhereInput], {
    nullable: true
  })
  NOT?: EvolutionTriggersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  evolution?: PokemonEvolutionListRelationFilter | undefined;
}
