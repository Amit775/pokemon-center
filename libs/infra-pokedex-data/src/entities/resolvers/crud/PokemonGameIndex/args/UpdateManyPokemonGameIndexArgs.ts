import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonGameIndexUpdateManyMutationInput } from "../../../inputs/PokemonGameIndexUpdateManyMutationInput";
import { PokemonGameIndexWhereInput } from "../../../inputs/PokemonGameIndexWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonGameIndexArgs {
  @TypeGraphQL.Field(_type => PokemonGameIndexUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonGameIndexUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonGameIndexWhereInput, {
    nullable: true
  })
  where?: PokemonGameIndexWhereInput | undefined;
}
