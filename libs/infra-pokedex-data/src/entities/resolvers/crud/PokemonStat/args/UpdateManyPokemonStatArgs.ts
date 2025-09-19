import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatUpdateManyMutationInput } from "../../../inputs/PokemonStatUpdateManyMutationInput";
import { PokemonStatWhereInput } from "../../../inputs/PokemonStatWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonStatArgs {
  @TypeGraphQL.Field(_type => PokemonStatUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonStatUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonStatWhereInput, {
    nullable: true
  })
  where?: PokemonStatWhereInput | undefined;
}
