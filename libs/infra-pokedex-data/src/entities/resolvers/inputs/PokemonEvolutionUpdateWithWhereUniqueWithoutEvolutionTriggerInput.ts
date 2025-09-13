import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionUpdateWithoutEvolutionTriggerInput } from "../inputs/PokemonEvolutionUpdateWithoutEvolutionTriggerInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput", {})
export class PokemonEvolutionUpdateWithWhereUniqueWithoutEvolutionTriggerInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutEvolutionTriggerInput, {
    nullable: false
  })
  data!: PokemonEvolutionUpdateWithoutEvolutionTriggerInput;
}
