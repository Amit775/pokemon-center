import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateWithoutLocationInput } from "../inputs/PokemonEvolutionCreateWithoutLocationInput";
import { PokemonEvolutionUpdateWithoutLocationInput } from "../inputs/PokemonEvolutionUpdateWithoutLocationInput";
import { PokemonEvolutionWhereUniqueInput } from "../inputs/PokemonEvolutionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput", {})
export class PokemonEvolutionUpsertWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonEvolutionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateWithoutLocationInput, {
    nullable: false
  })
  update!: PokemonEvolutionUpdateWithoutLocationInput;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateWithoutLocationInput, {
    nullable: false
  })
  create!: PokemonEvolutionCreateWithoutLocationInput;
}
