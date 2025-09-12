import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonItemsUpdateInput } from "../../../inputs/PokemonItemsUpdateInput";
import { PokemonItemsWhereUniqueInput } from "../../../inputs/PokemonItemsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonItemsArgs {
  @TypeGraphQL.Field(_type => PokemonItemsUpdateInput, {
    nullable: false
  })
  data!: PokemonItemsUpdateInput;

  @TypeGraphQL.Field(_type => PokemonItemsWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonItemsWhereUniqueInput;
}
