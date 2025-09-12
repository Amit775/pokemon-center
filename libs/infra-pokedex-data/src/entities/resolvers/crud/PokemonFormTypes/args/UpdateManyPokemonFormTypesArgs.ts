import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormTypesUpdateManyMutationInput } from "../../../inputs/PokemonFormTypesUpdateManyMutationInput";
import { PokemonFormTypesWhereInput } from "../../../inputs/PokemonFormTypesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonFormTypesArgs {
  @TypeGraphQL.Field(_type => PokemonFormTypesUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonFormTypesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonFormTypesWhereInput, {
    nullable: true
  })
  where?: PokemonFormTypesWhereInput | undefined;
}
