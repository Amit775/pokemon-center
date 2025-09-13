import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEvolutionWhereInput } from "../../inputs/PokemonEvolutionWhereInput";

@TypeGraphQL.ArgsType()
export class ItemsCountTriggerItemsArgs {
  @TypeGraphQL.Field(_type => PokemonEvolutionWhereInput, {
    nullable: true
  })
  where?: PokemonEvolutionWhereInput | undefined;
}
