import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormGenerationScalarWhereInput } from "../inputs/PokemonFormGenerationScalarWhereInput";
import { PokemonFormGenerationUpdateManyMutationInput } from "../inputs/PokemonFormGenerationUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonFormGenerationUpdateManyWithWhereWithoutGenerationInput", {})
export class PokemonFormGenerationUpdateManyWithWhereWithoutGenerationInput {
  @TypeGraphQL.Field(_type => PokemonFormGenerationScalarWhereInput, {
    nullable: false
  })
  where!: PokemonFormGenerationScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonFormGenerationUpdateManyMutationInput;
}
