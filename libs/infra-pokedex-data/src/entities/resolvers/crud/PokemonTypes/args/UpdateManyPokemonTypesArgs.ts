import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypesUpdateManyMutationInput } from "../../../inputs/PokemonTypesUpdateManyMutationInput";
import { PokemonTypesWhereInput } from "../../../inputs/PokemonTypesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonTypesArgs {
  @TypeGraphQL.Field(_type => PokemonTypesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonTypesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonTypesWhereInput, {
    nullable: true
  })
  where?: PokemonTypesWhereInput | undefined;
}
