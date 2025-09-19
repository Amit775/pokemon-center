import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveUpdateManyMutationInput } from "../../../inputs/PokemonMoveUpdateManyMutationInput";
import { PokemonMoveWhereInput } from "../../../inputs/PokemonMoveWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonMoveArgs {
  @TypeGraphQL.Field(_type => PokemonMoveUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonMoveUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonMoveWhereInput, {
    nullable: true
  })
  where?: PokemonMoveWhereInput | undefined;
}
