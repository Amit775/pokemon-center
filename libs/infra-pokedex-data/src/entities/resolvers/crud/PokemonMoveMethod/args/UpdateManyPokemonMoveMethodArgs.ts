import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodUpdateManyMutationInput } from "../../../inputs/PokemonMoveMethodUpdateManyMutationInput";
import { PokemonMoveMethodWhereInput } from "../../../inputs/PokemonMoveMethodWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonMoveMethodUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereInput, {
    nullable: true
  })
  where?: PokemonMoveMethodWhereInput | undefined;
}
