import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemWhereInput } from "../../inputs/PokemonItemWhereInput";

@TypeGraphQL.ArgsType()
export class PokemonCountItemsArgs {
  @TypeGraphQL.Field(_type => PokemonItemWhereInput, {
    nullable: true
  })
  where?: PokemonItemWhereInput | undefined;
}
