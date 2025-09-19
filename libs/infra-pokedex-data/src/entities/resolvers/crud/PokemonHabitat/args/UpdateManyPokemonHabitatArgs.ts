import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatUpdateManyMutationInput } from "../../../inputs/PokemonHabitatUpdateManyMutationInput";
import { PokemonHabitatWhereInput } from "../../../inputs/PokemonHabitatWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonHabitatArgs {
  @TypeGraphQL.Field(_type => PokemonHabitatUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonHabitatUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonHabitatWhereInput, {
    nullable: true
  })
  where?: PokemonHabitatWhereInput | undefined;
}
