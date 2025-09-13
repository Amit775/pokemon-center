import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsUpdateWithoutGenerationInput } from "../inputs/PokemonFormGenerationsUpdateWithoutGenerationInput";
import { PokemonFormGenerationsWhereUniqueInput } from "../inputs/PokemonFormGenerationsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput", {})
export class PokemonFormGenerationsUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: PokemonFormGenerationsUpdateWithoutGenerationInput;
}
