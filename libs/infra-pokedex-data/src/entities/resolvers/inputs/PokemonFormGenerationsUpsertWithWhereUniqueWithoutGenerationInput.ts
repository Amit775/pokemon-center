import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationsCreateWithoutGenerationInput } from "../inputs/PokemonFormGenerationsCreateWithoutGenerationInput";
import { PokemonFormGenerationsUpdateWithoutGenerationInput } from "../inputs/PokemonFormGenerationsUpdateWithoutGenerationInput";
import { PokemonFormGenerationsWhereUniqueInput } from "../inputs/PokemonFormGenerationsWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput", {})
export class PokemonFormGenerationsUpsertWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsUpdateWithoutGenerationInput, {
    nullable: false
  })
  update!: PokemonFormGenerationsUpdateWithoutGenerationInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsCreateWithoutGenerationInput, {
    nullable: false
  })
  create!: PokemonFormGenerationsCreateWithoutGenerationInput;
}
