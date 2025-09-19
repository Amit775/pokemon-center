import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemUpdateManyMutationInput } from "../../../inputs/PokemonItemUpdateManyMutationInput";
import { PokemonItemWhereInput } from "../../../inputs/PokemonItemWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonItemArgs {
  @TypeGraphQL.Field(_type => PokemonItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonItemUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonItemWhereInput, {
    nullable: true
  })
  where?: PokemonItemWhereInput | undefined;
}
