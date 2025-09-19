import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationUpdateManyMutationInput } from "../../../inputs/PokemonFormGenerationUpdateManyMutationInput";
import { PokemonFormGenerationWhereInput } from "../../../inputs/PokemonFormGenerationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonFormGenerationArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonFormGenerationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationWhereInput, {
    nullable: true
  })
  where?: PokemonFormGenerationWhereInput | undefined;
}
