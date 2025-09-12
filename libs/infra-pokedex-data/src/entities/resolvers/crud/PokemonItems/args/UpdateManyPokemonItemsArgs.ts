import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemsUpdateManyMutationInput } from "../../../inputs/PokemonItemsUpdateManyMutationInput";
import { PokemonItemsWhereInput } from "../../../inputs/PokemonItemsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonItemsArgs {
  @TypeGraphQL.Field(_type => PokemonItemsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonItemsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonItemsWhereInput, {
    nullable: true
  })
  where?: PokemonItemsWhereInput | undefined;
}
