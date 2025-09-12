import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormsUpdateManyMutationInput } from "../../../inputs/PokemonFormsUpdateManyMutationInput";
import { PokemonFormsWhereInput } from "../../../inputs/PokemonFormsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonFormsArgs {
  @TypeGraphQL.Field(_type => PokemonFormsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonFormsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonFormsWhereInput, {
    nullable: true
  })
  where?: PokemonFormsWhereInput | undefined;
}
