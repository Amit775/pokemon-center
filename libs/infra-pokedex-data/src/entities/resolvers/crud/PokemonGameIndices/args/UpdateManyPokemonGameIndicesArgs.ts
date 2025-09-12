import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndicesUpdateManyMutationInput } from "../../../inputs/PokemonGameIndicesUpdateManyMutationInput";
import { PokemonGameIndicesWhereInput } from "../../../inputs/PokemonGameIndicesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonGameIndicesArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndicesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonGameIndicesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonGameIndicesWhereInput, {
    nullable: true
  })
  where?: PokemonGameIndicesWhereInput | undefined;
}
