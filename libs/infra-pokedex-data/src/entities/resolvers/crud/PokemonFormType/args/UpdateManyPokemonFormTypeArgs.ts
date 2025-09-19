import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypeUpdateManyMutationInput } from "../../../inputs/PokemonFormTypeUpdateManyMutationInput";
import { PokemonFormTypeWhereInput } from "../../../inputs/PokemonFormTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonFormTypeArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonFormTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonFormTypeWhereInput, {
    nullable: true
  })
  where?: PokemonFormTypeWhereInput | undefined;
}
