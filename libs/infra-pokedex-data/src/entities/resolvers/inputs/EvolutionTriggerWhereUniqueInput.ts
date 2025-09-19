import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggerWhereInput } from "../inputs/EvolutionTriggerWhereInput";
import { PokemonEvolutionListRelationFilter } from "../inputs/PokemonEvolutionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EvolutionTriggerWhereUniqueInput", {})
export class EvolutionTriggerWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggerWhereInput], {
    nullable: true
  })
  AND?: EvolutionTriggerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggerWhereInput], {
    nullable: true
  })
  OR?: EvolutionTriggerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EvolutionTriggerWhereInput], {
    nullable: true
  })
  NOT?: EvolutionTriggerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionListRelationFilter, {
    nullable: true
  })
  evolution?: PokemonEvolutionListRelationFilter | undefined;
}
