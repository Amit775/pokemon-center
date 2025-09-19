import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorUpdateManyMutationInput } from "../../../inputs/PokemonColorUpdateManyMutationInput";
import { PokemonColorWhereInput } from "../../../inputs/PokemonColorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonColorArgs {
  @TypeGraphQL.Field(_type => PokemonColorUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonColorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonColorWhereInput, {
    nullable: true
  })
  where?: PokemonColorWhereInput | undefined;
}
