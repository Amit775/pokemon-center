import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationUpdateWithoutGenerationInput } from "../inputs/PokemonFormGenerationUpdateWithoutGenerationInput";
import { PokemonFormGenerationWhereUniqueInput } from "../inputs/PokemonFormGenerationWhereUniqueInput";

@TypeGraphQL.InputType("PokemonFormGenerationUpdateWithWhereUniqueWithoutGenerationInput", {})
export class PokemonFormGenerationUpdateWithWhereUniqueWithoutGenerationInput {
  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormGenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationUpdateWithoutGenerationInput, {
    nullable: false
  })
  data!: PokemonFormGenerationUpdateWithoutGenerationInput;
}
