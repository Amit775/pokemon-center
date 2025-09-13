import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionUpdateWithoutTriggerItemInput } from "../inputs/PokemonEvolutionUpdateWithoutTriggerItemInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput", {})
export class PokemonEvolutionUpdateWithWhereUniqueWithoutTriggerItemInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutTriggerItemInput, {
    nullable: false
  })
  data!: PokemonEvolutionUpdateWithoutTriggerItemInput;
}
