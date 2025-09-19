import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemUpdateInput } from "../../../inputs/PokemonItemUpdateInput";
import { PokemonItemWhereUniqueInput } from "../../../inputs/PokemonItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonItemArgs {
  @TypeGraphQL.Field(_type => PokemonItemUpdateInput, {
    nullable: false
  })
  data!: PokemonItemUpdateInput;

  @TypeGraphQL.Field(_type => PokemonItemWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemWhereUniqueInput;
}
