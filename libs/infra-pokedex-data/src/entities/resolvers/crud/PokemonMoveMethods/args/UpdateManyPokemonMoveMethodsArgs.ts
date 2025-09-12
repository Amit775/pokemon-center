import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodsUpdateManyMutationInput } from "../../../inputs/PokemonMoveMethodsUpdateManyMutationInput";
import { PokemonMoveMethodsWhereInput } from "../../../inputs/PokemonMoveMethodsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonMoveMethodsArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonMoveMethodsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodsWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodsWhereInput | undefined;
}
