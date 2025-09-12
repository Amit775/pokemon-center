import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormGenerationsUpdateManyMutationInput } from "../../../inputs/PokemonFormGenerationsUpdateManyMutationInput";
import { PokemonFormGenerationsWhereInput } from "../../../inputs/PokemonFormGenerationsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonFormGenerationsArgs {
  @TypeGraphQL.Field(_type => PokemonFormGenerationsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonFormGenerationsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsWhereInput, {
    nullable: true
  })
  where?: PokemonFormGenerationsWhereInput | undefined;
}
