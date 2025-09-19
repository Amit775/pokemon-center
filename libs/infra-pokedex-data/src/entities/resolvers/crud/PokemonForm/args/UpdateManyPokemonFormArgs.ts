import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormUpdateManyMutationInput } from "../../../inputs/PokemonFormUpdateManyMutationInput";
import { PokemonFormWhereInput } from "../../../inputs/PokemonFormWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonFormArgs {
  @TypeGraphQL.Field(_type => PokemonFormUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonFormUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonFormWhereInput, {
    nullable: true
  })
  where?: PokemonFormWhereInput | undefined;
}
