import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutGenderInput } from "../inputs/PokemonEvolutionCreateWithoutGenderInput";
import { PokemonEvolutionUpdateWithoutGenderInput } from "../inputs/PokemonEvolutionUpdateWithoutGenderInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput", {})
export class PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutGenderInput, {
    nullable: false
  })
  update!: PokemonEvolutionUpdateWithoutGenderInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutGenderInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutGenderInput;
}
