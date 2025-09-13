import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionUpdateWithoutGenderInput } from "../inputs/PokemonEvolutionUpdateWithoutGenderInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput", {})
export class PokemonEvolutionUpdateWithWhereUniqueWithoutGenderInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutGenderInput, {
    nullable: false
  })
  data!: PokemonEvolutionUpdateWithoutGenderInput;
}
