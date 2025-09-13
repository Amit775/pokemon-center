import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemsWhereInput } from "../../inputs/PokemonItemsWhereInput";

@TypeGraphQL.ArgsType()
export class ItemsCountPokemonItemsArgs {
  @TypeGraphQL.Field(_type => PokemonItemsWhereInput, {
    nullable: true
  })
  where?: PokemonItemsWhereInput | undefined;
}
